// 教師後台：per-task範例答案(starterXml)覆寫 + 教師備註(note，用來標記「這題內容有誤」)。
//
// 資料模型：每個courseCode對應KV裡的一筆值，內容是 { [taskId]: TaskOverride }。
// TaskOverride = { starterXml, loadable, note, updatedAt }。
// 這樣每個課程一次GET就能拿到全部題目的覆寫，不用每題各打一次API。
//
// GET /overrides?courseCode=XXX：公開讀取，不需要密碼——內容只是範例答案積木跟教師備註，
//   不是機密，學生本來就要先輸入對的課程代碼才會載入到這些資料（跟隱藏課程同一個安全模型）。
// POST /overrides：教師寫入，body需要帶token比對TEACHER_TOKEN密鑰。
//   body: { courseCode, taskId, starterXml, loadable, note }
//   每次送出的是該題「完整」的期望狀態（不是逐欄位patch），由呼叫端（教師UI）組好整包送出。

function corsHeaders(origin, allowedOrigins) {
  const allowOrigin = allowedOrigins.includes(origin) ? origin : allowedOrigins[0];
  return {
    'Access-Control-Allow-Origin': allowOrigin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
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

function normalizeCourseCode(value) {
  return String(value || '').trim().toUpperCase();
}

async function loadCourseOverrides(env, courseCode) {
  const raw = await env.STARTER_KV.get(`course:${courseCode}`);
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

async function handleGetOverrides(url, env, headers) {
  const courseCode = normalizeCourseCode(url.searchParams.get('courseCode'));

  if (!courseCode) {
    return jsonResponse({ error: '缺少courseCode' }, 400, headers);
  }

  const overrides = await loadCourseOverrides(env, courseCode);
  return jsonResponse({ courseCode, overrides }, 200, headers);
}

async function handlePostOverride(body, env, headers) {
  const courseCode = normalizeCourseCode(body.courseCode);
  const taskId = String(body.taskId || '').trim();
  const token = String(body.token || '');

  if (!courseCode || !taskId) {
    return jsonResponse({ error: '缺少courseCode或taskId' }, 400, headers);
  }

  const expectedToken = env.TEACHER_TOKEN || '';
  if (!expectedToken || token !== expectedToken) {
    return jsonResponse({ error: '密碼錯誤' }, 401, headers);
  }

  const overrides = await loadCourseOverrides(env, courseCode);

  overrides[taskId] = {
    starterXml: String(body.starterXml || ''),
    loadable: body.loadable !== false,
    note: String(body.note || ''),
    updatedAt: new Date().toISOString(),
  };

  await env.STARTER_KV.put(`course:${courseCode}`, JSON.stringify(overrides));

  return jsonResponse({ ok: true, courseCode, taskId, override: overrides[taskId] }, 200, headers);
}

export default {
  async fetch(request, env) {
    const allowedOrigins = parseAllowedOrigins(env);
    const origin = request.headers.get('Origin') || '';
    const headers = corsHeaders(origin, allowedOrigins);

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers });
    }

    if (allowedOrigins.length > 0 && !allowedOrigins.includes(origin)) {
      return jsonResponse({ error: '不允許的來源' }, 403, headers);
    }

    const url = new URL(request.url);

    try {
      if (request.method === 'GET' && url.pathname === '/overrides') {
        return await handleGetOverrides(url, env, headers);
      }

      if (request.method === 'POST' && url.pathname === '/overrides') {
        let body;
        try {
          body = await request.json();
        } catch {
          return jsonResponse({ error: '請求格式錯誤' }, 400, headers);
        }
        return await handlePostOverride(body, env, headers);
      }
    } catch (error) {
      return jsonResponse({ error: String(error?.message || error) }, 500, headers);
    }

    return jsonResponse({ error: '找不到這個路徑' }, 404, headers);
  },
};
