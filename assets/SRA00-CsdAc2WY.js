import{t as e}from"./smartring-tasks-Bf051MQv.js";var t=(e,t)=>({...e,...t}),n=({pattern:e=`centerFour`,color:t=`blue`,message:n=`LED 圖樣陣列仿作`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_demo_pattern" x="40" y="40">
    <field name="PATTERN">${e}</field>
    <field name="COLOR">${t}</field>
    <next>
      <block type="smartring_wait_ms">
        <value name="MS"><shadow type="math_number"><field name="NUM">800</field></shadow></value>
        <next>
          <block type="text_print">
            <value name="TEXT"><block type="text"><field name="TEXT">${n}：先觀察 DEMO，再用暫存陣列仿作。</field></block></value>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`,r=({status:e=`progress`,value:t=6,max:n=12,color:r=`green`,message:i=`狀態顯示仿作`}={})=>`
<xml xmlns="https://developers.google.com/blockly/xml">
  <block type="smartring_demo_status_display" x="40" y="40">
    <field name="STATUS">${e}</field>
    <value name="VALUE"><shadow type="math_number"><field name="NUM">${t}</field></shadow></value>
    <value name="MAX"><shadow type="math_number"><field name="NUM">${n}</field></shadow></value>
    <field name="COLOR">${r}</field>
    <next>
      <block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">${i}</field></block></value></block>
    </next>
  </block>
</xml>`,i={id:`SRA00`,title:`SmartRing 陣列任務`,mode:`learning`,type:`smartring`,description:`用 LED 位置與暫存陣列完成圖樣、進度、分數與生命值顯示。`,level:`國中八年級`,defaultTaskId:`SRA00-01`,tasks:[t(e[`SR-A01`],{id:`SRA00-01`,title:`LED 圖樣陣列仿作`,taskDescription:`請先觀察內建圖樣，再用暫存陣列做出相同或相近的 LED 圖樣。`,passConditions:[`能觀察並說出圖樣亮起的位置。`,`能用暫存陣列設定多顆 LED。`,`能顯示自己仿作的 LED 圖樣。`],hints:[`先記下哪些 LED 編號亮起。`,`設定完暫存陣列後，記得顯示暫存陣列。`,`可以先仿作一個簡單圖樣，再增加變化。`],challenges:[`把圖樣換成不同顏色。`,`自己設計一個左右對稱圖樣。`],starterXml:n({pattern:`centerFour`,color:`blue`,message:`LED 圖樣陣列仿作`}),starterMessage:`已載入 SRA00-01：LED 圖樣陣列仿作。`}),t(e[`SR-A01`],{id:`SRA00-02`,title:`中間四顆圖樣`,taskDescription:`請讓 SmartRing 中間四顆 LED 亮起，做出集中在中間的圖樣。`,passConditions:[`LED 5、6、7、8 能亮起。`,`其他 LED 可以保持熄滅。`,`能修改顏色並重新顯示。`],hints:[`中間四顆是 LED 5～8。`,`可以逐一設定第 5、6、7、8 顆。`,`顯示前先清除暫存陣列，可以避免殘留舊圖樣。`],challenges:[`改做中間六顆。`,`讓中間四顆使用不同顏色。`],starterXml:n({pattern:`centerFour`,color:`blue`,message:`中間四顆圖樣`}),starterMessage:`已載入 SRA00-02：中間四顆圖樣。`}),t(e[`SR-A01`],{id:`SRA00-03`,title:`奇數燈與偶數燈`,taskDescription:`請做出奇數位置或偶數位置亮起的交錯 LED 圖樣。`,passConditions:[`能讓 LED 1、3、5、7、9、11 亮起，或讓 2、4、6、8、10、12 亮起。`,`圖樣位置要呈現交錯效果。`,`能切換奇數燈與偶數燈。`],hints:[`奇數位置每次加 2。`,`可以用迴圈，也可以先手動指定。`,`先完成奇數燈，再修改成偶數燈。`],challenges:[`讓奇數燈與偶數燈交替閃爍。`,`奇數燈用一種顏色，偶數燈用另一種顏色。`],starterXml:n({pattern:`odd`,color:`yellow`,message:`奇數燈與偶數燈`}),starterMessage:`已載入 SRA00-03：奇數燈與偶數燈。`}),t(e[`SR-A02`],{id:`SRA00-04`,title:`進度條顯示`,taskDescription:`請用 LED 顆數表示目前進度，讓進度越高時亮起越多 LED。`,passConditions:[`能設定目前值與最大值。`,`進度增加時，亮起的 LED 數量也會增加。`,`能做出至少 3 種不同進度。`],hints:[`先使用內建進度顯示觀察效果。`,`value 是目前值，max 是最大值。`,`可以用 3/12、6/12、12/12 測試。`],challenges:[`用按鈕控制進度增加或減少。`,`進度滿格時改用另一種顏色提醒。`],starterXml:r({status:`progress`,value:6,max:12,color:`green`,message:`進度條顯示：6 / 12`}),starterMessage:`已載入 SRA00-04：進度條顯示。`}),t(e[`SR-A02`],{id:`SRA00-05`,title:`分數顯示`,taskDescription:`請用 LED 顆數表示分數，讓分數越高時亮起越多 LED。`,passConditions:[`能設定分數與最高分。`,`分數不同時，LED 顯示顆數會改變。`,`能顯示 8/12 或其他指定分數。`],hints:[`先用 8/12 觀察 LED 顆數。`,`如果要顯示 0～100 分，可以先思考如何換算成 0～12 顆。`,`顏色可以用來表示分數狀態。`],challenges:[`把 0～100 分轉成 0～12 顆 LED。`,`高分顯示綠色，低分顯示紅色。`],starterXml:r({status:`score`,value:8,max:12,color:`yellow`,message:`分數顯示：8 / 12`}),starterMessage:`已載入 SRA00-05：分數顯示。`}),t(e[`SR-A02`],{id:`SRA00-06`,title:`生命值顯示`,taskDescription:`請用 LED 顆數表示生命值，生命值越高亮起越多 LED。`,passConditions:[`能設定生命值與最大生命值。`,`生命值下降時，亮起的 LED 數量會減少。`,`生命值低時能用明顯顏色提醒。`],hints:[`先用 life=3、max=5 測試。`,`生命值可以搭配遊戲角色血量或剩餘機會。`,`生命值歸零時可以清除全部 LED。`],challenges:[`生命值低於 2 時改成紅色警示。`,`用按鈕控制生命值減少。`],starterXml:r({status:`life`,value:3,max:5,color:`red`,message:`生命值顯示：3 / 5`}),starterMessage:`已載入 SRA00-06：生命值顯示。`})]};export{i as SRA00};