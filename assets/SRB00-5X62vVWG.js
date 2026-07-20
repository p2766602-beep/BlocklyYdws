import{t as e}from"./smartring-tasks-Bf051MQv.js";var t=(e,t)=>({...e,...t}),n=({index:e=1,color:t=`red`,r:n=30,g:r=0,b:i=0,message:a=`SmartRing 基礎任務`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_set_led_rgb" x="40" y="40">
    <value name="INDEX"><shadow type="math_number"><field name="NUM">${e}</field></shadow></value>
    <value name="R"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
    <value name="G"><shadow type="math_number"><field name="NUM">${r}</field></shadow></value>
    <value name="B"><shadow type="math_number"><field name="NUM">${i}</field></shadow></value>
    <next>
      <block type="text_print">
        <value name="TEXT"><block type="text"><field name="TEXT">${a}：第 ${e} 顆 LED 顯示 ${t}</field></block></value>
      </block>
    </next>
  </block>
</xml>`,r=({color:e=`blue`,message:t=`全部 LED 顏色控制`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_set_all_leds" x="40" y="40">
    <field name="COLOR">${e}</field>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">500</field></shadow></value>
        <next>
          <block type="smartring_clear_leds">
            <next>
              <block type="text_print">
                <value name="TEXT"><block type="text"><field name="TEXT">${t}：先全亮，再清除。</field></block></value>
              </block>
            </next>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,i=({button:e=1,index:t=1,r:n=30,g:r=0,b:i=0,message:a=`按鈕控制 LED`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="controls_if" x="40" y="40">
    <value name="IF0">
      <block type="smartring_button_pressed"><field name="BUTTON">${e}</field></block>
    </value>
    <statement name="DO0">
      <block type="smartring_set_led_rgb">
        <value name="INDEX"><shadow type="math_number"><field name="NUM">${t}</field></shadow></value>
        <value name="R"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
        <value name="G"><shadow type="math_number"><field name="NUM">${r}</field></shadow></value>
        <value name="B"><shadow type="math_number"><field name="NUM">${i}</field></shadow></value>
        <next>
          <block type="text_print">
            <value name="TEXT"><block type="text"><field name="TEXT">${a}</field></block></value>
          </block>
        </next>
      </block>
    </statement>
  </block>
</xml>`,a=e[`SR-B01`],o={id:`SRB00`,title:`SmartRing 基礎互動任務`,mode:`learning`,type:`smartring`,description:`完成 SmartRingController 連線、LED 顯示與按鈕互動的基本任務。`,level:`國小高年級 / 國中初階`,defaultTaskId:`SRB00-01`,tasks:[t(a,{id:`SRB00-01`,title:`SmartRing 連線檢查`,taskDescription:`請檢查 SmartRingController 是否已成功連線，並在畫面輸出連線狀態。`,passConditions:[`按下「連線 SmartRing」後，平台顯示已連線。`,`執行程式時，可以判斷「SmartRing 已連線？」。`,`連線成功時，輸出明確的提示文字。`],hints:[`先使用「SmartRing 已連線？」積木做判斷。`,`可以搭配「如果……那麼」積木顯示不同訊息。`,`若沒有反應，先確認瀏覽器是否允許 WebSerial 連線。`],challenges:[`連線成功時，讓第 1 顆 LED 閃一下。`,`未連線時，輸出「請先連線 SmartRing」。`],starterXml:`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="controls_if" x="40" y="40">
    <value name="IF0"><block type="smartring_is_connected"></block></value>
    <statement name="DO0">
      <block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">SmartRing 已連線，可以開始任務。</field></block></value></block>
    </statement>
  </block>
</xml>`,starterMessage:`已載入 SRB00-01：SmartRing 連線檢查。`}),t(a,{id:`SRB00-02`,title:`單顆 LED RGB 控制`,taskDescription:`請指定一顆 LED，設定紅、綠、藍三個亮度值，觀察 LED 顏色變化。`,passConditions:[`可以指定 LED 編號 1～12。`,`可以設定 RGB 數值，讓指定 LED 顯示顏色。`,`至少成功做出一顆紅色 LED。`],hints:[`LED 編號從 1 開始，不是從 0 開始。`,`RGB 亮度建議使用 0～30。`,`紅色可先設定 R=30、G=0、B=0。`],challenges:[`讓第 1、2、3 顆分別顯示紅、綠、藍。`,`嘗試調整 RGB 數值，做出自己喜歡的顏色。`],starterXml:n({index:1,color:`紅色`,r:30,g:0,b:0,message:`單顆 LED RGB 控制`}),starterMessage:`已載入 SRB00-02：單顆 LED RGB 控制。`}),t(a,{id:`SRB00-03`,title:`全部 LED 顏色控制`,taskDescription:`請讓 12 顆 LED 同時顯示同一種顏色，再把 LED 全部清除。`,passConditions:[`全部 LED 能同時亮起同一種顏色。`,`等待一段時間後，可以清除全部 LED。`,`可以修改顏色或等待時間。`],hints:[`先使用「設定全部顏色」類型的積木。`,`使用等待積木可以讓顏色停留一段時間。`,`最後使用清除 LED 積木讓燈熄滅。`],challenges:[`做出紅、黃、綠三段顏色變化。`,`設計一個開始提示燈效果。`],starterXml:r({color:`blue`,message:`全部 LED 顏色控制`}),starterMessage:`已載入 SRB00-03：全部 LED 顏色控制。`}),t(a,{id:`SRB00-04`,title:`按鈕控制 LED`,taskDescription:`請使用 SmartRingController 的按鈕控制 LED，讓按下按鈕時出現指定燈光效果。`,passConditions:[`程式能偵測至少一個按鈕是否被按下。`,`按下按鈕時，LED 會出現明確變化。`,`沒有按下按鈕時，程式不會出現錯誤。`],hints:[`可以使用「按鈕是否按下？」積木。`,`把按鈕判斷放進「如果……那麼」。`,`先完成一個按鈕，再增加其他按鈕。`],challenges:[`讓不同按鈕控制不同 LED。`,`加入一個按鈕用來清除全部 LED。`],starterXml:i({button:1,index:1,r:30,g:0,b:0,message:`BTN1 被按下，LED 變紅。`}),starterMessage:`已載入 SRB00-04：按鈕控制 LED。`}),t(a,{id:`SRB00-05`,title:`按鈕觸發顏色變化`,taskDescription:`請讓不同按鈕觸發不同顏色，做出一個按鍵燈光控制器。`,passConditions:[`至少有兩個按鈕能觸發不同顏色。`,`每個按鈕對應的顏色要能清楚分辨。`,`程式可以重複執行與測試。`],hints:[`每一個按鈕可以用一個「如果」來判斷。`,`先規劃按鈕與顏色的對應表。`,`如果燈光沒有改變，檢查是否有正確設定 LED 顏色。`],challenges:[`設計 BTN1 紅、BTN2 綠、BTN3 藍、BTN4 清除。`,`讓按鈕觸發全部 LED 變色，而不是只改單顆 LED。`],starterXml:i({button:1,index:1,r:30,g:0,b:0,message:`BTN1 被按下，LED 變紅。`}),starterMessage:`已載入 SRB00-05：按鈕觸發顏色變化。`})]};export{o as SRB00};