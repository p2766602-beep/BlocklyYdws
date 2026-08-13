// 競賽模式版本，2026-08-13由 114EChanghua.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE03",
  "title": "114-彰化縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "彰化縣114學年度國小組資訊科技競賽練習題，涵蓋公式計算、窮舉法與清單計數統計。",
  "tasks": [
    {
      "id": "114TCPE03-1",
      "title": "綠蔭道路",
      "problemTitle": "綠蔭道路",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "政府正在推動某鄉村的「智慧綠蔭道路計畫」，希望在一條筆直道路的一側種植行道樹，讓行人走在路上能有遮蔭。從道路的起點先種第一棵樹，接著每隔固定間距種一棵樹，如果最後剩下的距離不足一個間距，仍然要再補種一棵樹。\n請寫一個程式，根據道路長度與種樹間距，計算需要準備的樹苗數量。",
      "inputDescription": "輸入兩個數字，分別代表道路長度與種樹間距。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出所需要的樹苗數量。",
      "statement": {
        "description": "政府正在推動某鄉村的「智慧綠蔭道路計畫」，希望在一條筆直道路的一側種植行道樹，讓行人走在路上能有遮蔭。從道路的起點先種第一棵樹，接著每隔固定間距種一棵樹，如果最後剩下的距離不足一個間距，仍然要再補種一棵樹。\n請寫一個程式，根據道路長度與種樹間距，計算需要準備的樹苗數量。",
        "input": "輸入兩個數字，分別代表道路長度與種樹間距。(數字之間以單一半形空白間隔)",
        "output": "輸出所需要的樹苗數量。"
      },
      "examples": [
        {
          "input": "10 5",
          "output": "3",
          "explanation": "道路長度是10公尺，種樹間距為5公尺。 起點先種1棵，經過5公尺種1棵，再經過5公尺再種1棵，故為3顆。"
        },
        {
          "input": "11 5",
          "output": "4",
          "explanation": "道路長度是11公尺時，種樹間距為5公尺。 起點先種1棵，經過5公尺種1棵，再經過5公尺再種1棵，剩下距離為1公尺，仍需要補種1顆樹，故為4顆。"
        }
      ],
      "testCases": [
        {
          "input": "24 8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "101 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "149 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "99 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "200 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "201 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1000 1",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "無條件進位公式應用，練習ROUNDUP。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "無條件進位"
        ],
        "algorithm": [
          "公式換算"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "無條件進位"
        ],
        "math": [
          "除法"
        ],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE03",
      "courseName": "114-彰化縣國小（競賽模式）"
    },
    {
      "id": "114TCPE03-2",
      "title": "最萌身高差",
      "problemTitle": "最萌身高差",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "白雪公主和七矮人一起生活在森林裡。七矮人的身高都不一樣，白雪公主想知道七矮人之中，最高的人和最矮的人身高相差多少。請你寫一個程式，根據七矮人的身高資料，計算出「最高者與最矮者的身高差」。小矮人的身高介於30公分到140公分之間。",
      "inputDescription": "輸入7個整數，依序代表七矮人的身高。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出1個整數，代表最高者與最矮者的身高差。",
      "statement": {
        "description": "白雪公主和七矮人一起生活在森林裡。七矮人的身高都不一樣，白雪公主想知道七矮人之中，最高的人和最矮的人身高相差多少。請你寫一個程式，根據七矮人的身高資料，計算出「最高者與最矮者的身高差」。小矮人的身高介於30公分到140公分之間。",
        "input": "輸入7個整數，依序代表七矮人的身高。(數字之間以單一半形空白間隔)",
        "output": "輸出1個整數，代表最高者與最矮者的身高差。"
      },
      "examples": [
        {
          "input": "130 110 115 120 125 118 112",
          "output": "20",
          "explanation": "最高的是130，最矮的是110，輸出身高差是20。"
        },
        {
          "input": "100 101 102 103 104 105 106",
          "output": "6",
          "explanation": "最高的是106，最矮的是100，輸出身高差是6。"
        }
      ],
      "testCases": [
        {
          "input": "105 98 110 102 99 108 101",
          "score": 10,
          "hidden": false
        },
        {
          "input": "140 135 138 133 130 137 61",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60 76 74 72 70 68 78",
          "score": 10,
          "hidden": false
        },
        {
          "input": "130 110 115 120 125 118 112",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 101 102 103 104 105 106",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 40 50 60 70 80 90",
          "score": 10,
          "hidden": false
        },
        {
          "input": "140 130 120 110 100 90 80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 140 50 60 70 80 90",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 100 100 100 100 100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "55 55 55 55 55 30 140",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定7筆資料找最大最小值。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "統計"
        ],
        "subConcepts": [
          "最大最小值"
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
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE03",
      "courseName": "114-彰化縣國小（競賽模式）"
    },
    {
      "id": "114TCPE03-3",
      "title": "秒數轉換",
      "problemTitle": "秒數轉換",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "時間長度除了可以單用「秒」來表示，也可以將其拆解為「時、分、秒」來表達。請你根據輸入的總秒數，將它轉換成「時、分、秒」三個數字。舉例來說 3661秒就等於1小時又1分又1秒。因為1小時+1分+1秒 = 3600秒+60秒+1秒 = 3661秒。",
      "inputDescription": "輸入1個整數，代表總秒數。",
      "outputDescription": "輸出3整數，依序代表拆解轉換成的小時、分鐘、秒。(數字之間以單一半形空白間隔)",
      "statement": {
        "description": "時間長度除了可以單用「秒」來表示，也可以將其拆解為「時、分、秒」來表達。請你根據輸入的總秒數，將它轉換成「時、分、秒」三個數字。舉例來說 3661秒就等於1小時又1分又1秒。因為1小時+1分+1秒 = 3600秒+60秒+1秒 = 3661秒。",
        "input": "輸入1個整數，代表總秒數。",
        "output": "輸出3整數，依序代表拆解轉換成的小時、分鐘、秒。(數字之間以單一半形空白間隔)"
      },
      "examples": [
        {
          "input": "3661",
          "output": "1 1 1",
          "explanation": "3661秒就是1小時1分又1秒"
        },
        {
          "input": "59",
          "output": "0 0 59",
          "explanation": "59秒就是0小時0分又59秒"
        }
      ],
      "testCases": [
        {
          "input": "7325",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "86399",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3661",
          "score": 10,
          "hidden": false
        },
        {
          "input": "59",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3600",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3599",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7260",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "整數除法與餘數的基礎應用，換算時分秒。",
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
          "無條件捨去",
          "餘數"
        ],
        "math": [
          "整數除法"
        ],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE03",
      "courseName": "114-彰化縣國小（競賽模式）"
    },
    {
      "id": "114TCPE03-4",
      "title": "協力車分配",
      "problemTitle": "協力車分配",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "班上同學到河濱公園騎協力車，協力車分成兩種：兩人共騎的協力車以及三人共騎的協力車。分配後全班同學剛好都有車可騎，而且每一輛協力車都坐滿。\n請你根據全班人數以及協力車總數的資料，計算出兩人共騎的協力車有幾輛。",
      "inputDescription": "輸入2個整數，依序分別代表全班人數以及協力車的總數。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出1個整數，代表兩人共騎的協力車數量。",
      "statement": {
        "description": "班上同學到河濱公園騎協力車，協力車分成兩種：兩人共騎的協力車以及三人共騎的協力車。分配後全班同學剛好都有車可騎，而且每一輛協力車都坐滿。\n請你根據全班人數以及協力車總數的資料，計算出兩人共騎的協力車有幾輛。",
        "input": "輸入2個整數，依序分別代表全班人數以及協力車的總數。(數字之間以單一半形空白間隔)",
        "output": "輸出1個整數，代表兩人共騎的協力車數量。"
      },
      "examples": [
        {
          "input": "5 2",
          "output": "1",
          "explanation": "全班有5個人，分配到2台協力車恰好可以坐滿。 那麼兩人共騎的協力車與三人共騎的協力車會各1台，輸出1也就是兩人協力車的數量。"
        },
        {
          "input": "8 4",
          "output": "4",
          "explanation": "全班有8個人，若分配到4台協力車恰好可以坐滿。 那麼就會需要兩人共騎的協力車4台，不需要三人共騎的協力車，輸出4代表兩人協力車的數量。"
        }
      ],
      "testCases": [
        {
          "input": "51 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "49 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "62 25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 40",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "二元一次聯立方程式應用，練習代數推導。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "方程式"
        ],
        "algorithm": [
          "公式推導"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "四則運算"
        ],
        "math": [
          "聯立方程式"
        ],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE03",
      "courseName": "114-彰化縣國小（競賽模式）"
    },
    {
      "id": "114TCPE03-5",
      "title": "數橘子",
      "problemTitle": "數橘子",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小龍的媽媽今天到菜市場買了一堆橘子，有10顆以上，但忘記確切數量。回家後，媽媽嘗試用不同大小的袋子來分裝橘子：\n大袋子每袋可裝7顆、中袋子每袋可裝5顆、小袋子每袋可裝3顆。\n媽媽分別只使用其中一種袋子來裝橘子時，有可能恰好裝滿或剩下一些裝不滿一袋的橘子。\n請你根據這三種情況下剩餘的橘子數量，推算出橘子可能的最少總顆數。",
      "inputDescription": "輸入3個整數，依序分別代表\n只用大袋子分裝後剩下的橘子數\n只用中袋子分裝後剩下的橘子數\n只用小袋子分裝後剩下的橘子數\n(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出1個整數，代表橘子可能的最少總顆數。",
      "statement": {
        "description": "小龍的媽媽今天到菜市場買了一堆橘子，有10顆以上，但忘記確切數量。回家後，媽媽嘗試用不同大小的袋子來分裝橘子：\n大袋子每袋可裝7顆、中袋子每袋可裝5顆、小袋子每袋可裝3顆。\n媽媽分別只使用其中一種袋子來裝橘子時，有可能恰好裝滿或剩下一些裝不滿一袋的橘子。\n請你根據這三種情況下剩餘的橘子數量，推算出橘子可能的最少總顆數。",
        "input": "輸入3個整數，依序分別代表\n只用大袋子分裝後剩下的橘子數\n只用中袋子分裝後剩下的橘子數\n只用小袋子分裝後剩下的橘子數\n(數字之間以單一半形空白間隔)",
        "output": "輸出1個整數，代表橘子可能的最少總顆數。"
      },
      "examples": [
        {
          "input": "1 0 0",
          "output": "15",
          "explanation": "橘子10顆以上... 只用大袋子分裝，每7顆裝1袋，最後剩下1顆。 只用中袋子分裝，每5顆裝1袋，最後不剩剛好裝滿。 只用小袋子分裝，每3顆裝1袋，最後不剩剛好裝滿。 符合上述情況橘子可能的最少總顆數是15。"
        },
        {
          "input": "4 3 0",
          "output": "18",
          "explanation": "橘子10顆以上... 只用大袋子分裝，每7顆裝1袋，最後剩下4顆。 只用中袋子分裝，每5顆裝1袋，最後剩下3顆。 只用小袋子分裝，每3顆裝1袋，最後不剩剛好裝滿。 符合上述情況橘子可能的最少總顆數是18。"
        }
      ],
      "testCases": [
        {
          "input": "3 2 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 1 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 4 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 3 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 3 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 4 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉法求滿足多個餘數條件的最小值，類似中國剩餘定理的簡化版。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "窮舉"
        ],
        "subConcepts": [
          "餘數條件"
        ],
        "algorithm": [
          "窮舉法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
          "餘數"
        ],
        "math": [
          "同餘"
        ],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE03",
      "courseName": "114-彰化縣國小（競賽模式）"
    },
    {
      "id": "114TCPE03-6",
      "title": "禮物多數決",
      "problemTitle": "禮物多數決",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "教師節快到了，班上同學想從禮品1號到禮品5號中選擇一樣送給老師。決定的方式是從同學的投票中，找出得票數最多的禮品。請根據投票結果，找出要送給老師的禮品編號，以及該禮品所得到的票數。",
      "inputDescription": "第一行輸入1個整數，代表有幾位同學參與投票。\n第二行輸入這幾位同學投票禮物編號，編號介於1到5。(數字之間以單一半形空白間隔)",
      "outputDescription": "輸出要有2個整數，分別代表得票最高的禮品編號以及這個禮品所得到的票數。(數字之間以單一半形空白間隔)\n(測資保證得票最多的禮品只有一個，不會有平手情況)",
      "statement": {
        "description": "教師節快到了，班上同學想從禮品1號到禮品5號中選擇一樣送給老師。決定的方式是從同學的投票中，找出得票數最多的禮品。請根據投票結果，找出要送給老師的禮品編號，以及該禮品所得到的票數。",
        "input": "第一行輸入1個整數，代表有幾位同學參與投票。\n第二行輸入這幾位同學投票禮物編號，編號介於1到5。(數字之間以單一半形空白間隔)",
        "output": "輸出要有2個整數，分別代表得票最高的禮品編號以及這個禮品所得到的票數。(數字之間以單一半形空白間隔)\n(測資保證得票最多的禮品只有一個，不會有平手情況)"
      },
      "examples": [
        {
          "input": "3\n1 1 1",
          "output": "1 3",
          "explanation": "第1個數字3代表有3位同學投票，接下來輸入的3個數字表示他們都投了1號禮品。 1號禮品票數最高，輸出1，然後輸出其票數3。"
        },
        {
          "input": "7\n5 5 5 2 2 2 5",
          "output": "5 4",
          "explanation": "第1個數字7代表有7位同學投票，接下來輸入的7個數字表示有4位投了5號禮品，有3位投了2號禮品。 5號禮品票數最高，輸出5，然後輸出其票數4。"
        }
      ],
      "testCases": [
        {
          "input": "8\n2 4 4 1 4 1 4 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n5 5 2 4 3 2 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n1 2 2 4 2 2 2 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n3 3 3 3 3 1 1 1 2 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n5 5 5 2 2 2 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 4 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 2 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n1 1 1 2 2 2 3 3 3 4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定5類別的投票計數，找最大值(保證無平手)。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "計數統計"
        ],
        "algorithm": [
          "最大值"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "清單存取"
        ],
        "math": [],
        "context": [
          "生活情境",
          "投票"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE03",
      "courseName": "114-彰化縣國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114EChanghua",
    "convertedAt": "2026-08-13T00:39:19.914Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
