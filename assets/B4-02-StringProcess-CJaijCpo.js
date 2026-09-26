var e={code:`B4-02-StringProcess`,title:`K13 字串統計與轉換`,description:`基礎知識點課程 U4 字串｜K13 字串統計與轉換（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t1`,knowledgePoint:`K13`,unit:`U4 字串`,tasks:[{id:`STR01-004`,title:`計算指定字元數量`,description:`給定一個字串與目標字元 C，請計算 C 在字串中出現幾次。`,inputDescription:`第一行輸入字串 S。第二行輸入一個字元 C。S 不包含空白。`,outputDescription:`輸出一個整數，代表 C 出現的次數。`,requiresGreenFlag:!0,examples:[{input:`banana
a`,output:`3`,explanation:`banana 中 a 出現 3 次。`}],testCases:[{input:`banana
a`,expectedOutput:`3`,output:`3`,score:10},{input:`mississippi
s`,expectedOutput:`4`,output:`4`,score:10},{input:`hello
z`,expectedOutput:`0`,output:`0`,score:10},{input:`aaaaa
a`,expectedOutput:`5`,output:`5`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_s">字串</variable><variable id="v_c">C</variable><variable id="v_cnt">計數</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字串S</field></block></value><next><block type="variables_set"><field name="VAR" id="v_s">字串</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字元C</field></block></value><next><block type="variables_set"><field name="VAR" id="v_c">C</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_cnt">計數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_c">C</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_cnt">計數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_cnt">計數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_cnt">計數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`逐字元走訪字串，遇到和目標字元相同的就把計數加 1。`],extension:!1,sourceCourse:`M1-05-StringBasics`,sourceDifficulty:`L2`},{id:`STR01-006`,title:`母音數量`,description:`給定一個只包含小寫英文字母的字串，請計算母音 a、e、i、o、u 共出現幾次。`,inputDescription:`輸入一個只包含小寫英文字母的字串 S。`,outputDescription:`輸出一個整數，代表母音總數。`,requiresGreenFlag:!0,examples:[{input:`education`,output:`5`,explanation:`education 中母音有 e、u、a、i、o，共 5 個。`}],testCases:[{input:`education`,expectedOutput:`5`,output:`5`,score:10},{input:`sky`,expectedOutput:`0`,output:`0`,score:10},{input:`banana`,expectedOutput:`3`,output:`3`,score:10},{input:`aeiou`,expectedOutput:`5`,output:`5`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_s">字串</variable><variable id="v_cnt">計數</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字串S</field></block></value><next><block type="variables_set"><field name="VAR" id="v_s">字串</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_cnt">計數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">a</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">e</field></block></value></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">i</field></block></value></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">o</field></block></value></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text"><field name="TEXT">u</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_cnt">計數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_cnt">計數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_cnt">計數</field></block></value></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`逐字元走訪字串，這個字元只要是 a、e、i、o、u 其中之一就加 1，想想要用「且」還是「或」。`],extension:!1,sourceCourse:`M1-05-StringBasics`,sourceDifficulty:`L2`},{id:`STR01-008`,title:`相鄰相同字元`,description:`給定一個字串，請判斷是否存在兩個相鄰且相同的字元。`,inputDescription:`輸入一個字串 S。S 不包含空白，且長度至少為 1。`,outputDescription:`若存在相鄰相同字元，輸出 YES；否則輸出 NO。`,requiresGreenFlag:!0,examples:[{input:`book`,output:`YES`,explanation:`book 中有相鄰的 oo。`}],testCases:[{input:`book`,expectedOutput:`YES`,output:`YES`,score:10},{input:`abcd`,expectedOutput:`NO`,output:`NO`,score:10},{input:`a`,expectedOutput:`NO`,output:`NO`,score:10},{input:`committee`,expectedOutput:`YES`,output:`YES`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_s">字串</variable><variable id="v_res">結果</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字串S</field></block></value><next><block type="variables_set"><field name="VAR" id="v_s">字串</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_res">結果</field><value name="VALUE"><block type="text"><field name="TEXT">NO</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_res">結果</field><value name="VALUE"><block type="text"><field name="TEXT">YES</field></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_res">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`比較第 i 個和第 i+1 個字元，迴圈只跑到「長度-1」。`],extension:!1,sourceCourse:`M1-05-StringBasics`,sourceDifficulty:`L3`},{id:`STR01-007`,title:`【延伸】是否回文`,description:`給定一個不含空白的字串，請判斷它是否正著讀和反著讀都相同。`,inputDescription:`輸入一個字串 S。S 不包含空白。`,outputDescription:`若 S 是回文，輸出 YES；否則輸出 NO。`,requiresGreenFlag:!0,examples:[{input:`level`,output:`YES`,explanation:`level 正著讀與反著讀相同。`}],testCases:[{input:`level`,expectedOutput:`YES`,output:`YES`,score:10},{input:`abc`,expectedOutput:`NO`,output:`NO`,score:10},{input:`a`,expectedOutput:`YES`,output:`YES`,score:10},{input:`noon`,expectedOutput:`YES`,output:`YES`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_s">字串</variable><variable id="v_res">結果</variable><variable id="v_i">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入字串S</field></block></value><next><block type="variables_set"><field name="VAR" id="v_s">字串</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_res">結果</field><value name="VALUE"><block type="text"><field name="TEXT">YES</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_res">結果</field></block></value><value name="B"><block type="text"><field name="TEXT">YES</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">字串</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_res">結果</field><value name="VALUE"><block type="text"><field name="TEXT">NO</field></block></value></block></statement></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_res">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`把第 1 個和最後 1 個字元比較、第 2 個和倒數第 2 個比較……只要有一組不同，就不是回文。`],extension:!0,sourceCourse:`M1-05-StringBasics`,sourceDifficulty:`L3`},{id:`A-12-0`,title:`【延伸】簡易密碼轉換`,description:`小明設計了一種簡單的密碼環密碼規則：將每個字母向後移二個字母（z 變 b）。

密碼環：abcdefghijklmnopqrstuvwxyz

請寫一個程式，輸入一個英文單字，輸出轉換後的字串。

這樣的練習訓練你字元處理與條件轉換。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`banana`,output:`dcpcpc`,explanation:`第一行輸入banana
程式運算，將字串往後移2個位置加密
程式輸出dcpcpc`},{input:`student`,output:`uvwfgpv`,explanation:`第一行輸入student
程式運算，將字串往後移2個位置加密
程式輸出uvwfgpv`}],testCases:[{input:`goodmoning`,expectedOutput:`iqqfoqpkpi`,output:`iqqfoqpkpi`,score:10},{input:`chaiyicity`,expectedOutput:`ejckakekva`,output:`ejckakekva`,score:10},{input:`announcement`,expectedOutput:`cppqwpegogpv`,output:`cppqwpegogpv`,score:10},{input:`experimen`,expectedOutput:`gzrgtkogp`,output:`gzrgtkogp`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_word">原始字串</variable>
    <variable id="var_ring">密碼環</variable>
    <variable id="var_result">轉換結果</variable>
    <variable id="var_i">i</variable>
    <variable id="var_char">目前字元</variable>
    <variable id="var_pos">目前位置</variable>
    <variable id="var_newpos">新位置</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="variables_set">
        <field name="VAR" id="var_ring">密碼環</field>
        <value name="VALUE"><block type="text"><field name="TEXT">abcdefghijklmnopqrstuvwxyz</field></block></value>
        <next>
          <block type="interaction_ask_and_wait">
            <value name="TEXT"><block type="text"><field name="TEXT">請輸入英文單字</field></block></value>
            <next>
              <block type="variables_set">
                <field name="VAR" id="var_word">原始字串</field>
                <value name="VALUE"><block type="interaction_answer"></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_result">轉換結果</field>
                    <value name="VALUE"><block type="text"><field name="TEXT"></field></block></value>
                    <next>
                      <block type="controls_for">
                        <field name="VAR" id="var_i">i</field>
                        <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                        <value name="TO"><block type="text_length"><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_word">原始字串</field></block></value></block></value>
                        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                        <statement name="DO">
                          <block type="variables_set">
                            <field name="VAR" id="var_char">目前字元</field>
                            <value name="VALUE">
                              <block type="text_charAt">
                                <mutation at="true"></mutation>
                                <field name="WHERE">FROM_START</field>
                                <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_word">原始字串</field></block></value>
                                <value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value>
                              </block>
                            </value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="var_pos">目前位置</field>
                                <value name="VALUE">
                                  <block type="text_indexOf">
                                    <field name="END">FIRST</field>
                                    <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_ring">密碼環</field></block></value>
                                    <value name="FIND"><block type="variables_get"><field name="VAR" id="var_char">目前字元</field></block></value>
                                  </block>
                                </value>
                                <next>
                                  <block type="variables_set">
                                    <field name="VAR" id="var_newpos">新位置</field>
                                    <value name="VALUE">
                                      <block type="math_arithmetic">
                                        <field name="OP">ADD</field>
                                        <value name="A"><block type="variables_get"><field name="VAR" id="var_pos">目前位置</field></block></value>
                                        <value name="B"><block type="math_number"><field name="NUM">2</field></block></value>
                                      </block>
                                    </value>
                                    <next>
                                      <block type="controls_if">
                                        <value name="IF0">
                                          <block type="logic_compare">
                                            <field name="OP">GT</field>
                                            <value name="A"><block type="variables_get"><field name="VAR" id="var_newpos">新位置</field></block></value>
                                            <value name="B"><block type="math_number"><field name="NUM">26</field></block></value>
                                          </block>
                                        </value>
                                        <statement name="DO0">
                                          <block type="variables_set">
                                            <field name="VAR" id="var_newpos">新位置</field>
                                            <value name="VALUE">
                                              <block type="math_arithmetic">
                                                <field name="OP">MINUS</field>
                                                <value name="A"><block type="variables_get"><field name="VAR" id="var_newpos">新位置</field></block></value>
                                                <value name="B"><block type="math_number"><field name="NUM">26</field></block></value>
                                              </block>
                                            </value>
                                          </block>
                                        </statement>
                                        <next>
                                          <block type="variables_set">
                                            <field name="VAR" id="var_result">轉換結果</field>
                                            <value name="VALUE">
                                              <block type="text_join">
                                                <mutation items="2"></mutation>
                                                <value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">轉換結果</field></block></value>
                                                <value name="ADD1">
                                                  <block type="text_charAt">
                                                    <mutation at="true"></mutation>
                                                    <field name="WHERE">FROM_START</field>
                                                    <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_ring">密碼環</field></block></value>
                                                    <value name="AT"><block type="variables_get"><field name="VAR" id="var_newpos">新位置</field></block></value>
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
                        </statement>
                        <next>
                          <block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_result">轉換結果</field></block></value></block>
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
</xml>`,hints:[`先找出字元在密碼環中的位置，往後移 2 個；超過 z 的時候要從 a 繼續算。`],extension:!0,sourceCourse:`M1-06-StringFormat`,sourceDifficulty:`L3`},{id:`TYTN-10`,title:`【延伸】檢查碼`,description:`書店會員卡享有購書8折優惠，為避免有人偽造會員卡，書店老闆在卡號中加入檢查碼。

會員卡編號格式為：一個英文字母 + 4個數字 + 1個檢查碼。

英文字母對應的數字如下：

A → 11 B → 13 C → 15 D → 17

若為正確的會員卡號，則 (英文字母對應的數字 + 4個數字 + 檢查碼) 除以 5 的餘數會是 4，其餘情況皆為不正確。

例如：

B20135 = 13+2+0+1+3+5 = 24 → 24÷5=4餘4 → 正確會員卡

A15274 = 11+1+5+2+7+4 = 30 → 30÷5=6餘0 → 不正確會員卡

請寫一個程式判斷會員卡號是否正確，若正確輸出 yes，否則輸出 no。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`C20351`,output:`no`,explanation:`C20351 = 15+2+0+3+5+1 = 26
26÷5 = 5餘1 → 不正確會員卡。`},{input:`D15713`,output:`yes`,explanation:`D15713 = 17+1+5+7+1+3 = 34
34÷5 = 6餘4 → 正確會員卡。`}],testCases:[{input:`C20351`,expectedOutput:`no`,output:`no`,score:10},{input:`D15713`,expectedOutput:`yes`,output:`yes`,score:10},{input:`A40244`,expectedOutput:`no`,output:`no`,score:10},{input:`B99994`,expectedOutput:`no`,output:`no`,score:10},{input:`A22146`,expectedOutput:`no`,output:`no`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_s">卡號</variable><variable id="v_c2">字元2</variable><variable id="v_c3">字元3</variable><variable id="v_c4">字元4</variable><variable id="v_c5">字元5</variable><variable id="v_c6">字元6</variable><variable id="v_total">總和</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入會員卡號</field></block></value><next><block type="variables_set"><field name="VAR" id="v_s">卡號</field><value name="VALUE"><block type="text_join"><mutation items="2"></mutation><value name="ADD0"><block type="text"><field name="TEXT"></field></block></value><value name="ADD1"><block type="interaction_answer"></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_c2">字元2</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">卡號</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_c3">字元3</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">卡號</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_c4">字元4</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">卡號</field></block></value><value name="AT"><block type="math_number"><field name="NUM">4</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_c5">字元5</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">卡號</field></block></value><value name="AT"><block type="math_number"><field name="NUM">5</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_c6">字元6</field><value name="VALUE"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">卡號</field></block></value><value name="AT"><block type="math_number"><field name="NUM">6</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_total">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_number"><field name="NUM">9</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="text_indexOf"><field name="END">FIRST</field><value name="VALUE"><block type="text"><field name="TEXT">ABCD</field></block></value><value name="FIND"><block type="text_charAt"><mutation at="true"></mutation><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_s">卡號</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c2">字元2</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c3">字元3</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c4">字元4</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c5">字元5</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="v_c6">字元6</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></value></block></value></block></value></block></value><next><block type="interaction_say"><value name="TEXT"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_total">總和</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">5</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">yes</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">no</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`,hints:[`先把英文字母換成對應的數字，再把其他每一位數字加起來，最後看除以 5 的餘數是不是 4。`],extension:!0,sourceCourse:`M1-06-StringFormat`,sourceDifficulty:`L3`}]};export{e as default};