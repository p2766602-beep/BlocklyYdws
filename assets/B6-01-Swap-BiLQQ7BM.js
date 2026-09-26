var e={code:`B6-01-Swap`,title:`K16 資料交換`,description:`基礎知識點課程 U6 排序｜K16 資料交換（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t1`,knowledgePoint:`K16`,unit:`U6 排序`,tasks:[{id:`seclect-001`,title:`SWAP交換函數`,description:`在學習排序之前，小安先練習一個重要的小任務。
桌上有兩張數字卡片，依序放在第 1 個位置與第 2 個位置。
小安希望讓「數字小的卡片在前面，數字大的卡片在後面」。
如果前面的數字比較大，就需要把兩張卡片的位置交換；
如果順序本來就正確，則不需要交換。
請你寫一個程式，判斷是否需要交換，並輸出交換後的結果。
（提示：交換時需要使用暫存變數）`,inputDescription:`一次輸入兩個整數 A、B（以空格隔開），代表目前卡片的順序。`,outputDescription:`輸出兩個整數，代表調整後由小到大的順序（以空格隔開）。`,requiresGreenFlag:!0,examples:[{input:`8 3`,output:`3 8`,explanation:`前面的數字 8 比後面的 3 大，
需要交換兩個數字的位置。`},{input:`4 9`,output:`4 9`,explanation:`前面的數字較小，順序正確，
不需要交換。`}],testCases:[{input:`8 3`,expectedOutput:`3 8`,output:`3 8`,score:10},{input:`4 9`,expectedOutput:`4 9`,output:`4 9`,score:10},{input:`6 6`,expectedOutput:`6 6`,output:`6 6`,score:10},{input:`0 5`,expectedOutput:`0 5`,output:`0 5`,score:10},{input:`9 0`,expectedOutput:`0 9`,output:`0 9`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_a">A</variable><variable id="v_b">B</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入A</field></block></value><next><block type="variables_set"><field name="VAR" id="v_a">A</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入B</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">B</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_a">甲</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_a">A</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">乙</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tmp">暫存</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><next><block type="variables_set"><field name="VAR" id="v_a">甲</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">乙</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_tmp">暫存</field></block></value></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_a">甲</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_b">乙</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,hints:[`要交換兩個變數，先用一個暫存變數保存其中一個值，否則會被蓋掉。`],extension:!1,sourceCourse:`M1-07-SortBasics`,sourceDifficulty:`L1`},{id:`SORT01-002`,title:`三數升冪排序`,description:`給定三個整數，請將它們由小到大輸出。這題可用多次相鄰比較與交換完成。`,inputDescription:`輸入三個整數 A、B、C。`,outputDescription:`輸出三個整數，由小到大排列，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`9 2 5`,output:`2 5 9`,explanation:`三個數由小到大為 2、5、9。`}],testCases:[{input:`9 2 5`,expectedOutput:`2 5 9`,output:`2 5 9`,score:10},{input:`1 2 3`,expectedOutput:`1 2 3`,output:`1 2 3`,score:10},{input:`3 3 1`,expectedOutput:`1 3 3`,output:`1 3 3`,score:10},{input:`-1 8 0`,expectedOutput:`-1 0 8`,output:`-1 0 8`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_a">A</variable><variable id="v_b">B</variable><variable id="v_c">C</variable><variable id="v_all">全部數字</variable><variable id="v_si">si</variable><variable id="v_sj">sj</variable><variable id="v_smi">smi</variable><variable id="v_stmp">stmp</variable><variable id="var_jres">jres</variable><variable id="var_ji">ji</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入A</field></block></value><next><block type="variables_set"><field name="VAR" id="v_a">A</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入B</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">B</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入C</field></block></value><next><block type="variables_set"><field name="VAR" id="v_c">C</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_a">A</field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_c">C</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_number"><field name="NUM">3</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_si">si</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_number"><field name="NUM">3</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><next><block type="controls_for"><field name="VAR" id="var_sj">sj</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="math_number"><field name="NUM">3</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_stmp">stmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_stmp">stmp</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_number"><field name="NUM">3</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_ji">ji</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_number"><field name="NUM">3</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_ji">ji</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_jres">jres</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_ji">ji</field></block></value></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_jres">jres</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_jres">jres</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_ji">ji</field></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_jres">jres</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`比較第 1、2 個，必要時交換；再比較第 2、3 個……想想總共需要比較幾次才能保證排好。`],extension:!1,sourceCourse:`M1-07-SortBasics`,sourceDifficulty:`L2`},{id:`seclect-002`,title:`卡片位置交換清單版`,description:`小安已經學會「兩個變數的交換」，現在他拿到一排固定 5 張的數字卡片，
卡片依序放在第 1 到第 5 個位置中。
老師指定清單中的兩個位置，小安需要把這兩個位置上的數字卡片進行交換，
其他位置的卡片保持不變。
請你寫一個程式，完成指定「清單位址」的資料交換。
（提示：交換時仍然需要使用暫存變數）`,inputDescription:`第1行：輸入一個整數N，N固定為5

第2行：輸入5 個整數，代表清單中第 1 到第 5 個位置的數字（以空格隔開）。

第3行：輸入一個整數M，M固定為2

第4行：輸入兩個整數 P、Q，代表要交換的清單位置（1 ≤ P,Q ≤ 5）。`,outputDescription:`輸出 5 個整數，代表交換完成後清單中的數字順序（以空格隔開）。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 5 1 6
2
2 4`,output:`8 1 5 3 6`,explanation:`第2個位置是 3，第4個位置是 1，
交換後，其餘位置不變。`},{input:`5
4 7 2 9 5
2
1 5`,output:`5 7 2 9 4`,explanation:`交換第1與第5個位置的卡片。`}],testCases:[{input:`5
8 3 5 1 6
2
2 4`,expectedOutput:`8 1 5 3 6`,output:`8 1 5 3 6`,score:10},{input:`5
4 7 2 9 5
2
1 5`,expectedOutput:`5 7 2 9 4`,output:`5 7 2 9 4`,score:10},{input:`5
6 6 6 6 6
2
3 4`,expectedOutput:`6 6 6 6 6`,output:`6 6 6 6 6`,score:10},{input:`5
1 2 3 4 5
2
2 3`,expectedOutput:`1 3 2 4 5`,output:`1 3 2 4 5`,score:10},{input:`5
9 8 7 6 5
2
1 4`,expectedOutput:`6 8 7 9 5`,output:`6 8 7 9 5`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_cards">卡片</variable><variable id="v_m">M</variable><variable id="v_p">P</variable><variable id="v_q">Q</variable><variable id="v_temp">暫存</variable><variable id="v_out">結果</variable><variable id="v_i">i</variable></variables>
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
                <field name="VAR" id="v_cards">卡片</field>
                <value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入5個數字</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_x">數字</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="lists_setIndex">
                                <mutation at="false"></mutation>
                                <field name="MODE">INSERT</field>
                                <field name="WHERE">LAST</field>
                                <value name="LIST"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value>
                                <value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入M</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_m">M</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="interaction_ask_and_wait">
                                <value name="TEXT"><block type="text"><field name="TEXT">請輸入要交換的位置P</field></block></value>
                                <next>
                                  <block type="variables_set">
                                    <field name="VAR" id="v_p">P</field>
                                    <value name="VALUE"><block type="interaction_answer"></block></value>
                                    <next>
                                      <block type="interaction_ask_and_wait">
                                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入要交換的位置Q</field></block></value>
                                        <next>
                                          <block type="variables_set">
                                            <field name="VAR" id="v_q">Q</field>
                                            <value name="VALUE"><block type="interaction_answer"></block></value>
                                            <next>
                                              <block type="variables_set">
                                                <field name="VAR" id="v_temp">暫存</field>
                                                <value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value></block></value>
                                                <next>
                                                  <block type="lists_setIndex">
                                                    <mutation at="true"></mutation>
                                                    <field name="MODE">SET</field>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="LIST"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value>
                                                    <value name="AT"><block type="variables_get"><field name="VAR" id="v_p">P</field></block></value>
                                                    <value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_q">Q</field></block></value></block></value>
                                                    <next>
                                                      <block type="lists_setIndex">
                                                        <mutation at="true"></mutation>
                                                        <field name="MODE">SET</field>
                                                        <field name="WHERE">FROM_START</field>
                                                        <value name="LIST"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value>
                                                        <value name="AT"><block type="variables_get"><field name="VAR" id="v_q">Q</field></block></value>
                                                        <value name="TO"><block type="variables_get"><field name="VAR" id="v_temp">暫存</field></block></value>
                                                        <next>
                                                          <block type="variables_set">
                                                            <field name="VAR" id="v_out">結果</field>
                                                            <value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                                                            <next>
                                                              <block type="controls_for">
                                                                <field name="VAR" id="v_i">i</field>
                                                                <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
                                                                <value name="TO"><block type="lists_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value></block></value>
                                                                <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                                                                <statement name="DO">
                                                                  <block type="variables_set">
                                                                    <field name="VAR" id="v_out">結果</field>
                                                                    <value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_cards">卡片</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value>
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
</xml>`,hints:[`交換的方法和兩個變數交換相同，只是對象換成清單的第 A 項和第 B 項。`],extension:!1,sourceCourse:`M1-08-SortApplied`,sourceDifficulty:`L2`}]};export{e as default};