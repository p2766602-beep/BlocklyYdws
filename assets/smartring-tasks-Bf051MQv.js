var e={"SR-B01":{id:`SR-B01`,title:`SmartRing 基礎任務：按鈕控制燈光`,type:`SmartRing 互動任務`,level:`國小高年級 / 國中初階`,goal:`透過按鈕與 LED 燈光互動，理解條件判斷、輸入偵測與輸出控制。`,description:`本任務要求學生連接 SmartRingController，按下指定按鈕後，讓指定 LED 顯示指定 RGB 顏色。`,demoObserve:`觀察 SmartRing 按鈕被按下時，單顆 LED 如何被即時控制。`,practiceTask:`修改按鈕、LED 編號與 RGB 數值，完成不同按鈕對應不同顏色的互動效果。`,functionTask:`進階挑戰：整理成自己的 lightLed(index, r, g, b) 函式。`,challenge:`加入 while true 持續偵測按鈕，並使用「中止程式」按鈕停止互動程式。`,operation:`學生需要先連線 SmartRingController，再使用「SmartRing 按鈕被按下？」與「設定 SmartRing 第 N 顆 LED RGB」積木完成互動任務。`,blockLimit:`建議使用邏輯、迴圈、SmartRing 按鈕、等待與 SmartRing 基礎 LED 控制積木。`,smartRingRequirement:`需要使用 ESP8266 SmartRingController。按鈕輸入會控制 LED 輸出。`,scoring:`學習模式以觀察是否能正確觸發 LED 為主；競賽模式未來可檢查按鈕反應與 LED 狀態。`,hint:`若使用無限迴圈偵測按鈕，請保留等待 1 毫秒，並使用「中止程式」停止。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="controls_if" x="40" y="40">
    <value name="IF0">
      <block type="smartring_button_pressed">
        <field name="BUTTON">1</field>
      </block>
    </value>
    <statement name="DO0">
      <block type="smartring_set_led_rgb">
        <value name="INDEX"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
        <value name="R"><shadow type="math_number"><field name="NUM">30</field></shadow></value>
        <value name="G"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <value name="B"><shadow type="math_number"><field name="NUM">0</field></shadow></value>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
            <next>
              <block type="text_print">
                <value name="TEXT">
                  <block type="text"><field name="TEXT">BTN1/F 被按下，用 RGB 點亮第 1 顆 LED</field></block>
                </value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </statement>
  </block>

</xml>`,starterMessage:`已載入 SR-B01：按鈕控制 LED RGB 範例。`},"SR-A01":{id:`SR-A01`,title:`SmartRing 陣列任務：LED 圖樣陣列仿作`,type:`SmartRing 陣列任務`,level:`國中八年級`,goal:`透過 DEMO 觀察 LED 圖樣，再使用暫存陣列指定 LED 位置，理解陣列索引與資料顯示。`,description:`本任務先示範「中間四顆」圖樣，再要求學生不用 DEMO 積木，改用 LED 暫存陣列做出相同圖樣。`,demoObserve:`執行「示範圖樣：中間四顆藍色」，觀察哪些 LED 亮起。`,practiceTask:`使用「清除暫存陣列」「設定暫存陣列第 N 顆 LED 顏色」「顯示暫存陣列到 SmartRing」仿作相同圖樣。`,functionTask:`整理成 showCenterFour(color) 或 showPattern() 函式，讓圖樣可重複使用。`,challenge:`改做左半邊、右半邊、外側四顆或交錯燈圖樣。`,operation:`先執行 DEMO 觀察，再使用暫存陣列積木重做。DEMO 積木只作觀察，不作為任務解答。`,blockLimit:`仿作階段建議不要使用「示範圖樣」積木，改用 LED 暫存陣列群組。`,smartRingRequirement:`SmartRing 需顯示與 DEMO 相同的 LED 位置與顏色。`,scoring:`未來評分可檢查是否使用暫存陣列，並比對 LED 位置是否正確。`,hint:`把 LED 1～12 想成陣列第 1～12 格；圖樣就是一組被設定的格子。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="smartring_demo_pattern" x="40" y="40">
    <field name="PATTERN">centerFour</field>
    <field name="COLOR">blue</field>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="smartring_clear_led_buffer">
            <next>
              <block type="smartring_set_buffer_led_color">
                <value name="INDEX"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
                <field name="COLOR">blue</field>
                <next>
                  <block type="smartring_set_buffer_led_color">
                    <value name="INDEX"><shadow type="math_number"><field name="NUM">6</field></shadow></value>
                    <field name="COLOR">blue</field>
                    <next>
                      <block type="smartring_set_buffer_led_color">
                        <value name="INDEX"><shadow type="math_number"><field name="NUM">7</field></shadow></value>
                        <field name="COLOR">blue</field>
                        <next>
                          <block type="smartring_set_buffer_led_color">
                            <value name="INDEX"><shadow type="math_number"><field name="NUM">8</field></shadow></value>
                            <field name="COLOR">blue</field>
                            <next>
                              <block type="smartring_show_led_buffer" />
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

</xml>`,starterMessage:`已載入 SR-A01：LED 圖樣觀察與陣列仿作範例。`},"SR-A02":{id:`SR-A02`,title:`SmartRing 陣列任務：狀態顯示與進度條仿作`,type:`SmartRing 陣列任務`,level:`國中八年級`,goal:`將數值轉換為 LED 顯示數量，理解變數、比例、迴圈與陣列資料產生。`,description:`本任務先示範進度條或分數顯示，再要求學生用變數與迴圈自行設定暫存陣列。`,demoObserve:`執行「示範狀態顯示：進度條 值 6 最大 12」，觀察 LED 1～6 亮起。`,practiceTask:`使用變數 value 與 for 迴圈，讓 LED 1～value 亮起，完成進度條。`,functionTask:`整理成 showProgress(value, maxValue, color) 函式，讓不同數值都能轉成 LED 顯示。`,challenge:`將 value/maxValue 換算成 12 顆 LED 的數量，例如分數 50/100 顯示 6 顆。`,operation:`先看 DEMO，再以暫存陣列、變數與迴圈實作。`,blockLimit:`仿作階段建議使用變數、迴圈、數學與 LED 暫存陣列積木。`,smartRingRequirement:`LED 顆數需能依 value 變化。`,scoring:`未來可用不同 value 測試 LED 顆數是否正確。`,hint:`先做 value=6、max=12，再挑戰 value=50、max=100。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="value">value</field>
    <value name="VALUE"><block type="math_number"><field name="NUM">6</field></block></value>
    <next>
      <block type="smartring_demo_status_display">
        <field name="STATUS">progress</field>
        <value name="VALUE"><block type="variables_get"><field name="VAR" id="value">value</field></block></value>
        <value name="MAX"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
        <field name="COLOR">green</field>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
            <next>
              <block type="smartring_clear_led_buffer">
                <next>
                  <block type="controls_for">
                    <field name="VAR" id="i">i</field>
                    <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                    <value name="TO"><block type="variables_get"><field name="VAR" id="value">value</field></block></value>
                    <value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                    <statement name="DO">
                      <block type="smartring_set_buffer_led_color">
                        <value name="INDEX"><block type="variables_get"><field name="VAR" id="i">i</field></block></value>
                        <field name="COLOR">green</field>
                      </block>
                    </statement>
                    <next>
                      <block type="smartring_show_led_buffer" />
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

</xml>`,starterMessage:`已載入 SR-A02：狀態顯示與進度條仿作範例。`},"SR-F01":{id:`SR-F01`,title:`SmartRing 函式任務：填滿動畫函式仿作`,type:`SmartRing 函式仿作任務`,level:`國中八年級 / 九年級`,goal:`從填滿動畫 DEMO 回推迴圈與暫存陣列流程，並整理成可重複使用的函式。`,description:`本任務先播放填滿動畫，再要求學生用 for 迴圈逐顆設定 LED，最後整理成自訂函式。`,demoObserve:`觀察 LED 如何從第 1 顆逐步亮到第 12 顆。`,practiceTask:`用 for 迴圈、暫存陣列、顯示暫存陣列與等待，仿作填滿動畫。`,functionTask:`建立 fillAnimation(color, speed) 函式，讓顏色與速度可以變成參數。`,challenge:`改成從 LED 12 填回 LED 1，或只填滿前 N 顆。`,operation:`先執行 DEMO，再完成仿作，最後用函式積木整理程式。`,blockLimit:`仿作階段建議不要使用「播放填滿動畫」積木。`,smartRingRequirement:`LED 應逐顆增加亮起，直到 12 顆全部亮起。`,scoring:`未來可檢查是否有迴圈、等待與暫存陣列顯示。`,hint:`每次迴圈設定一顆 LED，顯示，再等待。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="smartring_play_fill_animation" x="40" y="40">
    <field name="COLOR">yellow</field>
    <value name="SPEED"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="smartring_clear_led_buffer">
            <next>
              <block type="controls_for">
                <field name="VAR" id="i">i</field>
                <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                <value name="TO"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
                <value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
                <statement name="DO">
                  <block type="smartring_set_buffer_led_color">
                    <value name="INDEX"><block type="variables_get"><field name="VAR" id="i">i</field></block></value>
                    <field name="COLOR">yellow</field>
                    <next>
                      <block type="smartring_show_led_buffer">
                        <next>
                          <block type="smartring_wait_ms">
                            <value name="MS"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </statement>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 SR-F01：填滿動畫 DEMO 與仿作起始積木。`},"SR-F02":{id:`SR-F02`,title:`SmartRing 函式任務：跑馬燈函式仿作`,type:`SmartRing 函式仿作任務`,level:`國中八年級 / 九年級`,goal:`使用位置變數控制單顆 LED 移動，理解索引變化、清除、顯示與函式封裝。`,description:`本任務先播放跑馬燈 DEMO，再要求學生用位置變數與暫存陣列做出單顆 LED 移動。`,demoObserve:`觀察只有一顆 LED 亮起，並從 LED 1 移動到 LED 12。`,practiceTask:`每次迴圈先清除暫存陣列，再設定目前位置 LED，顯示後等待。`,functionTask:`建立 runningLight(color, speed) 函式，讓動畫可以重複呼叫。`,challenge:`加入方向參數，讓跑馬燈可由左到右或由右到左。`,operation:`先看 DEMO，再用暫存陣列仿作，最後整理成函式。`,blockLimit:`仿作階段建議不要使用「播放跑馬燈動畫」積木。`,smartRingRequirement:`同一時間只應有一顆 LED 亮起。`,scoring:`未來可檢查是否有清除暫存陣列、位置變數與等待。`,hint:`跑馬燈的關鍵是 position 變數。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="smartring_play_running_light_animation" x="40" y="40">
    <field name="COLOR">cyan</field>
    <value name="SPEED"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="controls_for">
            <field name="VAR" id="pos">pos</field>
            <value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <value name="TO"><shadow type="math_number"><field name="NUM">12</field></shadow></value>
            <value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <statement name="DO">
              <block type="smartring_clear_led_buffer">
                <next>
                  <block type="smartring_set_buffer_led_color">
                    <value name="INDEX"><block type="variables_get"><field name="VAR" id="pos">pos</field></block></value>
                    <field name="COLOR">cyan</field>
                    <next>
                      <block type="smartring_show_led_buffer">
                        <next>
                          <block type="smartring_wait_ms">
                            <value name="MS"><shadow type="math_number"><field name="NUM">100</field></shadow></value>
                          </block>
                        </next>
                      </block>
                    </next>
                  </block>
                </next>
              </block>
            </statement>
          </block>
        </next>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 SR-F02：跑馬燈 DEMO 與仿作起始積木。`},"SR-F03":{id:`SR-F03`,title:`SmartRing 函式任務：按鈕觸發動畫`,type:`SmartRing 互動函式任務`,level:`國中八年級 / 九年級`,goal:`使用按鈕偵測觸發動畫函式，理解無限迴圈、條件判斷、事件反應與程式中止。`,description:`本任務使用 while true 持續偵測 SmartRing 按鈕，按下指定按鈕時播放或呼叫自製動畫。`,demoObserve:`觀察按下 BTN1/F 時，動畫才會被觸發。`,practiceTask:`將內建動畫替換成自己用暫存陣列寫出的動畫流程。`,functionTask:`把自製動畫整理成函式，按下不同按鈕呼叫不同函式。`,challenge:`讓 BTN1 播放填滿、BTN2 播放跑馬燈、BTN3 清除 LED。`,operation:`執行後會進入無限偵測，請使用「中止程式」停止。`,blockLimit:`需要使用 while true、如果、SmartRing 按鈕、等待與函式。`,smartRingRequirement:`按鈕按下時應觸發指定 LED 動畫。`,scoring:`未來可檢查不同按鈕是否觸發不同動畫。`,hint:`無限迴圈中一定要加入等待 1 毫秒，避免瀏覽器卡住。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="text_print" x="40" y="20">
    <value name="TEXT">
      <block type="text"><field name="TEXT">提示：執行後可用「中止程式」停止無限偵測。</field></block>
    </value>
  </block>

  <block type="controls_whileUntil" x="40" y="120">
    <field name="MODE">WHILE</field>
    <value name="BOOL">
      <block type="logic_boolean"><field name="BOOL">TRUE</field></block>
    </value>
    <statement name="DO">
      <block type="controls_if">
        <value name="IF0">
          <block type="smartring_button_pressed">
            <field name="BUTTON">0</field>
          </block>
        </value>
        <statement name="DO0">
          <block type="smartring_play_running_light_animation">
            <field name="COLOR">red</field>
            <value name="SPEED"><shadow type="math_number"><field name="NUM">80</field></shadow></value>
          </block>
        </statement>
        <next>
          <block type="smartring_wait_ms">
            <value name="MS"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
          </block>
        </next>
      </block>
    </statement>
  </block>

</xml>`,starterMessage:`已載入 SR-F03：按鈕觸發動畫起始積木。`},"JS-B01":{id:`JS-B01`,title:`Blockly 解題任務：重複累加`,type:`程式解題任務`,level:`國中初階`,goal:`使用變數與迴圈完成累加，並輸出結果。`,description:`未來本任務會載入測資與標準答案，學生按下測試後由系統自動評分。`,demoObserve:`觀察變數 score 如何在迴圈中逐次增加。`,practiceTask:`修改重複次數與累加值，觀察輸出結果。`,functionTask:`進階挑戰：整理成 sumTo(n) 或 addScore(times) 函式。`,challenge:`改成累加 1 到 100，或只累加偶數。`,operation:`學生使用變數紀錄目前總和，透過迴圈重複累加，最後輸出結果。`,blockLimit:`建議使用變數、迴圈、數學與文字輸出積木。`,smartRingRequirement:`本題不需要連接 SmartRingController。`,scoring:`未來評分會比對程式輸出與標準答案，計算通過測資數。`,hint:`目前可先使用「載入範例」觀察變數、迴圈與輸出。`,starterXml:`<xml xmlns="https://developers.google.com/blockly/xml">

  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="score">score</field>
    <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
    <next>
      <block type="controls_repeat_ext">
        <value name="TIMES"><shadow type="math_number"><field name="NUM">5</field></shadow></value>
        <statement name="DO">
          <block type="math_change">
            <field name="VAR" id="score">score</field>
            <value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>
            <next>
              <block type="text_print">
                <value name="TEXT">
                  <block type="text_join">
                    <mutation items="2"></mutation>
                    <value name="ADD0"><block type="text"><field name="TEXT">目前分數：</field></block></value>
                    <value name="ADD1"><block type="variables_get"><field name="VAR" id="score">score</field></block></value>
                  </block>
                </value>
              </block>
            </next>
          </block>
        </statement>
      </block>
    </next>
  </block>

</xml>`,starterMessage:`已載入 JS-B01：重複累加範例。`}};export{e as t};