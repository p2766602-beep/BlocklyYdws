var e={code:`A20260721`,title:`20260721`,type:`programming`,mode:`learning`,description:``,source:{project:`YDWS-CodingBank`,generatedAt:`2026-07-21T08:34:55+08:00`,sourceCsv:`data\\problem_bank_master_complete.csv`,problemSetTitle:`題目卷`,problemSetGeneratedAt:`2026-07-21T00:24:14.534Z`,version:`PB05-7E-custom`},tasks:[{id:`SORT01-006`,title:`排序後的中間值`,problemTitle:`排序後的中間值`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`給定奇數個整數，請將它們由小到大排序後，輸出中間位置的數字。位置從 1 開始計算。`,inputDescription:``,outputDescription:``,statement:{description:`給定奇數個整數，請將它們由小到大排序後，輸出中間位置的數字。位置從 1 開始計算。`,input:``,output:``},examples:[{input:`5 9 1 5 3 7`,output:`5`,explanation:`排序後為 1 3 5 7 9，中間值是 5。`}],testCases:[{input:`5 9 1 5 3 7`,output:`5`},{input:`3 10 2 8`,output:`8`},{input:`7 4 4 1 9 2 8 6`,output:`4`},{input:`1 99`,output:`99`}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`排序演算法`,`索引與位置`,`資料統計`],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`IDX01-004`,title:`最大值的位置`,problemTitle:`最大值的位置`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`給定 N 個整數，請找出最大值第一次出現的位置。位置從 1 開始計算。`,inputDescription:``,outputDescription:``,statement:{description:`給定 N 個整數，請找出最大值第一次出現的位置。位置從 1 開始計算。`,input:``,output:``},examples:[{input:`6 5 9 3 9 7 2`,output:`9 2`,explanation:`最大值 9 第一次出現在第 2 個位置。`}],testCases:[{input:`6 5 9 3 9 7 2`,output:`9 2`},{input:`4 1 2 3 4`,output:`4 4`},{input:`5 10 10 9 8 7`,output:`10 1`},{input:`3 -5 -1 -3`,output:`-1 2`}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`索引與位置`,`最大最小值`,`清單處理`],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-003`,title:`營養午餐分析(1-3)`,problemTitle:`營養午餐分析(1-3)`,courseCode:`A20260721`,courseName:`20260721`,role:`practice`,blocklyFit:`中`,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（3）: 請分別統計：第 1～5 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？第 6～10 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行: 第一週次數 第二週次數，中間使用1個半形空格分開`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（3）: 請分別統計：第 1～5 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？第 6～10 天共出現幾次「白肉（A）之後緊接著紅肉（B）」？`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行: 第一週次數 第二週次數，中間使用1個半形空格分開`},examples:[{input:`B A B A B C D E F F`,output:`2 0`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天2次，6~10天0次`},{input:`C A B C D A B C D E`,output:`1 1`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天1次，6~10天1次`},{input:`A A A D C E F B B C`,output:`0 0`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天0次，6~10天0次`}],testCases:[{input:`C C C D E F B A B A`,expectedOutput:`0 1`,output:`0 1`,score:10,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`1 0`,output:`1 0`,score:15,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`0 0`,output:`0 0`,score:20,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`1 0`,output:`1 0`,score:25,hidden:!1},{input:`A B A B A B D D D D`,expectedOutput:`2 0`,output:`2 0`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-13-0`,title:`二數的最大公因數`,problemTitle:`二數的最大公因數`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入二個整數，請計算這二個數字的最大公因數`,inputDescription:`輸入2行
第一行輸入第1個整數N
第二行輸入地2個整數M
程式運算找出二數的最大公因數並輸出`,outputDescription:``,statement:{description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入二個整數，請計算這二個數字的最大公因數`,input:`輸入2行
第一行輸入第1個整數N
第二行輸入地2個整數M
程式運算找出二數的最大公因數並輸出`,output:``},examples:[{input:`9
6`,output:`3`,explanation:`第一行輸入9，
第二行輸入6，
程式輸出6、9二個數的最大公因數3`},{input:`30
72`,output:`6`,explanation:`第一行輸入30，
第二行輸入72
程式輸出30，72二個數的最大公因數6`}],testCases:[{input:`12
6`,expectedOutput:`6`,output:`6`,score:10,hidden:!1},{input:`34
52`,expectedOutput:`2`,output:`2`,score:10,hidden:!1},{input:`24
18`,expectedOutput:`6`,output:`6`,score:10,hidden:!1},{input:`1
8`,expectedOutput:`1`,output:`1`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`A-09-1`,title:`找因數`,problemTitle:`找因數`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`因數是指一個整數能被另一整數「整除」時，這個「除數」就是「被除數」的因數。

0不是任何整數的因數。1是所有整數的因數。

請寫一個程式，輸入一個整數 N，請找出N所有的因數。

所有因數以空白符號間格

這題訓練你使用條件與迴圈判斷。`,inputDescription:``,outputDescription:``,statement:{description:`因數是指一個整數能被另一整數「整除」時，這個「除數」就是「被除數」的因數。

0不是任何整數的因數。1是所有整數的因數。

請寫一個程式，輸入一個整數 N，請找出N所有的因數。

所有因數以空白符號間格

這題訓練你使用條件與迴圈判斷。`,input:``,output:``},examples:[{input:`12`,output:`1 2 3 4 6 12`,explanation:`第一行輸入12
程式輸出12所有因數1 2 3 4 6 12`},{input:`39`,output:`1 3 13 39`,explanation:`第一行輸入39
程式輸出39所有因數1 3 13 39`}],testCases:[{input:`56`,expectedOutput:`1 2 4 7 8 14 28 56`,output:`1 2 4 7 8 14 28 56`,score:10,hidden:!1},{input:`37`,expectedOutput:`1 37`,output:`1 37`,score:10,hidden:!1},{input:`78`,expectedOutput:`1 2 3 6 13 26 39 78`,output:`1 2 3 6 13 26 39 78`,score:10,hidden:!1},{input:`88`,expectedOutput:`1 2 4 8 11 22 44 88`,output:`1 2 4 8 11 22 44 88`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`115J-03`,title:`闖關遊戲`,problemTitle:`闖關遊戲`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`園遊會中有個闖關遊戲：有 12 個小房間依編號（1 到 12）順時鐘圍成一圈。

闖關時須依給定的條件正確進出不同的房間，若進入錯誤房間即闖關失敗。每個房間內有個螢幕會顯示一個介於 -3 到 +3 的數字。闖關遊戲有三組起始設定：A、B、C，每一組的房間（1號到12號）螢幕數字起始設定如下：

• A 組：+1, +2, +3, -1, -2, -3, +1, +2, +3, -3, -2, -1

• B 組：-2, -2, -3, -2, -2, -3, -2, -2, -3, -2, -2, -3

• C 組：+1, +2, -1, 0, +1, -2, +2, +1, -1, +2, -2, 0

【闖關遊戲進行方式】

1. 電腦會給定一組起始設定（A、B 或 C），並給定第一個進入的房間編號。

2. 若該房間螢幕數字是正值（+i），就要前往「順時針」方向的第 i 個房間；若為負值（-i），就要前往「逆時針」方向的第 i 個房間。

3. 終止條件：若進入的房間螢幕數字是 0，或者「已累計進入正確房間共 11 次」，則闖關成功，遊戲結束。

4. 狀態更新：每次離開一個房間後，該房間螢幕上的數字就會「正負交換」，也就是 +i 變 -i，或 -i 變 +i。

請寫一個程式，依序輸出闖關過程中所進入的房間編號，直到闖關成功。`,inputDescription:`• 輸入為單行，包含一個大寫英文字母（A、B 或 C）與一個整數 N（1 ≤ N ≤ 12），分別代表「起始設定組別」與「第一個進入的房間編號」，兩者以單一空白隔開。`,outputDescription:`• 請依序輸出進入的房間編號（包含第一個進入的房間），數字之間以單一空白隔開。`,statement:{description:`園遊會中有個闖關遊戲：有 12 個小房間依編號（1 到 12）順時鐘圍成一圈。

闖關時須依給定的條件正確進出不同的房間，若進入錯誤房間即闖關失敗。每個房間內有個螢幕會顯示一個介於 -3 到 +3 的數字。闖關遊戲有三組起始設定：A、B、C，每一組的房間（1號到12號）螢幕數字起始設定如下：

• A 組：+1, +2, +3, -1, -2, -3, +1, +2, +3, -3, -2, -1

• B 組：-2, -2, -3, -2, -2, -3, -2, -2, -3, -2, -2, -3

• C 組：+1, +2, -1, 0, +1, -2, +2, +1, -1, +2, -2, 0

【闖關遊戲進行方式】

1. 電腦會給定一組起始設定（A、B 或 C），並給定第一個進入的房間編號。

2. 若該房間螢幕數字是正值（+i），就要前往「順時針」方向的第 i 個房間；若為負值（-i），就要前往「逆時針」方向的第 i 個房間。

3. 終止條件：若進入的房間螢幕數字是 0，或者「已累計進入正確房間共 11 次」，則闖關成功，遊戲結束。

4. 狀態更新：每次離開一個房間後，該房間螢幕上的數字就會「正負交換」，也就是 +i 變 -i，或 -i 變 +i。

請寫一個程式，依序輸出闖關過程中所進入的房間編號，直到闖關成功。`,input:`• 輸入為單行，包含一個大寫英文字母（A、B 或 C）與一個整數 N（1 ≤ N ≤ 12），分別代表「起始設定組別」與「第一個進入的房間編號」，兩者以單一空白隔開。`,output:`• 請依序輸出進入的房間編號（包含第一個進入的房間），數字之間以單一空白隔開。`},examples:[{input:`A 2`,output:`2 4 3 6 3 12 11 9 12 1 2`,explanation:`2 號房數字為 +2，前往 4 號房（2 號房變為 -2）；
4 號房數字為 -1，前往 3 號房（4 號房變為 +1）；
依此類推，進入 11 個房間後達到終止條件，闖關成功。`},{input:`B 12`,output:`12 9 6 3 12 3 6 9 12 9 6`,explanation:`依據規則走訪。已累計進入房間共 11 次，達到終止條件，闖關成功。`},{input:`C 5`,output:`5 6 4`,explanation:`依序進入 5, 6, 4 三個房間。
進入 4 號房間時螢幕數字為 0，達到終止條件，闖關成功。`}],testCases:[{input:`A 2`,expectedOutput:`2 4 3 6 3 12 11 9 12 1 2`,output:`2 4 3 6 3 12 11 9 12 1 2`,score:10,hidden:!1},{input:`B 12`,expectedOutput:`12 9 6 3 12 3 6 9 12 9 6`,output:`12 9 6 3 12 3 6 9 12 9 6`,score:10,hidden:!1},{input:`C 5`,expectedOutput:`5 6 4`,output:`5 6 4`,score:10,hidden:!1},{input:`C 1`,expectedOutput:`1 2 4`,output:`1 2 4`,score:10,hidden:!1},{input:`A 1`,expectedOutput:`1 2 4 3 6 3 12 11 9 12 1`,output:`1 2 4 3 6 3 12 11 9 12 1`,score:10,hidden:!1},{input:`B 1`,expectedOutput:`1 11 9 6 3 12 9 12 3 6 9`,output:`1 11 9 6 3 12 9 12 3 6 9`,score:10,hidden:!1},{input:`C 7`,expectedOutput:`7 9 8 9 10 12`,output:`7 9 8 9 10 12`,score:10,hidden:!1},{input:`C 11`,expectedOutput:`11 9 8 9 10 12`,output:`11 9 8 9 10 12`,score:10,hidden:!1},{input:`A 6`,expectedOutput:`6 3 6 9 12 11 9 6 3 12 1`,output:`6 3 6 9 12 11 9 6 3 12 1`,score:10,hidden:!1},{input:`C 2`,expectedOutput:`2 4`,output:`2 4`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`模擬與狀態更新`],subConcepts:[`事件判斷`],algorithm:[`模擬`],dataStructure:[],syntax:[`if`,`迴圈`],math:[],context:[`情境模擬`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`SIM01-007`,title:`最高連勝次數`,problemTitle:`最高連勝次數`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`給定一串比賽結果，W 代表勝利，L 代表失敗。請計算最長連續勝利次數。`,inputDescription:``,outputDescription:``,statement:{description:`給定一串比賽結果，W 代表勝利，L 代表失敗。請計算最長連續勝利次數。`,input:``,output:``},examples:[{input:`WWLWWWLW`,output:`3`,explanation:`最長連續勝利為 WWW，共 3 次。`}],testCases:[{input:`WWLWWWLW`,output:`3`},{input:`LLLL`,output:`0`},{input:`WWWW`,output:`4`},{input:`WLWWLLWWW`,output:`3`}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`模擬與狀態`,`字串處理`,`最大最小值`],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`EXT01-006`,title:`第二高分`,problemTitle:`第二高分`,courseCode:`A20260721`,courseName:`20260721`,role:`challenge`,blocklyFit:`中`,description:`給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。`,inputDescription:``,outputDescription:``,statement:{description:`給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。`,input:``,output:``},examples:[{input:`6 70 95 80 95 60 88`,output:`95 88`,explanation:`最高分是 95，第二高的不同分數是 88。`}],testCases:[{input:`6 70 95 80 95 60 88`,output:`95 88`},{input:`5 100 90 80 70 60`,output:`100 90`},{input:`4 10 20 20 5`,output:`20 10`},{input:`7 -1 -5 -3 -1 -2 -8 -4`,output:`-1 -2`}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`最大最小值`,`清單處理`,`條件判斷`],subConcepts:[],algorithm:[],dataStructure:[],syntax:[],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};