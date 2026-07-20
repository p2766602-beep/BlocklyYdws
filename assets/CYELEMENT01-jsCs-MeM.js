var e={code:`CYELEMENT01`,title:`114-嘉義市國小`,type:`programming`,mode:`learning`,description:`嘉義市國小程式解題公開題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-07-11T12:53:43+08:00`,sourceCsv:`data\\problem_bank_master_tagged.csv`,problemSetTitle:`114-嘉義市國小`,problemSetGeneratedAt:`2026-07-11T04:45:39.391Z`,version:`PB05-7E-custom`},tasks:[{id:`cyelement-001`,title:`營養午餐分析(1-1)`,problemTitle:`營養午餐分析(1-1)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（1）: 若規定「每 5 天至少要出現1次豆製（C）才算健康」，請檢查：第1～5天是否符合？第 6～10天是否符合？`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（1）: 若規定「每 5 天至少要出現1次豆製（C）才算健康」，請檢查：第1～5天是否符合？第 6～10天是否符合？`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`},examples:[{input:`B A B A B C D E F F`,output:`N Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天不符合，6~10天符合`},{input:`C A B C D A B C D E`,output:`Y Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天符合，6~10天符合`},{input:`A A A D C E F B B C`,output:`Y Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天符合，6~10天符合`}],testCases:[{input:`A B A B A B D D D D`,expectedOutput:`N N`,output:`N N`,score:10,hidden:!1},{input:`C C C D E F B A B A`,expectedOutput:`Y N`,output:`Y N`,score:15,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`N Y`,output:`N Y`,score:20,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`N Y`,output:`N Y`,score:25,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`Y Y`,output:`Y Y`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-002`,title:`營養午餐分析(1-2)`,problemTitle:`營養午餐分析(1-2)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L2`,blocklyFit:`高`,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（2）: 營養師她想知道每週是否「紅肉攝取過量」。假設規則：「B 的總次數不可超過所有 A + C 次數的總和」。請檢查：第 1～5 天是否有超量？第 6～10 天是否有超量？`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（2）: 營養師她想知道每週是否「紅肉攝取過量」。假設規則：「B 的總次數不可超過所有 A + C 次數的總和」。請檢查：第 1～5 天是否有超量？第 6～10 天是否有超量？`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行:Y/N Y/N，Y代表符合，N代表不符合，字母間以1個半形空格區隔`},examples:[{input:`B A B A B C D E F F`,output:`Y N`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天超量，6~10天未超量`},{input:`C A B C D A B C D E`,output:`N N`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天超量，6~10天未超量`},{input:`A A A D C E F B B C`,output:`N Y`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表1~5天超量，6~10天未超量`}],testCases:[{input:`A B A B A B D D D D`,expectedOutput:`N Y`,output:`N Y`,score:10,hidden:!1},{input:`C C C D E F B A B A`,expectedOutput:`N N`,output:`N N`,score:15,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`Y N`,output:`Y N`,score:20,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`N N`,output:`N N`,score:25,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`N N`,output:`N N`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-003`,title:`營養午餐分析(1-3)`,problemTitle:`營養午餐分析(1-3)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L3`,blocklyFit:`高`,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

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
輸出部分 第1行 代表1~5天0次，6~10天0次`}],testCases:[{input:`C C C D E F B A B A`,expectedOutput:`0 1`,output:`0 1`,score:10,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`1 0`,output:`1 0`,score:15,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`0 0`,output:`0 0`,score:20,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`1 0`,output:`1 0`,score:25,hidden:!1},{input:`A B A B A B D D D D`,expectedOutput:`2 0`,output:`2 0`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-004`,title:`營養午餐分析(1-4)`,problemTitle:`營養午餐分析(1-4)`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L3`,blocklyFit:`高`,description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（4）: 在這10天裡，哪一種主菜出現次數最多？(假設不會出現重複狀況，也就是只有一種主菜是最多)`,inputDescription:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,outputDescription:`第一行: 出現次數最多的主菜`,statement:{description:`營養師負責規劃學校兩週（共10 天）的營養午餐菜單，她希望小朋友能從食物中獲得足夠均衡營養。因此她需要分析設計的菜單中是否符合規定。

其中每天的「主菜種類」用以下字母表示：

• A = 白肉（雞肉、魚肉）

• B = 紅肉（豬肉、牛肉）

• C = 豆製品

• D = 蛋類

• E = 海鮮（非魚）

• F = 蔬菜主菜（如蔬菜炒豆乾）

接著請回答以下問題

問題（4）: 在這10天裡，哪一種主菜出現次數最多？(假設不會出現重複狀況，也就是只有一種主菜是最多)`,input:`第一行: 最近兩週的主菜記錄（第1天到第10天），例如輸入A B C A E C B A D C (每個字母以1個半形空格分隔)`,output:`第一行: 出現次數最多的主菜`},examples:[{input:`B A B A B C D E F F`,output:`B`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表出現最多的主菜`},{input:`C A B C D A B C D E`,output:`C`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表出現最多的主菜`},{input:`A A A D C E F B B C`,output:`A`,explanation:`輸入部分 第1行 代表兩週主餐紀錄
輸出部分 第1行 代表出現最多的主菜`}],testCases:[{input:`A B A B A B D D D D`,expectedOutput:`D`,output:`D`,score:10,hidden:!1},{input:`C C C D E F B A B A`,expectedOutput:`C`,output:`C`,score:15,hidden:!1},{input:`A B B D F F F E D C`,expectedOutput:`F`,output:`F`,score:20,hidden:!1},{input:`E D E D E C C C C C`,expectedOutput:`C`,output:`C`,score:25,hidden:!1},{input:`A B C B A C B A C B`,expectedOutput:`B`,output:`B`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-005`,title:`停車費計算`,problemTitle:`停車費計算`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L3`,blocklyFit:`高`,description:`停車場採用階梯式收費方式。停車時會依照停放時間長短來計價，其中停車1小時內有優惠，超過 1小時後依半小時計費。計費方式如下：

1. 停車時間小於或等於30分鐘，收費20 元

2. 停車時間在31~60分鐘之間，收費40 元

3. 若停車時間超過60分鐘，則在60分鐘以後的時間，每30分鐘加收30元，若剩餘不足 30 分鐘，也以 30分鐘計算。

另外單日無論停車時間多長，單日最高收費上限為400元。若停車超過24小時，剩餘不足24小時部分一樣享有1小時優惠。小柔開車於此停車場停放，請計算本次停車應繳的費用。`,inputDescription:`第一行:停車分鐘數(整數)`,outputDescription:`第一行: 應繳納的費用(整數）`,statement:{description:`停車場採用階梯式收費方式。停車時會依照停放時間長短來計價，其中停車1小時內有優惠，超過 1小時後依半小時計費。計費方式如下：

1. 停車時間小於或等於30分鐘，收費20 元

2. 停車時間在31~60分鐘之間，收費40 元

3. 若停車時間超過60分鐘，則在60分鐘以後的時間，每30分鐘加收30元，若剩餘不足 30 分鐘，也以 30分鐘計算。

另外單日無論停車時間多長，單日最高收費上限為400元。若停車超過24小時，剩餘不足24小時部分一樣享有1小時優惠。小柔開車於此停車場停放，請計算本次停車應繳的費用。`,input:`第一行:停車分鐘數(整數)`,output:`第一行: 應繳納的費用(整數）`},examples:[{input:`100`,output:`100`,explanation:`輸入部分 第1行 代表停車分鐘數
輸出部分 第1行 代表應繳納的費用
計算方式:停車60分鐘以40元計算，超過時間每30分鐘加30元，不足30分鐘也收30元，40+30+30=100元`},{input:`820`,output:`400`,explanation:`輸入部分 第1行 代表停車分鐘數
輸出部分 第1行 代表應繳納的費用
計算方式: 停車820分鐘，時間未超過1日(1440分)，但繳費金額超過單日400元上限，故以400元計`},{input:`1443`,output:`420`,explanation:`輸入部分 第1行 代表停車分鐘數
輸出部分 第1行 代表應繳納的費用
計算方式: 停車1443分鐘，時間超過1日(1440分)，單日繳金額400元為上限，隔日的3分鐘繳費20元，故合計為400+20=420元`}],testCases:[{input:`60`,expectedOutput:`40`,output:`40`,score:10,hidden:!1},{input:`61`,expectedOutput:`70`,output:`70`,score:15,hidden:!1},{input:`145`,expectedOutput:`130`,output:`130`,score:20,hidden:!1},{input:`1500`,expectedOutput:`440`,output:`440`,score:25,hidden:!1},{input:`3005`,expectedOutput:`930`,output:`930`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-006`,title:`班級活動票選`,problemTitle:`班級活動票選`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L3`,blocklyFit:`高`,description:`班上將舉辦期末班級活動，本次活動地點有5個候選選項，編號為1、2、3、4、5，每位同學有1票。請設計一個程式讀取所有同學投票的地點編號，統計每個地點的得票數，並依下列規則輸出結果

1.若只有一個地點得票最高，輸出該地點編號。

2.若最高票有多個地點同票，輸出全部最高票的地點編號，並依照地點編號大小，由小到大依序排列。`,inputDescription:`第一行:投票人數(整數)。

第二行:每票選擇的活動地點編號(中間使用1個半形空格分開)。`,outputDescription:`第一行:輸出最高票活動地點編號或是全部並列最高票的活動地點編號(中間使用1個半形空格分開，同時依照地點編號大小，由小到大排列)。`,statement:{description:`班上將舉辦期末班級活動，本次活動地點有5個候選選項，編號為1、2、3、4、5，每位同學有1票。請設計一個程式讀取所有同學投票的地點編號，統計每個地點的得票數，並依下列規則輸出結果

1.若只有一個地點得票最高，輸出該地點編號。

2.若最高票有多個地點同票，輸出全部最高票的地點編號，並依照地點編號大小，由小到大依序排列。`,input:`第一行:投票人數(整數)。

第二行:每票選擇的活動地點編號(中間使用1個半形空格分開)。`,output:`第一行:輸出最高票活動地點編號或是全部並列最高票的活動地點編號(中間使用1個半形空格分開，同時依照地點編號大小，由小到大排列)。`},examples:[{input:`4
1 5 1 5`,output:`1 5`,explanation:`輸入部分
第1行 代表有4位投票人員
第2行 代表4張選票所圈選的地點編號
輸出部分
第1行 代表地點1與地點5獲得最高票，需要重新投票`},{input:`5
1 2 1 1 4`,output:`1`,explanation:`輸入部分
第1行 代表有5位投票人員
第2行 代表5張選票所圈選的地點編號
輸出部分
第1行 代表地點1獲得最高票`},{input:`8
3 4 5 1 3 4 5 1`,output:`1 3 4 5`,explanation:`輸入部分
第1行 代表有8位投票人員
第2行 代表8張選票所圈選的地點編號
輸出部分
第1行 代表地點1、3、4、5獲得最高票，需要重新投票`}],testCases:[{input:`4
1 2 1 3`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`6
5 1 5 2 1 4`,expectedOutput:`1 5`,output:`1 5`,score:15,hidden:!1},{input:`8
2 2 2 2 2 2 2 2`,expectedOutput:`2`,output:`2`,score:20,hidden:!1},{input:`10
1 2 3 4 5 1 2 3 4 5`,expectedOutput:`1 2 3 4 5`,output:`1 2 3 4 5`,score:25,hidden:!1},{input:`10
3 3 3 5 5 5 4 4 4 1`,expectedOutput:`3 4 5`,output:`3 4 5`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-007`,title:`班級集星比賽`,problemTitle:`班級集星比賽`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L4`,blocklyFit:`高`,description:`小波的班上規定，若學生表現良好，老師就會給學生一張星星貼紙。到學期末會統一結算貼紙數來進行兌換獎品。小波希望找出在哪個連續 K 天中，他得到的星星貼紙總數最多，這樣他就能知道自己在哪段時間表現最優秀！如果出現兩段或兩段以上的連續K天，星星總數一樣多，請選最早開始的那一段（以開始的第1天訂為 1）。`,inputDescription:`第 1 行：總天數(整數)

第 2 行：總天數中每一天獲得的星星貼紙數量(中間使用1個半形空格分開)。

第 3 行：要計算的連續天數(整數)`,outputDescription:`第 1 行：開始天數和最大星星總數(中間使用1個半形空格分開)`,statement:{description:`小波的班上規定，若學生表現良好，老師就會給學生一張星星貼紙。到學期末會統一結算貼紙數來進行兌換獎品。小波希望找出在哪個連續 K 天中，他得到的星星貼紙總數最多，這樣他就能知道自己在哪段時間表現最優秀！如果出現兩段或兩段以上的連續K天，星星總數一樣多，請選最早開始的那一段（以開始的第1天訂為 1）。`,input:`第 1 行：總天數(整數)

第 2 行：總天數中每一天獲得的星星貼紙數量(中間使用1個半形空格分開)。

第 3 行：要計算的連續天數(整數)`,output:`第 1 行：開始天數和最大星星總數(中間使用1個半形空格分開)`},examples:[{input:`6
10 2 3 4 1 5
3`,output:`1 15`,explanation:`輸入部分
第1行 代表6天
第2行 代表這6天依序所獲得星星貼紙數
第3行 代表連續3天
輸出部分
第1行 代表第1天起連續3天獲得最多15顆星星(10+2+3)`},{input:`7
1 2 10 12 5 3 1
3`,output:`3 27`,explanation:`輸入部分
第1行 代表7天
第2行 代表這7天依序所獲得星星貼紙數
第3行 代表連續3天
輸出部分
第1行 代表第3天起連續3天獲得最多27顆星星(10+12+5)`},{input:`8
5 1 5 1 5 1 5 1
4`,output:`1 12`,explanation:`輸入部分
第1行 代表8天
第2行 代表這8天依序所獲得星星貼紙數
第3行 代表連續4天
輸出部分
第1行 代表第1天起連續4天獲得最多12顆星星(5+1+5+1)`}],testCases:[{input:`5
1 8 3 4 2
1`,expectedOutput:`2 8`,output:`2 8`,score:10,hidden:!1},{input:`5
1 2 3 4 5
5`,expectedOutput:`1 15`,output:`1 15`,score:15,hidden:!1},{input:`8
1 1 1 1 1 5 5 5
4`,expectedOutput:`5 16`,output:`5 16`,score:20,hidden:!1},{input:`10
1 0 1 0 0 0 1 0 1 0
3`,expectedOutput:`1 2`,output:`1 2`,score:25,hidden:!1},{input:`6
100 10 500 900 100 200
2`,expectedOutput:`3 1400`,output:`3 1400`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-008`,title:`森林小火車的能量大冒險`,problemTitle:`森林小火車的能量大冒險`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L4`,blocklyFit:`高`,description:`小佳設計了一款桌遊遊戲，在森林裡有一列環狀小火車，繞著 5 個車站（編號 1 到 5）載客。小火車從 1 號站出發，一開始火車上有 10 顆能量糖果。

遊戲規則

1. 環狀鐵軌：火車開到底會回到起點。例如：在 5 號站再往前開 1 步，就會回到 1 號站。

2. 前進方式：以丟骰子決定走N步，也會同步消耗N顆能量糖果。例如:在1號站時，骰子出現 3 ，火車會直接移動至4號站，同時消耗 3 顆能量糖果。

3. 車站補給：抵達車站後，站長會送糖果（正數）或是請你分享糖果給小動物（負數）。

特殊狀況

• 【太重了！】：火車最多只能載 30 顆糖果。如果領完補給後超過 30 顆，多出來的會送給森林小精靈，火車上只留 30 顆。

• 【沒力了！】：如果糖果變成 0 顆或更少，火車會停下來。這時森林國王會緊急救援，直接送你 5 顆糖果讓火車重新出發。`,inputDescription:`第 1 行：為5個車站個別能量糖果的增減(中間以1個半形空格分開)

第 2 行：小火車行駛的總次數

第 3 行：每次移動距離(骰子丟出的步數）(中間以1個半形空格分開)`,outputDescription:`第 1 行：代表所有行程結束後，火車上最終剩餘的能量糖果數量`,statement:{description:`小佳設計了一款桌遊遊戲，在森林裡有一列環狀小火車，繞著 5 個車站（編號 1 到 5）載客。小火車從 1 號站出發，一開始火車上有 10 顆能量糖果。

遊戲規則

1. 環狀鐵軌：火車開到底會回到起點。例如：在 5 號站再往前開 1 步，就會回到 1 號站。

2. 前進方式：以丟骰子決定走N步，也會同步消耗N顆能量糖果。例如:在1號站時，骰子出現 3 ，火車會直接移動至4號站，同時消耗 3 顆能量糖果。

3. 車站補給：抵達車站後，站長會送糖果（正數）或是請你分享糖果給小動物（負數）。

特殊狀況

• 【太重了！】：火車最多只能載 30 顆糖果。如果領完補給後超過 30 顆，多出來的會送給森林小精靈，火車上只留 30 顆。

• 【沒力了！】：如果糖果變成 0 顆或更少，火車會停下來。這時森林國王會緊急救援，直接送你 5 顆糖果讓火車重新出發。`,input:`第 1 行：為5個車站個別能量糖果的增減(中間以1個半形空格分開)

第 2 行：小火車行駛的總次數

第 3 行：每次移動距離(骰子丟出的步數）(中間以1個半形空格分開)`,output:`第 1 行：代表所有行程結束後，火車上最終剩餘的能量糖果數量`},examples:[{input:`0 15 -5 15 -10
2
1 2`,output:`30`,explanation:`輸入部分
第1行 代表5個車站能量糖果的增減
第2行 代表小火車行駛的總次數為2
第3行 代表每次小火車移動步數
輸出部分:小火車最終能量糖果數量
計算方式
起始能量糖果為10
移動1步，能量糖果為10+15-1=24
移動2步，能量糖果為24+15-2=37，太重了最後調整成30`},{input:`0 15 -5 15 -10
2
4 3`,output:`5`,explanation:`輸入部分
第1行 代表5個車站能量糖果的增減
第2行 代表小火車行駛的總次數為2
第3行 代表每次小火車移動步數
輸出部分:小火車最終能量糖果數量
計算方式
起始能量糖果為10
移動4步，能量糖果為10-10-4=-4，沒力了最後調整成5
移動3步，能量糖果為5-5-3=-3，沒力了最後調整成5`},{input:`0 15 -5 15 -10
3
5 6 1`,output:`8`,explanation:`輸入部分
第1行 代表5個車站能量糖果的增減
第2行 代表小火車行駛的總次數為2
第3行 代表每次小火車移動步數
輸出部分:小火車最終能量糖果數量
計算方式
起始能量糖果為10
移動5步，能量糖果為10+0-5=5
移動6步，能量糖果為5+15-6=14
移動1步，能量糖果為14-5-1=8`}],testCases:[{input:`50 50 50 50 50
2
1 1`,expectedOutput:`30`,output:`30`,score:10,hidden:!1},{input:`-10 -20 -30 -10 -20
3
1 1 1`,expectedOutput:`5`,output:`5`,score:15,hidden:!1},{input:`0 20 0 0 0
1
11`,expectedOutput:`19`,output:`19`,score:20,hidden:!1},{input:`10 30 -40 10 -5
3
1 1 1`,expectedOutput:`14`,output:`14`,score:25,hidden:!1},{input:`0 5 7 9 0
4
5 5 9 8`,expectedOutput:`4`,output:`4`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyelement-009`,title:`玩具收納挑戰`,problemTitle:`玩具收納挑戰`,courseCode:`CYELEMENT01`,courseName:`114-嘉義市國小`,role:`practice`,difficulty:`L4`,blocklyFit:`高`,description:`小安是「玩具夢工場」的義工，她負責為最近一次展覽活動的玩具進行裝箱，以便之後能有效率運送到下一個地方展出。工場裡有N件(N不大於6)大小不一的精美玩具，為了安全和節省運費，必須使用容量統一的標準收納箱，其中收納箱最大容量為20單位重量，放入的玩具每件重量不一定相同，且每個箱子的玩具總重量都不能超過20單位。

為了提高運輸車的空間使用率，小安決定採用以下步驟來裝箱

(1)逐一裝箱:按照玩具重量輸入的順序，一件一件依序處理。

(2)尋找佳適配:對於每件玩具，依序檢查所有已經打開的收納箱。

• 若已開啟收納箱剩餘空間仍裝得下此玩具，就把這件玩具放入這個收納箱。

• 如果所有已打開的收納箱都裝不下，則開啟一個新的收納箱來收納玩具。

請你幫小安計算，依照上述的步驟收納這些玩具，最少需要多少個標準收納箱？`,inputDescription:`第 1 行：玩具件數(整數，不大於6)

第 2 行：分別代表每件玩具的重量(以1個半形空格分開）`,outputDescription:`第 1 行：最少需要的收納箱數`,statement:{description:`小安是「玩具夢工場」的義工，她負責為最近一次展覽活動的玩具進行裝箱，以便之後能有效率運送到下一個地方展出。工場裡有N件(N不大於6)大小不一的精美玩具，為了安全和節省運費，必須使用容量統一的標準收納箱，其中收納箱最大容量為20單位重量，放入的玩具每件重量不一定相同，且每個箱子的玩具總重量都不能超過20單位。

為了提高運輸車的空間使用率，小安決定採用以下步驟來裝箱

(1)逐一裝箱:按照玩具重量輸入的順序，一件一件依序處理。

(2)尋找佳適配:對於每件玩具，依序檢查所有已經打開的收納箱。

• 若已開啟收納箱剩餘空間仍裝得下此玩具，就把這件玩具放入這個收納箱。

• 如果所有已打開的收納箱都裝不下，則開啟一個新的收納箱來收納玩具。

請你幫小安計算，依照上述的步驟收納這些玩具，最少需要多少個標準收納箱？`,input:`第 1 行：玩具件數(整數，不大於6)

第 2 行：分別代表每件玩具的重量(以1個半形空格分開）`,output:`第 1 行：最少需要的收納箱數`},examples:[{input:`4
10 10 9 1`,output:`2`,explanation:`輸入部分
第1行 代表有4件玩具
第2行 代表每件玩具的重量
輸出部分
第1行 代表需要2個收納箱`},{input:`4
11 11 11 11`,output:`4`,explanation:`輸入部分
第1行 代表有4件玩具
第2行 代表每件玩具的重量
輸出部分
第1行 代表需要4個收納箱`},{input:`5
19 19 19 1 1`,output:`3`,explanation:`第1行 代表有5件玩具
第2行 代表每件玩具的重量
輸出部分
第1行 代表需要3個收納箱`}],testCases:[{input:`3
16 15 18`,expectedOutput:`3`,output:`3`,score:10,hidden:!1},{input:`6
11 11 11 1 1 1`,expectedOutput:`3`,output:`3`,score:15,hidden:!1},{input:`4
10 10 10 10`,expectedOutput:`2`,output:`2`,score:20,hidden:!1},{input:`5
18 18 2 2 2`,expectedOutput:`3`,output:`3`,score:25,hidden:!1},{input:`5
15 15 15 15 15`,expectedOutput:`5`,output:`5`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[`有多餘案例`],note:``,exportDecision:`由題目卷 JSON 指定匯出`},tags:{mainConcepts:[`運算與條件判斷`],subConcepts:[`基本流程控制`],algorithm:[],dataStructure:[],syntax:[`四則運算`,`if`,`比較運算`],math:[`算術運算`],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};