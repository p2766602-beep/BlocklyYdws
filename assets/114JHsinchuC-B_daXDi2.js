var e={code:`114JHsinchuC`,title:`114-新竹縣國中`,type:`programming`,mode:`learning`,description:`新竹縣114學年度科技教育創意實作競賽-國中資訊科技組題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-07T14:15:54.884Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-新竹縣國中`,version:`manual-transcription-verified`},tasks:[{id:`114JHsinchuC-1`,title:`射箭比賽成績計算`,problemTitle:`射箭比賽成績計算`,courseCode:`114JHsinchuC`,courseName:`114-新竹縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`射箭比賽共射 N 箭（5~10箭），每箭分數為 0~10。計分規則（首箭以原始分計）：若本箭分數低於前一箭，計原始分（1倍）；若等於前一箭（且非連續兩次都是10分），計2倍；若高於前一箭，或連續兩箭都是10分，計3倍。請計算總分。`,inputDescription:`第一行輸入箭數 N。
第二行輸入 N 箭的分數。`,outputDescription:`輸出總分。`,statement:{description:`射箭比賽共射 N 箭（5~10箭），每箭分數為 0~10。計分規則（首箭以原始分計）：若本箭分數低於前一箭，計原始分（1倍）；若等於前一箭（且非連續兩次都是10分），計2倍；若高於前一箭，或連續兩箭都是10分，計3倍。請計算總分。`,input:`第一行輸入箭數 N。
第二行輸入 N 箭的分數。`,output:`輸出總分。`},examples:[{input:`5
7 7 9 10 10`,output:`108`,explanation:`首箭7；第2箭7等於前箭(非連續10分)計2倍14；第3箭9高於前箭計3倍27；第4箭10高於前箭計3倍30；第5箭10等於前箭且連續10分計3倍30。總計7+14+27+30+30=108。`},{input:`7
5 3 3 4 10 0 3`,output:`65`,explanation:`首箭5；第2箭3低於前箭計3；第3箭3等於前箭計6；第4箭4高於前箭計12；第5箭10高於前箭計30；第6箭0低於前箭計0；第7箭3高於前箭計9。總計65。`}],testCases:[{input:`5
7 7 9 10 10`,expectedOutput:`108`,output:`108`,score:20,hidden:!1},{input:`7
5 3 3 4 10 0 3`,expectedOutput:`65`,output:`65`,score:20,hidden:!1},{input:`5
10 10 10 10 10`,expectedOutput:`130`,output:`130`,score:20,hidden:!1},{input:`6
1 2 3 4 5 6`,expectedOutput:`61`,output:`61`,score:20,hidden:!1},{input:`3
10 9 10`,expectedOutput:`49`,output:`49`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要記住前一箭的原始分數，依序判斷本箭的加成倍率，練習狀態變數與多重條件判斷。`,exportDecision:`Claude 依使用者提供的114-新竹縣國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`狀態追蹤`],subConcepts:[`條件式加成計分`],algorithm:[`狀態追蹤`],dataStructure:[`清單`],syntax:[`for`,`if-elif-else`,`累加`],math:[],context:[`運動情境`,`射箭比賽`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JHsinchuC-2`,title:`猜數字`,problemTitle:`猜數字`,courseCode:`114JHsinchuC`,courseName:`114-新竹縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`答案與猜測各由 N 個不重複的數字組成。請計算：A = 位置與數字都對的個數；B = 數字對但位置錯的個數。輸出格式為「XAYB」。`,inputDescription:`第一行輸入數字個數 N。
第二行輸入答案的 N 個數字。
第三行輸入猜測的 N 個數字。`,outputDescription:`輸出「XAYB」，X 為位置全對的數量，Y 為數字對但位置錯的數量。`,statement:{description:`答案與猜測各由 N 個不重複的數字組成。請計算：A = 位置與數字都對的個數；B = 數字對但位置錯的個數。輸出格式為「XAYB」。`,input:`第一行輸入數字個數 N。
第二行輸入答案的 N 個數字。
第三行輸入猜測的 N 個數字。`,output:`輸出「XAYB」，X 為位置全對的數量，Y 為數字對但位置錯的數量。`},examples:[{input:`4
4 7 1 9
4 9 7 8`,output:`1A2B`,explanation:`位置0的4對應4，位置對(A=1)；7、9數字有出現但位置不對(B=2)。輸出1A2B。`},{input:`3
3 5 8
5 3 8`,output:`1A2B`,explanation:`位置2的8對應8，位置對(A=1)；3、5數字有出現但位置不對(B=2)。輸出1A2B。`}],testCases:[{input:`4
4 7 1 9
4 9 7 8`,expectedOutput:`1A2B`,output:`1A2B`,score:20,hidden:!1},{input:`3
3 5 8
5 3 8`,expectedOutput:`1A2B`,output:`1A2B`,score:20,hidden:!1},{input:`4
1 2 3 4
1 2 3 4`,expectedOutput:`4A0B`,output:`4A0B`,score:20,hidden:!1},{input:`4
1 2 3 4
4 3 2 1`,expectedOutput:`0A4B`,output:`0A4B`,score:20,hidden:!1},{input:`5
1 2 3 4 5
5 4 3 2 1`,expectedOutput:`1A4B`,output:`1A4B`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`經典的猜數字（Mastermind）計分規則，需要分別計算位置相符與數值相符但位置錯誤的數量。`,exportDecision:`Claude 依使用者提供的114-新竹縣國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`集合比對`],subConcepts:[`位置與數值比對`],algorithm:[`集合運算`],dataStructure:[`清單、集合`],syntax:[`for`,`集合交集運算`],math:[],context:[`益智情境`,`猜數字遊戲`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JHsinchuC-3`,title:`寶可夢訓練師`,problemTitle:`寶可夢訓練師`,courseCode:`114JHsinchuC`,courseName:`114-新竹縣國中`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`訓練師依序捕捉 N 筆「屬性 數量」紀錄。請將相同屬性的數量加總，只在該屬性「第一次出現」的位置輸出一次（依屬性最早出現的順序），格式為「屬性總數量」。`,inputDescription:`第一行輸入紀錄筆數 N。
第二行輸入 N 組「屬性 數量」，共 2N 個項目。`,outputDescription:`依屬性首次出現順序，輸出「屬性總數量」，以空格分隔。`,statement:{description:`訓練師依序捕捉 N 筆「屬性 數量」紀錄。請將相同屬性的數量加總，只在該屬性「第一次出現」的位置輸出一次（依屬性最早出現的順序），格式為「屬性總數量」。`,input:`第一行輸入紀錄筆數 N。
第二行輸入 N 組「屬性 數量」，共 2N 個項目。`,output:`依屬性首次出現順序，輸出「屬性總數量」，以空格分隔。`},examples:[{input:`5
火 2 水 1 火 3 電 2 水 1`,output:`火5 水2 電2`,explanation:`火最早出現在第1筆，兩次共2+3=5；水最早出現在第2筆，兩次共1+1=2；電只出現一次為2。依首次出現順序輸出「火5 水2 電2」。`},{input:`4
草 1 草 2 毒 3 草 4`,output:`草7 毒3`,explanation:`草出現3次共1+2+4=7；毒出現1次為3，輸出「草7 毒3」。`}],testCases:[{input:`5
火 2 水 1 火 3 電 2 水 1`,expectedOutput:`火5 水2 電2`,output:`火5 水2 電2`,score:20,hidden:!1},{input:`4
草 1 草 2 毒 3 草 4`,expectedOutput:`草7 毒3`,output:`草7 毒3`,score:20,hidden:!1},{input:`3
水 5 水 5 水 5`,expectedOutput:`水15`,output:`水15`,score:20,hidden:!1},{input:`6
火 1 水 2 電 3 草 4 毒 5 火 6`,expectedOutput:`火7 水2 電3 草4 毒5`,output:`火7 水2 電3 草4 毒5`,score:20,hidden:!1},{input:`2
電 10 火 20`,expectedOutput:`電10 火20`,output:`電10 火20`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`將重複類別的數量累加，並依照類別首次出現的順序輸出，練習用清單記錄已出現過的類別。`,exportDecision:`Claude 依使用者提供的114-新竹縣國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`分組累加`],subConcepts:[`依首次出現順序統計`],algorithm:[`分組累加`],dataStructure:[`清單、對照表`],syntax:[`for`,`if（是否已出現過）`],math:[],context:[`遊戲情境`,`寶可夢`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JHsinchuC-4`,title:`機器人行走軌跡`,problemTitle:`機器人行走軌跡`,courseCode:`114JHsinchuC`,courseName:`114-新竹縣國中`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`機器人從座標 (0,0) 出發，活動範圍限制在 0≤x≤10、0≤y≤10 之間。依序輸入移動指令（U上、D下、L左、R右，加上步數），若移動後會超出邊界，則座標只會移動到邊界處（不會超出範圍）。請輸出所有指令執行完後的最終座標。`,inputDescription:`第一行輸入指令數量 N。
第二行輸入 N 個指令，格式如 U2、D3（方向加步數），以空格分隔。`,outputDescription:`輸出最終座標，格式為「(x,y)」。`,statement:{description:`機器人從座標 (0,0) 出發，活動範圍限制在 0≤x≤10、0≤y≤10 之間。依序輸入移動指令（U上、D下、L左、R右，加上步數），若移動後會超出邊界，則座標只會移動到邊界處（不會超出範圍）。請輸出所有指令執行完後的最終座標。`,input:`第一行輸入指令數量 N。
第二行輸入 N 個指令，格式如 U2、D3（方向加步數），以空格分隔。`,output:`輸出最終座標，格式為「(x,y)」。`},examples:[{input:`5
U2 D3 D4 L5 R3`,output:`(3,0)`,explanation:`U2讓y=2；D3讓y=-1超界，限制為0；D4同樣限制為0；L5讓x=-5超界，限制為0；R3讓x=3。最終(3,0)。`},{input:`4
R3 L2 U3 D1`,output:`(1,2)`,explanation:`R3讓x=3；L2讓x=1；U3讓y=3；D1讓y=2。最終(1,2)。`}],testCases:[{input:`5
U2 D3 D4 L5 R3`,expectedOutput:`(3,0)`,output:`(3,0)`,score:20,hidden:!1},{input:`4
R3 L2 U3 D1`,expectedOutput:`(1,2)`,output:`(1,2)`,score:20,hidden:!1},{input:`3
R15 U15 D3`,expectedOutput:`(10,7)`,output:`(10,7)`,score:20,hidden:!1},{input:`2
U5 U10`,expectedOutput:`(0,10)`,output:`(0,10)`,score:20,hidden:!1},{input:`4
R5 D2 L10 U1`,expectedOutput:`(0,1)`,output:`(0,1)`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依指令移動座標，並在超出邊界時將座標限制在邊界內，練習座標模擬與邊界處理。`,exportDecision:`Claude 依使用者提供的114-新竹縣國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`模擬`],subConcepts:[`邊界限制`],algorithm:[`座標模擬`],dataStructure:[`無`],syntax:[`for`,`if`,`最大最小限制`],math:[],context:[`科技情境`,`機器人`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JHsinchuC-5`,title:`學校運動會`,problemTitle:`學校運動會`,courseCode:`114JHsinchuC`,courseName:`114-新竹縣國中`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`學校運動會共有 N 班（N≥3）參賽，各班有一個總得分。請將各班依得分由高到低排序，輸出得分前「N/2（四捨五入取整數）」名的班級名稱（依排序順序）。`,inputDescription:`第一行輸入班級數量 N。
第二行輸入 N 組「班級名稱 得分」，共 2N 個項目。`,outputDescription:`輸出得分前 N/2（四捨五入）名的班級名稱，依名次順序以空格分隔。`,statement:{description:`學校運動會共有 N 班（N≥3）參賽，各班有一個總得分。請將各班依得分由高到低排序，輸出得分前「N/2（四捨五入取整數）」名的班級名稱（依排序順序）。`,input:`第一行輸入班級數量 N。
第二行輸入 N 組「班級名稱 得分」，共 2N 個項目。`,output:`輸出得分前 N/2（四捨五入）名的班級名稱，依名次順序以空格分隔。`},examples:[{input:`5
一甲 85 二乙 92 三丙 78 四丁 95 五戊 88`,output:`四丁 二乙 五戊`,explanation:`5班取前round(5/2)=3名：得分95(四丁)、92(二乙)、88(五戊)最高，故輸出「四丁 二乙 五戊」。`},{input:`3
一甲 70 二乙 90 三丙 80`,output:`二乙 三丙`,explanation:`3班取前round(3/2)=2名：得分90(二乙)、80(三丙)最高，輸出「二乙 三丙」。`}],testCases:[{input:`5
一甲 85 二乙 92 三丙 78 四丁 95 五戊 88`,expectedOutput:`四丁 二乙 五戊`,output:`四丁 二乙 五戊`,score:20,hidden:!1},{input:`3
一甲 70 二乙 90 三丙 80`,expectedOutput:`二乙 三丙`,output:`二乙 三丙`,score:20,hidden:!1},{input:`4
A 10 B 40 C 30 D 20`,expectedOutput:`B C`,output:`B C`,score:20,hidden:!1},{input:`6
A 1 B 2 C 3 D 4 E 5 F 6`,expectedOutput:`F E D`,output:`F E D`,score:20,hidden:!1},{input:`3
A 50 B 50 C 10`,expectedOutput:`A B`,output:`A B`,score:20,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`依分數排序後取前面約一半的名次（四捨五入），練習排序與比例取值。`,exportDecision:`Claude 依使用者提供的114-新竹縣國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`排序`],subConcepts:[`取前半排名`],algorithm:[`排序`],dataStructure:[`清單`],syntax:[`排序`,`四捨五入`],math:[],context:[`校園情境`,`運動會`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JHsinchuC-6`,title:`機器人跳樓梯`,problemTitle:`機器人跳樓梯`,courseCode:`114JHsinchuC`,courseName:`114-新竹縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`機器人要爬 N 階樓梯，每次最多可以跳 K 階（1≤K≤N≤30）。請計算機器人到達第 N 階的方法總數。`,inputDescription:`第一行輸入階梯數 N。
第二行輸入單次最多跳躍階數 K。`,outputDescription:`輸出到達第 N 階的方法總數。`,statement:{description:`機器人要爬 N 階樓梯，每次最多可以跳 K 階（1≤K≤N≤30）。請計算機器人到達第 N 階的方法總數。`,input:`第一行輸入階梯數 N。
第二行輸入單次最多跳躍階數 K。`,output:`輸出到達第 N 階的方法總數。`},examples:[{input:`4
2`,output:`5`,explanation:`一次跳1或2階到達第4階，共5種走法。`},{input:`4
3`,output:`7`,explanation:`一次跳1、2或3階到達第4階，共7種走法。`}],testCases:[{input:`4
2`,expectedOutput:`5`,output:`5`,score:17,hidden:!1},{input:`4
3`,expectedOutput:`7`,output:`7`,score:17,hidden:!1},{input:`1
1`,expectedOutput:`1`,output:`1`,score:17,hidden:!1},{input:`5
1`,expectedOutput:`1`,output:`1`,score:17,hidden:!1},{input:`6
2`,expectedOutput:`13`,output:`13`,score:17,hidden:!1},{input:`10
2`,expectedOutput:`89`,output:`89`,score:17,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`經典爬樓梯問題的推廣版本（一次最多跳K階），需要用遞推公式累加前K個狀態的方法數。`,exportDecision:`Claude 依使用者提供的114-新竹縣國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`動態規劃`],subConcepts:[`爬樓梯變形`],algorithm:[`動態規劃`,`遞推`],dataStructure:[`清單`],syntax:[`for（巢狀）`,`遞推公式`],math:[],context:[`科技情境`,`機器人`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};