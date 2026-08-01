var e={code:`M1-01-ListSearch`,title:`清單搜尋與篩選進階`,type:`programming`,mode:`learning`,tier:`t1`,tasks:[{id:`count-008`,title:`防禦工事`,description:`為了抵禦怪獸，勇者需要建造正方形的防禦陣型。國王要求勇者展示不同規模的陣型人數。
當邊長為 i 時，需要的人數就是 i * i。
請輸入一個數字 N，依序列出邊長從 1 到 N 的正方形陣型各需要多少人。
輸入格式
第一行：輸入一個整數 N ，代表最大邊長
程式依序輸出從 1 到 N 之間的平方數(1*1 2*2...N*N)
數字之間以空白隔開。`,inputDescription:`第一行：輸入一個整數 N ，代表最大邊長

程式依序輸出從 1 到 N 之間的平方數(1*1 2*2...N*N)

數字之間以空白隔開。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3`,output:`1 4 9`,explanation:`第一行輸入數字3，代表最大邊長3
程式輸出平方數序列：1 4 9`},{input:`5`,output:`1 4 9 16 25`,explanation:`第一行輸入數字5，代表最大邊長5
程式輸出平方數序列：1 4 9 16 25`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10},{input:`6`,expectedOutput:`1 4 9 16 25 36`,output:`1 4 9 16 25 36`,score:10},{input:`7`,expectedOutput:`1 4 9 16 25 36 49`,output:`1 4 9 16 25 36 49`,score:10},{input:`9`,expectedOutput:`1 4 9 16 25 36 49 64 81`,output:`1 4 9 16 25 36 49 64 81`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="v_n">N</variable></variables><block type="event_whenflagclicked" x="40" y="40"><next><block type="interaction_ask_and_wait"><value name="TEXT"><block type="text"><field name="TEXT">請輸入N</field></block></value><next><block type="variables_set"><field name="VAR" id="v_n">N</field><value name="VALUE"><block type="interaction_answer"></block></value><next><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">1</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="v_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="v_i">i</field></block></value></block></value></block></value></block></statement></block></statement><next><block type="interaction_say"><value name="TEXT"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>`},{id:`count-013`,title:`勇者的背包`,description:`勇者準備出發了，他把所有的道具都放入了神奇背包（清單）中。 為了確認東西沒帶錯，勇者需要依照順序把背包裡的東西拿出來檢查一遍。 請你設計一個程式，將清單中的物品編號依序印出來。
輸入格式
第一行：輸入一個整數 N ，代表背包裡有幾樣物品。
第二行有 N 個整數，代表物品的編號，中間以空白隔開。
程式依序輸出清單中的每一個數字
數字之間以空白隔開。`,inputDescription:`第一行：輸入一個整數 N ，代表背包裡有幾樣物品。

第二行有 N 個整數，代表物品的編號，中間以空白隔開。
程式依序輸出清單中的每一個數字

數字之間以空白隔開。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
101 102 103`,output:`101 102 103`,explanation:`第一行輸入數字3，代表3樣物品
第二行有3個整數代表物品的編號輸入，中間以空白隔開
程式依序輸出每個物品編號：101 102 103`},{input:`5
5 4 3 2 1`,output:`5 4 3 2 1`,explanation:`第一行輸入數字5，代表3樣物品
第二行有5個整數代表物品的編號輸入，中間以空白隔開
程式依序輸出每個物品編號：5 4 3 2 1`}],testCases:[{input:`1
99`,expectedOutput:`99`,output:`99`,score:10},{input:`3
1 5 9`,expectedOutput:`1 5 9`,output:`1 5 9`,score:10},{input:`6
2 4 6 8 10 12`,expectedOutput:`2 4 6 8 10 12`,output:`2 4 6 8 10 12`,score:10},{input:`9
1 4 9 16 25 36 49 64 81`,expectedOutput:`1 4 9 16 25 36 49 64 81`,output:`1 4 9 16 25 36 49 64 81`,score:10}],difficulty:`L1`,difficultyLabel:`L1｜基礎`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="v_n">N</variable><variable id="v_x">數字</variable><variable id="v_out">結果</variable><variable id="v_first">是否第一筆</variable></variables>
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
                  <block type="variables_set">
                    <field name="VAR" id="v_first">是否第一筆</field>
                    <value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value>
                    <next>
                      <block type="controls_repeat_ext">
                        <value name="TIMES"><block type="variables_get"><field name="VAR" id="v_n">N</field></block></value>
                        <statement name="DO">
                          <block type="interaction_ask_and_wait">
                            <value name="TEXT"><block type="text"><field name="TEXT">請輸入N個物品編號</field></block></value>
                            <next>
                              <block type="variables_set">
                                <field name="VAR" id="v_x">數字</field>
                                <value name="VALUE"><block type="interaction_answer"></block></value>
                                <next>
                                  <block type="controls_if">
                                    <mutation else="1"></mutation>
                                    <value name="IF0"><block type="variables_get"><field name="VAR" id="v_first">是否第一筆</field></block></value>
                                    <statement name="DO0">
                                      <block type="variables_set"><field name="VAR" id="v_out">結果</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value>
                                        <next><block type="variables_set"><field name="VAR" id="v_first">是否第一筆</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></next>
                                      </block>
                                    </statement>
                                    <statement name="ELSE">
                                      <block type="variables_set">
                                        <field name="VAR" id="v_out">結果</field>
                                        <value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="v_out">結果</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="v_x">數字</field></block></value></block></value>
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
    </next>
  </block>
</xml>`},{id:`count-009`,title:`偶數日的存款`,description:`勇者改變了存錢計畫，他決定「只在偶數日存錢」。
在第 2 天存 2 元，第 4 天存 4 元，第 6 天存 6 元...以此類推。奇數天（1, 3, 5...）則不存錢。
請問到了第 N 天結束(N>1)，勇者總共存了多少錢？
輸入格式
第一行：輸入一個整數 N
程式輸出從 1 到 N 之間所有偶數的總和。`,inputDescription:`第一行：輸入一個整數 N

程式輸出從 1 到 N 之間所有偶數的總和。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`4`,output:`6`,explanation:`第一行輸入數字4
程式輸出偶數和：2+4=6`},{input:`7`,output:`12`,explanation:`第一行輸入數字7
程式輸出偶數和：2+4+6=12`}],testCases:[{input:`4`,expectedOutput:`6`,output:`6`,score:10},{input:`9`,expectedOutput:`20`,output:`20`,score:10},{input:`7`,expectedOutput:`12`,output:`12`,score:10},{input:`15`,expectedOutput:`56`,output:`56`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`count-010`,title:`能量水晶融合`,description:`勇者正在合成一顆能量水晶。這顆水晶的能量是不斷相乘的！
第 1 階段能量為 1。
第 2 階段能量變成 1 * 2。
第 3 階段能量變成 1 * 2 * 3。
請問到了第 N 階段，能量總共有多少？
輸入格式
第一行：輸入一個整數 N
程式輸出 1*2*3*4...*N 之值。`,inputDescription:`第一行：輸入一個整數 N

程式輸出 1*2*3*4...*N 之值。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`4`,output:`24`,explanation:`第一行輸入數字4
程式輸出N 階段能量：1*2*3*4=24`},{input:`6`,output:`720`,explanation:`第一行輸入數字6
程式輸出N 階段能量：1*2*3*4*5*6=720`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10},{input:`9`,expectedOutput:`362880`,output:`362880`,score:10},{input:`7`,expectedOutput:`5040`,output:`5040`,score:10},{input:`3`,expectedOutput:`6`,output:`6`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`count-011`,title:`修復斷橋`,description:`勇者需要修復一座斷掉的橋。橋的每一段需要的木材數量等於該段的編號。
現在只需修復從編號M到編號N的這一段區間。
請計算修復這段區間總共需要多少木材？(即計算M+(M+1)+...+N的總和)。
輸入格式
第一行：輸入一個整數M
第二行：輸入一個整數N
程式輸出 M加到N 之值。`,inputDescription:`第一行：輸入一個整數M

第二行：輸入一個整數N

程式輸出 M加到N 之值。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
5`,output:`12`,explanation:`第一行輸入數字3
第二行輸入數字5
程式輸出3+4+5=12`},{input:`1
4`,output:`10`,explanation:`第一行輸入數字1
第二行輸入數字4
程式輸出1+2+3+4=10`}],testCases:[{input:`5
10`,expectedOutput:`45`,output:`45`,score:10},{input:`20
30`,expectedOutput:`275`,output:`275`,score:10},{input:`1
1`,expectedOutput:`1`,output:`1`,score:10},{input:`50
55`,expectedOutput:`315`,output:`315`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`count-014`,title:`戰利品清點`,description:`勇者打敗了一群史萊姆，每隻史萊姆身上掉落的金幣數量都不一樣。 助手已經把每隻史萊姆掉落的金幣數量記在清單上了。 請你幫勇者算算看，這次戰鬥總共獲得了多少金幣？
輸入格式
輸入共有兩行。第一行是一個整數 N，代表有幾筆金幣資料。
第二行輸入 N 個整數，代表每一筆金幣的金額。數字之間以空白隔開。
程式輸出清單中所有數字的總和。`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表有幾筆金幣資料。

第二行輸入 N 個整數，代表每一筆金幣的金額。數字之間以空白隔開。

程式輸出清單中所有數字的總和。`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
10 20 30`,output:`60`,explanation:`第一行輸入數字3，代表3筆金幣資料
第二行有3筆整數代表金幣數量輸入，10 20 30，中間以空白隔開
程式輸出金幣總和：60`},{input:`5
5 4 3 2 1`,output:`15`,explanation:`第一行輸入數字5，代表5筆金幣資料
第二行有3筆整數代表金幣數量輸入，5 4 3 2 1，中間以空白隔開
程式輸出金幣總和：15`}],testCases:[{input:`1
99`,expectedOutput:`99`,output:`99`,score:10},{input:`3
1 5 9`,expectedOutput:`15`,output:`15`,score:10},{input:`6
2 4 6 8 10 12`,expectedOutput:`42`,output:`42`,score:10},{input:`9
1 1 1 1 1 1 1 1 1`,expectedOutput:`9`,output:`9`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`count-015`,title:`尋找戰鬥力最高的魔王`,description:`偵查兵帶回了一份情報，上面記錄了前方 N 隻怪物的戰鬥力數值。
勇者想要先挑戰最強的那一隻！
請你找出這份清單中，數值最大的那個數字是多少。
輸入格式
輸入共有兩行。第一行是一個整數 N，代表怪物數量。
第二行輸入 N 個整數，代表每隻怪物的戰鬥力。數字之間以空白隔開。
程式輸出清單中的最大值。
(提示：設一個變數叫 Max，先假設第一隻是最大的，然後用迴圈跟後面的一一比對，如果發現比 Max 大的，就更新 Max)`,inputDescription:`輸入共有兩行。第一行是一個整數 N，代表怪物數量。

第二行輸入 N 個整數，代表每隻怪物的戰鬥力。數字之間以空白隔開。

程式輸出清單中的最大值。

(提示：設一個變數叫 Max，先假設第一隻是最大的，然後用迴圈跟後面的一一比對，如果發現比 Max 大的，就更新 Max)`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`3
10 20 30`,output:`30`,explanation:`第一行輸入數字3，代表3筆怪物資料
第二行有3筆整數怪物資料，10 20 30，中間以空白隔開
程式輸出怪物最大戰鬥力：30`},{input:`5
5 4 3 2 1`,output:`5`,explanation:`第一行輸入數字5，代表5筆怪物資料
第二行有3筆整數怪物資料，5 4 3 2 1，中間以空白隔開
程式輸出怪物最大戰鬥力：5`}],testCases:[{input:`1
99`,expectedOutput:`99`,output:`99`,score:10},{input:`6
7 7 7 7 9 7`,expectedOutput:`9`,output:`9`,score:10},{input:`4
33 22 44 11`,expectedOutput:`44`,output:`44`,score:10},{input:`5
25 45 95 12 55`,expectedOutput:`95`,output:`95`,score:10}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`count-012`,title:`登山冒險`,description:`這是一題大魔王關卡！勇者要爬一座高山，然後再下山。
這座山的高度是 N。勇者必須從 1 爬到 N，到達山頂後，再從 N-1 走回 1。
請依序列出勇者經過的高度。。
輸入格式
第一行：輸入一個整數N
程式輸出一個序列：1 2 3 ...N N-1 ...1。
序列數字以空白間隔`,inputDescription:`第一行：輸入一個整數N

程式輸出一個序列：1 2 3 ...N N-1 ...1。

序列數字以空白間隔`,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`5`,output:`1 2 3 4 5 4 3 2 1`,explanation:`第一行輸入數字5
程式輸出1 2 3 4 5 4 3 2 1`},{input:`4`,output:`1 2 3 4 3 2 1`,explanation:`第一行輸入數字4
程式輸出1 2 3 4 3 2 1`}],testCases:[{input:`10`,expectedOutput:`1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1`,output:`1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1`,score:10},{input:`8`,expectedOutput:`1 2 3 4 5 6 7 8 7 6 5 4 3 2 1`,output:`1 2 3 4 5 6 7 8 7 6 5 4 3 2 1`,score:10},{input:`5`,expectedOutput:`1 2 3 4 5 4 3 2 1`,output:`1 2 3 4 5 4 3 2 1`,score:10},{input:`2`,expectedOutput:`1 2 1`,output:`1 2 1`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``}]};export{e as default};