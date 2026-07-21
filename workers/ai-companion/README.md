# AI伴學後端（Cloudflare Worker）

代理 Gemini API 呼叫，System Prompt（`docs/AI伴學GEM-V62-AI素養評估版.md`）與 API 金鑰只存在這裡，前端拿不到。

## 本機開發

```powershell
cd workers/ai-companion
npm install
cp .dev.vars.example .dev.vars   # 填入你的 GEMINI_API_KEY
npm run dev
```

## 部署到 Cloudflare

```powershell
npm run secret:gemini   # 只需執行一次，之後金鑰存在Cloudflare端不需要重複輸入
npm run deploy
```

部署後會得到一個 `*.workers.dev` 網址，把它填進 BlocklyYdws 前端 AI 伴學面板的 API 端點設定。

## 修改 System Prompt

不要直接改 `src/systemPrompt.js`（檔案開頭有自動產生標記）。改 `docs/AI伴學GEM-V62-AI素養評估版.md`，
然後重新產生：

```powershell
cd workers/ai-companion
node scripts/gen-system-prompt.mjs
```

## 修改課程代碼白名單/用量上限

編輯 `wrangler.toml` 的 `[vars]` 區塊（`ALLOWED_COURSE_CODES`、`STUDENT_HOURLY_LIMIT` 等），
改完要重新 `npm run deploy` 才會生效。
