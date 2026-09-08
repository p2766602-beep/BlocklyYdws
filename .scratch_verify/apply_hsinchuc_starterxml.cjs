// 把verify.mjs驗證過100% pass的starterXml，依序套進114EHsinchuC.js/114JHsinchuC.js
// 6份檔案（YDWS-CodingBank canonical + BlocklyYdws/blockly-lab各自的複製）。
// 每份檔案裡"starterXml": ""依task順序出現6次，跟tasks_hsinchuc_e/j.json的task順序
// (task 1~6)一一對應，依序替換即可。比照build_chaiyi批次的apply_chaiyi_starterxml.cjs寫法。
const fs = require('fs');
const path = require('path');

const eTasks = JSON.parse(fs.readFileSync(path.join(__dirname, 'tasks_hsinchuc_e.json'), 'utf8'));
const jTasks = JSON.parse(fs.readFileSync(path.join(__dirname, 'tasks_hsinchuc_j.json'), 'utf8'));

const targets = [
  { file: 'D:/YOSEP/YDWS-CodingBank/courses/114EHsinchuC.js', tasks: eTasks },
  { file: 'D:/YOSEP/BlocklyYdws/src/courses/114EHsinchuC.js', tasks: eTasks },
  { file: 'D:/YOSEP/blockly-lab/src/courses/114EHsinchuC.js', tasks: eTasks },
  { file: 'D:/YOSEP/YDWS-CodingBank/courses/114JHsinchuC.js', tasks: jTasks },
  { file: 'D:/YOSEP/BlocklyYdws/src/courses/114JHsinchuC.js', tasks: jTasks },
  { file: 'D:/YOSEP/blockly-lab/src/courses/114JHsinchuC.js', tasks: jTasks },
];

const OLD_COMMENT = `// No starterXml demos this batch (per 2026-08-07 使用者決定：範例答案耗時明顯較長，
// 之後PDF題組先跳過，除非另外指定要哪幾題需要範例)。`;
const NEW_COMMENT = `// 2026-09-05：已補上全部題目的starterXml範例答案（headless Blockly驗證100% pass，
// 見BlocklyYdws/.scratch_verify/build_hsinchuc_e.cjs、build_hsinchuc_j.cjs）。`;

for (const { file, tasks } of targets) {
  let text = fs.readFileSync(file, 'utf8');

  if (!text.includes(OLD_COMMENT)) {
    throw new Error(`${file}: 找不到預期的舊註解，停止處理以免誤改`);
  }
  text = text.replace(OLD_COMMENT, NEW_COMMENT);

  let idx = 0;
  const marker = '"starterXml": ""';
  let searchFrom = 0;
  while (true) {
    const pos = text.indexOf(marker, searchFrom);
    if (pos === -1) break;
    if (idx >= tasks.length) {
      throw new Error(`${file}: starterXml空字串出現次數(${idx + 1}+)超過task數量(${tasks.length})`);
    }
    const replacement = `"starterXml": ${JSON.stringify(tasks[idx].xml)}`;
    text = text.slice(0, pos) + replacement + text.slice(pos + marker.length);
    searchFrom = pos + replacement.length;
    idx += 1;
  }

  if (idx !== tasks.length) {
    throw new Error(`${file}: 只替換了${idx}個，預期${tasks.length}個`);
  }

  fs.writeFileSync(file, text, 'utf8');
  console.log(`${file}: 已替換 ${idx} 個 starterXml`);
}
