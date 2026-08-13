// 競賽模式版本，2026-08-13由 114JHualien.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPJ06",
  "title": "114-花蓮縣國中（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "花蓮縣114學年度國中組資訊科技競賽練習題，涵蓋整數除法、連續段追蹤與經典區間排程貪婪演算法。",
  "tasks": [
    {
      "id": "114TCPJ06-1",
      "title": "公車時刻表",
      "problemTitle": "公車時刻表",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "前往學校的公車路線非常準時，從早上06:00 發出首班車，之後每隔M 分鐘發一班車。現在小明看手錶，時間是H點S分。請問小明最少還需要等幾分鐘，下一班車才會來？",
      "inputDescription": "輸入三個整數H, S, M。\n假設小明到達時間一定在末班車之前。",
      "outputDescription": "若小明到達時剛好有車(等待時間為0)，請輸出0。否則輸出最少需要等待的分鐘數。",
      "statement": {
        "description": "前往學校的公車路線非常準時，從早上06:00 發出首班車，之後每隔M 分鐘發一班車。現在小明看手錶，時間是H點S分。請問小明最少還需要等幾分鐘，下一班車才會來？",
        "input": "輸入三個整數H, S, M。\n假設小明到達時間一定在末班車之前。",
        "output": "若小明到達時剛好有車(等待時間為0)，請輸出0。否則輸出最少需要等待的分鐘數。"
      },
      "examples": [
        {
          "input": "6 15 20",
          "output": "5",
          "explanation": "首班 06:00，下一班 06:20。現在 06:15，需再等5分鐘。"
        },
        {
          "input": "5 50 20",
          "output": "10",
          "explanation": "首班車 06:00才發車。小明 05:50到，必須等到06:00。"
        }
      ],
      "testCases": [
        {
          "input": "6 15 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 50 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 0 15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 45 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 0 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 10 45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 30 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 31 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12 0 120",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11 59 120",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "整數除法與餘數的基礎應用，計算距下一班車的等待時間。",
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
          "餘數"
        ],
        "math": [
          "整數除法"
        ],
        "context": [
          "生活情境",
          "交通"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ06",
      "courseName": "114-花蓮縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ06-2",
      "title": "連續成績進步分析",
      "problemTitle": "連續成績進步分析",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "老師連續記錄了你N天的測驗成績，依照時間順序存放在一份成績清單中。老師希望透過這些資料，了解你在學習過程中是否有持續進步的表現。\n這份成績清單中一定會有N筆成績資料，代表第1天到第N天的測驗成績。\n請從第2天開始，將每天的成績與前一天的成績進行比較，並依下列規則判斷：\n• 若當天成績大於前一天成績，則視為「成績進步」\n• 若當天成績沒有比前一天高，則中斷連續進步的計算\n• 請找出並輸出「連續成績進步」的最長天數\n注意：第1天沒有前一天可比較，因此不列入計算。",
      "inputDescription": "第一行輸入一個整數 N。\n第二行輸入 N 個整數，代表每一天的測驗成績，中間以空白間隔。",
      "outputDescription": "輸出一個整數，代表「連續成績進步」的最長天數(次數)。",
      "statement": {
        "description": "老師連續記錄了你N天的測驗成績，依照時間順序存放在一份成績清單中。老師希望透過這些資料，了解你在學習過程中是否有持續進步的表現。\n這份成績清單中一定會有N筆成績資料，代表第1天到第N天的測驗成績。\n請從第2天開始，將每天的成績與前一天的成績進行比較，並依下列規則判斷：\n• 若當天成績大於前一天成績，則視為「成績進步」\n• 若當天成績沒有比前一天高，則中斷連續進步的計算\n• 請找出並輸出「連續成績進步」的最長天數\n注意：第1天沒有前一天可比較，因此不列入計算。",
        "input": "第一行輸入一個整數 N。\n第二行輸入 N 個整數，代表每一天的測驗成績，中間以空白間隔。",
        "output": "輸出一個整數，代表「連續成績進步」的最長天數(次數)。"
      },
      "examples": [
        {
          "input": "5\n60 65 70 68 72",
          "output": "2",
          "explanation": "連續進步區段： 1. 60 -> 65 -> 70(連續2次進步) 2. 68 -> 72(連續1次進步) 最大值為2。"
        },
        {
          "input": "5\n50 60 55 56 57",
          "output": "2",
          "explanation": "連續進步區段： 1. 50 -> 60(連續1次進步) 2. 55 -> 56 -> 57(連續2次進步) 最大值為2。"
        }
      ],
      "testCases": [
        {
          "input": "5\n60 65 70 68 72",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n50 60 55 56 57",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n100 90 90 80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n10 20 30 40 50 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n80 85 90 88 89 90 95 95 96 98",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 2 1 2 1 2 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n1 2 3 4 5 4 5 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n0 0 1 1 2",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "找連續嚴格遞增的最長次數，練習連續狀態追蹤。",
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
          "清單"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [],
        "context": [
          "教育情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ06",
      "courseName": "114-花蓮縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ06-3",
      "title": "卡住的鍵盤",
      "problemTitle": "卡住的鍵盤",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小明的鍵盤壞掉了，有時候按一個鍵，螢幕上卻會連續出現好幾個一樣的字(例如按A變成AAAA)。現在給你一串小明打出來的亂碼，請你幫忙分析看看，是哪一個按鍵卡住最久(連續出現最多次)？",
      "inputDescription": "一個包含各種大寫英文字母的字串S(例如：AAABCCCCDD)\n【規則】\n1. 請找出字串中，連續出現最多次的字母是哪一個。\n2. 輸出該字母以及它連續出現的次數。\n3. 平手規則：如果有兩個字母的連續次數一樣多，請輸出最先出現的那一個。",
      "outputDescription": "請輸出「該字母」與「次數」，中間用空白隔開。",
      "statement": {
        "description": "小明的鍵盤壞掉了，有時候按一個鍵，螢幕上卻會連續出現好幾個一樣的字(例如按A變成AAAA)。現在給你一串小明打出來的亂碼，請你幫忙分析看看，是哪一個按鍵卡住最久(連續出現最多次)？",
        "input": "一個包含各種大寫英文字母的字串S(例如：AAABCCCCDD)\n【規則】\n1. 請找出字串中，連續出現最多次的字母是哪一個。\n2. 輸出該字母以及它連續出現的次數。\n3. 平手規則：如果有兩個字母的連續次數一樣多，請輸出最先出現的那一個。",
        "output": "請輸出「該字母」與「次數」，中間用空白隔開。"
      },
      "examples": [
        {
          "input": "WWWWWWWWWWWWBBWW",
          "output": "W 12",
          "explanation": "前面的W 連續出現12次，是最多的。"
        },
        {
          "input": "AAABCCCC",
          "output": "C 4",
          "explanation": "C出現4次是最多的。"
        }
      ],
      "testCases": [
        {
          "input": "WWWWWWWWWWWWBBWW",
          "score": 10,
          "hidden": false
        },
        {
          "input": "AAABCCCC",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ABCDE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "AABBCC",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ZZZZZZZZZZ",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ABBBBAAACC",
          "score": 10,
          "hidden": false
        },
        {
          "input": "XYYYZZZZX",
          "score": 10,
          "hidden": false
        },
        {
          "input": "PQQQQQQRRRRRR",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A",
          "score": 10,
          "hidden": false
        },
        {
          "input": "MMNNNOOOOPPPPPPPPP",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "找連續出現最多次的字元(平手取最先出現者)，練習用嚴格大於更新確保平手時保留先手。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "連續計數"
        ],
        "algorithm": [
          "最長連續段"
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
      },
      "courseCode": "114TCPJ06",
      "courseName": "114-花蓮縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ06-4",
      "title": "外送員的接單策略",
      "problemTitle": "外送員的接單策略",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "你是外送平台的演算法工程師，需要設計一套系統來幫助外送員計算「最多接單數量」。已知系統中有N張待接的訂單，每一張訂單都有固定的「開始時間」與「結束時間」。外送員同一時間只能執行一張訂單(不能同時送兩單)。請問在時間不衝突的情況下，這位外送員最多可以接下幾張訂單？\n【重要規則】\n1. 如果一張訂單的「結束時間」剛好等於下一張訂單的「開始時間」，則視為不衝突，可以順利銜接。例如：接了(1,3)的單，可以馬上接(3,5)的單。\n2. 你的目標是「數量最大化」，而不是總時長最大化。\n3. 提示：輸入的訂單未經過排序，你可能需要自行整理資料才能找出最佳解。",
      "inputDescription": "第一行輸入一個正整數N (1≤ N≤50)，代表訂單總數。\n接下來有N個包含兩個整數 Starti與Endi，代表第i張訂單的開始與結束時間。0≤Starti≤ Endi ≤100。(為了方便平台測試，2N個整數皆在同一行以空白隔開)",
      "outputDescription": "輸出一個整數，代表外送員最多可以接下的訂單數量。",
      "statement": {
        "description": "你是外送平台的演算法工程師，需要設計一套系統來幫助外送員計算「最多接單數量」。已知系統中有N張待接的訂單，每一張訂單都有固定的「開始時間」與「結束時間」。外送員同一時間只能執行一張訂單(不能同時送兩單)。請問在時間不衝突的情況下，這位外送員最多可以接下幾張訂單？\n【重要規則】\n1. 如果一張訂單的「結束時間」剛好等於下一張訂單的「開始時間」，則視為不衝突，可以順利銜接。例如：接了(1,3)的單，可以馬上接(3,5)的單。\n2. 你的目標是「數量最大化」，而不是總時長最大化。\n3. 提示：輸入的訂單未經過排序，你可能需要自行整理資料才能找出最佳解。",
        "input": "第一行輸入一個正整數N (1≤ N≤50)，代表訂單總數。\n接下來有N個包含兩個整數 Starti與Endi，代表第i張訂單的開始與結束時間。0≤Starti≤ Endi ≤100。(為了方便平台測試，2N個整數皆在同一行以空白隔開)",
        "output": "輸出一個整數，代表外送員最多可以接下的訂單數量。"
      },
      "examples": [
        {
          "input": "4\n1 3 2 4 3 5 5 7",
          "output": "3",
          "explanation": "1. 先選擇最早結束的「訂單A」(1-3)。此時時間來到3。 2. 「訂單B」(2-4) 的開始時間是2，因為2&lt;3，與A衝突。 3. 「訂單C」(3-5) 的開始時間是3，剛好可以銜接A。選擇C。 4. 「訂單D」(5-7) 的開始時間是5，剛好可以銜接C。選擇D。"
        },
        {
          "input": "3\n1 10 10 20 20 30",
          "output": "3",
          "explanation": "1. A (1-10)、訂單B (10-20)、訂單C(20-30)。 2. 三張單時間完全剛好接上。"
        }
      ],
      "testCases": [
        {
          "input": "4\n1 3 2 4 3 5 5 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 10 10 20 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 50 1 5 5 10 10 15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n5 10 5 10 5 10 5 10 5 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n10 15 2 4 6 8 1 9 4 5 15 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n0 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 2 3 3 4 4 5 5 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 5 2 6 3 7 4 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 3 2 5 4 6 5 8 7 9 8 10 9 11",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 4 3 5 0 6 4 7 3 8",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典區間排程貪婪法(Interval Scheduling)，需要先依結束時間排序再貪婪選擇，是本次題組中演算法設計難度最高的一題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "貪婪演算法"
        ],
        "subConcepts": [
          "排序"
        ],
        "algorithm": [
          "區間排程"
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
          "外送"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ06",
      "courseName": "114-花蓮縣國中（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114JHualien",
    "convertedAt": "2026-08-13T00:39:19.880Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
