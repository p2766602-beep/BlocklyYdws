# 換機器/收尾交接文件（2026-08-01）

下次工作階段開始（不管人工接續、還是開新Claude Code對話）：**先讀這份文件 + `專案規劃摘要.md`
最上方「目前決策現況」表**，不要只看單一專案的git歷史就下結論——三專案各自獨立git歷史，
互相看不到對方，過去發生過只查一邊就誤判進度的狀況。

## 三專案現況（收尾時已全部檢查，皆乾淨、皆已push）

| 專案 | 分支 | 未commit變更 | 未push commit |
|---|---|---|---|
| BlocklyYdws | main | 0（僅1個跟本次工作無關的既有未追蹤檔案`交接文件-學生專題發展歷程架構.md`，維持原樣未處理） | 0 |
| YDWS-CodingBank | master | 0 | 0 |
| YDWS-EscapeRoom | main | 0 | 0（本次完全沒動到這個專案） |

三專案全部乾淨、已push。本次session所有push都經使用者明確同意才執行。

## 本次session做了什麼（完整脈絡見`專案規劃摘要.md`「目前決策現況」表對應列）

延續前一輪「對齊官方競賽平台新版輸入輸出規範」的工作，本輪把這條因應鏈**全部收尾完成**：

1. **修復JSA00/JSB00共13題demo被前一輪重新匯出清空的bug**：從git歷史救回，並修好
   `export_course_js.py`本身（`get_starter_xml()`延用已上線值），順帶發現並修掉
   `load_course_js_tasks()`無法解析backtick模板字串的更深層bug。
2. **修正評分引擎「說出vs輸出」不一致bug**：使用者實測官方平台發現只有「說出」積木才算
   評分、「輸出」積木只是顯示訊息。新增`sayOutput`只收集`print()`內容，`requiresGreenFlag`
   課程評分改用它比對。UI同步分區呈現（執行程式分「系統/除錯訊息」與「說出內容」兩塊；
   系統評分表格「實際輸出」改標「實際說出內容」）。
3. **AI伴學知識補強**：系統提示原本完全不知道綠旗/說出規範，已修好除錯checklist跟標準
   術語（`docs/AI伴學GEM-V62-AI素養評估版.md`＋`workers/ai-companion/src/systemPrompt.js`）。
4. **JSA00/JSB00共13題demo改寫成新積木版本**（當🚩被點擊/詢問並等待/詢問的答案/說出）。
5. **M系列33個學習地圖課程（303題）全面推廣官方I/O規範**：全部套用`requiresGreenFlag`，
   80題現有demo積木全部改寫成新積木版本（7題沿用JSA00/JSB00/JSL01已驗證版本、73題原創
   改寫，過程中建立三種轉換模式並修好`interaction_answer`對純數字字串當字串用時的bug）。
6. **JSA01/JSB02/JSS01共104題套用`requiresGreenFlag`**（無demo可改，純結構性欄位新增）。
7. **查證教師後台範例編輯功能現況**：確認`teacher.html`+`src/teacherAdmin.js`+
   `workers/starter-editor`（2026-07-25就已完成、當時漏記進本文件）目前正常運作、不受
   I/O規範變更影響（純文字貼上XML，不解析積木內容）。**釐清一個關鍵機制**：教師後台儲存
   的內容只寫進Cloudflare KV，是「執行期覆蓋層」，**不會寫回`src/courses/*.js`檔案**，
   也不會被`export_course_js.py`重新匯出覆蓋或帶走。

**至此JSL01/JSA00/JSB00/JSA01/JSB02/JSS01/M系列33課程全部對齊官方I/O規範**，這條工作鏈
正式完結。

## 使用者本次做的決策（供下次接續時參考，不要重新討論已拍板的事）

- **M系列33課程維持隱藏課程**，不需要另外決策：公開選單只列平台預設課程代碼，其餘一律
  隱藏，這是既定原則不是待辦。
- **教師後台的KV覆寫層暫不做「同步回JS檔」的自動化**：使用者决定如果之後真的需要讓某個
  教師編輯過的範例變成永久版本，就用既有的題庫匯出流程（`export_course_js.py`／
  `export_learning_map_v2_course_js.py`）重新匯出，不建立額外的自動同步機制，避免過度
  工程。

## 已知待辦（下一輪可以做，不急）

- ~~教師後台目前KV裡是空的，還沒有人實際用過——如果要驗證整條路真的通，可以實際登入
  `teacher.html`存一筆看看。~~ **2026-08-02已完成驗證**：用本機dev server打正式部署的
  Worker，密碼解鎖→載入JSL01→編輯備註→儲存→重新載入確認「已覆寫」徽章與內容正確持久化，
  端對端流程確認可用。測試資料已清空覆寫回空值（Worker沒有DELETE端點，徽章會留著但內容
  已清乾淨）。細節見`專案規劃摘要.md`「目前決策現況」表新增列。
- Vite主bundle 920KB，每次build都跳code-splitting建議，效能優化機會，不急。
- AI伴學的課程白名單（`workers/ai-companion/wrangler.toml`的`PUBLIC_COURSE_CODES`）
  要跟前端`src/courses/index.js`的`publicCourseGroups`手動保持同步，容易漂移，可考慮
  自動化檢查。
- YDWS-EscapeRoom：教師後台/學習歷程分析記錄仍是獨立待辦，MVP階段刻意沒做。
- 題庫難度重評流程的checklist skill（`/audit-difficulty`）構想提過，還沒動工。

## 使用者被跳過/拒絕的動作

無——本次session所有push/部署都經過使用者明確同意才執行。

## 下一步建議

目前I/O規範推廣工作鏈已完結，沒有立即急迫的下一步。若要繼續，依優先順序：
教師後台實際試用驗證 → AI伴學白名單同步自動化 → 難度重評checklist skill。
