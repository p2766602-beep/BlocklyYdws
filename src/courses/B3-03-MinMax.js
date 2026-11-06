// Built by tools/lib/course-store.mjs：courses/B3-03-MinMax.js ＋ courses-overrides/B3-03-MinMax.json
// 自動產生，請勿手動編輯；要改請用課程編輯器（tools/edit-server.mjs），再重新建置。

export default {
  "code": "B3-03-MinMax",
  "title": "K09 最大值與最小值",
  "description": "基礎知識點課程 U3 清單｜K09 最大值與最小值（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）",
  "type": "programming",
  "mode": "learning",
  "tier": "t1",
  "knowledgePoint": "K09",
  "unit": "U3 清單",
  "tasks": [
    {
      "id": "EXT01-001",
      "title": "找最大值",
      "description": "給定 N 個整數，請找出其中最大的數字。",
      "inputDescription": "第一個整數為 N，接著輸入 N 個整數。",
      "outputDescription": "輸出一個整數，代表最大值。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "5\n8 3 12 7 10",
          "output": "12",
          "explanation": "5 個數字中最大的是 12。"
        }
      ],
      "testCases": [
        {
          "input": "5\n8 3 12 7 10",
          "expectedOutput": "12",
          "output": "12",
          "score": 10
        },
        {
          "input": "4\n1 1 1 1",
          "expectedOutput": "1",
          "output": "1",
          "score": 10
        },
        {
          "input": "6\n-5 -2 -9 -1 -7 -3",
          "expectedOutput": "-1",
          "output": "-1",
          "score": 10
        },
        {
          "input": "3\n100 50 99",
          "expectedOutput": "100",
          "output": "100",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">數量</variable><variable id=\"v2\">最大值</variable><variable id=\"v3\">第幾個</variable><variable id=\"v4\">數字</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">數量</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">數字</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">數字</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">數字</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">第幾個</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾個</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "先假設第 1 個數字是最大值，再從第 2 個開始逐一比較，遇到更大的就更新。"
      ],
      "extension": false,
      "sourceCourse": "M0-06-MinMaxExtra",
      "sourceDifficulty": "L2"
    },
    {
      "id": "EXT01-003",
      "title": "最大最小差距",
      "description": "給定 N 個整數，請找出最大值與最小值，並計算兩者差距。",
      "inputDescription": "第一個整數為 N，接著輸入 N 個整數。",
      "outputDescription": "輸出三個整數，依序為最大值、最小值、差距，中間以空白分隔。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "5\n8 3 12 7 10",
          "output": "12 3 9",
          "explanation": "最大值 12，最小值 3，差距為 9。"
        }
      ],
      "testCases": [
        {
          "input": "5\n8 3 12 7 10",
          "expectedOutput": "12 3 9",
          "output": "12 3 9",
          "score": 10
        },
        {
          "input": "4\n6 6 6 6",
          "expectedOutput": "6 6 0",
          "output": "6 6 0",
          "score": 10
        },
        {
          "input": "6\n-5 -2 -9 -1 -7 -3",
          "expectedOutput": "-1 -9 8",
          "output": "-1 -9 8",
          "score": 10
        },
        {
          "input": "3\n100 50 99",
          "expectedOutput": "100 50 50",
          "output": "100 50 50",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">數量</variable><variable id=\"v2\">最大值</variable><variable id=\"v3\">最小值</variable><variable id=\"v4\">第幾個</variable><variable id=\"v5\">數字</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">數量</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">數字</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最小值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v4\">第幾個</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾個</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾個</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾個</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最小值</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最小值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾個</field></block></value></block></value></block></statement></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最小值</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最小值</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "同一個迴圈裡同時更新最大值和最小值，最後再相減。"
      ],
      "extension": false,
      "sourceCourse": "M0-06-MinMaxExtra",
      "sourceDifficulty": "L2"
    },
    {
      "id": "M1-12-06",
      "title": "單筆資料時的最大最小值",
      "description": "請你找出N筆分數中的最大值與最小值，並依序輸出。",
      "inputDescription": "N、N個分數",
      "outputDescription": "最大值 最小值",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "1\n88",
          "output": "88 88",
          "explanation": "只有一筆資料88，最大值跟最小值都是88"
        }
      ],
      "testCases": [
        {
          "input": "1\n88",
          "expectedOutput": "88 88",
          "output": "88 88",
          "score": 25
        },
        {
          "input": "5\n70 90 60 100 80",
          "expectedOutput": "100 60",
          "output": "100 60",
          "score": 25
        },
        {
          "input": "1\n0",
          "expectedOutput": "0 0",
          "output": "0 0",
          "score": 25
        },
        {
          "input": "2\n50 50",
          "expectedOutput": "50 50",
          "output": "50 50",
          "score": 25
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">數量</variable><variable id=\"v2\">最大值</variable><variable id=\"v3\">最小值</variable><variable id=\"v4\">第幾筆</variable><variable id=\"v5\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">數量</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">分數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最小值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v4\">第幾筆</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾筆</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾筆</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾筆</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最小值</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">最小值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第幾筆</field></block></value></block></value></block></statement></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最大值</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">最小值</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "只有一筆資料時，最大值和最小值都是它自己。如果初始值用第 1 筆資料，就不會出錯。"
      ],
      "extension": false,
      "sourceCourse": "M1-12-DebugFormat",
      "sourceDifficulty": "L2"
    },
    {
      "id": "EXT01-008",
      "title": "區間最大值",
      "description": "給定 N 個整數，以及查詢區間 L 到 R，請找出第 L 個到第 R 個數字中的最大值。位置從 1 開始計算。",
      "inputDescription": "第一個整數為 N，接著輸入 N 個整數，最後輸入兩個整數 L 與 R。保證 1 <= L <= R <= N。",
      "outputDescription": "輸出一個整數，代表區間最大值。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "6\n5 8 3 12 7 10\n2 5",
          "output": "12",
          "explanation": "第 2 到第 5 個數字是 8、3、12、7，最大值為 12。"
        }
      ],
      "testCases": [
        {
          "input": "6\n5 8 3 12 7 10\n2 5",
          "expectedOutput": "12",
          "output": "12",
          "score": 10
        },
        {
          "input": "5\n1 2 3 4 5\n1 3",
          "expectedOutput": "3",
          "output": "3",
          "score": 10
        },
        {
          "input": "4\n9 8 7 6\n3 4",
          "expectedOutput": "7",
          "output": "7",
          "score": 10
        },
        {
          "input": "7\n-5 -1 -9 -3 -2 -8 -4\n2 6",
          "expectedOutput": "-1",
          "output": "-1",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">數量</variable><variable id=\"v2\">起點</variable><variable id=\"v3\">終點</variable><variable id=\"v4\">最大值</variable><variable id=\"v5\">第幾個</variable><variable id=\"v6\">數字</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">數量</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">數字</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">數量</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">數字</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">起點</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">終點</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">起點</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">終點</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">起點</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v5\">第幾個</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">起點</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">終點</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾個</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">最大值</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">最大值</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">數字</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾個</field></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">最大值</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "找最大值的方法不變，只是迴圈改成從第 L 項跑到第 R 項，初始值也要用第 L 項。"
      ],
      "extension": false,
      "sourceCourse": "M0-06-MinMaxExtra",
      "sourceDifficulty": "L3"
    },
    {
      "id": "EXT01-006",
      "title": "【延伸】第二高分",
      "description": "給定 N 位學生的成績，請找出最高分與第二高分。保證至少有兩種不同分數。",
      "inputDescription": "第一個整數為 N，接著輸入 N 個整數代表成績。",
      "outputDescription": "輸出兩個整數，依序為最高分與第二高分，中間以空白分隔。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "6\n70 95 80 95 60 88",
          "output": "95 88",
          "explanation": "最高分是 95，第二高的不同分數是 88。"
        }
      ],
      "testCases": [
        {
          "input": "6\n70 95 80 95 60 88",
          "expectedOutput": "95 88",
          "output": "95 88",
          "score": 10
        },
        {
          "input": "5\n100 90 80 70 60",
          "expectedOutput": "100 90",
          "output": "100 90",
          "score": 10
        },
        {
          "input": "4\n10 20 20 5",
          "expectedOutput": "20 10",
          "output": "20 10",
          "score": 10
        },
        {
          "input": "7\n-1 -5 -3 -1 -2 -8 -4",
          "expectedOutput": "-1 -2",
          "output": "-1 -2",
          "score": 10
        }
      ],
      "difficulty": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">人數</variable><variable id=\"v2\">最高分</variable><variable id=\"v3\">有第二名</variable><variable id=\"v4\">第二高</variable><variable id=\"v5\">第幾位</variable><variable id=\"v6\">成績</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">人數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">成績</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">人數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高分</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">有第二名</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">第二高</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">人數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v5\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">人數</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾位</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高分</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">第二高</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高分</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">有第二名</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高分</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾位</field></block></value></block></value></block></next></block></next></block></statement><value name=\"IF1\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾位</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高分</field></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">有第二名</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾位</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第二高</field></block></value></block></value></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">第二高</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">成績</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第幾位</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">有第二名</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高分</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第二高</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "同時記住「第一名」和「第二名」：遇到比第一名大的數，原本的第一名要退成第二名。分數相同的情況也要想清楚。"
      ],
      "extension": true,
      "sourceCourse": "M0-06-MinMaxExtra",
      "sourceDifficulty": "L3"
    },
    {
      "id": "TYTN-05",
      "title": "【延伸】班服投票",
      "description": "可愛國小601班要製作紀念班服，本次班服設計共有3個款式，分別編號為1、2、3。\n每位同學可在選票上寫下自己選擇的班服款式編號，最後以得票數最高者為班服樣式。\n請先計算每款班服的得票數（依1→3順序），並輸出最高票的班服編號。\n若有兩款或以上的票數相同且為最高票，則輸出：請重新投票",
      "inputDescription": "第一行：整數 N，代表投票數。\n\n第二行：N 個整數（介於 1~3），代表每張選票的班服設計編號。",
      "outputDescription": "若票數最高者唯一，輸出該款式編號；若最高票出現同票數，輸出「請重新投票」。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "8\n1 2 2 3 2 1 3 2",
          "output": "2",
          "explanation": "8 位同學投票，各自選擇的班服編號如上。\n2 號班服得票最高，因此輸出 2。"
        },
        {
          "input": "6\n1 2 3 1 2 3",
          "output": "請重新投票",
          "explanation": "3 種班服皆獲得 2 票，最高票有同票情形。\n因此輸出「請重新投票」。"
        }
      ],
      "testCases": [
        {
          "input": "8\n1 2 2 3 2 1 3 2",
          "expectedOutput": "2",
          "output": "2",
          "score": 10
        },
        {
          "input": "6\n1 2 3 1 2 3",
          "expectedOutput": "請重新投票",
          "output": "請重新投票",
          "score": 10
        },
        {
          "input": "5\n1 1 1 2 3",
          "expectedOutput": "1",
          "output": "1",
          "score": 10
        },
        {
          "input": "7\n3 3 2 2 1 3 2",
          "expectedOutput": "請重新投票",
          "output": "請重新投票",
          "score": 10
        },
        {
          "input": "4\n2 2 2 3",
          "expectedOutput": "2",
          "output": "2",
          "score": 10
        }
      ],
      "difficulty": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">票數</variable><variable id=\"v2\">一號票</variable><variable id=\"v3\">二號票</variable><variable id=\"v4\">三號票</variable><variable id=\"v5\">款式</variable><variable id=\"v6\">最高票</variable><variable id=\"v7\">並列數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">票數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">一號票</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">二號票</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">三號票</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">票數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">款式</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">款式</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v2\">一號票</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">款式</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO1\"><block type=\"math_change\"><field name=\"VAR\" id=\"v3\">二號票</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"math_change\"><field name=\"VAR\" id=\"v4\">三號票</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">最高票</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">一號票</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">二號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">最高票</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">二號票</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">三號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">最高票</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">三號票</field></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">並列數</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">一號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v7\">並列數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">二號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v7\">並列數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">三號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO0\"><block type=\"math_change\"><field name=\"VAR\" id=\"v7\">並列數</field><value name=\"DELTA\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><next><block type=\"controls_if\"><mutation elseif=\"2\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">並列數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請重新投票</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">一號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO1\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">二號票</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">最高票</field></block></value></block></value><statement name=\"DO2\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "先用三個計數變數算出每一款的票數，再找出最高票；最高票如果有兩款以上相同，要輸出「請重新投票」。"
      ],
      "extension": true,
      "sourceCourse": "M1-02-ListAnalysis",
      "sourceDifficulty": "L3"
    }
  ]
};
