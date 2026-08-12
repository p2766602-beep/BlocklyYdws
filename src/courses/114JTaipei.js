// Hand-authored by Claude from data/problem_bank_master_complete.csv (114JTaipei-1~6)
// and cross-checked against every worked example in txtFile/114JTaipei.txt via a JS reference
// implementation before being written here. Not produced by export_course_js.py.
//
// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness
// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）
// 對每一筆testCases實際跑過，不是憑印象手刻。
// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。

export default {
  "code": "114JTaipei",
  "title": "114-臺北市國中",
  "type": "programming",
  "mode": "learning",
  "description": "臺北市114學年度國中組資訊科技競賽練習題，涵蓋經典圖論演算法(BFS/Union-Find/關鍵路徑法)、多鍵排序與幾何窮舉，是全部16個縣市題組中演算法難度最高的一組。",
  "tasks": [
    {
      "id": "Taipei-J-1",
      "title": "壓縮機的編碼",
      "problemTitle": "壓縮機的編碼",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "為了節省儲存空間，探勘機器人將採集到的連續訊號進行了壓縮處理。壓縮演算法採用了「行程長度編碼(Run-Length Encoding, RLE)」的原理：\n當訊號中出現連續重複的字元時，將其替換為「該字元+重複次數」。\n例如：\n原始訊號：AAABBBBC\n壓縮後：A3B4C1\n原始訊號：WWWWWWWWWW\n壓縮後：W10\n請撰寫一個程式，將輸入的原始字串轉換為壓縮格式。",
      "inputDescription": "• 一個非空字串 S。\n• S 由英文字母或數字組成。\n• 長度範圍：1 ≤ Length ≤ 1000。",
      "outputDescription": "針對每一筆輸入，輸出一行壓縮後的字串。格式為：[字元][次數][字元][次數]...",
      "statement": {
        "description": "為了節省儲存空間，探勘機器人將採集到的連續訊號進行了壓縮處理。壓縮演算法採用了「行程長度編碼(Run-Length Encoding, RLE)」的原理：\n當訊號中出現連續重複的字元時，將其替換為「該字元+重複次數」。\n例如：\n原始訊號：AAABBBBC\n壓縮後：A3B4C1\n原始訊號：WWWWWWWWWW\n壓縮後：W10\n請撰寫一個程式，將輸入的原始字串轉換為壓縮格式。",
        "input": "• 一個非空字串 S。\n• S 由英文字母或數字組成。\n• 長度範圍：1 ≤ Length ≤ 1000。",
        "output": "針對每一筆輸入，輸出一行壓縮後的字串。格式為：[字元][次數][字元][次數]..."
      },
      "examples": [
        {
          "input": "AAAB",
          "output": "A3B1",
          "explanation": "A 出現 3 次，B 出現 1 次，壓縮為 A3B1。"
        },
        {
          "input": "WWWWWWWWWW",
          "output": "W10",
          "explanation": "W 連續出現 10 次，壓縮為 W10。"
        }
      ],
      "testCases": [
        {
          "input": "AAAB",
          "expectedOutput": "A3B1",
          "output": "A3B1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A",
          "expectedOutput": "A1",
          "output": "A1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "BB",
          "expectedOutput": "B2",
          "output": "B2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "XY",
          "expectedOutput": "X1Y1",
          "output": "X1Y1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ABABABABAB",
          "expectedOutput": "A1B1A1B1A1B1A1B1A1B1",
          "output": "A1B1A1B1A1B1A1B1A1B1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ZZZZZZZZZZZZZZZZZZZZ",
          "expectedOutput": "Z20",
          "output": "Z20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "AABBCC",
          "expectedOutput": "A2B2C2",
          "output": "A2B2C2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ABCDEF",
          "expectedOutput": "A1B1C1D1E1F1",
          "output": "A1B1C1D1E1F1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A11B",
          "expectedOutput": "A112B1",
          "output": "A112B1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "XXXXYYYYZZZZ",
          "expectedOutput": "X4Y4Z4",
          "output": "X4Y4Z4",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t1_s\">S</variable><variable id=\"t1_i\">i</variable><variable id=\"t1_ch\">ch</variable><variable id=\"t1_curch\">curch</variable><variable id=\"t1_curlen\">curlen</variable><variable id=\"t1_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入字串</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_s\">S</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_curch\">curch</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_s\">S</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_ch\">ch</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_s\">S</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_i\">i</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_ch\">ch</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curch\">curch</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_out\">out</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curch\">curch</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_curch\">curch</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_ch\">ch</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></next></block></statement></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t1_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_out\">out</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curch\">curch</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_curlen\">curlen</field></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t1_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "行程長度編碼(RLE)，單行輸出不分隔，與臺北市國小「連續字元分段顯示」概念相同但輸出格式不同。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "分組計數"
        ],
        "algorithm": [
          "行程長度編碼"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出"
        ],
        "math": [],
        "context": [
          "資料壓縮"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Taipei-J-2",
      "title": "探險隊員名單排序",
      "problemTitle": "探險隊員名單排序",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際探險隊即將出發前往新的殖民星，人事部門需要對所有候選隊員進行排序，以決定登船的優先順序。每位隊員有三個關鍵屬性：貢獻度(Contribution)、年資(Seniority)以及隊員ID(ID)。\n排序的規則如下(優先權由高到低)：\n1. 貢獻度：由高到低排序(遞減)。\n2. 年資：如果貢獻度相同，則年資由高到低排序(遞減)。\n3. 隊員 ID：如果貢獻度與年資皆相同，則依據隊員 ID 的字典順序由小到大排序(遞增)。\n隊員 ID 統一格式為 ID 後接三位數字(例如：ID001, ID042, ID999)，且在同一筆資料中不會重複。",
      "inputDescription": "1. 第一行為一個正整數 N，代表隊員的總人數。\n2. 接下來有 N 行，每行包含一位隊員的資訊，格式為：ID 貢獻度 年資。(為配合平台輸入，可皆以空白或換行分隔)\n【限制條件】\n• ID：字串格式(例如ID001)。\n• 貢獻度：非負整數。\n• 年資：正整數。\n• 1 ≤ N ≤ 1,000。\n• 貢獻度與年資介於 0~1,000。\n• 所有隊員 ID 長度相同且格式固定，簡化排序邏輯。",
      "outputDescription": "針對每一筆輸入，輸出排序後的隊員名單。每位隊員佔一行，格式與輸入相同。",
      "statement": {
        "description": "星際探險隊即將出發前往新的殖民星，人事部門需要對所有候選隊員進行排序，以決定登船的優先順序。每位隊員有三個關鍵屬性：貢獻度(Contribution)、年資(Seniority)以及隊員ID(ID)。\n排序的規則如下(優先權由高到低)：\n1. 貢獻度：由高到低排序(遞減)。\n2. 年資：如果貢獻度相同，則年資由高到低排序(遞減)。\n3. 隊員 ID：如果貢獻度與年資皆相同，則依據隊員 ID 的字典順序由小到大排序(遞增)。\n隊員 ID 統一格式為 ID 後接三位數字(例如：ID001, ID042, ID999)，且在同一筆資料中不會重複。",
        "input": "1. 第一行為一個正整數 N，代表隊員的總人數。\n2. 接下來有 N 行，每行包含一位隊員的資訊，格式為：ID 貢獻度 年資。(為配合平台輸入，可皆以空白或換行分隔)\n【限制條件】\n• ID：字串格式(例如ID001)。\n• 貢獻度：非負整數。\n• 年資：正整數。\n• 1 ≤ N ≤ 1,000。\n• 貢獻度與年資介於 0~1,000。\n• 所有隊員 ID 長度相同且格式固定，簡化排序邏輯。",
        "output": "針對每一筆輸入，輸出排序後的隊員名單。每位隊員佔一行，格式與輸入相同。"
      },
      "examples": [
        {
          "input": "3\nID001 100 5\nID002 100 8\nID003 150 2",
          "output": "ID003 150 2\nID002 100 8\nID001 100 5",
          "explanation": "ID003 貢獻度最高排名第一。ID001與ID002 貢獻度相同，但ID002年資(8)高於ID001(5)，故ID002較前。"
        }
      ],
      "testCases": [
        {
          "input": "1\nID359 100 5",
          "expectedOutput": "ID359 100 5",
          "output": "ID359 100 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nID380 50 1 ID313 100 2",
          "expectedOutput": "ID313 100 2\nID380 50 1",
          "output": "ID313 100 2\nID380 50 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nID951 100 1 ID318 100 5",
          "expectedOutput": "ID318 100 5\nID951 100 1",
          "output": "ID318 100 5\nID951 100 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nID237 100 1 ID139 100 1",
          "expectedOutput": "ID139 100 1\nID237 100 1",
          "output": "ID139 100 1\nID237 100 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nID221 10 10 ID708 10 10 ID007 10 10 ID741 10 10 ID479 10 10",
          "expectedOutput": "ID007 10 10\nID221 10 10\nID479 10 10\nID708 10 10\nID741 10 10",
          "output": "ID007 10 10\nID221 10 10\nID479 10 10\nID708 10 10\nID741 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nID111 50 50 ID222 50 50 ID333 50 50",
          "expectedOutput": "ID111 50 50\nID222 50 50\nID333 50 50",
          "output": "ID111 50 50\nID222 50 50\nID333 50 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nID333 50 50 ID222 50 50 ID111 50 50",
          "expectedOutput": "ID111 50 50\nID222 50 50\nID333 50 50",
          "output": "ID111 50 50\nID222 50 50\nID333 50 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nID001 10 1 ID002 20 1 ID003 30 1 ID004 40 1",
          "expectedOutput": "ID004 40 1\nID003 30 1\nID002 20 1\nID001 10 1",
          "output": "ID004 40 1\nID003 30 1\nID002 20 1\nID001 10 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nID001 10 10 ID002 10 20 ID003 10 30 ID004 10 40",
          "expectedOutput": "ID004 10 40\nID003 10 30\nID002 10 20\nID001 10 10",
          "output": "ID004 10 40\nID003 10 30\nID002 10 20\nID001 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nID100 100 100 ID200 50 200 ID300 200 50 ID400 100 100 ID500 200 50",
          "expectedOutput": "ID300 200 50\nID500 200 50\nID100 100 100\nID400 100 100\nID200 50 200",
          "output": "ID300 200 50\nID500 200 50\nID100 100 100\nID400 100 100\nID200 50 200",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t2_n\">N</variable><variable id=\"t2_ids\">ids</variable><variable id=\"t2_contribs\">contribs</variable><variable id=\"t2_sens\">sens</variable><variable id=\"t2_idnums\">idnums</variable><variable id=\"t2_idstr\">idstr</variable><variable id=\"t2_contrib\">contrib</variable><variable id=\"t2_sen\">sen</variable><variable id=\"t2_i\">i</variable><variable id=\"t2_j\">j</variable><variable id=\"t2_tmps\">tmps</variable><variable id=\"t2_tmpn\">tmpn</variable><variable id=\"t2_d1_raw\">t2_d1_raw</variable><variable id=\"t2_d1_num\">t2_d1_num</variable><variable id=\"t2_d2_raw\">t2_d2_raw</variable><variable id=\"t2_d2_num\">t2_d2_num</variable><variable id=\"t2_d3_raw\">t2_d3_raw</variable><variable id=\"t2_d3_num\">t2_d3_num</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入隊員總人數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_ids\">ids</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_sens\">sens</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_idstr\">idstr</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_contrib\">contrib</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_sen\">sen</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_d1_raw\">t2_d1_raw</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idstr\">idstr</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_d1_num\">t2_d1_num</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_d1_raw\">t2_d1_raw</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_d2_raw\">t2_d2_raw</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idstr\">idstr</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_d2_num\">t2_d2_num</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_d2_raw\">t2_d2_raw</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_d3_raw\">t2_d3_raw</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idstr\">idstr</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_d3_num\">t2_d3_num</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_d3_raw\">t2_d3_raw</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_ids\">ids</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idstr\">idstr</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contrib\">contrib</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sen\">sen</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_d1_num\">t2_d1_num</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_d2_num\">t2_d2_num</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_d3_num\">t2_d3_num</field></block></value></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_j\">j</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value></block></value></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_tmps\">tmps</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_ids\">ids</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_ids\">ids</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_ids\">ids</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_ids\">ids</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_tmps\">tmps</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_tmpn\">tmpn</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_tmpn\">tmpn</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_tmpn\">tmpn</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_tmpn\">tmpn</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t2_tmpn\">tmpn</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_idnums\">idnums</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_tmpn\">tmpn</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement></block></statement></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_ids\">ids</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_contribs\">contribs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD4\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_sens\">sens</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t2_i\">i</field></block></value></block></value></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "三階多鍵排序(貢獻度desc/年資desc/ID字典序asc)，需要泡泡排序同時交換四組平行清單。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "排序"
        ],
        "subConcepts": [
          "多鍵排序"
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
          "科幻情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Taipei-J-3",
      "title": "通訊網路廣播",
      "problemTitle": "通訊網路廣播",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "探險隊在一個星團中建立了 N 個通訊節點(編號 0 ~ N-1)。這些節點之間存在 M 條雙向的通訊連結。\n當探險隊從 0 號節點(基地台)發送廣播訊號時，訊號會沿著連結逐層向外擴散：\n• 第 0 層：0 號節點接收到訊號，距離為 0。\n• 第 1 層：直接與 0 號節點相連的所有節點接收到訊號，距離為 1。\n• 第 2 層：與第 1 層節點相連、且先前未接收過訊號的所有節點，距離為 2。\n• 以此類推。\n請撰寫一個程式，計算從 0 號節點出發，所有可抵達的節點及其與 0 號節點的最短距離。",
      "inputDescription": "1. 第一行為兩個整數 N, M，代表節點數與連結數。\n2. 接下來有 M 行，每行包含兩個整數 u, v，代表節點 u 與 v 之間有一條通訊連結。(配合平台，數值間以空白分隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000\n• 0 ≤ M ≤ 2,000\n• 節點編號為 0 ~ N-1。",
      "outputDescription": "針對每一筆輸入，輸出一行包含所有可抵達節點的編號與距離，格式為 ID:Distance，並依據節點 ID 由小到大排列。",
      "statement": {
        "description": "探險隊在一個星團中建立了 N 個通訊節點(編號 0 ~ N-1)。這些節點之間存在 M 條雙向的通訊連結。\n當探險隊從 0 號節點(基地台)發送廣播訊號時，訊號會沿著連結逐層向外擴散：\n• 第 0 層：0 號節點接收到訊號，距離為 0。\n• 第 1 層：直接與 0 號節點相連的所有節點接收到訊號，距離為 1。\n• 第 2 層：與第 1 層節點相連、且先前未接收過訊號的所有節點，距離為 2。\n• 以此類推。\n請撰寫一個程式，計算從 0 號節點出發，所有可抵達的節點及其與 0 號節點的最短距離。",
        "input": "1. 第一行為兩個整數 N, M，代表節點數與連結數。\n2. 接下來有 M 行，每行包含兩個整數 u, v，代表節點 u 與 v 之間有一條通訊連結。(配合平台，數值間以空白分隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000\n• 0 ≤ M ≤ 2,000\n• 節點編號為 0 ~ N-1。",
        "output": "針對每一筆輸入，輸出一行包含所有可抵達節點的編號與距離，格式為 ID:Distance，並依據節點 ID 由小到大排列。"
      },
      "examples": [
        {
          "input": "4 3\n0 1 1 2 2 3",
          "output": "0:0 1:1 2:2 3:3",
          "explanation": "訊號從 0 傳到 1 (距離 1)，再從 1 傳到 2 (距離 2)，依此類推。"
        },
        {
          "input": "5 4\n0 1 0 2 0 3 0 4",
          "output": "0:0 1:1 2:1 3:1 4:1",
          "explanation": "0 號節點直接連至 1, 2, 3, 4，距離皆為 1。"
        }
      ],
      "testCases": [
        {
          "input": "1 0",
          "expectedOutput": "0:0",
          "output": "0:0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 1\n0 1",
          "expectedOutput": "0:0 1:1",
          "output": "0:0 1:1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 0",
          "expectedOutput": "0:0",
          "output": "0:0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 3\n0 1 1 2 2 3",
          "expectedOutput": "0:0 1:1 2:2 3:3",
          "output": "0:0 1:1 2:2 3:3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n0 1 0 2 0 3 0 4",
          "expectedOutput": "0:0 1:1 2:1 3:1 4:1",
          "output": "0:0 1:1 2:1 3:1 4:1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 3\n0 1 1 2 2 0",
          "expectedOutput": "0:0 1:1 2:1",
          "output": "0:0 1:1 2:1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n0 1 1 2 0 3 3 4",
          "expectedOutput": "0:0 1:1 2:2 3:1 4:2",
          "output": "0:0 1:1 2:2 3:1 4:2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 5\n0 1 1 2 2 3 3 4 4 5",
          "expectedOutput": "0:0 1:1 2:2 3:3 4:4 5:5",
          "output": "0:0 1:1 2:2 3:3 4:4 5:5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 2\n0 1 2 3",
          "expectedOutput": "0:0 1:1",
          "output": "0:0 1:1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 6\n0 1 0 2 1 3 1 4 2 5 2 6",
          "expectedOutput": "0:0 1:1 2:1 3:2 4:2 5:2 6:2",
          "output": "0:0 1:1 2:1 3:2 4:2 5:2 6:2",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t3_n\">N</variable><variable id=\"t3_m\">M</variable><variable id=\"t3_adj\">adj</variable><variable id=\"t3_u\">u</variable><variable id=\"t3_v\">v</variable><variable id=\"t3_k\">k</variable><variable id=\"t3_i\">i</variable><variable id=\"t3_j\">j</variable><variable id=\"t3_dist\">dist</variable><variable id=\"t3_queue\">queue</variable><variable id=\"t3_head\">head</variable><variable id=\"t3_tail\">tail</variable><variable id=\"t3_cur\">cur</variable><variable id=\"t3_out\">out</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N M</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_m\">M</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_adj\">adj</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_m\">M</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_u\">u</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_adj\">adj</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_u\">u</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_v\">v</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_adj\">adj</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_v\">v</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_u\">u</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_dist\">dist</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_queue\">queue</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_queue\">queue</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_head\">head</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_tail\">tail</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">UNTIL</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_head\">head</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_tail\">tail</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_cur\">cur</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_queue\">queue</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_head\">head</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_head\">head</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_head\">head</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_j\">j</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_adj\">adj</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_cur\">cur</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_j\">j</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_j\">j</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_cur\">cur</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_tail\">tail</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_tail\">tail</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_queue\">queue</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_tail\">tail</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_j\">j</field></block></value></block></next></block></next></block></statement></block></statement></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">-1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_out\">out</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"4\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">:</field></block></value><value name=\"ADD3\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t3_out\">out</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"5\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_out\">out</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\"> </field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\">:</field></block></value><value name=\"ADD4\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_dist\">dist</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t3_out\">out</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典廣度優先搜尋(BFS)求最短距離，用鄰接矩陣加佇列實作，是圖論演算法的入門經典題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "廣度優先搜尋"
        ],
        "algorithm": [
          "BFS"
        ],
        "dataStructure": [
          "清單",
          "佇列"
        ],
        "syntax": [
          "while迴圈"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "通訊網路"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Taipei-J-4",
      "title": "區域網路連線檢測",
      "problemTitle": "區域網路連線檢測",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在一個大型研究基地中，有 N 台電腦(編號 0 ~ N-1)。初期，所有電腦都是獨立的。隨著任務需求，工程師會不斷在兩台電腦之間建立區域網路(LAN)連線。\n你被要求開發一個檢測系統，處理以下兩種類期的指令：\n1. CONNECT U V：在電腦 U 與 V 之間建立一條雙向連線。\n2. QUERY U V：查詢電腦 U 與 V 是否在同一個連動網絡中(即 U 與 V 之間是否存在直接或間接的路徑)。",
      "inputDescription": "1. 第一行為兩個正整數 N 與 M，分別代表電腦數量與操作指令的數量。\n2. 接下來有 M 行，每行包含一個指令(CONNECT 或 QUERY)以及兩個整數 U, V。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 1 ≤ M ≤ 2,000。\n• 0 ≤ U, V &lt; N。",
      "outputDescription": "針對每一個 QUERY 指令：\n• 若兩台電腦連通，輸出 YES。\n• 若不連通，輸出 NO。\n(每筆查詢的輸出請以換行分隔)",
      "statement": {
        "description": "在一個大型研究基地中，有 N 台電腦(編號 0 ~ N-1)。初期，所有電腦都是獨立的。隨著任務需求，工程師會不斷在兩台電腦之間建立區域網路(LAN)連線。\n你被要求開發一個檢測系統，處理以下兩種類期的指令：\n1. CONNECT U V：在電腦 U 與 V 之間建立一條雙向連線。\n2. QUERY U V：查詢電腦 U 與 V 是否在同一個連動網絡中(即 U 與 V 之間是否存在直接或間接的路徑)。",
        "input": "1. 第一行為兩個正整數 N 與 M，分別代表電腦數量與操作指令的數量。\n2. 接下來有 M 行，每行包含一個指令(CONNECT 或 QUERY)以及兩個整數 U, V。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 1 ≤ M ≤ 2,000。\n• 0 ≤ U, V &lt; N。",
        "output": "針對每一個 QUERY 指令：\n• 若兩台電腦連通，輸出 YES。\n• 若不連通，輸出 NO。\n(每筆查詢的輸出請以換行分隔)"
      },
      "examples": [
        {
          "input": "5 6\nQUERY 0 1\nCONNECT 0 1\nCONNECT 1 2\nQUERY 0 2\nQUERY 0 3\nCONNECT 3 4",
          "output": "NO\nYES\nNO",
          "explanation": "第一次查詢 0 1 尚未連線，輸出 NO。 連線 0 1, 1 2 後，0 與 2 已經連通，輸出 YES。 0 與 3 不連通，輸出 NO。"
        }
      ],
      "testCases": [
        {
          "input": "2 1\nQUERY 0 1",
          "expectedOutput": "NO",
          "output": "NO",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 2\nCONNECT 0 1 QUERY 0 1",
          "expectedOutput": "YES",
          "output": "YES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\nCONNECT 0 1 CONNECT 1 2 CONNECT 2 3 QUERY 0 3",
          "expectedOutput": "YES",
          "output": "YES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 5\nCONNECT 0 1 CONNECT 2 3 QUERY 0 2 QUERY 1 0 QUERY 3 2",
          "expectedOutput": "NO\nYES\nYES",
          "output": "NO\nYES\nYES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 2\nCONNECT 0 0 QUERY 0 0",
          "expectedOutput": "YES",
          "output": "YES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 4\nQUERY 0 1 QUERY 1 2 QUERY 2 3 QUERY 0 3",
          "expectedOutput": "NO\nNO\nNO\nNO",
          "output": "NO\nNO\nNO\nNO",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 4\nCONNECT 0 1 CONNECT 1 2 QUERY 0 2 QUERY 2 0",
          "expectedOutput": "YES\nYES",
          "output": "YES\nYES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 6\nCONNECT 0 1 CONNECT 3 4 QUERY 0 4 CONNECT 1 3 QUERY 0 4 QUERY 1 4",
          "expectedOutput": "NO\nYES\nYES",
          "output": "NO\nYES\nYES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 3\nQUERY 0 1 CONNECT 1 0 QUERY 0 1",
          "expectedOutput": "NO\nYES",
          "output": "NO\nYES",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5\nCONNECT 0 1 CONNECT 0 2 CONNECT 0 3 CONNECT 0 4 QUERY 1 4",
          "expectedOutput": "YES",
          "output": "YES",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t4_n\">N</variable><variable id=\"t4_m\">M</variable><variable id=\"t4_parent\">parent</variable><variable id=\"t4_op\">op</variable><variable id=\"t4_u\">u</variable><variable id=\"t4_v\">v</variable><variable id=\"t4_k\">k</variable><variable id=\"t4_i\">i</variable><variable id=\"t4_pu\">pu</variable><variable id=\"t4_pv\">pv</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N M</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_m\">M</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_parent\">parent</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_i\">i</field></block></value></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t4_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_op\">op</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_u\">u</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_op\">op</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">CONNECT</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pu\">pu</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_u\">u</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pu\">pu</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pv\">pv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_v\">v</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pv\">pv</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pu\">pu</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_u\">u</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pu\">pu</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pv\">pv</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_v\">v</field></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">WHILE</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t4_pv\">pv</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_parent\">parent</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pu\">pu</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t4_pv\">pv</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">YES</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">NO</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典聯合查找(Union-Find/DSU)演算法判斷連通性，是圖論資料結構的入門經典題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "聯合查找"
        ],
        "algorithm": [
          "Union-Find"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while迴圈"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "網路"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Taipei-J-5",
      "title": "最近恆星點對",
      "problemTitle": "最近恆星點對",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際探測器掃描了一片未知的星域，並回傳了 N 顆恆星的二維平面座標。為了尋找可能存在的雙星系統或互相牽引的天體，請你在這個 N 個點中，找出距離最近的兩個點，並輸出它們之間的距離。",
      "inputDescription": "1. 第一行為一個正整數 N，代表恆星數量。\n2. 接下來有 N 行，每行包含兩個浮點數 X 與 Y，代表恆星的座標。(數值之間以空白間隔)\n【限制條件】\n• 2 ≤ N ≤ 1,000。\n• 0 ≤ X, Y ≤ 10,000。",
      "outputDescription": "針對每一筆測試資料，輸出最近點對的距離。請四捨五入至小數點後 4 位(例如 1.4142)。",
      "statement": {
        "description": "星際探測器掃描了一片未知的星域，並回傳了 N 顆恆星的二維平面座標。為了尋找可能存在的雙星系統或互相牽引的天體，請你在這個 N 個點中，找出距離最近的兩個點，並輸出它們之間的距離。",
        "input": "1. 第一行為一個正整數 N，代表恆星數量。\n2. 接下來有 N 行，每行包含兩個浮點數 X 與 Y，代表恆星的座標。(數值之間以空白間隔)\n【限制條件】\n• 2 ≤ N ≤ 1,000。\n• 0 ≤ X, Y ≤ 10,000。",
        "output": "針對每一筆測試資料，輸出最近點對的距離。請四捨五入至小數點後 4 位(例如 1.4142)。"
      },
      "examples": [
        {
          "input": "3\n0 0\n3 4\n1 1",
          "output": "1.4142",
          "explanation": "(0, 0) 與 (1, 1) 的距離為 √2 ≈ 1.4142。"
        },
        {
          "input": "2\n1.5 1.5\n1.5 1.5",
          "output": "0.0000",
          "explanation": "同一個位置的點，距離為 0.0000。"
        }
      ],
      "testCases": [
        {
          "input": "3\n0 0 3 4 1 1",
          "expectedOutput": "1.4142",
          "output": "1.4142",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n0 0 10 10 20 20",
          "expectedOutput": "14.1421",
          "output": "14.1421",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 1 1 0 1 1",
          "expectedOutput": "1.0000",
          "output": "1.0000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n1.5 1.5 1.5 1.5",
          "expectedOutput": "0.0000",
          "output": "0.0000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n0 0 1 1 2 2 0.1 0.1 5 5",
          "expectedOutput": "0.1414",
          "output": "0.1414",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 5 5 0 5 5",
          "expectedOutput": "5.0000",
          "output": "5.0000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 100 100 101 200 200",
          "expectedOutput": "1.0000",
          "output": "1.0000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n0 0 10000 10000",
          "expectedOutput": "14142.1356",
          "output": "14142.1356",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 1 2 2 3 3 4 4",
          "expectedOutput": "1.4142",
          "output": "1.4142",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 10 20 20 30 30 40 40 40 40.5",
          "expectedOutput": "0.5000",
          "output": "0.5000",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t5_n\">N</variable><variable id=\"t5_xs\">xs</variable><variable id=\"t5_ys\">ys</variable><variable id=\"t5_v\">v</variable><variable id=\"t5_i\">i</variable><variable id=\"t5_j\">j</variable><variable id=\"t5_dx\">dx</variable><variable id=\"t5_dy\">dy</variable><variable id=\"t5_dist\">dist</variable><variable id=\"t5_best\">best</variable><variable id=\"t5_answer\">answer</variable><variable id=\"t5_scaled\">scaled</variable><variable id=\"t5_intpart\">intpart</variable><variable id=\"t5_fracpart\">fracpart</variable><variable id=\"t5_fractext\">fractext</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入恆星數量</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_xs\">xs</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_ys\">ys</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_xs\">xs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_i\">i</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_ys\">ys</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_i\">i</field></block></value><value name=\"TO\"><block type=\"interaction_answer\"></block></value></block></next></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_best\">best</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">999999999</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t5_j\">j</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_dx\">dx</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_xs\">xs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_xs\">xs</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_j\">j</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_dy\">dy</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_ys\">ys</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_ys\">ys</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_j\">j</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_dist\">dist</field><value name=\"VALUE\"><block type=\"math_single\"><field name=\"OP\">ROOT</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_dx\">dx</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_dx\">dx</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_dy\">dy</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_dy\">dy</field></block></value></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_dist\">dist</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_best\">best</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_best\">best</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_dist\">dist</field></block></value></block></statement></block></next></block></next></block></next></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_scaled\">scaled</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUND</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_best\">best</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10000</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_intpart\">intpart</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_scaled\">scaled</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10000</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_fracpart\">fracpart</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_scaled\">scaled</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">10000</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_fractext\">fractext</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_fracpart\">fracpart</field></block></value></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">UNTIL</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_fractext\">fractext</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_fractext\">fractext</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">0</field></block></value><value name=\"ADD1\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_fractext\">fractext</field></block></value></block></value></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t5_answer\">answer</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"3\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_intpart\">intpart</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">.</field></block></value><value name=\"ADD2\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_fractext\">fractext</field></block></value></block></value><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t5_answer\">answer</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉所有點對求最近距離(O(N^2))，並需將結果格式化為固定4位小數字串輸出。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "窮舉"
        ],
        "subConcepts": [
          "幾何"
        ],
        "algorithm": [
          "窮舉法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "雙層迴圈"
        ],
        "math": [
          "距離公式"
        ],
        "context": [
          "科幻情境",
          "天文"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Taipei-J-6",
      "title": "巨型結構的建造排程",
      "problemTitle": "巨型結構的建造排程",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際聯邦計畫建造一座戴森球(Dyson Sphere)。這是一個極為複雜的工程，包含 N 個建造任務(編號 0 ~ N-1)。每個任務都有一個所需工時(Duration) Di。\n此外，任務之間存在依賴關係(Dependencies)：某些任務必須在其他任務完成後才能開始。\n為了盡快完成戴森球，所有沒有依賴關係或前置任務已完成的任務都可以並行(Parallel)進行。請計算完成整個工程所需的最短總工期。如果工程因循環依賴而無法完成，請輸出 IMPOSSIBLE。",
      "inputDescription": "1. 第一行為兩個整數 N, M，代表任務數量與依賴關係數量。\n2. 第二行為 N 個由空白分隔的整數，代表每個任務的工時 D0, D1, ..., DN-1。\n3. 接下來有 M 行，每行包含兩個整數 U, V，代表任務 U 必須在任務 V 開始之前完成(U → V)。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 0 ≤ M ≤ 2,000。\n• 1 ≤ Di ≤ 10,000。",
      "outputDescription": "針對每一筆測試資料，輸出一行包含一個整數，代表最短總工期。若無法完成，輸出 IMPOSSIBLE。",
      "statement": {
        "description": "星際聯邦計畫建造一座戴森球(Dyson Sphere)。這是一個極為複雜的工程，包含 N 個建造任務(編號 0 ~ N-1)。每個任務都有一個所需工時(Duration) Di。\n此外，任務之間存在依賴關係(Dependencies)：某些任務必須在其他任務完成後才能開始。\n為了盡快完成戴森球，所有沒有依賴關係或前置任務已完成的任務都可以並行(Parallel)進行。請計算完成整個工程所需的最短總工期。如果工程因循環依賴而無法完成，請輸出 IMPOSSIBLE。",
        "input": "1. 第一行為兩個整數 N, M，代表任務數量與依賴關係數量。\n2. 第二行為 N 個由空白分隔的整數，代表每個任務的工時 D0, D1, ..., DN-1。\n3. 接下來有 M 行，每行包含兩個整數 U, V，代表任務 U 必須在任務 V 開始之前完成(U → V)。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 0 ≤ M ≤ 2,000。\n• 1 ≤ Di ≤ 10,000。",
        "output": "針對每一筆測試資料，輸出一行包含一個整數，代表最短總工期。若無法完成，輸出 IMPOSSIBLE。"
      },
      "examples": [
        {
          "input": "3 2\n10 20 30\n0 1\n1 2",
          "output": "60",
          "explanation": "解釋：0 -> 1 -> 2。路徑長 0 + 20 + 30 = 60。(編按：此處原題解釋可能為簡寫，正確總工時為 D0 + D1 + D2 = 10 + 20 + 30 = 60)"
        },
        {
          "input": "3 3\n10 10 10\n0 1\n1 2\n2 0",
          "output": "IMPOSSIBLE",
          "explanation": "0, 1, 2 互相依賴形成循環，無法完成。"
        }
      ],
      "testCases": [
        {
          "input": "1 0\n10",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 1\n10 20\n0 1",
          "expectedOutput": "30",
          "output": "30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 3\n10 10 10\n0 1 1 2 2 0",
          "expectedOutput": "IMPOSSIBLE",
          "output": "IMPOSSIBLE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 2\n10 20 30\n0 1 0 2",
          "expectedOutput": "40",
          "output": "40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 3\n10 10 10 10\n0 1 1 2 2 3",
          "expectedOutput": "40",
          "output": "40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 0\n100 200 300",
          "expectedOutput": "300",
          "output": "300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n10 20 30 40 50\n0 4 1 4 2 4 3 4",
          "expectedOutput": "90",
          "output": "90",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 4\n10 20 30 40\n0 1 1 2 2 3 3 1",
          "expectedOutput": "IMPOSSIBLE",
          "output": "IMPOSSIBLE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n10 10 10 10 10\n0 1 0 2 1 3 2 3",
          "expectedOutput": "30",
          "output": "30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 2\n100 100\n0 1 1 0",
          "expectedOutput": "IMPOSSIBLE",
          "output": "IMPOSSIBLE",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"t6_n\">N</variable><variable id=\"t6_m\">M</variable><variable id=\"t6_dur\">dur</variable><variable id=\"t6_from\">from</variable><variable id=\"t6_to\">to</variable><variable id=\"t6_v\">v</variable><variable id=\"t6_i\">i</variable><variable id=\"t6_k\">k</variable><variable id=\"t6_round\">round</variable><variable id=\"t6_finish\">finish</variable><variable id=\"t6_changed\">changed</variable><variable id=\"t6_u\">u</variable><variable id=\"t6_w\">w</variable><variable id=\"t6_cand\">cand</variable><variable id=\"t6_impossible\">impossible</variable><variable id=\"t6_answer\">answer</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N M</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_m\">M</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_dur\">dur</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入各任務工時</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_dur\">dur</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_from\">from</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_to\">to</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_u\">u</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_w\">w</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_from\">from</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_u\">u</field></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_to\">to</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_w\">w</field></block></value></block></next></block></next></block></next></block></next></block></next></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_finish\">finish</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_dur\">dur</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_round\">round</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_changed\">changed</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_cand\">cand</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_from\">from</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_dur\">dur</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_to\">to</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_cand\">cand</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_to\">to</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_to\">to</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_cand\">cand</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_changed\">changed</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></next></block></statement></block></next></block></statement></block></next></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_impossible\">impossible</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_k\">k</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_m\">M</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_cand\">cand</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_from\">from</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_dur\">dur</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_to\">to</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_cand\">cand</field></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_to\">to</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_k\">k</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_impossible\">impossible</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></statement></block></statement><next><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_answer\">answer</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">-999999999</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"t6_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"TO\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_answer\">answer</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"t6_answer\">answer</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_finish\">finish</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></statement></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_impossible\">impossible</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">IMPOSSIBLE</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"t6_answer\">answer</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典DAG關鍵路徑(Critical Path Method)問題，用Bellman-Ford式鬆弛求最長路徑並偵測循環依賴，是本次題組中演算法設計難度最高的一題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "拓樸排序"
        ],
        "algorithm": [
          "關鍵路徑法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "多層迴圈"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "工程排程"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
