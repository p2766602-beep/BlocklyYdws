// =====================================================
// SmartRing Simulator Bridge for Blockly Lab
// -----------------------------------------------------
// 建議放置：src/smartring/simulator-bridge.js
//
// 用途：
// 1. 在 Blockly Lab 頁面建立 / 關閉 SmartRing 模擬器浮動面板。
// 2. 將 SmartRing LED command 透過 iframe postMessage 傳給 embed.html。
// 3. 可選擇同步送 BroadcastChannel，方便跨頁測試與 fallback。
// =====================================================

const SIMULATOR_UI = {
  panelId: 'smartring-simulator-panel',
  frameId: 'smartring-simulator-frame',
  closeId: 'smartring-simulator-panel-close',
  styleId: 'smartring-simulator-panel-style',
};

const DRAG_STATE = {
  dragging: false,
  offsetX: 0,
  offsetY: 0,
};

function getBasePath() {
  // 改用 Vite 的 BASE_URL（對應 vite.config.js 的 base 設定），
  // 不寫死特定 repo 名稱，換 repo/換部署路徑時不用同步修改這裡。
  // 本機開發時 BASE_URL 是 '/'；GitHub Pages 部署時是 '/<repo-name>/'。
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base.slice(0, -1) : base;
}

export function getSimulatorEmbedUrl() {
  return `${window.location.origin}${getBasePath()}/smartring-simulator/embed.html`;
}

export function getSimulatorPanel() {
  return document.getElementById(SIMULATOR_UI.panelId);
}

export function isSimulatorOpen() {
  return Boolean(getSimulatorPanel());
}

function ensureSimulatorPanelStyle() {
  if (document.getElementById(SIMULATOR_UI.styleId)) return;

  const style = document.createElement('style');
  style.id = SIMULATOR_UI.styleId;
  style.textContent = `
#${SIMULATOR_UI.panelId} {
  position: fixed;
  right: 18px;
  bottom: 18px;
  width: 286px;
  height: 326px;
  z-index: 999999;
  background: #0f172a;
  border: 1px solid rgba(148, 163, 184, 0.34);
  border-radius: 16px;
  overflow: hidden;
  box-shadow:
    0 18px 46px rgba(15, 23, 42, 0.35),
    0 0 0 1px rgba(255, 255, 255, 0.04) inset;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans TC", sans-serif;
}

#${SIMULATOR_UI.panelId} * {
  box-sizing: border-box;
}

#${SIMULATOR_UI.panelId}.smartring-simulator-panel-dragging {
  cursor: grabbing;
  opacity: 0.94;
}

#${SIMULATOR_UI.panelId} .smartring-simulator-panel-header {
  height: 38px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 0 8px 0 13px;
  color: #ffffff;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.03em;
  background: linear-gradient(180deg, rgba(30, 41, 59, 1), rgba(15, 23, 42, 1));
  user-select: none;
  cursor: grab;
}

#${SIMULATOR_UI.panelId} .smartring-simulator-panel-title {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  min-width: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#${SIMULATOR_UI.panelId} .smartring-simulator-panel-title::before {
  content: "";
  width: 9px;
  height: 9px;
  border-radius: 999px;
  background: #22c55e;
  box-shadow: 0 0 10px rgba(34, 197, 94, 0.72);
  flex: 0 0 auto;
}

#${SIMULATOR_UI.closeId} {
  width: 28px;
  height: 28px;
  border: 0;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  font-size: 20px;
  line-height: 1;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

#${SIMULATOR_UI.closeId}:hover {
  background: rgba(248, 113, 113, 0.32);
}

#${SIMULATOR_UI.frameId} {
  width: 100%;
  height: calc(100% - 38px);
  border: 0;
  display: block;
  background: #0f172a;
}

@media (max-width: 520px) {
  #${SIMULATOR_UI.panelId} {
    right: 10px;
    bottom: 10px;
    width: min(286px, calc(100vw - 20px));
    height: min(326px, calc(100vh - 20px));
  }
}
  `;

  document.head.appendChild(style);
}

function clampToViewport(panel, left, top) {
  const margin = 8;
  const width = panel.offsetWidth || 286;
  const height = panel.offsetHeight || 326;
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

    panel.classList.add('smartring-simulator-panel-dragging');

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
    panel.classList.remove('smartring-simulator-panel-dragging');
  });
}

export function openSimulator() {
  const existing = getSimulatorPanel();
  if (existing) return true;

  ensureSimulatorPanelStyle();

  const panel = document.createElement('div');
  panel.id = SIMULATOR_UI.panelId;
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'SmartRing 模擬硬體');

  const header = document.createElement('div');
  header.className = 'smartring-simulator-panel-header';
  header.title = '拖曳可移動模擬硬體視窗';

  const title = document.createElement('span');
  title.className = 'smartring-simulator-panel-title';
  title.textContent = 'SmartRing 模擬硬體';

  const closeButton = document.createElement('button');
  closeButton.id = SIMULATOR_UI.closeId;
  closeButton.type = 'button';
  closeButton.title = '關閉模擬硬體';
  closeButton.setAttribute('aria-label', '關閉模擬硬體');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => closeSimulator());

  const frame = document.createElement('iframe');
  frame.id = SIMULATOR_UI.frameId;
  frame.title = 'SmartRing LED 模擬器';
  frame.src = getSimulatorEmbedUrl();
  frame.setAttribute('loading', 'eager');
  frame.setAttribute('allow', '');

  header.appendChild(title);
  header.appendChild(closeButton);
  panel.appendChild(header);
  panel.appendChild(frame);

  document.body.appendChild(panel);
  enablePanelDrag(panel, header);

  return true;
}

export function closeSimulator() {
  const panel = getSimulatorPanel();
  if (panel && panel.parentNode) {
    panel.parentNode.removeChild(panel);
  }

  return true;
}

export function toggleSimulator() {
  if (isSimulatorOpen()) {
    return closeSimulator();
  }

  return openSimulator();
}

export function sendSimulatorCommand(command) {
  if (!command || typeof command !== 'object') return false;

  const frame = document.getElementById(SIMULATOR_UI.frameId);
  if (!frame || !frame.contentWindow) return false;

  try {
    frame.contentWindow.postMessage(
      {
        source: 'OSEP',
        type: 'ledCommand',
        command,
      },
      window.location.origin,
    );
    return true;
  } catch (error) {
    console.warn('[SmartRing Simulator] iframe postMessage failed:', error);
    return false;
  }
}

export function sendSimulatorCommands(commands) {
  if (!Array.isArray(commands) || commands.length === 0) return false;

  const frame = document.getElementById(SIMULATOR_UI.frameId);
  if (!frame || !frame.contentWindow) return false;

  try {
    frame.contentWindow.postMessage(
      {
        source: 'OSEP',
        type: 'ledCommands',
        commands,
      },
      window.location.origin,
    );
    return true;
  } catch (error) {
    console.warn('[SmartRing Simulator] iframe postMessage failed:', error);
    return false;
  }
}

export function sendSimulatorBroadcast(command) {
  if (!command || typeof command !== 'object') return false;

  try {
    if (typeof BroadcastChannel === 'undefined') return false;

    const channel = new BroadcastChannel('osep-led-ring');
    channel.postMessage({
      source: 'OSEP',
      type: 'ledCommand',
      command,
    });
    channel.close();
    return true;
  } catch (error) {
    console.warn('[SmartRing Simulator] BroadcastChannel failed:', error);
    return false;
  }
}

export function sendSmartRingLedCommand(command, options = {}) {
  const { broadcast = true } = options;

  const iframeOk = sendSimulatorCommand(command);
  let broadcastOk = false;

  if (broadcast) {
    broadcastOk = sendSimulatorBroadcast(command);
  }

  return iframeOk || broadcastOk;
}

export function sendSmartRingLedCommands(commands, options = {}) {
  const { broadcast = true } = options;

  const iframeOk = sendSimulatorCommands(commands);

  let broadcastOk = false;
  if (broadcast) {
    commands.forEach((command) => {
      const ok = sendSimulatorBroadcast(command);
      if (ok) broadcastOk = true;
    });
  }

  return iframeOk || broadcastOk;
}

export const SmartRingSimulatorBridge = {
  open: openSimulator,
  close: closeSimulator,
  toggle: toggleSimulator,
  isOpen: isSimulatorOpen,
  sendCommand: sendSmartRingLedCommand,
  sendCommands: sendSmartRingLedCommands,
  sendBroadcast: sendSimulatorBroadcast,
  getEmbedUrl: getSimulatorEmbedUrl,
};
