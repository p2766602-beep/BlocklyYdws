export const CPB00 = {
  "code": "CPB00",
  "title": "循環計數迴圈",
  "type": "programming",
  "mode": "contest",
  "tasks": [
    {
      "id": "1-_-",
      "title": "1-勇者的暖身運動-基礎計數",
      "difficulty": "L1",
      "description": "小小勇者在開始冒險前，必須先鍛鍊體力。教練要求勇者必須繞著操場跑N圈。\n勇者一邊跑，必須一邊大聲數出目前是第幾圈，直到跑完為止。\n輸入格式\n第一行：輸入一個整數 N ，代表總共要跑的圈數。 N 為大於 0 的整數\n程式依照順序輸出從 1 到 N 的數字。數字之間以空白隔開。",
      "examples": [
        {
          "input": "5",
          "output": "1 2 3 4 5",
          "explanation": "第一行輸入數字5\n程式輸出數字序列1 2 3 4 5"
        },
        {
          "input": "3",
          "output": "1 2 3",
          "explanation": "第一行輸入數字3\n程式輸出數字序列1 2 3"
        }
      ],
      "testCases": [
        {
          "input": "9",
          "expectedOutput": "1 2 3 4 5 6 7 8 9",
          "score": 10
        },
        {
          "input": "5",
          "expectedOutput": "1 2 3 4 5",
          "score": 10
        },
        {
          "input": "7",
          "expectedOutput": "1 2 3 4 5 6 7",
          "score": 10
        },
        {
          "input": "1",
          "expectedOutput": "1",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "2-_-",
      "title": "2-跳石過河 (間隔計數)",
      "difficulty": "L1",
      "description": "勇者來到了一條充滿鱷魚的河流，河面上有一排標有號碼的石頭（1, 2, 3, 4...）。為了安全，勇者決定施展「輕功」，從第 1 塊石頭開始，每次跳躍都跳過 1 個石頭（也就是每次號碼 +2），直到超過或剛好到達指定的目標號碼 N 為止。請印出勇者踩到的所有石頭號碼。\n輸入格式\n第一行：輸入一個整數 N ，代表河岸對面的目標號碼。 N 為大於 0 的整數\n程式依照順序輸出勇者踩到的石頭編號，從 1 開始，每次加 2。\n數字之間以空白隔開。",
      "examples": [
        {
          "input": "6",
          "output": "1 3 5",
          "explanation": "第一行輸入數字6\n從 1 開始跳，下一個是 3，再來是 5。再跳就是 7 (超過 6 了)，所以停在 5。\n程式輸出數字序列1 3 5"
        },
        {
          "input": "7",
          "output": "1 3 5 7",
          "explanation": "第一行輸入數字7\n從 1 開始跳，下一個是 3、5、7剛好到達7\n程式輸出數字序列1 3 5 7"
        }
      ],
      "testCases": [
        {
          "input": "1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "4",
          "expectedOutput": "1 3",
          "score": 10
        },
        {
          "input": "15",
          "expectedOutput": "1 3 5 7 9 11 13 15",
          "score": 10
        },
        {
          "input": "10",
          "expectedOutput": "1 3 5 7 9",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "3-",
      "title": "3-火箭發射倒數 (遞減計數)",
      "difficulty": "L1",
      "description": "勇者要搭乘火箭前往太空站。火箭發射控制中心需要一個倒數計時器。請你設計一個程式，輸入開始倒數的秒數 S，程式會從 S 開始倒數，每次減少 1，直到數到 0 為止。\n輸入格式\n第一行：輸入一個整數 S ，代表倒數的起始秒數。\n程式依照順序輸出S到0的編號，每次減1。\n數字之間以空白隔開。",
      "examples": [
        {
          "input": "5",
          "output": "5 4 3 2 1 0",
          "explanation": "第一行輸入數字5\n從 5 開始倒數，下一個是4、3、2、1、0\n程式輸出數字序列5 4 3 2 1 0"
        },
        {
          "input": "7",
          "output": "7 6 5 4 3 2 1 0",
          "explanation": "第一行輸入數字7\n從 7開始倒數，下一個是6、5、4、3、2、1、0\n程式輸出數字序列7 6 5 4 3 2 1 0"
        }
      ],
      "testCases": [
        {
          "input": "1",
          "expectedOutput": "1 0",
          "score": 10
        },
        {
          "input": "4",
          "expectedOutput": "4 3 2 1 0",
          "score": 10
        },
        {
          "input": "15",
          "expectedOutput": "15 14 13 12 11 10 9 8 7 6 5 4 3 2 1 0",
          "score": 10
        },
        {
          "input": "10",
          "expectedOutput": "10 9 8 7 6 5 4 3 2 1 0",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "4-",
      "title": "4-魔法金幣倍增術 (變數應用)",
      "difficulty": "L1",
      "description": "勇者學會了「倍增術」。這個魔法的規則是：當勇者唸出數字 i 時，魔法袋裡就會變出 i * 10 枚金幣。勇者決定從 1 開始唸，連續唸到 N。請計算勇者每次唸完數字後，分別得到了多少金幣？\n輸入格式\n第一行：輸入一個整數 N ，代表勇者最後唸出的數字。\n利用迴圈變數 i 進行計算，輸出從 1 到 N 每個數字乘以 10 的結果。\n數字之間以空白隔開。",
      "examples": [
        {
          "input": "5",
          "output": "10 20 30 40 50",
          "explanation": "第一行輸入數字5\n程式輸出數字序列10 20 30 40 50"
        },
        {
          "input": "7",
          "output": "10 20 30 40 50 60 70",
          "explanation": "第一行輸入數字7\n程式輸出數字序列10 20 30 40 50 60 70"
        }
      ],
      "testCases": [
        {
          "input": "1",
          "expectedOutput": "10",
          "score": 10
        },
        {
          "input": "4",
          "expectedOutput": "10 20 30 40",
          "score": 10
        },
        {
          "input": "10",
          "expectedOutput": "10 20 30 40 50 60 70 80 90 100",
          "score": 10
        },
        {
          "input": "3",
          "expectedOutput": "10 20 30",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "5-",
      "title": "5-存錢買裝備 (累加計算)",
      "difficulty": "L2",
      "description": "勇者想買一把傳說之劍。他決定實施一個存錢計畫：第 1 天存 1 元，第 2 天存 2 元，第 3 天存 3 元...以此類推，第 i 天就存 i 元。\n請問在第 N 天結束後，勇者總共存了多少錢？\n輸入格式\n第一行：輸入一個整數 N ，代表存錢的天數。\n輸出一個整數，代表從第 1 天到第 N 天存下的金額總和（Sum）。\n(提示：你需要一個變數來當作「存錢筒」，在迴圈中把每天的錢加進去)。",
      "examples": [
        {
          "input": "3",
          "output": "6",
          "explanation": "第一行輸入數字3\n1+2+3=6，程式輸出6"
        },
        {
          "input": "7",
          "output": "28",
          "explanation": "第一行輸入數字7\n1+2+3+4+5+6+7=28，程式輸出28"
        }
      ],
      "testCases": [
        {
          "input": "9",
          "expectedOutput": "45",
          "score": 10
        },
        {
          "input": "20",
          "expectedOutput": "210",
          "score": 10
        },
        {
          "input": "10",
          "expectedOutput": "55",
          "score": 10
        },
        {
          "input": "100",
          "expectedOutput": "5050",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "6-",
      "title": "6-萬能傳送門 (自訂起始、結束與間隔)",
      "difficulty": "L2",
      "description": "勇者發現了一個萬能傳送門。這個傳送門可以讓勇者自由設定「起點」、「終點」以及每次傳送的「跨度（距離）」。 請設計一個程式，讀取三個數字，分別代表：起點 (Start)、終點 (End)、跨度 (Step)。 請依序印出傳送過程中經過的所有座標點。\n輸入格式\n第一行：輸入一個整數 M ，代表起點。\n第二行：輸入一個整數 N ，代表終點。\n第三行：輸入一個整數 O ，代表跨度。\n(N>M，O>0)。\n輸出從起點開始，每次增加跨度，直到超過終點為止的所有數字。",
      "examples": [
        {
          "input": "2\n10\n2",
          "output": "2 4 6 8 10",
          "explanation": "第一行輸入數字2，代表起點2\n第二行輸入數字10，代表終點10\n第三行輸入數字2，代表每次增加2\n程式輸出每一個經過的座標：2 4 6 8 10"
        },
        {
          "input": "5\n15\n3",
          "output": "5 8 11 14",
          "explanation": "第一行輸入數字5，代表起點5\n第二行輸入數字15，代表終點15\n第三行輸入數字3，代表每次增加3\n程式輸出每一個經過的座標：5 8 11 14，下一個是17，超過15不輸出"
        }
      ],
      "testCases": [
        {
          "input": "1\n5\n1",
          "expectedOutput": "1 2 3 4 5",
          "score": 10
        },
        {
          "input": "0\n10\n5",
          "expectedOutput": "0 5 10",
          "score": 10
        },
        {
          "input": "10\n20\n2",
          "expectedOutput": "10 12 14 16 18 20",
          "score": 10
        },
        {
          "input": "1\n10\n3",
          "expectedOutput": "1 4 7 10",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "7-",
      "title": "7-寶箱獵人 (尋找倍數)",
      "difficulty": "L2",
      "description": "勇者來到了一條長長的藏寶走廊，走廊上的地磚編號從 1 到 N。藏寶圖上寫著：「只有編號是 $K$ 的倍數的地磚下藏有寶箱。」\n請你幫助勇者找出所有藏有寶箱的地磚編號。\n輸入格式\n第一行：輸入一個整數 M ，第一個數字M代表地磚總數，\n第二行：輸入一個整數 N ，第二個數字N代表倍數，M大於等於N(M>=N)。\n輸出從 1 到 M 之間，所有 N 的倍數。\n數字之間以空白隔開。\n(提示：想一想，迴圈的「間隔 (Step)」應該設為多少？起點應該是 1 還是 K？)",
      "examples": [
        {
          "input": "10\n3",
          "output": "3 6 9",
          "explanation": "第一行輸入數字10，代表統計範圍從1到10\n第二行輸入數字3，代表要找出小於等於10且為3的倍數\n程式輸出：3 6 9"
        },
        {
          "input": "20\n5",
          "output": "5 10 15 20",
          "explanation": "第一行輸入數字20，代表統計範圍從1到20\n第二行輸入數字5，代表要找出小於等於20且為5的倍數\n程式輸出：5 10 15 20"
        }
      ],
      "testCases": [
        {
          "input": "5\n2",
          "expectedOutput": "2 4",
          "score": 10
        },
        {
          "input": "15\n4",
          "expectedOutput": "4 8 12",
          "score": 10
        },
        {
          "input": "7\n7",
          "expectedOutput": "7",
          "score": 10
        },
        {
          "input": "20\n6",
          "expectedOutput": "6 12 18",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "8-",
      "title": "8-防禦工事 (平方數列)",
      "difficulty": "L1",
      "description": "為了抵禦怪獸，勇者需要建造正方形的防禦陣型。國王要求勇者展示不同規模的陣型人數。\n當邊長為 i 時，需要的人數就是 i * i。\n請輸入一個數字 N，依序列出邊長從 1 到 N 的正方形陣型各需要多少人。\n輸入格式\n第一行：輸入一個整數 N ，代表最大邊長\n程式依序輸出從 1 到 N 之間的平方數(1*1 2*2...N*N)\n數字之間以空白隔開。",
      "examples": [
        {
          "input": "3",
          "output": "1 4 9",
          "explanation": "第一行輸入數字3，代表最大邊長3\n程式輸出平方數序列：1 4 9"
        },
        {
          "input": "5",
          "output": "1 4 9 16 25",
          "explanation": "第一行輸入數字5，代表最大邊長5\n程式輸出平方數序列：1 4 9 16 25"
        }
      ],
      "testCases": [
        {
          "input": "1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "6",
          "expectedOutput": "1 4 9 16 25 36",
          "score": 10
        },
        {
          "input": "7",
          "expectedOutput": "1 4 9 16 25 36 49",
          "score": 10
        },
        {
          "input": "9",
          "expectedOutput": "1 4 9 16 25 36 49 64 81",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "9-",
      "title": "9-偶數日的存款 (條件累加)",
      "difficulty": "L2",
      "description": "勇者改變了存錢計畫，他決定「只在偶數日存錢」。\n在第 2 天存 2 元，第 4 天存 4 元，第 6 天存 6 元...以此類推。奇數天（1, 3, 5...）則不存錢。\n請問到了第 N 天結束(N>1)，勇者總共存了多少錢？\n輸入格式\n第一行：輸入一個整數 N\n程式輸出從 1 到 N 之間所有偶數的總和。",
      "examples": [
        {
          "input": "4",
          "output": "6",
          "explanation": "第一行輸入數字4\n程式輸出偶數和：2+4=6"
        },
        {
          "input": "7",
          "output": "12",
          "explanation": "第一行輸入數字7\n程式輸出偶數和：2+4+6=12"
        }
      ],
      "testCases": [
        {
          "input": "4",
          "expectedOutput": "6",
          "score": 10
        },
        {
          "input": "9",
          "expectedOutput": "20",
          "score": 10
        },
        {
          "input": "7",
          "expectedOutput": "12",
          "score": 10
        },
        {
          "input": "15",
          "expectedOutput": "56",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "10-_-",
      "title": "10-能量水晶融合 (連乘積/階乘)",
      "difficulty": "L2",
      "description": "勇者正在合成一顆能量水晶。這顆水晶的能量是不斷相乘的！\n第 1 階段能量為 1。\n第 2 階段能量變成 1 * 2。\n第 3 階段能量變成 1 * 2 * 3。\n請問到了第 N 階段，能量總共有多少？\n輸入格式\n第一行：輸入一個整數 N\n程式輸出 1*2*3*4...*N 之值。",
      "examples": [
        {
          "input": "4",
          "output": "24",
          "explanation": "第一行輸入數字4\n程式輸出N 階段能量：1*2*3*4=24"
        },
        {
          "input": "6",
          "output": "720",
          "explanation": "第一行輸入數字6\n程式輸出N 階段能量：1*2*3*4*5*6=720"
        }
      ],
      "testCases": [
        {
          "input": "1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "9",
          "expectedOutput": "362880",
          "score": 10
        },
        {
          "input": "7",
          "expectedOutput": "5040",
          "score": 10
        },
        {
          "input": "3",
          "expectedOutput": "6",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "11-",
      "title": "11-修復斷橋 (區間累加)",
      "difficulty": "L2",
      "description": "勇者需要修復一座斷掉的橋。橋的每一段需要的木材數量等於該段的編號。\n現在只需修復從編號M到編號N的這一段區間。\n請計算修復這段區間總共需要多少木材？(即計算M+(M+1)+...+N的總和)。\n輸入格式\n第一行：輸入一個整數M\n第二行：輸入一個整數N\n程式輸出 M加到N 之值。",
      "examples": [
        {
          "input": "3\n5",
          "output": "12",
          "explanation": "第一行輸入數字3\n第二行輸入數字5\n程式輸出3+4+5=12"
        },
        {
          "input": "1\n4",
          "output": "10",
          "explanation": "第一行輸入數字1\n第二行輸入數字4\n程式輸出1+2+3+4=10"
        }
      ],
      "testCases": [
        {
          "input": "5\n10",
          "expectedOutput": "45",
          "score": 10
        },
        {
          "input": "20\n30",
          "expectedOutput": "275",
          "score": 10
        },
        {
          "input": "1\n1",
          "expectedOutput": "1",
          "score": 10
        },
        {
          "input": "50\n55",
          "expectedOutput": "315",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "12-_-",
      "title": "12-登山冒險 (雙向序列-複合邏輯)",
      "difficulty": "L3",
      "description": "這是一題大魔王關卡！勇者要爬一座高山，然後再下山。\n這座山的高度是 N。勇者必須從 1 爬到 N，到達山頂後，再從 N-1 走回 1。\n請依序列出勇者經過的高度。\n輸入格式\n第一行：輸入一個整數N\n程式輸出一個序列：1 2 3 ...N N-1 ...1。\n序列數字以空白間隔",
      "examples": [
        {
          "input": "5",
          "output": "1 2 3 4 5 4 3 2 1",
          "explanation": "第一行輸入數字5\n程式輸出1 2 3 4 5 4 3 2 1"
        },
        {
          "input": "4",
          "output": "1 2 3 4 3 2 1",
          "explanation": "第一行輸入數字4\n程式輸出1 2 3 4 3 2 1"
        }
      ],
      "testCases": [
        {
          "input": "10",
          "expectedOutput": "1 2 3 4 5 6 7 8 9 10 9 8 7 6 5 4 3 2 1",
          "score": 10
        },
        {
          "input": "8",
          "expectedOutput": "1 2 3 4 5 6 7 8 7 6 5 4 3 2 1",
          "score": 10
        },
        {
          "input": "5",
          "expectedOutput": "1 2 3 4 5 4 3 2 1",
          "score": 10
        },
        {
          "input": "2",
          "expectedOutput": "1 2 1",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "13-",
      "title": "13-勇者的背包 (清單讀取)",
      "difficulty": "L1",
      "description": "勇者準備出發了，他把所有的道具都放入了神奇背包（清單）中。 為了確認東西沒帶錯，勇者需要依照順序把背包裡的東西拿出來檢查一遍。 請你設計一個程式，將清單中的物品編號依序印出來。\n輸入格式\n第一行：輸入一個整數 N ，代表背包裡有幾樣物品。\n第二行有 N 個整數，代表物品的編號，中間以空白隔開。\n程式依序輸出清單中的每一個數字\n數字之間以空白隔開。",
      "examples": [
        {
          "input": "3\n101 102 103",
          "output": "101 102 103",
          "explanation": "第一行輸入數字3，代表3樣物品\n第二行有3個整數代表物品的編號輸入，中間以空白隔開\n程式依序輸出每個物品編號：101 102 103"
        },
        {
          "input": "5\n5 4 3 2 1",
          "output": "5 4 3 2 1",
          "explanation": "第一行輸入數字5，代表5樣物品\n第二行有5個整數代表物品的編號輸入，中間以空白隔開\n程式依序輸出每個物品編號：5 4 3 2 1"
        }
      ],
      "testCases": [
        {
          "input": "1\n99",
          "expectedOutput": "99",
          "score": 10
        },
        {
          "input": "3\n1 5 9",
          "expectedOutput": "1 5 9",
          "score": 10
        },
        {
          "input": "6\n2 4 6 8 10 12",
          "expectedOutput": "2 4 6 8 10 12",
          "score": 10
        },
        {
          "input": "9\n1 4 9 16 25 36 49 64 81",
          "expectedOutput": "1 4 9 16 25 36 49 64 81",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "14-",
      "title": "14-戰利品清點 (清單加總)",
      "difficulty": "L2",
      "description": "勇者打敗了一群史萊姆，每隻史萊姆身上掉落的金幣數量都不一樣。 助手已經把每隻史萊姆掉落的金幣數量記在清單上了。 請你幫勇者算算看，這次戰鬥總共獲得了多少金幣？\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表有幾筆金幣資料。\n第二行輸入 N 個整數，代表每一筆金幣的金額。數字之間以空白隔開。\n程式輸出清單中所有數字的總和。",
      "examples": [
        {
          "input": "3\n10 20 30",
          "output": "60",
          "explanation": "第一行輸入數字3，代表3筆金幣資料\n第二行有3筆整數代表金幣數量輸入，10 20 30，中間以空白隔開\n程式輸出金幣總和：60"
        },
        {
          "input": "5\n5 4 3 2 1",
          "output": "15",
          "explanation": "第一行輸入數字5，代表5筆金幣資料\n第二行有3筆整數代表金幣數量輸入，5 4 3 2 1，中間以空白隔開\n程式輸出金幣總和：15"
        }
      ],
      "testCases": [
        {
          "input": "1\n99",
          "expectedOutput": "99",
          "score": 10
        },
        {
          "input": "3\n1 5 9",
          "expectedOutput": "15",
          "score": 10
        },
        {
          "input": "6\n2 4 6 8 10 12",
          "expectedOutput": "42",
          "score": 10
        },
        {
          "input": "9\n1 1 1 1 1 1 1 1 1",
          "expectedOutput": "9",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "15-",
      "title": "15-尋找戰鬥力最高的魔王 (清單搜尋最大值)",
      "difficulty": "L2",
      "description": "偵查兵帶回了一份情報，上面記錄了前方 N 隻怪物的戰鬥力數值。\n勇者想要先挑戰最強的那一隻！\n請你找出這份清單中，數值最大的那個數字是多少。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表怪物數量。\n第二行輸入 N 個整數，代表每隻怪物的戰鬥力。數字之間以空白隔開。\n程式輸出清單中的最大值。\n(提示：設一個變數叫 Max，先假設第一隻是最大的，然後用迴圈跟後面的一一比對，如果發現比 Max 大的，就更新 Max)",
      "examples": [
        {
          "input": "3\n10 20 30",
          "output": "30",
          "explanation": "第一行輸入數字3，代表3筆怪物資料\n第二行有3筆整數怪物資料，10 20 30，中間以空白隔開\n程式輸出怪物最大戰鬥力：30"
        },
        {
          "input": "5\n5 4 3 2 1",
          "output": "5",
          "explanation": "第一行輸入數字5，代表5筆怪物資料\n第二行有5筆整數怪物資料，5 4 3 2 1，中間以空白隔開\n程式輸出怪物最大戰鬥力：5"
        }
      ],
      "testCases": [
        {
          "input": "1\n99",
          "expectedOutput": "99",
          "score": 10
        },
        {
          "input": "6\n7 7 7 7 9 7",
          "expectedOutput": "9",
          "score": 10
        },
        {
          "input": "4\n33 22 44 11",
          "expectedOutput": "44",
          "score": 10
        },
        {
          "input": "5\n25 45 95 12 55",
          "expectedOutput": "95",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "16-",
      "title": "16-合格的裝備 (清單篩選)",
      "difficulty": "L3",
      "description": "勇者的負重能力有限，他只能攜帶重量「小於 10」的輕型裝備。 現在清單中有一堆裝備的重量，請你利用迴圈檢查每一個裝備，只把重量小於 10 的裝備重量印出來。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表裝備數量。\n第二行輸入 N 個整數，代表每個裝備重量。\n程式依序輸出小於 10 的數字，中間以空白隔開。\n如果都沒有小於 10 的數字，則什麼都不輸出。",
      "examples": [
        {
          "input": "5\n15 5 20 8 3",
          "output": "5 8 3",
          "explanation": "第一行輸入數字5，代表5筆裝備資料\n第二行有5筆整數裝備資料，15 5 20 8 3\n程式依序輸出小於10裝備重量：5 8 3"
        },
        {
          "input": "3\n12 15 20",
          "output": "",
          "explanation": "第一行輸入數字3，代表3筆裝備資料\n第二行有3筆整數裝備資料，12 15 20\n沒有小於10裝備輸出為空："
        }
      ],
      "testCases": [
        {
          "input": "3\n1 2 3",
          "expectedOutput": "1 2 3",
          "score": 10
        },
        {
          "input": "6\n7 15 7 24 9 7",
          "expectedOutput": "7 7 9 7",
          "score": 10
        },
        {
          "input": "4\n33 5 44 11",
          "expectedOutput": "5",
          "score": 10
        },
        {
          "input": "5\n3 8 11 69 77",
          "expectedOutput": "3 8",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "17-",
      "title": "17-倒轉時光 (反向遍歷清單)",
      "difficulty": "L2",
      "description": "勇者獲得了一個「時光倒流」的魔法卷軸。這個卷軸上有一串數字密碼，但是必須從最後一個數字讀回到第一個數字，魔法才能生效。 請讀取一個清單，並將清單內的數字「由後往前」印出來。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表密碼長度。\n第二行輸入 N 個整數，代表N個數字的密碼組合。\n程式反序輸 N 筆密碼數字資料，中間以空白間隔\n(提示：循環計數迴圈起點設為清單長度，終點設為 1，間隔設為 -1)",
      "examples": [
        {
          "input": "4\n10 20 30 40",
          "output": "40 30 20 10",
          "explanation": "第一行輸入數字4，代表密碼有4筆資料\n第二行有4筆整數資料，10 20 30 40\n程式反敘輸出密碼資料：40 30 20 10"
        },
        {
          "input": "3\n1 2 3",
          "output": "3 2 1",
          "explanation": "第一行輸入數字3，代表密碼有3筆資料\n第二行有3筆整數資料，1 2 3\n程式反序輸出密碼資料：3 2 1"
        }
      ],
      "testCases": [
        {
          "input": "2\n100 20",
          "expectedOutput": "20 100",
          "score": 10
        },
        {
          "input": "4\n7 7 9 7",
          "expectedOutput": "7 9 7 7",
          "score": 10
        },
        {
          "input": "5\n1 2 3 4 5",
          "expectedOutput": "5 4 3 2 1",
          "score": 10
        },
        {
          "input": "4\n0 1 0 1",
          "expectedOutput": "1 0 1 0",
          "score": 10
        }
      ],
      "starterXml": ""
    },
    {
      "id": "18-",
      "title": "18-冒險日誌 (索引與數值的對應)",
      "difficulty": "L2",
      "description": "勇者寫了 N 天的冒險日誌，清單中依序記錄了每天打倒的怪物數量。\n例如清單的第一個數字是第 1 天打倒的數量，第二個數字是第 2 天的...\n請你格式化輸出每天的戰績，格式為：Day-[第幾天]-[數量]。\n輸入格式\n輸入共有兩行。第一行是一個整數 N，代表天數。\n第二行輸入 N 個整數，代表每天怪物的數量。\n程式依序輸出 N 天資料，每天格式為 Day-i-數量 不同天中間以空白間隔。",
      "examples": [
        {
          "input": "2\n15 5",
          "output": "Day-1-15 Day-2-5",
          "explanation": "第一行輸入數字2，代表有2天資料\n第二行有2筆整數資料，15 5\n程式依序輸出所有天數資料：Day-1-15 Day-2-5"
        },
        {
          "input": "3\n12 15 20",
          "output": "Day-1-12 Day-2-15 Day-3-20",
          "explanation": "第一行輸入數字3，代表有3天資料\n第二行有3筆整數資料，12 15 20\n程式依序輸出所有天數資料：Day-1-12 Day-2-15 Day-3-20"
        }
      ],
      "testCases": [
        {
          "input": "1\n100",
          "expectedOutput": "Day-1-100",
          "score": 10
        },
        {
          "input": "4\n7 7 9 7",
          "expectedOutput": "Day-1-7 Day-2-7 Day-3-9 Day-4-7",
          "score": 10
        },
        {
          "input": "4\n33 22 44 11",
          "expectedOutput": "Day-1-33 Day-2-22 Day-3-44 Day-4-11",
          "score": 10
        },
        {
          "input": "3\n25 2 3",
          "expectedOutput": "Day-1-25 Day-2-2 Day-3-3",
          "score": 10
        }
      ],
      "starterXml": ""
    }
  ]
};
