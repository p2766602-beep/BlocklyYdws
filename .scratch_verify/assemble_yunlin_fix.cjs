// 修正114JYunlin：原本9題內容跟114JChaiyiC幾乎完全重複（txtFile源頭複製錯），
// 已用使用者提供的正確txtFile/114JYunlin.txt（5題）重新產生starterXml並verify.mjs
// 100%通過，這裡把結果寫入canonical + BlocklyYdws + blockly-lab三處。
const fs = require('fs');
const path = require('path');

const YDWS = 'D:/YOSEP/YDWS-CodingBank';
const BLOCKLYYDWS = 'D:/YOSEP/BlocklyYdws';
const BLOCKLYLAB = 'D:/YOSEP/blockly-lab';

const code = '114JYunlin';
const title = '114-雲林縣國中';

function buildCourseTask(t, courseCode, courseTitle) {
  return {
    id: t.id,
    title: t.title,
    problemTitle: t.title,
    courseCode,
    courseName: courseTitle,
    role: 'contest',
    difficulty: t.difficulty,
    blocklyFit: '高',
    description: t.description,
    inputDescription: t.inputDescription || '',
    outputDescription: t.outputDescription || '',
    statement: {
      description: t.description,
      input: t.inputDescription || '',
      output: t.outputDescription || '',
    },
    examples: t.examples,
    starterXml: t.xml,
    testCases: t.testCases,
  };
}

const tasksRaw = require(path.join(__dirname, 'tasks_yunlin_j.json'));
const tasks = tasksRaw.map((t) => buildCourseTask(t, code, title));

const course = {
  code,
  title,
  type: 'programming',
  mode: 'learning',
  description: `${title}114學年度科技教育創意實作競賽題庫`,
  source: {
    project: 'YDWS-CodingBank',
    generatedAt: new Date().toISOString(),
    sourceTxt: `txtFile/${code}.txt`,
    version: 'manual-blockly-build-verified',
    note: '2026-08批次修正：原5題被誤植為與114JChaiyiC（嘉義縣）幾乎完全重複的內容（txtFile源頭複製錯，非本平台轉換流程造成），經使用者提供正確txtFile重新製作，starterXml皆用headless Blockly harness（verify.mjs）驗證100%通過。',
  },
  tasks,
};

const content = `// Hand-authored by Claude from YDWS-CodingBank/txtFile/${code}.txt，每題starterXml皆用\n// headless Blockly harness（verify.mjs）驗證過100%通過，學習模式（含範例答案）。\n// 2026-08修正版：取代原本誤植為嘉義縣（114JChaiyiC）重複內容的舊版9題，改為使用者提供的\n// 正確雲林縣5題內容。\n\nconst course = ${JSON.stringify(course, null, 2)};\n\nexport default course;\n`;

fs.writeFileSync(path.join(YDWS, 'courses', `${code}.js`), content, 'utf-8');
fs.writeFileSync(path.join(BLOCKLYYDWS, 'src', 'courses', `${code}.js`), content, 'utf-8');
fs.writeFileSync(path.join(BLOCKLYLAB, 'src', 'courses', `${code}.js`), content, 'utf-8');

console.log(`${code}：${tasks.length}題，已寫入canonical + 兩平台`);
