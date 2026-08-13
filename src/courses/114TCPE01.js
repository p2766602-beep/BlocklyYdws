// 競賽模式版本，2026-08-13由 114EChaiyi.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE01",
  "title": "114-嘉義市國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "嘉義市114學年度科技教育創意實作競賽-國小資訊科技組題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-07T14:15:54.885Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-嘉義市國小",
    "version": "manual-transcription-verified",
    "convertedFrom": "114EChaiyi",
    "convertedAt": "2026-08-13T00:39:19.907Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPE01-1",
      "title": "營養午餐分析-1：豆製品週頻率",
      "problemTitle": "營養午餐分析-1：豆製品週頻率",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校記錄了 10 天的午餐主菜。請分別判斷第 1~5 天、第 6~10 天，是否「至少出現過一次」豆製品（C）。各輸出 Y（有）或 N（沒有）。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出「Y/N Y/N」，分別代表前5天、後5天是否出現過豆製品。",
      "statement": {
        "description": "學校記錄了 10 天的午餐主菜。請分別判斷第 1~5 天、第 6~10 天，是否「至少出現過一次」豆製品（C）。各輸出 Y（有）或 N（沒有）。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出「Y/N Y/N」，分別代表前5天、後5天是否出現過豆製品。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "N Y",
          "explanation": "前5天(B A B A B)沒有C，後5天(C D E F F)有C，故輸出N Y。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "Y Y",
          "explanation": "前5天(C A B C D)有C，後5天(A B C D E)有C，故輸出Y Y。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A B D E F A B D E F",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C C C C C C C C C C",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "判斷前5天與後5天各自是否出現過指定主菜，練習區間內的存在性判斷。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "存在性判斷"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "包含判斷"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-2",
      "title": "營養午餐分析-2：紅肉超量警示",
      "problemTitle": "營養午餐分析-2：紅肉超量警示",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "同樣的 10 天午餐紀錄。請分別判斷第 1~5 天、第 6~10 天，紅肉（B）出現的次數是否「超過」白肉（A）加豆製品（C）出現次數的總和。各輸出 Y（超過）或 N（沒有超過）。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出「Y/N Y/N」，分別代表前5天、後5天紅肉次數是否超過白肉+豆製品次數。",
      "statement": {
        "description": "同樣的 10 天午餐紀錄。請分別判斷第 1~5 天、第 6~10 天，紅肉（B）出現的次數是否「超過」白肉（A）加豆製品（C）出現次數的總和。各輸出 Y（超過）或 N（沒有超過）。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出「Y/N Y/N」，分別代表前5天、後5天紅肉次數是否超過白肉+豆製品次數。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "Y N",
          "explanation": "前5天B有3次，A+C共2次，3>2故Y；後5天B有0次，A+C共1次，0>1不成立故N。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "N N",
          "explanation": "前5天B有1次，A+C共3次，不超過故N；後5天同理N。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "score": 20,
          "hidden": false
        },
        {
          "input": "B B B B B A A A A A",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A C A C A C A C A C",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "比較前5天、後5天各自紅肉與白肉+豆製品的次數，練習分類計數與比較。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "分類計數"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "計數比較"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-3",
      "title": "營養午餐分析-3：白肉接紅肉次數",
      "problemTitle": "營養午餐分析-3：白肉接紅肉次數",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "同樣的 10 天午餐紀錄。請分別統計第 1~5 天、第 6~10 天中，「白肉（A）後面緊接著紅肉（B）」這種相鄰組合出現的次數（各區間內部比對，不跨區間）。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出「次數1 次數2」，分別代表前5天、後5天中A後接B的出現次數。",
      "statement": {
        "description": "同樣的 10 天午餐紀錄。請分別統計第 1~5 天、第 6~10 天中，「白肉（A）後面緊接著紅肉（B）」這種相鄰組合出現的次數（各區間內部比對，不跨區間）。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出「次數1 次數2」，分別代表前5天、後5天中A後接B的出現次數。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "2 0",
          "explanation": "前5天(B A B A B)中A後接B出現在第2、4天，共2次；後5天(C D E F F)沒有A，故0次。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "1 1",
          "explanation": "前5天(C A B C D)中A後接B出現1次；後5天(A B C D E)中A後接B出現1次。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A B A B A A B A B A",
          "score": 20,
          "hidden": false
        },
        {
          "input": "D D D D D A B A B A",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "統計相鄰兩天「白肉後緊接紅肉」的出現次數，練習序列中相鄰元素的比對。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "序列比對"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if（相鄰比對）"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-4",
      "title": "營養午餐分析-4：最常見主菜",
      "problemTitle": "營養午餐分析-4：最常見主菜",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "同樣的 10 天午餐紀錄，保證有一個主菜出現次數最多且唯一。請輸出這個出現次數最多的主菜代號。",
      "inputDescription": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
      "outputDescription": "輸出出現次數最多的主菜代號。",
      "statement": {
        "description": "同樣的 10 天午餐紀錄，保證有一個主菜出現次數最多且唯一。請輸出這個出現次數最多的主菜代號。",
        "input": "輸入 10 天的主菜紀錄，以空格分隔（A白肉、B紅肉、C豆製品、D蛋類、E海鮮、F蔬菜）。",
        "output": "輸出出現次數最多的主菜代號。"
      },
      "examples": [
        {
          "input": "B A B A B C D E F F",
          "output": "B",
          "explanation": "B出現3次為最多，輸出B。"
        },
        {
          "input": "C A B C D A B C D E",
          "output": "C",
          "explanation": "C出現3次為最多，輸出C。"
        }
      ],
      "testCases": [
        {
          "input": "B A B A B C D E F F",
          "score": 20,
          "hidden": false
        },
        {
          "input": "C A B C D A B C D E",
          "score": 20,
          "hidden": false
        },
        {
          "input": "A A A D C E F B B C",
          "score": 20,
          "hidden": false
        },
        {
          "input": "D D D D D A B C E F",
          "score": 20,
          "hidden": false
        },
        {
          "input": "F E F E F E F D D F",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "統計10天中出現次數最多的主菜（保證答案唯一），練習基礎的計數與最大值搜尋。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "營養午餐分析系列"
        ],
        "subConcepts": [
          "主菜紀錄統計"
        ],
        "algorithm": [
          "計數",
          "最大值搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "最大值"
        ],
        "math": [],
        "context": [
          "校園情境",
          "營養午餐"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-5",
      "title": "停車費計算",
      "problemTitle": "停車費計算",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "停車費依停車分鐘數計算：30分鐘以內收20元；31~60分鐘收40元；超過60分鐘，每滿30分鐘（不足30分鐘也算）加收30元。單日費用上限400元。若停車總時間超過24小時（1440分鐘），超過的部分視為新的一天重新計算（同樣享有優惠與400元上限），分別計算後相加。",
      "inputDescription": "輸入停車分鐘數。",
      "outputDescription": "輸出應繳的停車費。",
      "statement": {
        "description": "停車費依停車分鐘數計算：30分鐘以內收20元；31~60分鐘收40元；超過60分鐘，每滿30分鐘（不足30分鐘也算）加收30元。單日費用上限400元。若停車總時間超過24小時（1440分鐘），超過的部分視為新的一天重新計算（同樣享有優惠與400元上限），分別計算後相加。",
        "input": "輸入停車分鐘數。",
        "output": "輸出應繳的停車費。"
      },
      "examples": [
        {
          "input": "100",
          "output": "100",
          "explanation": "100分鐘：超過60分，(100-60)/30=1.33無條件進位為2，40+30*2=100元。"
        },
        {
          "input": "820",
          "output": "400",
          "explanation": "820分鐘：計算後超過400元上限，收400元。"
        }
      ],
      "testCases": [
        {
          "input": "100",
          "score": 11,
          "hidden": false
        },
        {
          "input": "820",
          "score": 11,
          "hidden": false
        },
        {
          "input": "1443",
          "score": 11,
          "hidden": false
        },
        {
          "input": "30",
          "score": 11,
          "hidden": false
        },
        {
          "input": "31",
          "score": 11,
          "hidden": false
        },
        {
          "input": "60",
          "score": 11,
          "hidden": false
        },
        {
          "input": "61",
          "score": 11,
          "hidden": false
        },
        {
          "input": "2880",
          "score": 11,
          "hidden": false
        },
        {
          "input": "2883",
          "score": 11,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "分段計費並設有單日上限，超過24小時需拆成多日分別計算再相加，練習分段條件與迴圈拆分。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "分段計費"
        ],
        "subConcepts": [
          "上限與跨日處理"
        ],
        "algorithm": [
          "分段計費"
        ],
        "dataStructure": [
          "無"
        ],
        "syntax": [
          "if-elif",
          "無條件進位",
          "上限限制"
        ],
        "math": [],
        "context": [
          "生活情境",
          "停車場"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-6",
      "title": "班級活動票選",
      "problemTitle": "班級活動票選",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "班級活動地點投票，共有 5 個地點選項（編號1~5），N 位同學投票。請統計最高票數的選項：若最高票只有一個選項，輸出該編號；若有多個選項並列最高票，依編號由小到大全部輸出。",
      "inputDescription": "第一行輸入投票人數 N。\n第二行輸入 N 個投票結果（1~5）。",
      "outputDescription": "輸出得票最高的選項編號（可能多個，以空格分隔，由小到大排序）。",
      "statement": {
        "description": "班級活動地點投票，共有 5 個地點選項（編號1~5），N 位同學投票。請統計最高票數的選項：若最高票只有一個選項，輸出該編號；若有多個選項並列最高票，依編號由小到大全部輸出。",
        "input": "第一行輸入投票人數 N。\n第二行輸入 N 個投票結果（1~5）。",
        "output": "輸出得票最高的選項編號（可能多個，以空格分隔，由小到大排序）。"
      },
      "examples": [
        {
          "input": "4\n1 5 1 5",
          "output": "1 5",
          "explanation": "選項1、5各得2票並列最高，輸出「1 5」。"
        },
        {
          "input": "5\n1 2 1 1 4",
          "output": "1",
          "explanation": "選項1得3票最高，輸出「1」。"
        }
      ],
      "testCases": [
        {
          "input": "4\n1 5 1 5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n1 2 1 1 4",
          "score": 20,
          "hidden": false
        },
        {
          "input": "8\n3 4 5 1 3 4 5 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n2 2 2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "6\n1 2 3 4 5 1",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "統計每個選項得票數並找出最高票（可能有多個並列），練習計數陣列與並列判斷。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "計數統計"
        ],
        "subConcepts": [
          "最高票並列處理"
        ],
        "algorithm": [
          "計數統計"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "最大值"
        ],
        "math": [],
        "context": [
          "校園情境",
          "班級投票"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-7",
      "title": "班級集星比賽",
      "problemTitle": "班級集星比賽",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "班級集星比賽記錄了 N 天每天獲得的星星數。請找出連續 K 天總和最大的區間，輸出其「起始天（第幾天，從1開始）」與「最大總和」；若有多組並列最大，取最早開始的一組。",
      "inputDescription": "第一行輸入天數 N。\n第二行輸入連續天數 K。\n第三行輸入 N 天的星星數。",
      "outputDescription": "輸出「起始天 最大總和」。",
      "statement": {
        "description": "班級集星比賽記錄了 N 天每天獲得的星星數。請找出連續 K 天總和最大的區間，輸出其「起始天（第幾天，從1開始）」與「最大總和」；若有多組並列最大，取最早開始的一組。",
        "input": "第一行輸入天數 N。\n第二行輸入連續天數 K。\n第三行輸入 N 天的星星數。",
        "output": "輸出「起始天 最大總和」。"
      },
      "examples": [
        {
          "input": "6\n3\n10 2 3 4 1 5",
          "output": "1 15",
          "explanation": "第1~3天總和10+2+3=15為最大，起始天1。"
        },
        {
          "input": "7\n3\n1 2 10 12 5 3 1",
          "output": "3 27",
          "explanation": "第3~5天總和10+12+5=27為最大，起始天3。"
        }
      ],
      "testCases": [
        {
          "input": "6\n3\n10 2 3 4 1 5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "7\n3\n1 2 10 12 5 3 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "8\n4\n5 1 5 1 5 1 5 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n1\n3 9 2 8 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "4\n2\n1 1 1 10",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "找出連續K天總和最大的起始天，若有並列取最早，練習滑動視窗與並列處理。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "滑動視窗"
        ],
        "subConcepts": [
          "最早最大區間"
        ],
        "algorithm": [
          "滑動視窗"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "最大值"
        ],
        "math": [],
        "context": [
          "校園情境",
          "集星活動"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-8",
      "title": "森林小火車的能量大冒險",
      "problemTitle": "森林小火車的能量大冒險",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "森林小火車行駛於環狀的 5 個車站（1~5號，5號的下一站是1號），每個車站都有一個能量糖果增減值。小火車一開始持有 10 顆糖果，從1號站出發。每次骰子擲出步數後，小火車會先消耗等同步數的糖果，再前進到新站點，並依新站點的增減值調整糖果數量。糖果數量上限為30顆（超過就只保留30顆），若糖果數量小於等於0，則獲得國王救援直接補滿為5顆。請輸出經過所有骰子次數後的糖果數量。",
      "inputDescription": "第一行輸入5個車站（1~5號）的糖果增減值。\n第二行輸入骰子擲出的總次數。\n第三行輸入每次骰子擲出的步數。",
      "outputDescription": "輸出最終的糖果數量。",
      "statement": {
        "description": "森林小火車行駛於環狀的 5 個車站（1~5號，5號的下一站是1號），每個車站都有一個能量糖果增減值。小火車一開始持有 10 顆糖果，從1號站出發。每次骰子擲出步數後，小火車會先消耗等同步數的糖果，再前進到新站點，並依新站點的增減值調整糖果數量。糖果數量上限為30顆（超過就只保留30顆），若糖果數量小於等於0，則獲得國王救援直接補滿為5顆。請輸出經過所有骰子次數後的糖果數量。",
        "input": "第一行輸入5個車站（1~5號）的糖果增減值。\n第二行輸入骰子擲出的總次數。\n第三行輸入每次骰子擲出的步數。",
        "output": "輸出最終的糖果數量。"
      },
      "examples": [
        {
          "input": "0 15 -5 15 -10\n2\n1 2",
          "output": "30",
          "explanation": "第1步耗1顆剩9顆，移到2號站+15顆=24顆；第2步耗2顆剩22顆，移到4號站+15顆=37顆，超過上限剩30顆。"
        },
        {
          "input": "0 15 -5 15 -10\n2\n4 3",
          "output": "5",
          "explanation": "第1步耗4顆剩6顆，移到5號站-10顆=-4顆，觸發國王救援設為5顆；第2步耗3顆剩2顆，移到3號站-5顆=-3顆，再次觸發國王救援設為5顆。"
        }
      ],
      "testCases": [
        {
          "input": "0 15 -5 15 -10\n2\n1 2",
          "score": 20,
          "hidden": false
        },
        {
          "input": "0 15 -5 15 -10\n2\n4 3",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5 5 5 5 5\n1\n1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "-20 -20 -20 -20 -20\n1\n1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "0 0 0 0 0\n5\n1 1 1 1 1",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要同時處理環狀站點位置、移動消耗、到站補給與數值上下限的多重規則，是較複雜的模擬題。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "模擬"
        ],
        "subConcepts": [
          "環狀移動與上下限"
        ],
        "algorithm": [
          "環狀模擬"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "模運算",
          "if（上下限）"
        ],
        "math": [],
        "context": [
          "奇幻情境",
          "森林小火車"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE01-9",
      "title": "玩具收納挑戰",
      "problemTitle": "玩具收納挑戰",
      "courseCode": "114TCPE01",
      "courseName": "114-嘉義市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "要將 N 件（N≤6）玩具收進容量 20 公斤的標準收納箱。依序處理每件玩具：依開箱順序檢查每個「已經開啟」的箱子，只要有任何一箱裝入後不超過20公斤，就放進第一個符合的箱子；如果所有已開的箱子都裝不下，才開一個新箱子。請輸出總共用了幾個箱子。",
      "inputDescription": "第一行輸入玩具數量 N。\n第二行輸入 N 個玩具重量。",
      "outputDescription": "輸出總共使用的箱子數量。",
      "statement": {
        "description": "要將 N 件（N≤6）玩具收進容量 20 公斤的標準收納箱。依序處理每件玩具：依開箱順序檢查每個「已經開啟」的箱子，只要有任何一箱裝入後不超過20公斤，就放進第一個符合的箱子；如果所有已開的箱子都裝不下，才開一個新箱子。請輸出總共用了幾個箱子。",
        "input": "第一行輸入玩具數量 N。\n第二行輸入 N 個玩具重量。",
        "output": "輸出總共使用的箱子數量。"
      },
      "examples": [
        {
          "input": "4\n10 10 9 1",
          "output": "2",
          "explanation": "10+10=20裝滿箱1；9放不進箱1(20+9=29>20)故開箱2；1可放進箱1(20+1=21>20不行)或箱2(9+1=10可以)，共2箱。"
        },
        {
          "input": "4\n11 11 11 11",
          "output": "4",
          "explanation": "每個11都無法與其他11同箱(11+11=22>20)，故4件各自一箱，共4箱。"
        }
      ],
      "testCases": [
        {
          "input": "4\n10 10 9 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "4\n11 11 11 11",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n19 19 19 1 1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n20 20 20",
          "score": 20,
          "hidden": false
        },
        {
          "input": "6\n5 5 5 5 5 5",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "依序檢查所有已開的箱子是否裝得下（First-Fit），而非只檢查目前的箱子，練習較完整的裝箱模擬。",
        "exportDecision": "Claude 依使用者提供的114-嘉義市國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "貪心裝箱"
        ],
        "subConcepts": [
          "First-Fit裝箱"
        ],
        "algorithm": [
          "First-Fit裝箱"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "if",
          "累加"
        ],
        "math": [],
        "context": [
          "生活情境",
          "玩具收納"
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
