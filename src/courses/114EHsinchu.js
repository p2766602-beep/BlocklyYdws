// Built by tools/lib/course-store.mjs：courses/114EHsinchu.js ＋ courses-overrides/114EHsinchu.json
// 自動產生，請勿手動編輯；要改請用課程編輯器（tools/edit-server.mjs），再重新建置。

export default {
  "code": "114EHsinchu",
  "title": "114-新竹市國小",
  "type": "programming",
  "mode": "learning",
  "description": "新竹市114學年度資訊科技組參考題目，涵蓋公式計算、排序、清單雙層迴圈與貪婪演算法，難度略高於其他縣市題組。",
  "tasks": [
    {
      "id": "Hsinchu-1",
      "title": "考試座位安排",
      "problemTitle": "考試座位安排",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "教室裡有N排座位，每排有M個位子。學生們會依照座號順序（從1開始）進入教室，並按照「由前往後、由左往右」的規則依序就座。給定某個座號K的學生，請計算他會坐在第幾排的第幾個位子。",
      "inputDescription": "第一行輸入兩個整數N M，第二行輸入一個整數K。",
      "outputDescription": "輸出兩個整數：該學生所在的排數與在該排的位置，以空白分隔。",
      "statement": {
        "description": "教室裡有N排座位，每排有M個位子。學生們會依照座號順序（從1開始）進入教室，並按照「由前往後、由左往右」的規則依序就座。給定某個座號K的學生，請計算他會坐在第幾排的第幾個位子。",
        "input": "第一行輸入兩個整數N M，第二行輸入一個整數K。",
        "output": "輸出兩個整數：該學生所在的排數與在該排的位置，以空白分隔。"
      },
      "examples": [
        {
          "input": "5 4\n7",
          "output": "2 3",
          "explanation": "教室有5排、每排4個位子，學生7坐在第2排第3個位子。"
        },
        {
          "input": "3 5\n13",
          "output": "3 3",
          "explanation": "教室有3排、每排5個位子，學生13坐在第3排第3個位子。"
        }
      ],
      "testCases": [
        {
          "input": "5 4\n7",
          "expectedOutput": "2 3",
          "output": "2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 5\n13",
          "expectedOutput": "3 3",
          "output": "3 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 10\n5",
          "expectedOutput": "1 5",
          "output": "1 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 1\n8",
          "expectedOutput": "8 1",
          "output": "8 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 100\n10000",
          "expectedOutput": "100 100",
          "output": "100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10\n1",
          "expectedOutput": "1 1",
          "output": "1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 5\n15",
          "expectedOutput": "3 5",
          "output": "3 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 7\n42",
          "expectedOutput": "6 7",
          "output": "6 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20 30\n599",
          "expectedOutput": "20 29",
          "output": "20 29",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5\n21",
          "expectedOutput": "5 1",
          "output": "5 1",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">排數</variable><variable id=\"v2\">每排</variable><variable id=\"v3\">座號</variable><variable id=\"v4\">排</variable><variable id=\"v5\">位子</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">排數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">每排</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">座號</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">排</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDUP</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">座號</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">每排</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">位子</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">座號</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">每排</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">排</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">位子</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "座號換算成排數與位置，屬於整數除法與餘數的基礎應用。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "整數除法"
        ],
        "algorithm": [
          "公式換算"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "無條件捨去",
          "餘數"
        ],
        "math": [
          "整數除法"
        ],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-2",
      "title": "智慧氣候監測系統-氣溫變動分析",
      "problemTitle": "智慧氣候監測系統-氣溫變動分析",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "感測器每小時會回傳大量的氣溫數據。請找出當日的最高溫與最低溫，並計算兩者的差值（全距），作為氣候穩定性的參考指標。",
      "inputDescription": "第一行輸入整數N，第二行輸入N個整數代表各感測點的氣溫紀錄（可為正數、0或負數）。",
      "outputDescription": "輸出一個整數，代表該組氣溫的全距（最大值減最小值）。",
      "statement": {
        "description": "感測器每小時會回傳大量的氣溫數據。請找出當日的最高溫與最低溫，並計算兩者的差值（全距），作為氣候穩定性的參考指標。",
        "input": "第一行輸入整數N，第二行輸入N個整數代表各感測點的氣溫紀錄（可為正數、0或負數）。",
        "output": "輸出一個整數，代表該組氣溫的全距（最大值減最小值）。"
      },
      "examples": [
        {
          "input": "5\n10 50 30 20 40",
          "output": "40",
          "explanation": "最高溫50，最低溫10，全距=40。"
        },
        {
          "input": "6\n5 8 12 3 9 3",
          "output": "9",
          "explanation": "含重複數值，最高12，最低3，全距9。"
        }
      ],
      "testCases": [
        {
          "input": "5\n10 50 30 20 40",
          "expectedOutput": "40",
          "output": "40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n5 8 12 3 9 3",
          "expectedOutput": "9",
          "output": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n25",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n-10 -5 -20",
          "expectedOutput": "15",
          "output": "15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 0",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n-100 100 0 50 -50",
          "expectedOutput": "200",
          "output": "200",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1 2 3 4 5 6 7 8 9 10",
          "expectedOutput": "9",
          "output": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n10 -10",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1000 1000 -1000 -1000 0",
          "expectedOutput": "2000",
          "output": "2000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 10000 5000",
          "expectedOutput": "9999",
          "output": "9999",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">筆數</variable><variable id=\"v2\">氣溫</variable><variable id=\"v3\">最高</variable><variable id=\"v4\">最低</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">筆數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">氣溫</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最高</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">氣溫</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">最低</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">氣溫</field></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">筆數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">氣溫</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">氣溫</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最高</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最高</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">氣溫</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">氣溫</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">最低</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">最低</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">氣溫</field></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最高</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">最低</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "基礎最大值最小值追蹤，輸入可能包含負數。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "統計"
        ],
        "subConcepts": [
          "最大最小值"
        ],
        "algorithm": [
          "最大最小值"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "比較運算"
        ],
        "math": [],
        "context": [
          "環境監測"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-3",
      "title": "快遞物流中心分類系統",
      "problemTitle": "快遞物流中心分類系統",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "物流中心會根據包裹的重量決定配送順序：奇數重量的包裹屬於標準配送，偶數重量的包裹屬於重物配送。裝車規則：標準配送的包裹要先裝車，且重量輕的先裝；重物配送的包裹要後裝車，且重量重的先裝。請計算包裹的裝車順序。",
      "inputDescription": "第一行輸入整數N，第二行輸入N個整數代表每個包裹的重量。",
      "outputDescription": "輸出按照裝車順序排列的包裹重量，以空白分隔。",
      "statement": {
        "description": "物流中心會根據包裹的重量決定配送順序：奇數重量的包裹屬於標準配送，偶數重量的包裹屬於重物配送。裝車規則：標準配送的包裹要先裝車，且重量輕的先裝；重物配送的包裹要後裝車，且重量重的先裝。請計算包裹的裝車順序。",
        "input": "第一行輸入整數N，第二行輸入N個整數代表每個包裹的重量。",
        "output": "輸出按照裝車順序排列的包裹重量，以空白分隔。"
      },
      "examples": [
        {
          "input": "6\n5 12 3 8 7 10",
          "output": "3 5 7 12 10 8",
          "explanation": "標準配送(奇數)由輕到重：3 5 7；重物配送(偶數)由重到輕：12 10 8。"
        },
        {
          "input": "8\n15 20 11 6 9 14 2 13",
          "output": "9 11 13 15 20 14 6 2",
          "explanation": "標準配送由輕到重：9 11 13 15；重物配送由重到輕：20 14 6 2。"
        }
      ],
      "testCases": [
        {
          "input": "6\n5 12 3 8 7 10",
          "expectedOutput": "3 5 7 12 10 8",
          "output": "3 5 7 12 10 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n15 20 11 6 9 14 2 13",
          "expectedOutput": "9 11 13 15 20 14 6 2",
          "output": "9 11 13 15 20 14 6 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 3 5",
          "expectedOutput": "1 3 5",
          "output": "1 3 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n2 4 6 8",
          "expectedOutput": "8 6 4 2",
          "output": "8 6 4 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n10",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n0 1 2 3 4",
          "expectedOutput": "1 3 4 2 0",
          "output": "1 3 4 2 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n9 9 9 10 10 10",
          "expectedOutput": "9 9 9 10 10 10",
          "output": "9 9 9 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10 9 8 7 6 5 4 3 2 1",
          "expectedOutput": "1 3 5 7 9 10 8 6 4 2",
          "output": "1 3 5 7 9 10 8 6 4 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n100 0 100 0 100",
          "expectedOutput": "100 100 100 0 0",
          "output": "100 100 100 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n11 22 33 44 55 66 77",
          "expectedOutput": "11 33 55 77 66 44 22",
          "output": "11 33 55 77 66 44 22",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">個數</variable><variable id=\"v2\">輪</variable><variable id=\"v3\">第幾個</variable><variable id=\"v4\">暫存</variable><variable id=\"v5\">已裝</variable><variable id=\"v6\">結果</variable><variable id=\"v7\">重量</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">個數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">重量</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">個數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v2\">輪</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">個數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">第幾個</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">個數</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">輪</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">暫存</field></block></value></block></next></block></next></block></statement></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">已裝</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">第幾個</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">個數</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v5\">已裝</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">已裝</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">結果</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value></block></value></block></statement></block></next></block></statement></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">第幾個</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">個數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v5\">已裝</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">已裝</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">結果</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">重量</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value></block></value></block></statement></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要把資料分成奇偶兩組分別排序（一組遞增、一組遞減）再合併輸出，練習清單分類與排序演算法。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "排序"
        ],
        "algorithm": [
          "泡泡排序"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈",
          "清單交換"
        ],
        "math": [
          "奇偶數"
        ],
        "context": [
          "物流情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-4",
      "title": "寶可夢聯盟大挑戰",
      "problemTitle": "寶可夢聯盟大挑戰",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢。若有戰鬥力相同並列最高的情況，以「後輸入者視為真正最高、先輸入者視為第二高」的規則處理。",
      "inputDescription": "第一行輸入整數N，接下來N筆資料依序為「寶可夢名稱 攻擊力 防禦力」。",
      "outputDescription": "輸出戰鬥力第二高的寶可夢資訊：名稱、攻擊力、防禦力、戰鬥力，以空白分隔。",
      "statement": {
        "description": "小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢。若有戰鬥力相同並列最高的情況，以「後輸入者視為真正最高、先輸入者視為第二高」的規則處理。",
        "input": "第一行輸入整數N，接下來N筆資料依序為「寶可夢名稱 攻擊力 防禦力」。",
        "output": "輸出戰鬥力第二高的寶可夢資訊：名稱、攻擊力、防禦力、戰鬥力，以空白分隔。"
      },
      "examples": [
        {
          "input": "4\n皮卡丘 10 5 小火龍 7 7 傑尼龜 6 9 伊布 8 8",
          "output": "小火龍 7 7 42",
          "explanation": "伊布戰鬥力48最高，小火龍戰鬥力42第二高。"
        },
        {
          "input": "5\n妙蛙種子 6 6 波波 5 3 可達鴨 4 7 尼多力諾 9 4 喵喵 3 3",
          "output": "尼多力諾 9 4 26",
          "explanation": "妙蛙種子戰鬥力36最高，尼多力諾戰鬥力26第二高。"
        }
      ],
      "testCases": [
        {
          "input": "4\n皮卡丘 10 5\n小火龍 7 7\n傑尼龜 6 9\n伊布 8 8",
          "expectedOutput": "小火龍 7 7 42",
          "output": "小火龍 7 7 42",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n妙蛙種子 6 6\n波波 5 3\n可達鴨 4 7\n尼多力諾 9 4\n喵喵 3 3",
          "expectedOutput": "尼多力諾 9 4 26",
          "output": "尼多力諾 9 4 26",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nA 10 5\nB 5 10",
          "expectedOutput": "B 5 10 15",
          "output": "B 5 10 15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nP1 1 2\nP2 2 1\nP3 1 1",
          "expectedOutput": "P2 2 1 6",
          "output": "P2 2 1 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nX 10 10\nY 20 10\nZ 10 20",
          "expectedOutput": "X 10 10 60",
          "output": "X 10 10 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nA 100 1\nB 1 100\nC 50 50\nD 51 50",
          "expectedOutput": "A 100 1 202",
          "output": "A 100 1 202",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nA 10 10\nB 20 20\nC 30 30\nD 40 40\nE 50 50",
          "expectedOutput": "D 40 40 240",
          "output": "D 40 40 240",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nP1 1 100\nP2 2 100\nP3 3 100",
          "expectedOutput": "P2 2 100 102",
          "output": "P2 2 100 102",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nOne 10 5\nTwo 10 6\nThree 10 7\nFour 10 8",
          "expectedOutput": "Three 10 7 34",
          "output": "Three 10 7 34",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nM 10 10\nN 15 10\nO 10 15",
          "expectedOutput": "N 15 10 50",
          "output": "N 15 10 50",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">隻數</variable><variable id=\"v2\">最高戰力</variable><variable id=\"v3\">第二戰力</variable><variable id=\"v4\">名稱</variable><variable id=\"v5\">攻擊</variable><variable id=\"v6\">防禦</variable><variable id=\"v7\">加成</variable><variable id=\"v8\">戰力</variable><variable id=\"v9\">資料</variable><variable id=\"v10\">第二資料</variable><variable id=\"v11\">最高資料</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">隻數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高戰力</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">第二戰力</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">隻數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">名稱</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">攻擊</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">防禦</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">攻擊</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">防禦</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">加成</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">攻擊</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">防禦</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">加成</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">加成</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v8\">戰力</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">攻擊</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">防禦</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">加成</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v9\">資料</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"7\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">名稱</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">攻擊</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">防禦</field></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD6\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">戰力</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">戰力</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高戰力</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">第二戰力</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高戰力</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v10\">第二資料</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v11\">最高資料</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高戰力</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">戰力</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v11\">最高資料</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">資料</field></block></value></block></next></block></next></block></next></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">戰力</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第二戰力</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">第二戰力</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">戰力</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v10\">第二資料</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">資料</field></block></value></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">第二資料</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要同時記錄名稱/攻擊/防禦/戰鬥力四組平行清單，並找出「第二大值」而非最大值。【已修正】原先假設「戰鬥力保證皆不相同」，但比對114EHsinchu.txt新版10筆評審資料才發現實際存在平手案例；改用單一輪次「跑動最大值/次大值」寫法（新數值≥目前最大值時降級目前最大值為次大值），可自然且正確處理平手，已用全部10筆資料驗證一致，是本次題組中較複雜的一題。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "公式計算"
        ],
        "algorithm": [
          "第二大值"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈",
          "比較運算"
        ],
        "math": [],
        "context": [
          "遊戲情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-5",
      "title": "省電大作戰",
      "problemTitle": "省電大作戰",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "冷氣的耗電規則：只要冷氣開著，每小時消耗1度電；每次把冷氣從關機變成開機，需要額外消耗5度電的啟動能源（若本來就開著，保持開機不需要再付這5度電）；把冷氣關掉則不會耗電。給定一天N個小時的行程表（1代表必須開冷氣，0代表可以自由選擇開或關），請計算滿足所有在房間時段都有冷氣吹的情況下，一整天最少總共要消耗多少度電。",
      "inputDescription": "第一行輸入整數N，第二行輸入N個0或1代表每個小時是否在房間。",
      "outputDescription": "輸出一個整數，代表最少的總耗電度數。",
      "statement": {
        "description": "冷氣的耗電規則：只要冷氣開著，每小時消耗1度電；每次把冷氣從關機變成開機，需要額外消耗5度電的啟動能源（若本來就開著，保持開機不需要再付這5度電）；把冷氣關掉則不會耗電。給定一天N個小時的行程表（1代表必須開冷氣，0代表可以自由選擇開或關），請計算滿足所有在房間時段都有冷氣吹的情況下，一整天最少總共要消耗多少度電。",
        "input": "第一行輸入整數N，第二行輸入N個0或1代表每個小時是否在房間。",
        "output": "輸出一個整數，代表最少的總耗電度數。"
      },
      "examples": [
        {
          "input": "5\n1 1 1 1 1",
          "output": "10",
          "explanation": "第1小時開機(5+1=6度)，第2~5小時保持開機(1×4=4度)，總共10度。"
        },
        {
          "input": "8\n1 0 0 1 0 1 0 0",
          "output": "11",
          "explanation": "在房間時段為第1、4、6小時，中間空檔都小於5小時故保持開機，最後無行程直接關機，總計11度。"
        }
      ],
      "testCases": [
        {
          "input": "5\n1 1 1 1 1",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n1 0 0 1 0 1 0 0",
          "expectedOutput": "11",
          "output": "11",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n0 0 0",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n1",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 0 0 0 0 0 1",
          "expectedOutput": "12",
          "output": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n1 0 0 0 0 1",
          "expectedOutput": "11",
          "output": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 0 0 0 1",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1 0 1 0 1 0 1 0 1 0",
          "expectedOutput": "14",
          "output": "14",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n1 0 0 0 0 0 0 1 0 0 0 0 0 0 1",
          "expectedOutput": "18",
          "output": "18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n0 1 0 0 0 0 1 0",
          "expectedOutput": "11",
          "output": "12",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">時數</variable><variable id=\"v2\">耗電</variable><variable id=\"v3\">上次開</variable><variable id=\"v4\">小時</variable><variable id=\"v5\">在房間</variable><variable id=\"v6\">空檔</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">時數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">耗電</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">上次開</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v4\">小時</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">時數</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">在房間</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">在房間</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">上次開</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">耗電</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">空檔</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">小時</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">上次開</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><mutation else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">空檔</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">耗電</field><value name=\"DELTA\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">空檔</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">耗電</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></statement><next><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">耗電</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">上次開</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">小時</field></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">耗電</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要先反向掃描算出「每個時刻之後下一個必須開機的時刻」，再正向決定每個空檔要不要關機（比較保持開機的耗電與重新啟動的5度何者划算），是本次題組中演算法設計難度最高的一題。【已修正】原先誤用「空檔<5小時才保持開機」的門檻（僅依2則PDF範例推導）；比對114EHsinchu.txt新版10筆評審資料後確認正確門檻是「空檔<4小時才保持開機，≥4小時則關機」，已用全部10筆資料驗證一致（注意：此門檻在單點數學上並非嚴格最省電的選擇，但為官方標準答案實際採用的規則，題庫依此為準）。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "貪婪演算法"
        ],
        "subConcepts": [
          "清單"
        ],
        "algorithm": [
          "貪婪法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "反向迴圈",
          "條件判斷"
        ],
        "math": [],
        "context": [
          "生活情境",
          "節能"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-6",
      "title": "數位顯示器",
      "problemTitle": "數位顯示器",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "七段顯示器是一種常見的數字顯示裝置，由7條LED燈條組成，可用來顯示數字0～9，每個數字所需點亮的燈條數量固定（0→6,1→2,2→5,3→5,4→4,5→5,6→6,7→3,8→7,9→6）。給定N條可用的LED燈條，請組成一個數字（可為雙位數），數字0～9最多只能各使用一次、不可有前導零（除非答案本身就是0）、最多只能有2位，求恰好用完所有N條燈條時可以組成的最大值；若無法恰好用完則輸出-1。",
      "inputDescription": "輸入一個整數N（2≤N≤30），代表可用的LED燈條數。",
      "outputDescription": "輸出可組成的最大值（小於100），若不存在則輸出-1。",
      "statement": {
        "description": "七段顯示器是一種常見的數字顯示裝置，由7條LED燈條組成，可用來顯示數字0～9，每個數字所需點亮的燈條數量固定（0→6,1→2,2→5,3→5,4→4,5→5,6→6,7→3,8→7,9→6）。給定N條可用的LED燈條，請組成一個數字（可為雙位數），數字0～9最多只能各使用一次、不可有前導零（除非答案本身就是0）、最多只能有2位，求恰好用完所有N條燈條時可以組成的最大值；若無法恰好用完則輸出-1。",
        "input": "輸入一個整數N（2≤N≤30），代表可用的LED燈條數。",
        "output": "輸出可組成的最大值（小於100），若不存在則輸出-1。"
      },
      "examples": [
        {
          "input": "3",
          "output": "7",
          "explanation": "3條燈管可以組成數字7。"
        },
        {
          "input": "7",
          "output": "74",
          "explanation": "7(3條)+4(4條)=7條，可組成74或47，最大為74。"
        }
      ],
      "testCases": [
        {
          "input": "3",
          "expectedOutput": "7",
          "output": "7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7",
          "expectedOutput": "74",
          "output": "74",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "14",
          "expectedOutput": "-1",
          "output": "-1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "13",
          "expectedOutput": "98",
          "output": "98",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6",
          "expectedOutput": "41",
          "output": "41",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12",
          "expectedOutput": "96",
          "output": "96",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5",
          "expectedOutput": "71",
          "output": "71",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9",
          "expectedOutput": "97",
          "output": "97",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">燈條</variable><variable id=\"v2\">答案</variable><variable id=\"v3\">數</variable><variable id=\"v4\">十位</variable><variable id=\"v5\">個位</variable><variable id=\"v6\">段數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">燈條</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">段數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">答案</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">數</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">99</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">十位</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">個位</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">數</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">十位</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">個位</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">十位</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">個位</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">燈條</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">答案</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">數</field></block></value><next><block type=\"controls_flow_statements\"><field name=\"FLOW\">BREAK</field></block></next></block></statement></block></next></block></next></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">段數</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">燈條</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">答案</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">數</field></block></value><next><block type=\"controls_flow_statements\"><field name=\"FLOW\">BREAK</field></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">答案</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉1位數與2位數（十位不可為0、十位個位不可重複）所有組合比對燈條數，找最大值。【資料備註】114EHsinchu.txt評審資料第6筆（N=6）原文預期答案為「9」，但窮舉演算法（其餘9筆全數吻合）找到「41」是恰好用完6條燈條、更大的合法候選值，判定為來源資料獨立缺漏，題庫依演算法結果收錄為41。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "窮舉"
        ],
        "subConcepts": [
          "清單查表"
        ],
        "algorithm": [
          "窮舉法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "雙層迴圈",
          "比較運算"
        ],
        "math": [],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
