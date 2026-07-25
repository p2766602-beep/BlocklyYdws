// Headless Blockly XML verification harness (temporary, not committed).
// Mirrors src/main.js's executeGeneratedCode(): parse XML -> workspaceToCode -> run with
// mocked window.prompt/window.alert fed by testCase.input, compare captured output.
import * as Blockly from '../node_modules/blockly/index.mjs';
import { javascriptGenerator } from '../node_modules/blockly/javascript.mjs';
import fs from 'fs';

function createPromptReader(inputText) {
  const lines = String(inputText ?? '').split('\n');
  let i = 0;
  return () => (i < lines.length ? lines[i++] : '');
}

async function runXmlAgainstCase(xmlText, input) {
  const workspace = new Blockly.Workspace();
  try {
    const dom = Blockly.utils.xml.textToDom(xmlText);
    Blockly.Xml.domToWorkspace(dom, workspace);
    const code = javascriptGenerator.workspaceToCode(workspace);

    const captured = [];
    const promptReader = createPromptReader(input);

    global.window = global.window || {};
    const originalAlert = global.window.alert;
    const originalPrompt = global.window.prompt;
    global.window.alert = (msg) => captured.push(String(msg));
    global.window.prompt = () => promptReader();
    global.alert = global.window.alert;
    global.prompt = global.window.prompt;

    try {
      const runner = new Function(
        'print', 'SmartRing', 'readLine', 'prompt',
        `"use strict"; return (async () => { ${code} })();`
      );
      const safePrint = (msg) => captured.push(String(msg));
      await runner(safePrint, {}, promptReader, promptReader);
    } finally {
      global.window.alert = originalAlert;
      global.window.prompt = originalPrompt;
    }

    return { ok: true, output: captured.join('\n'), code };
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
