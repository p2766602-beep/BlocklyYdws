// 2026-09-21（更正）：mode維持/改回'contest'，不是'learning'——'contest'控制的是「系統
// 評分結果顯示多少細節」：contest只顯示每筆測資通過/未通過，learning會顯示完整的輸入/
// 正確答案/學生實際輸出。114TCP系列每題都有對應的學習模式課程（例如114TCPE01對應
// 114EChaiyi）已經提供範例答案跟完整回饋，114TCP系列維持'contest'、模擬官方競賽平台
// 「不洩漏答案」的行為是對的，之前一度誤改成'learning'已經改回來。
//
// 真正要修的bug是另一件事：mode:'contest'課程原本設計成「評分比對」要打score-grader
// Worker（本機JS故意不含expectedOutput，防止洩題），但Worker私密的answerKeys.json產生
// 腳本讀錯資料夾（讀到本來就被清空答案的公開JS，不是YDWS-CodingBank正本），導致「正確
// 答案」全部變成空字串，系統評分永遠判定失敗，不管學生寫得多正確都一樣。修法是把
// 「評分比對去哪裡做」跟「結果要顯示多少細節」這兩件事拆開：testCases補回YDWS-CodingBank
// 正本的真正expectedOutput/output（本機也拿得到答案），main.js的評分邏輯改成不管mode是
// 什麼、比對一律走本機（不再打Worker），但結果顯示邏輯完全沒動，mode還是看
// 'contest'/'learning'決定要不要隱藏細節——這樣'contest'課程一樣不洩漏答案，只是評分
// 比對不再依賴容易忘記重新產生/部署的Worker私密資料。

// 競賽模式版本，由 114EPingtung.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（來源本來就沒有starterXml，維持空字串）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws的公開JS檔已移除，改由Worker（workers/score-grader/src/answerKeys.json，私密、
// 不進git）比對評分。blockly-lab版本例外維持mode:'learning'＋保留expectedOutput（比照既有
// 114TCPE01~18在blockly-lab的做法：共享Cloudflare帳號quota考量，全平台已停用成績上傳
// SCORE_SUBMISSION_ENABLED=false，改用本機testCases比對，不會打Worker）。

const course = {
  "code": "114TCPE19",
  "title": "114-屏東縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "114-屏東縣國小114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-09-13T03:01:50.000Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-屏東縣國小",
    "version": "manual-transcription-verified",
    "convertedFrom": "114EPingtung",
    "convertedAt": "2026-09-13T03:01:50.000Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPE19-1",
      "title": "1-小島越野賽",
      "problemTitle": "1-小島越野賽",
      "courseCode": "114TCPE19",
      "courseName": "114-屏東縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "description": "小機器人要挑戰穿過一連串高低不平的小島。這條路是由一格一格組成的，每一格都有不同的高度數字(例如：1 1 2 2 1)。小機器人現在站在第1格，目標是走到最後一格。\n向前走的時候，小機器人可以選擇以下5種走路方式，每種方式花掉的時間不一樣，請找出最快(花最少秒數)到達終點的方法：\n1. 平地小衝刺(1秒)： 如果前面的連續兩格高度都跟現在站的地方一樣高，你可以直接衝到前方第2格。(目前高度 == 前方第1格高度 == 前方第2格高度)\n2. 爬小階梯(1秒)：往前走1格。但下一格的高度，只能比現在高1層、一樣高、或是低1層(高度差在1以內)。\n3. 動力大跳躍(3秒)：如果下一格太高了(比現在高出2層或更多)時，必須啟動噴射裝置才跳得上去，但只能往前走1格。\n4. 跨越小坑洞(2秒)：如果前方第1格比較矮(是個洞)，但前方第2格的高度剛好跟現在站的地方一樣高，你可以直接跳過洞口，踩到前方第2格。\n5. 深谷急降(1秒)：往前走1格。這個是用在，如果下一格非常矮(比現在低了2層或更多)，你可以直接垂直降落。\n【輸入說明】\n第1個輸入為整數N，代表小島的總格數。\n接下來N個輸入：代表每一格的地形高度數字(整數)。(以半形空格分隔)\n【輸出說明】\n輸出一個整數，代表機器人到達最後一格所需要花費的「最少秒數」。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "小機器人要挑戰穿過一連串高低不平的小島。這條路是由一格一格組成的，每一格都有不同的高度數字(例如：1 1 2 2 1)。小機器人現在站在第1格，目標是走到最後一格。\n向前走的時候，小機器人可以選擇以下5種走路方式，每種方式花掉的時間不一樣，請找出最快(花最少秒數)到達終點的方法：\n1. 平地小衝刺(1秒)： 如果前面的連續兩格高度都跟現在站的地方一樣高，你可以直接衝到前方第2格。(目前高度 == 前方第1格高度 == 前方第2格高度)\n2. 爬小階梯(1秒)：往前走1格。但下一格的高度，只能比現在高1層、一樣高、或是低1層(高度差在1以內)。\n3. 動力大跳躍(3秒)：如果下一格太高了(比現在高出2層或更多)時，必須啟動噴射裝置才跳得上去，但只能往前走1格。\n4. 跨越小坑洞(2秒)：如果前方第1格比較矮(是個洞)，但前方第2格的高度剛好跟現在站的地方一樣高，你可以直接跳過洞口，踩到前方第2格。\n5. 深谷急降(1秒)：往前走1格。這個是用在，如果下一格非常矮(比現在低了2層或更多)，你可以直接垂直降落。\n【輸入說明】\n第1個輸入為整數N，代表小島的總格數。\n接下來N個輸入：代表每一格的地形高度數字(整數)。(以半形空格分隔)\n【輸出說明】\n輸出一個整數，代表機器人到達最後一格所需要花費的「最少秒數」。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "4\n1 1 1 2",
          "output": "2",
          "explanation": "平地小衝刺到第3格(1秒)，\n爬小階梯到第4格(1秒)，\n共花費2秒"
        },
        {
          "input": "4\n3 1 3 6",
          "output": "5",
          "explanation": "跨越小坑洞到第3格(2秒)\n動力大跳躍到第4格(3秒)\n共花費5秒"
        },
        {
          "input": "5\n4 1 2 3 1",
          "output": "4",
          "explanation": "深谷急降到第2格(1秒)\n爬小階梯到第3格(1秒)\n爬小階梯到第4格(1秒)\n深谷急降到第5格(1秒)\n共花費4秒"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "4\n1 1 1 2",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "4\n3 1 3 6",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "5\n4 1 2 3 1",
          "expectedOutput": "4",
          "score": 10
        },
        {
          "input": "5\n1 1 1 1 1",
          "expectedOutput": "2",
          "score": 10
        },
        {
          "input": "6\n5 1 5 1 5 10",
          "expectedOutput": "7",
          "score": 10
        },
        {
          "input": "4\n1 10 100 1000",
          "expectedOutput": "9",
          "score": 10
        },
        {
          "input": "6\n10 9 8 7 6 5",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "6\n10 5 10 5 10 5",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "6\n2 2 2 2 2 2",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "7\n1 2 3 4 5 6 7",
          "expectedOutput": "6",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
