# 成績評分/上傳後端（Cloudflare Worker）

修正兩個問題：
1. `google-apps-script/Code.gs`的`doPost`本來沒有真正的來源驗證，任何拿到Web App URL的人都能塞假分數。
2. `mode:"contest"`課程（`CPB00`、`CYJUNIOR01`）的`testCases[].expectedOutput`本來原封不動打包進
   公開的課程JS，畫面雖然刻意只顯示通過/未通過，但按F12看原始碼還是能直接抓到正確答案。

做法：這個Worker是瀏覽器跟Apps Script之間唯一的橋樑，`src/answerKeys.json`（從`src/courses/*.js`
抽出來的私密解答資料）只存在Worker這一側，瀏覽器拿不到；分數一律由Worker用自己的資料重新計算，
不信任前端聲稱的數字；只有Worker知道呼叫Apps Script要帶的`UPLOAD_TOKEN`。

## 端點

- `POST /grade`：`{courseId, taskId, cases:[{caseId, actualOutput}]}` → `{results, passed, total, score, allPassed}`。
  只有contest模式課程的前端需要打這支（因為它們的本機JS已經沒有expectedOutput可比對）。
- `POST /submit-score`：`{courseId, courseTitle, taskId, taskTitle, mode, profile, cases}` →
  Worker重新算分後轉送Google Sheet，回傳`{ok, score, passed, total, allPassed, sheet}`。

## 本機開發

```powershell
cd workers/score-grader
npm install
npm run dev
```

## 更新解答資料

`src/courses/*.js`的題目內容有異動時（新課程、改測資），要重新產生`src/answerKeys.json`並
重新部署，不然Worker評分用的還是舊資料：

```powershell
cd workers/score-grader
npm run build-answer-key
npm run deploy
```

## 部署到 Cloudflare

```powershell
npm run secret:token   # 只需執行一次；值必須跟Apps Script編輯器「專案設定→指令碼屬性」的
                       # UPLOAD_TOKEN完全一致，否則Sheet會拒絕寫入
npm run deploy
```

部署後把 `*.workers.dev` 網址填進 `src/main.js` 的 Worker base URL 常數。

## 移除contest課程的公開答案

新增/修改`mode:"contest"`課程時，記得同步從該課程JS檔的`testCases`移除`expectedOutput`/`output`
欄位（`examples[].output`不要動，那是題目說明區本來就該公開展示的範例輸出，跟評分用的
`testCases`是不同東西）。
