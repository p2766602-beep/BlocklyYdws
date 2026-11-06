// Built by tools/lib/course-store.mjs：courses/B1-01-InputOutput.js ＋ courses-overrides/B1-01-InputOutput.json
// 自動產生，請勿手動編輯；要改請用課程編輯器（tools/edit-server.mjs），再重新建置。

export default {
  "code": "B1-01-InputOutput",
  "title": "K01 輸入與輸出",
  "description": "基礎知識點課程 U1 程式基礎｜K01 輸入與輸出（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）",
  "type": "programming",
  "mode": "learning",
  "tier": "t0",
  "knowledgePoint": "K01",
  "unit": "U1 程式基礎",
  "tasks": [
    {
      "id": "A-01-0",
      "title": "Hello world",
      "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n請你寫一個小程式，讓使用者輸入自己的名字，然後程式要輸出一行「Hello, 名字」。\nHello後面會接小寫逗號，還有一個空白輸入\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
      "inputDescription": "",
      "outputDescription": "",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "Amy",
          "output": "Hello, Amy",
          "explanation": "第一個輸入 Amy，代表名字為 Amy\n程式輸出 Hello, Amy"
        },
        {
          "input": "Tom",
          "output": "Hello, Tom",
          "explanation": "第二個輸入 Tom，代表名字為 Tom\n程式輸出 Hello, Tom"
        }
      ],
      "testCases": [
        {
          "input": "John",
          "expectedOutput": "Hello, John",
          "output": "Hello, John",
          "score": 10
        },
        {
          "input": "Marry",
          "expectedOutput": "Hello, Marry",
          "output": "Hello, Marry",
          "score": 10
        },
        {
          "input": "Sam",
          "expectedOutput": "Hello, Sam",
          "output": "Hello, Sam",
          "score": 10
        },
        {
          "input": "Tom",
          "expectedOutput": "Hello, Tom",
          "output": "Hello, Tom",
          "score": 10
        }
      ],
      "difficulty": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">名字</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">名字</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">Hello, </field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">名字</field></block></value></block></value></block></next></block></next></block></next></block></xml>",
      "hints": [
        "先把輸入的名字存進變數，再把「Hello, 」和名字接起來輸出，注意逗號後面有一個空白。"
      ],
      "extension": false,
      "sourceCourse": "M0-01-BasicOutput",
      "sourceDifficulty": "L1"
    },
    {
      "id": "A-01-1",
      "title": "一起學習吧",
      "description": "在程式設計的第一步，最重要的是能夠讀取使用者輸入，並將結果正確輸出。\n請你寫一個小程式，讓使用者輸入好朋友一的名字、接著輸入好朋友二的名字，然後程式要輸出一行「朋友一名字,朋友二名字, 一起學習吧！」。\n朋友一名字後面、朋友二名字後面都會接小寫逗號，還有一個空白輸入\n這樣的練習可以幫助你理解輸入與輸出，是學習程式設計的基礎。",
      "inputDescription": "",
      "outputDescription": "",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "Amy\nJohn",
          "output": "Amy, John, 一起學習吧！",
          "explanation": "第一個輸入 Amy，代表朋友一名字為 Amy\n第二個輸入 John，代表朋友二名字為 John\n程式輸出 Amy, John, 一起學習吧！"
        },
        {
          "input": "Tom\nSusan",
          "output": "Tom, Susan, 一起學習吧！",
          "explanation": ""
        }
      ],
      "testCases": [
        {
          "input": "John\nAmy",
          "expectedOutput": "John, Amy, 一起學習吧！",
          "output": "John, Amy, 一起學習吧！",
          "score": 10
        },
        {
          "input": "Tom\nSusan",
          "expectedOutput": "Tom, Susan, 一起學習吧！",
          "output": "Tom, Susan, 一起學習吧！",
          "score": 10
        },
        {
          "input": "Sam\nBrown",
          "expectedOutput": "Sam, Brown, 一起學習吧！",
          "output": "Sam, Brown, 一起學習吧！",
          "score": 10
        },
        {
          "input": "Justin\nLouise",
          "expectedOutput": "Justin, Louise, 一起學習吧！",
          "output": "Justin, Louise, 一起學習吧！",
          "score": 10
        }
      ],
      "difficulty": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">朋友一</variable><variable id=\"v2\">朋友二</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">朋友一</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">朋友二</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"4\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">朋友一</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">, </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">朋友二</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\">, 一起學習吧！</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "兩個名字要分兩次讀入；輸出時逗號、空白、驚嘆號都要和題目一模一樣。"
      ],
      "extension": false,
      "sourceCourse": "M0-01-BasicOutput",
      "sourceDifficulty": "L1"
    },
    {
      "id": "A-02-0",
      "title": "數字加總",
      "description": "當我們要處理數字時，常常需要加總。\n請設計一個程式，讓使用者輸入兩個數字，程式要輸出這兩個數字的總和。\n這樣的題目能幫助你熟悉數字資料處理。",
      "inputDescription": "",
      "outputDescription": "",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "9\n4",
          "output": "13",
          "explanation": "第一個輸入9\n第二個輸入4\n程式輸出9+4總和13"
        },
        {
          "input": "6\n5",
          "output": "11",
          "explanation": ""
        }
      ],
      "testCases": [
        {
          "input": "3\n7",
          "expectedOutput": "10",
          "output": "10",
          "score": 10
        },
        {
          "input": "99\n100",
          "expectedOutput": "199",
          "output": "199",
          "score": 10
        },
        {
          "input": "78\n22",
          "expectedOutput": "100",
          "output": "100",
          "score": 10
        },
        {
          "input": "21\n35",
          "expectedOutput": "56",
          "output": "56",
          "score": 10
        }
      ],
      "difficulty": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">第一個數</variable><variable id=\"v2\">第二個數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">第一個數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">第二個數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一個數</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二個數</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "用數學的「＋」積木把兩個數字相加；如果用「字串組合」，兩個數字會被接在一起（例如 9 和 4 變成 94），而不是 13。"
      ],
      "extension": false,
      "sourceCourse": "M0-01-BasicOutput",
      "sourceDifficulty": "L1"
    }
  ]
};
