export default {
  "code": "SORT01",
  "title": "泡泡排序基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "bubble_sort_training",
  "bankPoolLabel": "泡泡排序特訓",
  "tasks": [
    {
      "id": "SORT01-001",
      "title": "兩數交換成升冪",
      "description": "給定兩個整數，請將它們由小到大輸出。",
      "input": "輸入兩個整數 A 與 B。",
      "output": "輸出兩個整數，依序為較小值與較大值，中間以空白分隔。",
      "examples": [
        {
          "input": "8 3",
          "output": "3 8",
          "explanation": "3 比 8 小，所以輸出 3 8。"
        }
      ],
      "testCases": [
        {
          "input": "8 3",
          "output": "3 8"
        },
        {
          "input": "2 9",
          "output": "2 9"
        },
        {
          "input": "5 5",
          "output": "5 5"
        },
        {
          "input": "-1 -7",
          "output": "-7 -1"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "條件判斷"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "SORT01-002",
      "title": "三數升冪排序",
      "description": "給定三個整數，請將它們由小到大輸出。這題可用多次相鄰比較與交換完成。",
      "input": "輸入三個整數 A、B、C。",
      "output": "輸出三個整數，由小到大排列，中間以空白分隔。",
      "examples": [
        {
          "input": "9 2 5",
          "output": "2 5 9",
          "explanation": "三個數由小到大為 2、5、9。"
        }
      ],
      "testCases": [
        {
          "input": "9 2 5",
          "output": "2 5 9"
        },
        {
          "input": "1 2 3",
          "output": "1 2 3"
        },
        {
          "input": "3 3 1",
          "output": "1 3 3"
        },
        {
          "input": "-1 8 0",
          "output": "-1 0 8"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "SORT01-003",
      "title": "相鄰交換一次",
      "description": "給定 N 個整數，請從左到右檢查每一組相鄰數字。如果左邊數字大於右邊數字，就交換兩者。整個清單只掃描一次。",
      "input": "第一個整數為 N，接著輸入 N 個整數。保證 N 大於或等於 2。",
      "output": "輸出掃描一次後的 N 個整數，中間以空白分隔。",
      "examples": [
        {
          "input": "5 5 1 4 2 3",
          "output": "1 4 2 3 5",
          "explanation": "泡泡排序掃描一輪後，最大值 5 會移到最右邊。"
        }
      ],
      "testCases": [
        {
          "input": "5 5 1 4 2 3",
          "output": "1 4 2 3 5"
        },
        {
          "input": "4 1 2 3 4",
          "output": "1 2 3 4"
        },
        {
          "input": "4 4 3 2 1",
          "output": "3 2 1 4"
        },
        {
          "input": "6 2 9 1 8 3 7",
          "output": "2 1 8 3 7 9"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "清單處理",
        "索引與位置"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SORT01-004",
      "title": "泡泡排序升冪",
      "description": "給定 N 個整數，請使用排序概念將它們由小到大輸出。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出由小到大排序後的 N 個整數，中間以空白分隔。",
      "examples": [
        {
          "input": "5 5 1 4 2 3",
          "output": "1 2 3 4 5",
          "explanation": "排序後由小到大為 1 2 3 4 5。"
        }
      ],
      "testCases": [
        {
          "input": "5 5 1 4 2 3",
          "output": "1 2 3 4 5"
        },
        {
          "input": "4 1 2 3 4",
          "output": "1 2 3 4"
        },
        {
          "input": "4 4 3 2 1",
          "output": "1 2 3 4"
        },
        {
          "input": "6 -1 5 0 -3 2 2",
          "output": "-3 -1 0 2 2 5"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "清單處理",
        "索引與位置"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SORT01-005",
      "title": "泡泡排序降冪",
      "description": "給定 N 個整數，請將它們由大到小輸出。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出由大到小排序後的 N 個整數，中間以空白分隔。",
      "examples": [
        {
          "input": "5 5 1 4 2 3",
          "output": "5 4 3 2 1",
          "explanation": "排序後由大到小為 5 4 3 2 1。"
        }
      ],
      "testCases": [
        {
          "input": "5 5 1 4 2 3",
          "output": "5 4 3 2 1"
        },
        {
          "input": "4 1 2 3 4",
          "output": "4 3 2 1"
        },
        {
          "input": "4 4 3 2 1",
          "output": "4 3 2 1"
        },
        {
          "input": "6 -1 5 0 -3 2 2",
          "output": "5 2 2 0 -1 -3"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "清單處理",
        "索引與位置"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SORT01-006",
      "title": "排序後的中間值",
      "description": "給定奇數個整數，請將它們由小到大排序後，輸出中間位置的數字。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數。保證 N 為奇數。",
      "output": "輸出一個整數，代表排序後的中間值。",
      "examples": [
        {
          "input": "5 9 1 5 3 7",
          "output": "5",
          "explanation": "排序後為 1 3 5 7 9，中間值是 5。"
        }
      ],
      "testCases": [
        {
          "input": "5 9 1 5 3 7",
          "output": "5"
        },
        {
          "input": "3 10 2 8",
          "output": "8"
        },
        {
          "input": "7 4 4 1 9 2 8 6",
          "output": "4"
        },
        {
          "input": "1 99",
          "output": "99"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "索引與位置",
        "資料統計"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SORT01-007",
      "title": "排序後第 K 小",
      "description": "給定 N 個整數與 K，請將數字由小到大排序後，輸出第 K 小的數字。位置從 1 開始計算。",
      "input": "第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 K。保證 1 <= K <= N。",
      "output": "輸出一個整數，代表第 K 小的數字。",
      "examples": [
        {
          "input": "6 8 3 9 1 5 7 2",
          "output": "3",
          "explanation": "排序後為 1 3 5 7 8 9，第 2 小是 3。"
        }
      ],
      "testCases": [
        {
          "input": "6 8 3 9 1 5 7 2",
          "output": "3"
        },
        {
          "input": "5 5 4 3 2 1 5",
          "output": "5"
        },
        {
          "input": "5 5 4 3 2 1 1",
          "output": "1"
        },
        {
          "input": "4 10 10 8 9 3",
          "output": "10"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "索引與位置",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "SORT01-008",
      "title": "排序後去除最高最低",
      "description": "給定 N 個整數，請排序後去除一個最低值與一個最高值，再計算剩下數字的總和。保證 N 大於或等於 3。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表去除一個最低值與一個最高值後的總和。",
      "examples": [
        {
          "input": "5 80 90 70 100 60",
          "output": "240",
          "explanation": "排序後為 60 70 80 90 100，去除 60 和 100，剩下總和為 240。"
        }
      ],
      "testCases": [
        {
          "input": "5 80 90 70 100 60",
          "output": "240"
        },
        {
          "input": "3 10 20 30",
          "output": "20"
        },
        {
          "input": "6 5 5 5 5 5 5",
          "output": "20"
        },
        {
          "input": "7 9 1 8 2 7 3 6",
          "output": "26"
        }
      ],
      "knowledgePoints": [
        "排序演算法",
        "資料統計",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    }
  ]
};
