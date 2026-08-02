var e={code:`M1-02-ListAnalysis`,title:`清單資料分析挑戰`,type:`programming`,mode:`learning`,tier:`t1`,tasks:[{id:`count-017`,title:`倒轉時光`,description:`勇者獲得了一個「時光倒流」的魔法卷軸。這個卷軸上有一串數字密碼，但是必須從最後一個數字讀回到第一個數字，魔法才能生效。 請讀取一個清單，並將清單內的數字「由後往前」印出來。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表密碼長度。
第二行輸入 N 個整數，代表N個數字的密碼組合。
程式反序輸 N 筆密碼數字資料，中間以空白間隔
(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表密碼長度。

第二行輸入 N 個整數，代表N個數字的密碼組合。

程式反序輸 N 筆密碼數字資料，中間以空白間隔

(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`4
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
</xml>`},{id:`count-018`,title:`冒險日誌`,description:`勇者寫了 N 天的冒險日誌，清單中依序記錄了每天打倒的怪物數量。
例如清單的第一個數字是第 1 天打倒的數量，第二個數字是第 2 天的...
請你格式化輸出每天的戰績，格式為：Day-[第幾天]-[數量]。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表天數。
第二行輸入 N 個整數，代表每天怪物的數量。
程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表天數。

第二行輸入 N 個整數，代表每天怪物的數量。

程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`2
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
</xml>`},{id:`count-016`,title:`合格的裝備`,description:`勇者的負重能力有限，他只能攜帶重量「小於 10」的輕型裝備。 現在清單中有一堆裝備的重量，請你利用迴圈檢查每一個裝備，只把重量小於 10 的裝備重量印出來。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表裝備數量。
第二行輸入 N 個整數，代表每個裝備重量。
程式依序輸出小於 10 的數字，中間以空白隔開。
如果都沒有小於 10 的數字，則什麼都不輸出。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表裝備數量。

第二行輸入 N 個整數，代表每個裝備重量。

程式依序輸出小於 10 的數字，中間以空白隔開。

如果都沒有小於 10 的數字，則什麼都不輸出。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5
15 5 20 8 3`,output:`5 8 3`,explanation:`第一行輸入數字5，代表5筆裝備資料
第二行有5筆整數裝備資料，15 5 20 8 3
程式依序輸出小於10裝備重量：5 8 3`},{input:`3
12 15 20`,output:``,explanation:`第一行輸入數字3，代表3筆裝備資料
第二行有3筆整數裝備資料，12 15 20
沒有小於10裝備輸出為空：`}],testCases:[{input:`3
1 2 3`,expectedOutput:`1 2 3`,output:`1 2 3`,score:10},{input:`6
7 15 7 24 9 7`,expectedOutput:`7 7 9 7`,output:`7 7 9 7`,score:10},{input:`4
33 5 44 11`,expectedOutput:`5`,output:`5`,score:10},{input:`5
3 8 11 69 77`,expectedOutput:`3 8`,output:`3 8`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_out">結果</variable><variable id="v_first">是否第一筆</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_first">是否第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="v_first">是否第一筆</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_first">是否第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value></block></statement></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`TYTN-05`,title:`班服投票`,description:`可愛國小601班要製作紀念班服，本次班服設計共有3個款式，分別編號為1、2、3。
每位同學可在選票上寫下自己選擇的班服款式編號，最後以得票數最高者為班服樣式。
請先計算每款班服的得票數（依1→3順序），並輸出最高票的班服編號。
若有兩款或以上的票數相同且為最高票，則輸出：請重新投票。
輸入格式：
第一行：整數 N，代表投票數。
第二行：N 個整數（介於 1~3），代表每張選票的班服設計編號。
輸出格式：
若票數最高者唯一，輸出該款式編號；若最高票出現同票數，輸出「請重新投票」。`,inputDescription:`第一行：整數 N，代表投票數。

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
</xml>`},{id:`TYTN-06`,title:`棒球場座位`,description:`小明想去看棒球賽為台灣隊加油，請寫一個程式，輸入觀眾的座位號碼後，能輸出該座位所屬的大區、所在排數與該排中的第幾個座位，讓小明能迅速找到座位。
棒球場共有 9000 個座位，分為三大區：
第1區（普通區）：2250 席，每排 25 人，共 90 排。
第2區（搖滾區）：4500 席，每排 50 人，共 90 排。
第3區（普通區）：2250 席，每排 25 人，共 90 排。
座位編號從第1區開始，由左至右、由前至後依序編號，接著接續第2、3區。
輸入格式：
輸入一個整數 seat（座位號碼）。
輸出格式：
輸出 3 個整數，分別為：大區區號、排數、由左數的第幾個座位。`,inputDescription:`輸入一個整數 seat（座位號碼）。`,outputDescription:`輸出 3 個整數，分別為：大區區號、排數、由左數的第幾個座位。`,requiresGreenFlag:!0,examples:[{input:`1881`,output:`1 76 6`,explanation:`座位 1881 位於第1區。
第1區每排25人，因此計算後位於第76排、第6個座位。`},{input:`3045`,output:`2 16 45`,explanation:`座位 3045 位於第2區。
第2區每排50人，因此計算後位於第16排、第45個座位。`}],testCases:[{input:`1881`,expectedOutput:`1 76 6`,output:`1 76 6`,score:10},{input:`3045`,expectedOutput:`2 16 45`,output:`2 16 45`,score:10},{input:`25`,expectedOutput:`1 1 25`,output:`1 1 25`,score:10},{input:`4501`,expectedOutput:`2 46 1`,output:`2 46 1`,score:10},{input:`8999`,expectedOutput:`3 90 24`,output:`3 90 24`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_seat">seat</variable><variable id="v_zone">區號</variable><variable id="v_local">區內編號</variable><variable id="v_rowsize">每排人數</variable><variable id="v_row">排數</variable><variable id="v_col">座位號</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入座位號碼seat</field></block></value><next><block type="variables_set"><field name="VAR" id="v_seat">seat</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_seat">seat</field></block></value><value name="B"><block type="math_number"><field name="NUM">2250</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_zone">區號</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="variables_set"><field name="VAR" id="v_local">區內編號</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_seat">seat</field></block></value><next><block type="variables_set"><field name="VAR" id="v_rowsize">每排人數</field><value name="VALUE"><block type="math_number"><field name="NUM">25</field></block></value><next><block type="variables_set"><field name="VAR" id="v_row">排數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDUP</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_local">區內編號</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_rowsize">每排人數</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_col">座位號</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_local">區內編號</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_row">排數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_rowsize">每排人數</field></block></value></block></value></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_zone">區號</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_row">排數</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="v_col">座位號</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_seat">seat</field></block></value><value name="B"><block type="math_number"><field name="NUM">6750</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_zone">區號</field><value name="VALUE"><block type="math_number"><field name="NUM">2</field></block></value><next><block type="variables_set"><field name="VAR" id="v_local">區內編號</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_seat">seat</field></block></value><value name="B"><block type="math_number"><field name="NUM">2250</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_rowsize">每排人數</field><value name="VALUE"><block type="math_number"><field name="NUM">50</field></block></value><next><block type="variables_set"><field name="VAR" id="v_row">排數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDUP</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_local">區內編號</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_rowsize">每排人數</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_col">座位號</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_local">區內編號</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_row">排數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_rowsize">每排人數</field></block></value></block></value></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_zone">區號</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_row">排數</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="v_col">座位號</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="v_zone">區號</field><value name="VALUE"><block type="math_number"><field name="NUM">3</field></block></value><next><block type="variables_set"><field name="VAR" id="v_local">區內編號</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_seat">seat</field></block></value><value name="B"><block type="math_number"><field name="NUM">6750</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_rowsize">每排人數</field><value name="VALUE"><block type="math_number"><field name="NUM">25</field></block></value><next><block type="variables_set"><field name="VAR" id="v_row">排數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDUP</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_local">區內編號</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_rowsize">每排人數</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_col">座位號</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_local">區內編號</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_row">排數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_rowsize">每排人數</field></block></value></block></value></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_zone">區號</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_row">排數</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="v_col">座位號</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement></block></next></block></next></block></next></block>
</xml>`},{id:`W3-05`,title:`風獅爺排隊`,description:`金門各村落的風獅爺要準備祭典大合照，村長要求將 4 尊風獅爺依照身高「由矮到高」排好。
工讀生小金負責進行搬動，規則如下：
【比較規則】
每次只比較「相鄰」的兩尊風獅爺（第 1 與第 2、 第 2 與第 3、 第 3 與第 4）。
【交換規則】
如果左邊的風獅爺身高 > 右邊的風獅爺身高，兩尊就必須交換位置。
【紀錄規則】
每成功交換一次位置，小金就記錄 1 次（統計總交換次數）。
【任務】
(1) 將輸入的 4 個身高數值由小到大排列。
(2) 在依照上述「相鄰比較、需要就交換」的排序過程中，計算總共交換了幾次。
【排序流程說明】
請使用以下固定流程（類似氣泡排序 Bubble Sort）：
重複進行 3 回合：
第 1 回合依序比較 (1,2)、(2,3)、(3,4)
第 2 回合依序比較 (1,2)、(2,3)、(3,4)
第 3 回合依序比較 (1,2)、(2,3)、(3,4)
每次比較時只要符合交換規則就交換，並將交換次數 +1。
【輸入格式】
第一行輸入一個整數 4（代表有 4 尊風獅爺）。
第二行輸入 4 個整數，代表 4 尊風獅爺的身高，數字之間以空白隔開。
【輸出格式】
輸出兩個資訊（同一行輸出）：
先輸出排序後由小到大的 4 個身高（以空白隔開），再以一個空白接著輸出總交換次數。`,inputDescription:`第一行輸入一個整數 4（代表有 4 尊風獅爺）。

第二行輸入 4 個整數，代表 4 尊風獅爺的身高，數字之間以空白隔開。`,outputDescription:`輸出兩個資訊（同一行輸出）：

先輸出排序後由小到大的 4 個身高（以空白隔開），再以一個空白接著輸出總交換次數。`,requiresGreenFlag:!0,examples:[{input:`4
150 120 110 100`,output:`100 110 120 150 6`,explanation:`這是「最麻煩」的情況（全倒過來排）。
150 要一路換到最後，接著 120 再換，總共會交換 6 次。`},{input:`4
120 110 140 130`,output:`110 120 130 140 2`,explanation:`120 與 110 換一次；140 與 130 換一次，總共 2 次。`}],testCases:[{input:`4
100 110 120 130`,expectedOutput:`100 110 120 130 0`,output:`100 110 120 130 0`,score:10},{input:`4
150 120 110 100`,expectedOutput:`100 110 120 150 6`,output:`100 110 120 150 6`,score:15},{input:`4
120 110 140 130`,expectedOutput:`110 120 130 140 2`,output:`110 120 130 140 2`,score:20},{input:`4
130 120 120 110`,expectedOutput:`110 120 120 130 5`,output:`110 120 120 130 5`,score:25},{input:`4
115 130 105 120`,expectedOutput:`105 115 120 130 3`,output:`105 115 120 130 3`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_h">身高清單</variable><variable id="v_swaps">交換次數</variable><variable id="v_tmp">tmp</variable><variable id="v_i">i</variable><variable id="v_jres">jres</variable><variable id="v_ji">ji</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入4</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_h">身高清單</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="variables_set"><field name="VAR" id="v_swaps">交換次數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tmp">tmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_tmp">tmp</field></block></value><next><block type="variables_set"><field name="VAR" id="v_swaps">交換次數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_swaps">交換次數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tmp">tmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_tmp">tmp</field></block></value><next><block type="variables_set"><field name="VAR" id="v_swaps">交換次數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_swaps">交換次數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_tmp">tmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_tmp">tmp</field></block></value><next><block type="variables_set"><field name="VAR" id="v_swaps">交換次數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_swaps">交換次數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></next></block></next></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_ji">ji</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_ji">ji</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_jres">jres</field><value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_ji">ji</field></block></value></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_jres">jres</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_jres">jres</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_h">身高清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_ji">ji</field></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_jres">jres</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_swaps">交換次數</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`W5-01`,title:`安靜值巡查器`,description:`學校自習室裝了「安靜值巡查器」，每小時會量測一次安靜值（數值越大代表越安靜）。系統設定一個門檻值 K：
- 若某小時的安靜值 輸入格式
第一行：一個整數 N，代表紀錄的總時數。
第二行：一個整數 K，代表安靜值門檻。
第三行：N 個整數，代表每小時的安靜值（以半形空格分隔）。
輸出格式
第一行：一個整數，代表總提醒次數。`,inputDescription:`第一行：一個整數 N，代表紀錄的總時數。

第二行：一個整數 K，代表安靜值門檻。

第三行：N 個整數，代表每小時的安靜值（以半形空格分隔）。`,outputDescription:`第一行：一個整數，代表總提醒次數。`,requiresGreenFlag:!0,examples:[{input:`5
100
120 80 70 100 60`,output:`4`,explanation:`第2小時(80<100)：+1
第3小時(70<100)：連續第2小時 +2
第4小時(100≥100)：中斷
第5小時(60<100)：+1
總計 4`},{input:`4
10
0 0 0 0`,output:`7`,explanation:`連續4小時都未達標：+1 +2 +2 +2 = 7`}],testCases:[{input:`5
100
120 130 140 150 160`,expectedOutput:`0`,output:`0`,score:10},{input:`4
10
0 0 0 0`,expectedOutput:`7`,output:`7`,score:10},{input:`6
50
40 60 40 40 60 40`,expectedOutput:`5`,output:`5`,score:10},{input:`7
100
90 90 90 100 90 90 110`,expectedOutput:`8`,output:`8`,score:10},{input:`1
1
0`,expectedOutput:`1`,output:`1`,score:10},{input:`8
1000
999 1000 999 999 999 1000 999 1000`,expectedOutput:`7`,output:`7`,score:10},{input:`10
5
5 4 3 2 1 0 5 4 5 4`,expectedOutput:`11`,output:`11`,score:10},{input:`9
100
99 99 100 99 100 99 99 99 100`,expectedOutput:`9`,output:`9`,score:10},{input:`12
7
7 6 7 6 6 6 7 6 7 6 6 7`,expectedOutput:`10`,output:`10`,score:10},{input:`15
50
10 60 10 60 10 60 10 60 10 60 10 60 10 60 10`,expectedOutput:`8`,output:`8`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_k">K</variable><variable id="v_x">數字</variable><variable id="v_total">總次數</variable><variable id="v_instreak">是否連續</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入K</field></block></value><next><block type="variables_set"><field name="VAR" id="v_k">K</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_total">總次數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="v_instreak">是否連續</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_k">K</field></block></value></block></value><statement name="DO0"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="variables_get"><field name="VAR" id="v_instreak">是否連續</field></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_total">總次數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_total">總次數</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="v_total">總次數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_total">總次數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_instreak">是否連續</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value></block></next></block></statement></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="v_instreak">是否連續</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_total">總次數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`WP-03`,title:`電影院找座位`,description:`小華一家人要去看電影，他們希望能找到連續的K個空座位。整排座位中，某些座位已經有人坐了，因此剩下的空位會形成幾段「連續空位」。
現在給你每一段連續空位的座位數，請你計算小華一家人共有幾種方式 可以在這一排中坐下。

第一行：整數 N，代表有N個人。

第二行：輸入 M，代表有M個空段落。

第三行：輸入序列X，依序代表每個空段落的座位數。

輸出格式：輸出一個整數，有幾種方式。`,inputDescription:``,outputDescription:`輸出一個整數，有幾種方式。`,requiresGreenFlag:!0,examples:[{input:`小華一家人要去看電影，他們希望能找到連續的K個空座位。整排座位中，某些座位已經有人坐了，因此剩下的空位會形成幾段「連續空位」。
現在給你每一段連續空位的座位數，請你計算小華一家人共有幾種方式 可以在這一排中坐下。
第一行：整數 N，代表有N個人。
第二行：輸入 M，代表有M個空段落。
第三行：輸入序列X，依序代表每個空段落的座位數。
輸出格式：輸出一個整數，有幾種方式。
使用者輸入`,output:`輸出`,explanation:`範例說明`},{input:`3
2
6 2`,output:`4`,explanation:`//第三欄範例說明
有3個人
有2段空位：6 與 2。
長度 6 的那段，能讓 3 人連坐的起點有 4 種。
長度 2 的那段不夠 3 人連坐，0 種。
合計 4 種。`},{input:`2
3
3 5 4`,output:`9`,explanation:`有2個人
有3段空位：3、5、4。
長度 3 的那段：可放 2 人的起點有 2 種。
長度 5 的那段：有 4 種。
長度 4 的那段：有 3 種。
合計 2 + 4 + 3 = 9 種。`}],testCases:[{input:`3
2
6 2`,expectedOutput:`4`,output:`4`,score:10},{input:`2
3
3 5 4`,expectedOutput:`9`,output:`9`,score:10},{input:`4
1
4`,expectedOutput:`1`,output:`1`,score:10},{input:`5
3
1 3 4`,expectedOutput:`0`,output:`0`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_m">M</variable><variable id="v_x">數字</variable><variable id="v_ways">方式數</variable><variable id="v_total">總方式數</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入M</field></block></value><next><block type="variables_set"><field name="VAR" id="v_m">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_total">總方式數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_m">M</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_ways">方式數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_ways">方式數</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_total">總方式數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_total">總方式數</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_ways">方式數</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_total">總方式數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`cycjunior-004`,title:`校車廣播系統熱血指數統計`,description:`快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，原本歡樂的氣氛隨著車窗外的景色靜止，車內的空氣也開始變得沉悶，同學們一個個開始打哈欠，甚至有人睡著了。
身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家High起來（當然，如果是抒情歌，指數可能就很低，甚至如果是老師愛聽的老歌，指數可能是負的，會讓大家更想睡覺）。
校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這 K 首歌依序播完才能切換模式。小明的任務非常重要，他需要從這份落落長的歌單中，挑選出連續的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂，把車內的氣氛炒到最高點！
請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。
輸入格式：
第一行：整數 K代表廣播系統一次必須連續播放的歌曲數量。
第二行：整數 N代表歌單中總共有 N首歌。
第三行：N 個整數依序代表歌單中第 1 首到第 N首歌的「熱血指數」。
輸出格式：
一個整數（最大總和）。`,inputDescription:`第一行：整數 K代表廣播系統一次必須連續播放的歌曲數量。

第二行：整數 N代表歌單中總共有 N首歌。

第三行：N 個整數依序代表歌單中第 1 首到第 N首歌的「熱血指數」。`,outputDescription:`一個整數（最大總和）。`,requiresGreenFlag:!0,examples:[{input:`3
5
10 20 30 10 50`,output:`90`,explanation:`(10+20+30)=60
(20+30+10)=60
(30+10+50)=90 (最大)`},{input:`2
4
5 100 100 5`,output:`200`,explanation:`連續2首的組合：
(5+100)=105, (100+100)=200, (100+5)=105。
最大值為 200。`}],testCases:[{input:`2
4
1 2 3 4`,expectedOutput:`7`,output:`7`,score:10},{input:`3
5
5 5 5 5 5`,expectedOutput:`15`,output:`15`,score:15},{input:`2
5
100 10 10 10 100`,expectedOutput:`110`,output:`110`,score:20},{input:`4
8
1 2 100 100 100 2 1 1`,expectedOutput:`302`,output:`302`,score:25},{input:`3
6
50 10 50 10 50 10`,expectedOutput:`110`,output:`110`,score:30}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_k">K</variable><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_vals">數值清單</variable><variable id="v_start">start</variable><variable id="v_j">j</variable><variable id="v_wsum">窗口和</variable><variable id="v_best">最大值</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入K</field></block></value><next><block type="variables_set"><field name="VAR" id="v_k">K</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_vals">數值清單</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_vals">數值清單</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_best">最大值</field><value name="VALUE"><block type="math_number"><field name="NUM">-1000000</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_k">K</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_start">start</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_k">K</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_wsum">窗口和</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_start">start</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_k">K</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_start">start</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_j">j</field><value name="FROM"><block type="variables_get"><field name="VAR" id="v_start">start</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_start">start</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_k">K</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_wsum">窗口和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_wsum">窗口和</field></block></value><value name="B"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_vals">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_j">j</field></block></value></block></value></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="v_wsum">窗口和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_best">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_best">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_wsum">窗口和</field></block></value></block></statement></block></next></block></next></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_best">最大值</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`}]};export{e as default};