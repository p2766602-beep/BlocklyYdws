// Hand-authored by Claude from data/problem_bank_master_complete.csv (114JTaitung-1~4)
// and cross-checked against every worked example in txtFile/114JTaitung.txt via a JS reference
// implementation before being written here. Not produced by export_course_js.py.
//
// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness
// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）
// 對每一筆testCases實際跑過，不是憑印象手刻。
// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。

export default {
  "code": "114JTaitung",
  "title": "114-臺東縣國中",
  "type": "programming",
  "mode": "learning",
  "description": "臺東縣114學年度國中組資訊科技競賽練習題，涵蓋分段計費、清單搜尋、公式計算與不定長度輸入處理。",
  "tasks": [
    {
      "id": "Taitung-J-1",
      "title": "魔法公車車票計算",
      "problemTitle": "魔法公車車票計算",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "歡迎來到「777魔法公車」！這條公車線路共有1號到15號共15個站點。\n在所有站點中，10號站是一個非常特別的站，我們叫它「魔法分隔站」。\n【票價規則】\n公車票價的計算分兩大步驟：先決定票種，再決定折扣。\n第一步：決定票種(一段票 vs. 兩段票)\n1. 一段票(單程票)：基本票價是10元。\n• 適用情況：你的旅程沒有跨越「魔法分隔站(10號站)」。(起訖站皆在10號站(含)之前，或皆在10號站(含)之後)。\n• 例如：從3號站到8號站。\n2. 兩段票(跨區票)：票價變成基本票價的兩倍，是20元。\n• 適用情況：你的旅程跨越了「魔法分隔站(10號站)」。\n• 例如：從7號站到12號站，或從14號站到5號站。\n第二步：幸運折扣(半票優惠)\n如果你的年齡是12歲以下(例如11歲、10歲...)，那麼恭喜你！你可以享有「幸運半票」優惠！\n• 幸運半票優惠：你計算出來的票價(無論是10元還是20元)，都只需要支付一半。",
      "inputDescription": "請讀入乘客的上車站號、下車站號、以及年齡。(每行一個數字，或以空白分隔)",
      "outputDescription": "計算出應該付多少錢買車票並輸出。",
      "statement": {
        "description": "歡迎來到「777魔法公車」！這條公車線路共有1號到15號共15個站點。\n在所有站點中，10號站是一個非常特別的站，我們叫它「魔法分隔站」。\n【票價規則】\n公車票價的計算分兩大步驟：先決定票種，再決定折扣。\n第一步：決定票種(一段票 vs. 兩段票)\n1. 一段票(單程票)：基本票價是10元。\n• 適用情況：你的旅程沒有跨越「魔法分隔站(10號站)」。(起訖站皆在10號站(含)之前，或皆在10號站(含)之後)。\n• 例如：從3號站到8號站。\n2. 兩段票(跨區票)：票價變成基本票價的兩倍，是20元。\n• 適用情況：你的旅程跨越了「魔法分隔站(10號站)」。\n• 例如：從7號站到12號站，或從14號站到5號站。\n第二步：幸運折扣(半票優惠)\n如果你的年齡是12歲以下(例如11歲、10歲...)，那麼恭喜你！你可以享有「幸運半票」優惠！\n• 幸運半票優惠：你計算出來的票價(無論是10元還是20元)，都只需要支付一半。",
        "input": "請讀入乘客的上車站號、下車站號、以及年齡。(每行一個數字，或以空白分隔)",
        "output": "計算出應該付多少錢買車票並輸出。"
      },
      "examples": [
        {
          "input": "5\n8\n18",
          "output": "10",
          "explanation": "第5站搭到第8站，1段全票10元"
        },
        {
          "input": "7\n12\n20",
          "output": "20",
          "explanation": "第7站搭到第12站，2段全票20元"
        },
        {
          "input": "13\n10\n8",
          "output": "5",
          "explanation": "第13站搭到第10站，1段半票5元"
        }
      ],
      "testCases": [
        {
          "input": "1\n9\n30",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n11\n15",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n15\n40",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n1\n7",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n10\n5",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n15\n10",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n10\n20",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1\n12",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n15\n11",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12\n8\n35",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t1_start\">start</variable><variable id=\"t1_end\">end</variable><variable id=\"t1_age\">age</variable><variable id=\"t1_mn\">mn</variable><variable id=\"t1_mx\">mx</variable><variable id=\"t1_fare\">fare</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入上車站號</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_start\">start</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入下車站號</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_end\">end</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入年齡</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_age\">age</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_mn\">mn</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_start\">start</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_end\">end</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_start\">start</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_end\">end</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_mx\">mx</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_start\">start</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_end\">end</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_end\">end</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_start\">start</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_mn\">mn</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_mx\">mx</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_fare\">fare</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_fare\">fare</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">20</field></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_age\">age</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">12</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_fare\">fare</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_fare\">fare</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_fare\">fare</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "跨界判斷(是否跨越分隔站)加上年齡折扣，與新北市國中「兩段票計算」同款規則。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "條件判斷"
        ],
        "subConcepts": [
          "公式計算"
        ],
        "algorithm": [
          "分段計費"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "多層if"
        ],
        "math": [],
        "context": [
          "生活情境",
          "交通"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Taitung-J-2",
      "title": "幸運數字彩虹樂透",
      "problemTitle": "幸運數字彩虹樂透",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "為了舉辦校園慈善抽獎活動，我們設計了一個簡單的「幸運數字彩虹樂透」。\n每張樂透彩券必須選出6個數字(範圍從1到49)。\n現在，我們需要設計一個抽獎系統來計算彩券是否中獎，以及獎金是多少。\n【開獎號碼】\n• 本次固定開獎號碼為：10, 18, 29, 31, 35, 36\n【中獎規則與獎金】\n• 6個：頭獎，100,000元\n• 5個：貳獎，10,000元\n• 4個：參獎，1,000元\n• 3個：肆獎，100元\n• 2個或更少：銘謝惠顧，0元",
      "inputDescription": "讀入一張彩券上的6個選號(假設號碼已由小到大排列且不重複)。(每行一個，或以空白分隔)",
      "outputDescription": "輸出猜中的號碼個數以及對應的獎金金額，格式如「猜中X個號碼,獎金Y元」。",
      "statement": {
        "description": "為了舉辦校園慈善抽獎活動，我們設計了一個簡單的「幸運數字彩虹樂透」。\n每張樂透彩券必須選出6個數字(範圍從1到49)。\n現在，我們需要設計一個抽獎系統來計算彩券是否中獎，以及獎金是多少。\n【開獎號碼】\n• 本次固定開獎號碼為：10, 18, 29, 31, 35, 36\n【中獎規則與獎金】\n• 6個：頭獎，100,000元\n• 5個：貳獎，10,000元\n• 4個：參獎，1,000元\n• 3個：肆獎，100元\n• 2個或更少：銘謝惠顧，0元",
        "input": "讀入一張彩券上的6個選號(假設號碼已由小到大排列且不重複)。(每行一個，或以空白分隔)",
        "output": "輸出猜中的號碼個數以及對應的獎金金額，格式如「猜中X個號碼,獎金Y元」。"
      },
      "examples": [
        {
          "input": "10\n18\n29\n31\n35\n36",
          "output": "猜中6個號碼,獎金100000元",
          "explanation": "6個號碼完全相同，獎金100000元。"
        },
        {
          "input": "1\n2\n3\n4\n5\n6",
          "output": "猜中0個號碼,獎金0元",
          "explanation": "0個號碼相同，獎金0元。"
        }
      ],
      "testCases": [
        {
          "input": "10 18 29 31 35 36",
          "expectedOutput": "猜中6個號碼,獎金100000元",
          "output": "猜中6個號碼,獎金100000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5 6",
          "expectedOutput": "猜中0個號碼,獎金0元",
          "output": "猜中0個號碼,獎金0元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 18 29 31 35 45",
          "expectedOutput": "猜中5個號碼,獎金10000元",
          "output": "猜中5個號碼,獎金10000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 18 29 40 41 42",
          "expectedOutput": "猜中3個號碼,獎金100元",
          "output": "猜中3個號碼,獎金100元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 18 29 31 38 49",
          "expectedOutput": "猜中4個號碼,獎金1000元",
          "output": "猜中4個號碼,獎金1000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 18 40 41 42 43",
          "expectedOutput": "猜中2個號碼,獎金0元",
          "output": "猜中2個號碼,獎金0元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 40 41 42 43 44",
          "expectedOutput": "猜中1個號碼,獎金0元",
          "output": "猜中1個號碼,獎金0元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "18 29 31 35 36 40",
          "expectedOutput": "猜中5個號碼,獎金10000元",
          "output": "猜中5個號碼,獎金10000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "29 31 35 36 40 41",
          "expectedOutput": "猜中4個號碼,獎金1000元",
          "output": "猜中4個號碼,獎金1000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "31 35 36 40 41 42",
          "expectedOutput": "猜中3個號碼,獎金100元",
          "output": "猜中3個號碼,獎金100元",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t2_lucky\">lucky</variable><variable id=\"t2_pick\">pick</variable><variable id=\"t2_hits\">hits</variable><variable id=\"t2_prize\">prize</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"6\"></mutation><value name=\"ADD0\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value><value name=\"ADD1\"><block type=\"math_number\"><field name=\"NUM\">18</field></block></value><value name=\"ADD2\"><block type=\"math_number\"><field name=\"NUM\">29</field></block></value><value name=\"ADD3\"><block type=\"math_number\"><field name=\"NUM\">31</field></block></value><value name=\"ADD4\"><block type=\"math_number\"><field name=\"NUM\">35</field></block></value><value name=\"ADD5\"><block type=\"math_number\"><field name=\"NUM\">36</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_pick\">pick</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_lucky\">lucky</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_pick\">pick</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_hits\">hits</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><mutation elseif=\"3\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">100000</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">10000</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1000</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_prize\">prize</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">猜中</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_hits\">hits</field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">個號碼,獎金</field></block></value><value name=\"ADD3\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_prize\">prize</field></block></value><value name=\"ADD4\"><block type=\"text\"><field name=\"TEXT\">元</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "6/49對獎，與新北市/臺東縣國小的樂透題同概念，此處輸出格式多一個逗號。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
      "id": "Taitung-J-3",
      "title": "我的健康小管家",
      "problemTitle": "我的健康小管家",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "基礎代謝率(BMR)是指您的身體在完全休息狀態下，為了維持基本生命功能所需，它是您每日總能量消耗中最大的一個組成部分，通常佔您每天燃燒總卡路里的60%至70%，例如：呼吸、器官運作、體溫維持等，即使整天躺著不動也會消耗的最低熱量。BMR會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。BMR就像是我們身體的「待機電力」。\n【BMR 簡易計算】\n為了簡化，我們使用一個簡化的BMR公式(參考女性BMR公式)，並將年齡固定為一個數字，只讓程式根據體重和身高來計算。我們固定年齡為14歲，簡化後BMR估算公式如下：\nBMR = 655 + (9.6*體重(kg)) + (1.8*身高(cm)) - (4.7 *14)\n程式計算出 BMR數值(取整數)後，會用這個標準來分類：\n• 小於1200：極低能量\n• 1200到1499：較低能量\n• 1500到1799：標準能量\n• 1800到2099：較高能量\n• 2100以上：極高能量",
      "inputDescription": "第一行輸入身高(cm)\n第二行輸入體重(kg)",
      "outputDescription": "輸出 BMR 值及 基礎能量等級，中間以半形空白隔開。",
      "statement": {
        "description": "基礎代謝率(BMR)是指您的身體在完全休息狀態下，為了維持基本生命功能所需，它是您每日總能量消耗中最大的一個組成部分，通常佔您每天燃燒總卡路里的60%至70%，例如：呼吸、器官運作、體溫維持等，即使整天躺著不動也會消耗的最低熱量。BMR會隨著年紀增加或體重減輕而降低，會隨著肌肉量增加而上升。BMR就像是我們身體的「待機電力」。\n【BMR 簡易計算】\n為了簡化，我們使用一個簡化的BMR公式(參考女性BMR公式)，並將年齡固定為一個數字，只讓程式根據體重和身高來計算。我們固定年齡為14歲，簡化後BMR估算公式如下：\nBMR = 655 + (9.6*體重(kg)) + (1.8*身高(cm)) - (4.7 *14)\n程式計算出 BMR數值(取整數)後，會用這個標準來分類：\n• 小於1200：極低能量\n• 1200到1499：較低能量\n• 1500到1799：標準能量\n• 1800到2099：較高能量\n• 2100以上：極高能量",
        "input": "第一行輸入身高(cm)\n第二行輸入體重(kg)",
        "output": "輸出 BMR 值及 基礎能量等級，中間以半形空白隔開。"
      },
      "examples": [
        {
          "input": "170\n55",
          "output": "1423 較低能量",
          "explanation": "655 + (9.6 * 55) + (1.8 * 170) - (4.7 * 14) = 1423.2 取整數 1423 1423介於1200到1499 輸出較低能量"
        },
        {
          "input": "175\n70",
          "output": "1576 標準能量",
          "explanation": "655 + (9.6 * 70) + (1.8 * 175) - (4.7 * 14) = 1576.2 取整數 1576 1576介於1500到1799 輸出標準能量"
        }
      ],
      "testCases": [
        {
          "input": "150\n35",
          "expectedOutput": "1195 極低能量",
          "output": "1195 極低能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "160\n45",
          "expectedOutput": "1309 較低能量",
          "output": "1309 較低能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "165\n50",
          "expectedOutput": "1366 較低能量",
          "output": "1366 較低能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n55",
          "expectedOutput": "1423 較低能量",
          "output": "1423 較低能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "168\n68",
          "expectedOutput": "1544 標準能量",
          "output": "1544 標準能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n85",
          "expectedOutput": "1729 標準能量",
          "output": "1729 標準能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n95",
          "expectedOutput": "1825 較高能量",
          "output": "1825 較高能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "190\n100",
          "expectedOutput": "1891 較高能量",
          "output": "1891 較高能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "200\n120",
          "expectedOutput": "2101 極高能量",
          "output": "2101 極高能量",
          "score": 10,
          "hidden": false
        },
        {
          "input": "175\n70",
          "expectedOutput": "1576 標準能量",
          "output": "1576 標準能量",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t3_h\">H</variable><variable id=\"t3_w\">W</variable><variable id=\"t3_bmr\">bmr</variable><variable id=\"t3_cat\">cat</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入身高(cm)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_h\">H</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入體重(kg)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_w\">W</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_bmr\">bmr</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">655</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">9.6</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_w\">W</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">1.8</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_h\">H</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">65.8</field></block></value></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"3\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmr\">bmr</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1200</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">極低能量</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmr\">bmr</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1499</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">較低能量</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmr\">bmr</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1799</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">標準能量</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmr\">bmr</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2099</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">較高能量</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cat\">cat</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">極高能量</field></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmr\">bmr</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_cat\">cat</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "與新北市國中同款BMR公式，此處固定取整數(不留小數)。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
          "BMR公式"
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
      "id": "Taitung-J-4",
      "title": "東台線上3C購物平台",
      "problemTitle": "東台線上3C購物平台",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "東台3C賣場推出線上購物大拍賣平台，大東支付電子錢包結帳。不同商品的編號與金額如表所示。結帳系統會先讀取電子錢包餘額，再依購買商品編號結帳後(輸入-1表示結帳)，顯示結帳結果。\n• 若電子錢包餘額足夠，請輸出：「結帳成功,餘額剩x元」\n• 若餘額不足，請輸出：「餘額不足,請另外加值y元」\n【商品清單】\n1. 電競滑鼠：3490\n2. 電競鍵盤：7990\n3. 電腦椅：3990\n4. 電腦機殼：2590\n5. 電腦桌：6890\n6. 記憶體 16GB一條：3490\n7. SSD256GB一條：1490",
      "inputDescription": "第一行輸入電子錢包餘額。\n接下來每行輸入欲購買的商品編號，直到輸入 -1 結束。(或以空白間隔)",
      "outputDescription": "依餘額狀況輸出結帳結果。",
      "statement": {
        "description": "東台3C賣場推出線上購物大拍賣平台，大東支付電子錢包結帳。不同商品的編號與金額如表所示。結帳系統會先讀取電子錢包餘額，再依購買商品編號結帳後(輸入-1表示結帳)，顯示結帳結果。\n• 若電子錢包餘額足夠，請輸出：「結帳成功,餘額剩x元」\n• 若餘額不足，請輸出：「餘額不足,請另外加值y元」\n【商品清單】\n1. 電競滑鼠：3490\n2. 電競鍵盤：7990\n3. 電腦椅：3990\n4. 電腦機殼：2590\n5. 電腦桌：6890\n6. 記憶體 16GB一條：3490\n7. SSD256GB一條：1490",
        "input": "第一行輸入電子錢包餘額。\n接下來每行輸入欲購買的商品編號，直到輸入 -1 結束。(或以空白間隔)",
        "output": "依餘額狀況輸出結帳結果。"
      },
      "examples": [
        {
          "input": "10000\n1\n4\n-1",
          "output": "結帳成功,餘額剩3920元",
          "explanation": "電子錢包帳戶中原有10000元，消費3490+2590=6080 結帳成功,餘額剩3920元"
        },
        {
          "input": "5000\n3\n5\n-1",
          "output": "餘額不足,請另外加值5880元",
          "explanation": "電子錢包帳戶中原有5000元，消費3990+6890=10880 餘額不足,請另外加值5880元"
        }
      ],
      "testCases": [
        {
          "input": "5000 3 5 -1",
          "expectedOutput": "餘額不足,請另外加值5880元",
          "output": "餘額不足,請另外加值5880元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10000 1 4 -1",
          "expectedOutput": "結帳成功,餘額剩3920元",
          "output": "結帳成功,餘額剩3920元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8000 6 7 3 -1",
          "expectedOutput": "餘額不足,請另外加值970元",
          "output": "餘額不足,請另外加值970元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20000 5 1 6 -1",
          "expectedOutput": "結帳成功,餘額剩6130元",
          "output": "結帳成功,餘額剩6130元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10000 1 4 -1",
          "expectedOutput": "結帳成功,餘額剩3920元",
          "output": "結帳成功,餘額剩3920元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5000 -1",
          "expectedOutput": "結帳成功,餘額剩5000元",
          "output": "結帳成功,餘額剩5000元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10000 2 -1",
          "expectedOutput": "結帳成功,餘額剩2010元",
          "output": "結帳成功,餘額剩2010元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1000 7 -1",
          "expectedOutput": "餘額不足,請另外加值490元",
          "output": "餘額不足,請另外加值490元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30000 2 2 2 -1",
          "expectedOutput": "結帳成功,餘額剩6030元",
          "output": "結帳成功,餘額剩6030元",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 4 -1",
          "expectedOutput": "餘額不足,請另外加值2590元",
          "output": "餘額不足,請另外加值2590元",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t4_balance\">balance</variable><variable id=\"t4_id\">id</variable><variable id=\"t4_total\">total</variable><variable id=\"t4_done\">done</variable><variable id=\"t4_price\">price</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入電子錢包餘額</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_balance\">balance</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_total\">total</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_done\">done</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">UNTIL</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_done\">done</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_id\">id</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_done\">done</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"controls_if\"><mutation elseif=\"5\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3490</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">7990</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3990</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2590</field></block></value></block></statement><value name=\"IF4\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><statement name=\"DO4\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">6890</field></block></value></block></statement><value name=\"IF5\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_id\">id</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><statement name=\"DO5\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3490</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_price\">price</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1490</field></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_total\">total</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_total\">total</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_price\">price</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_balance\">balance</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_total\">total</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">結帳成功,餘額剩</field></block></value><value name=\"ADD1\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_balance\">balance</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_total\">total</field></block></value></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">元</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">餘額不足,請另外加值</field></block></value><value name=\"ADD1\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_total\">total</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_balance\">balance</field></block></value></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">元</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定7項商品價目表，讀取購買清單直到-1結束並判斷結帳結果，練習不定長度輸入與查表加總。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "累加"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "while迴圈",
          "多層if"
        ],
        "math": [],
        "context": [
          "生活情境",
          "購物"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
