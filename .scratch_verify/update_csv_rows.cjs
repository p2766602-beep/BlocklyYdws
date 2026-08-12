const fs = require('fs');

function loadCourse(text) {
  let t = text;
  if (/export default/.test(t)) t = t.replace(/export default/, 'var __EXPORTED__ =');
  else { const m = t.match(/export const (\w+)\s*=/); t = t.replace(/export const (\w+)\s*=/, 'var $1 ='); t += '\nvar __EXPORTED__ = ' + m[1] + ';'; }
  return new Function(t + '\nreturn __EXPORTED__;')();
}

function csvEscape(v) {
  const s = v == null ? '' : String(v);
  if (/[",\n]/.test(s)) return '"' + s.replace(/"/g, '""') + '"';
  return s;
}

const CANONICAL_DIR = 'D:/YOSEP/YDWS-CodingBank/courses';
const files = [
  { file: '114ETainan.js', batch: '114-Tainan' },
  { file: '114EHualien.js', batch: '114-Hualien' },
  { file: '114EChaiyiC.js', batch: '114-ChaiyiC' },
  { file: '114ENewTaipei.js', batch: '114-NewTaipei' },
  { file: '114EHsinchu.js', batch: '114-Hsinchu' },
];

const rowsById = {};
const order = [];
for (const { file, batch } of files) {
  const course = loadCourse(fs.readFileSync(`${CANONICAL_DIR}/${file}`, 'utf8'));
  course.tasks.forEach((t, idx) => {
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
    row[16] = '國小';
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
    row[42] = `Claude手動草擬並用headless Blockly harness驗證starterXml，${batch}批次，2026-08批次改用txtFile新版10筆評審資料重新驗證。`;
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
    rowsById[t.id] = row.map(csvEscape).join(',');
    order.push(t.id);
  });
}

const csvPath = 'D:/YOSEP/YDWS-CodingBank/data/problem_bank_master_complete.csv';
const existing = fs.readFileSync(csvPath, 'utf8');
const lines = existing.split(/\r?\n/);
const trailingNewline = existing.endsWith('\n');

let replaced = 0;
for (let i = 0; i < lines.length; i++) {
  const id = lines[i].split(',')[0];
  if (rowsById[id]) {
    lines[i] = rowsById[id];
    replaced++;
  }
}

if (replaced !== order.length) {
  console.error(`ERROR: expected to replace ${order.length} rows, actually replaced ${replaced}`);
  process.exit(1);
}

let out = lines.join('\n');
if (trailingNewline && !out.endsWith('\n')) out += '\n';
fs.writeFileSync(csvPath, out, 'utf8');
console.log('replaced', replaced, 'rows in place in', csvPath);
