// 競賽模式版本，2026-08-13由 114EHualien.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPE06",
  "title": "114-花蓮縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "花蓮縣114學年度資科競賽國小組題目，涵蓋模擬、清單雙層迴圈與字串逐字元處理。",
  "tasks": [
    {
      "id": "114TCPE06-1",
      "title": "零用錢是否足夠",
      "problemTitle": "零用錢是否足夠",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "你有一個錢包，裡面裝著固定的零用錢。這幾天你想買一些東西，請幫忙算算看，你的錢夠不夠買這些東西？系統會提供一個整數代表零用錢總額，以及一份固定包含4筆資料的花費清單，依序代表第1天到第4天的花費金額。請從第1天開始，依序扣除每日花費金額：若在某一天扣除花費後，剩餘金額小於0，表示零用錢已不足，請立即輸出「第X天不夠用」（X為發生不足的天數）；若4天的花費皆能成功扣除完成，請輸出「錢剛好或有剩」。",
      "inputDescription": "第一行輸入零用錢總額；第二行依序輸入4筆花費金額。",
      "outputDescription": "輸出「第X天不夠用」或「錢剛好或有剩」。",
      "statement": {
        "description": "你有一個錢包，裡面裝著固定的零用錢。這幾天你想買一些東西，請幫忙算算看，你的錢夠不夠買這些東西？系統會提供一個整數代表零用錢總額，以及一份固定包含4筆資料的花費清單，依序代表第1天到第4天的花費金額。請從第1天開始，依序扣除每日花費金額：若在某一天扣除花費後，剩餘金額小於0，表示零用錢已不足，請立即輸出「第X天不夠用」（X為發生不足的天數）；若4天的花費皆能成功扣除完成，請輸出「錢剛好或有剩」。",
        "input": "第一行輸入零用錢總額；第二行依序輸入4筆花費金額。",
        "output": "輸出「第X天不夠用」或「錢剛好或有剩」。"
      },
      "examples": [
        {
          "input": "100\n20 30 40 20",
          "output": "第4天不夠用",
          "explanation": "100-20=80,80-30=50,50-40=10,10-20=-10<0，第4天不夠用。"
        },
        {
          "input": "100\n10 20 30 40",
          "output": "錢剛好或有剩",
          "explanation": "100-10-20-30-40=0，4天都成功扣除。"
        }
      ],
      "testCases": [
        {
          "input": "100\n20 30 40 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n10 20 30 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50\n60 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50\n30 30 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50\n20 20 20 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n25 25 25 25",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1000\n100 200 300 500",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50\n0 0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60\n20 20 20 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "40\n20 20 10 10",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定4天依序扣款並在中途提早判斷不足，練習提早結束（旗標）與迴圈。",
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
          "模擬"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈",
          "旗標變數"
        ],
        "math": [],
        "context": [
          "生活情境",
          "理財"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE06",
      "courseName": "114-花蓮縣國小（競賽模式）"
    },
    {
      "id": "114TCPE06-2",
      "title": "機器人戰鬥力比對",
      "problemTitle": "機器人戰鬥力比對",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "場上有N隻機器人參賽，每隻機器人都有一個戰鬥力數值。大會規定採取積分循環賽制：每一隻機器人都要跟場上所有其他機器人進行一對一的較量，戰鬥力比對手高得1分積分，比對手低或平手則得0分。請依照機器人的輸入順序，依序輸出這N隻機器人的總積分。",
      "inputDescription": "第一行輸入整數N，第二行依序輸入N個整數代表每隻機器人的戰鬥力。",
      "outputDescription": "輸出N個整數，依序為每隻機器人的總積分，以空白分隔。",
      "statement": {
        "description": "場上有N隻機器人參賽，每隻機器人都有一個戰鬥力數值。大會規定採取積分循環賽制：每一隻機器人都要跟場上所有其他機器人進行一對一的較量，戰鬥力比對手高得1分積分，比對手低或平手則得0分。請依照機器人的輸入順序，依序輸出這N隻機器人的總積分。",
        "input": "第一行輸入整數N，第二行依序輸入N個整數代表每隻機器人的戰鬥力。",
        "output": "輸出N個整數，依序為每隻機器人的總積分，以空白分隔。"
      },
      "examples": [
        {
          "input": "3\n10 50 30",
          "output": "0 2 1",
          "explanation": "第1隻(10)比輸50、30得0分；第2隻(50)贏過10、30得2分；第3隻(30)贏過10、比輸50得1分。"
        },
        {
          "input": "3\n10 20 30",
          "output": "0 1 2",
          "explanation": "依序得0分、1分、2分。"
        }
      ],
      "testCases": [
        {
          "input": "3\n10 50 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n10 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n50 40 30 20 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 20 30 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1 2 3 4 5 6 7 8 9 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n15 15 20 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n100 0 50 50 25 75",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n10 10",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "N隻機器人兩兩循環比較，需要清單搭配雙層迴圈，是本次題組中複雜度較高的一題。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "雙層迴圈"
        ],
        "algorithm": [
          "窮舉比較"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈",
          "清單存取"
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
      "courseCode": "114TCPE06",
      "courseName": "114-花蓮縣國小（競賽模式）"
    },
    {
      "id": "114TCPE06-3",
      "title": "字串內的秘密數字",
      "problemTitle": "字串內的秘密數字",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "壞人在傳遞的文字訊息中藏了許多數字，只要將訊息中所有的數字加總起來，就能得到解鎖金庫的密碼。請寫一個程式，幫忙計算出這個神祕的總和數字。請檢查字串中的每一個字元，如果是數字(0~9)就加入總和，英文或符號則忽略；每個數字視為個位數相加。",
      "inputDescription": "輸入一個包含英文與數字的字串。",
      "outputDescription": "輸出字串中所有數字字元的總和。",
      "statement": {
        "description": "壞人在傳遞的文字訊息中藏了許多數字，只要將訊息中所有的數字加總起來，就能得到解鎖金庫的密碼。請寫一個程式，幫忙計算出這個神祕的總和數字。請檢查字串中的每一個字元，如果是數字(0~9)就加入總和，英文或符號則忽略；每個數字視為個位數相加。",
        "input": "輸入一個包含英文與數字的字串。",
        "output": "輸出字串中所有數字字元的總和。"
      },
      "examples": [
        {
          "input": "A1B2C3",
          "output": "6",
          "explanation": "找到 1, 2, 3，總和為 6。"
        },
        {
          "input": "Key5Word2",
          "output": "7",
          "explanation": "找到 5, 2，總和為 7。"
        }
      ],
      "testCases": [
        {
          "input": "A1B2C3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "Key5Word2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "HelloWorld",
          "score": 10,
          "hidden": false
        },
        {
          "input": "123456789",
          "score": 10,
          "hidden": false
        },
        {
          "input": "a12b34",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0a0b0c0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "a1b2c3d4e5f6g7h8i9j0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "!@1#$2%^3&*",
          "score": 10,
          "hidden": false
        },
        {
          "input": "abc9xyz9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "逐字元判斷是否為數字並加總，練習字元範圍比較（ASCII順序特性）。",
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
          "計數加總"
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
          "解謎"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE06",
      "courseName": "114-花蓮縣國小（競賽模式）"
    },
    {
      "id": "114TCPE06-4",
      "title": "最佳派對地點",
      "problemTitle": "最佳派對地點",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "有N個好朋友住在同一條筆直的大馬路上，每個人的家都有一個座標數字。他們決定舉辦一場派對，必須選在其中一個人的家裡舉辦，且所有人從自己家走到派對地點的距離總和必須是最小的。請找出最佳的舉辦地點，並算出這個最小的總距離是多少；若有多個地點距離總和一樣小，輸出座標較小的那一個。",
      "inputDescription": "第一行輸入整數N，第二行依序輸入N個整數座標。",
      "outputDescription": "輸出兩個整數：最佳地點的座標，以及最小的距離總和，以空白分隔。",
      "statement": {
        "description": "有N個好朋友住在同一條筆直的大馬路上，每個人的家都有一個座標數字。他們決定舉辦一場派對，必須選在其中一個人的家裡舉辦，且所有人從自己家走到派對地點的距離總和必須是最小的。請找出最佳的舉辦地點，並算出這個最小的總距離是多少；若有多個地點距離總和一樣小，輸出座標較小的那一個。",
        "input": "第一行輸入整數N，第二行依序輸入N個整數座標。",
        "output": "輸出兩個整數：最佳地點的座標，以及最小的距離總和，以空白分隔。"
      },
      "examples": [
        {
          "input": "3\n2 10 5",
          "output": "5 8",
          "explanation": "辦在5的距離和最小，為8。"
        },
        {
          "input": "3\n1 9 3",
          "output": "3 8",
          "explanation": "辦在3的距離和最小，為8。"
        }
      ],
      "testCases": [
        {
          "input": "3\n2 10 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 9 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 2 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n10 10 20 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n100 0 50 25 75",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n10 20 30 40 50 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 1 1 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n10 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n7 1 4 2 8 5 9",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉每個候選點計算距離總和，需要用絕對值計算距離，並處理平手時取較小座標的規則。",
        "exportDecision": "Claude 依使用者提供的PDF手動轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "雙層迴圈"
        ],
        "algorithm": [
          "窮舉"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈",
          "絕對值"
        ],
        "math": [
          "絕對值"
        ],
        "context": [
          "生活情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPE06",
      "courseName": "114-花蓮縣國小（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114EHualien",
    "convertedAt": "2026-08-13T00:39:19.937Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
