// 掃描 ../../../src/courses/*.js，抽出每個課程/題目/測資的正確答案，
// 輸出成這個Worker專用的私密資料 src/answerKeys.json（瀏覽器端拿不到這份資料）。
//
// 每次src/courses底下的課程內容有異動時，記得重跑這支腳本並重新部署Worker：
//   npm run build-answer-key

import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COURSES_DIR = path.resolve(__dirname, '../../../src/courses');
const OUT_FILE = path.resolve(__dirname, '../src/answerKeys.json');

const SKIP_FILES = new Set(['index.js', 'smartring-tasks.js']);

function getCourseObject(mod, fallbackCode) {
  if (mod.default && typeof mod.default === 'object') return mod.default;

  const keys = Object.keys(mod);
  for (const key of keys) {
    const value = mod[key];
    if (value && typeof value === 'object' && Array.isArray(value.tasks)) {
      return value;
    }
  }

  return null;
}

async function main() {
  const files = readdirSync(COURSES_DIR).filter(
    (name) => name.endsWith('.js') && !SKIP_FILES.has(name),
  );

  const answerKeys = {};
  let courseCount = 0;
  let taskCount = 0;
  let caseCount = 0;

  for (const file of files) {
    const fallbackCode = file.replace(/\.js$/, '').toUpperCase();
    const mod = await import(pathToFileURL(path.join(COURSES_DIR, file)).href);
    const course = getCourseObject(mod, fallbackCode);

    if (!course || !Array.isArray(course.tasks)) continue;

    const courseCode = String(course.code || course.id || fallbackCode).toUpperCase();
    const taskMap = {};

    for (const task of course.tasks) {
      if (!task || !Array.isArray(task.testCases) || task.testCases.length === 0) continue;

      const caseMap = {};

      task.testCases.forEach((testCase, index) => {
        const caseId = testCase?.id || `case-${index + 1}`;
        const expected = testCase?.expectedOutput ?? testCase?.output ?? '';
        caseMap[caseId] = String(expected);
        caseCount += 1;
      });

      if (Object.keys(caseMap).length > 0) {
        taskMap[task.id] = caseMap;
        taskCount += 1;
      }
    }

    if (Object.keys(taskMap).length > 0) {
      // 同一個課程代碼可能被多個檔案定義到（目前沒有此情況，保險起見合併而非覆蓋）
      answerKeys[courseCode] = { ...(answerKeys[courseCode] || {}), ...taskMap };
      courseCount += 1;
    }
  }

  writeFileSync(OUT_FILE, JSON.stringify(answerKeys, null, 2) + '\n', 'utf-8');

  console.log(`已寫入 ${OUT_FILE}`);
  console.log(`課程數：${courseCount}，題目數：${taskCount}，測資筆數：${caseCount}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
