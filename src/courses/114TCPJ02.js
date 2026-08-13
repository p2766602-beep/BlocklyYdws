// 競賽模式版本，2026-08-13由 114JChaiyiC.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入）、
// 課程代碼/題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws/blockly-lab兩平台的公開JS檔已移除，改由各自Worker（workers/score-grader/src/
// answerKeys.json，私密、不進git）比對評分，詳見workers/score-grader/README.md。

const course = {
  "code": "114TCPJ02",
  "title": "114-嘉義縣國中（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "嘉義縣114學年度國中組資訊科技競賽練習題，涵蓋進位轉換、貪婪演算法、動態規劃(費氏數列/Kadane)與二分搜尋答案，難度較國小組明顯提升。",
  "tasks": [
    {
      "id": "114TCPJ02-1",
      "title": "自動販賣機的補貨通知",
      "problemTitle": "自動販賣機的補貨通知",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校走廊上有一台受歡迎的自動販賣機。為了確保飲料隨時充足，管理員小華每天會查看 N 個飲料格位的剩餘數量。請你幫小華寫一個程式，計算整台販賣機目前「總共還剩多少瓶飲料」，並且計算有幾個格位「缺貨」（剩餘數量低於 5 瓶），需要小華去補貨。\n1. 給定一個整數 N，代表販賣機的格位數量。\n2. 給定 N 個整數，代表每個格位目前的飲料剩餘量。\n3. 任務一：把所有格位的剩餘量加起來，得到總數。\n4. 任務二：檢查每個格位，如果剩餘量小於 5，則補貨次數加 1。\n5. 輸出總剩餘量與需要補貨的格位數量。",
      "inputDescription": "第一行：一個整數 N，代表格位數量。\n第二行：N 個整數，代表每個格位的飲料剩餘量（以半形空格分隔）。",
      "outputDescription": "一行輸出二個整數，代表整台機器的飲料總剩餘量及需要補貨的格位數量（剩餘量小於 5），中間以半形空格分隔。",
      "statement": {
        "description": "學校走廊上有一台受歡迎的自動販賣機。為了確保飲料隨時充足，管理員小華每天會查看 N 個飲料格位的剩餘數量。請你幫小華寫一個程式，計算整台販賣機目前「總共還剩多少瓶飲料」，並且計算有幾個格位「缺貨」（剩餘數量低於 5 瓶），需要小華去補貨。\n1. 給定一個整數 N，代表販賣機的格位數量。\n2. 給定 N 個整數，代表每個格位目前的飲料剩餘量。\n3. 任務一：把所有格位的剩餘量加起來，得到總數。\n4. 任務二：檢查每個格位，如果剩餘量小於 5，則補貨次數加 1。\n5. 輸出總剩餘量與需要補貨的格位數量。",
        "input": "第一行：一個整數 N，代表格位數量。\n第二行：N 個整數，代表每個格位的飲料剩餘量（以半形空格分隔）。",
        "output": "一行輸出二個整數，代表整台機器的飲料總剩餘量及需要補貨的格位數量（剩餘量小於 5），中間以半形空格分隔。"
      },
      "examples": [
        {
          "input": "5\n10 2 8 3 20",
          "output": "43 2",
          "explanation": "總剩餘量：10+2+8+3+20 = 43 缺貨判斷：2 和 3 小於 5，共有 2 個格位需要補貨。"
        },
        {
          "input": "3\n0 4 0",
          "output": "4 3",
          "explanation": "總剩餘量：4。 缺貨判斷：0, 4, 0 皆小於 5，全部 3 個格位都需要補貨。"
        }
      ],
      "testCases": [
        {
          "input": "3\n10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n4 4 4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n0 10 0 10 0 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n20 20 1 20 20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n0 0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n10 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n5 5 5 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n2",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "基礎加總與計數的組合應用。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "計數"
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
          "商業"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-2",
      "title": "5進位解碼",
      "problemTitle": "5進位解碼",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：\nA=0, B=1, C=2, D=3, E=4\n例如密碼 BC 代表 5 進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。\n1. 輸入密碼長度 L 與密碼內容（由 A-E 組成）。\n2. 權重計算：最右邊位數是 5 的 0 次方（任何數的 0 次方為 1），左邊一位是 5 的 1 次方，以此類推。\n3. 將每個字母轉換為對應數值後，計算總和。",
      "inputDescription": "第一行：整數 L。\n第二行：L 個字元（如 BC）。",
      "outputDescription": "一個整數（10 進位數值）。",
      "statement": {
        "description": "程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：\nA=0, B=1, C=2, D=3, E=4\n例如密碼 BC 代表 5 進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。\n1. 輸入密碼長度 L 與密碼內容（由 A-E 組成）。\n2. 權重計算：最右邊位數是 5 的 0 次方（任何數的 0 次方為 1），左邊一位是 5 的 1 次方，以此類推。\n3. 將每個字母轉換為對應數值後，計算總和。",
        "input": "第一行：整數 L。\n第二行：L 個字元（如 BC）。",
        "output": "一個整數（10 進位數值）。"
      },
      "examples": [
        {
          "input": "2\nBC",
          "output": "7",
          "explanation": "B=1, C=2。 1 × 5 + 2 = 7。"
        },
        {
          "input": "3\nBAE",
          "output": "29",
          "explanation": "B=1, A=0, E=4。 1 × 25 + 0 × 5 + 4 × 1 = 29。"
        }
      ],
      "testCases": [
        {
          "input": "1\nA",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nEE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nBAA",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nBAAA",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nCDEAB",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nAAAAA",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nBCDE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nABCDE",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nEEEEE",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "進位轉換，練習權重乘冪的累加寫法。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "進位轉換"
        ],
        "subConcepts": [
          "字元對應"
        ],
        "algorithm": [
          "進位轉換"
        ],
        "dataStructure": [
          "字串"
        ],
        "syntax": [
          "字元取出"
        ],
        "math": [
          "進位制"
        ],
        "context": [
          "密碼學"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-3",
      "title": "圖書館的舊書打包",
      "problemTitle": "圖書館的舊書打包",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校圖書館正在進行舊書義賣，小華負責將舊書裝箱。為了節省箱子，小華決定採用一個策略：先把書按重量「由重到輕」排好。\n每次拿出一個新箱子時，優先嘗試放入最重的書，箱子剩下的空間如果放得下就放進去，放不下就跳過這本，試下一本較輕的書，直到所有書都檢查過一輪，這個箱子就封箱。\n接著拿新箱子重複上述步驟，直到所有書都裝完。\nNote：箱子在封箱前要由重到輕，確認已經裝不下任何一本未裝箱的書了。",
      "inputDescription": "第一行：一個整數 W（箱子最大承重）。\n第二行：一個整數 N（書本數量）。\n第三行：N 個整數（每本書重量，已由重到輕排序）。",
      "outputDescription": "一個整數，代表總共需要的箱子數量。",
      "statement": {
        "description": "學校圖書館正在進行舊書義賣，小華負責將舊書裝箱。為了節省箱子，小華決定採用一個策略：先把書按重量「由重到輕」排好。\n每次拿出一個新箱子時，優先嘗試放入最重的書，箱子剩下的空間如果放得下就放進去，放不下就跳過這本，試下一本較輕的書，直到所有書都檢查過一輪，這個箱子就封箱。\n接著拿新箱子重複上述步驟，直到所有書都裝完。\nNote：箱子在封箱前要由重到輕，確認已經裝不下任何一本未裝箱的書了。",
        "input": "第一行：一個整數 W（箱子最大承重）。\n第二行：一個整數 N（書本數量）。\n第三行：N 個整數（每本書重量，已由重到輕排序）。",
        "output": "一個整數，代表總共需要的箱子數量。"
      },
      "examples": [
        {
          "input": "10\n5\n8 5 4 3 2",
          "output": "3",
          "explanation": "箱1：裝 8 (剩2)，5(X)，4(X)，3(X)，裝 2(OK)。(內容：8, 2) 箱2：剩 5, 4, 3。裝 5 (剩5)，裝 4(剩1)，3(X)。(內容：5, 4) 箱3：剩 3。裝 3。(內容：3) 共 3 箱。"
        },
        {
          "input": "20\n3\n10 10 10",
          "output": "2",
          "explanation": "箱1：裝 10，裝 10(滿)。 箱2：裝 10。 共 2 箱。"
        }
      ],
      "testCases": [
        {
          "input": "5\n3\n2 2 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n5\n9 9 5 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n4\n60 50 40 15 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n6\n8 7 6 5 4 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25\n13\n20 19 18 17 16 10 9 8 7 6 3 2 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n5\n10 10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20\n5\n19 18 1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n8\n6 6 6 5 4 4 4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "50\n10\n50 49 48 47 10 3 2 1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100\n1\n50",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "First-Fit-Decreasing裝箱演算法，需要嵌套迴圈逐輪掃描未裝箱物品。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "貪婪演算法"
        ],
        "subConcepts": [
          "清單"
        ],
        "algorithm": [
          "裝箱問題"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while迴圈",
          "for迴圈"
        ],
        "math": [],
        "context": [
          "物流情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-4",
      "title": "校車廣播系統熱血指數統計",
      "problemTitle": "校車廣播系統熱血指數統計",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，車內的空氣也開始變得沉悶。\n身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家 High 起來。\n校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這首歌依序播完才能切換模式。\n小明的任務非常重要，他需要從這份落落長的歌單中，挑選出「連續」的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂！\n請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。",
      "inputDescription": "第一行：整數 K 代表廣播系統一次必須連續播放的歌曲數量。\n第二行：整數 N 代表歌單中總共有 N 首歌。\n第三行：N 個整數依序代表歌單中第 1 首到第 N 首歌的「熱血指數」。",
      "outputDescription": "一個整數（最大總和）。",
      "statement": {
        "description": "快樂國中一年級的戶外教學日終於到了！全班同學興高采烈地搭上了前往遊樂園的校車。然而，去程的高速公路意外地塞車了，車內的空氣也開始變得沉悶。\n身為康樂股長的小明，手中掌握著一份班上同學投票選出的「熱門歌曲清單」。這份清單上的每一首歌，根據節奏快慢與受歡迎程度，都有一個對應的「熱血指數」。指數越高，代表這首歌越能讓大家 High 起來。\n校車的廣播系統有一個特殊的限制：一次設定只能連續播放 K 首歌曲。一旦開始播放，就必須把這首歌依序播完才能切換模式。\n小明的任務非常重要，他需要從這份落落長的歌單中，挑選出「連續」的 K 首歌，使得這段時間內的「熱血指數總和」達到最高，以此來喚醒全班同學的靈魂！\n請你寫一個程式幫助小明，在給定的歌單順序中，找出那一段連續 K 首歌的熱血總和最大是多少。",
        "input": "第一行：整數 K 代表廣播系統一次必須連續播放的歌曲數量。\n第二行：整數 N 代表歌單中總共有 N 首歌。\n第三行：N 個整數依序代表歌單中第 1 首到第 N 首歌的「熱血指數」。",
        "output": "一個整數（最大總和）。"
      },
      "examples": [
        {
          "input": "3\n5\n10 20 30 10 50",
          "output": "90",
          "explanation": "連續 3 首的組合： (10+20+30)=60 (20+30+10)=60 (30+10+50)=90 (最大)"
        },
        {
          "input": "2\n4\n5 100 100 5",
          "output": "200",
          "explanation": "連續 2 首的組合： (5+100)=105, (100+100)=200, (100+5)=105 最大值為 200。"
        }
      ],
      "testCases": [
        {
          "input": "2\n4\n1 2 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n5\n5 5 5 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n5\n10 100 10 10 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n8\n100 100 1 2 100 2 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n6\n50 10 10 50 50 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5\n1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n5\n1 -2 3 -4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n6\n-1 -2 -3 -4 -5 -6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n7\n10 -10 10 -10 10 -10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n4\n0 0 0 0",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "固定視窗大小K的滑動視窗最大和。",
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
          "滑動視窗"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈"
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
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-5",
      "title": "大風吹搶位子",
      "problemTitle": "大風吹搶位子",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "隔宿露營的晚會高潮，班聯會設計了一個刺激的「電子傳球大風吹」遊戲。\n全班 N 位同學圍繞營火坐成一圈，每個人身上都有一個原本的號碼牌（從 1 號到 N 號）。遊戲開始時，音樂響起，一顆發光的電子球從 1 號同學手中開始順時針傳遞。\n這顆電子球設定了爆炸秒數，相當於傳遞 M 次。也就是說，從目前拿球的人開始算第 1 次，傳給下一位算第 2 次...一直數到第 M 個人，球就會變色發出「嗶！」的聲音，這時候持有球的那個人就被淘汰，必須立刻離開圓圈。\n被淘汰的人離開後，圓圈會縮小，球交給下一位還在圈子裡的同學，重新開始從 1 數到 M。遊戲持續進行，直到圓圈只剩下最後一位同學，該名同學就是今晚的「大風吹之王」。請設計一個程式，模擬這個過程，算出最後留下的那位同學原本的號碼是多少。",
      "inputDescription": "第一行：整數 N（人數）。\n第二行：整數 M（間隔）。",
      "outputDescription": "一個整數（贏家編號）。",
      "statement": {
        "description": "隔宿露營的晚會高潮，班聯會設計了一個刺激的「電子傳球大風吹」遊戲。\n全班 N 位同學圍繞營火坐成一圈，每個人身上都有一個原本的號碼牌（從 1 號到 N 號）。遊戲開始時，音樂響起，一顆發光的電子球從 1 號同學手中開始順時針傳遞。\n這顆電子球設定了爆炸秒數，相當於傳遞 M 次。也就是說，從目前拿球的人開始算第 1 次，傳給下一位算第 2 次...一直數到第 M 個人，球就會變色發出「嗶！」的聲音，這時候持有球的那個人就被淘汰，必須立刻離開圓圈。\n被淘汰的人離開後，圓圈會縮小，球交給下一位還在圈子裡的同學，重新開始從 1 數到 M。遊戲持續進行，直到圓圈只剩下最後一位同學，該名同學就是今晚的「大風吹之王」。請設計一個程式，模擬這個過程，算出最後留下的那位同學原本的號碼是多少。",
        "input": "第一行：整數 N（人數）。\n第二行：整數 M（間隔）。",
        "output": "一個整數（贏家編號）。"
      },
      "examples": [
        {
          "input": "5\n2",
          "output": "3",
          "explanation": "初始：1 2 3 4 5 淘汰 2（剩 1 3 4 5） 淘汰 4（剩 1 3 5） 淘汰 1（剩 3 5） 淘汰 5（剩 3） 最後贏家是 3 號。"
        },
        {
          "input": "4\n1",
          "output": "4",
          "explanation": "每次數 1 人（即立刻淘汰當前的人）。 淘汰順序：1 → 2 → 3 最後剩下 4。"
        }
      ],
      "testCases": [
        {
          "input": "3\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n6",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典約瑟夫問題(Josephus Problem)模擬，練習環狀清單的淘汰模擬。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "模擬"
        ],
        "subConcepts": [
          "環狀結構"
        ],
        "algorithm": [
          "約瑟夫問題"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while迴圈"
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
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-6",
      "title": "園遊會攤位熱度分析",
      "problemTitle": "園遊會攤位熱度分析",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "園遊會地圖由「路口」和「走道」組成。學生會想知道哪個路口連接了最多條走道（最熱門交會點），以便安排引導人員。\n1. 給定路口數 N 與走道數 E。\n2. 統計每個路口連接的走道數量（分支量）。\n3. 輸出連接數最多的路口編號（若數量相同，輸出編號較小的）。",
      "inputDescription": "第一行：整數 N（路口數）。\n第二行：整數 E（走道數）。\n第三行：E 個整數，代表每條走道的一端（起點列表）。\n第四行：E 個整數，代表每條走道的另一端（終點列表）。\n（說明：第三行的第 i 個數字與第四行的第 i 個數字代表一條連接的走道。）",
      "outputDescription": "一個整數（最熱門路口編號）。",
      "statement": {
        "description": "園遊會地圖由「路口」和「走道」組成。學生會想知道哪個路口連接了最多條走道（最熱門交會點），以便安排引導人員。\n1. 給定路口數 N 與走道數 E。\n2. 統計每個路口連接的走道數量（分支量）。\n3. 輸出連接數最多的路口編號（若數量相同，輸出編號較小的）。",
        "input": "第一行：整數 N（路口數）。\n第二行：整數 E（走道數）。\n第三行：E 個整數，代表每條走道的一端（起點列表）。\n第四行：E 個整數，代表每條走道的另一端（終點列表）。\n（說明：第三行的第 i 個數字與第四行的第 i 個數字代表一條連接的走道。）",
        "output": "一個整數（最熱門路口編號）。"
      },
      "examples": [
        {
          "input": "3\n2\n1 1\n2 3",
          "output": "1",
          "explanation": "走道：(1-2), (1-3) 路口 1：連了 2 條通道 路口 2：連了 1 條通道 路口 3：連了 1 條通道 由上可知路口 1 較熱門，輸出 1。"
        },
        {
          "input": "4\n3\n1 2 3\n2 3 4",
          "output": "2",
          "explanation": "連線：(1-2), (2-3), (3-4) 路口 2 和 3 都連了 2 條，輸出較小的 2。"
        }
      ],
      "testCases": [
        {
          "input": "3\n2\n1 2\n2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n3\n1 1 1\n2 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n4\n1 2 3 4\n2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n5\n1 2 3 4 5\n2 3 4 5 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n4\n1 3 4 6\n2 2 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n1\n1\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n3\n1 2 3\n2 3 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n6\n1 1 1 2 2 3\n2 3 4 3 4 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n4\n3 3 3 3\n1 2 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n2\n4 4\n1 2",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "圖論入門：統計每個節點的分支度(degree)，找最大值。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "圖論"
        ],
        "subConcepts": [
          "度數統計"
        ],
        "algorithm": [
          "度數統計"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈"
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
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-7",
      "title": "園遊會尋找幸運抽獎號",
      "problemTitle": "園遊會尋找幸運抽獎號",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "園遊會中最熱門的攤位是「幸運跳格子」挑戰賽。地上畫了一排共有 N 格的格子（編號從 1 到 N）。為了增加遊戲的趣味性與挑戰性，主辦單位規定：參賽者從起點（第 0 格）出發，每次跳躍只能選擇「跳 1 格」或「跳 2 格」。\n例如：要跳到第 3 格，可以有三種跳法：\n1. 跳 1 格 → 跳 1 格 → 跳 1 格 (1, 1, 1)\n2. 跳 1 格 → 跳 2 格 (1, 2)\n3. 跳 2 格 → 跳 1 格 (2, 1)\n學生會長想知道，如果要剛好停在第 N 格領取大獎，總共有多少種不同的跳法組合？\n這正是經典的費氏數列問題，若剛好停在第 N 格可能的走法數為 F(N) 種，我們可觀察到：\nF(1) = 1，停在第 1 格有 1 種走法\nF(2) = 2，停在第 2 格有 2 種走法\nF(3) = F(2) + F(1) = 1 + 2 = 3，停在第 3 格有 3 種走法\nF(4) = F(3) + F(2) = 3 + 2 = 5，停在第 4 格有 5 種走法",
      "inputDescription": "一個整數，代表目標格子。",
      "outputDescription": "一個整數，代表到達第 N 格的總跳法數。",
      "statement": {
        "description": "園遊會中最熱門的攤位是「幸運跳格子」挑戰賽。地上畫了一排共有 N 格的格子（編號從 1 到 N）。為了增加遊戲的趣味性與挑戰性，主辦單位規定：參賽者從起點（第 0 格）出發，每次跳躍只能選擇「跳 1 格」或「跳 2 格」。\n例如：要跳到第 3 格，可以有三種跳法：\n1. 跳 1 格 → 跳 1 格 → 跳 1 格 (1, 1, 1)\n2. 跳 1 格 → 跳 2 格 (1, 2)\n3. 跳 2 格 → 跳 1 格 (2, 1)\n學生會長想知道，如果要剛好停在第 N 格領取大獎，總共有多少種不同的跳法組合？\n這正是經典的費氏數列問題，若剛好停在第 N 格可能的走法數為 F(N) 種，我們可觀察到：\nF(1) = 1，停在第 1 格有 1 種走法\nF(2) = 2，停在第 2 格有 2 種走法\nF(3) = F(2) + F(1) = 1 + 2 = 3，停在第 3 格有 3 種走法\nF(4) = F(3) + F(2) = 3 + 2 = 5，停在第 4 格有 5 種走法",
        "input": "一個整數，代表目標格子。",
        "output": "一個整數，代表到達第 N 格的總跳法數。"
      },
      "examples": [
        {
          "input": "3",
          "output": "3",
          "explanation": "共有 3 種跳法： 1. (1, 1, 1) 2. (1, 2) 3. (2, 1)"
        },
        {
          "input": "4",
          "output": "5",
          "explanation": "共有 5 種跳法： (1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)"
        }
      ],
      "testCases": [
        {
          "input": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典費氏數列(爬樓梯問題)，練習動態規劃的遞推寫法。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "動態規劃"
        ],
        "subConcepts": [
          "遞推關係"
        ],
        "algorithm": [
          "費氏數列"
        ],
        "dataStructure": [
          "變數"
        ],
        "syntax": [
          "for迴圈"
        ],
        "math": [
          "費氏數列"
        ],
        "context": [
          "遊戲情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      },
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-8",
      "title": "園遊會人潮高峰期",
      "problemTitle": "園遊會人潮高峰期",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "一年一度的校慶園遊會順利落幕了！今年學生會為了讓明年的活動辦得更好，決定用數據來說話。他們在校門口和各個攤位區安裝了「人流感測器」。感測器每隔一段時間就會記錄一次數據，這個數據稱為「人潮淨流量」：\n• 如果是正數（例如 +50）：代表進來的人比出去的人多，人潮正在累積。\n• 如果是負數（例如 -30）：代表離開的人比進來的人多，人潮正在消散。\n學生會會長小華拿到了一長串的數據清單，他想要找出一段「連續」的時間區間，這段時間內的「淨流量總和」是最大的。這個最大的數值就代表了今年園遊會最「盛況空前」時累積的人氣指數。\n請注意，如果算出來的最大總和是負數（代表整場活動人都一直在變少，或是沒人來），為了報表好看，請直接將結果歸零，輸出 0。\n請你幫忙寫一個程式，找出這個傳說中的「最大熱門指數」！",
      "inputDescription": "第一行：一個整數 N 代表總共記錄了 N 筆時段的數據。\n第二行：N 個整數，依序代表第 1 個時段到第 N 個時段的人潮淨流量（有正有負）。",
      "outputDescription": "第一行：一個整數（最大和）。\n特別規則：如果所有可能的區間總和都是負數，請輸出 0。",
      "statement": {
        "description": "一年一度的校慶園遊會順利落幕了！今年學生會為了讓明年的活動辦得更好，決定用數據來說話。他們在校門口和各個攤位區安裝了「人流感測器」。感測器每隔一段時間就會記錄一次數據，這個數據稱為「人潮淨流量」：\n• 如果是正數（例如 +50）：代表進來的人比出去的人多，人潮正在累積。\n• 如果是負數（例如 -30）：代表離開的人比進來的人多，人潮正在消散。\n學生會會長小華拿到了一長串的數據清單，他想要找出一段「連續」的時間區間，這段時間內的「淨流量總和」是最大的。這個最大的數值就代表了今年園遊會最「盛況空前」時累積的人氣指數。\n請注意，如果算出來的最大總和是負數（代表整場活動人都一直在變少，或是沒人來），為了報表好看，請直接將結果歸零，輸出 0。\n請你幫忙寫一個程式，找出這個傳說中的「最大熱門指數」！",
        "input": "第一行：一個整數 N 代表總共記錄了 N 筆時段的數據。\n第二行：N 個整數，依序代表第 1 個時段到第 N 個時段的人潮淨流量（有正有負）。",
        "output": "第一行：一個整數（最大和）。\n特別規則：如果所有可能的區間總和都是負數，請輸出 0。"
      },
      "examples": [
        {
          "input": "3\n-1 2 -1",
          "output": "2",
          "explanation": "可能組合及其和如下： 由第 1 個時段開始 -1, -1+2, -1+2+(-1) 由第 2 個時段開始 2, 2+(-1) 由第 3 個時段開始 -1 以上最大為 2。"
        },
        {
          "input": "4\n-5 -2 -9 -1",
          "output": "0",
          "explanation": "所有人流皆為負成長，沒有人潮高峰，輸出 0。"
        }
      ],
      "testCases": [
        {
          "input": "3\n1 2 3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n-1 -2 -3 -4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n2 -1 2 -1 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n-2 5 -1 5 -10 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 -20 30 -5 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n0 0 0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 2 3 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 -5 10 -5 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n-100 50 -100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n1 2 3 -10 5 6 -20 10 10 10",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典Kadane演算法求最大子陣列和，並處理全負數歸零的特殊規則。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "動態規劃"
        ],
        "subConcepts": [
          "最大子陣列"
        ],
        "algorithm": [
          "Kadane演算法"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for迴圈"
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
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    },
    {
      "id": "114TCPJ02-9",
      "title": "園遊會場地復原大作戰",
      "problemTitle": "園遊會場地復原大作戰",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "熱鬧的園遊會終於圓滿落幕了！現在是最後的場地復原時間。雖然大家都累壞了，但幾位熱心的志工同學自願留下來幫忙清理最後的垃圾。\n現在在操場的跑道旁，整齊地排列著 N 堆分類好的垃圾包。因為垃圾已經打包好了，而且按照順序排成一列，為了避免混亂，每位志工必須負責清理「連續」的幾堆垃圾，不能跳著拿（例如：小明不能拿了第 1 堆又跑去拿第 3 堆，他必須拿第 1、2、3 堆這樣連續的一段）。\n你是衛生組長，你有 M 位志工可以調度。為了公平起見，你不希望任何一位志工累壞，所以你的目標是：「讓工作量最重的那位志工，搬運的重量越輕越好」。\n換句話說，你要把這一列垃圾切成 M 段，分配給 M 個人，請你計算出在最完美的分配策略下，那個「搬最多重量的人」，他最少只需要搬多少公斤？",
      "inputDescription": "第一行：整數 M（志工人數）。\n第二行：整數 N（垃圾堆數）。\n第三行：N 個整數（垃圾重量）。",
      "outputDescription": "一個整數（最小化的最大工作量）。",
      "statement": {
        "description": "熱鬧的園遊會終於圓滿落幕了！現在是最後的場地復原時間。雖然大家都累壞了，但幾位熱心的志工同學自願留下來幫忙清理最後的垃圾。\n現在在操場的跑道旁，整齊地排列著 N 堆分類好的垃圾包。因為垃圾已經打包好了，而且按照順序排成一列，為了避免混亂，每位志工必須負責清理「連續」的幾堆垃圾，不能跳著拿（例如：小明不能拿了第 1 堆又跑去拿第 3 堆，他必須拿第 1、2、3 堆這樣連續的一段）。\n你是衛生組長，你有 M 位志工可以調度。為了公平起見，你不希望任何一位志工累壞，所以你的目標是：「讓工作量最重的那位志工，搬運的重量越輕越好」。\n換句話說，你要把這一列垃圾切成 M 段，分配給 M 個人，請你計算出在最完美的分配策略下，那個「搬最多重量的人」，他最少只需要搬多少公斤？",
        "input": "第一行：整數 M（志工人數）。\n第二行：整數 N（垃圾堆數）。\n第三行：N 個整數（垃圾重量）。",
        "output": "一個整數（最小化的最大工作量）。"
      },
      "examples": [
        {
          "input": "2\n5\n2 4 3 6 5",
          "output": "11",
          "explanation": "最理想的狀況為分成 2 4 3 和 6 5 兩堆讓兩個志工處理。重量分別為： 2+4+3=9 6+5=11 最小化最大工作量為 11。"
        },
        {
          "input": "3\n3\n10 20 30",
          "output": "30",
          "explanation": "3 個志工，剛好每人負責一堆，工作量分別為 10, 20, 30。最小化最大工作量為 30。"
        }
      ],
      "testCases": [
        {
          "input": "2\n3\n1 1 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n3\n10 20 30",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n4\n10 20 30 40",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n6\n1 2 3 4 5 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5\n1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n4\n10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n5\n1 2 3 4 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n5\n5 5 5 5 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n6\n10 10 10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n5\n1 2 3 4 5",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "經典「最小化最大值」區間切割問題，用二分搜尋答案加上貪婪可行性檢查，是本次題組中演算法設計難度最高的一題。",
        "exportDecision": "Claude 依使用者提供的txtFile逐題轉錄、用JS參考實作逐題驗證，starterXml另外用headless Blockly harness對真正的javascript generator驗證過"
      },
      "tags": {
        "mainConcepts": [
          "二分搜尋"
        ],
        "subConcepts": [
          "貪婪演算法"
        ],
        "algorithm": [
          "二分搜尋答案"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "while迴圈"
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
      "courseCode": "114TCPJ02",
      "courseName": "114-嘉義縣國中（競賽模式）"
    }
  ],
  "source": {
    "convertedFrom": "114JChaiyiC",
    "convertedAt": "2026-08-13T00:39:19.869Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  }
};

export default course;
