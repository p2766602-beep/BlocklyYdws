var e={code:`114ETaipei`,title:`114-臺北市國小`,type:`programming`,mode:`learning`,description:`臺北市114學年度國小組資訊科技競賽練習題，涵蓋字串處理、不定長度輸入解析與行程長度編碼。`,tasks:[{id:`Taipei-E-1`,title:`崔老師的出缺席紀錄表`,problemTitle:`崔老師的出缺席紀錄表`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`崔老師用二維清單記錄一週的出席狀況：
小明到到缺到到
小美到缺缺到到
說明：
每一列是一位學生
第一個元素是姓名
後面五個元素代表星期一到星期五的出席狀況
【任務】
輸入學生姓名與出席紀錄，顯示該名學生缺席幾天
輸出格式：小明缺席1天`,inputDescription:`輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。`,outputDescription:`輸出「姓名缺席X天」，X為5天中缺席的次數。`,statement:{description:`崔老師用二維清單記錄一週的出席狀況：
小明到到缺到到
小美到缺缺到到
說明：
每一列是一位學生
第一個元素是姓名
後面五個元素代表星期一到星期五的出席狀況
【任務】
輸入學生姓名與出席紀錄，顯示該名學生缺席幾天
輸出格式：小明缺席1天`,input:`輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。`,output:`輸出「姓名缺席X天」，X為5天中缺席的次數。`},examples:[{input:`小明到到缺到到`,output:`小明缺席1天`,explanation:`小明有 1 個缺`},{input:`小美到缺缺到到`,output:`小美缺席2天`,explanation:`小美有 2 個缺`}],testCases:[{input:`小明到到缺到到`,expectedOutput:`小明缺席1天`,output:`小明缺席1天`,score:10,hidden:!1},{input:`小美到缺缺到到`,expectedOutput:`小美缺席2天`,output:`小美缺席2天`,score:10,hidden:!1},{input:`阿宏到到到到到`,expectedOutput:`阿宏缺席0天`,output:`阿宏缺席0天`,score:10,hidden:!1},{input:`小安缺缺缺到缺`,expectedOutput:`小安缺席4天`,output:`小安缺席4天`,score:10,hidden:!1},{input:`小明缺缺缺到到`,expectedOutput:`小明缺席3天`,output:`小明缺席3天`,score:10,hidden:!1},{input:`大雄缺缺缺缺缺`,expectedOutput:`大雄缺席5天`,output:`大雄缺席5天`,score:10,hidden:!1},{input:`靜香到到到到到`,expectedOutput:`靜香缺席0天`,output:`靜香缺席0天`,score:10,hidden:!1},{input:`胖虎缺到缺到缺`,expectedOutput:`胖虎缺席3天`,output:`胖虎缺席3天`,score:10,hidden:!1},{input:`小夫到缺到缺到`,expectedOutput:`小夫缺席2天`,output:`小夫缺席2天`,score:10,hidden:!1},{input:`王同學到到到到缺`,expectedOutput:`王同學缺席1天`,output:`王同學缺席1天`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t1_s">S</variable><variable id="t1_len">len</variable><variable id="t1_namelen">namelen</variable><variable id="t1_name">name</variable><variable id="t1_i">i</variable><variable id="t1_ch">ch</variable><variable id="t1_absent">absent</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入出缺席紀錄</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_s">S</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t1_len">len</field><value name="VALUE"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t1_s">S</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t1_namelen">namelen</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_len">len</field></block></value><value name="B"><block type="math_number"><field name="NUM">5</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t1_name">name</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="controls_for"><field name="VAR" id="t1_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t1_namelen">namelen</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t1_name">name</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t1_name">name</field></block></value><value name="ADD1"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t1_s">S</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t1_i">i</field></block></value></block></value></block></value></block></statement><next><block type="variables_set"><field name="VAR" id="t1_absent">absent</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t1_i">i</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_namelen">namelen</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t1_len">len</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t1_ch">ch</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t1_s">S</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t1_i">i</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_ch">ch</field></block></value><value name="B"><block type="text"><field name="TEXT">缺</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t1_absent">absent</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_absent">absent</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t1_name">name</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">缺席</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t1_absent">absent</field></block></value><value name="ADD3"><block type="text"><field name="TEXT">天</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`姓名長度不固定，需用「總長度-5」反推姓名結尾位置，練習字串切割與計數。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`計數`],algorithm:[`計數`],dataStructure:[`字串`],syntax:[`字元取出`],math:[],context:[`生活情境`,`班級管理`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`Taipei-E-2`,title:`校車安全：有沒有超載？`,problemTitle:`校車安全：有沒有超載？`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。
例如：
A
2 3 4 5 6
B
1 1 2 2 3
C
7 1 1 2 2
【規則】
每台校車總人數 > 20：要警告超載
【任務】
計算每一台總人數，輸出「車號+總人數」，如：A車20人
若超過20，額外輸出：B車超載`,inputDescription:`用英文大寫字母輸入三臺車編號，並且輸入每一站上車人數(共五站)`,outputDescription:`A車幾人
B車幾人
C車幾人
(超載要顯示超載)`,statement:{description:`每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。
例如：
A
2 3 4 5 6
B
1 1 2 2 3
C
7 1 1 2 2
【規則】
每台校車總人數 > 20：要警告超載
【任務】
計算每一台總人數，輸出「車號+總人數」，如：A車20人
若超過20，額外輸出：B車超載`,input:`用英文大寫字母輸入三臺車編號，並且輸入每一站上車人數(共五站)`,output:`A車幾人
B車幾人
C車幾人
(超載要顯示超載)`},examples:[{input:`A
5 3 4 4 4
B
4 5 4 3 4
C
3 3 4 3 3`,output:`A車20人
B車20人
C車16人`,explanation:`A車總共 5+3+4+4+4 = 20人 B車總共 4+5+4+3+4 = 20人 C車總共 3+3+4+3+3 = 16人`},{input:`A
5 3 2 4 6
B
6 6 5 5 4
C
4 3 2 3 4`,output:`A車20人
B車超載
C車16人`,explanation:`A車總共 20人 B車總共 26人，大於20，輸出 B車超載 C車總共 16人`}],testCases:[{input:`A
5 3 2 4 6
B
6 6 5 5 4
C
4 3 2 3 4`,expectedOutput:`A車20人
B車超載
C車16人`,output:`A車20人
B車超載
C車16人`,score:10,hidden:!1},{input:`A
4 4 4 4 3
B
5 5 4 3 3
C
5 4 4 4 4`,expectedOutput:`A車19人
B車20人
C車超載`,output:`A車19人
B車20人
C車超載`,score:10,hidden:!1},{input:`A
3 4 4 4 4
B
4 4 4 4 4
C
5 3 4 4 3`,expectedOutput:`A車19人
B車20人
C車19人`,output:`A車19人
B車20人
C車19人`,score:10,hidden:!1},{input:`A
5 5 4 4 4
B
6 5 5 3 3
C
4 4 4 4 5`,expectedOutput:`A車超載
B車超載
C車超載`,output:`A車超載
B車超載
C車超載`,score:10,hidden:!1},{input:`A
3 4 3 4 6
B
4 4 4 4 3
C
2 6 6 4 3`,expectedOutput:`A車20人
B車19人
C車超載`,output:`A車20人
B車19人
C車超載`,score:10,hidden:!1},{input:`A
0 0 0 0 0
B
1 1 1 1 1
C
2 2 2 2 2`,expectedOutput:`A車0人
B車5人
C車10人`,output:`A車0人
B車5人
C車10人`,score:10,hidden:!1},{input:`A
4 4 4 4 4
B
5 5 5 5 5
C
6 6 6 6 6`,expectedOutput:`A車20人
B車超載
C車超載`,output:`A車20人
B車超載
C車超載`,score:10,hidden:!1},{input:`X
1 2 3 4 5
Y
5 5 5 5 5
Z
5 5 5 5 1`,expectedOutput:`X車15人
Y車超載
Z車超載`,output:`X車15人
Y車超載
Z車超載`,score:10,hidden:!1},{input:`P
10 10 1 0 0
Q
0 0 0 0 21
R
10 10 0 0 0`,expectedOutput:`P車超載
Q車超載
R車20人`,output:`P車超載
Q車超載
R車20人`,score:10,hidden:!1},{input:`M
3 3 3 3 3
N
2 2 2 2 2
O
1 1 1 1 1`,expectedOutput:`M車15人
N車10人
O車5人`,output:`M車15人
N車10人
O車5人`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t2_code">code</variable><variable id="t2_sum">sum</variable><variable id="t2_v">v</variable><variable id="t2_j">j</variable><variable id="t2_msg1">msg1</variable><variable id="t2_msg2">msg2</variable><variable id="t2_msg3">msg3</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t2_code">code</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_sum">sum</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t2_j">j</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">5</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t2_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t2_sum">sum</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t2_v">v</field></block></value></block></value></block></next></block></next></block></statement><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="B"><block type="math_number"><field name="NUM">20</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t2_msg1">msg1</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t2_code">code</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">車超載</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t2_msg1">msg1</field><value name="VALUE"><block type="text_join"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t2_code">code</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">車</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="ADD3"><block type="text"><field name="TEXT">人</field></block></value></block></value></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t2_code">code</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_sum">sum</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t2_j">j</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">5</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t2_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t2_sum">sum</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t2_v">v</field></block></value></block></value></block></next></block></next></block></statement><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="B"><block type="math_number"><field name="NUM">20</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t2_msg2">msg2</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t2_code">code</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">車超載</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t2_msg2">msg2</field><value name="VALUE"><block type="text_join"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t2_code">code</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">車</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="ADD3"><block type="text"><field name="TEXT">人</field></block></value></block></value></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t2_code">code</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_sum">sum</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t2_j">j</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">5</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t2_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t2_sum">sum</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t2_v">v</field></block></value></block></value></block></next></block></next></block></statement><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="B"><block type="math_number"><field name="NUM">20</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t2_msg3">msg3</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t2_code">code</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">車超載</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t2_msg3">msg3</field><value name="VALUE"><block type="text_join"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t2_code">code</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">車</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t2_sum">sum</field></block></value><value name="ADD3"><block type="text"><field name="TEXT">人</field></block></value></block></value></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t2_msg1">msg1</field></block></value><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t2_msg2">msg2</field></block></value><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t2_msg3">msg3</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`固定3台車，各自加總5站人數並判斷是否超過20人，練習多次say()輸出多行結果。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`迴圈`],subConcepts:[`條件判斷`],algorithm:[`累加`],dataStructure:[`變數`],syntax:[`for迴圈`],math:[],context:[`生活情境`,`交通`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`Taipei-E-3`,title:`成績補考機制`,problemTitle:`成績補考機制`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。
【任務規則】
1. 使用者輸入一個數字，代表有N位學生
2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)
3. 請檢查每一個分數，若小於60則改成60，否則保持不變
4. 輸出修正後的分數表`,inputDescription:`學生數與N行成績`,outputDescription:`修正後的成績清單`,statement:{description:`學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。
【任務規則】
1. 使用者輸入一個數字，代表有N位學生
2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)
3. 請檢查每一個分數，若小於60則改成60，否則保持不變
4. 輸出修正後的分數表`,input:`學生數與N行成績`,output:`修正後的成績清單`},examples:[{input:`2
50 80 90
40 55 100`,output:`60 80 90
60 60 100`,explanation:`50 及 40, 55 小於 60，皆修正為 60。`},{input:`1
10 20 30`,output:`60 60 60`,explanation:`皆小於 60，修正為 60。`}],testCases:[{input:`1
10 20 30`,expectedOutput:`60 60 60`,output:`60 60 60`,score:10,hidden:!1},{input:`2
100 100
59 60`,expectedOutput:`100 100
60 60`,output:`100 100
60 60`,score:10,hidden:!1},{input:`3
10 10
80 80
5 95`,expectedOutput:`60 60
80 80
60 95`,output:`60 60
80 80
60 95`,score:10,hidden:!1},{input:`1
60 60 60`,expectedOutput:`60 60 60`,output:`60 60 60`,score:10,hidden:!1},{input:`2
59 58 57
61 62 63`,expectedOutput:`60 60 60
61 62 63`,output:`60 60 60
61 62 63`,score:10,hidden:!1},{input:`1
0 0 0 0 0`,expectedOutput:`60 60 60 60 60`,output:`60 60 60 60 60`,score:10,hidden:!1},{input:`4
99
100
0
60`,expectedOutput:`99
100
60
60`,output:`99
100
60
60`,score:10,hidden:!1},{input:`1
59 99`,expectedOutput:`60 99`,output:`60 99`,score:10,hidden:!1},{input:`2
80 80
40 40`,expectedOutput:`80 80
60 60`,output:`80 80
60 60`,score:10,hidden:!1},{input:`3
30
40
50`,expectedOutput:`60
60
60`,output:`60
60
60`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t3_n">N</variable><variable id="t3_all">all</variable><variable id="t3_cnt">cnt</variable><variable id="t3_done">done</variable><variable id="t3_ans">ans</variable><variable id="t3_k">k</variable><variable id="t3_r">r</variable><variable id="t3_c">c</variable><variable id="t3_idx">idx</variable><variable id="t3_val">val</variable><variable id="t3_rowout">rowout</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入學生數</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t3_all">all</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">300</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t3_cnt">cnt</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_done">done</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_whileUntil"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_done">done</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t3_ans">ans</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_ans">ans</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t3_done">done</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t3_cnt">cnt</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_cnt">cnt</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t3_all">all</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_cnt">cnt</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_ans">ans</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t3_k">k</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_cnt">cnt</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t3_r">r</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t3_rowout">rowout</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="controls_for"><field name="VAR" id="t3_c">c</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t3_k">k</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t3_idx">idx</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_r">r</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t3_k">k</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t3_c">c</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t3_val">val</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_all">all</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_idx">idx</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_val">val</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t3_val">val</field><value name="VALUE"><block type="math_number"><field name="NUM">60</field></block></value></block></statement><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_rowout">rowout</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t3_rowout">rowout</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="t3_val">val</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t3_rowout">rowout</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t3_rowout">rowout</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t3_val">val</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t3_rowout">rowout</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`每列科目數不固定但同一測資內一致，讀到輸入結束才能反推每列長度，練習不定長度輸入的處理技巧。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`條件判斷`],algorithm:[`資料重建`],dataStructure:[`清單`],syntax:[`while迴圈`],math:[],context:[`生活情境`,`教育`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`Taipei-E-4`,title:`滑動平均值`,problemTitle:`滑動平均值`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`請計算清單中連續K個數字的平均值(Moving Average)。
【任務規則】
1. 第一次輸入：一串數字，以空白分隔
2. 第二次輸入：區間大小 K
3. 請依序計算每K 個相鄰數字的平均值
4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。`,inputDescription:`數字字串與整數 K`,outputDescription:`算出的平均值數列 (數字之間以空白隔開)`,statement:{description:`請計算清單中連續K個數字的平均值(Moving Average)。
【任務規則】
1. 第一次輸入：一串數字，以空白分隔
2. 第二次輸入：區間大小 K
3. 請依序計算每K 個相鄰數字的平均值
4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。`,input:`數字字串與整數 K`,output:`算出的平均值數列 (數字之間以空白隔開)`},examples:[{input:`10 20 30 40 50
2`,output:`15 25 35 45`,explanation:`依序計算每2個相鄰數字的平均值： (10+20)/2=15 (20+30)/2=25 (30+40)/2=35 (40+50)/2=45`},{input:`2 4 6 8
2`,output:`3 5 7`,explanation:`依序計算每2個相鄰數字的平均值。`}],testCases:[{input:`2 4 6 8
2`,expectedOutput:`3 5 7`,output:`3 5 7`,score:10,hidden:!1},{input:`10 20 30
3`,expectedOutput:`20`,output:`20`,score:10,hidden:!1},{input:`5 5 5 5
1`,expectedOutput:`5 5 5 5`,output:`5 5 5 5`,score:10,hidden:!1},{input:`10 20 30 40 50
2`,expectedOutput:`15 25 35 45`,output:`15 25 35 45`,score:10,hidden:!1},{input:`1 2 3 4 5 6
3`,expectedOutput:`2 3 4 5`,output:`2 3 4 5`,score:10,hidden:!1},{input:`10 10 10 10 10
4`,expectedOutput:`10 10`,output:`10 10`,score:10,hidden:!1},{input:`0 10 20 30 40
5`,expectedOutput:`20`,output:`20`,score:10,hidden:!1},{input:`100 200 300
2`,expectedOutput:`150 250`,output:`150 250`,score:10,hidden:!1},{input:`5 15 25 35
2`,expectedOutput:`10 20 30`,output:`10 20 30`,score:10,hidden:!1},{input:`2 2 2 2 2 2 2
7`,expectedOutput:`2`,output:`2`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t4_all">all</variable><variable id="t4_cnt">cnt</variable><variable id="t4_done">done</variable><variable id="t4_ans">ans</variable><variable id="t4_k">k</variable><variable id="t4_listlen">listlen</variable><variable id="t4_start">start</variable><variable id="t4_c">c</variable><variable id="t4_sum">sum</variable><variable id="t4_avg">avg</variable><variable id="t4_out">out</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="variables_set"><field name="VAR" id="t4_all">all</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="math_number"><field name="NUM">300</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t4_cnt">cnt</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="t4_done">done</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_whileUntil"><field name="MODE">UNTIL</field><value name="BOOL"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_done">done</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入數列與區間大小K</field></block></value><next><block type="variables_set"><field name="VAR" id="t4_ans">ans</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t4_ans">ans</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t4_done">done</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t4_cnt">cnt</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_cnt">cnt</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t4_all">all</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t4_cnt">cnt</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_ans">ans</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t4_k">k</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t4_all">all</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t4_cnt">cnt</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t4_listlen">listlen</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_cnt">cnt</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t4_out">out</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="controls_for"><field name="VAR" id="t4_start">start</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_listlen">listlen</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_k">k</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t4_sum">sum</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t4_c">c</field><value name="FROM"><block type="math_number"><field name="NUM">0</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_k">k</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t4_sum">sum</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_sum">sum</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t4_all">all</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_start">start</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t4_c">c</field></block></value></block></value></block></value></block></value></block></statement><next><block type="variables_set"><field name="VAR" id="t4_avg">avg</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_round"><field name="OP">ROUND</field><value name="NUM"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_sum">sum</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t4_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1000</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1000</field></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t4_out">out</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t4_out">out</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="t4_avg">avg</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t4_out">out</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t4_out">out</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t4_avg">avg</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t4_out">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`數列長度不固定、最後一個數字才是視窗大小K，練習不定長度輸入配合固定視窗滑動平均。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`清單`],subConcepts:[`滑動視窗`],algorithm:[`滑動平均`],dataStructure:[`清單`],syntax:[`for迴圈`],math:[`平均值`],context:[`數學情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`Taipei-E-5`,title:`連續字元分段顯示`,problemTitle:`連續字元分段顯示`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。`,inputDescription:`輸入一串英文字串s。`,outputDescription:`每一組字元與次數以換行輸出。`,statement:{description:`給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。`,input:`輸入一串英文字串s。`,output:`每一組字元與次數以換行輸出。`},examples:[{input:`aaabbcddd`,output:`a3
b2
c1
d3`,explanation:`連續相同的字元分組顯示。`},{input:`aabcccddd`,output:`a2
b1
c3
d3`,explanation:`連續相同的字元分組顯示。`}],testCases:[{input:`aaabbcddd`,expectedOutput:`a3
b2
c1
d3`,output:`a3
b2
c1
d3`,score:10,hidden:!1},{input:`aabcccddd`,expectedOutput:`a2
b1
c3
d3`,output:`a2
b1
c3
d3`,score:10,hidden:!1},{input:`abc`,expectedOutput:`a1
b1
c1`,output:`a1
b1
c1`,score:10,hidden:!1},{input:`aaaaa`,expectedOutput:`a5`,output:`a5`,score:10,hidden:!1},{input:`aabbcc`,expectedOutput:`a2
b2
c2`,output:`a2
b2
c2`,score:10,hidden:!1},{input:`xxyyzz`,expectedOutput:`x2
y2
z2`,output:`x2
y2
z2`,score:10,hidden:!1},{input:`mississippi`,expectedOutput:`m1
i1
s2
i1
s2
i1
p2
i1`,output:`m1
i1
s2
i1
s2
i1
p2
i1`,score:10,hidden:!1},{input:`hello`,expectedOutput:`h1
e1
l2
o1`,output:`h1
e1
l2
o1`,score:10,hidden:!1},{input:`wwwwwxxxxxyyyyyzzzzz`,expectedOutput:`w5
x5
y5
z5`,output:`w5
x5
y5
z5`,score:10,hidden:!1},{input:`z`,expectedOutput:`z1`,output:`z1`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t5_s">S</variable><variable id="t5_i">i</variable><variable id="t5_ch">ch</variable><variable id="t5_curch">curch</variable><variable id="t5_curlen">curlen</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字串</field></block></value><next><block type="variables_set"><field name="VAR" id="t5_s">S</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t5_curch">curch</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="t5_curlen">curlen</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t5_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_s">S</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t5_ch">ch</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_s">S</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t5_i">i</field></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_ch">ch</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t5_curch">curch</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t5_curlen">curlen</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_curlen">curlen</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_curlen">curlen</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t5_curch">curch</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="t5_curlen">curlen</field></block></value></block></value></block></statement><next><block type="variables_set"><field name="VAR" id="t5_curch">curch</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_ch">ch</field></block></value><next><block type="variables_set"><field name="VAR" id="t5_curlen">curlen</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block></next></block></next></block></statement></block></next></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_curlen">curlen</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t5_curch">curch</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="t5_curlen">curlen</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`行程長度編碼(RLE)入門版，每組分段各自用say()輸出一行。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`分組計數`],algorithm:[`行程長度編碼`],dataStructure:[`字串`],syntax:[`字元取出`],math:[],context:[`資料壓縮`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`Taipei-E-6`,title:`移除指定字元後輸出新字串`,problemTitle:`移除指定字元後輸出新字串`,role:`contest`,difficulty:`L1`,blocklyFit:`高`,requiresGreenFlag:!0,description:`給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。`,inputDescription:`第一行輸入字串s。
第二行輸入目標字元 target。`,outputDescription:`輸出移除指定字元後的新字串。`,statement:{description:`給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。`,input:`第一行輸入字串s。
第二行輸入目標字元 target。`,output:`輸出移除指定字元後的新字串。`},examples:[{input:`banana
a`,output:`bnn`,explanation:`移除字串中的 a。`},{input:`roblox
o`,output:`rblx`,explanation:`移除字串中的 o。`}],testCases:[{input:`banana
a`,expectedOutput:`bnn`,output:`bnn`,score:10,hidden:!1},{input:`roblox
o`,expectedOutput:`rblx`,output:`rblx`,score:10,hidden:!1},{input:`apple
p`,expectedOutput:`ale`,output:`ale`,score:10,hidden:!1},{input:`hello
l`,expectedOutput:`heo`,output:`heo`,score:10,hidden:!1},{input:`mississippi
s`,expectedOutput:`miiippi`,output:`miiippi`,score:10,hidden:!1},{input:`programming
g`,expectedOutput:`prorammin`,output:`prorammin`,score:10,hidden:!1},{input:`abc
d`,expectedOutput:`abc`,output:`abc`,score:10,hidden:!1},{input:`abcdef
c`,expectedOutput:`abdef`,output:`abdef`,score:10,hidden:!1},{input:`xyzxyz
y`,expectedOutput:`xzxz`,output:`xzxz`,score:10,hidden:!1},{input:`google
o`,expectedOutput:`ggle`,output:`ggle`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t6_s">S</variable><variable id="t6_target">target</variable><variable id="t6_i">i</variable><variable id="t6_ch">ch</variable><variable id="t6_out">out</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字串</field></block></value><next><block type="variables_set"><field name="VAR" id="t6_s">S</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入目標字元</field></block></value><next><block type="variables_set"><field name="VAR" id="t6_target">target</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t6_out">out</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="controls_for"><field name="VAR" id="t6_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_s">S</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t6_ch">ch</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_s">S</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t6_ch">ch</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t6_target">target</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t6_out">out</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t6_out">out</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="t6_ch">ch</field></block></value></block></value></block></statement></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t6_out">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`逐字元篩選，練習字串過濾的基礎寫法。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`字串處理`],subConcepts:[`條件判斷`],algorithm:[`過濾`],dataStructure:[`字串`],syntax:[`字元取出`],math:[],context:[`生活情境`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};