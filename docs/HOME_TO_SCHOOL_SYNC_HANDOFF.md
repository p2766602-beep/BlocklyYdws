# 家用電腦 → 學校電腦 同步交接文件（2026-07-20）

## 一、交接目標

學校電腦目前已有兩個既有專案（皆透過 **tnjboxing** GitHub 帳號同步）：

```text
D:\YOSEP\blockly-lab        教學平台本體（已部署 GitHub Pages）
D:\YOSEP\YDWS-CodingBank    題庫生產管線（近兩天有更新，尚未同步到學校）
```

家用電腦這邊新建了第三個專案，學校完全沒有：

```text
C:\cProject\BlocklyYdws     新一代教學平台本體，由 blockly-lab 移植升級而來
```

本文件目的：讓學校電腦補齊 `BlocklyYdws` 專案，並把 `YDWS-CodingBank` 這兩天的更新拉下來，
同時把家用電腦這邊已確認的規劃決策交接給學校端（不管是人工接續，或是學校端開一個新的
Claude Code 對話），避免重新討論已經定案的事情。

---

## 二、現況總覽（帳號 / repo / 部署對照表）

| 專案 | 路徑（學校） | GitHub 帳號 | Repo | 部署位置 |
|---|---|---|---|---|
| blockly-lab | `D:\YOSEP\blockly-lab` | tnjbox / tnjboxing | 既有 repo | `tnjbox.github.io/blockly-lab/` |
| YDWS-CodingBank | `D:\YOSEP\YDWS-CodingBank` | tnjboxing | 既有 repo，**主張不公開**（含測資答案） | 無（本機管線工具） |
| **BlocklyYdws** | 建議 `D:\YOSEP\BlocklyYdws`（學校尚未建立） | **p2766602-beep**（Google 登入 p2766602@gmail.com，刻意用新帳號避免跟 tnjbox 認證衝突） | `https://github.com/p2766602-beep/BlocklyYdws.git` | `https://p2766602-beep.github.io/BlocklyYdws/` |

> **注意**：BlocklyYdws 用的是**第三個** GitHub 帳號（p2766602-beep），跟前兩個專案用的 tnjbox/tnjboxing
> 不是同一個。學校電腦需要能登入這個帳號才能 pull（如果 repo 是 private）或 push。

---

## 三、這次要同步的兩件事

### A. YDWS-CodingBank（近兩天有更新，學校已有這個 repo，只需要 pull）

近兩天完成的內容：362 題完整難度重評（68 題高信心度、44 題首次評設、121 題中低信心度覆核）+
10 組重複匯入題目合併（canonical 化，`problem_bank_master_complete.csv` 356→344 筆）+
`cyjunior-002` 原始 txt 內容缺陷修正。這些都已經 commit 在 YDWS-CodingBank 專案裡。

```powershell
cd D:\YOSEP\YDWS-CodingBank
git pull
```

### B. BlocklyYdws（全新專案，學校完全沒有，需要 clone）

家用電腦這邊本地已有 **7 筆 commit**（含本次交接文件）尚未同步到學校，內容：

```text
813a877  Initial import: migrate blockly-lab platform into BlocklyYdws
7e447ef  Fix garbled statement fields in JSL01/JSA01/JSS01/JSB02 course JS
e296805  Wire up Google Sheet score upload and fix GitHub Pages base path
9b1b28a  Fix SmartRing simulator 404 on GitHub Pages
f6fa4ee  Update planning doc: duplicate-import policy, cyjunior-002 fix, simulator fix, difficulty review status
e132e73  Note cyjunior-002 raw txt fix applied
587e553  修正題庫難度重評高信心度68題（362題重評總表的一部分）
3abc8f5  補齊題庫難度重評：68題高信心度改判 + 44題首次評設文件記錄與課程檔套用
59b0b14  題庫難度重評收尾：跨課程一致性對齊 + 剩餘中低信心度題目全數處理
def577c  記錄第八輪重複匯入題目合併工作（10組canonical化，master CSV層級）
08af00a  課程資料改為按需載入，避免隱藏課程在頁面載入時整包送進瀏覽器
299fd19  記錄第九輪：課程按需載入修正的背景、決策與驗證過程
```

這些已經 push 到 `p2766602-beep/BlocklyYdws` 的 `main` 分支（本次交接一併完成）。

---

## 四、學校電腦設定步驟

### 1. 設定雙 GitHub 帳號共存（一定要做，否則會跟 tnjbox 的憑證打架）

Windows 認證管理員是用 URL 存憑證，同一個 `github.com` 只能存一組，需要開啟
`useHttpPath` 讓 git 依「URL+路徑」分開存兩組帳號的憑證：

```powershell
git config --global credential.https://github.com.useHttpPath true
```

### 2. Clone BlocklyYdws

```powershell
cd D:\YOSEP
git clone https://github.com/p2766602-beep/BlocklyYdws.git
cd BlocklyYdws
```

第一次 push/pull 時如果跳出登入視窗，登入 **p2766602-beep**（Google 帳號 p2766602@gmail.com）的
GitHub 帳號，不是 tnjbox。

> 若用 VS Code 開發，VS Code 內建的 Git 認證（GIT_ASKPASS）有時會蓋掉憑證管理員的設定，
> 導致抓錯帳號。遇到抓錯帳號時，在終端機用：
> ```powershell
> $env:GIT_ASKPASS=""; git push
> ```
> 繞過即可。

### 3. 安裝依賴並驗證

```powershell
npm install
npm run dev
```

打開 `http://localhost:5173`，確認可以看到課程列表、能開啟至少一個公開課程（如 `JSB00`）、
輸入隱藏課程代碼（如 `SORT01`）能正確載入。

### 4.（選用）重新部署 GitHub Pages

家用電腦這邊 push 的是原始碼，**GitHub Pages 上線版本還沒更新到最新這 6 筆 commit**
（部署是獨立動作，不會因為 push 到 main 自動觸發）。如果需要讓上線版本反映最新內容：

```powershell
npm run deploy
```

（等同 `npm run build` + `npx gh-pages -d dist`）

---

## 五、重要澄清：不用去複製 `YDWS-CodingData/` 或根目錄 `courses/`

家用電腦的 `BlocklyYdws` 資料夾底下有 `YDWS-CodingData/` 和根目錄 `courses/` 兩個資料夾，
但這兩個**都被 `.gitignore` 排除**，不會出現在學校的 clone 裡：

```text
# 舊有本機參考資料，不進版控（正式來源在 YDWS-CodingBank，該專案主張不公開）
/YDWS-CodingData/
/courses/
```

這不影響學校電腦跑這個專案 —— App 實際讀取的課程資料在 `src/courses/`（**有**進版控，
clone 就會有），跟根目錄的 `courses/` 是兩回事。根目錄那兩個資料夾只是題庫轉換工具
（`tools/convert_course_zip_v044.py`）的本機暫存/參考檔，只有要重新從原始 txt 產生新課程時才需要，
而且正式的產生流程已經改成走 `YDWS-CodingBank` 自己的六階段管線輸出到 `src/courses/`，
不建議在 `BlocklyYdws` 這邊重跑轉換工具（避免兩套來源不一致）。

---

## 六、待確認 / 待辦清單

- [ ] 確認學校電腦能否登入 `p2766602-beep`（Google 帳號 p2766602@gmail.com）以完成 clone/push
- [ ] 確認 `p2766602-beep/BlocklyYdws` repo 目前的 public/private 狀態是否符合預期
- [ ] 若要讓上線版本同步最新 6 筆 commit，記得手動跑 `npm run deploy`
- [ ] YDWS-CodingBank 的 `PROBLEM_BANK_SCHEMA.md`（L1~L5五級）跟平台原先「基礎/初階/進階/挑戰」
      四級難度標籤尚未協調成同一套，仍是待決事項
- [ ] 165 題覆核中已完成全部 362 題（含首次評設、重評、10組重複合併），題庫稽核工作本身已結束，
      不需要再重複盤點

---

## 七、專案脈絡摘要（給新 Claude 對話快速上手用）

若在學校電腦開新的 Claude Code 對話，把下面內容貼給它，可以省掉重新討論已定案事項：

> 這是一個 Blockly 拖拉積木程式設計教學平台，目標客群是國小5年級到國中9年級、約30人單班規模。
> 核心是既有專案 blockly-lab（Vite + Blockly 13.0）升級而來，含 SmartRing 硬體/純軟體模擬器雙軌、
> 系統評分引擎、Google Sheet 成績上傳。題庫由獨立專案 YDWS-CodingBank 的六階段管線生產
> （raw txt → 清理 → 人工主表 → 課程JS → 匯出），YDWS-CodingBank 自己主張題庫不公開。
>
> 課程可見度分三層，用詞需精確：
> 1. **公開課程**（如 JSB00/JSA00/CPB00）：選單會列出。
> 2. **不公開資料**：題庫總表 CSV，只留在 YDWS-CodingBank 本機，不上 GitHub。
> 3. **隱藏課程**（如 MATH01/SIM01/SORT01/JSB02/CYELEMENT01）：JS 已上線但選單不列出，
>    輸入正確代碼才載入——已改成 Vite code-splitting 按需載入（非 eager 整包），
>    降低「開發者工具直接看到全部隱藏課程內容」的曝光風險（GitHub Pages 純靜態託管，
>    這個風險無法徹底消除，只能降低曝光機率，不是真正的存取控制）。
>
> AI 互動模組規劃：合併成一個模組、共用同一套後端 API/安全防護，用「情境設定」區分行為——
> A自由問答、B密室逃脫概念檢核引擎（通用演算法）、C Blockly解題過程陪伴（4階段版為權威版本）、
> D SRC助教（12個SmartRing示範動畫，掛載B的5關引擎+SRC知識包，整合進平台不維持獨立GPT）。
> 已確認的工程建議（尚未實作）：關卡進度/正確答案判定/亂數產生都應由後端掌管，不要純靠
> prompt 指示 AI 自律。
>
> 使用者的協作偏好：先討論架構/內容/脈絡，逐一確認再執行，不要跳過討論直接寫程式碼；
> 期待具體誠實的技術可行性評估，不要單純附和。push/部署等對外可見或難復原動作，
> 即使有臨時授權跳過確認，仍需視為更高風險等級，除非明確涵蓋在授權範圍內。

完整規劃細節見同 repo 的 `專案規劃摘要.md`、AI 人設 prompt 見 `prompts/` 與根目錄的
`BlocklyLab_GPT_System_Instructions_AI_Literacy_V2.md`、`SRC_GPT_Minimal_Knowledge_V3.md`。
