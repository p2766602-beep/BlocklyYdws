export const JSB00 = {
  "code": "JSB00",
  "title": "基礎練習1",
  "type": "programming",
  "mode": "learning",
  "tasks": [
    {
      "id": "A-01-0",
      "title": "Hello world",
      "difficulty": "L1",
      "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。\nHello後面會接小寫逗號，還有一個空白輸入\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
      "examples": [
        {
          "input": "Amy",
          "output": "Hello, Amy",
          "explanation": "第一個輸入 Amy，代表名字為 Amy\n程式輸出 Hello, Amy"
        },
        {
          "input": "Tom",
          "output": "Hello, Tom",
          "explanation": "第一個輸入 Tom，代表名字為 Tom\n程式輸出 Hello, Amy"
        }
      ],
      "testCases": [
        {
          "input": "John",
          "expectedOutput": "Hello, John",
          "score": 10
        },
        {
          "input": "Marry",
          "expectedOutput": "Hello, Marry",
          "score": 10
        },
        {
          "input": "Sam",
          "expectedOutput": "Hello, Sam",
          "score": 10
        },
        {
          "input": "Tom",
          "expectedOutput": "Hello, Tom",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_name">名字</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_name">名字</field>
    <value name="VALUE">
      <block type="text_prompt_ext">
        <mutation type="TEXT"></mutation>
        <field name="TYPE">TEXT</field>
        <value name="TEXT">
          <shadow type="text">
            <field name="TEXT">請輸入名字</field>
          </shadow>
        </value>
      </block>
    </value>
    <next>
      <block type="text_print">
        <value name="TEXT">
          <block type="text_join">
            <mutation items="2"></mutation>
            <value name="ADD0">
              <block type="text">
                <field name="TEXT">Hello, </field>
              </block>
            </value>
            <value name="ADD1">
              <block type="variables_get">
                <field name="VAR" id="var_name">名字</field>
              </block>
            </value>
          </block>
        </value>
      </block>
    </next>
  </block>
</xml>`
    },
    {
      "id": "A-01-1",
      "title": "一起學習吧",
      "difficulty": "L1",
      "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。\n朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
      "examples": [
        {
          "input": "Amy\nJohn",
          "output": "Amy, John, 一起學習吧！",
          "explanation": "第一個輸入 Amy，代表朋友一名字為 Amy\n第二個輸入 John，代表朋友二名字為 John\n程式輸出 Amy, John, 一起學習吧！"
        },
        {
          "input": "Tom\nSusan",
          "output": "Tom, Susan, 一起學習吧！",
          "explanation": "第一個輸入 Tom，代表第一個名字為 Tom\n第二個輸入 Susan，代表第二個名字為 Susan\n程式輸出 Tom, Susan, 一起學習吧！"
        }
      ],
      "testCases": [
        {
          "input": "John\nAmy",
          "expectedOutput": "John, Amy, 一起學習吧！",
          "score": 10
        },
        {
          "input": "Tom\nSusan",
          "expectedOutput": "Tom, Susan, 一起學習吧！",
          "score": 10
        },
        {
          "input": "Sam\nBrown",
          "expectedOutput": "Sam, Brown, 一起學習吧！",
          "score": 10
        },
        {
          "input": "Justin\nLouise",
          "expectedOutput": "Justin, Louise, 一起學習吧！",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "A-02-0",
      "title": "數字加總",
      "difficulty": "L1",
      "description": "當我們要處理數字時，常常需要加總。\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。\n這樣的題目能幫助你熟悉數字資料處理。",
      "examples": [
        {
          "input": "9\n4",
          "output": "13",
          "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9+4總和13"
        },
        {
          "input": "6\n5",
          "output": "11",
          "explanation": "第一個輸入6\n第二個輸入5\n程式輸出6+5總和11"
        }
      ],
      "testCases": [
        {
          "input": "3\n7",
          "expectedOutput": "10",
          "score": 10
        },
        {
          "input": "99\n100",
          "expectedOutput": "199",
          "score": 10
        },
        {
          "input": "78\n22",
          "expectedOutput": "100",
          "score": 10
        },
        {
          "input": "21\n35",
          "expectedOutput": "56",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">數字一</variable>
    <variable id="var_b">數字二</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_a">數字一</field>
    <value name="VALUE">
      <block type="text_prompt_ext">
        <mutation type="NUMBER"></mutation>
        <field name="TYPE">NUMBER</field>
        <value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第一個數字</field></shadow></value>
      </block>
    </value>
    <next>
      <block type="variables_set">
        <field name="VAR" id="var_b">數字二</field>
        <value name="VALUE">
          <block type="text_prompt_ext">
            <mutation type="NUMBER"></mutation>
            <field name="TYPE">NUMBER</field>
            <value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第二個數字</field></shadow></value>
          </block>
        </value>
        <next>
          <block type="text_print">
            <value name="TEXT">
              <block type="math_arithmetic">
                <field name="OP">ADD</field>
                <value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value>
                <value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value>
              </block>
            </value>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`
    },
    {
      "id": "A-02-1",
      "title": "數字平均",
      "difficulty": "L1",
      "description": "當我們要處理數字時，常常需計算平均。\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的平均(四捨五入取整數)。\n這樣的題目能幫助你熟悉數字資料處理。",
      "examples": [
        {
          "input": "9\n4",
          "output": "7",
          "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9、4的平均四捨五入取整數7"
        },
        {
          "input": "6\n5",
          "output": "6",
          "explanation": "第一個輸入6\n第二個輸入5\n程式輸出6、5的平均四捨五入取整數6"
        }
      ],
      "testCases": [
        {
          "input": "3\n7",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "99\n100",
          "expectedOutput": "100",
          "score": 10
        },
        {
          "input": "78\n22",
          "expectedOutput": "50",
          "score": 10
        },
        {
          "input": "21\n35",
          "expectedOutput": "28",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "A-03-0",
      "title": "比較大小",
      "difficulty": "L1",
      "description": "在生活中常常會需要比較兩個數字誰比較大。\n請寫一個程式，輸入兩個整數，輸出較大的數字。\n如果兩個數字相同，就輸出「一樣大」。\n這樣的練習可以訓練你使用條件判斷。",
      "examples": [
        {
          "input": "8\n5",
          "output": "8",
          "explanation": "第一個輸入8\n第二個輸入5\n較大的是數字8，程式輸出8"
        },
        {
          "input": "7\n7",
          "output": "一樣大",
          "explanation": "第一個輸入7\n第二個輸入7\n二個數一樣大，程式輸出一樣大"
        }
      ],
      "testCases": [
        {
          "input": "3\n7",
          "expectedOutput": "7",
          "score": 10
        },
        {
          "input": "99\n100",
          "expectedOutput": "100",
          "score": 10
        },
        {
          "input": "78\n22",
          "expectedOutput": "78",
          "score": 10
        },
        {
          "input": "21\n21",
          "expectedOutput": "一樣大",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_a">數字一</variable>
    <variable id="var_b">數字二</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_a">數字一</field>
    <value name="VALUE">
      <block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第一個數字</field></shadow></value></block>
    </value>
    <next>
      <block type="variables_set">
        <field name="VAR" id="var_b">數字二</field>
        <value name="VALUE">
          <block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入第二個數字</field></shadow></value></block>
        </value>
        <next>
          <block type="controls_if">
            <mutation elseif="1" else="1"></mutation>
            <value name="IF0">
              <block type="logic_compare"><field name="OP">GT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value></block>
            </value>
            <statement name="DO0"><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value></block></statement>
            <value name="IF1">
              <block type="logic_compare"><field name="OP">LT</field><value name="A"><block type="variables_get"><field name="VAR" id="var_a">數字一</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value></block>
            </value>
            <statement name="DO1"><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_b">數字二</field></block></value></block></statement>
            <statement name="ELSE"><block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">一樣大</field></block></value></block></statement>
          </block>
        </next>
      </block>
    </next>
  </block>
</xml>`
    },
    {
      "id": "A-03-1",
      "title": "臺斤公斤大PK",
      "difficulty": "L2",
      "description": "在生活中常常會需要比較重量，台灣常見的單位有台斤、公斤，一台斤等於0.6公斤\n請寫一個程式，輸入兩個不同單位重量\n第一個數字輸入M，表示重量M台斤\n第二個數字輸入N，表示重量N公斤\n請比較兩筆重量輸入，輸出較大重量的數字及單位。\n如果兩個數字相同，就輸出「一樣重」。\n這樣的練習可以訓練你使用條件判斷。",
      "examples": [
        {
          "input": "10\n5",
          "output": "10台斤",
          "explanation": "第一個輸入10，表示10台斤\n第二個輸入5，表示5公斤\n較大的重量是10台斤，輸出10台斤"
        },
        {
          "input": "5\n5",
          "output": "5公斤",
          "explanation": "第一個輸入5，表示5台斤\n第二個輸入5，表示5公斤\n較大的重量是5公斤，輸出5公斤"
        },
        {
          "input": "10\n6",
          "output": "一樣重",
          "explanation": "第一個輸入10，表示10台斤\n第二個輸入6，表示6公斤\n兩個重量一樣種，輸出一樣重"
        }
      ],
      "testCases": [
        {
          "input": "10\n6",
          "expectedOutput": "一樣重",
          "score": 10
        },
        {
          "input": "100\n70",
          "expectedOutput": "70公斤",
          "score": 10
        },
        {
          "input": "78\n22",
          "expectedOutput": "78台斤",
          "score": 10
        },
        {
          "input": "21\n21",
          "expectedOutput": "21公斤",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "A-04-0",
      "title": "判斷奇偶數",
      "difficulty": "L1",
      "description": "程式設計中，常常需要根據數字的性質進行分類。\n請你寫一個程式，輸入一個整數，如果這個數除以2的餘數為0，表示是偶數，輸出 Even，如果餘數是1，表示是奇數，輸出 Odd。\n這樣的練習可以幫助你熟悉條件判斷的應用。",
      "examples": [
        {
          "input": "8",
          "output": "Even",
          "explanation": "輸入8，8除以2餘數=0\n程式輸出偶數Even"
        },
        {
          "input": "7",
          "output": "Odd",
          "explanation": "輸入7，7除以2餘數=1\n程式輸出奇數數Odd"
        }
      ],
      "testCases": [
        {
          "input": "3",
          "expectedOutput": "Odd",
          "score": 10
        },
        {
          "input": "99",
          "expectedOutput": "Odd",
          "score": 10
        },
        {
          "input": "78",
          "expectedOutput": "Even",
          "score": 10
        },
        {
          "input": "22",
          "expectedOutput": "Even",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">數字</variable></variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_n">數字</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入一個整數</field></shadow></value></block></value>
    <next>
      <block type="controls_if">
        <mutation else="1"></mutation>
        <value name="IF0">
          <block type="logic_compare">
            <field name="OP">EQ</field>
            <value name="A"><block type="math_modulo"><value name="DIVIDEND"><block type="variables_get"><field name="VAR" id="var_n">數字</field></block></value><value name="DIVISOR"><block type="math_number"><field name="NUM">2</field></block></value></block></value>
            <value name="B"><block type="math_number"><field name="NUM">0</field></block></value>
          </block>
        </value>
        <statement name="DO0"><block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">Even</field></block></value></block></statement>
        <statement name="ELSE"><block type="text_print"><value name="TEXT"><block type="text"><field name="TEXT">Odd</field></block></value></block></statement>
      </block>
    </next>
  </block>
</xml>`
    },
    {
      "id": "A-04-1",
      "title": "成績等第",
      "difficulty": "L2",
      "description": "不少學校成績採用等弟制，80~100為A，70~79為B，60~69為C，50~59為D，其餘49分以下為E\n請你寫一個程式，輸入一個整數(0~100)，輸出對應的成績等弟。\n這樣的練習可以幫助你熟悉條件判斷的應用。",
      "examples": [
        {
          "input": "90",
          "output": "A",
          "explanation": "輸入90，表示成績90\n程式輸出A"
        },
        {
          "input": "45",
          "output": "E",
          "explanation": "輸入45，表示成績45\n程式輸出E"
        }
      ],
      "testCases": [
        {
          "input": "69",
          "expectedOutput": "C",
          "score": 10
        },
        {
          "input": "99",
          "expectedOutput": "A",
          "score": 10
        },
        {
          "input": "78",
          "expectedOutput": "B",
          "score": 10
        },
        {
          "input": "55",
          "expectedOutput": "D",
          "score": 10
        },
        {
          "input": "12",
          "expectedOutput": "E",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "A-05-0",
      "title": "三科成績計算",
      "difficulty": "L2",
      "description": "小明參加了數學、英文、自然三科的段考，老師希望能快速算出總分與平均分數，並判斷是否及格。\n請設計程式，輸入三科的成績，計算總分與平均。\n平均成績以四捨五入取到整數\n如果平均分數大於等於 60，就輸出「及格」，否則輸出「不及格」。\n這題可以訓練你如何處理多筆資料的加總、平均計算，並搭配條件判斷。",
      "examples": [
        {
          "input": "3\n80 70 90",
          "output": "240\n80\n及格",
          "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料80 70 90，經過計算後\n總分、平均、及格或不及格240 80 及格"
        },
        {
          "input": "3\n50 42 60",
          "output": "152\n51\n不及格",
          "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料50 42 60，經過計算後\n程式輸出總分、平均、及格或不及格152 51 不及格"
        }
      ],
      "testCases": [
        {
          "input": "3\n20 60 90",
          "expectedOutput": "170 57 不及格",
          "score": 10
        },
        {
          "input": "3\n80 70 90",
          "expectedOutput": "240 80 及格",
          "score": 10
        },
        {
          "input": "3\n45 65 80",
          "expectedOutput": "190 63 及格",
          "score": 10
        },
        {
          "input": "3\n100 100 90",
          "expectedOutput": "290 97 及格",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables>
    <variable id="var_count">筆數</variable>
    <variable id="var_line">成績列</variable>
    <variable id="var_scores">成績清單</variable>
    <variable id="var_total">總分</variable>
    <variable id="var_avg">平均</variable>
    <variable id="var_result">結果</variable>
    <variable id="var_i">i</variable>
  </variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_count">筆數</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入筆數</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_line">成績列</field>
      <value name="VALUE"><block type="text_prompt_ext"><mutation type="TEXT"></mutation><field name="TYPE">TEXT</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入三科成績</field></shadow></value></block></value>
      <next><block type="variables_set">
        <field name="VAR" id="var_scores">成績清單</field>
        <value name="VALUE"><block type="lists_split"><mutation mode="SPLIT"></mutation><field name="MODE">SPLIT</field><value name="INPUT"><block type="variables_get"><field name="VAR" id="var_line">成績列</field></block></value><value name="DELIM"><shadow type="text"><field name="TEXT"> </field></shadow></value></block></value>
        <next><block type="variables_set">
          <field name="VAR" id="var_total">總分</field>
          <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
          <next><block type="controls_for">
            <field name="VAR" id="var_i">i</field>
            <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
            <value name="TO"><block type="variables_get"><field name="VAR" id="var_count">筆數</field></block></value>
            <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
            <statement name="DO"><block type="variables_set">
              <field name="VAR" id="var_total">總分</field>
              <value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="B"><block type="math_arithmetic">
  <field name="OP">MINUS</field>
  <value name="A">
    <block type="lists_getIndex">
      <mutation statement="false" at="true"></mutation>
      <field name="MODE">GET</field>
      <field name="WHERE">FROM_START</field>
      <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_scores">成績清單</field></block></value>
      <value name="AT"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value>
    </block>
  </value>
  <value name="B"><block type="math_number"><field name="NUM">0</field></block></value>
</block></value></block></value>
            </block></statement>
            <next><block type="variables_set">
              <field name="VAR" id="var_avg">平均</field>
              <value name="VALUE"><block type="math_round"><field name="OP">ROUND</field><value name="NUM"><block type="math_arithmetic"><field name="OP">DIVIDE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_count">筆數</field></block></value></block></value></block></value>
              <next><block type="controls_if">
                <mutation else="1"></mutation>
                <value name="IF0"><block type="logic_compare"><field name="OP">GTE</field><value name="A"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value><value name="B"><block type="math_number"><field name="NUM">60</field></block></value></block></value>
                <statement name="DO0"><block type="variables_set"><field name="VAR" id="var_result">結果</field><value name="VALUE"><block type="text"><field name="TEXT">及格</field></block></value></block></statement>
                <statement name="ELSE"><block type="variables_set"><field name="VAR" id="var_result">結果</field><value name="VALUE"><block type="text"><field name="TEXT">不及格</field></block></value></block></statement>
                <next><block type="text_print"><value name="TEXT"><block type="text_join"><mutation items="5"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_total">總分</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="variables_get"><field name="VAR" id="var_avg">平均</field></block></value><value name="ADD3"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD4"><block type="variables_get"><field name="VAR" id="var_result">結果</field></block></value></block></value></block></next>
              </block></next>
            </block></next>
          </block></next>
        </block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "A-05-1",
      "title": "第二、三件購物優惠",
      "difficulty": "L2",
      "description": "大南百貨進行第二、第三件優惠活動，購買3件物品，第2件9折，第3件8折。\n請設計程式，依序輸入三件物品的定價，計算三件物品合計售價，以及最後優惠多少元。\n每件物品打折後價格以無條件捨去取整數\n程式最後輸出 定價加總總額、售價加總總額、優惠多少元",
      "examples": [
        {
          "input": "3\n80 70 90",
          "output": "240\n215\n25",
          "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料80 70 90，經過計算後\n第二筆70打9折再無條件捨去，共63元\n第三筆90打8折再無條件捨去，共72元\n程式輸出定價加總總額240元，售價加總總額215元，共優惠25元"
        },
        {
          "input": "3\n50 42 60",
          "output": "152\n135\n17",
          "explanation": "第一行輸入3,表示有3筆資料\n第二行輸入3筆資料50 42 60，經過計算後\n第二筆42打9折再無條件捨去，共37元\n第三筆60打8折再無條件捨去，共48元\n程式輸出定價加總總額152元，售價加總總額135元，共優惠17元"
        }
      ],
      "testCases": [
        {
          "input": "3\n60 65 1999",
          "expectedOutput": "2124 1717 407",
          "score": 10
        },
        {
          "input": "3\n70 90 965",
          "expectedOutput": "1125 923 202",
          "score": 10
        },
        {
          "input": "3\n45 65 80",
          "expectedOutput": "190 167 23",
          "score": 10
        },
        {
          "input": "3\n90 100 284",
          "expectedOutput": "474 407 67",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "A-06-0",
      "title": "連續加總(1加到N)",
      "difficulty": "L2",
      "description": "有時候我們需要計算從 1 到某個數字的總和。\n請寫一個程式，輸入一個整數 N，計算從 1 加到 N 的結果。\n例如 N=5 時，1+2+3+4+5=15。這樣的練習可以訓練你使用迴圈進行加總。",
      "examples": [
        {
          "input": "5",
          "output": "15",
          "explanation": "輸入 5 → 1+2+3+4+5=15\n程式輸出15"
        },
        {
          "input": "10",
          "output": "55",
          "explanation": "輸入 10 → 1+2+3+4...+10=55\n程式輸出55"
        }
      ],
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "15",
          "score": 10
        },
        {
          "input": "20",
          "expectedOutput": "210",
          "score": 10
        },
        {
          "input": "88",
          "expectedOutput": "3916",
          "score": 10
        },
        {
          "input": "100",
          "expectedOutput": "5050",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_sum">總和</variable><variable id="var_i">i</variable></variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_n">N</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入 N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_sum">總和</field>
      <value name="VALUE"><block type="math_number"><field name="NUM">0</field></block></value>
      <next><block type="controls_for">
        <field name="VAR" id="var_i">i</field>
        <value name="FROM"><block type="math_number"><field name="NUM">1</field></block></value>
        <value name="TO"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
        <statement name="DO"><block type="variables_set"><field name="VAR" id="var_sum">總和</field><value name="VALUE"><block type="math_arithmetic"><field name="OP">ADD</field><value name="A"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value></block></value></block></statement>
        <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_sum">總和</field></block></value></block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "A-06-1",
      "title": "連續乘積(1*2*3...*N)",
      "difficulty": "L2",
      "description": "輸入一個整數 N，計算從 1*2*3....*N 的結果。\n例如 N=5 時，1*2*3*4*5=120。\n這樣的練習可以訓練你使用迴圈計算。",
      "examples": [
        {
          "input": "5",
          "output": "120",
          "explanation": "輸入 5 → 1*2*3*4*5=120\n程式輸出120"
        },
        {
          "input": "6",
          "output": "720",
          "explanation": "6 → 1*2*3*4*5*6=720\n程式輸出720"
        }
      ],
      "testCases": [
        {
          "input": "5",
          "expectedOutput": "120",
          "score": 10
        },
        {
          "input": "6",
          "expectedOutput": "720",
          "score": 10
        },
        {
          "input": "1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "8",
          "expectedOutput": "40320",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "A-07-0",
      "title": "乘法表",
      "difficulty": "L1",
      "description": "請寫一個程式，輸入一個整數 N，輸出 1 到 9 的乘法表結果。\n例如輸入 3，輸出 1x3=3, 2x3=6, …, 9x3=27。\n程式輸出3 6 9 12 15 18 21 24 27\n這樣的練習能讓你熟悉迴圈的運用。",
      "examples": [
        {
          "input": "3",
          "output": "3 6 9 12 15 18 21 24 27",
          "explanation": "第一行輸入3，經過九九乘法計算後\n程式輸出3 6 9 12 15 18 21 24 27"
        },
        {
          "input": "6",
          "output": "6 12 18 24 30 36 42 48 54",
          "explanation": "第一行輸入6，經過九九乘法計算後\n程式輸出6 12 18 24 30 36 42 48 54"
        }
      ],
      "testCases": [
        {
          "input": "3",
          "expectedOutput": "3 6 9 12 15 18 21 24 27",
          "score": 10
        },
        {
          "input": "6",
          "expectedOutput": "6 12 18 24 30 36 42 48 54",
          "score": 10
        },
        {
          "input": "5",
          "expectedOutput": "5 10 15 20 25 30 35 40 45",
          "score": 10
        },
        {
          "input": "9",
          "expectedOutput": "9 18 27 36 45 54 63 72 81",
          "score": 10
        }
      ],
      "starterXml": `<xml xmlns="https://developers.google.com/blockly/xml">
  <variables><variable id="var_n">N</variable><variable id="var_i">i</variable><variable id="var_output">輸出文字</variable></variables>
  <block type="variables_set" x="40" y="40">
    <field name="VAR" id="var_n">N</field>
    <value name="VALUE"><block type="text_prompt_ext"><mutation type="NUMBER"></mutation><field name="TYPE">NUMBER</field><value name="TEXT"><shadow type="text"><field name="TEXT">請輸入 N</field></shadow></value></block></value>
    <next><block type="variables_set">
      <field name="VAR" id="var_output">輸出文字</field>
      <value name="VALUE"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value>
      <next><block type="controls_for">
        <field name="VAR" id="var_i">i</field>
        <value name="FROM"><block type="math_number"><field name="NUM">2</field></block></value>
        <value name="TO"><block type="math_number"><field name="NUM">9</field></block></value>
        <value name="BY"><block type="math_number"><field name="NUM">1</field></block></value>
        <statement name="DO"><block type="variables_set"><field name="VAR" id="var_output">輸出文字</field><value name="VALUE"><block type="text_join"><mutation items="3"></mutation><value name="ADD0"><block type="variables_get"><field name="VAR" id="var_output">輸出文字</field></block></value><value name="ADD1"><block type="text"><field name="TEXT"> </field></block></value><value name="ADD2"><block type="math_arithmetic"><field name="OP">MULTIPLY</field><value name="A"><block type="variables_get"><field name="VAR" id="var_i">i</field></block></value><value name="B"><block type="variables_get"><field name="VAR" id="var_n">N</field></block></value></block></value></block></value></block></statement>
        <next><block type="text_print"><value name="TEXT"><block type="variables_get"><field name="VAR" id="var_output">輸出文字</field></block></value></block></next>
      </block></next>
    </block></next>
  </block>
</xml>`
    },
    {
      "id": "A-07-1",
      "title": "跳繩比賽",
      "difficulty": "L2",
      "description": "體育課上，學生進行跳繩小組競賽比賽，小組人數不定，每人跳的次數也不同。\n請設計一個程式，第一行輸入數字N，代表小組有N人，後續輸入N筆資料\n第二行輸入一串數列共N筆整數，序列的數字以空隔間格。\n程式輸出小組全部人員總共跳繩幾次？",
      "examples": [
        {
          "input": "5\n20 19 36 25 30",
          "output": "130",
          "explanation": "第一行輸入5，表示小組有5人。\n第二行輸入20 19 36 25 30，表示小組每人分別跳20、19、36、25、30下。\n程式輸出小組累計共跳130下"
        },
        {
          "input": "3\n6 12 18",
          "output": "36",
          "explanation": "第一行輸入3，表示小組有3人。\n第二行輸入6 12 18，表示小組每人分別跳6、12、18下。\n程式輸出小組累計共跳36下"
        }
      ],
      "testCases": [
        {
          "input": "4\n18 21 24 27",
          "expectedOutput": "90",
          "score": 10
        },
        {
          "input": "6\n6 12 18 24 30 36",
          "expectedOutput": "126",
          "score": 10
        },
        {
          "input": "5\n5 10 15 20 25",
          "expectedOutput": "75",
          "score": 10
        },
        {
          "input": "1\n9",
          "expectedOutput": "9",
          "score": 10
        }
      ],
      "starterXml": ""
    }
  ]
};
