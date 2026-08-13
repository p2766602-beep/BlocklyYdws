// JSB00前4題（A-01-0/A-01-1/A-02-0/A-02-1）的description在courses/JSB00.js裡被截斷
// （只剩開頭19~29字），比對CSV master（data/problem_bank_master_complete.csv）與使用者
// 提供的原始題目txt後確認CSV/原始txt才是正確全文，courses/JSB00.js才是壞掉的那份。
// 這支腳本直接把4題的description改回正確全文（換行符號比照本檔案其餘題目慣例用\n\n分段），
// 同步寫入4個消費端：YDWS-CodingBank(canonical)、BlocklyYdws、blockly-lab、Blockly-Start
// （後兩者的課程JS格式是`export const JSB00 = {...}`，跟前兩者的`const course = {...};
// export default course;`不同，需分開處理序列化格式）。
const fs = require('fs');

const FIXES = {
  'A-01-0': '在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n\n請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。\n\nHello後面會接小寫逗號，還有一個空白輸入\n\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。',
  'A-01-1': '在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n\n請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。\n\n朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入\n\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。',
  'A-02-0': '當我們要處理數字時，常常需要加總。\n\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。\n\n這樣的題目能幫助你熟悉數字資料處理。',
  'A-02-1': '當我們要處理數字時，常常需計算平均。\n\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的平均(四捨五入取整數)。\n\n這樣的題目能幫助你熟悉數字資料處理。',
};

const TARGETS = [
  { path: 'D:/YOSEP/YDWS-CodingBank/courses/JSB00.js', format: 'defaultExport' },
  { path: 'D:/YOSEP/BlocklyYdws/src/courses/JSB00.js', format: 'defaultExport' },
  { path: 'D:/YOSEP/blockly-lab/src/courses/JSB00.js', format: 'namedExport' },
  { path: 'D:/YOSEP/blockly-lab-starter/src/courses/JSB00.js', format: 'namedExport' },
];

function applyFix(course) {
  let fixedCount = 0;
  course.tasks.forEach((t) => {
    if (FIXES[t.id] && t.description !== FIXES[t.id]) {
      t.description = FIXES[t.id];
      if (t.statement) t.statement.description = FIXES[t.id];
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
    console.log(filePath, ': fixed', fixedCount, 'task descriptions');
  } else {
    const marker = 'export const JSB00 = ';
    let t = original.replace(marker, 'var __X__ = ');
    const course = new Function(t + '\nreturn __X__;')();
    const fixedCount = applyFix(course);
    const content = `export const JSB00 = ${JSON.stringify(course, null, 2)};\n`;
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log(filePath, ': fixed', fixedCount, 'task descriptions');
  }
});
