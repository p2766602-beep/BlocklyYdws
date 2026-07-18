export default {
  "code": "BSC01",
  "title": "條件判斷基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "basic_condition",
  "bankPoolLabel": "條件判斷基礎",
  "tasks": [
    {
      "id": "BSC01-001",
      "title": "及格或不及格",
      "description": "給定一位學生的分數，請判斷是否及格。分數大於或等於 60 分為及格。",
      "input": "輸入一個整數 S，代表分數。",
      "output": "若 S 大於或等於 60，輸出 PASS；否則輸出 FAIL。",
      "examples": [
        {
          "input": "75",
          "output": "PASS",
          "explanation": "75 大於等於 60，所以及格。"
        }
      ],
      "testCases": [
        {
          "input": "75",
          "output": "PASS"
        },
        {
          "input": "60",
          "output": "PASS"
        },
        {
          "input": "59",
          "output": "FAIL"
        },
        {
          "input": "0",
          "output": "FAIL"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSC01-002",
      "title": "比較兩個數",
      "description": "給定兩個整數，請判斷第一個數和第二個數的大小關係。",
      "input": "輸入兩個整數 A 與 B。",
      "output": "若 A 大於 B，輸出 A；若 B 大於 A，輸出 B；若兩者相等，輸出 SAME。",
      "examples": [
        {
          "input": "8 5",
          "output": "A",
          "explanation": "8 大於 5，所以輸出 A。"
        }
      ],
      "testCases": [
        {
          "input": "8 5",
          "output": "A"
        },
        {
          "input": "3 12",
          "output": "B"
        },
        {
          "input": "7 7",
          "output": "SAME"
        },
        {
          "input": "-2 -5",
          "output": "A"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSC01-003",
      "title": "判斷奇偶數",
      "description": "給定一個整數，請判斷它是奇數或偶數。",
      "input": "輸入一個整數 N。",
      "output": "若 N 是偶數，輸出 EVEN；若 N 是奇數，輸出 ODD。",
      "examples": [
        {
          "input": "14",
          "output": "EVEN",
          "explanation": "14 可以被 2 整除，所以是偶數。"
        }
      ],
      "testCases": [
        {
          "input": "14",
          "output": "EVEN"
        },
        {
          "input": "9",
          "output": "ODD"
        },
        {
          "input": "0",
          "output": "EVEN"
        },
        {
          "input": "101",
          "output": "ODD"
        }
      ],
      "knowledgePoints": [
        "條件判斷",
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSC01-004",
      "title": "門票優惠判斷",
      "description": "某遊樂園規定，年齡小於 12 歲或大於等於 65 歲可以購買優惠票，其餘為一般票。",
      "input": "輸入一個整數 A，代表年齡。",
      "output": "若可購買優惠票，輸出 DISCOUNT；否則輸出 NORMAL。",
      "examples": [
        {
          "input": "10",
          "output": "DISCOUNT",
          "explanation": "10 歲小於 12 歲，可以購買優惠票。"
        }
      ],
      "testCases": [
        {
          "input": "10",
          "output": "DISCOUNT"
        },
        {
          "input": "12",
          "output": "NORMAL"
        },
        {
          "input": "64",
          "output": "NORMAL"
        },
        {
          "input": "65",
          "output": "DISCOUNT"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-005",
      "title": "溫度警示",
      "description": "給定目前溫度，請判斷天氣狀態。低於 18 度為 COLD，18 到 27 度為 OK，高於 27 度為 HOT。",
      "input": "輸入一個整數 T，代表溫度。",
      "output": "依規則輸出 COLD、OK 或 HOT。",
      "examples": [
        {
          "input": "30",
          "output": "HOT",
          "explanation": "30 高於 27，所以輸出 HOT。"
        }
      ],
      "testCases": [
        {
          "input": "15",
          "output": "COLD"
        },
        {
          "input": "18",
          "output": "OK"
        },
        {
          "input": "27",
          "output": "OK"
        },
        {
          "input": "30",
          "output": "HOT"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-006",
      "title": "成績等第",
      "description": "給定一個分數，請依分數輸出等第。90 分以上為 A，80 到 89 為 B，70 到 79 為 C，60 到 69 為 D，未滿 60 為 F。",
      "input": "輸入一個整數 S，代表分數。",
      "output": "輸出一個字母，代表等第。",
      "examples": [
        {
          "input": "86",
          "output": "B",
          "explanation": "86 介於 80 到 89，所以等第為 B。"
        }
      ],
      "testCases": [
        {
          "input": "95",
          "output": "A"
        },
        {
          "input": "86",
          "output": "B"
        },
        {
          "input": "70",
          "output": "C"
        },
        {
          "input": "59",
          "output": "F"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-007",
      "title": "三角形成立判斷",
      "description": "給定三個正整數作為邊長，請判斷是否可以形成三角形。任兩邊和都必須大於第三邊。",
      "input": "輸入三個正整數 A、B、C，代表三邊長。",
      "output": "若可形成三角形，輸出 YES；否則輸出 NO。",
      "examples": [
        {
          "input": "3 4 5",
          "output": "YES",
          "explanation": "3、4、5 可以形成三角形。"
        }
      ],
      "testCases": [
        {
          "input": "3 4 5",
          "output": "YES"
        },
        {
          "input": "1 2 3",
          "output": "NO"
        },
        {
          "input": "5 5 9",
          "output": "YES"
        },
        {
          "input": "2 2 5",
          "output": "NO"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-008",
      "title": "是否為閏年簡化版",
      "description": "簡化閏年規則：若年份可以被 4 整除，視為閏年；否則不是閏年。",
      "input": "輸入一個整數 Y，代表年份。",
      "output": "若 Y 可以被 4 整除，輸出 LEAP；否則輸出 COMMON。",
      "examples": [
        {
          "input": "2024",
          "output": "LEAP",
          "explanation": "2024 可以被 4 整除。"
        }
      ],
      "testCases": [
        {
          "input": "2024",
          "output": "LEAP"
        },
        {
          "input": "2025",
          "output": "COMMON"
        },
        {
          "input": "2000",
          "output": "LEAP"
        },
        {
          "input": "1999",
          "output": "COMMON"
        }
      ],
      "knowledgePoints": [
        "條件判斷",
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "BSC01-009",
      "title": "購物免運費",
      "description": "網路商店規定，購物金額大於或等於 1000 元可以免運費，否則需加收 80 元運費。請輸出最後應付金額。",
      "input": "輸入一個整數 N，代表購物金額。",
      "output": "輸出一個整數，代表最後應付金額。",
      "examples": [
        {
          "input": "950",
          "output": "1030",
          "explanation": "950 未滿 1000，需加 80 元運費。"
        }
      ],
      "testCases": [
        {
          "input": "950",
          "output": "1030"
        },
        {
          "input": "1000",
          "output": "1000"
        },
        {
          "input": "1200",
          "output": "1200"
        },
        {
          "input": "80",
          "output": "160"
        }
      ],
      "knowledgePoints": [
        "條件判斷",
        "變數與運算"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-010",
      "title": "電影院票價",
      "description": "電影院票價規則：未滿 12 歲票價 150 元，12 到 64 歲票價 280 元，65 歲以上票價 120 元。請依年齡輸出票價。",
      "input": "輸入一個整數 A，代表年齡。",
      "output": "輸出一個整數，代表票價。",
      "examples": [
        {
          "input": "8",
          "output": "150",
          "explanation": "8 歲未滿 12 歲，票價為 150 元。"
        }
      ],
      "testCases": [
        {
          "input": "8",
          "output": "150"
        },
        {
          "input": "12",
          "output": "280"
        },
        {
          "input": "64",
          "output": "280"
        },
        {
          "input": "70",
          "output": "120"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-011",
      "title": "遊戲血量狀態",
      "description": "給定角色目前血量，請判斷狀態。血量大於 70 為 SAFE，30 到 70 為 WARNING，低於 30 為 DANGER。",
      "input": "輸入一個整數 H，代表血量。",
      "output": "依規則輸出 SAFE、WARNING 或 DANGER。",
      "examples": [
        {
          "input": "25",
          "output": "DANGER",
          "explanation": "25 低於 30，所以輸出 DANGER。"
        }
      ],
      "testCases": [
        {
          "input": "80",
          "output": "SAFE"
        },
        {
          "input": "70",
          "output": "WARNING"
        },
        {
          "input": "30",
          "output": "WARNING"
        },
        {
          "input": "25",
          "output": "DANGER"
        }
      ],
      "knowledgePoints": [
        "條件判斷",
        "模擬與狀態"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "BSC01-012",
      "title": "密碼長度檢查",
      "description": "系統要求密碼長度至少 8 個字元。給定密碼長度，請判斷是否符合規定。",
      "input": "輸入一個整數 L，代表密碼長度。",
      "output": "若 L 大於或等於 8，輸出 OK；否則輸出 SHORT。",
      "examples": [
        {
          "input": "6",
          "output": "SHORT",
          "explanation": "6 小於 8，密碼太短。"
        }
      ],
      "testCases": [
        {
          "input": "6",
          "output": "SHORT"
        },
        {
          "input": "8",
          "output": "OK"
        },
        {
          "input": "12",
          "output": "OK"
        },
        {
          "input": "1",
          "output": "SHORT"
        }
      ],
      "knowledgePoints": [
        "條件判斷"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    }
  ]
};
