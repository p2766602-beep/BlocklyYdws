# MVP-PB05-4A2｜Blockly-lab 題目顯示與空輸出呈現修正

## 修正內容

1. 題目說明不再顯示 `[object Object]`。
2. 題目說明區塊會移除重複的 `題目：xxx` 與 `題目說明` 內文標題。
3. 顯示文字中的 `輸出空白`、`空白輸出`、`輸出為空白`、`輸出空字串` 會統一顯示為 `不輸出`。
4. 範例輸出為空字串時，輸出欄保持空白，不顯示 `不輸出`。
5. 系統評分的預期輸出與實際輸出為空字串時，畫面保持空白。
6. 程式執行完成但沒有任何輸出時，顯示 `程式執行完成：`。

## 覆蓋位置

```text
D:\YOSEP\blockly-lab\src\main.js
```

## 測試指令

```powershell
cd D:\YOSEP\blockly-lab
npm run dev
```

## 建議測試題

```text
JSB02｜通過門檻
JSL01｜從 1 數到 N
JSA01
JSS01
JSB00
JSA00
CPB00
```
