// 組裝Keelung/Taoyuan/Yunlin六個課程JS檔（學習模式，含starterXml範例答案），
// 寫進YDWS-CodingBank canonical，同步複製到BlocklyYdws/blockly-lab兩平台。
const fs = require('fs');
const path = require('path');

const YDWS = 'D:/YOSEP/YDWS-CodingBank';
const BLOCKLYYDWS = 'D:/YOSEP/BlocklyYdws';
const BLOCKLYLAB = 'D:/YOSEP/blockly-lab';

const COURSES = [
  { code: '114EKeelung', title: '114-基隆市國小', file: 'tasks_keelung_e.json' },
  { code: '114JKeelung', title: '114-基隆市國中', file: 'tasks_keelung_j.json' },
  { code: '114ETaoyuan', title: '114-桃園市國小', file: 'tasks_taoyuan_e.json' },
  { code: '114JTaoyuan', title: '114-桃園市國中', file: 'tasks_taoyuan_j.json' },
  { code: '114EYunlin', title: '114-雲林縣國小', file: 'tasks_yunlin_e.json' },
  { code: '114JYunlin', title: '114-雲林縣國中', file: 'tasks_yunlin_j.json' },
];

function buildCourseTask(t, courseCode, courseTitle) {
  return {
    id: t.id,
    title: t.title,
    problemTitle: t.title,
    courseCode,
    courseName: courseTitle,
    role: 'contest',
    difficulty: t.difficulty,
    blocklyFit: '中',
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

COURSES.forEach(({ code, title, file }) => {
  const tasksRaw = require(path.join(__dirname, file));
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
    },
    tasks,
  };

  const content = `// Hand-authored by Claude from YDWS-CodingBank/txtFile/${code}.txt，每題starterXml皆用\n// headless Blockly harness（verify.mjs）驗證過100%通過，學習模式（含範例答案）。\n\nconst course = ${JSON.stringify(course, null, 2)};\n\nexport default course;\n`;

  fs.writeFileSync(path.join(YDWS, 'courses', `${code}.js`), content, 'utf-8');
  fs.writeFileSync(path.join(BLOCKLYYDWS, 'src', 'courses', `${code}.js`), content, 'utf-8');
  fs.writeFileSync(path.join(BLOCKLYLAB, 'src', 'courses', `${code}.js`), content, 'utf-8');

  console.log(`${code}：${tasks.length}題，已寫入canonical + 兩平台`);
});
