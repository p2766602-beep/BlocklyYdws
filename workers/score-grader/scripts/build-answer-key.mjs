// 掃描 YDWS-CodingBank/courses/*.js（正本，含真正答案），抽出每個課程/題目/測資的正確
// 答案，輸出成這個Worker專用的私密資料 src/answerKeys.json（瀏覽器端拿不到這份資料）。
//
// 2026-09-21修正：原本讀的是../../../src/courses（BlocklyYdws自己的公開課程JS），但
// mode:'contest'課程的正確答案本來就會從公開JS裡刻意清空（防止洩題），讀錯資料夾會讓
// 這裡產生出來的「正確答案」全部變空字串，導致這些課程的系統評分永遠判定失敗，不管學生
// 寫得多正確都一樣（實際發生過，CPB00等全部競賽模式課程都中招）。改讀YDWS-CodingBank
// 正本（假設跟BlocklyYdws同一層目錄，見YOSEP根目錄CLAUDE.md的既有慣例），才能真的抓到
// 完整的testCases.expectedOutput/output。
//
// 現在（2026-09-21起）平台上已經沒有任何課程真的是mode:'contest'了（全部改回'learning'
// 用本機testCases比對，不再依賴這份Worker私密資料評分，見src/courses/CPB00.js等檔案開頭
// 的說明）——這支腳本＋這份Worker目前形同備用/未使用，保留是為了以防萬一以後又有課程
// 需要走這條路，路徑至少不會再讀錯。
//
// 每次YDWS-CodingBank/courses底下的課程內容有異動時，如果之後真的又有課程改回
// mode:'contest'，記得重跑這支腳本並重新部署Worker：
//   npm run build-answer-key

import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const COURSES_DIR = path.resolve(__dirname, '../../../../YDWS-CodingBank/courses');
const OUT_FILE = path.resolve(__dirname, '../src/answerKeys.json');

// SmartRing系列(SRA00/SRB00/SRC00/SRF00)在YDWS-CodingBank/courses底下import的
// smartring-tasks.js只是規格參考、缺少真正的執行期依賴，import會直接拋錯；反正這幾個
// 也不是mode:'contest'課程、用不到這份答案庫，直接跳過。
const SKIP_FILES = new Set(['index.js', 'smartring-tasks.js', 'SRA00.js', 'SRB00.js', 'SRC00.js', 'SRF00.js']);

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
