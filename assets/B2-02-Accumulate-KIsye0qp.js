var e={code:`B2-02-Accumulate`,title:`K06 累加與累乘`,description:`基礎知識點課程 U2 迴圈｜K06 累加與累乘（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t0`,knowledgePoint:`K06`,unit:`U2 迴圈`,tasks:[{id:`JSL01-D02`,title:`1到N加總示範`,description:`輸入一個正整數 N，請計算 1 + 2 + 3 + ... + N 的總和。本題用來示範累加變數的初始化、更新與輸出。`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 1 到 N 的總和。`,requiresGreenFlag:!0,examples:[{input:`5`,output:`15`,explanation:`1+2+3+4+5=15。`},{input:`10`,output:`55`,explanation:`1 到 10 的總和為 55。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20},{input:`3`,expectedOutput:`6`,output:`6`,score:20},{input:`5`,expectedOutput:`15`,output:`15`,score:20},{input:`10`,expectedOutput:`55`,output:`55`,score:20},{input:`100`,expectedOutput:`5050`,output:`5050`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
</xml>`,hints:[`在迴圈開始前，先把「總和」設為 0；每一輪把 i 加進總和，迴圈結束後再輸出。`],extension:!1,sourceCourse:`M0-04-LoopsAndSum`,sourceDifficulty:`L2`},{id:`count-011`,title:`修復斷橋`,description:`勇者需要修復一座斷掉的橋。橋的每一段需要的木材數量等於該段的編號。
現在只需修復從編號M到編號N的這一段區間。
請計算修復這段區間總共需要多少木材？(即計算M+(M+1)+...+N的總和)。
輸入格式
第一行：輸入一個整數M
第二行：輸入一個整數N
程式輸出 M加到N 之值。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
5`,output:`12`,explanation:`第一行輸入數字3
第二行輸入數字5
程式輸出3+4+5=12`},{input:`1
4`,output:`10`,explanation:`第一行輸入數字1
第二行輸入數字4
程式輸出1+2+3+4=10`}],testCases:[{input:`5
10`,expectedOutput:`45`,output:`45`,score:10},{input:`20
30`,expectedOutput:`275`,output:`275`,score:10},{input:`1
1`,expectedOutput:`1`,output:`1`,score:10},{input:`50
55`,expectedOutput:`315`,output:`315`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_m">M</variable><variable id="v_n">N</variable><variable id="v_sum">總和</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入M</field></block></value><next><block type="variables_set"><field name="VAR" id="v_m">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_m">M</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="variables_get"><field name="VAR" id="v_m">M</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`和上一題一樣是累加，只是迴圈改從 M 開始、到 N 結束。`],extension:!1,sourceCourse:`M1-01-ListSearch`,sourceDifficulty:`L2`},{id:`count-009`,title:`偶數日的存款`,description:`勇者改變了存錢計畫，他決定「只在偶數日存錢」。
在第 2 天存 2 元，第 4 天存 4 元，第 6 天存 6 元...以此類推。奇數天（1, 3, 5...）則不存錢。
請問到了第 N 天結束(N>1)，勇者總共存了多少錢？
輸入格式
第一行：輸入一個整數 N
程式輸出從 1 到 N 之間所有偶數的總和。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`4`,output:`6`,explanation:`第一行輸入數字4
程式輸出偶數和：2+4=6`},{input:`7`,output:`12`,explanation:`第一行輸入數字7
程式輸出偶數和：2+4+6=12`}],testCases:[{input:`4`,expectedOutput:`6`,output:`6`,score:10},{input:`9`,expectedOutput:`20`,output:`20`,score:10},{input:`7`,expectedOutput:`12`,output:`12`,score:10},{input:`15`,expectedOutput:`56`,output:`56`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable><variable id="v_sum">總和</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_sum">總和</field></block></value></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`在迴圈裡先判斷 i 是不是偶數，是偶數才加進總和。`],extension:!1,sourceCourse:`M1-01-ListSearch`,sourceDifficulty:`L2`},{id:`JSL01-P03`,title:`簡化階乘`,description:`輸入一個正整數 N，請計算 1 × 2 × 3 × ... × N 的結果。本題用來練習累乘變數與迴圈結構`,inputDescription:`第一行：一個正整數 N。`,outputDescription:`輸出 N 的階乘結果。`,requiresGreenFlag:!0,examples:[{input:`4`,output:`24`,explanation:`1×2×3×4=24。`},{input:`5`,output:`120`,explanation:`1×2×3×4×5=120。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:20},{input:`3`,expectedOutput:`6`,output:`6`,score:20},{input:`4`,expectedOutput:`24`,output:`24`,score:20},{input:`5`,expectedOutput:`120`,output:`120`,score:20},{input:`7`,expectedOutput:`5040`,output:`5040`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
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
</xml>`,hints:[`累乘的變數初始值要設成 1，不能設成 0，想想看為什麼。`],extension:!1,sourceCourse:`M0-04-LoopsAndSum`,sourceDifficulty:`L2`}]};export{e as default};