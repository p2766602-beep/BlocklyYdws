// AI伴學浮動對話面板，UI/拖曳機制沿用 src/smartring/simulator-bridge.js 的作法：
// 面板整個由JS動態建立、不佔用index.html版面，預設貼齊左下角（模擬器面板在右下角，避免重疊）。

const MAX_INPUT_LENGTH = 1000;
const MAX_HISTORY_TURNS_SENT = 20;

const PANEL_UI = {
  panelId: 'ai-companion-panel',
  headerId: 'ai-companion-panel-header',
  closeId: 'ai-companion-panel-close',
  messagesId: 'ai-companion-panel-messages',
  statusId: 'ai-companion-panel-status',
  inputId: 'ai-companion-panel-input',
  sendId: 'ai-companion-panel-send',
  styleId: 'ai-companion-panel-style',
};

const DRAG_STATE = {
  dragging: false,
  offsetX: 0,
  offsetY: 0,
};

function getBasePath() {
  // 跟 src/smartring/simulator-bridge.js 用同一招：改用 Vite 的 BASE_URL，
  // 不寫死repo名稱，換部署路徑時不用同步修改這裡。
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

const AI_AVATAR_URL = `${getBasePath()}/avatars/AIlogo.png`;
const STUDENT_AVATAR_URL = `${getBasePath()}/avatars/STlogo.png`;

function ensurePanelStyle() {
  if (document.getElementById(PANEL_UI.styleId)) return;

  const style = document.createElement('style');
  style.id = PANEL_UI.styleId;
  style.textContent = `
#${PANEL_UI.panelId} {
  position: fixed;
  left: 18px;
  bottom: 18px;
  width: 380px;
  height: 520px;
  z-index: 999998;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 1px solid rgba(148, 163, 184, 0.34);
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 18px 46px rgba(15, 23, 42, 0.28),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif;
}

#${PANEL_UI.panelId} * {
  box-sizing: border-box;
}

#${PANEL_UI.panelId}.ai-companion-panel-dragging {
  cursor: grabbing;
  opacity: 0.95;
}

#${PANEL_UI.headerId} {
  flex: 0 0 auto;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px 0 14px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #4c1d95, #7c3aed);
  user-select: none;
  cursor: grab;
}

.ai-companion-panel-title {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  min-width: 0;
}

.ai-companion-title-avatar {
  width: 24px;
  height: 24px;
}

#${PANEL_UI.closeId} {
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

#${PANEL_UI.closeId}:hover {
  background: rgba(248, 113, 113, 0.36);
}

#${PANEL_UI.messagesId} {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: #f8fafc;
}

.ai-companion-message-row {
  display: flex;
  align-items: flex-end;
  gap: 8px;
  max-width: 92%;
}

.ai-companion-message-row-model {
  align-self: flex-start;
  flex-direction: row;
}

.ai-companion-message-row-user {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.ai-companion-avatar {
  flex: 0 0 auto;
  width: 30px;
  height: 30px;
  border-radius: 999px;
  object-fit: cover;
  box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.8), 0 2px 6px rgba(15, 23, 42, 0.24);
}

.ai-companion-bubble {
  min-width: 0;
  padding: 10px 13px;
  border-radius: 14px;
  line-height: 1.6;
  font-size: 14px;
  white-space: pre-wrap;
  word-break: break-word;
}

.ai-companion-bubble-model {
  background: #ede9fe;
  color: #4c1d95;
  border-bottom-left-radius: 4px;
}

.ai-companion-bubble-user {
  background: #2563eb;
  color: #ffffff;
  border-bottom-right-radius: 4px;
}

#${PANEL_UI.statusId} {
  flex: 0 0 auto;
  min-height: 16px;
  margin: 0;
  padding: 4px 12px 0;
  font-size: 12px;
  color: #b91c1c;
}

#${PANEL_UI.panelId} .ai-companion-input-row {
  flex: 0 0 auto;
  display: flex;
  gap: 8px;
  align-items: flex-end;
  padding: 8px 10px 10px;
  border-top: 1px solid #e2e8f0;
  background: #ffffff;
}

#${PANEL_UI.inputId} {
  flex: 1;
  resize: none;
  min-height: 40px;
  max-height: 120px;
  padding: 8px 10px;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  font: inherit;
  font-size: 14px;
}

#${PANEL_UI.inputId}:disabled {
  background: #f1f5f9;
  color: #94a3b8;
}

#${PANEL_UI.sendId} {
  flex: 0 0 auto;
  padding: 9px 16px;
  border: 0;
  border-radius: 10px;
  background: #059669;
  color: #ffffff;
  font-weight: 700;
  cursor: pointer;
}

#${PANEL_UI.sendId}:hover:not(:disabled) {
  background: #047857;
}

#${PANEL_UI.sendId}:disabled {
  background: #94a3b8;
  cursor: not-allowed;
}

@media (max-width: 520px) {
  #${PANEL_UI.panelId} {
    left: 8px;
    bottom: 8px;
    width: min(380px, calc(100vw - 16px));
    height: min(520px, calc(100vh - 16px));
  }
}
  `;

  document.head.appendChild(style);
}

function clampToViewport(panel, left, top) {
  const margin = 8;
  const width = panel.offsetWidth || 380;
  const height = panel.offsetHeight || 520;
  const maxLeft = Math.max(margin, window.innerWidth - width - margin);
  const maxTop = Math.max(margin, window.innerHeight - height - margin);

  return {
    left: Math.min(Math.max(margin, left), maxLeft),
    top: Math.min(Math.max(margin, top), maxTop),
  };
}

function applyPanelPosition(panel, left, top) {
  const position = clampToViewport(panel, left, top);
  panel.style.left = `${position.left}px`;
  panel.style.top = `${position.top}px`;
  panel.style.right = 'auto';
  panel.style.bottom = 'auto';
}

function enablePanelDrag(panel, header) {
  header.addEventListener('pointerdown', (event) => {
    const target = event.target;
    if (target && target.closest && target.closest('button')) return;

    DRAG_STATE.dragging = true;

    const rect = panel.getBoundingClientRect();
    DRAG_STATE.offsetX = event.clientX - rect.left;
    DRAG_STATE.offsetY = event.clientY - rect.top;

    panel.classList.add('ai-companion-panel-dragging');

    if (header.setPointerCapture) {
      try {
        header.setPointerCapture(event.pointerId);
      } catch {
        // ignore
      }
    }
  });

  window.addEventListener('pointermove', (event) => {
    if (!DRAG_STATE.dragging) return;

    applyPanelPosition(
      panel,
      event.clientX - DRAG_STATE.offsetX,
      event.clientY - DRAG_STATE.offsetY,
    );
  });

  window.addEventListener('pointerup', () => {
    if (!DRAG_STATE.dragging) return;

    DRAG_STATE.dragging = false;
    panel.classList.remove('ai-companion-panel-dragging');
  });
}

function extractExamples(task) {
  if (Array.isArray(task?.examples) && task.examples.length > 0) {
    return task.examples.slice(0, 5).map((ex) => ({
      input: ex?.input ?? '',
      output: ex?.output ?? '',
      explanation: ex?.explanation ?? '',
    }));
  }
  if (task?.sampleInput || task?.sampleOutput) {
    return [{ input: task.sampleInput || '', output: task.sampleOutput || '', explanation: '' }];
  }
  return [];
}

function extractStatementField(task, key, fallbackKeys) {
  const statement = task?.statement;
  if (statement && typeof statement === 'object') {
    const value = statement[key];
    if (value) return String(value).trim();
  }
  for (const fallbackKey of fallbackKeys) {
    if (task?.[fallbackKey]) return String(task[fallbackKey]).trim();
  }
  return '';
}

function buildTaskContext(task) {
  if (!task) return null;
  return {
    title: task.title || task.problemTitle || '',
    description: extractStatementField(task, 'description', ['description', 'taskDescription', 'summary']),
    inputDescription: extractStatementField(task, 'input', ['inputDescription', 'input']),
    outputDescription: extractStatementField(task, 'output', ['outputDescription', 'output']),
    examples: extractExamples(task),
  };
}

export function initAiCompanion({ getProfile, getCurrentTask, workerUrl }) {
  const toggleBtn = document.getElementById('btnToggleAiCompanion');
  if (!toggleBtn) return;

  let history = [];
  let historyTaskId = null;
  let isSending = false;
  let panelRefs = null;

  function appendBubble(role, text) {
    const row = document.createElement('div');
    row.className = `ai-companion-message-row ai-companion-message-row-${role}`;

    const avatar = document.createElement('img');
    avatar.className = 'ai-companion-avatar';
    avatar.src = role === 'model' ? AI_AVATAR_URL : STUDENT_AVATAR_URL;
    avatar.alt = role === 'model' ? 'AI 學伴頭像' : '學生頭像';

    const bubble = document.createElement('div');
    bubble.className = `ai-companion-bubble ai-companion-bubble-${role}`;
    bubble.textContent = text;

    row.appendChild(avatar);
    row.appendChild(bubble);
    panelRefs.messagesEl.appendChild(row);
    panelRefs.messagesEl.scrollTop = panelRefs.messagesEl.scrollHeight;
  }

  function setStatus(text) {
    panelRefs.statusEl.textContent = text || '';
  }

  function setSending(sending) {
    isSending = sending;
    panelRefs.sendBtn.disabled = sending;
    panelRefs.inputEl.disabled = sending;
  }

  function resetConversationIfTaskChanged(task) {
    const taskId = task?.id || null;
    if (taskId === historyTaskId) return;
    historyTaskId = taskId;
    history = [];
    panelRefs.messagesEl.innerHTML = '';
    if (task) {
      appendBubble('model', `哈囉！我是你的 AI 程式學伴。👋 我們現在看的是「${task.title || task.id}」這一題，請把你目前的想法或卡關的地方告訴我吧！`);
    }
  }

  function refreshAvailability() {
    const task = getCurrentTask?.();
    if (!task) {
      setStatus('請先在上方輸入課程代碼、載入課程並選好子任務，AI伴學才能知道你正在練習哪一題。');
      panelRefs.inputEl.disabled = true;
      panelRefs.sendBtn.disabled = true;
    } else {
      resetConversationIfTaskChanged(task);
      setStatus('');
      panelRefs.inputEl.disabled = false;
      panelRefs.sendBtn.disabled = false;
    }
  }

  async function sendMessage() {
    if (isSending) return;

    const task = getCurrentTask?.();
    const profile = getProfile?.() || {};

    if (!task || !profile.courseCode) {
      setStatus('請先載入課程與子任務再開始對話。');
      return;
    }

    const message = panelRefs.inputEl.value.trim().slice(0, MAX_INPUT_LENGTH);
    if (!message) return;

    resetConversationIfTaskChanged(task);

    const studentId = [profile.className, profile.seatNumber, profile.name].filter(Boolean).join('-') || '未填寫學生資料';

    appendBubble('user', message);
    panelRefs.inputEl.value = '';
    setSending(true);
    setStatus('AI 思考中……');

    try {
      const resp = await fetch(workerUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          courseCode: profile.courseCode,
          studentId,
          taskContext: buildTaskContext(task),
          history: history.slice(-MAX_HISTORY_TURNS_SENT),
          message,
        }),
      });

      const data = await resp.json().catch(() => ({}));

      if (!resp.ok) {
        setStatus(data.error || 'AI 伴學暫時無法使用，請稍後再試。');
        return;
      }

      history.push({ role: 'user', text: message });
      history.push({ role: 'model', text: data.reply });
      appendBubble('model', data.reply);
      setStatus('');
    } catch (err) {
      setStatus('連線失敗，請確認網路連線後再試一次。');
    } finally {
      setSending(false);
      panelRefs.inputEl.focus();
    }
  }

  function buildPanel() {
    ensurePanelStyle();

    const panel = document.createElement('div');
    panel.id = PANEL_UI.panelId;
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'AI 程式學伴');

    const header = document.createElement('div');
    header.id = PANEL_UI.headerId;
    header.title = '拖曳可移動 AI 伴學視窗';

    const title = document.createElement('span');
    title.className = 'ai-companion-panel-title';

    const titleAvatar = document.createElement('img');
    titleAvatar.className = 'ai-companion-avatar ai-companion-title-avatar';
    titleAvatar.src = AI_AVATAR_URL;
    titleAvatar.alt = '';

    const titleText = document.createElement('span');
    titleText.textContent = 'AI 程式學伴';

    title.appendChild(titleAvatar);
    title.appendChild(titleText);

    const closeButton = document.createElement('button');
    closeButton.id = PANEL_UI.closeId;
    closeButton.type = 'button';
    closeButton.title = '關閉 AI 伴學';
    closeButton.setAttribute('aria-label', '關閉 AI 伴學');
    closeButton.textContent = '×';
    closeButton.addEventListener('click', () => closePanel());

    header.appendChild(title);
    header.appendChild(closeButton);

    const messagesEl = document.createElement('div');
    messagesEl.id = PANEL_UI.messagesId;

    const statusEl = document.createElement('p');
    statusEl.id = PANEL_UI.statusId;
    statusEl.setAttribute('aria-live', 'polite');

    const inputRow = document.createElement('div');
    inputRow.className = 'ai-companion-input-row';

    const inputEl = document.createElement('textarea');
    inputEl.id = PANEL_UI.inputId;
    inputEl.rows = 2;
    inputEl.placeholder = '在這裡輸入你的想法或問題……';

    const sendBtn = document.createElement('button');
    sendBtn.id = PANEL_UI.sendId;
    sendBtn.type = 'button';
    sendBtn.textContent = '送出';

    inputRow.appendChild(inputEl);
    inputRow.appendChild(sendBtn);

    panel.appendChild(header);
    panel.appendChild(messagesEl);
    panel.appendChild(statusEl);
    panel.appendChild(inputRow);

    document.body.appendChild(panel);
    enablePanelDrag(panel, header);

    panelRefs = { panel, header, messagesEl, statusEl, inputEl, sendBtn };

    sendBtn.addEventListener('click', sendMessage);
    inputEl.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' && !event.shiftKey) {
        event.preventDefault();
        sendMessage();
      }
    });
  }

  function openPanel() {
    if (!panelRefs) {
      buildPanel();
    }
    refreshAvailability();
    panelRefs.inputEl.focus();
  }

  function closePanel() {
    if (!panelRefs) return;
    panelRefs.panel.remove();
    panelRefs = null;
  }

  function togglePanel() {
    if (panelRefs) {
      closePanel();
    } else {
      openPanel();
    }
  }

  toggleBtn.addEventListener('click', togglePanel);
}
