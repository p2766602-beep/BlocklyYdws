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
  const saveStatus = card.querySelector('.task-save-status');
  const xmlField = card.querySelector('.starter-xml-field');
  const noteField = card.querySelector('.note-field');
  const loadableCheckbox = card.querySelector('.loadable-checkbox');

  saveButton.addEventListener('click', async () => {
    saveStatus.textContent = '儲存中...';
    try {
      const currentCourseCode = normalizeCourseCode(courseCodeInput.value);
      await saveOverride(currentCourseCode, task.id, {
        starterXml: xmlField.value,
        loadable: loadableCheckbox.checked,
        note: noteField.value,
      });
      saveStatus.textContent = '已儲存。';
    } catch (error) {
      saveStatus.textContent = `儲存失敗：${error.message}`;
    }
  });

  return card;
}

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
      taskListSection.appendChild(renderTaskCard(task, overrides[task.id]));
    });
  } catch (error) {
    setStatus(courseStatus, `載入失敗：${error.message}`, 'error');
  }
});
