// Hand-authored by Claude from data/problem_bank_master_complete.csv (114EChanghua-1~6)
// and cross-checked against every worked example in txtFile/114EChanghua.txt via a JS reference
// implementation before being written here. Not produced by export_course_js.py.
//
// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness
// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）
// 對每一筆testCases實際跑過，不是憑印象手刻。
// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。

export default {
  "code": "114EChanghua",
  "title": "114-彰化縣國小",
  "type": "programming",
  "mode": "learning",
  "description": "彰化縣114學年度國小組資訊科技競賽練習題，涵蓋公式計算、窮舉法與清單計數統計。",
  "tasks": [
    {
      "id": "Changhua-E-1",
      "title": "綠蔭道路",
      "problemTitle": "綠蔭道路",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "政府正在推動某鄉村的「智慧綠蔭道路計畫」，希望在一條筆直道路的一側種植行道樹，讓行人走在路上能有遮蔭。從道路的起點先種第一棵樹，接著每隔固定間距種一棵樹，如果最後剩下的距離不足一個間距，仍然要再補種一棵樹。\n請寫一個程式，根據道路長度與種樹間距，計算需要準備的樹苗數量。",
      "inputDescription": "輸入兩個數字，分別代表道路長度與種樹間距。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出所需要的樹苗數量。",
      "statement": {
        "description": "政府正在推動某鄉村的「智慧綠蔭道路計畫」，希望在一條筆直道路的一側種植行道樹，讓行人走在路上能有遮蔭。從道路的起點先種第一棵樹，接著每隔固定間距種一棵樹，如果最後剩下的距離不足一個間距，仍然要再補種一棵樹。\n請寫一個程式，根據道路長度與種樹間距，計算需要準備的樹苗數量。",
        "input": "輸入兩個數字，分別代表道路長度與種樹間距。(數字之間以單一半形空白間隔)",
        "output": "輸出所需要的樹苗數量。"
      },
      "examples": [
        {
          "input": "10 5",
          "output": "3",
          "explanation": "道路長度是10公尺，種樹間距為5公尺。 起點先種1棵，經過5公尺種1棵，再經過5公尺再種1棵，故為3顆。"
        },
        {
          "input": "11 5",
          "output": "4",
          "explanation": "道路長度是11公尺時，種樹間距為5公尺。 起點先種1棵，經過5公尺種1棵，再經過5公尺再種1棵，剩下距離為1公尺，仍需要補種1顆樹，故為4顆。"
        }
      ],
      "testCases": [
        {
          "input": "24 8",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "101 10",
          "expectedOutput": "12",
          "output": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "149 30",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 5",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11 5",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 100",
          "expectedOutput": "2",
          "output": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "99 100",
          "expectedOutput": "2",
          "output": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "200 50",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "201 50",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1000 1",
          "expectedOutput": "1001",
          "output": "1001",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c1_len\">len</variable><variable id=\"c1_gap\">gap</variable><variable id=\"c1_count\">count</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入道路長度與種樹間距</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c1_len\">len</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c1_gap\">gap</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c1_count\">count</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_round\"><field name=\"OP\">ROUNDUP</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_len\">len</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_gap\">gap</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_count\">count</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "無條件進位公式應用，練習ROUNDUP。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "無條件進位"
        ],
        "algorithm": [
          "公式換算"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "無條件進位"
        ],
        "math": [
          "除法"
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
      "id": "Changhua-E-2",
      "title": "最萌身高差",
      "problemTitle": "最萌身高差",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "白雪公主和七矮人一起生活在森林裡。七矮人的身高都不一樣，白雪公主想知道七矮人之中，最高的人和最矮的人身高相差多少。請你寫一個程式，根據七矮人的身高資料，計算出「最高者與最矮者的身高差」。小矮人的身高介於30公分到140公分之間。",
      "inputDescription": "輸入7個整數，依序代表七矮人的身高。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出1個整數，代表最高者與最矮者的身高差。",
      "statement": {
        "description": "白雪公主和七矮人一起生活在森林裡。七矮人的身高都不一樣，白雪公主想知道七矮人之中，最高的人和最矮的人身高相差多少。請你寫一個程式，根據七矮人的身高資料，計算出「最高者與最矮者的身高差」。小矮人的身高介於30公分到140公分之間。",
        "input": "輸入7個整數，依序代表七矮人的身高。(數字之間以單一半形空白間隔)",
        "output": "輸出1個整數，代表最高者與最矮者的身高差。"
      },
      "examples": [
        {
          "input": "130 110 115 120 125 118 112",
          "output": "20",
          "explanation": "最高的是130，最矮的是110，輸出身高差是20。"
        },
        {
          "input": "100 101 102 103 104 105 106",
          "output": "6",
          "explanation": "最高的是106，最矮的是100，輸出身高差是6。"
        }
      ],
      "testCases": [
        {
          "input": "105 98 110 102 99 108 101",
          "expectedOutput": "12",
          "output": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "140 135 138 133 130 137 61",
          "expectedOutput": "79",
          "output": "79",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60 76 74 72 70 68 78",
          "expectedOutput": "18",
          "output": "18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "130 110 115 120 125 118 112",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 101 102 103 104 105 106",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 40 50 60 70 80 90",
          "expectedOutput": "60",
          "output": "60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "140 130 120 110 100 90 80",
          "expectedOutput": "60",
          "output": "60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 140 50 60 70 80 90",
          "expectedOutput": "110",
          "output": "110",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 100 100 100 100 100 100",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "55 55 55 55 55 30 140",
          "expectedOutput": "110",
          "output": "110",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c2_v\">v</variable><variable id=\"c2_i\">i</variable><variable id=\"c2_max\">maxv</variable><variable id=\"c2_min\">minv</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_max\">maxv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-999999999</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_min\">minv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">999999999</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入七矮人身高</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_max\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_max\">maxv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_v\">v</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_min\">minv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_min\">minv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_v\">v</field></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_max\">maxv</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_min\">minv</field></block></value></block></value></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定7筆資料找最大最小值。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Changhua-E-3",
      "title": "秒數轉換",
      "problemTitle": "秒數轉換",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "時間長度除了可以單用「秒」來表示，也可以將其拆解為「時、分、秒」來表達。請你根據輸入的總秒數，將它轉換成「時、分、秒」三個數字。舉例來說 3661秒就等於1小時又1分又1秒。因為1小時+1分+1秒 = 3600秒+60秒+1秒 = 3661秒。",
      "inputDescription": "輸入1個整數，代表總秒數。",
      "outputDescription": "輸出3整數，依序代表拆解轉換成的小時、分鐘、秒。(數字之間以單一半形空白間隔)",
      "statement": {
        "description": "時間長度除了可以單用「秒」來表示，也可以將其拆解為「時、分、秒」來表達。請你根據輸入的總秒數，將它轉換成「時、分、秒」三個數字。舉例來說 3661秒就等於1小時又1分又1秒。因為1小時+1分+1秒 = 3600秒+60秒+1秒 = 3661秒。",
        "input": "輸入1個整數，代表總秒數。",
        "output": "輸出3整數，依序代表拆解轉換成的小時、分鐘、秒。(數字之間以單一半形空白間隔)"
      },
      "examples": [
        {
          "input": "3661",
          "output": "1 1 1",
          "explanation": "3661秒就是1小時1分又1秒"
        },
        {
          "input": "59",
          "output": "0 0 59",
          "explanation": "59秒就是0小時0分又59秒"
        }
      ],
      "testCases": [
        {
          "input": "7325",
          "expectedOutput": "2 2 5",
          "output": "2 2 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10000",
          "expectedOutput": "2 46 40",
          "output": "2 46 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "86399",
          "expectedOutput": "23 59 59",
          "output": "23 59 59",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3661",
          "expectedOutput": "1 1 1",
          "output": "1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "59",
          "expectedOutput": "0 0 59",
          "output": "0 0 59",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3600",
          "expectedOutput": "1 0 0",
          "output": "1 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60",
          "expectedOutput": "0 1 0",
          "output": "0 1 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0",
          "expectedOutput": "0 0 0",
          "output": "0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3599",
          "expectedOutput": "0 59 59",
          "output": "0 59 59",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7260",
          "expectedOutput": "2 1 0",
          "output": "2 1 0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c3_sec\">sec</variable><variable id=\"c3_h\">h</variable><variable id=\"c3_m\">m</variable><variable id=\"c3_s\">s</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入總秒數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_sec\">sec</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_h\">h</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_sec\">sec</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3600</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_m\">m</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_sec\">sec</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">3600</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_s\">s</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_sec\">sec</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_h\">h</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_m\">m</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_s\">s</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "整數除法與餘數的基礎應用，換算時分秒。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
      "id": "Changhua-E-4",
      "title": "協力車分配",
      "problemTitle": "協力車分配",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "班上同學到河濱公園騎協力車，協力車分成兩種：兩人共騎的協力車以及三人共騎的協力車。分配後全班同學剛好都有車可騎，而且每一輛協力車都坐滿。\n請你根據全班人數以及協力車總數的資料，計算出兩人共騎的協力車有幾輛。",
      "inputDescription": "輸入2個整數，依序分別代表全班人數以及協力車的總數。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出1個整數，代表兩人共騎的協力車數量。",
      "statement": {
        "description": "班上同學到河濱公園騎協力車，協力車分成兩種：兩人共騎的協力車以及三人共騎的協力車。分配後全班同學剛好都有車可騎，而且每一輛協力車都坐滿。\n請你根據全班人數以及協力車總數的資料，計算出兩人共騎的協力車有幾輛。",
        "input": "輸入2個整數，依序分別代表全班人數以及協力車的總數。(數字之間以單一半形空白間隔)",
        "output": "輸出1個整數，代表兩人共騎的協力車數量。"
      },
      "examples": [
        {
          "input": "5 2",
          "output": "1",
          "explanation": "全班有5個人，分配到2台協力車恰好可以坐滿。 那麼兩人共騎的協力車與三人共騎的協力車會各1台，輸出1也就是兩人協力車的數量。"
        },
        {
          "input": "8 4",
          "output": "4",
          "explanation": "全班有8個人，若分配到4台協力車恰好可以坐滿。 那麼就會需要兩人共騎的協力車4台，不需要三人共騎的協力車，輸出4代表兩人協力車的數量。"
        }
      ],
      "testCases": [
        {
          "input": "51 20",
          "expectedOutput": "9",
          "output": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "49 20",
          "expectedOutput": "11",
          "output": "11",
          "score": 10,
          "hidden": false
        },
        {
          "input": "62 25",
          "expectedOutput": "13",
          "output": "13",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 2",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 4",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 2",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 10",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20 10",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25 10",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 40",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c4_people\">people</variable><variable id=\"c4_bikes\">bikes</variable><variable id=\"c4_two\">two</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入全班人數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_people\">people</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_bikes\">bikes</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_two\">two</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_bikes\">bikes</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_people\">people</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_two\">two</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "二元一次聯立方程式應用，練習代數推導。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "方程式"
        ],
        "algorithm": [
          "公式推導"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "四則運算"
        ],
        "math": [
          "聯立方程式"
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
      "id": "Changhua-E-5",
      "title": "數橘子",
      "problemTitle": "數橘子",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小龍的媽媽今天到菜市場買了一堆橘子，有10顆以上，但忘記確切數量。回家後，媽媽嘗試用不同大小的袋子來分裝橘子：\n大袋子每袋可裝7顆、中袋子每袋可裝5顆、小袋子每袋可裝3顆。\n媽媽分別只使用其中一種袋子來裝橘子時，有可能恰好裝滿或剩下一些裝不滿一袋的橘子。\n請你根據這三種情況下剩餘的橘子數量，推算出橘子可能的最少總顆數。",
      "inputDescription": "輸入3個整數，依序分別代表\n只用大袋子分裝後剩下的橘子數\n只用中袋子分裝後剩下的橘子數\n只用小袋子分裝後剩下的橘子數\n(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出1個整數，代表橘子可能的最少總顆數。",
      "statement": {
        "description": "小龍的媽媽今天到菜市場買了一堆橘子，有10顆以上，但忘記確切數量。回家後，媽媽嘗試用不同大小的袋子來分裝橘子：\n大袋子每袋可裝7顆、中袋子每袋可裝5顆、小袋子每袋可裝3顆。\n媽媽分別只使用其中一種袋子來裝橘子時，有可能恰好裝滿或剩下一些裝不滿一袋的橘子。\n請你根據這三種情況下剩餘的橘子數量，推算出橘子可能的最少總顆數。",
        "input": "輸入3個整數，依序分別代表\n只用大袋子分裝後剩下的橘子數\n只用中袋子分裝後剩下的橘子數\n只用小袋子分裝後剩下的橘子數\n(數字之間以單一半形空白間隔)",
        "output": "輸出1個整數，代表橘子可能的最少總顆數。"
      },
      "examples": [
        {
          "input": "1 0 0",
          "output": "15",
          "explanation": "橘子10顆以上... 只用大袋子分裝，每7顆裝1袋，最後剩下1顆。 只用中袋子分裝，每5顆裝1袋，最後不剩剛好裝滿。 只用小袋子分裝，每3顆裝1袋，最後不剩剛好裝滿。 符合上述情況橘子可能的最少總顆數是15。"
        },
        {
          "input": "4 3 0",
          "output": "18",
          "explanation": "橘子10顆以上... 只用大袋子分裝，每7顆裝1袋，最後剩下4顆。 只用中袋子分裝，每5顆裝1袋，最後剩下3顆。 只用小袋子分裝，每3顆裝1袋，最後不剩剛好裝滿。 符合上述情況橘子可能的最少總顆數是18。"
        }
      ],
      "testCases": [
        {
          "input": "3 2 1",
          "expectedOutput": "52",
          "output": "52",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 1 2",
          "expectedOutput": "86",
          "output": "86",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 4 0",
          "expectedOutput": "114",
          "output": "114",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 3 2",
          "expectedOutput": "113",
          "output": "113",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 0 0",
          "expectedOutput": "15",
          "output": "15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 3 0",
          "expectedOutput": "18",
          "output": "18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 1",
          "expectedOutput": "70",
          "output": "70",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 1 1",
          "expectedOutput": "106",
          "output": "106",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 4 2",
          "expectedOutput": "104",
          "output": "104",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 0",
          "expectedOutput": "105",
          "output": "105",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c5_r7\">r7</variable><variable id=\"c5_r5\">r5</variable><variable id=\"c5_r3\">r3</variable><variable id=\"c5_n\">n</variable><variable id=\"c5_found\">found</variable><variable id=\"c5_answer\">answer</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入大袋子剩餘數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_r7\">r7</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_r5\">r5</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_r3\">r3</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c5_n\">n</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">11</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">500</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_found\">found</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_n\">n</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_r7\">r7</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_n\">n</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_r5\">r5</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_n\">n</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_r3\">r3</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_answer\">answer</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_n\">n</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_found\">found</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_answer\">answer</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉法求滿足多個餘數條件的最小值，類似中國剩餘定理的簡化版。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "窮舉"
        ],
        "subConcepts": [
          "餘數條件"
        ],
        "algorithm": [
          "窮舉法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
          "餘數"
        ],
        "math": [
          "同餘"
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
      "id": "Changhua-E-6",
      "title": "禮物多數決",
      "problemTitle": "禮物多數決",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "教師節快到了，班上同學想從禮品1號到禮品5號中選擇一樣送給老師。決定的方式是從同學的投票中，找出得票數最多的禮品。請根據投票結果，找出要送給老師的禮品編號，以及該禮品所得到的票數。",
      "inputDescription": "第一行輸入1個整數，代表有幾位同學參與投票。\n第二行輸入這幾位同學投票禮物編號，編號介於1到5。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出要有2個整數，分別代表得票最高的禮品編號以及這個禮品所得到的票數。(數字之間以單一半形空白間隔)\n(測資保證得票最多的禮品只有一個，不會有平手情況)",
      "statement": {
        "description": "教師節快到了，班上同學想從禮品1號到禮品5號中選擇一樣送給老師。決定的方式是從同學的投票中，找出得票數最多的禮品。請根據投票結果，找出要送給老師的禮品編號，以及該禮品所得到的票數。",
        "input": "第一行輸入1個整數，代表有幾位同學參與投票。\n第二行輸入這幾位同學投票禮物編號，編號介於1到5。(數字之間以單一半形空白間隔)",
        "output": "輸出要有2個整數，分別代表得票最高的禮品編號以及這個禮品所得到的票數。(數字之間以單一半形空白間隔)\n(測資保證得票最多的禮品只有一個，不會有平手情況)"
      },
      "examples": [
        {
          "input": "3\n1 1 1",
          "output": "1 3",
          "explanation": "第1個數字3代表有3位同學投票，接下來輸入的3個數字表示他們都投了1號禮品。 1號禮品票數最高，輸出1，然後輸出其票數3。"
        },
        {
          "input": "7\n5 5 5 2 2 2 5",
          "output": "5 4",
          "explanation": "第1個數字7代表有7位同學投票，接下來輸入的7個數字表示有4位投了5號禮品，有3位投了2號禮品。 5號禮品票數最高，輸出5，然後輸出其票數4。"
        }
      ],
      "testCases": [
        {
          "input": "8\n2 4 4 1 4 1 4 3",
          "expectedOutput": "4 4",
          "output": "4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n5 5 2 4 3 2 5",
          "expectedOutput": "5 3",
          "output": "5 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n1 2 2 4 2 2 2 2 3",
          "expectedOutput": "2 6",
          "output": "2 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n3 3 3 3 3 1 1 1 2 2",
          "expectedOutput": "3 5",
          "output": "3 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 1 1",
          "expectedOutput": "1 3",
          "output": "1 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n5 5 5 2 2 2 5",
          "expectedOutput": "5 4",
          "output": "5 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 4 1",
          "expectedOutput": "1 2",
          "output": "1 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 2 4",
          "expectedOutput": "2 2",
          "output": "2 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n1 1 1 2 2 2 3 3 3 4 4",
          "expectedOutput": "1 3",
          "output": "1 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "expectedOutput": "5 1",
          "output": "5 1",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c6_n\">N</variable><variable id=\"c6_counts\">counts</variable><variable id=\"c6_v\">v</variable><variable id=\"c6_i\">i</variable><variable id=\"c6_bestid\">bestid</variable><variable id=\"c6_bestv\">bestv</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入投票人數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_counts\">counts</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD1\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD2\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD3\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"ADD4\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_v\">v</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_v\">v</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_bestv\">bestv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_bestv\">bestv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_bestv\">bestv</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_counts\">counts</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_i\">i</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_bestid\">bestid</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_i\">i</field></block></value></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_bestid\">bestid</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_bestv\">bestv</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定5類別的投票計數，找最大值(保證無平手)。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "計數統計"
        ],
        "algorithm": [
          "最大值"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "清單存取"
        ],
        "math": [],
        "context": [
          "生活情境",
          "投票"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
