var e={code:`M3-00-BinarySearchWarmup`,title:`二分搜尋入門暖身`,type:`programming`,mode:`learning`,tier:`t3`,tasks:[{id:`M3-00-01`,title:`神祕數字找找看`,description:`老師心中把候選數字由小到大排好，請你判斷某個目標數字在不在清單裡。

第一行輸入N，代表清單有N個數字

第二行輸入N個數字（已經由小到大排序），數字間以空白間隔

第三行輸入要查詢的目標數字

如果目標數字有在清單裡，輸出「找到了」；否則輸出「沒找到」。`,inputDescription:`N、已排序的N個數字、目標數字`,outputDescription:`找到了 或 沒找到`,requiresGreenFlag:!0,examples:[{input:`5
2 4 6 8 10
6`,output:`找到了`,explanation:`清單中有6，所以輸出找到了`},{input:`5
2 4 6 8 10
7`,output:`沒找到`,explanation:`清單中沒有7，所以輸出沒找到`}],testCases:[{input:`5
2 4 6 8 10
6`,expectedOutput:`找到了`,output:`找到了`,score:20},{input:`5
2 4 6 8 10
7`,expectedOutput:`沒找到`,output:`沒找到`,score:20},{input:`1
42
42`,expectedOutput:`找到了`,output:`找到了`,score:20},{input:`6
1 3 5 7 9 11
1`,expectedOutput:`找到了`,output:`找到了`,score:20},{input:`6
1 3 5 7 9 11
11`,expectedOutput:`找到了`,output:`找到了`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n">N</variable>
    <variable id="v_x">數字</variable>
    <variable id="v_values">數值清單</variable>
    <variable id="v_target">目標</variable>
    <variable id="v_found">找到</variable>
    <variable id="v_i">i</variable>
  </variables>
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
                <field name="VAR" id="v_values">數值清單</field>
                <value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value>
                <next>
                  <block type="controls_repeat_ext">
                    <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                    <statement name="DO">
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入已排序的N個數字</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_x">數字</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="lists_setIndex">
                                <mutation at="false"></mutation>
                                <field name="MODE">INSERT</field>
                                <field name="WHERE">LAST</field>
                                <value name="LIST"><block type="variables_get"><field name="VAR" id="v_values">數值清單</field></block></value>
                                <value name="TO"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                              </block>
                            </next>
                          </block>
                        </next>
                      </block>
                    </statement>
                    <next>
                      <block type="interaction_ask_and_wait">
                        <value name="TEXT"><block type="text"><field name="TEXT">請輸入目標數字</field></block></value>
                        <next>
                          <block type="variables_set">
                            <field name="VAR" id="v_target">目標</field>
                            <value name="VALUE"><block type="interaction_answer"></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_found">找到</field>
                                <value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value>
                                <next>
                                  <block type="controls_for">
                                    <field name="VAR" id="v_i">i</field>
                                    <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
                                    <value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                                    <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
                                    <statement name="DO">
                                      <block type="controls_if">
                                        <value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_target">目標</field></block></value></block></value>
                                        <statement name="DO0"><block type="variables_set"><field name="VAR" id="v_found">找到</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value></block></statement>
                                      </block>
                                    </statement>
                                    <next>
                                      <block type="controls_if">
                                        <mutation else="1"></mutation>
                                        <value name="IF0"><block type="variables_get"><field name="VAR" id="v_found">找到</field></block></value>
                                        <statement name="DO0"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">找到了</field></block></value></block></statement>
                                        <statement name="ELSE"><block type="interaction_say"><value name="TEXT"><block type="text"><field name="TEXT">沒找到</field></block></value></block></statement>
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
</xml>`},{id:`M3-00-02`,title:`神祕數字在第幾個`,description:`承接上一題，這次清單中的數字一樣由小到大排好。請你找出目標數字在清單中的位置（從第1個算起）。

第一行輸入N

第二行輸入N個已排序的數字

第三行輸入要查詢的目標數字

如果找到，輸出目標數字的位置（從1開始算）；如果清單裡沒有這個數字，輸出0。`,inputDescription:`N、已排序的N個數字、目標數字`,outputDescription:`位置（1起始）或0（找不到）`,requiresGreenFlag:!0,examples:[{input:`5
2 4 6 8 10
6`,output:`3`,explanation:`6是清單中第3個數字，所以輸出3`},{input:`5
2 4 6 8 10
7`,output:`0`,explanation:`清單中沒有7，所以輸出0`}],testCases:[{input:`5
2 4 6 8 10
6`,expectedOutput:`3`,output:`3`,score:20},{input:`5
2 4 6 8 10
7`,expectedOutput:`0`,output:`0`,score:20},{input:`1
42
42`,expectedOutput:`1`,output:`1`,score:20},{input:`6
1 3 5 7 9 11
1`,expectedOutput:`1`,output:`1`,score:20},{input:`6
1 3 5 7 9 11
11`,expectedOutput:`6`,output:`6`,score:20}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n02">N</variable><variable id="v_x02">數字</variable><variable id="v_values02">數值清單</variable><variable id="v_target02">目標</variable><variable id="v_pos02">位置</variable><variable id="v_i02">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n02">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_values02">數值清單</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n02">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入已排序的N個數字</field></block></value><next><block type="variables_set"><field name="VAR" id="v_x02">數字</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_values02">數值清單</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_x02">數字</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入目標數字</field></block></value><next><block type="variables_set"><field name="VAR" id="v_target02">目標</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_pos02">位置</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i02">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n02">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_values02">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i02">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_target02">目標</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_pos02">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i02">i</field></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos02">位置</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`M3-00-03`,title:`猜數字裁判`,description:`模擬猜數字遊戲的裁判：給一個正確答案secret，跟一串依序猜測的數字。請你算出玩家是第幾次才猜中（保證猜測序列裡一定會猜中一次）。

第一行輸入secret

第二行輸入M，代表猜測次數

第三行輸入M個猜測值，依序排列，空白分隔

輸出玩家第幾次猜中（從第1次算起）。`,inputDescription:`secret、M、M個猜測值`,outputDescription:`第幾次猜中`,requiresGreenFlag:!0,examples:[{input:`42
5
50 25 40 42 45`,output:`4`,explanation:`第4次猜到42，答對`},{input:`7
3
7 1 9`,output:`1`,explanation:`第1次就猜中7`}],testCases:[{input:`42
5
50 25 40 42 45`,expectedOutput:`4`,output:`4`,score:20},{input:`7
3
7 1 9`,expectedOutput:`1`,output:`1`,score:20},{input:`100
4
50 75 90 100`,expectedOutput:`4`,output:`4`,score:20},{input:`3
6
10 5 2 3 1 8`,expectedOutput:`4`,output:`4`,score:20},{input:`1
1
1`,expectedOutput:`1`,output:`1`,score:20}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_secret03">secret</variable><variable id="v_m03">M</variable><variable id="v_g03">猜測v</variable><variable id="v_guess03">猜測值</variable><variable id="v_found03">找到次數</variable><variable id="v_i03">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入secret</field></block></value><next><block type="variables_set"><field name="VAR" id="v_secret03">secret</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入M</field></block></value><next><block type="variables_set"><field name="VAR" id="v_m03">M</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_guess03">猜測值</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_m03">M</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入M個猜測值</field></block></value><next><block type="variables_set"><field name="VAR" id="v_g03">猜測v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_guess03">猜測值</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_g03">猜測v</field></block></value></block></next></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="v_found03">找到次數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i03">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_m03">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_guess03">猜測值</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i03">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_secret03">secret</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_found03">找到次數</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_found03">找到次數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i03">i</field></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_found03">找到次數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`M3-00-04`,title:`新書該插第幾格`,description:`書架上的書已經依照編號由小到大排好。請你決定新書該插入第幾個位置（從第1個算起），插入後書架仍維持由小到大排序。如果新書編號跟書架上已有的編號重複，新書要插在第一個相同編號的前面。

第一行輸入N，代表書架現有N本書

第二行輸入N個已排序的書本編號

第三行輸入新書編號

輸出新書應該插入的位置。`,inputDescription:`N、已排序的N個書本編號、新書編號`,outputDescription:`插入位置（1起始）`,requiresGreenFlag:!0,examples:[{input:`5
10 20 30 40 50
25`,output:`3`,explanation:`25要插在30之前，變成第3個`},{input:`5
10 20 30 40 50
5`,output:`1`,explanation:`5比全部都小，插在第1個`}],testCases:[{input:`5
10 20 30 40 50
25`,expectedOutput:`3`,output:`3`,score:17},{input:`5
10 20 30 40 50
5`,expectedOutput:`1`,output:`1`,score:17},{input:`5
10 20 30 40 50
60`,expectedOutput:`6`,output:`6`,score:17},{input:`5
10 20 30 40 50
30`,expectedOutput:`3`,output:`3`,score:17},{input:`1
100
100`,expectedOutput:`1`,output:`1`,score:16},{input:`6
1 3 3 3 7 9
3`,expectedOutput:`2`,output:`2`,score:16}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n04">N</variable><variable id="v_b04">書本v</variable><variable id="v_books04">書本編號</variable><variable id="v_new04">新書編號</variable><variable id="v_pos04">位置</variable><variable id="v_foundflag04">foundflag</variable><variable id="v_i04">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n04">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_books04">書本編號</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n04">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入已排序的N個書本編號</field></block></value><next><block type="variables_set"><field name="VAR" id="v_b04">書本v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_books04">書本編號</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_b04">書本v</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入新書編號</field></block></value><next><block type="variables_set"><field name="VAR" id="v_new04">新書編號</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_pos04">位置</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n04">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_foundflag04">foundflag</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i04">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n04">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_books04">書本編號</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i04">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_new04">新書編號</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_foundflag04">foundflag</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_pos04">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i04">i</field></block></value><next><block type="variables_set"><field name="VAR" id="v_foundflag04">foundflag</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block></next></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos04">位置</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`M3-00-05`,title:`訂單一次查`,description:`已排序的會員編號清單，請你一次查詢多筆會員編號是否存在。
第一行輸入N，代表會員總數
第二行輸入N個已排序的會員編號
第三行輸入Q，代表要查詢的筆數
第四行輸入Q個要查詢的編號，空白分隔
依查詢順序，依序輸出每筆查詢的結果「有」或「無」，用空白分隔成一行。`,inputDescription:`N、已排序的N個會員編號、Q、Q個查詢編號`,outputDescription:`依序輸出「有」或「無」，空白分隔`,requiresGreenFlag:!0,examples:[{input:`5
3 8 15 22 30
3
8 10 22`,output:`有 無 有`,explanation:`8有、10沒有、22有`},{input:`5
3 8 15 22 30
2
3 30`,output:`有 有`,explanation:`3跟30都有`}],testCases:[{input:`5
3 8 15 22 30
3
8 10 22`,expectedOutput:`有 無 有`,output:`有 無 有`,score:25},{input:`5
3 8 15 22 30
2
3 30`,expectedOutput:`有 有`,output:`有 有`,score:25},{input:`1
100
2
100 99`,expectedOutput:`有 無`,output:`有 無`,score:25},{input:`6
2 4 6 8 10 12
4
1 4 13 12`,expectedOutput:`無 有 無 有`,output:`無 有 無 有`,score:25}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n05">N</variable><variable id="v_m05">會員v</variable><variable id="v_members05">會員編號</variable><variable id="v_qcount05">Q</variable><variable id="v_q05">查詢值</variable><variable id="v_exists05">exists</variable><variable id="v_i05">i</variable><variable id="v_first05">first</variable><variable id="v_res05">結果</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n05">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_members05">會員編號</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n05">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入已排序的N個會員編號</field></block></value><next><block type="variables_set"><field name="VAR" id="v_m05">會員v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_members05">會員編號</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_m05">會員v</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入Q</field></block></value><next><block type="variables_set"><field name="VAR" id="v_qcount05">Q</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_first05">first</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_qcount05">Q</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT"></field></block></value><next><block type="variables_set"><field name="VAR" id="v_q05">查詢值</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_exists05">exists</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i05">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n05">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_members05">會員編號</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i05">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_q05">查詢值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_exists05">exists</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value></block></statement></block></statement><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_first05">first</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_res05">結果</field><value name="VALUE"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_exists05">exists</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">有</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">無</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="v_first05">first</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></next></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="v_res05">結果</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_res05">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="v_exists05">exists</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">有</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">無</field></block></value></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_res05">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`},{id:`M3-00-06`,title:`打折門檻落點`,description:`店家依消費金額設定折扣門檻（門檻清單由小到大排序），請你判斷某筆消費金額達到第幾個門檻（即金額大於等於的最大門檻編號）。如果金額沒有達到任何門檻，輸出0。

第一行輸入N，代表門檻數量

第二行輸入N個已排序的門檻金額

第三行輸入這筆消費金額

輸出達到的門檻編號。`,inputDescription:`N、已排序的N個門檻金額、消費金額`,outputDescription:`達到的門檻編號，都沒達到輸出0`,requiresGreenFlag:!0,examples:[{input:`3
500 1000 2000
1500`,output:`2`,explanation:`1500達到1000的門檻，但沒到2000，所以是第2個門檻`},{input:`3
500 1000 2000
300`,output:`0`,explanation:`300沒達到任何門檻，輸出0`}],testCases:[{input:`3
500 1000 2000
1500`,expectedOutput:`2`,output:`2`,score:17},{input:`3
500 1000 2000
300`,expectedOutput:`0`,output:`0`,score:17},{input:`3
500 1000 2000
2000`,expectedOutput:`3`,output:`3`,score:17},{input:`4
100 200 300 400
250`,expectedOutput:`2`,output:`2`,score:17},{input:`1
999
999`,expectedOutput:`1`,output:`1`,score:16},{input:`4
100 200 300 400
99`,expectedOutput:`0`,output:`0`,score:16}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="v_n06">N</variable><variable id="v_t06">門檻v</variable><variable id="v_thresh06">門檻</variable><variable id="v_amount06">消費金額</variable><variable id="v_pos06">位置</variable><variable id="v_i06">i</variable>
  </variables>
  <block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n06">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_thresh06">門檻</field><value name="VALUE"><block type="lists_create_with"><mutation items="0"></mutation></block></value><next><block type="controls_repeat_ext"><value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n06">N</field></block></value><statement name="DO"><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入已排序的N個門檻金額</field></block></value><next><block type="variables_set"><field name="VAR" id="v_t06">門檻v</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="lists_setIndex"><mutation at="false"></mutation><field name="MODE">INSERT</field><field name="WHERE">LAST</field><value name="LIST"><block type="variables_get"><field name="VAR" id="v_thresh06">門檻</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_t06">門檻v</field></block></value></block></next></block></next></block></statement><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入消費金額</field></block></value><next><block type="variables_set"><field name="VAR" id="v_amount06">消費金額</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_pos06">位置</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="v_i06">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n06">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_thresh06">門檻</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="v_i06">i</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_amount06">消費金額</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="v_pos06">位置</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_i06">i</field></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_pos06">位置</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block>
</xml>`}]};export{e as default};