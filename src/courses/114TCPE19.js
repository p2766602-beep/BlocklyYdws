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
          "score": 10
        },
        {
          "input": "4\n3 1 3 6",
          "score": 10
        },
        {
          "input": "5\n4 1 2 3 1",
          "score": 10
        },
        {
          "input": "5\n1 1 1 1 1",
          "score": 10
        },
        {
          "input": "6\n5 1 5 1 5 10",
          "score": 10
        },
        {
          "input": "4\n1 10 100 1000",
          "score": 10
        },
        {
          "input": "6\n10 9 8 7 6 5",
          "score": 10
        },
        {
          "input": "6\n10 5 10 5 10 5",
          "score": 10
        },
        {
          "input": "6\n2 2 2 2 2 2",
          "score": 10
        },
        {
          "input": "7\n1 2 3 4 5 6 7",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
