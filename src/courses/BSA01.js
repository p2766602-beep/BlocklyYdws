export default {
  "code": "BSA01",
  "title": "變數與運算基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "basic_variable_arithmetic",
  "bankPoolLabel": "變數與運算基礎",
  "tasks": [
    {
      "id": "BSA01-001",
      "title": "購買文具",
      "description": "小明到文具店購買鉛筆與橡皮擦。請根據單價與數量，計算總金額。",
      "input": "輸入四個整數，依序為鉛筆單價、鉛筆數量、橡皮擦單價、橡皮擦數量。",
      "output": "輸出一個整數，代表總金額。",
      "examples": [
        {
          "input": "10 3 5 2",
          "output": "40",
          "explanation": "10×3 + 5×2 = 40。"
        }
      ],
      "testCases": [
        {
          "input": "10 3 5 2",
          "output": "40"
        },
        {
          "input": "12 4 8 3",
          "output": "72"
        },
        {
          "input": "7 6 9 2",
          "output": "60"
        },
        {
          "input": "15 1 20 4",
          "output": "95"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSA01-002",
      "title": "飲料店結帳",
      "description": "飲料店販售紅茶與奶茶。請根據兩種飲料的單價與杯數，計算顧客應付金額。",
      "input": "輸入四個整數，依序為紅茶單價、紅茶杯數、奶茶單價、奶茶杯數。",
      "output": "輸出一個整數，代表總金額。",
      "examples": [
        {
          "input": "25 2 40 3",
          "output": "170",
          "explanation": "25×2 + 40×3 = 170。"
        }
      ],
      "testCases": [
        {
          "input": "25 2 40 3",
          "output": "170"
        },
        {
          "input": "30 4 45 2",
          "output": "210"
        },
        {
          "input": "20 5 35 1",
          "output": "135"
        },
        {
          "input": "18 10 30 6",
          "output": "360"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSA01-003",
      "title": "長方形周長與面積",
      "description": "給定長方形的長與寬，請計算長方形的周長與面積。",
      "input": "輸入兩個整數，依序為長方形的長與寬。",
      "output": "輸出兩個整數，依序為周長與面積，中間以空白分隔。",
      "examples": [
        {
          "input": "8 5",
          "output": "26 40",
          "explanation": "周長為 (8+5)×2=26，面積為 8×5=40。"
        }
      ],
      "testCases": [
        {
          "input": "8 5",
          "output": "26 40"
        },
        {
          "input": "10 3",
          "output": "26 30"
        },
        {
          "input": "7 7",
          "output": "28 49"
        },
        {
          "input": "15 4",
          "output": "38 60"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSA01-004",
      "title": "秒數換算",
      "description": "給定一段時間的總秒數，請換算成幾分鐘又幾秒。",
      "input": "輸入一個整數 S，代表總秒數。",
      "output": "輸出兩個整數，依序為分鐘與剩餘秒數，中間以空白分隔。",
      "examples": [
        {
          "input": "125",
          "output": "2 5",
          "explanation": "125 秒等於 2 分鐘又 5 秒。"
        }
      ],
      "testCases": [
        {
          "input": "125",
          "output": "2 5"
        },
        {
          "input": "59",
          "output": "0 59"
        },
        {
          "input": "360",
          "output": "6 0"
        },
        {
          "input": "754",
          "output": "12 34"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSA01-005",
      "title": "找零錢",
      "description": "商店只使用 50 元、10 元與 1 元硬幣找零。給定找零金額，請計算最少需要多少枚硬幣。",
      "input": "輸入一個整數 N，代表找零金額。",
      "output": "輸出三個整數，依序為 50 元、10 元與 1 元硬幣的數量，中間以空白分隔。",
      "examples": [
        {
          "input": "187",
          "output": "3 3 7",
          "explanation": "187 元可找 3 枚 50 元、3 枚 10 元、7 枚 1 元。"
        }
      ],
      "testCases": [
        {
          "input": "187",
          "output": "3 3 7"
        },
        {
          "input": "49",
          "output": "0 4 9"
        },
        {
          "input": "250",
          "output": "5 0 0"
        },
        {
          "input": "96",
          "output": "1 4 6"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSA01-006",
      "title": "班級分組",
      "description": "老師要將學生平均分組。給定學生人數與每組人數，請計算可以分成幾組，以及剩下幾人。",
      "input": "輸入兩個整數，依序為學生總人數 N 與每組人數 K。",
      "output": "輸出兩個整數，依序為完整組數與剩餘人數，中間以空白分隔。",
      "examples": [
        {
          "input": "32 5",
          "output": "6 2",
          "explanation": "32 人每 5 人一組，可以分成 6 組，剩下 2 人。"
        }
      ],
      "testCases": [
        {
          "input": "32 5",
          "output": "6 2"
        },
        {
          "input": "40 8",
          "output": "5 0"
        },
        {
          "input": "27 4",
          "output": "6 3"
        },
        {
          "input": "18 7",
          "output": "2 4"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSA01-007",
      "title": "平均分數整數版",
      "description": "給定三科成績，請計算總分與整數平均。整數平均只取商，不處理小數。",
      "input": "輸入三個整數，代表三科成績。",
      "output": "輸出兩個整數，依序為總分與整數平均，中間以空白分隔。",
      "examples": [
        {
          "input": "80 75 91",
          "output": "246 82",
          "explanation": "總分 246，246 除以 3 的整數商為 82。"
        }
      ],
      "testCases": [
        {
          "input": "80 75 91",
          "output": "246 82"
        },
        {
          "input": "100 90 80",
          "output": "270 90"
        },
        {
          "input": "66 67 68",
          "output": "201 67"
        },
        {
          "input": "59 72 83",
          "output": "214 71"
        }
      ],
      "knowledgePoints": [
        "變數與運算",
        "資料統計"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSA01-008",
      "title": "簡易旅行費用",
      "description": "一次旅行包含車票、餐費與門票。請根據人數與各項費用，計算全班總費用。",
      "input": "輸入四個整數，依序為人數、每人車票費、每人餐費、每人門票費。",
      "output": "輸出一個整數，代表全班總費用。",
      "examples": [
        {
          "input": "30 120 80 50",
          "output": "7500",
          "explanation": "每人費用為 120+80+50=250，30 人共 7500。"
        }
      ],
      "testCases": [
        {
          "input": "30 120 80 50",
          "output": "7500"
        },
        {
          "input": "25 100 70 40",
          "output": "5250"
        },
        {
          "input": "18 150 60 90",
          "output": "5400"
        },
        {
          "input": "40 80 85 35",
          "output": "8000"
        }
      ],
      "knowledgePoints": [
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    }
  ]
};
