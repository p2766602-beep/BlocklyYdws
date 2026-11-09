// 2026-11-09：讀題畫重點。在「完整題目」視窗的題目內容上畫記，三個平台（BlocklyYdws、blockly-lab、
// osep-judge）共用這一份檔案，改的時候三邊要一起同步（樣式也包在這裡，不依賴各平台的 CSS）。
//
// - 用途決定顏色（固定意義）：輸入＝藍、輸出＝橘、條件＝紫、其他＝灰。
// - 螢光筆：拖曳選取文字，放開就上色；記錄的是文字位置，視窗寬度改變也不會跑掉。
// - 畫筆：在題目上自由畫（圈、底線、箭頭）；記錄畫下當時的內容寬度，重畫時等比縮放。
// - 橡皮擦：點一下或劃過，整條筆跡／整段螢光就擦掉。
// - 畫記依題目各存一份在這台電腦的瀏覽器（localStorage），換題再回來還在。
const STORAGE_PREFIX = 'ydws-annot-v1:';
const STYLE_ID = 'ydws-annot-style';

const PURPOSES = [
  { id: 'input', label: '輸入', color: '#2563eb', mark: 'rgba(37, 99, 235, 0.22)' },
  { id: 'output', label: '輸出', color: '#ea580c', mark: 'rgba(234, 88, 12, 0.24)' },
  { id: 'rule', label: '條件', color: '#7c3aed', mark: 'rgba(124, 58, 237, 0.22)' },
  { id: 'other', label: '其他', color: '#475569', mark: 'rgba(71, 85, 105, 0.2)' },
];

const TOOLS = [
  { id: 'marker', label: '螢光筆', title: '拖曳選取題目文字，放開就上色' },
  { id: 'pen', label: '畫筆', title: '在題目上自由畫：圈重點、畫底線、畫箭頭' },
  { id: 'eraser', label: '橡皮擦', title: '點一下或劃過，整條筆跡／整段螢光就擦掉' },
];

const PEN_WIDTH = 2.5;
const ERASER_RADIUS = 10;

const STYLE_TEXT = `
.annot-toolbar { position: sticky; top: 0; z-index: 5; display: flex; flex-direction: column; gap: 4px;
  margin: 0 0 10px; padding: 6px 0; background: #ffffff; border-bottom: 1px solid #e2e8f0; }
.annot-row { display: flex; flex-wrap: wrap; align-items: center; gap: 4px; }
.annot-row[hidden] { display: none; }
.annot-row-label { margin-right: 2px; font-size: 12px; color: #64748b; }
.annot-toolbar button { min-width: 30px; margin: 0; padding: 3px 8px; font-size: 13px; line-height: 1.35;
  color: #334155; background: #f1f5f9; border: 1px solid #cbd5e1; border-radius: 6px; cursor: pointer; }
.annot-toolbar button:hover { background: #e2e8f0; }
.annot-toolbar .annot-toggle.active { color: #ffffff; background: #2563eb; border-color: #2563eb; }
.annot-toolbar .annot-purpose { color: var(--annot-color); font-weight: 700; border-color: var(--annot-color);
  background: #ffffff; }
.annot-toolbar .annot-purpose.selected { color: #ffffff; background: var(--annot-color); }
.annot-toolbar .annot-tool.selected { color: #ffffff; background: #0f172a; border-color: #0f172a; }
.annot-host { position: relative; }
.annot-content mark.annot-mark { padding: 0; color: inherit; background: var(--annot-mark); border-radius: 2px; }
.annot-canvas { position: absolute; top: 0; left: 0; z-index: 4; pointer-events: none; }
.annot-host.annot-mode-pen .annot-canvas,
.annot-host.annot-mode-eraser .annot-canvas { pointer-events: auto; touch-action: none; cursor: crosshair; }
.annot-host.annot-mode-eraser .annot-canvas { cursor: cell; }
.annot-host.annot-mode-pen, .annot-host.annot-mode-eraser { user-select: none; -webkit-user-select: none; }
.annot-host.annot-mode-marker .annot-content { cursor: text; }
`;

function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const style = document.createElement('style');
  style.id = STYLE_ID;
  style.textContent = STYLE_TEXT;
  document.head.appendChild(style);
}

function loadItems(key) {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_PREFIX + key) || 'null');
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveItems(key, items) {
  try {
    if (items.length === 0) {
      localStorage.removeItem(STORAGE_PREFIX + key);
    } else {
      localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(items));
    }
  } catch {
    // 無痕視窗或封鎖儲存時，畫記只保留到重新整理為止。
  }
}

function purposeById(id) {
  return PURPOSES.find((purpose) => purpose.id === id) || PURPOSES[PURPOSES.length - 1];
}

// ---- 螢光筆：用「從內容開頭算起第幾個字」記錄位置 ----

function textOffsetOf(content, node, offset) {
  const range = document.createRange();
  range.setStart(content, 0);
  range.setEnd(node, offset);
  return range.toString().length;
}

// 表格列之間的空白文字節點不能包 <mark>，會讓表格結構跑掉。
function canWrap(textNode) {
  const parentTag = textNode.parentNode?.nodeName;
  return !['TABLE', 'TBODY', 'THEAD', 'TFOOT', 'TR', 'COLGROUP'].includes(parentTag);
}

function applyHighlight(content, item, index) {
  const walker = document.createTreeWalker(content, NodeFilter.SHOW_TEXT);
  const segments = [];
  let position = 0;
  let node = walker.nextNode();

  while (node) {
    const length = node.data.length;
    const start = Math.max(item.s, position);
    const end = Math.min(item.e, position + length);
    if (start < end && canWrap(node) && node.data.slice(start - position, end - position).trim()) {
      segments.push({ node, start: start - position, end: end - position });
    }
    position += length;
    if (position >= item.e) break;
    node = walker.nextNode();
  }

  // 先收集再包，避免邊走邊切文字節點打亂走訪順序。
  segments.forEach(({ node: textNode, start, end }) => {
    let target = textNode;
    if (start > 0) target = target.splitText(start);
    if (end - start < target.data.length) target.splitText(end - start);
    const mark = document.createElement('mark');
    mark.className = 'annot-mark';
    mark.dataset.annotIndex = String(index);
    mark.style.setProperty('--annot-mark', purposeById(item.p).mark);
    target.parentNode.insertBefore(mark, target);
    mark.appendChild(target);
  });
}

// ---- 畫筆 ----

function drawStroke(ctx, stroke, scale) {
  const points = stroke.pts;
  if (!points.length) return;
  const color = purposeById(stroke.p).color;

  ctx.save();
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
  ctx.lineWidth = PEN_WIDTH;
  ctx.lineCap = 'round';
  ctx.lineJoin = 'round';

  if (points.length === 1) {
    ctx.beginPath();
    ctx.arc(points[0][0] * scale, points[0][1] * scale, PEN_WIDTH / 2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.beginPath();
    ctx.moveTo(points[0][0] * scale, points[0][1] * scale);
    for (let i = 1; i < points.length; i += 1) {
      ctx.lineTo(points[i][0] * scale, points[i][1] * scale);
    }
    ctx.stroke();
  }
  ctx.restore();
}

function distanceToSegment(px, py, ax, ay, bx, by) {
  const dx = bx - ax;
  const dy = by - ay;
  const lengthSquared = dx * dx + dy * dy;
  const t = lengthSquared === 0 ? 0 : Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / lengthSquared));
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

function strokeHit(stroke, x, y, scale) {
  const reach = ERASER_RADIUS + PEN_WIDTH / 2;
  const points = stroke.pts.map(([px, py]) => [px * scale, py * scale]);
  if (points.length === 1) return Math.hypot(x - points[0][0], y - points[0][1]) <= reach;

  for (let i = 1; i < points.length; i += 1) {
    if (distanceToSegment(x, y, points[i - 1][0], points[i - 1][1], points[i][0], points[i][1]) <= reach) {
      return true;
    }
  }
  return false;
}

// 把 container 目前的內容包成可畫記的區塊。container 內容重新產生後要再呼叫一次；
// 回傳的函式會移除監聽（React 元件卸載時用）。
export function attachAnnotator(container, key) {
  if (!container || !key) return () => {};
  container.__annotDetach?.();
  ensureStyle();

  const content = document.createElement('div');
  content.className = 'annot-content';
  while (container.firstChild) content.appendChild(container.firstChild);
  const originalHtml = content.innerHTML;

  const toolbar = document.createElement('div');
  toolbar.className = 'annot-toolbar';
  toolbar.innerHTML = `
    <div class="annot-row">
      <button type="button" class="annot-toggle" title="開啟後可直接在題目上畫重點">✏️ 畫重點</button>
    </div>
    <div class="annot-row annot-purposes" hidden>
      <span class="annot-row-label">用途</span>
      ${PURPOSES.map((purpose) => `
        <button type="button" class="annot-purpose" data-purpose="${purpose.id}"
          style="--annot-color:${purpose.color}">${purpose.label}</button>`).join('')}
    </div>
    <div class="annot-row annot-tools" hidden>
      <span class="annot-row-label">工具</span>
      ${TOOLS.map((tool) => `
        <button type="button" class="annot-tool" data-tool="${tool.id}" title="${tool.title}">${tool.label}</button>`).join('')}
      <button type="button" class="annot-undo" title="復原上一個畫記">↶ 復原</button>
      <button type="button" class="annot-clear" title="清除這一題的所有畫記">清除</button>
    </div>
  `;

  const host = document.createElement('div');
  host.className = 'annot-host';
  const canvas = document.createElement('canvas');
  canvas.className = 'annot-canvas';
  host.appendChild(content);
  host.appendChild(canvas);

  container.appendChild(toolbar);
  container.appendChild(host);

  const ctx = canvas.getContext('2d');
  const toggleButton = toolbar.querySelector('.annot-toggle');
  let items = loadItems(key);
  let enabled = false;
  let activePurpose = PURPOSES[0];
  let activeTool = TOOLS[0];
  let drawing = false;
  let currentStroke = null;
  let erasedDuringDrag = false;

  function scaleFor(stroke) {
    return host.clientWidth / (stroke.refW || host.clientWidth || 1);
  }

  function renderHighlights() {
    content.innerHTML = originalHtml;
    items.forEach((item, index) => {
      if (item.t === 'hl') applyHighlight(content, item, index);
    });
  }

  function redrawCanvas() {
    const ratio = window.devicePixelRatio || 1;
    const width = host.clientWidth;
    // 用 offsetHeight 不用 scrollHeight：畫布本身是絕對定位，算進 scrollHeight 會讓高度只增不減。
    const height = host.offsetHeight;
    if (width === 0 || height === 0) return;

    if (canvas.width !== Math.round(width * ratio) || canvas.height !== Math.round(height * ratio)) {
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    }

    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    ctx.clearRect(0, 0, width, height);
    items.forEach((item) => {
      if (item.t === 'pen') drawStroke(ctx, item, scaleFor(item));
    });
    if (currentStroke) drawStroke(ctx, currentStroke, 1);
  }

  function commit() {
    saveItems(key, items);
    renderHighlights();
    redrawCanvas();
  }

  function updateMode() {
    TOOLS.forEach((tool) => host.classList.toggle(`annot-mode-${tool.id}`, enabled && activeTool.id === tool.id));
    toggleButton.classList.toggle('active', enabled);
    toggleButton.textContent = enabled ? '✏️ 畫重點中（點此結束）' : '✏️ 畫重點';
    toolbar.querySelector('.annot-purposes').hidden = !enabled;
    toolbar.querySelector('.annot-tools').hidden = !enabled;
    toolbar.querySelectorAll('.annot-purpose').forEach((button) => {
      button.classList.toggle('selected', button.dataset.purpose === activePurpose.id);
    });
    toolbar.querySelectorAll('.annot-tool').forEach((button) => {
      button.classList.toggle('selected', button.dataset.tool === activeTool.id);
    });
  }

  toggleButton.addEventListener('click', () => {
    enabled = !enabled;
    updateMode();
    redrawCanvas();
  });

  toolbar.querySelectorAll('.annot-purpose').forEach((button) => {
    button.addEventListener('click', () => {
      activePurpose = purposeById(button.dataset.purpose);
      // 選了顏色卻停在橡皮擦，學生會以為筆壞了；自動切回螢光筆。
      if (activeTool.id === 'eraser') activeTool = TOOLS[0];
      updateMode();
    });
  });

  toolbar.querySelectorAll('.annot-tool').forEach((button) => {
    button.addEventListener('click', () => {
      activeTool = TOOLS.find((tool) => tool.id === button.dataset.tool) || TOOLS[0];
      updateMode();
    });
  });

  toolbar.querySelector('.annot-undo').addEventListener('click', () => {
    items.pop();
    commit();
  });

  toolbar.querySelector('.annot-clear').addEventListener('click', () => {
    items = [];
    commit();
  });

  // 螢光筆：選取文字放開後上色。
  function handleSelectionEnd() {
    if (!enabled || activeTool.id !== 'marker') return;
    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) return;
    const range = selection.getRangeAt(0);
    if (!content.contains(range.startContainer) || !content.contains(range.endContainer)) return;

    const start = textOffsetOf(content, range.startContainer, range.startOffset);
    const end = textOffsetOf(content, range.endContainer, range.endOffset);
    selection.removeAllRanges();
    if (end <= start || !range.toString().trim()) return;

    items.push({ t: 'hl', p: activePurpose.id, s: start, e: end });
    commit();
  }

  content.addEventListener('mouseup', handleSelectionEnd);
  content.addEventListener('touchend', () => setTimeout(handleSelectionEnd, 0));

  // 畫筆、橡皮擦都在畫布上操作；橡皮擦另外檢查畫布底下的螢光段落。
  function pointFromEvent(event) {
    const rect = canvas.getBoundingClientRect();
    return [Math.round((event.clientX - rect.left) * 10) / 10, Math.round((event.clientY - rect.top) * 10) / 10];
  }

  function eraseAt(event) {
    const [x, y] = pointFromEvent(event);
    const before = items.length;
    items = items.filter((item) => item.t !== 'pen' || !strokeHit(item, x, y, scaleFor(item)));

    const mark = document.elementsFromPoint(event.clientX, event.clientY)
      .find((element) => element.classList?.contains('annot-mark') && content.contains(element));
    if (mark) {
      const target = items.length === before ? Number(mark.dataset.annotIndex) : -1;
      // 筆跡和螢光同一點重疊時，先擦筆跡；螢光要等畫面更新後下一次再擦，避免索引錯位。
      if (target >= 0) items.splice(target, 1);
    }

    if (items.length !== before) {
      erasedDuringDrag = true;
      renderHighlights();
      redrawCanvas();
    }
  }

  canvas.addEventListener('pointerdown', (event) => {
    if (!enabled || event.button > 0) return;
    event.preventDefault();
    canvas.setPointerCapture(event.pointerId);
    drawing = true;

    if (activeTool.id === 'eraser') {
      erasedDuringDrag = false;
      eraseAt(event);
      return;
    }

    currentStroke = { t: 'pen', p: activePurpose.id, refW: host.clientWidth, pts: [pointFromEvent(event)] };
    redrawCanvas();
  });

  canvas.addEventListener('pointermove', (event) => {
    if (!drawing) return;

    if (activeTool.id === 'eraser') {
      eraseAt(event);
      return;
    }

    const point = pointFromEvent(event);
    const last = currentStroke.pts[currentStroke.pts.length - 1];
    if (Math.hypot(point[0] - last[0], point[1] - last[1]) < 1.5) return;
    currentStroke.pts.push(point);
    redrawCanvas();
  });

  function finishStroke() {
    if (!drawing) return;
    drawing = false;

    if (activeTool.id === 'eraser') {
      if (erasedDuringDrag) saveItems(key, items);
      return;
    }

    if (currentStroke) {
      items.push(currentStroke);
      currentStroke = null;
      saveItems(key, items);
      redrawCanvas();
    }
  }

  canvas.addEventListener('pointerup', finishStroke);
  canvas.addEventListener('pointercancel', finishStroke);

  // 視窗打開、縮放、圖片載入後內容高度改變，都要重設畫布大小。
  const observer = typeof ResizeObserver === 'function' ? new ResizeObserver(() => redrawCanvas()) : null;
  observer?.observe(host);
  content.addEventListener('load', redrawCanvas, true);

  renderHighlights();
  updateMode();
  requestAnimationFrame(redrawCanvas);

  const detach = () => {
    observer?.disconnect();
    if (container.__annotDetach === detach) delete container.__annotDetach;
  };
  container.__annotDetach = detach;
  return detach;
}
