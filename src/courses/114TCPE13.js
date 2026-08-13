// 競賽模式版本，2026-08-13由 114ETaitung.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE13",
  "title": "114-臺東縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "臺東縣114學年度國小組資訊科技競賽練習題，其中3題與新北市題組概念相同(BMI/計分/樂透)，公式計算與清單搜尋為主。",
  "tasks": [
    {
      "id": "114TCPE13-1",
      "title": "奇緣蛋糕特賣",
      "problemTitle": "奇緣蛋糕特賣",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "所有蛋糕原價皆為300元，每筆訂單運費為80元。請根據顧客購買的蛋糕數量，計算出最終應支付的總金額。\n促銷活動規則：\n1. 蛋糕折扣(根據購買個數N)\n• 1~5 個：9折優惠\n• 6~10 個：8折優惠\n• 11~15 個：7折優惠\n• 16以上：6折優惠\n2. 運費規則，若折扣後滿1200元，再享受免運優惠。\n請設計一個程式讀入購買蛋糕數量，然後根據促銷活動規則，計算出最終應支付的總金額。",
      "inputDescription": "輸入一個整數，代表購買的蛋糕數量。",
      "outputDescription": "輸出一個整數，代表最終應支付的總金額。",
      "statement": {
        "description": "所有蛋糕原價皆為300元，每筆訂單運費為80元。請根據顧客購買的蛋糕數量，計算出最終應支付的總金額。\n促銷活動規則：\n1. 蛋糕折扣(根據購買個數N)\n• 1~5 個：9折優惠\n• 6~10 個：8折優惠\n• 11~15 個：7折優惠\n• 16以上：6折優惠\n2. 運費規則，若折扣後滿1200元，再享受免運優惠。\n請設計一個程式讀入購買蛋糕數量，然後根據促銷活動規則，計算出最終應支付的總金額。",
        "input": "輸入一個整數，代表購買的蛋糕數量。",
        "output": "輸出一個整數，代表最終應支付的總金額。"
      },
      "examples": [
        {
          "input": "4",
          "output": "1160",
          "explanation": "4*300*0.9=1080 1080+80=1160"
        },
        {
          "input": "17",
          "output": "3060",
          "explanation": "17*300*0.6=3060 3060+0=3060"
        }
      ],
      "testCases": [
        {
          "input": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "17",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1",
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
          "input": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "依購買數量分級折扣，並判斷折扣後金額是否達到免運門檻，練習多層if。",
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
          "百分比"
        ],
        "context": [
          "生活情境",
          "購物"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE13",
      "courseName": "114-臺東縣國小（競賽模式）"
    },
    {
      "id": "114TCPE13-2",
      "title": "健康小管家",
      "problemTitle": "健康小管家",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。它根據身高和體重計算得出，是國際上衡量肥胖程度的標準之一。\nBMI估算公式如下：\nBMI=體重(kg)/身高(m*m)\n計算範例\n身高(165cm)體重(45kg)\nBMI=45/(1.65*1.65)=16.52 (取小數點後一位)為16.5\n程式計算出 BMI 數值(取小數點後一位)後，會用這個標準來分類：\n• 小於18.5：體重過輕(Underweight)\n• 18.5到24.9：正常範圍(Normal range)\n• 25.0到29.9：體重過重(Overweight)\n• 30.0到34.9：輕度肥胖(Obesity Class I)\n• 35.0到39.9：中度肥胖(Obesity Class II)\n• 40.0以上：重度肥胖(Obesity Class III)\n請設計一個程式讀入身高與體重，然後根據BMI分類等級，計算出BMI值及BMI 分類等級。",
      "inputDescription": "第一行輸入身高(cm)。\n第二行輸入體重(kg)。",
      "outputDescription": "輸出BMI值與分類等級名稱，中間以半形空白隔開。",
      "statement": {
        "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。它根據身高和體重計算得出，是國際上衡量肥胖程度的標準之一。\nBMI估算公式如下：\nBMI=體重(kg)/身高(m*m)\n計算範例\n身高(165cm)體重(45kg)\nBMI=45/(1.65*1.65)=16.52 (取小數點後一位)為16.5\n程式計算出 BMI 數值(取小數點後一位)後，會用這個標準來分類：\n• 小於18.5：體重過輕(Underweight)\n• 18.5到24.9：正常範圍(Normal range)\n• 25.0到29.9：體重過重(Overweight)\n• 30.0到34.9：輕度肥胖(Obesity Class I)\n• 35.0到39.9：中度肥胖(Obesity Class II)\n• 40.0以上：重度肥胖(Obesity Class III)\n請設計一個程式讀入身高與體重，然後根據BMI分類等級，計算出BMI值及BMI 分類等級。",
        "input": "第一行輸入身高(cm)。\n第二行輸入體重(kg)。",
        "output": "輸出BMI值與分類等級名稱，中間以半形空白隔開。"
      },
      "examples": [
        {
          "input": "165\n45",
          "output": "16.5 體重過輕(Underweight)",
          "explanation": "BMI=45/(1.65*1.65)=16.5 (取小數點後一位) 16.5 小於18.5 輸出體重過輕"
        },
        {
          "input": "180\n85",
          "output": "26.2 體重過重(Overweight)",
          "explanation": "BMI=85/(1.8*1.8)=26.2 (取小數點後一位) 26.2在25.0到29.9輸出體重過重"
        }
      ],
      "testCases": [
        {
          "input": "165\n45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n85",
          "score": 10,
          "hidden": false
        },
        {
          "input": "168\n90",
          "score": 10,
          "hidden": false
        },
        {
          "input": "160\n120",
          "score": 10,
          "hidden": false
        },
        {
          "input": "150\n80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "175\n75",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n95",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n120",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "與新北市「健康小管家」同款BMI分級計算，額外附上英文分類名稱。",
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
          "BMI公式"
        ],
        "context": [
          "健康情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE13",
      "courseName": "114-臺東縣國小（競賽模式）"
    },
    {
      "id": "114TCPE13-3",
      "title": "鋼琴小天才計分挑戰",
      "problemTitle": "鋼琴小天才計分挑戰",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在一年一度的「鋼琴小天才大賽」中，選手們都準備好了精彩的演奏。為了讓比賽結果公平公正，評審團決定採用一套特別的計分方式！\n比賽規則：\n• 比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。\n• 為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除(不計算)。\n• 選手的最終總成績就是剩下那5位評審給的分數總和。\n請你設計一個電腦程式，來幫助裁判計算每一位選手的最終總成績。你需要輸入7位評審給的7個分數(順序可以很亂)，然後輸出選手的最終總成績。",
      "inputDescription": "七行輸入，每行一個數字，代表評審的分數。",
      "outputDescription": "輸出一個數值，代表選手的最終總成績。",
      "statement": {
        "description": "在一年一度的「鋼琴小天才大賽」中，選手們都準備好了精彩的演奏。為了讓比賽結果公平公正，評審團決定採用一套特別的計分方式！\n比賽規則：\n• 比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。\n• 為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除(不計算)。\n• 選手的最終總成績就是剩下那5位評審給的分數總和。\n請你設計一個電腦程式，來幫助裁判計算每一位選手的最終總成績。你需要輸入7位評審給的7個分數(順序可以很亂)，然後輸出選手的最終總成績。",
        "input": "七行輸入，每行一個數字，代表評審的分數。",
        "output": "輸出一個數值，代表選手的最終總成績。"
      },
      "examples": [
        {
          "input": "8\n9\n7\n9\n8\n10\n7",
          "output": "41",
          "explanation": "最高分10最低分7 7個成績總和扣除(最高及最低) 8+9+7+9+8=41"
        },
        {
          "input": "1.5\n2.5\n3.5\n4.5\n5.5\n6.5\n7.5",
          "output": "22.5",
          "explanation": "最高分7.5 最低分1.5 7個成績總和扣除(最高及最低) 2.5+3.5+4.5+5.5+6.5=22.5"
        }
      ],
      "testCases": [
        {
          "input": "6\n6\n6\n6\n6\n6 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n8\n9\n8\n7\n8\n9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n9.1\n9.2\n9.3\n9.4\n9.5 9.6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n5\n7\n8\n10\n9 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n8\n4\n8\n6\n6 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n2\n3\n4\n5\n6 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10\n10\n10\n10\n10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n0\n0\n0\n0\n0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9.5\n8.5\n7.5\n9\n8\n10 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2.2\n3.3\n4.4\n5.5\n6.6\n7.7 8.8",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定7個分數扣除一高一低後加總，與新北市同款題目的變化版(改用7次個別輸入)。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
          "比較運算"
        ],
        "math": [],
        "context": [
          "競賽情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE13",
      "courseName": "114-臺東縣國小（競賽模式）"
    },
    {
      "id": "114TCPE13-4",
      "title": "幸運號碼大樂透",
      "problemTitle": "幸運號碼大樂透",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在「玩具王國」裡，大家都在玩一種叫做「幸運數字樂透」的小遊戲！這個遊戲很簡單，數字的範圍是1到99。\n• 每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券。\n• 每期開獎，玩具王國會公布10個幸運號碼。\n玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼。\n本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。\n中獎獎金規則：\n• 5個：100,000 (頭獎)\n• 4個：10,000 (貳獎)\n• 3個：2,000 (參獎)\n• 2個：500 (肆獎)\n• 1個：200 (伍獎)\n• 0個：0 (沒中獎)\n請你設計一個電腦程式，來幫助玩家快速計算他們中了多少獎金。你需要輸入玩家選擇的5個號碼，然後輸出他能猜中號碼的個數及獲得的中獎金額。",
      "inputDescription": "五行輸入，每行一個號碼。(或以空白分隔五個數字)",
      "outputDescription": "輸出一行字串，格式為「猜中X個號碼,獎金Y元」。",
      "statement": {
        "description": "在「玩具王國」裡，大家都在玩一種叫做「幸運數字樂透」的小遊戲！這個遊戲很簡單，數字的範圍是1到99。\n• 每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券。\n• 每期開獎，玩具王國會公布10個幸運號碼。\n玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼。\n本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。\n中獎獎金規則：\n• 5個：100,000 (頭獎)\n• 4個：10,000 (貳獎)\n• 3個：2,000 (參獎)\n• 2個：500 (肆獎)\n• 1個：200 (伍獎)\n• 0個：0 (沒中獎)\n請你設計一個電腦程式，來幫助玩家快速計算他們中了多少獎金。你需要輸入玩家選擇的5個號碼，然後輸出他能猜中號碼的個數及獲得的中獎金額。",
        "input": "五行輸入，每行一個號碼。(或以空白分隔五個數字)",
        "output": "輸出一行字串，格式為「猜中X個號碼,獎金Y元」。"
      },
      "examples": [
        {
          "input": "7\n18\n29\n31\n35",
          "output": "猜中2個號碼,獎金500元",
          "explanation": "2個號碼相同，獎金500元"
        },
        {
          "input": "1\n2\n3\n4\n5",
          "output": "猜中0個號碼,獎金0元",
          "explanation": "0個號碼相同，獎金0元"
        }
      ],
      "testCases": [
        {
          "input": "7 24 31 42 45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "42 56 63 78 80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 42 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "56 63 78 80 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "56 63 78 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "99 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 2 3",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "與新北市「幸運號碼大樂透」同款，輸出格式多一個逗號。",
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
      },
      "courseCode": "114TCPE13",
      "courseName": "114-臺東縣國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114ETaitung",
    "convertedAt": "2026-08-13T00:39:19.964Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
