import answerKeys from './answerKeys.json';

// 這個Worker是瀏覽器跟Google Sheet成績上傳之間唯一的橋樑：
// 1. /grade：competition模式課程用（本機JS已經不含expectedOutput），
//    用這份私密的answerKeys.json比對，只回傳通過/未通過，絕不回傳正確答案本身。
// 2. /submit-score：所有課程都改走這裡送分數，Worker用自己的答案重新計算分數
//    （不信任前端聲稱的score/passed/total），算完才用只有Worker知道的UPLOAD_TOKEN
//    呼叫Google Apps Script寫入Sheet，瀏覽器端不再、也不能直接呼叫Apps Script URL。

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

function parseAllowedOrigins(env) {
  return (env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
}

// 跟src/main.js的normalizeOutputForCompare()保持一致，避免Worker跟本機比對結果不一致。
function normalizeOutputForCompare(output = '') {
  return String(output)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trimEnd();
}

function getAssessmentScore(passedCount = 0, totalCount = 0) {
  if (!totalCount) return 0;
  return Math.round((passedCount / totalCount) * 100);
}

// 用courseCode/taskId在answerKeys.json裡找出這一題的正確答案；找不到回傳null。
function lookupTaskAnswerKey(courseCode, taskId) {
  const course = answerKeys[String(courseCode || '').toUpperCase()];
  if (!course) return null;
  return course[taskId] || null;
}

// 核心比對邏輯：拿學生送來的actualOutput，跟Worker私密資料裡的正確答案比對。
// 回傳每筆的通過/未通過，以及加總後的score/passed/total/allPassed。
// 絕不把正確答案（expectedOutput）放進回傳值。
function gradeCases(courseCode, taskId, submittedCases) {
  const answerKey = lookupTaskAnswerKey(courseCode, taskId);

  if (!answerKey) {
    return { error: `找不到 ${courseCode}/${taskId} 的評分資料，無法評分。` };
  }

  const results = submittedCases.map((item) => {
    const caseId = String(item?.caseId || '');
    const actualOutput = item?.actualOutput ?? '';
    const expectedOutput = Object.prototype.hasOwnProperty.call(answerKey, caseId)
      ? answerKey[caseId]
      : undefined;

    const passed =
      expectedOutput !== undefined &&
      normalizeOutputForCompare(actualOutput) === normalizeOutputForCompare(expectedOutput);

    return { caseId, passed };
  });

  const total = results.length;
  const passed = results.filter((item) => item.passed).length;

  return {
    results,
    total,
    passed,
    score: getAssessmentScore(passed, total),
    allPassed: total > 0 && passed === total,
  };
}

async function handleGrade(body, headers) {
  const courseCode = String(body.courseId || body.courseCode || '').trim().toUpperCase();
  const taskId = String(body.taskId || '').trim();
  const cases = Array.isArray(body.cases) ? body.cases : [];

  if (!courseCode || !taskId || cases.length === 0) {
    return jsonResponse({ error: '缺少必要欄位（courseId / taskId / cases）' }, 400, headers);
  }

  const graded = gradeCases(courseCode, taskId, cases);

  if (graded.error) {
    return jsonResponse({ error: graded.error }, 404, headers);
  }

  return jsonResponse(graded, 200, headers);
}

async function forwardToAppsScript(env, payload) {
  const token = env.UPLOAD_TOKEN || '';
  const body = token ? { ...payload, token } : payload;
  const bodyBytes = new TextEncoder().encode(JSON.stringify(body));

  // Apps Script的doPost實際上在第一個hop就執行完畢（302轉址只是用來取回回應內容，
  // 手動重送POST到那個位址會變成「Page not found」，讓runtime自動處理redirect即可）。
  const resp = await fetch(env.APPS_SCRIPT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: bodyBytes,
  });

  const text = await resp.text().catch(() => '');
  try {
    return JSON.parse(text);
  } catch {
    return { ok: resp.ok, raw: text.slice(0, 500) };
  }
}

async function handleSubmitScore(body, env, headers) {
  const courseId = String(body.courseId || '').trim().toUpperCase();
  const courseTitle = String(body.courseTitle || '').trim();
  const taskId = String(body.taskId || '').trim();
  const taskTitle = String(body.taskTitle || '').trim();
  const mode = String(body.mode || 'learning').trim();
  const cases = Array.isArray(body.cases) ? body.cases : [];
  const profile = body.profile || {};

  if (!courseId || !taskId || cases.length === 0) {
    return jsonResponse({ error: '缺少必要欄位（courseId / taskId / cases）' }, 400, headers);
  }

  const graded = gradeCases(courseId, taskId, cases);

  if (graded.error) {
    return jsonResponse({ error: graded.error }, 404, headers);
  }

  const appsScriptPayload = {
    className: profile.className || '',
    seatNumber: profile.seatNumber || '',
    studentName: profile.studentName || '',
    studentKey: profile.studentKey || '',
    courseId,
    courseTitle,
    taskId,
    taskTitle,
    mode,
    score: graded.score,
    passed: graded.passed,
    total: graded.total,
    passRate: graded.score,
    allPassed: graded.allPassed,
    version: 'score-grader-v1',
  };

  const sheetResult = await forwardToAppsScript(env, appsScriptPayload);

  return jsonResponse(
    {
      ok: true,
      score: graded.score,
      passed: graded.passed,
      total: graded.total,
      allPassed: graded.allPassed,
      sheet: sheetResult,
    },
    200,
    headers,
  );
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

    const url = new URL(request.url);

    try {
      if (url.pathname === '/grade') {
        return await handleGrade(body, headers);
      }

      if (url.pathname === '/submit-score') {
        return await handleSubmitScore(body, env, headers);
      }
    } catch (error) {
      return jsonResponse({ error: String(error?.message || error) }, 500, headers);
    }

    return jsonResponse({ error: '找不到這個路徑' }, 404, headers);
  },
};
