// Hand-authored by Claude from data/problem_bank_master_complete.csv (114EHsinchu-1~6)
// and cross-checked against every worked example in the source PDF via a JS reference
// implementation before being written here. Not produced by export_course_js.py — that tool's
// L1~L3-only "第一波" scope silently drops content (see MVP-J14 in blockly-lab/docs/MVP_LOG.md),
// so re-running any CSV exporter against this file's course code is not safe without checking
// its scope first.
//
// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness
// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）
// 對每一筆testCases實際跑過，不是憑印象手刻。
// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。

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
          "score": 20,
          "hidden": false
        },
        {
          "input": "3 5\n13",
          "expectedOutput": "3 3",
          "output": "3 3",
          "score": 20,
          "hidden": false
        },
        {
          "input": "1 1\n1",
          "expectedOutput": "1 1",
          "output": "1 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "10 10\n100",
          "expectedOutput": "10 10",
          "output": "10 10",
          "score": 20,
          "hidden": false
        },
        {
          "input": "4 3\n1",
          "expectedOutput": "1 1",
          "output": "1 1",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"s1_n\">N</variable><variable id=\"s1_m\">M</variable><variable id=\"s1_k\">K</variable><variable id=\"s1_row\">row</variable><variable id=\"s1_pos\">pos</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N M</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s1_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s1_m\">M</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入K</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s1_k\">K</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s1_row\">row</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_k\">K</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_m\">M</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s1_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_k\">K</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_row\">row</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_m\">M</field></block></value></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_row\">row</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s1_pos\">pos</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
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
          "score": 25,
          "hidden": false
        },
        {
          "input": "6\n5 8 12 3 9 3",
          "expectedOutput": "9",
          "output": "9",
          "score": 25,
          "hidden": false
        },
        {
          "input": "1\n7",
          "expectedOutput": "0",
          "output": "0",
          "score": 25,
          "hidden": false
        },
        {
          "input": "3\n-5 0 5",
          "expectedOutput": "10",
          "output": "10",
          "score": 25,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"s2_n\">N</variable><variable id=\"s2_i\">i</variable><variable id=\"s2_v\">v</variable><variable id=\"s2_max\">maxv</variable><variable id=\"s2_min\">minv</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s2_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s2_max\">maxv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-999999999</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s2_min\">minv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">999999999</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s2_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_max\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s2_max\">maxv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_v\">v</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_min\">minv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s2_min\">minv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_v\">v</field></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_max\">maxv</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s2_min\">minv</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
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
          "score": 20,
          "hidden": false
        },
        {
          "input": "8\n15 20 11 6 9 14 2 13",
          "expectedOutput": "9 11 13 15 20 14 6 2",
          "output": "9 11 13 15 20 14 6 2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n1 3 5",
          "expectedOutput": "1 3 5",
          "output": "1 3 5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n2 4 6",
          "expectedOutput": "6 4 2",
          "output": "6 4 2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "1\n7",
          "expectedOutput": "7",
          "output": "7",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"s3_n\">N</variable><variable id=\"s3_v\">v</variable><variable id=\"s3_i\">i</variable><variable id=\"s3_j\">j</variable><variable id=\"s3_odds\">odds</variable><variable id=\"s3_evens\">evens</variable><variable id=\"s3_oddcount\">oddcount</variable><variable id=\"s3_evencount\">evencount</variable><variable id=\"s3_tmp\">tmp</variable><variable id=\"s3_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_odds\">odds</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_evens\">evens</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_v\">v</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_v\">v</field></block></value></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_v\">v</field></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_j\">j</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_j\">j</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_tmp\">tmp</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_tmp\">tmp</field></block></value></block></next></block></next></block></statement></block></statement></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_j\">j</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_j\">j</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_tmp\">tmp</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_tmp\">tmp</field></block></value></block></next></block></next></block></statement></block></statement></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_oddcount\">oddcount</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_odds\">odds</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evencount\">evencount</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_evens\">evens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_i\">i</field></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s3_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
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
      "description": "小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢（已保證每隻寶可夢的戰鬥力值皆不相同）。",
      "inputDescription": "第一行輸入整數N，接下來N筆資料依序為「寶可夢名稱 攻擊力 防禦力」。",
      "outputDescription": "輸出戰鬥力第二高的寶可夢資訊：名稱、攻擊力、防禦力、戰鬥力，以空白分隔。",
      "statement": {
        "description": "小智的隊伍中共有N隻寶可夢，每隻都有名字、攻擊力、防禦力。戰鬥力=(攻擊力+防禦力)×戰技加成，其中攻擊力>防禦力時加成為2，攻擊力=防禦力時加成為3，攻擊力<防禦力時加成為1。小智要把最強的寶可夢保留到最後，因此現在只能派出戰鬥力排名第二高的寶可夢（已保證每隻寶可夢的戰鬥力值皆不相同）。",
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
          "input": "4\n皮卡丘 10 5 小火龍 7 7 傑尼龜 6 9 伊布 8 8",
          "expectedOutput": "小火龍 7 7 42",
          "output": "小火龍 7 7 42",
          "score": 33,
          "hidden": false
        },
        {
          "input": "5\n妙蛙種子 6 6 波波 5 3 可達鴨 4 7 尼多力諾 9 4 喵喵 3 3",
          "expectedOutput": "尼多力諾 9 4 26",
          "output": "尼多力諾 9 4 26",
          "score": 33,
          "hidden": false
        },
        {
          "input": "2\nA 1 1 B 2 2",
          "expectedOutput": "A 1 1 6",
          "output": "A 1 1 6",
          "score": 33,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"s4_n\">N</variable><variable id=\"s4_names\">names</variable><variable id=\"s4_atks\">atks</variable><variable id=\"s4_defs\">defs</variable><variable id=\"s4_combats\">combats</variable><variable id=\"s4_name\">name</variable><variable id=\"s4_atk\">atk</variable><variable id=\"s4_def\">def</variable><variable id=\"s4_mult\">mult</variable><variable id=\"s4_i\">i</variable><variable id=\"s4_max1\">max1</variable><variable id=\"s4_max2\">max2</variable><variable id=\"s4_idx2\">idx2</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_names\">names</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_atks\">atks</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_defs\">defs</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_combats\">combats</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_name\">name</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_atk\">atk</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_def\">def</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_atk\">atk</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_def\">def</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_mult\">mult</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_atk\">atk</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_def\">def</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_mult\">mult</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_mult\">mult</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_names\">names</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_name\">name</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_atks\">atks</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_atk\">atk</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_defs\">defs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_def\">def</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_atk\">atk</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_def\">def</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_mult\">mult</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_max1\">max1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-999999999</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_max1\">max1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_max1\">max1</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_max2\">max2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-999999999</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_idx2\">idx2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_max1\">max1</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_max2\">max2</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_max2\">max2</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s4_idx2\">idx2</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_i\">i</field></block></value></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"7\"></mutation><value name=\"ADD0\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_names\">names</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_idx2\">idx2</field></block></value></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_atks\">atks</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_idx2\">idx2</field></block></value></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_defs\">defs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_idx2\">idx2</field></block></value></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD6\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_combats\">combats</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s4_idx2\">idx2</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要同時記錄名稱/攻擊/防禦/戰鬥力四組平行清單，並找出「第二大值」而非最大值，是本次題組中較複雜的一題。",
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
          "score": 16,
          "hidden": false
        },
        {
          "input": "8\n1 0 0 1 0 1 0 0",
          "expectedOutput": "11",
          "output": "11",
          "score": 16,
          "hidden": false
        },
        {
          "input": "1\n1",
          "expectedOutput": "6",
          "output": "6",
          "score": 16,
          "hidden": false
        },
        {
          "input": "1\n0",
          "expectedOutput": "0",
          "output": "0",
          "score": 16,
          "hidden": false
        },
        {
          "input": "6\n1 0 0 0 0 0",
          "expectedOutput": "6",
          "output": "6",
          "score": 16,
          "hidden": false
        },
        {
          "input": "6\n1 0 0 0 0 1",
          "expectedOutput": "11",
          "output": "11",
          "score": 16,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"s5_n\">N</variable><variable id=\"s5_sched\">sched</variable><variable id=\"s5_next1\">next1</variable><variable id=\"s5_v\">v</variable><variable id=\"s5_i\">i</variable><variable id=\"s5_state\">state</variable><variable id=\"s5_total\">total</variable><variable id=\"s5_gap\">gap</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_sched\">sched</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_next1\">next1</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">999999</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_sched\">sched</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s5_i\">i</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_n\">N</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_sched\">sched</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_next1\">next1</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_n\">N</field></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_next1\">next1</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_next1\">next1</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_state\">state</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_total\">total</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_sched\">sched</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_state\">state</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_total\">total</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_total\">total</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_state\">state</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_total\">total</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_total\">total</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><statement name=\"ELSE\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_state\">state</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_gap\">gap</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_next1\">next1</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_i\">i</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_gap\">gap</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_total\">total</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_total\">total</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s5_state\">state</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement></block></next></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s5_total\">total</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要先反向掃描算出「每個時刻之後下一個必須開機的時刻」，再正向決定每個空檔要不要關機（比較保持開機的耗電與重新啟動的5度何者划算），是本次題組中演算法設計難度最高的一題。",
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
          "score": 20,
          "hidden": false
        },
        {
          "input": "7",
          "expectedOutput": "74",
          "output": "74",
          "score": 20,
          "hidden": false
        },
        {
          "input": "6",
          "expectedOutput": "41",
          "output": "41",
          "score": 20,
          "hidden": false
        },
        {
          "input": "8",
          "expectedOutput": "91",
          "output": "91",
          "score": 20,
          "hidden": false
        },
        {
          "input": "14",
          "expectedOutput": "-1",
          "output": "-1",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"s6_n\">N</variable><variable id=\"s6_seg\">seg</variable><variable id=\"s6_d\">d</variable><variable id=\"s6_cost\">cost</variable><variable id=\"s6_best\">best</variable><variable id=\"s6_t\">t</variable><variable id=\"s6_u\">u</variable><variable id=\"s6_cand\">cand</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_seg\">seg</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"10\"></mutation><value name=\"ADD0\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><value name=\"ADD1\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"ADD2\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"ADD3\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"ADD4\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value><value name=\"ADD5\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"ADD6\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><value name=\"ADD7\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value><value name=\"ADD8\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value><value name=\"ADD9\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_best\">best</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s6_d\">d</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">9</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_cost\">cost</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_seg\">seg</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_d\">d</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_cost\">cost</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_n\">N</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_d\">d</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_best\">best</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_best\">best</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_d\">d</field></block></value></block></statement></block></statement></block></next></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"s6_t\">t</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">9</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"s6_u\">u</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">9</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_u\">u</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_t\">t</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_cost\">cost</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_seg\">seg</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_t\">t</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_seg\">seg</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_u\">u</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_cost\">cost</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_n\">N</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_cand\">cand</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_t\">t</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_u\">u</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_cand\">cand</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_best\">best</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"s6_best\">best</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_cand\">cand</field></block></value></block></statement></block></next></block></statement></block></next></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"s6_best\">best</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉1位數與2位數（十位不可為0、十位個位不可重複）所有組合比對燈條數，找最大值。",
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
