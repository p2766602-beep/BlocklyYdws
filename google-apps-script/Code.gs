/**
 * Blockly Lab 成績上傳 Google Apps Script
 *
 * 使用方式：
 * 1. 建立 Google Sheet。
 * 2. 開啟「擴充功能」→「Apps Script」。
 * 3. 將本檔內容貼到 Code.gs。
 * 4. 執行 setupSheet() 建立表頭。
 * 5. 部署為 Web App：執行身分選「我」，存取權依課堂需求選擇。
 * 6. 將 Web App URL 貼回前端 src/main.js 的 SCORE_UPLOAD_URL。
 */

const SHEET_NAME = '成績';

const HEADERS = [
  '時間',
  '班級',
  '座號',
  '姓名',
  '學生識別',
  '課程代碼',
  '課程名稱',
  '題目代碼',
  '題目名稱',
  '模式',
  '分數',
  '通過筆數',
  '總筆數',
  '通過率',
  '是否全部通過',
  '版本',
  '原始資料',
];

function setupSheet() {
  const sheet = getOrCreateSheet_();
  ensureHeader_(sheet);
}

function doPost(e) {
  try {
    const payload = parsePayload_(e);
    const sheet = getOrCreateSheet_();
    ensureHeader_(sheet);

    sheet.appendRow([
      new Date(),
      payload.className || '',
      payload.seatNumber || '',
      payload.studentName || '',
      payload.studentKey || '',
      payload.courseId || '',
      payload.courseTitle || '',
      payload.taskId || '',
      payload.taskTitle || '',
      payload.mode || '',
      Number(payload.score || 0),
      Number(payload.passed || 0),
      Number(payload.total || 0),
      Number(payload.passRate ?? payload.score ?? 0),
      payload.allPassed ? '是' : '否',
      payload.version || '',
      JSON.stringify(payload),
    ]);

    return json_({ ok: true, message: 'score saved' });
  } catch (error) {
    return json_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function doGet() {
  return json_({ ok: true, message: 'Blockly Lab score upload endpoint is ready.' });
}

function parsePayload_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('missing post body');
  }

  const body = e.postData.contents;
  return JSON.parse(body);
}

function getOrCreateSheet_() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
  }

  return sheet;
}

function ensureHeader_(sheet) {
  const firstRow = sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0];
  const hasHeader = firstRow.some((cell) => String(cell || '').trim() !== '');

  if (!hasHeader) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
    return;
  }

  const currentHeader = firstRow.map((cell) => String(cell || ''));
  const sameHeader = HEADERS.every((header, index) => currentHeader[index] === header);

  if (!sameHeader) {
    sheet.getRange(1, 1, 1, HEADERS.length).setValues([HEADERS]);
    sheet.setFrozenRows(1);
  }
}

function json_(object) {
  return ContentService
    .createTextOutput(JSON.stringify(object))
    .setMimeType(ContentService.MimeType.JSON);
}
