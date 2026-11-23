// 2026-11-18：畫筆的滑鼠游標。原本是瀏覽器內建的十字游標，又細又小，投影時看不清楚；
// 改成筆形游標（2026-11-23 由 64 像素縮成 40 像素），筆尖顏色跟著目前選的顏色，筆尖就是實際下筆的位置（左下角）。
// 橡皮擦改成圓圈，大小和實際擦除的範圍一樣。自訂游標載入失敗時，退回原本的內建游標。
// inkpad.js（全頁畫筆）與 annotator.js（題目畫重點）共用；BlocklyYdws、blockly-lab、osep-judge
// 三個平台各放一份，改的時候三邊要一起同步。
const OUTLINE = '#1f2937';
const SIZE = 40; // 游標實際大小（像素）；筆形用 64×64 座標畫，再縮放成這個大小
const TIP_X = 3; // 筆尖（下筆位置）在縮放後游標裡的座標
const TIP_Y = 37;

function toCursor(svg, hotX, hotY, fallback) {
  return `url("data:image/svg+xml,${encodeURIComponent(svg)}") ${hotX} ${hotY}, ${fallback}`;
}

// 筆身沿著從左下往右上的斜線畫；筆尖在 64 座標的 (4.8, 59.2)，縮放後剛好是 (TIP_X, TIP_Y)。
function pen(color, { bodyHalf, tip }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${SIZE}" height="${SIZE}" viewBox="0 0 64 64">
<g transform="translate(4.8 59.2) rotate(-45)" stroke="${OUTLINE}" stroke-width="2.4" stroke-linejoin="round">
<path d="M14 -${bodyHalf} L60 -${bodyHalf} L60 ${bodyHalf} L14 ${bodyHalf} Z" fill="#f8fafc"/>
<path d="M60 -${bodyHalf} L67 -${bodyHalf} Q71 0 67 ${bodyHalf} L60 ${bodyHalf} Z" fill="${color}"/>
<path d="M22 -${bodyHalf} L27 -${bodyHalf} L27 ${bodyHalf} L22 ${bodyHalf} Z" fill="${color}"/>
${tip}
</g></svg>`;
}

// 畫筆：削尖的木頭筆頭，最前端是墨水顏色
export function penCursor(color) {
  const tip = `<path d="M0 0 L14 -6 L14 6 Z" fill="#f3dcb8"/>
<path d="M0 0 L5 -2.2 L5 2.2 Z" fill="${color}" stroke="${color}"/>`;
  return toCursor(pen(color, { bodyHalf: 6, tip }), TIP_X, TIP_Y, 'crosshair');
}

// 螢光筆：較粗的筆身與斜切的寬筆頭
export function markerCursor(color) {
  const tip = `<path d="M1 -4 L14 -8 L14 8 L1 4 Z" fill="${color}"/>`;
  return toCursor(pen(color, { bodyHalf: 8, tip }), TIP_X, TIP_Y, 'crosshair');
}

// 橡皮擦：圓圈大小等於實際擦除範圍（半徑 radius）
export function eraserCursor(radius) {
  const size = Math.ceil(radius * 2 + 4);
  const c = size / 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
<circle cx="${c}" cy="${c}" r="${radius}" fill="rgba(255,255,255,0.35)" stroke="#ffffff" stroke-width="3"/>
<circle cx="${c}" cy="${c}" r="${radius}" fill="none" stroke="${OUTLINE}" stroke-width="1.5"/>
<circle cx="${c}" cy="${c}" r="1.5" fill="${OUTLINE}"/>
</svg>`;
  return toCursor(svg, Math.round(c), Math.round(c), 'cell');
}
