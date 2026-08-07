var e={code:`114JTaichung`,title:`114-臺中市國中`,type:`programming`,mode:`learning`,description:`臺中市114學年度國中組資訊科技教育競賽題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-07T12:42:45.137Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-臺中市國中`,version:`manual-transcription-verified`},tasks:[{id:`114JTaichung-1`,title:`朱大哥精神`,problemTitle:`朱大哥精神`,courseCode:`114JTaichung`,courseName:`114-臺中市國中`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`及格且距離及格分數最近的人是最幸運的（即所有及格分數中最小者），不及格且距離及格分數最近的人是最倒楣的（即所有不及格分數中最大者）。及格分數設定為大於等於 65。請讀入班級人數與各學生成績，輸出最幸運與最倒楣的分數。若全班都不及格或全班都及格，則只輸出「幸運」或「倒楣」的一組結果。`,inputDescription:`第一行輸入學生人數（1~20 的整數）。
第二行輸入各學生分數（0~100 間整數）。`,outputDescription:`輸出 1 或 2 行：先輸出「幸運」及最接近及格的分數，再輸出「倒楣」及最接近不及格的分數（若該群不存在則不輸出該行）。`,statement:{description:`及格且距離及格分數最近的人是最幸運的（即所有及格分數中最小者），不及格且距離及格分數最近的人是最倒楣的（即所有不及格分數中最大者）。及格分數設定為大於等於 65。請讀入班級人數與各學生成績，輸出最幸運與最倒楣的分數。若全班都不及格或全班都及格，則只輸出「幸運」或「倒楣」的一組結果。`,input:`第一行輸入學生人數（1~20 的整數）。
第二行輸入各學生分數（0~100 間整數）。`,output:`輸出 1 或 2 行：先輸出「幸運」及最接近及格的分數，再輸出「倒楣」及最接近不及格的分數（若該群不存在則不輸出該行）。`},examples:[{input:`6
40 80 67 34 55 99`,output:`幸運 67
倒楣 55`,explanation:`及格分數[80,67,99]中最小者67最幸運；不及格分數[40,34,55]中最大者55最倒楣。`},{input:`2
34 1`,output:`倒楣 34`,explanation:`全班都不及格，只輸出倒楣。`}],testCases:[{input:`6
40 80 67 34 55 99`,expectedOutput:`幸運 67
倒楣 55`,output:`幸運 67
倒楣 55`,score:10,hidden:!1},{input:`2
34 1`,expectedOutput:`倒楣 34`,output:`倒楣 34`,score:10,hidden:!1},{input:`1
66`,expectedOutput:`幸運 66`,output:`幸運 66`,score:10,hidden:!1},{input:`3
65 64 90`,expectedOutput:`幸運 65
倒楣 64`,output:`幸運 65
倒楣 64`,score:10,hidden:!1},{input:`4
0 100 64 65`,expectedOutput:`幸運 65
倒楣 64`,output:`幸運 65
倒楣 64`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`在及格與不及格兩群中分別找出最接近65分的成績，是基礎的條件篩選與最大最小值應用題。`,exportDecision:`Claude 依使用者提供的114-臺中市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`條件篩選`],subConcepts:[`最大最小值`],algorithm:[`篩選`,`極值搜尋`],dataStructure:[`清單`],syntax:[`if`,`for`,`比較運算`],math:[],context:[`生活情境`,`成績統計`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JTaichung-2`,title:`池化`,problemTitle:`池化`,courseCode:`114JTaichung`,courseName:`114-臺中市國中`,role:`contest`,difficulty:`L4`,blocklyFit:`中`,requiresGreenFlag:!0,description:`給定一個 N×N 的二維陣列（N 為 2 的倍數，且不大於 8），請實作最大池化（max pooling）：把陣列切成一塊一塊 2×2 的不重疊區域，每塊選出裡面的最大值當成輸出。輸出池化後的結果，依照原矩陣由左至右、由上至下輸出。`,inputDescription:`第一行輸入一個正整數 N。
第二行依左到右、上到下的順序輸入 N×N 個整數。`,outputDescription:`輸出 N/2 行，每行 N/2 個整數（以空格分隔），依照各區域位置輸出最大值。`,statement:{description:`給定一個 N×N 的二維陣列（N 為 2 的倍數，且不大於 8），請實作最大池化（max pooling）：把陣列切成一塊一塊 2×2 的不重疊區域，每塊選出裡面的最大值當成輸出。輸出池化後的結果，依照原矩陣由左至右、由上至下輸出。`,input:`第一行輸入一個正整數 N。
第二行依左到右、上到下的順序輸入 N×N 個整數。`,output:`輸出 N/2 行，每行 N/2 個整數（以空格分隔），依照各區域位置輸出最大值。`},examples:[{input:`4
95 84 18 16 25 76 1 7 125687 99 24 16 120 14 8 0`,output:`95 18
125687 24`,explanation:`左上區塊[95,84,25,76]最大值95；右上區塊[18,16,1,7]最大值18；左下區塊[125687,99,120,14]最大值125687；右下區塊[24,16,8,0]最大值24。`}],testCases:[{input:`4
95 84 18 16 25 76 1 7 125687 99 24 16 120 14 8 0`,expectedOutput:`95 18
125687 24`,output:`95 18
125687 24`,score:10,hidden:!1},{input:`8
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61 62 63 64`,expectedOutput:`10 12 14 16
26 28 30 32
42 44 46 48
58 60 62 64`,output:`10 12 14 16
26 28 30 32
42 44 46 48
58 60 62 64`,score:10,hidden:!1},{input:`2
1 5 3 2`,expectedOutput:`5`,output:`5`,score:10,hidden:!1},{input:`4
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16`,expectedOutput:`6 8
14 16`,output:`6 8
14 16`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要把一維輸入還原成二維陣列，再對每個不重疊的2x2區塊取最大值，是二維陣列索引運算的進階題。`,exportDecision:`Claude 依使用者提供的114-臺中市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`二維陣列`],subConcepts:[`區塊最大值`],algorithm:[`矩陣運算`],dataStructure:[`二維清單`],syntax:[`for（巢狀）`,`索引運算`,`最大值`],math:[],context:[`資訊科技情境`,`卷積神經網路`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JTaichung-3`,title:`系統建置`,problemTitle:`系統建置`,courseCode:`114JTaichung`,courseName:`114-臺中市國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`書架上剩下 N 種書，各有種類代號（大寫字母）、數量、價格。請依照價格升冪排序輸出書名及數量，價格相同者維持原輸入順序（穩定排序）。`,inputDescription:`第一行輸入整數 N，代表書本的種類數。
第二行輸入 N 個大寫字母，代表書本的種類。
第三行輸入 N 個整數，代表書本的數量。
第四行輸入 N 個整數，代表書本的價格。`,outputDescription:`第一行輸出依價格升冪排序後的書本種類（以空格分隔）。
第二行輸出對應排序後的數量（以空格分隔）。`,statement:{description:`書架上剩下 N 種書，各有種類代號（大寫字母）、數量、價格。請依照價格升冪排序輸出書名及數量，價格相同者維持原輸入順序（穩定排序）。`,input:`第一行輸入整數 N，代表書本的種類數。
第二行輸入 N 個大寫字母，代表書本的種類。
第三行輸入 N 個整數，代表書本的數量。
第四行輸入 N 個整數，代表書本的價格。`,output:`第一行輸出依價格升冪排序後的書本種類（以空格分隔）。
第二行輸出對應排序後的數量（以空格分隔）。`},examples:[{input:`5
A B C D E
5 6 8 8 12
20 10 30 80 50`,output:`B A C E D
6 5 8 12 8`,explanation:`價格由低到高為10,20,30,50,80，對應種類B,A,C,E,D，數量依序輸出6 5 8 12 8。`}],testCases:[{input:`5
A B C D E
5 6 8 8 12
20 10 30 80 50`,expectedOutput:`B A C E D
6 5 8 12 8`,output:`B A C E D
6 5 8 12 8`,score:10,hidden:!1},{input:`6
A B C D E F
10 18 11 11 14 6
28 34 60 48 20 25`,expectedOutput:`E F A B D C
14 6 10 18 11 11`,output:`E F A B D C
14 6 10 18 11 11`,score:10,hidden:!1},{input:`4
A B C D
8 9 10 11
30 30 28 32`,expectedOutput:`C A B D
10 8 9 11`,output:`C A B D
10 8 9 11`,score:10,hidden:!1},{input:`3
X Y Z
7 3 9
15 15 5`,expectedOutput:`Z X Y
9 7 3`,output:`Z X Y
9 7 3`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依價格對書本種類與數量做穩定排序，需同步移動多個對應清單，是排序應用的進階練習。`,exportDecision:`Claude 依使用者提供的114-臺中市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`穩定排序`],subConcepts:[`多清單同步排序`],algorithm:[`排序`],dataStructure:[`清單`],syntax:[`排序`,`清單索引`],math:[],context:[`商店情境`,`書局系統`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JTaichung-4`,title:`價格折扣`,problemTitle:`價格折扣`,courseCode:`114JTaichung`,courseName:`114-臺中市國中`,role:`contest`,difficulty:`L5`,blocklyFit:`中`,requiresGreenFlag:!0,description:`書局現有 A、B、C、D、E、F 六種書，庫存分別為 8、10、6、4、5、9 本，價格分別為 40、45、30、35、55、60 元。打折規則：買超過3本整單打95折；同時買ABC或DE組合各額外打8折（可重複套用，優先套用）；若買超過5本整單改為打8折；折扣可疊加，最終價格無條件捨去至整數。若購買數量超過任一書種庫存，輸出「庫存不足」。`,inputDescription:`第一行輸入客人買了幾本書。
第二行輸入購買的書本種類（大寫字母，以空格分隔）。`,outputDescription:`輸出套用規則後的最低價格；若庫存不足則輸出「庫存不足」。`,statement:{description:`書局現有 A、B、C、D、E、F 六種書，庫存分別為 8、10、6、4、5、9 本，價格分別為 40、45、30、35、55、60 元。打折規則：買超過3本整單打95折；同時買ABC或DE組合各額外打8折（可重複套用，優先套用）；若買超過5本整單改為打8折；折扣可疊加，最終價格無條件捨去至整數。若購買數量超過任一書種庫存，輸出「庫存不足」。`,input:`第一行輸入客人買了幾本書。
第二行輸入購買的書本種類（大寫字母，以空格分隔）。`,output:`輸出套用規則後的最低價格；若庫存不足則輸出「庫存不足」。`},examples:[{input:`6
A B C D E F`,output:`179`,explanation:`ABC組合(40+45+30)×0.8=92，DE組合(35+55)×0.8=72，F原價60，小計224，超過5本再×0.8=179.2，捨去為179。`},{input:`7
C C C C C C C`,output:`庫存不足`,explanation:`C的庫存只有6本，購買7本超過庫存。`}],testCases:[{input:`6
A B C D E F`,expectedOutput:`179`,output:`179`,score:12,hidden:!1},{input:`4
A B C C`,expectedOutput:`115`,output:`115`,score:13,hidden:!1},{input:`7
C C C C C C C`,expectedOutput:`庫存不足`,output:`庫存不足`,score:12,hidden:!1},{input:`10
A A B B C C D D E E`,expectedOutput:`262`,output:`262`,score:13,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需先驗證庫存、統計組合套數（ABC/DE可重複套用）、再依總購買本數套用階層式整單折扣，規則層次多、易出錯，是本次題組中最複雜的一題。`,exportDecision:`Claude 依使用者提供的114-臺中市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`多重條件疊加`],subConcepts:[`字串計數與折扣計算`],algorithm:[`模擬`],dataStructure:[`字典計數（以多個變數模擬）`],syntax:[`if`,`for`,`四則運算`,`無條件捨去`],math:[],context:[`商店情境`,`書局折扣`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JTaichung-5`,title:`收銀台`,problemTitle:`收銀台`,courseCode:`114JTaichung`,courseName:`114-臺中市國中`,role:`contest`,difficulty:`L4`,blocklyFit:`中`,requiresGreenFlag:!0,description:`店裡暫時沒辦法兌換零錢，請根據顧客給的錢及購買價格，用最少的硬幣數找零。硬幣面額為 100、50、10、5、1 元，收銀檯內各面額的庫存數量會給定。若無需找零，輸出「不須找零」；若無法用現有庫存湊出所需金額，輸出「無法找零」；否則輸出使用的各面額硬幣數量（依 100、50、10、5、1 順序）。`,inputDescription:`第一行輸入書本價格。
第二行輸入付款金額。
第三行輸入零錢數量（依面額 100、50、10、5、1 元順序，共 5 個整數）。`,outputDescription:`輸出所需最少零錢數（5 個整數，依 100、50、10、5、1 順序），或輸出「不須找零」／「無法找零」。`,statement:{description:`店裡暫時沒辦法兌換零錢，請根據顧客給的錢及購買價格，用最少的硬幣數找零。硬幣面額為 100、50、10、5、1 元，收銀檯內各面額的庫存數量會給定。若無需找零，輸出「不須找零」；若無法用現有庫存湊出所需金額，輸出「無法找零」；否則輸出使用的各面額硬幣數量（依 100、50、10、5、1 順序）。`,input:`第一行輸入書本價格。
第二行輸入付款金額。
第三行輸入零錢數量（依面額 100、50、10、5、1 元順序，共 5 個整數）。`,output:`輸出所需最少零錢數（5 個整數，依 100、50、10、5、1 順序），或輸出「不須找零」／「無法找零」。`},examples:[{input:`179
500
3 3 5 5 18`,output:`3 0 2 0 1`,explanation:`需找零321元，用3個100、2個10、1個1元湊成321，共6枚硬幣，是可行方案中硬幣數最少者。`},{input:`220
220
3 3 5 5 18`,output:`不須找零`,explanation:`付款金額剛好等於價格，不需找零。`}],testCases:[{input:`179
500
3 3 5 5 18`,expectedOutput:`3 0 2 0 1`,output:`3 0 2 0 1`,score:10,hidden:!1},{input:`220
220
3 3 5 5 18`,expectedOutput:`不須找零`,output:`不須找零`,score:10,hidden:!1},{input:`262
1000
3 3 5 5 18`,expectedOutput:`無法找零`,output:`無法找零`,score:10,hidden:!1},{input:`241
300
5 0 6 0 8`,expectedOutput:`無法找零`,output:`無法找零`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需在硬幣庫存限制下用最少硬幣數找零，並判斷不須找零／無法找零，是貪心法搭配庫存限制的進階題。`,exportDecision:`Claude 依使用者提供的114-臺中市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`貪心法`],subConcepts:[`庫存限制下的最佳化`],algorithm:[`貪心法`],dataStructure:[`清單`],syntax:[`for`,`if`,`整數除法`,`餘數`],math:[],context:[`商店情境`,`找零`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};