var e={code:`115MOCK1111`,title:`115 校內模擬選拔賽（競賽模式）`,type:`programming`,mode:`contest`,description:`校內程式設計模擬選拔賽：共 8 題、比賽時間 90 分鐘，難度由基礎、進階到困難。每題 10 組測資、每組 10 分，每題 100 分，滿分 800 分。`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-11-10T06:35:50.298Z`,problemSetTitle:`115 校內模擬選拔賽（競賽模式）`,version:`original-contest`,note:`原創題目（比照 114 縣市賽題型風格），正本在 YDWS-CodingBank/contests/115MOCK1111/；參考解答已用 Blockly 無頭執行通過全部測資，競賽模式不提供載入。`},tasks:[{id:`115MOCK1111-1`,title:`1. 共享單車租借費`,problemTitle:`共享單車租借費`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`學校附近的共享單車依租借時數計費：
・前 2 小時：每小時 30 元
・第 3～5 小時：每小時 20 元
・超過 5 小時的部分：每小時 10 元
・單日費用最多收 150 元（超過以 150 元計）
・出示學生證可再折抵 20 元，但折抵後最少為 0 元
請依租借時數與是否出示學生證，計算應付金額。

【限制】0 ≤ H ≤ 24`,inputDescription:`第一行輸入租借時數 H（整數）。
第二行輸入 Y 或 N，Y 表示出示學生證，N 表示沒有。`,outputDescription:`輸出應付金額（整數）。`,statement:{description:`學校附近的共享單車依租借時數計費：
・前 2 小時：每小時 30 元
・第 3～5 小時：每小時 20 元
・超過 5 小時的部分：每小時 10 元
・單日費用最多收 150 元（超過以 150 元計）
・出示學生證可再折抵 20 元，但折抵後最少為 0 元
請依租借時數與是否出示學生證，計算應付金額。

【限制】0 ≤ H ≤ 24`,input:`第一行輸入租借時數 H（整數）。
第二行輸入 Y 或 N，Y 表示出示學生證，N 表示沒有。`,output:`輸出應付金額（整數）。`},examples:[{input:`3
N`,output:`80`,explanation:`3 小時：前 2 小時 2×30＝60 元，第 3 小時 20 元，共 80 元。`},{input:`10
Y`,output:`130`,explanation:`10 小時：60＋3×20＋5×10＝170 元，超過上限以 150 元計，出示學生證再折抵 20 元，應付 130 元。`}],testCases:[{input:`3
N`,expectedOutput:`80`,output:`80`,score:10,hidden:!1},{input:`10
Y`,expectedOutput:`130`,output:`130`,score:10,hidden:!1},{input:`0
Y`,expectedOutput:`0`,output:`0`,score:10,hidden:!1},{input:`1
Y`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`2
N`,expectedOutput:`60`,output:`60`,score:10,hidden:!1},{input:`5
N`,expectedOutput:`120`,output:`120`,score:10,hidden:!1},{input:`6
Y`,expectedOutput:`110`,output:`110`,score:10,hidden:!1},{input:`8
N`,expectedOutput:`150`,output:`150`,score:10,hidden:!1},{input:`9
N`,expectedOutput:`150`,output:`150`,score:10,hidden:!1},{input:`24
Y`,expectedOutput:`130`,output:`130`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：基礎；對應 B U1、V4`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`輸入輸出`],subConcepts:[`分段條件判斷`,`上限／下限處理`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-2`,title:`2. 每日步數挑戰`,problemTitle:`每日步數挑戰`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`健康週活動記錄了小安連續 N 天的步數。只要當天步數大於或等於目標 T 步，就算「達標」。
請算出：總共有幾天達標，以及「連續達標」最長維持了幾天。

【限制】1 ≤ N ≤ 30，0 ≤ 步數 ≤ 30000，1 ≤ T ≤ 30000`,inputDescription:`第一行輸入天數 N。
第二行輸入 N 個整數，依序為每天的步數。
第三行輸入目標步數 T。`,outputDescription:`第一行輸出達標天數。
第二行輸出最長連續達標天數（都沒達標時輸出 0）。`,statement:{description:`健康週活動記錄了小安連續 N 天的步數。只要當天步數大於或等於目標 T 步，就算「達標」。
請算出：總共有幾天達標，以及「連續達標」最長維持了幾天。

【限制】1 ≤ N ≤ 30，0 ≤ 步數 ≤ 30000，1 ≤ T ≤ 30000`,input:`第一行輸入天數 N。
第二行輸入 N 個整數，依序為每天的步數。
第三行輸入目標步數 T。`,output:`第一行輸出達標天數。
第二行輸出最長連續達標天數（都沒達標時輸出 0）。`},examples:[{input:`7
8000 12000 10000 3000 10000 10000 11000
10000`,output:`5
3`,explanation:`達標的是第 2、3、5、6、7 天，共 5 天；第 5～7 天連續達標 3 天最長。`},{input:`5
4000 5000 3000 4500 2000
6000`,output:`0
0`,explanation:`沒有一天達到 6000 步，兩項都是 0。`}],testCases:[{input:`7
8000 12000 10000 3000 10000 10000 11000
10000`,expectedOutput:`5
3`,output:`5
3`,score:10,hidden:!1},{input:`5
4000 5000 3000 4500 2000
6000`,expectedOutput:`0
0`,output:`0
0`,score:10,hidden:!1},{input:`1
10000
10000`,expectedOutput:`1
1`,output:`1
1`,score:10,hidden:!1},{input:`6
15000 16000 20000 15000 18000 30000
15000`,expectedOutput:`6
6`,output:`6
6`,score:10,hidden:!1},{input:`10
6000 5999 6000 6000 0 6000 6000 6000 6000 5000
6000`,expectedOutput:`7
4`,output:`7
4`,score:10,hidden:!1},{input:`8
9000 9000 1000 9000 9000 9000 9000 9000
9000`,expectedOutput:`7
5`,output:`7
5`,score:10,hidden:!1},{input:`9
500 700 700 100 700 700 700 100 700
600`,expectedOutput:`6
3`,output:`6
3`,score:10,hidden:!1},{input:`5
30000 29999 30000 30000 30000
30000`,expectedOutput:`4
3`,output:`4
3`,score:10,hidden:!1},{input:`30
13596 4904 8549 7609 12593 12890 4208 7001 5474 8203 12466 4782 5252 5537 6783 7766 8328 12137 4038 7060 6489 13033 11782 9408 4715 9422 10194 13140 5589 6809
8000`,expectedOutput:`14
3`,output:`14
3`,score:10,hidden:!1},{input:`25
8955 10478 7926 15897 18454 10030 717 3185 5746 19291 8746 8284 12480 4877 5928 2489 272 4254 884 9743 10149 10795 288 11077 840
12000`,expectedOutput:`4
2`,output:`4
2`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：基礎；對應 B U2、U3`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`迴圈`],subConcepts:[`計數`,`連續區段長度（狀態變數重設）`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-3`,title:`3. 社團報名學號檢查`,problemTitle:`社團報名學號檢查`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`社團線上報名時，系統要先檢查學號格式。正確的學號共 7 個字元：
・第 1 個字元是大寫英文字母（A～Z）
・第 2～7 個字元都是數字（0～9）
・檢查碼：第 2～6 個字元這 5 個數字的總和，個位數必須等於第 7 個字元
請依下列順序檢查，輸出「第一個」不符合的項目：
1. 長度不是 7 → 輸出 LENGTH
2. 第 1 個字元不是大寫英文字母 → 輸出 LETTER
3. 第 2～7 個字元有不是數字的 → 輸出 DIGIT
4. 檢查碼不正確 → 輸出 CHECK
全部正確則輸出 OK。

【限制】1 ≤ N ≤ 10，每個學號長度 1～12，由英文字母與數字組成，且第一個字元一定是英文字母`,inputDescription:`第一行輸入要檢查的學號數量 N。
接下來 N 行，每行一個學號（不含空白）。`,outputDescription:`依序輸出 N 行檢查結果。`,statement:{description:`社團線上報名時，系統要先檢查學號格式。正確的學號共 7 個字元：
・第 1 個字元是大寫英文字母（A～Z）
・第 2～7 個字元都是數字（0～9）
・檢查碼：第 2～6 個字元這 5 個數字的總和，個位數必須等於第 7 個字元
請依下列順序檢查，輸出「第一個」不符合的項目：
1. 長度不是 7 → 輸出 LENGTH
2. 第 1 個字元不是大寫英文字母 → 輸出 LETTER
3. 第 2～7 個字元有不是數字的 → 輸出 DIGIT
4. 檢查碼不正確 → 輸出 CHECK
全部正確則輸出 OK。

【限制】1 ≤ N ≤ 10，每個學號長度 1～12，由英文字母與數字組成，且第一個字元一定是英文字母`,input:`第一行輸入要檢查的學號數量 N。
接下來 N 行，每行一個學號（不含空白）。`,output:`依序輸出 N 行檢查結果。`},examples:[{input:`5
A123455
B12345
c123455
A12C455
Z000001`,output:`OK
LENGTH
LETTER
DIGIT
CHECK`,explanation:`A123455：1＋2＋3＋4＋5＝15，個位數 5 等於第 7 個字元，OK；B12345 只有 6 個字元；c 是小寫字母；A12C455 的數字區有字母 C；Z000001 的總和 0 不等於 1。`},{input:`3
K908764
M5555550
Q000000`,output:`CHECK
LENGTH
OK`,explanation:`K908764：9＋0＋8＋7＋6＝30，個位數 0 不等於 4；M5555550 有 8 個字元；Q000000 的總和 0 等於第 7 個字元 0，OK。`}],testCases:[{input:`5
A123455
B12345
c123455
A12C455
Z000001`,expectedOutput:`OK
LENGTH
LETTER
DIGIT
CHECK`,output:`OK
LENGTH
LETTER
DIGIT
CHECK`,score:10,hidden:!1},{input:`3
K908764
M5555550
Q000000`,expectedOutput:`CHECK
LENGTH
OK`,output:`CHECK
LENGTH
OK`,score:10,hidden:!1},{input:`1
A000000`,expectedOutput:`OK`,output:`OK`,score:10,hidden:!1},{input:`4
H12345
H1234567
h12345
h1234567`,expectedOutput:`LENGTH
LENGTH
LENGTH
LENGTH`,output:`LENGTH
LENGTH
LENGTH
LENGTH`,score:10,hidden:!1},{input:`4
x99999X
P9999X6
P999996
P999995`,expectedOutput:`LETTER
DIGIT
CHECK
OK`,output:`LETTER
DIGIT
CHECK
OK`,score:10,hidden:!1},{input:`5
W11111A
WA11115
W111115
W11115
b11111c`,expectedOutput:`DIGIT
DIGIT
OK
LENGTH
LETTER`,output:`DIGIT
DIGIT
OK
LENGTH
LETTER`,score:10,hidden:!1},{input:`3
R246800
R246802
R24680`,expectedOutput:`OK
CHECK
LENGTH`,output:`OK
CHECK
LENGTH`,score:10,hidden:!1},{input:`6
E987650
E98765
E9876500
e987650
EE87650
E987659`,expectedOutput:`CHECK
LENGTH
LENGTH
LETTER
DIGIT
CHECK`,output:`CHECK
LENGTH
LENGTH
LETTER
DIGIT
CHECK`,score:10,hidden:!1},{input:`2
Z5050500
Z505050`,expectedOutput:`LENGTH
CHECK`,output:`LENGTH
CHECK`,score:10,hidden:!1},{input:`8
T314159
T314154
T31415O
t314154
T3141
T31415926
Y000000
Y000001`,expectedOutput:`CHECK
OK
DIGIT
LETTER
LENGTH
LENGTH
OK
CHECK`,output:`CHECK
OK
DIGIT
LETTER
LENGTH
LENGTH
OK
CHECK`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：基礎＋；對應 B U4、U8、V1`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`字串長度與取字元`],subConcepts:[`字元分類（用對照字串找位置）`,`多重檢查的優先順序`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-4`,title:`4. 選拔賽排名`,problemTitle:`選拔賽排名`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`程式選拔賽結束，要依下列規則排名：
1. 分數高的排前面
2. 分數相同時，用時（分鐘）少的排前面
3. 分數和用時都相同時，座號小的排前面
請輸出排名前 K 名選手的座號。

【限制】2 ≤ N ≤ 20，1 ≤ 座號 ≤ 40 且不重複，0 ≤ 分數 ≤ 500，1 ≤ 用時 ≤ 90，1 ≤ K ≤ N`,inputDescription:`第一行輸入選手人數 N。
接下來 N 行，每行三個整數：座號、分數、用時。
最後一行輸入 K。`,outputDescription:`依名次順序輸出前 K 名的座號，每行一個。`,statement:{description:`程式選拔賽結束，要依下列規則排名：
1. 分數高的排前面
2. 分數相同時，用時（分鐘）少的排前面
3. 分數和用時都相同時，座號小的排前面
請輸出排名前 K 名選手的座號。

【限制】2 ≤ N ≤ 20，1 ≤ 座號 ≤ 40 且不重複，0 ≤ 分數 ≤ 500，1 ≤ 用時 ≤ 90，1 ≤ K ≤ N`,input:`第一行輸入選手人數 N。
接下來 N 行，每行三個整數：座號、分數、用時。
最後一行輸入 K。`,output:`依名次順序輸出前 K 名的座號，每行一個。`},examples:[{input:`6
3 420 55
7 450 80
12 420 40
5 450 80
9 300 20
1 420 55
4`,output:`5
7
12
1`,explanation:`450 分的是 5、7 號，用時都是 80，座號小的 5 號在前；420 分的人中 12 號用時 40 最少，接著是用時 55 的 1、3 號，依座號排。前 4 名為 5、7、12、1。`},{input:`3
8 100 30
2 100 30
4 100 29
3`,output:`4
2
8`,explanation:`三人同分；4 號用時 29 最少排第一，2、8 號用時相同，座號小的 2 號在前。`}],testCases:[{input:`6
3 420 55
7 450 80
12 420 40
5 450 80
9 300 20
1 420 55
4`,expectedOutput:`5
7
12
1`,output:`5
7
12
1`,score:10,hidden:!1},{input:`3
8 100 30
2 100 30
4 100 29
3`,expectedOutput:`4
2
8`,output:`4
2
8`,score:10,hidden:!1},{input:`4
9 200 30
3 200 30
15 200 30
1 200 30
4`,expectedOutput:`1
3
9
15`,output:`1
3
9
15`,score:10,hidden:!1},{input:`2
40 0 90
39 0 90
1`,expectedOutput:`39`,output:`39`,score:10,hidden:!1},{input:`5
11 500 90
12 500 1
13 499 1
14 500 45
15 0 1
5`,expectedOutput:`12
14
11
13
15`,output:`12
14
11
13
15`,score:10,hidden:!1},{input:`7
20 300 50
2 310 70
18 300 49
6 300 50
33 310 70
4 290 10
25 300 49
6`,expectedOutput:`2
33
18
25
6
20`,output:`2
33
18
25
6
20`,score:10,hidden:!1},{input:`20
21 340 40
1 360 42
15 340 45
23 340 42
27 330 43
16 350 40
8 390 40
38 400 40
12 310 43
14 390 40
34 310 44
32 320 42
9 370 45
31 320 43
26 360 41
13 400 41
33 360 45
2 340 40
6 310 43
37 390 44
10`,expectedOutput:`38
13
8
14
37
9
26
1
33
16`,output:`38
13
8
14
37
9
26
1
33
16`,score:10,hidden:!1},{input:`12
5 400 60
17 500 60
2 400 61
38 450 62
11 500 61
26 400 61
8 400 62
30 400 61
14 450 62
21 500 60
3 500 61
35 450 60
7`,expectedOutput:`17
21
3
11
35
14
38`,output:`17
21
3
11
35
14
38`,score:10,hidden:!1},{input:`3
1 100 10
2 100 20
3 100 15
2`,expectedOutput:`1
3`,output:`1
3`,score:10,hidden:!1},{input:`6
10 50 5
20 60 5
30 70 5
40 80 5
35 90 5
25 100 5
3`,expectedOutput:`25
35
40`,output:`25
35
40`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：進階；對應 B U6、V2`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`清單`],subConcepts:[`排序`,`多條件比較（同分再比第二、第三條件）`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-5`,title:`5. 掃地機器人`,problemTitle:`掃地機器人`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`教室地板是 W 行（x 方向）× H 列（y 方向）的格子，左下角為 (0, 0)，x 往右增加、y 往上增加。
掃地機器人從 (0, 0) 出發，一開始面向北方（N，y 增加的方向）。它依序執行一串指令：
・F：往目前面向的方向前進一格
・L：原地左轉 90 度
・R：原地右轉 90 度
如果前進的那一格超出教室範圍，或是有障礙物（桌椅），機器人就留在原地不動，並記錄「撞到一次」。
請輸出全部指令執行完後機器人的位置、面向，以及總共撞到幾次。

【限制】1 ≤ W, H ≤ 10，0 ≤ K ≤ 10，障礙物不會在 (0, 0) 且不重複，指令長度 1～50`,inputDescription:`第一行輸入兩個整數 W H。
第二行輸入障礙物數量 K。
接下來 K 行，每行兩個整數 x y，表示障礙物位置。
最後一行輸入指令字串（只含 F、L、R）。`,outputDescription:`第一行輸出最後位置 x y（以空白隔開）。
第二行輸出最後面向（N、E、S、W 其中之一）。
第三行輸出撞到的次數。`,statement:{description:`教室地板是 W 行（x 方向）× H 列（y 方向）的格子，左下角為 (0, 0)，x 往右增加、y 往上增加。
掃地機器人從 (0, 0) 出發，一開始面向北方（N，y 增加的方向）。它依序執行一串指令：
・F：往目前面向的方向前進一格
・L：原地左轉 90 度
・R：原地右轉 90 度
如果前進的那一格超出教室範圍，或是有障礙物（桌椅），機器人就留在原地不動，並記錄「撞到一次」。
請輸出全部指令執行完後機器人的位置、面向，以及總共撞到幾次。

【限制】1 ≤ W, H ≤ 10，0 ≤ K ≤ 10，障礙物不會在 (0, 0) 且不重複，指令長度 1～50`,input:`第一行輸入兩個整數 W H。
第二行輸入障礙物數量 K。
接下來 K 行，每行兩個整數 x y，表示障礙物位置。
最後一行輸入指令字串（只含 F、L、R）。`,output:`第一行輸出最後位置 x y（以空白隔開）。
第二行輸出最後面向（N、E、S、W 其中之一）。
第三行輸出撞到的次數。`},examples:[{input:`5 4
2
1 2
3 0
FFRFLFRFFFRFF`,output:`3 1
S
1`,explanation:`先往北走到 (0, 2)，右轉面東，前方 (1, 2) 是障礙物，撞到 1 次；左轉往北到 (0, 3)，右轉往東走到 (3, 3)，再右轉面南走到 (3, 1)。`},{input:`3 3
0
LFFRRFFFFL`,output:`2 0
N
4`,explanation:`左轉面西，往前兩次都會超出教室（撞 2 次）；右轉兩次面東，走到 (2, 0) 後再往前撞牆 2 次；最後左轉面北，共撞 4 次。`}],testCases:[{input:`5 4
2
1 2
3 0
FFRFLFRFFFRFF`,expectedOutput:`3 1
S
1`,output:`3 1
S
1`,score:10,hidden:!1},{input:`3 3
0
LFFRRFFFFL`,expectedOutput:`2 0
N
4`,output:`2 0
N
4`,score:10,hidden:!1},{input:`1 1
0
FRFRFRFL`,expectedOutput:`0 0
S
4`,output:`0 0
S
4`,score:10,hidden:!1},{input:`4 4
0
LLLLRRR`,expectedOutput:`0 0
W
0`,output:`0 0
W
0`,score:10,hidden:!1},{input:`3 3
3
0 1
1 1
2 1
FRFFLFLF`,expectedOutput:`1 0
W
2`,output:`1 0
W
2`,score:10,hidden:!1},{input:`10 10
0
FFFFFFFFFFFFRFFFFFFFFFFF`,expectedOutput:`9 9
E
5`,output:`9 9
E
5`,score:10,hidden:!1},{input:`6 5
4
1 0
2 2
3 1
5 4
RFLFFRFFRFFLFFFLLF`,expectedOutput:`1 1
W
5`,output:`1 1
W
5`,score:10,hidden:!1},{input:`5 5
2
2 2
4 4
FFRFFFLFFRFLFFRRFFFFLF`,expectedOutput:`3 3
E
7`,output:`3 3
E
7`,score:10,hidden:!1},{input:`8 6
5
2 3
5 1
7 5
3 0
1 4
LFLRRRFFFFFRFFRFFFFRFLLLFRFFFFFLRFLFFFRFRFFRFFFFLF`,expectedOutput:`0 4
W
17`,output:`0 4
W
17`,score:10,hidden:!1},{input:`10 3
6
1 1
3 2
4 0
6 1
8 2
9 0
LRRFFFFFFFRFFRLLLFLFFFFLFFFFLFFFFLFFLRRRFFFFLLLFFF`,expectedOutput:`0 0
W
19`,output:`0 0
W
19`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：進階；對應 V5、V6`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`模擬`],subConcepts:[`狀態追蹤（位置＋方向）`,`方向轉換`,`邊界與障礙判斷`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-6`,title:`6. 用電紀錄查詢`,problemTitle:`用電紀錄查詢`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L4`,blocklyFit:`高`,requiresGreenFlag:!0,description:`學校記錄了連續 N 天的用電度數（第 1 天到第 N 天）。節電小組會提出 Q 個查詢，
每個查詢給兩個日子 L 和 R，想知道「第 L 天到第 R 天（含頭尾）」的用電總和。
小組有時會把日子反過來寫：如果 L 比 R 大，一樣是查詢這兩天之間（含頭尾）的總和。
請依序回答每個查詢。

【限制】1 ≤ N ≤ 60，0 ≤ 每天用電度數 ≤ 500，1 ≤ Q ≤ 20，1 ≤ L, R ≤ N`,inputDescription:`第一行輸入天數 N。
第二行輸入 N 個整數，依序為每天的用電度數。
第三行輸入查詢數量 Q。
接下來 Q 行，每行兩個整數 L R。`,outputDescription:`依序輸出 Q 行，每行是一個查詢的用電總和。`,statement:{description:`學校記錄了連續 N 天的用電度數（第 1 天到第 N 天）。節電小組會提出 Q 個查詢，
每個查詢給兩個日子 L 和 R，想知道「第 L 天到第 R 天（含頭尾）」的用電總和。
小組有時會把日子反過來寫：如果 L 比 R 大，一樣是查詢這兩天之間（含頭尾）的總和。
請依序回答每個查詢。

【限制】1 ≤ N ≤ 60，0 ≤ 每天用電度數 ≤ 500，1 ≤ Q ≤ 20，1 ≤ L, R ≤ N`,input:`第一行輸入天數 N。
第二行輸入 N 個整數，依序為每天的用電度數。
第三行輸入查詢數量 Q。
接下來 Q 行，每行兩個整數 L R。`,output:`依序輸出 Q 行，每行是一個查詢的用電總和。`},examples:[{input:`8
5 3 8 2 2 9 1 1
3
2 4
1 8
6 6`,output:`13
31
9`,explanation:`第 2～4 天：3＋8＋2＝13；第 1～8 天：31；第 6～6 天：9。`},{input:`5
120 80 0 45 300
3
4 2
1 5
3 3`,output:`125
545
0`,explanation:`「4 2」反過來寫，等於查詢第 2～4 天：80＋0＋45＝125；第 1～5 天：545；第 3 天：0。`}],testCases:[{input:`8
5 3 8 2 2 9 1 1
3
2 4
1 8
6 6`,expectedOutput:`13
31
9`,output:`13
31
9`,score:10,hidden:!1},{input:`5
120 80 0 45 300
3
4 2
1 5
3 3`,expectedOutput:`125
545
0`,output:`125
545
0`,score:10,hidden:!1},{input:`1
77
2
1 1
1 1`,expectedOutput:`77
77`,output:`77
77`,score:10,hidden:!1},{input:`6
0 0 0 0 0 0
3
1 6
3 5
6 2`,expectedOutput:`0
0
0`,output:`0
0
0`,score:10,hidden:!1},{input:`10
500 500 500 500 500 500 500 500 500 500
4
1 10
10 1
5 5
3 8`,expectedOutput:`5000
5000
500
3000`,output:`5000
5000
500
3000`,score:10,hidden:!1},{input:`7
12 7 0 33 18 5 40
5
1 1
7 7
7 1
2 3
4 6`,expectedOutput:`12
40
115
7
56`,output:`12
40
115
7
56`,score:10,hidden:!1},{input:`60
22 8 463 437 179 12 289 353 315 440 38 319 440 140 489 37 209 478 129 413 152 494 273 443 465 318 251 471 370 15 158 406 209 327 265 391 247 473 484 361 256 404 31 413 64 195 497 138 282 112 411 387 342 121 34 160 203 373 334 184
20
1 54
42 43
32 48
34 29
19 52
41 57
16 57
59 47
13 9
56 22
18 54
39 12
34 21
45 10
11 40
36 35
16 32
59 58
19 3
2 57`,expectedOutput:`15436
435
5161
1485
10305
4050
11889
3394
1552
10268
11246
8866
4352
10873
9265
656
5082
707
4767
15811`,output:`15436
435
5161
1485
10305
4050
11889
3394
1552
10268
11246
8866
4352
10873
9265
656
5082
707
4767
15811`,score:10,hidden:!1},{input:`40
225 151 293 288 201 156 275 139 164 126 214 136 264 199 165 153 162 295 239 237 188 211 284 121 191 284 295 297 121 141 201 129 187 255 199 160 250 199 138 245
15
1 40
40 1
20 21
1 2
39 40
38 19
16 35
27 29
4 5
8 40
11 12
19 21
21 10
32 1
2 19`,expectedOutput:`8178
8178
425
376
383
4189
4190
713
489
6589
350
664
2378
6545
3620`,output:`8178
8178
425
376
383
4189
4190
713
489
6589
350
664
2378
6545
3620`,score:10,hidden:!1},{input:`3
10 20 30
6
1 2
2 1
2 3
3 2
1 3
3 1`,expectedOutput:`30
30
50
50
60
60`,output:`30
30
50
50
60
60`,score:10,hidden:!1},{input:`25
37 37 48 13 19 10 29 19 19 23 42 44 17 49 7 7 47 26 29 41 2 4 27 30 48
12
6 7
20 9
20 19
6 11
5 18
10 16
21 15
5 21
3 18
8 2
25 3
10 11`,expectedOutput:`39
351
70
142
358
189
159
430
419
175
600
65`,output:`39
351
70
142
358
189
159
430
419
175
600
65`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：進階＋；對應 V10`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`前綴和`],subConcepts:[`區間總和查詢`,`索引偏移（第 0 天的哨兵）`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-7`,title:`7. 社團教室借用`,problemTitle:`社團教室借用`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L5`,blocklyFit:`高`,requiresGreenFlag:!0,description:`學校只有一間多功能教室，這學期共有 N 個社團提出借用申請，每個申請都有開始時間與結束時間（整點）。
同一時間教室只能借給一個社團；但前一個社團結束的時間點，下一個社團就可以馬上開始使用
（例如 9～11 點與 11～12 點可以同時核准）。
請問最多可以核准幾個申請？

【限制】1 ≤ N ≤ 20，0 ≤ 開始時間 < 結束時間 ≤ 24`,inputDescription:`第一行輸入申請數量 N。
接下來 N 行，每行兩個整數：開始時間、結束時間。`,outputDescription:`輸出最多可以核准的申請數量。`,statement:{description:`學校只有一間多功能教室，這學期共有 N 個社團提出借用申請，每個申請都有開始時間與結束時間（整點）。
同一時間教室只能借給一個社團；但前一個社團結束的時間點，下一個社團就可以馬上開始使用
（例如 9～11 點與 11～12 點可以同時核准）。
請問最多可以核准幾個申請？

【限制】1 ≤ N ≤ 20，0 ≤ 開始時間 < 結束時間 ≤ 24`,input:`第一行輸入申請數量 N。
接下來 N 行，每行兩個整數：開始時間、結束時間。`,output:`輸出最多可以核准的申請數量。`},examples:[{input:`5
8 10
9 12
10 11
11 14
13 15`,output:`3`,explanation:`可以核准 8～10、10～11、11～14 共 3 個（13～15 會和 11～14 重疊）。`},{input:`4
1 10
2 3
4 5
6 7`,output:`3`,explanation:`1～10 雖然最早開始，但選了它，其他三個都不能核准；改選 2～3、4～5、6～7 可以核准 3 個。`}],testCases:[{input:`5
8 10
9 12
10 11
11 14
13 15`,expectedOutput:`3`,output:`3`,score:10,hidden:!1},{input:`4
1 10
2 3
4 5
6 7`,expectedOutput:`3`,output:`3`,score:10,hidden:!1},{input:`1
0 24`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`6
0 4
4 8
8 12
12 16
16 20
20 24`,expectedOutput:`6`,output:`6`,score:10,hidden:!1},{input:`4
9 12
9 12
9 12
9 12`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`3
1 5
4 7
6 10`,expectedOutput:`2`,output:`2`,score:10,hidden:!1},{input:`11
1 4
4 7
7 10
10 13
3 5
3 5
3 5
6 8
9 11
9 11
9 11`,expectedOutput:`4`,output:`4`,score:10,hidden:!1},{input:`8
0 24
10 11
2 3
5 6
3 4
1 2
4 5
0 1`,expectedOutput:`7`,output:`7`,score:10,hidden:!1},{input:`15
14 22
0 9
13 15
1 3
9 11
3 5
17 19
5 7
10 16
7 9
21 24
8 12
15 17
11 13
19 21`,expectedOutput:`11`,output:`11`,score:10,hidden:!1},{input:`20
0 6
6 12
12 18
18 24
1 2
2 3
3 4
4 5
7 8
8 9
9 10
10 11
13 14
14 15
15 16
16 17
19 20
20 21
21 22
22 23`,expectedOutput:`16`,output:`16`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：困難；對應 V8`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`貪心策略（依結束時間排序）`],subConcepts:[`成對資料排序`,`反例思考`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115MOCK1111-8`,title:`8. 班級聯絡網`,problemTitle:`班級聯絡網`,courseCode:`115MOCK1111`,courseName:`115 校內模擬選拔賽（競賽模式）`,role:`contest`,difficulty:`L5`,blocklyFit:`高`,requiresGreenFlag:!0,description:`班上有 N 位同學，座號 1～N。老師收集了 M 組「互相有聯絡方式」的同學配對。
消息可以沿著聯絡方式一個傳一個；只要兩位同學之間能透過一串聯絡關係連起來，就算同一個「聯絡群組」。
沒有任何聯絡方式的同學，自己就是一個群組。
請算出全班共分成幾個聯絡群組，以及人數最多的群組有幾人。

【限制】1 ≤ N ≤ 30，0 ≤ M ≤ 50，1 ≤ a, b ≤ N，a ≠ b（同一組配對可能重複出現）`,inputDescription:`第一行輸入兩個整數 N M。
接下來 M 行，每行兩個整數 a b，表示 a 號與 b 號互相有聯絡方式。`,outputDescription:`第一行輸出群組數量。
第二行輸出最大群組的人數。`,statement:{description:`班上有 N 位同學，座號 1～N。老師收集了 M 組「互相有聯絡方式」的同學配對。
消息可以沿著聯絡方式一個傳一個；只要兩位同學之間能透過一串聯絡關係連起來，就算同一個「聯絡群組」。
沒有任何聯絡方式的同學，自己就是一個群組。
請算出全班共分成幾個聯絡群組，以及人數最多的群組有幾人。

【限制】1 ≤ N ≤ 30，0 ≤ M ≤ 50，1 ≤ a, b ≤ N，a ≠ b（同一組配對可能重複出現）`,input:`第一行輸入兩個整數 N M。
接下來 M 行，每行兩個整數 a b，表示 a 號與 b 號互相有聯絡方式。`,output:`第一行輸出群組數量。
第二行輸出最大群組的人數。`},examples:[{input:`8 5
1 2
2 5
3 4
6 7
5 8`,output:`3
4`,explanation:`1、2、5、8 號連成一組（4 人），3、4 號一組，6、7 號一組，共 3 組，最大群組 4 人。`},{input:`4 0`,output:`4
1`,explanation:`沒有任何聯絡方式，4 個人各自一組，最大群組 1 人。`}],testCases:[{input:`8 5
1 2
2 5
3 4
6 7
5 8`,expectedOutput:`3
4`,output:`3
4`,score:10,hidden:!1},{input:`4 0`,expectedOutput:`4
1`,output:`4
1`,score:10,hidden:!1},{input:`1 0`,expectedOutput:`1
1`,output:`1
1`,score:10,hidden:!1},{input:`5 4
1 2
2 3
3 4
4 5`,expectedOutput:`1
5`,output:`1
5`,score:10,hidden:!1},{input:`10 9
9 10
8 9
7 8
6 7
5 6
4 5
3 4
2 3
1 2`,expectedOutput:`1
10`,output:`1
10`,score:10,hidden:!1},{input:`9 7
1 9
9 5
5 1
2 8
8 2
2 8
3 6`,expectedOutput:`5
3`,output:`5
3`,score:10,hidden:!1},{input:`12 11
7 1
7 2
7 3
7 4
7 5
7 6
12 11
11 10
10 9
9 8
8 12`,expectedOutput:`2
7`,output:`2
7`,score:10,hidden:!1},{input:`6 3
6 5
4 3
2 1`,expectedOutput:`3
2`,output:`3
2`,score:10,hidden:!1},{input:`30 50
7 11
15 26
7 14
8 2
16 19
24 1
21 19
15 21
20 2
8 30
25 19
1 18
20 12
30 7
27 20
20 4
3 15
25 17
27 29
9 29
7 6
2 3
9 11
23 15
17 5
15 24
8 12
14 20
20 11
23 4
23 13
3 29
5 25
24 3
23 30
9 12
23 7
4 20
11 8
24 4
20 25
26 17
21 8
10 24
11 23
27 25
3 6
17 23
29 7
26 8`,expectedOutput:`3
28`,output:`3
28`,score:10,hidden:!1},{input:`30 18
12 18
21 10
22 3
17 12
16 13
16 21
15 25
3 23
8 21
29 17
6 24
7 18
4 8
2 27
16 14
19 6
27 17
12 9`,expectedOutput:`12
8`,output:`12
8`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`難度：困難；對應 V7（A13、A14）`,exportDecision:`原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10`},tags:{mainConcepts:[`圖（連線列表）`],subConcepts:[`走訪（BFS／DFS 或反覆擴散標記）`,`連通群組計數`],algorithm:[],dataStructure:[],syntax:[],math:[],context:[`校園情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};