var e={code:`114EKinmen`,title:`114-金門縣國小`,type:`programming`,mode:`learning`,description:`114-金門縣國小114學年度科技教育創意實作競賽題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-26T08:31:37.370Z`,sourceTxt:`txtFile/114EKinmen.txt`,version:`manual-blockly-build-verified`},tasks:[{id:`114EKinmen-1`,title:`1-資訊競賽獎勵統計`,problemTitle:`1-資訊競賽獎勵統計`,courseCode:`114EKinmen`,courseName:`114-金門縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`中`,description:`縣府舉辦「科技教育創意實作競賽」，共有許多選手參加。評審委員們根據每位選手的最終得分(0至100分)，頒發不同等級的獎勵。由於參賽人數眾多，請寫一個程式協助主辦單位統計獲得「金牌獎」、「銀牌獎」與「銅牌獎」的人數各有多少。
每位選手的得分僅會被歸類在最高的一項獎勵中(不可重複領獎)：
1. 金牌獎：若得分為90分(含)以上。
2. 銀牌獎：若不符合金牌獎，但得分為80分(含)以上。
3. 銅牌獎：若不符合上述獎項，但得分為70分(含)以上。
4. 佳作：若不符合上述獎項，但得分為60分(含)以上。
5. 參賽證明：若得分未滿60分，則僅頒發參賽證明，不計入上述獎項。
【輸入說明】
• 第一行輸入一個整數N，代表總參賽人數。
• 接下來輸入N行，每行包含一個整數，代表該名選手的得分。
【輸出說明】
• 輸出四個整數，分別代表獲得「金牌獎」、「銀牌獎」、「銅牌獎」與「佳作」的總張數，中間以逗號隔開。`,inputDescription:``,outputDescription:``,statement:{description:`縣府舉辦「科技教育創意實作競賽」，共有許多選手參加。評審委員們根據每位選手的最終得分(0至100分)，頒發不同等級的獎勵。由於參賽人數眾多，請寫一個程式協助主辦單位統計獲得「金牌獎」、「銀牌獎」與「銅牌獎」的人數各有多少。
每位選手的得分僅會被歸類在最高的一項獎勵中(不可重複領獎)：
1. 金牌獎：若得分為90分(含)以上。
2. 銀牌獎：若不符合金牌獎，但得分為80分(含)以上。
3. 銅牌獎：若不符合上述獎項，但得分為70分(含)以上。
4. 佳作：若不符合上述獎項，但得分為60分(含)以上。
5. 參賽證明：若得分未滿60分，則僅頒發參賽證明，不計入上述獎項。
【輸入說明】
• 第一行輸入一個整數N，代表總參賽人數。
• 接下來輸入N行，每行包含一個整數，代表該名選手的得分。
【輸出說明】
• 輸出四個整數，分別代表獲得「金牌獎」、「銀牌獎」、「銅牌獎」與「佳作」的總張數，中間以逗號隔開。`,input:``,output:``},examples:[{input:`6
92
55
80
90
72
65`,output:`2,1,1,1`,explanation:`總共6位選手：
92, 90分：金牌獎(2人)
80分：銀牌獎(1人)
72分：銅牌獎(1人)
65分：佳作(1人)
55分：未達標，不計入獎項`},{input:`3
45
60
59`,output:`0,0,0,1`,explanation:`總共3位選手：
60分符合「佳作」(1人)
45, 59分皆未滿60分。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="e1_n">N</variable><variable id="e1_g">G</variable><variable id="e1_s">S</variable><variable id="e1_b">Bc</variable><variable id="e1_m">M</variable><variable id="e1_i">i</variable><variable id="e1_v">V</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入總參賽人數N</field></block></value><next><block type="variables_set"><field name="VAR" id="e1_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="e1_g">G</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="e1_s">S</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="e1_b">Bc</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="e1_m">M</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="e1_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="e1_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入選手得分</field></block></value><next><block type="variables_set"><field name="VAR" id="e1_v">V</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><mutation elseif="3" else="0"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_v">V</field></block></value><value name="B"><block type="math_number"><field name="NUM">90</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="e1_g">G</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_g">G</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><value name="IF1"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_v">V</field></block></value><value name="B"><block type="math_number"><field name="NUM">80</field></block></value></block></value><statement name="DO1"><block type="variables_set"><field name="VAR" id="e1_s">S</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_s">S</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><value name="IF2"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_v">V</field></block></value><value name="B"><block type="math_number"><field name="NUM">70</field></block></value></block></value><statement name="DO2"><block type="variables_set"><field name="VAR" id="e1_b">Bc</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_b">Bc</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><value name="IF3"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_v">V</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value><statement name="DO3"><block type="variables_set"><field name="VAR" id="e1_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e1_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="7"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="e1_g">G</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="e1_s">S</field></block></value><value name="ADD3"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="e1_b">Bc</field></block></value><value name="ADD5"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD6"><block type="variables_get"><field name="VAR" id="e1_m">M</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`6
92
55
80
90
72
65`,expectedOutput:`2,1,1,1`,score:10},{input:`3
45
60
59`,expectedOutput:`0,0,0,1`,score:10},{input:`5
100
100
100
100
100`,expectedOutput:`5,0,0,0`,score:10},{input:`4
85
88
80
89`,expectedOutput:`0,4,0,0`,score:10},{input:`3
75
70
79`,expectedOutput:`0,0,3,0`,score:10},{input:`2
60
69`,expectedOutput:`0,0,0,2`,score:10},{input:`5
0
10
20
30
40`,expectedOutput:`0,0,0,0`,score:10},{input:`8
95
85
75
65
55
45
99
81`,expectedOutput:`2,2,1,1`,score:10},{input:`1
90`,expectedOutput:`1,0,0,0`,score:10},{input:`10
60
60
70
70
80
80
90
90
50`,expectedOutput:`2,2,2,2`,score:10}]},{id:`114EKinmen-2`,title:`2-台灣星鏈(T-Starlink) 衛星佈署計畫`,problemTitle:`2-台灣星鏈(T-Starlink) 衛星佈署計畫`,courseCode:`114EKinmen`,courseName:`114-金門縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`中`,description:`台灣正致力於研發自主低軌衛星通訊系統「T-Starlink」，以確保在特殊情況下通訊不中斷。TASA 國家太空中心預計在特定的軌道高度上，沿著預定路徑佈署通訊衛星。根據衛星的訊號覆蓋半徑與任務需求，不同路徑段有不同的佈署模式。請寫一個程式，根據路徑總長度、衛星間的固定間隔，以及指定的「佈署模式」，計算該路段總共需要佈署多少顆衛星。
衛星佈署分為兩種模式：
• 模式1(全線佈署)：從起點開始放，每隔一段距離放一顆，且路徑的「終點」也必須放一顆。
• 模式2(銜接佈署)：從起點開始放，每隔一段距離放一顆，但路徑的「終點」不放衛星(留給下一個路段使用)。
【輸入說明】
1. 第一行輸入一個整數L，代表路段長度(公里)。
2. 第二行輸入一個整數D，代表衛星間的固定間隔(公里)。
3. 第三行輸入一個整數M，代表模式(1或2)。
(備註：為了簡化計算，本題保證L必定能被D整除)
【輸出說明】
• 輸出一個整數，代表所需的衛星總數。`,inputDescription:``,outputDescription:``,statement:{description:`台灣正致力於研發自主低軌衛星通訊系統「T-Starlink」，以確保在特殊情況下通訊不中斷。TASA 國家太空中心預計在特定的軌道高度上，沿著預定路徑佈署通訊衛星。根據衛星的訊號覆蓋半徑與任務需求，不同路徑段有不同的佈署模式。請寫一個程式，根據路徑總長度、衛星間的固定間隔，以及指定的「佈署模式」，計算該路段總共需要佈署多少顆衛星。
衛星佈署分為兩種模式：
• 模式1(全線佈署)：從起點開始放，每隔一段距離放一顆，且路徑的「終點」也必須放一顆。
• 模式2(銜接佈署)：從起點開始放，每隔一段距離放一顆，但路徑的「終點」不放衛星(留給下一個路段使用)。
【輸入說明】
1. 第一行輸入一個整數L，代表路段長度(公里)。
2. 第二行輸入一個整數D，代表衛星間的固定間隔(公里)。
3. 第三行輸入一個整數M，代表模式(1或2)。
(備註：為了簡化計算，本題保證L必定能被D整除)
【輸出說明】
• 輸出一個整數，代表所需的衛星總數。`,input:``,output:``},examples:[{input:`1000
200
1`,output:`6`,explanation:`長度 1000公里，每200公里放一顆。間隔有5個，因為模式 1終點也要放，所以是5+1=6`},{input:`1000
250
2`,output:`4`,explanation:`長度1000公里，每250公里放一顆。間隔有4個，因為模式2 終點不放，所以總共就是4顆`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="e2_l">L</variable><variable id="e2_d">D</variable><variable id="e2_m">M</variable><variable id="e2_seg">seg</variable><variable id="e2_out">out</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入路段長度L</field></block></value><next><block type="variables_set"><field name="VAR" id="e2_l">L</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入衛星間隔D</field></block></value><next><block type="variables_set"><field name="VAR" id="e2_d">D</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入模式M</field></block></value><next><block type="variables_set"><field name="VAR" id="e2_m">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="e2_seg">seg</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="e2_l">L</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="e2_d">D</field></block></value></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="e2_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="e2_out">out</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e2_seg">seg</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="e2_out">out</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e2_seg">seg</field></block></value></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="e2_out">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`1000
200
1`,expectedOutput:`6`,score:10},{input:`1000
250
2`,expectedOutput:`4`,score:10},{input:`500
100
1`,expectedOutput:`6`,score:10},{input:`500
100
2`,expectedOutput:`5`,score:10},{input:`2000
500
1`,expectedOutput:`5`,score:10},{input:`2000
500
2`,expectedOutput:`4`,score:10},{input:`100
10
1`,expectedOutput:`11`,score:10},{input:`100
10
2`,expectedOutput:`10`,score:10},{input:`300
300
1`,expectedOutput:`2`,score:10},{input:`300
300
2`,expectedOutput:`1`,score:10}]},{id:`114EKinmen-3`,title:`3-「一杯心情」飲料調製`,problemTitle:`3-「一杯心情」飲料調製`,courseCode:`114EKinmen`,courseName:`114-金門縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`中`,description:`金門最近開了一間超人氣手搖店「一杯心情」，調飲師會依照顧客的心情，製作一杯具有層次感的「心情飲料」：現在要製作的是一杯「四層漸層奶蓋茶」。為了讓飲料呈現漂亮的分層效果，店長規定原料必須依照「密度(重量)」的大小順序依次倒入杯中，密度大的原料會沉在下層，密度小的原料會浮在上層。
請你模擬調飲師倒入原料的過程，根據輸入的原料資料，輸出完成後飲料「由下往上」的正確層次順序。
【原料代碼表】
• B：黑糖糖漿(Brown Sugar)
• M：鮮奶(Milk)
• T：茶(Tea)
• F：奶蓋(Foam)
【調製規則】
• 每種原料皆有一個整數密度值 D
• 調飲師會先倒入密度最大的原料，再依序倒入密度較小的原料
• 原料倒入後不可重新調整位置
• 這四種原料的密度值保證皆不相同
【輸入說明】
• 共有4組資料
• 每組包含：一個大寫字母(B, M, T, F)
• 一個整數(代表密度D)
（註：格式以逗號隔開如範例所示）
【輸出說明】
• 請輸出4個原料代碼
• 代表飲料完成後，由杯底到杯口的原料排列順序
• 每個代碼之間以一個逗號隔開`,inputDescription:``,outputDescription:``,statement:{description:`金門最近開了一間超人氣手搖店「一杯心情」，調飲師會依照顧客的心情，製作一杯具有層次感的「心情飲料」：現在要製作的是一杯「四層漸層奶蓋茶」。為了讓飲料呈現漂亮的分層效果，店長規定原料必須依照「密度(重量)」的大小順序依次倒入杯中，密度大的原料會沉在下層，密度小的原料會浮在上層。
請你模擬調飲師倒入原料的過程，根據輸入的原料資料，輸出完成後飲料「由下往上」的正確層次順序。
【原料代碼表】
• B：黑糖糖漿(Brown Sugar)
• M：鮮奶(Milk)
• T：茶(Tea)
• F：奶蓋(Foam)
【調製規則】
• 每種原料皆有一個整數密度值 D
• 調飲師會先倒入密度最大的原料，再依序倒入密度較小的原料
• 原料倒入後不可重新調整位置
• 這四種原料的密度值保證皆不相同
【輸入說明】
• 共有4組資料
• 每組包含：一個大寫字母(B, M, T, F)
• 一個整數(代表密度D)
（註：格式以逗號隔開如範例所示）
【輸出說明】
• 請輸出4個原料代碼
• 代表飲料完成後，由杯底到杯口的原料排列順序
• 每個代碼之間以一個逗號隔開`,input:``,output:``},examples:[{input:`B,130
M,110
T,120
F,95`,output:`B,T,M,F`,explanation:`密度比較：B(130) > T(120) > M(110) > F(95)
最重的B放底部，接著往上是T、M，最輕的F在最上面。`},{input:`F,100
B,140
M,125
T,115`,output:`B,M,T,F`,explanation:`密度比較：B(140) > M(125) > T(115) > F(100)
順序為 B,M,T,F`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="e3_codes">codes</variable><variable id="e3_dens">dens</variable><variable id="e3_raw">raw</variable><variable id="e3_parts">parts</variable><variable id="e3_i">i</variable><variable id="e3_j">j</variable><variable id="e3_tmpc">tmpc</variable><variable id="e3_tmpd">tmpd</variable><variable id="e3_code1">code1</variable><variable id="e3_dens1">dens1</variable><variable id="e3_code2">code2</variable><variable id="e3_dens2">dens2</variable><variable id="e3_code3">code3</variable><variable id="e3_dens3">dens3</variable><variable id="e3_code4">code4</variable><variable id="e3_dens4">dens4</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入原料1(代碼,密度)</field></block></value><next><block type="variables_set"><field name="VAR" id="e3_raw">raw</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_parts">parts</field><value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="e3_raw">raw</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_code1">code1</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_dens1">dens1</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入原料2(代碼,密度)</field></block></value><next><block type="variables_set"><field name="VAR" id="e3_raw">raw</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_parts">parts</field><value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="e3_raw">raw</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_code2">code2</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_dens2">dens2</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入原料3(代碼,密度)</field></block></value><next><block type="variables_set"><field name="VAR" id="e3_raw">raw</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_parts">parts</field><value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="e3_raw">raw</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_code3">code3</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_dens3">dens3</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入原料4(代碼,密度)</field></block></value><next><block type="variables_set"><field name="VAR" id="e3_raw">raw</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_parts">parts</field><value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="e3_raw">raw</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT">,</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_code4">code4</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_dens4">dens4</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_parts">parts</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_codes">codes</field><value name="VALUE"><block type="lists_create_with"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="e3_code1">code1</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="e3_code2">code2</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="e3_code3">code3</field></block></value><value name="ADD3"><block type="variables_get"><field name="VAR" id="e3_code4">code4</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_dens">dens</field><value name="VALUE"><block type="lists_create_with"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="e3_dens1">dens1</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="e3_dens2">dens2</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="e3_dens3">dens3</field></block></value><value name="ADD3"><block type="variables_get"><field name="VAR" id="e3_dens4">dens4</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="e3_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">3</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_for"><field name="VAR" id="e3_j">j</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_number"><field name="NUM">4</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="e3_i">i</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_dens">dens</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_dens">dens</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="e3_tmpd">tmpd</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_dens">dens</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e3_tmpc">tmpc</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="e3_dens">dens</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_dens">dens</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="e3_dens">dens</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="e3_tmpd">tmpd</field></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e3_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="e3_tmpc">tmpc</field></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="7"></mutation><value name="ADD0"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD2"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="ADD3"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD4"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="ADD5"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD6"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e3_codes">codes</field></block></value><value name="AT"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`B,130
M,110
T,120
F,95`,expectedOutput:`B,T,M,F`,score:10},{input:`F,100
B,140
M,125
T,115`,expectedOutput:`B,M,T,F`,score:10},{input:`B,10
M,20
T,30
F,40`,expectedOutput:`F,T,M,B`,score:10},{input:`M,50
B,40
T,60
F,30`,expectedOutput:`T,M,B,F`,score:10},{input:`B,100
M,200
T,300
F,400`,expectedOutput:`F,T,M,B`,score:10},{input:`T,1
M,2
B,3
F,4`,expectedOutput:`F,B,M,T`,score:10},{input:`B,99
M,98
T,97
F,96`,expectedOutput:`B,M,T,F`,score:10},{input:`F,50
M,40
T,30
B,20`,expectedOutput:`F,M,T,B`,score:10},{input:`B,111
M,222
T,333
F,444`,expectedOutput:`F,T,M,B`,score:10},{input:`M,10
T,20
F,30
B,40`,expectedOutput:`B,F,T,M`,score:10}]},{id:`114EKinmen-4`,title:`4-數位交趾陶花`,problemTitle:`4-數位交趾陶花`,courseCode:`114EKinmen`,courseName:`114-金門縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`中`,description:`金門的交趾陶產業正結合科技藝術，開發一款「數位交趾陶花預覽器」。這款程式使用 Scratch 的「畫筆」內的「蓋章」功能來設計花朵圖案。只要將同一個花瓣圖形依照固定角度重複旋轉並蓋章，就可以畫出一朵對稱又漂亮的花。
請你依照下列規則，根據輸入的花瓣數量N，畫出對應的花朵圖形。
【繪圖規則說明】
1. 選擇角色 Button2一開始位於舞台正中央
2. 角色初始面向為0度
3. 點選花瓣造型，花瓣需離開畫布中心一段距離
4. 每畫出一片花瓣，需依序執行以下兩個動作：
• 使用畫筆「蓋章一次」
• 原地向右旋轉固定角度
5. 總共需要畫出 N 片花瓣
6. 每次旋轉的角度為 360 ÷ N 度
7. 不需要考慮花瓣的顏色、大小或形狀，只需依規則完成蓋章動作
【輸入說明】
• 輸入一個正整數 N
• 表示花朵的花瓣數量
【輸出說明】
(圖形輸出)
• 請使用 Scratch 的畫筆功能
• 畫出完成後的花朵圖形
• 花瓣必須平均分布，形成一個完整的圓形`,inputDescription:``,outputDescription:``,statement:{description:`金門的交趾陶產業正結合科技藝術，開發一款「數位交趾陶花預覽器」。這款程式使用 Scratch 的「畫筆」內的「蓋章」功能來設計花朵圖案。只要將同一個花瓣圖形依照固定角度重複旋轉並蓋章，就可以畫出一朵對稱又漂亮的花。
請你依照下列規則，根據輸入的花瓣數量N，畫出對應的花朵圖形。
【繪圖規則說明】
1. 選擇角色 Button2一開始位於舞台正中央
2. 角色初始面向為0度
3. 點選花瓣造型，花瓣需離開畫布中心一段距離
4. 每畫出一片花瓣，需依序執行以下兩個動作：
• 使用畫筆「蓋章一次」
• 原地向右旋轉固定角度
5. 總共需要畫出 N 片花瓣
6. 每次旋轉的角度為 360 ÷ N 度
7. 不需要考慮花瓣的顏色、大小或形狀，只需依規則完成蓋章動作
【輸入說明】
• 輸入一個正整數 N
• 表示花朵的花瓣數量
【輸出說明】
(圖形輸出)
• 請使用 Scratch 的畫筆功能
• 畫出完成後的花朵圖形
• 花瓣必須平均分布，形成一個完整的圓形`,input:``,output:``},examples:[{input:`8`,output:`8片對稱花瓣`,explanation:`每次旋轉角度為360÷8=45度
共蓋章8次
形成8片對稱花瓣`},{input:`12`,output:`12片對稱花瓣`,explanation:`每次旋轉角度為360÷12=30度
共蓋章 12 次
形成 12片對稱花瓣`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="e4_n">N</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入花瓣數量N</field></block></value><next><block type="variables_set"><field name="VAR" id="e4_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="e4_n">N</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">片對稱花瓣</field></block></value></block></value></block></next></block></next></block></next></block></xml>`,testCases:[{input:`8`,expectedOutput:`8片對稱花瓣`,score:10},{input:`12`,expectedOutput:`12片對稱花瓣`,score:10},{input:`4`,expectedOutput:`4片對稱花瓣`,score:10},{input:`5`,expectedOutput:`5片對稱花瓣`,score:10},{input:`6`,expectedOutput:`6片對稱花瓣`,score:10},{input:`10`,expectedOutput:`10片對稱花瓣`,score:10},{input:`15`,expectedOutput:`15片對稱花瓣`,score:10},{input:`20`,expectedOutput:`20片對稱花瓣`,score:10},{input:`36`,expectedOutput:`36片對稱花瓣`,score:10},{input:`72`,expectedOutput:`72片對稱花瓣`,score:10}]},{id:`114EKinmen-5`,title:`5-風獅爺排排隊`,problemTitle:`5-風獅爺排排隊`,courseCode:`114EKinmen`,courseName:`114-金門縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`中`,description:`金門各村落的風獅爺要準備祭典大合照，村長要求將4尊風獅爺依照身高「由矮到高」排好。工讀生小金負責進行搬動，規則如下：
• 比較規則：從小金的角度看，每次比較相鄰的兩尊風獅爺。
• 交換規則：如果「左邊」的風獅爺比「右邊」的高，兩尊就必須交換位置。
• 紀錄規則：每當風獅爺成功交換一次位置，小金就要在筆記本上畫一個「正」字(紀錄總交換次數)。
請寫一個程式，幫小金算出排好隊後的風獅爺身高，以及他總共搬動(交換)了幾次。
【任務說明】
1. 將輸入的4個身高數值，由小到大排列。
2. 計算在排序過程中，總共執行了幾次「交換」動作。(使用氣泡排序法邏輯)
【輸入說明】
• 每行輸入1個整數，代表1個風獅爺的身高。
【輸出說明】
• 輸出由矮到高排列後的4個身高數值，中間以空白隔開。
• 和前面的結果以逗號隔開，輸出一個整數，代表「總共交換的次數」。(如範例：\`100 110 120 150,6\`)`,inputDescription:``,outputDescription:``,statement:{description:`金門各村落的風獅爺要準備祭典大合照，村長要求將4尊風獅爺依照身高「由矮到高」排好。工讀生小金負責進行搬動，規則如下：
• 比較規則：從小金的角度看，每次比較相鄰的兩尊風獅爺。
• 交換規則：如果「左邊」的風獅爺比「右邊」的高，兩尊就必須交換位置。
• 紀錄規則：每當風獅爺成功交換一次位置，小金就要在筆記本上畫一個「正」字(紀錄總交換次數)。
請寫一個程式，幫小金算出排好隊後的風獅爺身高，以及他總共搬動(交換)了幾次。
【任務說明】
1. 將輸入的4個身高數值，由小到大排列。
2. 計算在排序過程中，總共執行了幾次「交換」動作。(使用氣泡排序法邏輯)
【輸入說明】
• 每行輸入1個整數，代表1個風獅爺的身高。
【輸出說明】
• 輸出由矮到高排列後的4個身高數值，中間以空白隔開。
• 和前面的結果以逗號隔開，輸出一個整數，代表「總共交換的次數」。(如範例：\`100 110 120 150,6\`)`,input:``,output:``},examples:[{input:`150
120
110
100`,output:`100 110 120 150,6`,explanation:`這是「最麻煩」的情況(全倒過來排)。
150 要一路換到最後，接著120再換，總共會交換 6 次。`},{input:`120
110
140
130`,output:`110 120 130 140,2`,explanation:`120與110換一次；140與130換一次，總共2次`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="e5_list">list</variable><variable id="e5_i">i</variable><variable id="e5_j">j</variable><variable id="e5_tmp">tmp</variable><variable id="e5_swaps">swaps</variable><variable id="e5_v1">v1</variable><variable id="e5_v2">v2</variable><variable id="e5_v3">v3</variable><variable id="e5_v4">v4</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入第1尊風獅爺身高</field></block></value><next><block type="variables_set"><field name="VAR" id="e5_v1">v1</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入第2尊風獅爺身高</field></block></value><next><block type="variables_set"><field name="VAR" id="e5_v2">v2</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入第3尊風獅爺身高</field></block></value><next><block type="variables_set"><field name="VAR" id="e5_v3">v3</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入第4尊風獅爺身高</field></block></value><next><block type="variables_set"><field name="VAR" id="e5_v4">v4</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="e5_list">list</field><value name="VALUE"><block type="lists_create_with"><mutation items="4"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="e5_v1">v1</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="e5_v2">v2</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="e5_v3">v3</field></block></value><value name="ADD3"><block type="variables_get"><field name="VAR" id="e5_v4">v4</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="e5_swaps">swaps</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="e5_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">3</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_for"><field name="VAR" id="e5_j">j</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_number"><field name="NUM">4</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="e5_i">i</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e5_j">j</field></block></value></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e5_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="e5_tmp">tmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e5_j">j</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="e5_j">j</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e5_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e5_j">j</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="e5_tmp">tmp</field></block></value><next><block type="variables_set"><field name="VAR" id="e5_swaps">swaps</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="e5_swaps">swaps</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="9"></mutation><value name="ADD0"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="ADD5"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD6"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="e5_list">list</field></block></value><value name="AT"><block type="math_number"><field name="NUM">4</field></block></value></block></value><value name="ADD7"><block type="text"><field name="TEXT">,</field></block></value><value name="ADD8"><block type="variables_get"><field name="VAR" id="e5_swaps">swaps</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`150
120
110
100`,expectedOutput:`100 110 120 150,6`,score:10},{input:`120
110
140
130`,expectedOutput:`110 120 130 140,2`,score:10},{input:`10
20
30
40`,expectedOutput:`10 20 30 40,0`,score:10},{input:`40
30
20
10`,expectedOutput:`10 20 30 40,6`,score:10},{input:`20
10
40
30`,expectedOutput:`10 20 30 40,2`,score:10},{input:`30
10
20
40`,expectedOutput:`10 20 30 40,2`,score:10},{input:`40
10
20
30`,expectedOutput:`10 20 30 40,3`,score:10},{input:`20
30
40
10`,expectedOutput:`10 20 30 40,3`,score:10},{input:`30
40
10
20`,expectedOutput:`10 20 30 40,4`,score:10},{input:`10
40
20
30`,expectedOutput:`10 20 30 40,2`,score:10}]},{id:`114EKinmen-6`,title:`7-智慧掃地機器人`,problemTitle:`7-智慧掃地機器人`,courseCode:`114EKinmen`,courseName:`114-金門縣國小`,role:`contest`,difficulty:`L2`,blocklyFit:`中`,description:`小金家買了一台智慧掃地機器人，這台機器人只能依照固定規則在室內移動，並且會一直沿著牆壁前進，避免撞到家具。現在請你幫忙設計程式，控制掃地機器人依照「靠右走」的規則，從起點出發，走到「電池充電處」。
【環境說明】
1. 俯視圖是由許多正方形格子組成，每一格大小相同，都是20單位。
2. 機器人一次只能移動到「前方相鄰的一格」。
3. 圖中的牆壁不可穿越。
4. 只有一個「電池充電處」。
5. 保證使用正確的「靠右走規則」一定可以走到「電池充電處」。
【機器人初始狀態】
• 起始位置：由題目提供的迷宮圖標示
• 起始方向：面向「90度」
• 初始步數：0步
【移動規則(靠右走)】
機器人每一步必須依照以下順序判斷並執行：
1. 右邊有路可以走 → 直接前進一格
2. 右邊沒有路，但下方有路 → 先向右轉，再前進一格
3. 右邊與前方都沒有路，但左邊有路 → 向左轉，再前進一格
4. 右、前、左都沒有路 → 向後轉(轉 180度)，再前進一格
*每一次移動，只能執行其中一個規則。
【任務說明】
請設計一個程式，控制掃地機器人：
• 從起點開始移動
• 依照「靠右走」規則前進
• 直到到達「電池充電處」為止
【輸入說明】
本題不需要由使用者輸入資料。迷宮圖、起點與電池位置將於測試時提供。
【輸出說明】
• 程式結束時，請一併輸出機器人到達「電池充電處」時的總步數`,inputDescription:``,outputDescription:``,statement:{description:`小金家買了一台智慧掃地機器人，這台機器人只能依照固定規則在室內移動，並且會一直沿著牆壁前進，避免撞到家具。現在請你幫忙設計程式，控制掃地機器人依照「靠右走」的規則，從起點出發，走到「電池充電處」。
【環境說明】
1. 俯視圖是由許多正方形格子組成，每一格大小相同，都是20單位。
2. 機器人一次只能移動到「前方相鄰的一格」。
3. 圖中的牆壁不可穿越。
4. 只有一個「電池充電處」。
5. 保證使用正確的「靠右走規則」一定可以走到「電池充電處」。
【機器人初始狀態】
• 起始位置：由題目提供的迷宮圖標示
• 起始方向：面向「90度」
• 初始步數：0步
【移動規則(靠右走)】
機器人每一步必須依照以下順序判斷並執行：
1. 右邊有路可以走 → 直接前進一格
2. 右邊沒有路，但下方有路 → 先向右轉，再前進一格
3. 右邊與前方都沒有路，但左邊有路 → 向左轉，再前進一格
4. 右、前、左都沒有路 → 向後轉(轉 180度)，再前進一格
*每一次移動，只能執行其中一個規則。
【任務說明】
請設計一個程式，控制掃地機器人：
• 從起點開始移動
• 依照「靠右走」規則前進
• 直到到達「電池充電處」為止
【輸入說明】
本題不需要由使用者輸入資料。迷宮圖、起點與電池位置將於測試時提供。
【輸出說明】
• 程式結束時，請一併輸出機器人到達「電池充電處」時的總步數`,input:``,output:``},examples:[{input:`(無輸入)`,output:`依實際迷宮步數而定`,explanation:`本題為 Scratch 迷宮模擬實作題，無一般文字輸入。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">依實際迷宮步數而定</field></block></value></block></next></block></xml>`,testCases:[{input:`1`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`2`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`3`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`4`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`5`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`6`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`7`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`8`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`9`,expectedOutput:`依實際迷宮步數而定`,score:10},{input:`10`,expectedOutput:`依實際迷宮步數而定`,score:10}]}]};export{e as default};