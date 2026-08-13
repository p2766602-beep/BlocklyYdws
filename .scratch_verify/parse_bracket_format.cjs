// 解析【題目名稱】/【題目說明】/【輸入說明】/【輸出說明】/【測試資料】+[測資 N]格式的TXT
// （跟parse_txtfile.cjs處理的HTML-table格式不同，這批某些縣市用這種純文字括號格式）。
// 輸出格式跟parse_txtfile.cjs一致：{fullTitle, description, examples, declaredCount, testCases}
// 方便共用後續assemble流程。這個格式沒有獨立的「範例格式」表格，examples留空陣列，
// testCases本身就是完整測資（10筆）。

const fs = require('fs');

function stripCite(s) {
  return s.replace(/\[cite:\s*\d+(?:,\s*\d+)*\]/g, '').replace(/\r\n/g, '\n').trim();
}

function parseTask(rawBlock) {
  const titleMatch = rawBlock.match(/【題目名稱】\s*\r?\n([\s\S]*?)(?=\r?\n【題目說明】)/);
  const descMatch = rawBlock.match(/【題目說明】\s*\r?\n([\s\S]*?)(?=\r?\n【輸入說明】)/);
  const inputMatch = rawBlock.match(/【輸入說明】\s*\r?\n([\s\S]*?)(?=\r?\n【輸出說明】)/);
  const outputMatch = rawBlock.match(/【輸出說明】\s*\r?\n([\s\S]*?)(?=\r?\n【測試資料】)/);
  const casesMatch = rawBlock.match(/【測試資料】\s*\r?\n([\s\S]*)$/);

  const fullTitle = titleMatch ? stripCite(titleMatch[1].trim()) : '(未知標題)';
  const description = descMatch ? stripCite(descMatch[1].trim()) : '';
  const inputDescription = inputMatch ? stripCite(inputMatch[1].trim()) : '';
  const outputDescription = outputMatch ? stripCite(outputMatch[1].trim()) : '';

  const testCases = [];
  if (casesMatch) {
    const casesText = casesMatch[1];
    const caseRe = /\[測資\s*(\d+)\]\s*\r?\n輸入[：:]\s*\r?\n([\s\S]*?)\r?\n輸出[：:]\s*\r?\n([\s\S]*?)(?=\r?\n\[測資\s*\d+\]|$)/g;
    let m;
    while ((m = caseRe.exec(casesText))) {
      const input = stripCite(m[2].trim());
      const output = stripCite(m[3].trim());
      testCases.push({ input, expectedOutput: output, output, score: 10, hidden: false });
    }
  }

  return {
    fullTitle,
    description,
    inputDescription,
    outputDescription,
    examples: testCases.slice(0, 2).map((tc) => ({ input: tc.input, output: tc.expectedOutput, explanation: '' })),
    declaredCount: testCases.length,
    testCases,
  };
}

function parseFile(filepath) {
  const content = fs.readFileSync(filepath, 'utf8');
  const parts = content.split(/(?:\r?\n){5,}/).map((p) => p.trim()).filter(Boolean);
  return parts.map(parseTask);
}

if (require.main === module) {
  const filepath = process.argv[2];
  const tasks = parseFile(filepath);
  console.log(JSON.stringify(tasks, null, 2));
}

module.exports = { parseFile };
