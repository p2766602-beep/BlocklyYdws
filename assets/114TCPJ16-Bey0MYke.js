var e={code:`114TCPJ16`,title:`114-雲林縣國中（競賽模式）`,type:`programming`,mode:`contest`,description:`114-雲林縣國中114學年度科技教育創意實作競賽題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-18T10:13:03.450Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-雲林縣國中`,version:`manual-transcription-verified`,convertedFrom:`114JYunlin`,convertedAt:`2026-08-18T10:13:03.451Z`,note:`競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。2026-08修正版：取代原本誤植為嘉義縣重複內容的舊版。`},tasks:[{id:`114TCPJ16-1`,title:`1-秒數轉換`,problemTitle:`1-秒數轉換`,courseCode:`114TCPJ16`,courseName:`114-雲林縣國中（競賽模式）`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`體育課跑步計時器會記錄「總秒數」，但老師希望顯示成「幾分幾秒」的格式。
請輸入一個整數，代表「總秒數」。
再將其轉換為：
• X 分鐘數（整數）
• Y 剩餘秒數
【輸入格式】
一個整數代表總秒數。
【輸出格式】
輸出格式：X 分 Y 秒。(請注意格式中含空格，例如「2 分 5 秒」)`,inputDescription:``,outputDescription:``,statement:{description:`體育課跑步計時器會記錄「總秒數」，但老師希望顯示成「幾分幾秒」的格式。
請輸入一個整數，代表「總秒數」。
再將其轉換為：
• X 分鐘數（整數）
• Y 剩餘秒數
【輸入格式】
一個整數代表總秒數。
【輸出格式】
輸出格式：X 分 Y 秒。(請注意格式中含空格，例如「2 分 5 秒」)`,input:``,output:``},examples:[{input:`125`,output:`2 分 5 秒`,explanation:`125 秒 = 2 分 5 秒。所以輸出 2 分 5 秒。`}],starterXml:``,testCases:[{input:`125`,score:10},{input:`360`,score:10},{input:`59`,score:10},{input:`60`,score:10},{input:`0`,score:10},{input:`3599`,score:10},{input:`3600`,score:10},{input:`7325`,score:10},{input:`1`,score:10},{input:`10000`,score:10}]},{id:`114TCPJ16-2`,title:`2-分段費率計算`,problemTitle:`2-分段費率計算`,courseCode:`114TCPJ16`,courseName:`114-雲林縣國中（競賽模式）`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`某城市推出新的「用電費率計算器」。
電費會依照不同使用量有不同費率：
• 0–100 度：每度 1.68 元
• 101–300 度：超過 100 度的部分，每度 2.45 元
• 301 度以上：超過 300 度的部分，每度 3.70 元
例如：
用電 350 度 →
• 前 100 度：1.68 × 100
• 接著 200 度（101–300）：2.45 × 200
• 最後 50 度（超過 300）：3.70 × 50
請輸一個整數，代表「本月用電度數」，輸出本月總電費（四捨五入至整數）。
若輸入小於 0，輸出 "ERROR"。
【輸入格式】
一個整數代表本月用電度數。
【輸出格式】
一個整數代表總電費，或字串 ERROR。`,inputDescription:``,outputDescription:``,statement:{description:`某城市推出新的「用電費率計算器」。
電費會依照不同使用量有不同費率：
• 0–100 度：每度 1.68 元
• 101–300 度：超過 100 度的部分，每度 2.45 元
• 301 度以上：超過 300 度的部分，每度 3.70 元
例如：
用電 350 度 →
• 前 100 度：1.68 × 100
• 接著 200 度（101–300）：2.45 × 200
• 最後 50 度（超過 300）：3.70 × 50
請輸一個整數，代表「本月用電度數」，輸出本月總電費（四捨五入至整數）。
若輸入小於 0，輸出 "ERROR"。
【輸入格式】
一個整數代表本月用電度數。
【輸出格式】
一個整數代表總電費，或字串 ERROR。`,input:``,output:``},examples:[{input:`250`,output:`536`,explanation:`因使用 250 度，故前 100 度→1.68×100=168，接著 150 度→2.45×150=367.5，總計 535.5。所以輸出 536。`}],starterXml:``,testCases:[{input:`250`,score:10},{input:`50`,score:10},{input:`350`,score:10},{input:`100`,score:10},{input:`300`,score:10},{input:`0`,score:10},{input:`-1`,score:10},{input:`-50`,score:10},{input:`400`,score:10},{input:`101`,score:10}]},{id:`114TCPJ16-3`,title:`3-BMI 健康判定`,problemTitle:`3-BMI 健康判定`,courseCode:`114TCPJ16`,courseName:`114-雲林縣國中（競賽模式）`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`利用程式計算 BMI，並根據 BMI 判斷健康狀態。
BMI 的計算方式為：
BMI = 體重(公斤) ÷ (身高(公尺))²
健康狀態判定如下：
• BMI &lt; 18.5 → 輸出「過輕」
• 18.5 ≤ BMI &lt; 24 → 輸出「正常」
• 24 ≤ BMI &lt; 27 → 輸出「過重」
• BMI ≥ 27 → 輸出「肥胖」
請讀入兩個數字：
第一個為體重（公斤），第二個為身高（公尺）。
輸出對應的健康狀態。
若輸入的體重或身高 ≤ 0，輸出 "ERROR"。
※ 小數點運算後 可直接用計算結果判斷，不必四捨五入。
【輸入格式】
第一行：體重(公斤)
第二行：身高(公尺)
【輸出格式】
健康狀態，或 ERROR。`,inputDescription:``,outputDescription:``,statement:{description:`利用程式計算 BMI，並根據 BMI 判斷健康狀態。
BMI 的計算方式為：
BMI = 體重(公斤) ÷ (身高(公尺))²
健康狀態判定如下：
• BMI &lt; 18.5 → 輸出「過輕」
• 18.5 ≤ BMI &lt; 24 → 輸出「正常」
• 24 ≤ BMI &lt; 27 → 輸出「過重」
• BMI ≥ 27 → 輸出「肥胖」
請讀入兩個數字：
第一個為體重（公斤），第二個為身高（公尺）。
輸出對應的健康狀態。
若輸入的體重或身高 ≤ 0，輸出 "ERROR"。
※ 小數點運算後 可直接用計算結果判斷，不必四捨五入。
【輸入格式】
第一行：體重(公斤)
第二行：身高(公尺)
【輸出格式】
健康狀態，或 ERROR。`,input:``,output:``},examples:[{input:`58
1.50`,output:`過重`,explanation:`BMI = 58 / (1.5 * 1.5) = 25.77...
24 ≤ 25.77... &lt; 27，為「過重」`}],starterXml:``,testCases:[{input:`58
1.50`,score:10},{input:`68
1.70`,score:10},{input:`-5
1.5`,score:10},{input:`50
-1.5`,score:10},{input:`0
1.5`,score:10},{input:`50
0`,score:10},{input:`100
1.6`,score:10},{input:`45
1.6`,score:10},{input:`61.44
1.6`,score:10},{input:`69.12
1.6`,score:10}]},{id:`114TCPJ16-4`,title:`4-成績統計`,problemTitle:`4-成績統計`,courseCode:`114TCPJ16`,courseName:`114-雲林縣國中（競賽模式）`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`老師要統計班上這次月考的成績情形。
請先輸入學生人數，接著輸入 N 個整數（每位學生的分數）。
你的程式需要：
1. 計算 平均分數（四捨五入到整數位）
2. 計算 低於平均分的學生數
輸出格式為：
平均分數和低於平均的人數 (中間以半形空白隔開)。
若 N ≤ 0，或資料中出現負分，輸出 "ERROR"。
【輸入格式】
第一行輸入學生人數 N。
接下來依序輸入每一位學生的分數。
【輸出格式】
輸出平均分數及低於平均的人數，或 ERROR。`,inputDescription:``,outputDescription:``,statement:{description:`老師要統計班上這次月考的成績情形。
請先輸入學生人數，接著輸入 N 個整數（每位學生的分數）。
你的程式需要：
1. 計算 平均分數（四捨五入到整數位）
2. 計算 低於平均分的學生數
輸出格式為：
平均分數和低於平均的人數 (中間以半形空白隔開)。
若 N ≤ 0，或資料中出現負分，輸出 "ERROR"。
【輸入格式】
第一行輸入學生人數 N。
接下來依序輸入每一位學生的分數。
【輸出格式】
輸出平均分數及低於平均的人數，或 ERROR。`,input:``,output:``},examples:[{input:`5
80
75
90
60
100`,output:`81 3`,explanation:`平均：405 ÷ 5 = 81
低於 81 的有 80、75、60 共 3 人。所以輸出 81 3。`}],starterXml:``,testCases:[{input:`5
80 75 90 60 100`,score:10},{input:`4
50 40 50 41`,score:10},{input:`0`,score:10},{input:`-1`,score:10},{input:`3
100 -5 50`,score:10},{input:`3
80 80 80`,score:10},{input:`4
90 90 90 92`,score:10},{input:`5
0 0 0 0 0`,score:10},{input:`1
100`,score:10},{input:`5
10 20 30 40 50`,score:10}]},{id:`114TCPJ16-5`,title:`5-手機電量充電模擬`,problemTitle:`5-手機電量充電模擬`,courseCode:`114TCPJ16`,courseName:`114-雲林縣國中（競賽模式）`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`小華的手機目前電量為 B%。
他將手機接上充電器，充電速度如下：
• 每分鐘增加 2% 電量
• 最高只能充到 100%
請輸入兩個整數：
1. B：目前電量（0~100）
2. T：充電時間（分鐘，0~300）
經過 T 分鐘後，輸出最終電量，格式為：X%
如果輸入的電量(0~100)或時間(0~300)不在範圍內（例如：負數、超過上限），輸出 "ERROR"。
【輸入格式】
第一行：目前電量 B
第二行：充電時間 T
【輸出格式】
最終電量 X% 或 ERROR。`,inputDescription:``,outputDescription:``,statement:{description:`小華的手機目前電量為 B%。
他將手機接上充電器，充電速度如下：
• 每分鐘增加 2% 電量
• 最高只能充到 100%
請輸入兩個整數：
1. B：目前電量（0~100）
2. T：充電時間（分鐘，0~300）
經過 T 分鐘後，輸出最終電量，格式為：X%
如果輸入的電量(0~100)或時間(0~300)不在範圍內（例如：負數、超過上限），輸出 "ERROR"。
【輸入格式】
第一行：目前電量 B
第二行：充電時間 T
【輸出格式】
最終電量 X% 或 ERROR。`,input:``,output:``},examples:[{input:`50
10`,output:`70%`,explanation:`充電 10 分鐘 → 增加 20%，變成 70%。`}],starterXml:``,testCases:[{input:`50
10`,score:10},{input:`90
20`,score:10},{input:`-1
10`,score:10},{input:`101
10`,score:10},{input:`50
-1`,score:10},{input:`50
301`,score:10},{input:`0
0`,score:10},{input:`0
50`,score:10},{input:`100
0`,score:10},{input:`10
10`,score:10}]}]};export{e as default};