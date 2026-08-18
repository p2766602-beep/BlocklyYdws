// 競賽模式版本，由 114EKeelung.js 複製並轉換而來（來源課程仍以學習模式繼續上架，互不影響）。
// 轉換規則：mode改為'contest'、每題starterXml清空（競賽模式不提供範例答案可載入，即使
// 來源這次確實有真的starterXml範例答案，仍比照114TCPE01~13既有政策不外露）、課程代碼/
// 題目id/courseCode/courseName改用新代碼、title加註「（競賽模式）」。
// 正確答案（testCases[].expectedOutput/output）只在canonical（本檔）與YDWS-CodingBank這份留存；
// BlocklyYdws的公開JS檔已移除，改由Worker（workers/score-grader/src/answerKeys.json，私密、
// 不進git）比對評分。blockly-lab版本例外維持mode:'learning'＋保留expectedOutput（比照既有
// 114TCPE01~13在blockly-lab的做法：共享Cloudflare帳號quota考量，全平台已停用成績上傳
// SCORE_SUBMISSION_ENABLED=false，改用本機testCases比對，不會打Worker）。

const course = {
  "code": "114TCPE14",
  "title": "114-基隆市國小（競賽模式）",
  "type": "programming",
  "mode": "contest",
  "description": "114-基隆市國小114學年度科技教育創意實作競賽題庫",
  "source": {
    "project": "YDWS-CodingBank",
    "generatedAt": "2026-08-13T09:14:56.814Z",
    "sourceCsv": "data/problem_bank_master_complete.csv",
    "problemSetTitle": "114-基隆市國小",
    "version": "manual-transcription-verified",
    "convertedFrom": "114EKeelung",
    "convertedAt": "2026-08-13T09:14:56.815Z",
    "note": "競賽模式版本：由對應學習模式課程複製轉換而來（原課程仍以學習模式繼續上架，互不影響）。starterXml已清空，測資正確答案僅保留在這份canonical檔案與各平台Worker的私密answerKeys.json，兩平台公開JS檔案已移除。"
  },
  "tasks": [
    {
      "id": "114TCPE14-1",
      "title": "1.魔法寶石的盤點(易)",
      "problemTitle": "1.魔法寶石的盤點(易)",
      "courseCode": "114TCPE14",
      "courseName": "114-基隆市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "在遙遠的魔法王國裡,每一位見習魔法師都有一個專屬的寶石袋,裡面裝滿了各式各樣擁有不同魔力的「數字寶石」。 每一顆寶石上都刻著一個獨特的編號,代表它的屬性(例如:1號是火、2號是水、5號是雷電...等等)。 \n今天,大法師想要考驗大家的細心程度。 他會給你一個任務,請你打開你的寶石袋,檢查裡面所有的寶石,然後告訴大法師,某個「特定編號」的寶石,你總共收集到了幾顆? \n請你寫一個程式,幫忙自動計算出正確的數量,這樣就不會數錯而被大法師處罰囉!",
      "inputDescription": "輸入共分成三行:\n1.第一行是一個整數,代表寶石袋裡總共有幾顆寶石。\n2.第二行有N個整數,代表袋子裡每一顆寶石上的編號,數字之間以空白隔開。\n3.第三行是一個整數K,代表大法師指定要查詢的「特定編號」。",
      "outputDescription": "輸出一個整數,代表編號為K的寶石在袋子裡出現的總次數。",
      "statement": {
        "description": "在遙遠的魔法王國裡,每一位見習魔法師都有一個專屬的寶石袋,裡面裝滿了各式各樣擁有不同魔力的「數字寶石」。 每一顆寶石上都刻著一個獨特的編號,代表它的屬性(例如:1號是火、2號是水、5號是雷電...等等)。 \n今天,大法師想要考驗大家的細心程度。 他會給你一個任務,請你打開你的寶石袋,檢查裡面所有的寶石,然後告訴大法師,某個「特定編號」的寶石,你總共收集到了幾顆? \n請你寫一個程式,幫忙自動計算出正確的數量,這樣就不會數錯而被大法師處罰囉!",
        "input": "輸入共分成三行:\n1.第一行是一個整數,代表寶石袋裡總共有幾顆寶石。\n2.第二行有N個整數,代表袋子裡每一顆寶石上的編號,數字之間以空白隔開。\n3.第三行是一個整數K,代表大法師指定要查詢的「特定編號」。",
        "output": "輸出一個整數,代表編號為K的寶石在袋子裡出現的總次數。"
      },
      "examples": [
        {
          "input": "10\n1 5 3 2 5 8 5 9 1 5\n5",
          "output": "4",
          "explanation": ""
        },
        {
          "input": "4\n6 12 31 24\n2",
          "output": "0",
          "explanation": ""
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "10\n1 5 3 2 5 8 5 9 1 5\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n6 12 31 24\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n10 20 30 40 50 60\n20",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 1 1 1 5\n8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n29 37 468 10 0\n7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n3 3 5 3 5 5 3\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n100\n100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0 5 0 2 0 8 0 0 1 0\n0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "12\n1 2 3 4 5 6 7 8 9 10 11 12\n7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "15\n2 4 6 8 10 2 4 6 8 10 2 4 6 8 10\n2",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114TCPE14-2",
      "title": "2.遊戲績分排行榜(易)",
      "problemTitle": "2.遊戲績分排行榜(易)",
      "courseCode": "114TCPE14",
      "courseName": "114-基隆市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "您正在開發一款簡單的益智遊戲。 每次遊戲結束後,系統會記錄玩家的最終得分。 為了激勵玩家,您需要編寫一個程式來快速計算並顯示當前所有紀錄中的前三名最高得分。 如果總得分記錄數少於三筆,則輸出所有可用的得分。",
      "inputDescription": "輸入包含兩行:第一行是一個整數N (0<=N>=100),表示玩家的總得分紀錄數。 第二行是 N個整數,代表每位玩家的得分 (0<=N>=1000)。",
      "outputDescription": "輸出一行或多行:輸出前三個最高的得分。 如果得分紀錄少於三筆,則輸出所有得分。 如果 N=0(沒有任何紀錄),則輸出「目前沒有績分」",
      "statement": {
        "description": "您正在開發一款簡單的益智遊戲。 每次遊戲結束後,系統會記錄玩家的最終得分。 為了激勵玩家,您需要編寫一個程式來快速計算並顯示當前所有紀錄中的前三名最高得分。 如果總得分記錄數少於三筆,則輸出所有可用的得分。",
        "input": "輸入包含兩行:第一行是一個整數N (0<=N>=100),表示玩家的總得分紀錄數。 第二行是 N個整數,代表每位玩家的得分 (0<=N>=1000)。",
        "output": "輸出一行或多行:輸出前三個最高的得分。 如果得分紀錄少於三筆,則輸出所有得分。 如果 N=0(沒有任何紀錄),則輸出「目前沒有績分」"
      },
      "examples": [
        {
          "input": "6\n50 420 80 500 410 210",
          "output": "500 420 410",
          "explanation": ""
        },
        {
          "input": "1\n99",
          "output": "99",
          "explanation": ""
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "6\n50 420 80 500 410 210",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n99",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n777 666",
          "score": 10,
          "hidden": false
        },
        {
          "input": "0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n75 75 75 60",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n18 520 18",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 100 100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 2 3 4 5 6 7",
          "score": 10,
          "hidden": false
        },
        {
          "input": "8\n0 0 0 0 0 0 0 0",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114TCPE14-3",
      "title": "3.隊伍的旋轉舞步(中)",
      "problemTitle": "3.隊伍的旋轉舞步(中)",
      "courseCode": "114TCPE14",
      "courseName": "114-基隆市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "一年一度的運動會到了,六年級的同學們正在練習大會舞。 教練設計了一個特別的「波浪變換」隊形。 一開始,N位同學排成一直排,每個人身上都有一個號碼牌。 當教練吹哨子並喊出一個數字 K時,隊伍就要進行「向右旋轉移動」K格。 \n所謂的「向右旋轉移動」規則是這樣的:\n站在最右邊(排尾)的同學,要跑到最左邊(排頭)去。 \n如果教練喊 K=1,代表所有人都往右走一步,而最後一位同學跑到第一個位置。 \n如果教練喊 K=2,代表這個動作連續做兩次。 \n舉個例子,如果隊伍是[1,2,3,4,5],教練喊「向右移2格」:\n1.第一次移動後變成:[5,1,2,3,4] (5號跑去排頭)\n2.第二次移動後變成:[4,5,1,2,3] (4號跑去排頭)\n請你寫一個程式,根據輸入的同學初始隊伍順序,以及教練喊出的移動步數 K,算出最後大家站的位置順序是如何?\n注意: 教練有時候太興奮,喊出的步數K可能會比隊伍的人數還要多喔!",
      "inputDescription": "輸入共分成三行:\n1.第一行是一個整數N,代表隊伍中共有幾位同學。\n2.第二行有N個整數,代表一開始隊伍中同學的號碼順序,數字以空白隔開。\n3.第三行是一個整數K,代表向右移動的步數。",
      "outputDescription": "輸出移動完成後,新的隊伍號碼順序,數字間請用空白隔開。",
      "statement": {
        "description": "一年一度的運動會到了,六年級的同學們正在練習大會舞。 教練設計了一個特別的「波浪變換」隊形。 一開始,N位同學排成一直排,每個人身上都有一個號碼牌。 當教練吹哨子並喊出一個數字 K時,隊伍就要進行「向右旋轉移動」K格。 \n所謂的「向右旋轉移動」規則是這樣的:\n站在最右邊(排尾)的同學,要跑到最左邊(排頭)去。 \n如果教練喊 K=1,代表所有人都往右走一步,而最後一位同學跑到第一個位置。 \n如果教練喊 K=2,代表這個動作連續做兩次。 \n舉個例子,如果隊伍是[1,2,3,4,5],教練喊「向右移2格」:\n1.第一次移動後變成:[5,1,2,3,4] (5號跑去排頭)\n2.第二次移動後變成:[4,5,1,2,3] (4號跑去排頭)\n請你寫一個程式,根據輸入的同學初始隊伍順序,以及教練喊出的移動步數 K,算出最後大家站的位置順序是如何?\n注意: 教練有時候太興奮,喊出的步數K可能會比隊伍的人數還要多喔!",
        "input": "輸入共分成三行:\n1.第一行是一個整數N,代表隊伍中共有幾位同學。\n2.第二行有N個整數,代表一開始隊伍中同學的號碼順序,數字以空白隔開。\n3.第三行是一個整數K,代表向右移動的步數。",
        "output": "輸出移動完成後,新的隊伍號碼順序,數字間請用空白隔開。"
      },
      "examples": [
        {
          "input": "5\n10 20 30 40 50\n1",
          "output": "50 10 20 30 40",
          "explanation": ""
        },
        {
          "input": "5\n10 20 30 40 50\n2",
          "output": "40 50 10 20 30",
          "explanation": ""
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "5\n10 20 30 40 50\n1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50\n2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n1 2 3\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 2 3 4\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n1 2 3 4 5\n0",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n99 88\n101",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n7 7 7 7 7 7\n3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "7\n1 2 3 4 5 6 7\n4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10\n0 1 2 3 4 5 6 7 8 9\n15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n1 3 5 7\n6",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114TCPE14-4",
      "title": "4.找出連續整數中所缺失的數字(中)",
      "problemTitle": "4.找出連續整數中所缺失的數字(中)",
      "courseCode": "114TCPE14",
      "courseName": "114-基隆市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "有一位剛學數字的小朋友,他喜歡在紙上書寫連續數字,但是在書寫的過程中經常會有數字被他遺漏,例如3、4、7、10,表示他從3寫到10,但中間遺漏了5、6、8、9等4個數字。 請你當小老師,設計程式找出這位小朋友在連續數字當中缺失的數字。",
      "inputDescription": "第一行:輸入一個整數N,小朋友所寫的數字\n輸入共有一列,N個正整數,數值介於0到200之間。",
      "outputDescription": "輸出共一列,為輸入數列中最小值與最大值所能排列出之差值為1的數列,並對比輸入數列後所缺失的數值,由小到大排列,若無缺失則輸出\"無缺失”。",
      "statement": {
        "description": "有一位剛學數字的小朋友,他喜歡在紙上書寫連續數字,但是在書寫的過程中經常會有數字被他遺漏,例如3、4、7、10,表示他從3寫到10,但中間遺漏了5、6、8、9等4個數字。 請你當小老師,設計程式找出這位小朋友在連續數字當中缺失的數字。",
        "input": "第一行:輸入一個整數N,小朋友所寫的數字\n輸入共有一列,N個正整數,數值介於0到200之間。",
        "output": "輸出共一列,為輸入數列中最小值與最大值所能排列出之差值為1的數列,並對比輸入數列後所缺失的數值,由小到大排列,若無缺失則輸出\"無缺失”。"
      },
      "examples": [
        {
          "input": "3\n1 3 5",
          "output": "2 4",
          "explanation": ""
        },
        {
          "input": "5\n7 9 15 18 19",
          "output": "8 10 11 12 13 14 16 17",
          "explanation": ""
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "3\n1 3 5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n7 9 15 18 19",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 101 102",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n3 4 4 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n90 87 85",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n10 3 7 4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n5",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 10 10 10 10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n0 2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "6\n200 198 196 195 194 199",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114TCPE14-5",
      "title": "5.數學王國的連續階梯(難)",
      "problemTitle": "5.數學王國的連續階梯(難)",
      "courseCode": "114TCPE14",
      "courseName": "114-基隆市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "在數學王國裡,有一座通往天空的神秘城堡。 城堡的大門緊閉著,門上只有一個巨大的數字螢幕,顯示著一個目標數字 N。 \n傳說中,想要打開這扇門,必須找到一組或多組「連續的正整數階梯」,這些階梯上的數字加起來的總和,必須剛好等於門上的數字N。 \n例如,如果門上的數字是15,你可以找到以下3組階梯:\n1.12345(因為1+2+3+4+5=15)\n2.456(因為4+5+6=15)\n3.78(因為 7+8=15)\n請注意,階梯至少要由兩個數字組成(不能只有一個數字),而且必須是連續的正整數(例如123...)。 \n請你寫一個程式,幫助冒險者列出所有能夠湊出目標數字的連續正整數組合。",
      "inputDescription": "輸入只有一行,包含一個正整數 N (3<=N<=500)",
      "outputDescription": "請列出所有總和等於N的連續正整數組合。\n每一組組合輸出一行,格式為數字+數字+...=N。\n輸出的順序請依照「起始數字」由小到大排列。\n如果找不到任何一組符合條件的連續整數(例如輸入2或4時),則輸出 No。",
      "statement": {
        "description": "在數學王國裡,有一座通往天空的神秘城堡。 城堡的大門緊閉著,門上只有一個巨大的數字螢幕,顯示著一個目標數字 N。 \n傳說中,想要打開這扇門,必須找到一組或多組「連續的正整數階梯」,這些階梯上的數字加起來的總和,必須剛好等於門上的數字N。 \n例如,如果門上的數字是15,你可以找到以下3組階梯:\n1.12345(因為1+2+3+4+5=15)\n2.456(因為4+5+6=15)\n3.78(因為 7+8=15)\n請注意,階梯至少要由兩個數字組成(不能只有一個數字),而且必須是連續的正整數(例如123...)。 \n請你寫一個程式,幫助冒險者列出所有能夠湊出目標數字的連續正整數組合。",
        "input": "輸入只有一行,包含一個正整數 N (3<=N<=500)",
        "output": "請列出所有總和等於N的連續正整數組合。\n每一組組合輸出一行,格式為數字+數字+...=N。\n輸出的順序請依照「起始數字」由小到大排列。\n如果找不到任何一組符合條件的連續整數(例如輸入2或4時),則輸出 No。"
      },
      "examples": [
        {
          "input": "15",
          "output": "1+2+3+4+5=15\n4+5+6=15\n7+8=15",
          "explanation": ""
        },
        {
          "input": "10",
          "output": "1+2+3+4=10",
          "explanation": ""
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "15",
          "score": 10,
          "hidden": false
        },
        {
          "input": "10",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3",
          "score": 10,
          "hidden": false
        },
        {
          "input": "9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "100",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4",
          "score": 10,
          "hidden": false
        },
        {
          "input": "21",
          "score": 10,
          "hidden": false
        },
        {
          "input": "27",
          "score": 10,
          "hidden": false
        },
        {
          "input": "35",
          "score": 10,
          "hidden": false
        }
      ]
    },
    {
      "id": "114TCPE14-6",
      "title": "6.平均分配物品(難)",
      "problemTitle": "6.平均分配物品(難)",
      "courseCode": "114TCPE14",
      "courseName": "114-基隆市國小（競賽模式）",
      "role": "contest",
      "difficulty": "L2",
      "blocklyFit": "中",
      "requiresGreenFlag": true,
      "description": "陳老師有N種不同種類及不同數量的文具,所有的文具都要平分給小朋友,讓每位小朋友分到的每一種文具的數量要一樣多,按照這樣的分法,請問老師準備的N種文具最多可以分給幾位小朋友?\n例如:陳老師有3種文具,分別是鉛筆12枝、橡皮擦36個、筆記本15本,所有的文具都分完,最多可以分給3個小朋友,每個人有鉛筆4枝、橡皮擦12個、筆記本5本",
      "inputDescription": "第一行:輸入一個整數N,為老師所準備的文具種類\n第二行:輸入N個整數,用空格隔開,為各種文具的數量",
      "outputDescription": "可分給小朋友的最多人數",
      "statement": {
        "description": "陳老師有N種不同種類及不同數量的文具,所有的文具都要平分給小朋友,讓每位小朋友分到的每一種文具的數量要一樣多,按照這樣的分法,請問老師準備的N種文具最多可以分給幾位小朋友?\n例如:陳老師有3種文具,分別是鉛筆12枝、橡皮擦36個、筆記本15本,所有的文具都分完,最多可以分給3個小朋友,每個人有鉛筆4枝、橡皮擦12個、筆記本5本",
        "input": "第一行:輸入一個整數N,為老師所準備的文具種類\n第二行:輸入N個整數,用空格隔開,為各種文具的數量",
        "output": "可分給小朋友的最多人數"
      },
      "examples": [
        {
          "input": "2\n15 45",
          "output": "15",
          "explanation": ""
        },
        {
          "input": "3\n24 16 12",
          "output": "4",
          "explanation": ""
        }
      ],
      "starterXml": "",
      "testCases": [
        {
          "input": "2\n15 45",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n24 16 12",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n2 9",
          "score": 10,
          "hidden": false
        },
        {
          "input": "1\n8",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n100 200 1",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n6 6 6",
          "score": 10,
          "hidden": false
        },
        {
          "input": "4\n12 24 36 48",
          "score": 10,
          "hidden": false
        },
        {
          "input": "5\n10 20 30 40 50",
          "score": 10,
          "hidden": false
        },
        {
          "input": "2\n1000 500",
          "score": 10,
          "hidden": false
        },
        {
          "input": "3\n21 14 35",
          "score": 10,
          "hidden": false
        }
      ]
    }
  ]
};

export default course;
