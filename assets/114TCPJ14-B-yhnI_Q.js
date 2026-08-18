var e={code:`114TCPJ14`,title:`114-基隆市國中（競賽模式）`,type:`programming`,mode:`contest`,description:`114-基隆市國中114學年度科技教育創意實作競賽題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-13T09:14:56.822Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-基隆市國中`,version:`manual-transcription-verified`,convertedFrom:`114JKeelung`,convertedAt:`2026-08-13T09:14:56.822Z`,note:`競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。`},tasks:[{id:`114TCPJ14-1`,title:`1-尋找第 K個訊號字母(易)`,problemTitle:`1-尋找第 K個訊號字母(易)`,courseCode:`114TCPJ14`,courseName:`114-基隆市國中（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`在通訊工程中，為了過濾掉重複的雜訊，我們需要找出一段訊號中「不同字母」出現的順序。現在給你一個由大寫英文字母組成的字串S，以及一個正整數k，請找出該字串中第k個出現的不同字母。
【規則說明】
1. 由左往右掃描字串。
2. 忽略所有已經出現過的字母(不論是連續出現還是間隔出現，都不重複計算)。
3. 輸出第k個新出現的字母。
【輸入格式】
1. 第一行輸入一個大寫英文字母字串S。
2. 第二行輸入一個正整數k。
3. 保證字串中不同字母的數量至少有k個。
【輸出格式】
輸出一個大寫字母，代表第k個出現的不同字母。`,inputDescription:``,outputDescription:``,statement:{description:`在通訊工程中，為了過濾掉重複的雜訊，我們需要找出一段訊號中「不同字母」出現的順序。現在給你一個由大寫英文字母組成的字串S，以及一個正整數k，請找出該字串中第k個出現的不同字母。
【規則說明】
1. 由左往右掃描字串。
2. 忽略所有已經出現過的字母(不論是連續出現還是間隔出現，都不重複計算)。
3. 輸出第k個新出現的字母。
【輸入格式】
1. 第一行輸入一個大寫英文字母字串S。
2. 第二行輸入一個正整數k。
3. 保證字串中不同字母的數量至少有k個。
【輸出格式】
輸出一個大寫字母，代表第k個出現的不同字母。`,input:``,output:``},examples:[{input:`KEELUNG
3`,output:`L`,explanation:`範例解析(連續重複案例)：
字串掃描：K, E, (E重複), L, U, N, G
不同字母順序為：1.K, 2.E, 3.L, 4.U, 5.N, 6.G。
第3個不同字母為L。`},{input:`GOOGLE
4`,output:`E`,explanation:`範例解析(非連續重複案例)：
字串掃描：G, O, (O重複), (G重複), L, E。
說明：第二個G雖然與第一個G中間隔著O，但仍視為重複。
不同字母順序為：1.G, 2.O, 3.L, 4.E。
第4個不同字母為E。`}],starterXml:``,testCases:[{input:`KEELUNG
3`,score:10},{input:`GOOGLE
4`,score:10},{input:`INTERNATIONAL
5`,score:10},{input:`PETERPIPERPICKED
6`,score:10},{input:`MISSISSIPPI
4`,score:10},{input:`ALPHABET
1`,score:10},{input:`SUCCESSFULNESS
5`,score:10},{input:`BANANABOAT
2`,score:10},{input:`ZYZYZYXYZ
3`,score:10},{input:`COMMUNICATION
8`,score:10}]},{id:`114TCPJ14-2`,title:`2-到底是誰沒來?(易)`,problemTitle:`2-到底是誰沒來?(易)`,courseCode:`114TCPJ14`,courseName:`114-基隆市國中（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`最近流感大爆發，今天全校有很多同學缺席。請寫一個程式，根據出席清單，找出缺席的座號。
【輸入格式】
第一行輸入一個正整數N，N的範圍從1到30，代表全班總人數。
第二行輸入一個正整數K，K不大於N，代表出席人數。
第三行輸入若干個正整數，代表有出席同學的座號，以一個半形空白字元間隔。
注意：出席的座號不一定會照座號大小順序輸入。
【輸出格式】
依照座號從小到大，輸出缺席的座號，每個座號之間以一個半形空白字元間隔。
如果全班都到了，請輸出「全勤」。`,inputDescription:``,outputDescription:``,statement:{description:`最近流感大爆發，今天全校有很多同學缺席。請寫一個程式，根據出席清單，找出缺席的座號。
【輸入格式】
第一行輸入一個正整數N，N的範圍從1到30，代表全班總人數。
第二行輸入一個正整數K，K不大於N，代表出席人數。
第三行輸入若干個正整數，代表有出席同學的座號，以一個半形空白字元間隔。
注意：出席的座號不一定會照座號大小順序輸入。
【輸出格式】
依照座號從小到大，輸出缺席的座號，每個座號之間以一個半形空白字元間隔。
如果全班都到了，請輸出「全勤」。`,input:``,output:``},examples:[{input:`3
3
1 2 3`,output:`全勤`,explanation:`基本輸入與全勤邏輯。`},{input:`7
5
5 2 4 1 3`,output:`6 7`,explanation:`測試是否能處理亂序輸入。`},{input:`10
9
1 2 3 4 5 6 7 8 9`,output:`10`,explanation:`缺席人數少，且缺席的是最大號碼。`}],starterXml:``,testCases:[{input:`3
3
1 2 3`,score:10},{input:`7
5
5 2 4 1 3`,score:10},{input:`10
9
1 2 3 4 5 6 7 8 9`,score:10},{input:`4
1
2`,score:10},{input:`15
9
13 15 3 8 1 12 5 10 14`,score:10},{input:`5
1
5`,score:10},{input:`30
30
1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30`,score:10},{input:`5
4
2 3 4 5`,score:10},{input:`5
4
1 2 4 5`,score:10},{input:`20
10
1 3 5 7 9 11 13 15 17 19`,score:10}]},{id:`114TCPJ14-3`,title:`3-終極特務的動態密碼(中)`,problemTitle:`3-終極特務的動態密碼(中)`,courseCode:`114TCPJ14`,courseName:`114-基隆市國中（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`敵方為了防止暗號被輕易破解，開發了一種「動態位移系統」。你是特務組織的首席解碼專家，發現這組暗號的還原規則如下：
第1個字母要往前推移1格，例如第1個字母為c，往前推移1格的字母為b。
第2個字母要往前推移2格，例如第2個字母為f，往前推移2格的字母為d。
....以此類推，第i個字母要往前推移i格。
同樣地，如果往前推移超過了a，必須繞回到z繼續計算。請寫一個程式，幫忙將這串動態加密的暗號還原成原本的訊息。
【輸入格式】
第一行：輸入一個由英文小寫字母組成的字串，代表敵方的動態暗號(長度小於100)。
【輸出格式】
第一行：輸出還原後的原本訊息。`,inputDescription:``,outputDescription:``,statement:{description:`敵方為了防止暗號被輕易破解，開發了一種「動態位移系統」。你是特務組織的首席解碼專家，發現這組暗號的還原規則如下：
第1個字母要往前推移1格，例如第1個字母為c，往前推移1格的字母為b。
第2個字母要往前推移2格，例如第2個字母為f，往前推移2格的字母為d。
....以此類推，第i個字母要往前推移i格。
同樣地，如果往前推移超過了a，必須繞回到z繼續計算。請寫一個程式，幫忙將這串動態加密的暗號還原成原本的訊息。
【輸入格式】
第一行：輸入一個由英文小寫字母組成的字串，代表敵方的動態暗號(長度小於100)。
【輸出格式】
第一行：輸出還原後的原本訊息。`,input:``,output:``},examples:[{input:`swq`,output:`run`,explanation:`s 往前 1 格為 r
w 往前 2 格為 u
q 往前 3 格為 n`},{input:`fzlx`,output:`exit`,explanation:`f 往前 1 格為 e
z 往前 2 格為 x
l 往前 3 格為 i
x 往前 4 格為 t`}],starterXml:``,testCases:[{input:`b`,score:10},{input:`uqs`,score:10},{input:`ay`,score:10},{input:`jtrr`,score:10},{input:`qtrkwgturxr`,score:10},{input:`brspj`,score:10},{input:`agus`,score:10},{input:`qawltt`,score:10},{input:`dcw`,score:10},{input:`uclaft`,score:10}]},{id:`114TCPJ14-4`,title:`4-優質橘子裝箱策略(中)`,problemTitle:`4-優質橘子裝箱策略(中)`,courseCode:`114TCPJ14`,courseName:`114-基隆市國中（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`果農阿北將橘子依照品質分為「優級」、「良級」與「普級」。為了確保收益最大化，阿北制定了一套裝箱規則。
裝箱規則：
1. 固定裝箱：每箱必須湊滿固定數量N顆才能出貨計價。未滿N顆不計價。
2. 降級遞補：高品質的橘子如果湊不滿一箱，可以「降級」混入低一階的箱子中湊數。優級剩餘的可撥入良級；良級剩餘的(含接收自優級的)可撥入普級。
3. 計價規則：有裝成箱才計價，優級每箱Pa元、良級每箱Pb元、普級每箱Pc元。
【輸入格式】
1. 第一個輸入：四個整數 Qa Qb Qc N (分別代表優級、良級、普級顆數與每箱容量)。
2. 第二個輸入：三個整數 Pa Pb Pc (分別代表優級、良級、普級單箱價格)。
【輸出格式】
輸出一個整數，代表最終總收入。`,inputDescription:``,outputDescription:``,statement:{description:`果農阿北將橘子依照品質分為「優級」、「良級」與「普級」。為了確保收益最大化，阿北制定了一套裝箱規則。
裝箱規則：
1. 固定裝箱：每箱必須湊滿固定數量N顆才能出貨計價。未滿N顆不計價。
2. 降級遞補：高品質的橘子如果湊不滿一箱，可以「降級」混入低一階的箱子中湊數。優級剩餘的可撥入良級；良級剩餘的(含接收自優級的)可撥入普級。
3. 計價規則：有裝成箱才計價，優級每箱Pa元、良級每箱Pb元、普級每箱Pc元。
【輸入格式】
1. 第一個輸入：四個整數 Qa Qb Qc N (分別代表優級、良級、普級顆數與每箱容量)。
2. 第二個輸入：三個整數 Pa Pb Pc (分別代表優級、良級、普級單箱價格)。
【輸出格式】
輸出一個整數，代表最終總收入。`,input:``,output:``},examples:[{input:`45 10 15 20
1000 600 300`,output:`2300`,explanation:`範例解析：
• 優級(45顆)：裝滿2箱(40顆)，剩5顆。收入：2*1000=2000。
• 良級(10+5顆)：原本10顆加上優級剩的5顆共15顆，未滿20顆，剩15顆。收入：0。
• 普級(15+15顆)：原本15顆加上良級剩的15顆共30顆，裝滿1箱(20顆)，剩10顆。收入：1*300=300。
總收入：2300`}],starterXml:``,testCases:[{input:`45 10 15 20
1000 600 300`,score:10},{input:`10 10 10 20
500 300 100`,score:10},{input:`60 60 60 20
100 50 10`,score:10},{input:`19 19 19 20
1000 500 100`,score:10},{input:`100 0 0 30
1000 500 100`,score:10},{input:`10 20 30 10
100 50 10`,score:10},{input:`50 50 50 100
1000 500 100`,score:10},{input:`1 1 3 5
100 50 10`,score:10},{input:`100 100 100 1
10 5 1`,score:10},{input:`20 20 20 20
1000 500 100`,score:10}]},{id:`114TCPJ14-5`,title:`5-同樂會飲料訂單統計(難)`,problemTitle:`5-同樂會飲料訂單統計(難)`,courseCode:`114TCPJ14`,courseName:`114-基隆市國中（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`期末同樂會需要寫一個程式把各組的訂購單彙整起來。同學會輸入想喝的「飲料名稱」與「杯數」，請你統計每一種飲料總共要幾杯。
【輸入格式】
第一行輸入一個整數，代表共有N筆訂購資料。
第二行輸入N組資料，每組包含「飲料名稱」與「杯數」，中間以一個半形空白字元間隔。
【輸出格式】
依照飲料第一次出現的順序，輸出「飲料名稱 總杯數」，中間以一個半形空白字元間隔。
每種飲料中間以一個半形空白字元間隔。`,inputDescription:``,outputDescription:``,statement:{description:`期末同樂會需要寫一個程式把各組的訂購單彙整起來。同學會輸入想喝的「飲料名稱」與「杯數」，請你統計每一種飲料總共要幾杯。
【輸入格式】
第一行輸入一個整數，代表共有N筆訂購資料。
第二行輸入N組資料，每組包含「飲料名稱」與「杯數」，中間以一個半形空白字元間隔。
【輸出格式】
依照飲料第一次出現的順序，輸出「飲料名稱 總杯數」，中間以一個半形空白字元間隔。
每種飲料中間以一個半形空白字元間隔。`,input:``,output:``},examples:[{input:`3
珍珠奶茶 2 綠茶 5 珍珠奶茶 3`,output:`珍珠奶茶 5 綠茶 5`,explanation:`珍珠奶茶出現兩次，數量相加為 5。綠茶出現一次，數量為 5。依照出現順序輸出。`},{input:`5
可樂 10 雪碧 5 可樂 2 紅茶 8 雪碧 3`,output:`可樂 12 雪碧 8 紅茶 8`,explanation:`相同飲料的數量正確相加，且依第一次出現的順序輸出。`}],starterXml:``,testCases:[{input:`1
可樂 5`,score:10},{input:`3
紅茶 2 綠茶 1 奶茶 4`,score:10},{input:`2
多多綠 5 多多綠 5`,score:10},{input:`5
黑糖檸檬 2 仙草凍奶茶 10 綠豆沙加牛奶 5 黑糖檸檬 3 仙草凍奶茶 2`,score:10},{input:`6
可樂 10 雪碧 5 可樂 2 紅茶 8 雪碧 3 紅茶 1`,score:10},{input:`4
綠茶 2 綠茶 2 綠茶 2 綠茶 2`,score:10},{input:`3
礦泉水 10 礦泉水 10 冰塊 5`,score:10},{input:`2
A 1 B 1`,score:10},{input:`6
梅子綠 3 珍奶 1 梅子綠 2 拿鐵 5 珍奶 4 拿鐵 1`,score:10},{input:`5
拿鐵 10 美式 5 拿鐵 5 焦糖瑪奇朵 2 美式 10`,score:10}]},{id:`114TCPJ14-6`,title:`6-過年大考驗————親等計算機(難)`,problemTitle:`6-過年大考驗————親等計算機(難)`,courseCode:`114TCPJ14`,courseName:`114-基隆市國中（競賽模式）`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`過年回老家，最難的就是分清楚親戚關係。我們定義「親等」為兩個人之間到「最近共同祖先」的距離總和。
【規則說明】
1. 距離計算：你與父母距離為1，與祖父母距離為2。依此類推(自己與自己的距離為0)。
2. 親等公式：親等=(X往上到共同祖先的步數)+(Y往上到共同祖先的步數)。
3. 唯一性：若有多位共同祖先，以親等最小(路徑最近)的為準。
4. 無關係：若兩人在名單中完全沒有共同祖先，輸出不是親戚。
【輸入格式】
1. 第一個輸入：一個整數N，代表親戚關係的數量。
2. 第二個輸入：N個父親代號(大寫字母)。
3. 第三個輸入：N個兒子代號(與父親代號對應)。
4. 第四個輸入：兩個欲查詢親等關係的代號X與Y。
【輸出格式】
輸出一個整數代表親等值；若無共同祖先則輸出不是親戚。`,inputDescription:``,outputDescription:``,statement:{description:`過年回老家，最難的就是分清楚親戚關係。我們定義「親等」為兩個人之間到「最近共同祖先」的距離總和。
【規則說明】
1. 距離計算：你與父母距離為1，與祖父母距離為2。依此類推(自己與自己的距離為0)。
2. 親等公式：親等=(X往上到共同祖先的步數)+(Y往上到共同祖先的步數)。
3. 唯一性：若有多位共同祖先，以親等最小(路徑最近)的為準。
4. 無關係：若兩人在名單中完全沒有共同祖先，輸出不是親戚。
【輸入格式】
1. 第一個輸入：一個整數N，代表親戚關係的數量。
2. 第二個輸入：N個父親代號(大寫字母)。
3. 第三個輸入：N個兒子代號(與父親代號對應)。
4. 第四個輸入：兩個欲查詢親等關係的代號X與Y。
【輸出格式】
輸出一個整數代表親等值；若無共同祖先則輸出不是親戚。`,input:``,output:``},examples:[{input:`3
AAB
BCD
CD`,output:`3`,explanation:`C的父親是A(1步)；
D的父親是B，B的父親是A(2步)。
最近共同祖先為A，親等 = 1 + 2 = 3`},{input:`2
EF
GH
EF`,output:`不是親戚`,explanation:`E與F分屬不同家族血緣，完全沒有共同祖先，故輸出不是親戚`}],starterXml:``,testCases:[{input:`3
AAB
BCD
CD`,score:10},{input:`2
AA
BC
BC`,score:10},{input:`3
ABC
BCD
AD`,score:10},{input:`2
PP
AB
AP`,score:10},{input:`4
GGAB
ABCD
CD`,score:10},{input:`2
EF
GH
EF`,score:10},{input:`1
K
P
KP`,score:10},{input:`3
IJK
LMN
LN`,score:10},{input:`8
RSTTUVWX
STUVWXYZ
YZ`,score:10},{input:`2
ZZ
XY
XY`,score:10}]}]};export{e as default};