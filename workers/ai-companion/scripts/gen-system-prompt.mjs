// 從 docs/AI伴學GEM-V62-AI素養評估版.md 產生 src/systemPrompt.js。
// 修改System Prompt請改那份md檔，再重新執行這支腳本，不要手改 src/systemPrompt.js。
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(here, '..', '..', '..');
const mdPath = join(repoRoot, 'docs', 'AI伴學GEM-V62-AI素養評估版.md');
const outPath = join(here, '..', 'src', 'systemPrompt.js');

const md = readFileSync(mdPath, 'utf8');

const escaped = md
  .split('\\').join('\\\\')
  .split('`').join('\\`')
  .split('${').join('\\${');

const out = [
  '// 自動由 docs/AI伴學GEM-V62-AI素養評估版.md 產生，內容修改請改原始md檔後重新產生，不要手改此檔。',
  'export const SYSTEM_PROMPT = `',
  escaped,
  '`;',
  '',
].join('\n');

writeFileSync(outPath, out, 'utf8');
console.log(`已產生 ${outPath}（${out.length} 字元）`);
