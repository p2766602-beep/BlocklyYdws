export default {
  "code": "MATH01",
  "title": "數學與數論基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "math_number_theory_training",
  "bankPoolLabel": "數學與數論入門",
  "tasks": [
    {
      "id": "MATH01-001",
      "title": "倍數判斷",
      "description": "給定兩個正整數 A 與 B，請判斷 A 是否為 B 的倍數。",
      "input": "輸入兩個正整數 A 與 B。",
      "output": "若 A 是 B 的倍數，輸出 YES；否則輸出 NO。",
      "examples": [
        {
          "input": "24 6",
          "output": "YES",
          "explanation": "24 可以被 6 整除，所以是 6 的倍數。"
        }
      ],
      "testCases": [
        {
          "input": "24 6",
          "output": "YES"
        },
        {
          "input": "25 6",
          "output": "NO"
        },
        {
          "input": "100 10",
          "output": "YES"
        },
        {
          "input": "7 9",
          "output": "NO"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "條件判斷",
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
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入A B，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="text_print"><value name="TEXT"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="DIVISOR"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="THEN"><block type="text"><field name="TEXT">YES</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">NO</field></block></value></block></value></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "MATH01-002",
      "title": "因數個數",
      "description": "給定一個正整數 N，請計算 N 有幾個正因數。",
      "input": "輸入一個正整數 N。",
      "output": "輸出一個整數，代表 N 的正因數個數。",
      "examples": [
        {
          "input": "12",
          "output": "6",
          "explanation": "12 的正因數有 1、2、3、4、6、12，共 6 個。"
        }
      ],
      "testCases": [
        {
          "input": "12",
          "output": "6"
        },
        {
          "input": "1",
          "output": "1"
        },
        {
          "input": "16",
          "output": "5"
        },
        {
          "input": "17",
          "output": "2"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable><variable id="var_count">因數個數</variable><variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
  <field name="VAR" id="var_n">N</field>
  <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入正整數N</field></shadow></value></block></value>
  <next><block type="variables_set"><field name="VAR" id="var_count">因數個數</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_count">因數個數</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">因數個數</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">因數個數</field></block></value></block></next></block></next></block></next>
</block>
</xml>`
    },
    {
      "id": "MATH01-003",
      "title": "質數判斷",
      "description": "給定一個正整數 N，請判斷 N 是否為質數。質數是大於 1，且只有 1 和自己兩個正因數的數。",
      "input": "輸入一個正整數 N。",
      "output": "若 N 是質數，輸出 PRIME；否則輸出 NOT。",
      "examples": [
        {
          "input": "17",
          "output": "PRIME",
          "explanation": "17 只有 1 和 17 兩個正因數，所以是質數。"
        }
      ],
      "testCases": [
        {
          "input": "17",
          "output": "PRIME"
        },
        {
          "input": "1",
          "output": "NOT"
        },
        {
          "input": "12",
          "output": "NOT"
        },
        {
          "input": "2",
          "output": "PRIME"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable><variable id="var_isprime">是否質數</variable><variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
  <field name="VAR" id="var_n">N</field>
  <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入正整數N</field></shadow></value></block></value>
  <next><block type="controls_if"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">NOT</field></block></value></block></statement><statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_isprime">是否質數</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">TRUE</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">2</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value><value name="TO"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_isprime">是否質數</field><value name="VALUE"><block type="logic_boolean"><field name="BOOL">FALSE</field></block></value></block></statement></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="logic_ternary"><value name="IF"><block type="variables_get"><field name="VAR" id="var_isprime">是否質數</field></block></value><value name="THEN"><block type="text"><field name="TEXT">PRIME</field></block></value><value name="ELSE"><block type="text"><field name="TEXT">NOT</field></block></value></block></value></block></next></block></next></block></statement></block></next>
</block>
</xml>`
    },
    {
      "id": "MATH01-004",
      "title": "最大公因數",
      "description": "給定兩個正整數 A 與 B，請找出它們的最大公因數。",
      "input": "輸入兩個正整數 A 與 B。",
      "output": "輸出一個整數，代表 A 與 B 的最大公因數。",
      "examples": [
        {
          "input": "12 18",
          "output": "6",
          "explanation": "12 與 18 的最大公因數是 6。"
        }
      ],
      "testCases": [
        {
          "input": "12 18",
          "output": "6"
        },
        {
          "input": "7 13",
          "output": "1"
        },
        {
          "input": "24 36",
          "output": "12"
        },
        {
          "input": "100 25",
          "output": "25"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "最大最小值"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_a">A</variable><variable id="var_b">B</variable><variable id="var_gcd">最大公因數</variable><variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入A B，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_a">A</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_b">B</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_gcd">最大公因數</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="THEN"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="ELSE"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="THEN"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="ELSE"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_gcd">最大公因數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></statement></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_gcd">最大公因數</field></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "MATH01-005",
      "title": "最小公倍數",
      "description": "給定兩個正整數 A 與 B，請找出它們的最小公倍數。",
      "input": "輸入兩個正整數 A 與 B。",
      "output": "輸出一個整數，代表 A 與 B 的最小公倍數。",
      "examples": [
        {
          "input": "12 18",
          "output": "36",
          "explanation": "12 與 18 的最小公倍數是 36。"
        }
      ],
      "testCases": [
        {
          "input": "12 18",
          "output": "36"
        },
        {
          "input": "7 13",
          "output": "91"
        },
        {
          "input": "4 6",
          "output": "12"
        },
        {
          "input": "20 5",
          "output": "20"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_a">A</variable><variable id="var_b">B</variable><variable id="var_gcd">最大公因數</variable><variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入A B，以空白分隔</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_a">A</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_b">B</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">2</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_gcd">最大公因數</field><value name="VALUE"><block type="math_number"><field name="NUM">1</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="THEN"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="ELSE"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="logic_ternary"><value name="IF"><block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="THEN"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="ELSE"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_operation"><field name="OP">AND</field><value name="A"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="B"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value><value name="DIVISOR"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_gcd">最大公因數</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></statement></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">A</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">B</field></block></value></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_gcd">最大公因數</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "MATH01-006",
      "title": "位數和",
      "description": "給定一個非負整數 N，請計算它的每一位數字總和。",
      "input": "輸入一個非負整數 N。",
      "output": "輸出一個整數，代表 N 的位數和。",
      "examples": [
        {
          "input": "12345",
          "output": "15",
          "explanation": "1+2+3+4+5=15。"
        }
      ],
      "testCases": [
        {
          "input": "12345",
          "output": "15"
        },
        {
          "input": "0",
          "output": "0"
        },
        {
          "input": "1008",
          "output": "9"
        },
        {
          "input": "9999",
          "output": "36"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "累加累乘"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable><variable id="var_temp">temp</variable><variable id="var_sum">位數和</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
  <field name="VAR" id="var_n">N</field>
  <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入非負整數N</field></shadow></value></block></value>
  <next><block type="variables_set"><field name="VAR" id="var_temp">temp</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><next><block type="variables_set"><field name="VAR" id="var_sum">位數和</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_temp">temp</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_sum">位數和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">位數和</field></block></value><value name="B"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_temp">temp</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_temp">temp</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_temp">temp</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value></block></next></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_sum">位數和</field></block></value></block></next></block></next></block></next></block></next>
</block>
</xml>`
    },
    {
      "id": "MATH01-007",
      "title": "數字反轉",
      "description": "給定一個非負整數 N，請將它的數字順序反轉後輸出。反轉後前導 0 不需要保留。",
      "input": "輸入一個非負整數 N。",
      "output": "輸出一個整數，代表反轉後的數字。",
      "examples": [
        {
          "input": "12340",
          "output": "4321",
          "explanation": "12340 反轉為 04321，前導 0 不保留，所以輸出 4321。"
        }
      ],
      "testCases": [
        {
          "input": "12340",
          "output": "4321"
        },
        {
          "input": "0",
          "output": "0"
        },
        {
          "input": "1000",
          "output": "1"
        },
        {
          "input": "9876",
          "output": "6789"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "變數與運算"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_n">N</variable><variable id="var_temp">temp</variable><variable id="var_rev">反轉結果</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
  <field name="VAR" id="var_n">N</field>
  <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入非負整數N</field></shadow></value></block></value>
  <next><block type="variables_set"><field name="VAR" id="var_temp">temp</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><next><block type="variables_set"><field name="VAR" id="var_rev">反轉結果</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_whileUntil"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_temp">temp</field></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO"><block type="variables_set"><field name="VAR" id="var_rev">反轉結果</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_rev">反轉結果</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value><value name="B"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_temp">temp</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_temp">temp</field><value name="VALUE"><block type="math_round"><field name="OP">ROUNDDOWN</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_temp">temp</field></block></value><value name="B"><block type="math_number"><field name="NUM">10</field></block></value></block></value></block></value></block></next></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_rev">反轉結果</field></block></value></block></next></block></next></block></next></block></next>
</block>
</xml>`
    },
    {
      "id": "MATH01-008",
      "title": "可被 3 整除的數量",
      "description": "給定 N 個整數，請計算其中有幾個數字可以被 3 整除。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表可以被 3 整除的數量。",
      "examples": [
        {
          "input": "6 3 5 9 10 12 14",
          "output": "3",
          "explanation": "3、9、12 可以被 3 整除，共 3 個。"
        }
      ],
      "testCases": [
        {
          "input": "6 3 5 9 10 12 14",
          "output": "3"
        },
        {
          "input": "4 1 2 4 5",
          "output": "0"
        },
        {
          "input": "5 0 3 6 9 12",
          "output": "5"
        },
        {
          "input": "7 -3 -2 0 4 6 8 10",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "清單處理",
        "條件判斷",
        "資料統計"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_line">輸入列</variable><variable id="var_values">數值清單</variable><variable id="var_n">N</variable><variable id="var_count">數量</variable><variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_line">輸入列</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入N個整數，以空白分隔，最前面接N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_values">數值清單</field>
      <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">輸入列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
      <next><block type="variables_set"><field name="VAR" id="var_n">N</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_number"><field name="NUM">1</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><next><block type="variables_set"><field name="VAR" id="var_count">數量</field><value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value><next><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value><statement name="DO0"><block type="controls_for"><field name="VAR" id="var_i">i</field><value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value><value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value><value name="BY"><block type="math_number"><field name="NUM">1</field></block></value><statement name="DO"><block type="controls_if"><value name="IF0"><block type="logic_compare"><field name="OP">EQ</field><value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="math_arithmetic"><field name="OP">MINUS</field><value name="A"><block type="lists_getIndex"><mutation statement="false" at="true"></mutation><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="variables_get"><field name="VAR" id="var_values">數值清單</field></block></value><value name="AT"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">3</field></block></value></block></value><value name="B"><block type="math_number"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="variables_set"><field name="VAR" id="var_count">數量</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_count">數量</field></block></value><value name="B"><block type="math_number"><field name="NUM">1</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_count">數量</field></block></value></block></next></block></next></block></next></block></next>
    </block></next>
  </block>
</xml>`
    }
  ]
};
