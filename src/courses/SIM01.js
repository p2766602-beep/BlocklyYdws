export default {
  "code": "SIM01",
  "title": "模擬與狀態基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "simulation_state_training",
  "bankPoolLabel": "模擬與狀態入門",
  "tasks": [
    {
      "id": "SIM01-001",
      "title": "分數累積",
      "description": "一場遊戲中，玩家每回合會得到一些分數。給定 N 回合的得分，請計算最後總分。",
      "input": "第一個整數為 N，接著輸入 N 個整數，代表每回合得分。",
      "output": "輸出一個整數，代表最後總分。",
      "examples": [
        {
          "input": "5 10 20 5 30 15",
          "output": "80",
          "explanation": "總分為 10+20+5+30+15=80。"
        }
      ],
      "testCases": [
        {
          "input": "5 10 20 5 30 15",
          "output": "80"
        },
        {
          "input": "3 0 0 0",
          "output": "0"
        },
        {
          "input": "4 100 -20 30 -10",
          "output": "100"
        },
        {
          "input": "1 50",
          "output": "50"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "累加累乘"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "SIM01-002",
      "title": "血量變化",
      "description": "角色初始血量為 H。接著有 N 次事件，每次事件可能增加或減少血量。請計算最後血量。",
      "input": "第一個整數為 H，第二個整數為 N，接著輸入 N 個整數，代表每次血量變化量。",
      "output": "輸出一個整數，代表最後血量。",
      "examples": [
        {
          "input": "100 4 -20 10 -30 5",
          "output": "65",
          "explanation": "100-20+10-30+5=65。"
        }
      ],
      "testCases": [
        {
          "input": "100 4 -20 10 -30 5",
          "output": "65"
        },
        {
          "input": "50 3 10 10 -5",
          "output": "65"
        },
        {
          "input": "30 2 -10 -20",
          "output": "0"
        },
        {
          "input": "80 1 15",
          "output": "95"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "累加累乘"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "SIM01-003",
      "title": "血量不可低於 0",
      "description": "角色初始血量為 H。每次事件會增加或減少血量，但血量低於 0 時要改為 0。請計算最後血量。",
      "input": "第一個整數為 H，第二個整數為 N，接著輸入 N 個整數，代表每次血量變化量。",
      "output": "輸出一個整數，代表最後血量。",
      "examples": [
        {
          "input": "30 3 -20 -20 15",
          "output": "15",
          "explanation": "30-20=10，10-20 低於 0 所以變 0，0+15=15。"
        }
      ],
      "testCases": [
        {
          "input": "30 3 -20 -20 15",
          "output": "15"
        },
        {
          "input": "100 2 -50 -60",
          "output": "0"
        },
        {
          "input": "10 3 -5 -5 -5",
          "output": "0"
        },
        {
          "input": "20 4 10 -5 -40 3",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SIM01-004",
      "title": "左右移動位置",
      "description": "角色一開始在位置 0。接著有一串移動指令，L 代表向左移動 1 格，R 代表向右移動 1 格。請計算最後位置。",
      "input": "輸入一個只包含 L 與 R 的字串 S。",
      "output": "輸出一個整數，代表最後位置。",
      "examples": [
        {
          "input": "RLRRLLR",
          "output": "1",
          "explanation": "R 為 +1，L 為 -1，最後位置為 1。"
        }
      ],
      "testCases": [
        {
          "input": "RLRRLLR",
          "output": "1"
        },
        {
          "input": "RRRR",
          "output": "4"
        },
        {
          "input": "LLLL",
          "output": "-4"
        },
        {
          "input": "LRLR",
          "output": "0"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "字串處理",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "SIM01-005",
      "title": "開關切換",
      "description": "一盞燈一開始是關閉狀態。給定 N 次按下開關，每按一次，燈的狀態就會切換。請輸出最後燈是開或關。",
      "input": "輸入一個整數 N，代表按下開關的次數。",
      "output": "若最後是開啟，輸出 ON；若最後是關閉，輸出 OFF。",
      "examples": [
        {
          "input": "3",
          "output": "ON",
          "explanation": "關→開→關→開，最後是 ON。"
        }
      ],
      "testCases": [
        {
          "input": "3",
          "output": "ON"
        },
        {
          "input": "0",
          "output": "OFF"
        },
        {
          "input": "2",
          "output": "OFF"
        },
        {
          "input": "10",
          "output": "OFF"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "條件判斷",
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "SIM01-006",
      "title": "收集金幣與陷阱",
      "description": "角色在地圖上依序遇到事件。C 代表收集 1 枚金幣，T 代表遇到陷阱失去 1 枚金幣，但金幣數量不可低於 0。請計算最後金幣數量。",
      "input": "輸入一個只包含 C 與 T 的字串 S。",
      "output": "輸出一個整數，代表最後金幣數量。",
      "examples": [
        {
          "input": "CCTTCT",
          "output": "0",
          "explanation": "金幣變化為 0→1→2→1→0→1→0。"
        }
      ],
      "testCases": [
        {
          "input": "CCTTCT",
          "output": "0"
        },
        {
          "input": "CCCC",
          "output": "4"
        },
        {
          "input": "TTTT",
          "output": "0"
        },
        {
          "input": "CTCCTT",
          "output": "0"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "字串處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SIM01-007",
      "title": "最高連勝次數",
      "description": "給定一串比賽結果，W 代表勝利，L 代表失敗。請計算最長連續勝利次數。",
      "input": "輸入一個只包含 W 與 L 的字串 S。",
      "output": "輸出一個整數，代表最長連勝次數。",
      "examples": [
        {
          "input": "WWLWWWLW",
          "output": "3",
          "explanation": "最長連續勝利為 WWW，共 3 次。"
        }
      ],
      "testCases": [
        {
          "input": "WWLWWWLW",
          "output": "3"
        },
        {
          "input": "LLLL",
          "output": "0"
        },
        {
          "input": "WWWW",
          "output": "4"
        },
        {
          "input": "WLWWLLWWW",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "字串處理",
        "最大最小值"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SIM01-008",
      "title": "簡易電梯樓層",
      "description": "電梯一開始在 1 樓。指令 U 表示上升 1 樓，D 表示下降 1 樓，但電梯不可低於 1 樓。請計算最後樓層。",
      "input": "輸入一個只包含 U 與 D 的字串 S。",
      "output": "輸出一個整數，代表最後樓層。",
      "examples": [
        {
          "input": "UUDDUD",
          "output": "2",
          "explanation": "從 1 樓開始，依序移動後最後在 2 樓。"
        }
      ],
      "testCases": [
        {
          "input": "UUDDUD",
          "output": "2"
        },
        {
          "input": "DDD",
          "output": "1"
        },
        {
          "input": "UUUU",
          "output": "5"
        },
        {
          "input": "UDUDD",
          "output": "1"
        }
      ],
      "knowledgePoints": [
        "模擬與狀態",
        "字串處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    }
  ]
};
