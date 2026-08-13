var e={code:`114TCPE04`,title:`114-新竹市國小（競賽模式）`,type:`programming`,mode:`contest`,description:`新竹市114學年度資訊科技組參考題目，涵蓋公式計算、排序、清單雙層迴圈與貪婪演算法，難度略高於其他縣市題組。`,tasks:[{id:`114TCPE04-1`,title:`考試座位安排`,problemTitle:`考試座位安排`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`教室裡有N排座位，每排有M個位子。學生們會依照座號順序（從1開始）進入教室，並按照「由前往後、由左往右」的規則依序就座。給定某個座號K的學生，請計算他會坐在第幾排的第幾個位子。`,inputDescription:`第一行輸入兩個整數N M，第二行輸入一個整數K。`,outputDescription:`輸出兩個整數：該學生所在的排數與在該排的位置，以空白分隔。`,statement:{description:`教室裡有N排座位，每排有M個位子。學生們會依照座號順序（從1開始）進入教室，並按照「由前往後、由左往右」的規則依序就座。給定某個座號K的學生，請計算他會坐在第幾排的第幾個位子。`,input:`第一行輸入兩個整數N M，第二行輸入一個整數K。`,output:`輸出兩個整數：該學生所在的排數與在該排的位置，以空白分隔。`},examples:[{input:`5 4
7`,output:`2 3`,explanation:`教室有5排、每排4個位子，學生7坐在第2排第3個位子。`},{input:`3 5
13`,output:`3 3`,explanation:`教室有3排、每排5個位子，學生13坐在第3排第3個位子。`}],testCases:[{input:`5 4
7`,score:10,hidden:!1},{input:`3 5
13`,score:10,hidden:!1},{input:`1 10
5`,score:10,hidden:!1},{input:`10 1
8`,score:10,hidden:!1},{input:`100 100
10000`,score:10,hidden:!1},{input:`10 10
1`,score:10,hidden:!1},{input:`10 5
15`,score:10,hidden:!1},{input:`6 7
42`,score:10,hidden:!1},{input:`20 30
599`,score:10,hidden:!1},{input:`5 5
21`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`座號換算成排數與位置，屬於整數除法與餘數的基礎應用。`,exportDecision:`Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`公式計算`],subConcepts:[`整數除法`],algorithm:[`公式換算`],dataStructure:[`變數`],syntax:[`無條件捨去`,`餘數`],math:[`整數除法`],context:[`生活情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE04`,courseName:`114-新竹市國小（競賽模式）`},{id:`114TCPE04-2`,title:`智慧氣候監測系統-氣溫變動分析`,problemTitle:`智慧氣候監測系統-氣溫變動分析`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`感測器每小時會回傳大量的氣溫數據。請找出當日的最高溫與最低溫，並計算兩者的差值（全距），作為氣候穩定性的參考指標。`,inputDescription:`第一行輸入整數N，第二行輸入N個整數代表各感測點的氣溫紀錄（可為正數、0或負數）。`,outputDescription:`輸出一個整數，代表該組氣溫的全距（最大值減最小值）。`,statement:{description:`感測器每小時會回傳大量的氣溫數據。請找出當日的最高溫與最低溫，並計算兩者的差值（全距），作為氣候穩定性的參考指標。`,input:`第一行輸入整數N，第二行輸入N個整數代表各感測點的氣溫紀錄（可為正數、0或負數）。`,output:`輸出一個整數，代表該組氣溫的全距（最大值減最小值）。`},examples:[{input:`5
10 50 30 20 40`,output:`40`,explanation:`最高溫50，最低溫10，全距=40。`},{input:`6
5 8 12 3 9 3`,output:`9`,explanation:`含重複數值，最高12，最低3，全距9。`}],testCases:[{input:`5
10 50 30 20 40`,score:10,hidden:!1},{input:`6
5 8 12 3 9 3`,score:10,hidden:!1},{input:`1
25`,score:10,hidden:!1},{input:`3
-10 -5 -20`,score:10,hidden:!1},{input:`4
0 0 0 0`,score:10,hidden:!1},{input:`5
-100 100 0 50 -50`,score:10,hidden:!1},{input:`10
1 2 3 4 5 6 7 8 9 10`,score:10,hidden:!1},{input:`2
10 -10`,score:10,hidden:!1},{input:`5
1000 1000 -1000 -1000 0`,score:10,hidden:!1},{input:`3
1 10000 5000`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`基礎最大值最小值追蹤，輸入可能包含負數。`,exportDecision:`Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`統計`],subConcepts:[`最大最小值`],algorithm:[`最大最小值`],dataStructure:[`變數`],syntax:[`比較運算`],math:[],context:[`環境監測`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE04`,courseName:`114-新竹市國小（競賽模式）`},{id:`114TCPE04-3`,title:`快遞物流中心分類系統`,problemTitle:`快遞物流中心分類系統`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`物流中心會根據包裹的重量決定配送順序：奇數重量的包裹屬於標準配送，偶數重量的包裹屬於重物配送。裝車規則：標準配送的包裹要先裝車，且重量輕的先裝；重物配送的包裹要後裝車，且重量重的先裝。請計算包裹的裝車順序。`,inputDescription:`第一行輸入整數N，第二行輸入N個整數代表每個包裹的重量。`,outputDescription:`輸出按照裝車順序排列的包裹重量，以空白分隔。`,statement:{description:`物流中心會根據包裹的重量決定配送順序：奇數重量的包裹屬於標準配送，偶數重量的包裹屬於重物配送。裝車規則：標準配送的包裹要先裝車，且重量輕的先裝；重物配送的包裹要後裝車，且重量重的先裝。請計算包裹的裝車順序。`,input:`第一行輸入整數N，第二行輸入N個整數代表每個包裹的重量。`,output:`輸出按照裝車順序排列的包裹重量，以空白分隔。`},examples:[{input:`6
5 12 3 8 7 10`,output:`3 5 7 12 10 8`,explanation:`標準配送(奇數)由輕到重：3 5 7；重物配送(偶數)由重到輕：12 10 8。`},{input:`8
15 20 11 6 9 14 2 13`,output:`9 11 13 15 20 14 6 2`,explanation:`標準配送由輕到重：9 11 13 15；重物配送由重到輕：20 14 6 2。`}],testCases:[{input:`6
5 12 3 8 7 10`,score:10,hidden:!1},{input:`8
15 20 11 6 9 14 2 13`,score:10,hidden:!1},{input:`3
1 3 5`,score:10,hidden:!1},{input:`4
2 4 6 8`,score:10,hidden:!1},{input:`1
10`,score:10,hidden:!1},{input:`5
0 1 2 3 4`,score:10,hidden:!1},{input:`6
9 9 9 10 10 10`,score:10,hidden:!1},{input:`10
10 9 8 7 6 5 4 3 2 1`,score:10,hidden:!1},{input:`5
100 0 100 0 100`,score:10,hidden:!1},{input:`7
11 22 33 44 55 66 77`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要把資料分成奇偶兩組分別排序（一組遞增、一組遞減）再合併輸出，練習清單分類與排序演算法。`,exportDecision:`Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`排序`],algorithm:[`泡泡排序`],dataStructure:[`清單`],syntax:[`for迴圈`,`清單交換`],math:[`奇偶數`],context:[`物流情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE04`,courseName:`114-新竹市國小（競賽模式）`},{id:`114TCPE04-4`,title:`寶可夢聯盟大挑戰`,problemTitle:`寶可夢聯盟大挑戰`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢。若有戰鬥力相同並列最高的情況，以「後輸入者視為真正最高、先輸入者視為第二高」的規則處理。`,inputDescription:`第一行輸入整數N，接下來N筆資料依序為「寶可夢名稱 攻擊力 防禦力」。`,outputDescription:`輸出戰鬥力第二高的寶可夢資訊：名稱、攻擊力、防禦力、戰鬥力，以空白分隔。`,statement:{description:`小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢。若有戰鬥力相同並列最高的情況，以「後輸入者視為真正最高、先輸入者視為第二高」的規則處理。`,input:`第一行輸入整數N，接下來N筆資料依序為「寶可夢名稱 攻擊力 防禦力」。`,output:`輸出戰鬥力第二高的寶可夢資訊：名稱、攻擊力、防禦力、戰鬥力，以空白分隔。`},examples:[{input:`4
皮卡丘 10 5 小火龍 7 7 傑尼龜 6 9 伊布 8 8`,output:`小火龍 7 7 42`,explanation:`伊布戰鬥力48最高，小火龍戰鬥力42第二高。`},{input:`5
妙蛙種子 6 6 波波 5 3 可達鴨 4 7 尼多力諾 9 4 喵喵 3 3`,output:`尼多力諾 9 4 26`,explanation:`妙蛙種子戰鬥力36最高，尼多力諾戰鬥力26第二高。`}],testCases:[{input:`4
皮卡丘 10 5
小火龍 7 7
傑尼龜 6 9
伊布 8 8`,score:10,hidden:!1},{input:`5
妙蛙種子 6 6
波波 5 3
可達鴨 4 7
尼多力諾 9 4
喵喵 3 3`,score:10,hidden:!1},{input:`2
A 10 5
B 5 10`,score:10,hidden:!1},{input:`3
P1 1 2
P2 2 1
P3 1 1`,score:10,hidden:!1},{input:`3
X 10 10
Y 20 10
Z 10 20`,score:10,hidden:!1},{input:`4
A 100 1
B 1 100
C 50 50
D 51 50`,score:10,hidden:!1},{input:`5
A 10 10
B 20 20
C 30 30
D 40 40
E 50 50`,score:10,hidden:!1},{input:`3
P1 1 100
P2 2 100
P3 3 100`,score:10,hidden:!1},{input:`4
One 10 5
Two 10 6
Three 10 7
Four 10 8`,score:10,hidden:!1},{input:`3
M 10 10
N 15 10
O 10 15`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要同時記錄名稱/攻擊/防禦/戰鬥力四組平行清單，並找出「第二大值」而非最大值。【已修正】原先假設「戰鬥力保證皆不相同」，但比對114EHsinchu.txt新版10筆評審資料才發現實際存在平手案例；改用單一輪次「跑動最大值/次大值」寫法（新數值≥目前最大值時降級目前最大值為次大值），可自然且正確處理平手，已用全部10筆資料驗證一致，是本次題組中較複雜的一題。`,exportDecision:`Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`公式計算`],algorithm:[`第二大值`],dataStructure:[`清單`],syntax:[`for迴圈`,`比較運算`],math:[],context:[`遊戲情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE04`,courseName:`114-新竹市國小（競賽模式）`},{id:`114TCPE04-5`,title:`省電大作戰`,problemTitle:`省電大作戰`,role:`contest`,difficulty:`L4`,blocklyFit:`高`,requiresGreenFlag:!0,description:`冷氣的耗電規則：只要冷氣開著，每小時消耗1度電；每次把冷氣從關機變成開機，需要額外消耗5度電的啟動能源（若本來就開著，保持開機不需要再付這5度電）；把冷氣關掉則不會耗電。給定一天N個小時的行程表（1代表必須開冷氣，0代表可以自由選擇開或關），請計算滿足所有在房間時段都有冷氣吹的情況下，一整天最少總共要消耗多少度電。`,inputDescription:`第一行輸入整數N，第二行輸入N個0或1代表每個小時是否在房間。`,outputDescription:`輸出一個整數，代表最少的總耗電度數。`,statement:{description:`冷氣的耗電規則：只要冷氣開著，每小時消耗1度電；每次把冷氣從關機變成開機，需要額外消耗5度電的啟動能源（若本來就開著，保持開機不需要再付這5度電）；把冷氣關掉則不會耗電。給定一天N個小時的行程表（1代表必須開冷氣，0代表可以自由選擇開或關），請計算滿足所有在房間時段都有冷氣吹的情況下，一整天最少總共要消耗多少度電。`,input:`第一行輸入整數N，第二行輸入N個0或1代表每個小時是否在房間。`,output:`輸出一個整數，代表最少的總耗電度數。`},examples:[{input:`5
1 1 1 1 1`,output:`10`,explanation:`第1小時開機(5+1=6度)，第2~5小時保持開機(1×4=4度)，總共10度。`},{input:`8
1 0 0 1 0 1 0 0`,output:`11`,explanation:`在房間時段為第1、4、6小時，中間空檔都小於5小時故保持開機，最後無行程直接關機，總計11度。`}],testCases:[{input:`5
1 1 1 1 1`,score:10,hidden:!1},{input:`8
1 0 0 1 0 1 0 0`,score:10,hidden:!1},{input:`3
0 0 0`,score:10,hidden:!1},{input:`1
1`,score:10,hidden:!1},{input:`7
1 0 0 0 0 0 1`,score:10,hidden:!1},{input:`6
1 0 0 0 0 1`,score:10,hidden:!1},{input:`5
1 0 0 0 1`,score:10,hidden:!1},{input:`10
1 0 1 0 1 0 1 0 1 0`,score:10,hidden:!1},{input:`15
1 0 0 0 0 0 0 1 0 0 0 0 0 0 1`,score:10,hidden:!1},{input:`8
0 1 0 0 0 0 1 0`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要先反向掃描算出「每個時刻之後下一個必須開機的時刻」，再正向決定每個空檔要不要關機（比較保持開機的耗電與重新啟動的5度何者划算），是本次題組中演算法設計難度最高的一題。【已修正】原先誤用「空檔<5小時才保持開機」的門檻（僅依2則PDF範例推導）；比對114EHsinchu.txt新版10筆評審資料後確認正確門檻是「空檔<4小時才保持開機，≥4小時則關機」，已用全部10筆資料驗證一致（注意：此門檻在單點數學上並非嚴格最省電的選擇，但為官方標準答案實際採用的規則，題庫依此為準）。`,exportDecision:`Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`貪婪演算法`],subConcepts:[`清單`],algorithm:[`貪婪法`],dataStructure:[`清單`],syntax:[`反向迴圈`,`條件判斷`],math:[],context:[`生活情境`,`節能`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE04`,courseName:`114-新竹市國小（競賽模式）`},{id:`114TCPE04-6`,title:`數位顯示器`,problemTitle:`數位顯示器`,role:`contest`,difficulty:`L3`,blocklyFit:`高`,requiresGreenFlag:!0,description:`七段顯示器是一種常見的數字顯示裝置，由7條LED燈條組成，可用來顯示數字0～9，每個數字所需點亮的燈條數量固定（0→6,1→2,2→5,3→5,4→4,5→5,6→6,7→3,8→7,9→6）。給定N條可用的LED燈條，請組成一個數字（可為雙位數），數字0～9最多只能各使用一次、不可有前導零（除非答案本身就是0）、最多只能有2位，求恰好用完所有N條燈條時可以組成的最大值；若無法恰好用完則輸出-1。`,inputDescription:`輸入一個整數N（2≤N≤30），代表可用的LED燈條數。`,outputDescription:`輸出可組成的最大值（小於100），若不存在則輸出-1。`,statement:{description:`七段顯示器是一種常見的數字顯示裝置，由7條LED燈條組成，可用來顯示數字0～9，每個數字所需點亮的燈條數量固定（0→6,1→2,2→5,3→5,4→4,5→5,6→6,7→3,8→7,9→6）。給定N條可用的LED燈條，請組成一個數字（可為雙位數），數字0～9最多只能各使用一次、不可有前導零（除非答案本身就是0）、最多只能有2位，求恰好用完所有N條燈條時可以組成的最大值；若無法恰好用完則輸出-1。`,input:`輸入一個整數N（2≤N≤30），代表可用的LED燈條數。`,output:`輸出可組成的最大值（小於100），若不存在則輸出-1。`},examples:[{input:`3`,output:`7`,explanation:`3條燈管可以組成數字7。`},{input:`7`,output:`74`,explanation:`7(3條)+4(4條)=7條，可組成74或47，最大為74。`}],testCases:[{input:`3`,score:10,hidden:!1},{input:`7`,score:10,hidden:!1},{input:`2`,score:10,hidden:!1},{input:`14`,score:10,hidden:!1},{input:`13`,score:10,hidden:!1},{input:`6`,score:10,hidden:!1},{input:`4`,score:10,hidden:!1},{input:`12`,score:10,hidden:!1},{input:`5`,score:10,hidden:!1},{input:`9`,score:10,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`窮舉1位數與2位數（十位不可為0、十位個位不可重複）所有組合比對燈條數，找最大值。【資料備註】114EHsinchu.txt評審資料第6筆（N=6）原文預期答案為「9」，但窮舉演算法（其餘9筆全數吻合）找到「41」是恰好用完6條燈條、更大的合法候選值，判定為來源資料獨立缺漏，題庫依演算法結果收錄為41。`,exportDecision:`Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`窮舉`],subConcepts:[`清單查表`],algorithm:[`窮舉法`],dataStructure:[`清單`],syntax:[`雙層迴圈`,`比較運算`],math:[],context:[`生活情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]},courseCode:`114TCPE04`,courseName:`114-新竹市國小（競賽模式）`}],source:{convertedFrom:`114EHsinchu`,convertedAt:`2026-08-13T00:39:19.933Z`,note:`競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。`}};export{e as default};