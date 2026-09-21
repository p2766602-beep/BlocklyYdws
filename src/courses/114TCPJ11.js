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

// 競賽模式版本，2026-08-13由 114JTainan.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPJ11",
  "title": "114-臺南市國中（競賽模式）",
  "type": "programming",
  "mode": "learning",
  "description": "臺南市114學年度國中組資訊科技競賽練習題，涵蓋組合優惠最佳化、統計與質數判定。",
  "tasks": [
    {
      "id": "114TCPJ11-1",
      "title": "遊樂場",
      "problemTitle": "遊樂場",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "三六九主題遊樂園，門票分成兒童票、成人票兩種。兒童票每張票價400元，成人票每張票價500元，另有親子套票組(1張兒童票及1張成人票)每組800元。\n請設計一個程式，輸入兒童人數、成人人數，算出最優惠的價格。",
      "inputDescription": "輸入兩個整數，依序為兒童人數與成人人數。",
      "outputDescription": "輸出一個整數，代表最優惠的總價格。",
      "statement": {
        "description": "三六九主題遊樂園，門票分成兒童票、成人票兩種。兒童票每張票價400元，成人票每張票價500元，另有親子套票組(1張兒童票及1張成人票)每組800元。\n請設計一個程式，輸入兒童人數、成人人數，算出最優惠的價格。",
        "input": "輸入兩個整數，依序為兒童人數與成人人數。",
        "output": "輸出一個整數，代表最優惠的總價格。"
      },
      "examples": [
        {
          "input": "5\n5",
          "output": "4000",
          "explanation": "輸入兒童人數：5 輸入成人人數：5 可購買5組親子套票組 總價4000元 輸出：4000"
        },
        {
          "input": "6\n3",
          "output": "3600",
          "explanation": "輸入兒童人數：6 輸入成人人數：3 可購買3組親子套票組、3張兒童票 總價3600元 輸出：3600"
        }
      ],
      "testCases": [
        {
          "input": "5\n5",
          "expectedOutput": "4000",
          "output": "4000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n3",
          "expectedOutput": "3600",
          "output": "3600",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n10",
          "expectedOutput": "5000",
          "output": "5000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n4",
          "expectedOutput": "4800",
          "output": "4800",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10",
          "expectedOutput": "8000",
          "output": "8000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n5",
          "expectedOutput": "3100",
          "output": "3100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\n0",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0",
          "expectedOutput": "4000",
          "output": "4000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n4",
          "expectedOutput": "2900",
          "output": "2900",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n1",
          "expectedOutput": "800",
          "output": "800",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "親子套票優惠的組合最佳化，練習min()概念與貪婪組合思維。",
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
          "貪婪法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "比較運算"
        ],
        "math": [],
        "context": [
          "生活情境",
          "遊樂園"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ11",
      "courseName": "114-臺南市國中（競賽模式）"
    },
    {
      "id": "114TCPJ11-2",
      "title": "歌唱比賽",
      "problemTitle": "歌唱比賽",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "(1)金嗓歌唱比賽，邀請5位評審來評分，最低分為0分，最高分為10分。\n(2)成績計算方式：從排序後的分數中，去除一個最高成績和一個最低成績，再計算剩餘分數的平均值。\n請設計一個成績計算程式，一次輸入5位評審的分數，計算出參賽者的成績。\n(備註：不必擔心輸出的數值為小數第幾位或整數)",
      "inputDescription": "一次輸入5位評審的分數，以半形空格間隔。",
      "outputDescription": "輸出一個數值，代表參賽者的最終成績。",
      "statement": {
        "description": "(1)金嗓歌唱比賽，邀請5位評審來評分，最低分為0分，最高分為10分。\n(2)成績計算方式：從排序後的分數中，去除一個最高成績和一個最低成績，再計算剩餘分數的平均值。\n請設計一個成績計算程式，一次輸入5位評審的分數，計算出參賽者的成績。\n(備註：不必擔心輸出的數值為小數第幾位或整數)",
        "input": "一次輸入5位評審的分數，以半形空格間隔。",
        "output": "輸出一個數值，代表參賽者的最終成績。"
      },
      "examples": [
        {
          "input": "10 8 9 9 9",
          "output": "9",
          "explanation": "一次輸入：10 8 9 9 9(半形空格間隔) 一個最高成績：10 一個最低成績：8 剩餘分數為：9 9 9 平均：9 輸出：9"
        },
        {
          "input": "6 6 9 10 9",
          "output": "8",
          "explanation": "一次輸入：6 6 9 10 9(半形空格間隔) 一個最高成績：10 一個最低成績：6 剩餘分數為：6 9 9 平均：8 輸出：8"
        },
        {
          "input": "7 7 7 7 7",
          "output": "7",
          "explanation": "一次輸入：7 7 7 7 7(半形空格間隔) 一個最高成績：7 一個最低成績：7 剩餘分數為：7 7 7 平均：7 輸出：7"
        }
      ],
      "testCases": [
        {
          "input": "10 8 9 9 9",
          "expectedOutput": "9",
          "output": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 6 9 10 9",
          "expectedOutput": "8",
          "output": "8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 7 7 7 7",
          "expectedOutput": "7",
          "output": "7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 7 8 9 6",
          "expectedOutput": "7",
          "output": "7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 10 8 9 10",
          "expectedOutput": "9",
          "output": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10 10 10 10",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0 0 0 0 0",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 2 3 4 5",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 8 8 10 0",
          "expectedOutput": "8",
          "output": "8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 5 6 7 8",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定5筆資料扣一高一低後平均，與其他縣市多次出現的評分題同概念。",
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
        "math": [
          "平均值"
        ],
        "context": [
          "競賽情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ11",
      "courseName": "114-臺南市國中（競賽模式）"
    },
    {
      "id": "114TCPJ11-3",
      "title": "質數和",
      "problemTitle": "質數和",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "(1)質數：一個大於1的整數除了1和本身以外，沒有其他的因數。\n(2)利用埃拉托賽尼的方法，找出100以內的質數：\n1、刪除1。1不是質數也不是合數。\n2、篩選2的倍數：2是第一個質數。刪除所有大於2的2的倍數，留下2。\n3、篩選3的倍數：3是質數。刪除所有大於3的3的倍數，留下3。\n4、篩選5的倍數：5是質數。刪除所有大於5的5的倍數，留下5。\n5、篩選7的倍數：7是質數。刪除所有大於7的7的倍數，留下7。\n6、最後未被刪除的整數，就是質數。\n請輸入兩個正整數(100以內，由小到大)，找出兩正整數之間的質數，計算這些質數的和？",
      "inputDescription": "輸入兩個正整數(100以內，由小到大)，分別代表起始數與結束數。",
      "outputDescription": "輸出一個整數，代表兩正整數之間(含端點)所有質數的總和。",
      "statement": {
        "description": "(1)質數：一個大於1的整數除了1和本身以外，沒有其他的因數。\n(2)利用埃拉托賽尼的方法，找出100以內的質數：\n1、刪除1。1不是質數也不是合數。\n2、篩選2的倍數：2是第一個質數。刪除所有大於2的2的倍數，留下2。\n3、篩選3的倍數：3是質數。刪除所有大於3的3的倍數，留下3。\n4、篩選5的倍數：5是質數。刪除所有大於5的5的倍數，留下5。\n5、篩選7的倍數：7是質數。刪除所有大於7的7的倍數，留下7。\n6、最後未被刪除的整數，就是質數。\n請輸入兩個正整數(100以內，由小到大)，找出兩正整數之間的質數，計算這些質數的和？",
        "input": "輸入兩個正整數(100以內，由小到大)，分別代表起始數與結束數。",
        "output": "輸出一個整數，代表兩正整數之間(含端點)所有質數的總和。"
      },
      "examples": [
        {
          "input": "21\n30",
          "output": "52",
          "explanation": "輸入起始數：21 輸入結束數：30 21至30間的質數有23、29 質數和為52 輸出：52"
        },
        {
          "input": "13\n19",
          "output": "49",
          "explanation": "輸入起始數：13 輸入結束數：19 13至19間的質數有13、17、19 質數和為49 輸出：49"
        },
        {
          "input": "54\n58",
          "output": "0",
          "explanation": "輸入起始數：54 輸入結束數：58 54至58間沒有質數 用0表示沒有質數 輸出：0"
        }
      ],
      "testCases": [
        {
          "input": "21\n30",
          "expectedOutput": "52",
          "output": "52",
          "score": 10,
          "hidden": false
        },
        {
          "input": "13\n19",
          "expectedOutput": "49",
          "output": "49",
          "score": 10,
          "hidden": false
        },
        {
          "input": "54\n58",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n20",
          "expectedOutput": "77",
          "output": "77",
          "score": 10,
          "hidden": false
        },
        {
          "input": "91\n95",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "61\n90",
          "expectedOutput": "523",
          "output": "523",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n10",
          "expectedOutput": "17",
          "output": "17",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100",
          "expectedOutput": "1060",
          "output": "1060",
          "score": 10,
          "hidden": false
        },
        {
          "input": "97\n100",
          "expectedOutput": "97",
          "output": "97",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n10",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "質數判定加上區間求和，練習雙層迴圈的試除法。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "數論"
        ],
        "subConcepts": [
          "質數判定"
        ],
        "algorithm": [
          "試除法"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "雙層迴圈"
        ],
        "math": [
          "質數"
        ],
        "context": [
          "數學情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ11",
      "courseName": "114-臺南市國中（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114JTainan",
    "convertedAt": "2026-08-13T00:39:19.898Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
