# 教師範例答案編輯後端（Cloudflare Worker）

讓教師能不改課程JS原始碼、直接在網頁上編輯每題的「載入範例」積木（`starterXml`）跟開關，
並標記某題內容有誤（`note`，輕量回報用，不是完整題目內容編輯——題目本身的題敘/測資有誤要回頭
修YDWS-CodingBank的CSV/`cleaned/problems_json`再重新匯出，不在這個Worker的範圍內，理由見
`專案規劃摘要.md`的相關決策記錄）。

## 資料模型

KV（`STARTER_KV`）每個課程代碼一筆值，內容是 `{ [taskId]: { starterXml, loadable, note, updatedAt } }`。

## 端點

- `GET /overrides?courseCode=XXX`：公開讀取，不需要密碼，回傳 `{courseCode, overrides}`。
- `POST /overrides`：教師寫入，`{courseCode, taskId, starterXml, loadable, note, token}`，
  `token`要跟`TEACHER_TOKEN`密鑰一致才會寫入。每次送出的是該題完整的期望狀態。

## 本機開發

```powershell
cd workers/starter-editor
npm install
npm run dev
```

## 部署到 Cloudflare（第一次）

```powershell
npx wrangler kv namespace create STARTER_KV
# 把回傳的id填進 wrangler.toml 的 kv_namespaces[0].id（取代 REPLACE_WITH_REAL_KV_NAMESPACE_ID）

npm run secret:token   # 設定教師密碼，之後教師後台UI輸入這組密碼才能寫入
npm run deploy
```

部署後把 `*.workers.dev` 網址填進 `src/courses/index.js`（讀取）跟教師後台頁面（寫入）的
Worker base URL 常數。
