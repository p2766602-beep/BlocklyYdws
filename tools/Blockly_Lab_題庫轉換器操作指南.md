# Blockly Lab 題庫轉換器操作指南

本文件說明如何使用 `convert_course_zip_v041.py`，將題庫 ZIP 檔轉換成 Blockly Lab 可讀取的課程 JS 檔。

---

## 1. 工具用途

`convert_course_zip_v041.py` 是 Blockly Lab 題庫轉換工具，用來將 ZIP 課程包中的 TXT 題目檔轉換成課程 JS 檔。

轉換後的檔案格式如下：

```js
export const JSB01 = {
  code: 'JSB01',
  title: '基礎練習1',
  type: 'programming',
  mode: 'learning',
  tasks: [...]
};
```

產生的 JS 檔可放入 Blockly Lab：

```text
src/courses/
```

例如：

```text
src/courses/JSB01.js
src/courses/JSW05.js
```

---

## 2. 適用題庫格式

目前工具支援兩種題庫。

---

### 2.1 一般練習題庫

檔名可能像：

```text
A-01-0-Hello world.txt
A-01-1-一起學習吧.txt
A-02-0-數字加總.txt
```

轉換後的題目 ID 會依檔名前段產生：

```text
A-01-0-Hello world.txt → A-01-0
A-02-0-數字加總.txt → A-02-0
```

---

### 2.2 競賽題目包

檔名可能像：

```text
1.txt
2.txt
3.txt
4.txt
5.txt
6.txt
title.txt
```

其中：

```text
title.txt
```

會被自動忽略，不會轉成題目。

競賽題轉換後的題目 ID 會是：

```text
1.txt → P01
2.txt → P02
6.txt → P06
```

---

## 3. 建議專案資料夾結構

建議將工具與題庫放在 Blockly Lab 專案根目錄下：

```text
C:\YOSEP\blockly-lab\
├─ package.json
├─ src\
│  └─ courses\
│     ├─ JSB01.js
│     └─ JSW05.js
├─ tools\
│  └─ convert_course_zip_v041.py
└─ course-zips\
   ├─ 20260301S1.zip
   └─ 20260301W6.zip
```

---

## 4. 安裝與確認 Python

轉換器需要 Python 本體，不是只有 VS Code Python 外掛。

請在 PowerShell 執行：

```powershell
python --version
```

或：

```powershell
py --version
```

若看到類似：

```text
Python 3.12.x
```

代表 Python 可以使用。

若 `python` 指令無法使用，但 `py` 可以使用，後續指令可改用：

```powershell
py -3
```

---

## 5. 放置轉換器

請將 `convert_course_zip_v041.py` 放到：

```text
C:\YOSEP\blockly-lab\tools\convert_course_zip_v041.py
```

---

## 6. 放置 ZIP 題庫

請將 ZIP 題庫放到：

```text
C:\YOSEP\blockly-lab\course-zips\
```

例如：

```text
C:\YOSEP\blockly-lab\course-zips\20260301S1.zip
C:\YOSEP\blockly-lab\course-zips\20260301W6.zip
```

---

## 7. 一般練習題轉換方式

### 7.1 指令格式

```powershell
python -u tools\convert_course_zip_v041.py course-zips\ZIP檔名.zip 課程代碼 "課程名稱" --output src\courses\課程代碼.js
```

---

### 7.2 範例：基礎練習1

```powershell
cd C:\YOSEP\blockly-lab

python -u tools\convert_course_zip_v041.py course-zips\20260301S1.zip JSB01 "基礎練習1" --output src\courses\JSB01.js
```

如果你的電腦使用 `py` 指令：

```powershell
py -3 -u tools\convert_course_zip_v041.py course-zips\20260301S1.zip JSB01 "基礎練習1" --output src\courses\JSB01.js
```

---

### 7.3 成功訊息

成功時會看到類似：

```text
SUCCESS
Output: src\courses\JSB01.js
Course code: JSB01
Course title: 基礎練習1
Course mode: learning
Task count: 14
```

---

## 8. 競賽題目包轉換方式

競賽題目包請加上：

```powershell
--mode contest
```

---

### 8.1 指令格式

```powershell
python -u tools\convert_course_zip_v041.py course-zips\ZIP檔名.zip 課程代碼 "課程名稱" --mode contest --output src\courses\課程代碼.js
```

---

### 8.2 範例：競賽練習 Week5

```powershell
cd C:\YOSEP\blockly-lab

python -u tools\convert_course_zip_v041.py course-zips\20260301W6.zip JSW05 "競賽練習 Week5" --mode contest --output src\courses\JSW05.js
```

如果你的電腦使用 `py` 指令：

```powershell
py -3 -u tools\convert_course_zip_v041.py course-zips\20260301W6.zip JSW05 "競賽練習 Week5" --mode contest --output src\courses\JSW05.js
```

---

### 8.3 成功訊息

成功時會看到類似：

```text
SUCCESS
Output: src\courses\JSW05.js
Course code: JSW05
Course title: 競賽練習 Week5
Course mode: contest
Task count: 6
```

---

## 9. 轉換後檢查檔案

轉換完成後，請確認 JS 檔是否產生。

例如：

```powershell
dir src\courses\JSB01.js
```

或：

```powershell
dir src\courses\JSW05.js
```

也可以用 VS Code 開啟：

```powershell
code src\courses\JSB01.js
```

或用記事本：

```powershell
notepad src\courses\JSB01.js
```

---

## 10. 輸出 JS 檔格式

一般練習題會輸出：

```js
export const JSB01 = {
  "code": "JSB01",
  "title": "基礎練習1",
  "type": "programming",
  "mode": "learning",
  "tasks": [
    ...
  ]
};
```

競賽題會輸出：

```js
export const JSW05 = {
  "code": "JSW05",
  "title": "競賽練習 Week5",
  "type": "programming",
  "mode": "contest",
  "tasks": [
    ...
  ]
};
```

---

## 11. 題目欄位轉換規則

每一個 TXT 題目會轉成一個 task。

基本格式如下：

```js
{
  "id": "A-01-0",
  "title": "Hello world",
  "description": "題目說明文字",
  "examples": [
    {
      "input": "Amy",
      "output": "Hello, Amy",
      "explanation": "範例說明"
    }
  ],
  "testCases": [
    {
      "input": "John",
      "expectedOutput": "Hello, John",
      "score": 10
    }
  ],
  "starterXml": ""
}
```

---

## 12. 輸入說明與輸出說明規則

V0.4.1 已調整為：

若有解析到：

```text
輸入說明
```

才會輸出：

```js
"inputDescription": "..."
```

若有解析到：

```text
輸出說明
```

才會輸出：

```js
"outputDescription": "..."
```

如果沒有解析到，會直接省略，不會輸出：

```js
"inputDescription": ""
```

也不會補成：

```js
"inputDescription": "無"
```

這樣可以避免題目畫面出現沒有內容的標題。

---

## 13. 驗資筆數規則

每題以題目內標示的驗資筆數為準。

例如：

```text
筆數：4
```

代表只轉前 4 筆測資。

即使題目檔後方還有：

```text
案例5
案例6
...
案例10
```

也會視為模板殘留，不輸出到 `testCases`。

---

## 14. examples 轉換規則

範例格式會轉成：

```js
examples: [
  {
    input: '...',
    output: '...',
    explanation: '...'
  }
]
```

HTML 中的：

```html
<br>
```

會轉成換行：

```text
\n
```

---

## 15. testCases 轉換規則

題目中的：

```text
案例1
第一個輸入：...
第二個輸入：...
預期答案：...
分數：10
```

會轉成：

```js
{
  "input": "第一個輸入內容\n第二個輸入內容",
  "expectedOutput": "預期答案內容",
  "score": 10
}
```

空白輸入欄位會自動略過。

---

## 16. 常見問題排除

---

### 16.1 沒有產生 JS 檔

請確認：

```powershell
dir tools\convert_course_zip_v041.py
dir course-zips\你的題庫.zip
```

並確認 Python 可用：

```powershell
python --version
```

或：

```powershell
py --version
```

---

### 16.2 `$LASTEXITCODE` 顯示 9009

這通常代表 Windows 找不到 `python` 指令。

請改試：

```powershell
py --version
```

如果 `py` 可用，轉換指令改成：

```powershell
py -3 -u tools\convert_course_zip_v041.py ...
```

如果 `python` 與 `py` 都不可用，請重新安裝 Python 本體，並勾選：

```text
Add python.exe to PATH
```

---

### 16.3 PowerShell 出現 `>>`

如果 PowerShell 顯示：

```powershell
>>
```

代表進入續行模式。

請按：

```text
Ctrl + C
```

回到正常提示：

```powershell
PS C:\YOSEP\blockly-lab>
```

再重新輸入指令。

---

### 16.4 網頁輸入課程代碼讀不到

若 JS 檔已成功產生，但 Blockly Lab 網頁輸入課程代碼讀不到，通常不是轉換器問題，而是主平台尚未支援自動動態載入課程 JS。

請確認主平台是否已完成：

```text
MVP-J05｜課程 JS 動態載入與課程代碼自動讀取
```

目標是讓平台支援：

```text
src/courses/JSB01.js
```

輸入：

```text
JSB01
```

自動載入課程。

---

## 17. 建議工作流程

完整建議流程如下：

```text
1. 將 ZIP 題庫放入 course-zips
2. 將 convert_course_zip_v041.py 放入 tools
3. 在 PowerShell 進入 blockly-lab 專案根目錄
4. 執行轉換指令
5. 確認 JS 檔產生於 src/courses
6. 啟動 Blockly Lab
7. 在網頁輸入課程代碼
8. 測試題目、範例與測資是否正常顯示
```

---

## 18. 指令速查

### 一般練習題

```powershell
python -u tools\convert_course_zip_v041.py course-zips\20260301S1.zip JSB01 "基礎練習1" --output src\courses\JSB01.js
```

### 競賽題

```powershell
python -u tools\convert_course_zip_v041.py course-zips\20260301W6.zip JSW05 "競賽練習 Week5" --mode contest --output src\courses\JSW05.js
```

### 使用 py 指令

```powershell
py -3 -u tools\convert_course_zip_v041.py course-zips\20260301W6.zip JSW05 "競賽練習 Week5" --mode contest --output src\courses\JSW05.js
```

---

## 19. 版本紀錄

### V0.4

- 支援一般練習題與競賽題
- 新增 `--mode contest`
- 忽略 `title.txt`
- 支援 `1.txt` 轉成 `P01`

### V0.4.1

- `description` 只放題目說明
- 有解析到輸入說明才輸出 `inputDescription`
- 有解析到輸出說明才輸出 `outputDescription`
- 沒有解析到就直接省略欄位
- 不輸出空字串，不自動補「無」
