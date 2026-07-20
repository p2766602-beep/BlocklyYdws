// 不使用 eager:true，避免所有課程（含隱藏課程）在頁面載入當下就整包送進瀏覽器。
// 每個課程檔會被 Vite 各自切成獨立的 chunk，只有在使用者實際輸入對應課程代碼時才會被抓取。
const courseLoaders = import.meta.glob(['./*.js', '!./index.js', '!./smartring-tasks.js']);

const resolvedCourseCache = new Map();

export function normalizeCourseCode(code) {
  return String(code || '').trim().toUpperCase();
}

function getCourseCodeFromPath(path) {
  const filename = String(path || '').split('/').pop() || '';
  return normalizeCourseCode(filename.replace(/\.js$/i, ''));
}

function isCourseObject(value) {
  return Boolean(
    value &&
      typeof value === 'object' &&
      !Array.isArray(value) &&
      Array.isArray(value.tasks) &&
      (value.id || value.code || value.title)
  );
}

function normalizeTask(task, courseId, index) {
  if (!task || typeof task !== 'object') {
    return {
      id: `${courseId}-${String(index + 1).padStart(2, '0')}`,
      title: `題目 ${index + 1}`,
    };
  }

  return {
    ...task,
    id: task.id || `${courseId}-${String(index + 1).padStart(2, '0')}`,
    title: task.title || task.problemTitle || `題目 ${index + 1}`,
  };
}

function normalizeCourseGroup(course, fallbackCode) {
  if (!isCourseObject(course)) return null;

  const fileCode = normalizeCourseCode(fallbackCode);
  const declaredCode = normalizeCourseCode(course.code || course.id);
  const id = declaredCode || fileCode;
  if (!id) return null;

  if (fileCode && declaredCode && fileCode !== declaredCode) {
    console.warn(
      `[Blockly Lab] 課程檔名與課程代碼不一致：檔名 ${fileCode}.js，course.code/id 為 ${declaredCode}。建議題庫轉換器輸出時保持一致。`
    );
  }

  const tasks = (course.tasks || []).map((task, index) => normalizeTask(task, id, index));
  const defaultTaskId = course.defaultTaskId || tasks[0]?.id || '';

  return {
    ...course,
    id,
    code: course.code || id,
    title: course.title || id,
    mode: course.mode || 'learning',
    type: course.type || (id.startsWith('SR') ? 'smartring' : 'programming'),
    tasks,
    defaultTaskId,
    sourceFileCode: fileCode,
  };
}

function extractCourseGroup(module, path) {
  const codeFromPath = getCourseCodeFromPath(path);

  const candidates = [
    module?.default,
    module?.[codeFromPath],
    ...Object.values(module || {}),
  ];

  for (const candidate of candidates) {
    const normalized = normalizeCourseGroup(candidate, codeFromPath);
    if (normalized) return normalized;
  }

  return null;
}

// path -> 檔名推得的課程代碼，只需解析路徑字串，不需要載入模組內容，可同步建立。
const pathsByFileCode = new Map();
Object.keys(courseLoaders).forEach((path) => {
  pathsByFileCode.set(getCourseCodeFromPath(path), path);
});

async function loadCourseGroupByPath(path) {
  if (resolvedCourseCache.has(path)) return resolvedCourseCache.get(path);

  const loader = courseLoaders[path];
  if (!loader) return null;

  const module = await loader();
  const courseGroup = extractCourseGroup(module, path);
  resolvedCourseCache.set(path, courseGroup);
  return courseGroup;
}

export async function getCourseGroup(code) {
  const normalized = normalizeCourseCode(code);
  if (!normalized) return null;

  const path = pathsByFileCode.get(normalized);
  if (!path) return null;

  return loadCourseGroupByPath(path);
}

export function getAvailableCourseGroupCodes() {
  return Array.from(pathsByFileCode.keys()).sort();
}

export async function getAllCourseGroups() {
  const uniqueGroups = new Map();

  await Promise.all(
    Array.from(pathsByFileCode.values()).map(async (path) => {
      const courseGroup = await loadCourseGroupByPath(path);
      if (!courseGroup?.id) return;
      uniqueGroups.set(courseGroup.id, courseGroup);
    })
  );

  return Array.from(uniqueGroups.values()).sort((a, b) =>
    String(a.id).localeCompare(String(b.id), 'en-US', { numeric: true })
  );
}

export function inspectCourseGroup(courseGroup) {
  const warnings = [];
  const errors = [];

  if (!courseGroup) {
    return {
      status: 'error',
      label: '錯誤',
      messages: ['課程資料不存在。'],
    };
  }

  if (!courseGroup.id && !courseGroup.code) errors.push('缺少 code 或 id。');
  if (!courseGroup.title) warnings.push('缺少課程名稱 title。');

  if (!['programming', 'smartring'].includes(courseGroup.type)) {
    warnings.push(`type 應為 programming 或 smartring，目前為 ${courseGroup.type || '空值'}。`);
  }

  if (!['learning', 'contest', 'competition'].includes(courseGroup.mode)) {
    warnings.push(`mode 應為 learning 或 contest，目前為 ${courseGroup.mode || '空值'}。`);
  }

  if (!Array.isArray(courseGroup.tasks) || courseGroup.tasks.length === 0) {
    errors.push('tasks 為空或不是陣列。');
  } else {
    courseGroup.tasks.forEach((task, index) => {
      const label = task?.id || `第 ${index + 1} 題`;
      if (!task?.id) warnings.push(`${label} 缺少 id。`);
      if (!task?.title && !task?.problemTitle) warnings.push(`${label} 缺少 title。`);

      if (courseGroup.type === 'programming') {
        if (!Array.isArray(task?.testCases) || task.testCases.length === 0) {
          warnings.push(`${label} 缺少 testCases。`);
        } else {
          task.testCases.forEach((testCase, caseIndex) => {
            const caseLabel = `${label} 測資 ${caseIndex + 1}`;
            if (typeof testCase?.input !== 'string') warnings.push(`${caseLabel} 缺少 input。`);
            if (typeof testCase?.expectedOutput !== 'string') warnings.push(`${caseLabel} 缺少 expectedOutput。`);
          });
        }
      }
    });
  }

  if (errors.length > 0) {
    return {
      status: 'error',
      label: '錯誤',
      messages: errors.concat(warnings),
    };
  }

  if (warnings.length > 0) {
    return {
      status: 'warning',
      label: '警告',
      messages: warnings,
    };
  }

  return {
    status: 'ok',
    label: '正常',
    messages: ['課程格式檢查正常。'],
  };
}

export function getCourseModeLabel(mode) {
  return mode === 'contest' || mode === 'competition' ? '競賽模式' : '學習模式';
}

export function getCourseTypeLabel(type) {
  return type === 'programming' ? '程式解題' : 'SmartRing';
}

export const publicCourseGroups = [
  { category: 'SmartRing 課程', codes: ['SRB00', 'SRA00', 'SRF00', 'SRC00'] },
  { category: '程式解題課程', codes: ['JSB00', 'JSA00', 'CPB00'] },
];

const fallbackPublicCourseTitles = {
  SRB00: 'SmartRing 基礎互動任務',
  SRA00: 'SmartRing 陣列任務',
  SRF00: 'SmartRing 函式仿作任務',
  SRC00: 'SmartRing 動畫解析密室課程',
  JSB00: 'Blockly 解題基礎一',
  JSA00: 'Blockly 解題陣列基礎',
  CPB00: '程式競賽基礎題組',
};

export function getPublicCourseGroupListHtml() {
  return publicCourseGroups
    .map((group) => {
      const items = group.codes
        .map((code) => {
          const title = fallbackPublicCourseTitles[code] || '課程內容尚未建立';
          return `<li><code>${code}</code>${title}</li>`;
        })
        .join('');

      return `
        <section class="modal-section">
          <h3>${group.category}</h3>
          <ul class="public-course-list">${items}</ul>
        </section>
      `;
    })
    .join('');
}

export function getDefaultTask(courseGroup) {
  if (!courseGroup?.tasks?.length) return null;
  return (
    courseGroup.tasks.find((task) => task.id === courseGroup.defaultTaskId) ||
    courseGroup.tasks[0]
  );
}

export function getTaskById(courseGroup, taskId) {
  if (!courseGroup?.tasks?.length) return null;
  return courseGroup.tasks.find((task) => task.id === taskId) || null;
}
