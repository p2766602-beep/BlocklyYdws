var e={code:`114JTaitung`,title:`114-臺東縣國中`,type:`programming`,mode:`learning`,description:`臺東縣114學年度國中組資訊科技競賽練習題，與新北市國中「兩段票計算」規則相同。`,tasks:[{id:`Taitung-J-1`,title:`魔法公車車票計算`,problemTitle:`魔法公車車票計算`,role:`contest`,difficulty:`L2`,blocklyFit:`高`,requiresGreenFlag:!0,description:`歡迎來到「777魔法公車」！這條公車線路共有1號到15號共15個站點。
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
30`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`2
11
15`,expectedOutput:`20`,output:`20`,score:10,hidden:!1},{input:`10
15
40`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`15
1
7`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`9
10
5`,expectedOutput:`5`,output:`5`,score:10,hidden:!1},{input:`1
15
10`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`1
10
20`,expectedOutput:`10`,output:`10`,score:10,hidden:!1},{input:`10
1
12`,expectedOutput:`5`,output:`5`,score:10,hidden:!1},{input:`11
15
11`,expectedOutput:`5`,output:`5`,score:10,hidden:!1},{input:`12
8
35`,expectedOutput:`20`,output:`20`,score:10,hidden:!1}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t1_start">start</variable><variable id="t1_end">end</variable><variable id="t1_age">age</variable><variable id="t1_mn">mn</variable><variable id="t1_mx">mx</variable><variable id="t1_fare">fare</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入上車站號</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_start">start</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入下車站號</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_end">end</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入年齡</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_age">age</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t1_mn">mn</field><value name="VALUE"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_start">start</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t1_end">end</field></block></value></block></value><value name="THEN"><block type="variables_get"><field name="VAR" id="t1_start">start</field></block></value><value name="ELSE"><block type="variables_get"><field name="VAR" id="t1_end">end</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t1_mx">mx</field><value name="VALUE"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_start">start</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t1_end">end</field></block></value></block></value><value name="THEN"><block type="variables_get"><field name="VAR" id="t1_end">end</field></block></value><value name="ELSE"><block type="variables_get"><field name="VAR" id="t1_start">start</field></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_mn">mn</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_mx">mx</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t1_fare">fare</field><value name="VALUE"><block type="math_number"><field name="NUM">10</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t1_fare">fare</field><value name="VALUE"><block type="math_number"><field name="NUM">20</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_age">age</field></block></value><value name="B"><block type="math_number"><field name="NUM">12</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t1_fare">fare</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_fare">fare</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t1_fare">fare</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,review:{needsManualReview:!1,risk:`低`,flags:[],note:`跨界判斷(是否跨越分隔站)加上年齡折扣，與新北市國中「兩段票計算」同款規則。`,exportDecision:`Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過`},tags:{mainConcepts:[`條件判斷`],subConcepts:[`公式計算`],algorithm:[`分段計費`],dataStructure:[`變數`],syntax:[`多層if`],math:[],context:[`生活情境`,`交通`]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};