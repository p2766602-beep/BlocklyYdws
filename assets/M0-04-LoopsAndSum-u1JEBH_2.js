var e={code:`M0-04-LoopsAndSum`,title:`迴圈與累計`,type:`programming`,mode:`learning`,tier:`t0`,tasks:[{id:`JSL01-D01`,title:`從1數到N`,description:`輸入一個正整數 N，請依序輸出 1 到 N 的所有整數，每個數字各佔一行。本題用來示範最基本的計數迴圈。
輸入格式：
第一行：一個正整數 N。
輸出格式：
輸出 1 到 N，每個數字各佔一行。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 1 到 N，每個數字各佔一行。`,requiresGreenFlag:!0,examples:[{input:`3`,output:`1
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
</xml>`},{id:`A-07-0`,title:`九九乘法`,description:`請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。
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
</xml>`},{id:`JSL01-D02`,title:`1到N加總示範`,description:`輸入一個正整數 N，請計算 1 + 2 + 3 + ... + N 的總和。本題用來示範累加變數的初始化、更新與輸出。
輸入格式：
第一行：一個正整數 N。
輸出格式：
輸出 1 到 N 的總和。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 1 到 N 的總和。`,requiresGreenFlag:!0,examples:[{input:`5`,output:`15`,explanation:`1+2+3+4+5=15。`},{input:`10`,output:`55`,explanation:`1 到 10 的總和為 55。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20},{input:`3`,expectedOutput:`6`,output:`6`,score:20},{input:`5`,expectedOutput:`15`,output:`15`,score:20},{input:`10`,expectedOutput:`55`,output:`55`,score:20},{input:`100`,expectedOutput:`5050`,output:`5050`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_sum">總和</variable><variable id="var_i">i</variable></variables>
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
                <field name="VAR" id="var_sum">總和</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value></block></statement>
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
</xml>`},{id:`JSL01-P01`,title:`N個數字累加`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請計算這 N 個整數的總和。本題用來練習重複讀取資料並累加。
輸入格式：
第一行：一個整數 N。
第二行：N 個整數，以空白分隔。
輸出格式：
輸出 N 個整數的總和。`,inputDescription:`第一行：一個整數 N。

第二行：N 個整數，以空白分隔。`,outputDescription:`輸出 N 個整數的總和。`,requiresGreenFlag:!0,examples:[{input:`3
10 20 30`,output:`60`,explanation:`10+20+30=60。`},{input:`5
1 1 1 1 1`,output:`5`,explanation:`五個 1 的總和為 5。`}],testCases:[{input:`3
10 20 30`,expectedOutput:`60`,output:`60`,score:20},{input:`4
1 2 3 4`,expectedOutput:`10`,output:`10`,score:20},{input:`5
5 5 5 5 5`,expectedOutput:`25`,output:`25`,score:20},{input:`2
100 200`,expectedOutput:`300`,output:`300`,score:20},{input:`6
1 3 5 7 9 11`,expectedOutput:`36`,output:`36`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
                              <block type="variables_set">
                                <field name="VAR" id="var_sum">總和</field>
                                <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_num">目前數字</field></block></value></block></value>
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
</xml>`},{id:`JSL01-P02`,title:`只加偶數`,description:`第一行輸入一個整數 N，第二行輸入 N 個整數。請只把其中的偶數加總後輸出。本題用來練習迴圈內加入條件判斷。
輸入格式：
第一行：一個整數 N。
第二行：N 個整數，以空白分隔。
輸出格式：
輸出所有偶數的總和。若沒有偶數，輸出 0。`,inputDescription:`第一行：一個整數 N。

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
</xml>`},{id:`JSL01-P03`,title:`簡化階乘`,description:`輸入一個正整數 N，請計算 1 × 2 × 3 × ... × N 的結果。本題用來練習累乘變數與迴圈結構。
輸入格式：
第一行：一個正整數 N。
輸出格式：
輸出 N 的階乘結果。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 N 的階乘結果。`,requiresGreenFlag:!0,examples:[{input:`4`,output:`24`,explanation:`1×2×3×4=24。`},{input:`5`,output:`120`,explanation:`1×2×3×4×5=120。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20},{input:`3`,expectedOutput:`6`,output:`6`,score:20},{input:`4`,expectedOutput:`24`,output:`24`,score:20},{input:`5`,expectedOutput:`120`,output:`120`,score:20},{input:`7`,expectedOutput:`5040`,output:`5040`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_prod">乘積</variable><variable id="var_i">i</variable></variables>
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
                <field name="VAR" id="var_prod">乘積</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_prod">乘積</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_prod">乘積</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value></block></statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_prod">乘積</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`},{id:`A-06-0`,title:`連續加總`,description:`有時候我們需要計算從 1 到某個數字的總和。
請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。

例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5`,output:`15`,explanation:`輸入 5 → 1+2+3+4+5=15
程式輸出15`},{input:`10`,output:`55`,explanation:`輸入 10 → 1+2+3+4...+10=55
程式輸出55`}],testCases:[{input:`5`,expectedOutput:`15`,output:`15`,score:10},{input:`20`,expectedOutput:`210`,output:`210`,score:10},{input:`88`,expectedOutput:`3916`,output:`3916`,score:10},{input:`100`,expectedOutput:`5050`,output:`5050`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_sum">總和</variable><variable id="var_i">i</variable></variables>
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
                <field name="VAR" id="var_sum">總和</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value></block></statement>
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
</xml>`},{id:`A-06-1`,title:`連續乘積`,description:`輸入一個整數 N，計算從 1*2*3....*N 的結果。

例如 N=5 時，1*2*3*4*5=120。
這樣的練習可以訓練你使用迴圈計算。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5`,output:`120`,explanation:`輸入 5 → 1*2*3*4*5=120
程式輸出120`},{input:`6`,output:`720`,explanation:`6 → 1*2*3*4*5*6=720
程式輸出720`}],testCases:[{input:`5`,expectedOutput:`120`,output:`120`,score:10},{input:`6`,expectedOutput:`720`,output:`720`,score:10},{input:`1`,expectedOutput:`1`,output:`1`,score:10},{input:`8`,expectedOutput:`40320`,output:`40320`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_prod">乘積</variable><variable id="var_i">i</variable></variables>
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
                <field name="VAR" id="var_prod">乘積</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value>
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="var_i">i</field>
                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                    <statement name="DO"><block type="variables_set"><field name="VAR" id="var_prod">乘積</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_prod">乘積</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value></block></statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_prod">乘積</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`},{id:`A-07-1`,title:`跳繩比賽法`,description:`體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。

請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料

第二行輸入一串數列共N筆整數，序列的數字以空隔間格。

程式輸出小組全部人員總共跳繩幾次？`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5
20 19 36 25 30`,output:`130`,explanation:`第一行輸入5，表示小組有5人。
第二行輸入20 19 36 25 30，表示小組每人分別跳20、19、36、25、30下。
程式輸出小組累計共跳130下`},{input:`3
6 12 18`,output:`36`,explanation:`第一行輸入3，表示小組有3人。
第二行輸入6 12 18，表示小組每人分別跳6、12、18下。
程式輸出小組累計共跳36下`}],testCases:[{input:`4
18 21 24 27`,expectedOutput:`90`,output:`90`,score:10},{input:`6
6 12 18 24 30 36`,expectedOutput:`126`,output:`126`,score:10},{input:`5
5 10 15 20 25`,expectedOutput:`75`,output:`75`,score:10},{input:`1
9`,expectedOutput:`9`,output:`9`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
                              <block type="variables_set">
                                <field name="VAR" id="var_sum">總和</field>
                                <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_num">目前數字</field></block></value></block></value>
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
</xml>`},{id:`A-08-0`,title:`找最大值`,description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值。
這樣的練習可以幫助你處理一串資料，並找出其中的最大值。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
9 6 8`,output:`9`,explanation:`第一行輸入3，表示有3個數字要輸入
第二行輸入9 6 8三個數字序列
程式運算輸出最大值9`},{input:`6
99 12 129 16 8`,output:`129`,explanation:`第一行輸入6，表示有6個數字要輸入
第二行輸入99 12 129 16 8 3六個數字序列
程式運算輸出最大值129`}],testCases:[{input:`3
9 6 8`,expectedOutput:`9`,output:`9`,score:10},{input:`6
99 12 129 16 8 3`,expectedOutput:`129`,output:`129`,score:10},{input:`5
89 15 47 0 56`,expectedOutput:`89`,output:`89`,score:10},{input:`1
25`,expectedOutput:`25`,output:`25`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable>
    <variable id="var_max">最大值</variable>
    <variable id="var_current">目前數值</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入資料筆數 N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_max">最大值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="var_current">目前數值</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="controls_if">
                                <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_current">目前數值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value>
                                <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_current">目前數值</field></block></value></block></statement>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></next>
                  </block>
                </next>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`},{id:`A-08-1`,title:`找最大最小值`,description:`老師進行成績統計，老師輸入每位同學的成績，請你寫一個程式找出最高分及最低分。

輸入第一行是整數 N，代表有 N 筆成績

第二行輸入 N 個數字，數字間以空白間隔

程式輸出最大值及最小值。
這樣的練習可以幫助你處理一串資料，並同時找出其中的最大值、最小值。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
9 6 8`,output:`9
6`,explanation:`第一行輸入3，表示有3個數字要輸入
第二行輸入9 6 8三個數字序列
程式運算輸出最大值9，最小值6`},{input:`6
99 12 129 16 8 3`,output:`129
3`,explanation:`第一行輸入6，表示有6個數字要輸入
第二行輸入99 12 129 16 8 3六個數字序列
程式運算輸出最大值129，最小值3`}],testCases:[{input:`3
9 6 8`,expectedOutput:`9 6`,output:`9 6`,score:10},{input:`6
99 12 129 16 8 3`,expectedOutput:`129 3`,output:`129 3`,score:10},{input:`5
89 15 47 0 56`,expectedOutput:`89 0`,output:`89 0`,score:10},{input:`1
25`,expectedOutput:`25 25`,output:`25 25`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable>
    <variable id="var_num">目前數值</variable>
    <variable id="var_max">最大值</variable>
    <variable id="var_min">最小值</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入資料筆數 N</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_max">最大值</field>
                <value name="VALUE"><block type="math_number"><field name="NUM">-999999</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_min">最小值</field>
                    <value name="VALUE"><block type="math_number"><field name="NUM">999999</field></block></value>
                    <next>
                      <block type="controls_repeat_ext">
                        <value name="TIMES"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                        <statement name="DO">
                          <block type="interaction_ask_and_wait">
                            <value name="TEXT"><block type="text"><field name="TEXT"></field></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="var_num">目前數值</field>
                                <value name="VALUE"><block type="interaction_answer"></block></value>
                                <next>
                                  <block type="controls_if">
                                    <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_num">目前數值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value>
                                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_num">目前數值</field></block></value></block></statement>
                                    <next>
                                      <block type="controls_if">
                                        <value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_num">目前數值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></value>
                                        <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_num">目前數值</field></block></value></block></statement>
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
                                <value name="ADD0"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value>
                                <value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value>
                                <value name="ADD2"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value>
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
</xml>`}]};export{e as default};