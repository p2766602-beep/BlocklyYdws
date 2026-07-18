# Blockly Lab 授權與引用說明

版本：MVP-J11  
適用專案：Blockly Lab  
維護者：Younger Yang / Younger Dream Workshop  
最後更新：2026-06-20

---

## 1. 文件目的

本文件用於說明 Blockly Lab 專案的授權方式、第三方套件來源、AI 協作開發聲明，以及教師、學生或其他使用者引用本專案時的建議標示方式。

Blockly Lab 是一個用於資訊科技教學、Blockly 積木程式、程式解題與 SmartRingController 硬體互動的教學實驗平台。

---

## 2. 專案內容分類

本專案內容大致分為四類：

1. 平台程式碼。
2. 教材、題目與課程文件。
3. 第三方開源套件。
4. 平台服務與瀏覽器 API。

不同類型的內容，授權方式不同。

---

## 3. 平台程式碼授權

本專案平台程式碼，除另有標示外，採用 MIT License。

主要包含：

- index.html
- src/main.js
- src/style.css
- src/blockly/
- src/smartring/
- tools/
- google-apps-script/
- package.json
- vite 設定檔
- 其他平台運作所需程式碼

MIT License 的核心精神是：

1. 可以使用。
2. 可以複製。
3. 可以修改。
4. 可以散布。
5. 可以再授權。
6. 需要保留原作者版權與授權聲明。
7. 作者不提供擔保。

完整授權條文請見專案根目錄 LICENSE。

---

## 4. 教材、題目與課程文件授權

本專案中的教材、題目、任務說明、課程文件與教學活動設計，與平台程式碼分開授權。

除另有標示外，採用 Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International，也就是 CC BY-NC-SA 4.0。

主要包含：

- docs/ 中的課程文件、教學文件與測試文件。
- src/courses/ 中的題目文字。
- src/courses/ 中的課程任務說明。
- 程式解題題目。
- SmartRingController 教學任務。
- Notion 教學手冊內容。
- 課堂測試文件。
- 學生學習單。
- 教師備課文件。

CC BY-NC-SA 4.0 的核心精神是：

1. 可以分享。
2. 可以改作。
3. 必須標示原作者。
4. 不得用於商業用途。
5. 改作後必須採用相同或相容授權方式分享。

若未來有部分教材、題目或文件需要採用不同授權，應在該檔案或該章節中另外標示。

---

## 5. 程式碼與教材分開授權的原因

Blockly Lab 同時包含平台程式與教學內容。

平台程式碼適合使用較開放的 MIT License，方便其他教師、學生或社群改作、部署與研究。

教材與題目則包含課程設計、教學脈絡與長期累積的教學經驗，因此採用 CC BY-NC-SA 4.0，允許教育用途分享與改作，但要求標示來源，並限制未經同意的商業使用。

---

## 6. 第三方開源套件

Blockly Lab 目前直接使用下列主要第三方開源套件：

| 套件 | 版本 | 用途 | 授權 |
|---|---:|---|---|
| Blockly | 13.0.0 | 視覺化積木程式編輯器 | Apache License 2.0 |
| Vite | 8.0.16 | 前端開發伺服器與建置工具 | MIT License |
| gh-pages | 6.3.0 | GitHub Pages 部署工具 | MIT License |
| ESP Web Tools | 10.x CDN | ESP8266 / ESP32 網頁韌體燒錄工具 | Apache License 2.0 |

第三方套件不屬於 Blockly Lab 原創內容，仍依其原始授權條款使用。

完整清單請見專案根目錄 THIRD_PARTY_LICENSES.md。

---

## 7. 平台服務與瀏覽器 API

本專案可能使用下列平台服務或瀏覽器 API：

| 服務 / API | 用途 | 備註 |
|---|---|---|
| GitHub Pages | 發布靜態網站 | GitHub 提供的網站代管服務 |
| Google Apps Script | 接收成績上傳 | Google 提供的平台服務 |
| Google Sheets | 儲存學生成績 | Google 提供的平台服務 |
| Web Serial API | 連接 SmartRingController | 瀏覽器提供的序列埠 API |
| ESP Web Tools CDN | 載入網頁燒錄按鈕元件 | 由第三方 CDN 載入 ESP Web Tools 前端工具 |

這些服務或 API 不是本專案原始碼的一部分，也不是本專案重新授權的內容。使用者仍需遵守各平台或瀏覽器服務的使用條款。

---

## 8. 韌體檔案授權

本專案提供 SmartRingController 相關 ESP8266 韌體檔案，供教學與硬體測試使用。

目前包含：

- ESP8266 D8 WS2812 + 8 按鈕版。
- ESP8266 D4 LED-only WS2812 版。

除另有標示外，本專案自行開發之韌體原始碼與韌體二進位檔，採用與平台程式碼相同的 MIT License 授權。

使用者燒錄韌體前，應確認硬體版本、腳位接線與韌體版本相符。若燒錄錯誤版本，可能造成硬體功能無法正常運作，但通常可重新燒錄正確韌體修復。

本專案使用 ESP Web Tools 提供瀏覽器線上燒錄流程。ESP Web Tools 為第三方開源工具，仍依其原授權條款使用。

## 9. AI 協作開發聲明

本專案部分程式碼、文件與開發規劃曾使用 OpenAI ChatGPT 輔助產生與整理，最終內容由專案維護者審閱、測試與整合。

OpenAI ChatGPT 是本專案的 AI 輔助開發工具，不是本專案著作權人、維護者、贊助者或官方合作單位。

---

## 10. 非官方關係聲明

Blockly Lab 並非 Google、Blockly、Vite、GitHub 或 OpenAI 的官方專案。

本專案使用 Blockly 作為視覺化積木程式編輯器，使用 Vite 作為前端開發與建置工具，使用 gh-pages 部署至 GitHub Pages，並可能使用 Google Apps Script 與 Google Sheets 作為成績上傳與儲存工具。

這些名稱、商標、服務與工具均屬其各自所有者。本專案未宣稱與上述單位有官方合作、授權代理、贊助或背書關係。

---

## 11. 建議引用格式

若教師、學生或其他教育工作者引用本專案，可參考以下格式。

### 11.1 中文引用格式

Younger Yang / Younger Dream Workshop（2026）。Blockly Lab：Blockly x SmartRingController 教學實驗平台。取自 https://github.com/tnjbox/blockly-lab

若引用線上網站：

Younger Yang / Younger Dream Workshop（2026）。Blockly Lab 線上教學平台。取自 https://tnjbox.github.io/blockly-lab/

### 11.2 英文引用格式

Younger Yang / Younger Dream Workshop. (2026). Blockly Lab: A Blockly x SmartRingController educational platform. Retrieved from https://github.com/tnjbox/blockly-lab

For the online website:

Younger Yang / Younger Dream Workshop. (2026). Blockly Lab online platform. Retrieved from https://tnjbox.github.io/blockly-lab/

---

## 12. 教師改作建議標示

若其他教師根據本專案改作自己的版本，建議標示：

本教材改作自 Younger Yang / Younger Dream Workshop 的 Blockly Lab 專案，原專案網址：https://github.com/tnjbox/blockly-lab

若有修改平台程式碼，建議保留：

Original project: Blockly Lab by Younger Yang / Younger Dream Workshop.  
Modified by: 修改者姓名或單位。

---

## 13. 免責提醒

本文件是專案維護與教學發布用途的授權整理說明，不構成法律意見。

若本專案未來要用於正式商業服務、大規模公開發行、校際競賽平台或政府標案，再請具備相關經驗的法律或智財專業人士確認授權條款。
