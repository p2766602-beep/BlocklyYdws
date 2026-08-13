// 競賽模式版本，2026-08-13由 114EChaiyiC.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE02",
  "title": "114-嘉義縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "嘉義縣114學年度國小組資訊科技競賽練習題，涵蓋公式計算、密碼學、貪婪演算法與清單分組統計。",
  "tasks": [
    {
      "id": "114TCPE02-1",
      "title": "個人綜合所得稅試算",
      "problemTitle": "個人綜合所得稅試算",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "假設某位民眾一整年的課稅所得為固定金額（以「萬元」為單位），系統將依照下列稅率級距計算應繳的所得稅金額：所得收入1～30萬元之間，稅率為5%；所得超過30萬，前30萬扣稅15000元，31～60萬元之間的稅率為10%；所得超過60萬，前60萬扣稅45000元，61～100萬元之間的稅率為15%；所得超過100萬，前100萬扣稅105000元，101萬元以上稅率為20%。本題為教學用簡化模型，不考慮扣除額、免稅額或其他費用。",
      "inputDescription": "輸入一個整數，代表個人全年課稅所得（單位：萬元，1以上）。",
      "outputDescription": "輸出一個整數，代表應繳的所得稅金額（單位：元）。",
      "statement": {
        "description": "假設某位民眾一整年的課稅所得為固定金額（以「萬元」為單位），系統將依照下列稅率級距計算應繳的所得稅金額：所得收入1～30萬元之間，稅率為5%；所得超過30萬，前30萬扣稅15000元，31～60萬元之間的稅率為10%；所得超過60萬，前60萬扣稅45000元，61～100萬元之間的稅率為15%；所得超過100萬，前100萬扣稅105000元，101萬元以上稅率為20%。本題為教學用簡化模型，不考慮扣除額、免稅額或其他費用。",
        "input": "輸入一個整數，代表個人全年課稅所得（單位：萬元，1以上）。",
        "output": "輸出一個整數，代表應繳的所得稅金額（單位：元）。"
      },
      "examples": [
        {
          "input": "20",
          "output": "10000",
          "explanation": "20萬元屬於1～30萬元區間，稅率5%，20×10000×0.05=10000元。"
        },
        {
          "input": "55",
          "output": "40000",
          "explanation": "1～30萬元區間扣稅15000元，31～55萬元區間扣稅25000元，合計40000元。"
        }
      ],
      "testCases": [
        {
          "input": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "120",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "31",
          "score": 10,
          "hidden": false
        },
        {
          "input": "61",
          "score": 10,
          "hidden": false
        },
        {
          "input": "200",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "累進稅率級距計算，練習多層條件判斷與累加公式。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
          "百分比"
        ],
        "context": [
          "生活情境",
          "稅務"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-2",
      "title": "跳馬比賽成績計算",
      "problemTitle": "跳馬比賽成績計算",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "跳馬比賽為求公平性，決議去除評審中較極端的成績。比賽會依賽制等級不同，聘用五至十位不等的評審，各自給予參賽者0至10分的評價。參賽者的最終得分計算方式：讀入五至十位評審的分數（未排序），扣除最高分與最低分各一筆（若有多筆，只刪除其中一筆），將剩餘分數取平均，四捨五入至小數點第三位。",
      "inputDescription": "第一行輸入整數N（5≤N≤10），第二行輸入N個整數（0～10）代表評審分數。",
      "outputDescription": "輸出一個數值，代表去除最高與最低分後、四捨五入至小數點第三位的最終得分。",
      "statement": {
        "description": "跳馬比賽為求公平性，決議去除評審中較極端的成績。比賽會依賽制等級不同，聘用五至十位不等的評審，各自給予參賽者0至10分的評價。參賽者的最終得分計算方式：讀入五至十位評審的分數（未排序），扣除最高分與最低分各一筆（若有多筆，只刪除其中一筆），將剩餘分數取平均，四捨五入至小數點第三位。",
        "input": "第一行輸入整數N（5≤N≤10），第二行輸入N個整數（0～10）代表評審分數。",
        "output": "輸出一個數值，代表去除最高與最低分後、四捨五入至小數點第三位的最終得分。"
      },
      "examples": [
        {
          "input": "5\n9 8 10 6 7",
          "output": "8",
          "explanation": "刪除最高分10與最低分6，剩下9、8、7，平均為(9+8+7)/3=8。"
        },
        {
          "input": "5\n5 5 8 9 10",
          "output": "7.333",
          "explanation": "刪除最高分10與最低分5，剩下5、8、9，平均為(5+8+9)/3=7.333，四捨五入至小數點第三位仍為7.333。"
        }
      ],
      "testCases": [
        {
          "input": "5\n9 8 10 6 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n5 5 7 7 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n9 9 9 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n7 7 8 8 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n1 2 3 4 5 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n0 0 1 1 2 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n10 9 8 7 6 5 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n10 10 0 0 5 5 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10 9 9 9 9 9 9 9 9 0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "【已修正】原先依舊版PDF判例資料誤判為「四捨五入到整數」（見PDF題目來源勘誤紀錄.md舊條目）；比對114EChaiyiC.txt新版10筆評審資料後確認題目文字「四捨五入至小數點第三位」本身沒有錯，舊版PDF判例資料剛好全部整除、誤導成整數規則，此次已更正演算法與測資。",
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
          "四捨五入"
        ],
        "math": [
          "平均值"
        ],
        "context": [
          "體育競賽"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-3",
      "title": "動態密碼轉換",
      "problemTitle": "動態密碼轉換",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小明設計了一種英文字元密碼環編碼規則：密碼環為abcdefghijklmnopqrstuvwxyz。編碼時，字串中的每一個字元皆依密碼環往後移動N個位置；若位移後超出密碼環尾端，則從密碼環開頭繼續計算（環狀結構）。",
      "inputDescription": "第一行輸入整數N（0≤N≤100），第二行輸入一個由小寫英文字母組成的字串。",
      "outputDescription": "輸出一行字串，代表加密後的結果。",
      "statement": {
        "description": "小明設計了一種英文字元密碼環編碼規則：密碼環為abcdefghijklmnopqrstuvwxyz。編碼時，字串中的每一個字元皆依密碼環往後移動N個位置；若位移後超出密碼環尾端，則從密碼環開頭繼續計算（環狀結構）。",
        "input": "第一行輸入整數N（0≤N≤100），第二行輸入一個由小寫英文字母組成的字串。",
        "output": "輸出一行字串，代表加密後的結果。"
      },
      "examples": [
        {
          "input": "2\nbanana",
          "output": "dcpcpc",
          "explanation": "b→d，a→c，n→p，每個字元皆往後移動2個位置。"
        },
        {
          "input": "0\nabc",
          "output": "abc",
          "explanation": "位移0，字串不變。"
        }
      ],
      "testCases": [
        {
          "input": "0\nabc",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nxyz",
          "score": 10,
          "hidden": false
        },
        {
          "input": "26\nhello",
          "score": 10,
          "hidden": false
        },
        {
          "input": "28\naz",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\na",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\npokemon",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25\na",
          "score": 10,
          "hidden": false
        },
        {
          "input": "13\nnop",
          "score": 10,
          "hidden": false
        },
        {
          "input": "52\ncat",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\napple",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "凱薩密碼環狀位移，練習mod運算與字元查表對應。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-4",
      "title": "籃球機得分計算",
      "problemTitle": "籃球機得分計算",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "雙打籃球機在每場遊戲中提供1P、2P兩位玩家5～10次不等的投籃機會。每投進1球得1分，未投進得0分。若某次投籃進球，且前一次投籃也進球，則該次投籃得3分；若進球但前一次未進球（或為第一球），則得1分。請模擬籃球機的得分計算，輸出兩位玩家單場遊戲的總得分，以及獲勝的玩家名稱（若同分則顯示「不分勝負」）。",
      "inputDescription": "第一行輸入整數N（5～10），第二行輸入N個0或1代表1P玩家每次投籃是否命中，第三行輸入N個0或1代表2P玩家每次投籃是否命中。",
      "outputDescription": "輸出一行：1P總分、2P總分、勝出玩家名稱，以空白分隔。",
      "statement": {
        "description": "雙打籃球機在每場遊戲中提供1P、2P兩位玩家5～10次不等的投籃機會。每投進1球得1分，未投進得0分。若某次投籃進球，且前一次投籃也進球，則該次投籃得3分；若進球但前一次未進球（或為第一球），則得1分。請模擬籃球機的得分計算，輸出兩位玩家單場遊戲的總得分，以及獲勝的玩家名稱（若同分則顯示「不分勝負」）。",
        "input": "第一行輸入整數N（5～10），第二行輸入N個0或1代表1P玩家每次投籃是否命中，第三行輸入N個0或1代表2P玩家每次投籃是否命中。",
        "output": "輸出一行：1P總分、2P總分、勝出玩家名稱，以空白分隔。"
      },
      "examples": [
        {
          "input": "5\n1 0 1 1 0\n0 1 1 1 1",
          "output": "5 10 2P",
          "explanation": "1P得分1+0+1+3+0=5；2P得分0+1+3+3+3=10；2P勝出。"
        },
        {
          "input": "7\n1 0 1 1 0 1 0\n0 1 1 0 1 0 1",
          "output": "6 6 不分勝負",
          "explanation": "兩人同分6分，不分勝負。"
        }
      ],
      "testCases": [
        {
          "input": "5\n0 1 0 1 0\n0 0 0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n1 1 1 0 1 0\n0 1 1 1 1 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n0 1 0 1 0 1 0 1 0\n0 0 0 0 0 0 0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n1 1 0 1 1 0 1 1\n1 1 1 0 1 1 1 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 1 0 1 1 0 1\n1 1 0 1 1 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 1 1 1\n1 0 1 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0 0 0 0 0 0 0 0 0 0\n1 1 1 1 1 1 1 1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n1 0 0 0 0 1\n1 0 0 0 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n0 1 1 0 1 1 0\n1 1 0 0 0 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n1 0 1 0 1 0 1 0\n0 1 0 1 0 1 0 1",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "連續進球加成計分，練習追蹤前一筆狀態（streak）。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "狀態追蹤"
        ],
        "algorithm": [
          "模擬"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
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
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-5",
      "title": "無人搬運車運送計算",
      "problemTitle": "無人搬運車運送計算",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "智慧工廠中使用一輛無人搬運車（AGV），每一趟最大可承載重量為200公斤。零件依序排隊裝載，無人搬運車依序將零件放上車並累加重量。若某一件零件放上車後累計重量超過200公斤，則該零件不放入本趟車次，無人搬運車立刻出發，該零件改由下一趟車次運送。請計算無人搬運車最少需要出發幾趟。",
      "inputDescription": "第一行輸入整數N代表零件件數，第二行輸入N個整數代表每件零件的重量。",
      "outputDescription": "輸出一個整數，代表無人搬運車最少需要出發的趟數。",
      "statement": {
        "description": "智慧工廠中使用一輛無人搬運車（AGV），每一趟最大可承載重量為200公斤。零件依序排隊裝載，無人搬運車依序將零件放上車並累加重量。若某一件零件放上車後累計重量超過200公斤，則該零件不放入本趟車次，無人搬運車立刻出發，該零件改由下一趟車次運送。請計算無人搬運車最少需要出發幾趟。",
        "input": "第一行輸入整數N代表零件件數，第二行輸入N個整數代表每件零件的重量。",
        "output": "輸出一個整數，代表無人搬運車最少需要出發的趟數。"
      },
      "examples": [
        {
          "input": "6\n50 60 40 70 90 30",
          "output": "2",
          "explanation": "第一趟50+60+40+70=220>200不行，改成50+60+40=150，第70件開始第二趟70+90+30=190。共2趟。"
        },
        {
          "input": "5\n80 90 60 30 40",
          "output": "2",
          "explanation": "第一趟80+90=170，加60會超過200，出發；第二趟60+30+40=130，出發。共2趟。"
        }
      ],
      "testCases": [
        {
          "input": "9\n50 60 40 70 90 30 80 90 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n80 90 60 30 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n100 50 60 70 80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n200 200 200 200 200",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n10 20 30 40 50 60 70 80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n199 1 199 1 199 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n150 150 150 150",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n50 50 50 50 50 50 50 50 50 50",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "【PDF題目文字與實際資料不符，已記錄於PDF題目來源勘誤紀錄.md】原始PDF範例一的說明文字宣稱6個數字[50,60,40,70,90,30]需要3趟，但用「累計重量嚴格大於200才拒絕裝載」的演算法交叉驗證全部5筆評審資料（含此範例本身的輸入）皆完全吻合，正確答案應為2趟，範例一的文字解說有誤。範例輸出區改用交叉驗證後的正確值。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "貪婪演算法"
        ],
        "subConcepts": [
          "迴圈"
        ],
        "algorithm": [
          "貪婪法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
          "條件判斷"
        ],
        "math": [],
        "context": [
          "物流情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-6",
      "title": "寶可夢訓練師-計算平均等級",
      "problemTitle": "寶可夢訓練師-計算平均等級",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請設計一個程式，輸入多隻寶可夢的等級，計算並輸出牠們的平均等級（無條件捨去至整數）。",
      "inputDescription": "第一行輸入整數N（1≤N≤20），第二行輸入N個整數代表每隻寶可夢的等級（1≤等級≤100）。",
      "outputDescription": "輸出一個整數，代表所有寶可夢等級的平均值（無條件捨去）。",
      "statement": {
        "description": "請設計一個程式，輸入多隻寶可夢的等級，計算並輸出牠們的平均等級（無條件捨去至整數）。",
        "input": "第一行輸入整數N（1≤N≤20），第二行輸入N個整數代表每隻寶可夢的等級（1≤等級≤100）。",
        "output": "輸出一個整數，代表所有寶可夢等級的平均值（無條件捨去）。"
      },
      "examples": [
        {
          "input": "4\n10 20 30 40",
          "output": "25",
          "explanation": "平均值=(10+20+30+40)÷4=25。"
        },
        {
          "input": "3\n7 8 10",
          "output": "8",
          "explanation": "平均值=25÷3=8.33，無條件捨去後為8。"
        }
      ],
      "testCases": [
        {
          "input": "1\n50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n10 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n7 8 9 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 100 100 100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20\n10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n1 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n33 33 33",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 11 12 13 14",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n99 99 99 99 99 99",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 1 1 1",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "基礎平均值計算加無條件捨去，適合作為系列題的第一題。",
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
          "平均值"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "無條件捨去"
        ],
        "math": [
          "平均值"
        ],
        "context": [
          "遊戲情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-7",
      "title": "寶可夢訓練師-找最高等級",
      "problemTitle": "寶可夢訓練師-找最高等級",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請設計一個程式，輸入多隻寶可夢的名稱與等級，找出等級最高的寶可夢名稱（本題保證不會有等級相同的情況，寶可夢名稱不包含空白字元）。",
      "inputDescription": "第一行輸入整數N（1≤N≤20），第二行輸入2N筆資料，依序為「寶可夢名稱 等級」。",
      "outputDescription": "輸出一行文字，代表等級最高的寶可夢名稱。",
      "statement": {
        "description": "請設計一個程式，輸入多隻寶可夢的名稱與等級，找出等級最高的寶可夢名稱（本題保證不會有等級相同的情況，寶可夢名稱不包含空白字元）。",
        "input": "第一行輸入整數N（1≤N≤20），第二行輸入2N筆資料，依序為「寶可夢名稱 等級」。",
        "output": "輸出一行文字，代表等級最高的寶可夢名稱。"
      },
      "examples": [
        {
          "input": "3\n皮卡丘 25 小火龍 12 妙蛙種子 18",
          "output": "皮卡丘",
          "explanation": "共有3隻寶可夢，等級最高的是皮卡丘（25）。"
        },
        {
          "input": "4\n傑尼龜 10 伊布 15 卡比獸 35 胖丁 2",
          "output": "卡比獸",
          "explanation": "共有4隻寶可夢，卡比獸等級最高（35）。"
        }
      ],
      "testCases": [
        {
          "input": "1\n皮卡丘 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n小火龍 12 妙蛙種子 18 傑尼龜 15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nA 5 B 20 C 15 D 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n皮卡丘 22 伊布 30 卡比獸 28 超夢 100 胖丁 18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\nP1 3 P2 6 P3 9 P4 12 P5 15 P6 18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nX 50 Y 49",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nBulbasaur 5 Charmander 10 Squirtle 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nA 1 B 2 C 3 D 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nZ 99 Y 98 X 97 W 96 V 95",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nFirst 10 Second 20",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "【已修正】原先依舊版PDF判例資料誤判為「輸出等級數字」（見PDF題目來源勘誤紀錄.md舊條目）；比對114EChaiyiC.txt新版10筆評審資料後確認題目文字「找出等級最高的寶可夢名稱」本身沒有錯，此次已更正演算法（改為同步追蹤名稱）與測資。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "統計"
        ],
        "subConcepts": [
          "最大值"
        ],
        "algorithm": [
          "最大值"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "比較運算"
        ],
        "math": [],
        "context": [
          "遊戲情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-8",
      "title": "寶可夢訓練師-列出平均等級以上",
      "problemTitle": "寶可夢訓練師-列出平均等級以上",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請綜合前面的概念，輸入寶可夢名稱與等級，計算平均等級後，依照輸入出現順序，輸出所有等級高於平均值的寶可夢名稱。",
      "inputDescription": "第一行輸入整數N，第二行輸入N個寶可夢名稱及等級資料，以空白間隔。",
      "outputDescription": "輸出所有等級高於平均值的寶可夢名稱，依原順序、以空白分隔；若沒有符合的則輸出空字串。",
      "statement": {
        "description": "請綜合前面的概念，輸入寶可夢名稱與等級，計算平均等級後，依照輸入出現順序，輸出所有等級高於平均值的寶可夢名稱。",
        "input": "第一行輸入整數N，第二行輸入N個寶可夢名稱及等級資料，以空白間隔。",
        "output": "輸出所有等級高於平均值的寶可夢名稱，依原順序、以空白分隔；若沒有符合的則輸出空字串。"
      },
      "examples": [
        {
          "input": "3\n皮卡丘 25 小火龍 12 妙蛙種子 18",
          "output": "皮卡丘",
          "explanation": "平均等級為18.33，只有皮卡丘(25)高於平均。"
        },
        {
          "input": "4\n傑尼龜 10 伊布 15 卡比獸 20 胖丁 20",
          "output": "卡比獸 胖丁",
          "explanation": "平均等級為16.25，卡比獸與胖丁高於平均。"
        }
      ],
      "testCases": [
        {
          "input": "1\n皮卡丘 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n伊布 15 胖丁 15 乘龍 10 卡比獸 20 妙蛙種子 15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n妙蛙種子 30 皮卡丘 30 小火龍 30 傑尼龜 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n小火龍 100 皮卡丘 0 伊布 50 卡比獸 50 胖丁 50 超夢 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n皮卡丘 25 皮卡丘 30 妙蛙種子 18 小火龍 12 傑尼龜 40 伊布 35 卡比獸 28 胖丁 28",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nA 10 B 20 C 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nX 1 Y 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nP1 10 P2 11 P3 10 P4 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nA 100 B 10 C 10 D 10 E 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nM1 50 M2 51 M3 50 M4 49",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要先讀完全部資料算出平均值，再回頭比對每一筆，練習兩個平行清單搭配二次掃描。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "雙重掃描"
        ],
        "algorithm": [
          "篩選"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈",
          "比較運算"
        ],
        "math": [
          "平均值"
        ],
        "context": [
          "遊戲情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    },
    {
      "id": "114TCPE02-9",
      "title": "寶可夢訓練師-統計屬性數量",
      "problemTitle": "寶可夢訓練師-統計屬性數量",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請設計一個程式，輸入多隻寶可夢的屬性，輸出各屬性寶可夢的數量統計結果。程式需依照屬性第一次出現的順序，輸出每個屬性與該屬性寶可夢數量，格式為「屬性數量」（屬性與數量間不留空白）；不同組別之間以一個空白隔開；若屬性重複，只輸出一次。",
      "inputDescription": "第一行輸入整數N，第二行輸入N個寶可夢屬性名稱，以空白間隔。",
      "outputDescription": "依首次出現順序輸出「屬性數量」配對（屬性與數量間不留空白），組別之間以空白分隔。",
      "statement": {
        "description": "請設計一個程式，輸入多隻寶可夢的屬性，輸出各屬性寶可夢的數量統計結果。程式需依照屬性第一次出現的順序，輸出每個屬性與該屬性寶可夢數量，格式為「屬性數量」（屬性與數量間不留空白）；不同組別之間以一個空白隔開；若屬性重複，只輸出一次。",
        "input": "第一行輸入整數N，第二行輸入N個寶可夢屬性名稱，以空白間隔。",
        "output": "依首次出現順序輸出「屬性數量」配對（屬性與數量間不留空白），組別之間以空白分隔。"
      },
      "examples": [
        {
          "input": "5\n火 水 火 電 水",
          "output": "火2 水2 電1",
          "explanation": "依首次出現順序統計後輸出：火2 水2 電1。"
        },
        {
          "input": "4\n草 草 毒 草",
          "output": "草3 毒1",
          "explanation": "輸出結果為：草3 毒1。"
        }
      ],
      "testCases": [
        {
          "input": "9\n火 水 火 電 水 草 草 毒 草",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n水 火 電 水 草 水 電 草",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n草",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n水 水 水 水 水",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n電 火 草 電 火 水",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n冰 龍 冰 龍",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n光 暗 光 暗 無",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n超能 格鬥 超能",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\nA B C A B C D",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\nX Y Z X Y Z X Y Z W",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "【已修正】原先誤用「屬性 數量」（中間留空白）的輸出格式；比對114EChaiyiC.txt新版評審資料的說明文字「格式為『屬性數量』（屬性與數量間不留空白）」後更正為無空白格式。依首次出現順序做分組計數，練習用清單搜尋（indexOf）判斷是否為新類別。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "分組計數"
        ],
        "algorithm": [
          "計數統計"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "清單搜尋"
        ],
        "math": [],
        "context": [
          "遊戲情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE02",
      "courseName": "114-嘉義縣國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114EChaiyiC",
    "convertedAt": "2026-08-13T00:39:19.912Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
