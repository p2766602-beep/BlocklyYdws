var e={code:`114ENantou`,title:`114-南投縣國小`,type:`programming`,mode:`learning`,description:`南投縣114學年度科技教育創意實作競賽-國小資訊科技組題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-07T14:15:54.883Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-南投縣國小`,version:`manual-transcription-verified`},tasks:[{id:`114ENantou-1`,title:`遊樂園的自動售票機`,problemTitle:`遊樂園的自動售票機`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`遊樂園自動售票機依下列規則（依序判斷，符合就停止）計算每位遊客的票價：持有縣民卡者免費（0元）；年齡65歲以上者150元；身高低於120公分或年齡低於6歲者180元；其餘300元。請計算 N 位遊客的總票價。`,inputDescription:`第一行輸入遊客人數 N。
第二行依序輸入每位遊客的「身高 年齡 縣民卡(1或0)」，共 3N 個整數。`,outputDescription:`輸出所有遊客的票價總和。`,statement:{description:`遊樂園自動售票機依下列規則（依序判斷，符合就停止）計算每位遊客的票價：持有縣民卡者免費（0元）；年齡65歲以上者150元；身高低於120公分或年齡低於6歲者180元；其餘300元。請計算 N 位遊客的總票價。`,input:`第一行輸入遊客人數 N。
第二行依序輸入每位遊客的「身高 年齡 縣民卡(1或0)」，共 3N 個整數。`,output:`輸出所有遊客的票價總和。`},examples:[{input:`2
170 25 1 100 8 0`,output:`180`,explanation:`第1人持縣民卡免費(0)；第2人身高100<120故180元；總計180元。`},{input:`3
180 30 0 160 70 0 110 5 1`,output:`450`,explanation:`3人分別300+150+0=450元。`}],testCases:[{input:`2
170 25 1 100 8 0`,expectedOutput:`180`,output:`180`,score:14,hidden:!1},{input:`3
180 30 0 160 70 0 110 5 1`,expectedOutput:`450`,output:`450`,score:14,hidden:!1},{input:`1
170 30 0`,expectedOutput:`300`,output:`300`,score:14,hidden:!1},{input:`1
110 10 0`,expectedOutput:`180`,output:`180`,score:14,hidden:!1},{input:`2
160 70 0 130 40 0`,expectedOutput:`450`,output:`450`,score:14,hidden:!1},{input:`3
150 5 0 180 30 1 160 65 0`,expectedOutput:`330`,output:`330`,score:14,hidden:!1},{input:`4
170 40 0 115 7 0 140 70 1 180 20 0`,expectedOutput:`780`,output:`780`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依序判斷多個票價規則並累加總金額，練習條件分支的優先順序。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`條件篩選`],subConcepts:[`票價計算`],algorithm:[`條件篩選`,`累加`],dataStructure:[`清單`],syntax:[`for`,`if-elif-else`],math:[],context:[`生活情境`,`遊樂園`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-2`,title:`勇者的挑戰`,problemTitle:`勇者的挑戰`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`勇者初始血量為上限值 H。依序經歷 N 個事件（每個事件是血量增減值），血量不可超過上限 H，也不可低於 0。若血量降到 0 或以下，視為陣亡，之後的事件不再發生，直接輸出 0。請輸出所有事件結束後（或陣亡時）的血量。`,inputDescription:`第一行輸入血量上限 H。
第二行輸入事件數量 N。
第三行輸入 N 個血量增減值（可為負數）。`,outputDescription:`輸出最終血量。`,statement:{description:`勇者初始血量為上限值 H。依序經歷 N 個事件（每個事件是血量增減值），血量不可超過上限 H，也不可低於 0。若血量降到 0 或以下，視為陣亡，之後的事件不再發生，直接輸出 0。請輸出所有事件結束後（或陣亡時）的血量。`,input:`第一行輸入血量上限 H。
第二行輸入事件數量 N。
第三行輸入 N 個血量增減值（可為負數）。`,output:`輸出最終血量。`},examples:[{input:`100
4
-30 50 -10 -5`,output:`85`,explanation:`100-30=70,+50=100(不超過上限)封頂,-10=90,-5=85，最終85。`},{input:`50
3
-60 20 -10`,output:`0`,explanation:`50-60=-10≤0，陣亡，輸出0。`}],testCases:[{input:`100
4
-30 50 -10 -5`,expectedOutput:`85`,output:`85`,score:14,hidden:!1},{input:`50
3
-60 20 -10`,expectedOutput:`0`,output:`0`,score:14,hidden:!1},{input:`100
1
-20`,expectedOutput:`80`,output:`80`,score:14,hidden:!1},{input:`100
2
-30 80`,expectedOutput:`100`,output:`100`,score:14,hidden:!1},{input:`50
3
-60 200 -10`,expectedOutput:`0`,output:`0`,score:14,hidden:!1},{input:`120
4
-30 -50 -50 200`,expectedOutput:`0`,output:`0`,score:14,hidden:!1},{input:`77
6
-20 10 10 -35 20 15`,expectedOutput:`77`,output:`77`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依序處理事件並限制數值在上下限之間，血量歸零即提前結束，練習迴圈中斷與邊界處理。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`模擬`],subConcepts:[`上下限限制`],algorithm:[`模擬`],dataStructure:[`清單`],syntax:[`for`,`if`,`break`],math:[],context:[`奇幻情境`,`角色扮演`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-3`,title:`跳水比賽成績計算`,problemTitle:`跳水比賽成績計算`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`跳水比賽由 N 位評審（5~10人）評分，計分方式為去除一個最高分與一個最低分後，將剩餘分數加總。請輸出最終得分。`,inputDescription:`第一行輸入評審人數 N。
第二行輸入 N 個評分。`,outputDescription:`輸出去除一個最高分與一個最低分後的總分。`,statement:{description:`跳水比賽由 N 位評審（5~10人）評分，計分方式為去除一個最高分與一個最低分後，將剩餘分數加總。請輸出最終得分。`,input:`第一行輸入評審人數 N。
第二行輸入 N 個評分。`,output:`輸出去除一個最高分與一個最低分後的總分。`},examples:[{input:`5
9 8 10 6 7`,output:`24`,explanation:`去除最高10與最低6，剩9+8+7=24。`},{input:`6
8 8 8 8 8 8`,output:`32`,explanation:`6個8去除一個最高一個最低(皆為8)，剩4個8=32。`}],testCases:[{input:`5
9 8 10 6 7`,expectedOutput:`24`,output:`24`,score:20,hidden:!1},{input:`6
8 8 8 8 8 8`,expectedOutput:`32`,output:`32`,score:20,hidden:!1},{input:`7
10 9 8 7 6 5 4`,expectedOutput:`35`,output:`35`,score:20,hidden:!1},{input:`10
0 10 5 6 7 8 9 4 3 2`,expectedOutput:`44`,output:`44`,score:20,hidden:!1},{input:`5
0 0 10 10 5`,expectedOutput:`15`,output:`15`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`去除一個最高分與一個最低分（各一次，非全部同分都去除）後加總，練習極值搜尋與排除。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`極值處理`],subConcepts:[`去除最大最小`],algorithm:[`極值搜尋`,`加總`],dataStructure:[`清單`],syntax:[`排序或最大最小值`,`加總`],math:[],context:[`運動情境`,`跳水比賽`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-4`,title:`籃球機得分計算`,problemTitle:`籃球機得分計算`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`籃球機分為 1P 與 2P 兩位玩家，各自投籃 N 次（0表示未進，1表示進球）。每次進球得1分，但若「連續兩次都進球」，則該次改記3分。請分別計算兩人總分，並輸出「1P總分 2P總分 勝者」；若總分相同，勝者欄輸出「不分勝負」。`,inputDescription:`第一行輸入投籃次數 N。
第二行輸入 1P 的 N 次投籃結果（0或1）。
第三行輸入 2P 的 N 次投籃結果（0或1）。`,outputDescription:`輸出「1P總分 2P總分 勝者」，勝者為 1P、2P 或不分勝負。`,statement:{description:`籃球機分為 1P 與 2P 兩位玩家，各自投籃 N 次（0表示未進，1表示進球）。每次進球得1分，但若「連續兩次都進球」，則該次改記3分。請分別計算兩人總分，並輸出「1P總分 2P總分 勝者」；若總分相同，勝者欄輸出「不分勝負」。`,input:`第一行輸入投籃次數 N。
第二行輸入 1P 的 N 次投籃結果（0或1）。
第三行輸入 2P 的 N 次投籃結果（0或1）。`,output:`輸出「1P總分 2P總分 勝者」，勝者為 1P、2P 或不分勝負。`},examples:[{input:`5
1 0 1 1 0
0 1 1 1 1`,output:`5 10 2P`,explanation:`1P:[1,0,1,1,0]→1+1+3=5分；2P:[0,1,1,1,1]→1+3+3+3=10分，2P勝。`},{input:`5
0 1 0 1 0
0 0 0 0 0`,output:`2 0 1P`,explanation:`2P全未進得0分，1P得2分，1P勝。`}],testCases:[{input:`5
1 0 1 1 0
0 1 1 1 1`,expectedOutput:`5 10 2P`,output:`5 10 2P`,score:17,hidden:!1},{input:`5
0 1 0 1 0
0 0 0 0 0`,expectedOutput:`2 0 1P`,output:`2 0 1P`,score:17,hidden:!1},{input:`6
1 1 1 0 1 0
0 1 1 1 1 0`,expectedOutput:`8 10 2P`,output:`8 10 2P`,score:17,hidden:!1},{input:`9
0 1 0 1 0 1 0 1 0
0 0 0 0 0 0 0 0 0`,expectedOutput:`4 0 1P`,output:`4 0 1P`,score:17,hidden:!1},{input:`8
1 1 0 1 1 0 1 1
1 1 1 0 1 1 1 0`,expectedOutput:`12 14 2P`,output:`12 14 2P`,score:17,hidden:!1},{input:`7
1 1 0 1 1 0 1
1 1 0 1 1 0 1`,expectedOutput:`9 9 不分勝負`,output:`9 9 不分勝負`,score:17,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要記住前一次是否命中以決定本次得分（連續命中得3分），是狀態追蹤的入門題。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`連續事件判斷`],subConcepts:[`連續命中加成`],algorithm:[`狀態追蹤`],dataStructure:[`清單`],syntax:[`for`,`if`,`布林變數`],math:[],context:[`生活情境`,`投籃機台`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-5`,title:`玩具收納運送計算`,problemTitle:`玩具收納運送計算`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`要將 N 件玩具依序裝進容量 20 公斤的收納箱。依序嘗試把玩具放入「目前正在使用」的箱子，若加入後總重量超過20公斤，則將目前的箱子封箱，改用一個新箱子裝這件玩具。請輸出總共用了幾個箱子。`,inputDescription:`第一行輸入玩具數量 N。
第二行輸入 N 個玩具重量。`,outputDescription:`輸出總共使用的箱子數量。`,statement:{description:`要將 N 件玩具依序裝進容量 20 公斤的收納箱。依序嘗試把玩具放入「目前正在使用」的箱子，若加入後總重量超過20公斤，則將目前的箱子封箱，改用一個新箱子裝這件玩具。請輸出總共用了幾個箱子。`,input:`第一行輸入玩具數量 N。
第二行輸入 N 個玩具重量。`,output:`輸出總共使用的箱子數量。`},examples:[{input:`5
8 9 6 3 4`,output:`2`,explanation:`8+9=17,+6=23>20故換箱；新箱3+4=7。共2箱。`},{input:`1
20`,output:`1`,explanation:`20剛好裝滿一箱，共1箱。`}],testCases:[{input:`5
8 9 6 3 4`,expectedOutput:`2`,output:`2`,score:17,hidden:!1},{input:`1
20`,expectedOutput:`1`,output:`1`,score:17,hidden:!1},{input:`4
5 5 5 5`,expectedOutput:`1`,output:`1`,score:17,hidden:!1},{input:`5
9 9 9 9 9`,expectedOutput:`3`,output:`3`,score:17,hidden:!1},{input:`6
12 3 4 6 5 2`,expectedOutput:`2`,output:`2`,score:17,hidden:!1},{input:`8
2 2 2 2 2 2 2 2`,expectedOutput:`1`,output:`1`,score:17,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依序將玩具放入目前使用的箱子，超過容量20公斤就封箱換新箱，練習累加與條件判斷的裝箱模擬。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`貪心裝箱`],subConcepts:[`循序裝箱`],algorithm:[`模擬裝箱`],dataStructure:[`清單`],syntax:[`for`,`if`,`累加`],math:[],context:[`生活情境`,`玩具收納`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-6`,title:`碼易丁飲料店：逐筆結帳`,problemTitle:`碼易丁飲料店：逐筆結帳`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`碼易丁飲料店的飲料價目：1號45元、2號25元、3號30元、4號40元、5號60元。依序輸入 N 筆訂單（每筆為一個飲料編號），請計算總金額。`,inputDescription:`第一行輸入訂單筆數 N。
第二行輸入 N 個飲料編號（1~5）。`,outputDescription:`輸出總金額。`,statement:{description:`碼易丁飲料店的飲料價目：1號45元、2號25元、3號30元、4號40元、5號60元。依序輸入 N 筆訂單（每筆為一個飲料編號），請計算總金額。`,input:`第一行輸入訂單筆數 N。
第二行輸入 N 個飲料編號（1~5）。`,output:`輸出總金額。`},examples:[{input:`3
1 3 5`,output:`135`,explanation:`1號45+3號30+5號60=135元。`},{input:`5
2 2 4 1 3`,output:`165`,explanation:`2號25×2+4號40+1號45+3號30=165元。`}],testCases:[{input:`3
1 3 5`,expectedOutput:`135`,output:`135`,score:20,hidden:!1},{input:`5
2 2 4 1 3`,expectedOutput:`165`,output:`165`,score:20,hidden:!1},{input:`4
5 5 5 5`,expectedOutput:`240`,output:`240`,score:20,hidden:!1},{input:`1
1`,expectedOutput:`45`,output:`45`,score:20,hidden:!1},{input:`10
2 2 2 2 2 1 1 1 1 1`,expectedOutput:`350`,output:`350`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依編號查詢價目表並累加總金額，是最基礎的查表計算題。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`對照表查詢`],subConcepts:[`價目計算`],algorithm:[`查表計算`],dataStructure:[`對照表`],syntax:[`for`,`查表`],math:[],context:[`生活情境`,`飲料店`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-7`,title:`碼易丁飲料店：批次結帳與找零`,problemTitle:`碼易丁飲料店：批次結帳與找零`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`同樣的飲料價目表（1號45元、2號25元、3號30元、4號40元、5號60元）。這次以 N 筆「編號 數量」批次輸入訂單，並在最後一行輸入實際付款金額。請計算總金額；若付款足夠，輸出「總金額 X 應找錢 Y」；若不足，輸出「總金額 X 付款不足 Y」。`,inputDescription:`第一行輸入訂單種類數 N。
第二行輸入 N 組「編號 數量」，共 2N 個整數。
第三行輸入付款金額。`,outputDescription:`輸出「總金額 X 應找錢 Y」或「總金額 X 付款不足 Y」。`,statement:{description:`同樣的飲料價目表（1號45元、2號25元、3號30元、4號40元、5號60元）。這次以 N 筆「編號 數量」批次輸入訂單，並在最後一行輸入實際付款金額。請計算總金額；若付款足夠，輸出「總金額 X 應找錢 Y」；若不足，輸出「總金額 X 付款不足 Y」。`,input:`第一行輸入訂單種類數 N。
第二行輸入 N 組「編號 數量」，共 2N 個整數。
第三行輸入付款金額。`,output:`輸出「總金額 X 應找錢 Y」或「總金額 X 付款不足 Y」。`},examples:[{input:`3
1 5 3 3 2 2
350`,output:`總金額 365 付款不足 15`,explanation:`1號×5=225,3號×3=90,2號×2=50,總金額365,付款350不足15。`},{input:`2
5 2 4 3
500`,output:`總金額 240 應找錢 260`,explanation:`5號×2=120,4號×3=120,總金額240,付款500應找260。`}],testCases:[{input:`3
1 5 3 3 2 2
350`,expectedOutput:`總金額 365 付款不足 15`,output:`總金額 365 付款不足 15`,score:17,hidden:!1},{input:`2
5 2 4 3
500`,expectedOutput:`總金額 240 應找錢 260`,output:`總金額 240 應找錢 260`,score:17,hidden:!1},{input:`3
1 3 2 2 4 1
300`,expectedOutput:`總金額 225 應找錢 75`,output:`總金額 225 應找錢 75`,score:17,hidden:!1},{input:`1
1 5
200`,expectedOutput:`總金額 225 付款不足 25`,output:`總金額 225 付款不足 25`,score:17,hidden:!1},{input:`2
1 2 3 1
100`,expectedOutput:`總金額 120 付款不足 20`,output:`總金額 120 付款不足 20`,score:17,hidden:!1},{input:`4
1 5 2 4 3 3 5 2
600`,expectedOutput:`總金額 535 應找錢 65`,output:`總金額 535 應找錢 65`,score:17,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`批次輸入「編號 數量」並計算總金額，再與付款金額比較是否足夠找零，練習查表加總與條件判斷。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`對照表查詢`],subConcepts:[`價目計算`],algorithm:[`查表計算`],dataStructure:[`對照表`],syntax:[`for`,`查表`],math:[],context:[`生活情境`,`飲料店`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-8`,title:`碼易丁飲料店：最少硬幣找零`,problemTitle:`碼易丁飲料店：最少硬幣找零`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`碼易丁飲料店使用 50 元、10 元、5 元、1 元四種硬幣找零，店員希望用最少的硬幣數量找零。請輸入應找零金額（0~999），輸出各面額所需的硬幣數量（依 50、10、5、1 的順序）。`,inputDescription:`輸入一個應找零金額（0~999的整數）。`,outputDescription:`輸出4個整數，分別是50元、10元、5元、1元硬幣的數量（以空格分隔）。`,statement:{description:`碼易丁飲料店使用 50 元、10 元、5 元、1 元四種硬幣找零，店員希望用最少的硬幣數量找零。請輸入應找零金額（0~999），輸出各面額所需的硬幣數量（依 50、10、5、1 的順序）。`,input:`輸入一個應找零金額（0~999的整數）。`,output:`輸出4個整數，分別是50元、10元、5元、1元硬幣的數量（以空格分隔）。`},examples:[{input:`88`,output:`1 3 1 3`,explanation:`88=50×1+10×3+5×1+1×3。`},{input:`124`,output:`2 2 0 4`,explanation:`124=50×2+10×2+5×0+1×4。`}],testCases:[{input:`88`,expectedOutput:`1 3 1 3`,output:`1 3 1 3`,score:14,hidden:!1},{input:`124`,expectedOutput:`2 2 0 4`,output:`2 2 0 4`,score:14,hidden:!1},{input:`7`,expectedOutput:`0 0 1 2`,output:`0 0 1 2`,score:14,hidden:!1},{input:`100`,expectedOutput:`2 0 0 0`,output:`2 0 0 0`,score:14,hidden:!1},{input:`388`,expectedOutput:`7 3 1 3`,output:`7 3 1 3`,score:14,hidden:!1},{input:`999`,expectedOutput:`19 4 1 4`,output:`19 4 1 4`,score:14,hidden:!1},{input:`0`,expectedOutput:`0 0 0 0`,output:`0 0 0 0`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`用50/10/5/1由大到小的貪心策略計算最少硬幣數量，是經典的找零問題。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`貪心演算法`],subConcepts:[`硬幣找零`],algorithm:[`貪心找零`],dataStructure:[`無`],syntax:[`整數除法`,`餘數`],math:[],context:[`生活情境`,`飲料店`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114ENantou-9`,title:`碼易丁飲料店：每日銷售結算`,problemTitle:`碼易丁飲料店：每日銷售結算`,courseCode:`114ENantou`,courseName:`114-南投縣國小`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`碼易丁飲料店共有 K 種飲料，各自有每杯利潤。依序輸入 N 筆訂單（每筆為「編號 杯數」），請統計每種飲料的銷售杯數，以及當日總利潤。`,inputDescription:`第一行輸入飲料種類數 K（3~10）。
第二行輸入 K 個飲料的每杯利潤。
第三行輸入訂單筆數 N。
第四行輸入 N 組「編號 杯數」，共 2N 個整數。`,outputDescription:`輸出 K 個飲料各自的銷售杯數，最後輸出總利潤（共 K+1 個數字，以空格分隔）。`,statement:{description:`碼易丁飲料店共有 K 種飲料，各自有每杯利潤。依序輸入 N 筆訂單（每筆為「編號 杯數」），請統計每種飲料的銷售杯數，以及當日總利潤。`,input:`第一行輸入飲料種類數 K（3~10）。
第二行輸入 K 個飲料的每杯利潤。
第三行輸入訂單筆數 N。
第四行輸入 N 組「編號 杯數」，共 2N 個整數。`,output:`輸出 K 個飲料各自的銷售杯數，最後輸出總利潤（共 K+1 個數字，以空格分隔）。`},examples:[{input:`5
15 10 15 20 25
3
5 5 2 2 2 10`,output:`0 12 0 0 5 245`,explanation:`5號賣12杯,2號賣2杯,5號另賣10杯共12杯，利潤2×10+12×25=245。`},{input:`3
10 20 30
1
2 5`,output:`0 5 0 100`,explanation:`3號賣5杯，利潤5×20=100。`}],testCases:[{input:`5
15 10 15 20 25
3
5 5 2 2 2 10`,expectedOutput:`0 12 0 0 5 245`,output:`0 12 0 0 5 245`,score:17,hidden:!1},{input:`3
10 20 30
1
2 5`,expectedOutput:`0 5 0 100`,output:`0 5 0 100`,score:17,hidden:!1},{input:`4
5 10 15 20
3
1 2 2 3 4 1`,expectedOutput:`2 3 0 1 60`,output:`2 3 0 1 60`,score:17,hidden:!1},{input:`5
15 10 15 20 25
4
1 2 3 3 5 2 1 1`,expectedOutput:`3 0 3 0 2 140`,output:`3 0 3 0 2 140`,score:17,hidden:!1},{input:`6
8 12 20 15 10 25
6
6 2 2 5 4 3 6 1 2 2 1 4`,expectedOutput:`4 7 0 3 0 3 236`,output:`4 7 0 3 0 3 236`,score:17,hidden:!1},{input:`10
5 6 7 8 9 10 11 12 13 14
10
1 1 2 2 3 3 4 4 5 5 6 1 7 2 8 1 9 2 10 3`,expectedOutput:`1 2 3 4 5 1 2 1 2 3 227`,output:`1 2 3 4 5 1 2 1 2 3 227`,score:17,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要同時累計每種飲料的銷售杯數與總利潤，練習用清單分別累加多個對應項目。`,exportDecision:`Claude 依使用者提供的114-南投縣國小PDF手動轉錄並驗證`},tags:{mainConcepts:[`對照表查詢`],subConcepts:[`多品項統計`],algorithm:[`查表計算`,`分項累加`],dataStructure:[`清單`],syntax:[`for`,`索引運算`,`累加`],math:[],context:[`生活情境`,`飲料店`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};