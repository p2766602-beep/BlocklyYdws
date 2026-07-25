var e={code:`M2-03-SimBasics`,title:`模擬與狀態：基礎`,type:`programming`,mode:`learning`,tier:`t2`,tasks:[{id:`JSSIM01-D01`,title:`分數累加模擬`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數，代表每一回合得到的分數。請計算最後總分。本題用來示範每回合事件如何更新分數狀態。
輸入格式：
第一行：一個整數 N。
第二行：N 個整數，以空白分隔。
輸出格式：
輸出最後總分。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`輸出最後總分。`,examples:[{input:`3
10 20 30`,output:`60`,explanation:`三回合總分為 60。`},{input:`4
5 0 5 10`,output:`20`,explanation:`總分為 20。`}],testCases:[{input:`3
10 20 30`,expectedOutput:`60`,output:`60`,score:20},{input:`4
5 0 5 10`,expectedOutput:`20`,output:`20`,score:20},{input:`1
100`,expectedOutput:`100`,output:`100`,score:20},{input:`5
1 2 3 4 5`,expectedOutput:`15`,output:`15`,score:20},{input:`6
10 10 0 20 0 5`,expectedOutput:`45`,output:`45`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:``},{id:`JSSIM01-D02`,title:`血量變化模擬`,description:`第一行輸入初始血量 H，第二行輸入一個整數 N，第三行輸入 N 個整數，代表每一回合血量變化。正數代表恢復，負數代表受傷。請輸出最後血量。
輸入格式：
第一行：一個整數 H，代表初始血量。
第二行：一個整數 N。
第三行：N 個整數，以空白分隔。
輸出格式：
輸出最後血量。`,inputDescription:`第一行：一個整數 H，代表初始血量。

第二行：一個整數 N。

第三行：N 個整數，以空白分隔。`,outputDescription:`輸出最後血量。`,examples:[{input:`100
3
-10 5 -20`,output:`75`,explanation:`100-10+5-20=75。`},{input:`50
2
10 -5`,output:`55`,explanation:`50+10-5=55。`}],testCases:[{input:`100
3
-10 5 -20`,expectedOutput:`75`,output:`75`,score:20},{input:`50
2
10 -5`,expectedOutput:`55`,output:`55`,score:20},{input:`30
1
-30`,expectedOutput:`0`,output:`0`,score:20},{input:`80
4
-10 -10 20 5`,expectedOutput:`85`,output:`85`,score:20},{input:`10
3
5 5 5`,expectedOutput:`25`,output:`25`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:``},{id:`JSSIM01-D03`,title:`根據事件改變狀態`,description:`輸入一串事件字元。字元 G 代表得到 10 分，字元 B 代表扣 5 分。初始分數為 0，請計算所有事件結束後的分數。本題用來示範不同事件對狀態造成不同影響。
輸入格式：
第一行：一個只包含 G 與 B 的字串 S。
輸出格式：
輸出最後分數。`,inputDescription:`第一行：一個只包含 G 與 B 的字串 S。`,outputDescription:`輸出最後分數。`,examples:[{input:`GGB`,output:`15`,explanation:`10+10-5=15。`},{input:`BBB`,output:`-15`,explanation:`三次扣分共 -15。`}],testCases:[{input:`GGB`,expectedOutput:`15`,output:`15`,score:20},{input:`BBB`,expectedOutput:`-15`,output:`-15`,score:20},{input:`GGGG`,expectedOutput:`40`,output:`40`,score:20},{input:`BGBG`,expectedOutput:`10`,output:`10`,score:20},{input:`GBGBG`,expectedOutput:`25`,output:`25`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`JSSIM01-P01`,title:`簡單遊戲關卡累計`,description:`遊戲共有 N 個關卡，每關可得到不同分數。第一行輸入 N，第二行輸入 N 個分數。若最後總分大於或等於 100，輸出 Clear；否則輸出 Retry。
輸入格式：
第一行：一個整數 N。
第二行：N 個整數，以空白分隔。
輸出格式：
若總分大於或等於 100，輸出 Clear；否則輸出 Retry。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`若總分大於或等於 100，輸出 Clear；否則輸出 Retry。`,examples:[{input:`3
40 30 50`,output:`Clear`,explanation:`總分 120，過關。`},{input:`2
30 40`,output:`Retry`,explanation:`總分 70，未過關。`}],testCases:[{input:`3
40 30 50`,expectedOutput:`Clear`,output:`Clear`,score:20},{input:`2
30 40`,expectedOutput:`Retry`,output:`Retry`,score:20},{input:`4
25 25 25 25`,expectedOutput:`Clear`,output:`Clear`,score:20},{input:`1
99`,expectedOutput:`Retry`,output:`Retry`,score:20},{input:`5
10 20 30 40 0`,expectedOutput:`Clear`,output:`Clear`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`JSSIM01-P02`,title:`多條件狀態判斷`,description:`輸入玩家的血量 H 與分數 S。若 H 大於 0 且 S 大於或等於 100，輸出 Win；若 H 大於 0 但 S 未達 100，輸出 Keep；若 H 小於或等於 0，輸出 Lose。本題用來練習狀態值與條件分支結合。
輸入格式：
第一行：兩個整數 H 與 S，以空白分隔。
輸出格式：
依狀態輸出 Win、Keep 或 Lose。`,inputDescription:`第一行：兩個整數 H 與 S，以空白分隔。`,outputDescription:`依狀態輸出 Win、Keep 或 Lose。`,examples:[{input:`10 120`,output:`Win`,explanation:`血量仍大於 0，且分數達 100。`},{input:`10 80`,output:`Keep`,explanation:`血量仍大於 0，但分數未達 100。`}],testCases:[{input:`10 120`,expectedOutput:`Win`,output:`Win`,score:20},{input:`10 80`,expectedOutput:`Keep`,output:`Keep`,score:20},{input:`0 200`,expectedOutput:`Lose`,output:`Lose`,score:20},{input:`-5 150`,expectedOutput:`Lose`,output:`Lose`,score:20},{input:`1 100`,expectedOutput:`Win`,output:`Win`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`SIM01-001`,title:`分數累積`,description:`一場遊戲中，玩家每回合會得到一些分數。給定 N 回合的得分，請計算最後總分。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，代表每回合得分。`,outputDescription:`輸出一個整數，代表最後總分。`,examples:[{input:`5 10 20 5 30 15`,output:`80`,explanation:`總分為 10+20+5+30+15=80。`}],testCases:[{input:`5 10 20 5 30 15`,expectedOutput:`80`,output:`80`,score:0},{input:`3 0 0 0`,expectedOutput:`0`,output:`0`,score:0},{input:`4 100 -20 30 -10`,expectedOutput:`100`,output:`100`,score:0},{input:`1 50`,expectedOutput:`50`,output:`50`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`SIM01-002`,title:`血量變化`,description:`角色初始血量為 H。接著有 N 次事件，每次事件可能增加或減少血量。請計算最後血量。`,inputDescription:`第一個整數為 H，第二個整數為 N，接著輸入 N 個整數，代表每次血量變化量。`,outputDescription:`輸出一個整數，代表最後血量。`,examples:[{input:`100 4 -20 10 -30 5`,output:`65`,explanation:`100-20+10-30+5=65。`}],testCases:[{input:`100 4 -20 10 -30 5`,expectedOutput:`65`,output:`65`,score:0},{input:`50 3 10 10 -5`,expectedOutput:`65`,output:`65`,score:0},{input:`30 2 -10 -20`,expectedOutput:`0`,output:`0`,score:0},{input:`80 1 15`,expectedOutput:`95`,output:`95`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`SIM01-004`,title:`左右移動位置`,description:`角色一開始在位置 0。接著有一串移動指令，L 代表向左移動 1 格，R 代表向右移動 1 格。請計算最後位置。`,inputDescription:`輸入一個只包含 L 與 R 的字串 S。`,outputDescription:`輸出一個整數，代表最後位置。`,examples:[{input:`RLRRLLR`,output:`1`,explanation:`R 為 +1，L 為 -1，最後位置為 1。`}],testCases:[{input:`RLRRLLR`,expectedOutput:`1`,output:`1`,score:0},{input:`RRRR`,expectedOutput:`4`,output:`4`,score:0},{input:`LLLL`,expectedOutput:`-4`,output:`-4`,score:0},{input:`LRLR`,expectedOutput:`0`,output:`0`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`SIM01-005`,title:`開關切換`,description:`一盞燈一開始是關閉狀態。給定 N 次按下開關，每按一次，燈的狀態就會切換。請輸出最後燈是開或關。`,inputDescription:`輸入一個整數 N，代表按下開關的次數。`,outputDescription:`若最後是開啟，輸出 ON；若最後是關閉，輸出 OFF。`,examples:[{input:`3`,output:`ON`,explanation:`關→開→關→開，最後是 ON。`}],testCases:[{input:`3`,expectedOutput:`ON`,output:`ON`,score:0},{input:`0`,expectedOutput:`OFF`,output:`OFF`,score:0},{input:`2`,expectedOutput:`OFF`,output:`OFF`,score:0},{input:`10`,expectedOutput:`OFF`,output:`OFF`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`SIM01-003`,title:`血量不可低於0`,description:`角色初始血量為 H。每次事件會增加或減少血量，但血量低於 0 時要改為 0。請計算最後血量。`,inputDescription:`第一個整數為 H，第二個整數為 N，接著輸入 N 個整數，代表每次血量變化量。`,outputDescription:`輸出一個整數，代表最後血量。`,examples:[{input:`30 3 -20 -20 15`,output:`15`,explanation:`30-20=10，10-20 低於 0 所以變 0，0+15=15。`}],testCases:[{input:`30 3 -20 -20 15`,expectedOutput:`15`,output:`15`,score:0},{input:`100 2 -50 -60`,expectedOutput:`0`,output:`0`,score:0},{input:`10 3 -5 -5 -5`,expectedOutput:`0`,output:`0`,score:0},{input:`20 4 10 -5 -40 3`,expectedOutput:`3`,output:`3`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`SIM01-006`,title:`收集金幣與陷阱`,description:`角色在地圖上依序遇到事件。C 代表收集 1 枚金幣，T 代表遇到陷阱失去 1 枚金幣，但金幣數量不可低於 0。請計算最後金幣數量。`,inputDescription:`輸入一個只包含 C 與 T 的字串 S。`,outputDescription:`輸出一個整數，代表最後金幣數量。`,examples:[{input:`CCTTCT`,output:`0`,explanation:`金幣變化為 0→1→2→1→0→1→0。`}],testCases:[{input:`CCTTCT`,expectedOutput:`0`,output:`0`,score:0},{input:`CCCC`,expectedOutput:`4`,output:`4`,score:0},{input:`TTTT`,expectedOutput:`0`,output:`0`,score:0},{input:`CTCCTT`,expectedOutput:`0`,output:`0`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`SIM01-007`,title:`最高連勝次數`,description:`給定一串比賽結果，W 代表勝利，L 代表失敗。請計算最長連續勝利次數。`,inputDescription:`輸入一個只包含 W 與 L 的字串 S。`,outputDescription:`輸出一個整數，代表最長連勝次數。`,examples:[{input:`WWLWWWLW`,output:`3`,explanation:`最長連續勝利為 WWW，共 3 次。`}],testCases:[{input:`WWLWWWLW`,expectedOutput:`3`,output:`3`,score:0},{input:`LLLL`,expectedOutput:`0`,output:`0`,score:0},{input:`WWWW`,expectedOutput:`4`,output:`4`,score:0},{input:`WLWWLLWWW`,expectedOutput:`3`,output:`3`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``}]};export{e as default};