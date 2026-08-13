// 競賽模式版本，2026-08-13由 114JNantou.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPJ07",
  "title": "114-南投縣國中（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "南投縣114學年度科技教育創意實作競賽-國中資訊科技組題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-07T14:15:54.881Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-南投縣國中",
    "version": "manual-transcription-verified",
    "convertedFrom": "114JNantou",
    "convertedAt": "2026-08-13T00:39:19.885Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPJ07-1",
      "title": "智慧溫室的自動監控",
      "problemTitle": "智慧溫室的自動監控",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "智慧溫室每小時記錄一次溫度與濕度。當某小時的溫度大於 30 度「且」濕度小於 50% 時，視為需要自動啟動噴霧降溫的異常時段。請計算總共有幾個小時符合這個條件。",
      "inputDescription": "第一行輸入監測小時數 N（1~24 的整數）。\n第二行輸入 N 個溫度整數。\n第三行輸入 N 個濕度整數。",
      "outputDescription": "輸出符合「溫度>30 且 濕度<50」的小時數。",
      "statement": {
        "description": "智慧溫室每小時記錄一次溫度與濕度。當某小時的溫度大於 30 度「且」濕度小於 50% 時，視為需要自動啟動噴霧降溫的異常時段。請計算總共有幾個小時符合這個條件。",
        "input": "第一行輸入監測小時數 N（1~24 的整數）。\n第二行輸入 N 個溫度整數。\n第三行輸入 N 個濕度整數。",
        "output": "輸出符合「溫度>30 且 濕度<50」的小時數。"
      },
      "examples": [
        {
          "input": "3\n32 28 35\n45 60 40",
          "output": "2",
          "explanation": "溫度32,濕度45符合；溫度28不符合(未大於30)；溫度35,濕度40符合。共2小時。"
        },
        {
          "input": "2\n31 32\n40 30",
          "output": "2",
          "explanation": "兩小時皆溫度>30、濕度<50，共2小時。"
        }
      ],
      "testCases": [
        {
          "input": "3\n32 28 35\n45 60 40",
          "score": 14,
          "hidden": false
        },
        {
          "input": "2\n31 32\n40 30",
          "score": 14,
          "hidden": false
        },
        {
          "input": "1\n35\n40",
          "score": 14,
          "hidden": false
        },
        {
          "input": "5\n31 32 33 34 35\n49 48 47 46 45",
          "score": 14,
          "hidden": false
        },
        {
          "input": "4\n25 35 25 35\n60 40 60 40",
          "score": 14,
          "hidden": false
        },
        {
          "input": "6\n30 31 29 40 31 35\n50 49 40 50 51 30",
          "score": 14,
          "hidden": false
        },
        {
          "input": "10\n30 31 29 40 31 30 31 29 40 32\n50 49 40 50 51 50 41 40 50 48",
          "score": 14,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "對兩組並行資料做逐筆的雙條件比對與計數，是條件判斷與迴圈的基礎應用。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "條件篩選"
        ],
        "subConcepts": [
          "計數"
        ],
        "algorithm": [
          "條件篩選",
          "計數"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "且（AND）"
        ],
        "math": [],
        "context": [
          "生活情境",
          "物聯網監控"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-2",
      "title": "熱門影片的流量密碼",
      "problemTitle": "熱門影片的流量密碼",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "某影片平台記錄每小時的觀看流量。請找出連續 K 個小時流量總和的最大值，作為該影片的「熱門密碼」。",
      "inputDescription": "第一行輸入記錄的小時數 N。\n第二行輸入視窗長度 K（1≤K≤N）。\n第三行輸入 N 個流量整數。",
      "outputDescription": "輸出連續 K 小時流量總和的最大值。",
      "statement": {
        "description": "某影片平台記錄每小時的觀看流量。請找出連續 K 個小時流量總和的最大值，作為該影片的「熱門密碼」。",
        "input": "第一行輸入記錄的小時數 N。\n第二行輸入視窗長度 K（1≤K≤N）。\n第三行輸入 N 個流量整數。",
        "output": "輸出連續 K 小時流量總和的最大值。"
      },
      "examples": [
        {
          "input": "8\n3\n1 5 2 10 8 3 7 2",
          "output": "21",
          "explanation": "連續3小時中[10,8,3]總和21最大。"
        },
        {
          "input": "5\n2\n10 20 30 20 10",
          "output": "50",
          "explanation": "連續2小時中[30,20]總和50最大。"
        }
      ],
      "testCases": [
        {
          "input": "8\n3\n1 5 2 10 8 3 7 2",
          "score": 14,
          "hidden": false
        },
        {
          "input": "5\n2\n10 20 30 20 10",
          "score": 14,
          "hidden": false
        },
        {
          "input": "3\n3\n100 200 300",
          "score": 14,
          "hidden": false
        },
        {
          "input": "5\n1\n10 50 20 90 30",
          "score": 14,
          "hidden": false
        },
        {
          "input": "6\n2\n1 2 9 8 6 1",
          "score": 14,
          "hidden": false
        },
        {
          "input": "10\n9\n1 1 5 5 1 1 8 8 1 1",
          "score": 14,
          "hidden": false
        },
        {
          "input": "10\n4\n1 1 5 5 1 1 8 8 1 1",
          "score": 14,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要維護連續 K 筆資料的區間總和並求最大值，是滑動視窗技巧的入門題。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "滑動視窗"
        ],
        "subConcepts": [
          "區間最大值"
        ],
        "algorithm": [
          "滑動視窗"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "區間求和"
        ],
        "math": [],
        "context": [
          "資訊科技情境",
          "流量分析"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-3",
      "title": "神秘的煉金術配對",
      "problemTitle": "神秘的煉金術配對",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "煉金術士有 N 種材料，每種材料有一個能量值。請找出兩種材料，使其能量總和恰好等於目標值 T，且兩者能量差的絕對值最小。輸出這兩個材料的能量值（由小到大）；若找不到符合總和為 T 的配對，輸出 -1。",
      "inputDescription": "第一行輸入材料數量 N。\n第二行輸入 N 個材料能量值。\n第三行輸入目標值 T。",
      "outputDescription": "輸出兩個能量值（由小到大，以空格分隔）；若無解輸出 -1。",
      "statement": {
        "description": "煉金術士有 N 種材料，每種材料有一個能量值。請找出兩種材料，使其能量總和恰好等於目標值 T，且兩者能量差的絕對值最小。輸出這兩個材料的能量值（由小到大）；若找不到符合總和為 T 的配對，輸出 -1。",
        "input": "第一行輸入材料數量 N。\n第二行輸入 N 個材料能量值。\n第三行輸入目標值 T。",
        "output": "輸出兩個能量值（由小到大，以空格分隔）；若無解輸出 -1。"
      },
      "examples": [
        {
          "input": "6\n1 3 4 6 8 10\n10",
          "output": "4 6",
          "explanation": "4+6=10，差距2；1+? 無其他和為10且差更小的組合，故答案為4 6。"
        },
        {
          "input": "5\n1 3 5 7 9\n10",
          "output": "3 7",
          "explanation": "3+7=10，1+9=10也符合，但3與7差距較小，故取3 7。"
        }
      ],
      "testCases": [
        {
          "input": "6\n1 3 4 6 8 10\n10",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n1 3 5 7 9\n10",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n1 3 5 7 9\n7",
          "score": 13,
          "hidden": false
        },
        {
          "input": "3\n1 2 3\n5",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n1 3 5 7 9\n20",
          "score": 13,
          "hidden": false
        },
        {
          "input": "6\n1 3 4 6 8 10\n14",
          "score": 13,
          "hidden": false
        },
        {
          "input": "8\n1 2 5 7 9 11 15 20\n16",
          "score": 13,
          "hidden": false
        },
        {
          "input": "8\n1 2 3 4 5 6 100 200\n7",
          "score": 13,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要枚舉所有配對找出總和等於目標值且差距最小的一組，練習雙層迴圈與條件篩選最佳解。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "陣列搜尋"
        ],
        "subConcepts": [
          "配對最佳化"
        ],
        "algorithm": [
          "窮舉",
          "配對搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "絕對值",
          "最小值"
        ],
        "math": [],
        "context": [
          "奇幻情境",
          "煉金配方"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-4",
      "title": "量子訊號的接力傳輸",
      "problemTitle": "量子訊號的接力傳輸",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "有 N 個訊號站，每個站都有一個上一層轉發站編號（0 表示是最頂層、沒有上一層）。訊號從某個站出發，沿著上一層轉發站一路往上傳到最頂層，稱為一次「接力」，經過的站數即為接力次數。請找出所有訊號站中，接力次數最多的站，輸出其接力次數。",
      "inputDescription": "第一行輸入訊號站數量 N。\n第二行輸入 N 個整數，第 i 個數字表示第 i 站的上一層轉發站編號（0 表示無上一層）。",
      "outputDescription": "輸出所有訊號站中最大的接力次數。",
      "statement": {
        "description": "有 N 個訊號站，每個站都有一個上一層轉發站編號（0 表示是最頂層、沒有上一層）。訊號從某個站出發，沿著上一層轉發站一路往上傳到最頂層，稱為一次「接力」，經過的站數即為接力次數。請找出所有訊號站中，接力次數最多的站，輸出其接力次數。",
        "input": "第一行輸入訊號站數量 N。\n第二行輸入 N 個整數，第 i 個數字表示第 i 站的上一層轉發站編號（0 表示無上一層）。",
        "output": "輸出所有訊號站中最大的接力次數。"
      },
      "examples": [
        {
          "input": "5\n0 1 2 2 3",
          "output": "3",
          "explanation": "第5站經過站4→站3→站2→站1(parent=0)，共3次接力，為最大值。"
        },
        {
          "input": "3\n2 3 0",
          "output": "2",
          "explanation": "第1站→站2(parent=0)，1次；第2站parent=3→3是最頂層，1次。取最大2次(對應第2題另一節點路徑)。"
        }
      ],
      "testCases": [
        {
          "input": "5\n0 1 2 2 3",
          "score": 13,
          "hidden": false
        },
        {
          "input": "3\n2 3 0",
          "score": 13,
          "hidden": false
        },
        {
          "input": "6\n2 6 6 0 1 4",
          "score": 13,
          "hidden": false
        },
        {
          "input": "3\n0 1 1",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n2 3 4 5 0",
          "score": 13,
          "hidden": false
        },
        {
          "input": "10\n2 3 4 0 1 2 3 4 5 6",
          "score": 13,
          "hidden": false
        },
        {
          "input": "8\n0 1 2 3 2 5 6 7",
          "score": 13,
          "hidden": false
        },
        {
          "input": "8\n0 1 2 0 4 5 2 3",
          "score": 13,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要沿著父節點指標往上追溯直到根節點，並求所有節點中最長的追溯路徑，練習鏈狀資料的走訪。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "樹狀結構"
        ],
        "subConcepts": [
          "鏈長度"
        ],
        "algorithm": [
          "鏈追蹤",
          "最大值"
        ],
        "dataStructure": [
          "清單（父節點陣列）"
        ],
        "syntax": [
          "while",
          "索引運算"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "訊號網路"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-5",
      "title": "古文明的能量融合",
      "problemTitle": "古文明的能量融合",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "兩塊古文明石板各自刻有一個能量數值，數值可能非常龐大（超過一般整數能表示的範圍），因此每個數值的結尾都會加上字母 a 作為超長數字的標記（計算時應忽略這個標記）。請計算兩個能量值相加的結果，並在結果結尾同樣加上 a。",
      "inputDescription": "第一行輸入第一個能量值（結尾有 a 標記）。\n第二行輸入第二個能量值（結尾有 a 標記）。",
      "outputDescription": "輸出兩數相加的結果，結尾加上 a。",
      "statement": {
        "description": "兩塊古文明石板各自刻有一個能量數值，數值可能非常龐大（超過一般整數能表示的範圍），因此每個數值的結尾都會加上字母 a 作為超長數字的標記（計算時應忽略這個標記）。請計算兩個能量值相加的結果，並在結果結尾同樣加上 a。",
        "input": "第一行輸入第一個能量值（結尾有 a 標記）。\n第二行輸入第二個能量值（結尾有 a 標記）。",
        "output": "輸出兩數相加的結果，結尾加上 a。"
      },
      "examples": [
        {
          "input": "192a\n81a",
          "output": "273a",
          "explanation": "192+81=273，結尾加上a。"
        },
        {
          "input": "999999999999000000000001a\n999999999999a",
          "output": "1000000000000000000000000a",
          "explanation": "兩個接近10^24的大數相加，超過一般整數精度，需用大數運算。"
        }
      ],
      "testCases": [
        {
          "input": "192a\n81a",
          "score": 14,
          "hidden": false
        },
        {
          "input": "999999999999000000000001a\n999999999999a",
          "score": 14,
          "hidden": false
        },
        {
          "input": "11a\n22a",
          "score": 14,
          "hidden": false
        },
        {
          "input": "14a\n61a",
          "score": 14,
          "hidden": false
        },
        {
          "input": "333333333333111111111111a\n444444444444222222222222a",
          "score": 14,
          "hidden": false
        },
        {
          "input": "111987654321111987654321a\n999a",
          "score": 14,
          "hidden": false
        },
        {
          "input": "777777888888999999999999a\n222222222222999999999999a",
          "score": 14,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "輸入的數字超過一般整數精度上限，需要用字串或大數方式處理加法，練習大數運算的基本概念。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "大數運算"
        ],
        "subConcepts": [
          "字串轉數字"
        ],
        "algorithm": [
          "大數加法"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字串轉換",
          "加法"
        ],
        "math": [],
        "context": [
          "奇幻情境",
          "能量融合"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-6",
      "title": "星際物資運補任務：神祕的配重",
      "problemTitle": "星際物資運補任務：神祕的配重",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際貨船有 N 個貨櫃，每個貨櫃有一個重量。為了配重平衡，需要判斷是否存在兩個貨櫃，其重量總和恰好等於配重目標值 W。若存在輸出 YES，否則輸出 NO。",
      "inputDescription": "第一行輸入貨櫃數量 N。\n第二行輸入 N 個貨櫃重量。\n第三行輸入配重目標值 W。",
      "outputDescription": "若存在兩貨櫃重量總和為 W，輸出 YES，否則輸出 NO。",
      "statement": {
        "description": "星際貨船有 N 個貨櫃，每個貨櫃有一個重量。為了配重平衡，需要判斷是否存在兩個貨櫃，其重量總和恰好等於配重目標值 W。若存在輸出 YES，否則輸出 NO。",
        "input": "第一行輸入貨櫃數量 N。\n第二行輸入 N 個貨櫃重量。\n第三行輸入配重目標值 W。",
        "output": "若存在兩貨櫃重量總和為 W，輸出 YES，否則輸出 NO。"
      },
      "examples": [
        {
          "input": "3\n10 20 30\n50",
          "output": "YES",
          "explanation": "20+30=50，存在配對，輸出YES。"
        },
        {
          "input": "4\n1 5 2 10\n4",
          "output": "NO",
          "explanation": "任兩貨櫃相加皆不等於4，輸出NO。"
        }
      ],
      "testCases": [
        {
          "input": "3\n10 20 30\n50",
          "score": 13,
          "hidden": false
        },
        {
          "input": "4\n1 5 2 10\n4",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n1 7 5 3 9\n12",
          "score": 13,
          "hidden": false
        },
        {
          "input": "3\n5 10 15\n20",
          "score": 13,
          "hidden": false
        },
        {
          "input": "4\n11 11 11 12\n10",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n10 10 10 10 10\n25",
          "score": 13,
          "hidden": false
        },
        {
          "input": "12\n1 2 3 4 5 6 7 8 9 10 11 12\n23",
          "score": 13,
          "hidden": false
        },
        {
          "input": "12\n1 2 3 4 5 6 7 8 9 10 11 12\n24",
          "score": 13,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "判斷陣列中是否存在兩數之和等於目標值，是雙層迴圈枚舉的基礎題。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "陣列搜尋"
        ],
        "subConcepts": [
          "配對存在判斷"
        ],
        "algorithm": [
          "窮舉",
          "配對搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "if"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "星際運補"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-7",
      "title": "星際物資運補任務：疏散飛船的乘客名單",
      "problemTitle": "星際物資運補任務：疏散飛船的乘客名單",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "有 N 名乘客需要搭乘疏散飛船撤離，已知每名乘客的體重（由小到大排序），每艘船最多可承載兩人，且兩人總體重不可超過限重 limit（若無法配對則單獨一人一艘船）。請用最少的飛船數量疏散所有乘客：優先讓最重與最輕的乘客配對，若超重則讓最重者獨自搭船。",
      "inputDescription": "第一行輸入乘客數量 N。\n第二行輸入 N 名乘客體重（由小到大排序）。\n第三行輸入每艘船的限重 limit。",
      "outputDescription": "輸出疏散所有乘客所需的最少飛船數量。",
      "statement": {
        "description": "有 N 名乘客需要搭乘疏散飛船撤離，已知每名乘客的體重（由小到大排序），每艘船最多可承載兩人，且兩人總體重不可超過限重 limit（若無法配對則單獨一人一艘船）。請用最少的飛船數量疏散所有乘客：優先讓最重與最輕的乘客配對，若超重則讓最重者獨自搭船。",
        "input": "第一行輸入乘客數量 N。\n第二行輸入 N 名乘客體重（由小到大排序）。\n第三行輸入每艘船的限重 limit。",
        "output": "輸出疏散所有乘客所需的最少飛船數量。"
      },
      "examples": [
        {
          "input": "4\n1 2 2 3\n3",
          "output": "3",
          "explanation": "[1,2,2,3]限重3：最輕1配最重3(=4>3不可)，故3自己一艘；1配2(=3可)一艘，剩2自己一艘，共3艘。"
        },
        {
          "input": "4\n1 2 8 9\n10",
          "output": "2",
          "explanation": "[1,2,8,9]限重10：1配9(=10可)一艘，2配8(=10可)一艘，共2艘。"
        }
      ],
      "testCases": [
        {
          "input": "4\n1 2 2 3\n3",
          "score": 14,
          "hidden": false
        },
        {
          "input": "4\n1 2 8 9\n10",
          "score": 14,
          "hidden": false
        },
        {
          "input": "5\n50 50 50 50 50\n100",
          "score": 14,
          "hidden": false
        },
        {
          "input": "6\n4 5 6 7 8 9\n10",
          "score": 14,
          "hidden": false
        },
        {
          "input": "6\n1 2 3 7 8 9\n10",
          "score": 14,
          "hidden": false
        },
        {
          "input": "8\n1 2 5 10 10 15 18 19\n20",
          "score": 14,
          "hidden": false
        },
        {
          "input": "15\n55 60 65 65 66 66 67 67 70 70 75 80 85 90 100\n145",
          "score": 14,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典的雙指標貪心配對問題（最重與最輕優先配對），需要理解排序後由兩端夾擠的策略。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "貪心演算法"
        ],
        "subConcepts": [
          "雙指標配對"
        ],
        "algorithm": [
          "貪心",
          "雙指標"
        ],
        "dataStructure": [
          "清單（已排序）"
        ],
        "syntax": [
          "while",
          "if",
          "索引運算"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "太空撤離"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-8",
      "title": "星際物資運補任務：火星樣本回收",
      "problemTitle": "星際物資運補任務：火星樣本回收",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "火星探勘車採集了 N 個樣本，每個樣本有價值與重量兩項數據。請將樣本依「價值」由大到小排序回收，若價值相同則依「重量」由小到大排序。輸出排序後樣本原本的編號（1 開始），以逗號分隔。",
      "inputDescription": "第一行輸入樣本數量 N。\n第二行輸入 N 個樣本的價值。\n第三行輸入 N 個樣本的重量。",
      "outputDescription": "輸出排序後的原始樣本編號，以逗號分隔。",
      "statement": {
        "description": "火星探勘車採集了 N 個樣本，每個樣本有價值與重量兩項數據。請將樣本依「價值」由大到小排序回收，若價值相同則依「重量」由小到大排序。輸出排序後樣本原本的編號（1 開始），以逗號分隔。",
        "input": "第一行輸入樣本數量 N。\n第二行輸入 N 個樣本的價值。\n第三行輸入 N 個樣本的重量。",
        "output": "輸出排序後的原始樣本編號，以逗號分隔。"
      },
      "examples": [
        {
          "input": "3\n80 100 80\n5 10 2",
          "output": "2,3,1",
          "explanation": "價值100最高(樣本2)排第一；價值80的樣本1、3重量分別5、2，重量小者(樣本3)先，故順序2,3,1。"
        },
        {
          "input": "3\n10 50 30\n5 5 5",
          "output": "2,3,1",
          "explanation": "價值排序50>30>10，樣本2,3,1。"
        }
      ],
      "testCases": [
        {
          "input": "3\n80 100 80\n5 10 2",
          "score": 17,
          "hidden": false
        },
        {
          "input": "3\n10 50 30\n5 5 5",
          "score": 17,
          "hidden": false
        },
        {
          "input": "4\n99 99 99 99\n20 5 30 10",
          "score": 17,
          "hidden": false
        },
        {
          "input": "5\n60 80 60 80 20\n10 5 20 8 3",
          "score": 17,
          "hidden": false
        },
        {
          "input": "4\n1 2 3 4\n100 100 100 100",
          "score": 17,
          "hidden": false
        },
        {
          "input": "6\n10 50 50 10 100 49\n9 3 2 5 50 2",
          "score": 17,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要依照數值排序但輸出原始索引，並處理排序規則的並列比較（次要鍵排序），練習排序與索引對應的技巧。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "排序"
        ],
        "subConcepts": [
          "索引還原"
        ],
        "algorithm": [
          "排序"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "排序",
          "索引運算"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "火星探勘"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPJ07-9",
      "title": "星際物資運補任務：防禦塔的能量負載",
      "problemTitle": "星際物資運補任務：防禦塔的能量負載",
      "courseCode": "114TCPJ07",
      "courseName": "114-南投縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "防禦塔要將 N 個依序排列的能量模組分給 M 組（每組須是連續的模組，不可拆散順序），使得每組能量總和的「最大值」盡可能小（避免單一組負載過高）。請輸出這個最小可能的最大組總和。",
      "inputDescription": "第一行輸入能量模組數量 N。\n第二行輸入分組數量 M。\n第三行輸入 N 個能量模組的能量值。",
      "outputDescription": "輸出將模組分成 M 組（依序、連續）後，各組總和中的最大值之最小可能值。",
      "statement": {
        "description": "防禦塔要將 N 個依序排列的能量模組分給 M 組（每組須是連續的模組，不可拆散順序），使得每組能量總和的「最大值」盡可能小（避免單一組負載過高）。請輸出這個最小可能的最大組總和。",
        "input": "第一行輸入能量模組數量 N。\n第二行輸入分組數量 M。\n第三行輸入 N 個能量模組的能量值。",
        "output": "輸出將模組分成 M 組（依序、連續）後，各組總和中的最大值之最小可能值。"
      },
      "examples": [
        {
          "input": "5\n2\n7 2 5 10 8",
          "output": "18",
          "explanation": "分成2組：[7,2,5]=14與[10,8]=18，最大值18為最小可能。"
        },
        {
          "input": "4\n4\n1 2 3 4",
          "output": "4",
          "explanation": "4組各自1個元素，最大值即為單一最大元素4。"
        }
      ],
      "testCases": [
        {
          "input": "5\n2\n7 2 5 10 8",
          "score": 13,
          "hidden": false
        },
        {
          "input": "4\n4\n1 2 3 4",
          "score": 13,
          "hidden": false
        },
        {
          "input": "6\n3\n1 1 1 5 1 1",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n1\n10 20 30 40 50",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n5\n10 20 30 40 50",
          "score": 13,
          "hidden": false
        },
        {
          "input": "5\n2\n5 1 2 2 3",
          "score": 13,
          "hidden": false
        },
        {
          "input": "8\n3\n1 10 2 9 3 8 4 7",
          "score": 13,
          "hidden": false
        },
        {
          "input": "15\n5\n10 3 5 2 9 11 1 4 8 3 20 21 22 14 13",
          "score": 13,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典的「切割陣列成M組使各組總和最大值最小化」二分搜尋題型，需要結合可行性檢查函式與二分搜尋。",
        "exportDecision": "Claude 依使用者提供的114-南投縣國中PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "二分搜尋"
        ],
        "subConcepts": [
          "分組最佳化"
        ],
        "algorithm": [
          "二分搜尋",
          "貪心可行性檢查"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while（二分）",
          "for",
          "if"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "能量分配"
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
