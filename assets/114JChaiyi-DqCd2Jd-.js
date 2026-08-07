var e={code:`114JChaiyi`,title:`114-嘉義市國中`,type:`programming`,mode:`learning`,description:`嘉義市114學年度科技教育創意實作競賽-國中資訊科技組題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-07T14:15:54.883Z`,sourceCsv:`data/problem_bank_master_complete.csv`,problemSetTitle:`114-嘉義市國中`,version:`manual-transcription-verified`},tasks:[{id:`114JChaiyi-1`,title:`智慧手環的健康挑戰`,problemTitle:`智慧手環的健康挑戰`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`智慧手環記錄 N 個小時的步數。若某小時步數低於活躍門檻 K，視為靜態時段，該小時累積 1 點警告；若該小時是「連續靜態」的第 2 小時（含）以後，改累積 2 點警告（只要連續靜態就持續是 2 點，直到某小時步數達標中斷連續才重新從 1 點開始算）。請計算總警告點數。`,inputDescription:`第一行輸入監測小時數 N。
第二行輸入活躍門檻 K。
第三行輸入 N 個小時的步數。`,outputDescription:`輸出總警告點數。`,statement:{description:`智慧手環記錄 N 個小時的步數。若某小時步數低於活躍門檻 K，視為靜態時段，該小時累積 1 點警告；若該小時是「連續靜態」的第 2 小時（含）以後，改累積 2 點警告（只要連續靜態就持續是 2 點，直到某小時步數達標中斷連續才重新從 1 點開始算）。請計算總警告點數。`,input:`第一行輸入監測小時數 N。
第二行輸入活躍門檻 K。
第三行輸入 N 個小時的步數。`,output:`輸出總警告點數。`},examples:[{input:`5
1000
800 900 1200 500 400`,output:`6`,explanation:`第1、2小時連續靜態(1+2=3)，第3小時達標，第4、5小時步數皆達標，總計3。`},{input:`4
500
600 700 800 900`,output:`0`,explanation:`所有小時步數皆達標，無警告，總計0。`}],testCases:[{input:`5
1000
800 900 1200 500 400`,expectedOutput:`6`,output:`6`,score:14,hidden:!1},{input:`4
500
600 700 800 900`,expectedOutput:`0`,output:`0`,score:14,hidden:!1},{input:`3
1000
1200 1500 2000`,expectedOutput:`0`,output:`0`,score:14,hidden:!1},{input:`4
800
500 600 700 400`,expectedOutput:`7`,output:`7`,score:14,hidden:!1},{input:`5
100
50 150 50 50 150`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`6
2000
1000 1000 1000 2500 1000 1000`,expectedOutput:`8`,output:`8`,score:14,hidden:!1},{input:`10
500
400 400 400 600 600 400 400 400 400 400`,expectedOutput:`14`,output:`14`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要追蹤連續靜態小時的streak，並依streak位置給予不同警告分數，練習狀態變數的維護。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`狀態追蹤`],subConcepts:[`連續事件計數`],algorithm:[`狀態追蹤`],dataStructure:[`清單`],syntax:[`for`,`if`,`累加變數`],math:[],context:[`生活情境`,`穿戴裝置`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-2`,title:`神秘的古代石板`,problemTitle:`神秘的古代石板`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`古代石板上刻著一串超長數字（結尾加上字母 a 作為標記，計算時應忽略），請判斷：(1) 這個數字是否為 5 的倍數（末位是 0 或 5）；(2) 這個數字是否為 11 的倍數（從右邊數來，奇數位數字和減去偶數位數字和，若此差為 11 的倍數，則原數字也是 11 的倍數）。依序輸出兩個判斷結果（1 表示是，0 表示否）。`,inputDescription:`輸入一個超長數字字串，結尾有字母 a 標記。`,outputDescription:`輸出兩個數字（以空格分隔）：是否為5的倍數、是否為11的倍數（1或0）。`,statement:{description:`古代石板上刻著一串超長數字（結尾加上字母 a 作為標記，計算時應忽略），請判斷：(1) 這個數字是否為 5 的倍數（末位是 0 或 5）；(2) 這個數字是否為 11 的倍數（從右邊數來，奇數位數字和減去偶數位數字和，若此差為 11 的倍數，則原數字也是 11 的倍數）。依序輸出兩個判斷結果（1 表示是，0 表示否）。`,input:`輸入一個超長數字字串，結尾有字母 a 標記。`,output:`輸出兩個數字（以空格分隔）：是否為5的倍數、是否為11的倍數（1或0）。`},examples:[{input:`55a`,output:`1 1`,explanation:`55末位5→5的倍數；5-5=0是11的倍數，故輸出1 1。`},{input:`1234a`,output:`0 0`,explanation:`1234末位4不是0或5→非5的倍數；4-3+2-1=2不是11的倍數，故輸出0 0。`}],testCases:[{input:`55a`,expectedOutput:`1 1`,output:`1 1`,score:13,hidden:!1},{input:`1234a`,expectedOutput:`0 0`,output:`0 0`,score:13,hidden:!1},{input:`1651651651651651651651650a`,expectedOutput:`1 1`,output:`1 1`,score:13,hidden:!1},{input:`35a`,expectedOutput:`1 0`,output:`1 0`,score:13,hidden:!1},{input:`121a`,expectedOutput:`0 1`,output:`0 1`,score:13,hidden:!1},{input:`123a`,expectedOutput:`0 0`,output:`0 0`,score:13,hidden:!1},{input:`55555555555555555555555555a`,expectedOutput:`1 1`,output:`1 1`,score:13,hidden:!1},{input:`5060506050605060506050605060a`,expectedOutput:`1 1`,output:`1 1`,score:13,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要處理超長數字字串（不能轉成一般整數），並實作5的倍數與11的倍數的數字判斷規則。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`數字規則判斷`],subConcepts:[`整除規則`],algorithm:[`整除規則判斷`],dataStructure:[`字串`],syntax:[`字串索引`,`奇偶位置加總`],math:[],context:[`奇幻情境`,`古代石板`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-3`,title:`資源回收車的極限挑戰`,problemTitle:`資源回收車的極限挑戰`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`資源回收車有 N 包待回收物，每包有重量，回收車容量為 K。請問將回收物由輕到重依序裝載，最多可以裝下幾包（裝到不能再裝為止）？`,inputDescription:`第一行輸入回收物包數 N。
第二行輸入容量 K。
第三行輸入 N 個包裹重量。`,outputDescription:`輸出最多可裝載的包數。`,statement:{description:`資源回收車有 N 包待回收物，每包有重量，回收車容量為 K。請問將回收物由輕到重依序裝載，最多可以裝下幾包（裝到不能再裝為止）？`,input:`第一行輸入回收物包數 N。
第二行輸入容量 K。
第三行輸入 N 個包裹重量。`,output:`輸出最多可裝載的包數。`},examples:[{input:`5
10
5 8 3 2 4`,output:`3`,explanation:`由輕到重2,3,4,5,8：2+3+4=9≤10可裝3包，加8會超過，故最多3包。`},{input:`4
20
10 10 10 10`,output:`2`,explanation:`10+10=20≤20可裝2包，再加10會超過，故最多2包。`}],testCases:[{input:`5
10
5 8 3 2 4`,expectedOutput:`3`,output:`3`,score:14,hidden:!1},{input:`4
20
10 10 10 10`,expectedOutput:`2`,output:`2`,score:14,hidden:!1},{input:`3
100
20 30 40`,expectedOutput:`3`,output:`3`,score:14,hidden:!1},{input:`5
10
20 30 40 50 60`,expectedOutput:`0`,output:`0`,score:14,hidden:!1},{input:`5
10
1 2 3 4 5`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`6
15
5 10 5 10 5 10`,expectedOutput:`3`,output:`3`,score:14,hidden:!1},{input:`8
50
100 2 100 3 100 5 100 8`,expectedOutput:`4`,output:`4`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`將重量由小到大排序後貪心裝載，是容量限制下求最大裝載件數的經典入門題。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`貪心演算法`],subConcepts:[`容量裝載`],algorithm:[`貪心`,`排序`],dataStructure:[`清單`],syntax:[`排序`,`累加`,`for`],math:[],context:[`生活情境`,`資源回收`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-4`,title:`大隊接力的棒次安排`,problemTitle:`大隊接力的棒次安排`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`大隊接力共有 N（偶數）位同學，每人有一個能力值。安排方式為：將所有同學依能力值排序後，最快的配最慢的、次快的配次慢的，以此類推，兩兩一組。請計算所有組別中，能力值總和的最大值。`,inputDescription:`第一行輸入同學人數 N（偶數）。
第二行輸入 N 個能力值。`,outputDescription:`輸出各組能力總和中的最大值。`,statement:{description:`大隊接力共有 N（偶數）位同學，每人有一個能力值。安排方式為：將所有同學依能力值排序後，最快的配最慢的、次快的配次慢的，以此類推，兩兩一組。請計算所有組別中，能力值總和的最大值。`,input:`第一行輸入同學人數 N（偶數）。
第二行輸入 N 個能力值。`,output:`輸出各組能力總和中的最大值。`},examples:[{input:`4
10 90 20 80`,output:`100`,explanation:`排序後[90,80,20,10]，配對(90,10)=100、(80,20)=100，最大值100。`},{input:`6
1 5 10 20 50 100`,output:`101`,explanation:`排序後[100,50,20,10,5,1]，配對(100,1)=101、(50,5)=55、(20,10)=30，最大值101。`}],testCases:[{input:`4
10 90 20 80`,expectedOutput:`100`,output:`100`,score:14,hidden:!1},{input:`6
1 5 10 20 50 100`,expectedOutput:`101`,output:`101`,score:14,hidden:!1},{input:`2
50 60`,expectedOutput:`110`,output:`110`,score:14,hidden:!1},{input:`4
1 10 2 9`,expectedOutput:`11`,output:`11`,score:14,hidden:!1},{input:`6
10 20 30 40 50 60`,expectedOutput:`70`,output:`70`,score:14,hidden:!1},{input:`6
10 80 20 70 30 75`,expectedOutput:`100`,output:`100`,score:14,hidden:!1},{input:`8
1 100 2 99 3 98 50 50`,expectedOutput:`101`,output:`101`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`將能力值排序後以最大配最小的方式配對，求各組能力和的最大值，練習排序後的雙端配對策略。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`排序配對`],subConcepts:[`S型配對最佳化`],algorithm:[`排序`,`配對最佳化`],dataStructure:[`清單`],syntax:[`排序`,`for`,`最大值`],math:[],context:[`運動情境`,`大隊接力`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-5`,title:`變速傳球的特訓`,problemTitle:`變速傳球的特訓`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`N 位同學圍成一圈（編號 1~N），球從 1 號開始持有。每一回合，若目前持球者編號是奇數，球往順時針方向傳 1 人；若是偶數，傳 2 人（超過 N 號會回到 1 號繼續數）。請問經過 K 回合後，球在幾號同學手上？`,inputDescription:`第一行輸入圍圈人數 N。
第二行輸入回合數 K。`,outputDescription:`輸出 K 回合後持球同學的編號。`,statement:{description:`N 位同學圍成一圈（編號 1~N），球從 1 號開始持有。每一回合，若目前持球者編號是奇數，球往順時針方向傳 1 人；若是偶數，傳 2 人（超過 N 號會回到 1 號繼續數）。請問經過 K 回合後，球在幾號同學手上？`,input:`第一行輸入圍圈人數 N。
第二行輸入回合數 K。`,output:`輸出 K 回合後持球同學的編號。`},examples:[{input:`5
3`,output:`1`,explanation:`1號(奇)傳1人變2號；2號(偶)傳2人變4號；4號(偶)傳2人變1號(4+2=6超過5回到1)，3回合後為1號。`},{input:`6
2`,output:`4`,explanation:`1號傳1變2號；2號傳2變4號，2回合後為4號。`}],testCases:[{input:`5
3`,expectedOutput:`1`,output:`1`,score:14,hidden:!1},{input:`6
2`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`3
1`,expectedOutput:`2`,output:`2`,score:14,hidden:!1},{input:`5
5`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`10
4`,expectedOutput:`8`,output:`8`,score:14,hidden:!1},{input:`8
10`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`100
50`,expectedOutput:`100`,output:`100`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要以環狀（模運算）方式模擬傳球位置，並依編號奇偶決定傳球步數，練習模運算與模擬迴圈。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`模擬`],subConcepts:[`環狀走位`],algorithm:[`模擬`,`模運算`],dataStructure:[`無`],syntax:[`for`,`if`,`模運算`],math:[],context:[`運動情境`,`傳球特訓`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-6`,title:`校園密室逃脫：書架的密碼`,problemTitle:`校園密室逃脫：書架的密碼`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`書架的密碼鎖需要輸入一組二進位字串（只包含 0 與 1），請將它轉換成十進位數字作為密碼。`,inputDescription:`輸入一個二進位字串 S。`,outputDescription:`輸出轉換後的十進位數字。`,statement:{description:`書架的密碼鎖需要輸入一組二進位字串（只包含 0 與 1），請將它轉換成十進位數字作為密碼。`,input:`輸入一個二進位字串 S。`,output:`輸出轉換後的十進位數字。`},examples:[{input:`101`,output:`5`,explanation:`二進位101轉十進位為5。`},{input:`1111`,output:`15`,explanation:`二進位1111轉十進位為15。`}],testCases:[{input:`101`,expectedOutput:`5`,output:`5`,score:14,hidden:!1},{input:`1111`,expectedOutput:`15`,output:`15`,score:14,hidden:!1},{input:`10`,expectedOutput:`2`,output:`2`,score:14,hidden:!1},{input:`110`,expectedOutput:`6`,output:`6`,score:14,hidden:!1},{input:`1000`,expectedOutput:`8`,output:`8`,score:14,hidden:!1},{input:`11011`,expectedOutput:`27`,output:`27`,score:14,hidden:!1},{input:`1111101000`,expectedOutput:`1000`,output:`1000`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`將二進位字串轉換為十進位數值，是進位系統轉換的基礎題。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`密室解謎系列`],subConcepts:[`演算法基礎`],algorithm:[`進位轉換`],dataStructure:[`字串`],syntax:[`字串轉數字`,`進位換算`],math:[],context:[`解謎情境`,`校園密室逃脫`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-7`,title:`校園密室逃脫：費氏階梯`,problemTitle:`校園密室逃脫：費氏階梯`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`密室出口前有 N 階階梯，每次可以走 1 階或 2 階，請問總共有幾種走法可以走完 N 階？`,inputDescription:`輸入階梯數量 N。`,outputDescription:`輸出走完 N 階的走法總數。`,statement:{description:`密室出口前有 N 階階梯，每次可以走 1 階或 2 階，請問總共有幾種走法可以走完 N 階？`,input:`輸入階梯數量 N。`,output:`輸出走完 N 階的走法總數。`},examples:[{input:`3`,output:`3`,explanation:`3階走法：1+1+1、1+2、2+1，共3種。`},{input:`4`,output:`5`,explanation:`4階走法共5種。`}],testCases:[{input:`3`,expectedOutput:`3`,output:`3`,score:14,hidden:!1},{input:`4`,expectedOutput:`5`,output:`5`,score:14,hidden:!1},{input:`1`,expectedOutput:`1`,output:`1`,score:14,hidden:!1},{input:`5`,expectedOutput:`8`,output:`8`,score:14,hidden:!1},{input:`10`,expectedOutput:`89`,output:`89`,score:14,hidden:!1},{input:`15`,expectedOutput:`987`,output:`987`,score:14,hidden:!1},{input:`20`,expectedOutput:`10946`,output:`10946`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`每次可走1或2階，走法總數即為費氏數列，練習遞迴關係轉迭代計算。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`密室解謎系列`],subConcepts:[`演算法基礎`],algorithm:[`費氏數列`,`動態規劃`],dataStructure:[`無`],syntax:[`for`,`遞推公式`],math:[],context:[`解謎情境`,`校園密室逃脫`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-8`,title:`校園密室逃脫：書架修繕工程`,problemTitle:`校園密室逃脫：書架修繕工程`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L4`,blocklyFit:`中`,requiresGreenFlag:!0,description:`書架修繕需要 N 根長度不一的木材，切出至少 K 根等長的木條（木材只能切割不能拼接）。請找出可以切出的木條最大可能長度。`,inputDescription:`第一行輸入木材數量 N。
第二行輸入所需木條數量 K。
第三行輸入 N 根木材的長度。`,outputDescription:`輸出可切出至少 K 根木條的最大長度。`,statement:{description:`書架修繕需要 N 根長度不一的木材，切出至少 K 根等長的木條（木材只能切割不能拼接）。請找出可以切出的木條最大可能長度。`,input:`第一行輸入木材數量 N。
第二行輸入所需木條數量 K。
第三行輸入 N 根木材的長度。`,output:`輸出可切出至少 K 根木條的最大長度。`},examples:[{input:`3
4
10 20 30`,output:`10`,explanation:`長度10可切出1+2+3=6根≥4，長度11只能切出0+1+2=3根<4，故最大長度為10。`},{input:`3
7
21 15 10`,output:`5`,explanation:`長度5可切出4+3+2=9根≥7，長度6只能切出3+2+1=6根<7，故最大長度為5。`}],testCases:[{input:`3
4
10 20 30`,expectedOutput:`10`,output:`10`,score:14,hidden:!1},{input:`3
7
21 15 10`,expectedOutput:`5`,output:`5`,score:14,hidden:!1},{input:`1
5
100`,expectedOutput:`20`,output:`20`,score:14,hidden:!1},{input:`3
3
10 10 10`,expectedOutput:`10`,output:`10`,score:14,hidden:!1},{input:`2
5
50 50`,expectedOutput:`16`,output:`16`,score:14,hidden:!1},{input:`5
10
100 200 50 120 80`,expectedOutput:`50`,output:`50`,score:14,hidden:!1},{input:`4
6
15 25 35 45`,expectedOutput:`15`,output:`15`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`經典的「切割木材求最大等長木條長度」二分搜尋題，需要結合可行性檢查與二分搜尋。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`密室解謎系列`],subConcepts:[`演算法基礎`],algorithm:[`二分搜尋`],dataStructure:[`清單`],syntax:[`while（二分）`,`for`,`整數除法`],math:[],context:[`解謎情境`,`校園密室逃脫`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`114JChaiyi-9`,title:`校園密室逃脫：社團聯絡網`,problemTitle:`校園密室逃脫：社團聯絡網`,courseCode:`114JChaiyi`,courseName:`114-嘉義市國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,requiresGreenFlag:!0,description:`社團聯絡網共有 N 人，其中有 M 條單向聯絡關係（起點列表與終點列表），每個人最多只會聯絡固定的下線（形成樹狀結構）。請從 1 號同學開始往下聯絡，找出最長可以聯絡到第幾層（層數以經過的聯絡次數，即邊數計算）。`,inputDescription:`第一行輸入人數 N。
第二行輸入聯絡關係數量 M。
第三行輸入 M 個聯絡關係的起點。
第四行輸入 M 個聯絡關係的終點。`,outputDescription:`輸出從 1 號同學出發能聯絡到的最長邊數。`,statement:{description:`社團聯絡網共有 N 人，其中有 M 條單向聯絡關係（起點列表與終點列表），每個人最多只會聯絡固定的下線（形成樹狀結構）。請從 1 號同學開始往下聯絡，找出最長可以聯絡到第幾層（層數以經過的聯絡次數，即邊數計算）。`,input:`第一行輸入人數 N。
第二行輸入聯絡關係數量 M。
第三行輸入 M 個聯絡關係的起點。
第四行輸入 M 個聯絡關係的終點。`,output:`輸出從 1 號同學出發能聯絡到的最長邊數。`},examples:[{input:`3
2
1 2
2 3`,output:`2`,explanation:`1→2→3，共2條邊，最長路徑為2。`},{input:`4
3
1 1 3
2 3 4`,output:`2`,explanation:`1的下線是2、3；3的下線是4；故最長路徑1→3→4，2條邊。`}],testCases:[{input:`3
2
1 2
2 3`,expectedOutput:`2`,output:`2`,score:14,hidden:!1},{input:`4
3
1 1 3
2 3 4`,expectedOutput:`2`,output:`2`,score:14,hidden:!1},{input:`2
1
1
2`,expectedOutput:`1`,output:`1`,score:14,hidden:!1},{input:`5
4
1 2 3 4
2 3 4 5`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`5
4
1 2 1 4
2 3 4 5`,expectedOutput:`2`,output:`2`,score:14,hidden:!1},{input:`6
5
1 2 3 4 1
2 3 4 6 5`,expectedOutput:`4`,output:`4`,score:14,hidden:!1},{input:`7
6
1 2 3 4 2 3
2 3 4 5 6 7`,expectedOutput:`4`,output:`4`,score:14,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:`低`,flags:[],note:`需要建立樹狀連絡網並從根節點做深度優先搜尋找最長路徑，練習樹狀結構的走訪。`,exportDecision:`Claude 依使用者提供的114-嘉義市國中PDF手動轉錄並驗證`},tags:{mainConcepts:[`密室解謎系列`],subConcepts:[`演算法基礎`],algorithm:[`樹狀走訪`,`DFS`],dataStructure:[`鄰接表`],syntax:[`遞迴或堆疊`,`最大值`],math:[],context:[`解謎情境`,`校園密室逃脫`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};