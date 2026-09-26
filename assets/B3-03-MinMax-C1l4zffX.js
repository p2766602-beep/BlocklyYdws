var e={code:`B3-03-MinMax`,title:`K09 最大值與最小值`,description:`基礎知識點課程 U3 清單｜K09 最大值與最小值（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t1`,knowledgePoint:`K09`,unit:`U3 清單`,tasks:[{id:`EXT01-001`,title:`找最大值`,description:`給定 N 個整數，請找出其中最大的數字。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。`,outputDescription:`輸出一個整數，代表最大值。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 12 7 10`,output:`12`,explanation:`5 個數字中最大的是 12。`}],testCases:[{input:`5
8 3 12 7 10`,expectedOutput:`12`,output:`12`,score:10},{input:`4
1 1 1 1`,expectedOutput:`1`,output:`1`,score:10},{input:`6
-5 -2 -9 -1 -7 -3`,expectedOutput:`-1`,output:`-1`,score:10},{input:`3
100 50 99`,expectedOutput:`100`,output:`100`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_max">最大值</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N與N個數字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="v_max">最大值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
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
                              <block type="controls_if">
                                <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value>
                                <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`先假設第 1 個數字是最大值，再從第 2 個開始逐一比較，遇到更大的就更新。`],extension:!1,sourceCourse:`M0-06-MinMaxExtra`,sourceDifficulty:`L2`},{id:`EXT01-003`,title:`最大最小差距`,description:`給定 N 個整數，請找出最大值與最小值，並計算兩者差距。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。`,outputDescription:`輸出三個整數，依序為最大值、最小值、差距，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 12 7 10`,output:`12 3 9`,explanation:`最大值 12，最小值 3，差距為 9。`}],testCases:[{input:`5
8 3 12 7 10`,expectedOutput:`12 3 9`,output:`12 3 9`,score:10},{input:`4
6 6 6 6`,expectedOutput:`6 6 0`,output:`6 6 0`,score:10},{input:`6
-5 -2 -9 -1 -7 -3`,expectedOutput:`-1 -9 8`,output:`-1 -9 8`,score:10},{input:`3
100 50 99`,expectedOutput:`100 50 50`,output:`100 50 50`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_max">最大值</variable><variable id="v_min">最小值</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N與N個數字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="v_max">最大值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="v_min">最小值</field>
                    <value name="VALUE"><block type="math_number"><field name="NUM">999999</field></block></value>
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
                                  <block type="controls_if">
                                    <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value>
                                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></statement>
                                    <next>
                                      <block type="controls_if">
                                        <value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></value>
                                        <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_min">最小值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></statement>
                                      </block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="interaction_say">
                            <value name="TEXT">
                              <block type="text_join">
                                <mutation items="3"></mutation>
                                <value name="ADD0"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value>
                                <value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value>
                                <value name="ADD2">
                                  <block type="text_join">
                                    <mutation items="3"></mutation>
                                    <value name="ADD0"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value>
                                    <value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value>
                                    <value name="ADD2"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></value>
                                  </block>
                                </value>
                              </block>
                            </value>
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
</xml>`,hints:[`同一個迴圈裡同時更新最大值和最小值，最後再相減。`],extension:!1,sourceCourse:`M0-06-MinMaxExtra`,sourceDifficulty:`L2`},{id:`M1-12-06`,title:`單筆資料時的最大最小值`,description:`請你找出N筆分數中的最大值與最小值，並依序輸出。`,inputDescription:`N、N個分數`,outputDescription:`最大值 最小值`,requiresGreenFlag:!0,examples:[{input:`1
88`,output:`88 88`,explanation:`只有一筆資料88，最大值跟最小值都是88`}],testCases:[{input:`1
88`,expectedOutput:`88 88`,output:`88 88`,score:25},{input:`5
70 90 60 100 80`,expectedOutput:`100 60`,output:`100 60`,score:25},{input:`1
0`,expectedOutput:`0 0`,output:`0 0`,score:25},{input:`2
50 50`,expectedOutput:`50 50`,output:`50 50`,score:25}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_max">最大值</variable><variable id="v_min">最小值</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_min">最小值</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_min">最小值</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement></block></next></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`只有一筆資料時，最大值和最小值都是它自己。如果初始值用第 1 筆資料，就不會出錯。`],extension:!1,sourceCourse:`M1-12-DebugFormat`,sourceDifficulty:`L2`},{id:`EXT01-008`,title:`區間最大值`,description:`給定 N 個整數，以及查詢區間 L 到 R，請找出第 L 個到第 R 個數字中的最大值。位置從 1 開始計算。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入兩個整數 L 與 R。保證 1 <= L <= R <= N。`,outputDescription:`輸出一個整數，代表區間最大值。`,requiresGreenFlag:!0,examples:[{input:`6
5 8 3 12 7 10
2 5`,output:`12`,explanation:`第 2 到第 5 個數字是 8、3、12、7，最大值為 12。`}],testCases:[{input:`6
5 8 3 12 7 10
2 5`,expectedOutput:`12`,output:`12`,score:10},{input:`5
1 2 3 4 5
1 3`,expectedOutput:`3`,output:`3`,score:10},{input:`4
9 8 7 6
3 4`,expectedOutput:`7`,output:`7`,score:10},{input:`7
-5 -1 -9 -3 -2 -8 -4
2 6`,expectedOutput:`-1`,output:`-1`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_l">L</variable><variable id="v_r">R</variable><variable id="v_max">最大值</variable><variable id="v_i">i</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N與N個數字</field></block></value>
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
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入L</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_l">L</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="interaction_ask_and_wait">
                                <value name="TEXT"><block type="text"><field name="TEXT">請輸入R</field></block></value>
                                <next>
                                  <block type="variables_set">
                                    <field name="VAR" id="v_r">R</field>
                                    <value name="VALUE"><block type="interaction_answer"></block></value>
                                    <next>
                                      <block type="variables_set">
                                        <field name="VAR" id="v_max">最大值</field>
                                        <value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_l">L</field></block></value></block></value>
                                        <next>
                                          <block type="controls_if">
                                            <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_r">R</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_l">L</field></block></value></block></value>
                                            <statement name="DO0">
                                              <block type="controls_for">
                                                <field name="VAR" id="v_i">i</field>
                                                <value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_l">L</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                                                <value name="TO"><block type="variables_get"><field name="VAR" id="v_r">R</field></block></value>
                                                <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                                                <statement name="DO">
                                                  <block type="controls_if">
                                                    <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value>
                                                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement>
                                                  </block>
                                                </statement>
                                              </block>
                                            </statement>
                                            <next>
                                              <block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block>
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
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`找最大值的方法不變，只是迴圈改成從第 L 項跑到第 R 項，初始值也要用第 L 項。`],extension:!1,sourceCourse:`M0-06-MinMaxExtra`,sourceDifficulty:`L3`},{id:`EXT01-006`,title:`【延伸】第二高分`,description:`給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數代表成績。`,outputDescription:`輸出兩個整數，依序為最高分與第二高分，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`6
70 95 80 95 60 88`,output:`95 88`,explanation:`最高分是 95，第二高的不同分數是 88。`}],testCases:[{input:`6
70 95 80 95 60 88`,expectedOutput:`95 88`,output:`95 88`,score:10},{input:`5
100 90 80 70 60`,expectedOutput:`100 90`,output:`100 90`,score:10},{input:`4
10 20 20 5`,expectedOutput:`20 10`,output:`20 10`,score:10},{input:`7
-1 -5 -3 -1 -2 -8 -4`,expectedOutput:`-1 -2`,output:`-1 -2`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">目前值</variable><variable id="v_max">最大值</variable><variable id="v_second">次高分</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N與N個成績</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="v_max">最大值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="v_second">次高分</field>
                    <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
                    <next>
                      <block type="controls_repeat_ext">
                        <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                        <statement name="DO">
                          <block type="interaction_ask_and_wait">
                            <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_x">目前值</field>
                                <value name="VALUE"><block type="interaction_answer"></block></value>
                                <next>
                                  <block type="controls_if">
                                    <mutation elseif="1"></mutation>
                                    <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">目前值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value>
                                    <statement name="DO0">
                                      <block type="variables_set"><field name="VAR" id="v_second">次高分</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value>
                                        <next><block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">目前值</field></block></value></block></next>
                                      </block>
                                    </statement>
                                    <value name="IF1">
                                      <block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">目前值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_second">次高分</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">目前值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value></block>
                                    </value>
                                    <statement name="DO1"><block type="variables_set"><field name="VAR" id="v_second">次高分</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">目前值</field></block></value></block></statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="interaction_say">
                            <value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_second">次高分</field></block></value></block></value>
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
</xml>`,hints:[`同時記住「第一名」和「第二名」：遇到比第一名大的數，原本的第一名要退成第二名。分數相同的情況也要想清楚。`],extension:!0,sourceCourse:`M0-06-MinMaxExtra`,sourceDifficulty:`L3`},{id:`TYTN-05`,title:`【延伸】班服投票`,description:`可愛國小601班要製作紀念班服，本次班服設計共有3個款式，分別編號為1、2、3。
每位同學可在選票上寫下自己選擇的班服款式編號，最後以得票數最高者為班服樣式。
請先計算每款班服的得票數（依1→3順序），並輸出最高票的班服編號。
若有兩款或以上的票數相同且為最高票，則輸出：請重新投票`,inputDescription:`第一行：整數 N，代表投票數。

第二行：N 個整數（介於 1~3），代表每張選票的班服設計編號。`,outputDescription:`若票數最高者唯一，輸出該款式編號；若最高票出現同票數，輸出「請重新投票」。`,requiresGreenFlag:!0,examples:[{input:`8
1 2 2 3 2 1 3 2`,output:`2`,explanation:`8 位同學投票，各自選擇的班服編號如上。
2 號班服得票最高，因此輸出 2。`},{input:`6
1 2 3 1 2 3`,output:`請重新投票`,explanation:`3 種班服皆獲得 2 票，最高票有同票情形。
因此輸出「請重新投票」。`}],testCases:[{input:`8
1 2 2 3 2 1 3 2`,expectedOutput:`2`,output:`2`,score:10},{input:`6
1 2 3 1 2 3`,expectedOutput:`請重新投票`,output:`請重新投票`,score:10},{input:`5
1 1 1 2 3`,expectedOutput:`1`,output:`1`,score:10},{input:`7
3 3 2 2 1 3 2`,expectedOutput:`請重新投票`,output:`請重新投票`,score:10},{input:`4
2 2 2 3`,expectedOutput:`2`,output:`2`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_c1">票數1</variable><variable id="v_c2">票數2</variable><variable id="v_c3">票數3</variable><variable id="v_max">最大票數</variable><variable id="v_tie">並列數</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_c1">票數1</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="v_c2">票數2</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="v_c3">票數3</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_c1">票數1</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c1">票數1</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_c2">票數2</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c2">票數2</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><statement name="ELSE"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_c3">票數3</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c3">票數3</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_max">最大票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_c1">票數1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c2">票數2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_max">最大票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_c2">票數2</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c3">票數3</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_max">最大票數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_c3">票數3</field></block></value></block></statement><next><block type="variables_set"><field name="VAR" id="v_tie">並列數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c1">票數1</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tie">並列數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_tie">並列數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c2">票數2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tie">並列數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_tie">並列數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c3">票數3</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tie">並列數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_tie">並列數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_tie">並列數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">請重新投票</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c1">票數1</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="math_number"><field name="NUM">1</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c2">票數2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大票數</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="math_number"><field name="NUM">2</field></block></value></block></statement><statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="math_number"><field name="NUM">3</field></block></value></block></statement></block></statement></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`先用三個計數變數算出每一款的票數，再找出最高票；最高票如果有兩款以上相同，要輸出「請重新投票」。`],extension:!0,sourceCourse:`M1-02-ListAnalysis`,sourceDifficulty:`L3`}]};export{e as default};