const fs = require('fs');
const path = require('path');

const CANONICAL_DIR = 'D:/YOSEP/YDWS-CodingBank/courses';
const SCRIPT_DIR = __dirname;

function loadJson(name) { return JSON.parse(fs.readFileSync(path.join(SCRIPT_DIR, name), 'utf8')); }
function byId(list) { const m = {}; list.forEach((t) => { m[t.id] = t; }); return m; }

function scoreFor(count) { return Math.floor(100 / count); }

function cleanExamples(rawExamples) {
  return rawExamples.map((e) => ({ input: e.input, output: e.output, explanation: e.explanation.replace(/\n/g, ' ') }));
}

function buildTask({ id, title, description, inputDescription, outputDescription, examples, difficulty, note, mainConcepts, subConcepts, algorithm, dataStructure, syntax, math, context }, T) {
  const src = T[id];
  if (!src) throw new Error('missing built task for id: ' + id);
  const score = scoreFor(src.testCases.length);
  return {
    id, title, problemTitle: title, role: 'contest', difficulty, blocklyFit: '高', requiresGreenFlag: true,
    description, inputDescription, outputDescription,
    statement: { description, input: inputDescription, output: outputDescription },
    examples,
    testCases: src.testCases.map((tc) => ({ input: tc.input, expectedOutput: tc.expectedOutput, output: tc.expectedOutput, score, hidden: false })),
    starterXml: src.xml,
    review: {
      needsManualReview: false, risk: '低', flags: [], note,
      exportDecision: 'Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過',
    },
    tags: { mainConcepts, subConcepts, algorithm, dataStructure, syntax, math, context },
    restrictions: { requiredBlocks: [], disabledBlocks: [] },
  };
}

function writeCourse(filename, code, title, description, tasks, sourceNote) {
  const course = { code, title, type: 'programming', mode: 'learning', description, tasks };
  const header = `// Hand-authored by Claude from data/problem_bank_master_complete.csv (${code}-1~${tasks.length})\n` +
    `// and cross-checked against every worked example in txtFile/${code}.txt via a JS reference\n` +
    `// implementation before being written here. Not produced by export_course_js.py.\n` +
    `//\n` +
    `// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness\n` +
    `// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）\n` +
    `// 對每一筆testCases實際跑過，不是憑印象手刻。\n` +
    `// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。\n` +
    (sourceNote ? `//\n// ${sourceNote}\n` : '') +
    `\nexport default `;
  const body = JSON.stringify(course, null, 2);
  fs.writeFileSync(path.join(CANONICAL_DIR, filename), header + body + ';\n', 'utf8');
  console.log('wrote', filename, `(${tasks.length} tasks)`);
}

module.exports = { loadJson, byId, buildTask, writeCourse, cleanExamples };
