var e={code:`M0-01-BasicOutput`,title:`程式起步：輸出與基本運算`,type:`programming`,mode:`learning`,tier:`t0`,tasks:[{id:`A-01-0`,title:`Hello world`,description:`在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。
請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。
Hello後面會接小寫逗號，還有一個空白輸入
這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。`,inputDescription:``,outputDescription:``,examples:[{input:`Amy`,output:`Hello, Amy`,explanation:`第一個輸入 Amy，代表名字為 Amy
程式輸出 Hello, Amy`},{input:`Tom`,output:`Hello, Tom`,explanation:``}],testCases:[{input:`John`,expectedOutput:`Hello, John`,output:`Hello, John`,score:10},{input:`Marry`,expectedOutput:`Hello, Marry`,output:`Hello, Marry`,score:10},{input:`Sam`,expectedOutput:`Hello, Sam`,output:`Hello, Sam`,score:10},{input:`Tom`,expectedOutput:`Hello, Tom`,output:`Hello, Tom`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_name">名字</variable></variables><block x="40" y="40" type="variables_set"><field name="VAR" id="v_name">名字</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入你的名字</field></shadow></value></block></value><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT">Hello, </field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_name">名字</field></block></value></block></value></block></next></block></xml>`},{id:`A-01-1`,title:`一起學習吧`,description:`在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。
請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。
朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入
這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。`,inputDescription:``,outputDescription:``,examples:[{input:`Amy
John`,output:`Amy, John, 一起學習吧！`,explanation:`第一個輸入 Amy，代表朋友一名字為 Amy
第二個輸入 John，代表朋友二名字為 John
程式輸出 Amy, John, 一起學習吧！`},{input:`Tom
Susan`,output:`Tom, Susan, 一起學習吧！`,explanation:``}],testCases:[{input:`John
Amy`,expectedOutput:`John, Amy, 一起學習吧！`,output:`John, Amy, 一起學習吧！`,score:10},{input:`Tom
Susan`,expectedOutput:`Tom, Susan, 一起學習吧！`,output:`Tom, Susan, 一起學習吧！`,score:10},{input:`Sam
Brown`,expectedOutput:`Sam, Brown, 一起學習吧！`,output:`Sam, Brown, 一起學習吧！`,score:10},{input:`Justin
Louise`,expectedOutput:`Justin, Louise, 一起學習吧！`,output:`Justin, Louise, 一起學習吧！`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_n1">朋友一</variable><variable id="v_n2">朋友二</variable></variables><block x="40" y="40" type="variables_set"><field name="VAR" id="v_n1">朋友一</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入朋友一名字</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="v_n2">朋友二</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入朋友二名字</field></shadow></value></block></value><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_n1">朋友一</field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT">, </field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_n2">朋友二</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">, 一起學習吧！</field></block></value></block></value></block></value></block></value></block></next></block></next></block></xml>`},{id:`A-02-0`,title:`數字加總`,description:`當我們要處理數字時，常常需要加總。
請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。
這樣的題目能幫助你熟悉數字資料處理。`,inputDescription:``,outputDescription:``,examples:[{input:`9
4`,output:`13`,explanation:`第一個輸入9
第二個輸入4
程式輸出9+4總和13`},{input:`6
5`,output:`11`,explanation:``}],testCases:[{input:`3
7`,expectedOutput:`10`,output:`10`,score:10},{input:`99
100`,expectedOutput:`199`,output:`199`,score:10},{input:`78
22`,expectedOutput:`100`,output:`100`,score:10},{input:`21
35`,expectedOutput:`56`,output:`56`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_a">甲</variable><variable id="v_b">乙</variable></variables><block x="40" y="40" type="variables_set"><field name="VAR" id="v_a">甲</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第一個數字</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="v_b">乙</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第二個數字</field></shadow></value></block></value><next><block type="text_print"><value name="TEXT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></value></block></next></block></next></block></xml>`},{id:`A-02-1`,title:`數字平均`,description:`當我們要處理數字時，常常需計算平均。
請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的平均(四捨五入取整數)。
這樣的題目能幫助你熟悉數字資料處理。`,inputDescription:``,outputDescription:``,examples:[{input:`9
4`,output:`7`,explanation:`第一個輸入9
第二個輸入4
程式輸出9、4的平均四捨五入取整數7`},{input:`6
5`,output:`6`,explanation:``}],testCases:[{input:`3
7`,expectedOutput:`5`,output:`5`,score:10},{input:`99
100`,expectedOutput:`100`,output:`100`,score:10},{input:`78
22`,expectedOutput:`50`,output:`50`,score:10},{input:`21
35`,expectedOutput:`28`,output:`28`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_a">甲</variable><variable id="v_b">乙</variable></variables><block x="40" y="40" type="variables_set"><field name="VAR" id="v_a">甲</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第一個數字</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="v_b">乙</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第二個數字</field></shadow></value></block></value><next><block type="text_print"><value name="TEXT"><block type="math_round"><field name="OP">ROUND</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value></block></next></block></next></block></xml>`},{id:`A-03-0`,title:`比較大小`,description:`在生活中常常會需要比較兩個數字誰比較大。

請寫一個程式，輸入兩個整數，輸出較大的數字。

如果兩個數字相同，就輸出「一樣大」。

這樣的練習可以訓練你使用條件判斷。`,inputDescription:``,outputDescription:``,examples:[{input:`8
5`,output:`8`,explanation:`第一個輸入8
第二個輸入5
較大的是數字8，程式輸出8`},{input:`7
7`,output:`一樣大`,explanation:``}],testCases:[{input:`3
7`,expectedOutput:`7`,output:`7`,score:10},{input:`99
100`,expectedOutput:`100`,output:`100`,score:10},{input:`78
22`,expectedOutput:`78`,output:`78`,score:10},{input:`21
21`,expectedOutput:`一樣大`,output:`一樣大`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_a">甲</variable><variable id="v_b">乙</variable></variables><block x="40" y="40" type="variables_set"><field name="VAR" id="v_a">甲</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第一個數字</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="v_b">乙</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第二個數字</field></shadow></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></value><statement name="DO0"><block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">一樣大</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></value><statement name="DO0"><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value></block></statement><statement name="ELSE"><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></statement></block></statement></block></next></block></next></block></xml>`},{id:`A-03-1`,title:`臺斤公斤大PK`,description:`在生活中常常會需要比較重量，台灣常見的單位有台斤、公斤，一台斤等於0.6公斤

請寫一個程式，輸入兩個不同單位重量

第一個數字輸入M，表示重量M台斤

第二個數字輸入N，表示重量N公斤

請比較兩筆重量輸入，輸出較大重量的數字及單位。
如果兩個數字相同，就輸出「一樣重」。

這樣的練習可以訓練你使用條件判斷。`,inputDescription:``,outputDescription:``,examples:[{input:`10
5`,output:`10台斤`,explanation:`第一個輸入10，表示10台斤
第二個輸入5，表示5公斤
較大的重量是10台斤，輸出10台斤`},{input:`5
5`,output:`5公斤`,explanation:`第一個輸入5，表示5台斤
第二個輸入5，表示5公斤
較大的重量是5公斤，輸出5公斤`},{input:`10
6`,output:`一樣重`,explanation:``}],testCases:[{input:`10
6`,expectedOutput:`一樣重`,output:`一樣重`,score:10},{input:`100
70`,expectedOutput:`70公斤`,output:`70公斤`,score:10},{input:`78
22`,expectedOutput:`78台斤`,output:`78台斤`,score:10},{input:`21
21`,expectedOutput:`21公斤`,output:`21公斤`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_m">M台斤</variable><variable id="v_n">N公斤</variable></variables><block x="40" y="40" type="variables_set"><field name="VAR" id="v_m">M台斤</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入台斤重量</field></shadow></value></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N公斤</field><value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入公斤重量</field></shadow></value></block></value><next><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_m">M台斤</field></block></value><value name="B"><block type="math_number"><field name="NUM">6</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N公斤</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><statement name="DO0"><block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">一樣重</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation elseif="0" else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_m">M台斤</field></block></value><value name="B"><block type="math_number"><field name="NUM">6</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N公斤</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><statement name="DO0"><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_m">M台斤</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">台斤</field></block></value></block></value></block></statement><statement name="ELSE"><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_n">N公斤</field></block></value><value name="ADD1"><block type="text"><field name="TEXT">公斤</field></block></value></block></value></block></statement></block></statement></block></next></block></next></block></xml>`}]};export{e as default};