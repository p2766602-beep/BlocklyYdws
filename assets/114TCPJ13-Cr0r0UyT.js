var e={code:`114TCPJ13`,title:`114-臺東縣國中（競賽模式）`,type:`programming`,mode:`contest`,description:`臺東縣114學年度國中組資訊科技競賽練習題，涵蓋分段計費、清單搜尋、公式計算與不定長度輸入處理。`,tasks:[{id:`114TCPJ13-1`,title:`魔法公車車票計算`,problemTitle:`魔法公車車票計算`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`歡迎來到「777魔法公車」！這條公車線路共有1號到15號共15個站點。
在所有站點中，10號站是一個非常特別的站，我們叫它「魔法分隔站」。
【票價規則】
公車票價的計算分兩大步驟：先決定票種，再決定折扣。
第一步：決定票種(一段票 vs. 兩段票)
1. 一段票(單程票)：基本票價是10元。
• 適用情況：你的旅程沒有跨越「魔法分隔站(10號站)」。(起訖站皆在10號站(含)之前，或皆在10號站(含)之後)。
• 例如：從3號站到8號站。
2. 兩段票(跨區票)：票價變成基本票價的兩倍，是20元。
• 適用情況：你的旅程跨越了「魔法分隔站(10號站)」。
• 例如：從7號站到12號站，或從14號站到5號站。
第二步：幸運折扣(半票優惠)
如果你的年齡是12歲以下(例如11歲、10歲...)，那麼恭喜你！你可以享有「幸運半票」優惠！
• 幸運半票優惠：你計算出來的票價(無論是10元還是20元)，都只需要支付一半。`,inputDescription:`請讀入乘客的上車站號、下車站號、以及年齡。(每行一個數字，或以空白分隔)`,outputDescription:`計算出應該付多少錢買車票並輸出。`,statement:{description:`歡迎來到「777魔法公車」！這條公車線路共有1號到15號共15個站點。
在所有站點中，10號站是一個非常特別的站，我們叫它「魔法分隔站」。
【票價規則】
公車票價的計算分兩大步驟：先決定票種，再決定折扣。
第一步：決定票種(一段票 vs. 兩段票)
1. 一段票(單程票)：基本票價是10元。
• 適用情況：你的旅程沒有跨越「魔法分隔站(10號站)」。(起訖站皆在10號站(含)之前，或皆在10號站(含)之後)。
• 例如：從3號站到8號站。
2. 兩段票(跨區票)：票價變成基本票價的兩倍，是20元。
• 適用情況：你的旅程跨越了「魔法分隔站(10號站)」。
• 例如：從7號站到12號站，或從14號站到5號站。
第二步：幸運折扣(半票優惠)
如果你的年齡是12歲以下(例如11歲、10歲...)，那麼恭喜你！你可以享有「幸運半票」優惠！
• 幸運半票優惠：你計算出來的票價(無論是10元還是20元)，都只需要支付一半。`,input:`請讀入乘客的上車站號、下車站號、以及年齡。(每行一個數字，或以空白分隔)`,output:`計算出應該付多少錢買車票並輸出。`},examples:[{input:`5
8
18`,output:`10`,explanation:`第5站搭到第8站，1段全票10元`},{input:`7
12
20`,output:`20`,explanation:`第7站搭到第12站，2段全票20元`},{input:`13
10
8`,output:`5`,explanation:`第13站搭到第10站，1段半票5元`}],testCases:[{input:`1
9
30`,score:10,hidden:!1},{input:`2
11
15`,score:10,hidden:!1},{input:`10
15
40`,score:10,hidden:!1},{input:`15
1
7`,score:10,hidden:!1},{input:`9
10
5`,score:10,hidden:!1},{input:`1
15
10`,score:10,hidden:!1},{input:`1
10
20`,score:10,hidden:!1},{input:`10
1
12`,score:10,hidden:!1},{input:`11
15
11`,score:10,hidden:!1},{input:`12
8
35`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`跨界判斷(是否跨越分隔站)加上年齡折扣，與新北市國中「兩段票計算」同款規則。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`條件判斷`],subConcepts:[`公式計算`],algorithm:[`分段計費`],dataStructure:[`變數`],syntax:[`多層if`],math:[],context:[`生活情境`,`交通`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ13`,courseName:`114-臺東縣國中（競賽模式）`},{id:`114TCPJ13-2`,title:`幸運數字彩虹樂透`,problemTitle:`幸運數字彩虹樂透`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`為了舉辦校園慈善抽獎活動，我們設計了一個簡單的「幸運數字彩虹樂透」。
每張樂透彩券必須選出6個數字(範圍從1到49)。
現在，我們需要設計一個抽獎系統來計算彩券是否中獎，以及獎金是多少。
【開獎號碼】
• 本次固定開獎號碼為：10, 18, 29, 31, 35, 36
【中獎規則與獎金】
• 6個：頭獎，100,000元
• 5個：貳獎，10,000元
• 4個：參獎，1,000元
• 3個：肆獎，100元
• 2個或更少：銘謝惠顧，0元`,inputDescription:`讀入一張彩券上的6個選號(假設號碼已由小到大排列且不重複)。(每行一個，或以空白分隔)`,outputDescription:`輸出猜中的號碼個數以及對應的獎金金額，格式如「猜中X個號碼,獎金Y元」。`,statement:{description:`為了舉辦校園慈善抽獎活動，我們設計了一個簡單的「幸運數字彩虹樂透」。
每張樂透彩券必須選出6個數字(範圍從1到49)。
現在，我們需要設計一個抽獎系統來計算彩券是否中獎，以及獎金是多少。
【開獎號碼】
• 本次固定開獎號碼為：10, 18, 29, 31, 35, 36
【中獎規則與獎金】
• 6個：頭獎，100,000元
• 5個：貳獎，10,000元
• 4個：參獎，1,000元
• 3個：肆獎，100元
• 2個或更少：銘謝惠顧，0元`,input:`讀入一張彩券上的6個選號(假設號碼已由小到大排列且不重複)。(每行一個，或以空白分隔)`,output:`輸出猜中的號碼個數以及對應的獎金金額，格式如「猜中X個號碼,獎金Y元」。`},examples:[{input:`10
18
29
31
35
36`,output:`猜中6個號碼,獎金100000元`,explanation:`6個號碼完全相同，獎金100000元。`},{input:`1
2
3
4
5
6`,output:`猜中0個號碼,獎金0元`,explanation:`0個號碼相同，獎金0元。`}],testCases:[{input:`10 18 29 31 35 36`,score:10,hidden:!1},{input:`1 2 3 4 5 6`,score:10,hidden:!1},{input:`10 18 29 31 35 45`,score:10,hidden:!1},{input:`10 18 29 40 41 42`,score:10,hidden:!1},{input:`10 18 29 31 38 49`,score:10,hidden:!1},{input:`10 18 40 41 42 43`,score:10,hidden:!1},{input:`10 40 41 42 43 44`,score:10,hidden:!1},{input:`18 29 31 35 36 40`,score:10,hidden:!1},{input:`29 31 35 36 40 41`,score:10,hidden:!1},{input:`31 35 36 40 41 42`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`6/49對獎，與新北市/臺東縣國小的樂透題同概念，此處輸出格式多一個逗號。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`條件判斷`],algorithm:[`清單搜尋`],dataStructure:[`清單`],syntax:[`清單搜尋`],math:[],context:[`生活情境`,`彩券`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ13`,courseName:`114-臺東縣國中（競賽模式）`},{id:`114TCPJ13-3`,title:`我的健康小管家`,problemTitle:`我的健康小管家`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`基礎代謝率(BMR)是指您的身體在完全休息狀態下，為了維持基本生命功能所需，它是您每日總能量消耗中最大的一個組成部分，通常佔您每天燃燒總卡路里的60%至70%，例如：呼吸、器官運作、體溫維持等，即使整天躺著不動也會消耗的最低熱量。BMR會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。BMR就像是我們身體的「待機電力」。
【BMR 簡易計算】
為了簡化，我們使用一個簡化的BMR公式(參考女性BMR公式)，並將年齡固定為一個數字，只讓程式根據體重和身高來計算。我們固定年齡為14歲，簡化後BMR估算公式如下：
BMR = 655 + (9.6*體重(kg)) + (1.8*身高(cm)) - (4.7 *14)
程式計算出 BMR數值(取整數)後，會用這個標準來分類：
• 小於1200：極低能量
• 1200到1499：較低能量
• 1500到1799：標準能量
• 1800到2099：較高能量
• 2100以上：極高能量`,inputDescription:`第一行輸入身高(cm)
第二行輸入體重(kg)`,outputDescription:`輸出 BMR 值及 基礎能量等級，中間以半形空白隔開。`,statement:{description:`基礎代謝率(BMR)是指您的身體在完全休息狀態下，為了維持基本生命功能所需，它是您每日總能量消耗中最大的一個組成部分，通常佔您每天燃燒總卡路里的60%至70%，例如：呼吸、器官運作、體溫維持等，即使整天躺著不動也會消耗的最低熱量。BMR會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。BMR就像是我們身體的「待機電力」。
【BMR 簡易計算】
為了簡化，我們使用一個簡化的BMR公式(參考女性BMR公式)，並將年齡固定為一個數字，只讓程式根據體重和身高來計算。我們固定年齡為14歲，簡化後BMR估算公式如下：
BMR = 655 + (9.6*體重(kg)) + (1.8*身高(cm)) - (4.7 *14)
程式計算出 BMR數值(取整數)後，會用這個標準來分類：
• 小於1200：極低能量
• 1200到1499：較低能量
• 1500到1799：標準能量
• 1800到2099：較高能量
• 2100以上：極高能量`,input:`第一行輸入身高(cm)
第二行輸入體重(kg)`,output:`輸出 BMR 值及 基礎能量等級，中間以半形空白隔開。`},examples:[{input:`170
55`,output:`1423 較低能量`,explanation:`655 + (9.6 * 55) + (1.8 * 170) - (4.7 * 14) = 1423.2 取整數 1423 1423介於1200到1499 輸出較低能量`},{input:`175
70`,output:`1576 標準能量`,explanation:`655 + (9.6 * 70) + (1.8 * 175) - (4.7 * 14) = 1576.2 取整數 1576 1576介於1500到1799 輸出標準能量`}],testCases:[{input:`150
35`,score:10,hidden:!1},{input:`160
45`,score:10,hidden:!1},{input:`165
50`,score:10,hidden:!1},{input:`170
55`,score:10,hidden:!1},{input:`168
68`,score:10,hidden:!1},{input:`180
85`,score:10,hidden:!1},{input:`180
95`,score:10,hidden:!1},{input:`190
100`,score:10,hidden:!1},{input:`200
120`,score:10,hidden:!1},{input:`175
70`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`與新北市國中同款BMR公式，此處固定取整數(不留小數)。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`公式計算`],subConcepts:[`條件判斷`],algorithm:[`級距判斷`],dataStructure:[`變數`],syntax:[`四捨五入`,`多層if`],math:[`BMR公式`],context:[`健康情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ13`,courseName:`114-臺東縣國中（競賽模式）`},{id:`114TCPJ13-4`,title:`東台線上3C購物平台`,problemTitle:`東台線上3C購物平台`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`東台3C賣場推出線上購物大拍賣平台，大東支付電子錢包結帳。不同商品的編號與金額如表所示。結帳系統會先讀取電子錢包餘額，再依購買商品編號結帳後(輸入-1表示結帳)，顯示結帳結果。
• 若電子錢包餘額足夠，請輸出：「結帳成功,餘額剩x元」
• 若餘額不足，請輸出：「餘額不足,請另外加值y元」
【商品清單】
1. 電競滑鼠：3490
2. 電競鍵盤：7990
3. 電腦椅：3990
4. 電腦機殼：2590
5. 電腦桌：6890
6. 記憶體 16GB一條：3490
7. SSD256GB一條：1490`,inputDescription:`第一行輸入電子錢包餘額。
接下來每行輸入欲購買的商品編號，直到輸入 -1 結束。(或以空白間隔)`,outputDescription:`依餘額狀況輸出結帳結果。`,statement:{description:`東台3C賣場推出線上購物大拍賣平台，大東支付電子錢包結帳。不同商品的編號與金額如表所示。結帳系統會先讀取電子錢包餘額，再依購買商品編號結帳後(輸入-1表示結帳)，顯示結帳結果。
• 若電子錢包餘額足夠，請輸出：「結帳成功,餘額剩x元」
• 若餘額不足，請輸出：「餘額不足,請另外加值y元」
【商品清單】
1. 電競滑鼠：3490
2. 電競鍵盤：7990
3. 電腦椅：3990
4. 電腦機殼：2590
5. 電腦桌：6890
6. 記憶體 16GB一條：3490
7. SSD256GB一條：1490`,input:`第一行輸入電子錢包餘額。
接下來每行輸入欲購買的商品編號，直到輸入 -1 結束。(或以空白間隔)`,output:`依餘額狀況輸出結帳結果。`},examples:[{input:`10000
1
4
-1`,output:`結帳成功,餘額剩3920元`,explanation:`電子錢包帳戶中原有10000元，消費3490+2590=6080 結帳成功,餘額剩3920元`},{input:`5000
3
5
-1`,output:`餘額不足,請另外加值5880元`,explanation:`電子錢包帳戶中原有5000元，消費3990+6890=10880 餘額不足,請另外加值5880元`}],testCases:[{input:`5000 3 5 -1`,score:10,hidden:!1},{input:`10000 1 4 -1`,score:10,hidden:!1},{input:`8000 6 7 3 -1`,score:10,hidden:!1},{input:`20000 5 1 6 -1`,score:10,hidden:!1},{input:`10000 1 4 -1`,score:10,hidden:!1},{input:`5000 -1`,score:10,hidden:!1},{input:`10000 2 -1`,score:10,hidden:!1},{input:`1000 7 -1`,score:10,hidden:!1},{input:`30000 2 2 2 -1`,score:10,hidden:!1},{input:`0 4 -1`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`固定7項商品價目表，讀取購買清單直到-1結束並判斷結帳結果，練習不定長度輸入與查表加總。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`迴圈`],subConcepts:[`條件判斷`],algorithm:[`累加`],dataStructure:[`變數`],syntax:[`while迴圈`,`多層if`],math:[],context:[`生活情境`,`購物`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPJ13`,courseName:`114-臺東縣國中（競賽模式）`}],source:{convertedFrom:`114JTaitung`,convertedAt:`2026-08-13T00:39:19.905Z`,note:`競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。`}};export{e as default};