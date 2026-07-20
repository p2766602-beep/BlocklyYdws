var e={code:`JSL01`,title:`迴圈與累計`,type:`programming`,mode:`learning`,description:`以迴圈、累加、累乘與條件累計為核心的基礎解題課程。`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-07-18T23:59:23+08:00`,sourceCsv:`data\\problem_bank_master_tagged.csv`,version:`PB05-4B`},tasks:[{id:`JSL01-D01`,title:`從 1 數到 N`,problemTitle:`從 1 數到 N`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`demo`,difficulty:`L1`,blocklyFit:`高`,description:`輸入一個正整數 N，請依序輸出 1 到 N 的所有整數，每個數字各佔一行。本題用來示範最基本的計數迴圈。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 1 到 N，每個數字各佔一行。`,statement:{description:`輸入一個正整數 N，請依序輸出 1 到 N 的所有整數，每個數字各佔一行。本題用來示範最基本的計數迴圈。`,input:`第一行：一個正整數 N。`,output:`輸出 1 到 N，每個數字各佔一行。`},examples:[{input:`3`,output:`1
2
3`,explanation:`依序輸出 1、2、3。`},{input:`1`,output:`1`,explanation:`N 為 1，只輸出 1。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20,hidden:!1},{input:`3`,expectedOutput:`1
2
3`,output:`1
2
3`,score:20,hidden:!1},{input:`5`,expectedOutput:`1
2
3
4
5`,output:`1
2
3
4
5`,score:20,hidden:!1},{input:`7`,expectedOutput:`1
2
3
4
5
6
7`,output:`1
2
3
4
5
6
7`,score:20,hidden:!1},{input:`10`,expectedOutput:`1
2
3
4
5
6
7
8
9
10`,output:`1
2
3
4
5
6
7
8
9
10`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`JSL01-D02`,title:`1 到 N 加總示範`,problemTitle:`1 到 N 加總示範`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`demo`,difficulty:`L2`,blocklyFit:`高`,description:`輸入一個正整數 N，請計算 1 + 2 + 3 + ... + N 的總和。本題用來示範累加變數的初始化、更新與輸出。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 1 到 N 的總和。`,statement:{description:`輸入一個正整數 N，請計算 1 + 2 + 3 + ... + N 的總和。本題用來示範累加變數的初始化、更新與輸出。`,input:`第一行：一個正整數 N。`,output:`輸出 1 到 N 的總和。`},examples:[{input:`5`,output:`15`,explanation:`1+2+3+4+5=15。`},{input:`10`,output:`55`,explanation:`1 到 10 的總和為 55。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20,hidden:!1},{input:`3`,expectedOutput:`6`,output:`6`,score:20,hidden:!1},{input:`5`,expectedOutput:`15`,output:`15`,score:20,hidden:!1},{input:`10`,expectedOutput:`55`,output:`55`,score:20,hidden:!1},{input:`100`,expectedOutput:`5050`,output:`5050`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`JSL01-P01`,title:`N 個數字累加`,problemTitle:`N 個數字累加`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請計算這 N 個整數的總和。本題用來練習重複讀取資料並累加。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`輸出 N 個整數的總和。`,statement:{description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請計算這 N 個整數的總和。本題用來練習重複讀取資料並累加。`,input:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,output:`輸出 N 個整數的總和。`},examples:[{input:`3
10 20 30`,output:`60`,explanation:`10+20+30=60。`},{input:`5
1 1 1 1 1`,output:`5`,explanation:`五個 1 的總和為 5。`}],testCases:[{input:`3
10 20 30`,expectedOutput:`60`,output:`60`,score:20,hidden:!1},{input:`4
1 2 3 4`,expectedOutput:`10`,output:`10`,score:20,hidden:!1},{input:`5
5 5 5 5 5`,expectedOutput:`25`,output:`25`,score:20,hidden:!1},{input:`2
100 200`,expectedOutput:`300`,output:`300`,score:20,hidden:!1},{input:`6
1 3 5 7 9 11`,expectedOutput:`36`,output:`36`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`JSL01-P02`,title:`只加偶數`,problemTitle:`只加偶數`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請只把其中的偶數加總後輸出。本題用來練習迴圈內加入條件判斷。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`輸出所有偶數的總和。若沒有偶數，輸出 0。`,statement:{description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請只把其中的偶數加總後輸出。本題用來練習迴圈內加入條件判斷。`,input:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,output:`輸出所有偶數的總和。若沒有偶數，輸出 0。`},examples:[{input:`5
1 2 3 4 5`,output:`6`,explanation:`偶數為 2 與 4，總和為 6。`},{input:`3
1 3 5`,output:`0`,explanation:`沒有偶數，所以輸出 0。`}],testCases:[{input:`5
1 2 3 4 5`,expectedOutput:`6`,output:`6`,score:20,hidden:!1},{input:`4
2 4 6 8`,expectedOutput:`20`,output:`20`,score:20,hidden:!1},{input:`3
1 3 5`,expectedOutput:`0`,output:`0`,score:20,hidden:!1},{input:`6
10 11 12 13 14 15`,expectedOutput:`36`,output:`36`,score:20,hidden:!1},{input:`1
100`,expectedOutput:`100`,output:`100`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`JSL01-P03`,title:`簡化階乘`,problemTitle:`簡化階乘`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`輸入一個正整數 N，請計算 1 × 2 × 3 × ... × N 的結果。本題用來練習累乘變數與迴圈結構。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 N 的階乘結果。`,statement:{description:`輸入一個正整數 N，請計算 1 × 2 × 3 × ... × N 的結果。本題用來練習累乘變數與迴圈結構。`,input:`第一行：一個正整數 N。`,output:`輸出 N 的階乘結果。`},examples:[{input:`4`,output:`24`,explanation:`1×2×3×4=24。`},{input:`5`,output:`120`,explanation:`1×2×3×4×5=120。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20,hidden:!1},{input:`3`,expectedOutput:`6`,output:`6`,score:20,hidden:!1},{input:`4`,expectedOutput:`24`,output:`24`,score:20,hidden:!1},{input:`5`,expectedOutput:`120`,output:`120`,score:20,hidden:!1},{input:`7`,expectedOutput:`5040`,output:`5040`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-06-0`,title:`連續加總`,problemTitle:`連續加總`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`有時候我們需要計算從 1 到某個數字的總和。
請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。

例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。`,inputDescription:``,outputDescription:``,statement:{description:`有時候我們需要計算從 1 到某個數字的總和。
請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。

例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。`,input:``,output:``},examples:[{input:`5`,output:`15`,explanation:`輸入 5 → 1+2+3+4+5=15
程式輸出15`},{input:`10`,output:`55`,explanation:`輸入 10 → 1+2+3+4...+10=55
程式輸出55`}],testCases:[{input:`5`,expectedOutput:`15`,output:`15`,score:10,hidden:!1},{input:`20`,expectedOutput:`210`,output:`210`,score:10,hidden:!1},{input:`88`,expectedOutput:`3916`,output:`3916`,score:10,hidden:!1},{input:`100`,expectedOutput:`5050`,output:`5050`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-06-1`,title:`連續乘積`,problemTitle:`連續乘積`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`輸入一個整數 N，計算從 1*2*3....*N 的結果。

例如 N=5 時，1*2*3*4*5=120。
這樣的練習可以訓練你使用迴圈計算。`,inputDescription:``,outputDescription:``,statement:{description:`輸入一個整數 N，計算從 1*2*3....*N 的結果。

例如 N=5 時，1*2*3*4*5=120。
這樣的練習可以訓練你使用迴圈計算。`,input:``,output:``},examples:[{input:`5`,output:`120`,explanation:`輸入 5 → 1*2*3*4*5=120
程式輸出120`},{input:`6`,output:`720`,explanation:`6 → 1*2*3*4*5*6=720
程式輸出720`}],testCases:[{input:`5`,expectedOutput:`120`,output:`120`,score:10,hidden:!1},{input:`6`,expectedOutput:`720`,output:`720`,score:10,hidden:!1},{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`8`,expectedOutput:`40320`,output:`40320`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-07-0`,title:`九九乘法`,problemTitle:`九九乘法`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`challenge`,difficulty:`L1`,blocklyFit:`中`,description:`請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。
例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。

程式輸出3 6 9 12 15 18 21 24 27

這樣的練習能讓你熟悉迴圈的運用。`,inputDescription:``,outputDescription:``,statement:{description:`請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。
例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。

程式輸出3 6 9 12 15 18 21 24 27

這樣的練習能讓你熟悉迴圈的運用。`,input:``,output:``},examples:[{input:`3`,output:`3 6 9 12 15 18 21 24 27`,explanation:`第一行輸入3，經過九九乘法計算後
程式輸出3 6 9 12 15 18 21 24 27`},{input:`6`,output:`6 12 18 24 30 36 42 48 54`,explanation:`第一行輸入6，經過九九乘法計算後
程式輸出6 12 18 24 30 36 42 48 54`}],testCases:[{input:`3`,expectedOutput:`3 6 9 12 15 18 21 24 27`,output:`3 6 9 12 15 18 21 24 27`,score:10,hidden:!1},{input:`6`,expectedOutput:`6 12 18 24 30 36 42 48 54`,output:`6 12 18 24 30 36 42 48 54`,score:10,hidden:!1},{input:`5`,expectedOutput:`5 10 15 20 25 30 35 40 45`,output:`5 10 15 20 25 30 35 40 45`,score:10,hidden:!1},{input:`9`,expectedOutput:`9 18 27 36 45 54 63 72 81`,output:`9 18 27 36 45 54 63 72 81`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-07-1`,title:`跳繩比賽法`,problemTitle:`跳繩比賽法`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。

請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料

第二行輸入一串數列共N筆整數，序列的數字以空隔間格。

程式輸出小組全部人員總共跳繩幾次？`,inputDescription:``,outputDescription:``,statement:{description:`體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。

請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料

第二行輸入一串數列共N筆整數，序列的數字以空隔間格。

程式輸出小組全部人員總共跳繩幾次？`,input:``,output:``},examples:[{input:`5
20 19 36 25 30`,output:`130`,explanation:`第一行輸入5，表示小組有5人。
第二行輸入20 19 36 25 30，表示小組每人分別跳20、19、36、25、30下。
程式輸出小組累計共跳130下`},{input:`3
6 12 18`,output:`36`,explanation:`第一行輸入3，表示小組有3人。
第二行輸入6 12 18，表示小組每人分別跳6、12、18下。
程式輸出小組累計共跳36下`}],testCases:[{input:`4
18 21 24 27`,expectedOutput:`90`,output:`90`,score:10,hidden:!1},{input:`6
6 12 18 24 30 36`,expectedOutput:`126`,output:`126`,score:10,hidden:!1},{input:`5
5 10 15 20 25`,expectedOutput:`75`,output:`75`,score:10,hidden:!1},{input:`1
9`,expectedOutput:`9`,output:`9`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-08-0`,title:`找最大值`,problemTitle:`找最大值`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值。
這樣的練習可以幫助你處理一串資料，並找出其中的最大值。`,inputDescription:``,outputDescription:``,statement:{description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值。
這樣的練習可以幫助你處理一串資料，並找出其中的最大值。`,input:``,output:``},examples:[{input:`3
9 6 8`,output:`9`,explanation:`第一行輸入3，表示有3個數字要輸入
第二行輸入9 6 8三個數字序列
程式運算輸出最大值9`},{input:`6
99 12 129 16 8`,output:`129`,explanation:`第一行輸入6，表示有6個數字要輸入
第二行輸入99 12 129 16 8 3六個數字序列
程式運算輸出最大值129`}],testCases:[{input:`3
9 6 8`,expectedOutput:`9`,output:`9`,score:10,hidden:!1},{input:`6
99 12 129 16 8 3`,expectedOutput:`129`,output:`129`,score:10,hidden:!1},{input:`5
89 15 47 0 56`,expectedOutput:`89`,output:`89`,score:10,hidden:!1},{input:`1
25`,expectedOutput:`25`,output:`25`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-08-1`,title:`找最大最小值`,problemTitle:`找最大最小值`,courseCode:`JSL01`,courseName:`迴圈與累計`,role:`challenge`,difficulty:`L2`,blocklyFit:`中`,description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值及最小值。
這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。`,inputDescription:``,outputDescription:``,statement:{description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值及最小值。
這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。`,input:``,output:``},examples:[{input:`3
9 6 8`,output:`9
6`,explanation:`第一行輸入3，表示有3個數字要輸入
第二行輸入9 6 8三個數字序列
程式運算輸出最大值9，最小值6`},{input:`6
99 12 129 16 8 3`,output:`129
3`,explanation:`第一行輸入6，表示有6個數字要輸入
第二行輸入99 12 129 16 8 3六個數字序列
程式運算輸出最大值129，最小值3`}],testCases:[{input:`3
9 6 8`,expectedOutput:`9 6`,output:`9 6`,score:10,hidden:!1},{input:`6
99 12 129 16 8 3`,expectedOutput:`129 3`,output:`129 3`,score:10,hidden:!1},{input:`5
89 15 47 0 56`,expectedOutput:`89 0`,output:`89 0`,score:10,hidden:!1},{input:`1
25`,expectedOutput:`25 25`,output:`25 25`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`迴圈與累計`],subConcepts:[`重複運算`],algorithm:[`迭代`],dataStructure:[],syntax:[`for`,`while`,`累加變數`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};