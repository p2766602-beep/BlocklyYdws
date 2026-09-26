var e={code:`B1-02-Variables`,title:`K02 變數與四則運算`,description:`基礎知識點課程 U1 程式基礎｜K02 變數與四則運算（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t0`,knowledgePoint:`K02`,unit:`U1 程式基礎`,tasks:[{id:`BSA01-001`,title:`購買文具`,description:`小明到文具店購買鉛筆與橡皮擦。請根據單價與數量，計算總金額。`,inputDescription:`輸入四個整數，依序為鉛筆單價、鉛筆數量、橡皮擦單價、橡皮擦數量。`,outputDescription:`輸出一個整數，代表總金額。`,requiresGreenFlag:!0,examples:[{input:`10 3 5 2`,output:`40`,explanation:`10×3 + 5×2 = 40。`}],testCases:[{input:`10 3 5 2`,expectedOutput:`40`,output:`40`,score:10},{input:`12 4 8 3`,expectedOutput:`72`,output:`72`,score:10},{input:`7 6 9 2`,expectedOutput:`60`,output:`60`,score:10},{input:`15 1 20 4`,expectedOutput:`95`,output:`95`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_pp">鉛筆單價</variable><variable id="v_pq">鉛筆數量</variable><variable id="v_ep">橡皮擦單價</variable><variable id="v_eq">橡皮擦數量</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入鉛筆單價</field></block></value><next><block type="variables_set"><field name="VAR" id="v_pp">鉛筆單價</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入鉛筆數量</field></block></value><next><block type="variables_set"><field name="VAR" id="v_pq">鉛筆數量</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入橡皮擦單價</field></block></value><next><block type="variables_set"><field name="VAR" id="v_ep">橡皮擦單價</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入橡皮擦數量</field></block></value><next><block type="variables_set"><field name="VAR" id="v_eq">橡皮擦數量</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_say"><value name="TEXT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_pp">鉛筆單價</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_pq">鉛筆數量</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_ep">橡皮擦單價</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_eq">橡皮擦數量</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>`,hints:[`總金額＝鉛筆單價×數量＋橡皮擦單價×數量，先想清楚四個輸入分別代表什麼。`],extension:!1,sourceCourse:`M0-02-Variables`,sourceDifficulty:`L1`},{id:`BSA01-003`,title:`長方形周長與面積`,description:`給定長方形的長與寬，請計算長方形的周長與面積。`,inputDescription:`輸入兩個整數，依序為長方形的長與寬。`,outputDescription:`輸出兩個整數，依序為周長與面積，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`8 5`,output:`26 40`,explanation:`周長為 (8+5)×2=26，面積為 8×5=40。`}],testCases:[{input:`8 5`,expectedOutput:`26 40`,output:`26 40`,score:10},{input:`10 3`,expectedOutput:`26 30`,output:`26 30`,score:10},{input:`7 7`,expectedOutput:`28 49`,output:`28 49`,score:10},{input:`15 4`,expectedOutput:`38 60`,output:`38 60`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_len">長</variable><variable id="v_wid">寬</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入長</field></block></value><next><block type="variables_set"><field name="VAR" id="v_len">長</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入寬</field></block></value><next><block type="variables_set"><field name="VAR" id="v_wid">寬</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_len">長</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_wid">寬</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_len">長</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_wid">寬</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>`,hints:[`周長和面積各用一個變數算好，最後一起輸出，中間用空白隔開。`],extension:!1,sourceCourse:`M0-02-Variables`,sourceDifficulty:`L1`},{id:`A-02-1`,title:`數字平均`,description:`當我們要處理數字時，常常需計算平均。
請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的平均(四捨五入取整數)。
這樣的題目能幫助你熟悉數字資料處理。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`9
4`,output:`7`,explanation:`第一個輸入9
第二個輸入4
程式輸出9、4的平均四捨五入取整數7`},{input:`6
5`,output:`6`,explanation:``}],testCases:[{input:`3
7`,expectedOutput:`5`,output:`5`,score:10},{input:`99
100`,expectedOutput:`100`,output:`100`,score:10},{input:`78
22`,expectedOutput:`50`,output:`50`,score:10},{input:`21
35`,expectedOutput:`28`,output:`28`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">甲</variable>
    <variable id="var_b">乙</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第一個數字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_a">甲</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入第二個數字</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_b">乙</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="interaction_say">
                        <value name="TEXT">
                          <block type="math_round">
                            <field name="OP">ROUND</field>
                            <value name="NUM">
                              <block type="math_arithmetic">
                                <field name="OP">DIVIDE</field>
                                <value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">甲</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">乙</field></block></value></block></value>
                                <value name="B"><block type="math_number"><field name="NUM">2</field></block></value>
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
</xml>`,hints:[`先算出平均，再用「四捨五入」取整數。`],extension:!1,sourceCourse:`M0-01-BasicOutput`,sourceDifficulty:`L1`},{id:`BSA01-007`,title:`平均分數整數版`,description:`給定三科成績，請計算總分與整數平均。整數平均只取商，不處理小數。`,inputDescription:`輸入三個整數，代表三科成績。`,outputDescription:`輸出兩個整數，依序為總分與整數平均，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`80 75 91`,output:`246 82`,explanation:`總分 246，246 除以 3 的整數商為 82。`}],testCases:[{input:`80 75 91`,expectedOutput:`246 82`,output:`246 82`,score:10},{input:`100 90 80`,expectedOutput:`270 90`,output:`270 90`,score:10},{input:`66 67 68`,expectedOutput:`201 67`,output:`201 67`,score:10},{input:`59 72 83`,expectedOutput:`214 71`,output:`214 71`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_s1">成績一</variable>
    <variable id="v_s2">成績二</variable>
    <variable id="v_s3">成績三</variable>
    <variable id="v_total">總分</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第一科成績</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="v_s1">成績一</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入第二科成績</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="v_s2">成績二</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第三科成績</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_s3">成績三</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_total">總分</field>
                                <value name="VALUE">
                                  <block type="math_arithmetic">
                                    <field name="OP">ADD</field>
                                    <value name="A"><block type="variables_get"><field name="VAR" id="v_s1">成績一</field></block></value>
                                    <value name="B">
                                      <block type="math_arithmetic">
                                        <field name="OP">ADD</field>
                                        <value name="A"><block type="variables_get"><field name="VAR" id="v_s2">成績二</field></block></value>
                                        <value name="B"><block type="variables_get"><field name="VAR" id="v_s3">成績三</field></block></value>
                                      </block>
                                    </value>
                                  </block>
                                </value>
                                <next>
                                  <block type="interaction_say">
                                    <value name="TEXT">
                                      <block type="text_join">
                                        <mutation items="3"></mutation>
                                        <value name="ADD0"><block type="variables_get"><field name="VAR" id="v_total">總分</field></block></value>
                                        <value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value>
                                        <value name="ADD2">
                                          <block type="math_round">
                                            <field name="OP">ROUNDDOWN</field>
                                            <value name="NUM">
                                              <block type="math_arithmetic">
                                                <field name="OP">DIVIDE</field>
                                                <value name="A"><block type="variables_get"><field name="VAR" id="v_total">總分</field></block></value>
                                                <value name="B"><block type="math_number"><field name="NUM">3</field></block></value>
                                              </block>
                                            </value>
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
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`這題的整數平均「只取商」，和上一題的四捨五入不一樣，比較看看兩種結果的差別。`],extension:!1,sourceCourse:`M0-02-Variables`,sourceDifficulty:`L1`},{id:`BSA01-004`,title:`秒數換算`,description:`給定一段時間的總秒數，請換算成幾分鐘又幾秒。`,inputDescription:`輸入一個整數 S，代表總秒數。`,outputDescription:`輸出兩個整數，依序為分鐘與剩餘秒數，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`125`,output:`2 5`,explanation:`125 秒等於 2 分鐘又 5 秒。`}],testCases:[{input:`125`,expectedOutput:`2 5`,output:`2 5`,score:10},{input:`59`,expectedOutput:`0 59`,output:`0 59`,score:10},{input:`360`,expectedOutput:`6 0`,output:`6 0`,score:10},{input:`754`,expectedOutput:`12 34`,output:`12 34`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_s">總秒數</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入總秒數</field></block></value><next><block type="variables_set"><field name="VAR" id="v_s">總秒數</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_s">總秒數</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_s">總秒數</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">60</field></block></value></block></value></block></value></block></next></block></next></block></next></block></xml>`,hints:[`分鐘數用「整除 60」，剩下的秒數用「除以 60 的餘數」。`],extension:!1,sourceCourse:`M0-02-Variables`,sourceDifficulty:`L1`},{id:`BSA01-005`,title:`找零錢`,description:`商店只使用 50 元、10 元與 1 元硬幣找零。給定找零金額，請計算最少需要多少枚硬幣。`,inputDescription:`輸入一個整數 N，代表找零金額。`,outputDescription:`輸出三個整數，依序為 50 元、10 元與 1 元硬幣的數量，中間以空白分隔。`,requiresGreenFlag:!0,examples:[{input:`187`,output:`3 3 7`,explanation:`187 元可找 3 枚 50 元、3 枚 10 元、7 枚 1 元。`}],testCases:[{input:`187`,expectedOutput:`3 3 7`,output:`3 3 7`,score:10},{input:`49`,expectedOutput:`0 4 9`,output:`0 4 9`,score:10},{input:`250`,expectedOutput:`5 0 0`,output:`5 0 0`,score:10},{input:`96`,expectedOutput:`1 4 6`,output:`1 4 6`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_amt">金額</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入找零金額</field></block></value><next><block type="variables_set"><field name="VAR" id="v_amt">金額</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_say"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_amt">金額</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_amt">金額</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">50</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_modulo"><value name="DIVIDEND"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="v_amt">金額</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">50</field></block></value></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value></block></value></block></next></block></next></block></next></block></xml>`,hints:[`先用 50 元整除算枚數，再用餘數更新「還剩多少錢」，接著換 10 元、1 元，重複同樣的步驟。`],extension:!1,sourceCourse:`M0-02-Variables`,sourceDifficulty:`L1`}]};export{e as default};