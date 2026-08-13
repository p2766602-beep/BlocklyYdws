// Hand-authored by Claude from YDWS-CodingBank/txtFile/114EKeelung.txt，每題starterXml皆用
// headless Blockly harness（verify.mjs）驗證過100%通過，學習模式（含範例答案）。

const course = {
  "code": "114EKeelung",
  "title": "114-基隆市國小",
  "type": "programming",
  "mode": "learning",
  "description": "114-基隆市國小114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-13T08:59:31.903Z",
    "sourceTxt": "txtFile/114EKeelung.txt",
    "version": "manual-blockly-build-verified"
  },
  "tasks": [
    {
      "id": "114EKeelung-1",
      "title": "1.魔法寶石的盤點(易)",
      "problemTitle": "1.魔法寶石的盤點(易)",
      "courseCode": "114EKeelung",
      "courseName": "114-基隆市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "在遙遠的魔法王國裡,每一位見習魔法師都有一個專屬的寶石袋,裡面裝滿了各式各樣擁有不同魔力的「數字寶石」。 每一顆寶石上都刻著一個獨特的編號,代表它的屬性(例如:1號是火、2號是水、5號是雷電...等等)。 \n今天,大法師想要考驗大家的細心程度。 他會給你一個任務,請你打開你的寶石袋,檢查裡面所有的寶石,然後告訴大法師,某個「特定編號」的寶石,你總共收集到了幾顆? \n請你寫一個程式,幫忙自動計算出正確的數量,這樣就不會數錯而被大法師處罰囉!",
      "inputDescription": "輸入共分成三行:\n1.第一行是一個整數,代表寶石袋裡總共有幾顆寶石。\n2.第二行有N個整數,代表袋子裡每一顆寶石上的編號,數字之間以空白隔開。\n3.第三行是一個整數K,代表大法師指定要查詢的「特定編號」。",
      "outputDescription": "輸出一個整數,代表編號為K的寶石在袋子裡出現的總次數。",
      "statement": {
        "description": "在遙遠的魔法王國裡,每一位見習魔法師都有一個專屬的寶石袋,裡面裝滿了各式各樣擁有不同魔力的「數字寶石」。 每一顆寶石上都刻著一個獨特的編號,代表它的屬性(例如:1號是火、2號是水、5號是雷電...等等)。 \n今天,大法師想要考驗大家的細心程度。 他會給你一個任務,請你打開你的寶石袋,檢查裡面所有的寶石,然後告訴大法師,某個「特定編號」的寶石,你總共收集到了幾顆? \n請你寫一個程式,幫忙自動計算出正確的數量,這樣就不會數錯而被大法師處罰囉!",
        "input": "輸入共分成三行:\n1.第一行是一個整數,代表寶石袋裡總共有幾顆寶石。\n2.第二行有N個整數,代表袋子裡每一顆寶石上的編號,數字之間以空白隔開。\n3.第三行是一個整數K,代表大法師指定要查詢的「特定編號」。",
        "output": "輸出一個整數,代表編號為K的寶石在袋子裡出現的總次數。"
      },
      "examples": [
        {
          "input": "10\n1 5 3 2 5 8 5 9 1 5\n5",
          "output": "4",
          "explanation": ""
        },
        {
          "input": "4\n6 12 31 24\n2",
          "output": "0",
          "explanation": ""
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t1_n\">N</variable><variable id=\"t1_gems\">gems</variable><variable id=\"t1_k\">K</variable><variable id=\"t1_i\">i</variable><variable id=\"t1_v\">v</variable><variable id=\"t1_count\">count</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入寶石總數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_gems\">gems</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入寶石編號</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_gems\">gems</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入特定編號K</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_k\">K</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_count\">count</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_gems\">gems</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_k\">K</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_count\">count</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_count\">count</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_count\">count</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "10\n1 5 3 2 5 8 5 9 1 5\n5",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n6 12 31 24\n2",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n10 20 30 40 50 60\n20",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 1 1 5\n8",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n29 37 468 10 0\n7",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n3 3 5 3 5 5 3\n3",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100\n100",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0 5 0 2 0 8 0 0 1 0\n0",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12\n1 2 3 4 5 6 7 8 9 10 11 12\n7",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n2 4 6 8 10 2 4 6 8 10 2 4 6 8 10\n2",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114EKeelung-2",
      "title": "2.遊戲績分排行榜(易)",
      "problemTitle": "2.遊戲績分排行榜(易)",
      "courseCode": "114EKeelung",
      "courseName": "114-基隆市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "您正在開發一款簡單的益智遊戲。 每次遊戲結束後,系統會記錄玩家的最終得分。 為了激勵玩家,您需要編寫一個程式來快速計算並顯示當前所有紀錄中的前三名最高得分。 如果總得分記錄數少於三筆,則輸出所有可用的得分。",
      "inputDescription": "輸入包含兩行:第一行是一個整數N (0<=N>=100),表示玩家的總得分紀錄數。 第二行是 N個整數,代表每位玩家的得分 (0<=N>=1000)。",
      "outputDescription": "輸出一行或多行:輸出前三個最高的得分。 如果得分紀錄少於三筆,則輸出所有得分。 如果 N=0(沒有任何紀錄),則輸出「目前沒有績分」",
      "statement": {
        "description": "您正在開發一款簡單的益智遊戲。 每次遊戲結束後,系統會記錄玩家的最終得分。 為了激勵玩家,您需要編寫一個程式來快速計算並顯示當前所有紀錄中的前三名最高得分。 如果總得分記錄數少於三筆,則輸出所有可用的得分。",
        "input": "輸入包含兩行:第一行是一個整數N (0<=N>=100),表示玩家的總得分紀錄數。 第二行是 N個整數,代表每位玩家的得分 (0<=N>=1000)。",
        "output": "輸出一行或多行:輸出前三個最高的得分。 如果得分紀錄少於三筆,則輸出所有得分。 如果 N=0(沒有任何紀錄),則輸出「目前沒有績分」"
      },
      "examples": [
        {
          "input": "6\n50 420 80 500 410 210",
          "output": "500 420 410",
          "explanation": ""
        },
        {
          "input": "1\n99",
          "output": "99",
          "explanation": ""
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t2_n\">N</variable><variable id=\"t2_scores\">scores</variable><variable id=\"t2_i\">i</variable><variable id=\"t2_j\">j</variable><variable id=\"t2_v\">v</variable><variable id=\"t2_tmp\">tmp</variable><variable id=\"t2_cnt\">cnt</variable><variable id=\"t2_out\">out</variable><variable id=\"t2_itemtxt\">itemtxt</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入紀錄數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">目前沒有績分</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_scores\">scores</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入得分</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_tmp\">tmp</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_tmp\">tmp</field></block></value></block></next></block></next></block></statement></block></statement></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_cnt\">cnt</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_cnt\">cnt</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_cnt\">cnt</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_itemtxt\">itemtxt</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"1\"></mutation><value name=\"ADD0\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_out\">out</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_itemtxt\">itemtxt</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_itemtxt\">itemtxt</field></block></value></block></value></block></statement></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "6\n50 420 80 500 410 210",
          "expectedOutput": "500 420 410",
          "output": "500 420 410",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n99",
          "expectedOutput": "99",
          "output": "99",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n777 666",
          "expectedOutput": "777 666",
          "output": "777 666",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0",
          "expectedOutput": "目前沒有績分",
          "output": "目前沒有績分",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n75 75 75 60",
          "expectedOutput": "75 75 75",
          "output": "75 75 75",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n18 520 18",
          "expectedOutput": "520 18 18",
          "output": "520 18 18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50",
          "expectedOutput": "50 40 30",
          "output": "50 40 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 100 100",
          "expectedOutput": "100 100 100",
          "output": "100 100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 2 3 4 5 6 7",
          "expectedOutput": "7 6 5",
          "output": "7 6 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n0 0 0 0 0 0 0 0",
          "expectedOutput": "0 0 0",
          "output": "0 0 0",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114EKeelung-3",
      "title": "3.隊伍的旋轉舞步(中)",
      "problemTitle": "3.隊伍的旋轉舞步(中)",
      "courseCode": "114EKeelung",
      "courseName": "114-基隆市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "一年一度的運動會到了,六年級的同學們正在練習大會舞。 教練設計了一個特別的「波浪變換」隊形。 一開始,N位同學排成一直排,每個人身上都有一個號碼牌。 當教練吹哨子並喊出一個數字 K時,隊伍就要進行「向右旋轉移動」K格。 \n所謂的「向右旋轉移動」規則是這樣的:\n站在最右邊(排尾)的同學,要跑到最左邊(排頭)去。 \n如果教練喊 K=1,代表所有人都往右走一步,而最後一位同學跑到第一個位置。 \n如果教練喊 K=2,代表這個動作連續做兩次。 \n舉個例子,如果隊伍是[1,2,3,4,5],教練喊「向右移2格」:\n1.第一次移動後變成:[5,1,2,3,4] (5號跑去排頭)\n2.第二次移動後變成:[4,5,1,2,3] (4號跑去排頭)\n請你寫一個程式,根據輸入的同學初始隊伍順序,以及教練喊出的移動步數 K,算出最後大家站的位置順序是如何?\n注意: 教練有時候太興奮,喊出的步數K可能會比隊伍的人數還要多喔!",
      "inputDescription": "輸入共分成三行:\n1.第一行是一個整數N,代表隊伍中共有幾位同學。\n2.第二行有N個整數,代表一開始隊伍中同學的號碼順序,數字以空白隔開。\n3.第三行是一個整數K,代表向右移動的步數。",
      "outputDescription": "輸出移動完成後,新的隊伍號碼順序,數字間請用空白隔開。",
      "statement": {
        "description": "一年一度的運動會到了,六年級的同學們正在練習大會舞。 教練設計了一個特別的「波浪變換」隊形。 一開始,N位同學排成一直排,每個人身上都有一個號碼牌。 當教練吹哨子並喊出一個數字 K時,隊伍就要進行「向右旋轉移動」K格。 \n所謂的「向右旋轉移動」規則是這樣的:\n站在最右邊(排尾)的同學,要跑到最左邊(排頭)去。 \n如果教練喊 K=1,代表所有人都往右走一步,而最後一位同學跑到第一個位置。 \n如果教練喊 K=2,代表這個動作連續做兩次。 \n舉個例子,如果隊伍是[1,2,3,4,5],教練喊「向右移2格」:\n1.第一次移動後變成:[5,1,2,3,4] (5號跑去排頭)\n2.第二次移動後變成:[4,5,1,2,3] (4號跑去排頭)\n請你寫一個程式,根據輸入的同學初始隊伍順序,以及教練喊出的移動步數 K,算出最後大家站的位置順序是如何?\n注意: 教練有時候太興奮,喊出的步數K可能會比隊伍的人數還要多喔!",
        "input": "輸入共分成三行:\n1.第一行是一個整數N,代表隊伍中共有幾位同學。\n2.第二行有N個整數,代表一開始隊伍中同學的號碼順序,數字以空白隔開。\n3.第三行是一個整數K,代表向右移動的步數。",
        "output": "輸出移動完成後,新的隊伍號碼順序,數字間請用空白隔開。"
      },
      "examples": [
        {
          "input": "5\n10 20 30 40 50\n1",
          "output": "50 10 20 30 40",
          "explanation": ""
        },
        {
          "input": "5\n10 20 30 40 50\n2",
          "output": "40 50 10 20 30",
          "explanation": ""
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t3_n\">N</variable><variable id=\"t3_old\">old</variable><variable id=\"t3_new\">nw</variable><variable id=\"t3_k\">K</variable><variable id=\"t3_k2\">k2</variable><variable id=\"t3_i\">i</variable><variable id=\"t3_v\">v</variable><variable id=\"t3_out\">out</variable><variable id=\"t3_itemtxt\">itemtxt</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入人數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_old\">old</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入號碼</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_old\">old</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入移動步數K</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_k\">K</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_k2\">k2</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k\">K</field></block></value><value name=\"DIVISOR\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_new\">nw</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k2\">k2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k2\">k2</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_new\">nw</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_old\">old</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k2\">k2</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value></block></value></block></value></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k2\">k2</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k2\">k2</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_new\">nw</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k2\">k2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_old\">old</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value></block></value></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_itemtxt\">itemtxt</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"1\"></mutation><value name=\"ADD0\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_new\">nw</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_itemtxt\">itemtxt</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_itemtxt\">itemtxt</field></block></value></block></value></block></statement></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "5\n10 20 30 40 50\n1",
          "expectedOutput": "50 10 20 30 40",
          "output": "50 10 20 30 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50\n2",
          "expectedOutput": "40 50 10 20 30",
          "output": "40 50 10 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 2 3\n3",
          "expectedOutput": "1 2 3",
          "output": "1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 2 3 4\n5",
          "expectedOutput": "4 1 2 3",
          "output": "4 1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 4 5\n0",
          "expectedOutput": "1 2 3 4 5",
          "output": "1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n99 88\n101",
          "expectedOutput": "88 99",
          "output": "88 99",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n7 7 7 7 7 7\n3",
          "expectedOutput": "7 7 7 7 7 7",
          "output": "7 7 7 7 7 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 2 3 4 5 6 7\n4",
          "expectedOutput": "4 5 6 7 1 2 3",
          "output": "4 5 6 7 1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0 1 2 3 4 5 6 7 8 9\n15",
          "expectedOutput": "5 6 7 8 9 0 1 2 3 4",
          "output": "5 6 7 8 9 0 1 2 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 3 5 7\n6",
          "expectedOutput": "5 7 1 3",
          "output": "5 7 1 3",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114EKeelung-4",
      "title": "4.找出連續整數中所缺失的數字(中)",
      "problemTitle": "4.找出連續整數中所缺失的數字(中)",
      "courseCode": "114EKeelung",
      "courseName": "114-基隆市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "有一位剛學數字的小朋友,他喜歡在紙上書寫連續數字,但是在書寫的過程中經常會有數字被他遺漏,例如3、4、7、10,表示他從3寫到10,但中間遺漏了5、6、8、9等4個數字。 請你當小老師,設計程式找出這位小朋友在連續數字當中缺失的數字。",
      "inputDescription": "第一行:輸入一個整數N,小朋友所寫的數字\n輸入共有一列,N個正整數,數值介於0到200之間。",
      "outputDescription": "輸出共一列,為輸入數列中最小值與最大值所能排列出之差值為1的數列,並對比輸入數列後所缺失的數值,由小到大排列,若無缺失則輸出\"無缺失”。",
      "statement": {
        "description": "有一位剛學數字的小朋友,他喜歡在紙上書寫連續數字,但是在書寫的過程中經常會有數字被他遺漏,例如3、4、7、10,表示他從3寫到10,但中間遺漏了5、6、8、9等4個數字。 請你當小老師,設計程式找出這位小朋友在連續數字當中缺失的數字。",
        "input": "第一行:輸入一個整數N,小朋友所寫的數字\n輸入共有一列,N個正整數,數值介於0到200之間。",
        "output": "輸出共一列,為輸入數列中最小值與最大值所能排列出之差值為1的數列,並對比輸入數列後所缺失的數值,由小到大排列,若無缺失則輸出\"無缺失”。"
      },
      "examples": [
        {
          "input": "3\n1 3 5",
          "output": "2 4",
          "explanation": ""
        },
        {
          "input": "5\n7 9 15 18 19",
          "output": "8 10 11 12 13 14 16 17",
          "explanation": ""
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t4_n\">N</variable><variable id=\"t4_nums\">nums</variable><variable id=\"t4_i\">i</variable><variable id=\"t4_v\">v</variable><variable id=\"t4_mn\">mn</variable><variable id=\"t4_mx\">mx</variable><variable id=\"t4_cur\">cur</variable><variable id=\"t4_out\">out</variable><variable id=\"t4_found\">found</variable><variable id=\"t4_itemtxt\">itemtxt</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入數字個數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_nums\">nums</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入數字</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_mn\">mn</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_mx\">mx</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_mn\">mn</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_mn\">mn</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_mx\">mx</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_mx\">mx</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value></block></value></block></statement></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_cur\">cur</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_mn\">mn</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_mx\">mx</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_cur\">cur</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_found\">found</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_itemtxt\">itemtxt</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"1\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_cur\">cur</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_out\">out</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_itemtxt\">itemtxt</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_itemtxt\">itemtxt</field></block></value></block></value></block></statement></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">無缺失</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_out\">out</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "3\n1 3 5",
          "expectedOutput": "2 4",
          "output": "2 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n7 9 15 18 19",
          "expectedOutput": "8 10 11 12 13 14 16 17",
          "output": "8 10 11 12 13 14 16 17",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 101 102",
          "expectedOutput": "無缺失",
          "output": "無缺失",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n3 4 4 6",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n90 87 85",
          "expectedOutput": "86 88 89",
          "output": "86 88 89",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n10 3 7 4",
          "expectedOutput": "5 6 8 9",
          "output": "5 6 8 9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "expectedOutput": "無缺失",
          "output": "無缺失",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 10 10 10 10",
          "expectedOutput": "無缺失",
          "output": "無缺失",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n0 2",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n200 198 196 195 194 199",
          "expectedOutput": "197",
          "output": "197",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114EKeelung-5",
      "title": "5.數學王國的連續階梯(難)",
      "problemTitle": "5.數學王國的連續階梯(難)",
      "courseCode": "114EKeelung",
      "courseName": "114-基隆市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "在數學王國裡,有一座通往天空的神秘城堡。 城堡的大門緊閉著,門上只有一個巨大的數字螢幕,顯示著一個目標數字 N。 \n傳說中,想要打開這扇門,必須找到一組或多組「連續的正整數階梯」,這些階梯上的數字加起來的總和,必須剛好等於門上的數字N。 \n例如,如果門上的數字是15,你可以找到以下3組階梯:\n1.12345(因為1+2+3+4+5=15)\n2.456(因為4+5+6=15)\n3.78(因為 7+8=15)\n請注意,階梯至少要由兩個數字組成(不能只有一個數字),而且必須是連續的正整數(例如123...)。 \n請你寫一個程式,幫助冒險者列出所有能夠湊出目標數字的連續正整數組合。",
      "inputDescription": "輸入只有一行,包含一個正整數 N (3<=N<=500)",
      "outputDescription": "請列出所有總和等於N的連續正整數組合。\n每一組組合輸出一行,格式為數字+數字+...=N。\n輸出的順序請依照「起始數字」由小到大排列。\n如果找不到任何一組符合條件的連續整數(例如輸入2或4時),則輸出 No。",
      "statement": {
        "description": "在數學王國裡,有一座通往天空的神秘城堡。 城堡的大門緊閉著,門上只有一個巨大的數字螢幕,顯示著一個目標數字 N。 \n傳說中,想要打開這扇門,必須找到一組或多組「連續的正整數階梯」,這些階梯上的數字加起來的總和,必須剛好等於門上的數字N。 \n例如,如果門上的數字是15,你可以找到以下3組階梯:\n1.12345(因為1+2+3+4+5=15)\n2.456(因為4+5+6=15)\n3.78(因為 7+8=15)\n請注意,階梯至少要由兩個數字組成(不能只有一個數字),而且必須是連續的正整數(例如123...)。 \n請你寫一個程式,幫助冒險者列出所有能夠湊出目標數字的連續正整數組合。",
        "input": "輸入只有一行,包含一個正整數 N (3<=N<=500)",
        "output": "請列出所有總和等於N的連續正整數組合。\n每一組組合輸出一行,格式為數字+數字+...=N。\n輸出的順序請依照「起始數字」由小到大排列。\n如果找不到任何一組符合條件的連續整數(例如輸入2或4時),則輸出 No。"
      },
      "examples": [
        {
          "input": "15",
          "output": "1+2+3+4+5=15\n4+5+6=15\n7+8=15",
          "explanation": ""
        },
        {
          "input": "10",
          "output": "1+2+3+4=10",
          "explanation": ""
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t5_n\">N</variable><variable id=\"t5_start\">start</variable><variable id=\"t5_sum\">sum</variable><variable id=\"t5_end\">end</variable><variable id=\"t5_found\">found</variable><variable id=\"t5_k\">k</variable><variable id=\"t5_segtxt\">segtxt</variable><variable id=\"t5_itemtxt\">itemtxt</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入目標數字N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t5_start\">start</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_sum\">sum</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_start\">start</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_end\">end</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_start\">start</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_end\">end</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_end\">end</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_end\">end</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_sum\">sum</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_end\">end</field></block></value></block></value></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_end\">end</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_start\">start</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t5_k\">k</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_start\">start</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_end\">end</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_itemtxt\">itemtxt</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"1\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_k\">k</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_k\">k</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_start\">start</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_itemtxt\">itemtxt</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">+</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_itemtxt\">itemtxt</field></block></value></block></value></block></statement></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">=</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_segtxt\">segtxt</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_found\">found</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">No</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "15",
          "expectedOutput": "1+2+3+4+5=15\n4+5+6=15\n7+8=15",
          "output": "1+2+3+4+5=15\n4+5+6=15\n7+8=15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10",
          "expectedOutput": "1+2+3+4=10",
          "output": "1+2+3+4=10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3",
          "expectedOutput": "1+2=3",
          "output": "1+2=3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9",
          "expectedOutput": "2+3+4=9\n4+5=9",
          "output": "2+3+4=9\n4+5=9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100",
          "expectedOutput": "9+10+11+12+13+14+15+16=100\n18+19+20+21+22=100",
          "output": "9+10+11+12+13+14+15+16=100\n18+19+20+21+22=100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "expectedOutput": "No",
          "output": "No",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4",
          "expectedOutput": "No",
          "output": "No",
          "score": 10,
          "hidden": false
        },
        {
          "input": "21",
          "expectedOutput": "1+2+3+4+5+6=21\n6+7+8=21\n10+11=21",
          "output": "1+2+3+4+5+6=21\n6+7+8=21\n10+11=21",
          "score": 10,
          "hidden": false
        },
        {
          "input": "27",
          "expectedOutput": "2+3+4+5+6+7=27\n8+9+10=27\n13+14=27",
          "output": "2+3+4+5+6+7=27\n8+9+10=27\n13+14=27",
          "score": 10,
          "hidden": false
        },
        {
          "input": "35",
          "expectedOutput": "2+3+4+5+6+7+8=35\n5+6+7+8+9=35\n17+18=35",
          "output": "2+3+4+5+6+7+8=35\n5+6+7+8+9=35\n17+18=35",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114EKeelung-6",
      "title": "6.平均分配物品(難)",
      "problemTitle": "6.平均分配物品(難)",
      "courseCode": "114EKeelung",
      "courseName": "114-基隆市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "陳老師有N種不同種類及不同數量的文具,所有的文具都要平分給小朋友,讓每位小朋友分到的每一種文具的數量要一樣多,按照這樣的分法,請問老師準備的N種文具最多可以分給幾位小朋友?\n例如:陳老師有3種文具,分別是鉛筆12枝、橡皮擦36個、筆記本15本,所有的文具都分完,最多可以分給3個小朋友,每個人有鉛筆4枝、橡皮擦12個、筆記本5本",
      "inputDescription": "第一行:輸入一個整數N,為老師所準備的文具種類\n第二行:輸入N個整數,用空格隔開,為各種文具的數量",
      "outputDescription": "可分給小朋友的最多人數",
      "statement": {
        "description": "陳老師有N種不同種類及不同數量的文具,所有的文具都要平分給小朋友,讓每位小朋友分到的每一種文具的數量要一樣多,按照這樣的分法,請問老師準備的N種文具最多可以分給幾位小朋友?\n例如:陳老師有3種文具,分別是鉛筆12枝、橡皮擦36個、筆記本15本,所有的文具都分完,最多可以分給3個小朋友,每個人有鉛筆4枝、橡皮擦12個、筆記本5本",
        "input": "第一行:輸入一個整數N,為老師所準備的文具種類\n第二行:輸入N個整數,用空格隔開,為各種文具的數量",
        "output": "可分給小朋友的最多人數"
      },
      "examples": [
        {
          "input": "2\n15 45",
          "output": "15",
          "explanation": ""
        },
        {
          "input": "3\n24 16 12",
          "output": "4",
          "explanation": ""
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t6_n\">N</variable><variable id=\"t6_nums\">nums</variable><variable id=\"t6_i\">i</variable><variable id=\"t6_v\">v</variable><variable id=\"t6_result\">result</variable><variable id=\"t6_a\">a</variable><variable id=\"t6_b\">b</variable><variable id=\"t6_tmp\">tmp</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入文具種類數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_nums\">nums</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入數量</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_result\">result</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_nums\">nums</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_a\">a</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_result\">result</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_b\">b</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_nums\">nums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_b\">b</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_tmp\">tmp</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_a\">a</field></block></value><value name=\"DIVISOR\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_b\">b</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_a\">a</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_b\">b</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_b\">b</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_result\">result</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_a\">a</field></block></value></block></next></block></next></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_result\">result</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "2\n15 45",
          "expectedOutput": "15",
          "output": "15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n24 16 12",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n2 9",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n8",
          "expectedOutput": "8",
          "output": "8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 200 1",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n6 6 6",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n12 24 36 48",
          "expectedOutput": "12",
          "output": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n1000 500",
          "expectedOutput": "500",
          "output": "500",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n21 14 35",
          "expectedOutput": "7",
          "output": "7",
          "score": 10,
          "hidden": false
        }
      ]
    }
  ]
};

export default course;
