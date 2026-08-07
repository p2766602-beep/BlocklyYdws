// Hand-authored by Claude from data/problem_bank_master_complete.csv (114EHsinchuC-1~6)
// and cross-checked against every worked example in the source PDF via a JS reference
// implementation before being written here. Not produced by export_course_js.py — that tool's
// L1~L3-only "第一波" scope silently drops content (see MVP-J14 in blockly-lab/docs/MVP_LOG.md),
// so re-running any CSV exporter against this file's course code is not safe without checking
// its scope first.
//
// No starterXml demos this batch (per 2026-08-07 使用者決定：範例答案耗時明顯較長，
// 之後PDF題組先跳過，除非另外指定要哪幾題需要範例)。
// mode: 'learning'（per 2026-08-07 使用者決定：新題組一律採學習模式，已上架的舊題組
// 由使用者自行於網頁後台切換）。

const course = {
  "code": "114EHsinchuC",
  "title": "114-新竹縣國小",
  "type": "programming",
  "mode": "learning",
  "description": "新竹縣114學年度科技教育創意實作競賽-國小資訊科技組題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-07T14:15:54.886Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-新竹縣國小",
    "version": "manual-transcription-verified"
  },
  "tasks": [
    {
      "id": "114EHsinchuC-1",
      "title": "圓柱體積計算",
      "problemTitle": "圓柱體積計算",
      "courseCode": "114EHsinchuC",
      "courseName": "114-新竹縣國小",
      "role": "contest",
      "difficulty": "L1",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請輸入圓柱的半徑 r 與高 h，計算圓柱體積（π 取 3.14），輸出到小數點後兩位。體積公式為 π×r×r×h。",
      "inputDescription": "第一行輸入半徑 r。\n第二行輸入高 h。",
      "outputDescription": "輸出圓柱體積，四捨五入至小數點後兩位。",
      "statement": {
        "description": "請輸入圓柱的半徑 r 與高 h，計算圓柱體積（π 取 3.14），輸出到小數點後兩位。體積公式為 π×r×r×h。",
        "input": "第一行輸入半徑 r。\n第二行輸入高 h。",
        "output": "輸出圓柱體積，四捨五入至小數點後兩位。"
      },
      "examples": [
        {
          "input": "3\n7",
          "output": "197.82",
          "explanation": "3.14×3×3×7=197.82。"
        },
        {
          "input": "9\n9",
          "output": "2289.06",
          "explanation": "3.14×9×9×9=2289.06。"
        }
      ],
      "testCases": [
        {
          "input": "3\n7",
          "expectedOutput": "197.82",
          "output": "197.82",
          "score": 20,
          "hidden": false
        },
        {
          "input": "9\n9",
          "expectedOutput": "2289.06",
          "output": "2289.06",
          "score": 20,
          "hidden": false
        },
        {
          "input": "1\n1",
          "expectedOutput": "3.14",
          "output": "3.14",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n10",
          "expectedOutput": "785.00",
          "output": "785.00",
          "score": 20,
          "hidden": false
        },
        {
          "input": "2\n5",
          "expectedOutput": "62.80",
          "output": "62.80",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "套用圓柱體積公式並輸出到小數點後兩位，練習公式計算與數值格式化。",
        "exportDecision": "Claude 依使用者提供的114-新竹縣國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "四捨五入格式化"
        ],
        "algorithm": [
          "公式計算"
        ],
        "dataStructure": [
          "無"
        ],
        "syntax": [
          "數值運算",
          "小數格式化"
        ],
        "math": [],
        "context": [
          "數學情境",
          "幾何"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EHsinchuC-2",
      "title": "身體質量指數計算與健康判斷",
      "problemTitle": "身體質量指數計算與健康判斷",
      "courseCode": "114EHsinchuC",
      "courseName": "114-新竹縣國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "請輸入體重（公斤）與身高（公尺），計算 BMI 值（體重除以身高的平方），四捨五入到小數點後兩位。並依下列標準判斷：小於18.5為過輕；18.5以上且小於24為標準；24以上為過重。",
      "inputDescription": "第一行輸入體重（公斤）。\n第二行輸入身高（公尺）。",
      "outputDescription": "輸出「BMI值 判斷」。",
      "statement": {
        "description": "請輸入體重（公斤）與身高（公尺），計算 BMI 值（體重除以身高的平方），四捨五入到小數點後兩位。並依下列標準判斷：小於18.5為過輕；18.5以上且小於24為標準；24以上為過重。",
        "input": "第一行輸入體重（公斤）。\n第二行輸入身高（公尺）。",
        "output": "輸出「BMI值 判斷」。"
      },
      "examples": [
        {
          "input": "60\n1.55",
          "output": "24.97 過重",
          "explanation": "60÷1.55²=24.97，屬於過重。"
        },
        {
          "input": "38\n1.43",
          "output": "18.58 標準",
          "explanation": "38÷1.43²=18.58，屬於標準。"
        }
      ],
      "testCases": [
        {
          "input": "60\n1.55",
          "expectedOutput": "24.97 過重",
          "output": "24.97 過重",
          "score": 20,
          "hidden": false
        },
        {
          "input": "38\n1.43",
          "expectedOutput": "18.58 標準",
          "output": "18.58 標準",
          "score": 20,
          "hidden": false
        },
        {
          "input": "45\n1.7",
          "expectedOutput": "15.57 過輕",
          "output": "15.57 過輕",
          "score": 20,
          "hidden": false
        },
        {
          "input": "70\n1.75",
          "expectedOutput": "22.86 標準",
          "output": "22.86 標準",
          "score": 20,
          "hidden": false
        },
        {
          "input": "90\n1.6",
          "expectedOutput": "35.16 過重",
          "output": "35.16 過重",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "計算BMI並依區間判斷健康狀態，練習公式計算搭配多重條件判斷。",
        "exportDecision": "Claude 依使用者提供的114-新竹縣國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "區間判斷"
        ],
        "algorithm": [
          "公式計算",
          "區間判斷"
        ],
        "dataStructure": [
          "無"
        ],
        "syntax": [
          "數值運算",
          "if-elif-else"
        ],
        "math": [],
        "context": [
          "健康情境",
          "BMI"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EHsinchuC-3",
      "title": "房間磁磚的購買計算",
      "problemTitle": "房間磁磚的購買計算",
      "courseCode": "114EHsinchuC",
      "courseName": "114-新竹縣國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "房間長、寬各若干公尺，要鋪滿60公分×60公分的磁磚，每包12片。請計算至少需要購買幾包磁磚（無條件進位）。",
      "inputDescription": "第一行輸入房間長度（公尺）。\n第二行輸入房間寬度（公尺）。",
      "outputDescription": "輸出至少需要購買的磁磚包數。",
      "statement": {
        "description": "房間長、寬各若干公尺，要鋪滿60公分×60公分的磁磚，每包12片。請計算至少需要購買幾包磁磚（無條件進位）。",
        "input": "第一行輸入房間長度（公尺）。\n第二行輸入房間寬度（公尺）。",
        "output": "輸出至少需要購買的磁磚包數。"
      },
      "examples": [
        {
          "input": "4\n4",
          "output": "4",
          "explanation": "房間面積16平方公尺，每包可鋪0.6×0.6×12=4.32平方公尺，16÷4.32≈3.7無條件進位為4包。"
        },
        {
          "input": "5\n3.5",
          "output": "5",
          "explanation": "房間面積17.5平方公尺，17.5÷4.32≈4.05無條件進位為5包。"
        }
      ],
      "testCases": [
        {
          "input": "4\n4",
          "expectedOutput": "4",
          "output": "4",
          "score": 20,
          "hidden": false
        },
        {
          "input": "5\n3.5",
          "expectedOutput": "5",
          "output": "5",
          "score": 20,
          "hidden": false
        },
        {
          "input": "2\n2",
          "expectedOutput": "1",
          "output": "1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "10\n10",
          "expectedOutput": "24",
          "output": "24",
          "score": 20,
          "hidden": false
        },
        {
          "input": "3\n3",
          "expectedOutput": "3",
          "output": "3",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "計算面積並除以每包可鋪面積，無條件進位求最少購買包數，練習除法與進位處理。",
        "exportDecision": "Claude 依使用者提供的114-新竹縣國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "無條件進位"
        ],
        "algorithm": [
          "面積計算",
          "無條件進位"
        ],
        "dataStructure": [
          "無"
        ],
        "syntax": [
          "數值運算",
          "無條件進位"
        ],
        "math": [],
        "context": [
          "生活情境",
          "房屋裝修"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EHsinchuC-4",
      "title": "美味餐車三明治多重折扣與利潤計算",
      "problemTitle": "美味餐車三明治多重折扣與利潤計算",
      "courseCode": "114EHsinchuC",
      "courseName": "114-新竹縣國小",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "三明治成本已知，售價為成本的1.5倍（四捨五入取整數）。若販售時段（整數小時）大於等於12，售價打6折（四捨五入取整數）；若時段大於等於11但小於12，打8折；其餘不打折。請判斷是否有利潤，並輸出賺或賠的金額（取絕對值）。",
      "inputDescription": "第一行輸入成本。\n第二行輸入販售時段（整數小時）。",
      "outputDescription": "輸出「有利潤 賺X元」或「無利潤 賠X元」。",
      "statement": {
        "description": "三明治成本已知，售價為成本的1.5倍（四捨五入取整數）。若販售時段（整數小時）大於等於12，售價打6折（四捨五入取整數）；若時段大於等於11但小於12，打8折；其餘不打折。請判斷是否有利潤，並輸出賺或賠的金額（取絕對值）。",
        "input": "第一行輸入成本。\n第二行輸入販售時段（整數小時）。",
        "output": "輸出「有利潤 賺X元」或「無利潤 賠X元」。"
      },
      "examples": [
        {
          "input": "20\n11",
          "output": "有利潤 賺4元",
          "explanation": "售價=round(20×1.5)=30，時段11打8折=round(30×0.8)=24，利潤24-20=4元，有利潤。"
        },
        {
          "input": "35\n12",
          "output": "無利潤 賠3元",
          "explanation": "售價=round(35×1.5)=53，時段12打6折=round(53×0.6)=32，利潤32-35=-3元，無利潤賠3元。"
        }
      ],
      "testCases": [
        {
          "input": "20\n11",
          "expectedOutput": "有利潤 賺4元",
          "output": "有利潤 賺4元",
          "score": 20,
          "hidden": false
        },
        {
          "input": "35\n12",
          "expectedOutput": "無利潤 賠3元",
          "output": "無利潤 賠3元",
          "score": 20,
          "hidden": false
        },
        {
          "input": "10\n5",
          "expectedOutput": "有利潤 賺5元",
          "output": "有利潤 賺5元",
          "score": 20,
          "hidden": false
        },
        {
          "input": "50\n12",
          "expectedOutput": "無利潤 賠5元",
          "output": "無利潤 賠5元",
          "score": 20,
          "hidden": false
        },
        {
          "input": "100\n11",
          "expectedOutput": "有利潤 賺20元",
          "output": "有利潤 賺20元",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "售價需先四捨五入再依時段套用不同折扣（同樣需四捨五入），並判斷盈虧，練習多階段的四捨五入計算。",
        "exportDecision": "Claude 依使用者提供的114-新竹縣國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "公式計算"
        ],
        "subConcepts": [
          "多階段折扣"
        ],
        "algorithm": [
          "多階段計算"
        ],
        "dataStructure": [
          "無"
        ],
        "syntax": [
          "if-elif-else",
          "四捨五入"
        ],
        "math": [],
        "context": [
          "生活情境",
          "餐車經營"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EHsinchuC-5",
      "title": "雲端資料備份硬碟統計",
      "problemTitle": "雲端資料備份硬碟統計",
      "courseCode": "114EHsinchuC",
      "courseName": "114-新竹縣國小",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "高",
      "requiresGreenFlag": true,
      "description": "有一批待備份資料，總量已知，雲端有 N 顆硬碟依序可使用，每顆有各自容量。依序將資料填入硬碟直到備份完成為止，請輸出總共動用了幾顆硬碟；若所有硬碟容量總和仍不足以完整備份，輸出「待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。」",
      "inputDescription": "第一行輸入待備份總量。\n第二行輸入硬碟數量 N。\n第三行輸入 N 顆硬碟的容量。",
      "outputDescription": "輸出動用的硬碟數量，或容量不足的提示訊息。",
      "statement": {
        "description": "有一批待備份資料，總量已知，雲端有 N 顆硬碟依序可使用，每顆有各自容量。依序將資料填入硬碟直到備份完成為止，請輸出總共動用了幾顆硬碟；若所有硬碟容量總和仍不足以完整備份，輸出「待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。」",
        "input": "第一行輸入待備份總量。\n第二行輸入硬碟數量 N。\n第三行輸入 N 顆硬碟的容量。",
        "output": "輸出動用的硬碟數量，或容量不足的提示訊息。"
      },
      "examples": [
        {
          "input": "50\n2\n100 50",
          "output": "1",
          "explanation": "第1顆硬碟容量100已足夠備份50，動用1顆。"
        },
        {
          "input": "800\n3\n500 200 300",
          "output": "3",
          "explanation": "前2顆硬碟容量500+200=700不足800，加上第3顆300達1000才完成，動用3顆。"
        }
      ],
      "testCases": [
        {
          "input": "50\n2\n100 50",
          "expectedOutput": "1",
          "output": "1",
          "score": 20,
          "hidden": false
        },
        {
          "input": "800\n3\n500 200 300",
          "expectedOutput": "3",
          "output": "3",
          "score": 20,
          "hidden": false
        },
        {
          "input": "1000\n2\n300 400",
          "expectedOutput": "待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。",
          "output": "待備份檔案總容量超過雲端硬碟總空間，無法完整備份，請重新輸入。",
          "score": 20,
          "hidden": false
        },
        {
          "input": "250\n3\n100 100 100",
          "expectedOutput": "3",
          "output": "3",
          "score": 20,
          "hidden": false
        },
        {
          "input": "100\n1\n100",
          "expectedOutput": "1",
          "output": "1",
          "score": 20,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "依序填入硬碟直到備份完成，並處理總容量不足的例外情況，練習累加迴圈與提前結束判斷。",
        "exportDecision": "Claude 依使用者提供的114-新竹縣國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "累加判斷"
        ],
        "subConcepts": [
          "容量不足例外處理"
        ],
        "algorithm": [
          "累加迴圈"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for",
          "if",
          "break"
        ],
        "math": [],
        "context": [
          "科技情境",
          "雲端備份"
        ]
      },
      "restrictions": {
        "requiredBlocks": [],
        "disabledBlocks": []
      }
    },
    {
      "id": "114EHsinchuC-6",
      "title": "綠色節能競賽：電價分段計費與成本分析",
      "problemTitle": "綠色節能競賽：電價分段計費與成本分析",
      "courseCode": "114EHsinchuC",
      "courseName": "114-新竹縣國小",
      "role": "contest",
      "difficulty": "L3",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "共有 N 戶家庭，各自有一個月的用電度數。電價採四段累進費率：120度以內每度1.63元；121~330度部分每度2.38元；331~500度部分每度3.52元；501度以上部分每度4.80元。請計算每戶電費（四捨五入取整數元），並找出電費最低的金額，以及電費最高的戶序號與金額。",
      "inputDescription": "第一行輸入戶數 N。\n第二行輸入 N 戶的用電度數。",
      "outputDescription": "輸出「戶數 最低費用 最高費用戶序號 最高費用」。",
      "statement": {
        "description": "共有 N 戶家庭，各自有一個月的用電度數。電價採四段累進費率：120度以內每度1.63元；121~330度部分每度2.38元；331~500度部分每度3.52元；501度以上部分每度4.80元。請計算每戶電費（四捨五入取整數元），並找出電費最低的金額，以及電費最高的戶序號與金額。",
        "input": "第一行輸入戶數 N。\n第二行輸入 N 戶的用電度數。",
        "output": "輸出「戶數 最低費用 最高費用戶序號 最高費用」。"
      },
      "examples": [
        {
          "input": "3\n555 339 80",
          "output": "3 130 1 1558",
          "explanation": "3戶用電555/339/80度，電費分別為1558/727/130元，最低是家庭3的130元，最高是家庭1的1558元。"
        },
        {
          "input": "4\n222 911 349 119",
          "output": "4 194 2 3267",
          "explanation": "4戶用電222/911/349/119度，電費分別為438/3267/762/194元，最低是家庭4的194元，最高是家庭2的3267元。"
        }
      ],
      "testCases": [
        {
          "input": "3\n555 339 80",
          "expectedOutput": "3 130 1 1558",
          "output": "3 130 1 1558",
          "score": 50,
          "hidden": false
        },
        {
          "input": "4\n222 911 349 119",
          "expectedOutput": "4 194 2 3267",
          "output": "4 194 2 3267",
          "score": 50,
          "hidden": false
        }
      ],
      "starterXml": "",
      "review": {
        "needsManualReview": false,
        "risk": "低",
        "flags": [],
        "note": "需要用四段累進費率計算每戶電費，並找出最低費用與最高費用（及其戶序號），練習分段計費與極值搜尋。",
        "exportDecision": "Claude 依使用者提供的114-新竹縣國小PDF手動轉錄並驗證"
      },
      "tags": {
        "mainConcepts": [
          "累進費率"
        ],
        "subConcepts": [
          "極值搜尋"
        ],
        "algorithm": [
          "累進費率",
          "極值搜尋"
        ],
        "dataStructure": [
          "清單"
        ],
        "syntax": [
          "for（巢狀）",
          "四捨五入",
          "最大最小值"
        ],
        "math": [],
        "context": [
          "生活情境",
          "電費計算"
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
