// 競賽模式版本，2026-08-13由 114ENewTaipei.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE08",
  "title": "114-新北市國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "新北市114學年度資訊科技組參考題目，涵蓋公式計算、清單搜尋與迴圈加總。",
  "tasks": [
    {
      "id": "114TCPE08-1",
      "title": "健康小管家",
      "problemTitle": "健康小管家",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。BMI=體重(kg)/(身高(m)×身高(m))。程式計算出BMI數值（取小數點後一位）後，依分類等級判斷：小於18.5為體重過輕；18.5到24.9為正常範圍；25.0到29.9為體重過重；30.0到34.9為輕度肥胖；35.0到39.9為中度肥胖；40.0以上為重度肥胖。",
      "inputDescription": "第一行輸入身高（cm），第二行輸入體重（kg）。",
      "outputDescription": "輸出BMI數值（取小數點後一位）與對應的分類等級，以空白分隔。",
      "statement": {
        "description": "身體質量指數(BMI)是一種常用的衡量指標，用於評估一個人的體重是否在健康的範圍內。BMI=體重(kg)/(身高(m)×身高(m))。程式計算出BMI數值（取小數點後一位）後，依分類等級判斷：小於18.5為體重過輕；18.5到24.9為正常範圍；25.0到29.9為體重過重；30.0到34.9為輕度肥胖；35.0到39.9為中度肥胖；40.0以上為重度肥胖。",
        "input": "第一行輸入身高（cm），第二行輸入體重（kg）。",
        "output": "輸出BMI數值（取小數點後一位）與對應的分類等級，以空白分隔。"
      },
      "examples": [
        {
          "input": "165\n45",
          "output": "16.5 體重過輕",
          "explanation": "BMI=45/(1.65×1.65)=16.5，小於18.5，屬於體重過輕。"
        },
        {
          "input": "180\n85",
          "output": "26.2 體重過重",
          "explanation": "BMI=85/(1.8×1.8)=26.2，在25.0到29.9之間，屬於體重過重。"
        }
      ],
      "testCases": [
        {
          "input": "165\n45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "180\n85",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "160\n81",
          "score": 10,
          "hidden": false
        },
        {
          "input": "150\n85",
          "score": 10,
          "hidden": false
        },
        {
          "input": "150\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "170\n50",
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
        "note": "公式計算搭配四捨五入到小數點後一位（需用「乘10取整除10」湊出精度），再對照級距分類。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
      "courseCode": "114TCPE08",
      "courseName": "114-新北市國小（競賽模式）"
    },
    {
      "id": "114TCPE08-2",
      "title": "鋼琴小天才計分挑戰",
      "problemTitle": "鋼琴小天才計分挑戰",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除，選手的最終總成績就是剩下那5位評審給的分數總和。",
      "inputDescription": "輸入7個分數（可能為小數），以空白分隔，順序可以很亂。",
      "outputDescription": "輸出扣除最高與最低分後，剩餘5個分數的總和。",
      "statement": {
        "description": "比賽聘請了7位專業評審，他們會給每位選手一個1分到10分的分數。為了避免有評審給分太高或太低，影響比賽的公平性，最終計算總成績時，會將這7個分數中最高的1個分數和最低的1個分數都扣除，選手的最終總成績就是剩下那5位評審給的分數總和。",
        "input": "輸入7個分數（可能為小數），以空白分隔，順序可以很亂。",
        "output": "輸出扣除最高與最低分後，剩餘5個分數的總和。"
      },
      "examples": [
        {
          "input": "8 9 7 9 8 10 7",
          "output": "41",
          "explanation": "最高分10最低分7，7個成績總和扣除(最高及最低)：8+9+7+9+8=41。"
        },
        {
          "input": "1.5 2.5 3.5 4.5 5.5 6.5 7.5",
          "output": "22.5",
          "explanation": "最高分7.5最低分1.5，剩餘總和2.5+3.5+4.5+5.5+6.5=22.5。"
        }
      ],
      "testCases": [
        {
          "input": "8 9 7 9 8 10 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1.5 2.5 3.5 4.5 5.5 6.5 7.5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10 10 10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 0 0 0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5 5 5 5 10 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9.5 8.5 7.5 9 8 10 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5 6 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 9 8 7 6 5 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 10 10 10 10 10 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2.2 3.3 4.4 5.5 6.6 7.7 8.8",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定7個分數扣除一個最高一個最低後加總，可用「總和-最大值-最小值」的算術等價法。【資料備註】114ENewTaipei.txt評審資料第7筆原文預期答案為「15」，與其餘9筆完全吻合的演算法算出的「20」不符，判定為來源資料獨立輸入錯誤，題庫依演算法結果收錄為20。",
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
      "courseCode": "114TCPE08",
      "courseName": "114-新北市國小（競賽模式）"
    },
    {
      "id": "114TCPE08-3",
      "title": "幸運號碼大樂透",
      "problemTitle": "幸運號碼大樂透",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "玩具王國的幸運數字樂透遊戲：每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券，每期開獎公布10個幸運號碼。本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼：5個對中10萬元，4個1萬元，3個2000元，2個500元，1個200元，0個0元。",
      "inputDescription": "輸入玩家選擇的5個號碼，以空白分隔。",
      "outputDescription": "輸出「猜中X個號碼獎金Y元」。",
      "statement": {
        "description": "玩具王國的幸運數字樂透遊戲：每位玩家可以從1到99中，挑選5個不同的號碼作為自己的彩券，每期開獎公布10個幸運號碼。本期的幸運號碼是：7、24、31、42、45、56、63、78、80、99。玩家的中獎金額取決於他選的5個號碼中，有多少個號碼對中了當期的10個幸運號碼：5個對中10萬元，4個1萬元，3個2000元，2個500元，1個200元，0個0元。",
        "input": "輸入玩家選擇的5個號碼，以空白分隔。",
        "output": "輸出「猜中X個號碼獎金Y元」。"
      },
      "examples": [
        {
          "input": "7 18 29 31 35",
          "output": "猜中2個號碼獎金500元",
          "explanation": "7與31對中本期幸運號碼，共2個號碼相同，獎金500元。"
        },
        {
          "input": "1 2 3 4 5",
          "output": "猜中0個號碼獎金0元",
          "explanation": "沒有號碼相同，獎金0元。"
        }
      ],
      "testCases": [
        {
          "input": "7 18 29 31 35",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 42 45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 42 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 24 31 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "56 63 78 80 99",
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
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定的幸運號碼清單搭配對獎規則，練習清單搜尋（indexOf）判斷是否存在。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
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
      "courseCode": "114TCPE08",
      "courseName": "114-新北市國小（競賽模式）"
    },
    {
      "id": "114TCPE08-4",
      "title": "小隊長的奇數號碼",
      "problemTitle": "小隊長的奇數號碼",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "老師給了小隊長兩個號碼：一個起始號碼和一個結束號碼。小隊長的任務是找出這兩個號碼之間（包含這兩個號碼）所有奇數的號碼牌，並把這些號碼加起來，算出最後的總和。",
      "inputDescription": "輸入兩行，分別為起始號碼與結束號碼。",
      "outputDescription": "輸出起始與結束號碼之間（含端點）所有奇數的總和。",
      "statement": {
        "description": "老師給了小隊長兩個號碼：一個起始號碼和一個結束號碼。小隊長的任務是找出這兩個號碼之間（包含這兩個號碼）所有奇數的號碼牌，並把這些號碼加起來，算出最後的總和。",
        "input": "輸入兩行，分別為起始號碼與結束號碼。",
        "output": "輸出起始與結束號碼之間（含端點）所有奇數的總和。"
      },
      "examples": [
        {
          "input": "10\n20",
          "output": "75",
          "explanation": "11+13+15+17+19=75。"
        },
        {
          "input": "31\n39",
          "output": "175",
          "explanation": "31+33+35+37+39=175。"
        }
      ],
      "testCases": [
        {
          "input": "10\n20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "31\n39",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n11",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n200",
          "score": 10,
          "hidden": false
        },
        {
          "input": "21\n25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n9",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "與台南「偶數和」概念相同，改為找奇數，並保守處理輸入順序（起始不一定比結束小）。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "列舉"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
          "餘數"
        ],
        "math": [
          "奇偶數"
        ],
        "context": [
          "數學情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE08",
      "courseName": "114-新北市國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114ENewTaipei",
    "convertedAt": "2026-08-13T00:39:19.948Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
