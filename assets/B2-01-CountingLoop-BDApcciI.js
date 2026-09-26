var e={code:`B2-01-CountingLoop`,title:`K05 計數迴圈`,description:`基礎知識點課程 U2 迴圈｜K05 計數迴圈（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t0`,knowledgePoint:`K05`,unit:`U2 迴圈`,tasks:[{id:`JSL01-D01`,title:`從1數到N`,description:`輸入一個正整數 N，請依序輸出 1 到 N 的所有整數，每個數字各佔一行。本題用來示範最基本的計數迴圈`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 1 到 N，每個數字各佔一行。`,requiresGreenFlag:!0,examples:[{input:`3`,output:`1
2
3`,explanation:`依序輸出 1、2、3。`},{input:`1`,output:`1`,explanation:`N 為 1，只輸出 1。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20},{input:`3`,expectedOutput:`1
2
3`,output:`1
2
3`,score:20},{input:`5`,expectedOutput:`1
2
3
4
5`,output:`1
2
3
4
5`,score:20},{input:`7`,expectedOutput:`1
2
3
4
5
6
7`,output:`1
2
3
4
5
6
7`,score:20},{input:`10`,expectedOutput:`1
2
3
4
5
6
7
8
9
10`,output:`1
2
3
4
5
6
7
8
9
10`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_i">i</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="controls_for">
                <field name="VAR" id="var_i">i</field>
                <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                <statement name="DO"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`用計數迴圈讓變數 i 從 1 跑到 N，每一輪輸出 i。`],extension:!1,sourceCourse:`M0-04-LoopsAndSum`,sourceDifficulty:`L1`},{id:`A-07-0`,title:`九九乘法`,description:`請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。
例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。

程式輸出3 6 9 12 15 18 21 24 27

這樣的練習能讓你熟悉迴圈的運用。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3`,output:`3 6 9 12 15 18 21 24 27`,explanation:`第一行輸入3，經過九九乘法計算後
程式輸出3 6 9 12 15 18 21 24 27`},{input:`6`,output:`6 12 18 24 30 36 42 48 54`,explanation:`第一行輸入6，經過九九乘法計算後
程式輸出6 12 18 24 30 36 42 48 54`}],testCases:[{input:`3`,expectedOutput:`3 6 9 12 15 18 21 24 27`,output:`3 6 9 12 15 18 21 24 27`,score:10},{input:`6`,expectedOutput:`6 12 18 24 30 36 42 48 54`,output:`6 12 18 24 30 36 42 48 54`,score:10},{input:`5`,expectedOutput:`5 10 15 20 25 30 35 40 45`,output:`5 10 15 20 25 30 35 40 45`,score:10},{input:`9`,expectedOutput:`9 18 27 36 45 54 63 72 81`,output:`9 18 27 36 45 54 63 72 81`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_output">輸出文字</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入 N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_output">輸出文字</field>
                <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
                    <value name="TO"><block type="math_number"><field name="NUM">9</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_output">輸出文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_output">輸出文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value></block></value></block></value></block></statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_output">輸出文字</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`i 從 1 跑到 9，每一輪輸出 i×N，數字之間用空白隔開。`],extension:!1,sourceCourse:`M0-04-LoopsAndSum`,sourceDifficulty:`L1`},{id:`count-002`,title:`跳石過河-間隔計數`,description:`勇者來到了一條充滿鱷魚的河流，河面上有一排標有號碼的石頭（1, 2, 3, 4...）。為了安全，勇者決定施展「輕功」，從第 1 塊石頭開始，每次跳躍都跳過 1 個石頭（也就是每次號碼 +2），直到超過或剛好到達指定的目標號碼 N 為止。請印出勇者踩到的所有石頭號碼。
輸入格式
第一行：輸入一個整數 N ，代表河岸對面的目標號碼。 N 為大於 0 的整數
程式依照順序輸出勇者踩到的石頭編號，從 1 開始，每次加 2。
數字之間以空白隔開。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`6`,output:`1 3 5`,explanation:`第一行輸入數字6
從 1 開始跳，下一個是 3，再來是 5。再跳就是 7 (超過 6 了)，所以停在 5。
程式輸出數字序列1 3 5`},{input:`7`,output:`1 3 5 7`,explanation:`第一行輸入數字7
從 1 開始跳，下一個是 3、5、7剛好到達7
程式輸出數字序列1 3 5 7`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10},{input:`4`,expectedOutput:`1 3`,output:`1 3`,score:10},{input:`15`,expectedOutput:`1 3 5 7 9 11 13 15`,output:`1 3 5 7 9 11 13 15`,score:10},{input:`10`,expectedOutput:`1 3 5 7 9`,output:`1 3 5 7 9`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_x">N</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入目標號碼</field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">3</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">2</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>`,hints:[`把迴圈的「間隔」設成 2，就會輸出 1、3、5……`],extension:!1,sourceCourse:`M0-05-ListBasics`,sourceDifficulty:`L1`},{id:`count-003`,title:`火箭發射倒數`,description:`勇者要搭乘火箭前往太空站。火箭發射控制中心需要一個倒數計時器。請你設計一個程式，輸入開始倒數的秒數 S，程式會從 S 開始倒數，每次減少 1，直到數到 0 為止。
輸入格式
第一行：輸入一個整數 S ，代表倒數的起始秒數。
程式依照順序輸出S到0的編號，每次減1。
數字之間以空白隔開。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5`,output:`5 4 3 2 1 0`,explanation:`第一行輸入數字5
從 5 開始倒數，下一個是4、3、2、1、0
程式輸出數字序列5 4 3 2 1 0`},{input:`7`,output:`7 6 5 4 3 2 1 0`,explanation:`第一行輸入數字7
從 7開始倒數，下一個是6、5、4、3、2、1、0
程式輸出數字序列7 6 5 4 3 2 1 0`}],testCases:[{input:`1`,expectedOutput:`1 0`,output:`1 0`,score:10},{input:`4`,expectedOutput:`4 3 2 1 0`,output:`4 3 2 1 0`,score:10},{input:`15`,expectedOutput:`15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0`,output:`15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0`,score:10},{input:`10`,expectedOutput:`10 9 8 7 6 5 4 3 2 1 0`,output:`10 9 8 7 6 5 4 3 2 1 0`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_x">N</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入倒數秒數</field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="math_number"><field name="NUM">0</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>`,hints:[`迴圈可以倒著數：從 S 開始，每次減 1，直到 0。`],extension:!1,sourceCourse:`M0-05-ListBasics`,sourceDifficulty:`L1`},{id:`count-006`,title:`萬能傳送門`,description:`勇者發現了一個萬能傳送門。這個傳送門可以讓勇者自由設定「起點」、「終點」以及每次傳送的「跨度（距離）」。 請設計一個程式，讀取三個數字，分別代表：起點 (Start)、終點 (End)、跨度 (Step)。 請依序印出傳送過程中經過的所有座標點。
輸入格式
第一行：輸入一個整數 M ，代表起點。
第二行：輸入一個整數 N ，代表終點。
第三行：輸入一個整數 O ，代表跨度。
(N>M，O>0)。
輸出從起點開始，每次增加跨度，直到超過終點為止的所有數字。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`2
10
2`,output:`2 4 6 8 10`,explanation:`第一行輸入數字2，代表起點2
第二行輸入數字10，代表終點10
第三行輸入數字2，代表每次增加2
程式輸出每一個經過的座標：2 4 6 8 10`},{input:`5
15
3`,output:`5 8 11 14`,explanation:`第一行輸入數字5，代表起點5
第二行輸入數字15，代表終點15
第三行輸入數字3，代表每次增加3
程式輸出每一個經過的座標：5 8 11 14，下一個是17，超過15不輸出`}],testCases:[{input:`1
5
1`,expectedOutput:`1 2 3 4 5`,output:`1 2 3 4 5`,score:10},{input:`0
10
5`,expectedOutput:`0 5 10`,output:`0 5 10`,score:10},{input:`10
20
2`,expectedOutput:`10 12 14 16 18 20`,output:`10 12 14 16 18 20`,score:10},{input:`1
10
3`,expectedOutput:`1 4 7 10`,output:`1 4 7 10`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_m">M</variable><variable id="v_n">N</variable><variable id="v_o">O</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入起點</field></block></value><next><block type="variables_set"><field name="VAR" id="v_m">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入終點</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入跨度</field></block></value><next><block type="variables_set"><field name="VAR" id="v_o">O</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_m">M</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_m">M</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_o">O</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_m">M</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_o">O</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="variables_get"><field name="VAR" id="v_o">O</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,hints:[`起點、終點、間隔三個數字都由輸入決定，直接放進計數迴圈的三個欄位。`],extension:!1,sourceCourse:`M0-05-ListBasics`,sourceDifficulty:`L2`},{id:`count-012`,title:`登山冒險`,description:`這是一題大魔王關卡！勇者要爬一座高山，然後再下山。
這座山的高度是 N。勇者必須從 1 爬到 N，到達山頂後，再從 N-1 走回 1。
請依序列出勇者經過的高度。。
輸入格式
第一行：輸入一個整數N
程式輸出一個序列：1 2 3 ...N N-1 ...1。
序列數字以空白間隔`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5`,output:`1 2 3 4 5 4 3 2 1`,explanation:`第一行輸入數字5
程式輸出1 2 3 4 5 4 3 2 1`},{input:`4`,output:`1 2 3 4 3 2 1`,explanation:`第一行輸入數字4
程式輸出1 2 3 4 3 2 1`}],testCases:[{input:`10`,expectedOutput:`1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1`,output:`1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1`,score:10},{input:`8`,expectedOutput:`1 2 3 4 5 6 7 8 7 6 5 4 3 2 1`,output:`1 2 3 4 5 6 7 8 7 6 5 4 3 2 1`,score:10},{input:`5`,expectedOutput:`1 2 3 4 5 4 3 2 1`,output:`1 2 3 4 5 4 3 2 1`,score:10},{input:`2`,expectedOutput:`1 2 1`,output:`1 2 1`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_out">結果</variable><variable id="v_i">i</variable><variable id="v_k">k</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_k">k</field></block></value></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`拆成兩段：先用一個迴圈從 1 數到 N，再用另一個迴圈從 N-1 倒數到 1。`],extension:!1,sourceCourse:`M1-01-ListSearch`,sourceDifficulty:`L3`}]};export{e as default};