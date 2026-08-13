// Hand-authored by Claude from YDWS-CodingBank/txtFile/114ETaoyuan.txt，每題starterXml皆用
// headless Blockly harness（verify.mjs）驗證過100%通過，學習模式（含範例答案）。

const course = {
  "code": "114ETaoyuan",
  "title": "114-桃園市國小",
  "type": "programming",
  "mode": "learning",
  "description": "114-桃園市國小114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-13T08:59:31.912Z",
    "sourceTxt": "txtFile/114ETaoyuan.txt",
    "version": "manual-blockly-build-verified"
  },
  "tasks": [
    {
      "id": "114ETaoyuan-1",
      "title": "1-班服投票",
      "problemTitle": "1-班服投票",
      "courseCode": "114ETaoyuan",
      "courseName": "114-桃園市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "可愛國小601班要製作紀念班服，本次班服設計有三個款式，分別編號為1、2、3。班上同學可以自由投票，參與投票者可在選票上寫上一個自己所選擇的班服款式編號，統計後選出投票數最高的款式。\n請設計程式：\n先計算每款班服設計的得票數(依1→3順序)，顯示出最後獲得最高票數的班服款式編碼，若有票數一樣的狀況，輸出：請重新投票。\n【輸入格式】\n第一行：一個整數N，代表投票數。\n第二行：N個整數，介於1~3，代表每張選票的班服設計編號，用空格隔開。\n【輸出格式】\n如果有明確的最高票，輸出一個整數，票數最高的班服編號。如果有最高票數相同情形，輸出請重新投票。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "可愛國小601班要製作紀念班服，本次班服設計有三個款式，分別編號為1、2、3。班上同學可以自由投票，參與投票者可在選票上寫上一個自己所選擇的班服款式編號，統計後選出投票數最高的款式。\n請設計程式：\n先計算每款班服設計的得票數(依1→3順序)，顯示出最後獲得最高票數的班服款式編碼，若有票數一樣的狀況，輸出：請重新投票。\n【輸入格式】\n第一行：一個整數N，代表投票數。\n第二行：N個整數，介於1~3，代表每張選票的班服設計編號，用空格隔開。\n【輸出格式】\n如果有明確的最高票，輸出一個整數，票數最高的班服編號。如果有最高票數相同情形，輸出請重新投票。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "8\n1 2 2 3 2 1 3 2",
          "output": "2",
          "explanation": "代表得票數最高的班服設計編號為2"
        },
        {
          "input": "6\n1 2 3 1 2 3",
          "output": "請重新投票",
          "explanation": "代表班服設計投票結果最高票有同票數情形需要重新投票"
        },
        {
          "input": "5\n3 3 1 2 3",
          "output": "3",
          "explanation": "代表得票數最高的班服設計編號為3"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t1_n\">N</variable><variable id=\"t1_v\">v</variable><variable id=\"t1_i\">i</variable><variable id=\"t1_c1\">c1</variable><variable id=\"t1_c2\">c2</variable><variable id=\"t1_c3\">c3</variable><variable id=\"t1_maxv\">maxv</variable><variable id=\"t1_tiecount\">tiecount</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_c1\">c1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_c2\">c2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_c3\">c3</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入投票數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入款式編號</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_v\">v</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_c1\">c1</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c1\">c1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_v\">v</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_c2\">c2</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c2\">c2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_c3\">c3</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c3\">c3</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c1\">c1</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c2\">c2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c2\">c2</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c3\">c3</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c3\">c3</field></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c1\">c1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c2\">c2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c3\">c3</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_tiecount\">tiecount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請重新投票</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c1\">c1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_c2\">c2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_maxv\">maxv</field></block></value></block></value><statement name=\"DO1\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></statement></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "8\n1 2 2 3 2 1 3 2",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "6\n1 2 3 1 2 3",
          "expectedOutput": "請重新投票",
          "score": 10
        },
        {
          "input": "5\n3 3 1 2 3",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "1\n1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "10\n1 1 1 1 1 2 2 3 3 3",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "10\n3 3 3 3 3 1 1 1 2 2",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "4\n1 1 2 2",
          "expectedOutput": "請重新投票",
          "score": 10
        },
        {
          "input": "3\n1 2 3",
          "expectedOutput": "請重新投票",
          "score": 10
        },
        {
          "input": "15\n2 2 2 2 2 2 2 1 1 1 3 3 3 3 3",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "9\n1 1 1 2 2 2 3 3 3",
          "expectedOutput": "請重新投票",
          "score": 10
        }
      ]
    },
    {
      "id": "114ETaoyuan-2",
      "title": "2-棒球場的座位",
      "problemTitle": "2-棒球場的座位",
      "courseCode": "114ETaoyuan",
      "courseName": "114-桃園市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "棒球場總共有9000個座位，座位區分為為三大區，每區共有90排：一、三大區為普通區各有2,250席，每排各有25人。第二大區為搖滾區有4,500席，每排各有50人。座位編號按照大區順序，由第一區開始由左至右、由前至後，再接續第二、三大區。\n小明想要去看棒球賽為台灣隊加油，請你寫一個程式，輸入座位號碼，就可以輸出在哪一區，哪一排的第幾個位置，讓小明可以在眾多的座位中，快速找到自己的座位\n【輸入格式】\n單行輸入座位號碼。\n【輸出格式】\n輸出三個整數，分別代表：區、排、第幾個位置 (數字之間以半形空格分隔)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "棒球場總共有9000個座位，座位區分為為三大區，每區共有90排：一、三大區為普通區各有2,250席，每排各有25人。第二大區為搖滾區有4,500席，每排各有50人。座位編號按照大區順序，由第一區開始由左至右、由前至後，再接續第二、三大區。\n小明想要去看棒球賽為台灣隊加油，請你寫一個程式，輸入座位號碼，就可以輸出在哪一區，哪一排的第幾個位置，讓小明可以在眾多的座位中，快速找到自己的座位\n【輸入格式】\n單行輸入座位號碼。\n【輸出格式】\n輸出三個整數，分別代表：區、排、第幾個位置 (數字之間以半形空格分隔)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "1881",
          "output": "1 76 6",
          "explanation": "座位 1881\n在第1區 第76排 由左數第6個位置"
        },
        {
          "input": "3045",
          "output": "2 16 45",
          "explanation": "座位 3045\n在第2區 第16排 由左數第45個位置"
        },
        {
          "input": "8241",
          "output": "3 60 16",
          "explanation": "座位 8241\n在第3區 第60排 由左數第16個位置"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t2_sn\">SN</variable><variable id=\"t2_zone\">zone</variable><variable id=\"t2_local\">local</variable><variable id=\"t2_perrow\">perrow</variable><variable id=\"t2_row\">row</variable><variable id=\"t2_pos\">pos</variable><variable id=\"t2_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入座位號碼</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_sn\">SN</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sn\">SN</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2250</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_zone\">zone</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_local\">local</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sn\">SN</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_perrow\">perrow</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">25</field></block></value></block></next></block></next></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sn\">SN</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">6750</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_zone\">zone</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_local\">local</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sn\">SN</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2250</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_perrow\">perrow</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></next></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_zone\">zone</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_local\">local</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sn\">SN</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">6750</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_perrow\">perrow</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">25</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_row\">row</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDUP</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_local\">local</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_perrow\">perrow</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_local\">local</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_row\">row</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_perrow\">perrow</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_zone\">zone</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_row\">row</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pos\">pos</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "1881",
          "expectedOutput": "1 76 6",
          "score": 10
        },
        {
          "input": "3045",
          "expectedOutput": "2 16 45",
          "score": 10
        },
        {
          "input": "8241",
          "expectedOutput": "3 60 16",
          "score": 10
        },
        {
          "input": "1",
          "expectedOutput": "1 1 1",
          "score": 10
        },
        {
          "input": "25",
          "expectedOutput": "1 1 25",
          "score": 10
        },
        {
          "input": "2250",
          "expectedOutput": "1 90 25",
          "score": 10
        },
        {
          "input": "2251",
          "expectedOutput": "2 1 1",
          "score": 10
        },
        {
          "input": "6750",
          "expectedOutput": "2 90 50",
          "score": 10
        },
        {
          "input": "6751",
          "expectedOutput": "3 1 1",
          "score": 10
        },
        {
          "input": "9000",
          "expectedOutput": "3 90 25",
          "score": 10
        }
      ]
    },
    {
      "id": "114ETaoyuan-3",
      "title": "3-挑選喜歡的午餐區間",
      "problemTitle": "3-挑選喜歡的午餐區間",
      "courseCode": "114ETaoyuan",
      "courseName": "114-桃園市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "小虎是學校裡最愛挑午餐的學生，他最喜歡的餐點有好幾種，用字母表示，例如 A=雞肉、B = 豬排、C = 義大利麵………………，學校提供了 N 天的午餐菜單，每天的主餐用字母表示。小虎想挑出連續 K 天的午餐，讓他最愛的餐點出現最多次，享受「最滿意的一段午餐時光」。如果出現有好幾段連續 K 天的午餐出現次數相同，小虎會選擇最早出現的一段。\n請幫小虎找出：\n1. 他最愛餐點在這段期間出現的次數\n2. 這段期間的起始天數(假設第一天為 1)\n【輸入格式】\n第1行：整數 N (天數)\n第2行：長度為 N 的字串菜單，每個字母表示一天的主餐，用空格隔開\n第3行：K (連續天數)\n第4行：小虎最愛餐點，可能有多個字母，例如 A C，用空格隔開\n【輸出格式】\n第1行：分別為最愛餐點出現次數與起始天數，兩個整數，中間以空格隔開",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "小虎是學校裡最愛挑午餐的學生，他最喜歡的餐點有好幾種，用字母表示，例如 A=雞肉、B = 豬排、C = 義大利麵………………，學校提供了 N 天的午餐菜單，每天的主餐用字母表示。小虎想挑出連續 K 天的午餐，讓他最愛的餐點出現最多次，享受「最滿意的一段午餐時光」。如果出現有好幾段連續 K 天的午餐出現次數相同，小虎會選擇最早出現的一段。\n請幫小虎找出：\n1. 他最愛餐點在這段期間出現的次數\n2. 這段期間的起始天數(假設第一天為 1)\n【輸入格式】\n第1行：整數 N (天數)\n第2行：長度為 N 的字串菜單，每個字母表示一天的主餐，用空格隔開\n第3行：K (連續天數)\n第4行：小虎最愛餐點，可能有多個字母，例如 A C，用空格隔開\n【輸出格式】\n第1行：分別為最愛餐點出現次數與起始天數，兩個整數，中間以空格隔開",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "7\nA B A C A B A\n3\nA",
          "output": "2 1",
          "explanation": "第1行代表7天\n第2行代表這7天的主餐\n第3行代表連續3天\n第4行代表喜愛的餐點為A\n輸出：最愛餐點出現2次數，起始天數為1"
        },
        {
          "input": "10\nA B C D A B C C B A\n4\nA C",
          "output": "3 5",
          "explanation": "第1行代表10天\n第2行代表這10天的主餐\n第3行代表連續4天\n第4行代表喜愛的餐點為A與C\n輸出：最愛餐點出現3次數，起始天數為5"
        },
        {
          "input": "5\nA B C D E\n2\nA B C D E",
          "output": "2 1",
          "explanation": "第1行代表5天\n第2行代表這5天的主餐\n第3行代表連續2天\n第4行代表喜愛的餐點為A、B、C、D、E\n輸出：最愛餐點出現2次數，起始天數為1"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t3_n\">N</variable><variable id=\"t3_menu\">menu</variable><variable id=\"t3_k\">K</variable><variable id=\"t3_favs\">favs</variable><variable id=\"t3_favcount\">favcount</variable><variable id=\"t3_still\">still</variable><variable id=\"t3_tok\">tok</variable><variable id=\"t3_i\">i</variable><variable id=\"t3_j\">j</variable><variable id=\"t3_s\">s</variable><variable id=\"t3_cur\">cur</variable><variable id=\"t3_bestcount\">bestcount</variable><variable id=\"t3_beststart\">beststart</variable><variable id=\"t3_foundbest\">foundbest</variable><variable id=\"t3_isfav\">isfav</variable><variable id=\"t3_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入天數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_menu\">menu</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入菜單</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_tok\">tok</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_menu\">menu</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_tok\">tok</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入連續天數K</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_k\">K</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_favs\">favs</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_favcount\">favcount</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_still\">still</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_still\">still</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入最愛餐點(輸入完畢請留空)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_tok\">tok</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_tok\">tok</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_still\">still</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_favcount\">favcount</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_favcount\">favcount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_favs\">favs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_favcount\">favcount</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_tok\">tok</field></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_foundbest\">foundbest</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_s\">s</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k\">K</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cur\">cur</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_j\">j</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_s\">s</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_s\">s</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_k\">K</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_isfav\">isfav</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_favcount\">favcount</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_menu\">menu</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_favs\">favs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_isfav\">isfav</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_isfav\">isfav</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cur\">cur</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_cur\">cur</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></next></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_foundbest\">foundbest</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_cur\">cur</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bestcount\">bestcount</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_bestcount\">bestcount</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_cur\">cur</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_beststart\">beststart</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_s\">s</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_foundbest\">foundbest</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bestcount\">bestcount</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_beststart\">beststart</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "7\nA B A C A B A\n3\nA",
          "expectedOutput": "2 1",
          "score": 10
        },
        {
          "input": "10\nA B C D A B C C B A\n4\nA C",
          "expectedOutput": "3 5",
          "score": 10
        },
        {
          "input": "5\nA B C D E\n2\nA B C D E",
          "expectedOutput": "2 1",
          "score": 10
        },
        {
          "input": "6\nX Y X Y X Y\n2\nX",
          "expectedOutput": "1 1",
          "score": 10
        },
        {
          "input": "6\nX Y Z X Y Z\n3\nX Z",
          "expectedOutput": "2 1",
          "score": 10
        },
        {
          "input": "5\nA A A A A\n2\nB",
          "expectedOutput": "0 1",
          "score": 10
        },
        {
          "input": "8\nM N O P M N O P\n4\nM O",
          "expectedOutput": "2 1",
          "score": 10
        },
        {
          "input": "1\nA\n1\nA",
          "expectedOutput": "1 1",
          "score": 10
        },
        {
          "input": "10\nB B B A A A B B B B\n3\nA",
          "expectedOutput": "3 4",
          "score": 10
        },
        {
          "input": "7\nC A B C A B C\n3\nC A",
          "expectedOutput": "2 1",
          "score": 10
        }
      ]
    },
    {
      "id": "114ETaoyuan-4",
      "title": "4-綠能任務挑戰",
      "problemTitle": "4-綠能任務挑戰",
      "courseCode": "114ETaoyuan",
      "courseName": "114-桃園市國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "為了推動淨零城市，玩家要在地圖中收集綠能點數(正值)與應對污染事件(負值)。地圖共有 N 個地點，每個地點代表一種環境事件，可能「吸收碳」(正值)、「排放碳」(負值)，或「無變化」(0)。玩家從第1個地點出發(初始能量為0，不算第1個地點的能量值)，每次依據骰子的點數移動，並在抵達新地點時計入能量變化。若移動過程中的總能量超過50，會觸發「能源過載」，總能量會維持在50。若移動過程中總能量下降至0(或是小於0)，會觸發「環境危機」，系統會自動啟動緊急裝置補助，把總能量設為5。地圖是環狀的，當超過第N格時會回到第1格繼續走。\n請計算所有移動執行完畢後的最終能量值，並輸出過程中曾達到的最高能量值。\n【輸入格式】\n第1行：整數N，代表地圖的地點數量\n第2行：N 個整數，依序代表第1格到第N格的能量變化值，中間以空格隔開\n第3行：整數 M，代表骰子的次數\n第4行：M 個整數，代表每次骰到的點數，中間以空格隔開\n【輸出格式】\n第1行代表最終能量值與最高能量值，中間以空格隔開",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "為了推動淨零城市，玩家要在地圖中收集綠能點數(正值)與應對污染事件(負值)。地圖共有 N 個地點，每個地點代表一種環境事件，可能「吸收碳」(正值)、「排放碳」(負值)，或「無變化」(0)。玩家從第1個地點出發(初始能量為0，不算第1個地點的能量值)，每次依據骰子的點數移動，並在抵達新地點時計入能量變化。若移動過程中的總能量超過50，會觸發「能源過載」，總能量會維持在50。若移動過程中總能量下降至0(或是小於0)，會觸發「環境危機」，系統會自動啟動緊急裝置補助，把總能量設為5。地圖是環狀的，當超過第N格時會回到第1格繼續走。\n請計算所有移動執行完畢後的最終能量值，並輸出過程中曾達到的最高能量值。\n【輸入格式】\n第1行：整數N，代表地圖的地點數量\n第2行：N 個整數，依序代表第1格到第N格的能量變化值，中間以空格隔開\n第3行：整數 M，代表骰子的次數\n第4行：M 個整數，代表每次骰到的點數，中間以空格隔開\n【輸出格式】\n第1行代表最終能量值與最高能量值，中間以空格隔開",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "4\n25 10 30 -5\n4\n1 1 2 1",
          "output": "50 50",
          "explanation": "第1行代表有4個地點數量\n第2行代表這4個地點數量的能量變化值\n第3行代表可以丟4次骰子\n第4行代表每次骰到的點數\n輸出：最終能量值50與最高能量值50"
        },
        {
          "input": "5\n10 -5 0 20 -10\n3\n1 2 3",
          "output": "20 25",
          "explanation": "第1行代表有5個地點數量\n第2行代表這5個地點數量的能量變化值\n第3行代表可以丟3次骰子\n第4行代表每次骰到的點數\n輸出：最終能量值20與最高能量值25"
        },
        {
          "input": "5\n-10 -20 10 0 30\n5\n1 1 1 1 1",
          "output": "35 45",
          "explanation": "第1行代表有5個地點數量\n第2行代表這5個地點數量的能量變化值\n第3行代表可以丟5次骰子\n第4行代表每次骰到的點數\n輸出：最終能量值35與最高能量值45"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t4_n\">N</variable><variable id=\"t4_delta\">delta</variable><variable id=\"t4_m\">M</variable><variable id=\"t4_i\">i</variable><variable id=\"t4_v\">v</variable><variable id=\"t4_roll\">roll</variable><variable id=\"t4_pos\">pos</variable><variable id=\"t4_energy\">energy</variable><variable id=\"t4_maxe\">maxe</variable><variable id=\"t4_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入地點數量N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_delta\">delta</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入能量變化值</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_delta\">delta</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入骰子次數M</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_m\">M</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pos\">pos</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_energy\">energy</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_maxe\">maxe</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入骰子點數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_roll\">roll</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pos\">pos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_roll\">roll</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_energy\">energy</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_energy\">energy</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_delta\">delta</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pos\">pos</field></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_energy\">energy</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_energy\">energy</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_energy\">energy</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_energy\">energy</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_energy\">energy</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_maxe\">maxe</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_maxe\">maxe</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_energy\">energy</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_energy\">energy</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_maxe\">maxe</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "4\n25 10 30 -5\n4\n1 1 2 1",
          "expectedOutput": "50 50",
          "score": 10
        },
        {
          "input": "5\n10 -5 0 20 -10\n3\n1 2 3",
          "expectedOutput": "20 25",
          "score": 10
        },
        {
          "input": "5\n-10 -20 10 0 30\n5\n1 1 1 1 1",
          "expectedOutput": "35 45",
          "score": 10
        },
        {
          "input": "3\n10 20 30\n2\n1 1",
          "expectedOutput": "50 50",
          "score": 10,
          "output": "50 50"
        },
        {
          "input": "4\n-50 -50 -50 -50\n4\n1 1 1 1",
          "expectedOutput": "5 5",
          "score": 10
        },
        {
          "input": "5\n10 10 10 10 10\n6\n1 1 1 1 1 1",
          "expectedOutput": "50 50",
          "score": 10
        },
        {
          "input": "6\n0 0 0 0 0 0\n3\n2 2 2",
          "expectedOutput": "5 5",
          "score": 10
        },
        {
          "input": "5\n5 5 5 5 5\n10\n1 1 1 1 1 1 1 1 1 1",
          "expectedOutput": "50 50",
          "score": 10
        },
        {
          "input": "4\n50 -100 50 -100\n4\n1 1 1 1",
          "expectedOutput": "50 50",
          "score": 10,
          "output": "50 50"
        },
        {
          "input": "5\n20 20 -30 40 10\n4\n1 1 1 1",
          "expectedOutput": "50 50",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
