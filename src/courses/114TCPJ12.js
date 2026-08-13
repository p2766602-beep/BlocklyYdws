// 競賽模式版本，2026-08-13由 114JTaipei.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPJ12",
  "title": "114-臺北市國中（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "臺北市114學年度國中組資訊科技競賽練習題，涵蓋經典圖論演算法(BFS/Union-Find/關鍵路徑法)、多鍵排序與幾何窮舉，是全部16個縣市題組中演算法難度最高的一組。",
  "tasks": [
    {
      "id": "114TCPJ12-1",
      "title": "壓縮機的編碼",
      "problemTitle": "壓縮機的編碼",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "為了節省儲存空間，探勘機器人將採集到的連續訊號進行了壓縮處理。壓縮演算法採用了「行程長度編碼(Run-Length Encoding, RLE)」的原理：\n當訊號中出現連續重複的字元時，將其替換為「該字元+重複次數」。\n例如：\n原始訊號：AAABBBBC\n壓縮後：A3B4C1\n原始訊號：WWWWWWWWWW\n壓縮後：W10\n請撰寫一個程式，將輸入的原始字串轉換為壓縮格式。",
      "inputDescription": "• 一個非空字串 S。\n• S 由英文字母或數字組成。\n• 長度範圍：1 ≤ Length ≤ 1000。",
      "outputDescription": "針對每一筆輸入，輸出一行壓縮後的字串。格式為：[字元][次數][字元][次數]...",
      "statement": {
        "description": "為了節省儲存空間，探勘機器人將採集到的連續訊號進行了壓縮處理。壓縮演算法採用了「行程長度編碼(Run-Length Encoding, RLE)」的原理：\n當訊號中出現連續重複的字元時，將其替換為「該字元+重複次數」。\n例如：\n原始訊號：AAABBBBC\n壓縮後：A3B4C1\n原始訊號：WWWWWWWWWW\n壓縮後：W10\n請撰寫一個程式，將輸入的原始字串轉換為壓縮格式。",
        "input": "• 一個非空字串 S。\n• S 由英文字母或數字組成。\n• 長度範圍：1 ≤ Length ≤ 1000。",
        "output": "針對每一筆輸入，輸出一行壓縮後的字串。格式為：[字元][次數][字元][次數]..."
      },
      "examples": [
        {
          "input": "AAAB",
          "output": "A3B1",
          "explanation": "A 出現 3 次，B 出現 1 次，壓縮為 A3B1。"
        },
        {
          "input": "WWWWWWWWWW",
          "output": "W10",
          "explanation": "W 連續出現 10 次，壓縮為 W10。"
        }
      ],
      "testCases": [
        {
          "input": "AAAB",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A",
          "score": 10,
          "hidden": false
        },
        {
          "input": "BB",
          "score": 10,
          "hidden": false
        },
        {
          "input": "XY",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ABABABABAB",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ZZZZZZZZZZZZZZZZZZZZ",
          "score": 10,
          "hidden": false
        },
        {
          "input": "AABBCC",
          "score": 10,
          "hidden": false
        },
        {
          "input": "ABCDEF",
          "score": 10,
          "hidden": false
        },
        {
          "input": "A11B",
          "score": 10,
          "hidden": false
        },
        {
          "input": "XXXXYYYYZZZZ",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "行程長度編碼(RLE)，單行輸出不分隔，與臺北市國小「連續字元分段顯示」概念相同但輸出格式不同。",
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
      "courseCode": "114TCPJ12",
      "courseName": "114-臺北市國中（競賽模式）"
    },
    {
      "id": "114TCPJ12-2",
      "title": "探險隊員名單排序",
      "problemTitle": "探險隊員名單排序",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際探險隊即將出發前往新的殖民星，人事部門需要對所有候選隊員進行排序，以決定登船的優先順序。每位隊員有三個關鍵屬性：貢獻度(Contribution)、年資(Seniority)以及隊員ID(ID)。\n排序的規則如下(優先權由高到低)：\n1. 貢獻度：由高到低排序(遞減)。\n2. 年資：如果貢獻度相同，則年資由高到低排序(遞減)。\n3. 隊員 ID：如果貢獻度與年資皆相同，則依據隊員 ID 的字典順序由小到大排序(遞增)。\n隊員 ID 統一格式為 ID 後接三位數字(例如：ID001, ID042, ID999)，且在同一筆資料中不會重複。",
      "inputDescription": "1. 第一行為一個正整數 N，代表隊員的總人數。\n2. 接下來有 N 行，每行包含一位隊員的資訊，格式為：ID 貢獻度 年資。(為配合平台輸入，可皆以空白或換行分隔)\n【限制條件】\n• ID：字串格式(例如ID001)。\n• 貢獻度：非負整數。\n• 年資：正整數。\n• 1 ≤ N ≤ 1,000。\n• 貢獻度與年資介於 0~1,000。\n• 所有隊員 ID 長度相同且格式固定，簡化排序邏輯。",
      "outputDescription": "針對每一筆輸入，輸出排序後的隊員名單。每位隊員佔一行，格式與輸入相同。",
      "statement": {
        "description": "星際探險隊即將出發前往新的殖民星，人事部門需要對所有候選隊員進行排序，以決定登船的優先順序。每位隊員有三個關鍵屬性：貢獻度(Contribution)、年資(Seniority)以及隊員ID(ID)。\n排序的規則如下(優先權由高到低)：\n1. 貢獻度：由高到低排序(遞減)。\n2. 年資：如果貢獻度相同，則年資由高到低排序(遞減)。\n3. 隊員 ID：如果貢獻度與年資皆相同，則依據隊員 ID 的字典順序由小到大排序(遞增)。\n隊員 ID 統一格式為 ID 後接三位數字(例如：ID001, ID042, ID999)，且在同一筆資料中不會重複。",
        "input": "1. 第一行為一個正整數 N，代表隊員的總人數。\n2. 接下來有 N 行，每行包含一位隊員的資訊，格式為：ID 貢獻度 年資。(為配合平台輸入，可皆以空白或換行分隔)\n【限制條件】\n• ID：字串格式(例如ID001)。\n• 貢獻度：非負整數。\n• 年資：正整數。\n• 1 ≤ N ≤ 1,000。\n• 貢獻度與年資介於 0~1,000。\n• 所有隊員 ID 長度相同且格式固定，簡化排序邏輯。",
        "output": "針對每一筆輸入，輸出排序後的隊員名單。每位隊員佔一行，格式與輸入相同。"
      },
      "examples": [
        {
          "input": "3\nID001 100 5\nID002 100 8\nID003 150 2",
          "output": "ID003 150 2\nID002 100 8\nID001 100 5",
          "explanation": "ID003 貢獻度最高排名第一。ID001與ID002 貢獻度相同，但ID002年資(8)高於ID001(5)，故ID002較前。"
        }
      ],
      "testCases": [
        {
          "input": "1\nID359 100 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nID380 50 1 ID313 100 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nID951 100 1 ID318 100 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nID237 100 1 ID139 100 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nID221 10 10 ID708 10 10 ID007 10 10 ID741 10 10 ID479 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nID111 50 50 ID222 50 50 ID333 50 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nID333 50 50 ID222 50 50 ID111 50 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nID001 10 1 ID002 20 1 ID003 30 1 ID004 40 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nID001 10 10 ID002 10 20 ID003 10 30 ID004 10 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nID100 100 100 ID200 50 200 ID300 200 50 ID400 100 100 ID500 200 50",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "三階多鍵排序(貢獻度desc/年資desc/ID字典序asc)，需要泡泡排序同時交換四組平行清單。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "排序"
        ],
        "subConcepts": [
          "多鍵排序"
        ],
        "algorithm": [
          "泡泡排序"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "清單交換"
        ],
        "math": [],
        "context": [
          "科幻情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ12",
      "courseName": "114-臺北市國中（競賽模式）"
    },
    {
      "id": "114TCPJ12-3",
      "title": "通訊網路廣播",
      "problemTitle": "通訊網路廣播",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "探險隊在一個星團中建立了 N 個通訊節點(編號 0 ~ N-1)。這些節點之間存在 M 條雙向的通訊連結。\n當探險隊從 0 號節點(基地台)發送廣播訊號時，訊號會沿著連結逐層向外擴散：\n• 第 0 層：0 號節點接收到訊號，距離為 0。\n• 第 1 層：直接與 0 號節點相連的所有節點接收到訊號，距離為 1。\n• 第 2 層：與第 1 層節點相連、且先前未接收過訊號的所有節點，距離為 2。\n• 以此類推。\n請撰寫一個程式，計算從 0 號節點出發，所有可抵達的節點及其與 0 號節點的最短距離。",
      "inputDescription": "1. 第一行為兩個整數 N, M，代表節點數與連結數。\n2. 接下來有 M 行，每行包含兩個整數 u, v，代表節點 u 與 v 之間有一條通訊連結。(配合平台，數值間以空白分隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000\n• 0 ≤ M ≤ 2,000\n• 節點編號為 0 ~ N-1。",
      "outputDescription": "針對每一筆輸入，輸出一行包含所有可抵達節點的編號與距離，格式為 ID:Distance，並依據節點 ID 由小到大排列。",
      "statement": {
        "description": "探險隊在一個星團中建立了 N 個通訊節點(編號 0 ~ N-1)。這些節點之間存在 M 條雙向的通訊連結。\n當探險隊從 0 號節點(基地台)發送廣播訊號時，訊號會沿著連結逐層向外擴散：\n• 第 0 層：0 號節點接收到訊號，距離為 0。\n• 第 1 層：直接與 0 號節點相連的所有節點接收到訊號，距離為 1。\n• 第 2 層：與第 1 層節點相連、且先前未接收過訊號的所有節點，距離為 2。\n• 以此類推。\n請撰寫一個程式，計算從 0 號節點出發，所有可抵達的節點及其與 0 號節點的最短距離。",
        "input": "1. 第一行為兩個整數 N, M，代表節點數與連結數。\n2. 接下來有 M 行，每行包含兩個整數 u, v，代表節點 u 與 v 之間有一條通訊連結。(配合平台，數值間以空白分隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000\n• 0 ≤ M ≤ 2,000\n• 節點編號為 0 ~ N-1。",
        "output": "針對每一筆輸入，輸出一行包含所有可抵達節點的編號與距離，格式為 ID:Distance，並依據節點 ID 由小到大排列。"
      },
      "examples": [
        {
          "input": "4 3\n0 1 1 2 2 3",
          "output": "0:0 1:1 2:2 3:3",
          "explanation": "訊號從 0 傳到 1 (距離 1)，再從 1 傳到 2 (距離 2)，依此類推。"
        },
        {
          "input": "5 4\n0 1 0 2 0 3 0 4",
          "output": "0:0 1:1 2:1 3:1 4:1",
          "explanation": "0 號節點直接連至 1, 2, 3, 4，距離皆為 1。"
        }
      ],
      "testCases": [
        {
          "input": "1 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 1\n0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 3\n0 1 1 2 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n0 1 0 2 0 3 0 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 3\n0 1 1 2 2 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n0 1 1 2 0 3 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 5\n0 1 1 2 2 3 3 4 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 2\n0 1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7 6\n0 1 0 2 1 3 1 4 2 5 2 6",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典廣度優先搜尋(BFS)求最短距離，用鄰接矩陣加佇列實作，是圖論演算法的入門經典題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "廣度優先搜尋"
        ],
        "algorithm": [
          "BFS"
        ],
        "dataStructure": [
          "清單",
          "佇列"
        ],
        "syntax": [
          "while迴圈"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "通訊網路"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ12",
      "courseName": "114-臺北市國中（競賽模式）"
    },
    {
      "id": "114TCPJ12-4",
      "title": "區域網路連線檢測",
      "problemTitle": "區域網路連線檢測",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "在一個大型研究基地中，有 N 台電腦(編號 0 ~ N-1)。初期，所有電腦都是獨立的。隨著任務需求，工程師會不斷在兩台電腦之間建立區域網路(LAN)連線。\n你被要求開發一個檢測系統，處理以下兩種類期的指令：\n1. CONNECT U V：在電腦 U 與 V 之間建立一條雙向連線。\n2. QUERY U V：查詢電腦 U 與 V 是否在同一個連動網絡中(即 U 與 V 之間是否存在直接或間接的路徑)。",
      "inputDescription": "1. 第一行為兩個正整數 N 與 M，分別代表電腦數量與操作指令的數量。\n2. 接下來有 M 行，每行包含一個指令(CONNECT 或 QUERY)以及兩個整數 U, V。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 1 ≤ M ≤ 2,000。\n• 0 ≤ U, V &lt; N。",
      "outputDescription": "針對每一個 QUERY 指令：\n• 若兩台電腦連通，輸出 YES。\n• 若不連通，輸出 NO。\n(每筆查詢的輸出請以換行分隔)",
      "statement": {
        "description": "在一個大型研究基地中，有 N 台電腦(編號 0 ~ N-1)。初期，所有電腦都是獨立的。隨著任務需求，工程師會不斷在兩台電腦之間建立區域網路(LAN)連線。\n你被要求開發一個檢測系統，處理以下兩種類期的指令：\n1. CONNECT U V：在電腦 U 與 V 之間建立一條雙向連線。\n2. QUERY U V：查詢電腦 U 與 V 是否在同一個連動網絡中(即 U 與 V 之間是否存在直接或間接的路徑)。",
        "input": "1. 第一行為兩個正整數 N 與 M，分別代表電腦數量與操作指令的數量。\n2. 接下來有 M 行，每行包含一個指令(CONNECT 或 QUERY)以及兩個整數 U, V。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 1 ≤ M ≤ 2,000。\n• 0 ≤ U, V &lt; N。",
        "output": "針對每一個 QUERY 指令：\n• 若兩台電腦連通，輸出 YES。\n• 若不連通，輸出 NO。\n(每筆查詢的輸出請以換行分隔)"
      },
      "examples": [
        {
          "input": "5 6\nQUERY 0 1\nCONNECT 0 1\nCONNECT 1 2\nQUERY 0 2\nQUERY 0 3\nCONNECT 3 4",
          "output": "NO\nYES\nNO",
          "explanation": "第一次查詢 0 1 尚未連線，輸出 NO。 連線 0 1, 1 2 後，0 與 2 已經連通，輸出 YES。 0 與 3 不連通，輸出 NO。"
        }
      ],
      "testCases": [
        {
          "input": "2 1\nQUERY 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 2\nCONNECT 0 1 QUERY 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\nCONNECT 0 1 CONNECT 1 2 CONNECT 2 3 QUERY 0 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 5\nCONNECT 0 1 CONNECT 2 3 QUERY 0 2 QUERY 1 0 QUERY 3 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 2\nCONNECT 0 0 QUERY 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 4\nQUERY 0 1 QUERY 1 2 QUERY 2 3 QUERY 0 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 4\nCONNECT 0 1 CONNECT 1 2 QUERY 0 2 QUERY 2 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 6\nCONNECT 0 1 CONNECT 3 4 QUERY 0 4 CONNECT 1 3 QUERY 0 4 QUERY 1 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 3\nQUERY 0 1 CONNECT 1 0 QUERY 0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5\nCONNECT 0 1 CONNECT 0 2 CONNECT 0 3 CONNECT 0 4 QUERY 1 4",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典聯合查找(Union-Find/DSU)演算法判斷連通性，是圖論資料結構的入門經典題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "聯合查找"
        ],
        "algorithm": [
          "Union-Find"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while迴圈"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "網路"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ12",
      "courseName": "114-臺北市國中（競賽模式）"
    },
    {
      "id": "114TCPJ12-5",
      "title": "最近恆星點對",
      "problemTitle": "最近恆星點對",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際探測器掃描了一片未知的星域，並回傳了 N 顆恆星的二維平面座標。為了尋找可能存在的雙星系統或互相牽引的天體，請你在這個 N 個點中，找出距離最近的兩個點，並輸出它們之間的距離。",
      "inputDescription": "1. 第一行為一個正整數 N，代表恆星數量。\n2. 接下來有 N 行，每行包含兩個浮點數 X 與 Y，代表恆星的座標。(數值之間以空白間隔)\n【限制條件】\n• 2 ≤ N ≤ 1,000。\n• 0 ≤ X, Y ≤ 10,000。",
      "outputDescription": "針對每一筆測試資料，輸出最近點對的距離。請四捨五入至小數點後 4 位(例如 1.4142)。",
      "statement": {
        "description": "星際探測器掃描了一片未知的星域，並回傳了 N 顆恆星的二維平面座標。為了尋找可能存在的雙星系統或互相牽引的天體，請你在這個 N 個點中，找出距離最近的兩個點，並輸出它們之間的距離。",
        "input": "1. 第一行為一個正整數 N，代表恆星數量。\n2. 接下來有 N 行，每行包含兩個浮點數 X 與 Y，代表恆星的座標。(數值之間以空白間隔)\n【限制條件】\n• 2 ≤ N ≤ 1,000。\n• 0 ≤ X, Y ≤ 10,000。",
        "output": "針對每一筆測試資料，輸出最近點對的距離。請四捨五入至小數點後 4 位(例如 1.4142)。"
      },
      "examples": [
        {
          "input": "3\n0 0\n3 4\n1 1",
          "output": "1.4142",
          "explanation": "(0, 0) 與 (1, 1) 的距離為 √2 ≈ 1.4142。"
        },
        {
          "input": "2\n1.5 1.5\n1.5 1.5",
          "output": "0.0000",
          "explanation": "同一個位置的點，距離為 0.0000。"
        }
      ],
      "testCases": [
        {
          "input": "3\n0 0 3 4 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n0 0 10 10 20 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 1 1 0 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n1.5 1.5 1.5 1.5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n0 0 1 1 2 2 0.1 0.1 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 5 5 0 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 100 100 101 200 200",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n0 0 10000 10000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 1 2 2 3 3 4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 10 20 20 30 30 40 40 40 40.5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "窮舉所有點對求最近距離(O(N^2))，並需將結果格式化為固定4位小數字串輸出。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "窮舉"
        ],
        "subConcepts": [
          "幾何"
        ],
        "algorithm": [
          "窮舉法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "雙層迴圈"
        ],
        "math": [
          "距離公式"
        ],
        "context": [
          "科幻情境",
          "天文"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ12",
      "courseName": "114-臺北市國中（競賽模式）"
    },
    {
      "id": "114TCPJ12-6",
      "title": "巨型結構的建造排程",
      "problemTitle": "巨型結構的建造排程",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "星際聯邦計畫建造一座戴森球(Dyson Sphere)。這是一個極為複雜的工程，包含 N 個建造任務(編號 0 ~ N-1)。每個任務都有一個所需工時(Duration) Di。\n此外，任務之間存在依賴關係(Dependencies)：某些任務必須在其他任務完成後才能開始。\n為了盡快完成戴森球，所有沒有依賴關係或前置任務已完成的任務都可以並行(Parallel)進行。請計算完成整個工程所需的最短總工期。如果工程因循環依賴而無法完成，請輸出 IMPOSSIBLE。",
      "inputDescription": "1. 第一行為兩個整數 N, M，代表任務數量與依賴關係數量。\n2. 第二行為 N 個由空白分隔的整數，代表每個任務的工時 D0, D1, ..., DN-1。\n3. 接下來有 M 行，每行包含兩個整數 U, V，代表任務 U 必須在任務 V 開始之前完成(U → V)。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 0 ≤ M ≤ 2,000。\n• 1 ≤ Di ≤ 10,000。",
      "outputDescription": "針對每一筆測試資料，輸出一行包含一個整數，代表最短總工期。若無法完成，輸出 IMPOSSIBLE。",
      "statement": {
        "description": "星際聯邦計畫建造一座戴森球(Dyson Sphere)。這是一個極為複雜的工程，包含 N 個建造任務(編號 0 ~ N-1)。每個任務都有一個所需工時(Duration) Di。\n此外，任務之間存在依賴關係(Dependencies)：某些任務必須在其他任務完成後才能開始。\n為了盡快完成戴森球，所有沒有依賴關係或前置任務已完成的任務都可以並行(Parallel)進行。請計算完成整個工程所需的最短總工期。如果工程因循環依賴而無法完成，請輸出 IMPOSSIBLE。",
        "input": "1. 第一行為兩個整數 N, M，代表任務數量與依賴關係數量。\n2. 第二行為 N 個由空白分隔的整數，代表每個任務的工時 D0, D1, ..., DN-1。\n3. 接下來有 M 行，每行包含兩個整數 U, V，代表任務 U 必須在任務 V 開始之前完成(U → V)。(數值之間以空白間隔)\n【限制條件】\n• 1 ≤ N ≤ 1,000。\n• 0 ≤ M ≤ 2,000。\n• 1 ≤ Di ≤ 10,000。",
        "output": "針對每一筆測試資料，輸出一行包含一個整數，代表最短總工期。若無法完成，輸出 IMPOSSIBLE。"
      },
      "examples": [
        {
          "input": "3 2\n10 20 30\n0 1\n1 2",
          "output": "60",
          "explanation": "解釋：0 -> 1 -> 2。路徑長 0 + 20 + 30 = 60。(編按：此處原題解釋可能為簡寫，正確總工時為 D0 + D1 + D2 = 10 + 20 + 30 = 60)"
        },
        {
          "input": "3 3\n10 10 10\n0 1\n1 2\n2 0",
          "output": "IMPOSSIBLE",
          "explanation": "0, 1, 2 互相依賴形成循環，無法完成。"
        }
      ],
      "testCases": [
        {
          "input": "1 0\n10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 1\n10 20\n0 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 3\n10 10 10\n0 1 1 2 2 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 2\n10 20 30\n0 1 0 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 3\n10 10 10 10\n0 1 1 2 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 0\n100 200 300",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n10 20 30 40 50\n0 4 1 4 2 4 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 4\n10 20 30 40\n0 1 1 2 2 3 3 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n10 10 10 10 10\n0 1 0 2 1 3 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2 2\n100 100\n0 1 1 0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典DAG關鍵路徑(Critical Path Method)問題，用Bellman-Ford式鬆弛求最長路徑並偵測循環依賴，是本次題組中演算法設計難度最高的一題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "拓樸排序"
        ],
        "algorithm": [
          "關鍵路徑法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "多層迴圈"
        ],
        "math": [],
        "context": [
          "科幻情境",
          "工程排程"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ12",
      "courseName": "114-臺北市國中（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114JTaipei",
    "convertedAt": "2026-08-13T00:39:19.902Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
