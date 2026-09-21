// 2026-09-21：mode從'contest'改回'learning'，testCases補回真正的expectedOutput/output
// （從YDWS-CodingBank正本複製回來）。原本的設計是mode:'contest'課程的正確答案只存在
// score-grader Worker私密的answerKeys.json，本機JS故意不含答案——但實測發現這份
// answerKeys.json的產生腳本（build-answer-key.mjs）讀錯資料夾（讀到本來就被清空答案的
// 公開JS，不是YDWS-CodingBank正本），導致產生出來的「正確答案」全部是空字串，讓這整批
// 競賽模式課程的系統評分永遠判定失敗，不管學生寫得多正確都一樣（2026-09-21由使用者回報
// CPB00第一題手動測試正確、系統評分卻失敗，追出這個系統性bug）。
// 這個平台只是學生練習用，不是真正競賽平台，沒有必要為了防止用開發者工具偷看答案這種
// 低機率情境，背負一套「本機JS跟Worker私密資料要保持同步」的維護成本（過去就是因為忘記
// 重新產生/部署Worker答案庫才出過類似問題）——比照blockly-lab既有114TCP系列的做法，
// 改成跟一般學習模式課程一樣的本機比對，starterXml仍然維持空字串（不能載入範例答案），
// 標題仍然保留「（競賽模式）」，只有「答案存在哪裡、怎麼比對」這件事改了。

// 競賽模式版本，2026-08-13由 114ETaipei.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE12",
  "title": "114-臺北市國小（競賽模式）",
  "type": "programming",
  "mode": "learning",
  "description": "臺北市114學年度國小組資訊科技競賽練習題，涵蓋字串處理、不定長度輸入解析與行程長度編碼。",
  "tasks": [
    {
      "id": "114TCPE12-1",
      "title": "崔老師的出缺席紀錄表",
      "problemTitle": "崔老師的出缺席紀錄表",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "崔老師用二維清單記錄一週的出席狀況：\n小明到到缺到到\n小美到缺缺到到\n說明：\n每一列是一位學生\n第一個元素是姓名\n後面五個元素代表星期一到星期五的出席狀況\n【任務】\n輸入學生姓名與出席紀錄，顯示該名學生缺席幾天\n輸出格式：小明缺席1天",
      "inputDescription": "輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。",
      "outputDescription": "輸出「姓名缺席X天」，X為5天中缺席的次數。",
      "statement": {
        "description": "崔老師用二維清單記錄一週的出席狀況：\n小明到到缺到到\n小美到缺缺到到\n說明：\n每一列是一位學生\n第一個元素是姓名\n後面五個元素代表星期一到星期五的出席狀況\n【任務】\n輸入學生姓名與出席紀錄，顯示該名學生缺席幾天\n輸出格式：小明缺席1天",
        "input": "輸入一個字串，前段為學生姓名(長度不固定)，緊接著5個字元代表週一到週五的出席狀況(到/缺)，兩者間沒有分隔符號。",
        "output": "輸出「姓名缺席X天」，X為5天中缺席的次數。"
      },
      "examples": [
        {
          "input": "小明到到缺到到",
          "output": "小明缺席1天",
          "explanation": "小明有 1 個缺"
        },
        {
          "input": "小美到缺缺到到",
          "output": "小美缺席2天",
          "explanation": "小美有 2 個缺"
        }
      ],
      "testCases": [
        {
          "input": "小明到到缺到到",
          "expectedOutput": "小明缺席1天",
          "output": "小明缺席1天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "小美到缺缺到到",
          "expectedOutput": "小美缺席2天",
          "output": "小美缺席2天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "阿宏到到到到到",
          "expectedOutput": "阿宏缺席0天",
          "output": "阿宏缺席0天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "小安缺缺缺到缺",
          "expectedOutput": "小安缺席4天",
          "output": "小安缺席4天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "小明缺缺缺到到",
          "expectedOutput": "小明缺席3天",
          "output": "小明缺席3天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "大雄缺缺缺缺缺",
          "expectedOutput": "大雄缺席5天",
          "output": "大雄缺席5天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "靜香到到到到到",
          "expectedOutput": "靜香缺席0天",
          "output": "靜香缺席0天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "胖虎缺到缺到缺",
          "expectedOutput": "胖虎缺席3天",
          "output": "胖虎缺席3天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "小夫到缺到缺到",
          "expectedOutput": "小夫缺席2天",
          "output": "小夫缺席2天",
          "score": 10,
          "hidden": false
        },
        {
          "input": "王同學到到到到缺",
          "expectedOutput": "王同學缺席1天",
          "output": "王同學缺席1天",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "姓名長度不固定，需用「總長度-5」反推姓名結尾位置，練習字串切割與計數。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "計數"
        ],
        "algorithm": [
          "計數"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出"
        ],
        "math": [],
        "context": [
          "生活情境",
          "班級管理"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE12",
      "courseName": "114-臺北市國小（競賽模式）"
    },
    {
      "id": "114TCPE12-2",
      "title": "校車安全：有沒有超載？",
      "problemTitle": "校車安全：有沒有超載？",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。\n例如：\nA\n2 3 4 5 6\nB\n1 1 2 2 3\nC\n7 1 1 2 2\n【規則】\n每台校車總人數 > 20：要警告超載\n【任務】\n計算每一台總人數，輸出「車號+總人數」，如：A車20人\n若超過20，額外輸出：B車超載",
      "inputDescription": "用英文大寫字母輸入三臺車編號，並且輸入每一站上車人數(共五站)",
      "outputDescription": "A車幾人\nB車幾人\nC車幾人\n(超載要顯示超載)",
      "statement": {
        "description": "每列是一台校車，第一格是車號，後面是每站上車人數，總共只會有五站。\n例如：\nA\n2 3 4 5 6\nB\n1 1 2 2 3\nC\n7 1 1 2 2\n【規則】\n每台校車總人數 > 20：要警告超載\n【任務】\n計算每一台總人數，輸出「車號+總人數」，如：A車20人\n若超過20，額外輸出：B車超載",
        "input": "用英文大寫字母輸入三臺車編號，並且輸入每一站上車人數(共五站)",
        "output": "A車幾人\nB車幾人\nC車幾人\n(超載要顯示超載)"
      },
      "examples": [
        {
          "input": "A\n5 3 4 4 4\nB\n4 5 4 3 4\nC\n3 3 4 3 3",
          "output": "A車20人\nB車20人\nC車16人",
          "explanation": "A車總共 5+3+4+4+4 = 20人 B車總共 4+5+4+3+4 = 20人 C車總共 3+3+4+3+3 = 16人"
        },
        {
          "input": "A\n5 3 2 4 6\nB\n6 6 5 5 4\nC\n4 3 2 3 4",
          "output": "A車20人\nB車超載\nC車16人",
          "explanation": "A車總共 20人 B車總共 26人，大於20，輸出 B車超載 C車總共 16人"
        }
      ],
      "testCases": [
        {
          "input": "A\n5 3 2 4 6\nB\n6 6 5 5 4\nC\n4 3 2 3 4",
          "expectedOutput": "A車20人\nB車超載\nC車16人",
          "output": "A車20人\nB車超載\nC車16人",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A\n4 4 4 4 3\nB\n5 5 4 3 3\nC\n5 4 4 4 4",
          "expectedOutput": "A車19人\nB車20人\nC車超載",
          "output": "A車19人\nB車20人\nC車超載",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A\n3 4 4 4 4\nB\n4 4 4 4 4\nC\n5 3 4 4 3",
          "expectedOutput": "A車19人\nB車20人\nC車19人",
          "output": "A車19人\nB車20人\nC車19人",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A\n5 5 4 4 4\nB\n6 5 5 3 3\nC\n4 4 4 4 5",
          "expectedOutput": "A車超載\nB車超載\nC車超載",
          "output": "A車超載\nB車超載\nC車超載",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A\n3 4 3 4 6\nB\n4 4 4 4 3\nC\n2 6 6 4 3",
          "expectedOutput": "A車20人\nB車19人\nC車超載",
          "output": "A車20人\nB車19人\nC車超載",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A\n0 0 0 0 0\nB\n1 1 1 1 1\nC\n2 2 2 2 2",
          "expectedOutput": "A車0人\nB車5人\nC車10人",
          "output": "A車0人\nB車5人\nC車10人",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A\n4 4 4 4 4\nB\n5 5 5 5 5\nC\n6 6 6 6 6",
          "expectedOutput": "A車20人\nB車超載\nC車超載",
          "output": "A車20人\nB車超載\nC車超載",
          "score": 10,
          "hidden": false
        },
        {
          "input": "X\n1 2 3 4 5\nY\n5 5 5 5 5\nZ\n5 5 5 5 1",
          "expectedOutput": "X車15人\nY車超載\nZ車超載",
          "output": "X車15人\nY車超載\nZ車超載",
          "score": 10,
          "hidden": false
        },
        {
          "input": "P\n10 10 1 0 0\nQ\n0 0 0 0 21\nR\n10 10 0 0 0",
          "expectedOutput": "P車超載\nQ車超載\nR車20人",
          "output": "P車超載\nQ車超載\nR車20人",
          "score": 10,
          "hidden": false
        },
        {
          "input": "M\n3 3 3 3 3\nN\n2 2 2 2 2\nO\n1 1 1 1 1",
          "expectedOutput": "M車15人\nN車10人\nO車5人",
          "output": "M車15人\nN車10人\nO車5人",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定3台車，各自加總5站人數並判斷是否超過20人，練習多次say()輸出多行結果。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "累加"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [],
        "context": [
          "生活情境",
          "交通"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE12",
      "courseName": "114-臺北市國小（競賽模式）"
    },
    {
      "id": "114TCPE12-3",
      "title": "成績補考機制",
      "problemTitle": "成績補考機制",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。\n【任務規則】\n1. 使用者輸入一個數字，代表有N位學生\n2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)\n3. 請檢查每一個分數，若小於60則改成60，否則保持不變\n4. 輸出修正後的分數表",
      "inputDescription": "學生數與N行成績",
      "outputDescription": "修正後的成績清單",
      "statement": {
        "description": "學校規定所有低於60分的成績都以60分計算。請幫老師修正所有學生的成績表。\n【任務規則】\n1. 使用者輸入一個數字，代表有N位學生\n2. 接著輸入 N行成績資料，每行代表一位學生的各科分數(以空白分隔)\n3. 請檢查每一個分數，若小於60則改成60，否則保持不變\n4. 輸出修正後的分數表",
        "input": "學生數與N行成績",
        "output": "修正後的成績清單"
      },
      "examples": [
        {
          "input": "2\n50 80 90\n40 55 100",
          "output": "60 80 90\n60 60 100",
          "explanation": "50 及 40, 55 小於 60，皆修正為 60。"
        },
        {
          "input": "1\n10 20 30",
          "output": "60 60 60",
          "explanation": "皆小於 60，修正為 60。"
        }
      ],
      "testCases": [
        {
          "input": "1\n10 20 30",
          "expectedOutput": "60 60 60",
          "output": "60 60 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n100 100\n59 60",
          "expectedOutput": "100 100\n60 60",
          "output": "100 100\n60 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n10 10\n80 80\n5 95",
          "expectedOutput": "60 60\n80 80\n60 95",
          "output": "60 60\n80 80\n60 95",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n60 60 60",
          "expectedOutput": "60 60 60",
          "output": "60 60 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n59 58 57\n61 62 63",
          "expectedOutput": "60 60 60\n61 62 63",
          "output": "60 60 60\n61 62 63",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n0 0 0 0 0",
          "expectedOutput": "60 60 60 60 60",
          "output": "60 60 60 60 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n99\n100\n0\n60",
          "expectedOutput": "99\n100\n60\n60",
          "output": "99\n100\n60\n60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n59 99",
          "expectedOutput": "60 99",
          "output": "60 99",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n80 80\n40 40",
          "expectedOutput": "80 80\n60 60",
          "output": "80 80\n60 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n30\n40\n50",
          "expectedOutput": "60\n60\n60",
          "output": "60\n60\n60",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "每列科目數不固定但同一測資內一致，讀到輸入結束才能反推每列長度，練習不定長度輸入的處理技巧。",
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
          "資料重建"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while迴圈"
        ],
        "math": [],
        "context": [
          "生活情境",
          "教育"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE12",
      "courseName": "114-臺北市國小（競賽模式）"
    },
    {
      "id": "114TCPE12-4",
      "title": "滑動平均值",
      "problemTitle": "滑動平均值",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請計算清單中連續K個數字的平均值(Moving Average)。\n【任務規則】\n1. 第一次輸入：一串數字，以空白分隔\n2. 第二次輸入：區間大小 K\n3. 請依序計算每K 個相鄰數字的平均值\n4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。",
      "inputDescription": "數字字串與整數 K",
      "outputDescription": "算出的平均值數列 (數字之間以空白隔開)",
      "statement": {
        "description": "請計算清單中連續K個數字的平均值(Moving Average)。\n【任務規則】\n1. 第一次輸入：一串數字，以空白分隔\n2. 第二次輸入：區間大小 K\n3. 請依序計算每K 個相鄰數字的平均值\n4. 例如數列 10 20 30，K=2。第一組(10+20)/2=15，第二組(20+30)/2=25。",
        "input": "數字字串與整數 K",
        "output": "算出的平均值數列 (數字之間以空白隔開)"
      },
      "examples": [
        {
          "input": "10 20 30 40 50\n2",
          "output": "15 25 35 45",
          "explanation": "依序計算每2個相鄰數字的平均值： (10+20)/2=15 (20+30)/2=25 (30+40)/2=35 (40+50)/2=45"
        },
        {
          "input": "2 4 6 8\n2",
          "output": "3 5 7",
          "explanation": "依序計算每2個相鄰數字的平均值。"
        }
      ],
      "testCases": [
        {
          "input": "2 4 6 8\n2",
          "expectedOutput": "3 5 7",
          "output": "3 5 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 20 30\n3",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5 5 5\n1",
          "expectedOutput": "5 5 5 5",
          "output": "5 5 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 20 30 40 50\n2",
          "expectedOutput": "15 25 35 45",
          "output": "15 25 35 45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5 6\n3",
          "expectedOutput": "2 3 4 5",
          "output": "2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10 10 10 10\n4",
          "expectedOutput": "10 10",
          "output": "10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 10 20 30 40\n5",
          "expectedOutput": "20",
          "output": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100 200 300\n2",
          "expectedOutput": "150 250",
          "output": "150 250",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 15 25 35\n2",
          "expectedOutput": "10 20 30",
          "output": "10 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 2 2 2 2 2 2\n7",
          "expectedOutput": "2",
          "output": "2",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "數列長度不固定、最後一個數字才是視窗大小K，練習不定長度輸入配合固定視窗滑動平均。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "滑動視窗"
        ],
        "algorithm": [
          "滑動平均"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [
          "平均值"
        ],
        "context": [
          "數學情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE12",
      "courseName": "114-臺北市國小（競賽模式）"
    },
    {
      "id": "114TCPE12-5",
      "title": "連續字元分段顯示",
      "problemTitle": "連續字元分段顯示",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。",
      "inputDescription": "輸入一串英文字串s。",
      "outputDescription": "每一組字元與次數以換行輸出。",
      "statement": {
        "description": "給一個字串s，請將連續相同的字元視為一組，並依序顯示「字元+出現次數」。",
        "input": "輸入一串英文字串s。",
        "output": "每一組字元與次數以換行輸出。"
      },
      "examples": [
        {
          "input": "aaabbcddd",
          "output": "a3\nb2\nc1\nd3",
          "explanation": "連續相同的字元分組顯示。"
        },
        {
          "input": "aabcccddd",
          "output": "a2\nb1\nc3\nd3",
          "explanation": "連續相同的字元分組顯示。"
        }
      ],
      "testCases": [
        {
          "input": "aaabbcddd",
          "expectedOutput": "a3\nb2\nc1\nd3",
          "output": "a3\nb2\nc1\nd3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "aabcccddd",
          "expectedOutput": "a2\nb1\nc3\nd3",
          "output": "a2\nb1\nc3\nd3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "abc",
          "expectedOutput": "a1\nb1\nc1",
          "output": "a1\nb1\nc1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "aaaaa",
          "expectedOutput": "a5",
          "output": "a5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "aabbcc",
          "expectedOutput": "a2\nb2\nc2",
          "output": "a2\nb2\nc2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "xxyyzz",
          "expectedOutput": "x2\ny2\nz2",
          "output": "x2\ny2\nz2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "mississippi",
          "expectedOutput": "m1\ni1\ns2\ni1\ns2\ni1\np2\ni1",
          "output": "m1\ni1\ns2\ni1\ns2\ni1\np2\ni1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "hello",
          "expectedOutput": "h1\ne1\nl2\no1",
          "output": "h1\ne1\nl2\no1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "wwwwwxxxxxyyyyyzzzzz",
          "expectedOutput": "w5\nx5\ny5\nz5",
          "output": "w5\nx5\ny5\nz5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "z",
          "expectedOutput": "z1",
          "output": "z1",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "行程長度編碼(RLE)入門版，每組分段各自用say()輸出一行。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "分組計數"
        ],
        "algorithm": [
          "行程長度編碼"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出"
        ],
        "math": [],
        "context": [
          "資料壓縮"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE12",
      "courseName": "114-臺北市國小（競賽模式）"
    },
    {
      "id": "114TCPE12-6",
      "title": "移除指定字元後輸出新字串",
      "problemTitle": "移除指定字元後輸出新字串",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。",
      "inputDescription": "第一行輸入字串s。\n第二行輸入目標字元 target。",
      "outputDescription": "輸出移除指定字元後的新字串。",
      "statement": {
        "description": "給一個字串s與一個字元 target，請用迴圈移除所有 target，並輸出新字串。",
        "input": "第一行輸入字串s。\n第二行輸入目標字元 target。",
        "output": "輸出移除指定字元後的新字串。"
      },
      "examples": [
        {
          "input": "banana\na",
          "output": "bnn",
          "explanation": "移除字串中的 a。"
        },
        {
          "input": "roblox\no",
          "output": "rblx",
          "explanation": "移除字串中的 o。"
        }
      ],
      "testCases": [
        {
          "input": "banana\na",
          "expectedOutput": "bnn",
          "output": "bnn",
          "score": 10,
          "hidden": false
        },
        {
          "input": "roblox\no",
          "expectedOutput": "rblx",
          "output": "rblx",
          "score": 10,
          "hidden": false
        },
        {
          "input": "apple\np",
          "expectedOutput": "ale",
          "output": "ale",
          "score": 10,
          "hidden": false
        },
        {
          "input": "hello\nl",
          "expectedOutput": "heo",
          "output": "heo",
          "score": 10,
          "hidden": false
        },
        {
          "input": "mississippi\ns",
          "expectedOutput": "miiippi",
          "output": "miiippi",
          "score": 10,
          "hidden": false
        },
        {
          "input": "programming\ng",
          "expectedOutput": "prorammin",
          "output": "prorammin",
          "score": 10,
          "hidden": false
        },
        {
          "input": "abc\nd",
          "expectedOutput": "abc",
          "output": "abc",
          "score": 10,
          "hidden": false
        },
        {
          "input": "abcdef\nc",
          "expectedOutput": "abdef",
          "output": "abdef",
          "score": 10,
          "hidden": false
        },
        {
          "input": "xyzxyz\ny",
          "expectedOutput": "xzxz",
          "output": "xzxz",
          "score": 10,
          "hidden": false
        },
        {
          "input": "google\no",
          "expectedOutput": "ggle",
          "output": "ggle",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "逐字元篩選，練習字串過濾的基礎寫法。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "字串處理"
        ],
        "subConcepts": [
          "條件判斷"
        ],
        "algorithm": [
          "過濾"
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
      "courseCode": "114TCPE12",
      "courseName": "114-臺北市國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114ETaipei",
    "convertedAt": "2026-08-13T00:39:19.960Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
