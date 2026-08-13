// 競賽模式版本，2026-08-13由 114JPenghu.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPJ09",
  "title": "114-澎湖縣國中（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "澎湖運算思維競賽-國中題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-07T12:42:45.135Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-澎湖縣國中",
    "version": "manual-transcription-verified",
    "convertedFrom": "114JPenghu",
    "convertedAt": "2026-08-13T00:39:19.893Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPJ09-1",
      "title": "神秘留言解碼器",
      "problemTitle": "神秘留言解碼器",
      "courseCode": "114TCPJ09",
      "courseName": "114-澎湖縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "每個人會收到一段被編碼的英文字母訊息，訊息中只有小寫字母與空白。解碼規則：每個英文字母向前移動一個字母（例如 b→a，c→b，…，a→z），空白保持不變。請讀入一段編碼後的字串，輸出正確解碼後的內容。",
      "inputDescription": "輸入共有一行，為一段包含小寫字母與空白的字串（長度不超過 100）。",
      "outputDescription": "輸出解碼後的字串。",
      "statement": {
        "description": "每個人會收到一段被編碼的英文字母訊息，訊息中只有小寫字母與空白。解碼規則：每個英文字母向前移動一個字母（例如 b→a，c→b，…，a→z），空白保持不變。請讀入一段編碼後的字串，輸出正確解碼後的內容。",
        "input": "輸入共有一行，為一段包含小寫字母與空白的字串（長度不超過 100）。",
        "output": "輸出解碼後的字串。"
      },
      "examples": [
        {
          "input": "bqqmf",
          "output": "apple",
          "explanation": "b→a, q→p, q→p, m→l, f→e，組合起來是 apple。"
        },
        {
          "input": "ifmmp xpsme",
          "output": "hello world",
          "explanation": "ifmmp 解碼為 hello，xpsme 解碼為 world，空白保持不變。"
        }
      ],
      "testCases": [
        {
          "input": "bqqmf",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ifmmp xpsme",
          "score": 10,
          "hidden": false
        },
        {
          "input": "zoo",
          "score": 10,
          "hidden": false
        },
        {
          "input": "uif dpef jt gvo",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ibwf b ojdf ebz",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "逐字元位移解碼，需處理空白不變的例外，屬基礎字串處理題。",
        "exportDecision": "Claude 依使用者提供的114-澎湖縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "字元位移"
        ],
        "algorithm": [
          "字串處理"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "for",
          "if",
          "取字元",
          "字串組合"
        ],
        "math": [],
        "context": [
          "生活情境",
          "密碼解碼"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ09-2",
      "title": "剛好的禮券",
      "problemTitle": "剛好的禮券",
      "courseCode": "114TCPJ09",
      "courseName": "114-澎湖縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小華手上有一張金額固定的禮券，想在商店中正好買兩樣不同的商品，將禮券金額完全花光。請檢查是否能從商品價格清單中找到兩個不同位置的商品，價格總和恰好等於禮券面額。如果找得到，輸出這兩個商品的價格（小的在前，大的在後）；如果同時有多組組合符合，輸出價差最小的兩樣商品價格；找不到則輸出 No Solution。",
      "inputDescription": "第一行輸入兩個整數 N 與 T，N 為商品數量，T 為禮券面額。\n第二行包含 N 個整數，代表各商品的價格。",
      "outputDescription": "若找到符合條件的兩個商品，輸出其價格（數值較小者先輸出）。若找不到，輸出 No Solution。",
      "statement": {
        "description": "小華手上有一張金額固定的禮券，想在商店中正好買兩樣不同的商品，將禮券金額完全花光。請檢查是否能從商品價格清單中找到兩個不同位置的商品，價格總和恰好等於禮券面額。如果找得到，輸出這兩個商品的價格（小的在前，大的在後）；如果同時有多組組合符合，輸出價差最小的兩樣商品價格；找不到則輸出 No Solution。",
        "input": "第一行輸入兩個整數 N 與 T，N 為商品數量，T 為禮券面額。\n第二行包含 N 個整數，代表各商品的價格。",
        "output": "若找到符合條件的兩個商品，輸出其價格（數值較小者先輸出）。若找不到，輸出 No Solution。"
      },
      "examples": [
        {
          "input": "3 10\n1 2 3",
          "output": "No Solution",
          "explanation": "任兩數相加都不等於 10。"
        },
        {
          "input": "5 100\n20 40 50 60 80",
          "output": "40 60",
          "explanation": "20+80=100 與 40+60=100 都符合，但 40 與 60 價差 20 小於 20 與 80 價差 60，故輸出 40 60。"
        }
      ],
      "testCases": [
        {
          "input": "3 10\n1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 100\n20 40 50 60 80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 50\n10 20 30 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 20\n10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 15\n1 2 3 4 5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要窮舉所有兩兩配對並在多組解中挑價差最小者，是雙層迴圈＋條件篩選的組合題。",
        "exportDecision": "Claude 依使用者提供的114-澎湖縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "窮舉法"
        ],
        "subConcepts": [
          "條件篩選"
        ],
        "algorithm": [
          "窮舉",
          "配對搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "清單走訪"
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
    },
    {
      "id": "114TCPJ09-3",
      "title": "細胞分裂模擬",
      "problemTitle": "細胞分裂模擬",
      "courseCode": "114TCPJ09",
      "courseName": "114-澎湖縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "某種細胞第 1 天有 0 個，第 2 天有 1 個，第 3 天開始，每一天的細胞數量都是「前一天」加上「前前一天」的數量之和。請列出從第 1 天到第 n 天每天的細胞數量。",
      "inputDescription": "輸入一個整數 n，代表觀察的天數。",
      "outputDescription": "輸出一行，包含 n 個整數（以空格分隔），代表第 1 天至第 n 天的細胞數量。",
      "statement": {
        "description": "某種細胞第 1 天有 0 個，第 2 天有 1 個，第 3 天開始，每一天的細胞數量都是「前一天」加上「前前一天」的數量之和。請列出從第 1 天到第 n 天每天的細胞數量。",
        "input": "輸入一個整數 n，代表觀察的天數。",
        "output": "輸出一行，包含 n 個整數（以空格分隔），代表第 1 天至第 n 天的細胞數量。"
      },
      "examples": [
        {
          "input": "5",
          "output": "0 1 1 2 3",
          "explanation": "第1天0、第2天1，之後每天等於前兩天之和：1=0+1、2=1+1、3=1+2。"
        }
      ],
      "testCases": [
        {
          "input": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "典型費氏數列遞迴關係題，適合練習用清單累積歷史數值。",
        "exportDecision": "Claude 依使用者提供的114-澎湖縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "數列遞迴"
        ],
        "subConcepts": [
          "迴圈與累計"
        ],
        "algorithm": [
          "動態規劃暖身"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "清單新增",
          "四則運算"
        ],
        "math": [],
        "context": [
          "生活情境",
          "生物模擬"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ09-4",
      "title": "分組報告",
      "problemTitle": "分組報告",
      "courseCode": "114TCPJ09",
      "courseName": "114-澎湖縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "電腦課要同學分組做期末報告，分組方式為依座號順序，每 3 個人一組（1,2,3 為第一組，4,5,6 為第二組……以此類推）。輸入同學的座號，請判斷他在哪一組。",
      "inputDescription": "輸入只有一行，含有一個正整數 n，代表同學的座號。",
      "outputDescription": "輸出該同學的組別。",
      "statement": {
        "description": "電腦課要同學分組做期末報告，分組方式為依座號順序，每 3 個人一組（1,2,3 為第一組，4,5,6 為第二組……以此類推）。輸入同學的座號，請判斷他在哪一組。",
        "input": "輸入只有一行，含有一個正整數 n，代表同學的座號。",
        "output": "輸出該同學的組別。"
      },
      "examples": [
        {
          "input": "7",
          "output": "3",
          "explanation": "7 號屬於第 3 組（7,8,9 為第三組）。"
        }
      ],
      "testCases": [
        {
          "input": "7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "98",
          "score": 10,
          "hidden": false
        },
        {
          "input": "99",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "座號除以每組人數並無條件進位，是基礎整數運算應用題。",
        "exportDecision": "Claude 依使用者提供的114-澎湖縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "整數運算"
        ],
        "subConcepts": [
          "無條件進位"
        ],
        "algorithm": [
          "數學計算"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "無條件進位",
          "整數除法"
        ],
        "math": [],
        "context": [
          "生活情境",
          "班級分組"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ09-5",
      "title": "購買紀念品",
      "problemTitle": "購買紀念品",
      "courseCode": "114TCPJ09",
      "courseName": "114-澎湖縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小明想要盡量把身上剩下的日幣都花完，來買到最多件紀念品。請寫一個程式，判斷在不超過剩餘日幣的情況下，最多可以買到幾件紀念品（依商品單價由低到高依序購買，並受限於各商品的剩餘數量）。",
      "inputDescription": "第一行：一個整數 N，代表小明剩下的日幣總數。\n第二行：一個整數 M，代表商品的數量。\n第三行：輸入 M 個整數，代表每樣商品的日幣價格。\n第四行：輸入 M 個整數，代表每樣商品剩下的數量。",
      "outputDescription": "輸出一個整數，代表可以買到的紀念品總數量。",
      "statement": {
        "description": "小明想要盡量把身上剩下的日幣都花完，來買到最多件紀念品。請寫一個程式，判斷在不超過剩餘日幣的情況下，最多可以買到幾件紀念品（依商品單價由低到高依序購買，並受限於各商品的剩餘數量）。",
        "input": "第一行：一個整數 N，代表小明剩下的日幣總數。\n第二行：一個整數 M，代表商品的數量。\n第三行：輸入 M 個整數，代表每樣商品的日幣價格。\n第四行：輸入 M 個整數，代表每樣商品剩下的數量。",
        "output": "輸出一個整數，代表可以買到的紀念品總數量。"
      },
      "examples": [
        {
          "input": "1000\n3\n100 300 200\n3 4 2",
          "output": "6",
          "explanation": "先買 3 個 100 元、2 個 200 元、1 個 300 元，共花 1000 元，買到 6 件。"
        },
        {
          "input": "500\n4\n600 700 800\n3 4 5",
          "output": "0",
          "explanation": "剩下的錢不夠買任何一樣商品，最多買 0 件。"
        }
      ],
      "testCases": [
        {
          "input": "1000\n3\n100 300 200\n3 4 2",
          "score": 8,
          "hidden": false
        },
        {
          "input": "500\n4\n600 700 800\n3 4 5",
          "score": 8,
          "hidden": false
        },
        {
          "input": "1500\n3\n200 300 100\n2 1 4",
          "score": 8,
          "hidden": false
        },
        {
          "input": "1285\n3\n400 300 100\n4 6 3",
          "score": 8,
          "hidden": false
        },
        {
          "input": "1500\n3\n200 100 1000\n3 2 4",
          "score": 8,
          "hidden": false
        },
        {
          "input": "100\n4\n400 200 300 500\n3 5 4 2",
          "score": 8,
          "hidden": false
        },
        {
          "input": "1500\n4\n30 20 10 50\n1 1 3 1",
          "score": 8,
          "hidden": false
        },
        {
          "input": "50\n3\n200 100 300\n4 3 5",
          "score": 8,
          "hidden": false
        },
        {
          "input": "1800\n4\n100 300 200 400\n6 4 8 2",
          "score": 8,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "貪心法：由便宜到貴依序購買以在預算內買到最多件數，並需考慮每樣商品的庫存上限。",
        "exportDecision": "Claude 依使用者提供的114-澎湖縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "貪心法"
        ],
        "subConcepts": [
          "排序與模擬"
        ],
        "algorithm": [
          "貪心法",
          "排序"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "排序",
          "for",
          "整數除法"
        ],
        "math": [],
        "context": [
          "生活情境",
          "購物預算"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};

export default course;
