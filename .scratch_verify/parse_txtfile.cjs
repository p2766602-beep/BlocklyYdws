const fs = require('fs');
const path = require('path');

function stripHtml(s) {
  return s
    .replace(/\[cite:\s*\d+(?:,\s*\d+)*\]/g, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/?(table|tr|td|th)[^>]*>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l.length > 0)
    .join('\n');
}

function parseDescriptionBlock(raw) {
  // raw: everything between "題目說明" table header and "範例格式" header
  return stripHtml(raw);
}

function parseExamplesTable(raw) {
  // raw: the <table border="1">...</table> section
  const rowRe = /<tr>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<td[^>]*>([\s\S]*?)<\/td>\s*<\/tr>/g;
  const examples = [];
  let m;
  while ((m = rowRe.exec(raw))) {
    const input = stripHtml(m[1]);
    const output = stripHtml(m[2]);
    const explanation = stripHtml(m[3]);
    if (input === '使用者輸入' || input === '輸入') continue; // header row
    examples.push({ input, output, explanation });
  }
  return examples;
}

function parseCaseBlocks(raw) {
  const blocks = raw.split(/\r?\n\r?\n/).map((b) => b.trim()).filter(Boolean);
  const cases = [];
  for (const block of blocks) {
    if (!/^案例\d+/.test(block)) continue;
    const lines = block.split(/\r?\n/);
    const inputs = [];
    const answerLines = [];
    let score = null;
    // 注意：預期答案可能跨多行(例如「A車20人\nB車超載\nC車16人」)，不能只抓
    // 「預期答案：」那一行本身；要一路累積到「分數：」那一行為止才停止。
    let inAnswer = false;
    for (const line of lines) {
      if (inAnswer) {
        const scoreMatch = line.match(/^分數[：:]\s*(.*)$/);
        if (scoreMatch) { score = Number(scoreMatch[1].trim()); inAnswer = false; continue; }
        answerLines.push(line);
        continue;
      }
      const inputMatch = line.match(/^第[一二三四五六七八九十]個輸入[：:]\s*(.*)$/);
      if (inputMatch) {
        if (inputMatch[1].trim().length > 0) inputs.push(inputMatch[1].trim());
        continue;
      }
      const ansMatch = line.match(/^預期答案[：:]\s*(.*)$/);
      if (ansMatch) {
        if (ansMatch[1].trim().length > 0) answerLines.push(ansMatch[1].trim());
        inAnswer = true;
        continue;
      }
      const scoreMatch = line.match(/^分數[：:]\s*(.*)$/);
      if (scoreMatch) { score = Number(scoreMatch[1].trim()); continue; }
    }
    cases.push({ input: inputs.join('\n'), expectedOutput: answerLines.join('\n'), score });
  }
  return cases;
}

function parseTask(rawBlock) {
  // 注意：來源TXT有些題目誤用簡體「题目」而非正體「題目」（例如114EHsinchu.txt的第2題），
  // 兩種都要接受，否則後面的題目標題會全部抓不到變成"(未知標題)"。
  const titleMatch = rawBlock.match(/^[題题]目[：:](.*)$/m);
  const fullTitle = titleMatch ? titleMatch[1].trim() : '(未知標題)';

  const descTableMatch = rawBlock.match(/<tr><th>題目說明<\/th><\/tr>([\s\S]*?)<tr><th>範例格式<\/th><\/tr>/);
  const description = descTableMatch ? parseDescriptionBlock(descTableMatch[1]) : '';

  const exampleTableMatch = rawBlock.match(/<table border="1">([\s\S]*?)<\/table>/);
  const examples = exampleTableMatch ? parseExamplesTable(exampleTableMatch[0]) : [];

  const countMatch = rawBlock.match(/筆數[：:]\s*(\d+)/);
  const declaredCount = countMatch ? Number(countMatch[1]) : null;

  const casesSectionMatch = rawBlock.match(/筆數[：:]\s*\d+\r?\n([\s\S]*)$/);
  const testCases = casesSectionMatch ? parseCaseBlocks(casesSectionMatch[1]) : [];

  return { fullTitle, description, examples, declaredCount, testCases };
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
