export default {
  "code": "EXT01",
  "title": "最大最小值基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "extreme_value_training",
  "bankPoolLabel": "最大最小值搜尋",
  "tasks": [
    {
      "id": "EXT01-001",
      "title": "找最大值",
      "description": "給定 N 個整數，請找出其中最大的數字。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表最大值。",
      "examples": [
        {
          "input": "5 8 3 12 7 10",
          "output": "12",
          "explanation": "5 個數字中最大的是 12。"
        }
      ],
      "testCases": [
        {
          "input": "5 8 3 12 7 10",
          "output": "12"
        },
        {
          "input": "4 1 1 1 1",
          "output": "1"
        },
        {
          "input": "6 -5 -2 -9 -1 -7 -3",
          "output": "-1"
        },
        {
          "input": "3 100 50 99",
          "output": "100"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_max">最大值</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-002",
      "title": "找最小值",
      "description": "給定 N 個整數，請找出其中最小的數字。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表最小值。",
      "examples": [
        {
          "input": "5 8 3 12 7 10",
          "output": "3",
          "explanation": "5 個數字中最小的是 3。"
        }
      ],
      "testCases": [
        {
          "input": "5 8 3 12 7 10",
          "output": "3"
        },
        {
          "input": "4 6 6 6 6",
          "output": "6"
        },
        {
          "input": "6 -5 -2 -9 -1 -7 -3",
          "output": "-9"
        },
        {
          "input": "3 100 50 99",
          "output": "50"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_min">最小值</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-003",
      "title": "最大最小差距",
      "description": "給定 N 個整數，請找出最大值與最小值，並計算兩者差距。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出三個整數，依序為最大值、最小值、差距，中間以空白分隔。",
      "examples": [
        {
          "input": "5 8 3 12 7 10",
          "output": "12 3 9",
          "explanation": "最大值 12，最小值 3，差距為 9。"
        }
      ],
      "testCases": [
        {
          "input": "5 8 3 12 7 10",
          "output": "12 3 9"
        },
        {
          "input": "4 6 6 6 6",
          "output": "6 6 0"
        },
        {
          "input": "6 -5 -2 -9 -1 -7 -3",
          "output": "-1 -9 8"
        },
        {
          "input": "3 100 50 99",
          "output": "100 50 50"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "清單處理",
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_max">最大值</variable><variable id="var_min">最小值</variable><variable id="var_diff">差距</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement></block></next></block></statement><next><block type="variables_set"><field name="VAR" id="var_diff">差距</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></value><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="var_diff">差距</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-004",
      "title": "最高分的位置",
      "description": "給定 N 位學生的成績，請找出最高分第一次出現的位置。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數代表成績。",
      "output": "輸出兩個整數，依序為最高分與最高分第一次出現的位置，中間以空白分隔。",
      "examples": [
        {
          "input": "6 70 95 80 95 60 88",
          "output": "95 2",
          "explanation": "最高分是 95，第一次出現在第 2 個位置。"
        }
      ],
      "testCases": [
        {
          "input": "6 70 95 80 95 60 88",
          "output": "95 2"
        },
        {
          "input": "4 100 90 80 70",
          "output": "100 1"
        },
        {
          "input": "5 50 60 70 80 90",
          "output": "90 5"
        },
        {
          "input": "3 88 88 88",
          "output": "88 1"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "索引與位置",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_max">最大值</variable><variable id="var_pos">位置</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個成績，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_pos">位置</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_pos">位置</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_pos">位置</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-005",
      "title": "最低溫的位置",
      "description": "給定 N 天的溫度，請找出最低溫第一次出現的位置。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數代表溫度。",
      "output": "輸出兩個整數，依序為最低溫與最低溫第一次出現的位置，中間以空白分隔。",
      "examples": [
        {
          "input": "5 22 18 20 18 25",
          "output": "18 2",
          "explanation": "最低溫是 18，第一次出現在第 2 天。"
        }
      ],
      "testCases": [
        {
          "input": "5 22 18 20 18 25",
          "output": "18 2"
        },
        {
          "input": "4 5 4 3 2",
          "output": "2 4"
        },
        {
          "input": "6 -1 -3 -2 -3 0 1",
          "output": "-3 2"
        },
        {
          "input": "3 10 10 10",
          "output": "10 1"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "索引與位置",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_min">最小值</variable><variable id="var_pos">位置</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個溫度，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_pos">位置</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_min">最小值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_pos">位置</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></next></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_pos">位置</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-006",
      "title": "第二高分",
      "description": "給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。",
      "input": "第一個整數為 N，接著輸入 N 個整數代表成績。",
      "output": "輸出兩個整數，依序為最高分與第二高分，中間以空白分隔。",
      "examples": [
        {
          "input": "6 70 95 80 95 60 88",
          "output": "95 88",
          "explanation": "最高分是 95，第二高的不同分數是 88。"
        }
      ],
      "testCases": [
        {
          "input": "6 70 95 80 95 60 88",
          "output": "95 88"
        },
        {
          "input": "5 100 90 80 70 60",
          "output": "100 90"
        },
        {
          "input": "4 10 20 20 5",
          "output": "20 10"
        },
        {
          "input": "7 -1 -5 -3 -1 -2 -8 -4",
          "output": "-1 -2"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_max">最大值</variable><variable id="var_second">第二高分</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個成績，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement></block></statement><next><block type="variables_set"><field name="VAR" id="var_second">第二高分</field><value name="VALUE"><block type="math_number"><field name="NUM">-1000000</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">NEQ</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_second">第二高分</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_second">第二高分</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_second">第二高分</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-007",
      "title": "相鄰最大差",
      "description": "給定 N 個整數，請找出相鄰兩個數字之間的最大差值。差值一律用較大的數減較小的數。",
      "input": "第一個整數為 N，接著輸入 N 個整數。保證 N 大於或等於 2。",
      "output": "輸出一個整數，代表相鄰最大差值。",
      "examples": [
        {
          "input": "5 3 8 6 15 10",
          "output": "9",
          "explanation": "相鄰差值為 5、2、9、5，最大是 9。"
        }
      ],
      "testCases": [
        {
          "input": "5 3 8 6 15 10",
          "output": "9"
        },
        {
          "input": "2 100 40",
          "output": "60"
        },
        {
          "input": "6 1 2 3 4 5 6",
          "output": "1"
        },
        {
          "input": "4 10 30 5 25",
          "output": "25"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "索引與位置",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_maxdiff">最大差值</variable><variable id="var_diff">差值</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_maxdiff">最大差值</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_diff">差值</field><value name="VALUE"><block type="math_single"><field name="OP">ABS</field><value name="NUM"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_diff">差值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_maxdiff">最大差值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_maxdiff">最大差值</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_diff">差值</field></block></value></block></statement></block></next></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_maxdiff">最大差值</field></block></value></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "EXT01-008",
      "title": "區間最大值",
      "description": "給定 N 個整數，以及查詢區間 L 到 R，請找出第 L 個到第 R 個數字中的最大值。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入兩個整數 L 與 R。保證 1 <= L <= R <= N。",
      "output": "輸出一個整數，代表區間最大值。",
      "examples": [
        {
          "input": "6 5 8 3 12 7 10 2 5",
          "output": "12",
          "explanation": "第 2 到第 5 個數字是 8、3、12、7，最大值為 12。"
        }
      ],
      "testCases": [
        {
          "input": "6 5 8 3 12 7 10 2 5",
          "output": "12"
        },
        {
          "input": "5 1 2 3 4 5 1 3",
          "output": "3"
        },
        {
          "input": "4 9 8 7 6 3 4",
          "output": "7"
        },
        {
          "input": "7 -5 -1 -9 -3 -2 -8 -4 2 6",
          "output": "-1"
        }
      ],
      "knowledgePoints": [
        "最大最小值",
        "索引與位置",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_l">L</variable><variable id="var_r">R</variable><variable id="var_max">最大值</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，最後接L R，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_l">L</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_r">R</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">3</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_l">L</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="variables_get"><field name="VAR" id="var_l">L</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_r">R</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_max">最大值</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_max">最大值</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    }
  ]
};
