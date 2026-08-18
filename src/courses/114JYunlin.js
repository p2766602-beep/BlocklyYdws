// Hand-authored by Claude from YDWS-CodingBank/txtFile/114JYunlin.txt，每題starterXml皆用
// headless Blockly harness（verify.mjs）驗證過100%通過，學習模式（含範例答案）。
// 2026-08修正版：取代原本誤植為嘉義縣（114JChaiyiC）重複內容的舊版9題，改為使用者提供的
// 正確雲林縣5題內容。

const course = {
  "code": "114JYunlin",
  "title": "114-雲林縣國中",
  "type": "programming",
  "mode": "learning",
  "description": "114-雲林縣國中114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-18T10:12:38.973Z",
    "sourceTxt": "txtFile/114JYunlin.txt",
    "version": "manual-blockly-build-verified",
    "note": "2026-08批次修正：原5題被誤植為與114JChaiyiC（嘉義縣）幾乎完全重複的內容（txtFile源頭複製錯，非本平台轉換流程造成），經使用者提供正確txtFile重新製作，starterXml皆用headless Blockly harness（verify.mjs）驗證100%通過。"
  },
  "tasks": [
    {
      "id": "114JYunlin-1",
      "title": "1-秒數轉換",
      "problemTitle": "1-秒數轉換",
      "courseCode": "114JYunlin",
      "courseName": "114-雲林縣國中",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "description": "體育課跑步計時器會記錄「總秒數」，但老師希望顯示成「幾分幾秒」的格式。\n請輸入一個整數，代表「總秒數」。\n再將其轉換為：\n• X 分鐘數（整數）\n• Y 剩餘秒數\n【輸入格式】\n一個整數代表總秒數。\n【輸出格式】\n輸出格式：X 分 Y 秒。(請注意格式中含空格，例如「2 分 5 秒」)",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "體育課跑步計時器會記錄「總秒數」，但老師希望顯示成「幾分幾秒」的格式。\n請輸入一個整數，代表「總秒數」。\n再將其轉換為：\n• X 分鐘數（整數）\n• Y 剩餘秒數\n【輸入格式】\n一個整數代表總秒數。\n【輸出格式】\n輸出格式：X 分 Y 秒。(請注意格式中含空格，例如「2 分 5 秒」)",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "125",
          "output": "2 分 5 秒",
          "explanation": "125 秒 = 2 分 5 秒。所以輸出 2 分 5 秒。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t1_n\">N</variable><variable id=\"t1_mins\">mins</variable><variable id=\"t1_secs\">secs</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入總秒數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_mins\">mins</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_secs\">secs</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_n\">N</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"4\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_mins\">mins</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> 分 </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_secs\">secs</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> 秒</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "125",
          "expectedOutput": "2 分 5 秒",
          "score": 10
        },
        {
          "input": "360",
          "expectedOutput": "6 分 0 秒",
          "score": 10
        },
        {
          "input": "59",
          "expectedOutput": "0 分 59 秒",
          "score": 10
        },
        {
          "input": "60",
          "expectedOutput": "1 分 0 秒",
          "score": 10
        },
        {
          "input": "0",
          "expectedOutput": "0 分 0 秒",
          "score": 10
        },
        {
          "input": "3599",
          "expectedOutput": "59 分 59 秒",
          "score": 10
        },
        {
          "input": "3600",
          "expectedOutput": "60 分 0 秒",
          "score": 10
        },
        {
          "input": "7325",
          "expectedOutput": "122 分 5 秒",
          "score": 10
        },
        {
          "input": "1",
          "expectedOutput": "0 分 1 秒",
          "score": 10
        },
        {
          "input": "10000",
          "expectedOutput": "166 分 40 秒",
          "score": 10
        }
      ]
    },
    {
      "id": "114JYunlin-2",
      "title": "2-分段費率計算",
      "problemTitle": "2-分段費率計算",
      "courseCode": "114JYunlin",
      "courseName": "114-雲林縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "description": "某城市推出新的「用電費率計算器」。\n電費會依照不同使用量有不同費率：\n• 0–100 度：每度 1.68 元\n• 101–300 度：超過 100 度的部分，每度 2.45 元\n• 301 度以上：超過 300 度的部分，每度 3.70 元\n例如：\n用電 350 度 →\n• 前 100 度：1.68 × 100\n• 接著 200 度（101–300）：2.45 × 200\n• 最後 50 度（超過 300）：3.70 × 50\n請輸一個整數，代表「本月用電度數」，輸出本月總電費（四捨五入至整數）。\n若輸入小於 0，輸出 \"ERROR\"。\n【輸入格式】\n一個整數代表本月用電度數。\n【輸出格式】\n一個整數代表總電費，或字串 ERROR。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "某城市推出新的「用電費率計算器」。\n電費會依照不同使用量有不同費率：\n• 0–100 度：每度 1.68 元\n• 101–300 度：超過 100 度的部分，每度 2.45 元\n• 301 度以上：超過 300 度的部分，每度 3.70 元\n例如：\n用電 350 度 →\n• 前 100 度：1.68 × 100\n• 接著 200 度（101–300）：2.45 × 200\n• 最後 50 度（超過 300）：3.70 × 50\n請輸一個整數，代表「本月用電度數」，輸出本月總電費（四捨五入至整數）。\n若輸入小於 0，輸出 \"ERROR\"。\n【輸入格式】\n一個整數代表本月用電度數。\n【輸出格式】\n一個整數代表總電費，或字串 ERROR。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "250",
          "output": "536",
          "explanation": "因使用 250 度，故前 100 度→1.68×100=168，接著 150 度→2.45×150=367.5，總計 535.5。所以輸出 536。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t2_n\">N</variable><variable id=\"t2_fee\">fee</variable><variable id=\"t2_feer\">feer</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入本月用電度數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">ERROR</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"controls_if\"><mutation elseif=\"1\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_fee\">fee</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1.68</field></block></value></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">300</field></block></value></block></value><statement name=\"DO1\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_fee\">fee</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1.68</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2.45</field></block></value></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_fee\">fee</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1.68</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">200</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2.45</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">300</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">3.7</field></block></value></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_feer\">feer</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_fee\">fee</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_feer\">feer</field></block></value></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "250",
          "expectedOutput": "536",
          "score": 10
        },
        {
          "input": "50",
          "expectedOutput": "84",
          "score": 10
        },
        {
          "input": "350",
          "expectedOutput": "843",
          "score": 10
        },
        {
          "input": "100",
          "expectedOutput": "168",
          "score": 10
        },
        {
          "input": "300",
          "expectedOutput": "658",
          "score": 10
        },
        {
          "input": "0",
          "expectedOutput": "0",
          "score": 10
        },
        {
          "input": "-1",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "-50",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "400",
          "expectedOutput": "1028",
          "score": 10
        },
        {
          "input": "101",
          "expectedOutput": "170",
          "score": 10
        }
      ]
    },
    {
      "id": "114JYunlin-3",
      "title": "3-BMI 健康判定",
      "problemTitle": "3-BMI 健康判定",
      "courseCode": "114JYunlin",
      "courseName": "114-雲林縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "description": "利用程式計算 BMI，並根據 BMI 判斷健康狀態。\nBMI 的計算方式為：\nBMI = 體重(公斤) ÷ (身高(公尺))²\n健康狀態判定如下：\n• BMI &lt; 18.5 → 輸出「過輕」\n• 18.5 ≤ BMI &lt; 24 → 輸出「正常」\n• 24 ≤ BMI &lt; 27 → 輸出「過重」\n• BMI ≥ 27 → 輸出「肥胖」\n請讀入兩個數字：\n第一個為體重（公斤），第二個為身高（公尺）。\n輸出對應的健康狀態。\n若輸入的體重或身高 ≤ 0，輸出 \"ERROR\"。\n※ 小數點運算後 可直接用計算結果判斷，不必四捨五入。\n【輸入格式】\n第一行：體重(公斤)\n第二行：身高(公尺)\n【輸出格式】\n健康狀態，或 ERROR。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "利用程式計算 BMI，並根據 BMI 判斷健康狀態。\nBMI 的計算方式為：\nBMI = 體重(公斤) ÷ (身高(公尺))²\n健康狀態判定如下：\n• BMI &lt; 18.5 → 輸出「過輕」\n• 18.5 ≤ BMI &lt; 24 → 輸出「正常」\n• 24 ≤ BMI &lt; 27 → 輸出「過重」\n• BMI ≥ 27 → 輸出「肥胖」\n請讀入兩個數字：\n第一個為體重（公斤），第二個為身高（公尺）。\n輸出對應的健康狀態。\n若輸入的體重或身高 ≤ 0，輸出 \"ERROR\"。\n※ 小數點運算後 可直接用計算結果判斷，不必四捨五入。\n【輸入格式】\n第一行：體重(公斤)\n第二行：身高(公尺)\n【輸出格式】\n健康狀態，或 ERROR。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "58\n1.50",
          "output": "過重",
          "explanation": "BMI = 58 / (1.5 * 1.5) = 25.77...\n24 ≤ 25.77... &lt; 27，為「過重」"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t3_w\">W</variable><variable id=\"t3_h\">H</variable><variable id=\"t3_bmi\">bmi</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入體重(公斤)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_w\">W</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入身高(公尺)</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_h\">H</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_w\">W</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_h\">H</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">ERROR</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_bmi\">bmi</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_w\">W</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_h\">H</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_h\">H</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1000</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1000</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"2\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">18.5</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">過輕</field></block></value></block></statement><value name=\"IF1\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">24</field></block></value></block></value><statement name=\"DO1\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">正常</field></block></value></block></statement><value name=\"IF2\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_bmi\">bmi</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">27</field></block></value></block></value><statement name=\"DO2\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">過重</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">肥胖</field></block></value></block></statement></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "58\n1.50",
          "expectedOutput": "過重",
          "score": 10
        },
        {
          "input": "68\n1.70",
          "expectedOutput": "正常",
          "score": 10
        },
        {
          "input": "-5\n1.5",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "50\n-1.5",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "0\n1.5",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "50\n0",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "100\n1.6",
          "expectedOutput": "肥胖",
          "score": 10
        },
        {
          "input": "45\n1.6",
          "expectedOutput": "過輕",
          "score": 10
        },
        {
          "input": "61.44\n1.6",
          "expectedOutput": "過重",
          "score": 10
        },
        {
          "input": "69.12\n1.6",
          "expectedOutput": "肥胖",
          "score": 10
        }
      ]
    },
    {
      "id": "114JYunlin-4",
      "title": "4-成績統計",
      "problemTitle": "4-成績統計",
      "courseCode": "114JYunlin",
      "courseName": "114-雲林縣國中",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "description": "老師要統計班上這次月考的成績情形。\n請先輸入學生人數，接著輸入 N 個整數（每位學生的分數）。\n你的程式需要：\n1. 計算 平均分數（四捨五入到整數位）\n2. 計算 低於平均分的學生數\n輸出格式為：\n平均分數和低於平均的人數 (中間以半形空白隔開)。\n若 N ≤ 0，或資料中出現負分，輸出 \"ERROR\"。\n【輸入格式】\n第一行輸入學生人數 N。\n接下來依序輸入每一位學生的分數。\n【輸出格式】\n輸出平均分數及低於平均的人數，或 ERROR。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "老師要統計班上這次月考的成績情形。\n請先輸入學生人數，接著輸入 N 個整數（每位學生的分數）。\n你的程式需要：\n1. 計算 平均分數（四捨五入到整數位）\n2. 計算 低於平均分的學生數\n輸出格式為：\n平均分數和低於平均的人數 (中間以半形空白隔開)。\n若 N ≤ 0，或資料中出現負分，輸出 \"ERROR\"。\n【輸入格式】\n第一行輸入學生人數 N。\n接下來依序輸入每一位學生的分數。\n【輸出格式】\n輸出平均分數及低於平均的人數，或 ERROR。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "5\n80\n75\n90\n60\n100",
          "output": "81 3",
          "explanation": "平均：405 ÷ 5 = 81\n低於 81 的有 80、75、60 共 3 人。所以輸出 81 3。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t4_n\">N</variable><variable id=\"t4_scores\">scores</variable><variable id=\"t4_hasneg\">hasneg</variable><variable id=\"t4_i\">i</variable><variable id=\"t4_v\">v</variable><variable id=\"t4_j\">j</variable><variable id=\"t4_sum\">sum</variable><variable id=\"t4_avg\">avg</variable><variable id=\"t4_k\">k</variable><variable id=\"t4_cnt\">cnt</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入學生人數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">ERROR</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_scores\">scores</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_hasneg\">hasneg</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入分數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_v\">v</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_v\">v</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_hasneg\">hasneg</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></next></block></next></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_hasneg\">hasneg</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">ERROR</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_sum\">sum</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_sum\">sum</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_sum\">sum</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_j\">j</field></block></value></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_avg\">avg</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_sum\">sum</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_cnt\">cnt</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_avg\">avg</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_cnt\">cnt</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_cnt\">cnt</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_avg\">avg</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_cnt\">cnt</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "5\n80 75 90 60 100",
          "expectedOutput": "81 3",
          "score": 10
        },
        {
          "input": "4\n50 40 50 41",
          "expectedOutput": "45 2",
          "score": 10
        },
        {
          "input": "0",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "-1",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "3\n100 -5 50",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "3\n80 80 80",
          "expectedOutput": "80 0",
          "score": 10
        },
        {
          "input": "4\n90 90 90 92",
          "expectedOutput": "91 3",
          "score": 10
        },
        {
          "input": "5\n0 0 0 0 0",
          "expectedOutput": "0 0",
          "score": 10
        },
        {
          "input": "1\n100",
          "expectedOutput": "100 0",
          "score": 10
        },
        {
          "input": "5\n10 20 30 40 50",
          "expectedOutput": "30 2",
          "score": 10
        }
      ]
    },
    {
      "id": "114JYunlin-5",
      "title": "5-手機電量充電模擬",
      "problemTitle": "5-手機電量充電模擬",
      "courseCode": "114JYunlin",
      "courseName": "114-雲林縣國中",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "description": "小華的手機目前電量為 B%。\n他將手機接上充電器，充電速度如下：\n• 每分鐘增加 2% 電量\n• 最高只能充到 100%\n請輸入兩個整數：\n1. B：目前電量（0~100）\n2. T：充電時間（分鐘，0~300）\n經過 T 分鐘後，輸出最終電量，格式為：X%\n如果輸入的電量(0~100)或時間(0~300)不在範圍內（例如：負數、超過上限），輸出 \"ERROR\"。\n【輸入格式】\n第一行：目前電量 B\n第二行：充電時間 T\n【輸出格式】\n最終電量 X% 或 ERROR。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "小華的手機目前電量為 B%。\n他將手機接上充電器，充電速度如下：\n• 每分鐘增加 2% 電量\n• 最高只能充到 100%\n請輸入兩個整數：\n1. B：目前電量（0~100）\n2. T：充電時間（分鐘，0~300）\n經過 T 分鐘後，輸出最終電量，格式為：X%\n如果輸入的電量(0~100)或時間(0~300)不在範圍內（例如：負數、超過上限），輸出 \"ERROR\"。\n【輸入格式】\n第一行：目前電量 B\n第二行：充電時間 T\n【輸出格式】\n最終電量 X% 或 ERROR。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "50\n10",
          "output": "70%",
          "explanation": "充電 10 分鐘 → 增加 20%，變成 70%。"
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t5_b\">B</variable><variable id=\"t5_t\">T</variable><variable id=\"t5_final\">final</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入目前電量B</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_b\">B</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入充電時間T</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_t\">T</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_b\">B</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_b\">B</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_t\">T</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_t\">T</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">300</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">ERROR</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_final\">final</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_b\">B</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_t\">T</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><value name=\"THEN\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value><value name=\"ELSE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_b\">B</field></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_t\">T</field></block></value></block></value></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_final\">final</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">%</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "testCases": [
        {
          "input": "50\n10",
          "expectedOutput": "70%",
          "score": 10
        },
        {
          "input": "90\n20",
          "expectedOutput": "100%",
          "score": 10
        },
        {
          "input": "-1\n10",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "101\n10",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "50\n-1",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "50\n301",
          "expectedOutput": "ERROR",
          "score": 10
        },
        {
          "input": "0\n0",
          "expectedOutput": "0%",
          "score": 10
        },
        {
          "input": "0\n50",
          "expectedOutput": "100%",
          "score": 10
        },
        {
          "input": "100\n0",
          "expectedOutput": "100%",
          "score": 10
        },
        {
          "input": "10\n10",
          "expectedOutput": "30%",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
