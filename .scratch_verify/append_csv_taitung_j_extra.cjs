const fs = require('fs');

function loadCourse(text) {
  let t = text.replace(/export default/, 'var __EXPORTED__ =');
  return new Function(t + '\nreturn __EXPORTED__;')();
}

function csvEscape(v) {
  const s = v == null ? '' : String(v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

const course = loadCourse(fs.readFileSync('D:/YOSEP/YDWS-CodingBank/courses/114JTaitung.js', 'utf8'));
const batch = '114-Taitung-J';
const level = '國中';

const rows = [];
course.tasks.forEach((t, idx) => {
  if (t.id === 'Taitung-J-1') return; // 已在先前批次寫入過，不重複
  const inputLines = t.examples[0].input.split('\n').length;
  const outputLines = t.examples[0].output.split('\n').length;
  const row = new Array(65).fill('');
  row[0] = t.id;
  row[1] = t.title;
  row[2] = `${t.id}-${t.title}.txt`;
  row[3] = t.title;
  row[4] = batch;
  row[5] = 'draft';
  row[6] = course.code;
  row[7] = course.title;
  row[8] = '';
  row[9] = t.role;
  row[10] = '';
  row[11] = String(idx + 1);
  row[12] = t.difficulty;
  row[13] = t.review.note;
  row[14] = '競賽基礎';
  row[15] = t.blocklyFit;
  row[16] = level;
  row[17] = t.review.note;
  row[18] = t.tags.mainConcepts.join('；');
  row[19] = t.tags.subConcepts.join('；');
  row[20] = t.tags.algorithm.join('；');
  row[21] = t.tags.dataStructure.join('；');
  row[22] = t.tags.syntax.join('；');
  row[23] = t.tags.math.join('；');
  row[24] = t.tags.context.join('；');
  row[25] = String(inputLines);
  row[26] = '';
  row[27] = '';
  row[28] = String(outputLines);
  row[29] = '';
  row[30] = String(t.testCases.length);
  row[31] = '';
  row[32] = '是';
  row[33] = '';
  row[34] = '';
  row[35] = '';
  row[36] = '';
  row[37] = '否';
  row[38] = '';
  row[39] = '良好';
  row[40] = '良好';
  row[41] = '低';
  row[42] = `Claude手動草擬並用headless Blockly harness驗證starterXml，${batch}批次，補齊114JTaitung.txt原先漏解析的3題。`;
  row[43] = t.title;
  row[44] = '是';
  row[45] = String(t.description.length);
  row[46] = '是';
  row[47] = String(t.examples.length);
  row[48] = String(t.testCases.length);
  row[49] = String(t.testCases.length);
  row[50] = String(t.testCases.length);
  row[51] = '0';
  row[52] = '是';
  row[53] = '完整';
  row[54] = '否';
  row[55] = '';
  row[56] = t.examples[0].input.split('\n')[0];
  row[57] = t.examples[0].output.split('\n')[0];
  row[58] = '';
  row[59] = 'Claude手動草擬';
  row[60] = `${t.id}-${t.title}.txt`;
  row[61] = '';
  row[62] = '';
  row[63] = '';
  row[64] = '';
  rows.push(row.map(csvEscape).join(','));
});

const csvPath = 'D:/YOSEP/YDWS-CodingBank/data/problem_bank_master_complete.csv';
const existing = fs.readFileSync(csvPath, 'utf8');
const needsNewline = !existing.endsWith('\n');
fs.writeFileSync(csvPath, existing + (needsNewline ? '\n' : '') + rows.join('\n') + '\n', 'utf8');
console.log('appended', rows.length, 'rows to', csvPath);
