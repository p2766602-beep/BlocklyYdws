var e={code:`TCELEMENT01`,title:`114-臺中市國小`,type:`programming`,mode:`contest`,description:`臺中市114學年度國小組資訊科技教育競賽題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-07T10:13:51.102Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-臺中市國小`,version:`manual-transcription-verified`},tasks:[{id:`tcelement-001`,title:`以禮相待`,problemTitle:`以禮相待`,courseCode:`TCELEMENT01`,courseName:`114-臺中市國小`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`蘇洵為避免兩個兒子蘇軾、蘇轍彼此對中發票吵架，於是訂定了他們家的規則：
(1) 對中發票後，假如中獎金額先補貼中獎發票的花費金額。
(2) 若還有盈餘（剩下），獎金由對中獎的人收下。
(3) 盈餘的金額假如大於 200，要對手足以禮相待，分享 100 元。
請輸出對中獎項的人可以拿到多少錢作為答案。`,inputDescription:`第一行輸入花費金額。
第二行輸入中獎金額。`,outputDescription:`若中獎金額扣除花費金額後沒有盈餘（小於等於 0），輸出「無盈餘」。
若有盈餘且盈餘大於 200，輸出「盈餘減 100 元」的金額，格式為「數字 元」。
若有盈餘但不大於 200，直接輸出盈餘金額，格式為「數字 元」。`,statement:{description:`蘇洵為避免兩個兒子蘇軾、蘇轍彼此對中發票吵架，於是訂定了他們家的規則：
(1) 對中發票後，假如中獎金額先補貼中獎發票的花費金額。
(2) 若還有盈餘（剩下），獎金由對中獎的人收下。
(3) 盈餘的金額假如大於 200，要對手足以禮相待，分享 100 元。
請輸出對中獎項的人可以拿到多少錢作為答案。`,input:`第一行輸入花費金額。
第二行輸入中獎金額。`,output:`若中獎金額扣除花費金額後沒有盈餘（小於等於 0），輸出「無盈餘」。
若有盈餘且盈餘大於 200，輸出「盈餘減 100 元」的金額，格式為「數字 元」。
若有盈餘但不大於 200，直接輸出盈餘金額，格式為「數字 元」。`},examples:[{input:`10
500`,output:`390 元`,explanation:`先扣除花費金額 500-10=490。因為盈餘 490 大於 200，所以以禮相待，490-100=390，故輸出 390 元。`},{input:`400
200`,output:`無盈餘`,explanation:`200-400=-200，沒有盈餘，故輸出無盈餘。`},{input:`100
200`,output:`100 元`,explanation:`先扣除花費金額 200-100=100。因為盈餘 100 小於 200，所以直接收下獎金 100 元。`}],testCases:[{input:`10
500`,expectedOutput:`390 元`,output:`390 元`,score:10,hidden:!1},{input:`400
200`,expectedOutput:`無盈餘`,output:`無盈餘`,score:10,hidden:!1},{input:`100
200`,expectedOutput:`100 元`,output:`100 元`,score:10,hidden:!1},{input:`50
250`,expectedOutput:`200 元`,output:`200 元`,score:10,hidden:!1},{input:`300
300`,expectedOutput:`無盈餘`,output:`無盈餘`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`單純的扣除、比較大小與條件分支，沒有迴圈或清單，適合作為基礎練習題。`,exportDecision:`Claude 依使用者提供的臺中市114學年度國小組資訊科技教育競賽PDF手動轉錄並驗證`},tags:{mainConcepts:[`條件判斷`],subConcepts:[`四則運算`],algorithm:[`模擬`],dataStructure:[`變數`],syntax:[`if`,`比較運算`,`四則運算`],math:[],context:[`生活情境`,`金錢計算`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`tcelement-002`,title:`統一發票`,problemTitle:`統一發票`,courseCode:`TCELEMENT01`,courseName:`114-臺中市國小`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`蘇家父子三人拿著統一發票滿懷期待的兌獎，兌獎的規則如下：
(1) 若發票號碼末 X 碼與頭獎號碼末 X 碼相同，即得對應獎項（末 8 碼＝頭獎、末 7 碼＝二獎、末 6 碼＝三獎、末 5 碼＝四獎、末 4 碼＝五獎、末 3 碼＝六獎）。若同時符合多個碼數，以碼數最長者為準。
(2) 若發票 8 碼與特獎或特別獎號碼完全相同，即得該獎項。
特別獎號碼：25834483。特獎號碼：46587380。頭獎號碼（三組）：41016094、98081574、07309261。
請輸出中獎情形。`,inputDescription:`輸入一組 8 碼發票號碼（字串）。`,outputDescription:`依比對結果輸出所中獎項：特別獎、特獎、頭獎、二獎、三獎、四獎、五獎、六獎，或「無中獎」。
若輸入不是 8 碼數字，輸出「非統一編號」。`,statement:{description:`蘇家父子三人拿著統一發票滿懷期待的兌獎，兌獎的規則如下：
(1) 若發票號碼末 X 碼與頭獎號碼末 X 碼相同，即得對應獎項（末 8 碼＝頭獎、末 7 碼＝二獎、末 6 碼＝三獎、末 5 碼＝四獎、末 4 碼＝五獎、末 3 碼＝六獎）。若同時符合多個碼數，以碼數最長者為準。
(2) 若發票 8 碼與特獎或特別獎號碼完全相同，即得該獎項。
特別獎號碼：25834483。特獎號碼：46587380。頭獎號碼（三組）：41016094、98081574、07309261。
請輸出中獎情形。`,input:`輸入一組 8 碼發票號碼（字串）。`,output:`依比對結果輸出所中獎項：特別獎、特獎、頭獎、二獎、三獎、四獎、五獎、六獎，或「無中獎」。
若輸入不是 8 碼數字，輸出「非統一編號」。`},examples:[{input:`47887495`,output:`無中獎`,explanation:`號碼末幾碼都沒有跟任何頭獎號碼相同。`},{input:`451232`,output:`非統一編號`,explanation:`輸入只有 6 碼，不符合 8 碼發票的規範。`},{input:`25834483`,output:`特別獎`,explanation:`與特別獎號碼完全相同。`}],testCases:[{input:`47887495`,expectedOutput:`無中獎`,output:`無中獎`,score:10,hidden:!1},{input:`451232`,expectedOutput:`非統一編號`,output:`非統一編號`,score:10,hidden:!1},{input:`25834483`,expectedOutput:`特別獎`,output:`特別獎`,score:10,hidden:!1},{input:`46587380`,expectedOutput:`特獎`,output:`特獎`,score:10,hidden:!1},{input:`41016094`,expectedOutput:`頭獎`,output:`頭獎`,score:10,hidden:!1},{input:`00007261`,expectedOutput:`六獎`,output:`六獎`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要處理字串長度檢查與末幾碼比對，並依比對到的最長碼數決定獎項，邏輯層次較多。`,exportDecision:`Claude 依使用者提供的臺中市114學年度國小組資訊科技教育競賽PDF手動轉錄並驗證`},tags:{mainConcepts:[`字串處理`],subConcepts:[`條件判斷`],algorithm:[`字串比對`],dataStructure:[`字串`],syntax:[`if`,`字串長度`,`取子字串`,`比較運算`],math:[],context:[`生活情境`,`統一發票`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`tcelement-003`,title:`閃電十一人`,problemTitle:`閃電十一人`,courseCode:`TCELEMENT01`,courseName:`114-臺中市國小`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`小明承辦了校際足球賽，需要一套自動計分與判定系統。每一場比賽只有兩隊，且只會發生兩種事情：進球 Goal、犯規 Foul。
規則：
進 1 球即得 1 分。
每犯規 3 次，該隊扣 1 分。
扣分不會讓分數低於 0 分。
事件代碼：GA＝A隊進球、GB＝B隊進球、FA＝A隊犯規、FB＝B隊犯規。
請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。`,inputDescription:`第一行輸入一個正整數 N，代表比賽中事件數量。
接下來輸入 N 行，每一行輸入一個事件代碼（GA、GB、FA、FB）。`,outputDescription:`依序輸出三行：A 隊最後得分、B 隊最後得分、比賽結果（A Win、B Win 或 Draw）。`,statement:{description:`小明承辦了校際足球賽，需要一套自動計分與判定系統。每一場比賽只有兩隊，且只會發生兩種事情：進球 Goal、犯規 Foul。
規則：
進 1 球即得 1 分。
每犯規 3 次，該隊扣 1 分。
扣分不會讓分數低於 0 分。
事件代碼：GA＝A隊進球、GB＝B隊進球、FA＝A隊犯規、FB＝B隊犯規。
請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。`,input:`第一行輸入一個正整數 N，代表比賽中事件數量。
接下來輸入 N 行，每一行輸入一個事件代碼（GA、GB、FA、FB）。`,output:`依序輸出三行：A 隊最後得分、B 隊最後得分、比賽結果（A Win、B Win 或 Draw）。`},examples:[{input:`7
GA
FA
GA
FB
FB
FB
GB`,output:`2
0
A Win`,explanation:`A 隊：2 球、1 次犯規 → 得 2 分。B 隊：1 球、3 次犯規 → 得 1-1=0 分。`},{input:`6
GA
GB
FA
FA
FA
GB`,output:`0
2
B Win`,explanation:`A 隊：1 球、3 次犯規 → 得 1-1=0 分。B 隊：2 球、0 次犯規 → 得 2 分。`},{input:`4
GA
GB
FA
FB`,output:`1
1
Draw`,explanation:`A 隊：1 球、1 次犯規 → 得 1 分。B 隊：1 球、1 次犯規 → 得 1 分。`}],testCases:[{input:`7
GA
FA
GA
FB
FB
FB
GB`,expectedOutput:`2
0
A Win`,output:`2
0
A Win`,score:10,hidden:!1},{input:`6
GA
GB
FA
FA
FA
GB`,expectedOutput:`0
2
B Win`,output:`0
2
B Win`,score:10,hidden:!1},{input:`4
GA
GB
FA
FB`,expectedOutput:`1
1
Draw`,output:`1
1
Draw`,score:10,hidden:!1},{input:`9
FA
FA
FA
FA
FA
FA
FA
FA
FA`,expectedOutput:`0
0
Draw`,output:`0
0
Draw`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要用迴圈逐行讀取事件、用變數累計兩隊得分與犯規次數，並用整數除法換算扣分，是基礎的模擬類型題。`,exportDecision:`Claude 依使用者提供的臺中市114學年度國小組資訊科技教育競賽PDF手動轉錄並驗證`},tags:{mainConcepts:[`模擬與狀態更新`],subConcepts:[`迴圈與累計`],algorithm:[`模擬`],dataStructure:[`變數`],syntax:[`for`,`if`,`字串比較`,`整數除法`],math:[],context:[`生活情境`,`球類比賽`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`tcelement-004`,title:`紅牌與黃牌`,problemTitle:`紅牌與黃牌`,courseCode:`TCELEMENT01`,courseName:`114-臺中市國小`,role:`contest`,difficulty:`L4`,blocklyFit:`高`,requiresGreenFlag:!0,description:`延續閃電十一人的基本規則（進球得分、每犯規 3 次扣 1 分、分數不低於 0），新增以下規則：
每犯規 2 次，該隊得 1 張黃牌。
同一隊累積 2 張黃牌，自動轉為 1 張紅牌。
一旦出現紅牌，該隊立刻再扣 1 分（紅牌只會影響一次，不會重複扣分）。
請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。`,inputDescription:`第一行輸入一個正整數 N，代表比賽中事件數量。
接下來輸入 N 行，每一行輸入一個事件代碼（GA、GB、FA、FB）。`,outputDescription:`依序輸出三行：A 隊最後得分、B 隊最後得分、比賽結果（A Win、B Win 或 Draw）。`,statement:{description:`延續閃電十一人的基本規則（進球得分、每犯規 3 次扣 1 分、分數不低於 0），新增以下規則：
每犯規 2 次，該隊得 1 張黃牌。
同一隊累積 2 張黃牌，自動轉為 1 張紅牌。
一旦出現紅牌，該隊立刻再扣 1 分（紅牌只會影響一次，不會重複扣分）。
請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。`,input:`第一行輸入一個正整數 N，代表比賽中事件數量。
接下來輸入 N 行，每一行輸入一個事件代碼（GA、GB、FA、FB）。`,output:`依序輸出三行：A 隊最後得分、B 隊最後得分、比賽結果（A Win、B Win 或 Draw）。`},examples:[{input:`6
GA
FA
FA
FA
FA
GB`,output:`0
1
B Win`,explanation:`A 隊：1 球 →+1；4 次犯規 → 扣 1 分；2 黃牌 → 1 紅牌 → 再扣 1 分；總分 1-1-1，扣到 0 為止。B 隊：1 球 → 1 分。`},{input:`5
GA
FA
FA
GB
FB`,output:`1
1
Draw`,explanation:`A 隊：1 球 →+1；2 次犯規 → 1 張黃牌（不扣分）；總分 1。B 隊：1 球 →+1；1 次犯規 → 無事發生；總分 1。`},{input:`8
GA
GA
FA
FA
FA
FA
GB
GB`,output:`0
2
B Win`,explanation:`A 隊：2 球 →+2；4 次犯規 → 扣 1 分；2 黃牌 → 1 紅牌 → 再扣 1 分；總分扣到 0 為止。B 隊：2 球 → 2 分、0 犯規。`}],testCases:[{input:`6
GA
FA
FA
FA
FA
GB`,expectedOutput:`0
1
B Win`,output:`0
1
B Win`,score:10,hidden:!1},{input:`5
GA
FA
FA
GB
FB`,expectedOutput:`1
1
Draw`,output:`1
1
Draw`,score:10,hidden:!1},{input:`8
GA
GA
FA
FA
FA
FA
GB
GB`,expectedOutput:`0
2
B Win`,output:`0
2
B Win`,score:10,hidden:!1},{input:`9
FA
FA
FA
FA
FA
FA
FA
FA
FA`,expectedOutput:`0
0
Draw`,output:`0
0
Draw`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`在上一題的基礎上疊加黃牌／紅牌規則，需要同時追蹤多個累計狀態並處理「只扣一次」的一次性條件，狀態管理複雜度較高。`,exportDecision:`Claude 依使用者提供的臺中市114學年度國小組資訊科技教育競賽PDF手動轉錄並驗證`},tags:{mainConcepts:[`模擬與狀態更新`],subConcepts:[`多重條件疊加`],algorithm:[`模擬`],dataStructure:[`變數`],syntax:[`for`,`if`,`字串比較`,`整數除法`],math:[],context:[`生活情境`,`球類比賽`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`tcelement-005`,title:`提前結束`,problemTitle:`提前結束`,courseCode:`TCELEMENT01`,courseName:`114-臺中市國小`,role:`contest`,difficulty:`L4`,blocklyFit:`高`,requiresGreenFlag:!0,description:`延續紅牌與黃牌的規則，新增以下規則：
任一隊出現 1 張紅牌，比賽立刻結束，後續事件全部忽略，輸出結果以「結束當下」為準。
請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。`,inputDescription:`第一行輸入一個正整數 N，代表比賽中事件數量。
接下來輸入 N 行，每一行輸入一個事件代碼（GA、GB、FA、FB）。`,outputDescription:`依序輸出三行：A 隊最後得分、B 隊最後得分、比賽結果（A Win、B Win 或 Draw）。`,statement:{description:`延續紅牌與黃牌的規則，新增以下規則：
任一隊出現 1 張紅牌，比賽立刻結束，後續事件全部忽略，輸出結果以「結束當下」為準。
請依序輸出 A 隊最後得分、B 隊最後得分、比賽結果（A Win / B Win / Draw）。`,input:`第一行輸入一個正整數 N，代表比賽中事件數量。
接下來輸入 N 行，每一行輸入一個事件代碼（GA、GB、FA、FB）。`,output:`依序輸出三行：A 隊最後得分、B 隊最後得分、比賽結果（A Win、B Win 或 Draw）。`},examples:[{input:`7
GA
FA
FA
FA
GB
FA
GB`,output:`0
1
B Win`,explanation:`第 6 個事件（FA）讓 A 隊出現紅牌，比賽立刻結束，最後一個 GB 不計。`},{input:`6
GB
FB
FB
FB
FB
GA`,output:`0
0
Draw`,explanation:`第 5 個事件（FB）讓 B 隊出現紅牌，比賽立刻結束，最後的 GA 不計。`},{input:`8
GA
GA
FA
FA
FA
FA
GB
GB`,output:`0
0
Draw`,explanation:`第 6 個事件（FA）讓 A 隊出現紅牌，比賽立刻結束，兩個 GB 都不計。`}],testCases:[{input:`7
GA
FA
FA
FA
GB
FA
GB`,expectedOutput:`0
1
B Win`,output:`0
1
B Win`,score:10,hidden:!1},{input:`6
GB
FB
FB
FB
FB
GA`,expectedOutput:`0
0
Draw`,output:`0
0
Draw`,score:10,hidden:!1},{input:`8
GA
GA
FA
FA
FA
FA
GB
GB`,expectedOutput:`0
0
Draw`,output:`0
0
Draw`,score:10,hidden:!1},{input:`5
GA
GB
FA
GB
GA`,expectedOutput:`2
2
Draw`,output:`2
2
Draw`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`延續紅牌與黃牌的規則，額外要求一旦出現紅牌就要中止讀取剩餘事件，需要在迴圈中正確判斷提前跳出的時機，是本次五題中邏輯最複雜的一題。`,exportDecision:`Claude 依使用者提供的臺中市114學年度國小組資訊科技教育競賽PDF手動轉錄並驗證`},tags:{mainConcepts:[`模擬與狀態更新`],subConcepts:[`提前結束的迴圈控制`],algorithm:[`模擬`],dataStructure:[`變數`],syntax:[`for`,`if`,`break`,`字串比較`,`整數除法`],math:[],context:[`生活情境`,`球類比賽`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};