// 競賽模式版本，2026-08-13由 114ETainan.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE11",
  "title": "114-臺南市國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "臺南市114學年度國小組資訊科技競賽練習題，涵蓋迴圈加總、條件判斷與字串逐字元檢查。",
  "tasks": [
    {
      "id": "114TCPE11-1",
      "title": "偶數和",
      "problemTitle": "偶數和",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請設計一個程式，輸入二個正整數（由小到大），計算出二個正整數之間，所有偶數的和。",
      "inputDescription": "輸入兩行，第一行為起始數，第二行為結束數（保證起始數 <= 結束數）。",
      "outputDescription": "輸出一個整數，代表起始數到結束數之間（含端點）所有偶數的總和。",
      "statement": {
        "description": "請設計一個程式，輸入二個正整數（由小到大），計算出二個正整數之間，所有偶數的和。",
        "input": "輸入兩行，第一行為起始數，第二行為結束數（保證起始數 <= 結束數）。",
        "output": "輸出一個整數，代表起始數到結束數之間（含端點）所有偶數的總和。"
      },
      "examples": [
        {
          "input": "10\n20",
          "output": "90",
          "explanation": "10 至 20 間的偶數有 10、12、14、16、18、20，和為 90。"
        },
        {
          "input": "31\n39",
          "output": "140",
          "explanation": "31 至 39 間的偶數有 32、34、36、38，和為 140。"
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
          "input": "1\n20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20\n41",
          "score": 10,
          "hidden": false
        },
        {
          "input": "99\n111",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1000\n1010",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定範圍內找偶數並加總，練習迴圈與條件判斷，沒有陷阱。",
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
          "餘數",
          "比較運算"
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
      "courseCode": "114TCPE11",
      "courseName": "114-臺南市國小（競賽模式）"
    },
    {
      "id": "114TCPE11-2",
      "title": "三角形",
      "problemTitle": "三角形",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "已知一個三角形的任意兩邊和必定大於第三邊，請寫一個程式，一次輸入三個正整數，判斷能否組成一個三角形。",
      "inputDescription": "一次輸入三個正整數，以半形空格間隔。",
      "outputDescription": "若能組成三角形輸出 yes，否則輸出 no。",
      "statement": {
        "description": "已知一個三角形的任意兩邊和必定大於第三邊，請寫一個程式，一次輸入三個正整數，判斷能否組成一個三角形。",
        "input": "一次輸入三個正整數，以半形空格間隔。",
        "output": "若能組成三角形輸出 yes，否則輸出 no。"
      },
      "examples": [
        {
          "input": "9 6 8",
          "output": "yes",
          "explanation": "符合「任意兩邊和必定大於第三邊」，可以組成一個三角形。"
        },
        {
          "input": "1 2 3",
          "output": "no",
          "explanation": "不符合「任意兩邊和必定大於第三邊」，不可以組成一個三角形。"
        }
      ],
      "testCases": [
        {
          "input": "9 6 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 60 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 8 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12 5 13",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 10 5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "三角形不等式判斷，需要同時檢查三組兩邊和，練習AND邏輯組合。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "條件判斷"
        ],
        "subConcepts": [
          "邏輯運算"
        ],
        "algorithm": [
          "條件檢查"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "AND",
          "比較運算"
        ],
        "math": [
          "三角形不等式"
        ],
        "context": [
          "數學情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE11",
      "courseName": "114-臺南市國小（競賽模式）"
    },
    {
      "id": "114TCPE11-3",
      "title": "刮刮樂",
      "problemTitle": "刮刮樂",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小哲彩券公司推出一種六六大順的刮刮樂，每張刮刮樂上面有三個 0~9 的數字。如果出現一個數字 6，可以得到 100 元；出現二個數字 6，可以得到 200 元；出現三個數字 6，可以得到 500 元。以上三種得獎方式，只能選擇獎金最高的一種來領取。現在給你一張刮刮樂上的三個數字，請問你可以得到多少獎金。",
      "inputDescription": "輸入一個由三個 0~9 數字組成的字串。",
      "outputDescription": "輸出一個整數，代表可以得到的獎金。",
      "statement": {
        "description": "小哲彩券公司推出一種六六大順的刮刮樂，每張刮刮樂上面有三個 0~9 的數字。如果出現一個數字 6，可以得到 100 元；出現二個數字 6，可以得到 200 元；出現三個數字 6，可以得到 500 元。以上三種得獎方式，只能選擇獎金最高的一種來領取。現在給你一張刮刮樂上的三個數字，請問你可以得到多少獎金。",
        "input": "輸入一個由三個 0~9 數字組成的字串。",
        "output": "輸出一個整數，代表可以得到的獎金。"
      },
      "examples": [
        {
          "input": "666",
          "output": "500",
          "explanation": "出現三個數字 6，可以得到 500 元。"
        },
        {
          "input": "600",
          "output": "100",
          "explanation": "出現一個數字 6，可以得到 100 元。"
        }
      ],
      "testCases": [
        {
          "input": "666",
          "score": 10,
          "hidden": false
        },
        {
          "input": "600",
          "score": 10,
          "hidden": false
        },
        {
          "input": "266",
          "score": 10,
          "hidden": false
        },
        {
          "input": "123",
          "score": 10,
          "hidden": false
        },
        {
          "input": "616",
          "score": 10,
          "hidden": false
        },
        {
          "input": "911",
          "score": 10,
          "hidden": false
        },
        {
          "input": "336",
          "score": 10,
          "hidden": false
        },
        {
          "input": "060",
          "score": 10,
          "hidden": false
        },
        {
          "input": "661",
          "score": 10,
          "hidden": false
        },
        {
          "input": "000",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "逐字元比對數字6出現次數並對應獎金級距，練習字串逐字元檢查。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "計數"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出",
          "比較運算"
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
      "courseCode": "114TCPE11",
      "courseName": "114-臺南市國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114ETainan",
    "convertedAt": "2026-08-13T00:39:19.957Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
