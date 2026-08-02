export default {
  "code": "CNT01",
  "title": "循環計數與清單處理",
  "type": "programming",
  "mode": "learning",
  "bankPool": "builtin_count_series",
  "bankPoolLabel": "循環計數特訓",
  "tasks": [
    {
      "id": "CNT01-019",
      "title": "清單平均值",
      "description": "給定 N 個整數，請計算這些數字的總和與整數平均。整數平均只取商，不處理小數。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出兩個整數，依序為總和與整數平均，中間以空白分隔。",
      "examples": [
        {
          "input": "5 80 75 90 60 95",
          "output": "400 80",
          "explanation": "總和為 400，400 除以 5 的整數商為 80。"
        }
      ],
      "testCases": [
        {
          "input": "5 80 75 90 60 95",
          "output": "400 80"
        },
        {
          "input": "3 10 20 30",
          "output": "60 20"
        },
        {
          "input": "4 1 2 3 4",
          "output": "10 2"
        },
        {
          "input": "6 8 8 9 9 10 10",
          "output": "54 9"
        }
      ],
      "knowledgePoints": [
        "清單處理",
        "資料統計"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_n">N</variable>
    <variable id="var_sum">總和</variable>
    <variable id="var_avg">平均</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_n">N</field>
        <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_sum">總和</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
            <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="variables_set">
              <field name="VAR" id="var_sum">總和</field>
              <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value>
            </block></statement>
            <next><block type="variables_set">
              <field name="VAR" id="var_avg">平均</field>
              <value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value></block></value></block></value>
              <next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value></block></value></block></next>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "CNT01-020",
      "title": "大於門檻的數量",
      "description": "給定一個門檻值 K 與 N 個整數，請計算有幾個數字大於 K。",
      "input": "第一個整數為 N，第二個整數為 K，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表大於 K 的數字數量。",
      "examples": [
        {
          "input": "6 50 30 60 50 80 45 90",
          "output": "3",
          "explanation": "大於 50 的數字有 60、80、90，共 3 個。"
        }
      ],
      "testCases": [
        {
          "input": "6 50 30 60 50 80 45 90",
          "output": "3"
        },
        {
          "input": "4 10 1 2 3 4",
          "output": "0"
        },
        {
          "input": "5 5 6 7 8 9 10",
          "output": "5"
        },
        {
          "input": "7 20 20 21 19 22 18 23 17",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "清單處理",
        "條件判斷",
        "資料統計"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_n">N</variable>
    <variable id="var_k">K</variable>
    <variable id="var_count">數量</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N K 及N個整數，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_n">N</field>
        <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_k">K</field>
          <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
          <next><block type="variables_set">
            <field name="VAR" id="var_count">數量</field>
            <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
            <next><block type="controls_for">
              <field name="VAR" id="var_i">i</field>
              <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
              <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
              <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
              <statement name="DO"><block type="controls_if">
                <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_k">K</field></block></value></block></value>
                <statement name="DO0"><block type="variables_set">
                  <field name="VAR" id="var_count">數量</field>
                  <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">數量</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
                </block></statement>
              </block></statement>
              <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">數量</field></block></value></block></next>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "CNT01-021",
      "title": "找最小值",
      "description": "給定 N 個整數，請找出其中最小的數字。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表最小值。",
      "examples": [
        {
          "input": "5 8 3 9 2 7",
          "output": "2",
          "explanation": "5 個數字中最小的是 2。"
        }
      ],
      "testCases": [
        {
          "input": "5 8 3 9 2 7",
          "output": "2"
        },
        {
          "input": "4 10 10 10 10",
          "output": "10"
        },
        {
          "input": "6 -1 -5 3 0 2 -4",
          "output": "-5"
        },
        {
          "input": "3 99 12 45",
          "output": "12"
        }
      ],
      "knowledgePoints": [
        "清單處理",
        "最大最小值"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_n">N</variable>
    <variable id="var_min">最小值</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_n">N</field>
        <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_min">最小值</field>
          <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
            <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="controls_if">
              <value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></value>
              <statement name="DO0"><block type="variables_set">
                <field name="VAR" id="var_min">最小值</field>
                <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
              </block></statement>
            </block></statement>
            <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_min">最小值</field></block></value></block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "CNT01-022",
      "title": "第一個及格的位置",
      "description": "給定 N 位學生的成績，請找出第一個分數大於或等於 60 的位置。位置從 1 開始計算。保證至少有一位學生及格。",
      "input": "第一個整數為 N，接著輸入 N 個整數代表成績。",
      "output": "輸出一個整數，代表第一個及格成績的位置。",
      "examples": [
        {
          "input": "5 40 55 60 80 30",
          "output": "3",
          "explanation": "第一個大於或等於 60 的分數是第 3 個。"
        }
      ],
      "testCases": [
        {
          "input": "5 40 55 60 80 30",
          "output": "3"
        },
        {
          "input": "4 70 50 80 90",
          "output": "1"
        },
        {
          "input": "6 10 20 30 40 50 60",
          "output": "6"
        },
        {
          "input": "3 59 61 62",
          "output": "2"
        }
      ],
      "knowledgePoints": [
        "清單處理",
        "條件判斷",
        "索引與位置"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_n">N</variable>
    <variable id="var_pos">位置</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個成績，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_n">N</field>
        <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_pos">位置</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
            <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="controls_if">
              <value name="IF0"><block type="logic_operation"><field name="OP">AND</field>
                <value name="A"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value>
                <value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_pos">位置</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
              </block></value>
              <statement name="DO0"><block type="variables_set">
                <field name="VAR" id="var_pos">位置</field>
                <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value>
              </block></statement>
            </block></statement>
            <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_pos">位置</field></block></value></block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "CNT01-023",
      "title": "相鄰差值最大",
      "description": "給定 N 個整數，請計算相鄰兩個數字之間差值的最大值。差值一律用較大的數減較小的數。",
      "input": "第一個整數為 N，接著輸入 N 個整數。保證 N 大於或等於 2。",
      "output": "輸出一個整數，代表相鄰差值最大值。",
      "examples": [
        {
          "input": "5 3 8 6 15 10",
          "output": "9",
          "explanation": "相鄰差值依序為 5、2、9、5，最大值為 9。"
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
        "清單處理",
        "索引與位置",
        "最大最小值"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_n">N</variable>
    <variable id="var_maxdiff">最大差值</variable>
    <variable id="var_diff">差值</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_n">N</field>
        <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_maxdiff">最大差值</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
            <value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="variables_set">
              <field name="VAR" id="var_diff">差值</field>
              <value name="VALUE"><block type="math_single"><field name="OP">ABS</field><value name="NUM"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value></block></value>
              <next><block type="controls_if">
                <value name="IF0"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_diff">差值</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_maxdiff">最大差值</field></block></value></block></value>
                <statement name="DO0"><block type="variables_set">
                  <field name="VAR" id="var_maxdiff">最大差值</field>
                  <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_diff">差值</field></block></value>
                </block></statement>
              </block></next>
            </block></statement>
            <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_maxdiff">最大差值</field></block></value></block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "CNT01-024",
      "title": "清單反向加總",
      "description": "給定 N 個整數，請從最後一個數字往前讀取，並輸出反向讀取時的累加結果。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出 N 個整數，代表從後往前累加的結果，每個數字中間以空白分隔。",
      "examples": [
        {
          "input": "4 2 5 3 1",
          "output": "1 4 9 11",
          "explanation": "反向讀取為 1、3、5、2，累加結果為 1、4、9、11。"
        }
      ],
      "testCases": [
        {
          "input": "4 2 5 3 1",
          "output": "1 4 9 11"
        },
        {
          "input": "3 10 20 30",
          "output": "30 50 60"
        },
        {
          "input": "5 1 1 1 1 1",
          "output": "1 2 3 4 5"
        },
        {
          "input": "2 7 4",
          "output": "4 11"
        }
      ],
      "knowledgePoints": [
        "清單處理",
        "累加累乘",
        "索引與位置"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable>
    <variable id="var_values">數值清單</variable>
    <variable id="var_n">N</variable>
    <variable id="var_sum">累加值</variable>
    <variable id="var_result">結果文字</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_n">N</field>
        <value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_sum">累加值</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="variables_set">
            <field name="VAR" id="var_result">結果文字</field>
            <value name="VALUE"><block type="text"><field name="TEXT">(empty)</field></block></value>
            <next><block type="controls_for">
              <field name="VAR" id="var_i">i</field>
              <value name="FROM"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
              <value name="TO"><block type="math_number"><field name="NUM">1</field></block></value>
              <value name="BY"><block type="math_number"><field name="NUM">-1</field></block></value>
              <statement name="DO"><block type="variables_set">
                <field name="VAR" id="var_sum">累加值</field>
                <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">累加值</field></block></value><value name="B"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value>
                <next><block type="controls_if">
                  <mutation else="1"></mutation>
                  <value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value></block></value>
                  <statement name="DO0"><block type="variables_set">
                    <field name="VAR" id="var_result">結果文字</field>
                    <value name="VALUE"><block type="text_join"><mutation items="1"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_sum">累加值</field></block></value></block></value>
                  </block></statement>
                  <statement name="ELSE"><block type="variables_set">
                    <field name="VAR" id="var_result">結果文字</field>
                    <value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_sum">累加值</field></block></value></block></value>
                  </block></statement>
                </block></next>
              </block></statement>
              <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_result">結果文字</field></block></value></block></next>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    }
  ]
};
