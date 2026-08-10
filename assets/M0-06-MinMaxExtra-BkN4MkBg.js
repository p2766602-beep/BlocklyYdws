var e={code:`M0-06-MinMaxExtra`,title:`找最大值/最小值延伸`,type:`programming`,mode:`learning`,tier:`t0`,tasks:[{id:`EXT01-001`,title:`找最大值`,description:`給定 N 個整數，請找出其中最大的數字。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。`,outputDescription:`輸出一個整數，代表最大值。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 12 7 10`,output:`12`,explanation:`5 個數字中最大的是 12。`}],testCases:[{input:`5
8 3 12 7 10`,expectedOutput:`12`,output:`12`,score:0},{input:`4
1 1 1 1`,expectedOutput:`1`,output:`1`,score:0},{input:`6
-5 -2 -9 -1 -7 -3`,expectedOutput:`-1`,output:`-1`,score:0},{input:`3
100 50 99`,expectedOutput:`100`,output:`100`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
</xml>`},{id:`EXT01-002`,title:`找最小值`,description:`給定 N 個整數，請找出其中最小的數字。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。`,outputDescription:`輸出一個整數，代表最小值。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 12 7 10`,output:`3`,explanation:`5 個數字中最小的是 3。`}],testCases:[{input:`5
8 3 12 7 10`,expectedOutput:`3`,output:`3`,score:0},{input:`4
6 6 6 6`,expectedOutput:`6`,output:`6`,score:0},{input:`6
-5 -2 -9 -1 -7 -3`,expectedOutput:`-9`,output:`-9`,score:0},{input:`3
100 50 99`,expectedOutput:`50`,output:`50`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_min">最小值</variable></variables>
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
                                <value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></value>
                                <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_min">最小值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`},{id:`EXT01-003`,title:`最大最小差距`,description:`給定 N 個整數，請找出最大值與最小值，並計算兩者差距。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。`,outputDescription:`輸出三個整數，依序為最大值、最小值、差距，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 12 7 10`,output:`12 3 9`,explanation:`最大值 12，最小值 3，差距為 9。`}],testCases:[{input:`5
8 3 12 7 10`,expectedOutput:`12 3 9`,output:`12 3 9`,score:0},{input:`4
6 6 6 6`,expectedOutput:`6 6 0`,output:`6 6 0`,score:0},{input:`6
-5 -2 -9 -1 -7 -3`,expectedOutput:`-1 -9 8`,output:`-1 -9 8`,score:0},{input:`3
100 50 99`,expectedOutput:`100 50 50`,output:`100 50 50`,score:0}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
</xml>`},{id:`EXT01-004`,title:`最高分的位置`,description:`給定 N 位學生的成績，請找出最高分第一次出現的位置。位置從 1 開始計算。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數代表成績。`,outputDescription:`輸出兩個整數，依序為最高分與最高分第一次出現的位置，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`6
70 95 80 95 60 88`,output:`95 2`,explanation:`最高分是 95，第一次出現在第 2 個位置。`}],testCases:[{input:`6
70 95 80 95 60 88`,expectedOutput:`95 2`,output:`95 2`,score:0},{input:`4
100 90 80 70`,expectedOutput:`100 1`,output:`100 1`,score:0},{input:`5
50 60 70 80 90`,expectedOutput:`90 5`,output:`90 5`,score:0},{input:`3
88 88 88`,expectedOutput:`88 1`,output:`88 1`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_max">最大值</variable><variable id="v_pos">位置</variable><variable id="v_i">i</variable></variables>
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
                            <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_x">數字</field>
                                <value name="VALUE"><block type="interaction_answer"></block></value>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value></block></value>
                                    <statement name="DO0">
                                      <block type="variables_set"><field name="VAR" id="v_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                                        <next><block type="variables_set"><field name="VAR" id="v_pos">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></next>
                                      </block>
                                    </statement>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next>
                          <block type="interaction_say">
                            <value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_max">最大值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value></block></value>
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
</xml>`},{id:`EXT01-005`,title:`最低溫的位置`,description:`給定 N 天的溫度，請找出最低溫第一次出現的位置。位置從 1 開始計算。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數代表溫度。`,outputDescription:`輸出兩個整數，依序為最低溫與最低溫第一次出現的位置，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`5
22 18 20 18 25`,output:`18 2`,explanation:`最低溫是 18，第一次出現在第 2 天。`}],testCases:[{input:`5
22 18 20 18 25`,expectedOutput:`18 2`,output:`18 2`,score:0},{input:`4
5 4 3 2`,expectedOutput:`2 4`,output:`2 4`,score:0},{input:`6
-1 -3 -2 -3 0 1`,expectedOutput:`-3 2`,output:`-3 2`,score:0},{input:`3
10 10 10`,expectedOutput:`10 1`,output:`10 1`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_min">最小值</variable><variable id="v_pos">位置</variable><variable id="v_i">i</variable></variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入N與N天溫度</field></block></value>
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
                            <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
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
                        <next>
                          <block type="interaction_say">
                            <value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_min">最小值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_pos">位置</field></block></value></block></value>
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
</xml>`},{id:`EXT01-006`,title:`第二高分`,description:`給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數代表成績。`,outputDescription:`輸出兩個整數，依序為最高分與第二高分，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`6
70 95 80 95 60 88`,output:`95 88`,explanation:`最高分是 95，第二高的不同分數是 88。`}],testCases:[{input:`6
70 95 80 95 60 88`,expectedOutput:`95 88`,output:`95 88`,score:0},{input:`5
100 90 80 70 60`,expectedOutput:`100 90`,output:`100 90`,score:0},{input:`4
10 20 20 5`,expectedOutput:`20 10`,output:`20 10`,score:0},{input:`7
-1 -5 -3 -1 -2 -8 -4`,expectedOutput:`-1 -2`,output:`-1 -2`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
</xml>`},{id:`EXT01-007`,title:`相鄰最大差`,description:`給定 N 個整數，請找出相鄰兩個數字之間的最大差值。差值一律用較大的數減較小的數。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數。保證 N 大於或等於 2。`,outputDescription:`輸出一個整數，代表相鄰最大差值。`,requiresGreenFlag:!0,examples:[{input:`5
3 8 6 15 10`,output:`9`,explanation:`相鄰差值為 5、2、9、5，最大是 9。`}],testCases:[{input:`5
3 8 6 15 10`,expectedOutput:`9`,output:`9`,score:0},{input:`2
100 40`,expectedOutput:`60`,output:`60`,score:0},{input:`6
1 2 3 4 5 6`,expectedOutput:`1`,output:`1`,score:0},{input:`4
10 30 5 25`,expectedOutput:`25`,output:`25`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_cur">目前值</variable><variable id="v_prev">前一個</variable><variable id="v_maxdiff">最大差</variable><variable id="v_first">是否第一筆</variable></variables>
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
                <field name="VAR" id="v_maxdiff">最大差</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="v_first">是否第一筆</field>
                    <value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value>
                    <next>
                      <block type="controls_repeat_ext">
                        <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                        <statement name="DO">
                          <block type="interaction_ask_and_wait">
                            <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_cur">目前值</field>
                                <value name="VALUE"><block type="interaction_answer"></block></value>
                                <next>
                                  <block type="controls_if">
                                    <mutation else="1"></mutation>
                                    <value name="IF0"><block type="variables_get"><field name="VAR" id="v_first">是否第一筆</field></block></value>
                                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_first">是否第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement>
                                    <statement name="ELSE">
                                      <block type="controls_if">
                                        <value name="IF0">
                                          <block type="logic_compare">
                                            <field name="OP">GT</field>
                                            <value name="A"><block type="math_single"><field name="OP">ABS</field><value name="NUM"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_cur">目前值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_prev">前一個</field></block></value></block></value></block></value>
                                            <value name="B"><block type="variables_get"><field name="VAR" id="v_maxdiff">最大差</field></block></value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="variables_set">
                                            <field name="VAR" id="v_maxdiff">最大差</field>
                                            <value name="VALUE"><block type="math_single"><field name="OP">ABS</field><value name="NUM"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_cur">目前值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_prev">前一個</field></block></value></block></value></block></value>
                                          </block>
                                        </statement>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="variables_set"><field name="VAR" id="v_prev">前一個</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_cur">目前值</field></block></value></block>
                                    </next>
                                  </block>
                                </next>
                              </block>
                            </next>
                          </block>
                        </statement>
                        <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_maxdiff">最大差</field></block></value></block></next>
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
</xml>`},{id:`EXT01-008`,title:`區間最大值`,description:`給定 N 個整數，以及查詢區間 L 到 R，請找出第 L 個到第 R 個數字中的最大值。位置從 1 開始計算。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入兩個整數 L 與 R。保證 1 <= L <= R <= N。`,outputDescription:`輸出一個整數，代表區間最大值。`,requiresGreenFlag:!0,examples:[{input:`6
5 8 3 12 7 10
2 5`,output:`12`,explanation:`第 2 到第 5 個數字是 8、3、12、7，最大值為 12。`}],testCases:[{input:`6
5 8 3 12 7 10
2 5`,expectedOutput:`12`,output:`12`,score:0},{input:`5
1 2 3 4 5
1 3`,expectedOutput:`3`,output:`3`,score:0},{input:`4
9 8 7 6
3 4`,expectedOutput:`7`,output:`7`,score:0},{input:`7
-5 -1 -9 -3 -2 -8 -4
2 6`,expectedOutput:`-1`,output:`-1`,score:0}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
</xml>`}]};export{e as default};