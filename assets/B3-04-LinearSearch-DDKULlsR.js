var e={code:`B3-04-LinearSearch`,title:`K10 位置追蹤與線性搜尋`,description:`基礎知識點課程 U3 清單｜K10 位置追蹤與線性搜尋（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t1`,knowledgePoint:`K10`,unit:`U3 清單`,tasks:[{id:`seclect-003`,title:`清單最大最小值的位置`,description:`在進行排序之前，程式必須先知道「最大值或最小值在清單的哪一個位置」。
小安已經可以找出清單中的最大值與最小值，
但老師希望他進一步找出該數值所在的位置（索引值），
才能正確進行資料交換。
現在給你一個固定長度為 5 的整數清單，
請找出清單中最小值所在的位置。
注意事項：
1. 清單位置由 1 開始計算（第 1 個為位置 1）。
2. 若最小值出現多次，請輸出最前面出現的那一個位置`,inputDescription:`第 1 行：輸入一個數N，N固定為整數5

第 2 行：輸入5 個整數，代表清單內容（以空格隔開）。`,outputDescription:`輸出一個整數，代表最小值所在的位置（索引值）。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 5 1 6`,output:`4`,explanation:`最小值為 1，
位於第 4 個位置。`},{input:`5
2 4 2 9 5`,output:`1`,explanation:`最小值為 2，
第 1 與第 3 個位置都有，
取最前面的第 1 個位置。`}],testCases:[{input:`5
8 3 5 1 6`,expectedOutput:`4`,output:`4`,score:10},{input:`5
2 4 2 9 5`,expectedOutput:`1`,output:`1`,score:10},{input:`5
7 6 5 4 3`,expectedOutput:`5`,output:`5`,score:10},{input:`5
1 9 8 7 6`,expectedOutput:`1`,output:`1`,score:10},{input:`5
4 4 4 4 4`,expectedOutput:`1`,output:`1`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_min">最小值</variable><variable id="v_pos">位置</variable><variable id="v_i">i</variable></variables>
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
                <field name="VAR" id="v_min">最小值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">999999</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="v_pos">位置</field>
                    <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                    <next>
                      <block type="controls_for">
                        <field name="VAR" id="v_i">i</field>
                        <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                        <value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                        <statement name="DO">
                          <block type="interaction_ask_and_wait">
                            <value name="TEXT"><block type="text"><field name="TEXT">請輸入5個整數</field></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_x">數字</field>
                                <value name="VALUE"><block type="interaction_answer"></block></value>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></value>
                                    <statement name="DO0">
                                      <block type="variables_set"><field name="VAR" id="v_min">最小值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                                        <next><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></next>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value></block></next>
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
</xml>`,hints:[`找最小值時，除了記住「最小值是多少」，也要同時記住「它在第幾個位置」。`],extension:!1,sourceCourse:`M1-08-SortApplied`,sourceDifficulty:`L2`},{id:`IDX01-003`,title:`最後一個目標位置`,description:`給定 N 個整數與目標值 X，請找出 X 最後一次出現的位置。位置從 1 開始計算。若沒有出現，輸出 0。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 X。`,outputDescription:`輸出一個整數，代表 X 最後一次出現的位置；若不存在則輸出 0。`,requiresGreenFlag:!0,examples:[{input:`6
4 8 3 8 5 8
8`,output:`6`,explanation:`目標值 8 最後一次出現在第 6 個位置。`}],testCases:[{input:`6
4 8 3 8 5 8
8`,expectedOutput:`6`,output:`6`,score:10},{input:`5
1 2 3 4 5
9`,expectedOutput:`0`,output:`0`,score:10},{input:`4
7 7 7 7
7`,expectedOutput:`4`,output:`4`,score:10},{input:`3
-1 -2 -3
-1`,expectedOutput:`1`,output:`1`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_target">目標值</variable><variable id="v_pos">位置</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入目標值</field></block></value><next><block type="variables_set"><field name="VAR" id="v_target">目標值</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_target">目標值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`位置初始值設為 0；每次遇到目標值就把位置更新成 i，走完清單後留下的就是最後一次出現的位置。`],extension:!1,sourceCourse:`M1-04-ListIndex`,sourceDifficulty:`L3`},{id:`IDX01-002`,title:`第一個目標位置`,description:`給定 N 個整數與目標值 X，請找出 X 第一次出現的位置。位置從 1 開始計算。若沒有出現，輸出 0。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 X。`,outputDescription:`輸出一個整數，代表 X 第一次出現的位置；若不存在則輸出 0。`,requiresGreenFlag:!0,examples:[{input:`6
4 8 3 8 5 8
8`,output:`2`,explanation:`目標值 8 第一次出現在第 2 個位置。`}],testCases:[{input:`6
4 8 3 8 5 8
8`,expectedOutput:`2`,output:`2`,score:10},{input:`5
1 2 3 4 5
9`,expectedOutput:`0`,output:`0`,score:10},{input:`4
7 7 7 7
7`,expectedOutput:`1`,output:`1`,score:10},{input:`3
-1 -2 -3
-3`,expectedOutput:`3`,output:`3`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_target">目標值</variable><variable id="v_pos">位置</variable><variable id="v_i">i</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N、N個整數與目標值</field></block></value>
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
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入目標值</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_target">目標值</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_pos">位置</field>
                                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                                <next>
                                  <block type="controls_for">
                                    <field name="VAR" id="v_i">i</field>
                                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                                    <value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                                    <statement name="DO">
                                      <block type="controls_if">
                                        <value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_target">目標值</field></block></value></block></value></block></value>
                                        <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></statement>
                                      </block>
                                    </statement>
                                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value></block></next>
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
</xml>`,hints:[`和上一題幾乎一樣，但只有在「還沒找到過」（位置仍是 0）的時候才更新位置。`],extension:!1,sourceCourse:`M1-04-ListIndex`,sourceDifficulty:`L3`},{id:`CNT01-022`,title:`第一個及格的位置`,description:`給定 N 位學生的成績，請找出第一個分數大於或等於 60 的位置。位置從 1 開始計算。保證至少有一位學生及格。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數代表成績。`,outputDescription:`輸出一個整數，代表第一個及格成績的位置。`,requiresGreenFlag:!0,examples:[{input:`5
40 55 60 80 30`,output:`3`,explanation:`第一個大於或等於 60 的分數是第 3 個。`}],testCases:[{input:`5
40 55 60 80 30`,expectedOutput:`3`,output:`3`,score:10},{input:`4
70 50 80 90`,expectedOutput:`1`,output:`1`,score:10},{input:`6
10 20 30 40 50 60`,expectedOutput:`6`,output:`6`,score:10},{input:`3
59 61 62`,expectedOutput:`2`,output:`2`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_pos">位置</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`和上一題的寫法相同，只是把「等於目標值」換成「分數 ≥ 60」。`],extension:!1,sourceCourse:`M1-04-ListIndex`,sourceDifficulty:`L3`},{id:`IDX01-008`,title:`【延伸】兩個目標的距離`,description:`給定 N 個整數，以及兩個目標值 A 與 B。請找出 A 第一次出現的位置與 B 第一次出現的位置，並輸出兩個位置的距離。保證 A 與 B 都會出現。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入兩個整數 A 與 B。`,outputDescription:`輸出一個整數，代表兩個位置的距離。距離一律用較大的位置減較小的位置。`,requiresGreenFlag:!0,examples:[{input:`6
4 8 3 9 5 8
8 9`,output:`2`,explanation:`8 第一次出現在第 2 個位置，9 第一次出現在第 4 個位置，距離為 2。`}],testCases:[{input:`6
4 8 3 9 5 8
8 9`,expectedOutput:`2`,output:`2`,score:10},{input:`5
1 2 3 4 5
1 5`,expectedOutput:`4`,output:`4`,score:10},{input:`4
7 8 7 8
8 7`,expectedOutput:`1`,output:`1`,score:10},{input:`3
-1 -2 -3
-3 -1`,expectedOutput:`2`,output:`2`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_a">A</variable><variable id="v_b">B</variable><variable id="v_posa">位置A</variable><variable id="v_posb">位置B</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入A</field></block></value><next><block type="variables_set"><field name="VAR" id="v_a">A</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入B</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">B</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_posa">位置A</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="v_posb">位置B</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_posa">位置A</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_a">A</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_posa">位置A</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_posb">位置B</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_posb">位置B</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></statement></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_posa">位置A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_posb">位置B</field></block></value></block></value><value name="THEN"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_posa">位置A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_posb">位置B</field></block></value></block></value><value name="ELSE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_posb">位置B</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_posa">位置A</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`分別找出 A 和 B 第一次出現的位置，再算兩個位置相差多少（用大的減小的）。`],extension:!0,sourceCourse:`M1-04-ListIndex`,sourceDifficulty:`L3`}]};export{e as default};