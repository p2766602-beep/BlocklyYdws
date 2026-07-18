export default {
  "code": "MATH01",
  "title": "數學與數論基礎",
  "type": "programming",
  "mode": "learning",
  "bankPool": "math_number_theory_training",
  "bankPoolLabel": "數學與數論入門",
  "tasks": [
    {
      "id": "MATH01-001",
      "title": "倍數判斷",
      "description": "給定兩個正整數 A 與 B，請判斷 A 是否為 B 的倍數。",
      "input": "輸入兩個正整數 A 與 B。",
      "output": "若 A 是 B 的倍數，輸出 YES；否則輸出 NO。",
      "examples": [
        {
          "input": "24 6",
          "output": "YES",
          "explanation": "24 可以被 6 整除，所以是 6 的倍數。"
        }
      ],
      "testCases": [
        {
          "input": "24 6",
          "output": "YES"
        },
        {
          "input": "25 6",
          "output": "NO"
        },
        {
          "input": "100 10",
          "output": "YES"
        },
        {
          "input": "7 9",
          "output": "NO"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "條件判斷",
        "變數與運算"
      ],
      "difficultyLevel": "L1",
      "difficultyLabel": "L1｜基礎",
      "starterXml": ""
    },
    {
      "id": "MATH01-002",
      "title": "因數個數",
      "description": "給定一個正整數 N，請計算 N 有幾個正因數。",
      "input": "輸入一個正整數 N。",
      "output": "輸出一個整數，代表 N 的正因數個數。",
      "examples": [
        {
          "input": "12",
          "output": "6",
          "explanation": "12 的正因數有 1、2、3、4、6、12，共 6 個。"
        }
      ],
      "testCases": [
        {
          "input": "12",
          "output": "6"
        },
        {
          "input": "1",
          "output": "1"
        },
        {
          "input": "16",
          "output": "5"
        },
        {
          "input": "17",
          "output": "2"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "條件判斷"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "MATH01-003",
      "title": "質數判斷",
      "description": "給定一個正整數 N，請判斷 N 是否為質數。質數是大於 1，且只有 1 和自己兩個正因數的數。",
      "input": "輸入一個正整數 N。",
      "output": "若 N 是質數，輸出 PRIME；否則輸出 NOT。",
      "examples": [
        {
          "input": "17",
          "output": "PRIME",
          "explanation": "17 只有 1 和 17 兩個正因數，所以是質數。"
        }
      ],
      "testCases": [
        {
          "input": "17",
          "output": "PRIME"
        },
        {
          "input": "1",
          "output": "NOT"
        },
        {
          "input": "12",
          "output": "NOT"
        },
        {
          "input": "2",
          "output": "PRIME"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "條件判斷"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "MATH01-004",
      "title": "最大公因數",
      "description": "給定兩個正整數 A 與 B，請找出它們的最大公因數。",
      "input": "輸入兩個正整數 A 與 B。",
      "output": "輸出一個整數，代表 A 與 B 的最大公因數。",
      "examples": [
        {
          "input": "12 18",
          "output": "6",
          "explanation": "12 與 18 的最大公因數是 6。"
        }
      ],
      "testCases": [
        {
          "input": "12 18",
          "output": "6"
        },
        {
          "input": "7 13",
          "output": "1"
        },
        {
          "input": "24 36",
          "output": "12"
        },
        {
          "input": "100 25",
          "output": "25"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "最大最小值"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "MATH01-005",
      "title": "最小公倍數",
      "description": "給定兩個正整數 A 與 B，請找出它們的最小公倍數。",
      "input": "輸入兩個正整數 A 與 B。",
      "output": "輸出一個整數，代表 A 與 B 的最小公倍數。",
      "examples": [
        {
          "input": "12 18",
          "output": "36",
          "explanation": "12 與 18 的最小公倍數是 36。"
        }
      ],
      "testCases": [
        {
          "input": "12 18",
          "output": "36"
        },
        {
          "input": "7 13",
          "output": "91"
        },
        {
          "input": "4 6",
          "output": "12"
        },
        {
          "input": "20 5",
          "output": "20"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "MATH01-006",
      "title": "位數和",
      "description": "給定一個非負整數 N，請計算它的每一位數字總和。",
      "input": "輸入一個非負整數 N。",
      "output": "輸出一個整數，代表 N 的位數和。",
      "examples": [
        {
          "input": "12345",
          "output": "15",
          "explanation": "1+2+3+4+5=15。"
        }
      ],
      "testCases": [
        {
          "input": "12345",
          "output": "15"
        },
        {
          "input": "0",
          "output": "0"
        },
        {
          "input": "1008",
          "output": "9"
        },
        {
          "input": "9999",
          "output": "36"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "累加累乘"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    },
    {
      "id": "MATH01-007",
      "title": "數字反轉",
      "description": "給定一個非負整數 N，請將它的數字順序反轉後輸出。反轉後前導 0 不需要保留。",
      "input": "輸入一個非負整數 N。",
      "output": "輸出一個整數，代表反轉後的數字。",
      "examples": [
        {
          "input": "12340",
          "output": "4321",
          "explanation": "12340 反轉為 04321，前導 0 不保留，所以輸出 4321。"
        }
      ],
      "testCases": [
        {
          "input": "12340",
          "output": "4321"
        },
        {
          "input": "0",
          "output": "0"
        },
        {
          "input": "1000",
          "output": "1"
        },
        {
          "input": "9876",
          "output": "6789"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "迴圈控制",
        "變數與運算"
      ],
      "difficultyLevel": "L3",
      "difficultyLabel": "L3｜挑戰",
      "starterXml": ""
    },
    {
      "id": "MATH01-008",
      "title": "可被 3 整除的數量",
      "description": "給定 N 個整數，請計算其中有幾個數字可以被 3 整除。",
      "input": "第一個整數為 N，接著輸入 N 個整數。",
      "output": "輸出一個整數，代表可以被 3 整除的數量。",
      "examples": [
        {
          "input": "6 3 5 9 10 12 14",
          "output": "3",
          "explanation": "3、9、12 可以被 3 整除，共 3 個。"
        }
      ],
      "testCases": [
        {
          "input": "6 3 5 9 10 12 14",
          "output": "3"
        },
        {
          "input": "4 1 2 4 5",
          "output": "0"
        },
        {
          "input": "5 0 3 6 9 12",
          "output": "5"
        },
        {
          "input": "7 -3 -2 0 4 6 8 10",
          "output": "3"
        }
      ],
      "knowledgePoints": [
        "數學與數論",
        "清單處理",
        "條件判斷",
        "資料統計"
      ],
      "difficultyLevel": "L2",
      "difficultyLabel": "L2｜進階",
      "starterXml": ""
    }
  ]
};
