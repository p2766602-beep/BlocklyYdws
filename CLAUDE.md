# 跨專案提醒（務必先讀）

本專案（**BlocklyYdws**，教學平台本體）與另一個獨立 git repo **YDWS-CodingBank**（題庫生產管線）
是同一個工作系統的兩半，彼此高度耦合，但各自是獨立的 git 歷史，`git log` 互相看不到對方。

**在回答任何「目前進度」「還有什麼待辦」「這件事解決了沒」之類的問題之前，一定要先去查
YDWS-CodingBank 那邊的狀態，不能只看這個專案的歷史就下結論**（過去發生過只看單邊歷史、
誤判另一邊已完成的工作為「尚未解決」的情況）。

## 最近一次工作階段交接（2026-07-21，家用電腦，下一次預期在學校電腦）

- 修正了 YDWS-CodingBank 的 `tools/export_course_js.py`：`BLOCKLYDWS_COURSES_DIR`
  原本寫死學校電腦路徑（`D:\YOSEP\BlocklyYdws\src\courses`），在家用電腦上會讓
  PB06 原生題（無 raw txt 來源）的測資備援機制悄悄失效。已改成兩台電腦路徑都列入候選、
  自動挑存在的那個（YDWS-CodingBank commit `e8dad10`）。
- 用 YDWS-CodingBank 的網頁組卷工具產生了自訂題目卷課程 `A20260721`（8題），已複製到
  本專案 `src/courses/A20260721.js`，build 驗證通過（獨立 chunk，未進主 bundle），
  **刻意不加入 `publicCourseGroups`，維持隱藏課程**（使用者要上線測試用）。
- 完整細節、還沒做的事見下方「共用的專案日誌」`專案規劃摘要.md` 第十二輪。
- 這是本次工作階段的最後動作，之後使用者會換到學校電腦繼續。到校後先讀這節 + 下面的
  「目前決策現況」表確認現況，不要假設沒發生過這些變更。

## 怎麼找到 YDWS-CodingBank

它跟本專案是平行資料夾，路徑依電腦而異（不同電腦磁碟機代號不同）：
- 家用電腦：`C:\YOSEP\YDWS-CodingBank`
- 學校電腦：`D:\YOSEP\YDWS-CodingBank`

如果以上路徑都不在，用檔案搜尋找資料夾名稱 `YDWS-CodingBank`。找到後：
1. `git log --oneline -15` 看最近做了什麼
2. `git status` 確認有沒有未同步的變更
3. 讀 `docs/` 底下最新的規劃／交接文件

## 共用的專案日誌

兩專案共用同一份跨專案歷史記錄，**檔案實際放在本專案（BlocklyYdws）裡**：`專案規劃摘要.md`。
不管是在哪一側做的決策或變更（包含只發生在 YDWS-CodingBank 那邊的），都要回來更新這份文件，
否則另一側的對話會讀不到。文件最上方有一張「目前決策現況」表，先看那張表確認現況，
不需要每次重讀整份時間序歷史。

## 兩專案速記

| | BlocklyYdws（這裡） | YDWS-CodingBank |
|---|---|---|
| 角色 | 學生端教學平台（Vite+Blockly），已部署GitHub Pages | 題庫生產管線（raw txt→清理→主表→課程JS匯出），主張題庫不公開 |
| GitHub帳號 | p2766602-beep | tnjbox / tnjboxing |
| 對學生公開 | 是（含隱藏課程的JS，見下方） | 否（CSV/raw等上游資料不上這個repo） |

課程可見度三層，用詞需精確：**公開課程**（選單列出）／**不公開資料**（YDWS-CodingBank的CSV，只留本機）／
**隱藏課程**（JS已上線但選單不列出，需輸入代碼才載入——刻意設計，非資料外洩，但GitHub Pages純靜態託管
無法徹底防止開發者工具查看，只能降低曝光機率）。

詳細規劃見同目錄 `專案規劃摘要.md`、AI人設 prompt 見 `prompts/` 與根目錄的
`BlocklyLab_GPT_System_Instructions_AI_Literacy_V2.md`、`SRC_GPT_Minimal_Knowledge_V3.md`。
