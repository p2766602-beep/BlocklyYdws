import { SYSTEM_PROMPT } from './systemPrompt.js';

const RATE_WINDOW_SECONDS = 3600; // 每小時
const DEFAULT_STUDENT_LIMIT_PER_WINDOW = 30; // 單一學生每小時最多幾輪對話
const DEFAULT_COURSE_DAILY_LIMIT = 500; // 單一課程代碼每天最多幾輪對話
const DEFAULT_GLOBAL_DAILY_LIMIT = 2000; // 全站每天最多幾輪對話（總額度硬上限）
const MAX_HISTORY_TURNS = 20; // 只保留最近N輪對話，避免prompt無限增長
const GEMINI_MODEL = 'gemini-flash-lite-latest';

function corsHeaders(origin, allowedOrigins) {
  const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    Vary: 'Origin',
  };
}

function jsonResponse(body, status, headers) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json; charset=utf-8', ...headers },
  });
}

function parseAllowedCourseCodes(env) {
  return (env.ALLOWED_COURSE_CODES || '')
    .split(',')
    .map((s) => s.trim().toUpperCase())
    .filter(Boolean);
}

function parseAllowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

function currentHourBucket() {
  return Math.floor(Date.now() / (RATE_WINDOW_SECONDS * 1000));
}

function currentDayBucket() {
  return new Date().toISOString().slice(0, 10); // YYYY-MM-DD (UTC)
}

// 讀取並遞增KV計數器，回傳遞增後的值。用「讀取→+1→寫回」而非原子操作，
// 教室規模（同時線上頂多30人）在這個精度下足夠，不需要Durable Object等級的嚴謹計數。
async function incrementCounter(kv, key, ttlSeconds) {
  const current = parseInt((await kv.get(key)) || '0', 10);
  const next = current + 1;
  await kv.put(key, String(next), { expirationTtl: ttlSeconds });
  return next;
}

function buildTaskContextText(taskContext) {
  if (!taskContext || typeof taskContext !== 'object') return '（目前沒有題目資料）';
  const { title, description, inputDescription, outputDescription, examples } = taskContext;
  const lines = [];
  if (title) lines.push(`題目名稱：${title}`);
  if (description) lines.push(`題目說明：${description}`);
  if (inputDescription) lines.push(`輸入說明：${inputDescription}`);
  if (outputDescription) lines.push(`輸出說明：${outputDescription}`);
  if (Array.isArray(examples) && examples.length > 0) {
    lines.push('範例：');
    examples.slice(0, 5).forEach((ex, i) => {
      lines.push(`  範例${i + 1}：輸入「${ex.input ?? ''}」→ 輸出「${ex.output ?? ''}」${ex.explanation ? `（${ex.explanation}）` : ''}`);
    });
  }
  return lines.join('\n');
}

function sanitizeHistory(history) {
  if (!Array.isArray(history)) return [];
  return history
    .filter((turn) => turn && (turn.role === 'user' || turn.role === 'model') && typeof turn.text === 'string')
    .slice(-MAX_HISTORY_TURNS)
    .map((turn) => ({
      role: turn.role,
      parts: [{ text: turn.text.slice(0, 4000) }],
    }));
}

async function callGemini(env, taskContext, history, message) {
  const contents = [
    {
      role: 'user',
      parts: [{ text: `【目前題目脈絡，僅供你理解背景，不要直接朗讀給學生】\n${buildTaskContextText(taskContext)}` }],
    },
    {
      role: 'model',
      parts: [{ text: '收到，我會依照角色設定引導學生，不會直接把題目脈絡念出來或提供答案。' }],
    },
    ...sanitizeHistory(history),
    { role: 'user', parts: [{ text: message.slice(0, 4000) }] },
  ];

  const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;
  const resp = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
      contents,
      generationConfig: { temperature: 0.7, maxOutputTokens: 1024 },
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    throw new Error(`Gemini API 錯誤 ${resp.status}: ${errText.slice(0, 500)}`);
  }

  const data = await resp.json();
  const text = data?.candidates?.[0]?.content?.parts?.map((p) => p.text || '').join('') || '';
  if (!text) throw new Error('Gemini API 回應沒有內容');
  return text;
}

export default {
  async fetch(request, env) {
    const allowedOrigins = parseAllowedOrigins(env);
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin, allowedOrigins);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (request.method !== 'POST') {
      return jsonResponse({ error: 'Method Not Allowed' }, 405, headers);
    }

    if (allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) {
      return jsonResponse({ error: '不允許的來源' }, 403, headers);
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return jsonResponse({ error: '請求格式錯誤' }, 400, headers);
    }

    const courseCode = String(body.courseCode || '').trim().toUpperCase();
    const studentId = String(body.studentId || '').trim().slice(0, 100);
    const message = String(body.message || '').trim();
    const taskContext = body.taskContext;
    const history = body.history;

    if (!courseCode || !studentId || !message) {
      return jsonResponse({ error: '缺少必要欄位（courseCode / studentId / message）' }, 400, headers);
    }

    const allowedCourseCodes = parseAllowedCourseCodes(env);
    if (!allowedCourseCodes.includes(courseCode)) {
      return jsonResponse({ error: '這個課程代碼尚未開放 AI 伴學功能' }, 403, headers);
    }

    const kv = env.AI_COMPANION_KV;
    const hourBucket = currentHourBucket();
    const dayBucket = currentDayBucket();

    const globalDailyKey = `global:${dayBucket}`;
    const globalDailyLimit = parseInt(env.GLOBAL_DAILY_LIMIT || String(DEFAULT_GLOBAL_DAILY_LIMIT), 10);
    const globalCount = parseInt((await kv.get(globalDailyKey)) || '0', 10);
    if (globalCount >= globalDailyLimit) {
      return jsonResponse({ error: '今天的 AI 伴學總額度已用完，請明天再試，或聯絡老師。' }, 429, headers);
    }

    const courseDailyKey = `course:${courseCode}:${dayBucket}`;
    const courseDailyLimit = parseInt(env.COURSE_DAILY_LIMIT || String(DEFAULT_COURSE_DAILY_LIMIT), 10);
    const courseCount = parseInt((await kv.get(courseDailyKey)) || '0', 10);
    if (courseCount >= courseDailyLimit) {
      return jsonResponse({ error: '這個課程今天的 AI 伴學額度已用完，請明天再試。' }, 429, headers);
    }

    const studentHourKey = `student:${courseCode}:${studentId}:${hourBucket}`;
    const studentHourLimit = parseInt(env.STUDENT_HOURLY_LIMIT || String(DEFAULT_STUDENT_LIMIT_PER_WINDOW), 10);
    const studentCount = parseInt((await kv.get(studentHourKey)) || '0', 10);
    if (studentCount >= studentHourLimit) {
      return jsonResponse({ error: '你這一小時問得有點多，先動手試試看，等一下再回來問我！' }, 429, headers);
    }

    let reply;
    try {
      reply = await callGemini(env, taskContext, history, message);
    } catch (err) {
      return jsonResponse({ error: 'AI 服務暫時無法回應，請稍後再試。' }, 502, headers);
    }

    await Promise.all([
      incrementCounter(kv, globalDailyKey, 90 * 24 * 3600),
      incrementCounter(kv, courseDailyKey, 90 * 24 * 3600),
      incrementCounter(kv, studentHourKey, RATE_WINDOW_SECONDS),
    ]);

    return jsonResponse({ reply }, 200, headers);
  },
};
