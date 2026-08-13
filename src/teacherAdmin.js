import './teacherAdmin.css';
import { getCourseGroup, normalizeCourseCode } from './courses/index.js';

// 跟 src/courses/index.js 用同一個Worker——那邊是讀取覆寫套用進課程資料，
// 這裡是教師寫入的來源。部署後的網址要跟 workers/starter-editor 保持一致。
const STARTER_EDITOR_WORKER_URL = 'https://blocklyydws-starter-editor.tnjboxing.workers.dev';

let teacherToken = '';

const lockSection = document.getElementById('lockSection');
const courseSection = document.getElementById('courseSection');
const taskListSection = document.getElementById('taskListSection');
const teacherTokenInput = document.getElementById('teacherToken');
const btnUnlock = document.getElementById('btnUnlock');
const lockStatus = document.getElementById('lockStatus');
const courseCodeInput = document.getElementById('courseCodeInput');
const btnLoadCourse = document.getElementById('btnLoadCourse');
const courseStatus = document.getElementById('courseStatus');
const bulkActionsSection = document.getElementById('bulkActionsSection');
const btnBulkLoadableOn = document.getElementById('btnBulkLoadableOn');
const btnBulkLoadableOff = document.getElementById('btnBulkLoadableOff');
const bulkStatus = document.getElementById('bulkStatus');

// 目前畫面上已載入的題卡清單，供批次全選/全不選按鈕使用。每次重新載入課程時會被清空重建。
let currentTaskCards = [];

function setStatus(el, text, kind) {
  el.textContent = text;
  el.classList.remove('error', 'ok');
  if (kind) el.classList.add(kind);
}

async function fetchOverrides(courseCode) {
  try {
    const resp = await fetch(
      `${STARTER_EDITOR_WORKER_URL}/overrides?courseCode=${encodeURIComponent(courseCode)}`
    );
    if (!resp.ok) return {};
    const data = await resp.json();
    return data?.overrides || {};
  } catch {
    // Worker尚未部署或暫時連不到時，仍讓題目清單顯示出來（用課程JS原始值），
    // 不要因為讀不到覆寫就整頁失敗——教師還是可以先看題目、編輯後再儲存。
    return {};
  }
}

async function saveOverride(courseCode, taskId, { starterXml, loadable, note }) {
  const resp = await fetch(`${STARTER_EDITOR_WORKER_URL}/overrides`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      courseCode,
      taskId,
      starterXml,
      loadable,
      note,
      token: teacherToken,
    }),
  });

  const data = await resp.json().catch(() => ({}));

  if (!resp.ok) {
    throw new Error(data?.error || `儲存失敗（HTTP ${resp.status}）`);
  }

  return data;
}

function renderTaskCard(task, override) {
  const card = document.createElement('div');
  card.className = 'teacher-task-card';

  const hasOverride = Boolean(override);
  const currentLoadable = override ? override.loadable !== false : Boolean(task.starterXml);
  const currentXml = override?.starterXml ?? task.starterXml ?? '';
  const currentNote = override?.note ?? '';

  card.innerHTML = `
    <div class="teacher-task-card-head">
      <span class="task-id">${task.id}</span>
      <span class="task-title">${task.title || ''}</span>
      ${hasOverride ? '<span class="override-badge">已覆寫</span>' : ''}
      <label class="loadable-toggle">
        <input type="checkbox" class="loadable-checkbox" ${currentLoadable ? 'checked' : ''} />
        可載入範例
      </label>
    </div>
    <p class="field-label">範例答案 XML（starterXml，可直接貼Blockly匯出的XML）</p>
    <textarea class="starter-xml-field" spellcheck="false">${escapeHtml(currentXml)}</textarea>
    <p class="field-label">教師備註（例如：回報此題題敘/測資有誤，之後回頭修YDWS-CodingBank）</p>
    <textarea class="note-field" spellcheck="false">${escapeHtml(currentNote)}</textarea>
    <div class="task-save-row">
      <button type="button" class="btnSaveTask">儲存</button>
      <span class="task-save-status"></span>
    </div>
  `;

  const saveButton = card.querySelector('.btnSaveTask');

  saveButton.addEventListener('click', () => saveCardOverride(card, task));

  return card;
}

// 儲存單一題卡目前狀態。targetLoadable有帶值時（批次按鈕呼叫）會先覆蓋checkbox勾選狀態
// 再儲存；不帶值時（教師個別按「儲存」）沿用checkbox目前勾選狀態，行為不變。
// 一定要先讀出xmlField/noteField目前值，因為Worker的POST /overrides是整包覆蓋、
// 不是單欄位patch，漏帶等於把starterXml或教師備註清空。
async function saveCardOverride(card, task, targetLoadable) {
  const saveStatus = card.querySelector('.task-save-status');
  const xmlField = card.querySelector('.starter-xml-field');
  const noteField = card.querySelector('.note-field');
  const loadableCheckbox = card.querySelector('.loadable-checkbox');

  if (targetLoadable !== undefined) {
    loadableCheckbox.checked = targetLoadable;
  }

  saveStatus.textContent = '儲存中...';
  try {
    const currentCourseCode = normalizeCourseCode(courseCodeInput.value);
    await saveOverride(currentCourseCode, task.id, {
      starterXml: xmlField.value,
      loadable: loadableCheckbox.checked,
      note: noteField.value,
    });
    saveStatus.textContent = '已儲存。';
    return true;
  } catch (error) {
    saveStatus.textContent = `儲存失敗：${error.message}`;
    return false;
  }
}

// 批次把目前載入的每一題都設成同一個loadable值。逐題循序送出（不是Promise.all並發），
// 因為Worker端是「整包GET現況→改一題→整包PUT回去」，同課程底下並發送出會互相蓋掉彼此的結果。
async function bulkSetLoadable(targetLoadable) {
  if (currentTaskCards.length === 0) return;

  btnBulkLoadableOn.disabled = true;
  btnBulkLoadableOff.disabled = true;
  setStatus(bulkStatus, '批次儲存中...', null);

  let successCount = 0;
  for (const { task, card } of currentTaskCards) {
    // eslint-disable-next-line no-await-in-loop
    const ok = await saveCardOverride(card, task, targetLoadable);
    if (ok) successCount += 1;
  }

  const allOk = successCount === currentTaskCards.length;
  setStatus(
    bulkStatus,
    `批次${targetLoadable ? '開啟' : '關閉'}完成：${successCount}/${currentTaskCards.length} 題成功。`,
    allOk ? 'ok' : 'error'
  );

  btnBulkLoadableOn.disabled = false;
  btnBulkLoadableOff.disabled = false;
}

btnBulkLoadableOn.addEventListener('click', () => bulkSetLoadable(true));
btnBulkLoadableOff.addEventListener('click', () => bulkSetLoadable(false));

function escapeHtml(value) {
  return String(value || '').replace(/[&<>"]/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]
  ));
}

btnUnlock.addEventListener('click', () => {
  const value = teacherTokenInput.value.trim();
  if (!value) {
    setStatus(lockStatus, '請輸入密碼。', 'error');
    return;
  }
  teacherToken = value;
  setStatus(lockStatus, '已解鎖。', 'ok');
  courseSection.hidden = false;
});

btnLoadCourse.addEventListener('click', async () => {
  const courseCode = normalizeCourseCode(courseCodeInput.value);
  if (!courseCode) {
    setStatus(courseStatus, '請輸入課程代碼。', 'error');
    return;
  }

  setStatus(courseStatus, '載入中...', null);
  taskListSection.innerHTML = '';
  currentTaskCards = [];
  bulkActionsSection.hidden = true;
  setStatus(bulkStatus, '', null);

  try {
    const [courseGroup, overrides] = await Promise.all([
      getCourseGroup(courseCode),
      fetchOverrides(courseCode),
    ]);

    if (!courseGroup) {
      setStatus(courseStatus, `找不到課程代碼：${courseCode}`, 'error');
      return;
    }

    setStatus(courseStatus, `已載入 ${courseGroup.title || courseCode}，共 ${courseGroup.tasks.length} 題。`, 'ok');

    courseGroup.tasks.forEach((task) => {
      const card = renderTaskCard(task, overrides[task.id]);
      currentTaskCards.push({ task, card });
      taskListSection.appendChild(card);
    });

    bulkActionsSection.hidden = currentTaskCards.length === 0;
  } catch (error) {
    setStatus(courseStatus, `載入失敗：${error.message}`, 'error');
  }
});
