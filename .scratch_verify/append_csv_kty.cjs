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

const COURSES = ['114EKeelung', '114JKeelung', '114ETaoyuan', '114JTaoyuan', '114EYunlin', '114JYunlin'];
const batch = '114-Keelung-Taoyuan-Yunlin';

const rows = [];

COURSES.forEach((code) => {
  const course = loadCourse(fs.readFileSync(`D:/YOSEP/YDWS-CodingBank/courses/${code}.js`, 'utf8'));
  const level = code.startsWith('114J') ? '國中' : '國小';

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
    row[13] = '';
    row[14] = '競賽基礎';
    row[15] = t.blocklyFit;
    row[16] = level;
    row[17] = '';
    row[18] = '';
    row[19] = '';
    row[20] = '';
    row[21] = '';
    row[22] = '';
    row[23] = '';
    row[24] = '';
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
    row[42] = `Claude手動草擬並用headless Blockly harness驗證starterXml（含真實範例答案），${batch}批次，學習模式。`;
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
});

const csvPath = 'D:/YOSEP/YDWS-CodingBank/data/problem_bank_master_complete.csv';
const existing = fs.readFileSync(csvPath, 'utf8');
const needsNewline = !existing.endsWith('\n');
fs.writeFileSync(csvPath, existing + (needsNewline ? '\n' : '') + rows.join('\n') + '\n', 'utf8');
console.log('appended', rows.length, 'rows to', csvPath);
