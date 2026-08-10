var e={code:`M1-10-MathGCD`,title:`數學規則進階：GCD與應用`,type:`programming`,mode:`learning`,tier:`t1`,tasks:[{id:`A-09-0`,title:`判斷質數`,description:`質數是大於 1 且只能被 1 和自己整除的數字。
請寫一個程式，輸入一個整數 N，判斷它是否為質數。

若是質數輸出 Yes，否則輸出 No。

這題訓練你使用條件與迴圈判斷。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`1`,output:`No`,explanation:`第一行輸入1
電腦運算判斷1不是質數
程式運算輸出No`},{input:`2`,output:`Yes`,explanation:`第一行輸入2
電腦運算判斷2是質數
程式運算輸出Yes`},{input:`7`,output:`Yes`,explanation:`第一行輸入7
電腦運算判斷7是質數
程式運算輸出Yes`},{input:`6`,output:`No`,explanation:`第一行輸入6
電腦運算判斷6可被2整除，不是質數
程式運算輸出No`}],testCases:[{input:`1`,expectedOutput:`No`,output:`No`,score:10},{input:`2`,expectedOutput:`Yes`,output:`Yes`,score:10},{input:`1007`,expectedOutput:`No`,output:`No`,score:10},{input:`997`,expectedOutput:`Yes`,output:`Yes`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable>
    <variable id="var_i">i</variable>
    <variable id="var_is_prime">是否為質數</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入一個整數</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n">N</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_is_prime">是否為質數</field>
                <value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value>
                <next>
                  <block type="controls_if">
                    <value name="IF0">
                      <block type="logic_compare">
                        <field name="OP">LTE</field>
                        <value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                        <value name="B"><block type="math_number"><field name="NUM">1</field></block></value>
                      </block>
                    </value>
                    <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_is_prime">是否為質數</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement>
                    <next>
                      <block type="controls_if">
                        <value name="IF0">
                          <block type="logic_compare">
                            <field name="OP">GT</field>
                            <value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
                            <value name="B"><block type="math_number"><field name="NUM">2</field></block></value>
                          </block>
                        </value>
                        <statement name="DO0">
                          <block type="controls_for">
                            <field name="VAR" id="var_i">i</field>
                            <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
                            <value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                            <statement name="DO">
                              <block type="controls_if">
                                <value name="IF0">
                                  <block type="logic_compare">
                                    <field name="OP">EQ</field>
                                    <value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value>
                                    <value name="B"><block type="math_number"><field name="NUM">0</field></block></value>
                                  </block>
                                </value>
                                <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_is_prime">是否為質數</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement>
                              </block>
                            </statement>
                          </block>
                        </statement>
                        <next>
                          <block type="controls_if">
                            <mutation else="1"></mutation>
                            <value name="IF0"><block type="variables_get"><field name="VAR" id="var_is_prime">是否為質數</field></block></value>
                            <statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">Yes</field></block></value></block></statement>
                            <statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">No</field></block></value></block></statement>
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
</xml>`},{id:`A-09-1`,title:`找所有因數`,description:`因數是指一個整數能被另一整數「整除」時，這個「除數」就是「被除數」的因數。

0不是任何整數的因數。1是所有整數的因數。

請寫一個程式，輸入一個整數 N，請找出N所有的因數。

所有因數以空白符號間格

這題訓練你使用條件與迴圈判斷。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`12`,output:`1 2 3 4 6 12`,explanation:`第一行輸入12
程式輸出12所有因數1 2 3 4 6 12`},{input:`39`,output:`1 3 13 39`,explanation:`第一行輸入39
程式輸出39所有因數1 3 13 39`}],testCases:[{input:`56`,expectedOutput:`1 2 4 7 8 14 28 56`,output:`1 2 4 7 8 14 28 56`,score:10},{input:`37`,expectedOutput:`1 37`,output:`1 37`,score:10},{input:`78`,expectedOutput:`1 2 3 6 13 26 39 78`,output:`1 2 3 6 13 26 39 78`,score:10},{input:`88`,expectedOutput:`1 2 4 8 11 22 44 88`,output:`1 2 4 8 11 22 44 88`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_x">N</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_x">N</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD1"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>`},{id:`A-13-0`,title:`二個數的最大公因數`,description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入二個整數，請計算這二個數字的最大公因數
輸入格式：輸入2行
第一行輸入第1個整數N
第二行輸入地2個整數M
程式運算找出二數的最大公因數並輸出`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`9
6`,output:`3`,explanation:`第一行輸入9，
第二行輸入6，
程式輸出6、9二個數的最大公因數3`},{input:`30
72`,output:`6`,explanation:`第一行輸入30，
第二行輸入72
程式輸出30，72二個數的最大公因數6`}],testCases:[{input:`12
6`,expectedOutput:`6`,output:`6`,score:10},{input:`34
52`,expectedOutput:`2`,output:`2`,score:10},{input:`24
18`,expectedOutput:`6`,output:`6`,score:10},{input:`1
8`,expectedOutput:`1`,output:`1`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_a">A</variable><variable id="v_b">B</variable><variable id="v_tmp">暫存</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_a">A</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入M</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">B</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_tmp">暫存</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">B</field><value name="VALUE"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_a">A</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_a">A</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_tmp">暫存</field></block></value></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_a">A</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`TYTN-03`,title:`質數和`,description:`請輸入兩個 100 以內的正整數（由小到大），找出這兩個數之間所有的質數，並計算這些質數的總和。
質數定義：大於 1 的整數，除了 1 與本身外沒有其他因數。
埃拉托賽尼篩法（示意 100 以內）：
1. 刪除 1（1 不是質數也不是合數）
2. 2 是質數，刪除大於 2 的所有 2 的倍數
3. 3 是質數，刪除大於 3 的所有 3 的倍數
4. 5 是質數，刪除大於 5 的所有 5 的倍數
5. 7 是質數，刪除大於 7 的所有 7 的倍數
最後留下的數即為質數`,inputDescription:`第一行：正整數 A（起始值）

第二行：正整數 B（結束值，且 B ≥ A）`,outputDescription:`輸出 A 至 B 之間所有質數的總和（若沒有質數則輸出 0）。`,requiresGreenFlag:!0,examples:[{input:`21
30`,output:`52`,explanation:`21～30 的質數為 23、29
總和為 52。`},{input:`13
19`,output:`49`,explanation:`13～19 的質數為 13、17、19
總和為 49。`},{input:`54
58`,output:`0`,explanation:`54～58 間沒有質數
因此輸出 0。`}],testCases:[{input:`21
30`,expectedOutput:`52`,output:`52`,score:10},{input:`13
19`,expectedOutput:`49`,output:`49`,score:10},{input:`54
58`,expectedOutput:`0`,output:`0`,score:10},{input:`2
10`,expectedOutput:`17`,output:`17`,score:10},{input:`37
41`,expectedOutput:`78`,output:`78`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_a">A</variable><variable id="v_b">B</variable><variable id="v_sum">總和</variable><variable id="v_isp">是質數</variable><variable id="v_i">i</variable><variable id="v_j">j</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入A</field></block></value><next><block type="variables_set"><field name="VAR" id="v_a">A</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入B</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">B</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="variables_get"><field name="VAR" id="v_a">A</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_b">B</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_isp">是質數</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_j">j</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="v_j">j</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_isp">是質數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_isp">是質數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement></block></next></block></next></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`cyjunior-007`,title:`校園密室逃脫-費氏階梯(6-2)`,description:`電子鐵門開啟後，映入眼簾的是一座懸浮的螺旋階梯，通往二樓的平台。階梯旁懸掛著一張發光的警示牌：「欲登智慧之巔，步法須合天道。或是步履穩健走一階，或是大步流星跨兩階，切勿貪快。」
小明看著眼前這 N 階的樓梯，不禁開始思考：如果依照規則，每次只能選擇走 1 階或走 2 階，那麼要安全走到第 N 階平台，總共有多少種不同的步伐組合？這正是經典的費氏數列問題，若可能的走法數為F(N)種，我們可觀察到
F(1)=1               ,1階樓梯有 1種走法
F(2)=2               ,2階樓梯有 2種走法
F(3)=F(2)+F(1)=1+2=3 ,3階樓梯有 3種走法
F(4)=F(3)+F(2)=3+2=5 ,4階樓梯有 5種走法
…
請你幫小明計算出所有可能的走法總數`,inputDescription:`第一行：一個整數 N，代表樓梯的總階數。`,outputDescription:`第一行： 一個整數，代表走法的總數。`,requiresGreenFlag:!0,examples:[{input:`3`,output:`3`,explanation:`走法：(1,1,1), (1,2), (2,1) 共 3 種。`},{input:`4`,output:`5`,explanation:`走法：(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2) 共 5 種。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10},{input:`5`,expectedOutput:`8`,output:`8`,score:15},{input:`10`,expectedOutput:`89`,output:`89`,score:20},{input:`15`,expectedOutput:`987`,output:`987`,score:25},{input:`20`,expectedOutput:`10946`,output:`10946`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_a">a</variable><variable id="v_b">b</variable><variable id="v_c">c</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_a">a</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">b</field><value name="VALUE"><block type="math_number"><field name="NUM">2</field></block></value><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_a">a</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_b">b</field></block></value></block></statement><statement name="ELSE"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">3</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_c">c</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_a">a</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_b">b</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_a">a</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_b">b</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b">b</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_c">c</field></block></value></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_b">b</field></block></value></block></next></block></statement></block></statement></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`A-13-1`,title:`數列的最大公因數`,description:`小明上學時，不太會找最大公因數，請寫個程式幫他找一下
輸入一組整數，請計算這些數字的最大公因數
輸入格式：輸入2行
第一行輸入1個整數N，代表接下來要計算最大公因數的個數
第二行輸入N個整數，用空格隔開，代表要計算最大公因數的N個整數`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`2
6 9`,output:`3`,explanation:`第一行輸入2，表示接下來要輸入2個數
第二行輸入6 9，表示要找出6、9的最大公因數
程式輸出最大公因數3`},{input:`3
4 6 12`,output:`2`,explanation:`第一行輸入3，表示接下來要輸入3個數
第二行輸入4 6 12，表示要找出4、6、12的最大公因數
程式輸出最大公因數2`},{input:`2
1 99`,output:`1`,explanation:`第一行輸入2，表示接下來要輸入2個數
第二行輸入1 99，表示要找出1，99的最大公因數
程式輸出最大公因數1`},{input:`1
8`,output:`8`,explanation:`第一行輸入1，表示接下來要輸入1個數
第二行輸入8，表示要找出8的最大公因數
自己的最大公因數是自己，程式輸出最大公因數8`}],testCases:[{input:`3
12 24 30`,expectedOutput:`6`,output:`6`,score:10},{input:`6
2 5 24 15 36 54`,expectedOutput:`1`,output:`1`,score:10},{input:`3
51 9 24`,expectedOutput:`3`,output:`3`,score:10},{input:`1
8`,expectedOutput:`8`,output:`8`,score:10}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_all">全部數字</variable><variable id="v_g">gcd</variable><variable id="v_ta">ta</variable><variable id="v_tb">tb</variable><variable id="v_tmp">暫存</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_all">全部數字</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_x">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_g">gcd</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_ta">ta</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_g">gcd</field></block></value><next><block type="variables_set"><field name="VAR" id="v_tb">tb</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_all">全部數字</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_tb">tb</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_tmp">暫存</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_tb">tb</field></block></value><next><block type="variables_set"><field name="VAR" id="v_tb">tb</field><value name="VALUE"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_ta">ta</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="v_tb">tb</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_ta">ta</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_tmp">暫存</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_g">gcd</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_ta">ta</field></block></value></block></next></block></next></block></next></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_g">gcd</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`}]};export{e as default};