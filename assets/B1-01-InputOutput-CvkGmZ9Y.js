var e={code:`B1-01-InputOutput`,title:`K01 輸入與輸出`,description:`基礎知識點課程 U1 程式基礎｜K01 輸入與輸出（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）`,type:`programming`,mode:`learning`,tier:`t0`,knowledgePoint:`K01`,unit:`U1 程式基礎`,tasks:[{id:`A-01-0`,title:`Hello world`,description:`在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。
請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。
Hello後面會接小寫逗號，還有一個空白輸入
這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`Amy`,output:`Hello, Amy`,explanation:`第一個輸入 Amy，代表名字為 Amy
程式輸出 Hello, Amy`},{input:`Tom`,output:`Hello, Tom`,explanation:``}],testCases:[{input:`John`,expectedOutput:`Hello, John`,output:`Hello, John`,score:10},{input:`Marry`,expectedOutput:`Hello, Marry`,output:`Hello, Marry`,score:10},{input:`Sam`,expectedOutput:`Hello, Sam`,output:`Hello, Sam`,score:10},{input:`Tom`,expectedOutput:`Hello, Tom`,output:`Hello, Tom`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_name">名字</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入名字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_name">名字</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_say">
                <value name="TEXT">
                  <block type="text_join">
                    <mutation items="2"></mutation>
                    <value name="ADD0"><block type="text"><field name="TEXT">Hello, </field></block></value>
                    <value name="ADD1"><block type="variables_get"><field name="VAR" id="var_name">名字</field></block></value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,hints:[`先把輸入的名字存進變數，再把「Hello, 」和名字接起來輸出，注意逗號後面有一個空白。`],extension:!1,sourceCourse:`M0-01-BasicOutput`,sourceDifficulty:`L1`},{id:`A-01-1`,title:`一起學習吧`,description:`在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。
請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。
朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入
這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`Amy
John`,output:`Amy, John, 一起學習吧！`,explanation:`第一個輸入 Amy，代表朋友一名字為 Amy
第二個輸入 John，代表朋友二名字為 John
程式輸出 Amy, John, 一起學習吧！`},{input:`Tom
Susan`,output:`Tom, Susan, 一起學習吧！`,explanation:``}],testCases:[{input:`John
Amy`,expectedOutput:`John, Amy, 一起學習吧！`,output:`John, Amy, 一起學習吧！`,score:10},{input:`Tom
Susan`,expectedOutput:`Tom, Susan, 一起學習吧！`,output:`Tom, Susan, 一起學習吧！`,score:10},{input:`Sam
Brown`,expectedOutput:`Sam, Brown, 一起學習吧！`,output:`Sam, Brown, 一起學習吧！`,score:10},{input:`Justin
Louise`,expectedOutput:`Justin, Louise, 一起學習吧！`,output:`Justin, Louise, 一起學習吧！`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n1">朋友一</variable>
    <variable id="var_n2">朋友二</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入朋友一名字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_n1">朋友一</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入朋友二名字</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_n2">朋友二</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="interaction_say">
                        <value name="TEXT">
                          <block type="text_join">
                            <mutation items="2"></mutation>
                            <value name="ADD0"><block type="variables_get"><field name="VAR" id="var_n1">朋友一</field></block></value>
                            <value name="ADD1">
                              <block type="text_join">
                                <mutation items="2"></mutation>
                                <value name="ADD0"><block type="text"><field name="TEXT">, </field></block></value>
                                <value name="ADD1">
                                  <block type="text_join">
                                    <mutation items="2"></mutation>
                                    <value name="ADD0"><block type="variables_get"><field name="VAR" id="var_n2">朋友二</field></block></value>
                                    <value name="ADD1"><block type="text"><field name="TEXT">, 一起學習吧！</field></block></value>
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
</xml>`,hints:[`兩個名字要分兩次讀入；輸出時逗號、空白、驚嘆號都要和題目一模一樣。`],extension:!1,sourceCourse:`M0-01-BasicOutput`,sourceDifficulty:`L1`},{id:`A-02-0`,title:`數字加總`,description:`當我們要處理數字時，常常需要加總。
請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。
這樣的題目能幫助你熟悉數字資料處理。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`9
4`,output:`13`,explanation:`第一個輸入9
第二個輸入4
程式輸出9+4總和13`},{input:`6
5`,output:`11`,explanation:``}],testCases:[{input:`3
7`,expectedOutput:`10`,output:`10`,score:10},{input:`99
100`,expectedOutput:`199`,output:`199`,score:10},{input:`78
22`,expectedOutput:`100`,output:`100`,score:10},{input:`21
35`,expectedOutput:`56`,output:`56`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">數字一</variable>
    <variable id="var_b">數字二</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40">
    <next>
      <block type="interaction_ask_and_wait">
        <value name="TEXT"><block type="text"><field name="TEXT">請輸入第一個數字</field></block></value>
        <next>
          <block type="variables_set">
            <field name="VAR" id="var_a">數字一</field>
            <value name="VALUE"><block type="interaction_answer"></block></value>
            <next>
              <block type="interaction_ask_and_wait">
                <value name="TEXT"><block type="text"><field name="TEXT">請輸入第二個數字</field></block></value>
                <next>
                  <block type="variables_set">
                    <field name="VAR" id="var_b">數字二</field>
                    <value name="VALUE"><block type="interaction_answer"></block></value>
                    <next>
                      <block type="interaction_say">
                        <value name="TEXT">
                          <block type="math_arithmetic">
                            <field name="OP">ADD</field>
                            <value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value>
                            <value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value>
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
</xml>`,hints:[`輸入讀進來的是文字，要當成數字相加，才不會變成「37」這種接在一起的結果。`],extension:!1,sourceCourse:`M0-01-BasicOutput`,sourceDifficulty:`L1`}]};export{e as default};