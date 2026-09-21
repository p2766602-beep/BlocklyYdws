// 2026-09-21（更正）：mode維持/改回'contest'，不是'learning'——'contest'控制的是「系統
// 評分結果顯示多少細節」：contest只顯示每筆測資通過/未通過，learning會顯示完整的輸入/
// 正確答案/學生實際輸出。114TCP系列每題都有對應的學習模式課程（例如114TCPE01對應
// 114EChaiyi）已經提供範例答案跟完整回饋，114TCP系列維持'contest'、模擬官方競賽平台
// 「不洩漏答案」的行為是對的，之前一度誤改成'learning'已經改回來。
//
// 真正要修的bug是另一件事：mode:'contest'課程原本設計成「評分比對」要打score-grader
// Worker（本機JS故意不含expectedOutput，防止洩題），但Worker私密的answerKeys.json產生
// 腳本讀錯資料夾（讀到本來就被清空答案的公開JS，不是YDWS-CodingBank正本），導致「正確
// 答案」全部變成空字串，系統評分永遠判定失敗，不管學生寫得多正確都一樣。修法是把
// 「評分比對去哪裡做」跟「結果要顯示多少細節」這兩件事拆開：testCases補回YDWS-CodingBank
// 正本的真正expectedOutput/output（本機也拿得到答案），main.js的評分邏輯改成不管mode是
// 什麼、比對一律走本機（不再打Worker），但結果顯示邏輯完全沒動，mode還是看
// 'contest'/'learning'決定要不要隱藏細節——這樣'contest'課程一樣不洩漏答案，只是評分
// 比對不再依賴容易忘記重新產生/部署的Worker私密資料。

// 競賽模式版本，由 114EYunlin.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入，即使
// 來源這次確實有真的starterXml範例答案，仍比照114TCPE01~13既有政策不外露）、課程代碼/
// 題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws的公開JS檔已移除，改由Worker（workers/score-grader/src/answerKeys.json，私密、
// 不進git）比對評分。blockly-lab版本例外維持mode:'learning'＋保留expectedOutput（比照既有
// 114TCPE01~13在blockly-lab的做法：共享Cloudflare帳號quota考量，全平台已停用成績上傳
// SCORE_SUBMISSION_ENABLED=false，改用本機testCases比對，不會打Worker）。

const course = {
  "code": "114TCPE16",
  "title": "114-雲林縣國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "114-雲林縣國小114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-13T09:14:56.834Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-雲林縣國小",
    "version": "manual-transcription-verified",
    "convertedFrom": "114EYunlin",
    "convertedAt": "2026-08-13T09:14:56.834Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPE16-1",
      "title": "1-圓柱體積計算",
      "problemTitle": "1-圓柱體積計算",
      "courseCode": "114TCPE16",
      "courseName": "114-雲林縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "小明正在學習幾何，他知道圓柱體積的計算是測量一個立體形狀容積的重要方法。為了驗證計算結果，他想寫一個程式來計算圓柱體的體積。\n圓柱體積的計算公式為：圓柱體積 = 半徑 × 半徑 × 3.14 × 高\n【輸入格式】\n程式依序輸入\n1. 輸入圓柱體的底面半徑\n2. 輸入圓柱體的高度\n【輸出格式】\n程式會根據公式計算並輸出圓柱體體積。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "小明正在學習幾何，他知道圓柱體積的計算是測量一個立體形狀容積的重要方法。為了驗證計算結果，他想寫一個程式來計算圓柱體的體積。\n圓柱體積的計算公式為：圓柱體積 = 半徑 × 半徑 × 3.14 × 高\n【輸入格式】\n程式依序輸入\n1. 輸入圓柱體的底面半徑\n2. 輸入圓柱體的高度\n【輸出格式】\n程式會根據公式計算並輸出圓柱體體積。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "3\n5",
          "output": "141.3",
          "explanation": "底面半徑：3\n高度：5\n體積 = 3 * 3 * 3.14 * 5 = 141.3"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "2\n10",
          "expectedOutput": "125.6",
          "score": 10
        },
        {
          "input": "3\n15",
          "expectedOutput": "423.9",
          "score": 10
        },
        {
          "input": "1\n1",
          "expectedOutput": "3.14",
          "score": 10
        },
        {
          "input": "10\n10",
          "expectedOutput": "3140",
          "score": 10
        },
        {
          "input": "5\n20",
          "expectedOutput": "1570",
          "score": 10
        },
        {
          "input": "20\n5",
          "expectedOutput": "6280",
          "score": 10
        },
        {
          "input": "1.5\n4",
          "expectedOutput": "28.26",
          "score": 10
        },
        {
          "input": "0.5\n10",
          "expectedOutput": "7.85",
          "score": 10
        },
        {
          "input": "100\n1",
          "expectedOutput": "31400",
          "score": 10
        },
        {
          "input": "8\n8",
          "expectedOutput": "1607.68",
          "score": 10
        }
      ]
    },
    {
      "id": "114TCPE16-2",
      "title": "2-身體質量指數計算與健康判斷",
      "problemTitle": "2-身體質量指數計算與健康判斷",
      "courseCode": "114TCPE16",
      "courseName": "114-雲林縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "小康非常注重身體健康，他知道身體質量指數(BMI)是一個常用的健康指標。為了方便計算，他想寫一個程式來快速算出自己的 BMI 值，並能判斷肥胖程度是標準、過輕還是過重。\nBMI 的計算公式為： BMI = 體重(公斤) / [身高(公尺) × 身高(公尺)]\n肥胖狀態判斷標準：\n• BMI < 18.5 → 過輕\n• 18.5 ≤ BMI < 24 → 標準\n• BMI ≥ 24 → 過重\n【輸入格式】\n程式依序輸入\n1. 輸入體重(公斤)\n2. 輸入身高(公尺)\n【輸出格式】\n程式會根據公式計算並輸出 BMI 值 (通常建議四捨五入到小數點後兩位)，並判斷並輸出對應的肥胖狀態。(以空白分隔)",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "小康非常注重身體健康，他知道身體質量指數(BMI)是一個常用的健康指標。為了方便計算，他想寫一個程式來快速算出自己的 BMI 值，並能判斷肥胖程度是標準、過輕還是過重。\nBMI 的計算公式為： BMI = 體重(公斤) / [身高(公尺) × 身高(公尺)]\n肥胖狀態判斷標準：\n• BMI < 18.5 → 過輕\n• 18.5 ≤ BMI < 24 → 標準\n• BMI ≥ 24 → 過重\n【輸入格式】\n程式依序輸入\n1. 輸入體重(公斤)\n2. 輸入身高(公尺)\n【輸出格式】\n程式會根據公式計算並輸出 BMI 值 (通常建議四捨五入到小數點後兩位)，並判斷並輸出對應的肥胖狀態。(以空白分隔)",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "60\n1.65",
          "output": "22.04 標準",
          "explanation": "體重(公斤)：60\n身高(公尺)：1.65\nBMI = 60 / (1.65 * 1.65) = 22.04，標準"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "88\n1.8",
          "expectedOutput": "27.16 過重",
          "score": 10
        },
        {
          "input": "35\n1.65",
          "expectedOutput": "12.86 過輕",
          "score": 10
        },
        {
          "input": "65\n1.7",
          "expectedOutput": "22.49 標準",
          "score": 10
        },
        {
          "input": "75\n1.75",
          "expectedOutput": "24.49 過重",
          "score": 10
        },
        {
          "input": "50\n1.6",
          "expectedOutput": "19.53 標準",
          "score": 10
        },
        {
          "input": "40\n1.5",
          "expectedOutput": "17.78 過輕",
          "score": 10
        },
        {
          "input": "100\n2.0",
          "expectedOutput": "25 過重",
          "score": 10,
          "output": "25 過重"
        },
        {
          "input": "55\n1.75",
          "expectedOutput": "17.96 過輕",
          "score": 10
        },
        {
          "input": "70\n1.75",
          "expectedOutput": "22.86 標準",
          "score": 10
        },
        {
          "input": "80\n1.8",
          "expectedOutput": "24.69 過重",
          "score": 10
        }
      ]
    },
    {
      "id": "114TCPE16-3",
      "title": "3-房間木地板的購買計算",
      "problemTitle": "3-房間木地板的購買計算",
      "courseCode": "114TCPE16",
      "courseName": "114-雲林縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "雲雲是一位室內設計師，想要為客戶把房間的地板換成木地板。他挑選的木地板規格是：長 60 公分、寬 20 公分。已知每包木地板有 20 片，且木地板可以切割拼鋪。客戶房間地板的長、寬皆不相同是以公尺計算，雲雲需要計算「最少要購買幾包貼片」才能鋪滿整個房間。(註：一定要買整包的數量，不可以買 3.5 包)\n【輸入格式】\n程式依序輸入：\n1. 輸入房間的長度(公尺)\n2. 輸入房間的寬度(公尺)\n【輸出格式】\n程式會計算並輸出雲雲最少需要購買的木地板包數。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "雲雲是一位室內設計師，想要為客戶把房間的地板換成木地板。他挑選的木地板規格是：長 60 公分、寬 20 公分。已知每包木地板有 20 片，且木地板可以切割拼鋪。客戶房間地板的長、寬皆不相同是以公尺計算，雲雲需要計算「最少要購買幾包貼片」才能鋪滿整個房間。(註：一定要買整包的數量，不可以買 3.5 包)\n【輸入格式】\n程式依序輸入：\n1. 輸入房間的長度(公尺)\n2. 輸入房間的寬度(公尺)\n【輸出格式】\n程式會計算並輸出雲雲最少需要購買的木地板包數。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "3\n4",
          "output": "5",
          "explanation": "房間的長度(公尺)：3\n房間的寬度(公尺)：4\n面積 = 300 * 400 = 120000 平方公分\n每包面積 = 60 * 20 * 20 = 24000 平方公分\n120000 / 24000 = 5 包。"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "5\n3.5",
          "expectedOutput": "8",
          "score": 10
        },
        {
          "input": "7\n4",
          "expectedOutput": "12",
          "score": 10
        },
        {
          "input": "6\n4",
          "expectedOutput": "10",
          "score": 10
        },
        {
          "input": "4\n4",
          "expectedOutput": "7",
          "score": 10
        },
        {
          "input": "1\n2.4",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "10\n10",
          "expectedOutput": "42",
          "score": 10
        },
        {
          "input": "2.5\n2.5",
          "expectedOutput": "3",
          "score": 10
        },
        {
          "input": "3.6\n4.8",
          "expectedOutput": "8",
          "score": 10
        },
        {
          "input": "8\n5",
          "expectedOutput": "17",
          "score": 10
        },
        {
          "input": "5.5\n4.5",
          "expectedOutput": "11",
          "score": 10
        }
      ]
    },
    {
      "id": "114TCPE16-4",
      "title": "4-美味餐車三明治多重折扣與利潤計算",
      "problemTitle": "4-美味餐車三明治多重折扣與利潤計算",
      "courseCode": "114TCPE16",
      "courseName": "114-雲林縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "美味餐車販售三明治。老闆決定讓三明治的成本可以彈性輸入。餐車制定售價的方式保持不變：三明治的售價是成本再加 50% 來制定。(售價 = 成本 * 1.5)\n為了促銷，餐車設有兩段折扣：每日上午 11 點過後(包含 11 點)實施打八折優惠，而上午 12 點過後(包含 12 點)則會實施更低的打六折優惠。\n老闆想知道，在不同折扣時段，三明治是否仍有利潤，以及具體賺或是賠多少錢。(有利潤就是賺錢；無利潤就是賠錢)\n【輸入格式】\n程式依序輸入\n1. 輸入三明治的成本\n2. 輸入折扣時段 (如 11、12)\n【輸出格式】\n程式會計算並輸出不同時段有無利潤及賺或賠的金額。例如：「有利潤賺4元」或「無利潤賠X元」。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "美味餐車販售三明治。老闆決定讓三明治的成本可以彈性輸入。餐車制定售價的方式保持不變：三明治的售價是成本再加 50% 來制定。(售價 = 成本 * 1.5)\n為了促銷，餐車設有兩段折扣：每日上午 11 點過後(包含 11 點)實施打八折優惠，而上午 12 點過後(包含 12 點)則會實施更低的打六折優惠。\n老闆想知道，在不同折扣時段，三明治是否仍有利潤，以及具體賺或是賠多少錢。(有利潤就是賺錢；無利潤就是賠錢)\n【輸入格式】\n程式依序輸入\n1. 輸入三明治的成本\n2. 輸入折扣時段 (如 11、12)\n【輸出格式】\n程式會計算並輸出不同時段有無利潤及賺或賠的金額。例如：「有利潤賺4元」或「無利潤賠X元」。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "20\n11",
          "output": "有利潤賺4元",
          "explanation": "三明治的成本：20\n折扣時段：11\n售價 = 20 * 1.5 = 30\n11點打八折 = 30 * 0.8 = 24\n利潤 = 24 - 20 = 4\n故輸出有利潤賺4元。"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "40\n11",
          "expectedOutput": "有利潤賺8元",
          "score": 10
        },
        {
          "input": "35\n12",
          "expectedOutput": "無利潤賠3.5元",
          "score": 10
        },
        {
          "input": "50\n10",
          "expectedOutput": "有利潤賺25元",
          "score": 10
        },
        {
          "input": "100\n12",
          "expectedOutput": "無利潤賠10元",
          "score": 10
        },
        {
          "input": "30\n11",
          "expectedOutput": "有利潤賺6元",
          "score": 10
        },
        {
          "input": "60\n12",
          "expectedOutput": "無利潤賠6元",
          "score": 10
        },
        {
          "input": "25\n11",
          "expectedOutput": "有利潤賺5元",
          "score": 10
        },
        {
          "input": "80\n9",
          "expectedOutput": "有利潤賺40元",
          "score": 10
        },
        {
          "input": "45\n12",
          "expectedOutput": "無利潤賠4.5元",
          "score": 10
        },
        {
          "input": "10\n11",
          "expectedOutput": "有利潤賺2元",
          "score": 10
        }
      ]
    },
    {
      "id": "114TCPE16-5",
      "title": "5-電費分段計價",
      "problemTitle": "5-電費分段計價",
      "courseCode": "114TCPE16",
      "courseName": "114-雲林縣國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "為了鼓勵節約用電，電力公司實施分段計價(或稱累進費率)制度，電費會依照不同使用量有不同的費率。小蔡想了解他家用電量對應的總電費，因此需要一個程式來進行計算。\n假設分段計價標準如下(僅為範例)：\n1. 0~120度：每度電費 1.63 元。\n2. 121~330度：超出120度至330度的部分電費率為每度 2.38 元。\n3. 331度以上：超出330度的部分電費率為每度 3.52 元。\n例如：\n用電度數為290度，則\n前120度：120(度) × 1.63(元) = 195.6元\n121度至290度：170(度) × 2.38(元) = 404.6元\n總電費 = 195.6 + 404.6 = 600.2，四捨五入至整數，故輸出總電費 600。\n【輸入格式】\n程式輸入該期總用電度數。\n【輸出格式】\n程式會根據分段計價標準計算總電費並輸出計算後的總電費(四捨五入取整數)。",
      "inputDescription": "",
      "outputDescription": "",
      "statement": {
        "description": "為了鼓勵節約用電，電力公司實施分段計價(或稱累進費率)制度，電費會依照不同使用量有不同的費率。小蔡想了解他家用電量對應的總電費，因此需要一個程式來進行計算。\n假設分段計價標準如下(僅為範例)：\n1. 0~120度：每度電費 1.63 元。\n2. 121~330度：超出120度至330度的部分電費率為每度 2.38 元。\n3. 331度以上：超出330度的部分電費率為每度 3.52 元。\n例如：\n用電度數為290度，則\n前120度：120(度) × 1.63(元) = 195.6元\n121度至290度：170(度) × 2.38(元) = 404.6元\n總電費 = 195.6 + 404.6 = 600.2，四捨五入至整數，故輸出總電費 600。\n【輸入格式】\n程式輸入該期總用電度數。\n【輸出格式】\n程式會根據分段計價標準計算總電費並輸出計算後的總電費(四捨五入取整數)。",
        "input": "",
        "output": ""
      },
      "examples": [
        {
          "input": "100",
          "output": "163",
          "explanation": "該期總用電度數 100。\n100 * 1.63 = 163。"
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "350",
          "expectedOutput": "766",
          "score": 10
        },
        {
          "input": "240",
          "expectedOutput": "481",
          "score": 10
        },
        {
          "input": "120",
          "expectedOutput": "196",
          "score": 10
        },
        {
          "input": "330",
          "expectedOutput": "695",
          "score": 10
        },
        {
          "input": "50",
          "expectedOutput": "82",
          "score": 10
        },
        {
          "input": "121",
          "expectedOutput": "198",
          "score": 10
        },
        {
          "input": "331",
          "expectedOutput": "699",
          "score": 10
        },
        {
          "input": "500",
          "expectedOutput": "1294",
          "score": 10
        },
        {
          "input": "1000",
          "expectedOutput": "3054",
          "score": 10
        },
        {
          "input": "0",
          "expectedOutput": "0",
          "score": 10
        }
      ]
    }
  ]
};

export default course;
