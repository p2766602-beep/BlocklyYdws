// 建立114TCPE14~16/114TCPJ14~16競賽模式版本，比照114TCPE01~13既有慣例：
// mode改為'contest'（blockly-lab版另外覆寫為'learning'，理由見下方header）、
// 每題starterXml清空（競賽模式不提供範例答案可載入，即使來源這次確實有真的範例答案，
// 仍比照既有政策不外露）、courseCode/courseName/title改用新代碼＋「（競賽模式）」字尾。
const fs = require('fs');
const path = require('path');

const YDWS = 'D:/YOSEP/YDWS-CodingBank';
const BLOCKLYYDWS = 'D:/YOSEP/BlocklyYdws';
const BLOCKLYLAB = 'D:/YOSEP/blockly-lab';

function loadCourse(file) {
  let t = fs.readFileSync(file, 'utf8').replace('export default', 'var __X__ =');
  return new Function(t + '\nreturn __X__;')();
}

const MAPPING = [
  { src: '114EKeelung', tcp: '114TCPE14' },
  { src: '114JKeelung', tcp: '114TCPJ14' },
  { src: '114ETaoyuan', tcp: '114TCPE15' },
  { src: '114JTaoyuan', tcp: '114TCPJ15' },
  { src: '114EYunlin', tcp: '114TCPE16' },
  { src: '114JYunlin', tcp: '114TCPJ16' },
];

function buildTcpTask(t, tcpCode, tcpTitle, idx) {
  return {
    id: `${tcpCode}-${idx + 1}`,
    title: t.title,
    problemTitle: t.problemTitle || t.title,
    courseCode: tcpCode,
    courseName: tcpTitle,
    role: 'contest',
    difficulty: t.difficulty,
    blocklyFit: t.blocklyFit,
    description: t.description,
    inputDescription: t.inputDescription || '',
    outputDescription: t.outputDescription || '',
    statement: t.statement || {
      description: t.description,
      input: t.inputDescription || '',
      output: t.outputDescription || '',
    },
    examples: t.examples,
    starterXml: '',
    testCases: t.testCases.map((tc) => ({ ...tc })),
  };
}

const header = (src) => `// 競賽模式版本，由 ${src}.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入，即使
// 來源這次確實有真的starterXml範例答案，仍比照114TCPE01~13既有政策不外露）、課程代碼/
// 題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws的公開JS檔已移除，改由Worker（workers/score-grader/src/answerKeys.json，私密、
// 不進git）比對評分。blockly-lab版本例外維持mode:'learning'＋保留expectedOutput（比照既有
// 114TCPE01~13在blockly-lab的做法：共享Cloudflare帳號quota考量，全平台已停用成績上傳
// SCORE_SUBMISSION_ENABLED=false，改用本機testCases比對，不會打Worker）。
`;

MAPPING.forEach(({ src, tcp }) => {
  const source = loadCourse(path.join(YDWS, 'courses', `${src}.js`));
  const tcpTitle = `${source.title}（競賽模式）`;
  const tasks = source.tasks.map((t, idx) => buildTcpTask(t, tcp, tcpTitle, idx));

  const baseCourse = {
    code: tcp,
    title: tcpTitle,
    type: 'programming',
    mode: 'contest',
    description: source.description,
    source: {
      project: 'YDWS-CodingBank',
      generatedAt: new Date().toISOString(),
      sourceCsv: 'data/problem_bank_master_complete.csv',
      problemSetTitle: source.title,
      version: 'manual-transcription-verified',
      convertedFrom: src,
      convertedAt: new Date().toISOString(),
      note: '競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。',
    },
    tasks,
  };

  const h = header(src);

  // 1. canonical（YDWS-CodingBank）：mode:'contest'，完整testCases（含expectedOutput/output）
  const canonicalContent = h + `\nconst course = ${JSON.stringify(baseCourse, null, 2)};\n\nexport default course;\n`;
  fs.writeFileSync(path.join(YDWS, 'courses', `${tcp}.js`), canonicalContent, 'utf-8');

  // 2. BlocklyYdws：先寫入完整版（含expectedOutput），供build-answer-key.mjs擷取，稍後另一支腳本會strip
  fs.writeFileSync(path.join(BLOCKLYYDWS, 'src', 'courses', `${tcp}.js`), canonicalContent, 'utf-8');

  // 3. blockly-lab：mode改'learning'，其餘結構不變（含expectedOutput，不strip）
  const labCourse = { ...baseCourse, mode: 'learning' };
  const labContent = h + `\nconst course = ${JSON.stringify(labCourse, null, 2)};\n\nexport default course;\n`;
  fs.writeFileSync(path.join(BLOCKLYLAB, 'src', 'courses', `${tcp}.js`), labContent, 'utf-8');

  console.log(`${tcp}（來源${src}）：${tasks.length}題，已寫入canonical + BlocklyYdws(待strip) + blockly-lab`);
});
