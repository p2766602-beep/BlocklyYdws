
import './style.css';

import * as Blockly from 'blockly';
import { javascriptGenerator } from 'blockly/javascript';
import * as ZhHant from 'blockly/msg/zh-hant';

import { competitionToolbox } from './blockly/toolbox.js';
import { registerSmartRingBlocks } from './blockly/smartring-blocks.js';
import { smartRingRuntime } from './smartring/runtime.js';
import {
  toggleSimulator,
  isSimulatorOpen,
} from './smartring/simulator-bridge.js';

import {
  getPublicCourseGroupListHtml,
  getCourseGroup,
  getDefaultTask,
  getTaskById,
  getAllCourseGroups,
  getCourseTypeLabel,
  inspectCourseGroup,
} from './courses/index.js';
import { initAiCompanion } from './aiCompanion.js';

Blockly.setLocale(ZhHant);
registerSmartRingBlocks();


// MVP-J08-1: SmartRing tasks use asynchronous hardware commands.
// Students operate blocks only, so all Blockly custom procedures are generated as async functions,
// and every procedure call is generated with await. This prevents errors such as:
// "await is only valid in async functions" when SmartRing wait/show blocks are placed inside a function.
function patchAsyncProcedureGenerators() {
  if (javascriptGenerator.__blocklyLabAsyncProceduresPatched) return;

  const patchDefinition = (blockType) => {
    const original = javascriptGenerator.forBlock[blockType];
    if (typeof original !== 'function') return;

    javascriptGenerator.forBlock[blockType] = function asyncProcedureDefinition(block, generator) {
      const code = original.call(this, block, generator);
      if (typeof code !== 'string') return code;
      return code.replace(/(^|\n)(\s*)function\s+/, '$1$2async function ');
    };
  };

  const patchStatementCall = (blockType) => {
    const original = javascriptGenerator.forBlock[blockType];
    if (typeof original !== 'function') return;

    javascriptGenerator.forBlock[blockType] = function asyncProcedureStatementCall(block, generator) {
      const code = original.call(this, block, generator);
      if (typeof code !== 'string') return code;

      const trimmed = code.trim();
      if (!trimmed || trimmed.startsWith('await ')) return code;

      const indentMatch = code.match(/^\s*/);
      const indent = indentMatch ? indentMatch[0] : '';
      const ending = code.endsWith('\n') ? '\n' : '';
      return `${indent}await ${trimmed}${ending}`;
    };
  };

  const patchValueCall = (blockType) => {
    const original = javascriptGenerator.forBlock[blockType];
    if (typeof original !== 'function') return;

    javascriptGenerator.forBlock[blockType] = function asyncProcedureValueCall(block, generator) {
      const result = original.call(this, block, generator);
      if (!Array.isArray(result)) return result;

      const [code, order] = result;
      if (typeof code !== 'string') return result;
      const asyncCode = code.trim().startsWith('await ') ? code : `await ${code}`;
      return [asyncCode, javascriptGenerator.ORDER_AWAIT ?? javascriptGenerator.ORDER_NONE ?? order];
    };
  };

  patchDefinition('procedures_defnoreturn');
  patchDefinition('procedures_defreturn');
  patchStatementCall('procedures_callnoreturn');
  patchValueCall('procedures_callreturn');

  javascriptGenerator.__blocklyLabAsyncProceduresPatched = true;
}

patchAsyncProcedureGenerators();

// MVP-J08-1 fixed: Blockly procedure definitions are emitted through generator definitions,
// so patching the procedure block generator alone may not change the final generated code.
// Apply a final safety pass to the complete JavaScript code before preview/execution.
function normalizeGeneratedAsyncProcedures(code) {
  if (typeof code !== 'string' || !code.trim()) return code;

  return code.replace(
    /(^|\n)(\s*)function\s+([A-Za-z_$][\w$]*)\s*\(/g,
    '$1$2async function $3('
  );
}

function getGeneratedUserCode() {
  const code = javascriptGenerator.workspaceToCode(workspace);
  return normalizeGeneratedAsyncProcedures(code);
}

const blocklyDiv = document.getElementById('blocklyDiv');
const codePreview = document.getElementById('codePreview');
const outputArea = document.getElementById('outputArea');

// Google Apps Script Web App URL for score upload.
// Paste the deployed Web App URL here after setting up google-apps-script/Code.gs.
const SCORE_UPLOAD_URL = 'https://script.google.com/macros/s/AKfycbyOu4ZVMgr3577ZdUZ6o732GUPoayRHFiw3_Xglhaj0mg_W-4REr-KjtZllU9SZnAQq/exec';
// 選填的簡易共用密鑰：需與 Apps Script 那邊 Script Properties 的 UPLOAD_TOKEN 一致才會生效。
// 留空字串代表不啟用檢查（沿用目前行為）。詳見 google-apps-script/Code.gs 的說明。
const SCORE_UPLOAD_TOKEN = '';
const STUDENT_PROFILE_STORAGE_KEY = 'blocklyLabStudentProfileV1';

// AI伴學後端（Cloudflare Worker），代理Gemini API呼叫，金鑰與system prompt都不在前端。
const AI_COMPANION_WORKER_URL = 'https://blocklyydws-ai-companion.tnjboxing.workers.dev';

const btnConnectSmartRing = document.getElementById('btnConnectSmartRing');
const btnDisconnectSmartRing = document.getElementById('btnDisconnectSmartRing');
const btnToggleSimulator = document.getElementById('btnToggleSimulator');
const btnTestLedRed = document.getElementById('btnTestLedRed');
const btnTestLedClear = document.getElementById('btnTestLedClear');

const btnLoadSample = document.getElementById('btnLoadSample');
const btnRun = document.getElementById('btnRun');
const btnStop = document.getElementById('btnStop');
const btnClear = document.getElementById('btnClear');
const btnSaveBlocks = document.getElementById('btnSaveBlocks');
const btnLoadBlocks = document.getElementById('btnLoadBlocks');
const blockFileInput = document.getElementById('blockFileInput');
const btnCopyCode = document.getElementById('btnCopyCode');
const btnClearOutput = document.getElementById('btnClearOutput');
const btnToggleResultPanel = document.getElementById('btnToggleResultPanel');
const btnClearStudentProfile = document.getElementById('btnClearStudentProfile');

const studentClass = document.getElementById('studentClass');
const studentNumber = document.getElementById('studentNumber');
const studentName = document.getElementById('studentName');
const courseCode = document.getElementById('courseCode');
const courseModeDisplay = document.getElementById('courseModeDisplay');
const taskSelector = document.getElementById('taskSelector');

const btnLoadCourse = document.getElementById('btnLoadCourse');
const btnOpenCourseManager = document.getElementById('btnOpenCourseManager');
const btnTestTask = document.getElementById('btnTestTask');
const btnSubmitScore = document.getElementById('btnSubmitScore');

const taskInfo = document.getElementById('taskInfo');
const sidePanel = document.querySelector('.side-panel');
const taskPanelHeading = document.getElementById('taskPanelHeading');
const taskPanel = document.querySelector('.task-panel');
const btnToggleTaskPanel = document.getElementById('btnToggleTaskPanel');
const modeStatus = document.getElementById('modeStatus');
const smartRingStatus = document.getElementById('smartRingStatus');
const btnToggleSmartRingPanel = document.getElementById('btnToggleSmartRingPanel');
const smartRingInfo = document.getElementById('smartRingInfo');
const resultPanel = document.querySelector('.result-panel');

const serialStatusValue = document.getElementById('serialStatusValue');
const buttonStateValue = document.getElementById('buttonStateValue');
const rawStateValue = document.getElementById('rawStateValue');
const lastCommandValue = document.getElementById('lastCommandValue');

const tabBlocks = document.getElementById('tabBlocks');
const tabCode = document.getElementById('tabCode');
const blocksView = document.getElementById('blocksView');
const codeView = document.getElementById('codeView');

const courseManagerModal = document.getElementById('courseManagerModal');
const courseManagerBody = document.getElementById('courseManagerBody');
const btnCloseCourseManager = document.getElementById('btnCloseCourseManager');

const taskModal = document.getElementById('taskModal');
const taskModalTitle = document.getElementById('taskModalTitle');
const taskModalBody = document.getElementById('taskModalBody');
const btnOpenTaskModal = document.getElementById('btnOpenTaskModal');
const btnCloseTaskModal = document.getElementById('btnCloseTaskModal');

let workspace = null;
let currentCourseGroup = null;
let currentTask = null;
let currentCourseMode = 'learning';
let isUserProgramRunning = false;
let hasProgrammingAssessmentResult = false;
let lastAssessmentResult = null;
let hasLoadedStarterForCurrentTask = false;
let isSmartRingPanelCollapsed = false;
let isTaskPanelCollapsed = false;
let isResultPanelCollapsed = false;


function normalizeCourseMode(mode) {
  return mode === 'contest' || mode === 'competition' ? 'contest' : 'learning';
}

function getModeText(mode = currentCourseMode) {
  return normalizeCourseMode(mode) === 'contest' ? '競賽模式' : '學習模式';
}

function isCompetitionMode() {
  return normalizeCourseMode(currentCourseMode) === 'contest';
}

function getCourseType(courseGroup = currentCourseGroup) {
  return courseGroup?.type || (String(courseGroup?.id || '').startsWith('JS') ? 'programming' : 'smartring');
}

function updateCourseModeDisplay() {
  const modeText = getModeText();

  modeStatus.textContent = `目前模式：${modeText}`;

  if (courseModeDisplay) {
    courseModeDisplay.textContent = modeText;
    courseModeDisplay.classList.toggle('contest-mode', isCompetitionMode());
    courseModeDisplay.classList.toggle('learning-mode', !isCompetitionMode());
  }
}

function isProgrammingProblemTask(task = currentTask, courseGroup = currentCourseGroup) {
  return (
    getCourseType(courseGroup) === 'programming' ||
    String(courseGroup?.id || '').startsWith('JS') ||
    String(task?.type || '').includes('解題')
  );
}

function updateSubmitScoreVisibility() {
  if (!btnSubmitScore) return;

  const profileStatus = getStudentProfileCompleteness();
  const isProgrammingCourse = Boolean(
    currentCourseGroup &&
      currentTask &&
      isProgrammingProblemTask(currentTask, currentCourseGroup)
  );
  const hasValidAssessmentResult = Boolean(
    hasProgrammingAssessmentResult &&
      lastAssessmentResult &&
      lastAssessmentResult.total > 0
  );
  const shouldEnable = Boolean(
    isProgrammingCourse &&
      hasValidAssessmentResult &&
      !hasLoadedStarterForCurrentTask &&
      !isUserProgramRunning
  );

  btnSubmitScore.hidden = false;
  btnSubmitScore.disabled = !shouldEnable;

  if (!currentTask || !isProgrammingProblemTask(currentTask, currentCourseGroup)) {
    btnSubmitScore.title = '請先載入程式解題課程並完成系統評分。';
  } else if (!hasProgrammingAssessmentResult || !hasValidAssessmentResult) {
    btnSubmitScore.title = '請先完成系統評分。';
  } else if (hasLoadedStarterForCurrentTask) {
    btnSubmitScore.title = '本題已載入範例積木，不能上傳成績。請清除工作區後自行重新建置積木，再完成系統評分。';
  } else if (!profileStatus.ok) {
    btnSubmitScore.title = `已完成系統評分；按下後會提示補填：${profileStatus.missingFields.join('、')}`;
  } else {
    btnSubmitScore.title = '上傳本次系統評分結果。';
  }
}

function updateTaskActionButtons() {
  if (btnTestTask) {
    const canUseSystemAssessment = Boolean(
      currentCourseGroup &&
        currentTask &&
        isProgrammingProblemTask() &&
        !isUserProgramRunning
    );

    btnTestTask.disabled = !canUseSystemAssessment;

    if (!currentTask) {
      btnTestTask.title = '請先載入程式解題課程。';
    } else if (!isProgrammingProblemTask()) {
      btnTestTask.title = 'SmartRing 課程不進行系統評分，請使用「執行程式」。';
    } else {
      btnTestTask.title = '使用題目內建測資進行系統評分。';
    }
  }

  if (btnLoadSample) {
    const canLoadStarter = Boolean(currentTask?.starterXml && !isUserProgramRunning);
    btnLoadSample.disabled = !canLoadStarter;
    btnLoadSample.title = currentTask?.starterXml
      ? '載入目前題目的範例積木，會覆蓋工作區。'
      : '請先載入有範例積木的課程任務。';
  }

  updateSubmitScoreVisibility();
}

function resetCompetitionAssessmentResult() {
  hasProgrammingAssessmentResult = false;
  lastAssessmentResult = null;
  updateSubmitScoreVisibility();
}

function getRequiredStudentFields() {
  return [
    { key: 'className', label: '班級', element: studentClass },
    { key: 'seatNumber', label: '座號', element: studentNumber },
    { key: 'name', label: '姓名', element: studentName },
  ];
}

function getStudentProfileCompleteness(profile = getStudentProfile()) {
  const missingFields = getRequiredStudentFields()
    .filter((field) => !String(profile[field.key] || '').trim())
    .map((field) => field.label);

  return {
    ok: missingFields.length === 0,
    missingFields,
  };
}

function markStudentProfileFields(missingFields = []) {
  getRequiredStudentFields().forEach((field) => {
    const wrapper = field.element?.closest('.field-group');
    const isMissing = missingFields.includes(field.label);
    wrapper?.classList.toggle('field-required-missing', isMissing);
    field.element?.setAttribute('aria-invalid', isMissing ? 'true' : 'false');
  });
}

function getStudentKey(profile = getStudentProfile()) {
  return [profile.className, profile.seatNumber, profile.name]
    .map((part) => String(part || '').trim())
    .filter(Boolean)
    .join('-');
}

function saveStudentProfileToStorage() {
  const profile = getStudentProfile();

  try {
    window.localStorage.setItem(
      STUDENT_PROFILE_STORAGE_KEY,
      JSON.stringify({
        className: profile.className,
        seatNumber: profile.seatNumber,
        name: profile.name,
      })
    );
  } catch (error) {
    console.warn('[Blockly Lab] 無法儲存學生資料到 localStorage。', error);
  }
}

function restoreStudentProfileFromStorage() {
  try {
    const raw = window.localStorage.getItem(STUDENT_PROFILE_STORAGE_KEY);
    if (!raw) return;

    const profile = JSON.parse(raw);
    studentClass.value = String(profile.className || '');
    studentNumber.value = String(profile.seatNumber || '');
    studentName.value = String(profile.name || '');
  } catch (error) {
    console.warn('[Blockly Lab] 無法讀取 localStorage 中的學生資料。', error);
  }
}

function clearStudentProfile() {
  studentClass.value = '';
  studentNumber.value = '';
  studentName.value = '';

  try {
    window.localStorage.removeItem(STUDENT_PROFILE_STORAGE_KEY);
  } catch (error) {
    console.warn('[Blockly Lab] 無法清除 localStorage 中的學生資料。', error);
  }

  markStudentProfileFields([]);
  updateSubmitScoreVisibility();
  outputArea.textContent = '已清除學生資料。';
}

function handleStudentProfileInput() {
  saveStudentProfileToStorage();
  markStudentProfileFields([]);
  updateSubmitScoreVisibility();
}

function initBlockly() {
  workspace = Blockly.inject(blocklyDiv, {
    toolbox: competitionToolbox,
    trashcan: true,
    scrollbars: true,
    move: {
      scrollbars: true,
      drag: true,
      wheel: true,
    },
    zoom: {
      controls: true,
      wheel: true,
      startScale: 0.9,
      maxScale: 1.4,
      minScale: 0.5,
      scaleSpeed: 1.1,
    },
    grid: {
      spacing: 24,
      length: 3,
      colour: '#d8dce3',
      snap: true,
    },
    renderer: 'geras',
  });

  workspace.addChangeListener(updateCodePreview);
  updateCodePreview();
}

function updateCodePreview() {
  if (!workspace) return;

  const code = getGeneratedUserCode();
  codePreview.textContent = code.trim() || '// 尚未建立程式';
}

function writeOutput(message) {
  const currentText = outputArea.textContent;

  if (currentText === '尚未執行程式。' || currentText === '') {
    outputArea.textContent = String(message);
    return;
  }

  outputArea.textContent += `\n${String(message)}`;
}

function clearOutput() {
  outputArea.textContent = '';
}

function setProgramRunningUi(isRunning) {
  isUserProgramRunning = isRunning;

  if (btnRun) {
    btnRun.disabled = isRunning;
  }

  if (btnStop) {
    btnStop.disabled = !isRunning;
  }

  updateTaskActionButtons();
}

function stopUserCode() {
  if (!isUserProgramRunning) {
    outputArea.textContent = '目前沒有正在執行的程式。';
    return;
  }

  smartRingRuntime.stopProgram();
  writeOutput('已送出中止程式請求，程式會在下一個 SmartRing 等待或硬體指令處停止。');
}

function appendOutput(message) {
  const currentText = outputArea.textContent;

  if (currentText === '尚未執行程式。' || currentText === '') {
    outputArea.textContent = String(message);
    return;
  }

  outputArea.textContent += `\n${String(message)}`;
}

function createPromptReader(inputText = '') {
  const normalizedInput = String(inputText ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalizedInput.length > 0 ? normalizedInput.split('\n') : [];
  let index = 0;

  return () => {
    const value = index < lines.length ? lines[index] : '';
    index += 1;
    return value;
  };
}

async function executeGeneratedCode({ inputText = null, writeToOutput = false } = {}) {
  if (!workspace) {
    return { ok: false, output: '', error: new Error('Blockly 工作區尚未初始化。') };
  }

  if (isUserProgramRunning) {
    const error = new Error('程式仍在執行中，請先按「中止程式」。');
    if (writeToOutput) appendOutput(error.message);
    return { ok: false, output: '', error };
  }

  const code = getGeneratedUserCode();

  if (!code.trim()) {
    const error = new Error('目前沒有可以執行的程式。');
    if (writeToOutput) outputArea.textContent = error.message;
    return { ok: false, output: '', error };
  }

  const capturedOutput = [];
  const originalAlert = window.alert;
  const originalPrompt = window.prompt;
  const originalConsoleLog = console.log;
  const promptReader = createPromptReader(inputText ?? '');
  const shouldMockInput = inputText !== null && inputText !== undefined;

  const capture = (message = '') => {
    const text = String(message);
    capturedOutput.push(text);
    if (writeToOutput) {
      appendOutput(text);
    }
  };

  smartRingRuntime.resetProgramStop();
  setProgramRunningUi(true);

  try {
    window.alert = (message) => {
      capture(message);
    };

    if (shouldMockInput) {
      window.prompt = () => promptReader();
    }

    console.log = (...args) => {
      capture(args.join(' '));
      originalConsoleLog(...args);
    };

    const safePrint = (message) => {
      capture(message);
    };

    const runner = new Function(
      'print',
      'SmartRing',
      'readLine',
      'prompt',
      `
      "use strict";
      return (async () => {
        ${code}
      })();
      `
    );

    const promptArgument = shouldMockInput ? promptReader : originalPrompt.bind(window);
    await runner(safePrint, smartRingRuntime, promptReader, promptArgument);

    return {
      ok: true,
      output: capturedOutput.join('\n'),
      error: null,
    };
  } catch (error) {
    if (writeToOutput) {
      if (error?.name === 'AbortError' || error?.message === '程式已中止。') {
        outputArea.textContent = '程式已中止。';
      } else {
        outputArea.textContent = `程式執行發生錯誤：\n${error.message}`;
      }
    }

    return {
      ok: false,
      output: capturedOutput.join('\n'),
      error,
    };
  } finally {
    window.alert = originalAlert;
    window.prompt = originalPrompt;
    console.log = originalConsoleLog;
    setProgramRunningUi(false);
    smartRingRuntime.resetProgramStop();
  }
}

async function runUserCode() {
  if (!workspace) return;

  clearOutput();
  const result = await executeGeneratedCode({ writeToOutput: true });

  if (result.ok && !result.output.trim()) {
    outputArea.textContent = '程式執行完成：';
  }
}


function clearWorkspace() {
  if (!workspace) return;

  const confirmed = window.confirm('確定要清除目前所有積木嗎？');

  if (!confirmed) return;

  workspace.clear();
  hasLoadedStarterForCurrentTask = false;
  resetCompetitionAssessmentResult();
  updateCodePreview();
  updateTaskActionButtons();
  outputArea.textContent = '已清除工作區。範例載入紀錄與評分結果已重置，請自行重新建置積木後再進行系統評分。';
}

function copyCode() {
  const code = codePreview.textContent || '';

  navigator.clipboard
    .writeText(code)
    .then(() => {
      outputArea.textContent = '已複製 JavaScript 程式碼。';
    })
    .catch(() => {
      outputArea.textContent = '複製失敗，請手動選取程式碼。';
    });
}

function switchWorkspaceTab(targetTab) {
  const showCode = targetTab === 'code';

  tabBlocks.classList.toggle('active', !showCode);
  tabCode.classList.toggle('active', showCode);
  blocksView.classList.toggle('active', !showCode);
  codeView.classList.toggle('active', showCode);

  updateCodePreview();

  if (!showCode && workspace) {
    setTimeout(() => {
      Blockly.svgResize(workspace);
    }, 0);
  }
}

function loadSample() {
  if (!workspace) return;

  if (!currentTask) {
    outputArea.textContent = '請先載入課程與子任務，再按「載入範例」。';
    return;
  }

  if (!currentTask.starterXml) {
    outputArea.textContent = `${currentTask.id}｜${currentTask.title} 尚未提供範例積木。`;
    return;
  }

  const confirmed = window.confirm(
    '載入範例會清除目前工作區積木，確定要載入目前題目的範例嗎？'
  );

  if (!confirmed) return;

  loadCourseStarter(currentTask);
}

function loadSmartRingSample() {
  if (!workspace) return;

  workspace.clear();

  const xmlText = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="controls_if" x="40" y="40">
        <value name="IF0">
          <block type="smartring_button_pressed">
            <field name="BUTTON">1</field>
          </block>
        </value>
        <statement name="DO0">
          <block type="smartring_set_led_rgb">
            <value name="INDEX">
              <shadow type="math_number">
                <field name="NUM">1</field>
              </shadow>
            </value>
            <value name="R">
              <shadow type="math_number">
                <field name="NUM">30</field>
              </shadow>
            </value>
            <value name="G">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <value name="B">
              <shadow type="math_number">
                <field name="NUM">0</field>
              </shadow>
            </value>
            <next>
              <block type="smartring_wait_ms">
                <value name="MS">
                  <shadow type="math_number">
                    <field name="NUM">100</field>
                  </shadow>
                </value>
                <next>
                  <block type="text_print">
                    <value name="TEXT">
                      <block type="text">
                        <field name="TEXT">BTN1/F 被按下，用 RGB 點亮第 1 顆 LED</field>
                      </block>
                    </value>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </xml>
  `;

  const xmlDom = Blockly.utils.xml.textToDom(xmlText);
  Blockly.Xml.domToWorkspace(xmlDom, workspace);

  updateCodePreview();
  switchWorkspaceTab('blocks');
  outputArea.textContent = '已載入 SmartRing 範例：按鈕控制 LED。';
}

function loadSmartRingArraySample() {
  if (!workspace) return;

  workspace.clear();

  const xmlText = `
    <xml xmlns="https://developers.google.com/blockly/xml">
      <block type="smartring_demo_pattern" x="40" y="40">
        <field name="PATTERN">centerFour</field>
        <field name="COLOR">blue</field>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">500</field></shadow></value>
            <next>
              <block type="smartring_demo_status_display">
                <field name="STATUS">progress</field>
                <value name="VALUE"><shadow type="math_number"><field name="NUM">6</field></shadow></value>
                <value name="MAX"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
                <field name="COLOR">green</field>
                <next>
                  <block type="smartring_wait_ms">
                    <value name="MS"><shadow type="math_number"><field name="NUM">500</field></shadow></value>
                    <next>
                      <block type="smartring_play_blink_animation">
                        <field name="COLOR">red</field>
                        <value name="TIMES"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
                        <next>
                          <block type="smartring_wait_ms">
                            <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                            <next>
                              <block type="smartring_play_fill_animation">
                                <field name="COLOR">yellow</field>
                                <value name="SPEED"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
                                <next>
                                  <block type="smartring_wait_ms">
                                    <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                                    <next>
                                      <block type="smartring_play_running_light_animation">
                                        <field name="COLOR">cyan</field>
                                        <value name="SPEED"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
                                        <next>
                                          <block type="smartring_wait_ms">
                                            <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                                            <next>
                                              <block type="smartring_play_shift_left_animation">
                                                <field name="COLOR">purple</field>
                                                <value name="TIMES"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                                                <value name="SPEED"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
                                                <next>
                                                  <block type="smartring_wait_ms">
                                                    <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                                                    <next>
                                                      <block type="smartring_play_alternate_blink_animation">
                                                        <field name="COLOR1">red</field>
                                                        <field name="COLOR2">blue</field>
                                                        <value name="TIMES"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
                                                        <next>
                                                          <block type="smartring_wait_ms">
                                                            <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                                                            <next>
                                                              <block type="smartring_play_breathing_animation">
                                                                <field name="COLOR">purple</field>
                                                                <value name="TIMES"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                                                                <next>
                                                                  <block type="smartring_wait_ms">
                                                                    <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                                                                    <next>
                                                                      <block type="smartring_play_rainbow_animation">
                                                                        <value name="SPEED"><shadow type="math_number"><field name="NUM">60</field></shadow></value>
                                                                        <next>
                                                                          <block type="smartring_wait_ms">
                                                                            <value name="MS"><shadow type="math_number"><field name="NUM">300</field></shadow></value>
                                                                            <next>
                                                                              <block type="smartring_play_clear_animation">
                                                                                <value name="SPEED"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
                                                                              </block>
                                                                            </next>
                                                                          </block>
                                                                        </next>
                                                                      </block>
                                                                    </next>
                                                                  </block>
                                                                </next>
                                                              </block>
                                                            </next>
                                                          </block>
                                                        </next>
                                                      </block>
                                                    </next>
                                                  </block>
                                                </next>
                                              </block>
                                            </next>
                                          </block>
                                        </next>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>

      <block type="smartring_clear_led_buffer" x="40" y="430">
        <next>
          <block type="smartring_set_buffer_led_color">
            <value name="INDEX"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <field name="COLOR">red</field>
            <next>
              <block type="smartring_set_buffer_led_channel">
                <value name="INDEX"><shadow type="math_number"><field name="NUM">2</field></shadow></value>
                <value name="CHANNEL"><shadow type="smartring_rgb_channel"><field name="CHANNEL">g</field></shadow></value>
                <value name="VALUE"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
                <next>
                  <block type="smartring_set_buffer_led_rgb">
                    <value name="INDEX"><shadow type="math_number"><field name="NUM">3</field></shadow></value>
                    <value name="R"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
                    <value name="G"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
                    <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
                    <next>
                      <block type="smartring_show_led_buffer" />
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </xml>
  `;

  const xmlDom = Blockly.utils.xml.textToDom(xmlText);
  Blockly.Xml.domToWorkspace(xmlDom, workspace);

  updateCodePreview();
  switchWorkspaceTab('blocks');
  outputArea.textContent = '已載入 SR-A01 範例：程式中止、陣列位移動畫、進階視覺效果 DEMO 與暫存陣列 RGB 仿作。';
}

function getStudentProfile() {
  return {
    className: studentClass.value.trim(),
    seatNumber: studentNumber.value.trim(),
    name: studentName.value.trim(),
    courseCode: courseCode.value.trim().toUpperCase(),
    taskId: taskSelector.value,
    mode: currentCourseMode,
  };
}

function createSafeFileName(text) {
  return String(text)
    .trim()
    .replace(/[\\/:*?"<>|]/g, '_')
    .replace(/\s+/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_+|_+$/g, '');
}

function createWorkspaceFileName() {
  const profile = getStudentProfile();

  const parts = [
    profile.taskId || profile.courseCode || 'SmartRing',
    profile.className,
    profile.seatNumber,
    profile.name,
  ]
    .map(createSafeFileName)
    .filter(Boolean);

  return `${parts.join('_') || 'SmartRing'}.blockly.xml`;
}

function saveWorkspaceToFile() {
  if (!workspace) return;

  const xmlDom = Blockly.Xml.workspaceToDom(workspace);
  const xmlText = Blockly.Xml.domToPrettyText(xmlDom);
  const blob = new Blob([xmlText], { type: 'text/xml;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const fileName = createWorkspaceFileName();

  const link = document.createElement('a');
  link.href = url;
  link.download = fileName;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);

  outputArea.textContent = `已下載積木檔案：${fileName}`;
}

function requestLoadWorkspaceFromFile() {
  if (!workspace) return;
  blockFileInput.value = '';
  blockFileInput.click();
}

function loadWorkspaceFromFile(file) {
  if (!file || !workspace) return;

  const confirmed = window.confirm(
    '載入積木檔會取代目前工作區內容，確定要繼續嗎？'
  );

  if (!confirmed) return;

  const reader = new FileReader();

  reader.onload = () => {
    try {
      const xmlText = String(reader.result || '');
      const xmlDom = Blockly.utils.xml.textToDom(xmlText);

      workspace.clear();
      Blockly.Xml.domToWorkspace(xmlDom, workspace);

      updateCodePreview();
      switchWorkspaceTab('blocks');
      outputArea.textContent = `已載入積木檔案：${file.name}`;
    } catch (error) {
      outputArea.textContent = `載入積木檔案失敗：\n${error.message}`;
    }
  };

  reader.onerror = () => {
    outputArea.textContent = '讀取檔案失敗，請重新選擇檔案。';
  };

  reader.readAsText(file, 'utf-8');
}

function loadCourseStarter(course) {
  if (!workspace || !course?.starterXml) {
    return false;
  }

  try {
    workspace.clear();

    const xmlDom = Blockly.utils.xml.textToDom(course.starterXml);
    Blockly.Xml.domToWorkspace(xmlDom, workspace);

    updateCodePreview();
    switchWorkspaceTab('blocks');

    hasLoadedStarterForCurrentTask = true;
    resetCompetitionAssessmentResult();
    updateTaskActionButtons();

    const starterMessage = course.starterMessage || `已載入 ${course.id} 起始積木。`;
    outputArea.textContent = isProgrammingProblemTask(course, currentCourseGroup)
      ? `${starterMessage}
提醒：本題已載入範例積木，不能上傳成績。若要上傳成績，請按「清除工作區」後自行重新建置積木並完成系統評分。`
      : starterMessage;

    return true;
  } catch (error) {
    outputArea.textContent = `載入 ${course.id} 起始積木失敗：\n${error.message}`;
    return false;
  }
}

function renderListItems(items = []) {
  if (!Array.isArray(items)) {
    const text = String(items || '').trim();
    return text ? `<p>${escapeHtml(text)}</p>` : '';
  }

  const rows = items
    .map((item) => String(item || '').trim())
    .filter(Boolean)
    .map((item) => `<li>${escapeHtml(item)}</li>`)
    .join('');

  return rows ? `<ol>${rows}</ol>` : '';
}

function renderOptionalTaskSection(title, content) {
  const body = Array.isArray(content)
    ? renderListItems(content)
    : renderListItems(String(content || '').trim());

  if (!body) {
    return '';
  }

  return `
    <section class="modal-section student-task-section">
      <h3>${escapeHtml(title)}</h3>
      ${body}
    </section>
  `;
}

function getStudentTaskDescription(task) {
  return task.taskDescription || task.summary || task.description || '請依照任務要求完成 SmartRing 操作。';
}

function getStudentPassConditions(task) {
  return task.passConditions || task.criteria || [];
}

function getStudentHints(task) {
  return task.hints || task.keyHints || [];
}

function getStudentChallenges(task) {
  if (task.challenges) return task.challenges;
  if (task.challenge) return [task.challenge];
  return [];
}

function renderStudentTaskContent(task, { compact = false } = {}) {
  const description = getStudentTaskDescription(task);
  const passConditions = getStudentPassConditions(task);
  const hints = getStudentHints(task);
  const challenges = getStudentChallenges(task);

  const compactSections = compact
    ? `
      ${renderOptionalTaskSection('任務說明', description)}
      ${renderOptionalTaskSection('過關條件', passConditions)}
    `
    : `
      ${renderOptionalTaskSection('任務說明', description)}
      ${renderOptionalTaskSection('過關條件', passConditions)}
      ${renderOptionalTaskSection('重點提示', hints)}
      ${renderOptionalTaskSection('延伸挑戰', challenges)}
    `;

  return `
    <article class="student-task-content">
      <h2>${escapeHtml(task.title || '未命名任務')}</h2>
      ${compactSections}
    </article>
  `;
}

function stripPreTag(content) {
  return String(content || '')
    .replace(/^\s*<pre>/i, '')
    .replace(/<\/pre>\s*$/i, '')
    .trim();
}

function escapeHtml(content) {
  return String(content || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeNoOutputWording(content) {
  return String(content || '')
    .replace(/輸出為空白/g, '不輸出')
    .replace(/輸出空白/g, '不輸出')
    .replace(/空白輸出/g, '不輸出')
    .replace(/輸出空字串/g, '不輸出')
    .replace(/沒有輸出內容/g, '不輸出');
}

function normalizeProblemDescription(content, problemTitle = '') {
  const title = String(problemTitle || '').trim();
  const lines = String(content || '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n');

  const cleanedLines = [];
  let hasRemovedLeadingTitle = false;
  let hasRemovedHeading = false;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (!hasRemovedLeadingTitle && title && line === `題目：${title}`) {
      hasRemovedLeadingTitle = true;
      continue;
    }

    if (!hasRemovedHeading && /^題目說明\s*[:：]?$/.test(line)) {
      hasRemovedHeading = true;
      continue;
    }

    cleanedLines.push(rawLine);
  }

  return normalizeNoOutputWording(cleanedLines.join('\n')).trim();
}

function getStatementText(task, key) {
  const statement = task?.statement;

  if (statement && typeof statement === 'object' && !Array.isArray(statement)) {
    return String(statement[key] || '').trim();
  }

  if (key === 'description' && typeof statement === 'string') {
    return statement.trim();
  }

  return '';
}

function getProblemDescription(task) {
  const problemTitle = task?.problemTitle || task?.title || '';
  const description =
    getStatementText(task, 'description') ||
    task?.problemStatement ||
    task?.description ||
    '尚未建立題目內容。';

  return normalizeProblemDescription(description, problemTitle);
}

function getProblemInputDescription(task) {
  const inputDescription =
    getStatementText(task, 'input') ||
    task?.inputDescription ||
    task?.input ||
    '';

  return normalizeNoOutputWording(inputDescription).trim();
}

function getProblemOutputDescription(task) {
  const outputDescription =
    getStatementText(task, 'output') ||
    task?.outputDescription ||
    task?.output ||
    '';

  return normalizeNoOutputWording(outputDescription).trim();
}

function renderProblemTextSection(title, content) {
  const text = String(content || '').trim();
  if (!text) return '';

  return `
    <section class="problem-section modal-section">
      <h3>${title}</h3>
      <p>${escapeHtml(text)}</p>
    </section>
  `;
}

function renderProblemExampleTable(examples = []) {
  if (!Array.isArray(examples) || examples.length === 0) return '';

  const renderMultilineHtml = (value) =>
    escapeHtml(stripPreTag(value || '')).replace(/\n/g, '<br>');

  const rows = examples
    .map((example) => {
      const input = example.input || '無輸入';
      const output = example.output ?? '';
      const explanation = normalizeNoOutputWording(example.explanation || '');

      return `
        <tr>
          <td><pre class="problem-table-pre">${escapeHtml(stripPreTag(input))}</pre></td>
          <td><pre class="problem-table-pre">${escapeHtml(stripPreTag(output))}</pre></td>
          <td class="problem-example-explanation">${renderMultilineHtml(explanation)}</td>
        </tr>
      `;
    })
    .join('');

  return `
    <section class="problem-section modal-section problem-example-section">
      <h3>範例格式</h3>
      <div class="problem-example-table-wrap">
        <table class="problem-example-table">
          <thead>
            <tr>
              <th>使用者輸入</th>
              <th>輸出</th>
              <th>範例說明</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </section>
  `;
}

function getProblemExamples(task) {
  if (Array.isArray(task.examples) && task.examples.length > 0) {
    return task.examples;
  }

  const sampleInput = task.sampleInput || '';
  const sampleOutput = task.sampleOutput || '';

  if (!sampleInput && !sampleOutput) return [];

  return [
    {
      input: sampleInput || '無輸入',
      output: sampleOutput,
      explanation: normalizeNoOutputWording(task.problemNote || task.description || '請比對使用者輸入與輸出結果。'),
    },
  ];
}

function renderProblemTaskContent(task) {
  const problemTitle = task.problemTitle || task.title || '未命名題目';
  const statement = getProblemDescription(task);
  const inputDescription = getProblemInputDescription(task);
  const outputDescription = getProblemOutputDescription(task);
  const examples = getProblemExamples(task);

  return `
    <article class="problem-task-content">
      <h2 class="problem-title">${escapeHtml(problemTitle)}</h2>
      ${renderProblemTextSection('題目說明', statement)}
      ${renderProblemTextSection('輸入說明', inputDescription)}
      ${renderProblemTextSection('輸出說明', outputDescription)}
      ${renderProblemExampleTable(examples)}
    </article>
  `;
}

function updateSmartRingPanelCollapsed() {
  const panel = document.querySelector('.smartring-panel');
  panel?.classList.toggle('collapsed', isSmartRingPanelCollapsed);
  sidePanel?.classList.toggle('smart-ring-collapsed', isSmartRingPanelCollapsed);

  if (smartRingInfo) {
    smartRingInfo.hidden = isSmartRingPanelCollapsed;
  }

  if (btnToggleSmartRingPanel) {
    btnToggleSmartRingPanel.setAttribute('aria-expanded', String(!isSmartRingPanelCollapsed));
    const toggleText = btnToggleSmartRingPanel.querySelector('.panel-toggle-text');
    if (toggleText) {
      toggleText.textContent = isSmartRingPanelCollapsed ? '展開 ▼' : '收合 ▲';
    }
  }
}

function toggleSmartRingPanel() {
  isSmartRingPanelCollapsed = !isSmartRingPanelCollapsed;
  updateSmartRingPanelCollapsed();
}


function setSmartRingPanelCollapsed(collapsed) {
  isSmartRingPanelCollapsed = Boolean(collapsed);
  updateSmartRingPanelCollapsed();
}

function applyCourseTypePanelPreference(courseGroup) {
  const type = getCourseType(courseGroup);

  if (type === 'smartring') {
    setSmartRingPanelCollapsed(false);
    return;
  }

  if (type === 'programming') {
    setSmartRingPanelCollapsed(true);
  }
}


function updateTaskPanelCollapsed() {
  taskPanel?.classList.toggle('collapsed', isTaskPanelCollapsed);
  sidePanel?.classList.toggle('task-panel-collapsed', isTaskPanelCollapsed);

  if (taskInfo) {
    taskInfo.hidden = isTaskPanelCollapsed;
  }

  if (btnToggleTaskPanel) {
    btnToggleTaskPanel.setAttribute('aria-expanded', String(!isTaskPanelCollapsed));
    const toggleText = btnToggleTaskPanel.querySelector('.panel-toggle-text');
    if (toggleText) {
      toggleText.textContent = isTaskPanelCollapsed ? '展開 ▼' : '收合 ▲';
    }
  }
}

function toggleTaskPanel() {
  isTaskPanelCollapsed = !isTaskPanelCollapsed;
  updateTaskPanelCollapsed();
}

function updateResultPanelCollapsed() {
  resultPanel?.classList.toggle('collapsed', isResultPanelCollapsed);
  sidePanel?.classList.toggle('result-panel-collapsed', isResultPanelCollapsed);

  if (outputArea) {
    outputArea.hidden = isResultPanelCollapsed;
  }

  if (btnToggleResultPanel) {
    btnToggleResultPanel.setAttribute('aria-expanded', String(!isResultPanelCollapsed));
    const toggleText = btnToggleResultPanel.querySelector('.panel-toggle-text');
    if (toggleText) {
      toggleText.textContent = isResultPanelCollapsed ? '展開 ▼' : '收合 ▲';
    }
  }
}

function toggleResultPanel() {
  isResultPanelCollapsed = !isResultPanelCollapsed;
  updateResultPanelCollapsed();
}


function updateModeStatus({ announce = false } = {}) {
  updateCourseModeDisplay();
  resetCompetitionAssessmentResult();

  if (!announce) return;

  if (isProgrammingProblemTask(currentTask, currentCourseGroup)) {
    writeOutput(`已載入${getModeText()}題庫：請按「系統評分」，產生評分結果後可上傳成績。`);
  } else {
    writeOutput('已載入 SmartRing 課程：請使用「執行程式」觀察硬體互動結果，此類課程不進行成績上傳。');
  }
}

function renderProblemTaskModal(task) {
  taskModalTitle.textContent = task.problemTitle || task.title || '競賽題目';
  taskModalBody.innerHTML = renderProblemTaskContent(task);
}

function renderLearningTaskModal(task, courseGroup) {
  taskModalTitle.textContent = `${task.id}｜${task.title}`;
  taskModalBody.innerHTML = `
    ${renderStudentTaskContent(task)}
  `;
}

function renderPublicCourseCodes() {
  sidePanel?.classList.remove('programming-problem');

  if (taskPanelHeading) {
    taskPanelHeading.textContent = '課程代碼';
  }

  taskInfo.innerHTML = `
    <h2>課程代碼</h2>
    ${getPublicCourseGroupListHtml()}
  `;

  taskModalTitle.textContent = '課程代碼';
  taskModalBody.innerHTML = taskInfo.innerHTML;
}

function renderTaskInfo(task, courseGroup) {
  const isProblemTask = isProgrammingProblemTask(task, courseGroup);

  sidePanel?.classList.toggle('programming-problem', isProblemTask);

  if (taskPanelHeading) {
    taskPanelHeading.textContent = isProblemTask ? '競賽題目' : '課程任務摘要';
  }

  if (isProblemTask) {
    taskInfo.innerHTML = `
      <div class="problem-task-fixed-panel">
        ${renderProblemTaskContent(task)}
      </div>
    `;
    renderProblemTaskModal(task);
    return;
  }

  taskInfo.innerHTML = `
    ${renderStudentTaskContent(task, { compact: true })}
    <p class="summary-note">需要提示或延伸挑戰時，請按右上角「查看完整任務」。</p>
  `;

  renderLearningTaskModal(task, courseGroup);
}

function getTaskSelectorLabel(task, courseGroup) {
  const prefix = `${courseGroup.id}-`;
  const shortTaskId = String(task.id || '').startsWith(prefix)
    ? String(task.id).slice(prefix.length)
    : String(task.id || '');

  return shortTaskId ? `${shortTaskId}｜${task.title}` : task.title;
}

function renderTaskSelector(courseGroup, selectedTaskId) {
  taskSelector.innerHTML = courseGroup.tasks
    .map((task) => {
      const selected = task.id === selectedTaskId ? ' selected' : '';
      return `<option value="${task.id}"${selected}>${escapeHtml(getTaskSelectorLabel(task, courseGroup))}</option>`;
    })
    .join('');

  taskSelector.disabled = false;
}

function resetTaskSelector() {
  taskSelector.innerHTML = '<option value="">請先載入課程組</option>';
  taskSelector.disabled = true;
}

function loadTask(task, courseGroup, { shouldLoadStarter = false } = {}) {
  if (!task || !courseGroup) return;

  hasLoadedStarterForCurrentTask = false;
  resetCompetitionAssessmentResult();
  currentTask = task;
  renderTaskSelector(courseGroup, task.id);
  renderTaskInfo(task, courseGroup);
  updateTaskActionButtons();

  if (shouldLoadStarter) {
    const hasStarter = loadCourseStarter(task);

    if (!hasStarter) {
      outputArea.textContent = `已載入子任務：${task.id}｜${task.title}`;
    }
    return;
  }

  outputArea.textContent = `已載入子任務：${task.id}｜${task.title}。工作區積木未變更，如需範例請按「載入範例」。`;
}

async function loadCourse() {
  const profile = getStudentProfile();
  const code = profile.courseCode;

  if (!code) {
    outputArea.textContent = '請先輸入課程組代碼，例如 SRB00、SRA00、SRF00、SRC00、JSB00、JSA00、CPB00。';
    courseCode.focus();
    return;
  }

  const courseGroup = await getCourseGroup(code);

  if (!courseGroup) {
    currentCourseGroup = null;
    currentTask = null;
    hasLoadedStarterForCurrentTask = false;
    currentCourseMode = 'learning';
    updateModeStatus();
    resetCompetitionAssessmentResult();
    resetTaskSelector();
    updateTaskActionButtons();
    sidePanel?.classList.remove('programming-problem');

    if (taskPanelHeading) {
      taskPanelHeading.textContent = '課程任務摘要';
    }

    taskInfo.innerHTML = `
      <h2>找不到課程組：${code}</h2>
      <p>請確認課程代碼是否輸入正確，或先使用以下公開基礎課程。</p>
      ${getPublicCourseGroupListHtml()}
    `;

    taskModalTitle.textContent = '找不到課程組';
    taskModalBody.innerHTML = `
      <p>找不到課程組代碼：${code}</p>
      <p>請先確認課程代碼，或測試以下公開基礎課程：</p>
      ${getPublicCourseGroupListHtml()}
    `;

    outputArea.textContent = `找不到課程組代碼：${code}`;
    return;
  }

  currentCourseGroup = courseGroup;
  currentCourseMode = normalizeCourseMode(courseGroup.mode);
  applyCourseTypePanelPreference(courseGroup);
  updateModeStatus({ announce: true });

  const defaultTask = getDefaultTask(courseGroup);

  if (!defaultTask) {
    currentTask = null;
    hasLoadedStarterForCurrentTask = false;
    resetCompetitionAssessmentResult();
    resetTaskSelector();
    updateTaskActionButtons();
    sidePanel?.classList.remove('programming-problem');

    if (taskPanelHeading) {
      taskPanelHeading.textContent = '課程任務摘要';
    }

    outputArea.textContent = `課程組 ${courseGroup.id} 尚未建立子任務。`;
    return;
  }

  loadTask(defaultTask, courseGroup);
}

function changeTask() {
  if (!currentCourseGroup) return;

  const task = getTaskById(currentCourseGroup, taskSelector.value);

  if (!task) {
    outputArea.textContent = `找不到子任務：${taskSelector.value}`;
    return;
  }

  loadTask(task, currentCourseGroup);
}


function normalizeOutputForCompare(output = '') {
  return String(output)
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .split('\n')
    .map((line) => line.trimEnd())
    .join('\n')
    .trimEnd();
}


function trimTrailingEmptyLines(lines = []) {
  const output = [...lines];
  while (output.length > 0 && String(output[output.length - 1]).trim() === '') {
    output.pop();
  }
  return output;
}

function sanitizeAssessmentInput(input = '') {
  const normalized = String(input ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalized.split('\n');
  const cleanedLines = [];

  for (const rawLine of lines) {
    const line = String(rawLine ?? '');
    const trimmed = line.trim();

    if (/^(預期答案|參考答案|正確答案|答案|分數)\s*[:：]/.test(trimmed)) {
      break;
    }

    const inputLabelMatch = trimmed.match(/^第[一二三四五六七八九十0-9]+個輸入\s*[:：]\s*(.*)$/);
    if (inputLabelMatch) {
      const inlineValue = inputLabelMatch[1].trim();
      if (inlineValue) {
        cleanedLines.push(inlineValue);
      }
      continue;
    }

    cleanedLines.push(line);
  }

  return trimTrailingEmptyLines(cleanedLines).join('\n').trim();
}

function sanitizeAssessmentExpectedOutput(output = '') {
  const normalized = String(output ?? '').replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  const lines = normalized.split('\n');
  const cleanedLines = [];

  for (const rawLine of lines) {
    const line = String(rawLine ?? '');
    const trimmed = line.trim();

    const answerMatch = trimmed.match(/^(預期答案|參考答案|正確答案|答案)\s*[:：]\s*(.*)$/);
    if (answerMatch) {
      const inlineValue = answerMatch[2].trim();
      if (inlineValue) {
        cleanedLines.push(inlineValue);
      }
      continue;
    }

    if (/^分數\s*[:：]/.test(trimmed)) {
      break;
    }

    cleanedLines.push(line);
  }

  return trimTrailingEmptyLines(cleanedLines).join('\n').trim();
}

function sanitizeAssessmentTestCase(testCase = {}, index = 0, task = currentTask) {
  const rawInput = testCase.input ?? '';
  const rawExpectedOutput = testCase.expectedOutput ?? testCase.output ?? '';
  const input = sanitizeAssessmentInput(rawInput);
  const expectedOutput = sanitizeAssessmentExpectedOutput(rawExpectedOutput);

  if (input !== String(rawInput ?? '') || expectedOutput !== String(rawExpectedOutput ?? '')) {
    console.warn(
      `[Blockly Lab] 測資已自動清理：${task?.id || 'unknown-task'} #${index + 1}。建議使用新版題庫轉換器重新產生課程 JS。`
    );
  }

  return {
    id: testCase.id || `case-${index + 1}`,
    input,
    expectedOutput,
  };
}

function getTaskTestCases(task = currentTask) {
  if (!Array.isArray(task?.testCases)) return [];

  return task.testCases.map((testCase, index) => sanitizeAssessmentTestCase(testCase, index, task));
}

function formatMultilineForOutput(value, emptyText = '') {
  const text = String(value ?? '');
  return text.length > 0 ? text : emptyText;
}

function getAssessmentScore(passedCount = 0, totalCount = 0) {
  if (!totalCount) return 0;
  return Math.round((passedCount / totalCount) * 100);
}

function renderAssessmentCellPre(value, emptyText = '無') {
  return `<pre class="assessment-pre">${escapeHtml(formatMultilineForOutput(value, emptyText))}</pre>`;
}

function renderAssessmentResultHtml(assessment) {
  const total = Number(assessment?.total || 0);
  const isContestMode = normalizeCourseMode(assessment?.mode || currentCourseMode) === 'contest';

  const rows = (assessment?.cases || [])
    .map((item, index) => {
      const caseStatusClass = item.passed ? 'passed' : 'failed';
      const caseStatusText = item.passed ? '通過' : '未通過';

      if (isContestMode) {
        return `
          <tr class="assessment-row ${caseStatusClass}">
            <td class="assessment-case-number">${index + 1}</td>
            <td><span class="assessment-badge ${caseStatusClass}">${caseStatusText}</span></td>
          </tr>
        `;
      }

      const errorCell = item.errorMessage
        ? `<div class="assessment-error">${escapeHtml(item.errorMessage)}</div>`
        : '';

      return `
        <tr class="assessment-row ${caseStatusClass}">
          <td class="assessment-case-number">${index + 1}</td>
          <td><span class="assessment-badge ${caseStatusClass}">${caseStatusText}</span></td>
          <td>${renderAssessmentCellPre(item.input)}</td>
          <td>${renderAssessmentCellPre(item.expectedOutput)}</td>
          <td>${renderAssessmentCellPre(item.actualOutput)}${errorCell}</td>
        </tr>
      `;
    })
    .join('');

  const tableHeaderHtml = isContestMode
    ? `
            <tr>
              <th>案例</th>
              <th>結果</th>
            </tr>
    `
    : `
            <tr>
              <th>案例</th>
              <th>結果</th>
              <th>使用者輸入</th>
              <th>預期輸出</th>
              <th>實際輸出</th>
            </tr>
    `;

  const contestNote = isContestMode
    ? '<p class="assessment-note">競賽模式僅顯示每筆測資是否通過，不顯示輸入、預期輸出與實際輸出。</p>'
    : '';

  const tableHtml = total > 0
    ? `
      ${contestNote}
      <div class="assessment-table-wrap">
        <table class="assessment-table">
          <thead>${tableHeaderHtml}</thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `
    : '<p class="assessment-note">此題尚未建立 testCases，無法進行系統評分。</p>';

  return `
    <article class="assessment-report">
      <h2>系統評分結果</h2>
      ${tableHtml}
    </article>
  `;
}

function showAssessmentResult(assessment) {
  outputArea.innerHTML = renderAssessmentResultHtml(assessment);
}

async function runProgrammingTestCases() {
  const testCases = getTaskTestCases(currentTask);

  if (testCases.length === 0) {
    await runUserCode();
    writeOutput('');
    writeOutput('此題尚未建立 testCases，無法進行系統評分。請改用「執行程式」自行試跑。');
    return {
      total: 0,
      passed: 0,
      score: 0,
      allPassed: false,
      cases: [],
    };
  }

  clearOutput();
  writeOutput(`正在進行 ${currentTask.id}｜${currentTask.title} 的系統評分...`);

  const results = [];

  for (const testCase of testCases) {
    const result = await executeGeneratedCode({
      inputText: testCase.input,
      writeToOutput: false,
    });

    const actualOutput = result.output;
    const expectedOutput = testCase.expectedOutput;
    const passed =
      result.ok &&
      normalizeOutputForCompare(actualOutput) === normalizeOutputForCompare(expectedOutput);

    results.push({
      ...testCase,
      actualOutput,
      passed,
      errorMessage: result.error ? result.error.message : '',
    });
  }

  const passedCount = results.filter((item) => item.passed).length;
  const totalCount = results.length;

  const assessment = {
    courseId: currentCourseGroup.id,
    courseTitle: currentCourseGroup.title,
    taskId: currentTask.id,
    taskTitle: currentTask.problemTitle || currentTask.title,
    mode: normalizeCourseMode(currentCourseMode),
    modeText: getModeText(),
    total: totalCount,
    passed: passedCount,
    score: getAssessmentScore(passedCount, totalCount),
    allPassed: totalCount > 0 && passedCount === totalCount,
    cases: results,
    assessedAt: new Date().toISOString(),
  };

  showAssessmentResult(assessment);
  return assessment;
}

async function testTask() {
  if (!currentTask) {
    outputArea.textContent = '請先輸入課程組代碼並按下「載入課程」。';
    return;
  }

  if (isProgrammingProblemTask()) {
    const assessment = await runProgrammingTestCases();
    lastAssessmentResult = assessment;

    hasProgrammingAssessmentResult = assessment.total > 0;

    updateSubmitScoreVisibility();
    return;
  }

  outputArea.textContent = 'SmartRing 課程不進行系統評分，請使用「執行程式」觀察硬體互動結果。';
  hasProgrammingAssessmentResult = false;
  lastAssessmentResult = null;
  updateSubmitScoreVisibility();
}

function buildScoreUploadPayload(profile) {
  return {
    version: 'MVP-J09-2-demo-starter-upload-guard',
    submittedAt: new Date().toISOString(),
    className: profile.className,
    seatNumber: profile.seatNumber,
    studentName: profile.name,
    studentKey: getStudentKey(profile),
    courseId: currentCourseGroup?.id || '',
    courseTitle: currentCourseGroup?.title || '',
    taskId: currentTask?.id || '',
    taskTitle: currentTask?.problemTitle || currentTask?.title || '',
    mode: normalizeCourseMode(currentCourseMode),
    score: lastAssessmentResult?.score ?? 0,
    passRate: lastAssessmentResult?.score ?? 0,
    passed: lastAssessmentResult?.passed ?? 0,
    total: lastAssessmentResult?.total ?? 0,
    allPassed: Boolean(lastAssessmentResult?.allPassed),
    pageUrl: window.location.href,
    userAgent: window.navigator.userAgent,
  };
}

function isScoreUploadConfigured() {
  const url = String(SCORE_UPLOAD_URL || '').trim();
  return Boolean(url && !url.includes('請貼上') && !url.includes('YOUR_'));
}

async function uploadScorePayload(payload) {
  const url = String(SCORE_UPLOAD_URL || '').trim();

  if (!isScoreUploadConfigured()) {
    throw new Error('尚未設定 Google Apps Script Web App URL。請先部署 Apps Script，並將 Web App URL 填入 src/main.js 的 SCORE_UPLOAD_URL。');
  }

  const token = String(SCORE_UPLOAD_TOKEN || '').trim();
  const payloadWithToken = token ? { ...payload, token } : payload;

  await fetch(url, {
    method: 'POST',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'text/plain;charset=utf-8',
    },
    body: JSON.stringify(payloadWithToken),
  });

  return {
    ok: true,
    message: '已送出成績上傳請求。因 Google Apps Script 採 no-cors 送出，請到 Google Sheet 確認是否寫入成功。',
  };
}

function renderScoreUploadResult(payload, { status = 'preview', message = '' } = {}) {
  const statusTitle = {
    preview: '成績上傳資料預覽',
    sending: '成績上傳中',
    success: '成績上傳請求已送出',
    error: '成績上傳失敗',
  }[status] || '成績上傳資料';

  const statusClass = status === 'success' ? 'passed' : status === 'error' ? 'failed' : '';
  const rows = [
    ['班級', payload.className],
    ['座號', payload.seatNumber],
    ['姓名', payload.studentName],
    ['學生識別', payload.studentKey],
    ['課程組', `${payload.courseId}｜${payload.courseTitle}`],
    ['子任務', `${payload.taskId}｜${payload.taskTitle}`],
    ['分數', `${payload.score}`],
    ['本機測資', `${payload.passed} / ${payload.total}`],
    ['通過狀態', payload.allPassed ? '全部通過' : '尚未全部通過'],
  ]
    .map(([label, value]) => `
      <tr>
        <th>${escapeHtml(label)}</th>
        <td>${escapeHtml(value)}</td>
      </tr>
    `)
    .join('');

  const noteHtml = message
    ? `<p class="assessment-note ${statusClass}">${escapeHtml(message)}</p>`
    : '';

  return `
    <article class="score-upload-preview">
      <h2>${statusTitle}</h2>
      ${noteHtml}
      <table class="score-upload-table">
        <tbody>${rows}</tbody>
      </table>
    </article>
  `;
}

async function submitScore() {
  const profile = getStudentProfile();

  if (!isProgrammingProblemTask(currentTask, currentCourseGroup)) {
    outputArea.textContent = '目前課程不是程式解題任務，不支援成績上傳。';
    return;
  }

  const profileStatus = getStudentProfileCompleteness(profile);

  if (!profileStatus.ok) {
    markStudentProfileFields(profileStatus.missingFields);
    outputArea.textContent =
      `上傳成績前，請先填寫：${profileStatus.missingFields.join('、')}。`;
    updateSubmitScoreVisibility();
    return;
  }

  saveStudentProfileToStorage();
  markStudentProfileFields([]);

  if (!currentTask) {
    outputArea.textContent = '請先載入課程組與子任務後再上傳成績。';
    return;
  }

  if (!hasProgrammingAssessmentResult || !lastAssessmentResult || lastAssessmentResult.total <= 0) {
    outputArea.textContent = '請先按「系統評分」並產生有效評分結果後，再上傳成績。';
    updateSubmitScoreVisibility();
    return;
  }

  if (hasLoadedStarterForCurrentTask) {
    outputArea.textContent = '本題已載入範例積木，不能上傳成績。請按「清除工作區」清空積木後，自行重新建置積木並完成系統評分，再上傳成績。';
    updateSubmitScoreVisibility();
    return;
  }

  const payload = buildScoreUploadPayload(profile);

  btnSubmitScore.disabled = true;
  outputArea.innerHTML = renderScoreUploadResult(payload, {
    status: 'sending',
    message: '正在送出成績資料，請稍候。',
  });

  try {
    const result = await uploadScorePayload(payload);
    outputArea.innerHTML = renderScoreUploadResult(payload, {
      status: 'success',
      message: result.message,
    });
  } catch (error) {
    outputArea.innerHTML = renderScoreUploadResult(payload, {
      status: 'error',
      message: error.message || '成績上傳時發生未知錯誤。',
    });
  } finally {
    updateSubmitScoreVisibility();
  }
}


function getCourseHealthText(inspection) {
  const messages = inspection?.messages || [];
  return messages.length > 0 ? messages.join('；') : '課程格式檢查正常。';
}

async function renderCourseManager() {
  courseManagerBody.innerHTML = '<p>載入中…</p>';
  const courses = await getAllCourseGroups();

  if (!courses.length) {
    courseManagerBody.innerHTML = '<p>目前沒有可載入的課程。</p>';
    return;
  }

  const rows = courses
    .map((course) => {
      const inspection = inspectCourseGroup(course);
      const taskCount = Array.isArray(course.tasks) ? course.tasks.length : 0;
      const modeText = getModeText(course.mode);
      const typeText = getCourseTypeLabel(course.type);
      const healthText = getCourseHealthText(inspection);

      return `
        <tr>
          <td><code>${escapeHtml(course.id)}</code></td>
          <td>${escapeHtml(course.title || course.id)}</td>
          <td>${escapeHtml(typeText)}</td>
          <td>${escapeHtml(modeText)}</td>
          <td>${taskCount}</td>
          <td>
            <span class="course-health-badge ${escapeHtml(inspection.status)}">${escapeHtml(inspection.label)}</span>
            <small>${escapeHtml(healthText)}</small>
          </td>
          <td>
            <button type="button" class="small-button btn-copy-course-code" data-course-code="${escapeHtml(course.id)}">複製代碼</button>
          </td>
        </tr>
      `;
    })
    .join('');

  courseManagerBody.innerHTML = `
    <p class="manager-note">此清單顯示目前平台可載入的所有課程 JS。學生首頁公開課程清單仍維持固定，不會自動公開所有題庫。</p>
    <div class="course-manager-table-wrap">
      <table class="course-manager-table">
        <thead>
          <tr>
            <th>課程代碼</th>
            <th>課程名稱</th>
            <th>類型</th>
            <th>模式</th>
            <th>題數</th>
            <th>檢查狀態</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
}

function openCourseManager() {
  courseManagerModal.classList.add('active');
  courseManagerModal.setAttribute('aria-hidden', 'false');
  renderCourseManager();
}

function closeCourseManager() {
  courseManagerModal.classList.remove('active');
  courseManagerModal.setAttribute('aria-hidden', 'true');
}

async function copyCourseCodeFromManager(code) {
  const courseCodeText = String(code || '').trim();
  if (!courseCodeText) return;

  try {
    await navigator.clipboard.writeText(courseCodeText);
    outputArea.textContent = `已複製課程代碼：${courseCodeText}`;
  } catch (error) {
    outputArea.textContent = `無法自動複製課程代碼，請手動複製：${courseCodeText}`;
  }
}


function openTaskModal() {
  taskModal.classList.add('active');
  taskModal.setAttribute('aria-hidden', 'false');
}

function closeTaskModal() {
  taskModal.classList.remove('active');
  taskModal.setAttribute('aria-hidden', 'true');
}

function updateSmartRingControlButtons(isConnected = smartRingRuntime.isConnected()) {
  const simulatorOpen = isSimulatorOpen();
  const canSendLedCommand = isConnected || simulatorOpen;

  if (btnConnectSmartRing) {
    btnConnectSmartRing.textContent = isConnected ? '斷線' : '連線';
    btnConnectSmartRing.title = isConnected ? '斷開 SmartRing 實體硬體連線' : '連線 SmartRing 實體硬體';
    btnConnectSmartRing.disabled = false;
  }

  if (btnDisconnectSmartRing) {
    btnDisconnectSmartRing.hidden = true;
    btnDisconnectSmartRing.disabled = true;
  }

  if (btnToggleSimulator) {
    btnToggleSimulator.textContent = simulatorOpen ? '關閉模擬' : '開啟模擬';
    btnToggleSimulator.title = simulatorOpen ? '關閉 SmartRing 模擬器' : '開啟 SmartRing 模擬器';
  }

  btnTestLedRed.disabled = !canSendLedCommand;
  btnTestLedClear.disabled = !canSendLedCommand;
}

function setSmartRingConnectedUi(isConnected, message) {
  const text = message || (isConnected ? 'SmartRing 已連線' : 'SmartRing 尚未連線');

  smartRingStatus.textContent = text;
  serialStatusValue.textContent = isConnected ? '已連線' : '尚未連線';

  smartRingStatus.classList.toggle('connected', isConnected);
  serialStatusValue.classList.toggle('connected', isConnected);

  updateSmartRingControlButtons(isConnected);
}

async function connectSmartRing() {
  if (!smartRingRuntime.isSupported()) {
    outputArea.textContent =
      '此瀏覽器不支援 WebSerial。請使用 Chrome 或 Edge，並確認網頁在 localhost 或 HTTPS 環境執行。';
    return;
  }

  try {
    outputArea.textContent = '正在開啟 SmartRing 序列埠選擇視窗...';
    await smartRingRuntime.connect();
  } catch (error) {
    outputArea.textContent = `SmartRing 連線失敗：\n${error.message}`;
    setSmartRingConnectedUi(false, 'SmartRing：連線失敗');
  }
}

async function disconnectSmartRing() {
  try {
    await smartRingRuntime.disconnect();
    buttonStateValue.textContent = '尚無資料';
    rawStateValue.textContent = '尚未收到 ESP8266 資料。';
    lastCommandValue.textContent = '尚未送出 LED 指令。';
    outputArea.textContent = 'SmartRing 已斷開連線。';
  } catch (error) {
    outputArea.textContent = `SmartRing 斷線時發生錯誤：\n${error.message}`;
  }
}

async function toggleSmartRingConnection() {
  if (smartRingRuntime.isConnected()) {
    await disconnectSmartRing();
    return;
  }

  await connectSmartRing();
}

async function testLedRed() {
  try {
    await smartRingRuntime.setLedColor(1, 'red');
    renderLastCommand(smartRingRuntime.getLastCommand());
    outputArea.textContent = '已送出測試指令：設定第 1 顆 LED 為紅色。';
  } catch (error) {
    outputArea.textContent = `送出 LED 測試指令失敗：\n${error.message}`;
  }
}

function renderLastCommand(payload) {
  if (!lastCommandValue) return;

  if (!payload) {
    lastCommandValue.textContent = '尚未送出 LED 指令。';
    return;
  }

  lastCommandValue.textContent = JSON.stringify(payload);
}

async function testLedClear() {
  try {
    await smartRingRuntime.clearLeds();
    renderLastCommand(smartRingRuntime.getLastCommand());
    outputArea.textContent = '已送出測試指令：清除所有 LED。';
  } catch (error) {
    outputArea.textContent = `送出清除 LED 指令失敗：\n${error.message}`;
  }
}

function bindSmartRingRuntimeEvents() {
  smartRingRuntime.addEventListener('status', (event) => {
    const { connected, message } = event.detail;
    setSmartRingConnectedUi(connected, message);
    writeOutput(message);
  });

  smartRingRuntime.addEventListener('data', (event) => {
    const { ok, rawText, buttonText, message } = event.detail;

    buttonStateValue.textContent = buttonText || '尚無資料';
    rawStateValue.textContent = rawText || '尚未收到 ESP8266 資料。';

    if (!ok && message) {
      writeOutput(message);
    }
  });

  smartRingRuntime.addEventListener('command', (event) => {
    const { payload } = event.detail;
    renderLastCommand(payload);
  });

  smartRingRuntime.addEventListener('error', (event) => {
    const { message } = event.detail;
    setSmartRingConnectedUi(false, 'SmartRing：連線錯誤');
    writeOutput(`SmartRing 錯誤：${message}`);
  });

  smartRingRuntime.addEventListener('log', (event) => {
    const { message } = event.detail;
    console.log('[SmartRing]', message);
  });
}

function bindEvents() {
  btnConnectSmartRing.addEventListener('click', toggleSmartRingConnection);

  btnToggleSimulator?.addEventListener('click', () => {
    toggleSimulator();
    updateSmartRingControlButtons();
  });

  btnTestLedRed.addEventListener('click', testLedRed);
  btnTestLedClear.addEventListener('click', testLedClear);

  btnLoadSample.addEventListener('click', loadSample);
  btnRun.addEventListener('click', runUserCode);
  btnStop.addEventListener('click', stopUserCode);
  btnClear.addEventListener('click', clearWorkspace);
  btnSaveBlocks.addEventListener('click', saveWorkspaceToFile);
  btnLoadBlocks.addEventListener('click', requestLoadWorkspaceFromFile);

  blockFileInput.addEventListener('change', (event) => {
    const file = event.target.files?.[0];
    loadWorkspaceFromFile(file);
  });

  btnCopyCode.addEventListener('click', copyCode);
  btnClearOutput.addEventListener('click', clearOutput);
  btnClearStudentProfile?.addEventListener('click', clearStudentProfile);

  [studentClass, studentNumber, studentName].forEach((element) => {
    element?.addEventListener('input', handleStudentProfileInput);
    element?.addEventListener('change', handleStudentProfileInput);
  });

  btnLoadCourse.addEventListener('click', loadCourse);
  btnOpenCourseManager?.addEventListener('click', openCourseManager);
  taskSelector.addEventListener('change', changeTask);
  btnTestTask.addEventListener('click', testTask);
  btnSubmitScore.addEventListener('click', submitScore);

  btnToggleSmartRingPanel?.addEventListener('click', toggleSmartRingPanel);
  btnToggleTaskPanel?.addEventListener('click', toggleTaskPanel);
  btnToggleResultPanel?.addEventListener('click', toggleResultPanel);

  tabBlocks.addEventListener('click', () => switchWorkspaceTab('blocks'));
  tabCode.addEventListener('click', () => switchWorkspaceTab('code'));

  btnOpenTaskModal.addEventListener('click', openTaskModal);
  btnCloseTaskModal.addEventListener('click', closeTaskModal);
  btnCloseCourseManager?.addEventListener('click', closeCourseManager);

  courseManagerModal?.addEventListener('click', (event) => {
    if (event.target === courseManagerModal) {
      closeCourseManager();
    }
  });

  courseManagerBody?.addEventListener('click', (event) => {
    const copyButton = event.target.closest('.btn-copy-course-code');
    if (!copyButton) return;
    copyCourseCodeFromManager(copyButton.dataset.courseCode);
  });

  taskModal.addEventListener('click', (event) => {
    if (event.target === taskModal) {
      closeTaskModal();
      closeCourseManager();
    }
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeTaskModal();
      closeCourseManager();
    }
  });

  window.addEventListener('resize', () => {
    Blockly.svgResize(workspace);
  });
}

function initStatus() {
  restoreStudentProfileFromStorage();
  currentCourseMode = 'learning';
  updateCourseModeDisplay();
  setSmartRingConnectedUi(false, 'SmartRing：尚未連線');
  serialStatusValue.textContent = '尚未連線';
  buttonStateValue.textContent = '尚無資料';
  rawStateValue.textContent = '尚未收到 ESP8266 資料。';
  renderLastCommand(null);
  setProgramRunningUi(false);
  resetTaskSelector();
  updateTaskActionButtons();
  isTaskPanelCollapsed = false;
  updateTaskPanelCollapsed();
  isSmartRingPanelCollapsed = false;
  updateSmartRingPanelCollapsed();
  isResultPanelCollapsed = false;
  updateResultPanelCollapsed();
  renderPublicCourseCodes();
}

initBlockly();
bindEvents();
initAiCompanion({
  getProfile: getStudentProfile,
  getCurrentTask: () => currentTask,
  workerUrl: AI_COMPANION_WORKER_URL,
});
bindSmartRingRuntimeEvents();
initStatus();