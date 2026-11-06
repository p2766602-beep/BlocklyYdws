// Built by tools/lib/course-store.mjs：courses/B1-04-MultiBranch.js ＋ courses-overrides/B1-04-MultiBranch.json
// 自動產生，請勿手動編輯；要改請用課程編輯器（tools/edit-server.mjs），再重新建置。

export default {
  "code": "B1-04-MultiBranch",
  "title": "K04 條件判斷：多重分支與邏輯運算",
  "description": "基礎知識點課程 U1 程式基礎｜K04 條件判斷：多重分支與邏輯運算（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）",
  "type": "programming",
  "mode": "learning",
  "tier": "t0",
  "knowledgePoint": "K04",
  "unit": "U1 程式基礎",
  "tasks": [
    {
      "id": "A-03-0",
      "title": "比較大小",
      "description": "在生活中常常會需要比較兩個數字誰比較大。\n\n請寫一個程式，輸入兩個整數，輸出較大的數字。\n\n如果兩個數字相同，就輸出「一樣大」。\n\n這樣的練習可以訓練你使用條件判斷。",
      "inputDescription": "",
      "outputDescription": "",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "8\n5",
          "output": "8",
          "explanation": "第一個輸入8\n第二個輸入5\n較大的是數字8，程式輸出8"
        },
        {
          "input": "7\n7",
          "output": "一樣大",
          "explanation": ""
        }
      ],
      "testCases": [
        {
          "input": "3\n7",
          "expectedOutput": "7",
          "output": "7",
          "score": 10
        },
        {
          "input": "99\n100",
          "expectedOutput": "100",
          "output": "100",
          "score": 10
        },
        {
          "input": "78\n22",
          "expectedOutput": "78",
          "output": "78",
          "score": 10
        },
        {
          "input": "21\n21",
          "expectedOutput": "一樣大",
          "output": "一樣大",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">第一個數</variable><variable id=\"v2\">第二個數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">第一個數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">第二個數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一個數</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二個數</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一個數</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一個數</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二個數</field></block></value></block></value><statement name=\"DO1\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二個數</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">一樣大</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "有三種可能：第一個大、第二個大、一樣大，用「如果…否則如果…否則」分成三條路。"
      ],
      "extension": false,
      "sourceCourse": "M0-01-BasicOutput",
      "sourceDifficulty": "L1"
    },
    {
      "id": "BSC01-005",
      "title": "溫度警示",
      "description": "給定目前溫度，請判斷天氣狀態。低於 18 度為 COLD，18 到 27 度為 OK，高於 27 度為 HOT。",
      "inputDescription": "輸入一個整數 T，代表溫度。",
      "outputDescription": "依規則輸出 COLD、OK 或 HOT。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "30",
          "output": "HOT",
          "explanation": "30 高於 27，所以輸出 HOT。"
        }
      ],
      "testCases": [
        {
          "input": "15",
          "expectedOutput": "COLD",
          "output": "COLD",
          "score": 10
        },
        {
          "input": "18",
          "expectedOutput": "OK",
          "output": "OK",
          "score": 10
        },
        {
          "input": "27",
          "expectedOutput": "OK",
          "output": "OK",
          "score": 10
        },
        {
          "input": "30",
          "expectedOutput": "HOT",
          "output": "HOT",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">溫度</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">溫度</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">溫度</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">18</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">COLD</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">溫度</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">27</field></block></value></block></value><statement name=\"DO1\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">HOT</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">OK</field></block></value></block></statement></block></next></block></next></block></next></block></xml>",
      "hints": [
        "把溫度分成三段，想清楚 18 和 27 這兩個邊界值各屬於哪一段。"
      ],
      "extension": false,
      "sourceCourse": "M0-03-Conditionals",
      "sourceDifficulty": "L2"
    },
    {
      "id": "BSC01-006",
      "title": "成績等第",
      "description": "給定一個分數，請依分數輸出等第。90 分以上為 A，80 到 89 為 B，70 到 79 為 C，60 到 69 為 D，未滿 60 為 E。",
      "inputDescription": "輸入一個整數 S，代表分數。",
      "outputDescription": "輸出一個字母，代表等第。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "86",
          "output": "B",
          "explanation": "86 介於 80 到 89，所以等第為 B。"
        }
      ],
      "testCases": [
        {
          "input": "95",
          "expectedOutput": "A",
          "output": "A",
          "score": 10
        },
        {
          "input": "86",
          "expectedOutput": "B",
          "output": "B",
          "score": 10
        },
        {
          "input": "70",
          "expectedOutput": "C",
          "output": "C",
          "score": 10
        },
        {
          "input": "59",
          "expectedOutput": "E",
          "output": "E",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">分數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"3\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">90</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">80</field></block></value></block></value><statement name=\"DO1\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">70</field></block></value></block></value><statement name=\"DO2\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">分數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><statement name=\"DO3\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">D</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">E</field></block></value></block></statement></block></next></block></next></block></next></block></xml>",
      "hints": [
        "從最高的等第開始判斷（先判斷 ≥90），後面的條件就可以寫得比較簡單。"
      ],
      "extension": false,
      "sourceCourse": "M0-03-Conditionals",
      "sourceDifficulty": "L2"
    },
    {
      "id": "BSC01-004",
      "title": "門票優惠判斷",
      "description": "某遊樂園規定，年齡小於 12 歲或大於等於 65 歲可以購買優惠票，其餘為一般票。",
      "inputDescription": "輸入一個整數 A，代表年齡。",
      "outputDescription": "若可購買優惠票，輸出 DISCOUNT；否則輸出 NORMAL。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "10",
          "output": "DISCOUNT",
          "explanation": "10 歲小於 12 歲，可以購買優惠票。"
        }
      ],
      "testCases": [
        {
          "input": "10",
          "expectedOutput": "DISCOUNT",
          "output": "DISCOUNT",
          "score": 10
        },
        {
          "input": "12",
          "expectedOutput": "NORMAL",
          "output": "NORMAL",
          "score": 10
        },
        {
          "input": "64",
          "expectedOutput": "NORMAL",
          "output": "NORMAL",
          "score": 10
        },
        {
          "input": "65",
          "expectedOutput": "DISCOUNT",
          "output": "DISCOUNT",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">年齡</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">年齡</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">年齡</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">12</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">年齡</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">65</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">DISCOUNT</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">NORMAL</field></block></value></block></statement></block></next></block></next></block></next></block></xml>",
      "hints": [
        "「小於 12 歲」或「大於等於 65 歲」只要符合其中一個就是優惠票，想想要用「且」還是「或」。"
      ],
      "extension": false,
      "sourceCourse": "M0-03-Conditionals",
      "sourceDifficulty": "L2"
    },
    {
      "id": "BSC01-007",
      "title": "三角形成立判斷",
      "description": "給定三個正整數作為邊長，請判斷是否可以形成三角形。任兩邊和都必須大於第三邊。",
      "inputDescription": "輸入三個正整數 A、B、C，代表三邊長。",
      "outputDescription": "若可形成三角形，輸出 YES；否則輸出 NO。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "3 4 5",
          "output": "YES",
          "explanation": "3、4、5 可以形成三角形。"
        }
      ],
      "testCases": [
        {
          "input": "3 4 5",
          "expectedOutput": "YES",
          "output": "YES",
          "score": 10
        },
        {
          "input": "1 2 3",
          "expectedOutput": "NO",
          "output": "NO",
          "score": 10
        },
        {
          "input": "5 5 9",
          "expectedOutput": "YES",
          "output": "YES",
          "score": 10
        },
        {
          "input": "2 2 5",
          "expectedOutput": "NO",
          "output": "NO",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">第一邊</variable><variable id=\"v2\">第二邊</variable><variable id=\"v3\">第三邊</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">第一邊</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">第二邊</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">第三邊</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一邊</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二邊</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第三邊</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二邊</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第三邊</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一邊</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">第一邊</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第三邊</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第二邊</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">YES</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">NO</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "三組「兩邊和大於第三邊」必須全部成立才是三角形，想想要用「且」還是「或」。"
      ],
      "extension": false,
      "sourceCourse": "M0-03-Conditionals",
      "sourceDifficulty": "L2"
    }
  ]
};
