// Hand-authored by Claude from data/problem_bank_master_complete.csv (114EChaiyi-1~9)
// and cross-checked against every worked example in the source PDF via a JS reference
// implementation before being written here. Not produced by export_course_js.py — that tool's
// L1~L3-only "第一波" scope silently drops content (see MVP-J14 in blockly-lab/docs/MVP_LOG.md),
// so re-running any CSV exporter against this file's course code is not safe without checking
// its scope first.
//
// 2026-09-05：已補上全部題目的starterXml範例答案（headless Blockly驗證100% pass，
// 見BlocklyYdws/.scratch_verify/build_chaiyi_e.cjs、build_chaiyi_j.cjs）。
// mode: 'learning'（per 2026-08-07 使用者決定：新題組一律採學習模式，已上架的舊題組
// 由使用者自行於網頁後台切換）。

const course = {
  "code": "114EChaiyi",
  "title": "114-嘉義市國小",
  "type": "programming",
  "mode": "learning",
  "description": "嘉義市114學年度科技教育創意實作競賽-國小資訊科技組題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-07T14:15:54.885Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-嘉義市國小",
    "version": "manual-transcription-verified"
  },
  "tasks": [
    {
      "id": "114EChaiyi-1",
      "title": "營養午餐分析-1：豆製品週頻率",
      "problemTitle": "營養午餐分析-1：豆製品週頻率",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校記錄了 10 天的午餐主菜。請分別判斷第 1~5 天、第 6~10 天，是否「至少出現過一次」豆製品（C）。各輸出 Y（有）或 N（沒有）。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出「Y/N Y/N」，分別代表前5天、後5天是否出現過豆製品。",
      "statement": {
        "description": "學校記錄了 10 天的午餐主菜。請分別判斷第 1~5 天、第 6~10 天，是否「至少出現過一次」豆製品（C）。各輸出 Y（有）或 N（沒有）。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出「Y/N Y/N」，分別代表前5天、後5天是否出現過豆製品。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "N Y",
          "explanation": "前5天(B A B A B)沒有C，後5天(C D E F F)有C，故輸出N Y。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "Y Y",
          "explanation": "前5天(C A B C D)有C，後5天(A B C D E)有C，故輸出Y Y。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "expectedOutput": "N Y",
          "output": "N Y",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "expectedOutput": "Y Y",
          "output": "Y Y",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "expectedOutput": "Y Y",
          "output": "Y Y",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A B D E F A B D E F",
          "expectedOutput": "N N",
          "output": "N N",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C C C C C C C C C C",
          "expectedOutput": "Y Y",
          "output": "Y Y",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e1_list\">list</variable><variable id=\"e1_i\">i</variable><variable id=\"e1_tmp\">tmp</variable><variable id=\"e1_flag1\">flag1</variable><variable id=\"e1_flag2\">flag2</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_list\">list</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_flag1\">flag1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_flag2\">flag2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_flag1\">flag1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e1_flag2\">flag2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_flag1\">flag1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"THEN\"><block type=\"text\"><field name=\"TEXT\">Y</field></block></value><value name=\"ELSE\"><block type=\"text\"><field name=\"TEXT\">N</field></block></value></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e1_flag2\">flag2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"THEN\"><block type=\"text\"><field name=\"TEXT\">Y</field></block></value><value name=\"ELSE\"><block type=\"text\"><field name=\"TEXT\">N</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "判斷前5天與後5天各自是否出現過指定主菜，練習區間內的存在性判斷。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "存在性判斷"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "包含判斷"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-2",
      "title": "營養午餐分析-2：紅肉超量警示",
      "problemTitle": "營養午餐分析-2：紅肉超量警示",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "同樣的 10 天午餐紀錄。請分別判斷第 1~5 天、第 6~10 天，紅肉（B）出現的次數是否「超過」白肉（A）加豆製品（C）出現次數的總和。各輸出 Y（超過）或 N（沒有超過）。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出「Y/N Y/N」，分別代表前5天、後5天紅肉次數是否超過白肉+豆製品次數。",
      "statement": {
        "description": "同樣的 10 天午餐紀錄。請分別判斷第 1~5 天、第 6~10 天，紅肉（B）出現的次數是否「超過」白肉（A）加豆製品（C）出現次數的總和。各輸出 Y（超過）或 N（沒有超過）。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出「Y/N Y/N」，分別代表前5天、後5天紅肉次數是否超過白肉+豆製品次數。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "Y N",
          "explanation": "前5天B有3次，A+C共2次，3>2故Y；後5天B有0次，A+C共1次，0>1不成立故N。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "N N",
          "explanation": "前5天B有1次，A+C共3次，不超過故N；後5天同理N。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "expectedOutput": "Y N",
          "output": "Y N",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "expectedOutput": "N N",
          "output": "N N",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "expectedOutput": "N Y",
          "output": "N Y",
          "score": 20,
          "hidden": false
        },
        {
          "input": "B B B B B A A A A A",
          "expectedOutput": "Y N",
          "output": "Y N",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A C A C A C A C A C",
          "expectedOutput": "N N",
          "output": "N N",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e2_list\">list</variable><variable id=\"e2_i\">i</variable><variable id=\"e2_tmp\">tmp</variable><variable id=\"e2_cb1\">cb1</variable><variable id=\"e2_cac1\">cac1</variable><variable id=\"e2_cb2\">cb2</variable><variable id=\"e2_cac2\">cac2</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_list\">list</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cb1\">cb1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cac1\">cac1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cb2\">cb2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cac2\">cac2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"1\" else=\"0\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cb1\">cb1</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cb1\">cb1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF1\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cac1\">cac1</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cac1\">cac1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"1\" else=\"0\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cb2\">cb2</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cb2\">cb2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF1\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e2_cac2\">cac2</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cac2\">cac2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cb1\">cb1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cac1\">cac1</field></block></value></block></value><value name=\"THEN\"><block type=\"text\"><field name=\"TEXT\">Y</field></block></value><value name=\"ELSE\"><block type=\"text\"><field name=\"TEXT\">N</field></block></value></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cb2\">cb2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e2_cac2\">cac2</field></block></value></block></value><value name=\"THEN\"><block type=\"text\"><field name=\"TEXT\">Y</field></block></value><value name=\"ELSE\"><block type=\"text\"><field name=\"TEXT\">N</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "比較前5天、後5天各自紅肉與白肉+豆製品的次數，練習分類計數與比較。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "分類計數"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "計數比較"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-3",
      "title": "營養午餐分析-3：白肉接紅肉次數",
      "problemTitle": "營養午餐分析-3：白肉接紅肉次數",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "同樣的 10 天午餐紀錄。請分別統計第 1~5 天、第 6~10 天中，「白肉（A）後面緊接著紅肉（B）」這種相鄰組合出現的次數（各區間內部比對，不跨區間）。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出「次數1 次數2」，分別代表前5天、後5天中A後接B的出現次數。",
      "statement": {
        "description": "同樣的 10 天午餐紀錄。請分別統計第 1~5 天、第 6~10 天中，「白肉（A）後面緊接著紅肉（B）」這種相鄰組合出現的次數（各區間內部比對，不跨區間）。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出「次數1 次數2」，分別代表前5天、後5天中A後接B的出現次數。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "2 0",
          "explanation": "前5天(B A B A B)中A後接B出現在第2、4天，共2次；後5天(C D E F F)沒有A，故0次。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "1 1",
          "explanation": "前5天(C A B C D)中A後接B出現1次；後5天(A B C D E)中A後接B出現1次。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "expectedOutput": "2 0",
          "output": "2 0",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "expectedOutput": "1 1",
          "output": "1 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "expectedOutput": "0 0",
          "output": "0 0",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A B A B A A B A B A",
          "expectedOutput": "2 2",
          "output": "2 2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "D D D D D A B A B A",
          "expectedOutput": "0 2",
          "output": "0 2",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e3_list\">list</variable><variable id=\"e3_i\">i</variable><variable id=\"e3_tmp\">tmp</variable><variable id=\"e3_cnt1\">cnt1</variable><variable id=\"e3_cnt2\">cnt2</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e3_list\">list</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e3_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e3_cnt1\">cnt1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e3_cnt2\">cnt2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_list\">list</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e3_cnt1\">cnt1</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_cnt1\">cnt1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">9</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_list\">list</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e3_cnt2\">cnt2</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_cnt2\">cnt2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_cnt1\">cnt1</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e3_cnt2\">cnt2</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "統計相鄰兩天「白肉後緊接紅肉」的出現次數，練習序列中相鄰元素的比對。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "序列比對"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if（相鄰比對）"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-4",
      "title": "營養午餐分析-4：最常見主菜",
      "problemTitle": "營養午餐分析-4：最常見主菜",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "同樣的 10 天午餐紀錄，保證有一個主菜出現次數最多且唯一。請輸出這個出現次數最多的主菜代號。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出出現次數最多的主菜代號。",
      "statement": {
        "description": "同樣的 10 天午餐紀錄，保證有一個主菜出現次數最多且唯一。請輸出這個出現次數最多的主菜代號。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出出現次數最多的主菜代號。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "B",
          "explanation": "B出現3次為最多，輸出B。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "C",
          "explanation": "C出現3次為最多，輸出C。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "expectedOutput": "B",
          "output": "B",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "expectedOutput": "C",
          "output": "C",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "expectedOutput": "A",
          "output": "A",
          "score": 20,
          "hidden": false
        },
        {
          "input": "D D D D D A B C E F",
          "expectedOutput": "D",
          "output": "D",
          "score": 20,
          "hidden": false
        },
        {
          "input": "F E F E F E F D D F",
          "expectedOutput": "F",
          "output": "F",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e4_list\">list</variable><variable id=\"e4_i\">i</variable><variable id=\"e4_tmp\">tmp</variable><variable id=\"e4_cnt0\">cntA</variable><variable id=\"e4_cnt1\">cntB</variable><variable id=\"e4_cnt2\">cntC</variable><variable id=\"e4_cnt3\">cntD</variable><variable id=\"e4_cnt4\">cntE</variable><variable id=\"e4_cnt5\">cntF</variable><variable id=\"e4_counts\">counts</variable><variable id=\"e4_letters\">letters</variable><variable id=\"e4_j\">j</variable><variable id=\"e4_maxv\">maxv</variable><variable id=\"e4_result\">result</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_list\">list</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt0\">cntA</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt1\">cntB</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt2\">cntC</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt3\">cntD</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt4\">cntE</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt5\">cntF</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"5\" else=\"0\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt0\">cntA</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt0\">cntA</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt1\">cntB</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt1\">cntB</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt2\">cntC</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt2\">cntC</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">D</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt3\">cntD</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt3\">cntD</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF4\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">E</field></block></value></block></value><statement name=\"DO4\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt4\">cntE</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt4\">cntE</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF5\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">F</field></block></value></block></value><statement name=\"DO5\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_cnt5\">cntF</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt5\">cntF</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_counts\">counts</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"6\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt0\">cntA</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt1\">cntB</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt2\">cntC</field></block></value><value name=\"ADD3\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt3\">cntD</field></block></value><value name=\"ADD4\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt4\">cntE</field></block></value><value name=\"ADD5\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_cnt5\">cntF</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_letters\">letters</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"6\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\">D</field></block></value><value name=\"ADD4\"><block type=\"text\"><field name=\"TEXT\">E</field></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\">F</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_maxv\">maxv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e4_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_maxv\">maxv</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_j\">j</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e4_result\">result</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_letters\">letters</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_j\">j</field></block></value></block></value></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e4_result\">result</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "統計10天中出現次數最多的主菜（保證答案唯一），練習基礎的計數與最大值搜尋。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "計數",
          "最大值搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "最大值"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-5",
      "title": "停車費計算",
      "problemTitle": "停車費計算",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "停車費依停車分鐘數計算：30分鐘以內收20元；31~60分鐘收40元；超過60分鐘，每滿30分鐘（不足30分鐘也算）加收30元。單日費用上限400元。若停車總時間超過24小時（1440分鐘），超過的部分視為新的一天重新計算（同樣享有優惠與400元上限），分別計算後相加。",
      "inputDescription": "輸入停車分鐘數。",
      "outputDescription": "輸出應繳的停車費。",
      "statement": {
        "description": "停車費依停車分鐘數計算：30分鐘以內收20元；31~60分鐘收40元；超過60分鐘，每滿30分鐘（不足30分鐘也算）加收30元。單日費用上限400元。若停車總時間超過24小時（1440分鐘），超過的部分視為新的一天重新計算（同樣享有優惠與400元上限），分別計算後相加。",
        "input": "輸入停車分鐘數。",
        "output": "輸出應繳的停車費。"
      },
      "examples": [
        {
          "input": "100",
          "output": "100",
          "explanation": "100分鐘：超過60分，(100-60)/30=1.33無條件進位為2，40+30*2=100元。"
        },
        {
          "input": "820",
          "output": "400",
          "explanation": "820分鐘：計算後超過400元上限，收400元。"
        }
      ],
      "testCases": [
        {
          "input": "100",
          "expectedOutput": "100",
          "output": "100",
          "score": 11,
          "hidden": false
        },
        {
          "input": "820",
          "expectedOutput": "400",
          "output": "400",
          "score": 11,
          "hidden": false
        },
        {
          "input": "1443",
          "expectedOutput": "420",
          "output": "420",
          "score": 11,
          "hidden": false
        },
        {
          "input": "30",
          "expectedOutput": "20",
          "output": "20",
          "score": 11,
          "hidden": false
        },
        {
          "input": "31",
          "expectedOutput": "40",
          "output": "40",
          "score": 11,
          "hidden": false
        },
        {
          "input": "60",
          "expectedOutput": "40",
          "output": "40",
          "score": 11,
          "hidden": false
        },
        {
          "input": "61",
          "expectedOutput": "70",
          "output": "70",
          "score": 11,
          "hidden": false
        },
        {
          "input": "2880",
          "expectedOutput": "800",
          "output": "800",
          "score": 11,
          "hidden": false
        },
        {
          "input": "2883",
          "expectedOutput": "820",
          "output": "820",
          "score": 11,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e5_total\">total</variable><variable id=\"e5_remaining\">remaining</variable><variable id=\"e5_totalfee\">totalfee</variable><variable id=\"e5_chunk\">chunk</variable><variable id=\"e5_fee\">fee</variable><variable id=\"e5_blocks\">blocks</variable><variable id=\"e5_rawfee\">rawfee</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_total\">total</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_remaining\">remaining</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_total\">total</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_totalfee\">totalfee</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_remaining\">remaining</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_chunk\">chunk</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_remaining\">remaining</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1440</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_remaining\">remaining</field></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">1440</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_chunk\">chunk</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_fee\">fee</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">20</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_chunk\">chunk</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_fee\">fee</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">40</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_blocks\">blocks</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDUP</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_chunk\">chunk</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_rawfee\">rawfee</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">40</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_blocks\">blocks</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_fee\">fee</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_rawfee\">rawfee</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">400</field></block></value></block></value><value name=\"THEN\"><block type=\"math_number\"><field name=\"NUM\">400</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_rawfee\">rawfee</field></block></value></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_totalfee\">totalfee</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_totalfee\">totalfee</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_fee\">fee</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e5_remaining\">remaining</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_remaining\">remaining</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_chunk\">chunk</field></block></value></block></value></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e5_totalfee\">totalfee</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "分段計費並設有單日上限，超過24小時需拆成多日分別計算再相加，練習分段條件與迴圈拆分。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "分段計費"
        ],
        "subConcepts": [
          "上限與跨日處理"
        ],
        "algorithm": [
          "分段計費"
        ],
        "dataStructure": [
          "無"
        ],
        "syntax": [
          "if-elif",
          "無條件進位",
          "上限限制"
        ],
        "math": [],
        "context": [
          "生活情境",
          "停車場"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-6",
      "title": "班級活動票選",
      "problemTitle": "班級活動票選",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "班級活動地點投票，共有 5 個地點選項（編號1~5），N 位同學投票。請統計最高票數的選項：若最高票只有一個選項，輸出該編號；若有多個選項並列最高票，依編號由小到大全部輸出。",
      "inputDescription": "第一行輸入投票人數 N。\n第二行輸入 N 個投票結果（1~5）。",
      "outputDescription": "輸出得票最高的選項編號（可能多個，以空格分隔，由小到大排序）。",
      "statement": {
        "description": "班級活動地點投票，共有 5 個地點選項（編號1~5），N 位同學投票。請統計最高票數的選項：若最高票只有一個選項，輸出該編號；若有多個選項並列最高票，依編號由小到大全部輸出。",
        "input": "第一行輸入投票人數 N。\n第二行輸入 N 個投票結果（1~5）。",
        "output": "輸出得票最高的選項編號（可能多個，以空格分隔，由小到大排序）。"
      },
      "examples": [
        {
          "input": "4\n1 5 1 5",
          "output": "1 5",
          "explanation": "選項1、5各得2票並列最高，輸出「1 5」。"
        },
        {
          "input": "5\n1 2 1 1 4",
          "output": "1",
          "explanation": "選項1得3票最高，輸出「1」。"
        }
      ],
      "testCases": [
        {
          "input": "4\n1 5 1 5",
          "expectedOutput": "1 5",
          "output": "1 5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n1 2 1 1 4",
          "expectedOutput": "1",
          "output": "1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "8\n3 4 5 1 3 4 5 1",
          "expectedOutput": "1 3 4 5",
          "output": "1 3 4 5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n2 2 2",
          "expectedOutput": "2",
          "output": "2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "6\n1 2 3 4 5 1",
          "expectedOutput": "1",
          "output": "1",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e6_n\">n</variable><variable id=\"e6_votes\">votes</variable><variable id=\"e6_i\">i</variable><variable id=\"e6_tmp\">tmp</variable><variable id=\"e6_counts\">counts</variable><variable id=\"e6_j\">j</variable><variable id=\"e6_maxv\">maxv</variable><variable id=\"e6_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_n\">n</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_votes\">votes</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_n\">n</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_n\">n</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_votes\">votes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_counts\">counts</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_n\">n</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_votes\">votes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_i\">i</field></block></value></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_votes\">votes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_i\">i</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_maxv\">maxv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e6_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_maxv\">maxv</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_j\">j</field></block></value></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e6_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_out\">out</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_j\">j</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e6_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_j\">j</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e6_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "統計每個選項得票數並找出最高票（可能有多個並列），練習計數陣列與並列判斷。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "計數統計"
        ],
        "subConcepts": [
          "最高票並列處理"
        ],
        "algorithm": [
          "計數統計"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "最大值"
        ],
        "math": [],
        "context": [
          "校園情境",
          "班級投票"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-7",
      "title": "班級集星比賽",
      "problemTitle": "班級集星比賽",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "班級集星比賽記錄了 N 天每天獲得的星星數。請找出連續 K 天總和最大的區間，輸出其「起始天（第幾天，從1開始）」與「最大總和」；若有多組並列最大，取最早開始的一組。",
      "inputDescription": "第一行輸入天數 N。\n第二行輸入連續天數 K。\n第三行輸入 N 天的星星數。",
      "outputDescription": "輸出「起始天 最大總和」。",
      "statement": {
        "description": "班級集星比賽記錄了 N 天每天獲得的星星數。請找出連續 K 天總和最大的區間，輸出其「起始天（第幾天，從1開始）」與「最大總和」；若有多組並列最大，取最早開始的一組。",
        "input": "第一行輸入天數 N。\n第二行輸入連續天數 K。\n第三行輸入 N 天的星星數。",
        "output": "輸出「起始天 最大總和」。"
      },
      "examples": [
        {
          "input": "6\n3\n10 2 3 4 1 5",
          "output": "1 15",
          "explanation": "第1~3天總和10+2+3=15為最大，起始天1。"
        },
        {
          "input": "7\n3\n1 2 10 12 5 3 1",
          "output": "3 27",
          "explanation": "第3~5天總和10+12+5=27為最大，起始天3。"
        }
      ],
      "testCases": [
        {
          "input": "6\n3\n10 2 3 4 1 5",
          "expectedOutput": "1 15",
          "output": "1 15",
          "score": 20,
          "hidden": false
        },
        {
          "input": "7\n3\n1 2 10 12 5 3 1",
          "expectedOutput": "3 27",
          "output": "3 27",
          "score": 20,
          "hidden": false
        },
        {
          "input": "8\n4\n5 1 5 1 5 1 5 1",
          "expectedOutput": "1 12",
          "output": "1 12",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n1\n3 9 2 8 1",
          "expectedOutput": "2 9",
          "output": "2 9",
          "score": 20,
          "hidden": false
        },
        {
          "input": "4\n2\n1 1 1 10",
          "expectedOutput": "3 11",
          "output": "3 11",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e7_n\">n</variable><variable id=\"e7_k\">k</variable><variable id=\"e7_list\">list</variable><variable id=\"e7_i\">i</variable><variable id=\"e7_tmp\">tmp</variable><variable id=\"e7_j\">j</variable><variable id=\"e7_sum\">sum</variable><variable id=\"e7_bestsum\">bestsum</variable><variable id=\"e7_beststart\">beststart</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_n\">n</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_k\">k</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_list\">list</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_n\">n</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e7_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_n\">n</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_bestsum\">bestsum</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_beststart\">beststart</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e7_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_n\">n</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_k\">k</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_sum\">sum</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e7_j\">j</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_i\">i</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_i\">i</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_sum\">sum</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_sum\">sum</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_list\">list</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_j\">j</field></block></value></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_bestsum\">bestsum</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_bestsum\">bestsum</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_sum\">sum</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e7_beststart\">beststart</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_i\">i</field></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_beststart\">beststart</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e7_bestsum\">bestsum</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "找出連續K天總和最大的起始天，若有並列取最早，練習滑動視窗與並列處理。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "滑動視窗"
        ],
        "subConcepts": [
          "最早最大區間"
        ],
        "algorithm": [
          "滑動視窗"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "最大值"
        ],
        "math": [],
        "context": [
          "校園情境",
          "集星活動"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-8",
      "title": "森林小火車的能量大冒險",
      "problemTitle": "森林小火車的能量大冒險",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "森林小火車行駛於環狀的 5 個車站（1~5號，5號的下一站是1號），每個車站都有一個能量糖果增減值。小火車一開始持有 10 顆糖果，從1號站出發。每次骰子擲出步數後，小火車會先消耗等同步數的糖果，再前進到新站點，並依新站點的增減值調整糖果數量。糖果數量上限為30顆（超過就只保留30顆），若糖果數量小於等於0，則獲得國王救援直接補滿為5顆。請輸出經過所有骰子次數後的糖果數量。",
      "inputDescription": "第一行輸入5個車站（1~5號）的糖果增減值。\n第二行輸入骰子擲出的總次數。\n第三行輸入每次骰子擲出的步數。",
      "outputDescription": "輸出最終的糖果數量。",
      "statement": {
        "description": "森林小火車行駛於環狀的 5 個車站（1~5號，5號的下一站是1號），每個車站都有一個能量糖果增減值。小火車一開始持有 10 顆糖果，從1號站出發。每次骰子擲出步數後，小火車會先消耗等同步數的糖果，再前進到新站點，並依新站點的增減值調整糖果數量。糖果數量上限為30顆（超過就只保留30顆），若糖果數量小於等於0，則獲得國王救援直接補滿為5顆。請輸出經過所有骰子次數後的糖果數量。",
        "input": "第一行輸入5個車站（1~5號）的糖果增減值。\n第二行輸入骰子擲出的總次數。\n第三行輸入每次骰子擲出的步數。",
        "output": "輸出最終的糖果數量。"
      },
      "examples": [
        {
          "input": "0 15 -5 15 -10\n2\n1 2",
          "output": "30",
          "explanation": "第1步耗1顆剩9顆，移到2號站+15顆=24顆；第2步耗2顆剩22顆，移到4號站+15顆=37顆，超過上限剩30顆。"
        },
        {
          "input": "0 15 -5 15 -10\n2\n4 3",
          "output": "5",
          "explanation": "第1步耗4顆剩6顆，移到5號站-10顆=-4顆，觸發國王救援設為5顆；第2步耗3顆剩2顆，移到3號站-5顆=-3顆，再次觸發國王救援設為5顆。"
        }
      ],
      "testCases": [
        {
          "input": "0 15 -5 15 -10\n2\n1 2",
          "expectedOutput": "30",
          "output": "30",
          "score": 20,
          "hidden": false
        },
        {
          "input": "0 15 -5 15 -10\n2\n4 3",
          "expectedOutput": "5",
          "output": "5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5 5 5 5 5\n1\n1",
          "expectedOutput": "14",
          "output": "14",
          "score": 20,
          "hidden": false
        },
        {
          "input": "-20 -20 -20 -20 -20\n1\n1",
          "expectedOutput": "5",
          "output": "5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "0 0 0 0 0\n5\n1 1 1 1 1",
          "expectedOutput": "5",
          "output": "5",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e8_stations\">stations</variable><variable id=\"e8_i\">i</variable><variable id=\"e8_tmp\">tmp</variable><variable id=\"e8_k\">k</variable><variable id=\"e8_rolls\">rolls</variable><variable id=\"e8_candy\">candy</variable><variable id=\"e8_pos\">pos</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_stations\">stations</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e8_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_stations\">stations</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_k\">k</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_rolls\">rolls</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_k\">k</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e8_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_k\">k</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_rolls\">rolls</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_candy\">candy</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_pos\">pos</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e8_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_k\">k</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_candy\">candy</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_candy\">candy</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_rolls\">rolls</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_i\">i</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_rolls\">rolls</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_i\">i</field></block></value></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_candy\">candy</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_candy\">candy</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_stations\">stations</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_pos\">pos</field></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_candy\">candy</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_candy\">candy</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_candy\">candy</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e8_candy\">candy</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e8_candy\">candy</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要同時處理環狀站點位置、移動消耗、到站補給與數值上下限的多重規則，是較複雜的模擬題。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "模擬"
        ],
        "subConcepts": [
          "環狀移動與上下限"
        ],
        "algorithm": [
          "環狀模擬"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "模運算",
          "if（上下限）"
        ],
        "math": [],
        "context": [
          "奇幻情境",
          "森林小火車"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EChaiyi-9",
      "title": "玩具收納挑戰",
      "problemTitle": "玩具收納挑戰",
      "courseCode": "114EChaiyi",
      "courseName": "114-嘉義市國小",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "要將 N 件（N≤6）玩具收進容量 20 公斤的標準收納箱。依序處理每件玩具：依開箱順序檢查每個「已經開啟」的箱子，只要有任何一箱裝入後不超過20公斤，就放進第一個符合的箱子；如果所有已開的箱子都裝不下，才開一個新箱子。請輸出總共用了幾個箱子。",
      "inputDescription": "第一行輸入玩具數量 N。\n第二行輸入 N 個玩具重量。",
      "outputDescription": "輸出總共使用的箱子數量。",
      "statement": {
        "description": "要將 N 件（N≤6）玩具收進容量 20 公斤的標準收納箱。依序處理每件玩具：依開箱順序檢查每個「已經開啟」的箱子，只要有任何一箱裝入後不超過20公斤，就放進第一個符合的箱子；如果所有已開的箱子都裝不下，才開一個新箱子。請輸出總共用了幾個箱子。",
        "input": "第一行輸入玩具數量 N。\n第二行輸入 N 個玩具重量。",
        "output": "輸出總共使用的箱子數量。"
      },
      "examples": [
        {
          "input": "4\n10 10 9 1",
          "output": "2",
          "explanation": "10+10=20裝滿箱1；9放不進箱1(20+9=29>20)故開箱2；1可放進箱1(20+1=21>20不行)或箱2(9+1=10可以)，共2箱。"
        },
        {
          "input": "4\n11 11 11 11",
          "output": "4",
          "explanation": "每個11都無法與其他11同箱(11+11=22>20)，故4件各自一箱，共4箱。"
        }
      ],
      "testCases": [
        {
          "input": "4\n10 10 9 1",
          "expectedOutput": "2",
          "output": "2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "4\n11 11 11 11",
          "expectedOutput": "4",
          "output": "4",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n19 19 19 1 1",
          "expectedOutput": "3",
          "output": "3",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n20 20 20",
          "expectedOutput": "3",
          "output": "3",
          "score": 20,
          "hidden": false
        },
        {
          "input": "6\n5 5 5 5 5 5",
          "expectedOutput": "2",
          "output": "2",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"e9_n\">n</variable><variable id=\"e9_weights\">weights</variable><variable id=\"e9_i\">i</variable><variable id=\"e9_tmp\">tmp</variable><variable id=\"e9_boxes\">boxes</variable><variable id=\"e9_boxcount\">boxcount</variable><variable id=\"e9_j\">j</variable><variable id=\"e9_w\">w</variable><variable id=\"e9_found\">found</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_n\">n</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_weights\">weights</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_n\">n</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e9_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_n\">n</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_tmp\">tmp</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_weights\">weights</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_boxes\">boxes</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"e9_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_n\">n</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_w\">w</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_weights\">weights</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_i\">i</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"e9_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_found\">found</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxes\">boxes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_w\">w</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">20</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxes\">boxes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_j\">j</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxes\">boxes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_w\">w</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_found\">found</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxes\">boxes</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_w\">w</field></block></value></block></next></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"e9_boxcount\">boxcount</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "依序檢查所有已開的箱子是否裝得下（First-Fit），而非只檢查目前的箱子，練習較完整的裝箱模擬。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "貪心裝箱"
        ],
        "subConcepts": [
          "First-Fit裝箱"
        ],
        "algorithm": [
          "First-Fit裝箱"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "if",
          "累加"
        ],
        "math": [],
        "context": [
          "生活情境",
          "玩具收納"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};

export default course;
