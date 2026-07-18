# Blockly Lab｜Google Sheet 成績上傳設定

## 1. 建立 Google Sheet

建立一份新的 Google Sheet，例如：

```text
Blockly Lab 成績紀錄
```

## 2. 開啟 Apps Script

在 Google Sheet 中選擇：

```text
擴充功能 → Apps Script
```

將 `google-apps-script/Code.gs` 的內容貼到 Apps Script 的 `Code.gs`。

## 3. 建立表頭

在 Apps Script 編輯器中，選擇並執行：

```javascript
setupSheet
```

第一次執行會要求授權，請依照畫面完成授權。

## 4. 部署 Web App

選擇：

```text
部署 → 新增部署作業 → 類型選「網頁應用程式」
```

建議設定：

```text
執行身分：我
誰可以存取：知道連結的任何人
```

部署完成後，複製 Web App URL。

## 5. 貼回 Blockly Lab

打開：

```text
src/main.js
```

找到：

```javascript
const SCORE_UPLOAD_URL = '';
```

將 Apps Script Web App URL 貼入：

```javascript
const SCORE_UPLOAD_URL = '你的 Web App URL';
```

## 6. 測試

1. 載入 `CPB00` 或任一程式解題題庫。
2. 填寫班級、座號、姓名。
3. 完成「系統評分」。
4. 按「上傳成績」。
5. 回到 Google Sheet 檢查是否新增一筆成績。

## 學生資料欄位

前端會檢查班級、座號、姓名三個欄位；資料不完整時，不會啟用上傳成績。

學生資料會暫存在目前瀏覽器的 localStorage，方便同一位學生連續完成多題時不用重複輸入。學生可按「清除學生資料」清空本機暫存資料。

上傳資料會額外產生「學生識別」欄位，格式為：

```text
班級-座號-姓名
```

## 注意

前端使用 `no-cors` 方式送出資料，因此瀏覽器端無法讀取 Apps Script 回傳內容。畫面顯示「已送出成績上傳請求」代表請求已送出，是否寫入成功請以 Google Sheet 內容為準。
