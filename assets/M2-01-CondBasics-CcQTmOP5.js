var e={code:`M2-01-CondBasics`,title:`運算與條件判斷綜合練習：基礎`,type:`programming`,mode:`learning`,tier:`t2`,tasks:[{id:`JSB02-D01`,title:`通過門檻`,description:`老師設定一次測驗的通過門檻為 60 分。請輸入一個整數分數，如果分數大於或等於 60，輸出 Pass；否則不輸出任何文字。本題用來示範單一 if 條件成立時才執行輸出的流程。
輸入格式：
第一行：一個整數 S，代表測驗分數。
輸出格式：
若 S 大於或等於 60，輸出 Pass。
若 S 小於 60，不輸出。`,inputDescription:`第一行：一個整數 S，代表測驗分數。`,outputDescription:`若 S 大於或等於 60，輸出 Pass。

若 S 小於 60，不輸出。`,requiresGreenFlag:!0,examples:[{input:`75`,output:`Pass`,explanation:`75 大於等於 60，所以輸出 Pass。`},{input:`40`,output:``,explanation:`40 小於 60，所以不輸出任何文字。`}],testCases:[{input:`60`,expectedOutput:`Pass`,output:`Pass`,score:20},{input:`59`,expectedOutput:``,output:``,score:20},{input:`100`,expectedOutput:`Pass`,output:`Pass`,score:20},{input:`0`,expectedOutput:``,output:``,score:20},{input:`75`,expectedOutput:`Pass`,output:`Pass`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:``},{id:`JSB02-D02`,title:`優惠或原價`,description:`商店規定消費金額達到 100 元以上可以獲得優惠。請輸入消費金額，如果金額大於或等於 100，輸出 Discount；否則輸出 Normal。本題用來示範 if / else 的二選一流程。
輸入格式：
第一行：一個整數 M，代表消費金額。
輸出格式：
若 M 大於或等於 100，輸出 Discount。
否則輸出 Normal。`,inputDescription:`第一行：一個整數 M，代表消費金額。`,outputDescription:`若 M 大於或等於 100，輸出 Discount。

否則輸出 Normal。`,requiresGreenFlag:!0,examples:[{input:`120`,output:`Discount`,explanation:`120 達到優惠門檻。`},{input:`80`,output:`Normal`,explanation:`80 未達優惠門檻。`}],testCases:[{input:`100`,expectedOutput:`Discount`,output:`Discount`,score:20},{input:`99`,expectedOutput:`Normal`,output:`Normal`,score:20},{input:`250`,expectedOutput:`Discount`,output:`Discount`,score:20},{input:`1`,expectedOutput:`Normal`,output:`Normal`,score:20},{input:`150`,expectedOutput:`Discount`,output:`Discount`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:``},{id:`A-04-0`,title:`判斷奇偶數`,description:`程式設計中，常常需要根據數字的性質進行分類。

請你寫一個程式，輸入一個整數，如果這個數除以2的餘數為0，表示是偶數，輸出 Even，如果餘數是1，表示是奇數，輸出 Odd。

這樣的練習可以幫助你熟悉條件判斷的應用。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`8`,output:`Even`,explanation:`輸入8，8除以2餘數=0
程式輸出偶數Even`},{input:`7`,output:`Odd`,explanation:`輸入7，7除以2餘數=1
程式輸出奇數數Odd`}],testCases:[{input:`3`,expectedOutput:`Odd`,output:`Odd`,score:10},{input:`99`,expectedOutput:`Odd`,output:`Odd`,score:10},{input:`78`,expectedOutput:`Even`,output:`Even`,score:10},{input:`22`,expectedOutput:`Even`,output:`Even`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:``},{id:`JSB02-D03`,title:`成績等第示範`,description:`輸入一個整數成績，請依照分數輸出等第。90 分以上輸出 A，80 到 89 輸出 B，70 到 79 輸出 C，60 到 69 輸出 D，未滿 60 輸出 F。本題用來示範多條件判斷。
輸入格式：
第一行：一個整數 S，代表成績。
輸出格式：
輸出一個英文字母，代表成績等第。`,inputDescription:`第一行：一個整數 S，代表成績。`,outputDescription:`輸出一個英文字母，代表成績等第。`,requiresGreenFlag:!0,examples:[{input:`95`,output:`A`,explanation:`95 分屬於 A。`},{input:`72`,output:`C`,explanation:`72 分屬於 C。`}],testCases:[{input:`90`,expectedOutput:`A`,output:`A`,score:20},{input:`89`,expectedOutput:`B`,output:`B`,score:20},{input:`70`,expectedOutput:`C`,output:`C`,score:20},{input:`60`,expectedOutput:`D`,output:`D`,score:20},{input:`59`,expectedOutput:`F`,output:`F`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`A-04-1`,title:`成績等第`,description:`不少學校成績採用等弟制，80~100為A，70~79為B，60~69為C，50~59為D，其餘49分以下為E

請你寫一個程式，輸入一個整數(0~100)，輸出對應的成績等弟。

這樣的練習可以幫助你熟悉條件判斷的應用。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`90`,output:`A`,explanation:`輸入90，表示成績90
程式輸出A`},{input:`45`,output:`E`,explanation:`輸入45，表示成績45
程式輸出E`}],testCases:[{input:`69`,expectedOutput:`C`,output:`C`,score:10},{input:`99`,expectedOutput:`A`,output:`A`,score:10},{input:`78`,expectedOutput:`B`,output:`B`,score:10},{input:`55`,expectedOutput:`D`,output:`D`,score:10},{input:`12`,expectedOutput:`E`,output:`E`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`A-05-0`,title:`三科成績計算`,description:`小明參加了數學、英文、自然三科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。

請設計程式，輸入三科的成績，計算總分與平均。

平均成績以四捨五入取到整數

如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。

這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
80 70 90`,output:`240
80
及格`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料80 70 90，經過計算後
總分、平均、及格或不及格180 80 及格`},{input:`3
50 42 60`,output:`152
51
不及格`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料50 42 60，經過計算後
程式輸出總分、平均、及格或不及格152 51 不及格`}],testCases:[{input:`3
20 60 90`,expectedOutput:`170 57 不及格`,output:`170 57 不及格`,score:10},{input:`3
80 70 90`,expectedOutput:`240 80 及格`,output:`240 80 及格`,score:10},{input:`3
45 65 80`,expectedOutput:`190 63 及格`,output:`190 63 及格`,score:10},{input:`3
100 100 90`,expectedOutput:`290 97 及格`,output:`290 97 及格`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`A-05-1`,title:`購物優惠`,description:`大南百貨進行第二、第三件優惠活動，購買3件物品，第2件9折，第3件8折。

請設計程式，依序輸入三件物品的定價，計算三件物品合計售價，以及最後優惠多少元。

每件物品打折後價格以無條件捨去取整數

程式最後輸出 定價加總總額、售價加總總額、優惠多少元`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
80 70 90`,output:`240
215
25`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料80 70 90，經過計算後
第二筆70打9折再無條件捨去，共63元
第三筆90打8折再無條件捨去，共72元
程式輸出定價加總總額240元，售價加總總額215元，共優惠25元`},{input:`3
50 42 60`,output:`152
135
17`,explanation:`第一行輸入3,表示有3筆資料
第二行輸入3筆資料50 42 60，經過計算後
第二筆42打9折再無條件捨去，共37元
第三筆60打8折再無條件捨去，共48元
程式輸出定價加總總額240元，售價加總總額215元，共優惠25元`}],testCases:[{input:`3
60 65 1999`,expectedOutput:`2124 1717 407`,output:`2124 1717 407`,score:10},{input:`3
70 90 965`,expectedOutput:`1125  923 202`,output:`1125  923 202`,score:10},{input:`3
45 65 80`,expectedOutput:`190 167 23`,output:`190 167 23`,score:10},{input:`3
90 100 284`,expectedOutput:`474 407 67`,output:`474 407 67`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`nanto-001`,title:`遊樂園的自動售票機`,description:`遊樂園引進了一套自動售票機系統，用來快速計算團體遊客的門票總金額。
每位遊客依據「是否持有縣民卡」、「年齡」、「身高」等條件，適用不同的票價。
【收費規則（依下列順序判斷）】
1. 縣民卡免費：持有縣民卡者，門票為 0 元。
2. 敬老票：年齡大於等於 65 歲者，票價為 150 元。
3. 兒童票：身高小於 120 公分 或 年齡小於 6 歲者，票價為 180 元。
4. 全票：不符合以上條件者，票價為 300 元。
【輸入格式】
第一行輸入一個整數 N，代表遊客人數。
第二行輸入 3×N 個整數，每 3 個為一組，依序代表：
身高（公分）、年齡（歲）、縣民卡（1 表示有，0 表示無），資料間以空白分隔。
【輸出格式】
輸出一個整數，代表這一團遊客的門票總金額。`,inputDescription:`第一行輸入一個整數 N，代表遊客人數。

第二行輸入 3×N 個整數，每 3 個為一組，依序代表：

身高（公分）、年齡（歲）、縣民卡（1 表示有，0 表示無），資料間以空白分隔。`,outputDescription:`輸出一個整數，代表這一團遊客的門票總金額。`,requiresGreenFlag:!0,examples:[{input:`2
170 25 1 100 8 0`,output:`180`,explanation:`第一位：有縣民卡 → 0 元。
第二位：無卡，身高 100（小於120）→ 兒童票 180 元。
總計 180 元。`},{input:`3
180 30 0 160 70 0 110 5 1`,output:`450`,explanation:`第一位：全票 300 元。
第二位：敬老票 150 元。
第三位：有縣民卡 → 0 元。
總計 450 元。`}],testCases:[{input:`1
170 30 0`,expectedOutput:`300`,output:`300`,score:10},{input:`1
110 10 0`,expectedOutput:`180`,output:`180`,score:15},{input:`2
160 70 0 130 40 0`,expectedOutput:`450`,output:`450`,score:20},{input:`3
150 5 0 180 30 1 160 65 0`,expectedOutput:`330`,output:`330`,score:25},{input:`4
170 40 0 115 7 0 140 70 1 180 20 0`,expectedOutput:`780`,output:`780`,score:30}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`nanto-003`,title:`跳水比賽成績計算`,description:`跳水比賽為求公平性，會去除評審中較極端的成績。
比賽共聘用 5～10 位評審，每位評審會給予參賽者 0～10 分的評價。
參賽者的總成績計算方式如下：
1. 讀入 N 位評審的分數（未排序）。
2. 去除一個最高分與一個最低分。
3. 剩餘評審分數的總和即為該選手的最終得分。
請撰寫程式，依照輸入的評審分數，計算並輸出參賽者的最終成績。
輸入格式：
第一行輸入一個整數 N（5 ≤ N ≤ 10），代表評審人數。
第二行輸入 N 個整數（0～10），代表每位評審給的分數，資料間以空白隔開。
輸出格式：
輸出一個整數，代表去除最高分與最低分後的總成績。`,inputDescription:`第一行輸入一個整數 N（5 ≤ N ≤ 10），代表評審人數。

第二行輸入 N 個整數（0～10），代表每位評審給的分數，資料間以空白隔開。`,outputDescription:`輸出一個整數，代表去除最高分與最低分後的總成績。`,requiresGreenFlag:!0,examples:[{input:`5
9 8 10 6 7`,output:`24`,explanation:`評審分數為 9、8、10、6、7
去除最高分 10 與最低分 6
剩餘分數 9 + 8 + 7 = 24`}],testCases:[{input:`5
9 8 10 6 7`,expectedOutput:`24`,output:`24`,score:10},{input:`6
8 8 8 8 8 8`,expectedOutput:`32`,output:`32`,score:15},{input:`7
10 9 8 7 6 5 4`,expectedOutput:`35`,output:`35`,score:20},{input:`10
0 10 5 6 7 8 9 4 3 2`,expectedOutput:`44`,output:`44`,score:25},{input:`5
0 0 10 10 5`,expectedOutput:`15`,output:`15`,score:30}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`nanto-006-1`,title:`碼易丁飲料店-1`,description:`小明家的巷口開了一間名叫「碼易丁」的飲料店，販賣好喝的飲料。身為資訊科技高手的你，決定要寫幾個小程式來幫助小明解決店裡遇到的各種計算問題，從計算單筆訂單金額、找錢，到最後計算每天的營業額。讓我們一步一步跟著小明，用程式解決飲料店的經營問題吧！

請根據下列四個子題，逐步完成整個課飲料店程式系統的設計。

子題一：飲料總金額計算-逐筆輸入

客人上門了！首先，我們要解決最基本的問題：計算客人買了數杯飲料時，總共需要付多少錢。

飲料店販售5種飲料名稱、價格如後，請你設計一個程式，讀取各種飲料購買杯數後，計算出總金額。

1 號：珍珠奶茶（每杯 45 元）

2 號：伯爵紅茶（每杯 25 元）

3 號：烏龍綠茶（每杯 30 元）

4 號：四季春茶（每杯 40 元）

5 號：黑糖珍珠鮮奶茶（每杯 60 元）

第一行同學先輸入數字N，表示總共N杯飲料

第二行依序輸入想購買的飲料編號（1～5），編號以空白間隔

程式需計算並輸出此次訂單的總金額。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
1 3 5`,output:`135`,explanation:`第一行輸入3，有3筆訂單
第二行輸入1 3 5
1 → 珍珠奶茶 45 元
3 → 烏龍綠茶 30 元
5 → 黑糖珍珠鮮奶茶 60 元
總金額 = 45 + 30 + 60 = 135 元。`},{input:`5
2 2 4 1 3`,output:`165`,explanation:`第一行輸入5，有5筆訂單
2 → 伯爵紅茶 25 元
2 → 伯爵紅茶 25 元
4 → 四季春茶 40 元
1 → 珍珠奶茶 45 元
3 → 烏龍綠茶 30 元
總金額 = 25 + 25 + 40 + 45 + 30 = 165 元。`}],testCases:[{input:`3
1 3 5`,expectedOutput:`135`,output:`135`,score:10},{input:`5
2 2 4 1 3`,expectedOutput:`165`,output:`165`,score:15},{input:`4
5 5 5 5`,expectedOutput:`240`,output:`240`,score:20},{input:`1
1`,expectedOutput:`45`,output:`45`,score:25},{input:`10
2 2 2 2 2 1 1 1 1 1`,expectedOutput:`350`,output:`350`,score:30}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`nanto-006-2`,title:`碼易丁飲料店-2`,description:`子題二：付款與找零-批次輸入

前一個程式計算金額時，相同飲料也需要一杯一杯分別計價，請修改程式，讓程式可以依序輸入飲料編號及數量，以加快輸入及計算速度！計算總金額後，下一步再處理收錢和找錢的問題了。請你修改剛剛的程式，除輸入方式改變及計算總金額改變外，還要讀取客人支付的金額，並計算應該找給客人多少錢。如果客人付的錢不夠，也要提醒小明喔！

1 號：珍珠奶茶（每杯 45 元）

2 號：伯爵紅茶（每杯 25 元）

3 號：烏龍綠茶（每杯 30 元）

4 號：四季春茶（每杯 40 元）

5 號：黑糖珍珠鮮奶茶（每杯 60 元）

•輸入有三行，第一行輸入整數N，表示有N項飲料訂單要輸入

•第二行輸入2N個數字，依序代表飲料編號(1~5)與數量(1~20)，中間以空白間隔。

•第三行輸入數字M，代表客人支付金額

•輸出請依下列格式，數字間以一個空白隔開

•付款足夠：總金額X 應找錢Y

•付款不足：總金額X 付款不足Y`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`2
5 2 4 3
500`,output:`總金額240 應找錢260`,explanation:`第一行輸入2，代表有2項飲料訂單
第二行輸入5 2 4 3，表示有5號飲料購買2杯，4號飲料購買3杯，合計總金額420元
第三行輸入500，表示客人付款500元
程式運算後一行輸出：總金額420 應找錢80`},{input:`3
1 5 3 3 2 2
350`,output:`總金額365 付款不足15`,explanation:`第一行輸入3，代表有3項飲料訂單
第二行輸入1 5 3 3 2 2，表示有1號飲料購買5杯，3號飲料購買3杯，2號飲料購買2杯，合計總金額365元
第三行輸入350，表示客人付款350元
程式運算後一行輸出：總金額365 付款不足15`}],testCases:[{input:`2
5 2 4 3
500`,expectedOutput:`總金額240 應找錢260`,output:`總金額240 應找錢260`,score:10},{input:`3
1 3 2 2 4 1
300`,expectedOutput:`總金額225 應找錢75`,output:`總金額225 應找錢75`,score:15},{input:`1
1 5
200`,expectedOutput:`總金額225 付款不足25`,output:`總金額225 付款不足25`,score:20},{input:`2
1 2 3 1
100`,expectedOutput:`總金額120 付款不足20`,output:`總金額120 付款不足20`,score:25},{input:`4
1 5 2 4 3 3 5 2
600`,expectedOutput:`總金額535 應找錢65`,output:`總金額535 應找錢65`,score:30}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`WP-01`,title:`超商收銀`,description:`顧客到超商購物，收銀機會依序讀取購買的每樣商品價格。 最後顧客拿出一筆錢付款。
請你設計程式： 先計算所有商品的總金額。 如果付款金額大於或等於總金額，輸出應找的金額。
如果付款金額不足，輸出：付款金額不足
輸入格式
第一行：一個整數 N，代表購買的商品數量。
第二行：輸入 N 個整數，代表每樣商品的價格。
第三行：一個整數，代表付款金額。
輸出格式
如果付款金額足夠，輸出一個整數（應找的金額）。
如果不足，輸出 付款金額不足。`,inputDescription:`第一行：一個整數 N，代表購買的商品數量。

第二行：輸入 N 個整數，代表每樣商品的價格。

第三行：一個整數，代表付款金額。`,outputDescription:`如果付款金額足夠，輸出一個整數（應找的金額）。

如果不足，輸出 付款金額不足。`,requiresGreenFlag:!0,examples:[{input:`3
50 20 30
120`,output:`20`,explanation:`商品總金額 = 50 + 30 + 20 = 100
付款金額 = 120
足夠付款 → 應找錢 = 120 - 100 = 20`},{input:`2
40 35
60`,output:`付款金額不足`,explanation:`商品總金額 = 40 + 35 = 75
付款金額 = 60
不足以支付 → 輸出「付款金額不足」`}],testCases:[{input:`3
50 20 30
120`,expectedOutput:`20`,output:`20`,score:10},{input:`2
40 35
60`,expectedOutput:`付款金額不足`,output:`付款金額不足`,score:10},{input:`4
10 20 30 40
100`,expectedOutput:`0`,output:`0`,score:10},{input:`4
5 5 5 5
50`,expectedOutput:`30`,output:`30`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``}]};export{e as default};