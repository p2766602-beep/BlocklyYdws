export default {
  "code": "GREEDY01",
  "title": "貪心與最佳化基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "greedy_optimization_training",
  "bankPoolLabel": "貪心與最佳化入門",
  "tasks": [
    {
      "id": "GREEDY01-001",
      "title": "最少硬幣數",
      "description": "商店使用 50 元、10 元、5 元與 1 元硬幣找零。給定找零金額，請用最少硬幣數完成找零。",
      "input": "輸入一個整數 N，代表找零金額。",
      "output": "輸出一個整數，代表最少硬幣數。",
      "examples": [
        {
          "input": "87",
          "output": "7",
          "explanation": "87 = 50×1 + 10×3 + 5×1 + 1×2，共 7 枚硬幣。"
        }
      ],
      "testCases": [
        {
          "input": "87",
          "output": "7"
        },
        {
          "input": "0",
          "output": "0"
        },
        {
          "input": "99",
          "output": "10"
        },
        {
          "input": "125",
          "output": "4"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable><variable id="var_c50">50元枚數</variable><variable id="var_r1">餘額1</variable><variable id="var_c10">10元枚數</variable><variable id="var_r2">餘額2</variable><variable id="var_c5">5元枚數</variable><variable id="var_c1">1元枚數</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
  <field name="VAR" id="var_n">N</field>
  <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入找零金額</field></shadow></value></block></value>
  <next><block type="variables_set"><field name="VAR" id="var_c50">50元枚數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">50</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_r1">餘額1</field><value name="VALUE"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">50</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_c10">10元枚數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_r1">餘額1</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_r2">餘額2</field><value name="VALUE"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_r1">餘額1</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">10</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_c5">5元枚數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_r2">餘額2</field></block></value><value name="B"><block type="math_number"><field name="NUM">5</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_c1">1元枚數</field><value name="VALUE"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_r2">餘額2</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">5</field></block></value></block></value><next><block type="text_print"><value name="TEXT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c50">50元枚數</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_c10">10元枚數</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_c5">5元枚數</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_c1">1元枚數</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
</block>
</xml>`
    },
    {
      "id": "GREEDY01-002",
      "title": "最多可買幾瓶水",
      "description": "每瓶水價格相同。給定身上的錢與每瓶水的價格，請計算最多可以買幾瓶水，以及剩下多少錢。",
      "input": "輸入兩個整數 M 與 P，分別代表身上的錢與每瓶水的價格。",
      "output": "輸出兩個整數，依序為最多可買瓶數與剩餘金額，中間以空白分隔。",
      "examples": [
        {
          "input": "100 18",
          "output": "5 10",
          "explanation": "100 元最多可買 5 瓶，剩下 10 元。"
        }
      ],
      "testCases": [
        {
          "input": "100 18",
          "output": "5 10"
        },
        {
          "input": "50 10",
          "output": "5 0"
        },
        {
          "input": "7 20",
          "output": "0 7"
        },
        {
          "input": "123 11",
          "output": "11 2"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_bottles">瓶數</variable><variable id="var_rem">剩餘金額</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入M P，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_bottles">瓶數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_rem">剩餘金額</field><value name="VALUE"><block type="math_modulo"><value name="DIVIDEND"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="DIVISOR"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_bottles">瓶數</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_rem">剩餘金額</field></block></value></block></value></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GREEDY01-003",
      "title": "優先完成短任務",
      "description": "給定 N 個任務所需時間與可用時間 T。若每次都先做時間最短的任務，請計算最多能完成幾個任務。",
      "input": "第一個整數為 N，第二個整數為 T，接著輸入 N 個整數代表每個任務所需時間。",
      "output": "輸出一個整數，代表最多可完成任務數。",
      "examples": [
        {
          "input": "5 10 4 2 8 1 3",
          "output": "3",
          "explanation": "依時間排序為 1、2、3、4、8，可完成 1+2+3+4=10，共 4 個任務。"
        }
      ],
      "testCases": [
        {
          "input": "5 10 4 2 8 1 3",
          "output": "4"
        },
        {
          "input": "3 5 6 7 8",
          "output": "0"
        },
        {
          "input": "4 10 5 5 5 5",
          "output": "2"
        },
        {
          "input": "6 12 1 2 3 4 5 6",
          "output": "4"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "排序演算法",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_t">T</variable><variable id="var_sorted">排序清單</variable><variable id="var_total">累計時間</variable><variable id="var_count">完成數</variable><variable id="var_i">i</variable><variable id="var_si">si</variable><variable id="var_sj">sj</variable><variable id="var_smi">smi</variable><variable id="var_stmp">stmp</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N T及N個任務時間，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_t">T</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_sorted">排序清單</field><value name="VALUE"><block type="lists_getSublist"><mutation at1="true" at2="true"></mutation><field name="WHERE1">FROM_START</field><field name="WHERE2">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT1"><block type="math_number"><field name="NUM">3</field></block></value><value name="AT2"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_si">si</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><next><block type="controls_for"><field name="VAR" id="var_sj">sj</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_stmp">stmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_stmp">stmp</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_total">累計時間</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_count">完成數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">累計時間</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_t">T</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_total">累計時間</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">累計時間</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_count">完成數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">完成數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">完成數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GREEDY01-004",
      "title": "買最多便宜商品",
      "description": "給定 N 個商品價格與預算 B。若想買到最多商品，應優先購買便宜商品。請計算最多可買幾件商品。",
      "input": "第一個整數為 N，第二個整數為 B，接著輸入 N 個整數代表商品價格。",
      "output": "輸出一個整數，代表最多可買商品數。",
      "examples": [
        {
          "input": "5 100 60 20 30 80 10",
          "output": "3",
          "explanation": "先買 10、20、30，共 60 元，可買 3 件；再買 60 會超過 100。"
        }
      ],
      "testCases": [
        {
          "input": "5 100 60 20 30 80 10",
          "output": "3"
        },
        {
          "input": "4 50 10 10 10 10",
          "output": "4"
        },
        {
          "input": "3 5 6 7 8",
          "output": "0"
        },
        {
          "input": "6 25 9 8 7 6 5 4",
          "output": "4"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "排序演算法",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_b">B</variable><variable id="var_sorted">排序清單</variable><variable id="var_total">累計花費</variable><variable id="var_count">購買數</variable><variable id="var_i">i</variable><variable id="var_si">si</variable><variable id="var_sj">sj</variable><variable id="var_smi">smi</variable><variable id="var_stmp">stmp</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N B及N個商品價格，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_b">B</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_sorted">排序清單</field><value name="VALUE"><block type="lists_getSublist"><mutation at1="true" at2="true"></mutation><field name="WHERE1">FROM_START</field><field name="WHERE2">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT1"><block type="math_number"><field name="NUM">3</field></block></value><value name="AT2"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_si">si</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><next><block type="controls_for"><field name="VAR" id="var_sj">sj</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_stmp">stmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_stmp">stmp</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_total">累計花費</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_count">購買數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">累計花費</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_total">累計花費</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">累計花費</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_count">購買數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">購買數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">購買數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GREEDY01-005",
      "title": "最大總分選擇",
      "description": "給定 N 個任務分數，請選出分數最高的 K 個任務，計算總分。",
      "input": "第一個整數為 N，第二個整數為 K，接著輸入 N 個整數代表任務分數。保證 1 <= K <= N。",
      "output": "輸出一個整數，代表最高 K 個分數的總和。",
      "examples": [
        {
          "input": "5 3 10 50 20 40 30",
          "output": "120",
          "explanation": "最高的 3 個分數是 50、40、30，總和為 120。"
        }
      ],
      "testCases": [
        {
          "input": "5 3 10 50 20 40 30",
          "output": "120"
        },
        {
          "input": "4 2 1 2 3 4",
          "output": "7"
        },
        {
          "input": "3 3 5 5 5",
          "output": "15"
        },
        {
          "input": "6 1 9 8 7 6 5 4",
          "output": "9"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "排序演算法",
        "資料統計"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_k">K</variable><variable id="var_sorted">排序清單</variable><variable id="var_sum">總分</variable><variable id="var_i">i</variable><variable id="var_si">si</variable><variable id="var_sj">sj</variable><variable id="var_smi">smi</variable><variable id="var_stmp">stmp</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N K及N個任務分數，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_k">K</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_sorted">排序清單</field><value name="VALUE"><block type="lists_getSublist"><mutation at1="true" at2="true"></mutation><field name="WHERE1">FROM_START</field><field name="WHERE2">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT1"><block type="math_number"><field name="NUM">3</field></block></value><value name="AT2"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_si">si</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><next><block type="controls_for"><field name="VAR" id="var_sj">sj</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_stmp">stmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_stmp">stmp</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_sum">總分</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_k">K</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_sum">總分</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總分</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_sum">總分</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GREEDY01-006",
      "title": "最少箱子數",
      "description": "每個箱子最多可裝 C 件物品。給定物品總數 N，請計算至少需要幾個箱子。",
      "input": "輸入兩個整數 N 與 C，分別代表物品總數與每箱容量。",
      "output": "輸出一個整數，代表至少需要的箱子數。",
      "examples": [
        {
          "input": "23 5",
          "output": "5",
          "explanation": "前 4 箱裝 20 件，剩下 3 件還需要 1 箱，所以共 5 箱。"
        }
      ],
      "testCases": [
        {
          "input": "23 5",
          "output": "5"
        },
        {
          "input": "20 5",
          "output": "4"
        },
        {
          "input": "1 10",
          "output": "1"
        },
        {
          "input": "100 30",
          "output": "4"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_boxes">箱數</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N C，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_boxes">箱數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDUP</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></value><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_boxes">箱數</field></block></value></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GREEDY01-007",
      "title": "補到目標分數",
      "description": "目前分數為 S，每次完成一題可增加 P 分。請計算至少還要完成幾題，才能達到或超過目標分數 T。",
      "input": "輸入三個整數 S、T、P，分別代表目前分數、目標分數與每題增加分數。",
      "output": "輸出一個整數，代表至少還要完成幾題。若目前已達標，輸出 0。",
      "examples": [
        {
          "input": "65 100 12",
          "output": "3",
          "explanation": "65+12+12+12=101，至少需要 3 題。"
        }
      ],
      "testCases": [
        {
          "input": "65 100 12",
          "output": "3"
        },
        {
          "input": "100 100 10",
          "output": "0"
        },
        {
          "input": "0 1 5",
          "output": "1"
        },
        {
          "input": "40 90 20",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "變數與運算",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_ans">答案</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入S T P，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_ans">答案</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_ans">答案</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDUP</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></value></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_ans">答案</field></block></value></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GREEDY01-008",
      "title": "最多裝入背包",
      "description": "背包容量為 W，給定 N 個物品重量。若想裝入最多物品，應優先選擇重量較輕的物品。請計算最多可裝入幾個物品。",
      "input": "第一個整數為 N，第二個整數為 W，接著輸入 N 個整數代表物品重量。",
      "output": "輸出一個整數，代表最多可裝入物品數。",
      "examples": [
        {
          "input": "5 15 9 2 6 4 8",
          "output": "3",
          "explanation": "先選 2、4、6，總重 12，可裝 3 個；再選 8 會超過 15。"
        }
      ],
      "testCases": [
        {
          "input": "5 15 9 2 6 4 8",
          "output": "3"
        },
        {
          "input": "4 10 1 2 3 4",
          "output": "4"
        },
        {
          "input": "3 5 6 7 8",
          "output": "0"
        },
        {
          "input": "6 20 5 5 5 5 5 5",
          "output": "4"
        }
      ],
      "knowledgePoints": [
        "貪心與最佳化",
        "排序演算法",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_w">W</variable><variable id="var_sorted">排序清單</variable><variable id="var_total">累計重量</variable><variable id="var_count">裝入數</variable><variable id="var_i">i</variable><variable id="var_si">si</variable><variable id="var_sj">sj</variable><variable id="var_smi">smi</variable><variable id="var_stmp">stmp</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N W及N個物品重量，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_w">W</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_sorted">排序清單</field><value name="VALUE"><block type="lists_getSublist"><mutation at1="true" at2="true"></mutation><field name="WHERE1">FROM_START</field><field name="WHERE2">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT1"><block type="math_number"><field name="NUM">3</field></block></value><value name="AT2"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_si">si</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><next><block type="controls_for"><field name="VAR" id="var_sj">sj</field><value name="FROM"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_smi">smi</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sj">sj</field></block></value></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_stmp">stmp</field><value name="VALUE"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_si">si</field></block></value><value name="TO"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value></block></value><next><block type="lists_setIndex"><mutation at="true"></mutation><field name="MODE">SET</field><field name="WHERE">FROM_START</field><value name="LIST"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_smi">smi</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_stmp">stmp</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_total">累計重量</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="variables_set"><field name="VAR" id="var_count">裝入數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LTE</field><value name="A"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">累計重量</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_w">W</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_total">累計重量</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">累計重量</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_sorted">排序清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_count">裝入數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">裝入數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">裝入數</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    }
  ]
};
