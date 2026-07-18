export default {
  "code": "IDX01",
  "title": "索引與位置基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "index_position_training",
  "bankPoolLabel": "索引與位置基礎",
  "tasks": [
    {
      "id": "IDX01-001",
      "title": "指定位置的數字",
      "description": "給定 N 個整數與一個位置 P，請輸出第 P 個數字。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 P。保證 1 <= P <= N。",
      "output": "輸出一個整數，代表第 P 個數字。",
      "examples": [
        {
          "input": "5 8 3 12 7 10 3",
          "output": "12",
          "explanation": "第 3 個數字是 12。"
        }
      ],
      "testCases": [
        {
          "input": "5 8 3 12 7 10 3",
          "output": "12"
        },
        {
          "input": "4 1 2 3 4 1",
          "output": "1"
        },
        {
          "input": "4 1 2 3 4 4",
          "output": "4"
        },
        {
          "input": "6 -1 -2 -3 -4 -5 -6 5",
          "output": "-5"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "IDX01-002",
      "title": "第一個目標位置",
      "description": "給定 N 個整數與目標值 X，請找出 X 第一次出現的位置。位置從 1 開始計算。若沒有出現，輸出 0。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 X。",
      "output": "輸出一個整數，代表 X 第一次出現的位置；若不存在則輸出 0。",
      "examples": [
        {
          "input": "6 4 8 3 8 5 8 8",
          "output": "2",
          "explanation": "目標值 8 第一次出現在第 2 個位置。"
        }
      ],
      "testCases": [
        {
          "input": "6 4 8 3 8 5 8 8",
          "output": "2"
        },
        {
          "input": "5 1 2 3 4 5 9",
          "output": "0"
        },
        {
          "input": "4 7 7 7 7 7",
          "output": "1"
        },
        {
          "input": "3 -1 -2 -3 -3",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "IDX01-003",
      "title": "最後一個目標位置",
      "description": "給定 N 個整數與目標值 X，請找出 X 最後一次出現的位置。位置從 1 開始計算。若沒有出現，輸出 0。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 X。",
      "output": "輸出一個整數，代表 X 最後一次出現的位置；若不存在則輸出 0。",
      "examples": [
        {
          "input": "6 4 8 3 8 5 8 8",
          "output": "6",
          "explanation": "目標值 8 最後一次出現在第 6 個位置。"
        }
      ],
      "testCases": [
        {
          "input": "6 4 8 3 8 5 8 8",
          "output": "6"
        },
        {
          "input": "5 1 2 3 4 5 9",
          "output": "0"
        },
        {
          "input": "4 7 7 7 7 7",
          "output": "4"
        },
        {
          "input": "3 -1 -2 -3 -1",
          "output": "1"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "IDX01-004",
      "title": "最大值的位置",
      "description": "給定 N 個整數，請找出最大值第一次出現的位置。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出兩個整數，依序為最大值與最大值第一次出現的位置，中間以空白分隔。",
      "examples": [
        {
          "input": "6 5 9 3 9 7 2",
          "output": "9 2",
          "explanation": "最大值 9 第一次出現在第 2 個位置。"
        }
      ],
      "testCases": [
        {
          "input": "6 5 9 3 9 7 2",
          "output": "9 2"
        },
        {
          "input": "4 1 2 3 4",
          "output": "4 4"
        },
        {
          "input": "5 10 10 9 8 7",
          "output": "10 1"
        },
        {
          "input": "3 -5 -1 -3",
          "output": "-1 2"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "最大最小值",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "IDX01-005",
      "title": "最小值的位置",
      "description": "給定 N 個整數，請找出最小值最後一次出現的位置。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出兩個整數，依序為最小值與最小值最後一次出現的位置，中間以空白分隔。",
      "examples": [
        {
          "input": "6 5 2 3 2 7 2",
          "output": "2 6",
          "explanation": "最小值 2 最後一次出現在第 6 個位置。"
        }
      ],
      "testCases": [
        {
          "input": "6 5 2 3 2 7 2",
          "output": "2 6"
        },
        {
          "input": "4 1 2 3 4",
          "output": "1 1"
        },
        {
          "input": "5 10 10 9 8 7",
          "output": "7 5"
        },
        {
          "input": "3 -5 -1 -5",
          "output": "-5 3"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "最大最小值",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "IDX01-006",
      "title": "相鄰相同的位置",
      "description": "給定 N 個整數，請找出第一組相鄰且數值相同的位置。若第 i 個與第 i+1 個相同，輸出 i。若沒有相鄰相同，輸出 0。",
      "input": "第一個整數為 N，接著輸入 N 個整數。保證 N 大於或等於 2。",
      "output": "輸出一個整數，代表第一組相鄰相同的左側位置；若不存在則輸出 0。",
      "examples": [
        {
          "input": "6 3 5 5 2 2 8",
          "output": "2",
          "explanation": "第 2 個與第 3 個都是 5，所以輸出 2。"
        }
      ],
      "testCases": [
        {
          "input": "6 3 5 5 2 2 8",
          "output": "2"
        },
        {
          "input": "5 1 2 3 4 5",
          "output": "0"
        },
        {
          "input": "4 7 7 8 8",
          "output": "1"
        },
        {
          "input": "3 9 8 8",
          "output": "2"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "IDX01-007",
      "title": "左右鄰居總和",
      "description": "給定 N 個整數與位置 P，請計算第 P 個數字左右鄰居的總和。若沒有左鄰居或右鄰居，該側視為 0。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 P。保證 1 <= P <= N。",
      "output": "輸出一個整數，代表左右鄰居總和。",
      "examples": [
        {
          "input": "5 10 20 30 40 50 3",
          "output": "60",
          "explanation": "第 3 個數字的左鄰居是 20，右鄰居是 40，總和為 60。"
        }
      ],
      "testCases": [
        {
          "input": "5 10 20 30 40 50 3",
          "output": "60"
        },
        {
          "input": "5 10 20 30 40 50 1",
          "output": "20"
        },
        {
          "input": "5 10 20 30 40 50 5",
          "output": "40"
        },
        {
          "input": "1 99 1",
          "output": "0"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "IDX01-008",
      "title": "兩個目標的距離",
      "description": "給定 N 個整數，以及兩個目標值 A 與 B。請找出 A 第一次出現的位置與 B 第一次出現的位置，並輸出兩個位置的距離。保證 A 與 B 都會出現。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入兩個整數 A 與 B。",
      "output": "輸出一個整數，代表兩個位置的距離。距離一律用較大的位置減較小的位置。",
      "examples": [
        {
          "input": "6 4 8 3 9 5 8 8 9",
          "output": "2",
          "explanation": "8 第一次出現在第 2 個位置，9 第一次出現在第 4 個位置，距離為 2。"
        }
      ],
      "testCases": [
        {
          "input": "6 4 8 3 9 5 8 8 9",
          "output": "2"
        },
        {
          "input": "5 1 2 3 4 5 1 5",
          "output": "4"
        },
        {
          "input": "4 7 8 7 8 8 7",
          "output": "1"
        },
        {
          "input": "3 -1 -2 -3 -3 -1",
          "output": "2"
        }
      ],
      "knowledgePoints": [
        "索引與位置",
        "清單處理",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    }
  ]
};
