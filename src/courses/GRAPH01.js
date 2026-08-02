export default {
  "code": "GRAPH01",
  "title": "圖論與網路基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "graph_network_training",
  "bankPoolLabel": "圖論與網路入門",
  "tasks": [
    {
      "id": "GRAPH01-001",
      "title": "網路連線數",
      "description": "一個網路中有 N 個設備與 M 條連線。請輸出連線數 M。",
      "input": "第一個整數為 N，第二個整數為 M，接著有 M 組整數 A B，代表設備 A 與設備 B 有一條連線。",
      "output": "輸出一個整數，代表連線數。",
      "examples": [
        {
          "input": "4 3 1 2 2 3 3 4",
          "output": "3",
          "explanation": "輸入中有 3 條連線。"
        }
      ],
      "testCases": [
        {
          "input": "4 3 1 2 2 3 3 4",
          "output": "3"
        },
        {
          "input": "5 0",
          "output": "0"
        },
        {
          "input": "3 2 1 2 1 3",
          "output": "2"
        },
        {
          "input": "6 5 1 2 2 3 3 4 4 5 5 6",
          "output": "5"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "輸入輸出"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M及M組連線(A B)，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="text_print"><value name="TEXT"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-002",
      "title": "指定設備連線數",
      "description": "一個網路中有 N 個設備與 M 條連線。給定目標設備 X，請計算 X 連到幾個設備。",
      "input": "第一個整數為 N，第二個整數為 M，第三個整數為 X，接著有 M 組整數 A B，代表設備 A 與設備 B 有一條連線。",
      "output": "輸出一個整數，代表設備 X 的連線數。",
      "examples": [
        {
          "input": "4 3 2 1 2 2 3 3 4",
          "output": "2",
          "explanation": "設備 2 與設備 1、3 相連，所以連線數為 2。"
        }
      ],
      "testCases": [
        {
          "input": "4 3 2 1 2 2 3 3 4",
          "output": "2"
        },
        {
          "input": "5 2 5 1 2 2 3",
          "output": "0"
        },
        {
          "input": "4 3 1 1 2 1 3 1 4",
          "output": "3"
        },
        {
          "input": "6 5 4 1 4 2 4 3 4 4 5 4 6",
          "output": "5"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "資料統計",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_m">M</variable><variable id="var_x">X</variable><variable id="var_count">連線數</variable><variable id="var_k">k</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M X及M組連線(A B)，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_x">X</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_count">連線數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_count">連線數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">連線數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">連線數</field></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-003",
      "title": "是否直接相連",
      "description": "一個網路中有 N 個設備與 M 條連線。給定兩個設備 X 與 Y，請判斷它們是否有直接連線。",
      "input": "第一個整數為 N，第二個整數為 M，第三與第四個整數為 X 與 Y，接著有 M 組整數 A B，代表設備 A 與設備 B 有一條連線。",
      "output": "若 X 與 Y 直接相連，輸出 YES；否則輸出 NO。",
      "examples": [
        {
          "input": "4 3 1 3 1 2 2 3 3 4",
          "output": "NO",
          "explanation": "1 和 3 沒有直接連線。"
        }
      ],
      "testCases": [
        {
          "input": "4 3 1 3 1 2 2 3 3 4",
          "output": "NO"
        },
        {
          "input": "4 3 2 3 1 2 2 3 3 4",
          "output": "YES"
        },
        {
          "input": "3 1 1 2 2 3",
          "output": "NO"
        },
        {
          "input": "5 4 5 4 1 2 2 3 3 4 4 5",
          "output": "YES"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "條件判斷",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_m">M</variable><variable id="var_x">X</variable><variable id="var_y">Y</variable><variable id="var_found">結果</variable><variable id="var_k">k</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M X Y及M組連線(A B)，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_x">X</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_y">Y</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">4</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_found">結果</field><value name="VALUE"><block type="text"><field name="TEXT">NO</field></block></value><next><block type="controls_for"><field name="VAR" id="var_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_y">Y</field></block></value></block></value></block></value><value name="B"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_y">Y</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_found">結果</field><value name="VALUE"><block type="text"><field name="TEXT">YES</field></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_found">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-004",
      "title": "找連線最多的設備",
      "description": "一個網路中有 N 個設備與 M 條連線。請找出連線數最多的設備。若有多個設備並列，輸出編號最小者。",
      "input": "第一個整數為 N，第二個整數為 M，接著有 M 組整數 A B，代表設備 A 與設備 B 有一條連線。",
      "output": "輸出兩個整數，依序為設備編號與連線數，中間以空白分隔。",
      "examples": [
        {
          "input": "4 4 1 2 2 3 2 4 3 4",
          "output": "2 3",
          "explanation": "設備 2 連到 1、3、4，共 3 條，是最多的。"
        }
      ],
      "testCases": [
        {
          "input": "4 4 1 2 2 3 2 4 3 4",
          "output": "2 3"
        },
        {
          "input": "3 0",
          "output": "1 0"
        },
        {
          "input": "5 4 1 2 1 3 4 5 2 3",
          "output": "1 2"
        },
        {
          "input": "4 3 1 2 2 3 3 4",
          "output": "2 2"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "最大最小值",
        "資料統計"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_m">M</variable><variable id="var_d">d</variable><variable id="var_k">k</variable><variable id="var_dcount">d連線數</variable><variable id="var_best">最佳連線數</variable><variable id="var_bestdev">最佳設備</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M及M組連線(A B)，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_best">最佳連線數</field><value name="VALUE"><block type="math_number"><field name="NUM">-1</field></block></value><next><block type="variables_set"><field name="VAR" id="var_bestdev">最佳設備</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_for"><field name="VAR" id="var_d">d</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_dcount">d連線數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_d">d</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_d">d</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_dcount">d連線數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_dcount">d連線數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_dcount">d連線數</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_best">最佳連線數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_best">最佳連線數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_dcount">d連線數</field></block></value><next><block type="variables_set"><field name="VAR" id="var_bestdev">最佳設備</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_d">d</field></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_bestdev">最佳設備</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_best">最佳連線數</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-005",
      "title": "孤立設備數量",
      "description": "一個網路中，如果某個設備沒有任何連線，稱為孤立設備。給定網路連線資料，請計算孤立設備數量。",
      "input": "第一個整數為 N，第二個整數為 M，接著有 M 組整數 A B，代表設備 A 與設備 B 有一條連線。",
      "output": "輸出一個整數，代表孤立設備數量。",
      "examples": [
        {
          "input": "5 2 1 2 2 3",
          "output": "2",
          "explanation": "設備 4、5 沒有任何連線，所以有 2 個孤立設備。"
        }
      ],
      "testCases": [
        {
          "input": "5 2 1 2 2 3",
          "output": "2"
        },
        {
          "input": "4 3 1 2 2 3 3 4",
          "output": "0"
        },
        {
          "input": "3 0",
          "output": "3"
        },
        {
          "input": "6 2 1 6 2 5",
          "output": "2"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "資料統計",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_m">M</variable><variable id="var_d">d</variable><variable id="var_k">k</variable><variable id="var_dcount">d連線數</variable><variable id="var_isolated">孤立數量</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M及M組連線(A B)，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_isolated">孤立數量</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_d">d</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_dcount">d連線數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_d">d</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_d">d</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_dcount">d連線數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_dcount">d連線數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_dcount">d連線數</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_isolated">孤立數量</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_isolated">孤立數量</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_isolated">孤立數量</field></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-006",
      "title": "兩段路可到達",
      "description": "一個網路中，若 X 可以先到某個中繼設備，再到 Y，代表 X 和 Y 可以用兩段路到達。請判斷是否存在這樣的中繼設備。若 X 與 Y 直接相連，不算兩段路。",
      "input": "第一個整數為 N，第二個整數為 M，第三與第四個整數為 X 與 Y，接著有 M 組整數 A B，代表設備 A 與設備 B 有一條連線。",
      "output": "若存在一個中繼設備讓 X 可用兩段路到 Y，輸出 YES；否則輸出 NO。",
      "examples": [
        {
          "input": "4 3 1 3 1 2 2 3 3 4",
          "output": "YES",
          "explanation": "1 可以經由 2 到達 3。"
        }
      ],
      "testCases": [
        {
          "input": "4 3 1 3 1 2 2 3 3 4",
          "output": "YES"
        },
        {
          "input": "4 2 1 4 1 2 3 4",
          "output": "NO"
        },
        {
          "input": "5 4 1 5 1 2 2 5 1 3 3 5",
          "output": "YES"
        },
        {
          "input": "3 1 1 3 1 2",
          "output": "NO"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_m">M</variable><variable id="var_x">X</variable><variable id="var_y">Y</variable><variable id="var_z">z</variable><variable id="var_k">k</variable><variable id="var_conn1">conn1</variable><variable id="var_conn2">conn2</variable><variable id="var_found">結果</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M X Y及M組連線(A B)，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_x">X</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_y">Y</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">4</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_found">結果</field><value name="VALUE"><block type="text"><field name="TEXT">NO</field></block></value><next><block type="controls_for"><field name="VAR" id="var_z">z</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_z">z</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_z">z</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_y">Y</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_conn1">conn1</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_z">z</field></block></value></block></value></block></value><value name="B"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_z">z</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_x">X</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_conn1">conn1</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value></block></statement></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_conn2">conn2</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_k">k</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">OR</field><value name="A"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_z">z</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_y">Y</field></block></value></block></value></block></value><value name="B"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_y">Y</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_number"><field name="NUM">2</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">k</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">4</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_z">z</field></block></value></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_conn2">conn2</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value></block></statement></block></statement></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="variables_get"><field name="VAR" id="var_conn1">conn1</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_conn2">conn2</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_found">結果</field><value name="VALUE"><block type="text"><field name="TEXT">YES</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_found">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-007",
      "title": "完整網路缺幾條線",
      "description": "若 N 個設備中，每兩個不同設備都直接相連，稱為完整網路。給定目前已有 M 條連線，請計算還缺幾條線才會變成完整網路。",
      "input": "輸入兩個整數 N 與 M，分別代表設備數與目前連線數。",
      "output": "輸出一個整數，代表還缺少的連線數。",
      "examples": [
        {
          "input": "4 3",
          "output": "3",
          "explanation": "4 個設備完整網路需要 6 條線，目前 3 條，所以還缺 3 條。"
        }
      ],
      "testCases": [
        {
          "input": "4 3",
          "output": "3"
        },
        {
          "input": "3 3",
          "output": "0"
        },
        {
          "input": "5 0",
          "output": "10"
        },
        {
          "input": "6 10",
          "output": "5"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "數學與數論",
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="text_print"><value name="TEXT"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "GRAPH01-008",
      "title": "網路狀態分類",
      "description": "一個網路中有 N 個設備與 M 條連線。若 M 為 0，輸出 EMPTY；若 M 等於完整網路需要的連線數，輸出 FULL；否則輸出 NORMAL。",
      "input": "輸入兩個整數 N 與 M，分別代表設備數與目前連線數。",
      "output": "依規則輸出 EMPTY、FULL 或 NORMAL。",
      "examples": [
        {
          "input": "4 6",
          "output": "FULL",
          "explanation": "4 個設備完整網路需要 6 條線，所以是 FULL。"
        }
      ],
      "testCases": [
        {
          "input": "4 6",
          "output": "FULL"
        },
        {
          "input": "5 0",
          "output": "EMPTY"
        },
        {
          "input": "4 3",
          "output": "NORMAL"
        },
        {
          "input": "2 1",
          "output": "FULL"
        }
      ],
      "knowledgePoints": [
        "圖論與網路",
        "條件判斷",
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_m">M</variable><variable id="var_full">完整連線數</variable><variable id="var_status">狀態</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N M，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_m">M</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_full">完整連線數</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_status">狀態</field><value name="VALUE"><block type="text"><field name="TEXT">EMPTY</field></block></value></block></statement><statement name="ELSE"><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_m">M</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_full">完整連線數</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_status">狀態</field><value name="VALUE"><block type="text"><field name="TEXT">FULL</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_status">狀態</field><value name="VALUE"><block type="text"><field name="TEXT">NORMAL</field></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_status">狀態</field></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    }
  ]
};
