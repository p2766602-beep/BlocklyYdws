var e={code:`B3-02-ListStats`,title:`K08 清單累計與條件統計`,description:`基礎知識點課程 U3 清單｜K08 清單累計與條件統計（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t1`,knowledgePoint:`K08`,unit:`U3 清單`,tasks:[{id:`JSA01-D02`,title:`清單加總與平均示範`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請輸出這 N 個數字的總和與整數平均，兩個結果各佔一行。平均值請使用整數除法，只保留整數部分。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`第一行：總和。

第二行：整數平均。`,requiresGreenFlag:!0,examples:[{input:`3
10 20 30`,output:`60
20`,explanation:`總和 60，平均 20。`},{input:`4
1 2 3 4`,output:`10
2`,explanation:`10 除以 4 取整數部分為 2。`}],testCases:[{input:`3
10 20 30`,expectedOutput:`60
20`,output:`60
20`,score:20},{input:`4
1 2 3 4`,expectedOutput:`10
2`,output:`10
2`,score:20},{input:`5
5 5 5 5 5`,expectedOutput:`25
5`,output:`25
5`,score:20},{input:`2
7 8`,expectedOutput:`15
7`,output:`15
7`,score:20},{input:`6
1 2 3 4 5 6`,expectedOutput:`21
3`,output:`21
3`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_sum">總和</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="v_sum">總和</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_x">數字</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_sum">總和</field>
                                <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="interaction_say">
                        <value name="TEXT"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value>
                        <next>
                          <block type="interaction_say">
                            <value name="TEXT"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value></block></value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`走訪清單時把每一項加進總和；平均＝總和整除 N。`],extension:!1,sourceCourse:`M0-05-ListBasics`,sourceDifficulty:`L2`},{id:`JSL01-P02`,title:`只加偶數`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請只把其中的偶數加總後輸出。本題用來練習迴圈內加入條件判斷`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`輸出所有偶數的總和。若沒有偶數，輸出 0。`,requiresGreenFlag:!0,examples:[{input:`5
1 2 3 4 5`,output:`6`,explanation:`偶數為 2 與 4，總和為 6。`},{input:`3
1 3 5`,output:`0`,explanation:`沒有偶數，所以輸出 0。`}],testCases:[{input:`5
1 2 3 4 5`,expectedOutput:`6`,output:`6`,score:20},{input:`4
2 4 6 8`,expectedOutput:`20`,output:`20`,score:20},{input:`3
1 3 5`,expectedOutput:`0`,output:`0`,score:20},{input:`6
10 11 12 13 14 15`,expectedOutput:`36`,output:`36`,score:20},{input:`1
100`,expectedOutput:`100`,output:`100`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable>
    <variable id="var_num">目前數字</variable>
    <variable id="var_sum">總和</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_sum">總和</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="var_num">目前數字</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_num">目前數字</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block>
                                </value>
                                <statement name="DO0">
                                  <block type="variables_set">
                                    <field name="VAR" id="var_sum">總和</field>
                                    <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_num">目前數字</field></block></value></block></value>
                                  </block>
                                </statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`走訪清單時，先判斷這一項是不是偶數，是才加進總和。`],extension:!1,sourceCourse:`M0-04-LoopsAndSum`,sourceDifficulty:`L2`},{id:`CNT01-020`,title:`大於門檻的數量`,description:`給定一個門檻值 K 與 N 個整數，請計算有幾個數字大於 K。`,inputDescription:`第一個整數為 N，第二個整數為 K，接著輸入 N 個整數。`,outputDescription:`輸出一個整數，代表大於 K 的數字數量。`,requiresGreenFlag:!0,examples:[{input:`6
50
30 60 50 80 45 90`,output:`3`,explanation:`大於 50 的數字有 60、80、90，共 3 個。`}],testCases:[{input:`6
50
30 60 50 80 45 90`,expectedOutput:`3`,output:`3`,score:10},{input:`4
10
1 2 3 4`,expectedOutput:`0`,output:`0`,score:10},{input:`5
5
6 7 8 9 10`,expectedOutput:`5`,output:`5`,score:10},{input:`7
20
20 21 19 22 18 23 17`,expectedOutput:`3`,output:`3`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_k">K</variable><variable id="v_x">數字</variable><variable id="v_count">數量</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入K</field></block></value><next><block type="variables_set"><field name="VAR" id="v_k">K</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_count">數量</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_k">K</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_count">數量</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_count">數量</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_count">數量</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`準備一個「計數」變數，從 0 開始；遇到大於 K 的數字就加 1。`],extension:!1,sourceCourse:`M1-03-ListStats`,sourceDifficulty:`L2`},{id:`count-016`,title:`合格的裝備`,description:`勇者的負重能力有限，他只能攜帶重量「小於 10」的輕型裝備。 現在清單中有一堆裝備的重量，請你利用迴圈檢查每一個裝備，只把重量小於 10 的裝備重量印出來。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表裝備數量。
第二行輸入 N 個整數，代表每個裝備重量。
程式依序輸出小於 10 的數字，中間以空白隔開。
如果都沒有小於 10 的數字，則什麼都不輸出。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5
15 5 20 8 3`,output:`5 8 3`,explanation:`第一行輸入數字5，代表5筆裝備資料
第二行有5筆整數裝備資料，15 5 20 8 3
程式依序輸出小於10裝備重量：5 8 3`},{input:`3
12 15 20`,output:``,explanation:`第一行輸入數字3，代表3筆裝備資料
第二行有3筆整數裝備資料，12 15 20
沒有小於10裝備輸出為空：`}],testCases:[{input:`3
1 2 3`,expectedOutput:`1 2 3`,output:`1 2 3`,score:10},{input:`6
7 15 7 24 9 7`,expectedOutput:`7 7 9 7`,output:`7 7 9 7`,score:10},{input:`4
33 5 44 11`,expectedOutput:`5`,output:`5`,score:10},{input:`5
3 8 11 69 77`,expectedOutput:`3 8`,output:`3 8`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_out">結果</variable><variable id="v_first">是否第一筆</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_first">是否第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="v_first">是否第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_first">是否第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value></block></statement></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`走訪清單時，只把重量小於 10 的項目輸出；都沒有的話就什麼都不輸出。`],extension:!1,sourceCourse:`M1-02-ListAnalysis`,sourceDifficulty:`L3`},{id:`STA01-004`,title:`通過率整數版`,description:`給定 N 位學生的成績，分數大於或等於 60 為通過。請計算通過人數與通過率。通過率使用整數百分比，小數直接捨去。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數代表成績。`,outputDescription:`輸出兩個整數，依序為通過人數與通過率百分比，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`5
80 55 60 40 90`,output:`3 60`,explanation:`5 人中 3 人通過，通過率為 3×100÷5=60。`}],testCases:[{input:`5
80 55 60 40 90`,expectedOutput:`3 60`,output:`3 60`,score:10},{input:`4
10 20 30 40`,expectedOutput:`0 0`,output:`0 0`,score:10},{input:`3
60 70 80`,expectedOutput:`3 100`,output:`3 100`,score:10},{input:`6
59 60 61 62 30 90`,expectedOutput:`4 66`,output:`4 66`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_count">通過人數</variable><variable id="v_rate">通過率</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_count">通過人數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_count">通過人數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_count">通過人數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_rate">通過率</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_count">通過人數</field></block></value><value name="B"><block type="math_number"><field name="NUM">100</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_count">通過人數</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_rate">通過率</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`先數出通過人數，通過率＝通過人數×100 整除總人數。注意要先乘 100 再除。`],extension:!1,sourceCourse:`M1-03-ListStats`,sourceDifficulty:`L2`},{id:`STA01-005`,title:`【延伸】高於平均的數量`,description:`給定 N 個整數，先計算整數平均，再計算有幾個數字大於平均。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。`,outputDescription:`輸出兩個整數，依序為整數平均與大於平均的數量，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`5
10 20 30 40 50`,output:`30 2`,explanation:`平均為 30，大於 30 的數字有 40、50。`}],testCases:[{input:`5
10 20 30 40 50`,expectedOutput:`30 2`,output:`30 2`,score:10},{input:`4
5 5 5 5`,expectedOutput:`5 0`,output:`5 0`,score:10},{input:`3
1 2 9`,expectedOutput:`4 1`,output:`4 1`,score:10},{input:`6
8 9 10 11 12 13`,expectedOutput:`10 3`,output:`10 3`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_vals">數值清單</variable><variable id="v_sum">總和</variable><variable id="v_avg">平均</variable><variable id="v_count">數量</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_vals">數值清單</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_vals">數值清單</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_avg">平均</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_count">數量</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_vals">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_avg">平均</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_count">數量</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_count">數量</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_avg">平均</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_count">數量</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`要走訪兩次：第一次算出平均，第二次再數有幾個數字大於平均。`],extension:!0,sourceCourse:`M1-03-ListStats`,sourceDifficulty:`L3`}]};export{e as default};