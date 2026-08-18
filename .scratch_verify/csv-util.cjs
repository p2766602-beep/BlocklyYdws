// 簡易 RFC4180 CSV parser/writer（node內建沒有csv套件，YDWS-CodingBank也沒裝，手刻一個
// 夠用的版本：處理雙引號欄位、欄位內逗號、欄位內換行、雙引號跳脫""）。
function parseCsv(text) {
  const rows = [];
  let row = [];
  let field = '';
  let inQuotes = false;
  let i = 0;
  const n = text.length;
  while (i < n) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i += 2; continue; }
        inQuotes = false; i += 1; continue;
      }
      field += c; i += 1; continue;
    } else {
      if (c === '"') { inQuotes = true; i += 1; continue; }
      if (c === ',') { row.push(field); field = ''; i += 1; continue; }
      if (c === '\r') { i += 1; continue; }
      if (c === '\n') { row.push(field); rows.push(row); row = []; field = ''; i += 1; continue; }
      field += c; i += 1; continue;
    }
  }
  if (field.length > 0 || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

function needsQuote(s) {
  return /[",\n\r]/.test(s);
}

function writeCsv(rows) {
  return rows.map((row) => row.map((f) => {
    const s = String(f ?? '');
    if (needsQuote(s)) return '"' + s.replace(/"/g, '""') + '"';
    return s;
  }).join(',')).join('\r\n') + '\r\n';
}

module.exports = { parseCsv, writeCsv };
