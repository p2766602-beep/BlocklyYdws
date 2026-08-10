// Headless Blockly XML verification harness.
// Mirrors src/main.js's executeGeneratedCode(): parse XML -> workspaceToCode -> run with
// mocked window.prompt/window.alert/askAndWait fed by testCase.input, compare captured
// "say" output (interaction_say / print()), not window.alert output — matching main.js's
// sayOutput vs capturedOutput distinction (評分只認「說出」，不認「輸出」).
import * as Blockly from '../node_modules/blockly/index.mjs';
import { javascriptGenerator } from '../node_modules/blockly/javascript.mjs';
import fs from 'fs';
// 註冊自訂積木（event_whenflagclicked / interaction_ask_and_wait / interaction_answer /
// interaction_say）。這個匯入本身就是註冊動作的副作用，見該檔案的registerInteractionBlocks()
// 說明——沒有這行，domToWorkspace會丟"Invalid block definition"。
import '../src/blockly/interaction-blocks.js';

// 比照 main.js 的 createPromptReader（逐行）—— 目前教師demo解答用不到 text_prompt_ext，
// 保留是為了跟主程式行為完全一致，以防未來題型用到。
function createPromptReader(inputText) {
  const normalized = String(inputText ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalized.length > 0 ? normalized.split('\n') : [];
  let i = 0;
  return () => (i < lines.length ? lines[i++] : '');
}

// 比照 main.js 的 createTokenReader —— 「詢問並等待」用，依全部空白（含換行）斷詞，
// 逐次呼叫各拿一個詞，不管測資原始是空白分隔還是換行分隔。
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
    const promptReader = createPromptReader(input);
    const tokenReader = createTokenReader(input);

    global.window = global.window || {};
    const originalAlert = global.window.alert;
    const originalPrompt = global.window.prompt;
    global.window.alert = () => {};
    global.window.prompt = () => promptReader();

    try {
      const runner = new Function(
        'print', 'SmartRing', 'readLine', 'prompt', 'askAndWait',
        `"use strict"; return (async () => { ${code} })();`
      );
      const safePrint = (msg) => sayOutput.push(String(msg));
      await runner(safePrint, {}, promptReader, promptReader, tokenReader);
    } finally {
      global.window.alert = originalAlert;
      global.window.prompt = originalPrompt;
    }

    return { ok: true, output: sayOutput.join('\n'), code };
  } catch (error) {
    return { ok: false, error: String((error && error.stack) || error) };
  } finally {
    workspace.dispose();
  }
}

async function verifyTask(xmlText, testCases) {
  const results = [];
  for (const tc of testCases) {
    const run = await runXmlAgainstCase(xmlText, tc.input);
    const actual = run.ok ? run.output : `ERROR: ${run.error}`;
    const expected = String(tc.expectedOutput ?? tc.output ?? '').trim();
    const pass = run.ok && actual.trim() === expected;
    results.push({ input: tc.input, expected, actual, pass });
  }
  return results;
}

// Usage: node verify.mjs <path-to-json-file>
// JSON file: [{ "id": "...", "xml": "...", "testCases": [{input, expectedOutput}] }, ...]
const jsonPath = process.argv[2];
const tasks = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'));

let allOk = true;
for (const task of tasks) {
  const results = await verifyTask(task.xml, task.testCases);
  const pass = results.every((r) => r.pass);
  allOk = allOk && pass;
  console.log(`${pass ? 'PASS' : 'FAIL'} ${task.id}`);
  if (!pass) {
    for (const r of results) {
      if (!r.pass) {
        console.log(`  input=${JSON.stringify(r.input)}`);
        console.log(`  expected=${JSON.stringify(r.expected)}`);
        console.log(`  actual  =${JSON.stringify(r.actual)}`);
      }
    }
  }
}
console.log(allOk ? '\n=== ALL TASKS PASS ===' : '\n=== SOME TASKS FAILED ===');
process.exit(allOk ? 0 : 1);
