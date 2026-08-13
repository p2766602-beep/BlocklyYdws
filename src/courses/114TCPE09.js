// 競賽模式版本，2026-08-13由 114EPenghu.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE09",
  "title": "114-澎湖縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "澎湖運算思維競賽-國小題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-07T12:19:59.613Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-澎湖縣國小",
    "version": "manual-transcription-verified",
    "convertedFrom": "114EPenghu",
    "convertedAt": "2026-08-13T00:39:19.950Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPE09-1",
      "title": "神秘的運算符號",
      "problemTitle": "神秘的運算符號",
      "courseCode": "114TCPE09",
      "courseName": "114-澎湖縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小明自己發明了一個特別的運算符號「#」。當你看到 A # B 的時候，代表要用 A 和 B 這兩個數字來進行一個新的計算。\n計算時，先找出這兩個數字中較大的數和較小的數（不管輸入順序）。\n接著，用「較大的數」除以「較小的數」，算出商與餘數。\n最後，把「商」放在前面、「餘數」放在後面，直接接在一起，變成一個新的數字，這就是「#」運算的答案。如果剛好整除，餘數是 0，也要照樣寫出來，不能省略。",
      "inputDescription": "輸入兩行數字，分別代表 A 和 B。這兩個數字不一定誰大誰小，但都會是大於 0 的整數。",
      "outputDescription": "輸出把「商」和「餘數」依照順序組合起來後得到的數字。",
      "statement": {
        "description": "小明自己發明了一個特別的運算符號「#」。當你看到 A # B 的時候，代表要用 A 和 B 這兩個數字來進行一個新的計算。\n計算時，先找出這兩個數字中較大的數和較小的數（不管輸入順序）。\n接著，用「較大的數」除以「較小的數」，算出商與餘數。\n最後，把「商」放在前面、「餘數」放在後面，直接接在一起，變成一個新的數字，這就是「#」運算的答案。如果剛好整除，餘數是 0，也要照樣寫出來，不能省略。",
        "input": "輸入兩行數字，分別代表 A 和 B。這兩個數字不一定誰大誰小，但都會是大於 0 的整數。",
        "output": "輸出把「商」和「餘數」依照順序組合起來後得到的數字。"
      },
      "examples": [
        {
          "input": "5\n10",
          "output": "20",
          "explanation": "較大的數是10，較小的數是5。10÷5＝2餘0，商2接餘數0，得到20。"
        },
        {
          "input": "10\n5",
          "output": "20",
          "explanation": "不管輸入順序，較大的數還是10，較小的數還是5，結果一樣是20。"
        },
        {
          "input": "3\n4",
          "output": "11",
          "explanation": "較大的數是4，較小的數是3。4÷3＝1餘1，商1接餘數1，得到11。"
        }
      ],
      "testCases": [
        {
          "input": "5\n10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "45\n7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n13",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "比大小、整數除法求商與餘數、字串接合，沒有迴圈，適合作為基礎練習題。",
        "exportDecision": "Claude 依使用者提供的澎湖運算思維競賽-國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "條件判斷"
        ],
        "subConcepts": [
          "整數除法"
        ],
        "algorithm": [
          "模擬"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "if",
          "比較運算",
          "除法",
          "餘數",
          "字串組合"
        ],
        "math": [],
        "context": [
          "生活情境",
          "自創運算子"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE09-2",
      "title": "甜心餅乾工廠的品管任務",
      "problemTitle": "甜心餅乾工廠的品管任務",
      "courseCode": "114TCPE09",
      "courseName": "114-澎湖縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "品管機器人「阿波」站在包裝輸送帶前面，確保每一塊「甜心餅乾」都是正面朝上。\n1 代表正面（不用翻），0 代表反面（需要翻面）。每翻一塊餅乾，計數器就會 +1。\n請計算阿波總共翻了幾次餅乾。",
      "inputDescription": "第一行：這次輸送帶上總共有幾塊餅乾。\n第二行：用 0 和 1（中間用空白隔開）表示每一塊餅乾的狀態。",
      "outputDescription": "輸出阿波的計數器最後顯示的數字，也就是他總共翻了幾次餅乾。",
      "statement": {
        "description": "品管機器人「阿波」站在包裝輸送帶前面，確保每一塊「甜心餅乾」都是正面朝上。\n1 代表正面（不用翻），0 代表反面（需要翻面）。每翻一塊餅乾，計數器就會 +1。\n請計算阿波總共翻了幾次餅乾。",
        "input": "第一行：這次輸送帶上總共有幾塊餅乾。\n第二行：用 0 和 1（中間用空白隔開）表示每一塊餅乾的狀態。",
        "output": "輸出阿波的計數器最後顯示的數字，也就是他總共翻了幾次餅乾。"
      },
      "examples": [
        {
          "input": "8\n1 0 1 1 0 0 1 1",
          "output": "3",
          "explanation": "8 塊餅乾中有 3 塊是反面（0），所以翻了 3 次。"
        }
      ],
      "testCases": [
        {
          "input": "8\n1 0 1 1 0 0 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n0 0 0 0 0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "用迴圈逐一讀取0/1並累計計數，是基礎的迴圈與計數練習題。",
        "exportDecision": "Claude 依使用者提供的澎湖運算思維競賽-國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "迴圈與累計"
        ],
        "subConcepts": [
          "條件計數"
        ],
        "algorithm": [
          "計數"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for",
          "if",
          "比較運算"
        ],
        "math": [],
        "context": [
          "生活情境",
          "工廠品管"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE09-3",
      "title": "麵包店打折趣",
      "problemTitle": "麵包店打折趣",
      "courseCode": "114TCPE09",
      "courseName": "114-澎湖縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "小明到幸福麵包店買麵包，每個麵包的價格都一樣。店員說：「如果總金額滿 100 元可以打 9 折，滿 200 元打 85 折，滿 300 元打 8 折喔！」\n請算出小明這次要付多少錢（四捨五入到整數）。",
      "inputDescription": "第一行：購買的麵包數量。\n第二行：每個麵包的價格（單價）。",
      "outputDescription": "輸出最後要付的金額（四捨五入到整數）。",
      "statement": {
        "description": "小明到幸福麵包店買麵包，每個麵包的價格都一樣。店員說：「如果總金額滿 100 元可以打 9 折，滿 200 元打 85 折，滿 300 元打 8 折喔！」\n請算出小明這次要付多少錢（四捨五入到整數）。",
        "input": "第一行：購買的麵包數量。\n第二行：每個麵包的價格（單價）。",
        "output": "輸出最後要付的金額（四捨五入到整數）。"
      },
      "examples": [
        {
          "input": "5\n25",
          "output": "113",
          "explanation": "總金額 5×25=125 元，滿 100 打 9 折，125×0.9=112.5，四捨五入為 113。"
        }
      ],
      "testCases": [
        {
          "input": "5\n25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n27",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n25",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "多層次金額門檻判斷加上四捨五入，條件判斷與算術運算的組合練習題。",
        "exportDecision": "Claude 依使用者提供的澎湖運算思維競賽-國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "條件判斷"
        ],
        "subConcepts": [
          "四則運算"
        ],
        "algorithm": [
          "模擬"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "if",
          "比較運算",
          "四則運算",
          "四捨五入"
        ],
        "math": [],
        "context": [
          "生活情境",
          "購物折扣"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114TCPE09-4",
      "title": "魔法學院的神秘藥水調配挑戰",
      "problemTitle": "魔法學院的神秘藥水調配挑戰",
      "courseCode": "114TCPE09",
      "courseName": "114-澎湖縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "你桌上有三瓶貼著不同數字標籤的神奇藥材，要調配傳說藥水，必須遵照「三步驟黃金法則」：\n第一步：把三瓶藥材按數字排出「最小瓶」、「中間瓶」、「最大瓶」。\n第二步：把三個數字加起來得到「總和」，若總和是偶數啟動「太陽魔法陣」，若是奇數啟動「月亮魔法陣」。\n第三步：依魔法陣念出咒語：\n太陽魔法陣：(最小瓶數字 + 中間瓶數字) × 最大瓶數字\n月亮魔法陣：(最大瓶數字 - 中間瓶數字) + 最小瓶數字\n請輸出最終的「魔力指數」。",
      "inputDescription": "輸入三行：三瓶藥材瓶身數字（未依照大小順序排列，數字可以重複）。",
      "outputDescription": "輸出一行數字：魔力指數。",
      "statement": {
        "description": "你桌上有三瓶貼著不同數字標籤的神奇藥材，要調配傳說藥水，必須遵照「三步驟黃金法則」：\n第一步：把三瓶藥材按數字排出「最小瓶」、「中間瓶」、「最大瓶」。\n第二步：把三個數字加起來得到「總和」，若總和是偶數啟動「太陽魔法陣」，若是奇數啟動「月亮魔法陣」。\n第三步：依魔法陣念出咒語：\n太陽魔法陣：(最小瓶數字 + 中間瓶數字) × 最大瓶數字\n月亮魔法陣：(最大瓶數字 - 中間瓶數字) + 最小瓶數字\n請輸出最終的「魔力指數」。",
        "input": "輸入三行：三瓶藥材瓶身數字（未依照大小順序排列，數字可以重複）。",
        "output": "輸出一行數字：魔力指數。"
      },
      "examples": [
        {
          "input": "2\n3\n5",
          "output": "25",
          "explanation": "排序後最小2、中間3、最大5，總和10是偶數，啟動太陽魔法陣：(2+3)×5=25。"
        },
        {
          "input": "10\n1\n4",
          "output": "7",
          "explanation": "排序後最小1、中間4、最大10，總和15是奇數，啟動月亮魔法陣：(10-4)+1=7。"
        }
      ],
      "testCases": [
        {
          "input": "2\n3\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n2\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n3\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n5\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n4\n6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1\n7",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要先求出三數的最小、中間、最大值，再依總和奇偶分支計算，邏輯層次較多。",
        "exportDecision": "Claude 依使用者提供的澎湖運算思維競賽-國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "條件判斷"
        ],
        "subConcepts": [
          "最大最小值"
        ],
        "algorithm": [
          "模擬"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "if",
          "比較運算",
          "四則運算",
          "餘數"
        ],
        "math": [],
        "context": [
          "生活情境",
          "魔法情境"
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
