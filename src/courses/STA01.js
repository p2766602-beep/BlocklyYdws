export default {
  "code": "STA01",
  "title": "資料統計基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "statistics_training",
  "bankPoolLabel": "資料統計基礎",
  "tasks": [
    {
      "id": "STA01-001",
      "title": "清單總和",
      "description": "給定 N 個整數，請計算這些數字的總和。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表總和。",
      "examples": [
        {
          "input": "5 3 6 1 8 2",
          "output": "20",
          "explanation": "3+6+1+8+2=20。"
        }
      ],
      "testCases": [
        {
          "input": "5 3 6 1 8 2",
          "output": "20"
        },
        {
          "input": "3 10 20 30",
          "output": "60"
        },
        {
          "input": "4 -1 5 -3 9",
          "output": "10"
        },
        {
          "input": "1 99",
          "output": "99"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "STA01-002",
      "title": "整數平均",
      "description": "給定 N 個整數，請計算總和與整數平均。整數平均只取整數商，不處理小數。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出兩個整數，依序為總和與整數平均，中間以空白分隔。",
      "examples": [
        {
          "input": "4 70 80 90 100",
          "output": "340 85",
          "explanation": "總和 340，340 除以 4 等於 85。"
        }
      ],
      "testCases": [
        {
          "input": "4 70 80 90 100",
          "output": "340 85"
        },
        {
          "input": "3 1 2 4",
          "output": "7 2"
        },
        {
          "input": "5 10 10 10 10 10",
          "output": "50 10"
        },
        {
          "input": "6 5 6 7 8 9 10",
          "output": "45 7"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "清單處理",
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "STA01-003",
      "title": "最高分與最低分",
      "description": "給定 N 位學生的成績，請找出最高分與最低分。",
      "input": "第一個整數為 N，接著輸入 N 個整數代表成績。",
      "output": "輸出兩個整數，依序為最高分與最低分，中間以空白分隔。",
      "examples": [
        {
          "input": "5 80 60 95 70 88",
          "output": "95 60",
          "explanation": "最高分 95，最低分 60。"
        }
      ],
      "testCases": [
        {
          "input": "5 80 60 95 70 88",
          "output": "95 60"
        },
        {
          "input": "3 100 100 100",
          "output": "100 100"
        },
        {
          "input": "4 12 99 34 5",
          "output": "99 5"
        },
        {
          "input": "6 70 65 88 91 59 73",
          "output": "91 59"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "最大最小值",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "STA01-004",
      "title": "通過率整數版",
      "description": "給定 N 位學生的成績，分數大於或等於 60 為通過。請計算通過人數與通過率。通過率使用整數百分比，小數直接捨去。",
      "input": "第一個整數為 N，接著輸入 N 個整數代表成績。",
      "output": "輸出兩個整數，依序為通過人數與通過率百分比，中間以空白分隔。",
      "examples": [
        {
          "input": "5 80 55 60 40 90",
          "output": "3 60",
          "explanation": "5 人中 3 人通過，通過率為 3×100÷5=60。"
        }
      ],
      "testCases": [
        {
          "input": "5 80 55 60 40 90",
          "output": "3 60"
        },
        {
          "input": "4 10 20 30 40",
          "output": "0 0"
        },
        {
          "input": "3 60 70 80",
          "output": "3 100"
        },
        {
          "input": "6 59 60 61 62 30 90",
          "output": "4 66"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "條件判斷",
        "清單處理"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "STA01-005",
      "title": "高於平均的數量",
      "description": "給定 N 個整數，先計算整數平均，再計算有幾個數字大於平均。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出兩個整數，依序為整數平均與大於平均的數量，中間以空白分隔。",
      "examples": [
        {
          "input": "5 10 20 30 40 50",
          "output": "30 2",
          "explanation": "平均為 30，大於 30 的數字有 40、50。"
        }
      ],
      "testCases": [
        {
          "input": "5 10 20 30 40 50",
          "output": "30 2"
        },
        {
          "input": "4 5 5 5 5",
          "output": "5 0"
        },
        {
          "input": "3 1 2 9",
          "output": "4 1"
        },
        {
          "input": "6 8 9 10 11 12 13",
          "output": "10 3"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "條件判斷",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "STA01-006",
      "title": "正負零統計",
      "description": "給定 N 個整數，請統計正數、負數與零各有幾個。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出三個整數，依序為正數個數、負數個數與零的個數，中間以空白分隔。",
      "examples": [
        {
          "input": "6 -3 0 5 8 -1 0",
          "output": "2 2 2",
          "explanation": "正數有 5、8；負數有 -3、-1；零有 2 個。"
        }
      ],
      "testCases": [
        {
          "input": "6 -3 0 5 8 -1 0",
          "output": "2 2 2"
        },
        {
          "input": "4 1 2 3 4",
          "output": "4 0 0"
        },
        {
          "input": "5 -1 -2 -3 0 0",
          "output": "0 3 2"
        },
        {
          "input": "3 0 0 0",
          "output": "0 0 3"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "條件判斷",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "STA01-007",
      "title": "每日步數統計",
      "description": "給定 7 天的步數，請計算總步數、平均步數，以及步數大於或等於 10000 的天數。",
      "input": "輸入 7 個整數，代表連續 7 天的步數。",
      "output": "輸出三個整數，依序為總步數、整數平均步數、達標天數，中間以空白分隔。",
      "examples": [
        {
          "input": "8000 12000 10000 6000 15000 9000 11000",
          "output": "71000 10142 4",
          "explanation": "總步數 71000，平均 10142，達標天數為 4 天。"
        }
      ],
      "testCases": [
        {
          "input": "8000 12000 10000 6000 15000 9000 11000",
          "output": "71000 10142 4"
        },
        {
          "input": "1 2 3 4 5 6 7",
          "output": "28 4 0"
        },
        {
          "input": "10000 10000 10000 10000 10000 10000 10000",
          "output": "70000 10000 7"
        },
        {
          "input": "12000 9000 13000 8000 7000 11000 10000",
          "output": "70000 10000 4"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "條件判斷",
        "清單處理"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "STA01-008",
      "title": "相鄰變化統計",
      "description": "給定 N 天的數值紀錄，請統計有幾次比前一天增加、幾次比前一天減少，以及幾次和前一天相同。",
      "input": "第一個整數為 N，接著輸入 N 個整數。保證 N 大於或等於 2。",
      "output": "輸出三個整數，依序為增加次數、減少次數、相同次數，中間以空白分隔。",
      "examples": [
        {
          "input": "6 10 12 12 9 15 14",
          "output": "2 2 1",
          "explanation": "10→12 增加，12→12 相同，12→9 減少，9→15 增加，15→14 減少。"
        }
      ],
      "testCases": [
        {
          "input": "6 10 12 12 9 15 14",
          "output": "2 2 1"
        },
        {
          "input": "4 1 2 3 4",
          "output": "3 0 0"
        },
        {
          "input": "5 9 7 7 6 6",
          "output": "0 2 2"
        },
        {
          "input": "3 5 5 5",
          "output": "0 0 2"
        }
      ],
      "knowledgePoints": [
        "資料統計",
        "索引與位置",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    }
  ]
};
