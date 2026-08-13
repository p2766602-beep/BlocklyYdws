var e={code:`114JYunlin`,title:`114-雲林縣國中`,type:`programming`,mode:`learning`,description:`114-雲林縣國中114學年度科技教育創意實作競賽題庫`,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-13T08:59:31.920Z`,sourceTxt:`txtFile/114JYunlin.txt`,version:`manual-blockly-build-verified`},tasks:[{id:`114JYunlin-1`,title:`1-自動販賣機的補貨通知`,problemTitle:`1-自動販賣機的補貨通知`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`學校走廊上有一台受歡迎的自動販賣機。為了確保飲料隨時充足，管理員小華每天會查看 N 個飲料格位的剩餘數量。請你幫小華寫一個程式，計算整台販賣機目前「總共還剩多少瓶飲料」，並且計算有幾個格位「缺貨」（剩餘數量低於 5 瓶），需要小華去補貨。
1. 給定一個整數 N，代表販賣機的格位數量。
2. 給定 N 個整數，代表每個格位目前的飲料剩餘量。
3. 任務一：把所有格位的剩餘量加起來，得到總數。
4. 任務二：檢查每個格位，如果剩餘量小於 5，則補貨次數加 1。
5. 輸出總剩餘量與需要補貨的格位數量。
【輸入格式】
第一行：一個整數 N，代表格位數量。
第二行：N 個整數，代表每個格位的飲料剩餘量（以半形空格分隔）。
【輸出格式】
一行輸出二個整數，代表整台機器的飲料總剩餘量及需要補貨的格位數量（剩餘量小於 5），中間以半形空格分隔。`,inputDescription:``,outputDescription:``,statement:{description:`學校走廊上有一台受歡迎的自動販賣機。為了確保飲料隨時充足，管理員小華每天會查看 N 個飲料格位的剩餘數量。請你幫小華寫一個程式，計算整台販賣機目前「總共還剩多少瓶飲料」，並且計算有幾個格位「缺貨」（剩餘數量低於 5 瓶），需要小華去補貨。
1. 給定一個整數 N，代表販賣機的格位數量。
2. 給定 N 個整數，代表每個格位目前的飲料剩餘量。
3. 任務一：把所有格位的剩餘量加起來，得到總數。
4. 任務二：檢查每個格位，如果剩餘量小於 5，則補貨次數加 1。
5. 輸出總剩餘量與需要補貨的格位數量。
【輸入格式】
第一行：一個整數 N，代表格位數量。
第二行：N 個整數，代表每個格位的飲料剩餘量（以半形空格分隔）。
【輸出格式】
一行輸出二個整數，代表整台機器的飲料總剩餘量及需要補貨的格位數量（剩餘量小於 5），中間以半形空格分隔。`,input:``,output:``},examples:[{input:`5
10 2 8 3 20`,output:`43 2`,explanation:`總剩餘量：10+2+8+3+20 = 43
缺貨判斷：2 和 3 小於 5，共有 2 個格位需要補貨。`},{input:`3
0 4 0`,output:`4 3`,explanation:`總剩餘量：4。
缺貨判斷：0, 4, 0 皆小於 5，全部 3 個格位都需要補貨。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t1_n">N</variable><variable id="t1_i">i</variable><variable id="t1_v">v</variable><variable id="t1_total">total</variable><variable id="t1_lowcount">lowcount</variable><variable id="t1_out">out</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入格位數量N</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t1_total">total</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_lowcount">lowcount</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t1_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t1_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入格位剩餘量</field></block></value><next><block type="variables_set"><field name="VAR" id="t1_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t1_total">total</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_total">total</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t1_v">v</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_v">v</field></block></value><value name="B"><block type="math_number"><field name="NUM">5</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t1_lowcount">lowcount</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t1_lowcount">lowcount</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t1_out">out</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="t1_total">total</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="t1_lowcount">lowcount</field></block></value></block></value><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t1_out">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`3
10 10 10`,expectedOutput:`30 0`,score:10},{input:`4
4 4 4 4`,expectedOutput:`16 4`,score:10},{input:`5
1 2 3 4 5`,expectedOutput:`15 4`,score:10},{input:`6
0 10 0 10 0 10`,expectedOutput:`30 3`,score:10},{input:`5
20 20 1 20 20`,expectedOutput:`81 1`,score:10},{input:`4
0 0 0 0`,expectedOutput:`0 4`,score:10},{input:`3
10 20 30`,expectedOutput:`60 0`,score:10},{input:`5
5 5 5 5 5`,expectedOutput:`25 0`,score:10},{input:`2
4 4`,expectedOutput:`8 2`,score:10},{input:`1
2`,expectedOutput:`2 1`,score:10}]},{id:`114JYunlin-2`,title:`2-5進位解碼`,problemTitle:`2-5進位解碼`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：
A=0, B=1, C=2, D=3, E=4
例如密碼 BC 代表 5 進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。
1. 輸入密碼長度 L 與密碼內容（由 A-E 組成）。
2. 權重計算：最右邊位數是 5 的 0 次方（任何數的 0 次方為 1），左邊一位是 5 的 1 次方，以此類推。
3. 將每個字母轉換為對應數值後，計算總和。
【輸入格式】
第一行：整數 L。
第二行：L 個字元（以空格分隔，如 BC）。(註：此處依據範例，可視為連在一起的字串)
【輸出格式】
一個整數（10 進位數值）。`,inputDescription:``,outputDescription:``,statement:{description:`程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：
A=0, B=1, C=2, D=3, E=4
例如密碼 BC 代表 5 進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。
1. 輸入密碼長度 L 與密碼內容（由 A-E 組成）。
2. 權重計算：最右邊位數是 5 的 0 次方（任何數的 0 次方為 1），左邊一位是 5 的 1 次方，以此類推。
3. 將每個字母轉換為對應數值後，計算總和。
【輸入格式】
第一行：整數 L。
第二行：L 個字元（以空格分隔，如 BC）。(註：此處依據範例，可視為連在一起的字串)
【輸出格式】
一個整數（10 進位數值）。`,input:``,output:``},examples:[{input:`2
BC`,output:`7`,explanation:`B=1, C=2。
1 × 5 + 2 = 7。`},{input:`3
BAE`,output:`29`,explanation:`B=1, A=0, E=4。
1 × 25 + 0 × 5 + 4 × 1 = 29。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t2_l">L</variable><variable id="t2_str">str</variable><variable id="t2_alpha">alpha</variable><variable id="t2_total">total</variable><variable id="t2_i">i</variable><variable id="t2_chv">chv</variable><variable id="t2_val">val</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入密碼長度L</field></block></value><next><block type="variables_set"><field name="VAR" id="t2_l">L</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入密碼內容</field></block></value><next><block type="variables_set"><field name="VAR" id="t2_str">str</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_alpha">alpha</field><value name="VALUE"><block type="lists_create_with"><mutation items="5"></mutation><value name="ADD0"><block type="text"><field name="TEXT">A</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">B</field></block></value><value name="ADD2"><block type="text"><field name="TEXT">C</field></block></value><value name="ADD3"><block type="text"><field name="TEXT">D</field></block></value><value name="ADD4"><block type="text"><field name="TEXT">E</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_total">total</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t2_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t2_l">L</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t2_chv">chv</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t2_str">str</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t2_i">i</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_val">val</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_indexOf"><field name="END">FIRST</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t2_alpha">alpha</field></block></value><value name="FIND"><block type="variables_get"><field name="VAR" id="t2_chv">chv</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t2_total">total</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="t2_total">total</field></block></value><value name="B"><block type="math_number"><field name="NUM">5</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t2_val">val</field></block></value></block></value></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t2_total">total</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`1
A`,expectedOutput:`0`,score:10},{input:`2
EE`,expectedOutput:`24`,score:10},{input:`3
BAA`,expectedOutput:`25`,score:10},{input:`4
BAAA`,expectedOutput:`125`,score:10},{input:`5
CDEAB`,expectedOutput:`1726`,score:10},{input:`5
AAAAA`,expectedOutput:`0`,score:10},{input:`1
E`,expectedOutput:`4`,score:10},{input:`4
BCDE`,expectedOutput:`194`,score:10},{input:`5
ABCDE`,expectedOutput:`194`,score:10},{input:`5
EEEEE`,expectedOutput:`3124`,score:10}]},{id:`114JYunlin-3`,title:`3-圖書館的舊書打包`,problemTitle:`3-圖書館的舊書打包`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`學校圖書館正在進行舊書義賣，小華負責將舊書裝箱。為了節省箱子，小華決定採用一個策略：先把書按重量「由重到輕」排好。
每次拿出一個新箱子時，優先嘗試放入最重的書，箱子剩下的空間如果放得下就放進去，放不下就跳過這本，試下一本較輕的書，直到所有書都檢查過一輪，這個箱子就封箱。
接著拿新箱子重複上述步驟，直到所有書都裝完。
Note：箱子在封箱前要由重到輕，確認已經裝不下任何一本未裝箱的書了。
【輸入格式】
第一行：一個整數 W（箱子最大承重）。
第二行：一個整數 N（書本數量）。
第三行：N 個整數（每本書重量，已由重到輕排序）。
【輸出格式】
一個整數，代表總共需要的箱子數量。`,inputDescription:``,outputDescription:``,statement:{description:`學校圖書館正在進行舊書義賣，小華負責將舊書裝箱。為了節省箱子，小華決定採用一個策略：先把書按重量「由重到輕」排好。
每次拿出一個新箱子時，優先嘗試放入最重的書，箱子剩下的空間如果放得下就放進去，放不下就跳過這本，試下一本較輕的書，直到所有書都檢查過一輪，這個箱子就封箱。
接著拿新箱子重複上述步驟，直到所有書都裝完。
Note：箱子在封箱前要由重到輕，確認已經裝不下任何一本未裝箱的書了。
【輸入格式】
第一行：一個整數 W（箱子最大承重）。
第二行：一個整數 N（書本數量）。
第三行：N 個整數（每本書重量，已由重到輕排序）。
【輸出格式】
一個整數，代表總共需要的箱子數量。`,input:``,output:``},examples:[{input:`10
5
8 5 4 3 2`,output:`3`,explanation:`箱1：裝 8 (剩2)，5(X)，4(X)，3(X)，裝 2(OK)。(內容：8, 2)
箱2：剩 5, 4, 3。裝 5 (剩5)，裝 4(剩1)，3(X)。(內容：5, 4)
箱3：剩 3。裝 3。(內容：3)
共 3 箱。`},{input:`20
3
10 10 10`,output:`2`,explanation:`箱1：裝 10，裝 10(滿)。
箱2：裝 10。
共 2 箱。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t3_w">W</variable><variable id="t3_n">N</variable><variable id="t3_weight">weight</variable><variable id="t3_used">used</variable><variable id="t3_i">i</variable><variable id="t3_v">v</variable><variable id="t3_boxes">boxes</variable><variable id="t3_remain">remain</variable><variable id="t3_cap">cap</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入箱子最大承重W</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_w">W</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入書本數量N</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t3_weight">weight</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t3_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入書本重量</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t3_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_i">i</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t3_v">v</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t3_used">used</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t3_boxes">boxes</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_remain">remain</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_remain">remain</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t3_boxes">boxes</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_boxes">boxes</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t3_cap">cap</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_w">W</field></block></value><next><block type="controls_for"><field name="VAR" id="t3_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t3_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_used">used</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t3_cap">cap</field></block></value></block></value></block></value><statement name="DO0"><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t3_used">used</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_i">i</field></block></value><value name="TO"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="variables_set"><field name="VAR" id="t3_cap">cap</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_cap">cap</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t3_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t3_i">i</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t3_remain">remain</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t3_remain">remain</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></statement></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t3_boxes">boxes</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`5
3
2 2 2`,expectedOutput:`2`,score:10},{input:`10
5
9 9 5 1 1`,expectedOutput:`3`,score:10},{input:`100
4
60 50 40 15 30`,expectedOutput:`2`,score:10},{input:`15
6
8 7 6 5 4 3`,expectedOutput:`3`,score:10},{input:`25
13
20 19 18 17 16 10 9 8 7 6 3 2 1`,expectedOutput:`6`,score:10},{input:`10
5
10 10 10 10 10`,expectedOutput:`5`,score:10},{input:`20
5
19 18 1 1 1`,expectedOutput:`2`,score:10},{input:`10
8
6 6 6 5 4 4 4 4`,expectedOutput:`4`,score:10},{input:`50
10
50 49 48 47 10 3 2 1 1 1`,expectedOutput:`5`,score:10},{input:`100
1
50`,expectedOutput:`1`,score:10}]},{id:`114JYunlin-4`,title:`4-校車廣播系統熱血指數統計`,problemTitle:`4-校車廣播系統熱血指數統計`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家 High 起來 (當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺)。
校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這首歌依序播完才能切換模式。
小明的任務非常重要，他需要從這份落落長的歌單中，挑選出「連續」的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！
請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。
【輸入格式】
第一行：整數 K 代表廣播系統一次必須連續播放的歌曲數量。
第二行：整數 N 代表歌單中總共有 N 首歌。
第三行：N 個整數依序代表歌單中第 1 首到第 N 首歌的「熱血指數」。
【輸出格式】
一個整數（最大總和）。`,inputDescription:``,outputDescription:``,statement:{description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家 High 起來 (當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺)。
校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這首歌依序播完才能切換模式。
小明的任務非常重要，他需要從這份落落長的歌單中，挑選出「連續」的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！
請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。
【輸入格式】
第一行：整數 K 代表廣播系統一次必須連續播放的歌曲數量。
第二行：整數 N 代表歌單中總共有 N 首歌。
第三行：N 個整數依序代表歌單中第 1 首到第 N 首歌的「熱血指數」。
【輸出格式】
一個整數（最大總和）。`,input:``,output:``},examples:[{input:`3
5
10 20 30 10 50`,output:`90`,explanation:`(10+20+30)=60
(20+30+10)=60
(30+10+50)=90 (最大)`},{input:`2
4
5 100 100 5`,output:`200`,explanation:`連續 2 首的組合：(5+100)=105, (100+100)=200, (100+5)=105
最大值為 200`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t4_k">K</variable><variable id="t4_n">N</variable><variable id="t4_score">score</variable><variable id="t4_i">i</variable><variable id="t4_j">j</variable><variable id="t4_v">v</variable><variable id="t4_s">s</variable><variable id="t4_cur">cur</variable><variable id="t4_best">best</variable><variable id="t4_found">found</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入連續播放數K</field></block></value><next><block type="variables_set"><field name="VAR" id="t4_k">K</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入歌曲總數N</field></block></value><next><block type="variables_set"><field name="VAR" id="t4_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t4_score">score</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t4_n">N</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t4_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t4_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入熱血指數</field></block></value><next><block type="variables_set"><field name="VAR" id="t4_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t4_score">score</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t4_i">i</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t4_v">v</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t4_found">found</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t4_s">s</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_n">N</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t4_k">K</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t4_cur">cur</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t4_j">j</field><value name="FROM"><block type="variables_get"><field name="VAR" id="t4_s">s</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_s">s</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t4_k">K</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t4_cur">cur</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_cur">cur</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t4_score">score</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t4_j">j</field></block></value></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_found">found</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t4_cur">cur</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t4_best">best</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t4_best">best</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t4_cur">cur</field></block></value><next><block type="variables_set"><field name="VAR" id="t4_found">found</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t4_best">best</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`2
4
1 2 3 4`,expectedOutput:`7`,score:10},{input:`3
5
5 5 5 5 5`,expectedOutput:`15`,score:10},{input:`2
5
10 100 10 10 100`,expectedOutput:`110`,score:10},{input:`4
8
100 100 1 2 100 2 1 1`,expectedOutput:`203`,score:10,output:`203`},{input:`3
6
50 10 10 50 50 10`,expectedOutput:`110`,score:10},{input:`1
5
1 2 3 4 5`,expectedOutput:`5`,score:10},{input:`5
5
1 -2 3 -4 5`,expectedOutput:`3`,score:10},{input:`2
6
-1 -2 -3 -4 -5 -6`,expectedOutput:`-3`,score:10},{input:`3
7
10 -10 10 -10 10 -10 10`,expectedOutput:`10`,score:10},{input:`2
4
0 0 0 0`,expectedOutput:`0`,score:10}]},{id:`114JYunlin-5`,title:`5-大風吹搶位子`,problemTitle:`5-大風吹搶位子`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`隔宿露營的晚會高潮，班聯會設計了一個刺激的「電子傳球大風吹」遊戲。
全班 N 位同學圍繞營火坐成一圈，每個人身上都有一個原本的號碼牌（從 1 號到 N 號）。遊戲開始時，音樂響起，一顆發光的電子球從 1 號同學手中開始順時針傳遞。
這顆電子球設定了爆炸秒數，相當於傳遞 M 次。也就是說，從目前拿球的人開始算第 1 次，傳給下一位算第 2 次...一直數到第 M 個人，球就會變色發出「嗶！」的聲音，這時候持有球的那個人就被淘汰，必須立刻離開圓圈。
被淘汰的人離開後，圓圈會縮小，球交給下一位還在圈子裡的同學，重新開始從 1 數到 M。遊戲持續進行，直到圓圈只剩下最後一位同學，該名同學就是今晚的「大風吹之王」。請設計一個程式，模擬這個過程，算出最後留下的那位同學原本的號碼是多少。
【輸入格式】
第一行：整數 N（人數）。
第二行：整數 M（間隔）。
【輸出格式】
一個整數（贏家編號）。`,inputDescription:``,outputDescription:``,statement:{description:`隔宿露營的晚會高潮，班聯會設計了一個刺激的「電子傳球大風吹」遊戲。
全班 N 位同學圍繞營火坐成一圈，每個人身上都有一個原本的號碼牌（從 1 號到 N 號）。遊戲開始時，音樂響起，一顆發光的電子球從 1 號同學手中開始順時針傳遞。
這顆電子球設定了爆炸秒數，相當於傳遞 M 次。也就是說，從目前拿球的人開始算第 1 次，傳給下一位算第 2 次...一直數到第 M 個人，球就會變色發出「嗶！」的聲音，這時候持有球的那個人就被淘汰，必須立刻離開圓圈。
被淘汰的人離開後，圓圈會縮小，球交給下一位還在圈子裡的同學，重新開始從 1 數到 M。遊戲持續進行，直到圓圈只剩下最後一位同學，該名同學就是今晚的「大風吹之王」。請設計一個程式，模擬這個過程，算出最後留下的那位同學原本的號碼是多少。
【輸入格式】
第一行：整數 N（人數）。
第二行：整數 M（間隔）。
【輸出格式】
一個整數（贏家編號）。`,input:``,output:``},examples:[{input:`5
2`,output:`3`,explanation:`初始：1 2 3 4 5
淘汰 2（剩 1 3 4 5）
淘汰 4（剩 1 3 5）
淘汰 1（剩 3 5）
淘汰 5（剩 3）
最後贏家是 3 號。`},{input:`4
1`,output:`4`,explanation:`每次數 1 人（即立刻淘汰當前的人）。
淘汰順序：1 → 2 → 3
最後剩下 4`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t5_n">N</variable><variable id="t5_m">M</variable><variable id="t5_alive">alive</variable><variable id="t5_i">i</variable><variable id="t5_pos">pos</variable><variable id="t5_remaining">remaining</variable><variable id="t5_count">count</variable><variable id="t5_winner">winner</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入人數N</field></block></value><next><block type="variables_set"><field name="VAR" id="t5_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入間隔M</field></block></value><next><block type="variables_set"><field name="VAR" id="t5_m">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t5_alive">alive</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">1</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t5_n">N</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t5_pos">pos</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="variables_set"><field name="VAR" id="t5_remaining">remaining</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_n">N</field></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_remaining">remaining</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t5_count">count</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_count">count</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t5_m">M</field></block></value></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_alive">alive</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t5_pos">pos</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t5_count">count</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_count">count</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_count">count</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t5_m">M</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t5_pos">pos</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="t5_pos">pos</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="t5_n">N</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></statement><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t5_alive">alive</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t5_pos">pos</field></block></value><value name="TO"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="t5_remaining">remaining</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="t5_remaining">remaining</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t5_pos">pos</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="t5_pos">pos</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="t5_n">N</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></next></block></statement><next><block type="controls_for"><field name="VAR" id="t5_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t5_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_alive">alive</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t5_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t5_winner">winner</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t5_i">i</field></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t5_winner">winner</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`3
1`,expectedOutput:`3`,score:10},{input:`4
2`,expectedOutput:`1`,score:10},{input:`5
3`,expectedOutput:`4`,score:10},{input:`7
4`,expectedOutput:`2`,score:10},{input:`10
3`,expectedOutput:`4`,score:10},{input:`10
1`,expectedOutput:`10`,score:10},{input:`2
2`,expectedOutput:`1`,score:10},{input:`10
5`,expectedOutput:`3`,score:10},{input:`20
3`,expectedOutput:`20`,score:10},{input:`6
6`,expectedOutput:`4`,score:10}]},{id:`114JYunlin-6`,title:`6-1-園遊會攤位熱度分析`,problemTitle:`6-1-園遊會攤位熱度分析`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`園遊會地圖由「路口」和「走道」組成。學生會想知道哪個路口連接了最多條走道（最熱門交會點），以便安排引導人員。
1. 給定路口數 N 與走道數 E。
2. 統計每個路口連接的走道數量（分支量）。
3. 輸出連接數最多的路口編號（若數量相同，輸出編號較小的）。
【輸入格式】
第一行：整數 N（路口數）。
第二行：整數 E（走道數）。
第三行：E 個整數，代表每條走道的一端（起點列表）。
第四行：E 個整數，代表每條走道的另一端（終點列表）。
（說明：第三行的第 i 個數字與第四行的第 i 個數字代表一條連接的走道。）
【輸出格式】
一個整數（最熱門路口編號）。`,inputDescription:``,outputDescription:``,statement:{description:`園遊會地圖由「路口」和「走道」組成。學生會想知道哪個路口連接了最多條走道（最熱門交會點），以便安排引導人員。
1. 給定路口數 N 與走道數 E。
2. 統計每個路口連接的走道數量（分支量）。
3. 輸出連接數最多的路口編號（若數量相同，輸出編號較小的）。
【輸入格式】
第一行：整數 N（路口數）。
第二行：整數 E（走道數）。
第三行：E 個整數，代表每條走道的一端（起點列表）。
第四行：E 個整數，代表每條走道的另一端（終點列表）。
（說明：第三行的第 i 個數字與第四行的第 i 個數字代表一條連接的走道。）
【輸出格式】
一個整數（最熱門路口編號）。`,input:``,output:``},examples:[{input:`3
2
1 1
2 3`,output:`1`,explanation:`走道：(1-2), (1-3)
路口 1：連了 2 條通道, (1-2), (1-3)
路口 2：連了 1 條通道, (1-2)
路口 3：連了 1 條通道, (1-3)
由上可知路口 1 較熱門，輸出 1。`},{input:`4
3
1 2 3
2 3 4`,output:`2`,explanation:`連線：(1-2), (2-3), (3-4)
路口 2 和 3 都連了 2 條，輸出較小的 2。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t6_n">N</variable><variable id="t6_e">E</variable><variable id="t6_from">from</variable><variable id="t6_to">to</variable><variable id="t6_degree">degree</variable><variable id="t6_i">i</variable><variable id="t6_v">v</variable><variable id="t6_bestnode">bestnode</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入路口數N</field></block></value><next><block type="variables_set"><field name="VAR" id="t6_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入走道數E</field></block></value><next><block type="variables_set"><field name="VAR" id="t6_e">E</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t6_from">from</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t6_e">E</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t6_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t6_e">E</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入走道起點</field></block></value><next><block type="variables_set"><field name="VAR" id="t6_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t6_from">from</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t6_v">v</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t6_to">to</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t6_e">E</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t6_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t6_e">E</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入走道終點</field></block></value><next><block type="variables_set"><field name="VAR" id="t6_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t6_to">to</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t6_v">v</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t6_degree">degree</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t6_n">N</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t6_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t6_e">E</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t6_degree">degree</field></block></value><value name="AT"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_from">from</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_degree">degree</field></block></value><value name="AT"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_from">from</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t6_degree">degree</field></block></value><value name="AT"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_to">to</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_degree">degree</field></block></value><value name="AT"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_to">to</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t6_bestnode">bestnode</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="t6_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="t6_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t6_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_degree">degree</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_degree">degree</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t6_bestnode">bestnode</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t6_bestnode">bestnode</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t6_i">i</field></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t6_bestnode">bestnode</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`3
2
1 2
2 3`,expectedOutput:`2`,score:10},{input:`4
3
1 1 1
2 3 4`,expectedOutput:`1`,score:10},{input:`5
4
1 2 3 4
2 3 4 5`,expectedOutput:`2`,score:10},{input:`5
5
1 2 3 4 5
2 3 4 5 1`,expectedOutput:`1`,score:10},{input:`6
4
1 3 4 6
2 2 5 5`,expectedOutput:`2`,score:10},{input:`2
1
1
2`,expectedOutput:`1`,score:10},{input:`3
3
1 2 3
2 3 1`,expectedOutput:`1`,score:10},{input:`4
6
1 1 1 2 2 3
2 3 4 3 4 4`,expectedOutput:`1`,score:10},{input:`5
4
3 3 3 3
1 2 4 5`,expectedOutput:`3`,score:10},{input:`4
2
4 4
1 2`,expectedOutput:`4`,score:10}]},{id:`114JYunlin-7`,title:`6-2-園遊會尋找幸運抽獎號`,problemTitle:`6-2-園遊會尋找幸運抽獎號`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`園遊會中最熱門的攤位是「幸運跳格子」挑戰賽。地上畫了一排共有 N 格的格子（編號從 1 到 N）。為了增加遊戲的趣味性與挑戰性，主辦單位規定：參賽者從起點（第 0 格）出發，每次跳躍只能選擇「跳 1 格」或「跳 2 格」。
例如：要跳到第 3 格，可以有三種跳法：
1. 跳 1 格 → 跳 1 格 → 跳 1 格 (1, 1, 1)
2. 跳 1 格 → 跳 2 格 (1, 2)
3. 跳 2 格 → 跳 1 格 (2, 1)
學生會長想知道，如果要剛好停在第 N 格領取大獎，總共有多少種不同的跳法組合？
這正是經典的費氏數列問題，若剛好停在第 N 格可能的走法數為 F(N) 種，我們可觀察到：
F(1) = 1，停在第 1 格有 1 種走法
F(2) = 2，停在第 2 格有 2 種走法
F(3) = F(2) + F(1) = 1 + 2 = 3，停在第 3 格有 3 種走法
F(4) = F(3) + F(2) = 3 + 2 = 5，停在第 4 格有 5 種走法
【輸入格式】
一個整數，代表目標格子。
【輸出格式】
一個整數，代表到達第 N 格的總跳法數。`,inputDescription:``,outputDescription:``,statement:{description:`園遊會中最熱門的攤位是「幸運跳格子」挑戰賽。地上畫了一排共有 N 格的格子（編號從 1 到 N）。為了增加遊戲的趣味性與挑戰性，主辦單位規定：參賽者從起點（第 0 格）出發，每次跳躍只能選擇「跳 1 格」或「跳 2 格」。
例如：要跳到第 3 格，可以有三種跳法：
1. 跳 1 格 → 跳 1 格 → 跳 1 格 (1, 1, 1)
2. 跳 1 格 → 跳 2 格 (1, 2)
3. 跳 2 格 → 跳 1 格 (2, 1)
學生會長想知道，如果要剛好停在第 N 格領取大獎，總共有多少種不同的跳法組合？
這正是經典的費氏數列問題，若剛好停在第 N 格可能的走法數為 F(N) 種，我們可觀察到：
F(1) = 1，停在第 1 格有 1 種走法
F(2) = 2，停在第 2 格有 2 種走法
F(3) = F(2) + F(1) = 1 + 2 = 3，停在第 3 格有 3 種走法
F(4) = F(3) + F(2) = 3 + 2 = 5，停在第 4 格有 5 種走法
【輸入格式】
一個整數，代表目標格子。
【輸出格式】
一個整數，代表到達第 N 格的總跳法數。`,input:``,output:``},examples:[{input:`3`,output:`3`,explanation:`共有 3 種跳法：
1. (1, 1, 1)
2. (1, 2)
3. (2, 1)`},{input:`4`,output:`5`,explanation:`共有 5 種跳法：
(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t7_n">N</variable><variable id="t7_a">a</variable><variable id="t7_b">b</variable><variable id="t7_tmp">tmp</variable><variable id="t7_i">i</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入目標格子N</field></block></value><next><block type="variables_set"><field name="VAR" id="t7_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t7_a">a</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="variables_set"><field name="VAR" id="t7_b">b</field><value name="VALUE"><block type="math_number"><field name="NUM">2</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t7_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="t7_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">3</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t7_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t7_tmp">tmp</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t7_a">a</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t7_b">b</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t7_a">a</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t7_b">b</field></block></value><next><block type="variables_set"><field name="VAR" id="t7_b">b</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t7_tmp">tmp</field></block></value></block></next></block></next></block></statement></block></statement><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="t7_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t7_a">a</field></block></value></block></statement><statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t7_b">b</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`1`,expectedOutput:`1`,score:10},{input:`5`,expectedOutput:`8`,score:10},{input:`7`,expectedOutput:`21`,score:10},{input:`10`,expectedOutput:`89`,score:10},{input:`20`,expectedOutput:`10946`,score:10},{input:`2`,expectedOutput:`2`,score:10},{input:`3`,expectedOutput:`3`,score:10},{input:`4`,expectedOutput:`5`,score:10},{input:`6`,expectedOutput:`13`,score:10},{input:`15`,expectedOutput:`987`,score:10}]},{id:`114JYunlin-8`,title:`6-3-園遊會人潮高峰期`,problemTitle:`6-3-園遊會人潮高峰期`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`一年一度的校慶園遊會順利落幕了！今年學生會為了讓明年的活動辦得更好，決定用數據來說話。他們在校門口和各個攤位區安裝了「人流感測器」。感測器每隔一段時間（例如每10分鐘）就會記錄一次數據，這個數據稱為「人潮淨流量」：
• 如果是正數（例如 +50）：代表進來的人比出去的人多，人潮正在累積。
• 如果是負數（例如 -30）：代表離開的人比進來的人多，人潮正在消散。
學生會會長小華拿到了一長串的數據清單，他想要找出一段連續的時間區間，這段時間內的「淨流量總和」是最大的。這個最大的數值就代表了今年園遊會最「盛況空前」時累積的人氣指數。
請注意，如果算出來的最大總和是負數（代表整場活動人都一直在變少，或是沒人來），為了報表好看，請直接將結果歸零，輸出 0。
請你幫忙寫一個程式，找出這個傳說中的「最大熱門指數」！
【輸入格式】
第一行：一個整數 N 代表總共記錄了 N 筆時段的數據。
第二行：N 個整數，依序代表第 1 個時段到第 N 個時段的人潮淨流量（有正有負）。
【輸出格式】
第一行：一個整數（最大和）。
特別規則：如果所有可能的區間總和都是負數，請輸出 0。`,inputDescription:``,outputDescription:``,statement:{description:`一年一度的校慶園遊會順利落幕了！今年學生會為了讓明年的活動辦得更好，決定用數據來說話。他們在校門口和各個攤位區安裝了「人流感測器」。感測器每隔一段時間（例如每10分鐘）就會記錄一次數據，這個數據稱為「人潮淨流量」：
• 如果是正數（例如 +50）：代表進來的人比出去的人多，人潮正在累積。
• 如果是負數（例如 -30）：代表離開的人比進來的人多，人潮正在消散。
學生會會長小華拿到了一長串的數據清單，他想要找出一段連續的時間區間，這段時間內的「淨流量總和」是最大的。這個最大的數值就代表了今年園遊會最「盛況空前」時累積的人氣指數。
請注意，如果算出來的最大總和是負數（代表整場活動人都一直在變少，或是沒人來），為了報表好看，請直接將結果歸零，輸出 0。
請你幫忙寫一個程式，找出這個傳說中的「最大熱門指數」！
【輸入格式】
第一行：一個整數 N 代表總共記錄了 N 筆時段的數據。
第二行：N 個整數，依序代表第 1 個時段到第 N 個時段的人潮淨流量（有正有負）。
【輸出格式】
第一行：一個整數（最大和）。
特別規則：如果所有可能的區間總和都是負數，請輸出 0。`,input:``,output:``},examples:[{input:`3
-1 2 -1`,output:`2`,explanation:`可能組合及其和如下：
由第 1 個時段開始 -1, -1+2, -1+2+(-1)
由第 2 個時段開始 2, 2+(-1)
由第 3 個時段開始 -1
以上最大為 2`},{input:`4
-5 -2 -9 -1`,output:`0`,explanation:`所有人流皆為負成長，沒有人潮高峰，輸出 0`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t8_n">N</variable><variable id="t8_v">v</variable><variable id="t8_i">i</variable><variable id="t8_cur">cur</variable><variable id="t8_best">best</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入時段數N</field></block></value><next><block type="variables_set"><field name="VAR" id="t8_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t8_cur">cur</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="t8_best">best</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t8_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t8_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入淨流量</field></block></value><next><block type="variables_set"><field name="VAR" id="t8_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t8_cur">cur</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t8_cur">cur</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t8_v">v</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t8_cur">cur</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t8_cur">cur</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="t8_cur">cur</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t8_best">best</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t8_best">best</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t8_cur">cur</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t8_best">best</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`3
1 2 3`,expectedOutput:`6`,score:10},{input:`4
-1 -2 -3 -4`,expectedOutput:`0`,score:10},{input:`5
2 -1 2 -1 2`,expectedOutput:`4`,score:10},{input:`6
-2 5 -1 5 -10 2`,expectedOutput:`9`,score:10},{input:`5
10 -20 30 -5 10`,expectedOutput:`35`,score:10},{input:`3
0 0 0`,expectedOutput:`0`,score:10},{input:`4
1 2 3 4`,expectedOutput:`10`,score:10},{input:`5
10 -5 10 -5 10`,expectedOutput:`20`,score:10,output:`20`},{input:`3
-100 50 -100`,expectedOutput:`50`,score:10},{input:`10
1 2 3 -10 5 6 -20 10 10 10`,expectedOutput:`30`,score:10}]},{id:`114JYunlin-9`,title:`6-4-園遊會場地復原大作戰`,problemTitle:`6-4-園遊會場地復原大作戰`,courseCode:`114JYunlin`,courseName:`114-雲林縣國中`,role:`contest`,difficulty:`L3`,blocklyFit:`中`,description:`熱鬧的園遊會終於圓滿落幕了！現在是最後的場地復原時間。雖然大家都累壞了，但幾位熱心的志工同學自願留下來幫忙清理最後的垃圾。
現在在操場的跑道旁，整齊地排列著 N 堆分類好的垃圾包。因為垃圾已經打包好了，而且按照順序排成一列，為了避免混亂，每位志工必須負責清理「連續」的幾堆垃圾，不能跳著拿（例如：小明不能拿了第 1 堆又跑去拿第 3 堆，他必須拿第 1、2、3 堆這樣連續的一段）。
你是衛生組長，你有 M 位志工可以調度。為了公平起見，你不希望任何一位志工累壞，所以你的目標是：「讓工作量最重的那位志工，搬運的重量越輕越好」。
換句話說，你要把這一列垃圾切成 M 段，分配給 M 個人，請你計算出在最完美的分配策略下，那個「搬最多重量的人」，他最少只需要搬多少公斤？
【輸入格式】
第一行：整數 M（志工人數）。
第二行：整數 N（垃圾堆數）。
第三行：N 個整數（垃圾重量）。
【輸出格式】
一個整數（最小化的最大工作量）。`,inputDescription:``,outputDescription:``,statement:{description:`熱鬧的園遊會終於圓滿落幕了！現在是最後的場地復原時間。雖然大家都累壞了，但幾位熱心的志工同學自願留下來幫忙清理最後的垃圾。
現在在操場的跑道旁，整齊地排列著 N 堆分類好的垃圾包。因為垃圾已經打包好了，而且按照順序排成一列，為了避免混亂，每位志工必須負責清理「連續」的幾堆垃圾，不能跳著拿（例如：小明不能拿了第 1 堆又跑去拿第 3 堆，他必須拿第 1、2、3 堆這樣連續的一段）。
你是衛生組長，你有 M 位志工可以調度。為了公平起見，你不希望任何一位志工累壞，所以你的目標是：「讓工作量最重的那位志工，搬運的重量越輕越好」。
換句話說，你要把這一列垃圾切成 M 段，分配給 M 個人，請你計算出在最完美的分配策略下，那個「搬最多重量的人」，他最少只需要搬多少公斤？
【輸入格式】
第一行：整數 M（志工人數）。
第二行：整數 N（垃圾堆數）。
第三行：N 個整數（垃圾重量）。
【輸出格式】
一個整數（最小化的最大工作量）。`,input:``,output:``},examples:[{input:`2
5
2 4 3 6 5`,output:`11`,explanation:`最理想的狀況為分成 2 4 3 和 6 5 兩堆讓兩個志工處理。重量分別為：
2+4+3=9
6+5=11
最小化最大工作量為 11`},{input:`3
3
10 20 30`,output:`30`,explanation:`3 個志工，剛好每人負責一堆，工作量分別為 10, 20, 30。最小化最大工作量為 30。`}],starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="t9_m">M</variable><variable id="t9_n">N</variable><variable id="t9_weight">weight</variable><variable id="t9_i">i</variable><variable id="t9_v">v</variable><variable id="t9_lo">lo</variable><variable id="t9_hi">hi</variable><variable id="t9_mid">mid</variable><variable id="t9_parts">parts</variable><variable id="t9_cursum">cursum</variable><variable id="t9_feasible">feasible</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入志工人數M</field></block></value><next><block type="variables_set"><field name="VAR" id="t9_m">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入垃圾堆數N</field></block></value><next><block type="variables_set"><field name="VAR" id="t9_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="t9_weight">weight</field><value name="VALUE"><block type="lists_repeat"><value name="ITEM"><block type="math_number"><field name="NUM">0</field></block></value><value name="NUM"><block type="variables_get"><field name="VAR" id="t9_n">N</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="t9_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t9_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入垃圾重量</field></block></value><next><block type="variables_set"><field name="VAR" id="t9_v">v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t9_v">v</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="t9_lo">lo</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t9_hi">hi</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t9_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t9_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t9_lo">lo</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t9_lo">lo</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value></block></value></block></statement><next><block type="variables_set"><field name="VAR" id="t9_hi">hi</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_hi">hi</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value></block></value></block></value></block></next></block></statement><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_lo">lo</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t9_hi">hi</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="t9_mid">mid</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_lo">lo</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t9_hi">hi</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t9_parts">parts</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="variables_set"><field name="VAR" id="t9_cursum">cursum</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="t9_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="t9_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_cursum">cursum</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t9_mid">mid</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t9_parts">parts</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_parts">parts</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="t9_cursum">cursum</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t9_cursum">cursum</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_cursum">cursum</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_weight">weight</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="t9_i">i</field></block></value></block></value></block></value></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="t9_feasible">feasible</field><value name="VALUE"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_parts">parts</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="t9_m">M</field></block></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="t9_feasible">feasible</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="t9_hi">hi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="t9_mid">mid</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="t9_lo">lo</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="t9_mid">mid</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="t9_lo">lo</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,testCases:[{input:`2
3
1 1 1`,expectedOutput:`2`,score:10},{input:`3
3
10 20 30`,expectedOutput:`30`,score:10},{input:`2
4
10 20 30 40`,expectedOutput:`60`,score:10},{input:`3
6
1 2 3 4 5 6`,expectedOutput:`9`,score:10},{input:`1
5
1 2 3 4 5`,expectedOutput:`15`,score:10},{input:`4
4
10 10 10 10`,expectedOutput:`10`,score:10},{input:`2
5
1 2 3 4 5`,expectedOutput:`9`,score:10},{input:`3
5
5 5 5 5 5`,expectedOutput:`10`,score:10},{input:`2
6
10 10 10 10 10 10`,expectedOutput:`30`,score:10},{input:`5
5
1 2 3 4 5`,expectedOutput:`5`,score:10}]}]};export{e as default};