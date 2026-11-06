// Built by tools/lib/course-store.mjs：courses/B6-03-ParallelLists.js ＋ courses-overrides/B6-03-ParallelLists.json
// 自動產生，請勿手動編輯；要改請用課程編輯器（tools/edit-server.mjs），再重新建置。

export default {
  "code": "B6-03-ParallelLists",
  "title": "K18 平行清單連動處理",
  "description": "基礎知識點課程 U6 排序｜K18 平行清單連動處理（題目取自 M0/M1 系列重組，標【延伸】者為延伸選修）",
  "type": "programming",
  "mode": "learning",
  "tier": "t1",
  "knowledgePoint": "K18",
  "unit": "U6 排序",
  "tasks": [
    {
      "id": "seclect-007",
      "title": "雙卡同步交換",
      "description": "在資訊課中，老師準備了兩排卡片，\n第一排是學生姓名，第二排是對應的分數。\n每一個位置上的姓名與分數是一組資料，必須一起行動。\n老師指定兩個位置，小華需要把這兩個位置上的資料進行交換。\n交換時，姓名與分數都必須一起交換，其他位置保持不變。\n請你寫一個程式，完成指定位置的「連動清單交換」任務",
      "inputDescription": "第1行：一個整數 5，代表接下來有 5 個姓名。\n\n第2行：5 個姓名（以空格隔開）。\n\n第3行：一個整數 5，代表接下來有 5 個分數。\n\n第4行：5 個整數，代表對應的分數（以空格隔開）。\n\n第5行：一個整數 2，代表接下來有 2 個位置。\n\n第6行：兩個整數 P、Q，代表要交換的位置（1 ≤ P, Q ≤ 5）。",
      "outputDescription": "第1行：交換完成後的 5 個姓名（以空格隔開）。\n\n第2行：交換完成後的 5 個分數（以空格隔開）。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "5\nAmy Bob Carl Dora Eric\n5\n80 90 70 85 60\n2\n2 4",
          "output": "Amy Dora Carl Bob Eric\n80 85 70 90 60",
          "explanation": "第2與第4個位置交換，\n姓名與分數必須一起交換。"
        },
        {
          "input": "5\nTom May John Lily Ken\n5\n75 88 92 60 85\n2\n1 5",
          "output": "Ken May John Lily Tom\n85 88 92 60 75",
          "explanation": "第1與第5個位置交換，\n兩個清單同步變動。"
        }
      ],
      "testCases": [
        {
          "input": "5\nAmy Bob Carl Dora Eric\n5\n80 90 70 85 60\n2\n2 4",
          "expectedOutput": "Amy Dora Carl Bob Eric 80 85 70 90 60",
          "output": "Amy Dora Carl Bob Eric 80 85 70 90 60",
          "score": 10
        },
        {
          "input": "5\nTom May John Lily Ken\n5\n75 88 92 60 85\n2\n1 5",
          "expectedOutput": "Ken May John Lily Tom 85 88 92 60 75",
          "output": "Ken May John Lily Tom 85 88 92 60 75",
          "score": 10
        },
        {
          "input": "5\nA B C D E\n5\n10 20 30 40 50\n2\n3 3",
          "expectedOutput": "A B C D E 10 20 30 40 50",
          "output": "A B C D E 10 20 30 40 50",
          "score": 10
        },
        {
          "input": "5\nAnn Ben Ann Dan Eva\n5\n90 80 90 70 60\n2\n1 3",
          "expectedOutput": "Ann Ben Ann Dan Eva 90 80 90 70 60",
          "output": "Ann Ben Ann Dan Eva 90 80 90 70 60",
          "score": 10
        },
        {
          "input": "5\nOne Two Three Four Five\n5\n5 4 3 2 1\n2\n4 5",
          "expectedOutput": "One Two Three Five Four 5 4 3 1 2",
          "output": "One Two Three Five Four 5 4 3 1 2",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">姓名數</variable><variable id=\"v2\">分數數</variable><variable id=\"v3\">位置數</variable><variable id=\"v4\">第一個位置</variable><variable id=\"v5\">第二個位置</variable><variable id=\"v6\">暫存</variable><variable id=\"v7\">結果</variable><variable id=\"v8\">第幾位</variable><variable id=\"v9\">姓名</variable><variable id=\"v10\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">姓名數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v9\">姓名</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">姓名數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">分數數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v10\">分數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">分數數</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">分數</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">位置數</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">第一個位置</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">第二個位置</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第一個位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第一個位置</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第二個位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第二個位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">暫存</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第一個位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">第一個位置</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第二個位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">第二個位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">暫存</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">結果</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">姓名數</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"v8\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">姓名數</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v9\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">第幾位</field></block></value></block></value></block></value></block></statement></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v8\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">分數數</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v10\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">第幾位</field></block></value></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "姓名清單和分數清單的同一個位置代表同一個人，兩個清單要做完全一樣的交換。輸入的第 1、3、5 行是筆數（5、5、2），記得先讀掉，再讀姓名、分數和位置。"
      ],
      "extension": false,
      "sourceCourse": "M1-08-SortApplied",
      "sourceDifficulty": "L2"
    },
    {
      "id": "seclect-008",
      "title": "找出最高分與最低分學生的位置與姓名",
      "description": "在整理成績資料時，小華發現每位學生的姓名與分數\n是分別存放在兩個清單中，但相同位置代表同一位學生。\n現在老師希望小華一次找出：\n最高分所在的位置與姓名\n最低分所在的位置與姓名\n以便後續進行成績分析與排序。\n請你寫一個程式，從分數清單中找出最高分與最低分，\n並輸出它們所在的位置與對應的學生姓名。\n注意事項：\n1. 清單位置由 1 開始計算。\n2. 若最高分或最低分出現多次，請輸出最前面出現的那一筆資料",
      "inputDescription": "第1行：5 個姓名（以空格隔開）。\n\n第2行：5 個整數，代表對應的分數（以空格隔開）。",
      "outputDescription": "輸出一行資料，依序輸出：\n\n最高分位置 最高分姓名 最低分位置 最低分姓名（以空格隔開）。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "output": "2 Bob 5 Eric",
          "explanation": "最高分為 90，在第 2 個位置（Bob）；\n最低分為 60，在第 5 個位置（Eric）。"
        },
        {
          "input": "Tom May John Lily Ken\n88 92 92 75 60",
          "output": "2 May 5 Ken",
          "explanation": "最高分為 92，第 2、3 個位置都有，\n取最前面的 May；\n最低分為 60，在第 5 個位置 Ken。"
        }
      ],
      "testCases": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "expectedOutput": "2 Bob 5 Eric",
          "output": "2 Bob 5 Eric",
          "score": 10
        },
        {
          "input": "Tom May John Lily Ken\n88 92 92 75 60",
          "expectedOutput": "2 May 5 Ken",
          "output": "2 May 5 Ken",
          "score": 10
        },
        {
          "input": "A B C D E\n10 20 30 40 50",
          "expectedOutput": "5 E 1 A",
          "output": "5 E 1 A",
          "score": 10
        },
        {
          "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
          "expectedOutput": "1 Ann 5 Eva",
          "output": "1 Ann 5 Eva",
          "score": 10
        },
        {
          "input": "One Two Three Four Five\n100 90 80 70 60",
          "expectedOutput": "1 One 5 Five",
          "output": "1 One 5 Five",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">最高位置</variable><variable id=\"v2\">最低位置</variable><variable id=\"v3\">第幾位</variable><variable id=\"v4\">姓名</variable><variable id=\"v5\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">姓名</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">姓名</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">分數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">最高位置</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最低位置</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾位</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">最高位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾位</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾位</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最低位置</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最低位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">第幾位</field></block></value></block></statement></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"7\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最低位置</field></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD6\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最低位置</field></block></value></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "在分數清單中找出最高分和最低分的位置，再用這些位置到姓名清單取出名字。"
      ],
      "extension": false,
      "sourceCourse": "M1-08-SortApplied",
      "sourceDifficulty": "L2"
    },
    {
      "id": "seclect-009",
      "title": "連動選擇排序第一回合",
      "description": "小華已經學會如何在成績清單中找出最高分與最低分的位置，\n現在老師要他進一步練習連動清單的排序操作。\n桌上有兩個清單：\n學生姓名清單\n對應的分數清單\n相同位置代表同一位學生。\n請你完成選擇排序的第一回合：\n從所有學生中找出分數最高的學生，\n並將這位學生與第 1 個位置的資料進行交換。\n交換時，姓名與分數必須一起交換，\n其餘位置的順序保持不變。\n注意事項：\n1. 只進行第一回合，不需完成整個排序。\n2. 若最高分出現多次，請選擇最前面出現的那一筆資料",
      "inputDescription": "第1行：5 個姓名（以空格隔開）。\n\n第2行：5 個整數，代表對應的分數（以空格隔開）。",
      "outputDescription": "第1行：第一回合完成後的 5 個姓名（以空格隔開）。\n\n第2行：第一回合完成後的 5 個分數（以空格隔開）。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "output": "Bob Amy Carl Dora Eric\n90 80 70 85 60",
          "explanation": "最高分為 90（Bob），\n與第 1 個位置的 Amy 交換。"
        },
        {
          "input": "Tom May John Lily Ken\n95 88 92 75 60",
          "output": "Tom May John Lily Ken\n95 88 92 75 60",
          "explanation": "最高分已在第 1 個位置，\n不需交換。"
        }
      ],
      "testCases": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "expectedOutput": "Bob Amy Carl Dora Eric 90 80 70 85 60",
          "output": "Bob Amy Carl Dora Eric 90 80 70 85 60",
          "score": 10
        },
        {
          "input": "Tom May John Lily Ken\n95 88 92 75 60",
          "expectedOutput": "Tom May John Lily Ken 95 88 92 75 60",
          "output": "Tom May John Lily Ken 95 88 92 75 60",
          "score": 10
        },
        {
          "input": "A B C D E\n10 50 30 40 20",
          "expectedOutput": "B A C D E 50 10 30 40 20",
          "output": "B A C D E 50 10 30 40 20",
          "score": 10
        },
        {
          "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
          "expectedOutput": "Ann Ben Ann Dan Eva 90 80 90 70 60",
          "output": "Ann Ben Ann Dan Eva 90 80 90 70 60",
          "score": 10
        },
        {
          "input": "One Two Three Four Five\n20 100 80 60 40",
          "expectedOutput": "Two One Three Four Five 100 20 80 60 40",
          "output": "Two One Three Four Five 100 20 80 60 40",
          "score": 10
        }
      ],
      "difficulty": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">最高位置</variable><variable id=\"v2\">第幾位</variable><variable id=\"v3\">暫存</variable><variable id=\"v4\">結果</variable><variable id=\"v5\">姓名</variable><variable id=\"v6\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">姓名</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v6\">分數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">最高位置</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v2\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第幾位</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v1\">最高位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第幾位</field></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">暫存</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v3\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">最高位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">暫存</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">結果</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v2\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第幾位</field></block></value></block></value></block></value></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v2\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">第幾位</field></block></value></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "在分數清單中找出最高分的位置，姓名和分數都要跟第 1 個位置交換。"
      ],
      "extension": false,
      "sourceCourse": "M1-08-SortApplied",
      "sourceDifficulty": "L3"
    },
    {
      "id": "seclect-010",
      "title": "【延伸】完整雙清單排序",
      "description": "小華已經完成「連動選擇排序第一回合」的練習，\n現在老師希望他能夠完成完整的連動排序任務。\n桌上有兩個清單：\n學生姓名清單\n對應的分數清單\n相同位置代表同一位學生。\n請你使用選擇排序法，依照分數由高到低的順序，\n將所有學生進行排序。\n排序時必須注意：\n比較時只比較「分數」\n交換時「姓名與分數必須一起交換」\n不可使用任何排序相關的積木或指令。\n注意事項：\n1. 若分數相同，學生的相對順序不限。\n2. 必須完成整個排序流程",
      "inputDescription": "第1行：5 個姓名（以空格隔開）。\n\n第2行：5 個整數，代表對應的分數（以空格隔開）。",
      "outputDescription": "第1行：排序完成後的 5 個姓名（以空格隔開）。\n\n第2行：排序完成後的 5 個分數（以空格隔開）。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "output": "Bob Dora Amy Carl Eric\n90 85 80 70 60",
          "explanation": "依分數由高到低排序，\n姓名與分數同步調整。"
        },
        {
          "input": "Tom May John Lily Ken\n95 88 92 75 60",
          "output": "Tom John May Lily Ken\n95 92 88 75 60",
          "explanation": "完成所有回合後，\n清單排序完成。"
        }
      ],
      "testCases": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "expectedOutput": "Bob Dora Amy Carl Eric 90 85 80 70 60",
          "output": "Bob Dora Amy Carl Eric 90 85 80 70 60",
          "score": 10
        },
        {
          "input": "Tom May John Lily Ken\n95 88 92 75 60",
          "expectedOutput": "Tom John May Lily Ken 95 92 88 75 60",
          "output": "Tom John May Lily Ken 95 92 88 75 60",
          "score": 10
        },
        {
          "input": "A B C D E\n10 50 30 40 20",
          "expectedOutput": "B D C E A 50 40 30 20 10",
          "output": "B D C E A 50 40 30 20 10",
          "score": 10
        },
        {
          "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
          "expectedOutput": "Ann Ann Ben Dan Eva 90 90 80 70 60",
          "output": "Ann Ann Ben Dan Eva 90 90 80 70 60",
          "score": 10
        },
        {
          "input": "One Two Three Four Five\n20 100 80 60 40",
          "expectedOutput": "Two Three Four Five One 100 80 60 40 20",
          "output": "Two Three Four Five One 100 80 60 40 20",
          "score": 10
        }
      ],
      "difficulty": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">目前位置</variable><variable id=\"v2\">最高位置</variable><variable id=\"v3\">比較位置</variable><variable id=\"v4\">暫存</variable><variable id=\"v5\">結果</variable><variable id=\"v6\">第幾位</variable><variable id=\"v7\">姓名</variable><variable id=\"v8\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">姓名</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v8\">分數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v1\">目前位置</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">比較位置</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">比較位置</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">比較位置</field></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">暫存</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">暫存</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v6\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">第幾位</field></block></value></block></value></block></value></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v6\">第幾位</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">第幾位</field></block></value></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "把上一題的「第一回合」重複做完；每次交換分數時，姓名也要一起交換。"
      ],
      "extension": true,
      "sourceCourse": "M1-08-SortApplied",
      "sourceDifficulty": "L3"
    },
    {
      "id": "seclect-011",
      "title": "【延伸】排序結果應用-成績排行榜",
      "description": "小華已經完成「完整雙清單排序」，並且將學生依照分數由高到低\n排序完成。\n現在老師希望小華能夠應用排序後的結果，\n製作一份簡單的成績排行榜。\n請你寫一個程式，完成以下任務：\n先依照分數由高到低排序學生資料\n再依排序後的結果，輸出每位學生的名次、姓名與分數\n相同位置的姓名與分數必須保持連動。\n注意事項：\n1. 名次從 1 開始編號。\n2. 若分數相同，名次仍依排序後的順序編號即可。\n3. 不可使用任何排序相關的積木或指令",
      "inputDescription": "第1行：5 個姓名（以空格隔開）。\n\n第2行：5 個整數，代表對應的分數（以空格隔開）。",
      "outputDescription": "輸出 5 行，每一行依序輸出：\n\n名次 姓名 分數（以空格隔開）。",
      "requiresGreenFlag": true,
      "examples": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "output": "1 Bob 90\n2 Dora 85\n3 Amy 80\n4 Carl 70\n5 Eric 60",
          "explanation": "先完成排序，\n再依序輸出排行榜。"
        },
        {
          "input": "Tom May John Lily Ken\n95 88 92 75 60",
          "output": "1 Tom 95\n2 John 92\n3 May 88\n4 Lily 75\n5 Ken 60",
          "explanation": "名次依排序後的位置決定。"
        }
      ],
      "testCases": [
        {
          "input": "Amy Bob Carl Dora Eric\n80 90 70 85 60",
          "expectedOutput": "1 Bob 90 2 Dora 85 3 Amy 80 4 Carl 70 5 Eric 60",
          "output": "1 Bob 90 2 Dora 85 3 Amy 80 4 Carl 70 5 Eric 60",
          "score": 10
        },
        {
          "input": "Tom May John Lily Ken\n95 88 92 75 60",
          "expectedOutput": "1 Tom 95 2 John 92 3 May 88 4 Lily 75 5 Ken 60",
          "output": "1 Tom 95 2 John 92 3 May 88 4 Lily 75 5 Ken 60",
          "score": 10
        },
        {
          "input": "A B C D E\n10 50 30 40 20",
          "expectedOutput": "1 B 50 2 D 40 3 C 30 4 E 20 5 A 10",
          "output": "1 B 50 2 D 40 3 C 30 4 E 20 5 A 10",
          "score": 10
        },
        {
          "input": "Ann Ben Ann Dan Eva\n90 80 90 70 60",
          "expectedOutput": "1 Ann 90 2 Ann 90 3 Ben 80 4 Dan 70 5 Eva 60",
          "output": "1 Ann 90 2 Ann 90 3 Ben 80 4 Dan 70 5 Eva 60",
          "score": 10
        },
        {
          "input": "One Two Three Four Five\n20 100 80 60 40",
          "expectedOutput": "1 Two 100 2 Three 80 3 Four 60 4 Five 40 5 One 20",
          "output": "1 Two 100 2 Three 80 3 Four 60 4 Five 40 5 One 20",
          "score": 10
        }
      ],
      "difficulty": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"v1\">目前位置</variable><variable id=\"v2\">最高位置</variable><variable id=\"v3\">比較位置</variable><variable id=\"v4\">暫存</variable><variable id=\"v5\">結果</variable><variable id=\"v6\">名次</variable><variable id=\"v7\">姓名</variable><variable id=\"v8\">分數</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v7\">姓名</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v8\">分數</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"0\"></mutation></block></value><next><block type=\"controls_repeat_ext\"><value name=\"TIMES\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"false\"></mutation><field name=\"MODE\">INSERT</field><field name=\"WHERE\">LAST</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v1\">目前位置</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v3\">比較位置</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">比較位置</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v2\">最高位置</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v3\">比較位置</field></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">暫存</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v4\">暫存</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v1\">目前位置</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v2\">最高位置</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v4\">暫存</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"v6\">名次</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"v5\">結果</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"7\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">名次</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v7\">姓名</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">名次</field></block></value></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD6\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v8\">分數</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v6\">名次</field></block></value></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"v5\">結果</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "hints": [
        "先完成連動排序，再依序輸出名次、姓名、分數。"
      ],
      "extension": true,
      "sourceCourse": "M1-08-SortApplied",
      "sourceDifficulty": "L3"
    }
  ]
};
