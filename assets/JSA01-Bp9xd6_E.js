var e={code:`JSA01`,title:`清單處理與資料統計`,type:`programming`,mode:`learning`,description:`以清單讀取、資料統計、最大最小值與條件篩選為核心的資料處理課程。`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-07-18T23:59:23+08:00`,sourceCsv:`data\\problem_bank_master_tagged.csv`,version:`PB05-4B`},tasks:[{id:`JSA01-D01`,title:`清單逐一讀取`,problemTitle:`清單逐一讀取`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`demo`,difficulty:`L1`,blocklyFit:`高`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請依照原本順序逐一輸出每個數字，每個數字各佔一行。本題用來示範清單逐一讀取與輸出。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`依序輸出每個數字，每個數字各佔一行。`,statement:{description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請依照原本順序逐一輸出每個數字，每個數字各佔一行。本題用來示範清單逐一讀取與輸出。`,input:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,output:`依序輸出每個數字，每個數字各佔一行。`},examples:[{input:`3
5 8 2`,output:`5
8
2`,explanation:`依序輸出清單中的三個數字。`},{input:`2
10 20`,output:`10
20`,explanation:`依序輸出 10 與 20。`}],testCases:[{input:`1
7`,expectedOutput:`7`,output:`7`,score:20,hidden:!1},{input:`3
5 8 2`,expectedOutput:`5
8
2`,output:`5
8
2`,score:20,hidden:!1},{input:`4
1 2 3 4`,expectedOutput:`1
2
3
4`,output:`1
2
3
4`,score:20,hidden:!1},{input:`5
9 7 5 3 1`,expectedOutput:`9
7
5
3
1`,output:`9
7
5
3
1`,score:20,hidden:!1},{input:`2
100 200`,expectedOutput:`100
200`,output:`100
200`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`JSA01-D02`,title:`清單加總與平均示範`,problemTitle:`清單加總與平均示範`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`demo`,difficulty:`L2`,blocklyFit:`高`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請輸出這 N 個數字的總和與整數平均，兩個結果各佔一行。平均值請使用整數除法，只保留整數部分。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`第一行：總和。

第二行：整數平均。`,statement:{description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請輸出這 N 個數字的總和與整數平均，兩個結果各佔一行。平均值請使用整數除法，只保留整數部分。`,input:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,output:`第一行：總和。

第二行：整數平均。`},examples:[{input:`3
10 20 30`,output:`60
20`,explanation:`總和 60，平均 20。`},{input:`4
1 2 3 4`,output:`10
2`,explanation:`10 除以 4 取整數部分為 2。`}],testCases:[{input:`3
10 20 30`,expectedOutput:`60
20`,output:`60
20`,score:20,hidden:!1},{input:`4
1 2 3 4`,expectedOutput:`10
2`,output:`10
2`,score:20,hidden:!1},{input:`5
5 5 5 5 5`,expectedOutput:`25
5`,output:`25
5`,score:20,hidden:!1},{input:`2
7 8`,expectedOutput:`15
7`,output:`15
7`,score:20,hidden:!1},{input:`6
1 2 3 4 5 6`,expectedOutput:`21
3`,output:`21
3`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`JSA01-D03`,title:`清單最大最小值示範`,problemTitle:`清單最大最小值示範`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`demo`,difficulty:`L2`,blocklyFit:`高`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請找出其中的最大值與最小值，兩個結果各佔一行。本題用來示範比較與更新最大最小值。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`第一行：最大值。

第二行：最小值。`,statement:{description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請找出其中的最大值與最小值，兩個結果各佔一行。本題用來示範比較與更新最大最小值。`,input:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,output:`第一行：最大值。

第二行：最小值。`},examples:[{input:`5
8 3 10 1 6`,output:`10
1`,explanation:`最大值 10，最小值 1。`},{input:`3
7 7 7`,output:`7
7`,explanation:`所有數字相同時，最大值與最小值相同。`}],testCases:[{input:`5
8 3 10 1 6`,expectedOutput:`10
1`,output:`10
1`,score:20,hidden:!1},{input:`3
7 7 7`,expectedOutput:`7
7`,output:`7
7`,score:20,hidden:!1},{input:`4
-1 5 0 3`,expectedOutput:`5
-1`,output:`5
-1`,score:20,hidden:!1},{input:`2
100 20`,expectedOutput:`100
20`,output:`100
20`,score:20,hidden:!1},{input:`6
9 2 4 8 1 6`,expectedOutput:`9
1`,output:`9
1`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-001`,title:`暖身運動-基礎計數`,problemTitle:`暖身運動-基礎計數`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L1`,blocklyFit:`高`,description:`小小勇者在開始冒險前，必須先鍛鍊體力。教練要求勇者必須繞著操場跑N圈。

勇者一邊跑，必須一邊大聲數出目前是第幾圈，直到跑完為止。`,inputDescription:`第一行：輸入一個整數 N ，代表總共要跑的圈數。 N 為大於 0 的整數

程式依照順序輸出從 1 到 N 的數字。數字之間以空白隔開。`,outputDescription:``,statement:{description:`小小勇者在開始冒險前，必須先鍛鍊體力。教練要求勇者必須繞著操場跑N圈。

勇者一邊跑，必須一邊大聲數出目前是第幾圈，直到跑完為止。`,input:`第一行：輸入一個整數 N ，代表總共要跑的圈數。 N 為大於 0 的整數

程式依照順序輸出從 1 到 N 的數字。數字之間以空白隔開。`,output:``},examples:[{input:`5`,output:`1 2 3 4 5`,explanation:`第一行輸入數字5
程式輸出數字序列1 2 3 4 5`},{input:`3`,output:`1 2 3`,explanation:`第一行輸入數字3
程式輸出數字序列1 2 3`}],testCases:[{input:`9`,expectedOutput:`1 2 3 4 5 6 7 8 9`,output:`1 2 3 4 5 6 7 8 9`,score:10,hidden:!1},{input:`5`,expectedOutput:`1 2 3 4 5`,output:`1 2 3 4 5`,score:10,hidden:!1},{input:`7`,expectedOutput:`1 2 3 4 5 6 7`,output:`1 2 3 4 5 6 7`,score:10,hidden:!1},{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-002`,title:`跳石過河-間隔計數`,problemTitle:`跳石過河-間隔計數`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`勇者來到了一條充滿鱷魚的河流，河面上有一排標有號碼的石頭（1, 2, 3, 4...）。為了安全，勇者決定施展「輕功」，從第 1 塊石頭開始，每次跳躍都跳過 1 個石頭（也就是每次號碼 +2），直到超過或剛好到達指定的目標號碼 N 為止。請印出勇者踩到的所有石頭號碼。`,inputDescription:`第一行：輸入一個整數 N ，代表河岸對面的目標號碼。 N 為大於 0 的整數

程式依照順序輸出勇者踩到的石頭編號，從 1 開始，每次加 2。

數字之間以空白隔開。`,outputDescription:``,statement:{description:`勇者來到了一條充滿鱷魚的河流，河面上有一排標有號碼的石頭（1, 2, 3, 4...）。為了安全，勇者決定施展「輕功」，從第 1 塊石頭開始，每次跳躍都跳過 1 個石頭（也就是每次號碼 +2），直到超過或剛好到達指定的目標號碼 N 為止。請印出勇者踩到的所有石頭號碼。`,input:`第一行：輸入一個整數 N ，代表河岸對面的目標號碼。 N 為大於 0 的整數

程式依照順序輸出勇者踩到的石頭編號，從 1 開始，每次加 2。

數字之間以空白隔開。`,output:``},examples:[{input:`6`,output:`1 3 5`,explanation:`第一行輸入數字6
從 1 開始跳，下一個是 3，再來是 5。再跳就是 7 (超過 6 了)，所以停在 5。
程式輸出數字序列1 3 5`},{input:`7`,output:`1 3 5 7`,explanation:`第一行輸入數字7
從 1 開始跳，下一個是 3、5、7剛好到達7
程式輸出數字序列1 3 5 7`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`4`,expectedOutput:`1 3`,output:`1 3`,score:10,hidden:!1},{input:`15`,expectedOutput:`1 3 5 7 9 11 13 15`,output:`1 3 5 7 9 11 13 15`,score:10,hidden:!1},{input:`10`,expectedOutput:`1 3 5 7 9`,output:`1 3 5 7 9`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-003`,title:`火箭發射倒數 (遞減計數)`,problemTitle:`火箭發射倒數 (遞減計數)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L1`,blocklyFit:`高`,description:`勇者要搭乘火箭前往太空站。火箭發射控制中心需要一個倒數計時器。請你設計一個程式，輸入開始倒數的秒數 S，程式會從 S 開始倒數，每次減少 1，直到數到 0 為止。`,inputDescription:`第一行：輸入一個整數 S ，代表倒數的起始秒數。

程式依照順序輸出S到0的編號，每次減1。

數字之間以空白隔開。`,outputDescription:``,statement:{description:`勇者要搭乘火箭前往太空站。火箭發射控制中心需要一個倒數計時器。請你設計一個程式，輸入開始倒數的秒數 S，程式會從 S 開始倒數，每次減少 1，直到數到 0 為止。`,input:`第一行：輸入一個整數 S ，代表倒數的起始秒數。

程式依照順序輸出S到0的編號，每次減1。

數字之間以空白隔開。`,output:``},examples:[{input:`5`,output:`5 4 3 2 1 0`,explanation:`第一行輸入數字5
從 5 開始倒數，下一個是4、3、2、1、0
程式輸出數字序列5 4 3 2 1 0`},{input:`7`,output:`7 6 5 4 3 2 1 0`,explanation:`第一行輸入數字7
從 7開始倒數，下一個是6、5、4、3、2、1、0
程式輸出數字序列7 6 5 4 3 2 1 0`}],testCases:[{input:`1`,expectedOutput:`1 0`,output:`1 0`,score:10,hidden:!1},{input:`4`,expectedOutput:`4 3 2 1 0`,output:`4 3 2 1 0`,score:10,hidden:!1},{input:`15`,expectedOutput:`15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0`,output:`15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0`,score:10,hidden:!1},{input:`10`,expectedOutput:`10 9 8 7 6 5 4 3 2 1 0`,output:`10 9 8 7 6 5 4 3 2 1 0`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-004`,title:`魔法金幣倍增術 (變數應用)`,problemTitle:`魔法金幣倍增術 (變數應用)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`勇者學會了「倍增術」。這個魔法的規則是：當勇者唸出數字 i 時，魔法袋裡就會變出 i * 10 枚金幣。勇者決定從 1 開始唸，連續唸到 N。請計算勇者每次唸完數字後，分別得到了多少金幣？`,inputDescription:`第一行：輸入一個整數 N ，代表勇者最後唸出的數字。

利用迴圈變數 i 進行計算，輸出從 1 到 N 每個數字乘以 10 的結果。

數字之間以空白隔開。`,outputDescription:``,statement:{description:`勇者學會了「倍增術」。這個魔法的規則是：當勇者唸出數字 i 時，魔法袋裡就會變出 i * 10 枚金幣。勇者決定從 1 開始唸，連續唸到 N。請計算勇者每次唸完數字後，分別得到了多少金幣？`,input:`第一行：輸入一個整數 N ，代表勇者最後唸出的數字。

利用迴圈變數 i 進行計算，輸出從 1 到 N 每個數字乘以 10 的結果。

數字之間以空白隔開。`,output:``},examples:[{input:`5`,output:`10 20 30 40 50`,explanation:`第一行輸入數字5
程式輸出數字序列10 20 30 40 50`},{input:`7`,output:`10 20 30 40 50 60 70`,explanation:`第一行輸入數字7
程式輸出數字序列10 20 30 40 50 60 70`}],testCases:[{input:`1`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`4`,expectedOutput:`10 20 30 40`,output:`10 20 30 40`,score:10,hidden:!1},{input:`10`,expectedOutput:`10 20 30 40 50 60 70 80 90 100`,output:`10 20 30 40 50 60 70 80 90 100`,score:10,hidden:!1},{input:`3`,expectedOutput:`10 20 30`,output:`10 20 30`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-005`,title:`存錢買裝備 (累加計算)`,problemTitle:`存錢買裝備 (累加計算)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`勇者想買一把傳說之劍。他決定實施一個存錢計畫：第 1 天存 1 元，第 2 天存 2 元，第 3 天存 3 元...以此類推，第 i 天就存 i 元。
請問在第 N 天結束後，勇者總共存了多少錢？`,inputDescription:`第一行：輸入一個整數 N ，代表存錢的天數。

輸出一個整數，代表從第 1 天到第 N 天存下的金額總和（Sum）。

(提示：你需要一個變數來當作「存錢筒」，在迴圈中把每天的錢加進去)。`,outputDescription:``,statement:{description:`勇者想買一把傳說之劍。他決定實施一個存錢計畫：第 1 天存 1 元，第 2 天存 2 元，第 3 天存 3 元...以此類推，第 i 天就存 i 元。
請問在第 N 天結束後，勇者總共存了多少錢？`,input:`第一行：輸入一個整數 N ，代表存錢的天數。

輸出一個整數，代表從第 1 天到第 N 天存下的金額總和（Sum）。

(提示：你需要一個變數來當作「存錢筒」，在迴圈中把每天的錢加進去)。`,output:``},examples:[{input:`3`,output:`6`,explanation:`第一行輸入數字3
1+2+3=6，程式輸出6`},{input:`7`,output:`28`,explanation:`第一行輸入數字7
1+2+3+4+5+6+7=28，程式輸出28`}],testCases:[{input:`9`,expectedOutput:`45`,output:`45`,score:10,hidden:!1},{input:`20`,expectedOutput:`210`,output:`210`,score:10,hidden:!1},{input:`10`,expectedOutput:`55`,output:`55`,score:10,hidden:!1},{input:`100`,expectedOutput:`5050`,output:`5050`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-008`,title:`防禦工事 (平方數列)`,problemTitle:`防禦工事 (平方數列)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`為了抵禦怪獸，勇者需要建造正方形的防禦陣型。國王要求勇者展示不同規模的陣型人數。

當邊長為 i 時，需要的人數就是 i * i。

請輸入一個數字 N，依序列出邊長從 1 到 N 的正方形陣型各需要多少人。`,inputDescription:`第一行：輸入一個整數 N ，代表最大邊長

程式依序輸出從 1 到 N 之間的平方數(1*1 2*2...N*N)

數字之間以空白隔開。`,outputDescription:``,statement:{description:`為了抵禦怪獸，勇者需要建造正方形的防禦陣型。國王要求勇者展示不同規模的陣型人數。

當邊長為 i 時，需要的人數就是 i * i。

請輸入一個數字 N，依序列出邊長從 1 到 N 的正方形陣型各需要多少人。`,input:`第一行：輸入一個整數 N ，代表最大邊長

程式依序輸出從 1 到 N 之間的平方數(1*1 2*2...N*N)

數字之間以空白隔開。`,output:``},examples:[{input:`3`,output:`1 4 9`,explanation:`第一行輸入數字3，代表最大邊長3
程式輸出平方數序列：1 4 9`},{input:`5`,output:`1 4 9 16 25`,explanation:`第一行輸入數字5，代表最大邊長5
程式輸出平方數序列：1 4 9 16 25`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`6`,expectedOutput:`1 4 9 16 25 36`,output:`1 4 9 16 25 36`,score:10,hidden:!1},{input:`7`,expectedOutput:`1 4 9 16 25 36 49`,output:`1 4 9 16 25 36 49`,score:10,hidden:!1},{input:`9`,expectedOutput:`1 4 9 16 25 36 49 64 81`,output:`1 4 9 16 25 36 49 64 81`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-009`,title:`偶數日的存款 (條件累加)`,problemTitle:`偶數日的存款 (條件累加)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`勇者改變了存錢計畫，他決定「只在偶數日存錢」。
在第 2 天存 2 元，第 4 天存 4 元，第 6 天存 6 元...以此類推。奇數天（1, 3, 5...）則不存錢。
請問到了第 N 天結束(N>1)，勇者總共存了多少錢？`,inputDescription:`第一行：輸入一個整數 N

程式輸出從 1 到 N 之間所有偶數的總和。`,outputDescription:``,statement:{description:`勇者改變了存錢計畫，他決定「只在偶數日存錢」。
在第 2 天存 2 元，第 4 天存 4 元，第 6 天存 6 元...以此類推。奇數天（1, 3, 5...）則不存錢。
請問到了第 N 天結束(N>1)，勇者總共存了多少錢？`,input:`第一行：輸入一個整數 N

程式輸出從 1 到 N 之間所有偶數的總和。`,output:``},examples:[{input:`4`,output:`6`,explanation:`第一行輸入數字4
程式輸出偶數和：2+4=6`},{input:`7`,output:`12`,explanation:`第一行輸入數字7
程式輸出偶數和：2+4+6=12`}],testCases:[{input:`4`,expectedOutput:`6`,output:`6`,score:10,hidden:!1},{input:`9`,expectedOutput:`20`,output:`20`,score:10,hidden:!1},{input:`7`,expectedOutput:`12`,output:`12`,score:10,hidden:!1},{input:`15`,expectedOutput:`56`,output:`56`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-010`,title:`能量水晶融合 (連乘-階乘)`,problemTitle:`能量水晶融合 (連乘-階乘)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`勇者正在合成一顆能量水晶。這顆水晶的能量是不斷相乘的！

第 1 階段能量為 1。

第 2 階段能量變成 1 * 2。

第 3 階段能量變成 1 * 2 * 3。

請問到了第 N 階段，能量總共有多少？`,inputDescription:`第一行：輸入一個整數 N

程式輸出 1*2*3*4...*N 之值。`,outputDescription:``,statement:{description:`勇者正在合成一顆能量水晶。這顆水晶的能量是不斷相乘的！

第 1 階段能量為 1。

第 2 階段能量變成 1 * 2。

第 3 階段能量變成 1 * 2 * 3。

請問到了第 N 階段，能量總共有多少？`,input:`第一行：輸入一個整數 N

程式輸出 1*2*3*4...*N 之值。`,output:``},examples:[{input:`4`,output:`24`,explanation:`第一行輸入數字4
程式輸出N 階段能量：1*2*3*4=24`},{input:`6`,output:`720`,explanation:`第一行輸入數字6
程式輸出N 階段能量：1*2*3*4*5*6=720`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`9`,expectedOutput:`362880`,output:`362880`,score:10,hidden:!1},{input:`7`,expectedOutput:`5040`,output:`5040`,score:10,hidden:!1},{input:`3`,expectedOutput:`6`,output:`6`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-012`,title:`登山冒險 (雙向序列-複合邏輯)`,problemTitle:`登山冒險 (雙向序列-複合邏輯)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`這是一題大魔王關卡！勇者要爬一座高山，然後再下山。
這座山的高度是 N。勇者必須從 1 爬到 N，到達山頂後，再從 N-1 走回 1。
請依序列出勇者經過的高度。。`,inputDescription:`第一行：輸入一個整數N

程式輸出一個序列：1 2 3 ...N N-1 ...1。

序列數字以空白間隔`,outputDescription:``,statement:{description:`這是一題大魔王關卡！勇者要爬一座高山，然後再下山。
這座山的高度是 N。勇者必須從 1 爬到 N，到達山頂後，再從 N-1 走回 1。
請依序列出勇者經過的高度。。`,input:`第一行：輸入一個整數N

程式輸出一個序列：1 2 3 ...N N-1 ...1。

序列數字以空白間隔`,output:``},examples:[{input:`5`,output:`1 2 3 4 5 4 3 2 1`,explanation:`第一行輸入數字5
程式輸出1 2 3 4 5 4 3 2 1`},{input:`4`,output:`1 2 3 4 3 2 1`,explanation:`第一行輸入數字4
程式輸出1 2 3 4 3 2 1`}],testCases:[{input:`10`,expectedOutput:`1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1`,output:`1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1`,score:10,hidden:!1},{input:`8`,expectedOutput:`1 2 3 4 5 6 7 8 7 6 5 4 3 2 1`,output:`1 2 3 4 5 6 7 8 7 6 5 4 3 2 1`,score:10,hidden:!1},{input:`5`,expectedOutput:`1 2 3 4 5 4 3 2 1`,output:`1 2 3 4 5 4 3 2 1`,score:10,hidden:!1},{input:`2`,expectedOutput:`1 2 1`,output:`1 2 1`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`TYTN-05`,title:`Y-1-1-班服投票`,problemTitle:`Y-1-1-班服投票`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L3`,blocklyFit:`中`,description:`可愛國小601班要製作紀念班服，本次班服設計共有3個款式，分別編號為1、2、3。

每位同學可在選票上寫下自己選擇的班服款式編號，最後以得票數最高者為班服樣式。

請先計算每款班服的得票數（依1→3順序），並輸出最高票的班服編號。

若有兩款或以上的票數相同且為最高票，則輸出：請重新投票。`,inputDescription:`第一行：整數 N，代表投票數。

第二行：N 個整數（介於 1~3），代表每張選票的班服設計編號。`,outputDescription:`若票數最高者唯一，輸出該款式編號；若最高票出現同票數，輸出「請重新投票」。`,statement:{description:`可愛國小601班要製作紀念班服，本次班服設計共有3個款式，分別編號為1、2、3。

每位同學可在選票上寫下自己選擇的班服款式編號，最後以得票數最高者為班服樣式。

請先計算每款班服的得票數（依1→3順序），並輸出最高票的班服編號。

若有兩款或以上的票數相同且為最高票，則輸出：請重新投票。`,input:`第一行：整數 N，代表投票數。

第二行：N 個整數（介於 1~3），代表每張選票的班服設計編號。`,output:`若票數最高者唯一，輸出該款式編號；若最高票出現同票數，輸出「請重新投票」。`},examples:[{input:`8
1 2 2 3 2 1 3 2`,output:`2`,explanation:`8 位同學投票，各自選擇的班服編號如上。
2 號班服得票最高，因此輸出 2。`},{input:`6
1 2 3 1 2 3`,output:`請重新投票`,explanation:`3 種班服皆獲得 2 票，最高票有同票情形。
因此輸出「請重新投票」。`}],testCases:[{input:`8
1 2 2 3 2 1 3 2`,expectedOutput:`2`,output:`2`,score:10,hidden:!1},{input:`6
1 2 3 1 2 3`,expectedOutput:`請重新投票`,output:`請重新投票`,score:10,hidden:!1},{input:`5
1 1 1 2 3`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`7
3 3 2 2 1 3 2`,expectedOutput:`請重新投票`,output:`請重新投票`,score:10,hidden:!1},{input:`4
2 2 2 3`,expectedOutput:`2`,output:`2`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`TYTN-06`,title:`Y-1-2-棒球場座位`,problemTitle:`Y-1-2-棒球場座位`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L3`,blocklyFit:`中`,description:`小明想去看棒球賽為台灣隊加油，請寫一個程式，輸入觀眾的座位號碼後，能輸出該座位所屬的大區、所在排數與該排中的第幾個座位，讓小明能迅速找到座位。

棒球場共有 9000 個座位，分為三大區：

第1區（普通區）：2250 席，每排 25 人，共 90 排。

第2區（搖滾區）：4500 席，每排 50 人，共 90 排。

第3區（普通區）：2250 席，每排 25 人，共 90 排。

座位編號從第1區開始，由左至右、由前至後依序編號，接著接續第2、3區。`,inputDescription:`輸入一個整數 seat（座位號碼）。`,outputDescription:`輸出 3 個整數，分別為：大區區號、排數、由左數的第幾個座位。`,statement:{description:`小明想去看棒球賽為台灣隊加油，請寫一個程式，輸入觀眾的座位號碼後，能輸出該座位所屬的大區、所在排數與該排中的第幾個座位，讓小明能迅速找到座位。

棒球場共有 9000 個座位，分為三大區：

第1區（普通區）：2250 席，每排 25 人，共 90 排。

第2區（搖滾區）：4500 席，每排 50 人，共 90 排。

第3區（普通區）：2250 席，每排 25 人，共 90 排。

座位編號從第1區開始，由左至右、由前至後依序編號，接著接續第2、3區。`,input:`輸入一個整數 seat（座位號碼）。`,output:`輸出 3 個整數，分別為：大區區號、排數、由左數的第幾個座位。`},examples:[{input:`1881`,output:`1 76 6`,explanation:`座位 1881 位於第1區。
第1區每排25人，因此計算後位於第76排、第6個座位。`},{input:`3045`,output:`2 16 45`,explanation:`座位 3045 位於第2區。
第2區每排50人，因此計算後位於第16排、第45個座位。`}],testCases:[{input:`1881`,expectedOutput:`1 76 6`,output:`1 76 6`,score:10,hidden:!1},{input:`3045`,expectedOutput:`2 16 45`,output:`2 16 45`,score:10,hidden:!1},{input:`25`,expectedOutput:`1 1 25`,output:`1 1 25`,score:10,hidden:!1},{input:`4501`,expectedOutput:`2 46 1`,output:`2 46 1`,score:10,hidden:!1},{input:`8999`,expectedOutput:`3 90 24`,output:`3 90 24`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`W3-05`,title:`風獅爺排隊`,problemTitle:`風獅爺排隊`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L3`,blocklyFit:`中`,description:`金門各村落的風獅爺要準備祭典大合照，村長要求將 4 尊風獅爺依照身高「由矮到高」排好。

工讀生小金負責進行搬動，規則如下：

【比較規則】

每次只比較「相鄰」的兩尊風獅爺（第 1 與第 2、 第 2 與第 3、 第 3 與第 4）。

【交換規則】

如果左邊的風獅爺身高 > 右邊的風獅爺身高，兩尊就必須交換位置。

【紀錄規則】

每成功交換一次位置，小金就記錄 1 次（統計總交換次數）。

【任務】

(1) 將輸入的 4 個身高數值由小到大排列。

(2) 在依照上述「相鄰比較、需要就交換」的排序過程中，計算總共交換了幾次。

【排序流程說明】

請使用以下固定流程（類似氣泡排序 Bubble Sort）：

重複進行 3 回合：

第 1 回合依序比較 (1,2)、(2,3)、(3,4)

第 2 回合依序比較 (1,2)、(2,3)、(3,4)

第 3 回合依序比較 (1,2)、(2,3)、(3,4)

每次比較時只要符合交換規則就交換，並將交換次數 +1。`,inputDescription:`第一行輸入一個整數 4（代表有 4 尊風獅爺）。

第二行輸入 4 個整數，代表 4 尊風獅爺的身高，數字之間以空白隔開。`,outputDescription:`輸出兩個資訊（同一行輸出）：

先輸出排序後由小到大的 4 個身高（以空白隔開），再以一個空白接著輸出總交換次數。`,statement:{description:`金門各村落的風獅爺要準備祭典大合照，村長要求將 4 尊風獅爺依照身高「由矮到高」排好。

工讀生小金負責進行搬動，規則如下：

【比較規則】

每次只比較「相鄰」的兩尊風獅爺（第 1 與第 2、 第 2 與第 3、 第 3 與第 4）。

【交換規則】

如果左邊的風獅爺身高 > 右邊的風獅爺身高，兩尊就必須交換位置。

【紀錄規則】

每成功交換一次位置，小金就記錄 1 次（統計總交換次數）。

【任務】

(1) 將輸入的 4 個身高數值由小到大排列。

(2) 在依照上述「相鄰比較、需要就交換」的排序過程中，計算總共交換了幾次。

【排序流程說明】

請使用以下固定流程（類似氣泡排序 Bubble Sort）：

重複進行 3 回合：

第 1 回合依序比較 (1,2)、(2,3)、(3,4)

第 2 回合依序比較 (1,2)、(2,3)、(3,4)

第 3 回合依序比較 (1,2)、(2,3)、(3,4)

每次比較時只要符合交換規則就交換，並將交換次數 +1。`,input:`第一行輸入一個整數 4（代表有 4 尊風獅爺）。

第二行輸入 4 個整數，代表 4 尊風獅爺的身高，數字之間以空白隔開。`,output:`輸出兩個資訊（同一行輸出）：

先輸出排序後由小到大的 4 個身高（以空白隔開），再以一個空白接著輸出總交換次數。`},examples:[{input:`4
150 120 110 100`,output:`100 110 120 150 6`,explanation:`這是「最麻煩」的情況（全倒過來排）。
150 要一路換到最後，接著 120 再換，總共會交換 6 次。`},{input:`4
120 110 140 130`,output:`110 120 130 140 2`,explanation:`120 與 110 換一次；140 與 130 換一次，總共 2 次。`}],testCases:[{input:`4
100 110 120 130`,expectedOutput:`100 110 120 130 0`,output:`100 110 120 130 0`,score:10,hidden:!1},{input:`4
150 120 110 100`,expectedOutput:`100 110 120 150 6`,output:`100 110 120 150 6`,score:15,hidden:!1},{input:`4
120 110 140 130`,expectedOutput:`110 120 130 140 2`,output:`110 120 130 140 2`,score:20,hidden:!1},{input:`4
130 120 120 110`,expectedOutput:`110 120 120 130 5`,output:`110 120 120 130 5`,score:25,hidden:!1},{input:`4
115 130 105 120`,expectedOutput:`105 115 120 130 3`,output:`105 115 120 130 3`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`W5-01`,title:`安靜值巡查器`,problemTitle:`安靜值巡查器`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L3`,blocklyFit:`中`,description:`學校自習室裝了「安靜值巡查器」，每小時會量測一次安靜值（數值越大代表越安靜）。系統設定一個門檻值 K：

- 若某小時的安靜值`,inputDescription:`第一行：一個整數 N，代表紀錄的總時數。

第二行：一個整數 K，代表安靜值門檻。

第三行：N 個整數，代表每小時的安靜值（以半形空格分隔）。`,outputDescription:`第一行：一個整數，代表總提醒次數。`,statement:{description:`學校自習室裝了「安靜值巡查器」，每小時會量測一次安靜值（數值越大代表越安靜）。系統設定一個門檻值 K：

- 若某小時的安靜值`,input:`第一行：一個整數 N，代表紀錄的總時數。

第二行：一個整數 K，代表安靜值門檻。

第三行：N 個整數，代表每小時的安靜值（以半形空格分隔）。`,output:`第一行：一個整數，代表總提醒次數。`},examples:[{input:`5
100
120 80 70 100 60`,output:`4`,explanation:`第2小時(80<100)：+1
第3小時(70<100)：連續第2小時 +2
第4小時(100≥100)：中斷
第5小時(60<100)：+1
總計 4`},{input:`4
10
0 0 0 0`,output:`7`,explanation:`連續4小時都未達標：+1 +2 +2 +2 = 7`}],testCases:[{input:`5
100
120 130 140 150 160`,expectedOutput:`0`,output:`0`,score:10,hidden:!1},{input:`4
10
0 0 0 0`,expectedOutput:`7`,output:`7`,score:10,hidden:!1},{input:`6
50
40 60 40 40 60 40`,expectedOutput:`5`,output:`5`,score:10,hidden:!1},{input:`7
100
90 90 90 100 90 90 110`,expectedOutput:`8`,output:`8`,score:10,hidden:!1},{input:`1
1
0`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`8
1000
999 1000 999 999 999 1000 999 1000`,expectedOutput:`7`,output:`7`,score:10,hidden:!1},{input:`10
5
5 4 3 2 1 0 5 4 5 4`,expectedOutput:`11`,output:`11`,score:10,hidden:!1},{input:`9
100
99 99 100 99 100 99 99 99 100`,expectedOutput:`9`,output:`9`,score:10,hidden:!1},{input:`12
7
7 6 7 6 6 6 7 6 7 6 6 7`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`15
50
10 60 10 60 10 60 10 60 10 60 10 60 10 60 10`,expectedOutput:`8`,output:`8`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`W5-04`,title:`校車廣播系統熱血指數統計`,problemTitle:`校車廣播系統熱血指數統計`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L4`,blocklyFit:`中`,description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家High起來（當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺）。

校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這 K 首歌依序播完才能切換模式。小明的任務非常重要，他需要從這份落落長的歌單中，挑選出連續的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！

請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。`,inputDescription:`第一行：整數 K代表廣播系統一次必須連續播放的歌曲數量。

第二行：整數 N代表歌單中總共有 N首歌。

第三行：N 個整數依序代表歌單中第 1 首到第 N首歌的「熱血指數」。`,outputDescription:`一個整數（最大總和）。`,statement:{description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家High起來（當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺）。

校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這 K 首歌依序播完才能切換模式。小明的任務非常重要，他需要從這份落落長的歌單中，挑選出連續的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！

請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。`,input:`第一行：整數 K代表廣播系統一次必須連續播放的歌曲數量。

第二行：整數 N代表歌單中總共有 N首歌。

第三行：N 個整數依序代表歌單中第 1 首到第 N首歌的「熱血指數」。`,output:`一個整數（最大總和）。`},examples:[{input:`3
5
10 20 30 10 50`,output:`90`,explanation:`(10+20+30)=60
(20+30+10)=60
(30+10+50)=90 (最大)`},{input:`2
4
5 100 100 5`,output:`200`,explanation:`連續2首的組合：
(5+100)=105, (100+100)=200, (100+5)=105。
最大值為 200。`}],testCases:[{input:`2
4
1 2 3 4`,expectedOutput:`7`,output:`7`,score:10,hidden:!1},{input:`3
5
5 5 5 5 5`,expectedOutput:`15`,output:`15`,score:15,hidden:!1},{input:`2
5
100 10 10 10 100`,expectedOutput:`110`,output:`110`,score:20,hidden:!1},{input:`4
8
1 2 100 100 100 2 1 1`,expectedOutput:`302`,output:`302`,score:25,hidden:!1},{input:`3
6
50 10 50 10 50 10`,expectedOutput:`110`,output:`110`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`WP-03`,title:`B-電影院找座位`,problemTitle:`B-電影院找座位`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L3`,blocklyFit:`中`,description:`小華一家人要去看電影，他們希望能找到連續的K個空座位。整排座位中，某些座位已經有人坐了，因此剩下的空位會形成幾段「連續空位」。
現在給你每一段連續空位的座位數，請你計算小華一家人共有幾種方式 可以在這一排中坐下。

第一行：整數 N，代表有N個人。

第二行：輸入 M，代表有M個空段落。

第三行：輸入序列X，依序代表每個空段落的座位數。

輸出格式：輸出一個整數，有幾種方式。`,inputDescription:``,outputDescription:`輸出一個整數，有幾種方式。`,statement:{description:`小華一家人要去看電影，他們希望能找到連續的K個空座位。整排座位中，某些座位已經有人坐了，因此剩下的空位會形成幾段「連續空位」。
現在給你每一段連續空位的座位數，請你計算小華一家人共有幾種方式 可以在這一排中坐下。

第一行：整數 N，代表有N個人。

第二行：輸入 M，代表有M個空段落。

第三行：輸入序列X，依序代表每個空段落的座位數。

輸出格式：輸出一個整數，有幾種方式。`,input:``,output:`輸出一個整數，有幾種方式。`},examples:[{input:`小華一家人要去看電影，他們希望能找到連續的K個空座位。整排座位中，某些座位已經有人坐了，因此剩下的空位會形成幾段「連續空位」。
現在給你每一段連續空位的座位數，請你計算小華一家人共有幾種方式 可以在這一排中坐下。
第一行：整數 N，代表有N個人。
第二行：輸入 M，代表有M個空段落。
第三行：輸入序列X，依序代表每個空段落的座位數。
輸出格式：輸出一個整數，有幾種方式。
使用者輸入`,output:`輸出`,explanation:`範例說明`},{input:`3
2
6 2`,output:`4`,explanation:`//第三欄範例說明
有3個人
有2段空位：6 與 2。
長度 6 的那段，能讓 3 人連坐的起點有 4 種。
長度 2 的那段不夠 3 人連坐，0 種。
合計 4 種。`},{input:`2
3
3 5 4`,output:`9`,explanation:`有2個人
有3段空位：3、5、4。
長度 3 的那段：可放 2 人的起點有 2 種。
長度 5 的那段：有 4 種。
長度 4 的那段：有 3 種。
合計 2 + 4 + 3 = 9 種。`}],testCases:[{input:`3
2
6 2`,expectedOutput:`4`,output:`4`,score:10,hidden:!1},{input:`2
3
3 5 4`,expectedOutput:`9`,output:`9`,score:10,hidden:!1},{input:`4
1
4`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`5
3
1 3 4`,expectedOutput:`0`,output:`0`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-006`,title:`萬能傳送門 (自訂起始、結束與間隔)`,problemTitle:`萬能傳送門 (自訂起始、結束與間隔)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`勇者發現了一個萬能傳送門。這個傳送門可以讓勇者自由設定「起點」、「終點」以及每次傳送的「跨度（距離）」。 請設計一個程式，讀取三個數字，分別代表：起點 (Start)、終點 (End)、跨度 (Step)。 請依序印出傳送過程中經過的所有座標點。`,inputDescription:`第一行：輸入一個整數 M ，代表起點。

第二行：輸入一個整數 N ，代表終點。

第三行：輸入一個整數 O ，代表跨度。

(N>M，O>0)。

輸出從起點開始，每次增加跨度，直到超過終點為止的所有數字。`,outputDescription:``,statement:{description:`勇者發現了一個萬能傳送門。這個傳送門可以讓勇者自由設定「起點」、「終點」以及每次傳送的「跨度（距離）」。 請設計一個程式，讀取三個數字，分別代表：起點 (Start)、終點 (End)、跨度 (Step)。 請依序印出傳送過程中經過的所有座標點。`,input:`第一行：輸入一個整數 M ，代表起點。

第二行：輸入一個整數 N ，代表終點。

第三行：輸入一個整數 O ，代表跨度。

(N>M，O>0)。

輸出從起點開始，每次增加跨度，直到超過終點為止的所有數字。`,output:``},examples:[{input:`2
10
2`,output:`2 4 6 8 10`,explanation:`第一行輸入數字2，代表起點2
第二行輸入數字10，代表終點10
第三行輸入數字2，代表每次增加2
程式輸出每一個經過的座標：2 4 6 8 10`},{input:`5
15
3`,output:`5 8 11 14`,explanation:`第一行輸入數字5，代表起點5
第二行輸入數字15，代表終點15
第三行輸入數字3，代表每次增加3
程式輸出每一個經過的座標：5 8 11 14，下一個是17，超過15不輸出`}],testCases:[{input:`1
5
1`,expectedOutput:`1 2 3 4 5`,output:`1 2 3 4 5`,score:10,hidden:!1},{input:`0
10
5`,expectedOutput:`0 5 10`,output:`0 5 10`,score:10,hidden:!1},{input:`10
20
2`,expectedOutput:`10 12 14 16 18 20`,output:`10 12 14 16 18 20`,score:10,hidden:!1},{input:`1
10
3`,expectedOutput:`1 4 7 10`,output:`1 4 7 10`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-007`,title:`寶箱獵人 (尋找倍數)`,problemTitle:`寶箱獵人 (尋找倍數)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`勇者來到了一條長長的藏寶走廊，走廊上的地磚編號從 1 到 N。藏寶圖上寫著：「只有編號是 $K$ 的倍數的地磚下藏有寶箱。」
請你幫助勇者找出所有藏有寶箱的地磚編號。`,inputDescription:`第一行：輸入一個整數 M ，第一個數字M代表地磚總數，

第二行：輸入一個整數 N ，第二個數字N代表倍數，M大於等於N(N>M)。

輸出從 1 到 M 之間，所有 N 的倍數。
數字之間以空白隔開。
(提示：想一想，迴圈的「間隔 (Step)」應該設為多少？起點應該是 1 還是 K？)`,outputDescription:``,statement:{description:`勇者來到了一條長長的藏寶走廊，走廊上的地磚編號從 1 到 N。藏寶圖上寫著：「只有編號是 $K$ 的倍數的地磚下藏有寶箱。」
請你幫助勇者找出所有藏有寶箱的地磚編號。`,input:`第一行：輸入一個整數 M ，第一個數字M代表地磚總數，

第二行：輸入一個整數 N ，第二個數字N代表倍數，M大於等於N(N>M)。

輸出從 1 到 M 之間，所有 N 的倍數。
數字之間以空白隔開。
(提示：想一想，迴圈的「間隔 (Step)」應該設為多少？起點應該是 1 還是 K？)`,output:``},examples:[{input:`10
3`,output:`3 6 9`,explanation:`第一行輸入數字10，代表統計範圍從1到10
第二行輸入數字3，代表要找出小於等於10且為3的倍數
程式輸出：3 6 9`},{input:`20
5`,output:`5 10 15 20`,explanation:`第一行輸入數字20，代表統計範圍從1到20
第二行輸入數字5，代表要找出小於等於20且為5的倍數
程式輸出：5 10 15 20`}],testCases:[{input:`5
2`,expectedOutput:`2 4`,output:`2 4`,score:10,hidden:!1},{input:`15
4`,expectedOutput:`4 8 12`,output:`4 8 12`,score:10,hidden:!1},{input:`7
7`,expectedOutput:`7`,output:`7`,score:10,hidden:!1},{input:`20
6`,expectedOutput:`6 12 18`,output:`6 12 18`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-011`,title:`修復斷橋 (區間累加)`,problemTitle:`修復斷橋 (區間累加)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`勇者需要修復一座斷掉的橋。橋的每一段需要的木材數量等於該段的編號。
現在只需修復從編號M到編號N的這一段區間。
請計算修復這段區間總共需要多少木材？(即計算M+(M+1)+...+N的總和)。`,inputDescription:`第一行：輸入一個整數M

第二行：輸入一個整數N

程式輸出 M加到N 之值。`,outputDescription:``,statement:{description:`勇者需要修復一座斷掉的橋。橋的每一段需要的木材數量等於該段的編號。
現在只需修復從編號M到編號N的這一段區間。
請計算修復這段區間總共需要多少木材？(即計算M+(M+1)+...+N的總和)。`,input:`第一行：輸入一個整數M

第二行：輸入一個整數N

程式輸出 M加到N 之值。`,output:``},examples:[{input:`3
5`,output:`12`,explanation:`第一行輸入數字3
第二行輸入數字5
程式輸出3+4+5=12`},{input:`1
4`,output:`10`,explanation:`第一行輸入數字1
第二行輸入數字4
程式輸出1+2+3+4=10`}],testCases:[{input:`5
10`,expectedOutput:`45`,output:`45`,score:10,hidden:!1},{input:`20
30`,expectedOutput:`275`,output:`275`,score:10,hidden:!1},{input:`1
1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`50
55`,expectedOutput:`315`,output:`315`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-013`,title:`勇者的背包 (清單讀取)`,problemTitle:`勇者的背包 (清單讀取)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`1. 題目說明

勇者準備出發了，他把所有的道具都放入了神奇背包（清單）中。 為了確認東西沒帶錯，勇者需要依照順序把背包裡的東西拿出來檢查一遍。 請你設計一個程式，將清單中的物品編號依序印出來。`,inputDescription:`第一行：輸入一個整數 N ，代表背包裡有幾樣物品。

第二行有 N 個整數，代表物品的編號，中間以空白隔開。
程式依序輸出清單中的每一個數字

數字之間以空白隔開。`,outputDescription:``,statement:{description:`1. 題目說明

勇者準備出發了，他把所有的道具都放入了神奇背包（清單）中。 為了確認東西沒帶錯，勇者需要依照順序把背包裡的東西拿出來檢查一遍。 請你設計一個程式，將清單中的物品編號依序印出來。`,input:`第一行：輸入一個整數 N ，代表背包裡有幾樣物品。

第二行有 N 個整數，代表物品的編號，中間以空白隔開。
程式依序輸出清單中的每一個數字

數字之間以空白隔開。`,output:``},examples:[{input:`3
101 102 103`,output:`101 102 103`,explanation:`第一行輸入數字3，代表3樣物品
第二行有3個整數代表物品的編號輸入，中間以空白隔開
程式依序輸出每個物品編號：101 102 103`},{input:`5
5 4 3 2 1`,output:`5 4 3 2 1`,explanation:`第一行輸入數字5，代表3樣物品
第二行有5個整數代表物品的編號輸入，中間以空白隔開
程式依序輸出每個物品編號：5 4 3 2 1`}],testCases:[{input:`1
99`,expectedOutput:`99`,output:`99`,score:10,hidden:!1},{input:`3
1 5 9`,expectedOutput:`1 5 9`,output:`1 5 9`,score:10,hidden:!1},{input:`6
2 4 6 8 10 12`,expectedOutput:`2 4 6 8 10 12`,output:`2 4 6 8 10 12`,score:10,hidden:!1},{input:`9
1 4 9 16 25 36 49 64 81`,expectedOutput:`1 4 9 16 25 36 49 64 81`,output:`1 4 9 16 25 36 49 64 81`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-014`,title:`戰利品清點 (清單加總)`,problemTitle:`戰利品清點 (清單加總)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`1. 題目說明

勇者打敗了一群史萊姆，每隻史萊姆身上掉落的金幣數量都不一樣。 助手已經把每隻史萊姆掉落的金幣數量記在清單上了。 請你幫勇者算算看，這次戰鬥總共獲得了多少金幣？`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表有幾筆金幣資料。

第二行輸入 N 個整數，代表每一筆金幣的金額。數字之間以空白隔開。

程式輸出清單中所有數字的總和。`,outputDescription:``,statement:{description:`1. 題目說明

勇者打敗了一群史萊姆，每隻史萊姆身上掉落的金幣數量都不一樣。 助手已經把每隻史萊姆掉落的金幣數量記在清單上了。 請你幫勇者算算看，這次戰鬥總共獲得了多少金幣？`,input:`輸入共有兩行。第一行是一個整數 N，代表有幾筆金幣資料。

第二行輸入 N 個整數，代表每一筆金幣的金額。數字之間以空白隔開。

程式輸出清單中所有數字的總和。`,output:``},examples:[{input:`3
10 20 30`,output:`60`,explanation:`第一行輸入數字3，代表3筆金幣資料
第二行有3筆整數代表金幣數量輸入，10 20 30，中間以空白隔開
程式輸出金幣總和：60`},{input:`5
5 4 3 2 1`,output:`15`,explanation:`第一行輸入數字5，代表5筆金幣資料
第二行有3筆整數代表金幣數量輸入，5 4 3 2 1，中間以空白隔開
程式輸出金幣總和：15`}],testCases:[{input:`1
99`,expectedOutput:`99`,output:`99`,score:10,hidden:!1},{input:`3
1 5 9`,expectedOutput:`15`,output:`15`,score:10,hidden:!1},{input:`6
2 4 6 8 10 12`,expectedOutput:`42`,output:`42`,score:10,hidden:!1},{input:`9
1 1 1 1 1 1 1 1 1`,expectedOutput:`9`,output:`9`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-015`,title:`尋找戰鬥力最高的魔王 (清單搜尋最大值)`,problemTitle:`尋找戰鬥力最高的魔王 (清單搜尋最大值)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`1. 題目說明

偵查兵帶回了一份情報，上面記錄了前方 N 隻怪物的戰鬥力數值。
勇者想要先挑戰最強的那一隻！
請你找出這份清單中，數值最大的那個數字是多少。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表怪物數量。

第二行輸入 N 個整數，代表每隻怪物的戰鬥力。數字之間以空白隔開。

程式輸出清單中的最大值。

(提示：設一個變數叫 Max，先假設第一隻是最大的，然後用迴圈跟後面的一一比對，如果發現比 Max 大的，就更新 Max)`,outputDescription:``,statement:{description:`1. 題目說明

偵查兵帶回了一份情報，上面記錄了前方 N 隻怪物的戰鬥力數值。
勇者想要先挑戰最強的那一隻！
請你找出這份清單中，數值最大的那個數字是多少。`,input:`輸入共有兩行。第一行是一個整數 N，代表怪物數量。

第二行輸入 N 個整數，代表每隻怪物的戰鬥力。數字之間以空白隔開。

程式輸出清單中的最大值。

(提示：設一個變數叫 Max，先假設第一隻是最大的，然後用迴圈跟後面的一一比對，如果發現比 Max 大的，就更新 Max)`,output:``},examples:[{input:`3
10 20 30`,output:`30`,explanation:`第一行輸入數字3，代表3筆怪物資料
第二行有3筆整數怪物資料，10 20 30，中間以空白隔開
程式輸出怪物最大戰鬥力：30`},{input:`5
5 4 3 2 1`,output:`5`,explanation:`第一行輸入數字5，代表5筆怪物資料
第二行有3筆整數怪物資料，5 4 3 2 1，中間以空白隔開
程式輸出怪物最大戰鬥力：5`}],testCases:[{input:`1
99`,expectedOutput:`99`,output:`99`,score:10,hidden:!1},{input:`6
7 7 7 7 9 7`,expectedOutput:`9`,output:`9`,score:10,hidden:!1},{input:`4
33 22 44 11`,expectedOutput:`44`,output:`44`,score:10,hidden:!1},{input:`5
25 45 95 12 55`,expectedOutput:`95`,output:`95`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-016`,title:`合格的裝備 (清單篩選)`,problemTitle:`合格的裝備 (清單篩選)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`1. 題目說明

勇者的負重能力有限，他只能攜帶重量「小於 10」的輕型裝備。 現在清單中有一堆裝備的重量，請你利用迴圈檢查每一個裝備，只把重量小於 10 的裝備重量印出來。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表裝備數量。

第二行輸入 N 個整數，代表每個裝備重量。

程式依序輸出小於 10 的數字，中間以空白隔開。

如果都沒有小於 10 的數字，則什麼都不輸出。`,outputDescription:``,statement:{description:`1. 題目說明

勇者的負重能力有限，他只能攜帶重量「小於 10」的輕型裝備。 現在清單中有一堆裝備的重量，請你利用迴圈檢查每一個裝備，只把重量小於 10 的裝備重量印出來。`,input:`輸入共有兩行。第一行是一個整數 N，代表裝備數量。

第二行輸入 N 個整數，代表每個裝備重量。

程式依序輸出小於 10 的數字，中間以空白隔開。

如果都沒有小於 10 的數字，則什麼都不輸出。`,output:``},examples:[{input:`5
15 5 20 8 3`,output:`5 8 3`,explanation:`第一行輸入數字5，代表5筆裝備資料
第二行有5筆整數裝備資料，15 5 20 8 3
程式依序輸出小於10裝備重量：5 8 3`},{input:`3
12 15 20`,output:``,explanation:`第一行輸入數字3，代表3筆裝備資料
第二行有3筆整數裝備資料，12 15 20
沒有小於10裝備輸出為空：`}],testCases:[{input:`3
1 2 3`,expectedOutput:`1 2 3`,output:`1 2 3`,score:10,hidden:!1},{input:`6
7 15 7 24 9 7`,expectedOutput:`7 7 9 7`,output:`7 7 9 7`,score:10,hidden:!1},{input:`4
33 5 44 11`,expectedOutput:`5`,output:`5`,score:10,hidden:!1},{input:`5
3 8 11 69 77`,expectedOutput:`3 8`,output:`3 8`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-017`,title:`倒轉時光 (反向遍歷清單)`,problemTitle:`倒轉時光 (反向遍歷清單)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`1. 題目說明

勇者獲得了一個「時光倒流」的魔法卷軸。這個卷軸上有一串數字密碼，但是必須從最後一個數字讀回到第一個數字，魔法才能生效。 請讀取一個清單，並將清單內的數字「由後往前」印出來。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表密碼長度。

第二行輸入 N 個整數，代表N個數字的密碼組合。

程式反序輸 N 筆密碼數字資料，中間以空白間隔

(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)`,outputDescription:``,statement:{description:`1. 題目說明

勇者獲得了一個「時光倒流」的魔法卷軸。這個卷軸上有一串數字密碼，但是必須從最後一個數字讀回到第一個數字，魔法才能生效。 請讀取一個清單，並將清單內的數字「由後往前」印出來。`,input:`輸入共有兩行。第一行是一個整數 N，代表密碼長度。

第二行輸入 N 個整數，代表N個數字的密碼組合。

程式反序輸 N 筆密碼數字資料，中間以空白間隔

(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)`,output:``},examples:[{input:`4
10 20 30 40`,output:`40 30 20 10`,explanation:`第一行輸入數字4，代表密碼有4筆資料
第二行有4筆整數資料，10 20 30 40
程式反敘輸出密碼資料：40 30 20 10`},{input:`3
1 2 3`,output:`3 2 1`,explanation:`第一行輸入數字3，代表密碼有3筆資料
第二行有3筆整數資料，1 2 3
程式反敘輸出密碼資料：3 2 1`}],testCases:[{input:`2
100 20`,expectedOutput:`20 100`,output:`20 100`,score:10,hidden:!1},{input:`4
7 7 9 7`,expectedOutput:`7 9 7 7`,output:`7 9 7 7`,score:10,hidden:!1},{input:`5
1 2 3 4 5`,expectedOutput:`5 4 3 2 1`,output:`5 4 3 2 1`,score:10,hidden:!1},{input:`4
0 1 0 1`,expectedOutput:`1 0 1 0`,output:`1 0 1 0`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`count-018`,title:`冒險日誌 (索引與數值的對應)`,problemTitle:`冒險日誌 (索引與數值的對應)`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`1. 題目說明

勇者寫了 N 天的冒險日誌，清單中依序記錄了每天打倒的怪物數量。
例如清單的第一個數字是第 1 天打倒的數量，第二個數字是第 2 天的...
請你格式化輸出每天的戰績，格式為：Day-[第幾天]-[數量]。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表天數。

第二行輸入 N 個整數，代表每天怪物的數量。

程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。`,outputDescription:``,statement:{description:`1. 題目說明

勇者寫了 N 天的冒險日誌，清單中依序記錄了每天打倒的怪物數量。
例如清單的第一個數字是第 1 天打倒的數量，第二個數字是第 2 天的...
請你格式化輸出每天的戰績，格式為：Day-[第幾天]-[數量]。`,input:`輸入共有兩行。第一行是一個整數 N，代表天數。

第二行輸入 N 個整數，代表每天怪物的數量。

程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。`,output:``},examples:[{input:`2
15 5`,output:`Day-1-15 Day-2-5`,explanation:`第一行輸入數字2，代表有2天資料
第二行有2筆整數資料，15 5
程式依序輸出所有天數資料：Day-1-15 Day-2-5`},{input:`3
12 15 20`,output:`Day-1-12 Day-2-15 Day-3-20`,explanation:`第一行輸入數字3，代表有3天資料
第二行有3筆整數資料，12 15 20
程式依序輸出所有天數資料：Day-1-12 Day-2-15 Day-3-20`}],testCases:[{input:`1
100`,expectedOutput:`Day-1-100`,output:`Day-1-100`,score:10,hidden:!1},{input:`4
7 7 9 7`,expectedOutput:`Day-1-7 Day-2-7 Day-3-9 Day-4-7`,output:`Day-1-7 Day-2-7 Day-3-9 Day-4-7`,score:10,hidden:!1},{input:`4
33 22 44 11`,expectedOutput:`Day-1-33 Day-2-22 Day-3-44 Day-4-11`,output:`Day-1-33 Day-2-22 Day-3-44 Day-4-11`,score:10,hidden:!1},{input:`3
25 2 3`,expectedOutput:`Day-1-25 Day-2-2 Day-3-3`,output:`Day-1-25 Day-2-2 Day-3-3`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cycjunior-004`,title:`校車廣播系統熱血指數統計`,problemTitle:`校車廣播系統熱血指數統計`,courseCode:`JSA01`,courseName:`清單處理與資料統計`,role:`challenge`,difficulty:`L4`,blocklyFit:`中`,description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家High起來（當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺）。

校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這 K 首歌依序播完才能切換模式。小明的任務非常重要，他需要從這份落落長的歌單中，挑選出連續的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！

請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。`,inputDescription:`第一行：整數 K代表廣播系統一次必須連續播放的歌曲數量。

第二行：整數 N代表歌單中總共有 N首歌。

第三行：N 個整數依序代表歌單中第 1 首到第 N首歌的「熱血指數」。`,outputDescription:`一個整數（最大總和）。`,statement:{description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家High起來（當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺）。

校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這 K 首歌依序播完才能切換模式。小明的任務非常重要，他需要從這份落落長的歌單中，挑選出連續的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！

請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。`,input:`第一行：整數 K代表廣播系統一次必須連續播放的歌曲數量。

第二行：整數 N代表歌單中總共有 N首歌。

第三行：N 個整數依序代表歌單中第 1 首到第 N首歌的「熱血指數」。`,output:`一個整數（最大總和）。`},examples:[{input:`3
5
10 20 30 10 50`,output:`90`,explanation:`(10+20+30)=60
(20+30+10)=60
(30+10+50)=90 (最大)`},{input:`2
4
5 100 100 5`,output:`200`,explanation:`連續2首的組合：
(5+100)=105, (100+100)=200, (100+5)=105。
最大值為 200。`}],testCases:[{input:`2
4
1 2 3 4`,expectedOutput:`7`,output:`7`,score:10,hidden:!1},{input:`3
5
5 5 5 5 5`,expectedOutput:`15`,output:`15`,score:15,hidden:!1},{input:`2
5
100 10 10 10 100`,expectedOutput:`110`,output:`110`,score:20,hidden:!1},{input:`4
8
1 2 100 100 100 2 1 1`,expectedOutput:`302`,output:`302`,score:25,hidden:!1},{input:`3
6
50 10 50 10 50 10`,expectedOutput:`110`,output:`110`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`清單處理與資料統計`],subConcepts:[`遍歷與統計`],algorithm:[`遍歷`,`統計`],dataStructure:[`清單`],syntax:[`list`,`for`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};