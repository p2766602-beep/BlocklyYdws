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

// 競賽模式版本，由 114JPingtung.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（來源本來就沒有starterXml，維持空字串）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws的公開JS檔已移除，改由Worker（workers/score-grader/src/answerKeys.json，私密、
// 不進git）比對評分。blockly-lab版本例外維持mode:'learning'＋保留expectedOutput（比照既有
// 114TCPE01~18在blockly-lab的做法：共享Cloudflare帳號quota考量，全平台已停用成績上傳
// SCORE_SUBMISSION_ENABLED=false，改用本機testCases比對，不會打Worker）。

const course = {
  "code": "114TCPJ19",
  "title": "114-屏東縣國中（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "114-屏東縣國中114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-09-13T03:01:50.000Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-屏東縣國中",
    "version": "manual-transcription-verified",
    "convertedFrom": "114JPingtung",
    "convertedAt": "2026-09-13T03:01:50.000Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPJ19-1",
      "title": "1-基地台訊號覆蓋",
      "problemTitle": "1-基地台訊號覆蓋",
      "courseCode": "114TCPJ19",
      "courseName": "114-屏東縣國中（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "description": "在一個NxN的城鎮地圖中，佈置了若干個基地台。每個基地台都有其初始的訊號強度，而訊號會隨著距離增加而逐漸減弱。\n訊號傳播規則：\n1. 距離計算：兩格之間的距離採「曼哈頓距離」。距離 = 行數差距 + 列數差距。\n2. 強度減弱：距離基地台每增加1格，訊號強度就會減掉1。例如：基地台初始強度為5，距離它1格的地方強度為4，距離2格的地方強度為3，依此類推，強度最低為0。\n3. 訊號重疊：如果某個格子同時接收到多個基地台的訊號，該格子的強度以最高的那一個為準。\n訊號等級分類：\n請根據每一格最終得到的最高訊號強度，統計以下四種等級的格子總數：\n• 訊號好：強度為4以上(含4)。\n• 訊號普通：強度為2至3。\n• 訊號弱：強度為1。\n• 無訊號：強度為0。\n【輸入說明】\n1. 第1個輸入為整數N，代表地圖大小為NxN。\n2. 接下來有NxN個數字(0或正整數)：\n- 0代表該格沒有基地台。\n- 正整數代表該格設有基地台，且數字為其初始強度。\n- 讀取順序由左至右、由上至下。(以半形空格分隔)\n【輸出說明】\n請依序輸出四個整數，中間以空格隔開，分別代表：訊號好 訊號普通 訊號弱 無訊號 的格子總數。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "在一個NxN的城鎮地圖中，佈置了若干個基地台。每個基地台都有其初始的訊號強度，而訊號會隨著距離增加而逐漸減弱。\n訊號傳播規則：\n1. 距離計算：兩格之間的距離採「曼哈頓距離」。距離 = 行數差距 + 列數差距。\n2. 強度減弱：距離基地台每增加1格，訊號強度就會減掉1。例如：基地台初始強度為5，距離它1格的地方強度為4，距離2格的地方強度為3，依此類推，強度最低為0。\n3. 訊號重疊：如果某個格子同時接收到多個基地台的訊號，該格子的強度以最高的那一個為準。\n訊號等級分類：\n請根據每一格最終得到的最高訊號強度，統計以下四種等級的格子總數：\n• 訊號好：強度為4以上(含4)。\n• 訊號普通：強度為2至3。\n• 訊號弱：強度為1。\n• 無訊號：強度為0。\n【輸入說明】\n1. 第1個輸入為整數N，代表地圖大小為NxN。\n2. 接下來有NxN個數字(0或正整數)：\n- 0代表該格沒有基地台。\n- 正整數代表該格設有基地台，且數字為其初始強度。\n- 讀取順序由左至右、由上至下。(以半形空格分隔)\n【輸出說明】\n請依序輸出四個整數，中間以空格隔開，分別代表：訊號好 訊號普通 訊號弱 無訊號 的格子總數。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "3\n0 0 0 0 3 0 0 0 0",
          "output": "0 5 4 0",
          "explanation": "範例解析：地圖中央有一台強度3的基地台。\n強度3的格子：1個(中心點，距離0)。\n強度2的格子：4個(上下左右，距離1)。\n強度1的格子：4個(四個角落，距離2)。\n強度0的格子：0個。\n故輸出為：0 5 4 0 (訊號好共0個，普通1+4=5個，弱4個，無0個)。"
        },
        {
          "input": "4\n5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4",
          "output": "4 12 0 0",
          "explanation": "計算結果(每格訊號強度)：\n5 4 3 2\n4 3 2 2 (註：第4格有兩個訊號，取高的為2)\n3 2 2 3 (註：第3格有兩個訊號，取高的為2)\n2 2 3 4 (註：第2格有兩個訊號，取高的為2)"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "3\n0 0 0 0 3 0 0 0 0",
          "expectedOutput": "0 5 4 0",
          "score": 10
        },
        {
          "input": "4\n5 0 0 0 0 0 0 0 0 0 0 0 0 0 0 4",
          "expectedOutput": "4 12 0 0",
          "score": 10
        },
        {
          "input": "2\n0 0 0 0",
          "expectedOutput": "0 0 0 4",
          "score": 10
        },
        {
          "input": "2\n5 5 5 5",
          "expectedOutput": "4 0 0 0",
          "score": 10
        },
        {
          "input": "3\n1 0 0 0 1 0 0 0 1",
          "expectedOutput": "0 0 3 6",
          "score": 10
        },
        {
          "input": "5\n0 0 0 0 0 0 0 0 0 0 0 0 9 0 0 0 0 0 0 0 0 0 0 0 0",
          "expectedOutput": "25 0 0 0",
          "score": 10
        },
        {
          "input": "3\n2 0 0 0 0 0 0 0 2",
          "expectedOutput": "0 2 4 3",
          "score": 10
        },
        {
          "input": "4\n0 0 0 0 0 4 0 0 0 0 0 0 0 0 0 0",
          "expectedOutput": "1 10 4 1",
          "score": 10
        },
        {
          "input": "3\n4 0 4 0 0 0 4 0 4",
          "expectedOutput": "4 5 0 0",
          "score": 10
        },
        {
          "input": "5\n0 0 3 0 0 0 0 0 0 0 3 0 0 0 3 0 0 0 0 0 0 0 3 0 0",
          "expectedOutput": "0 16 9 0",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
