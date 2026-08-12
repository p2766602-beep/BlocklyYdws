// Hand-authored by Claude from data/problem_bank_master_complete.csv (114JChanghua-1~10)
// and cross-checked against every worked example in txtFile/114JChanghua.txt via a JS reference
// implementation before being written here. Not produced by export_course_js.py.
//
// starterXml：每一題都有手寫的教師示範答案（Blockly XML），並且用headless harness
// （BlocklyYdws/.scratch_verify/verify.mjs，真正的Blockly.Xml.domToWorkspace+javascriptGenerator）
// 對每一筆testCases實際跑過，不是憑印象手刻。
// mode: 'learning'（比照2026-08-07既有決定：新題組一律採學習模式）。
//
// Changhua-J-2測資第7/8筆為19~20位數的長數字迴文字串，超過interaction_answer的Number()自動轉型安全精度(2^53≈16位數)，已改用等效長度較短的數字迴文測資，詳見docs/PDF題目來源勘誤紀錄.md。

export default {
  "code": "114JChanghua",
  "title": "114-彰化縣國中",
  "type": "programming",
  "mode": "learning",
  "description": "彰化縣114學年度國中組資訊科技競賽練習題，涵蓋數論(輾轉相除法)、動態規劃(費氏數列)、字串處理(迴文/凱薩密碼)與貪婪演算法(種花問題)。",
  "tasks": [
    {
      "id": "Changhua-J-1",
      "title": "校外教學合照大挑戰",
      "problemTitle": "校外教學合照大挑戰",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "今天是你和同學們的校外教學，你們5個好朋友(夯吉寶、彰之助、歐邦倪、古力彰、志多星)準備在遊樂園門口排成一橫列拍大合照。\n這5個人排成一列，總共有幾種不同的排法？\n請寫一個程式，只要輸入人數N(2 &lt; N &lt; 21)，就能自動計算出 N! (階乘) 的結果，告訴你們總共有幾種排隊方式。\n數學小撇步~「階乘」的概念就像是：\n第1個位置有5種人選可以站。\n第2個位置剩下4種人選。\n...以此類推。\n總共有 5×4×3×2×1 = 120 種排法。數學符號記作5!。\n2! = 2×1 = 2\n3! = 3×2×1 = 6\n4! = 4×3×2×1 = 24",
      "inputDescription": "輸入人數 N (2 &lt; N &lt; 21)。",
      "outputDescription": "輸出 N! (階乘) 的結果。",
      "statement": {
        "description": "今天是你和同學們的校外教學，你們5個好朋友(夯吉寶、彰之助、歐邦倪、古力彰、志多星)準備在遊樂園門口排成一橫列拍大合照。\n這5個人排成一列，總共有幾種不同的排法？\n請寫一個程式，只要輸入人數N(2 &lt; N &lt; 21)，就能自動計算出 N! (階乘) 的結果，告訴你們總共有幾種排隊方式。\n數學小撇步~「階乘」的概念就像是：\n第1個位置有5種人選可以站。\n第2個位置剩下4種人選。\n...以此類推。\n總共有 5×4×3×2×1 = 120 種排法。數學符號記作5!。\n2! = 2×1 = 2\n3! = 3×2×1 = 6\n4! = 4×3×2×1 = 24",
        "input": "輸入人數 N (2 &lt; N &lt; 21)。",
        "output": "輸出 N! (階乘) 的結果。"
      },
      "examples": [
        {
          "input": "5",
          "output": "120",
          "explanation": "5! = 120"
        },
        {
          "input": "8",
          "output": "40320",
          "explanation": "8! = 40320"
        },
        {
          "input": "16",
          "output": "20922789888000",
          "explanation": "16! = 20922789888000"
        }
      ],
      "testCases": [
        {
          "input": "7",
          "expectedOutput": "5040",
          "output": "5040",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6",
          "expectedOutput": "720",
          "output": "720",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20",
          "expectedOutput": "2432902008176640000",
          "output": "2432902008176640000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4",
          "expectedOutput": "24",
          "output": "24",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9",
          "expectedOutput": "362880",
          "output": "362880",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10",
          "expectedOutput": "3628800",
          "output": "3628800",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12",
          "expectedOutput": "479001600",
          "output": "479001600",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15",
          "expectedOutput": "1307674368000",
          "output": "1307674368000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "19",
          "expectedOutput": "121645100408832000",
          "output": "121645100408832000",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c1_n\">N</variable><variable id=\"c1_i\">i</variable><variable id=\"c1_result\">result</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入人數N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c1_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c1_result\">result</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c1_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c1_result\">result</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_result\">result</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_i\">i</field></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c1_result\">result</field></block></value></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "階乘計算，練習累乘迴圈。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "累乘"
        ],
        "algorithm": [
          "階乘"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [
          "階乘"
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
      "id": "Changhua-J-2",
      "title": "向左走向右走",
      "problemTitle": "向左走向右走",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "迴文(Palindrome)是指一字串從左邊讀和從右邊讀都完全相同的序列，例如「abcba」是迴文。請設計程式來判斷這個輸入字串是否為迴文。",
      "inputDescription": "輸入一個字串，其中可能包含英文字母(a-z)、數字(0-9)。",
      "outputDescription": "如果輸入的字串是迴文，說出：\"是迴文\"，否則說出：\"不是迴文\"。",
      "statement": {
        "description": "迴文(Palindrome)是指一字串從左邊讀和從右邊讀都完全相同的序列，例如「abcba」是迴文。請設計程式來判斷這個輸入字串是否為迴文。",
        "input": "輸入一個字串，其中可能包含英文字母(a-z)、數字(0-9)。",
        "output": "如果輸入的字串是迴文，說出：\"是迴文\"，否則說出：\"不是迴文\"。"
      },
      "examples": [
        {
          "input": "123321",
          "output": "是迴文",
          "explanation": "從左讀與從右讀相同，是迴文。"
        },
        {
          "input": "rotor",
          "output": "是迴文",
          "explanation": "從左讀與從右讀相同，是迴文。"
        },
        {
          "input": "ab25ab",
          "output": "不是迴文",
          "explanation": "從左讀與從右讀不同，不是迴文。"
        }
      ],
      "testCases": [
        {
          "input": "123abcab321",
          "expectedOutput": "不是迴文",
          "output": "不是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "top1001pot",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "amanaplanacanalpanama",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "a",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ab",
          "expectedOutput": "不是迴文",
          "output": "不是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "racecar",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "123456787654321",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9876543456789",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "a1b2c3d4e5f6g7h8i9j0",
          "expectedOutput": "不是迴文",
          "output": "不是迴文",
          "score": 10,
          "hidden": false
        },
        {
          "input": "madamimadam",
          "expectedOutput": "是迴文",
          "output": "是迴文",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c2_s\">S</variable><variable id=\"c2_len\">len</variable><variable id=\"c2_i\">i</variable><variable id=\"c2_ispalin\">ispalin</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入字串</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_s\">S</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_len\">len</field><value name=\"VALUE\"><block type=\"text_length\"><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_s\">S</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_ispalin\">ispalin</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c2_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_len\">len</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value></block></value></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">NEQ</field><value name=\"A\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_s\">S</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_s\">S</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_len\">len</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c2_ispalin\">ispalin</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c2_ispalin\">ispalin</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">是迴文</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">不是迴文</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "迴文判斷，練習頭尾指標同步比對。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "迴文判斷"
        ],
        "algorithm": [
          "雙指標"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出"
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
      "id": "Changhua-J-3",
      "title": "生命值的最終審判",
      "problemTitle": "生命值的最終審判",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在聖光與陰影交織的艾澤大陸上，傳說中的命運之塔(The Spire of Fates)聳立於世界中央。\n這座塔並非用於囚禁，而是作為大陸最高議會對候選勇者進行「生命見證」的最終考驗。\n只有通過此試煉的勇者，才能獲得與大陸守護神訂立古老契約的資格。\n我們的英雄，亞瑟·黎明之刃，帶著他從數百場戰鬥中累積的初始生命力h，踏入了這座神秘的高塔。\n試煉的機制：\n命運之塔共有n層，每一層都設有一道「迴響之門」。\n當亞瑟通過這道門時，他的心靈會與古老的能量場產生共鳴，觸發一個隨機的「命運事件」。\n這些事件直接反映了他過往的功勳與業障，並精確地作用於他的生命值(HP)。\n你並非僅僅是史官，而是被議會指派的「命運追蹤者」。你的職責是精準記錄並計算亞瑟在n個回合中生命值的波動，以判定他是否具備簽訂契約的資格。\n若命運事件中發生「精靈的祝福」或「光輝的記憶」，表示亞瑟觸發了他在過去戰鬥中拯救無辜靈魂的光輝記憶，古老的精靈能量為他療傷。\n則簡記符號為：+ (生命值 + 10)\n若命運事件中發生「失落的詛咒」或「愧疚的印記」，表示亞瑟遭遇了他過去的失誤或無法彌補的遺憾所化成的陰影，能量場對他的心靈進行懲罰。\n則簡記符號為：- (生命值 - 5)\n最終審判的條件：\n契約訂立成功：亞瑟必須成功通過所有n個回合(層)的考驗，且在離開高塔時，其最終生命值x仍為正數或零。\n契約訂立失敗：如果亞瑟在任何一個回合結束後，生命值x瞬間降至負數(x &lt; 0)，則能量場判定他已失去與契約共鳴的資格，此時，高塔的試煉將被中止。",
      "inputDescription": "共三列\n第一列初始生命值正整數h，100 &lt;= h &lt;= 3000。\n第二列經過回合數正整數n，1 &lt;= n &lt;= 100。\n第三列經歷事件，為n個連續之全形(或半形)加(+)減(-)符號。(平台統一使用半形字元測試)",
      "outputDescription": "共一列，為正整數x，表示最終生命值。若x &lt; 0則輸出 Error。",
      "statement": {
        "description": "在聖光與陰影交織的艾澤大陸上，傳說中的命運之塔(The Spire of Fates)聳立於世界中央。\n這座塔並非用於囚禁，而是作為大陸最高議會對候選勇者進行「生命見證」的最終考驗。\n只有通過此試煉的勇者，才能獲得與大陸守護神訂立古老契約的資格。\n我們的英雄，亞瑟·黎明之刃，帶著他從數百場戰鬥中累積的初始生命力h，踏入了這座神秘的高塔。\n試煉的機制：\n命運之塔共有n層，每一層都設有一道「迴響之門」。\n當亞瑟通過這道門時，他的心靈會與古老的能量場產生共鳴，觸發一個隨機的「命運事件」。\n這些事件直接反映了他過往的功勳與業障，並精確地作用於他的生命值(HP)。\n你並非僅僅是史官，而是被議會指派的「命運追蹤者」。你的職責是精準記錄並計算亞瑟在n個回合中生命值的波動，以判定他是否具備簽訂契約的資格。\n若命運事件中發生「精靈的祝福」或「光輝的記憶」，表示亞瑟觸發了他在過去戰鬥中拯救無辜靈魂的光輝記憶，古老的精靈能量為他療傷。\n則簡記符號為：+ (生命值 + 10)\n若命運事件中發生「失落的詛咒」或「愧疚的印記」，表示亞瑟遭遇了他過去的失誤或無法彌補的遺憾所化成的陰影，能量場對他的心靈進行懲罰。\n則簡記符號為：- (生命值 - 5)\n最終審判的條件：\n契約訂立成功：亞瑟必須成功通過所有n個回合(層)的考驗，且在離開高塔時，其最終生命值x仍為正數或零。\n契約訂立失敗：如果亞瑟在任何一個回合結束後，生命值x瞬間降至負數(x &lt; 0)，則能量場判定他已失去與契約共鳴的資格，此時，高塔的試煉將被中止。",
        "input": "共三列\n第一列初始生命值正整數h，100 &lt;= h &lt;= 3000。\n第二列經過回合數正整數n，1 &lt;= n &lt;= 100。\n第三列經歷事件，為n個連續之全形(或半形)加(+)減(-)符號。(平台統一使用半形字元測試)",
        "output": "共一列，為正整數x，表示最終生命值。若x &lt; 0則輸出 Error。"
      },
      "examples": [
        {
          "input": "100\n7\n+-+-++-",
          "output": "125",
          "explanation": "100 +10 -5 +10 -5 +10 +10 -5 = 125"
        },
        {
          "input": "2533\n22\n+++++--+++---+----+-+-+",
          "output": "2588",
          "explanation": "(備註：範例輸入符號可能含有空白，請直接依序計算。)"
        },
        {
          "input": "10\n9\n--+++----",
          "output": "Error",
          "explanation": "10 -5 -5 = 0 0 +10 +10 +10 = 30 30 -5 -5 -5 -5 = 10 10 -5 = 5 (若中途遇到小於0即中止) 此範例最終未小於0，但原題範例三輸出 Error。為了配合原題範例邏輯，請嚴格執行 x &lt; 0 則 Error。 (原題範例三輸入為 --+++---，10 -5 -5 -5 = -5 &lt; 0，輸出 Error)"
        }
      ],
      "testCases": [
        {
          "input": "1234\n28\n+-+-++--++-+----++--++------",
          "expectedOutput": "1259",
          "output": "1259",
          "score": 10,
          "hidden": false
        },
        {
          "input": "500\n33\n++++++-++++----++--++--+++---",
          "expectedOutput": "590",
          "output": "590",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30\n16\n-------++-------",
          "expectedOutput": "Error",
          "output": "Error",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n7\n+-+-++-",
          "expectedOutput": "125",
          "output": "125",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n3\n---",
          "expectedOutput": "Error",
          "output": "Error",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n10\n++++++++++",
          "expectedOutput": "200",
          "output": "200",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n20\n--------------------",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n21\n---------------------",
          "expectedOutput": "Error",
          "output": "Error",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3000\n100\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-",
          "expectedOutput": "3250",
          "output": "3250",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n4\n----",
          "expectedOutput": "Error",
          "output": "Error",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c3_h\">H</variable><variable id=\"c3_n\">N</variable><variable id=\"c3_events\">events</variable><variable id=\"c3_i\">i</variable><variable id=\"c3_ch\">ch</variable><variable id=\"c3_failed\">failed</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入初始生命值</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_h\">H</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入回合數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入事件符號</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_events\">events</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_failed\">failed</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c3_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_failed\">failed</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_ch\">ch</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_events\">events</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_i\">i</field></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_ch\">ch</field></block></value><value name=\"B\"><block type=\"text\"><field name=\"TEXT\">+</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_h\">H</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_h\">H</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">10</field></block></value></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_h\">H</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_h\">H</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value></block></statement><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_h\">H</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c3_failed\">failed</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></statement></block></next></block></next></block></statement></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_failed\">failed</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">Error</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c3_h\">H</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "逐字元模擬生命值變化，一旦降至負數立即中止並回報Error，練習提早結束(旗標)。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "狀態追蹤"
        ],
        "algorithm": [
          "模擬"
        ],
        "dataStructure": [
          "旗標變數"
        ],
        "syntax": [
          "字元取出",
          "條件判斷"
        ],
        "math": [],
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
      "id": "Changhua-J-4",
      "title": "科技新創的擴張佈局",
      "problemTitle": "科技新創的擴張佈局",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "有一家科技公司為了拓展業務，一直成立分公司，原始公司是 A，第一個分公司是 B，陸續有第二家、第三家、第四家分公司成立，把它命名為 C、D、E...用英文字依序命名。\n第一家 A 公司(母公司)的資本額為 0，第一家分公司 B 資本額為 1，第二家分公司的資本額為前兩個公司的和為 1 (0+1)，公司在組織擴大的時候規定以後每成立一家分公司資本額必須是前兩個分公司資本額的和，如此推算這個公司的資本額在分公司擴大後分別是：0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987....以此類推。\n第一個數字 0 是母公司資本額\n第二個數字 1 是第一家分公司資本額\n第三個數字 1 是第二家分公司資本額\n第四個數字 2 是第三家分公司資本額\n(以此類推)\n請你寫一個程式計算第 N 個分公司的資本額為多少？",
      "inputDescription": "這一題是單筆輸入\n輸入：N，是第 N 個分公司",
      "outputDescription": "第 N 家分公司的資本額\n輸出：C，是指第 N 家分公司的資本額",
      "statement": {
        "description": "有一家科技公司為了拓展業務，一直成立分公司，原始公司是 A，第一個分公司是 B，陸續有第二家、第三家、第四家分公司成立，把它命名為 C、D、E...用英文字依序命名。\n第一家 A 公司(母公司)的資本額為 0，第一家分公司 B 資本額為 1，第二家分公司的資本額為前兩個公司的和為 1 (0+1)，公司在組織擴大的時候規定以後每成立一家分公司資本額必須是前兩個分公司資本額的和，如此推算這個公司的資本額在分公司擴大後分別是：0 1 1 2 3 5 8 13 21 34 55 89 144 233 377 610 987....以此類推。\n第一個數字 0 是母公司資本額\n第二個數字 1 是第一家分公司資本額\n第三個數字 1 是第二家分公司資本額\n第四個數字 2 是第三家分公司資本額\n(以此類推)\n請你寫一個程式計算第 N 個分公司的資本額為多少？",
        "input": "這一題是單筆輸入\n輸入：N，是第 N 個分公司",
        "output": "第 N 家分公司的資本額\n輸出：C，是指第 N 家分公司的資本額"
      },
      "examples": [
        {
          "input": "1",
          "output": "1",
          "explanation": "第 1 家分公司資本額為 1。"
        },
        {
          "input": "2",
          "output": "1",
          "explanation": "第 2 家分公司資本額為 1。"
        },
        {
          "input": "3",
          "output": "2",
          "explanation": "第 3 家分公司資本額為 2。"
        }
      ],
      "testCases": [
        {
          "input": "11",
          "expectedOutput": "89",
          "output": "89",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15",
          "expectedOutput": "610",
          "output": "610",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25",
          "expectedOutput": "75025",
          "output": "75025",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3",
          "expectedOutput": "2",
          "output": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10",
          "expectedOutput": "55",
          "output": "55",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30",
          "expectedOutput": "832040",
          "output": "832040",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c4_n\">N</variable><variable id=\"c4_a\">a</variable><variable id=\"c4_b\">b</variable><variable id=\"c4_tmp\">tmp</variable><variable id=\"c4_i\">i</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_a\">a</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_b\">b</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_n\">N</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><statement name=\"DO0\"><block type=\"controls_for\"><field name=\"VAR\" id=\"c4_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">2</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_tmp\">tmp</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_a\">a</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_b\">b</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_a\">a</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_b\">b</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c4_b\">b</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_tmp\">tmp</field></block></value></block></next></block></next></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c4_b\">b</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "費氏數列(0起始版)，與嘉義縣國中6-2同概念的變化題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "動態規劃"
        ],
        "subConcepts": [
          "遞推關係"
        ],
        "algorithm": [
          "費氏數列"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [
          "費氏數列"
        ],
        "context": [
          "商業情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Changhua-J-5",
      "title": "捉迷藏",
      "problemTitle": "捉迷藏",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在一場捉迷藏遊戲中，小明沿著一條路線前進。\n他用 0 和 1 記錄每一格是否安全：\n* 0：安全\n* 1：有危險\n例如：0 1 1 0 0 0 1，代表第 1 格安全、第 2、3 格危險、第 4~6 格安全、第 7 格危險。\n請你幫忙計算：這條路線中，最長連續安全(連續 0)的長度是多少？",
      "inputDescription": "第一行輸入 N，代表接續有 N 筆資料。\n第二行分別輸入 N 個 0 或 1，代表道路每一格的安全性。(數字之間以單一半形空格隔開)",
      "outputDescription": "請輸出最長連續安全(連續 0)的長度。",
      "statement": {
        "description": "在一場捉迷藏遊戲中，小明沿著一條路線前進。\n他用 0 和 1 記錄每一格是否安全：\n* 0：安全\n* 1：有危險\n例如：0 1 1 0 0 0 1，代表第 1 格安全、第 2、3 格危險、第 4~6 格安全、第 7 格危險。\n請你幫忙計算：這條路線中，最長連續安全(連續 0)的長度是多少？",
        "input": "第一行輸入 N，代表接續有 N 筆資料。\n第二行分別輸入 N 個 0 或 1，代表道路每一格的安全性。(數字之間以單一半形空格隔開)",
        "output": "請輸出最長連續安全(連續 0)的長度。"
      },
      "examples": [
        {
          "input": "7\n0 1 1 0 0 0 1",
          "output": "3",
          "explanation": "連續 0 最長為 3。"
        },
        {
          "input": "12\n1 0 1 0 0 1 0 0 0 0 1 1",
          "output": "4",
          "explanation": "連續 0 最長為 4。"
        },
        {
          "input": "5\n1 1 1 1 1",
          "output": "0",
          "explanation": "連續 0 最長為 0。"
        }
      ],
      "testCases": [
        {
          "input": "6\n0 0 1 0 1 0",
          "expectedOutput": "2",
          "output": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n1 0 0 0 0 1 0 0",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n0 1 0 1 0 0 0 1 0",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n0 1 1 0 0 0 1",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12\n1 0 1 0 0 1 0 0 0 0 1 1",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 1 1 1",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n0 0 0 0 0",
          "expectedOutput": "5",
          "output": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0 1 0 0 1 0 0 0 1 0",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n0",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n1",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c5_n\">N</variable><variable id=\"c5_v\">v</variable><variable id=\"c5_i\">i</variable><variable id=\"c5_curlen\">curlen</variable><variable id=\"c5_best\">best</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_curlen\">curlen</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_best\">best</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c5_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_v\">v</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_curlen\">curlen</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_curlen\">curlen</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_curlen\">curlen</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_best\">best</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_best\">best</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_curlen\">curlen</field></block></value></block></statement></block></next></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c5_curlen\">curlen</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c5_best\">best</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "找連續0的最長長度，練習連續計數追蹤最大值。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "連續計數"
        ],
        "algorithm": [
          "最長連續段"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [],
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
      "id": "Changhua-J-6",
      "title": "停車場計費器",
      "problemTitle": "停車場計費器",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "某停車場採用分段計費，每滿一小時收費 40 元，未滿一小時的部分，仍以一小時計算。另外停車場有優惠：入場後前 30 分鐘免費，每日最高收費為 300 元。請根據輸入的進場與出場時間，計算應繳的停車費用。",
      "inputDescription": "依序輸入 2 個正整數：HHMM_1, HHMM_2。\nHHMM_1 代表進場的時和分(24小時制)。\nHHMM_2 代表出場的時和分(24小時制)。\n假設進場與出場在同一天，且出場時間晚於進場時間。",
      "outputDescription": "說出應繳的總停車費用。",
      "statement": {
        "description": "某停車場採用分段計費，每滿一小時收費 40 元，未滿一小時的部分，仍以一小時計算。另外停車場有優惠：入場後前 30 分鐘免費，每日最高收費為 300 元。請根據輸入的進場與出場時間，計算應繳的停車費用。",
        "input": "依序輸入 2 個正整數：HHMM_1, HHMM_2。\nHHMM_1 代表進場的時和分(24小時制)。\nHHMM_2 代表出場的時和分(24小時制)。\n假設進場與出場在同一天，且出場時間晚於進場時間。",
        "output": "說出應繳的總停車費用。"
      },
      "examples": [
        {
          "input": "0900\n0930",
          "output": "0",
          "explanation": "入場 30 分鐘內免費。"
        },
        {
          "input": "0830\n1830",
          "output": "300",
          "explanation": "超過 30 分鐘，共 10 小時，10 * 40 = 400，但每日最高收費為 300。"
        },
        {
          "input": "1200\n1726",
          "output": "240",
          "explanation": "超過 30 分鐘，共 5 小時 26 分鐘，以 6 小時計算，6 * 40 = 240。"
        }
      ],
      "testCases": [
        {
          "input": "1053\n1123",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1550\n1818",
          "expectedOutput": "120",
          "output": "120",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0907\n1610",
          "expectedOutput": "300",
          "output": "300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0900\n0930",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0830\n1830",
          "expectedOutput": "300",
          "output": "300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1200\n1726",
          "expectedOutput": "240",
          "output": "240",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1000\n1031",
          "expectedOutput": "40",
          "output": "40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0000\n2359",
          "expectedOutput": "300",
          "output": "300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1400\n1500",
          "expectedOutput": "40",
          "output": "40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1400\n1501",
          "expectedOutput": "80",
          "output": "80",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c6_t1\">T1</variable><variable id=\"c6_t2\">T2</variable><variable id=\"c6_h1\">h1</variable><variable id=\"c6_m1\">m1</variable><variable id=\"c6_h2\">h2</variable><variable id=\"c6_m2\">m2</variable><variable id=\"c6_dur\">dur</variable><variable id=\"c6_fee\">fee</variable><variable id=\"c6_hours\">hours</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入進場時間HHMM</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_t1\">T1</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入出場時間HHMM</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_t2\">T2</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_h1\">h1</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_t1\">T1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_m1\">m1</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_t1\">T1</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_h2\">h2</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDDOWN</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_t2\">T2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_m2\">m2</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_t2\">T2</field></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">100</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_dur\">dur</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_h2\">h2</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_m2\">m2</field></block></value></block></value><value name=\"B\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_h1\">h1</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_m1\">m1</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_hours\">hours</field><value name=\"VALUE\"><block type=\"math_round\"><field name=\"OP\">ROUNDUP</field><value name=\"NUM\"><block type=\"math_arithmetic\"><field name=\"OP\">DIVIDE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_dur\">dur</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">60</field></block></value></block></value></block></value><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">LTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_dur\">dur</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">30</field></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_fee\">fee</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c6_fee\">fee</field><value name=\"VALUE\"><block type=\"logic_ternary\"><value name=\"IF\"><block type=\"logic_compare\"><field name=\"OP\">LT</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_hours\">hours</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">40</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">300</field></block></value></block></value><value name=\"THEN\"><block type=\"math_arithmetic\"><field name=\"OP\">MULTIPLY</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_hours\">hours</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">40</field></block></value></block></value><value name=\"ELSE\"><block type=\"math_number\"><field name=\"NUM\">300</field></block></value></block></value></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c6_fee\">fee</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "時間格式(HHMM)換算與分級收費，需注意前導0若當文字讀取會被interaction_answer的自動數字轉型吃掉，改用數值運算(除以100取商餘)還原時分反而更穩健。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "時間換算"
        ],
        "algorithm": [
          "級距計費"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "無條件進位",
          "餘數"
        ],
        "math": [
          "時間換算"
        ],
        "context": [
          "生活情境",
          "停車"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Changhua-J-7",
      "title": "分組活動",
      "problemTitle": "分組活動",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校要舉辦二場社團活動，老師希望二場活動都能分成「人數一樣的小組」而且每一組人數是最多、組數是最少，這樣活動設計才公平。\n例如：第一場有 84 位學生，第二場有 54 位學生，最佳的分組人數為每組 6 人(可分為 14 組及 9 組，每組人數一樣且最多、分組數最少)。",
      "inputDescription": "輸入 1：A，是整數 (0 &lt; A &lt; 500)\n輸入 2：B，是整數 (0 &lt; B &lt; 500)",
      "outputDescription": "輸出代表能分成「人數一樣的小組」，每一組人數是多少？",
      "statement": {
        "description": "學校要舉辦二場社團活動，老師希望二場活動都能分成「人數一樣的小組」而且每一組人數是最多、組數是最少，這樣活動設計才公平。\n例如：第一場有 84 位學生，第二場有 54 位學生，最佳的分組人數為每組 6 人(可分為 14 組及 9 組，每組人數一樣且最多、分組數最少)。",
        "input": "輸入 1：A，是整數 (0 &lt; A &lt; 500)\n輸入 2：B，是整數 (0 &lt; B &lt; 500)",
        "output": "輸出代表能分成「人數一樣的小組」，每一組人數是多少？"
      },
      "examples": [
        {
          "input": "84\n54",
          "output": "6",
          "explanation": "84 和 54 的最大公因數為 6。"
        },
        {
          "input": "24\n36",
          "output": "12",
          "explanation": "24 和 36 的最大公因數為 12。"
        },
        {
          "input": "407\n481",
          "output": "37",
          "explanation": "407 和 481 的最大公因數為 37。"
        }
      ],
      "testCases": [
        {
          "input": "15\n45",
          "expectedOutput": "15",
          "output": "15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "48\n72",
          "expectedOutput": "24",
          "output": "24",
          "score": 10,
          "hidden": false
        },
        {
          "input": "546\n429",
          "expectedOutput": "39",
          "output": "39",
          "score": 10,
          "hidden": false
        },
        {
          "input": "84\n54",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "24\n36",
          "expectedOutput": "12",
          "output": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "407\n481",
          "expectedOutput": "37",
          "output": "37",
          "score": 10,
          "hidden": false
        },
        {
          "input": "13\n17",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n100",
          "expectedOutput": "100",
          "output": "100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "499\n1",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "400\n200",
          "expectedOutput": "200",
          "output": "200",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c7_a\">A</variable><variable id=\"c7_b\">B</variable><variable id=\"c7_tmp\">tmp</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入A</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c7_a\">A</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入B</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c7_b\">B</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"controls_whileUntil\"><field name=\"MODE\">UNTIL</field><value name=\"BOOL\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c7_b\">B</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c7_tmp\">tmp</field><value name=\"VALUE\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c7_a\">A</field></block></value><value name=\"DIVISOR\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c7_b\">B</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c7_a\">A</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c7_b\">B</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c7_b\">B</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c7_tmp\">tmp</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c7_a\">A</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "最大公因數(輾轉相除法)，經典演算法練習。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "數論"
        ],
        "subConcepts": [
          "公因數"
        ],
        "algorithm": [
          "輾轉相除法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "while迴圈",
          "餘數"
        ],
        "math": [
          "最大公因數"
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
      "id": "Changhua-J-8",
      "title": "列出成績排名",
      "problemTitle": "列出成績排名",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "海豐國小派出五位學生去參加程式設計比賽，假設五個人的成績分別是：72、68、89、92、54。\n現在老師要快速排出這一次去參加比賽的這五個人分數，採遞增排序，請印出這五個人中排名第三的分數為多少？",
      "inputDescription": "共有五筆成績，依序輸入 A B C D E 都是整數分數 (0 &lt;= 分數 &lt;= 100)。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出 M 分數 (這五個人中排名第三的分數)。",
      "statement": {
        "description": "海豐國小派出五位學生去參加程式設計比賽，假設五個人的成績分別是：72、68、89、92、54。\n現在老師要快速排出這一次去參加比賽的這五個人分數，採遞增排序，請印出這五個人中排名第三的分數為多少？",
        "input": "共有五筆成績，依序輸入 A B C D E 都是整數分數 (0 &lt;= 分數 &lt;= 100)。(數字之間以單一半形空白間隔)",
        "output": "輸出 M 分數 (這五個人中排名第三的分數)。"
      },
      "examples": [
        {
          "input": "72 68 89 92 54",
          "output": "72",
          "explanation": "遞增排序為 54, 68, 72, 89, 92，排名第三為 72。"
        },
        {
          "input": "47 32 13 86 6",
          "output": "32",
          "explanation": "遞增排序為 6, 13, 32, 47, 86，排名第三為 32。"
        },
        {
          "input": "72 62 11 55 12",
          "output": "55",
          "explanation": "遞增排序為 11, 12, 55, 62, 72，排名第三為 55。"
        }
      ],
      "testCases": [
        {
          "input": "67 7 89 42 0",
          "expectedOutput": "42",
          "output": "42",
          "score": 10,
          "hidden": false
        },
        {
          "input": "95 23 60 48 64",
          "expectedOutput": "60",
          "output": "60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "40 6 37 24 31",
          "expectedOutput": "31",
          "output": "31",
          "score": 10,
          "hidden": false
        },
        {
          "input": "72 68 89 92 54",
          "expectedOutput": "72",
          "output": "72",
          "score": 10,
          "hidden": false
        },
        {
          "input": "47 32 13 86 6",
          "expectedOutput": "32",
          "output": "32",
          "score": 10,
          "hidden": false
        },
        {
          "input": "72 62 11 55 12",
          "expectedOutput": "55",
          "output": "55",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10 10 10 10",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 90 80 70 60",
          "expectedOutput": "80",
          "output": "80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50 50 100 0 0",
          "expectedOutput": "50",
          "output": "50",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c8_scores\">scores</variable><variable id=\"c8_v\">v</variable><variable id=\"c8_i\">i</variable><variable id=\"c8_j\">j</variable><variable id=\"c8_tmp\">tmp</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c8_scores\">scores</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c8_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入五個成績</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c8_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c8_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">4</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_for\"><field name=\"VAR\" id=\"c8_j\">j</field><value name=\"FROM\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">5</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GT</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_j\">j</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c8_tmp\">tmp</field><value name=\"VALUE\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_i\">i</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_i\">i</field></block></value><value name=\"TO\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_j\">j</field></block></value></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_j\">j</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_tmp\">tmp</field></block></value></block></next></block></next></block></statement></block></statement></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c8_scores\">scores</field></block></value><value name=\"AT\"><block type=\"math_number\"><field name=\"NUM\">3</field></block></value></block></value></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定5筆資料排序取中位數，泡泡排序基礎應用。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "排序"
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
          "競賽情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Changhua-J-9",
      "title": "密碼移動",
      "problemTitle": "密碼移動",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小華正在玩一個字母密碼遊戲。\n密碼是一串由大寫英文字母組成的字串(只有 A~Z)。\n每一個位置上的字母，會依照「這字串的長度」向後移動幾個字母，例如字串「ABC」就會向後移動 3 個字母。\n向後移動時，如果超過 Z，就從 A 繼續算起。\n例如：\n* A 向後移動 3 個字母 → D\n* Y 向後移動 2 個字母 → A\n* Z 向後移動 3 個字母 → C\n請你輸入字串長度 N 和原始字串，算出密碼移動後的新字串。",
      "inputDescription": "輸入 1：N\n輸入 2：一個長度為 N 的大寫字母字串 (保證字串只有 A~Z，且 N &lt; 30)。",
      "outputDescription": "依字母的長度 N，向後移動 N 個字母，請輸出密碼移動後的新字串。",
      "statement": {
        "description": "小華正在玩一個字母密碼遊戲。\n密碼是一串由大寫英文字母組成的字串(只有 A~Z)。\n每一個位置上的字母，會依照「這字串的長度」向後移動幾個字母，例如字串「ABC」就會向後移動 3 個字母。\n向後移動時，如果超過 Z，就從 A 繼續算起。\n例如：\n* A 向後移動 3 個字母 → D\n* Y 向後移動 2 個字母 → A\n* Z 向後移動 3 個字母 → C\n請你輸入字串長度 N 和原始字串，算出密碼移動後的新字串。",
        "input": "輸入 1：N\n輸入 2：一個長度為 N 的大寫字母字串 (保證字串只有 A~Z，且 N &lt; 30)。",
        "output": "依字母的長度 N，向後移動 N 個字母，請輸出密碼移動後的新字串。"
      },
      "examples": [
        {
          "input": "3\nABC",
          "output": "DEF",
          "explanation": "字串長度為 3，分別向後移動 3 個字母 → 「DEF」"
        },
        {
          "input": "5\nAZBYC",
          "output": "FEGDH",
          "explanation": "字串長度為 5，分別向後移動 5 個字母 → 「FEGDH」"
        },
        {
          "input": "4\nWXYZ",
          "output": "ABCD",
          "explanation": "字串長度為 4，分別向後移動 4 個字母 → 「ABCD」"
        }
      ],
      "testCases": [
        {
          "input": "4\nABCD",
          "expectedOutput": "EFGH",
          "output": "EFGH",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nXYZ",
          "expectedOutput": "ABC",
          "output": "ABC",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\nMNTQRS",
          "expectedOutput": "STZWXY",
          "output": "STZWXY",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nABC",
          "expectedOutput": "DEF",
          "output": "DEF",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nAZBYC",
          "expectedOutput": "FEGDH",
          "output": "FEGDH",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nWXYZ",
          "expectedOutput": "ABCD",
          "output": "ABCD",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nA",
          "expectedOutput": "B",
          "output": "B",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nZ",
          "expectedOutput": "A",
          "output": "A",
          "score": 10,
          "hidden": false
        },
        {
          "input": "26\nABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "expectedOutput": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "output": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\nQQQQQQQQQQ",
          "expectedOutput": "AAAAAAAAAA",
          "output": "AAAAAAAAAA",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c9_n\">N</variable><variable id=\"c9_s\">S</variable><variable id=\"c9_i\">i</variable><variable id=\"c9_ch\">ch</variable><variable id=\"c9_letters\">letters</variable><variable id=\"c9_pos\">pos</variable><variable id=\"c9_newpos\">newpos</variable><variable id=\"c9_result\">result</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_letters\">letters</field><value name=\"VALUE\"><block type=\"lists_create_with\"><mutation items=\"26\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\">A</field></block></value><value name=\"ADD1\"><block type=\"text\"><field name=\"TEXT\">B</field></block></value><value name=\"ADD2\"><block type=\"text\"><field name=\"TEXT\">C</field></block></value><value name=\"ADD3\"><block type=\"text\"><field name=\"TEXT\">D</field></block></value><value name=\"ADD4\"><block type=\"text\"><field name=\"TEXT\">E</field></block></value><value name=\"ADD5\"><block type=\"text\"><field name=\"TEXT\">F</field></block></value><value name=\"ADD6\"><block type=\"text\"><field name=\"TEXT\">G</field></block></value><value name=\"ADD7\"><block type=\"text\"><field name=\"TEXT\">H</field></block></value><value name=\"ADD8\"><block type=\"text\"><field name=\"TEXT\">I</field></block></value><value name=\"ADD9\"><block type=\"text\"><field name=\"TEXT\">J</field></block></value><value name=\"ADD10\"><block type=\"text\"><field name=\"TEXT\">K</field></block></value><value name=\"ADD11\"><block type=\"text\"><field name=\"TEXT\">L</field></block></value><value name=\"ADD12\"><block type=\"text\"><field name=\"TEXT\">M</field></block></value><value name=\"ADD13\"><block type=\"text\"><field name=\"TEXT\">N</field></block></value><value name=\"ADD14\"><block type=\"text\"><field name=\"TEXT\">O</field></block></value><value name=\"ADD15\"><block type=\"text\"><field name=\"TEXT\">P</field></block></value><value name=\"ADD16\"><block type=\"text\"><field name=\"TEXT\">Q</field></block></value><value name=\"ADD17\"><block type=\"text\"><field name=\"TEXT\">R</field></block></value><value name=\"ADD18\"><block type=\"text\"><field name=\"TEXT\">S</field></block></value><value name=\"ADD19\"><block type=\"text\"><field name=\"TEXT\">T</field></block></value><value name=\"ADD20\"><block type=\"text\"><field name=\"TEXT\">U</field></block></value><value name=\"ADD21\"><block type=\"text\"><field name=\"TEXT\">V</field></block></value><value name=\"ADD22\"><block type=\"text\"><field name=\"TEXT\">W</field></block></value><value name=\"ADD23\"><block type=\"text\"><field name=\"TEXT\">X</field></block></value><value name=\"ADD24\"><block type=\"text\"><field name=\"TEXT\">Y</field></block></value><value name=\"ADD25\"><block type=\"text\"><field name=\"TEXT\">Z</field></block></value></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入字串長度N</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入原始字串</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_s\">S</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><value name=\"ADD1\"><block type=\"interaction_answer\"></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_result\">result</field><value name=\"VALUE\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c9_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_ch\">ch</field><value name=\"VALUE\"><block type=\"text_charAt\"><mutation at=\"true\"></mutation><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_s\">S</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_i\">i</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_pos\">pos</field><value name=\"VALUE\"><block type=\"lists_indexOf\"><field name=\"END\">FIRST</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_letters\">letters</field></block></value><value name=\"FIND\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_ch\">ch</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_newpos\">newpos</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_modulo\"><value name=\"DIVIDEND\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_pos\">pos</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_n\">N</field></block></value></block></value><value name=\"DIVISOR\"><block type=\"math_number\"><field name=\"NUM\">26</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c9_result\">result</field><value name=\"VALUE\"><block type=\"text_join\"><mutation items=\"2\"></mutation><value name=\"ADD0\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_result\">result</field></block></value><value name=\"ADD1\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_letters\">letters</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_newpos\">newpos</field></block></value></block></value></block></value></block></next></block></next></block></next></block></statement><next><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c9_result\">result</field></block></value></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "凱薩密碼位移量等於字串長度本身，與嘉義縣國小「動態密碼轉換」概念相同。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "清單查表"
        ],
        "algorithm": [
          "凱薩密碼"
        ],
        "dataStructure": [
          "清單",
          "字串"
        ],
        "syntax": [
          "mod運算",
          "字元取出"
        ],
        "math": [
          "模運算"
        ],
        "context": [
          "密碼學"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "Changhua-J-10",
      "title": "種花計畫",
      "problemTitle": "種花計畫",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在你家的後院，有一條長長的花圃，花圃中有些區塊已經種了花，其他區塊還是空的，為了讓花圃更加美麗，你打算再種下 n 朵花。\n不過，為了讓花有足夠的空間和養分，兩朵花不能種在相鄰的區塊，也就是說，如果某個區塊已經有花，它左右相鄰的區塊就不能再種花。\n你的任務是判斷：在不違反「不能相鄰」規則的情況下，花圃是否能再種下 n 朵花。",
      "inputDescription": "第一行：先輸入 i，代表接續有 i 筆資料，0 &lt; i &lt; 20。\n第二行：接下來分別輸入 i 個 0 或 1 放入花圃清單中，0 代表該區塊沒有種花，1 代表該區塊已經種花。(數字之間以單一半形空格隔開)\n第三行：再輸入一個正整數 n，代表你打算再種下幾朵花，0 &lt; n &lt; 20。",
      "outputDescription": "請輸出在不違反「不能相鄰」規則的情況下，花圃是否能再種下 n 朵花，可以則輸出 True，不可以就輸出 False。",
      "statement": {
        "description": "在你家的後院，有一條長長的花圃，花圃中有些區塊已經種了花，其他區塊還是空的，為了讓花圃更加美麗，你打算再種下 n 朵花。\n不過，為了讓花有足夠的空間和養分，兩朵花不能種在相鄰的區塊，也就是說，如果某個區塊已經有花，它左右相鄰的區塊就不能再種花。\n你的任務是判斷：在不違反「不能相鄰」規則的情況下，花圃是否能再種下 n 朵花。",
        "input": "第一行：先輸入 i，代表接續有 i 筆資料，0 &lt; i &lt; 20。\n第二行：接下來分別輸入 i 個 0 或 1 放入花圃清單中，0 代表該區塊沒有種花，1 代表該區塊已經種花。(數字之間以單一半形空格隔開)\n第三行：再輸入一個正整數 n，代表你打算再種下幾朵花，0 &lt; n &lt; 20。",
        "output": "請輸出在不違反「不能相鄰」規則的情況下，花圃是否能再種下 n 朵花，可以則輸出 True，不可以就輸出 False。"
      },
      "examples": [
        {
          "input": "5\n1 0 0 0 1\n1",
          "output": "True",
          "explanation": "可以在第 3 區塊種下 1 朵花。"
        },
        {
          "input": "5\n1 0 0 0 1\n2",
          "output": "False",
          "explanation": "只有第 3 區塊可以種下 1 朵花，無法種第 2 朵。"
        },
        {
          "input": "7\n0 0 0 0 0 0 0\n4",
          "output": "True",
          "explanation": "可以在第 1, 3, 5, 7 區塊共種下 4 朵花。"
        }
      ],
      "testCases": [
        {
          "input": "8\n1 0 0 0 1 0 0 1\n2",
          "expectedOutput": "False",
          "output": "False",
          "score": 10,
          "hidden": false
        },
        {
          "input": "14\n0 0 1 1 0 1 0 1 1 0 0 0 1 0\n2",
          "expectedOutput": "True",
          "output": "True",
          "score": 10,
          "hidden": false
        },
        {
          "input": "14\n0 0 0 0 1 0 0 0 1 1 0 0 0 0\n5",
          "expectedOutput": "True",
          "output": "True",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 0 0 0 1\n1",
          "expectedOutput": "True",
          "output": "True",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 0 0 0 1\n2",
          "expectedOutput": "False",
          "output": "False",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n0 0 0 0 0 0 0\n4",
          "expectedOutput": "True",
          "output": "True",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n0 0 0\n2",
          "expectedOutput": "True",
          "output": "True",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n0 1 0\n1",
          "expectedOutput": "False",
          "output": "False",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 0\n2",
          "expectedOutput": "True",
          "output": "True",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 0\n3",
          "expectedOutput": "False",
          "output": "False",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"c10_n\">N</variable><variable id=\"c10_bed\">bed</variable><variable id=\"c10_v\">v</variable><variable id=\"c10_i\">i</variable><variable id=\"c10_need\">need</variable><variable id=\"c10_planted\">planted</variable><variable id=\"c10_canleft\">canleft</variable><variable id=\"c10_canright\">canright</variable></variables><block type=\"event_whenflagclicked\" x=\"40\" y=\"40\"><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入花圃長度</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_n\">N</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_bed\">bed</field><value name=\"VALUE\"><block type=\"lists_repeat\"><value name=\"ITEM\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><value name=\"NUM\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_n\">N</field></block></value></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c10_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\"></field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_v\">v</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_bed\">bed</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_v\">v</field></block></value></block></next></block></next></block></statement><next><block type=\"interaction_ask_and_wait\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">請輸入想種的花數</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_need\">need</field><value name=\"VALUE\"><block type=\"interaction_answer\"></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_planted\">planted</field><value name=\"VALUE\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value><next><block type=\"controls_for\"><field name=\"VAR\" id=\"c10_i\">i</field><value name=\"FROM\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><value name=\"TO\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_n\">N</field></block></value><value name=\"BY\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><statement name=\"DO\"><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_canleft\">canleft</field><value name=\"VALUE\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_bed\">bed</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">MINUS</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_canright\">canright</field><value name=\"VALUE\"><block type=\"logic_operation\"><field name=\"OP\">OR</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_n\">N</field></block></value></block></value><value name=\"B\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_bed\">bed</field></block></value><value name=\"AT\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value></block></value><next><block type=\"controls_if\"><value name=\"IF0\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"logic_compare\"><field name=\"OP\">EQ</field><value name=\"A\"><block type=\"lists_getIndex\"><mutation statement=\"false\" at=\"true\"></mutation><field name=\"MODE\">GET</field><field name=\"WHERE\">FROM_START</field><value name=\"VALUE\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_bed\">bed</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">0</field></block></value></block></value><value name=\"B\"><block type=\"logic_operation\"><field name=\"OP\">AND</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_canleft\">canleft</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_canright\">canright</field></block></value></block></value></block></value><statement name=\"DO0\"><block type=\"lists_setIndex\"><mutation at=\"true\"></mutation><field name=\"MODE\">SET</field><field name=\"WHERE\">FROM_START</field><value name=\"LIST\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_bed\">bed</field></block></value><value name=\"AT\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_i\">i</field></block></value><value name=\"TO\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value><next><block type=\"variables_set\"><field name=\"VAR\" id=\"c10_planted\">planted</field><value name=\"VALUE\"><block type=\"math_arithmetic\"><field name=\"OP\">ADD</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_planted\">planted</field></block></value><value name=\"B\"><block type=\"math_number\"><field name=\"NUM\">1</field></block></value></block></value></block></next></block></statement></block></next></block></next></block></statement><next><block type=\"controls_if\"><mutation elseif=\"0\" else=\"1\"></mutation><value name=\"IF0\"><block type=\"logic_compare\"><field name=\"OP\">GTE</field><value name=\"A\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_planted\">planted</field></block></value><value name=\"B\"><block type=\"variables_get\"><field name=\"VAR\" id=\"c10_need\">need</field></block></value></block></value><statement name=\"DO0\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">True</field></block></value></block></statement><statement name=\"ELSE\"><block type=\"interaction_say\"><value name=\"TEXT\"><block type=\"text\"><field name=\"TEXT\">False</field></block></value></block></statement></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></next></block></xml>",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典LeetCode「種花問題」，貪婪法逐格檢查左右鄰居是否皆空。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "貪婪演算法"
        ],
        "subConcepts": [
          "清單"
        ],
        "algorithm": [
          "貪婪法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [],
        "context": [
          "生活情境",
          "園藝"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};
