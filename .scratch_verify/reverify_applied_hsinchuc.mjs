// 從「已經套用進課程檔案」的最終版114EHsinchuC.js/114JHsinchuC.js直接讀starterXml重新驗證，
// 確認apply_hsinchuc_starterxml.cjs的字串替換沒有搞壞任何XML內容。
import * as Blockly from '../node_modules/blockly/index.mjs';
import { javascriptGenerator } from '../node_modules/blockly/javascript.mjs';
import '../src/blockly/interaction-blocks.js';

function createTokenReader(inputText) {
  const trimmed = String(inputText ?? '').trim();
  const tokens = trimmed.length > 0 ? trimmed.split(/\s+/) : [];
  let i = 0;
  return () => (i < tokens.length ? tokens[i++] : '');
}

async function runXmlAgainstCase(xmlText, input) {
  const workspace = new Blockly.Workspace();
  try {
    const dom = Blockly.utils.xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(dom, workspace);
    const code = javascriptGenerator.workspaceToCode(workspace);
    const sayOutput = [];
    const tokenReader = createTokenReader(input);
    global.window = global.window || {};
    global.window.alert = () => {};
    global.window.prompt = () => tokenReader();
    const runner = new Function('print', 'SmartRing', 'readLine', 'prompt', 'askAndWait',
      `"use strict"; return (async () => { ${code} })();`);
    const safePrint = (msg) => sayOutput.push(String(msg));
    await runner(safePrint, {}, tokenReader, tokenReader, tokenReader);
    return { ok: true, output: sayOutput.join('\n') };
  } catch (error) {
    return { ok: false, error: String((error && error.stack) || error) };
  } finally {
    workspace.dispose();
  }
}

const files = [
  '../../YDWS-CodingBank/courses/114EHsinchuC.js',
  '../../YDWS-CodingBank/courses/114JHsinchuC.js',
];

let allOk = true;
for (const f of files) {
  const mod = await import(f);
  const course = mod.default;
  for (const task of course.tasks) {
    if (!task.starterXml) {
      console.log(`FAIL ${task.id}: starterXml空白`);
      allOk = false;
      continue;
    }
    let taskOk = true;
    for (const tc of task.testCases) {
      const run = await runXmlAgainstCase(task.starterXml, tc.input);
      const actual = run.ok ? run.output.trim() : `ERROR: ${run.error}`;
      const expected = String(tc.expectedOutput ?? '').trim();
      if (actual !== expected) {
        taskOk = false;
        console.log(`FAIL ${task.id}: input=${JSON.stringify(tc.input)} expected=${JSON.stringify(expected)} actual=${JSON.stringify(actual)}`);
      }
    }
    if (taskOk) console.log(`PASS ${task.id}`);
    allOk = allOk && taskOk;
  }
}
console.log(allOk ? '\n=== ALL APPLIED FILES PASS ===' : '\n=== SOME APPLIED FILES FAILED ===');
process.exit(allOk ? 0 : 1);
