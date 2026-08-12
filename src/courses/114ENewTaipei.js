// Hand-authored by Claude from data/problem_bank_master_complete.csv (114ENewTaipei-1~4)
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
//
// NewTaipei-2第7筆評審資料判定為獨立輸入錯誤，依演算法結果收錄，詳見docs/PDF題目來源勘誤紀錄.md。

export default {
  "code": "114ENewTaipei",
  "title": "114-新北市國小",
  "type": "programming",
  "mode": "learning",
  "description": "新北市114學年度資訊科技組參考題目，涵蓋公式計算、清單搜尋與迴圈加總。",
  "tasks": [
    {
      "id": "NewTaipei-1",
      "title": "健康小管家",
      "problemTitle": "健康小管家",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。BMI=體重(kg)/(身高(m)×身高(m))。程式計算出BMI數值（取小數點後一位）後，依分類等級判斷：小於18.5為體重過輕；18.5到24.9為正常範圍；25.0到29.9為體重過重；30.0到34.9為輕度肥胖；35.0到39.9為中度肥胖；40.0以上為重度肥胖。",
      "inputDescription": "第一行輸入身高（cm），第二行輸入體重（kg）。",
      "outputDescription": "輸出BMI數值（取小數點後一位）與對應的分類等級，以空白分隔。",
      "statement": {
        "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。BMI=體重(kg)/(身高(m)×身高(m))。程式計算出BMI數值（取小數點後一位）後，依分類等級判斷：小於18.5為體重過輕；18.5到24.9為正常範圍；25.0到29.9為體重過重；30.0到34.9為輕度肥胖；35.0到39.9為中度肥胖；40.0以上為重度肥胖。",
        "input": "第一行輸入身高（cm），第二行輸入體重（kg）。",
        "output": "輸出BMI數值（取小數點後一位）與對應的分類等級，以空白分隔。"
      },
      "examples": [
        {
          "input": "165\n45",
          "output": "16.5 體重過輕",
          "explanation": "BMI=45/(1.65×1.65)=16.5，小於18.5，屬於體重過輕。"
        },
        {
          "input": "180\n85",
          "output": "26.2 體重過重",
          "explanation": "BMI=85/(1.8×1.8)=26.2，在25.0到29.9之間，屬於體重過重。"
        }
      ],
      "testCases": [
        {
          "input": "165\n45",
          "expectedOutput": "16.5 體重過輕",
          "output": "16.5 體重過輕",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n85",
          "expectedOutput": "26.2 體重過重",
          "output": "26.2 體重過重",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n60",
          "expectedOutput": "20.8 正常範圍",
          "output": "20.8 正常範圍",
          "score": 10,
          "hidden": false
        },
        {
          "input": "160\n81",
          "expectedOutput": "31.6 輕度肥胖",
          "output": "31.6 輕度肥胖",
          "score": 10,
          "hidden": false
        },
        {
          "input": "150\n85",
          "expectedOutput": "37.8 中度肥胖",
          "output": "37.8 中度肥胖",
          "score": 10,
          "hidden": false
        },
        {
          "input": "150\n100",
          "expectedOutput": "44.4 重度肥胖",
          "output": "44.4 重度肥胖",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n50",
          "expectedOutput": "17.3 體重過輕",
          "output": "17.3 體重過輕",
          "score": 10,
          "hidden": false
        },
        {
          "input": "175\n75",
          "expectedOutput": "24.5 正常範圍",
          "output": "24.5 正常範圍",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n95",
          "expectedOutput": "29.3 體重過重",
          "output": "29.3 體重過重",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n120",
          "expectedOutput": "41.5 重度肥胖",
          "output": "41.5 重度肥胖",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"n1_h\">H</variable><variable id=\"n1_w\">W</variable><variable id=\"n1_bmi\">bmi</variable><variable id=\"n1_cat\">cat</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入身高(cm)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_h\">H</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入體重(kg)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_w\">W</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_w\">W</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_h\">H</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_h\">H</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"4\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">18.5</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">體重過輕</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">24.9</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">正常範圍</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">29.9</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">體重過重</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">34.9</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">輕度肥胖</field></block></value></block></statement><value name=\"IF4\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">39.9</field></block></value></block></value><statement name=\"DO4\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">中度肥胖</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n1_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">重度肥胖</field></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_bmi\">bmi</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n1_cat\">cat</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "公式計算搭配四捨五入到小數點後一位（需用「乘10取整除10」湊出精度），再對照級距分類。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "級距判斷"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "四捨五入",
          "多層if"
        ],
        "math": [
          "BMI公式"
        ],
        "context": [
          "健康情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "NewTaipei-2",
      "title": "鋼琴小天才計分挑戰",
      "problemTitle": "鋼琴小天才計分挑戰",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除，選手的最終總成績就是剩下那5位評審給的分數總和。",
      "inputDescription": "輸入7個分數（可能為小數），以空白分隔，順序可以很亂。",
      "outputDescription": "輸出扣除最高與最低分後，剩餘5個分數的總和。",
      "statement": {
        "description": "比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除，選手的最終總成績就是剩下那5位評審給的分數總和。",
        "input": "輸入7個分數（可能為小數），以空白分隔，順序可以很亂。",
        "output": "輸出扣除最高與最低分後，剩餘5個分數的總和。"
      },
      "examples": [
        {
          "input": "8 9 7 9 8 10 7",
          "output": "41",
          "explanation": "最高分10最低分7，7個成績總和扣除(最高及最低)：8+9+7+9+8=41。"
        },
        {
          "input": "1.5 2.5 3.5 4.5 5.5 6.5 7.5",
          "output": "22.5",
          "explanation": "最高分7.5最低分1.5，剩餘總和2.5+3.5+4.5+5.5+6.5=22.5。"
        }
      ],
      "testCases": [
        {
          "input": "8 9 7 9 8 10 7",
          "expectedOutput": "41",
          "output": "41",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1.5 2.5 3.5 4.5 5.5 6.5 7.5",
          "expectedOutput": "22.5",
          "output": "22.5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10 10 10 10 10 10",
          "expectedOutput": "50",
          "output": "50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 0 0 0 0 0",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5 5 5 5 10 0",
          "expectedOutput": "25",
          "output": "25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9.5 8.5 7.5 9 8 10 6",
          "expectedOutput": "42.5",
          "output": "42.5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5 6 7",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 9 8 7 6 5 4",
          "expectedOutput": "35",
          "output": "35",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 10 10 10 10 10 1",
          "expectedOutput": "50",
          "output": "50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2.2 3.3 4.4 5.5 6.6 7.7 8.8",
          "expectedOutput": "27.5",
          "output": "27.5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"n2_v\">v</variable><variable id=\"n2_i\">i</variable><variable id=\"n2_sum\">sum</variable><variable id=\"n2_max\">maxv</variable><variable id=\"n2_min\">minv</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_sum\">sum</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_max\">maxv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-999999999</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_min\">minv</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">999999999</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"n2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_sum\">sum</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_v\">v</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_max\">maxv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_max\">maxv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_v\">v</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_min\">minv</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n2_min\">minv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_v\">v</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_max\">maxv</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n2_min\">minv</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定7個分數扣除一個最高一個最低後加總，可用「總和-最大值-最小值」的算術等價法。【資料備註】114ENewTaipei.txt評審資料第7筆原文預期答案為「15」，與其餘9筆完全吻合的演算法算出的「20」不符，判定為來源資料獨立輸入錯誤，題庫依演算法結果收錄為20。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "統計"
        ],
        "subConcepts": [
          "公式計算"
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
          "競賽情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "NewTaipei-3",
      "title": "幸運號碼大樂透",
      "problemTitle": "幸運號碼大樂透",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "玩具王國的幸運數字樂透遊戲：每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券，每期開獎公布10個幸運號碼。本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼：5個對中10萬元，4個1萬元，3個2000元，2個500元，1個200元，0個0元。",
      "inputDescription": "輸入玩家選擇的5個號碼，以空白分隔。",
      "outputDescription": "輸出「猜中X個號碼獎金Y元」。",
      "statement": {
        "description": "玩具王國的幸運數字樂透遊戲：每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券，每期開獎公布10個幸運號碼。本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼：5個對中10萬元，4個1萬元，3個2000元，2個500元，1個200元，0個0元。",
        "input": "輸入玩家選擇的5個號碼，以空白分隔。",
        "output": "輸出「猜中X個號碼獎金Y元」。"
      },
      "examples": [
        {
          "input": "7 18 29 31 35",
          "output": "猜中2個號碼獎金500元",
          "explanation": "7與31對中本期幸運號碼，共2個號碼相同，獎金500元。"
        },
        {
          "input": "1 2 3 4 5",
          "output": "猜中0個號碼獎金0元",
          "explanation": "沒有號碼相同，獎金0元。"
        }
      ],
      "testCases": [
        {
          "input": "7 18 29 31 35",
          "expectedOutput": "猜中2個號碼獎金500元",
          "output": "猜中2個號碼獎金500元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5",
          "expectedOutput": "猜中0個號碼獎金0元",
          "output": "猜中0個號碼獎金0元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 42 45",
          "expectedOutput": "猜中5個號碼獎金100000元",
          "output": "猜中5個號碼獎金100000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 42 1",
          "expectedOutput": "猜中4個號碼獎金10000元",
          "output": "猜中4個號碼獎金10000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 2 3",
          "expectedOutput": "猜中3個號碼獎金2000元",
          "output": "猜中3個號碼獎金2000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 2 3 4 5",
          "expectedOutput": "猜中1個號碼獎金200元",
          "output": "猜中1個號碼獎金200元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "56 63 78 80 99",
          "expectedOutput": "猜中5個號碼獎金100000元",
          "output": "猜中5個號碼獎金100000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "56 63 78 80 1",
          "expectedOutput": "猜中4個號碼獎金10000元",
          "output": "猜中4個號碼獎金10000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "56 63 78 2 3",
          "expectedOutput": "猜中3個號碼獎金2000元",
          "output": "猜中3個號碼獎金2000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "99 2 3 4 5",
          "expectedOutput": "猜中1個號碼獎金200元",
          "output": "猜中1個號碼獎金200元",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"n3_lucky\">lucky</variable><variable id=\"n3_pick\">pick</variable><variable id=\"n3_hits\">hits</variable><variable id=\"n3_prize\">prize</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_lucky\">lucky</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"10\"></mutation><value name=\"ADD0\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value><value name=\"ADD1\"><block type=\"math_number\"><field name=\"NUM\">24</field></block></value><value name=\"ADD2\"><block type=\"math_number\"><field name=\"NUM\">31</field></block></value><value name=\"ADD3\"><block type=\"math_number\"><field name=\"NUM\">42</field></block></value><value name=\"ADD4\"><block type=\"math_number\"><field name=\"NUM\">45</field></block></value><value name=\"ADD5\"><block type=\"math_number\"><field name=\"NUM\">56</field></block></value><value name=\"ADD6\"><block type=\"math_number\"><field name=\"NUM\">63</field></block></value><value name=\"ADD7\"><block type=\"math_number\"><field name=\"NUM\">78</field></block></value><value name=\"ADD8\"><block type=\"math_number\"><field name=\"NUM\">80</field></block></value><value name=\"ADD9\"><block type=\"math_number\"><field name=\"NUM\">99</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_hits\">hits</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><mutation elseif=\"4\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">100000</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">10000</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2000</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">500</field></block></value></block></statement><value name=\"IF4\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO4\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">200</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n3_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">猜中</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_hits\">hits</field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">個號碼獎金</field></block></value><value name=\"ADD3\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n3_prize\">prize</field></block></value><value name=\"ADD4\"><block type=\"text\"><field name=\"TEXT\">元</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定的幸運號碼清單搭配對獎規則，練習清單搜尋（indexOf）判斷是否存在。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "清單搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "清單搜尋"
        ],
        "math": [],
        "context": [
          "生活情境",
          "彩券"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "NewTaipei-4",
      "title": "小隊長的奇數號碼",
      "problemTitle": "小隊長的奇數號碼",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "老師給了小隊長兩個號碼：一個起始號碼和一個結束號碼。小隊長的任務是找出這兩個號碼之間（包含這兩個號碼）所有奇數的號碼牌，並把這些號碼加起來，算出最後的總和。",
      "inputDescription": "輸入兩行，分別為起始號碼與結束號碼。",
      "outputDescription": "輸出起始與結束號碼之間（含端點）所有奇數的總和。",
      "statement": {
        "description": "老師給了小隊長兩個號碼：一個起始號碼和一個結束號碼。小隊長的任務是找出這兩個號碼之間（包含這兩個號碼）所有奇數的號碼牌，並把這些號碼加起來，算出最後的總和。",
        "input": "輸入兩行，分別為起始號碼與結束號碼。",
        "output": "輸出起始與結束號碼之間（含端點）所有奇數的總和。"
      },
      "examples": [
        {
          "input": "10\n20",
          "output": "75",
          "explanation": "11+13+15+17+19=75。"
        },
        {
          "input": "31\n39",
          "output": "175",
          "explanation": "31+33+35+37+39=175。"
        }
      ],
      "testCases": [
        {
          "input": "10\n20",
          "expectedOutput": "75",
          "output": "75",
          "score": 10,
          "hidden": false
        },
        {
          "input": "31\n39",
          "expectedOutput": "175",
          "output": "175",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n10",
          "expectedOutput": "25",
          "output": "25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n11",
          "expectedOutput": "11",
          "output": "11",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "expectedOutput": "9",
          "output": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n8",
          "expectedOutput": "15",
          "output": "15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n200",
          "expectedOutput": "7500",
          "output": "7500",
          "score": 10,
          "hidden": false
        },
        {
          "input": "21\n25",
          "expectedOutput": "69",
          "output": "69",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n9",
          "expectedOutput": "25",
          "output": "25",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"n4_a\">A</variable><variable id=\"n4_b\">B</variable><variable id=\"n4_lo\">lo</variable><variable id=\"n4_hi\">hi</variable><variable id=\"n4_i\">i</variable><variable id=\"n4_sum\">sum</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入起始號碼</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n4_a\">A</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入結束號碼</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n4_b\">B</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n4_lo\">lo</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_a\">A</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_b\">B</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_a\">A</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_b\">B</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n4_hi\">hi</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_a\">A</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_b\">B</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_b\">B</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_a\">A</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"n4_sum\">sum</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"n4_i\">i</field><value name=\"FROM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_lo\">lo</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_hi\">hi</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_i\">i</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"n4_sum\">sum</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_i\">i</field></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"n4_sum\">sum</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "與台南「偶數和」概念相同，改為找奇數，並保守處理輸入順序（起始不一定比結束小）。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "列舉"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
          "餘數"
        ],
        "math": [
          "奇偶數"
        ],
        "context": [
          "數學情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
