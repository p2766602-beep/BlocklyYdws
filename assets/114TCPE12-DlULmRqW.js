var e={code:`114TCPE12`,title:`114-臺北市國小（競賽模式）`,type:`programming`,mode:`contest`,description:`臺北市114學年度國小組資訊科技競賽練習題，涵蓋字串處理、不定長度輸入解析與行程長度編碼。`,tasks:[{id:`114TCPE12-1`,title:`崔老師的出缺席紀錄表`,problemTitle:`崔老師的出缺席紀錄表`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`崔老師用二維清單記錄一週的出席狀況：
小明到到缺到到
小美到缺缺到到
說明：
每一列是一位學生
第一個元素是姓名
後面五個元素代表星期一到星期五的出席狀況
【任務】
輸入學生姓名與出席紀錄，顯示該名學生缺席幾天
輸出格式：小明缺席1天`,inputDescription:`輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。`,outputDescription:`輸出「姓名缺席X天」，X為5天中缺席的次數。`,statement:{description:`崔老師用二維清單記錄一週的出席狀況：
小明到到缺到到
小美到缺缺到到
說明：
每一列是一位學生
第一個元素是姓名
後面五個元素代表星期一到星期五的出席狀況
【任務】
輸入學生姓名與出席紀錄，顯示該名學生缺席幾天
輸出格式：小明缺席1天`,input:`輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。`,output:`輸出「姓名缺席X天」，X為5天中缺席的次數。`},examples:[{input:`小明到到缺到到`,output:`小明缺席1天`,explanation:`小明有 1 個缺`},{input:`小美到缺缺到到`,output:`小美缺席2天`,explanation:`小美有 2 個缺`}],testCases:[{input:`小明到到缺到到`,score:10,hidden:!1},{input:`小美到缺缺到到`,score:10,hidden:!1},{input:`阿宏到到到到到`,score:10,hidden:!1},{input:`小安缺缺缺到缺`,score:10,hidden:!1},{input:`小明缺缺缺到到`,score:10,hidden:!1},{input:`大雄缺缺缺缺缺`,score:10,hidden:!1},{input:`靜香到到到到到`,score:10,hidden:!1},{input:`胖虎缺到缺到缺`,score:10,hidden:!1},{input:`小夫到缺到缺到`,score:10,hidden:!1},{input:`王同學到到到到缺`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`姓名長度不固定，需用「總長度-5」反推姓名結尾位置，練習字串切割與計數。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`計數`],algorithm:[`計數`],dataStructure:[`字串`],syntax:[`字元取出`],math:[],context:[`生活情境`,`班級管理`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE12`,courseName:`114-臺北市國小（競賽模式）`},{id:`114TCPE12-2`,title:`校車安全：有沒有超載？`,problemTitle:`校車安全：有沒有超載？`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。
例如：
A
2 3 4 5 6
B
1 1 2 2 3
C
7 1 1 2 2
【規則】
每台校車總人數 > 20：要警告超載
【任務】
計算每一台總人數，輸出「車號+總人數」，如：A車20人
若超過20，額外輸出：B車超載`,inputDescription:`用英文大寫字母輸入三臺車編號，並且輸入每一站上車人數(共五站)`,outputDescription:`A車幾人
B車幾人
C車幾人
(超載要顯示超載)`,statement:{description:`每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。
例如：
A
2 3 4 5 6
B
1 1 2 2 3
C
7 1 1 2 2
【規則】
每台校車總人數 > 20：要警告超載
【任務】
計算每一台總人數，輸出「車號+總人數」，如：A車20人
若超過20，額外輸出：B車超載`,input:`用英文大寫字母輸入三臺車編號，並且輸入每一站上車人數(共五站)`,output:`A車幾人
B車幾人
C車幾人
(超載要顯示超載)`},examples:[{input:`A
5 3 4 4 4
B
4 5 4 3 4
C
3 3 4 3 3`,output:`A車20人
B車20人
C車16人`,explanation:`A車總共 5+3+4+4+4 = 20人 B車總共 4+5+4+3+4 = 20人 C車總共 3+3+4+3+3 = 16人`},{input:`A
5 3 2 4 6
B
6 6 5 5 4
C
4 3 2 3 4`,output:`A車20人
B車超載
C車16人`,explanation:`A車總共 20人 B車總共 26人，大於20，輸出 B車超載 C車總共 16人`}],testCases:[{input:`A
5 3 2 4 6
B
6 6 5 5 4
C
4 3 2 3 4`,score:10,hidden:!1},{input:`A
4 4 4 4 3
B
5 5 4 3 3
C
5 4 4 4 4`,score:10,hidden:!1},{input:`A
3 4 4 4 4
B
4 4 4 4 4
C
5 3 4 4 3`,score:10,hidden:!1},{input:`A
5 5 4 4 4
B
6 5 5 3 3
C
4 4 4 4 5`,score:10,hidden:!1},{input:`A
3 4 3 4 6
B
4 4 4 4 3
C
2 6 6 4 3`,score:10,hidden:!1},{input:`A
0 0 0 0 0
B
1 1 1 1 1
C
2 2 2 2 2`,score:10,hidden:!1},{input:`A
4 4 4 4 4
B
5 5 5 5 5
C
6 6 6 6 6`,score:10,hidden:!1},{input:`X
1 2 3 4 5
Y
5 5 5 5 5
Z
5 5 5 5 1`,score:10,hidden:!1},{input:`P
10 10 1 0 0
Q
0 0 0 0 21
R
10 10 0 0 0`,score:10,hidden:!1},{input:`M
3 3 3 3 3
N
2 2 2 2 2
O
1 1 1 1 1`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`固定3台車，各自加總5站人數並判斷是否超過20人，練習多次say()輸出多行結果。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`迴圈`],subConcepts:[`條件判斷`],algorithm:[`累加`],dataStructure:[`變數`],syntax:[`for迴圈`],math:[],context:[`生活情境`,`交通`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE12`,courseName:`114-臺北市國小（競賽模式）`},{id:`114TCPE12-3`,title:`成績補考機制`,problemTitle:`成績補考機制`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。
【任務規則】
1. 使用者輸入一個數字，代表有N位學生
2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)
3. 請檢查每一個分數，若小於60則改成60，否則保持不變
4. 輸出修正後的分數表`,inputDescription:`學生數與N行成績`,outputDescription:`修正後的成績清單`,statement:{description:`學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。
【任務規則】
1. 使用者輸入一個數字，代表有N位學生
2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)
3. 請檢查每一個分數，若小於60則改成60，否則保持不變
4. 輸出修正後的分數表`,input:`學生數與N行成績`,output:`修正後的成績清單`},examples:[{input:`2
50 80 90
40 55 100`,output:`60 80 90
60 60 100`,explanation:`50 及 40, 55 小於 60，皆修正為 60。`},{input:`1
10 20 30`,output:`60 60 60`,explanation:`皆小於 60，修正為 60。`}],testCases:[{input:`1
10 20 30`,score:10,hidden:!1},{input:`2
100 100
59 60`,score:10,hidden:!1},{input:`3
10 10
80 80
5 95`,score:10,hidden:!1},{input:`1
60 60 60`,score:10,hidden:!1},{input:`2
59 58 57
61 62 63`,score:10,hidden:!1},{input:`1
0 0 0 0 0`,score:10,hidden:!1},{input:`4
99
100
0
60`,score:10,hidden:!1},{input:`1
59 99`,score:10,hidden:!1},{input:`2
80 80
40 40`,score:10,hidden:!1},{input:`3
30
40
50`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`每列科目數不固定但同一測資內一致，讀到輸入結束才能反推每列長度，練習不定長度輸入的處理技巧。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`條件判斷`],algorithm:[`資料重建`],dataStructure:[`清單`],syntax:[`while迴圈`],math:[],context:[`生活情境`,`教育`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE12`,courseName:`114-臺北市國小（競賽模式）`},{id:`114TCPE12-4`,title:`滑動平均值`,problemTitle:`滑動平均值`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`請計算清單中連續K個數字的平均值(Moving Average)。
【任務規則】
1. 第一次輸入：一串數字，以空白分隔
2. 第二次輸入：區間大小 K
3. 請依序計算每K 個相鄰數字的平均值
4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。`,inputDescription:`數字字串與整數 K`,outputDescription:`算出的平均值數列 (數字之間以空白隔開)`,statement:{description:`請計算清單中連續K個數字的平均值(Moving Average)。
【任務規則】
1. 第一次輸入：一串數字，以空白分隔
2. 第二次輸入：區間大小 K
3. 請依序計算每K 個相鄰數字的平均值
4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。`,input:`數字字串與整數 K`,output:`算出的平均值數列 (數字之間以空白隔開)`},examples:[{input:`10 20 30 40 50
2`,output:`15 25 35 45`,explanation:`依序計算每2個相鄰數字的平均值： (10+20)/2=15 (20+30)/2=25 (30+40)/2=35 (40+50)/2=45`},{input:`2 4 6 8
2`,output:`3 5 7`,explanation:`依序計算每2個相鄰數字的平均值。`}],testCases:[{input:`2 4 6 8
2`,score:10,hidden:!1},{input:`10 20 30
3`,score:10,hidden:!1},{input:`5 5 5 5
1`,score:10,hidden:!1},{input:`10 20 30 40 50
2`,score:10,hidden:!1},{input:`1 2 3 4 5 6
3`,score:10,hidden:!1},{input:`10 10 10 10 10
4`,score:10,hidden:!1},{input:`0 10 20 30 40
5`,score:10,hidden:!1},{input:`100 200 300
2`,score:10,hidden:!1},{input:`5 15 25 35
2`,score:10,hidden:!1},{input:`2 2 2 2 2 2 2
7`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`數列長度不固定、最後一個數字才是視窗大小K，練習不定長度輸入配合固定視窗滑動平均。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`滑動視窗`],algorithm:[`滑動平均`],dataStructure:[`清單`],syntax:[`for迴圈`],math:[`平均值`],context:[`數學情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE12`,courseName:`114-臺北市國小（競賽模式）`},{id:`114TCPE12-5`,title:`連續字元分段顯示`,problemTitle:`連續字元分段顯示`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。`,inputDescription:`輸入一串英文字串s。`,outputDescription:`每一組字元與次數以換行輸出。`,statement:{description:`給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。`,input:`輸入一串英文字串s。`,output:`每一組字元與次數以換行輸出。`},examples:[{input:`aaabbcddd`,output:`a3
b2
c1
d3`,explanation:`連續相同的字元分組顯示。`},{input:`aabcccddd`,output:`a2
b1
c3
d3`,explanation:`連續相同的字元分組顯示。`}],testCases:[{input:`aaabbcddd`,score:10,hidden:!1},{input:`aabcccddd`,score:10,hidden:!1},{input:`abc`,score:10,hidden:!1},{input:`aaaaa`,score:10,hidden:!1},{input:`aabbcc`,score:10,hidden:!1},{input:`xxyyzz`,score:10,hidden:!1},{input:`mississippi`,score:10,hidden:!1},{input:`hello`,score:10,hidden:!1},{input:`wwwwwxxxxxyyyyyzzzzz`,score:10,hidden:!1},{input:`z`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`行程長度編碼(RLE)入門版，每組分段各自用say()輸出一行。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`分組計數`],algorithm:[`行程長度編碼`],dataStructure:[`字串`],syntax:[`字元取出`],math:[],context:[`資料壓縮`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE12`,courseName:`114-臺北市國小（競賽模式）`},{id:`114TCPE12-6`,title:`移除指定字元後輸出新字串`,problemTitle:`移除指定字元後輸出新字串`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。`,inputDescription:`第一行輸入字串s。
第二行輸入目標字元 target。`,outputDescription:`輸出移除指定字元後的新字串。`,statement:{description:`給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。`,input:`第一行輸入字串s。
第二行輸入目標字元 target。`,output:`輸出移除指定字元後的新字串。`},examples:[{input:`banana
a`,output:`bnn`,explanation:`移除字串中的 a。`},{input:`roblox
o`,output:`rblx`,explanation:`移除字串中的 o。`}],testCases:[{input:`banana
a`,score:10,hidden:!1},{input:`roblox
o`,score:10,hidden:!1},{input:`apple
p`,score:10,hidden:!1},{input:`hello
l`,score:10,hidden:!1},{input:`mississippi
s`,score:10,hidden:!1},{input:`programming
g`,score:10,hidden:!1},{input:`abc
d`,score:10,hidden:!1},{input:`abcdef
c`,score:10,hidden:!1},{input:`xyzxyz
y`,score:10,hidden:!1},{input:`google
o`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`逐字元篩選，練習字串過濾的基礎寫法。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`條件判斷`],algorithm:[`過濾`],dataStructure:[`字串`],syntax:[`字元取出`],math:[],context:[`生活情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE12`,courseName:`114-臺北市國小（競賽模式）`}],source:{convertedFrom:`114ETaipei`,convertedAt:`2026-08-13T00:39:19.960Z`,note:`競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。`}};export{e as default};