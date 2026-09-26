var e={code:`B3-01-ListTraversal`,title:`K07 清單讀取與索引走訪`,description:`基礎知識點課程 U3 清單｜K07 清單讀取與索引走訪（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t1`,knowledgePoint:`K07`,unit:`U3 清單`,tasks:[{id:`JSA01-D01`,title:`清單逐一讀取`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請依照原本順序逐一輸出每個數字，每個數字各佔一行。本題用來示範清單逐一讀取與輸出。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`依序輸出每個數字，每個數字各佔一行。`,requiresGreenFlag:!0,examples:[{input:`3
5 8 2`,output:`5
8
2`,explanation:`依序輸出清單中的三個數字。`},{input:`2
10 20`,output:`10
20`,explanation:`依序輸出 10 與 20。`}],testCases:[{input:`1
7`,expectedOutput:`7`,output:`7`,score:20},{input:`3
5 8 2`,expectedOutput:`5
8
2`,output:`5
8
2`,score:20},{input:`4
1 2 3 4`,expectedOutput:`1
2
3
4`,output:`1
2
3
4`,score:20},{input:`5
9 7 5 3 1`,expectedOutput:`9
7
5
3
1`,output:`9
7
5
3
1`,score:20},{input:`2
100 200`,expectedOutput:`100
200`,output:`100
200`,score:20}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
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
                          <block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`先把第二行的 N 個數字存進清單，再用迴圈從第 1 項取到第 N 項，逐一輸出。`],extension:!1,sourceCourse:`M0-05-ListBasics`,sourceDifficulty:`L1`},{id:`IDX01-001`,title:`指定位置的數字`,description:`給定 N 個整數與一個位置 P，請輸出第 P 個數字。位置從 1 開始計算。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 P。保證 1 <= P <= N。`,outputDescription:`輸出一個整數，代表第 P 個數字。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 12 7 10
3`,output:`12`,explanation:`第 3 個數字是 12。`}],testCases:[{input:`5
8 3 12 7 10
3`,expectedOutput:`12`,output:`12`,score:10},{input:`4
1 2 3 4
1`,expectedOutput:`1`,output:`1`,score:10},{input:`4
1 2 3 4
4`,expectedOutput:`4`,output:`4`,score:10},{input:`6
-1 -2 -3 -4 -5 -6
5`,expectedOutput:`-5`,output:`-5`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_p">P</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N與N個整數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="v_all">全部數字</field>
                <value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value>
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
                              <block type="lists_setIndex">
                                <mutation at="false"></mutation>
                                <field name="MODE">INSERT</field>
                                <field name="WHERE">LAST</field>
                                <value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value>
                                <value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入位置P</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_p">P</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="interaction_say">
                                <value name="TEXT"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value></block></value>
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
    </next>
  </block>
</xml>`,hints:[`不需要迴圈：把數字存進清單後，直接取「第 P 項」。`],extension:!1,sourceCourse:`M1-04-ListIndex`,sourceDifficulty:`L2`},{id:`count-018`,title:`冒險日誌`,description:`勇者寫了 N 天的冒險日誌，清單中依序記錄了每天打倒的怪物數量。
例如清單的第一個數字是第 1 天打倒的數量，第二個數字是第 2 天的...
請你格式化輸出每天的戰績，格式為：Day-[第幾天]-[數量]。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表天數。
第二行輸入 N 個整數，代表每天怪物的數量。
程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`2
15 5`,output:`Day-1-15 Day-2-5`,explanation:`第一行輸入數字2，代表有2天資料
第二行有2筆整數資料，15 5
程式依序輸出所有天數資料：Day-1-15 Day-2-5`},{input:`3
12 15 20`,output:`Day-1-12 Day-2-15 Day-3-20`,explanation:`第一行輸入數字3，代表有3天資料
第二行有3筆整數資料，12 15 20
程式依序輸出所有天數資料：Day-1-12 Day-2-15 Day-3-20`}],testCases:[{input:`1
100`,expectedOutput:`Day-1-100`,output:`Day-1-100`,score:10},{input:`4
7 7 9 7`,expectedOutput:`Day-1-7 Day-2-7 Day-3-9 Day-4-7`,output:`Day-1-7 Day-2-7 Day-3-9 Day-4-7`,score:10},{input:`4
33 22 44 11`,expectedOutput:`Day-1-33 Day-2-22 Day-3-44 Day-4-11`,output:`Day-1-33 Day-2-22 Day-3-44 Day-4-11`,score:10},{input:`3
25 2 3`,expectedOutput:`Day-1-25 Day-2-2 Day-3-3`,output:`Day-1-25 Day-2-2 Day-3-3`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_out">結果</variable><variable id="v_i">i</variable></variables>
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
                <field name="VAR" id="v_out">結果</field>
                <value name="VALUE"><block type="text"><field name="TEXT"></field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="v_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N天怪物數量</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_x">數字</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="controls_if">
                                <mutation else="1"></mutation>
                                <value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                                <statement name="DO0">
                                  <block type="variables_set">
                                    <field name="VAR" id="v_out">結果</field>
                                    <value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="text"><field name="TEXT">Day-</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="ADD2"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT">-</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value></block></value>
                                  </block>
                                </statement>
                                <statement name="ELSE">
                                  <block type="variables_set">
                                    <field name="VAR" id="v_out">結果</field>
                                    <value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> Day-</field></block></value><value name="ADD2"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT">-</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value></block></value></block></value>
                                  </block>
                                </statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`迴圈變數 i 同時代表「第幾天」，而清單的第 i 項是「那天的數量」，兩個一起用。`],extension:!1,sourceCourse:`M1-02-ListAnalysis`,sourceDifficulty:`L2`},{id:`count-017`,title:`倒轉時光`,description:`勇者獲得了一個「時光倒流」的魔法卷軸。這個卷軸上有一串數字密碼，但是必須從最後一個數字讀回到第一個數字，魔法才能生效。 請讀取一個清單，並將清單內的數字「由後往前」印出來。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表密碼長度。
第二行輸入 N 個整數，代表N個數字的密碼組合。
程式反序輸 N 筆密碼數字資料，中間以空白間隔
(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`4
10 20 30 40`,output:`40 30 20 10`,explanation:`第一行輸入數字4，代表密碼有4筆資料
第二行有4筆整數資料，10 20 30 40
程式反敘輸出密碼資料：40 30 20 10`},{input:`3
1 2 3`,output:`3 2 1`,explanation:`第一行輸入數字3，代表密碼有3筆資料
第二行有3筆整數資料，1 2 3
程式反敘輸出密碼資料：3 2 1`}],testCases:[{input:`2
100 20`,expectedOutput:`20 100`,output:`20 100`,score:10},{input:`4
7 7 9 7`,expectedOutput:`7 9 7 7`,output:`7 9 7 7`,score:10},{input:`5
1 2 3 4 5`,expectedOutput:`5 4 3 2 1`,output:`5 4 3 2 1`,score:10},{input:`4
0 1 0 1`,expectedOutput:`1 0 1 0`,output:`1 0 1 0`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_nums">數值清單</variable><variable id="v_out">結果</variable><variable id="v_i">i</variable></variables>
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
                <field name="VAR" id="v_nums">數值清單</field>
                <value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N個數字</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_x">數字</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="lists_setIndex">
                                <mutation at="false"></mutation>
                                <field name="MODE">INSERT</field>
                                <field name="WHERE">LAST</field>
                                <value name="LIST"><block type="variables_get"><field name="VAR" id="v_nums">數值清單</field></block></value>
                                <value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="variables_set">
                        <field name="VAR" id="v_out">結果</field>
                        <value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_nums">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value>
                        <next>
                          <block type="controls_for">
                            <field name="VAR" id="v_i">i</field>
                            <value name="FROM"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                            <value name="TO"><block type="math_number"><field name="NUM">1</field></block></value>
                            <value name="BY"><block type="math_number"><field name="NUM">-1</field></block></value>
                            <statement name="DO">
                              <block type="variables_set">
                                <field name="VAR" id="v_out">結果</field>
                                <value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_nums">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value>
                              </block>
                            </statement>
                            <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next>
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
</xml>`,hints:[`讓迴圈從 N 倒數到 1，依序取清單的第 i 項，就會變成反向輸出。`],extension:!1,sourceCourse:`M1-02-ListAnalysis`,sourceDifficulty:`L2`},{id:`IDX01-007`,title:`左右鄰居總和`,description:`給定 N 個整數與位置 P，請計算第 P 個數字左右鄰居的總和。若沒有左鄰居或右鄰居，該側視為 0。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 P。保證 1 <= P <= N。`,outputDescription:`輸出一個整數，代表左右鄰居總和。`,requiresGreenFlag:!0,examples:[{input:`5
10 20 30 40 50
3`,output:`60`,explanation:`第 3 個數字的左鄰居是 20，右鄰居是 40，總和為 60。`}],testCases:[{input:`5
10 20 30 40 50
3`,expectedOutput:`60`,output:`60`,score:10},{input:`5
10 20 30 40 50
1`,expectedOutput:`20`,output:`20`,score:10},{input:`5
10 20 30 40 50
5`,expectedOutput:`40`,output:`40`,score:10},{input:`1
99
1`,expectedOutput:`0`,output:`0`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_p">P</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入位置P</field></block></value><next><block type="variables_set"><field name="VAR" id="v_p">P</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_say"><value name="TEXT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="THEN"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="ELSE"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value><value name="THEN"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="ELSE"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`左鄰居是第 P-1 項、右鄰居是第 P+1 項；P 在最前面或最後面時，其中一邊不存在，要當作 0。`],extension:!1,sourceCourse:`M1-04-ListIndex`,sourceDifficulty:`L3`}]};export{e as default};