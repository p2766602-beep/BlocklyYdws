// 115MOCK1111：115 校內模擬選拔賽（競賽模式）
// 由 YDWS-CodingBank/contests/115MOCK1111/build-course.cjs 產生，請改正本後重跑，不要手改。
// 競賽模式：沒有範例答案可載入，測資結果只顯示通過／未通過。

const course = {
  "code": "115MOCK1111",
  "title": "115 校內模擬選拔賽（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "校內程式設計模擬選拔賽：共 8 題、比賽時間 90 分鐘，難度由基礎、進階到困難。每題 10 組測資、每組 10 分，每題 100 分，滿分 800 分。",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-11-10T06:35:50.298Z",
    "problemSetTitle": "115 校內模擬選拔賽（競賽模式）",
    "version": "original-contest",
    "note": "原創題目（比照 114 縣市賽題型風格），正本在 YDWS-CodingBank/contests/115MOCK1111/；參考解答已用 Blockly 無頭執行通過全部測資，競賽模式不提供載入。"
  },
  "tasks": [
    {
      "id": "115MOCK1111-1",
      "title": "1. 共享單車租借費",
      "problemTitle": "共享單車租借費",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校附近的共享單車依租借時數計費：\n・前 2 小時：每小時 30 元\n・第 3～5 小時：每小時 20 元\n・超過 5 小時的部分：每小時 10 元\n・單日費用最多收 150 元（超過以 150 元計）\n・出示學生證可再折抵 20 元，但折抵後最少為 0 元\n請依租借時數與是否出示學生證，計算應付金額。\n\n【限制】0 ≤ H ≤ 24",
      "inputDescription": "第一行輸入租借時數 H（整數）。\n第二行輸入 Y 或 N，Y 表示出示學生證，N 表示沒有。",
      "outputDescription": "輸出應付金額（整數）。",
      "statement": {
        "description": "學校附近的共享單車依租借時數計費：\n・前 2 小時：每小時 30 元\n・第 3～5 小時：每小時 20 元\n・超過 5 小時的部分：每小時 10 元\n・單日費用最多收 150 元（超過以 150 元計）\n・出示學生證可再折抵 20 元，但折抵後最少為 0 元\n請依租借時數與是否出示學生證，計算應付金額。\n\n【限制】0 ≤ H ≤ 24",
        "input": "第一行輸入租借時數 H（整數）。\n第二行輸入 Y 或 N，Y 表示出示學生證，N 表示沒有。",
        "output": "輸出應付金額（整數）。"
      },
      "examples": [
        {
          "input": "3\nN",
          "output": "80",
          "explanation": "3 小時：前 2 小時 2×30＝60 元，第 3 小時 20 元，共 80 元。"
        },
        {
          "input": "10\nY",
          "output": "130",
          "explanation": "10 小時：60＋3×20＋5×10＝170 元，超過上限以 150 元計，出示學生證再折抵 20 元，應付 130 元。"
        }
      ],
      "testCases": [
        {
          "input": "3\nN",
          "expectedOutput": "80",
          "output": "80",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\nY",
          "expectedOutput": "130",
          "output": "130",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0\nY",
          "expectedOutput": "0",
          "output": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nY",
          "expectedOutput": "10",
          "output": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nN",
          "expectedOutput": "60",
          "output": "60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nN",
          "expectedOutput": "120",
          "output": "120",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\nY",
          "expectedOutput": "110",
          "output": "110",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\nN",
          "expectedOutput": "150",
          "output": "150",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\nN",
          "expectedOutput": "150",
          "output": "150",
          "score": 10,
          "hidden": false
        },
        {
          "input": "24\nY",
          "expectedOutput": "130",
          "output": "130",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：基礎；對應 B U1、V4",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "輸入輸出"
        ],
        "subConcepts": [
          "分段條件判斷",
          "上限／下限處理"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-2",
      "title": "2. 每日步數挑戰",
      "problemTitle": "每日步數挑戰",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "健康週活動記錄了小安連續 N 天的步數。只要當天步數大於或等於目標 T 步，就算「達標」。\n請算出：總共有幾天達標，以及「連續達標」最長維持了幾天。\n\n【限制】1 ≤ N ≤ 30，0 ≤ 步數 ≤ 30000，1 ≤ T ≤ 30000",
      "inputDescription": "第一行輸入天數 N。\n第二行輸入 N 個整數，依序為每天的步數。\n第三行輸入目標步數 T。",
      "outputDescription": "第一行輸出達標天數。\n第二行輸出最長連續達標天數（都沒達標時輸出 0）。",
      "statement": {
        "description": "健康週活動記錄了小安連續 N 天的步數。只要當天步數大於或等於目標 T 步，就算「達標」。\n請算出：總共有幾天達標，以及「連續達標」最長維持了幾天。\n\n【限制】1 ≤ N ≤ 30，0 ≤ 步數 ≤ 30000，1 ≤ T ≤ 30000",
        "input": "第一行輸入天數 N。\n第二行輸入 N 個整數，依序為每天的步數。\n第三行輸入目標步數 T。",
        "output": "第一行輸出達標天數。\n第二行輸出最長連續達標天數（都沒達標時輸出 0）。"
      },
      "examples": [
        {
          "input": "7\n8000 12000 10000 3000 10000 10000 11000\n10000",
          "output": "5\n3",
          "explanation": "達標的是第 2、3、5、6、7 天，共 5 天；第 5～7 天連續達標 3 天最長。"
        },
        {
          "input": "5\n4000 5000 3000 4500 2000\n6000",
          "output": "0\n0",
          "explanation": "沒有一天達到 6000 步，兩項都是 0。"
        }
      ],
      "testCases": [
        {
          "input": "7\n8000 12000 10000 3000 10000 10000 11000\n10000",
          "expectedOutput": "5\n3",
          "output": "5\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n4000 5000 3000 4500 2000\n6000",
          "expectedOutput": "0\n0",
          "output": "0\n0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n10000\n10000",
          "expectedOutput": "1\n1",
          "output": "1\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n15000 16000 20000 15000 18000 30000\n15000",
          "expectedOutput": "6\n6",
          "output": "6\n6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n6000 5999 6000 6000 0 6000 6000 6000 6000 5000\n6000",
          "expectedOutput": "7\n4",
          "output": "7\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n9000 9000 1000 9000 9000 9000 9000 9000\n9000",
          "expectedOutput": "7\n5",
          "output": "7\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9\n500 700 700 100 700 700 700 100 700\n600",
          "expectedOutput": "6\n3",
          "output": "6\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n30000 29999 30000 30000 30000\n30000",
          "expectedOutput": "4\n3",
          "output": "4\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30\n13596 4904 8549 7609 12593 12890 4208 7001 5474 8203 12466 4782 5252 5537 6783 7766 8328 12137 4038 7060 6489 13033 11782 9408 4715 9422 10194 13140 5589 6809\n8000",
          "expectedOutput": "14\n3",
          "output": "14\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25\n8955 10478 7926 15897 18454 10030 717 3185 5746 19291 8746 8284 12480 4877 5928 2489 272 4254 884 9743 10149 10795 288 11077 840\n12000",
          "expectedOutput": "4\n2",
          "output": "4\n2",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：基礎；對應 B U2、U3",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "迴圈"
        ],
        "subConcepts": [
          "計數",
          "連續區段長度（狀態變數重設）"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-3",
      "title": "3. 社團報名學號檢查",
      "problemTitle": "社團報名學號檢查",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "社團線上報名時，系統要先檢查學號格式。正確的學號共 7 個字元：\n・第 1 個字元是大寫英文字母（A～Z）\n・第 2～7 個字元都是數字（0～9）\n・檢查碼：第 2～6 個字元這 5 個數字的總和，個位數必須等於第 7 個字元\n請依下列順序檢查，輸出「第一個」不符合的項目：\n1. 長度不是 7 → 輸出 LENGTH\n2. 第 1 個字元不是大寫英文字母 → 輸出 LETTER\n3. 第 2～7 個字元有不是數字的 → 輸出 DIGIT\n4. 檢查碼不正確 → 輸出 CHECK\n全部正確則輸出 OK。\n\n【限制】1 ≤ N ≤ 10，每個學號長度 1～12，由英文字母與數字組成，且第一個字元一定是英文字母",
      "inputDescription": "第一行輸入要檢查的學號數量 N。\n接下來 N 行，每行一個學號（不含空白）。",
      "outputDescription": "依序輸出 N 行檢查結果。",
      "statement": {
        "description": "社團線上報名時，系統要先檢查學號格式。正確的學號共 7 個字元：\n・第 1 個字元是大寫英文字母（A～Z）\n・第 2～7 個字元都是數字（0～9）\n・檢查碼：第 2～6 個字元這 5 個數字的總和，個位數必須等於第 7 個字元\n請依下列順序檢查，輸出「第一個」不符合的項目：\n1. 長度不是 7 → 輸出 LENGTH\n2. 第 1 個字元不是大寫英文字母 → 輸出 LETTER\n3. 第 2～7 個字元有不是數字的 → 輸出 DIGIT\n4. 檢查碼不正確 → 輸出 CHECK\n全部正確則輸出 OK。\n\n【限制】1 ≤ N ≤ 10，每個學號長度 1～12，由英文字母與數字組成，且第一個字元一定是英文字母",
        "input": "第一行輸入要檢查的學號數量 N。\n接下來 N 行，每行一個學號（不含空白）。",
        "output": "依序輸出 N 行檢查結果。"
      },
      "examples": [
        {
          "input": "5\nA123455\nB12345\nc123455\nA12C455\nZ000001",
          "output": "OK\nLENGTH\nLETTER\nDIGIT\nCHECK",
          "explanation": "A123455：1＋2＋3＋4＋5＝15，個位數 5 等於第 7 個字元，OK；B12345 只有 6 個字元；c 是小寫字母；A12C455 的數字區有字母 C；Z000001 的總和 0 不等於 1。"
        },
        {
          "input": "3\nK908764\nM5555550\nQ000000",
          "output": "CHECK\nLENGTH\nOK",
          "explanation": "K908764：9＋0＋8＋7＋6＝30，個位數 0 不等於 4；M5555550 有 8 個字元；Q000000 的總和 0 等於第 7 個字元 0，OK。"
        }
      ],
      "testCases": [
        {
          "input": "5\nA123455\nB12345\nc123455\nA12C455\nZ000001",
          "expectedOutput": "OK\nLENGTH\nLETTER\nDIGIT\nCHECK",
          "output": "OK\nLENGTH\nLETTER\nDIGIT\nCHECK",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nK908764\nM5555550\nQ000000",
          "expectedOutput": "CHECK\nLENGTH\nOK",
          "output": "CHECK\nLENGTH\nOK",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\nA000000",
          "expectedOutput": "OK",
          "output": "OK",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nH12345\nH1234567\nh12345\nh1234567",
          "expectedOutput": "LENGTH\nLENGTH\nLENGTH\nLENGTH",
          "output": "LENGTH\nLENGTH\nLENGTH\nLENGTH",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\nx99999X\nP9999X6\nP999996\nP999995",
          "expectedOutput": "LETTER\nDIGIT\nCHECK\nOK",
          "output": "LETTER\nDIGIT\nCHECK\nOK",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\nW11111A\nWA11115\nW111115\nW11115\nb11111c",
          "expectedOutput": "DIGIT\nDIGIT\nOK\nLENGTH\nLETTER",
          "output": "DIGIT\nDIGIT\nOK\nLENGTH\nLETTER",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\nR246800\nR246802\nR24680",
          "expectedOutput": "OK\nCHECK\nLENGTH",
          "output": "OK\nCHECK\nLENGTH",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\nE987650\nE98765\nE9876500\ne987650\nEE87650\nE987659",
          "expectedOutput": "CHECK\nLENGTH\nLENGTH\nLETTER\nDIGIT\nCHECK",
          "output": "CHECK\nLENGTH\nLENGTH\nLETTER\nDIGIT\nCHECK",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\nZ5050500\nZ505050",
          "expectedOutput": "LENGTH\nCHECK",
          "output": "LENGTH\nCHECK",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\nT314159\nT314154\nT31415O\nt314154\nT3141\nT31415926\nY000000\nY000001",
          "expectedOutput": "CHECK\nOK\nDIGIT\nLETTER\nLENGTH\nLENGTH\nOK\nCHECK",
          "output": "CHECK\nOK\nDIGIT\nLETTER\nLENGTH\nLENGTH\nOK\nCHECK",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：基礎＋；對應 B U4、U8、V1",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "字串長度與取字元"
        ],
        "subConcepts": [
          "字元分類（用對照字串找位置）",
          "多重檢查的優先順序"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-4",
      "title": "4. 選拔賽排名",
      "problemTitle": "選拔賽排名",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "程式選拔賽結束，要依下列規則排名：\n1. 分數高的排前面\n2. 分數相同時，用時（分鐘）少的排前面\n3. 分數和用時都相同時，座號小的排前面\n請輸出排名前 K 名選手的座號。\n\n【限制】2 ≤ N ≤ 20，1 ≤ 座號 ≤ 40 且不重複，0 ≤ 分數 ≤ 500，1 ≤ 用時 ≤ 90，1 ≤ K ≤ N",
      "inputDescription": "第一行輸入選手人數 N。\n接下來 N 行，每行三個整數：座號、分數、用時。\n最後一行輸入 K。",
      "outputDescription": "依名次順序輸出前 K 名的座號，每行一個。",
      "statement": {
        "description": "程式選拔賽結束，要依下列規則排名：\n1. 分數高的排前面\n2. 分數相同時，用時（分鐘）少的排前面\n3. 分數和用時都相同時，座號小的排前面\n請輸出排名前 K 名選手的座號。\n\n【限制】2 ≤ N ≤ 20，1 ≤ 座號 ≤ 40 且不重複，0 ≤ 分數 ≤ 500，1 ≤ 用時 ≤ 90，1 ≤ K ≤ N",
        "input": "第一行輸入選手人數 N。\n接下來 N 行，每行三個整數：座號、分數、用時。\n最後一行輸入 K。",
        "output": "依名次順序輸出前 K 名的座號，每行一個。"
      },
      "examples": [
        {
          "input": "6\n3 420 55\n7 450 80\n12 420 40\n5 450 80\n9 300 20\n1 420 55\n4",
          "output": "5\n7\n12\n1",
          "explanation": "450 分的是 5、7 號，用時都是 80，座號小的 5 號在前；420 分的人中 12 號用時 40 最少，接著是用時 55 的 1、3 號，依座號排。前 4 名為 5、7、12、1。"
        },
        {
          "input": "3\n8 100 30\n2 100 30\n4 100 29\n3",
          "output": "4\n2\n8",
          "explanation": "三人同分；4 號用時 29 最少排第一，2、8 號用時相同，座號小的 2 號在前。"
        }
      ],
      "testCases": [
        {
          "input": "6\n3 420 55\n7 450 80\n12 420 40\n5 450 80\n9 300 20\n1 420 55\n4",
          "expectedOutput": "5\n7\n12\n1",
          "output": "5\n7\n12\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n8 100 30\n2 100 30\n4 100 29\n3",
          "expectedOutput": "4\n2\n8",
          "output": "4\n2\n8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n9 200 30\n3 200 30\n15 200 30\n1 200 30\n4",
          "expectedOutput": "1\n3\n9\n15",
          "output": "1\n3\n9\n15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n40 0 90\n39 0 90\n1",
          "expectedOutput": "39",
          "output": "39",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n11 500 90\n12 500 1\n13 499 1\n14 500 45\n15 0 1\n5",
          "expectedOutput": "12\n14\n11\n13\n15",
          "output": "12\n14\n11\n13\n15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n20 300 50\n2 310 70\n18 300 49\n6 300 50\n33 310 70\n4 290 10\n25 300 49\n6",
          "expectedOutput": "2\n33\n18\n25\n6\n20",
          "output": "2\n33\n18\n25\n6\n20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20\n21 340 40\n1 360 42\n15 340 45\n23 340 42\n27 330 43\n16 350 40\n8 390 40\n38 400 40\n12 310 43\n14 390 40\n34 310 44\n32 320 42\n9 370 45\n31 320 43\n26 360 41\n13 400 41\n33 360 45\n2 340 40\n6 310 43\n37 390 44\n10",
          "expectedOutput": "38\n13\n8\n14\n37\n9\n26\n1\n33\n16",
          "output": "38\n13\n8\n14\n37\n9\n26\n1\n33\n16",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12\n5 400 60\n17 500 60\n2 400 61\n38 450 62\n11 500 61\n26 400 61\n8 400 62\n30 400 61\n14 450 62\n21 500 60\n3 500 61\n35 450 60\n7",
          "expectedOutput": "17\n21\n3\n11\n35\n14\n38",
          "output": "17\n21\n3\n11\n35\n14\n38",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 100 10\n2 100 20\n3 100 15\n2",
          "expectedOutput": "1\n3",
          "output": "1\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n10 50 5\n20 60 5\n30 70 5\n40 80 5\n35 90 5\n25 100 5\n3",
          "expectedOutput": "25\n35\n40",
          "output": "25\n35\n40",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：進階；對應 B U6、V2",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "清單"
        ],
        "subConcepts": [
          "排序",
          "多條件比較（同分再比第二、第三條件）"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-5",
      "title": "5. 掃地機器人",
      "problemTitle": "掃地機器人",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "教室地板是 W 行（x 方向）× H 列（y 方向）的格子，左下角為 (0, 0)，x 往右增加、y 往上增加。\n掃地機器人從 (0, 0) 出發，一開始面向北方（N，y 增加的方向）。它依序執行一串指令：\n・F：往目前面向的方向前進一格\n・L：原地左轉 90 度\n・R：原地右轉 90 度\n如果前進的那一格超出教室範圍，或是有障礙物（桌椅），機器人就留在原地不動，並記錄「撞到一次」。\n請輸出全部指令執行完後機器人的位置、面向，以及總共撞到幾次。\n\n【限制】1 ≤ W, H ≤ 10，0 ≤ K ≤ 10，障礙物不會在 (0, 0) 且不重複，指令長度 1～50",
      "inputDescription": "第一行輸入兩個整數 W H。\n第二行輸入障礙物數量 K。\n接下來 K 行，每行兩個整數 x y，表示障礙物位置。\n最後一行輸入指令字串（只含 F、L、R）。",
      "outputDescription": "第一行輸出最後位置 x y（以空白隔開）。\n第二行輸出最後面向（N、E、S、W 其中之一）。\n第三行輸出撞到的次數。",
      "statement": {
        "description": "教室地板是 W 行（x 方向）× H 列（y 方向）的格子，左下角為 (0, 0)，x 往右增加、y 往上增加。\n掃地機器人從 (0, 0) 出發，一開始面向北方（N，y 增加的方向）。它依序執行一串指令：\n・F：往目前面向的方向前進一格\n・L：原地左轉 90 度\n・R：原地右轉 90 度\n如果前進的那一格超出教室範圍，或是有障礙物（桌椅），機器人就留在原地不動，並記錄「撞到一次」。\n請輸出全部指令執行完後機器人的位置、面向，以及總共撞到幾次。\n\n【限制】1 ≤ W, H ≤ 10，0 ≤ K ≤ 10，障礙物不會在 (0, 0) 且不重複，指令長度 1～50",
        "input": "第一行輸入兩個整數 W H。\n第二行輸入障礙物數量 K。\n接下來 K 行，每行兩個整數 x y，表示障礙物位置。\n最後一行輸入指令字串（只含 F、L、R）。",
        "output": "第一行輸出最後位置 x y（以空白隔開）。\n第二行輸出最後面向（N、E、S、W 其中之一）。\n第三行輸出撞到的次數。"
      },
      "examples": [
        {
          "input": "5 4\n2\n1 2\n3 0\nFFRFLFRFFFRFF",
          "output": "3 1\nS\n1",
          "explanation": "先往北走到 (0, 2)，右轉面東，前方 (1, 2) 是障礙物，撞到 1 次；左轉往北到 (0, 3)，右轉往東走到 (3, 3)，再右轉面南走到 (3, 1)。"
        },
        {
          "input": "3 3\n0\nLFFRRFFFFL",
          "output": "2 0\nN\n4",
          "explanation": "左轉面西，往前兩次都會超出教室（撞 2 次）；右轉兩次面東，走到 (2, 0) 後再往前撞牆 2 次；最後左轉面北，共撞 4 次。"
        }
      ],
      "testCases": [
        {
          "input": "5 4\n2\n1 2\n3 0\nFFRFLFRFFFRFF",
          "expectedOutput": "3 1\nS\n1",
          "output": "3 1\nS\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 3\n0\nLFFRRFFFFL",
          "expectedOutput": "2 0\nN\n4",
          "output": "2 0\nN\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 1\n0\nFRFRFRFL",
          "expectedOutput": "0 0\nS\n4",
          "output": "0 0\nS\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 4\n0\nLLLLRRR",
          "expectedOutput": "0 0\nW\n0",
          "output": "0 0\nW\n0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3 3\n3\n0 1\n1 1\n2 1\nFRFFLFLF",
          "expectedOutput": "1 0\nW\n2",
          "output": "1 0\nW\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 10\n0\nFFFFFFFFFFFFRFFFFFFFFFFF",
          "expectedOutput": "9 9\nE\n5",
          "output": "9 9\nE\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 5\n4\n1 0\n2 2\n3 1\n5 4\nRFLFFRFFRFFLFFFLLF",
          "expectedOutput": "1 1\nW\n5",
          "output": "1 1\nW\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 5\n2\n2 2\n4 4\nFFRFFFLFFRFLFFRRFFFFLF",
          "expectedOutput": "3 3\nE\n7",
          "output": "3 3\nE\n7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8 6\n5\n2 3\n5 1\n7 5\n3 0\n1 4\nLFLRRRFFFFFRFFRFFFFRFLLLFRFFFFFLRFLFFFRFRFFRFFFFLF",
          "expectedOutput": "0 4\nW\n17",
          "output": "0 4\nW\n17",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 3\n6\n1 1\n3 2\n4 0\n6 1\n8 2\n9 0\nLRRFFFFFFFRFFRLLLFLFFFFLFFFFLFFFFLFFLRRRFFFFLLLFFF",
          "expectedOutput": "0 0\nW\n19",
          "output": "0 0\nW\n19",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：進階；對應 V5、V6",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "模擬"
        ],
        "subConcepts": [
          "狀態追蹤（位置＋方向）",
          "方向轉換",
          "邊界與障礙判斷"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-6",
      "title": "6. 用電紀錄查詢",
      "problemTitle": "用電紀錄查詢",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L4",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校記錄了連續 N 天的用電度數（第 1 天到第 N 天）。節電小組會提出 Q 個查詢，\n每個查詢給兩個日子 L 和 R，想知道「第 L 天到第 R 天（含頭尾）」的用電總和。\n小組有時會把日子反過來寫：如果 L 比 R 大，一樣是查詢這兩天之間（含頭尾）的總和。\n請依序回答每個查詢。\n\n【限制】1 ≤ N ≤ 60，0 ≤ 每天用電度數 ≤ 500，1 ≤ Q ≤ 20，1 ≤ L, R ≤ N",
      "inputDescription": "第一行輸入天數 N。\n第二行輸入 N 個整數，依序為每天的用電度數。\n第三行輸入查詢數量 Q。\n接下來 Q 行，每行兩個整數 L R。",
      "outputDescription": "依序輸出 Q 行，每行是一個查詢的用電總和。",
      "statement": {
        "description": "學校記錄了連續 N 天的用電度數（第 1 天到第 N 天）。節電小組會提出 Q 個查詢，\n每個查詢給兩個日子 L 和 R，想知道「第 L 天到第 R 天（含頭尾）」的用電總和。\n小組有時會把日子反過來寫：如果 L 比 R 大，一樣是查詢這兩天之間（含頭尾）的總和。\n請依序回答每個查詢。\n\n【限制】1 ≤ N ≤ 60，0 ≤ 每天用電度數 ≤ 500，1 ≤ Q ≤ 20，1 ≤ L, R ≤ N",
        "input": "第一行輸入天數 N。\n第二行輸入 N 個整數，依序為每天的用電度數。\n第三行輸入查詢數量 Q。\n接下來 Q 行，每行兩個整數 L R。",
        "output": "依序輸出 Q 行，每行是一個查詢的用電總和。"
      },
      "examples": [
        {
          "input": "8\n5 3 8 2 2 9 1 1\n3\n2 4\n1 8\n6 6",
          "output": "13\n31\n9",
          "explanation": "第 2～4 天：3＋8＋2＝13；第 1～8 天：31；第 6～6 天：9。"
        },
        {
          "input": "5\n120 80 0 45 300\n3\n4 2\n1 5\n3 3",
          "output": "125\n545\n0",
          "explanation": "「4 2」反過來寫，等於查詢第 2～4 天：80＋0＋45＝125；第 1～5 天：545；第 3 天：0。"
        }
      ],
      "testCases": [
        {
          "input": "8\n5 3 8 2 2 9 1 1\n3\n2 4\n1 8\n6 6",
          "expectedOutput": "13\n31\n9",
          "output": "13\n31\n9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n120 80 0 45 300\n3\n4 2\n1 5\n3 3",
          "expectedOutput": "125\n545\n0",
          "output": "125\n545\n0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n77\n2\n1 1\n1 1",
          "expectedOutput": "77\n77",
          "output": "77\n77",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n0 0 0 0 0 0\n3\n1 6\n3 5\n6 2",
          "expectedOutput": "0\n0\n0",
          "output": "0\n0\n0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n500 500 500 500 500 500 500 500 500 500\n4\n1 10\n10 1\n5 5\n3 8",
          "expectedOutput": "5000\n5000\n500\n3000",
          "output": "5000\n5000\n500\n3000",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n12 7 0 33 18 5 40\n5\n1 1\n7 7\n7 1\n2 3\n4 6",
          "expectedOutput": "12\n40\n115\n7\n56",
          "output": "12\n40\n115\n7\n56",
          "score": 10,
          "hidden": false
        },
        {
          "input": "60\n22 8 463 437 179 12 289 353 315 440 38 319 440 140 489 37 209 478 129 413 152 494 273 443 465 318 251 471 370 15 158 406 209 327 265 391 247 473 484 361 256 404 31 413 64 195 497 138 282 112 411 387 342 121 34 160 203 373 334 184\n20\n1 54\n42 43\n32 48\n34 29\n19 52\n41 57\n16 57\n59 47\n13 9\n56 22\n18 54\n39 12\n34 21\n45 10\n11 40\n36 35\n16 32\n59 58\n19 3\n2 57",
          "expectedOutput": "15436\n435\n5161\n1485\n10305\n4050\n11889\n3394\n1552\n10268\n11246\n8866\n4352\n10873\n9265\n656\n5082\n707\n4767\n15811",
          "output": "15436\n435\n5161\n1485\n10305\n4050\n11889\n3394\n1552\n10268\n11246\n8866\n4352\n10873\n9265\n656\n5082\n707\n4767\n15811",
          "score": 10,
          "hidden": false
        },
        {
          "input": "40\n225 151 293 288 201 156 275 139 164 126 214 136 264 199 165 153 162 295 239 237 188 211 284 121 191 284 295 297 121 141 201 129 187 255 199 160 250 199 138 245\n15\n1 40\n40 1\n20 21\n1 2\n39 40\n38 19\n16 35\n27 29\n4 5\n8 40\n11 12\n19 21\n21 10\n32 1\n2 19",
          "expectedOutput": "8178\n8178\n425\n376\n383\n4189\n4190\n713\n489\n6589\n350\n664\n2378\n6545\n3620",
          "output": "8178\n8178\n425\n376\n383\n4189\n4190\n713\n489\n6589\n350\n664\n2378\n6545\n3620",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n10 20 30\n6\n1 2\n2 1\n2 3\n3 2\n1 3\n3 1",
          "expectedOutput": "30\n30\n50\n50\n60\n60",
          "output": "30\n30\n50\n50\n60\n60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "25\n37 37 48 13 19 10 29 19 19 23 42 44 17 49 7 7 47 26 29 41 2 4 27 30 48\n12\n6 7\n20 9\n20 19\n6 11\n5 18\n10 16\n21 15\n5 21\n3 18\n8 2\n25 3\n10 11",
          "expectedOutput": "39\n351\n70\n142\n358\n189\n159\n430\n419\n175\n600\n65",
          "output": "39\n351\n70\n142\n358\n189\n159\n430\n419\n175\n600\n65",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：進階＋；對應 V10",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "前綴和"
        ],
        "subConcepts": [
          "區間總和查詢",
          "索引偏移（第 0 天的哨兵）"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-7",
      "title": "7. 社團教室借用",
      "problemTitle": "社團教室借用",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L5",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "學校只有一間多功能教室，這學期共有 N 個社團提出借用申請，每個申請都有開始時間與結束時間（整點）。\n同一時間教室只能借給一個社團；但前一個社團結束的時間點，下一個社團就可以馬上開始使用\n（例如 9～11 點與 11～12 點可以同時核准）。\n請問最多可以核准幾個申請？\n\n【限制】1 ≤ N ≤ 20，0 ≤ 開始時間 < 結束時間 ≤ 24",
      "inputDescription": "第一行輸入申請數量 N。\n接下來 N 行，每行兩個整數：開始時間、結束時間。",
      "outputDescription": "輸出最多可以核准的申請數量。",
      "statement": {
        "description": "學校只有一間多功能教室，這學期共有 N 個社團提出借用申請，每個申請都有開始時間與結束時間（整點）。\n同一時間教室只能借給一個社團；但前一個社團結束的時間點，下一個社團就可以馬上開始使用\n（例如 9～11 點與 11～12 點可以同時核准）。\n請問最多可以核准幾個申請？\n\n【限制】1 ≤ N ≤ 20，0 ≤ 開始時間 < 結束時間 ≤ 24",
        "input": "第一行輸入申請數量 N。\n接下來 N 行，每行兩個整數：開始時間、結束時間。",
        "output": "輸出最多可以核准的申請數量。"
      },
      "examples": [
        {
          "input": "5\n8 10\n9 12\n10 11\n11 14\n13 15",
          "output": "3",
          "explanation": "可以核准 8～10、10～11、11～14 共 3 個（13～15 會和 11～14 重疊）。"
        },
        {
          "input": "4\n1 10\n2 3\n4 5\n6 7",
          "output": "3",
          "explanation": "1～10 雖然最早開始，但選了它，其他三個都不能核准；改選 2～3、4～5、6～7 可以核准 3 個。"
        }
      ],
      "testCases": [
        {
          "input": "5\n8 10\n9 12\n10 11\n11 14\n13 15",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 10\n2 3\n4 5\n6 7",
          "expectedOutput": "3",
          "output": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n0 24",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n0 4\n4 8\n8 12\n12 16\n16 20\n20 24",
          "expectedOutput": "6",
          "output": "6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n9 12\n9 12\n9 12\n9 12",
          "expectedOutput": "1",
          "output": "1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 5\n4 7\n6 10",
          "expectedOutput": "2",
          "output": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "11\n1 4\n4 7\n7 10\n10 13\n3 5\n3 5\n3 5\n6 8\n9 11\n9 11\n9 11",
          "expectedOutput": "4",
          "output": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n0 24\n10 11\n2 3\n5 6\n3 4\n1 2\n4 5\n0 1",
          "expectedOutput": "7",
          "output": "7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n14 22\n0 9\n13 15\n1 3\n9 11\n3 5\n17 19\n5 7\n10 16\n7 9\n21 24\n8 12\n15 17\n11 13\n19 21",
          "expectedOutput": "11",
          "output": "11",
          "score": 10,
          "hidden": false
        },
        {
          "input": "20\n0 6\n6 12\n12 18\n18 24\n1 2\n2 3\n3 4\n4 5\n7 8\n8 9\n9 10\n10 11\n13 14\n14 15\n15 16\n16 17\n19 20\n20 21\n21 22\n22 23",
          "expectedOutput": "16",
          "output": "16",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：困難；對應 V8",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "貪心策略（依結束時間排序）"
        ],
        "subConcepts": [
          "成對資料排序",
          "反例思考"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "115MOCK1111-8",
      "title": "8. 班級聯絡網",
      "problemTitle": "班級聯絡網",
      "courseCode": "115MOCK1111",
      "courseName": "115 校內模擬選拔賽（競賽模式）",
      "role": "contest",
      "difficulty": "L5",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "班上有 N 位同學，座號 1～N。老師收集了 M 組「互相有聯絡方式」的同學配對。\n消息可以沿著聯絡方式一個傳一個；只要兩位同學之間能透過一串聯絡關係連起來，就算同一個「聯絡群組」。\n沒有任何聯絡方式的同學，自己就是一個群組。\n請算出全班共分成幾個聯絡群組，以及人數最多的群組有幾人。\n\n【限制】1 ≤ N ≤ 30，0 ≤ M ≤ 50，1 ≤ a, b ≤ N，a ≠ b（同一組配對可能重複出現）",
      "inputDescription": "第一行輸入兩個整數 N M。\n接下來 M 行，每行兩個整數 a b，表示 a 號與 b 號互相有聯絡方式。",
      "outputDescription": "第一行輸出群組數量。\n第二行輸出最大群組的人數。",
      "statement": {
        "description": "班上有 N 位同學，座號 1～N。老師收集了 M 組「互相有聯絡方式」的同學配對。\n消息可以沿著聯絡方式一個傳一個；只要兩位同學之間能透過一串聯絡關係連起來，就算同一個「聯絡群組」。\n沒有任何聯絡方式的同學，自己就是一個群組。\n請算出全班共分成幾個聯絡群組，以及人數最多的群組有幾人。\n\n【限制】1 ≤ N ≤ 30，0 ≤ M ≤ 50，1 ≤ a, b ≤ N，a ≠ b（同一組配對可能重複出現）",
        "input": "第一行輸入兩個整數 N M。\n接下來 M 行，每行兩個整數 a b，表示 a 號與 b 號互相有聯絡方式。",
        "output": "第一行輸出群組數量。\n第二行輸出最大群組的人數。"
      },
      "examples": [
        {
          "input": "8 5\n1 2\n2 5\n3 4\n6 7\n5 8",
          "output": "3\n4",
          "explanation": "1、2、5、8 號連成一組（4 人），3、4 號一組，6、7 號一組，共 3 組，最大群組 4 人。"
        },
        {
          "input": "4 0",
          "output": "4\n1",
          "explanation": "沒有任何聯絡方式，4 個人各自一組，最大群組 1 人。"
        }
      ],
      "testCases": [
        {
          "input": "8 5\n1 2\n2 5\n3 4\n6 7\n5 8",
          "expectedOutput": "3\n4",
          "output": "3\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4 0",
          "expectedOutput": "4\n1",
          "output": "4\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1 0",
          "expectedOutput": "1\n1",
          "output": "1\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5 4\n1 2\n2 3\n3 4\n4 5",
          "expectedOutput": "1\n5",
          "output": "1\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10 9\n9 10\n8 9\n7 8\n6 7\n5 6\n4 5\n3 4\n2 3\n1 2",
          "expectedOutput": "1\n10",
          "output": "1\n10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9 7\n1 9\n9 5\n5 1\n2 8\n8 2\n2 8\n3 6",
          "expectedOutput": "5\n3",
          "output": "5\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12 11\n7 1\n7 2\n7 3\n7 4\n7 5\n7 6\n12 11\n11 10\n10 9\n9 8\n8 12",
          "expectedOutput": "2\n7",
          "output": "2\n7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6 3\n6 5\n4 3\n2 1",
          "expectedOutput": "3\n2",
          "output": "3\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 50\n7 11\n15 26\n7 14\n8 2\n16 19\n24 1\n21 19\n15 21\n20 2\n8 30\n25 19\n1 18\n20 12\n30 7\n27 20\n20 4\n3 15\n25 17\n27 29\n9 29\n7 6\n2 3\n9 11\n23 15\n17 5\n15 24\n8 12\n14 20\n20 11\n23 4\n23 13\n3 29\n5 25\n24 3\n23 30\n9 12\n23 7\n4 20\n11 8\n24 4\n20 25\n26 17\n21 8\n10 24\n11 23\n27 25\n3 6\n17 23\n29 7\n26 8",
          "expectedOutput": "3\n28",
          "output": "3\n28",
          "score": 10,
          "hidden": false
        },
        {
          "input": "30 18\n12 18\n21 10\n22 3\n17 12\n16 13\n16 21\n15 25\n3 23\n8 21\n29 17\n6 24\n7 18\n4 8\n2 27\n16 14\n19 6\n27 17\n12 9",
          "expectedOutput": "12\n8",
          "output": "12\n8",
          "score": 10,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "難度：困難；對應 V7（A13、A14）",
        "exportDecision": "原創命題，測資輸出由 JS 參考解產生，並以 Blockly 參考解答無頭執行驗證 10/10"
      },
      "tags": {
        "mainConcepts": [
          "圖（連線列表）"
        ],
        "subConcepts": [
          "走訪（BFS／DFS 或反覆擴散標記）",
          "連通群組計數"
        ],
        "algorithm": [],
        "dataStructure": [],
        "syntax": [],
        "math": [],
        "context": [
          "校園情境"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    }
  ]
};

export default course;
