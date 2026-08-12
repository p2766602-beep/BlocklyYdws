// Hand-authored by Claude from data/problem_bank_master_complete.csv (114JHsinchu-1~6)
// and cross-checked against every worked example in txtFile/114JHsinchu.txt via a JS reference
// implementation before being written here. Not produced by export_course_js.py.
//
// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness
// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）
// 對每一筆testCases實際跑過，不是憑印象手刻。
// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。
//
// Hsinchu-J-2的114JHsinchu.txt評審資料共10筆中有2筆(案例8/9)與演算法（其餘8筆吻合）有出入，判定為孤立資料錯誤，依演算法結果收錄，詳見docs/PDF題目來源勘誤紀錄.md。

export default {
  "code": "114JHsinchu",
  "title": "114-新竹市國中",
  "type": "programming",
  "mode": "learning",
  "description": "新竹市114學年度國中組資訊科技競賽練習題，涵蓋累進計費、字串驗證、排序與窮舉法，難度略高於國小組。",
  "tasks": [
    {
      "id": "Hsinchu-J-1",
      "title": "貨物重量計費",
      "problemTitle": "貨物重量計費",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "竹新貨運公司運送貨物的收費採用累進式計費方式：\n0-10 公斤：每公斤 30 元\n10-30 公斤：超過 10 公斤的部分，每公斤 25 元\n30-50 公斤：超過 30 公斤的部分，每公斤 20 元\n50 公斤以上：超過 50 公斤的部分，每公斤 15 元\n請撰寫程式，輸入貨物重量，計算寄件總費用。",
      "inputDescription": "輸入為 1 行，包含 1 個數字 W，代表貨物重量（公斤，整數）。",
      "outputDescription": "輸出一個整數，代表寄件費用（單位：元）。",
      "statement": {
        "description": "竹新貨運公司運送貨物的收費採用累進式計費方式：\n0-10 公斤：每公斤 30 元\n10-30 公斤：超過 10 公斤的部分，每公斤 25 元\n30-50 公斤：超過 30 公斤的部分，每公斤 20 元\n50 公斤以上：超過 50 公斤的部分，每公斤 15 元\n請撰寫程式，輸入貨物重量，計算寄件總費用。",
        "input": "輸入為 1 行，包含 1 個數字 W，代表貨物重量（公斤，整數）。",
        "output": "輸出一個整數，代表寄件費用（單位：元）。"
      },
      "examples": [
        {
          "input": "6",
          "output": "180",
          "explanation": "未滿 10 公斤，每公斤 30 元。 6 * 30 = 180"
        },
        {
          "input": "32",
          "output": "840",
          "explanation": "10 公斤部分每公斤 30 元，10-30 公斤部分 (共 20 公斤) 每公斤 25 元，多餘 2 公斤每公斤 20 元。 10*30 + 20*25 + 2*20 = 840"
        }
      ],
      "testCases": [
        {
          "input": "6",
          "expectedOutput": "180",
          "output": "180",
          "score": 10,
          "hidden": false
        },
        {
          "input": "32",
          "expectedOutput": "840",
          "output": "840",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10",
          "expectedOutput": "300",
          "output": "300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11",
          "expectedOutput": "325",
          "output": "325",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30",
          "expectedOutput": "800",
          "output": "800",
          "score": 10,
          "hidden": false
        },
        {
          "input": "31",
          "expectedOutput": "820",
          "output": "820",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50",
          "expectedOutput": "1200",
          "output": "1200",
          "score": 10,
          "hidden": false
        },
        {
          "input": "51",
          "expectedOutput": "1215",
          "output": "1215",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100",
          "expectedOutput": "1950",
          "output": "1950",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"h1_w\">W</variable><variable id=\"h1_t1\">t1</variable><variable id=\"h1_t2\">t2</variable><variable id=\"h1_t3\">t3</variable><variable id=\"h1_t4\">t4</variable><variable id=\"h1_fee\">fee</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入貨物重量</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h1_w\">W</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h1_t1\">t1</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h1_t2\">t2</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"THEN\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><value name=\"THEN\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">20</field></block></value></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">25</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h1_t3\">t3</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><value name=\"THEN\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></value><value name=\"THEN\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">20</field></block></value></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">20</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h1_t4\">t4</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></value><value name=\"THEN\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">50</field></block></value></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">15</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h1_fee\">fee</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_t1\">t1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_t2\">t2</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_t3\">t3</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_t4\">t4</field></block></value></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h1_fee\">fee</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "累進費率計算，與嘉義縣國小「個人綜合所得稅試算」概念相同。",
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
          "級距判斷"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "多層if"
        ],
        "math": [
          "累進費率"
        ],
        "context": [
          "生活情境",
          "物流"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-J-2",
      "title": "想去遊樂園",
      "problemTitle": "想去遊樂園",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "大人國、七福村都推出假日優惠，小名一家人有各種年齡，請計算兩間遊樂園門票總價誰比較便宜。\n大人國：\n1. 祖孫樂：一位 65 歲以上長者可免費攜帶一位 6 歲以下兒童（每位長者限帶一位兒童）。\n2. 票價：成人 (含 65 歲以上) 全票 599 元，半票 (12 歲以下) 299 元。\n七福村：\n1. 年齡為 7 的倍數者可免費入場（0 不算 7 的倍數）。\n2. 票價：全票 499 元，半票 (9 歲以下) 299 元。\n請撰寫程式，輸入所有同行者的年齡，分別計算大人國及七福村的總票價，並比較哪一間較便宜。",
      "inputDescription": "輸入為 2 行：\n第 1 行為 1 個整數 N，代表同行人數。\n第 2 行為 N 個以空白分隔的整數，代表每位同行者的年齡。",
      "outputDescription": "輸出一個字串及一個數字：\n• 字串代表較便宜的遊樂園名稱（大人國、七福村，若價格相同，請輸出任一樂園名稱或處理邏輯上的優先者即可）。\n• 數字代表需付多少元。\n（以半形空格分隔字串與數字）",
      "statement": {
        "description": "大人國、七福村都推出假日優惠，小名一家人有各種年齡，請計算兩間遊樂園門票總價誰比較便宜。\n大人國：\n1. 祖孫樂：一位 65 歲以上長者可免費攜帶一位 6 歲以下兒童（每位長者限帶一位兒童）。\n2. 票價：成人 (含 65 歲以上) 全票 599 元，半票 (12 歲以下) 299 元。\n七福村：\n1. 年齡為 7 的倍數者可免費入場（0 不算 7 的倍數）。\n2. 票價：全票 499 元，半票 (9 歲以下) 299 元。\n請撰寫程式，輸入所有同行者的年齡，分別計算大人國及七福村的總票價，並比較哪一間較便宜。",
        "input": "輸入為 2 行：\n第 1 行為 1 個整數 N，代表同行人數。\n第 2 行為 N 個以空白分隔的整數，代表每位同行者的年齡。",
        "output": "輸出一個字串及一個數字：\n• 字串代表較便宜的遊樂園名稱（大人國、七福村，若價格相同，請輸出任一樂園名稱或處理邏輯上的優先者即可）。\n• 數字代表需付多少元。\n（以半形空格分隔字串與數字）"
      },
      "examples": [
        {
          "input": "3\n70 5 10",
          "output": "七福村 798",
          "explanation": "大人國：可使用祖孫樂可帶 5 歲兒童免費，票價為 599+299 = 898 元。 七福村：70 歲為 7 的倍數在七福村免費，票價為 299+499 = 798 元。 故七福村較便宜。"
        },
        {
          "input": "4\n10 12 65 5",
          "output": "大人國 1197",
          "explanation": "大人國：可使用祖孫樂可帶 5 歲兒童免費，10、12 歲皆為半票，票價為 599+299+299 = 1197 元。 七福村：沒有 7 的倍數，5 歲半票，票價為 499+299+499+499 = 1796 元。 故大人國較便宜。"
        }
      ],
      "testCases": [
        {
          "input": "3\n70 5 10",
          "expectedOutput": "七福村 798",
          "output": "七福村 798",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n10 12 65 5",
          "expectedOutput": "大人國 1197",
          "output": "大人國 1197",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n7",
          "expectedOutput": "七福村 0",
          "output": "七福村 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n65 5",
          "expectedOutput": "大人國 599",
          "output": "大人國 599",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n20 20 20",
          "expectedOutput": "七福村 1497",
          "output": "七福村 1497",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n66 66 5 5 20",
          "expectedOutput": "大人國 1797",
          "output": "大人國 1797",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n7 14 21 28",
          "expectedOutput": "七福村 0",
          "output": "七福村 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n9 12",
          "expectedOutput": "大人國 598",
          "output": "大人國 598",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n65 6 7",
          "expectedOutput": "七福村 798",
          "output": "七福村 798",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n35",
          "expectedOutput": "七福村 0",
          "output": "七福村 0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"h2_n\">N</variable><variable id=\"h2_ages\">ages</variable><variable id=\"h2_v\">v</variable><variable id=\"h2_i\">i</variable><variable id=\"h2_seniors\">seniors</variable><variable id=\"h2_eligible\">eligible</variable><variable id=\"h2_freecount\">freecount</variable><variable id=\"h2_dbase\">dbase</variable><variable id=\"h2_dtotal\">dtotal</variable><variable id=\"h2_qtotal\">qtotal</variable><variable id=\"h2_age\">age</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入同行人數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_ages\">ages</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"h2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_ages\">ages</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_seniors\">seniors</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_eligible\">eligible</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_dbase\">dbase</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_qtotal\">qtotal</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"h2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_age\">age</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_ages\">ages</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_i\">i</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_age\">age</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">65</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_seniors\">seniors</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_seniors\">seniors</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_age\">age</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_eligible\">eligible</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_eligible\">eligible</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_dbase\">dbase</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_dbase\">dbase</field></block></value><value name=\"B\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_age\">age</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">12</field></block></value></block></value><value name=\"THEN\"><block type=\"math_number\"><field name=\"NUM\">299</field></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">599</field></block></value></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_age\">age</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_age\">age</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_qtotal\">qtotal</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_qtotal\">qtotal</field></block></value><value name=\"B\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_age\">age</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">9</field></block></value></block></value><value name=\"THEN\"><block type=\"math_number\"><field name=\"NUM\">299</field></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">499</field></block></value></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_freecount\">freecount</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_seniors\">seniors</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_eligible\">eligible</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_seniors\">seniors</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_eligible\">eligible</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h2_dtotal\">dtotal</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_dbase\">dbase</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_freecount\">freecount</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">299</field></block></value></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_dtotal\">dtotal</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_qtotal\">qtotal</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">大人國</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_dtotal\">dtotal</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">七福村</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h2_qtotal\">qtotal</field></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "雙方案比價，需同時處理長者攜童免費與整數倍數免費兩種不同的優惠規則，是本次題組中規則最複雜的一題。",
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
          "多方案比較"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "多層if"
        ],
        "math": [],
        "context": [
          "生活情境",
          "遊樂園"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-J-3",
      "title": "我是神箭手",
      "problemTitle": "我是神箭手",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "真正的神箭手必須讀懂風，才能百發百中。輸入風速與離箭靶的距離，計算弓箭手應瞄準的位置。箭靶靶心位於直角座標 (0, 0) 公分。\n箭會受到地心引力影響：\n每離箭靶 8 公尺，箭就會比原本瞄準點往下掉落 1 公分 (未滿 8 公尺不計)。\n箭會受到風力影響：\n風速以正負數表示，其中正數代表往右吹、負數代表往左吹。\n每離箭靶 10 公尺，箭會受到一次風力偏移，其偏移量即為「風速的數字」(往風吹的方向偏移，未滿 10 公尺不計)。\n例如：風速為 3 → 每 10 公尺箭向右偏 3 公分；風速為 -2 → 每 10 公尺箭向左偏 2 公分。\n請撰寫程式，根據風速與距離計算出弓箭手應瞄準的座標位置 (x, y)，以公分為單位，使箭最終能擊中靶心 (0, 0)。",
      "inputDescription": "輸入為 2 行：\n第 1 行為風速 (正代表往右吹，負代表往左吹)。\n第 2 行為距離 (單位：公尺)。",
      "outputDescription": "輸出兩個整數 x y，分別代表瞄準點的水平與垂直座標 (單位：公分)。",
      "statement": {
        "description": "真正的神箭手必須讀懂風，才能百發百中。輸入風速與離箭靶的距離，計算弓箭手應瞄準的位置。箭靶靶心位於直角座標 (0, 0) 公分。\n箭會受到地心引力影響：\n每離箭靶 8 公尺，箭就會比原本瞄準點往下掉落 1 公分 (未滿 8 公尺不計)。\n箭會受到風力影響：\n風速以正負數表示，其中正數代表往右吹、負數代表往左吹。\n每離箭靶 10 公尺，箭會受到一次風力偏移，其偏移量即為「風速的數字」(往風吹的方向偏移，未滿 10 公尺不計)。\n例如：風速為 3 → 每 10 公尺箭向右偏 3 公分；風速為 -2 → 每 10 公尺箭向左偏 2 公分。\n請撰寫程式，根據風速與距離計算出弓箭手應瞄準的座標位置 (x, y)，以公分為單位，使箭最終能擊中靶心 (0, 0)。",
        "input": "輸入為 2 行：\n第 1 行為風速 (正代表往右吹，負代表往左吹)。\n第 2 行為距離 (單位：公尺)。",
        "output": "輸出兩個整數 x y，分別代表瞄準點的水平與垂直座標 (單位：公分)。"
      },
      "examples": [
        {
          "input": "3\n24",
          "output": "-6 3",
          "explanation": "風速 3 (往右吹)，距離 24 公尺：每 10 公尺右偏 3 公分，共 2 次 → 瞄左 6；每 8 公尺掉 1 公分，共 3 次 → 瞄上 3。瞄準點 (-6, 3)。"
        },
        {
          "input": "5\n40",
          "output": "-20 5",
          "explanation": "風速 5 (往右吹)，距離 40 公尺：每 10 公尺右偏 5 公分，共 4 次 → 瞄左 20；每 8 公尺掉 1 公分，共 5 次 → 瞄上 5。瞄準點 (-20, 5)。"
        }
      ],
      "testCases": [
        {
          "input": "3\n24",
          "expectedOutput": "-6 3",
          "output": "-6 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n40",
          "expectedOutput": "-20 5",
          "output": "-20 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n7",
          "expectedOutput": "0 0",
          "output": "0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "-2\n24",
          "expectedOutput": "4 3",
          "output": "4 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n80",
          "expectedOutput": "-80 10",
          "output": "-80 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "-5\n40",
          "expectedOutput": "20 5",
          "output": "20 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n79",
          "expectedOutput": "-7 9",
          "output": "-7 9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "-10\n9",
          "expectedOutput": "0 1",
          "output": "0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n100",
          "expectedOutput": "-1000 12",
          "output": "-1000 12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "-100\n100",
          "expectedOutput": "1000 12",
          "output": "1000 12",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"h3_wind\">wind</variable><variable id=\"h3_dist\">dist</variable><variable id=\"h3_x\">x</variable><variable id=\"h3_y\">y</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入風速</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h3_wind\">wind</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入距離</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h3_dist\">dist</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h3_x\">x</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h3_dist\">dist</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h3_wind\">wind</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h3_y\">y</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h3_dist\">dist</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">8</field></block></value></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h3_x\">x</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h3_y\">y</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "依距離換算風力與重力偏移量，練習整數除法公式的實際應用。",
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
          "無條件捨去"
        ],
        "math": [
          "整數除法"
        ],
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
      "id": "Hsinchu-J-4",
      "title": "會員入場統計",
      "problemTitle": "會員入場統計",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "巨堡商場購物中心的會員卡編號格式為：1 個英文字母 + 4 個數字 + 1 個檢查碼 (共 6 碼)。為了強化防偽辨識，系統會計算卡號的「總和值」，公式為：\n(英文字母對應數字 + 4 個數字 + 檢查碼)。\n合法卡號判定：若該總和值除以 10 的餘數為 0 或 1，則視為合法卡號。若不合法，該次入場不予計入。\n請統計合法入場的會員中，哪一類別的人數最多。類別定義與對應數字如下：\n1. 普通會員：字母為 A(11), B(13), C(15)。\n2. 貴賓會員：字母為 V(17), I(19), P(21)。\n3. 學生會員：字母為 S(23), T(25), U(27)。",
      "inputDescription": "輸入為 2 行：\n• 第一行為一個整數 N，代表掃描的卡號總數。\n• 第二行為 N 個字串 (每個 6 碼)，代表會員卡號，每個卡號以空格隔開。",
      "outputDescription": "輸出人數最多的會員類別名稱。若有多個類別的人數相同且並列最多，請依照「普通會員 貴賓會員 學生會員」的順序輸出，中間以空格隔開。若無人合法入場，可不輸出或依平台規範處理 (此處預設不會發生或輸出空字串)。",
      "statement": {
        "description": "巨堡商場購物中心的會員卡編號格式為：1 個英文字母 + 4 個數字 + 1 個檢查碼 (共 6 碼)。為了強化防偽辨識，系統會計算卡號的「總和值」，公式為：\n(英文字母對應數字 + 4 個數字 + 檢查碼)。\n合法卡號判定：若該總和值除以 10 的餘數為 0 或 1，則視為合法卡號。若不合法，該次入場不予計入。\n請統計合法入場的會員中，哪一類別的人數最多。類別定義與對應數字如下：\n1. 普通會員：字母為 A(11), B(13), C(15)。\n2. 貴賓會員：字母為 V(17), I(19), P(21)。\n3. 學生會員：字母為 S(23), T(25), U(27)。",
        "input": "輸入為 2 行：\n• 第一行為一個整數 N，代表掃描的卡號總數。\n• 第二行為 N 個字串 (每個 6 碼)，代表會員卡號，每個卡號以空格隔開。",
        "output": "輸出人數最多的會員類別名稱。若有多個類別的人數相同且並列最多，請依照「普通會員 貴賓會員 學生會員」的順序輸出，中間以空格隔開。若無人合法入場，可不輸出或依平台規範處理 (此處預設不會發生或輸出空字串)。"
      },
      "examples": [
        {
          "input": "2\nS11114 T00005",
          "output": "學生會員",
          "explanation": "S11114：總和：23(S)+1+1+1+1+4 = 31。31 ÷ 10 = 3 餘 1 (學生會員) T00007：總和：25(T)+0+0+0+0+7 = 32。32 ÷ 10 = 3 餘 2 (不合法) (註：範例輸入為 T00005，總和 30 餘 0，皆為學生會員)"
        },
        {
          "input": "3\nA12347 V00003 S11113",
          "output": "貴賓會員 學生會員",
          "explanation": "1. A12347：總和：11(A)+1+2+3+4+7 = 28。28 ÷ 10 = 2 餘 8 (不合法) 2. V00003：總和：17(V)+0+0+0+0+3 = 20。20 ÷ 10 = 2 餘 0 (貴賓會員) 3. S11113：總和：23(S)+1+1+1+1+3 = 30。30 ÷ 10 = 3 餘 0 (學生會員) 貴賓與學生會員人數相同。"
        }
      ],
      "testCases": [
        {
          "input": "2\nS11114 T00005",
          "expectedOutput": "學生會員",
          "output": "學生會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nA12347 V00003 S11113",
          "expectedOutput": "貴賓會員 學生會員",
          "output": "貴賓會員 學生會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nA00000",
          "expectedOutput": "普通會員",
          "output": "普通會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nA00000 B00008 C00006",
          "expectedOutput": "普通會員",
          "output": "普通會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nV00004 I00002 P00000",
          "expectedOutput": "貴賓會員",
          "output": "貴賓會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\nA00000 V00004 S00008 B00008 I00002 T00006",
          "expectedOutput": "普通會員 貴賓會員 學生會員",
          "output": "普通會員 貴賓會員 學生會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nA11114 V11111 S11112 A00000",
          "expectedOutput": "普通會員",
          "output": "普通會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nA12345 B12345 C12345",
          "expectedOutput": "普通會員",
          "output": "普通會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nV00004 S00008",
          "expectedOutput": "貴賓會員 學生會員",
          "output": "貴賓會員 學生會員",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nP00000 P00000 P00000",
          "expectedOutput": "貴賓會員",
          "output": "貴賓會員",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"h4_n\">N</variable><variable id=\"h4_card\">card</variable><variable id=\"h4_i\">i</variable><variable id=\"h4_j\">j</variable><variable id=\"h4_letter\">letter</variable><variable id=\"h4_letterval\">letterval</variable><variable id=\"h4_cat\">cat</variable><variable id=\"h4_digitsum\">digitsum</variable><variable id=\"h4_dch\">dch</variable><variable id=\"h4_checkval\">checkval</variable><variable id=\"h4_sumval\">sumval</variable><variable id=\"h4_cnt1\">cnt1</variable><variable id=\"h4_cnt2\">cnt2</variable><variable id=\"h4_cnt3\">cnt3</variable><variable id=\"h4_out\">out</variable><variable id=\"h4_dch_raw\">h4_dch_raw</variable><variable id=\"h4_dch_num\">h4_dch_num</variable><variable id=\"h4_checkval_raw\">h4_checkval_raw</variable><variable id=\"h4_checkval_num\">h4_checkval_num</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入卡號總數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"h4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_card\">card</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letter\">letter</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_card\">card</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"7\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">11</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">13</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">15</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">V</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">17</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></next></block></statement><value name=\"IF4\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">I</field></block></value></block></value><statement name=\"DO4\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">19</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></next></block></statement><value name=\"IF5\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">P</field></block></value></block></value><statement name=\"DO5\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">21</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></next></block></statement><value name=\"IF6\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">S</field></block></value></block></value><statement name=\"DO6\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">23</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></next></block></statement><value name=\"IF7\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letter\">letter</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">T</field></block></value></block></value><statement name=\"DO7\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">25</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">27</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cat\">cat</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_digitsum\">digitsum</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"h4_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_dch_raw\">h4_dch_raw</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_card\">card</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_j\">j</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_dch_num\">h4_dch_num</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_dch_raw\">h4_dch_raw</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_digitsum\">digitsum</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_digitsum\">digitsum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_dch_num\">h4_dch_num</field></block></value></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_checkval_raw\">h4_checkval_raw</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_card\">card</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_checkval_num\">h4_checkval_num</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_checkval_raw\">h4_checkval_raw</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_checkval\">checkval</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_checkval_num\">h4_checkval_num</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_sumval\">sumval</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_digitsum\">digitsum</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_checkval\">checkval</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_sumval\">sumval</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_sumval\">sumval</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cat\">cat</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cat\">cat</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field></block></value></block></value><value name=\"THEN\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field></block></value><value name=\"ELSE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt1\">cnt1</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">普通會員</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">普通會員</field></block></value></block></value></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt2\">cnt2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">貴賓會員</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">貴賓會員</field></block></value></block></value></block></statement></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_cnt3\">cnt3</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_letterval\">letterval</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">學生會員</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h4_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">學生會員</field></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h4_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "卡號合法性驗證(檢查碼)加上分類計數找最大值(可能多類別並列)，綜合字串解析與統計。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "檢查碼驗證"
        ],
        "algorithm": [
          "驗證+統計"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出"
        ],
        "math": [
          "餘數"
        ],
        "context": [
          "生活情境",
          "會員系統"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-J-5",
      "title": "買五送一",
      "problemTitle": "買五送一",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "60 虹飲料店推出優惠活動：買五送一。\n每購買 5 杯飲料，第 6 杯免費。\n但免費的飲料並非固定，而是依照以下規則決定：\n將所有飲料依價格由高排到低。\n每滿 6 杯 (第 6、12、18...杯)，該杯為「免費」。\n請撰寫程式，輸入所有飲料的價格 (依購買順序)，計算顧客應付的總金額。",
      "inputDescription": "輸入為 2 行：\n• 第 1 行為 1 個整數 N，代表購買飲料杯數。\n• 第 2 行為 N 個以空白分隔的整數，代表每一杯飲料的價錢。",
      "outputDescription": "輸出一個整數，代表飲料總價 (單位：元)。",
      "statement": {
        "description": "60 虹飲料店推出優惠活動：買五送一。\n每購買 5 杯飲料，第 6 杯免費。\n但免費的飲料並非固定，而是依照以下規則決定：\n將所有飲料依價格由高排到低。\n每滿 6 杯 (第 6、12、18...杯)，該杯為「免費」。\n請撰寫程式，輸入所有飲料的價格 (依購買順序)，計算顧客應付的總金額。",
        "input": "輸入為 2 行：\n• 第 1 行為 1 個整數 N，代表購買飲料杯數。\n• 第 2 行為 N 個以空白分隔的整數，代表每一杯飲料的價錢。",
        "output": "輸出一個整數，代表飲料總價 (單位：元)。"
      },
      "examples": [
        {
          "input": "6\n80 70 60 50 40 30",
          "output": "300",
          "explanation": "剛好 6 杯，30 元那杯是贈送的。 總價 300 元。"
        },
        {
          "input": "9\n30 30 30 30 30 40 40 40 40",
          "output": "280",
          "explanation": "依價格排序，第 6 杯是 30 元，免費。 總價 280 元。"
        }
      ],
      "testCases": [
        {
          "input": "6\n80 70 60 50 40 30",
          "expectedOutput": "300",
          "output": "300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n30 30 30 30 30 40 40 40 40",
          "expectedOutput": "280",
          "output": "280",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50",
          "expectedOutput": "150",
          "output": "150",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12\n10 10 10 10 10 10 10 10 10 10 10 10",
          "expectedOutput": "100",
          "output": "100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n100 100 100 100 100 100 10",
          "expectedOutput": "510",
          "output": "510",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n55",
          "expectedOutput": "55",
          "output": "55",
          "score": 10,
          "hidden": false
        },
        {
          "input": "13\n100 90 80 70 60 50 40 30 20 10 5 5 5",
          "expectedOutput": "510",
          "output": "510",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n100 100 100 100 100 100",
          "expectedOutput": "500",
          "output": "500",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n5 5 5 5 5 5 5 5 5 5 5",
          "expectedOutput": "50",
          "output": "50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "18\n1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18",
          "expectedOutput": "150",
          "output": "150",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"h5_n\">N</variable><variable id=\"h5_prices\">prices</variable><variable id=\"h5_v\">v</variable><variable id=\"h5_i\">i</variable><variable id=\"h5_j\">j</variable><variable id=\"h5_tmp\">tmp</variable><variable id=\"h5_total\">total</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入購買杯數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h5_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h5_prices\">prices</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"h5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h5_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"h5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"h5_j\">j</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_j\">j</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h5_tmp\">tmp</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_tmp\">tmp</field></block></value></block></next></block></next></block></statement></block></statement></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h5_total\">total</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"h5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">6</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h5_total\">total</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_total\">total</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_prices\">prices</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_i\">i</field></block></value></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h5_total\">total</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "排序後每6個位置免費一次，練習排序演算法與位置規則的結合。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "排序"
        ],
        "subConcepts": [
          "清單"
        ],
        "algorithm": [
          "泡泡排序"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "清單交換"
        ],
        "math": [],
        "context": [
          "生活情境",
          "促銷"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Hsinchu-J-6",
      "title": "歡樂抽獎",
      "problemTitle": "歡樂抽獎",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "期末段考結束後，小朋老師舉辦了一場同樂會。\n每位同學會先抽出 1 顆紅球，紅球上寫有一個整數數字 (0~9)。\n接著，同學可以從抽獎箱中抽出 3 顆白球，每顆白球上也各有一個整數數字 (0~9)。\n同學必須「一定」要使用紅球，並可選擇使用 0~3 顆白球，將所選球上的數字相加，只要總和為 7 的倍數即可中獎 (0 也算 7 的倍數)。\n中獎等級依照使用的白球數量判定：\n• 不使用白球且紅球本身即為 7 的倍數：特獎\n• 使用 1 顆白球：頭獎\n• 使用 2 顆白球：二獎\n• 使用 3 顆白球：三獎\n• 若無法組成 7 的倍數：未中獎\n請撰寫程式，判斷同學最終可獲得的獎項等級 (以使用白球數量最少為優先)。",
      "inputDescription": "輸入為 2 行：\n• 第 1 行為 1 個整數 R，代表紅球上的數字。\n• 第 2 行為 3 個以空白分隔的整數，代表三顆白球上的數字。",
      "outputDescription": "輸出一行文字，表示中獎結果，可能的輸出為：特獎、頭獎、二獎、三獎、未中獎。",
      "statement": {
        "description": "期末段考結束後，小朋老師舉辦了一場同樂會。\n每位同學會先抽出 1 顆紅球，紅球上寫有一個整數數字 (0~9)。\n接著，同學可以從抽獎箱中抽出 3 顆白球，每顆白球上也各有一個整數數字 (0~9)。\n同學必須「一定」要使用紅球，並可選擇使用 0~3 顆白球，將所選球上的數字相加，只要總和為 7 的倍數即可中獎 (0 也算 7 的倍數)。\n中獎等級依照使用的白球數量判定：\n• 不使用白球且紅球本身即為 7 的倍數：特獎\n• 使用 1 顆白球：頭獎\n• 使用 2 顆白球：二獎\n• 使用 3 顆白球：三獎\n• 若無法組成 7 的倍數：未中獎\n請撰寫程式，判斷同學最終可獲得的獎項等級 (以使用白球數量最少為優先)。",
        "input": "輸入為 2 行：\n• 第 1 行為 1 個整數 R，代表紅球上的數字。\n• 第 2 行為 3 個以空白分隔的整數，代表三顆白球上的數字。",
        "output": "輸出一行文字，表示中獎結果，可能的輸出為：特獎、頭獎、二獎、三獎、未中獎。"
      },
      "examples": [
        {
          "input": "2\n6 4 2",
          "output": "三獎",
          "explanation": "三顆球都使用 2+6+4+2=14 是 7 的倍數。"
        },
        {
          "input": "8\n3 2 5",
          "output": "未中獎",
          "explanation": "無論怎麼組合都無法湊成 7 的倍數。"
        }
      ],
      "testCases": [
        {
          "input": "2\n6 4 2",
          "expectedOutput": "三獎",
          "output": "三獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n3 2 5",
          "expectedOutput": "未中獎",
          "output": "未中獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 2 3",
          "expectedOutput": "特獎",
          "output": "特獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n1 2 3",
          "expectedOutput": "特獎",
          "output": "特獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n3 1 1",
          "expectedOutput": "頭獎",
          "output": "頭獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n4 1 8",
          "expectedOutput": "二獎",
          "output": "二獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5 9 1",
          "expectedOutput": "二獎",
          "output": "二獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n9 9 9",
          "expectedOutput": "未中獎",
          "output": "未中獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n1 1 4",
          "expectedOutput": "三獎",
          "output": "三獎",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 2",
          "expectedOutput": "頭獎",
          "output": "頭獎",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"h6_r\">R</variable><variable id=\"h6_w1\">w1</variable><variable id=\"h6_w2\">w2</variable><variable id=\"h6_w3\">w3</variable><variable id=\"h6_result\">result</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入紅球數字</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_r\">R</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入三顆白球數字</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_w1\">w1</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_w2\">w2</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_w3\">w3</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"3\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">特獎</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w1\">w1</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w2\">w2</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w3\">w3</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">頭獎</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w1\">w1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w2\">w2</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w1\">w1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w3\">w3</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w2\">w2</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w3\">w3</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><statement name=\"DO2\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">二獎</field></block></value></block></statement><value name=\"IF3\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_r\">R</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w1\">w1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w2\">w2</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_w3\">w3</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">7</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO3\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">三獎</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"h6_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\">未中獎</field></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"h6_result\">result</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需依序嘗試0~3顆白球的所有組合找最少使用數量，窮舉法的分層檢查應用。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "窮舉"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "窮舉法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "多層if"
        ],
        "math": [
          "餘數"
        ],
        "context": [
          "遊戲情境",
          "抽獎"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
