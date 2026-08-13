var e={code:`114TCPJ04`,title:`114-新竹市國中（競賽模式）`,type:`programming`,mode:`contest`,description:`新竹市114學年度國中組資訊科技競賽練習題，涵蓋累進計費、字串驗證、排序與窮舉法，難度略高於國小組。`,tasks:[{id:`114TCPJ04-1`,title:`貨物重量計費`,problemTitle:`貨物重量計費`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`竹新貨運公司運送貨物的收費採用累進式計費方式：
0-10 公斤：每公斤 30 元
10-30 公斤：超過 10 公斤的部分，每公斤 25 元
30-50 公斤：超過 30 公斤的部分，每公斤 20 元
50 公斤以上：超過 50 公斤的部分，每公斤 15 元
請撰寫程式，輸入貨物重量，計算寄件總費用。`,inputDescription:`輸入為 1 行，包含 1 個數字 W，代表貨物重量（公斤，整數）。`,outputDescription:`輸出一個整數，代表寄件費用（單位：元）。`,statement:{description:`竹新貨運公司運送貨物的收費採用累進式計費方式：
0-10 公斤：每公斤 30 元
10-30 公斤：超過 10 公斤的部分，每公斤 25 元
30-50 公斤：超過 30 公斤的部分，每公斤 20 元
50 公斤以上：超過 50 公斤的部分，每公斤 15 元
請撰寫程式，輸入貨物重量，計算寄件總費用。`,input:`輸入為 1 行，包含 1 個數字 W，代表貨物重量（公斤，整數）。`,output:`輸出一個整數，代表寄件費用（單位：元）。`},examples:[{input:`6`,output:`180`,explanation:`未滿 10 公斤，每公斤 30 元。 6 * 30 = 180`},{input:`32`,output:`840`,explanation:`10 公斤部分每公斤 30 元，10-30 公斤部分 (共 20 公斤) 每公斤 25 元，多餘 2 公斤每公斤 20 元。 10*30 + 20*25 + 2*20 = 840`}],testCases:[{input:`6`,score:10,hidden:!1},{input:`32`,score:10,hidden:!1},{input:`10`,score:10,hidden:!1},{input:`11`,score:10,hidden:!1},{input:`30`,score:10,hidden:!1},{input:`31`,score:10,hidden:!1},{input:`50`,score:10,hidden:!1},{input:`51`,score:10,hidden:!1},{input:`100`,score:10,hidden:!1},{input:`0`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`累進費率計算，與嘉義縣國小「個人綜合所得稅試算」概念相同。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`條件判斷`],subConcepts:[`公式計算`],algorithm:[`級距判斷`],dataStructure:[`變數`],syntax:[`多層if`],math:[`累進費率`],context:[`生活情境`,`物流`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ04`,courseName:`114-新竹市國中（競賽模式）`},{id:`114TCPJ04-2`,title:`想去遊樂園`,problemTitle:`想去遊樂園`,role:`contest`,difficulty:`L4`,blocklyFit:`高`,requiresGreenFlag:!0,description:`大人國、七福村都推出假日優惠，小名一家人有各種年齡，請計算兩間遊樂園門票總價誰比較便宜。
大人國：
1. 祖孫樂：一位 65 歲以上長者可免費攜帶一位 6 歲以下兒童（每位長者限帶一位兒童）。
2. 票價：成人 (含 65 歲以上) 全票 599 元，半票 (12 歲以下) 299 元。
七福村：
1. 年齡為 7 的倍數者可免費入場（0 不算 7 的倍數）。
2. 票價：全票 499 元，半票 (9 歲以下) 299 元。
請撰寫程式，輸入所有同行者的年齡，分別計算大人國及七福村的總票價，並比較哪一間較便宜。`,inputDescription:`輸入為 2 行：
第 1 行為 1 個整數 N，代表同行人數。
第 2 行為 N 個以空白分隔的整數，代表每位同行者的年齡。`,outputDescription:`輸出一個字串及一個數字：
• 字串代表較便宜的遊樂園名稱（大人國、七福村，若價格相同，請輸出任一樂園名稱或處理邏輯上的優先者即可）。
• 數字代表需付多少元。
（以半形空格分隔字串與數字）`,statement:{description:`大人國、七福村都推出假日優惠，小名一家人有各種年齡，請計算兩間遊樂園門票總價誰比較便宜。
大人國：
1. 祖孫樂：一位 65 歲以上長者可免費攜帶一位 6 歲以下兒童（每位長者限帶一位兒童）。
2. 票價：成人 (含 65 歲以上) 全票 599 元，半票 (12 歲以下) 299 元。
七福村：
1. 年齡為 7 的倍數者可免費入場（0 不算 7 的倍數）。
2. 票價：全票 499 元，半票 (9 歲以下) 299 元。
請撰寫程式，輸入所有同行者的年齡，分別計算大人國及七福村的總票價，並比較哪一間較便宜。`,input:`輸入為 2 行：
第 1 行為 1 個整數 N，代表同行人數。
第 2 行為 N 個以空白分隔的整數，代表每位同行者的年齡。`,output:`輸出一個字串及一個數字：
• 字串代表較便宜的遊樂園名稱（大人國、七福村，若價格相同，請輸出任一樂園名稱或處理邏輯上的優先者即可）。
• 數字代表需付多少元。
（以半形空格分隔字串與數字）`},examples:[{input:`3
70 5 10`,output:`七福村 798`,explanation:`大人國：可使用祖孫樂可帶 5 歲兒童免費，票價為 599+299 = 898 元。 七福村：70 歲為 7 的倍數在七福村免費，票價為 299+499 = 798 元。 故七福村較便宜。`},{input:`4
10 12 65 5`,output:`大人國 1197`,explanation:`大人國：可使用祖孫樂可帶 5 歲兒童免費，10、12 歲皆為半票，票價為 599+299+299 = 1197 元。 七福村：沒有 7 的倍數，5 歲半票，票價為 499+299+499+499 = 1796 元。 故大人國較便宜。`}],testCases:[{input:`3
70 5 10`,score:10,hidden:!1},{input:`4
10 12 65 5`,score:10,hidden:!1},{input:`1
7`,score:10,hidden:!1},{input:`2
65 5`,score:10,hidden:!1},{input:`3
20 20 20`,score:10,hidden:!1},{input:`5
66 66 5 5 20`,score:10,hidden:!1},{input:`4
7 14 21 28`,score:10,hidden:!1},{input:`2
9 12`,score:10,hidden:!1},{input:`3
65 6 7`,score:10,hidden:!1},{input:`1
35`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`雙方案比價，需同時處理長者攜童免費與整數倍數免費兩種不同的優惠規則，是本次題組中規則最複雜的一題。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`條件判斷`],subConcepts:[`公式計算`],algorithm:[`多方案比較`],dataStructure:[`清單`],syntax:[`多層if`],math:[],context:[`生活情境`,`遊樂園`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ04`,courseName:`114-新竹市國中（競賽模式）`},{id:`114TCPJ04-3`,title:`我是神箭手`,problemTitle:`我是神箭手`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`真正的神箭手必須讀懂風，才能百發百中。輸入風速與離箭靶的距離，計算弓箭手應瞄準的位置。箭靶靶心位於直角座標 (0, 0) 公分。
箭會受到地心引力影響：
每離箭靶 8 公尺，箭就會比原本瞄準點往下掉落 1 公分 (未滿 8 公尺不計)。
箭會受到風力影響：
風速以正負數表示，其中正數代表往右吹、負數代表往左吹。
每離箭靶 10 公尺，箭會受到一次風力偏移，其偏移量即為「風速的數字」(往風吹的方向偏移，未滿 10 公尺不計)。
例如：風速為 3 → 每 10 公尺箭向右偏 3 公分；風速為 -2 → 每 10 公尺箭向左偏 2 公分。
請撰寫程式，根據風速與距離計算出弓箭手應瞄準的座標位置 (x, y)，以公分為單位，使箭最終能擊中靶心 (0, 0)。`,inputDescription:`輸入為 2 行：
第 1 行為風速 (正代表往右吹，負代表往左吹)。
第 2 行為距離 (單位：公尺)。`,outputDescription:`輸出兩個整數 x y，分別代表瞄準點的水平與垂直座標 (單位：公分)。`,statement:{description:`真正的神箭手必須讀懂風，才能百發百中。輸入風速與離箭靶的距離，計算弓箭手應瞄準的位置。箭靶靶心位於直角座標 (0, 0) 公分。
箭會受到地心引力影響：
每離箭靶 8 公尺，箭就會比原本瞄準點往下掉落 1 公分 (未滿 8 公尺不計)。
箭會受到風力影響：
風速以正負數表示，其中正數代表往右吹、負數代表往左吹。
每離箭靶 10 公尺，箭會受到一次風力偏移，其偏移量即為「風速的數字」(往風吹的方向偏移，未滿 10 公尺不計)。
例如：風速為 3 → 每 10 公尺箭向右偏 3 公分；風速為 -2 → 每 10 公尺箭向左偏 2 公分。
請撰寫程式，根據風速與距離計算出弓箭手應瞄準的座標位置 (x, y)，以公分為單位，使箭最終能擊中靶心 (0, 0)。`,input:`輸入為 2 行：
第 1 行為風速 (正代表往右吹，負代表往左吹)。
第 2 行為距離 (單位：公尺)。`,output:`輸出兩個整數 x y，分別代表瞄準點的水平與垂直座標 (單位：公分)。`},examples:[{input:`3
24`,output:`-6 3`,explanation:`風速 3 (往右吹)，距離 24 公尺：每 10 公尺右偏 3 公分，共 2 次 → 瞄左 6；每 8 公尺掉 1 公分，共 3 次 → 瞄上 3。瞄準點 (-6, 3)。`},{input:`5
40`,output:`-20 5`,explanation:`風速 5 (往右吹)，距離 40 公尺：每 10 公尺右偏 5 公分，共 4 次 → 瞄左 20；每 8 公尺掉 1 公分，共 5 次 → 瞄上 5。瞄準點 (-20, 5)。`}],testCases:[{input:`3
24`,score:10,hidden:!1},{input:`5
40`,score:10,hidden:!1},{input:`0
7`,score:10,hidden:!1},{input:`-2
24`,score:10,hidden:!1},{input:`10
80`,score:10,hidden:!1},{input:`-5
40`,score:10,hidden:!1},{input:`1
79`,score:10,hidden:!1},{input:`-10
9`,score:10,hidden:!1},{input:`100
100`,score:10,hidden:!1},{input:`-100
100`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依距離換算風力與重力偏移量，練習整數除法公式的實際應用。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`公式計算`],subConcepts:[`整數除法`],algorithm:[`公式換算`],dataStructure:[`變數`],syntax:[`無條件捨去`],math:[`整數除法`],context:[`遊戲情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ04`,courseName:`114-新竹市國中（競賽模式）`},{id:`114TCPJ04-4`,title:`會員入場統計`,problemTitle:`會員入場統計`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`巨堡商場購物中心的會員卡編號格式為：1 個英文字母 + 4 個數字 + 1 個檢查碼 (共 6 碼)。為了強化防偽辨識，系統會計算卡號的「總和值」，公式為：
(英文字母對應數字 + 4 個數字 + 檢查碼)。
合法卡號判定：若該總和值除以 10 的餘數為 0 或 1，則視為合法卡號。若不合法，該次入場不予計入。
請統計合法入場的會員中，哪一類別的人數最多。類別定義與對應數字如下：
1. 普通會員：字母為 A(11), B(13), C(15)。
2. 貴賓會員：字母為 V(17), I(19), P(21)。
3. 學生會員：字母為 S(23), T(25), U(27)。`,inputDescription:`輸入為 2 行：
• 第一行為一個整數 N，代表掃描的卡號總數。
• 第二行為 N 個字串 (每個 6 碼)，代表會員卡號，每個卡號以空格隔開。`,outputDescription:`輸出人數最多的會員類別名稱。若有多個類別的人數相同且並列最多，請依照「普通會員 貴賓會員 學生會員」的順序輸出，中間以空格隔開。若無人合法入場，可不輸出或依平台規範處理 (此處預設不會發生或輸出空字串)。`,statement:{description:`巨堡商場購物中心的會員卡編號格式為：1 個英文字母 + 4 個數字 + 1 個檢查碼 (共 6 碼)。為了強化防偽辨識，系統會計算卡號的「總和值」，公式為：
(英文字母對應數字 + 4 個數字 + 檢查碼)。
合法卡號判定：若該總和值除以 10 的餘數為 0 或 1，則視為合法卡號。若不合法，該次入場不予計入。
請統計合法入場的會員中，哪一類別的人數最多。類別定義與對應數字如下：
1. 普通會員：字母為 A(11), B(13), C(15)。
2. 貴賓會員：字母為 V(17), I(19), P(21)。
3. 學生會員：字母為 S(23), T(25), U(27)。`,input:`輸入為 2 行：
• 第一行為一個整數 N，代表掃描的卡號總數。
• 第二行為 N 個字串 (每個 6 碼)，代表會員卡號，每個卡號以空格隔開。`,output:`輸出人數最多的會員類別名稱。若有多個類別的人數相同且並列最多，請依照「普通會員 貴賓會員 學生會員」的順序輸出，中間以空格隔開。若無人合法入場，可不輸出或依平台規範處理 (此處預設不會發生或輸出空字串)。`},examples:[{input:`2
S11114 T00005`,output:`學生會員`,explanation:`S11114：總和：23(S)+1+1+1+1+4 = 31。31 ÷ 10 = 3 餘 1 (學生會員) T00007：總和：25(T)+0+0+0+0+7 = 32。32 ÷ 10 = 3 餘 2 (不合法) (註：範例輸入為 T00005，總和 30 餘 0，皆為學生會員)`},{input:`3
A12347 V00003 S11113`,output:`貴賓會員 學生會員`,explanation:`1. A12347：總和：11(A)+1+2+3+4+7 = 28。28 ÷ 10 = 2 餘 8 (不合法) 2. V00003：總和：17(V)+0+0+0+0+3 = 20。20 ÷ 10 = 2 餘 0 (貴賓會員) 3. S11113：總和：23(S)+1+1+1+1+3 = 30。30 ÷ 10 = 3 餘 0 (學生會員) 貴賓與學生會員人數相同。`}],testCases:[{input:`2
S11114 T00005`,score:10,hidden:!1},{input:`3
A12347 V00003 S11113`,score:10,hidden:!1},{input:`1
A00000`,score:10,hidden:!1},{input:`3
A00000 B00008 C00006`,score:10,hidden:!1},{input:`3
V00004 I00002 P00000`,score:10,hidden:!1},{input:`6
A00000 V00004 S00008 B00008 I00002 T00006`,score:10,hidden:!1},{input:`4
A11114 V11111 S11112 A00000`,score:10,hidden:!1},{input:`3
A12345 B12345 C12345`,score:10,hidden:!1},{input:`2
V00004 S00008`,score:10,hidden:!1},{input:`3
P00000 P00000 P00000`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`卡號合法性驗證(檢查碼)加上分類計數找最大值(可能多類別並列)，綜合字串解析與統計。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`檢查碼驗證`],algorithm:[`驗證+統計`],dataStructure:[`字串`],syntax:[`字元取出`],math:[`餘數`],context:[`生活情境`,`會員系統`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ04`,courseName:`114-新竹市國中（競賽模式）`},{id:`114TCPJ04-5`,title:`買五送一`,problemTitle:`買五送一`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`60 虹飲料店推出優惠活動：買五送一。
每購買 5 杯飲料，第 6 杯免費。
但免費的飲料並非固定，而是依照以下規則決定：
將所有飲料依價格由高排到低。
每滿 6 杯 (第 6、12、18...杯)，該杯為「免費」。
請撰寫程式，輸入所有飲料的價格 (依購買順序)，計算顧客應付的總金額。`,inputDescription:`輸入為 2 行：
• 第 1 行為 1 個整數 N，代表購買飲料杯數。
• 第 2 行為 N 個以空白分隔的整數，代表每一杯飲料的價錢。`,outputDescription:`輸出一個整數，代表飲料總價 (單位：元)。`,statement:{description:`60 虹飲料店推出優惠活動：買五送一。
每購買 5 杯飲料，第 6 杯免費。
但免費的飲料並非固定，而是依照以下規則決定：
將所有飲料依價格由高排到低。
每滿 6 杯 (第 6、12、18...杯)，該杯為「免費」。
請撰寫程式，輸入所有飲料的價格 (依購買順序)，計算顧客應付的總金額。`,input:`輸入為 2 行：
• 第 1 行為 1 個整數 N，代表購買飲料杯數。
• 第 2 行為 N 個以空白分隔的整數，代表每一杯飲料的價錢。`,output:`輸出一個整數，代表飲料總價 (單位：元)。`},examples:[{input:`6
80 70 60 50 40 30`,output:`300`,explanation:`剛好 6 杯，30 元那杯是贈送的。 總價 300 元。`},{input:`9
30 30 30 30 30 40 40 40 40`,output:`280`,explanation:`依價格排序，第 6 杯是 30 元，免費。 總價 280 元。`}],testCases:[{input:`6
80 70 60 50 40 30`,score:10,hidden:!1},{input:`9
30 30 30 30 30 40 40 40 40`,score:10,hidden:!1},{input:`5
10 20 30 40 50`,score:10,hidden:!1},{input:`12
10 10 10 10 10 10 10 10 10 10 10 10`,score:10,hidden:!1},{input:`7
100 100 100 100 100 100 10`,score:10,hidden:!1},{input:`1
55`,score:10,hidden:!1},{input:`13
100 90 80 70 60 50 40 30 20 10 5 5 5`,score:10,hidden:!1},{input:`6
100 100 100 100 100 100`,score:10,hidden:!1},{input:`11
5 5 5 5 5 5 5 5 5 5 5`,score:10,hidden:!1},{input:`18
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`排序後每6個位置免費一次，練習排序演算法與位置規則的結合。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`排序`],subConcepts:[`清單`],algorithm:[`泡泡排序`],dataStructure:[`清單`],syntax:[`清單交換`],math:[],context:[`生活情境`,`促銷`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ04`,courseName:`114-新竹市國中（競賽模式）`},{id:`114TCPJ04-6`,title:`歡樂抽獎`,problemTitle:`歡樂抽獎`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`期末段考結束後，小朋老師舉辦了一場同樂會。
每位同學會先抽出 1 顆紅球，紅球上寫有一個整數數字 (0~9)。
接著，同學可以從抽獎箱中抽出 3 顆白球，每顆白球上也各有一個整數數字 (0~9)。
同學必須「一定」要使用紅球，並可選擇使用 0~3 顆白球，將所選球上的數字相加，只要總和為 7 的倍數即可中獎 (0 也算 7 的倍數)。
中獎等級依照使用的白球數量判定：
• 不使用白球且紅球本身即為 7 的倍數：特獎
• 使用 1 顆白球：頭獎
• 使用 2 顆白球：二獎
• 使用 3 顆白球：三獎
• 若無法組成 7 的倍數：未中獎
請撰寫程式，判斷同學最終可獲得的獎項等級 (以使用白球數量最少為優先)。`,inputDescription:`輸入為 2 行：
• 第 1 行為 1 個整數 R，代表紅球上的數字。
• 第 2 行為 3 個以空白分隔的整數，代表三顆白球上的數字。`,outputDescription:`輸出一行文字，表示中獎結果，可能的輸出為：特獎、頭獎、二獎、三獎、未中獎。`,statement:{description:`期末段考結束後，小朋老師舉辦了一場同樂會。
每位同學會先抽出 1 顆紅球，紅球上寫有一個整數數字 (0~9)。
接著，同學可以從抽獎箱中抽出 3 顆白球，每顆白球上也各有一個整數數字 (0~9)。
同學必須「一定」要使用紅球，並可選擇使用 0~3 顆白球，將所選球上的數字相加，只要總和為 7 的倍數即可中獎 (0 也算 7 的倍數)。
中獎等級依照使用的白球數量判定：
• 不使用白球且紅球本身即為 7 的倍數：特獎
• 使用 1 顆白球：頭獎
• 使用 2 顆白球：二獎
• 使用 3 顆白球：三獎
• 若無法組成 7 的倍數：未中獎
請撰寫程式，判斷同學最終可獲得的獎項等級 (以使用白球數量最少為優先)。`,input:`輸入為 2 行：
• 第 1 行為 1 個整數 R，代表紅球上的數字。
• 第 2 行為 3 個以空白分隔的整數，代表三顆白球上的數字。`,output:`輸出一行文字，表示中獎結果，可能的輸出為：特獎、頭獎、二獎、三獎、未中獎。`},examples:[{input:`2
6 4 2`,output:`三獎`,explanation:`三顆球都使用 2+6+4+2=14 是 7 的倍數。`},{input:`8
3 2 5`,output:`未中獎`,explanation:`無論怎麼組合都無法湊成 7 的倍數。`}],testCases:[{input:`2
6 4 2`,score:10,hidden:!1},{input:`8
3 2 5`,score:10,hidden:!1},{input:`7
1 2 3`,score:10,hidden:!1},{input:`0
1 2 3`,score:10,hidden:!1},{input:`4
3 1 1`,score:10,hidden:!1},{input:`2
4 1 8`,score:10,hidden:!1},{input:`1
5 9 1`,score:10,hidden:!1},{input:`9
9 9 9`,score:10,hidden:!1},{input:`1
1 1 4`,score:10,hidden:!1},{input:`5
1 1 2`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需依序嘗試0~3顆白球的所有組合找最少使用數量，窮舉法的分層檢查應用。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`窮舉`],subConcepts:[`條件判斷`],algorithm:[`窮舉法`],dataStructure:[`變數`],syntax:[`多層if`],math:[`餘數`],context:[`遊戲情境`,`抽獎`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ04`,courseName:`114-新竹市國中（競賽模式）`}],source:{convertedFrom:`114JHsinchu`,convertedAt:`2026-08-13T00:39:19.876Z`,note:`競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。`}};export{e as default};