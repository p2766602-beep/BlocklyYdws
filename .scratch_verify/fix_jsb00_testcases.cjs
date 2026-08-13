// JSB00前4題（A-01-0/A-01-1/A-02-0/A-02-1）目前testCases只有2筆（取自題目說明「範例格式」
// 對照表），但使用者提供的原始題目txt其實各自宣告「筆數：4」、有4筆真正的測資（案例1~4），
// 案例5~10是空白/垃圾樣板資料，使用者已確認只取前4筆、後面不用處理。
// score沿用原始txt「分數：10」，跟本檔案其餘4筆測資的題目（A-04-0/A-05-0等）score:10慣例一致。
const fs = require('fs');

const FIXES = {
  'A-01-0': [
    { input: 'John', expectedOutput: 'Hello, John' },
    { input: 'Marry', expectedOutput: 'Hello, Marry' },
    { input: 'Sam', expectedOutput: 'Hello, Sam' },
    { input: 'Tom', expectedOutput: 'Hello, Tom' },
  ],
  'A-01-1': [
    { input: 'John\nAmy', expectedOutput: 'John, Amy, 一起學習吧！' },
    { input: 'Tom\nSusan', expectedOutput: 'Tom, Susan, 一起學習吧！' },
    { input: 'Sam\nBrown', expectedOutput: 'Sam, Brown, 一起學習吧！' },
    { input: 'Justin\nLouise', expectedOutput: 'Justin, Louise, 一起學習吧！' },
  ],
  'A-02-0': [
    { input: '3\n7', expectedOutput: '10' },
    { input: '99\n100', expectedOutput: '199' },
    { input: '78\n22', expectedOutput: '100' },
    { input: '21\n35', expectedOutput: '56' },
  ],
  'A-02-1': [
    { input: '3\n7', expectedOutput: '5' },
    { input: '99\n100', expectedOutput: '100' },
    { input: '78\n22', expectedOutput: '50' },
    { input: '21\n35', expectedOutput: '28' },
  ],
};

function buildTestCases(id) {
  return FIXES[id].map((c) => ({
    input: c.input,
    expectedOutput: c.expectedOutput,
    output: c.expectedOutput,
    score: 10,
    hidden: false,
  }));
}

const TARGETS = [
  { path: 'D:/YOSEP/YDWS-CodingBank/courses/JSB00.js', format: 'defaultExport' },
  { path: 'D:/YOSEP/BlocklyYdws/src/courses/JSB00.js', format: 'defaultExport' },
  { path: 'D:/YOSEP/blockly-lab/src/courses/JSB00.js', format: 'namedExport' },
  { path: 'D:/YOSEP/blockly-lab-starter/src/courses/JSB00.js', format: 'namedExport' },
];

function applyFix(course) {
  let fixedCount = 0;
  course.tasks.forEach((t) => {
    if (FIXES[t.id]) {
      t.testCases = buildTestCases(t.id);
      fixedCount++;
    }
  });
  return fixedCount;
}

TARGETS.forEach(({ path: filePath, format }) => {
  if (!fs.existsSync(filePath)) {
    console.log('SKIP（不存在）:', filePath);
    return;
  }
  const original = fs.readFileSync(filePath, 'utf-8');

  if (format === 'defaultExport') {
    const marker = 'const course = ';
    const idx = original.indexOf(marker);
    const header = original.slice(0, idx);
    let t = original.replace('export default', 'var __X__ =');
    const course = new Function(t + '\nreturn __X__;')();
    const fixedCount = applyFix(course);
    const content = header + `const course = ${JSON.stringify(course, null, 2)};\n\nexport default course;\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(filePath, ': fixed', fixedCount, 'task testCases');
  } else {
    const marker = 'export const JSB00 = ';
    let t = original.replace(marker, 'var __X__ = ');
    const course = new Function(t + '\nreturn __X__;')();
    const fixedCount = applyFix(course);
    const content = `export const JSB00 = ${JSON.stringify(course, null, 2)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(filePath, ': fixed', fixedCount, 'task testCases');
  }
});
