// 2026-11-11：全頁畫筆。上課投影講解用：在整個畫面（積木區、題目、輸出都可以）蓋一層透明畫布畫記。
// 使用者決策：不存檔、不跟著特定區塊移動；關閉（或按 Esc）就全部清除。開著的時候暫停操作底下的頁面。
// BlocklyYdws、blockly-lab、osep-judge 共用這一份檔案，改的時候三邊要一起同步（樣式也包在這裡）。
const STYLE_ID = 'ydws-inkpad-style';

const COLORS = [
  { id: 'red', label: '紅', color: '#dc2626' },
  { id: 'blue', label: '藍', color: '#2563eb' },
  { id: 'green', label: '綠', color: '#16a34a' },
  { id: 'black', label: '黑', color: '#111827' },
];

const TOOLS = [
  { id: 'pen', label: '畫筆', width: 3, alpha: 1 },
  { id: 'marker', label: '螢光筆', width: 16, alpha: 0.3 },
  { id: 'eraser', label: '橡皮擦' },
];

const ERASER_RADIUS = 12;

const STYLE_TEXT = `
.inkpad-overlay { position: fixed; inset: 0; z-index: 2147482000; cursor: crosshair; touch-action: none; }
.inkpad-overlay.inkpad-eraser { cursor: cell; }
.inkpad-canvas { position: absolute; inset: 0; width: 100%; height: 100%; }
.inkpad-toolbar { position: fixed; left: 50%; bottom: 16px; transform: translateX(-50%); z-index: 2147482001;
  display: flex; flex-wrap: wrap; align-items: center; gap: 6px; padding: 8px 10px; max-width: calc(100vw - 32px);
  background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; box-shadow: 0 6px 24px rgba(15, 23, 42, 0.25);
  font: 13px/1.3 system-ui, sans-serif; color: #334155; cursor: default; }
.inkpad-toolbar .inkpad-title { font-weight: 700; margin-right: 4px; }
.inkpad-toolbar button { margin: 0; padding: 4px 9px; font-size: 13px; color: #334155; background: #f1f5f9;
  border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; }
.inkpad-toolbar button:hover { background: #e2e8f0; }
.inkpad-toolbar .inkpad-color { width: 26px; height: 26px; padding: 0; border-radius: 50%; background: var(--ink); border: 2px solid #ffffff;
  box-shadow: 0 0 0 1px #cbd5e1; }
.inkpad-toolbar .inkpad-color.selected { box-shadow: 0 0 0 3px var(--ink); }
.inkpad-toolbar .inkpad-tool.selected { color: #ffffff; background: #0f172a; border-color: #0f172a; }
.inkpad-toolbar .inkpad-close { color: #ffffff; background: #dc2626; border-color: #dc2626; }
.inkpad-toolbar .inkpad-sep { width: 1px; height: 22px; background: #e2e8f0; }
`;

let state = null;

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = STYLE_TEXT;
  document.head.appendChild(style);
}

export function isInkPadOpen() {
  return Boolean(state);
}

export function toggleInkPad() {
  if (state) closeInkPad();
  else openInkPad();
}

function distanceToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function strokeHit(stroke, x, y) {
  const reach = ERASER_RADIUS + stroke.width / 2;
  const points = stroke.pts;
  if (points.length === 1) return Math.hypot(x - points[0][0], y - points[0][1]) <= reach;
  for (let i = 1; i < points.length; i += 1) {
    if (distanceToSegment(x, y, points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]) <= reach) return true;
  }
  return false;
}

function drawStroke(ctx, stroke) {
  const points = stroke.pts;
  ctx.save();
  ctx.globalAlpha = stroke.alpha;
  ctx.strokeStyle = stroke.color;
  ctx.fillStyle = stroke.color;
  ctx.lineWidth = stroke.width;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';
  if (points.length === 1) {
    ctx.beginPath();
    ctx.arc(points[0][0], points[0][1], stroke.width / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(points[0][0], points[0][1]);
    for (let i = 1; i < points.length; i += 1) ctx.lineTo(points[i][0], points[i][1]);
    ctx.stroke();
  }
  ctx.restore();
}

function openInkPad() {
  ensureStyle();

  const overlay = document.createElement('div');
  overlay.className = 'inkpad-overlay';
  const canvas = document.createElement('canvas');
  canvas.className = 'inkpad-canvas';
  overlay.appendChild(canvas);

  const toolbar = document.createElement('div');
  toolbar.className = 'inkpad-toolbar';
  toolbar.innerHTML = `
    <span class="inkpad-title">🖊 全頁畫筆</span>
    ${COLORS.map((c) => `<button type="button" class="inkpad-color" data-color="${c.id}" title="${c.label}" style="--ink:${c.color}"></button>`).join('')}
    <span class="inkpad-sep"></span>
    ${TOOLS.map((t) => `<button type="button" class="inkpad-tool" data-tool="${t.id}">${t.label}</button>`).join('')}
    <span class="inkpad-sep"></span>
    <button type="button" class="inkpad-undo" title="復原上一筆">↶ 復原</button>
    <button type="button" class="inkpad-clear" title="清除畫面上的所有筆跡">全部清除</button>
    <button type="button" class="inkpad-close" title="關閉畫筆（筆跡不會保存）；也可以按 Esc">關閉</button>
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(toolbar);

  const ctx = canvas.getContext('2d');
  let strokes = [];
  let color = COLORS[0];
  let tool = TOOLS[0];
  let current = null;
  let drawing = false;

  function redraw() {
    const ratio = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;
    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
    }
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    strokes.forEach((stroke) => drawStroke(ctx, stroke));
    if (current) drawStroke(ctx, current);
  }

  function updateToolbar() {
    toolbar.querySelectorAll('.inkpad-color').forEach((b) => b.classList.toggle('selected', b.dataset.color === color.id));
    toolbar.querySelectorAll('.inkpad-tool').forEach((b) => b.classList.toggle('selected', b.dataset.tool === tool.id));
    overlay.classList.toggle('inkpad-eraser', tool.id === 'eraser');
  }

  toolbar.querySelectorAll('.inkpad-color').forEach((button) => button.addEventListener('click', () => {
    color = COLORS.find((c) => c.id === button.dataset.color) || COLORS[0];
    if (tool.id === 'eraser') tool = TOOLS[0];
    updateToolbar();
  }));
  toolbar.querySelectorAll('.inkpad-tool').forEach((button) => button.addEventListener('click', () => {
    tool = TOOLS.find((t) => t.id === button.dataset.tool) || TOOLS[0];
    updateToolbar();
  }));
  toolbar.querySelector('.inkpad-undo').addEventListener('click', () => { strokes.pop(); redraw(); });
  toolbar.querySelector('.inkpad-clear').addEventListener('click', () => { strokes = []; redraw(); });
  toolbar.querySelector('.inkpad-close').addEventListener('click', closeInkPad);

  const pointOf = (event) => [Math.round(event.clientX * 10) / 10, Math.round(event.clientY * 10) / 10];
  const eraseAt = (event) => {
    const [x, y] = pointOf(event);
    const before = strokes.length;
    strokes = strokes.filter((stroke) => !strokeHit(stroke, x, y));
    if (strokes.length !== before) redraw();
  };

  overlay.addEventListener('pointerdown', (event) => {
    if (event.button > 0) return;
    event.preventDefault();
    overlay.setPointerCapture(event.pointerId);
    drawing = true;
    if (tool.id === 'eraser') { eraseAt(event); return; }
    current = { color: color.color, width: tool.width, alpha: tool.alpha, pts: [pointOf(event)] };
    redraw();
  });
  overlay.addEventListener('pointermove', (event) => {
    if (!drawing) return;
    if (tool.id === 'eraser') { eraseAt(event); return; }
    const point = pointOf(event);
    const last = current.pts[current.pts.length - 1];
    if (Math.hypot(point[0] - last[0], point[1] - last[1]) < 1.5) return;
    current.pts.push(point);
    redraw();
  });
  const finish = () => {
    if (!drawing) return;
    drawing = false;
    if (current) { strokes.push(current); current = null; redraw(); }
  };
  overlay.addEventListener('pointerup', finish);
  overlay.addEventListener('pointercancel', finish);

  // Esc 關閉畫筆；用捕獲階段先攔下，避免同時關掉底下的題目視窗
  const onKeyDown = (event) => {
    if (event.key === 'Escape') {
      event.stopImmediatePropagation();
      closeInkPad();
    }
  };
  window.addEventListener('keydown', onKeyDown, true);
  window.addEventListener('resize', redraw);

  state = { overlay, toolbar, onKeyDown, redraw };
  updateToolbar();
  redraw();
}

function closeInkPad() {
  if (!state) return;
  state.overlay.remove();
  state.toolbar.remove();
  window.removeEventListener('keydown', state.onKeyDown, true);
  window.removeEventListener('resize', state.redraw);
  state = null;
}
