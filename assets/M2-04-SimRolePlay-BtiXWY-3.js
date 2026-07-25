var e={code:`M2-04-SimRolePlay`,title:`模擬與狀態挑戰A：角色扮演系列`,type:`programming`,mode:`learning`,tier:`t2`,tasks:[{id:`cycelement-006`,title:`1-寶可夢訓練師-1`,description:`你是一位剛成為寶可夢訓練師的新手，正在整理你抓到的寶可夢資料。
你想設計一個程式，幫助你分析寶可夢的資料。

【子題一：計算寶可夢的平均等級】

請設計一個程式，輸入多隻寶可夢的等級，
計算並輸出牠們的平均等級（無條件捨去至整數）。

• 第一行輸入一個整數 N，代表寶可夢的數量（1 ≤ N ≤ 20）。

• 第二行輸入 N 個整數，分別代表每隻寶可夢的等級（1 ≤ 等級 ≤ 100）。

• 輸出一個整數，代表所有寶可夢等級的平均值（無條件捨去）。`,inputDescription:``,outputDescription:``,examples:[{input:`4
10 20 30 40`,output:`25`,explanation:`輸入 4 隻寶可夢，等級為 10、20、30、40。
平均值 = (10+20+30+40) ÷ 4 = 25。`},{input:`3
7 8 10`,output:`8`,explanation:`輸入 3 隻寶可夢，等級為7、8、10。
平均值 = 25 ÷ 3 = 8.33，無條件捨去後為 8。`}],testCases:[{input:`1
50`,expectedOutput:`50`,output:`50`,score:10},{input:`3
10 20 30`,expectedOutput:`20`,output:`20`,score:15},{input:`4
7 8 9 10`,expectedOutput:`8`,output:`8`,score:20},{input:`5
1 100 100 100 100`,expectedOutput:`80`,output:`80`,score:25},{input:`20
10 10 10 10 10 10 10 10 10 10 20 20 20 20 20 20 20 20 20 20`,expectedOutput:`15`,output:`15`,score:30}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`cycelement-006-2-寶可夢訓練師-2`,title:`2-寶可夢訓練師-2`,description:`子題二：最高等級的寶可夢
請設計一個程式，輸入多隻寶可夢的名稱與等級，找出等級最高的寶可夢名稱。
（本題保證不會有等級相同的情況，寶可夢名稱不包含空白字元）
【輸入說明】
• 第一行輸入一個整數 N，代表寶可夢的數量（1 ≤ N ≤ 20）。
• 第二行輸入 2N 筆資料，依序為「寶可夢名稱 等級」，資料之間以一個半形空格分隔。
【輸出說明】
• 輸出一行，所有寶可夢的最高等級。`,inputDescription:`• 第一行輸入一個整數 N，代表寶可夢的數量（1 ≤ N ≤ 20）。

• 第二行輸入 2N 筆資料，依序為「寶可夢名稱 等級」，資料之間以一個半形空格分隔。`,outputDescription:`• 輸出一行，所有寶可夢的最高等級。`,examples:[{input:`3
皮卡丘 25 小火龍 12 妙蛙種子 18`,output:`25`,explanation:`共有 3 隻寶可夢，等級最高的是皮卡丘（25）。`},{input:`4
傑尼龜 10 伊布 15 卡比獸 35 胖丁 20`,output:`35`,explanation:`共有 4 隻寶可夢，卡比獸等級最高（35）。`}],testCases:[{input:`1
皮卡丘 10`,expectedOutput:`10`,output:`10`,score:10},{input:`3
小火龍 12 妙蛙種子 18 傑尼龜 15`,expectedOutput:`18`,output:`18`,score:15},{input:`4
A 5 B 20 C 15 D 8`,expectedOutput:`20`,output:`20`,score:20},{input:`5
皮卡丘 22 伊布 30 卡比獸 28 超夢 100 胖丁 18`,expectedOutput:`100`,output:`100`,score:25},{input:`6
P1 3 P2 6 P3 9 P4 12 P5 15 P6 18`,expectedOutput:`18`,output:`18`,score:30}],difficulty:`L2`,difficultyLabel:`L2｜進階`,starterXml:``},{id:`115J-03`,title:`闖關遊戲`,description:`園遊會中有個闖關遊戲：有 12 個小房間依編號（1 到 12）順時鐘圍成一圈。
闖關時須依給定的條件正確進出不同的房間，若進入錯誤房間即闖關失敗。每個房間內有個螢幕會顯示一個介於 -3 到 +3 的數字。闖關遊戲有三組起始設定：A、B、C，每一組的房間（1號到12號）螢幕數字起始設定如下：
• A 組：+1, +2, +3, -1, -2, -3, +1, +2, +3, -3, -2, -1
• B 組：-2, -2, -3, -2, -2, -3, -2, -2, -3, -2, -2, -3
• C 組：+1, +2, -1, 0, +1, -2, +2, +1, -1, +2, -2, 0
【闖關遊戲進行方式】
1. 電腦會給定一組起始設定（A、B 或 C），並給定第一個進入的房間編號。
2. 若該房間螢幕數字是正值（+i），就要前往「順時針」方向的第 i 個房間；若為負值（-i），就要前往「逆時針」方向的第 i 個房間。
3. 終止條件：若進入的房間螢幕數字是 0，或者「已累計進入正確房間共 11 次」，則闖關成功，遊戲結束。
4. 狀態更新：每次離開一個房間後，該房間螢幕上的數字就會「正負交換」，也就是 +i 變 -i，或 -i 變 +i。
請寫一個程式，依序輸出闖關過程中所進入的房間編號，直到闖關成功。
【輸入說明】
• 輸入為單行，包含一個大寫英文字母（A、B 或 C）與一個整數 N（1 ≤ N ≤ 12），分別代表「起始設定組別」與「第一個進入的房間編號」，兩者以單一空白隔開。
【輸出說明】
• 請依序輸出進入的房間編號（包含第一個進入的房間），數字之間以單一空白隔開。`,inputDescription:`• 輸入為單行，包含一個大寫英文字母（A、B 或 C）與一個整數 N（1 ≤ N ≤ 12），分別代表「起始設定組別」與「第一個進入的房間編號」，兩者以單一空白隔開。`,outputDescription:`• 請依序輸出進入的房間編號（包含第一個進入的房間），數字之間以單一空白隔開。`,examples:[{input:`A 2`,output:`2 4 3 6 3 12 11 9 12 1 2`,explanation:`2 號房數字為 +2，前往 4 號房（2 號房變為 -2）；
4 號房數字為 -1，前往 3 號房（4 號房變為 +1）；
依此類推，進入 11 個房間後達到終止條件，闖關成功。`},{input:`B 12`,output:`12 9 6 3 12 3 6 9 12 9 6`,explanation:`依據規則走訪。已累計進入房間共 11 次，達到終止條件，闖關成功。`},{input:`C 5`,output:`5 6 4`,explanation:`依序進入 5, 6, 4 三個房間。
進入 4 號房間時螢幕數字為 0，達到終止條件，闖關成功。`}],testCases:[{input:`A 2`,expectedOutput:`2 4 3 6 3 12 11 9 12 1 2`,output:`2 4 3 6 3 12 11 9 12 1 2`,score:10},{input:`B 12`,expectedOutput:`12 9 6 3 12 3 6 9 12 9 6`,output:`12 9 6 3 12 3 6 9 12 9 6`,score:10},{input:`C 5`,expectedOutput:`5 6 4`,output:`5 6 4`,score:10},{input:`C 1`,expectedOutput:`1 2 4`,output:`1 2 4`,score:10},{input:`A 1`,expectedOutput:`1 2 4 3 6 3 12 11 9 12 1`,output:`1 2 4 3 6 3 12 11 9 12 1`,score:10},{input:`B 1`,expectedOutput:`1 11 9 6 3 12 9 12 3 6 9`,output:`1 11 9 6 3 12 9 12 3 6 9`,score:10},{input:`C 7`,expectedOutput:`7 9 8 9 10 12`,output:`7 9 8 9 10 12`,score:10},{input:`C 11`,expectedOutput:`11 9 8 9 10 12`,output:`11 9 8 9 10 12`,score:10},{input:`A 6`,expectedOutput:`6 3 6 9 12 11 9 6 3 12 1`,output:`6 3 6 9 12 11 9 6 3 12 1`,score:10},{input:`C 2`,expectedOutput:`2 4`,output:`2 4`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`cycelement-006-3-寶可夢訓練師-3`,title:`3-寶可夢訓練師-3`,description:`子題三：列出平均等級以上的寶可夢

請綜合前面的概念，輸入寶可夢名稱與等級，計算平均等級後，輸出等級高於平均值的寶可夢名稱。

第一行輸入整數 N，代表寶可夢數量。

第二行輸入 N 個寶可夢名稱及等級資料，名稱及等級以空白間隔，每筆資料也以空白間隔。

程式依照輸入出現順序，輸出所有等級高於平均值的寶可夢名稱。`,inputDescription:``,outputDescription:``,examples:[{input:`3
皮卡丘 25 小火龍 12 妙蛙種子 18`,output:`皮卡丘`,explanation:`第一行輸入 3，表示有 3 組寶可夢名稱及等級資料輸入。
第二行輸入三組寶可夢名稱及等級數據，前面是名稱，後面是等級，三組連續輸入，中間皆以空白間隔。
程式依序輸出高於平均等級的寶可夢：皮卡丘。`},{input:`4
傑尼龜 10 伊布 15 卡比獸 20 胖丁 20`,output:`卡比獸 胖丁`,explanation:`第一行輸入 4，表示有 4 組寶可夢名稱及等級資料輸入。
第二行輸入四組寶可夢名稱及等級數據，前面是名稱，後面是等級，四組連續輸入，中間皆以空白間隔。
程式依序輸出高於平均等級的寶可夢：卡比獸 胖丁。`}],testCases:[{input:`1
皮卡丘 10`,expectedOutput:``,output:``,score:10},{input:`5
伊布 15 胖丁 15 乘龍 10 卡比獸 20 妙蛙種子 15`,expectedOutput:`卡比獸`,output:`卡比獸`,score:15},{input:`4
妙蛙種子 30 皮卡丘 30 小火龍 30 傑尼龜 30`,expectedOutput:``,output:``,score:20},{input:`6
小火龍 100 皮卡丘 0 伊布 50 卡比獸 50 胖丁 50 超夢 100`,expectedOutput:`小火龍 超夢`,output:`小火龍 超夢`,score:25},{input:`8
皮卡丘 25 皮卡丘 30 妙蛙種子 18 小火龍 12 傑尼龜 40 伊布 35 卡比獸 28 胖丁 28`,expectedOutput:`皮卡丘 傑尼龜 伊布 卡比獸 胖丁`,output:`皮卡丘 傑尼龜 伊布 卡比獸 胖丁`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`cycelement-006-4-寶可夢訓練師-4`,title:`4-寶可夢訓練師-4`,description:`子題四：統計不同屬性寶可夢的數量

請設計一個程式，輸入多隻寶可夢的屬性，輸出各屬性寶可夢的數量統計結果。

第一行輸入整數 N，代表寶可夢數量。

第二行輸入 N 個寶可夢屬性名稱，每筆資料以空白間隔。

程式需依照「屬性第一次出現的順序」，輸出每個屬性與該屬性寶可夢數量，格式為「屬性 數量」，屬性之間以一個空白隔開。

若屬性重複，只輸出一次。`,inputDescription:``,outputDescription:``,examples:[{input:`5
火 水 火 電 水`,output:`火2 水2 電1`,explanation:`第一行輸入5，表示有5隻寶可夢。
第二行依序輸入屬性：火 水 火 電 水。
依照首次出現順序統計後輸出：火2 水2 電1。`},{input:`4
草 草 毒 草`,output:`草3 毒1`,explanation:`第一行輸入4，表示有4隻寶可夢。
第二行輸入屬性：草 草 毒 草。
輸出結果為：草3 毒1。`}],testCases:[{input:`9
火 水 火 電 水 草 草 毒 草`,expectedOutput:`火2 水2 電1 草3 毒1`,output:`火2 水2 電1 草3 毒1`,score:10},{input:`8
水 火 電 水 草 水 電 草`,expectedOutput:`水3 火1 電2 草2`,output:`水3 火1 電2 草2`,score:15},{input:`1
草`,expectedOutput:`草1`,output:`草1`,score:20},{input:`5
水 水 水 水 水`,expectedOutput:`水5`,output:`水5`,score:25},{input:`6
電 火 草 電 火 水`,expectedOutput:`電2 火2 草1 水1`,output:`電2 火2 草1 水1`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`cycjunior-006`,title:`1-園遊會攤位熱度分析`,description:`園遊會地圖由「路口」和「走道」組成。學生會想知道哪個路口連接了最多條走道（最熱門交會點），以便安排引導人員。
1. 給定路口數 N 與走道數 E。
2. 統計每個路口連接的走道數量（分支量）。
3. 輸出連接數最多的路口編號（若數量相同，輸出編號較小的）。
輸入格式：
第一行：整數 N (路口數)。
第二行：整數 E (走道數)。
第三行：E 個整數，代表每條走道的一端（起點列表）。
第四行：E 個整數，代表每條走道的另一端（終點列表）。
(說明：第三行的第 i 個數字與第四行的第 i 個數字代表一條連接的走道。例如：第三行是 1 2 3，第四行是 2 3 4，代表連接為 1-2、2-3、3-4)
輸出格式：
一個整數 (最熱門路口編號)。`,inputDescription:`第一行：整數 N (路口數)。

第二行：整數 E (走道數)。

第三行：E 個整數，代表每條走道的一端（起點列表）。

第四行：E 個整數，代表每條走道的另一端（終點列表）。

(說明：第三行的第 i 個數字與第四行的第 i 個數字代表一條連接的走道。例如：第三行是 1 2 3，第四行是 2 3 4，代表連接為 1-2、2-3、3-4)`,outputDescription:`一個整數 (最熱門路口編號)。`,examples:[{input:`3
2
1 1
2 3`,output:`1`,explanation:`走道: (1-2), (1-3)。
路口1：連了2條通道，(1-2), (1-3)
路口2：連了1條通道，(1-2)
路口3：連了1條通道， (1-3)
由上可知 路口1 較熱門，輸出 1`},{input:`4
3
1 2 3
2 3 4`,output:`2`,explanation:`連線: (1-2), (2-3), (3-4)。
路口2和3都連了2條，輸出較小的 2。`}],testCases:[{input:`3
2
1 2
2 3`,expectedOutput:`2`,output:`2`,score:10},{input:`4
3
1 1 1
2 3 4`,expectedOutput:`1`,output:`1`,score:15},{input:`5
4
1 2 3 4
2 3 4 5`,expectedOutput:`2`,output:`2`,score:20},{input:`5
5
1 2 3 4 5
2 3 4 5 1`,expectedOutput:`1`,output:`1`,score:25},{input:`6
4
1 3 4 6
2 2 5 5`,expectedOutput:`2`,output:`2`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`cycjunior-006-2-園遊會尋找幸運抽獎號`,title:`2-園遊會尋找幸運抽獎號`,description:`園遊會中最熱門的攤位是「幸運跳格子」挑戰賽。地上畫了一排共有 N 格的格子（編號從 1 到 N）。 為了增加遊戲的趣味性與挑戰性，主辦單位規定：參賽者從起點（第 0 格）出發，每次跳躍只能選擇「跳 1 格」或「跳 2 格」。
例如：要跳到第 3 格，可以有三種跳法：
1. 跳1格 → 跳1格 → 跳1格 (1, 1, 1)
2. 跳1格 → 跳2格 (1, 2)
3. 跳2格 → 跳1格 (2, 1)
學生會長想知道，如果要剛好停在第 N 格領取大獎，總共有多少種不同的跳法組合？
這正是經典的費氏數列問題，若剛好停在第 N 格可能的走法數為F(N)種，我們可觀察到
F(1)=1                ,停在第1格有1種走法
F(2)=2                ,停在第2格有2種走法
F(3)=F(2)+F(1)=1+2=3   ,停在第3格有3種走法
F(4)=F(3)+F(2)=3+2=5   ,停在第4格有5種走法
…
輸入格式：
一個整數 N，代表目標格子。
輸出格式：
一個整數，代表到達第 N 格的總跳法數。`,inputDescription:`一個整數 N，代表目標格子。`,outputDescription:`一個整數，代表到達第 N 格的總跳法數。`,examples:[{input:`3`,output:`3`,explanation:`共有3種跳法：
1. (1, 1, 1)
2. (1, 2)
3. (2, 1)`},{input:`4`,output:`5`,explanation:`共有5種跳法：
(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2)`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10},{input:`5`,expectedOutput:`8`,output:`8`,score:15},{input:`7`,expectedOutput:`21`,output:`21`,score:20},{input:`10`,expectedOutput:`89`,output:`89`,score:25},{input:`20`,expectedOutput:`10946`,output:`10946`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``},{id:`cycjunior-005`,title:`大風吹搶位子`,description:`隔宿露營的晚會高潮，班聯會設計了一個刺激的「電子傳球大風吹」遊戲。全班 N 位同學圍繞營火坐成一圈，每個人身上都有一個原本的號碼牌（從 1 號到 N 號）。遊戲開始時，音樂響起，一顆發光的電子球從 1 號同學手中開始順時針傳遞。這顆電子球設定了爆炸秒數，相當於傳遞 M 次。也就是說，從目前拿球的人開始算第 1 次，傳給下一位算第 2 次...一直數到第 M 個人，球就會變色發出「嗶！」的聲音，這時候持有球的那個人就被淘汰，必須立刻離開圓圈。被淘汰的人離開後，圓圈會縮小，球交給下一位還在圈子裡的同學，重新開始從 1 數到 M。遊戲持續進行，直到圓圈只剩下最後一位同學，該名同學就是今晚的「大風吹之王」。請設計一個程式，模擬這個過程，算出最後留下的那位同學原本的號碼是多少。
假設有 5 人參賽 (N=5)，編號為 1, 2, 3, 4, 5。每數到第 2 人 (M=2) 該員即淘汰。
第 1 輪：從 1 號開始數 (1, 2)，2 號淘汰。剩下：1, 3, 4, 5。
第 2 輪：從 3 號開始數 (3, 4)，4 號淘汰。剩下：1, 3, 5。
第 3 輪：從 5 號開始數 (5, 1)，因為繞回開頭，1 號淘汰。剩下：3, 5。
第 4 輪：從 3 號開始數 (3, 5)，5 號淘汰。剩下：3。
結果：最後贏家是 3 號。
輸入格式：
第一行：整數 N (人數)。
第二行：整數 M (間隔)。
輸出格式：
一個整數 (贏家編號)。。`,inputDescription:`第一行：整數 N (人數)。

第二行：整數 M (間隔)。`,outputDescription:`一個整數 (贏家編號)。。`,examples:[{input:`5
2`,output:`3`,explanation:`初始: 1 2 3 4 5
淘汰2 (剩 1 3 4 5)
淘汰4 (剩 1 3 5)
淘汰1 (剩 3 5)
淘汰5 (剩 3)`},{input:`4
1`,output:`4`,explanation:`初始: 1 2 3 4
淘汰1 (剩 2 3 4)
淘汰2 (剩 3 4)
淘汰3 (剩 4)`}],testCases:[{input:`3
1`,expectedOutput:`3`,output:`3`,score:10},{input:`4
2`,expectedOutput:`1`,output:`1`,score:15},{input:`5
3`,expectedOutput:`4`,output:`4`,score:20},{input:`7
4`,expectedOutput:`2`,output:`2`,score:25},{input:`10
3`,expectedOutput:`4`,output:`4`,score:30}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``},{id:`cycjunior-006-3-園遊會人潮高峰期`,title:`3-園遊會人潮高峰期`,description:`一年一度的校慶園遊會順利落幕了！今年學生會為了讓明年的活動辦得更好，決定用數據來說話。他們在校門口和各個攤位區安裝了「人流感測器」。感測器每隔一段時間（例如每 10 分鐘）就會記錄一次數據，這個數據稱為「人潮淨流量」：
•	如果是 正數 (例如 +50)：代表進來的人比出去的人多，人潮正在累積。
•	如果是 負數 (例如 -30)：代表離開的人比進來的人多，人潮正在消散。
學生會會長小華拿到了一長串的數據清單，他想要找出一段連續的時間區間，這段時間內的「淨流量總和」是最大的。這個最大的數值就代表了今年園遊會最「盛況空前」時累積的人氣指數。請注意，如果算出來的最大總和是負數（代表整場活動人都一直在變少，或是沒人來），為了報表好看，請直接將結果歸零，輸出 0。
請你幫忙寫一個程式，找出這個傳說中的「最大熱門指數」！
輸入格式：
第一行：一個整數 N代表總共記錄了 N 筆時段的數據。
第二行：N 個整數，依序代表第 1 個時段到第 N 個時段的人潮淨流量（有正有負）。
輸出格式：
第一行：一個整數 (最大和)。
特別規則：如果所有可能的區間總和都是負數，請輸出 0`,inputDescription:`第一行：一個整數 N代表總共記錄了 N 筆時段的數據。

第二行：N 個整數，依序代表第 1 個時段到第 N 個時段的人潮淨流量（有正有負）。`,outputDescription:`第一行：一個整數 (最大和)。
特別規則：如果所有可能的區間總和都是負數，請輸出 0`,examples:[{input:`3
-1 2 -1`,output:`2`,explanation:`可能組合及其和如下：
由第1個時段開始 -1,-1+2,-1+2-1
由第2個時段開始 2 ,2+(-1)
由第3個時段開始 -1
以上最大為 2`},{input:`4
-5 -2 -9 -1`,output:`0`,explanation:`所有人流皆為負成長，沒有人潮高峰，輸出 0。`}],testCases:[{input:`3
1 2 3`,expectedOutput:`6`,output:`6`,score:10},{input:`4
-1 -2 -3 -4`,expectedOutput:`0`,output:`0`,score:15},{input:`5
2 -1 2 -1 2`,expectedOutput:`4`,output:`4`,score:20},{input:`6
-2 5 -1 5 -10 2`,expectedOutput:`9`,output:`9`,score:25},{input:`5
10 -20 30 -5 10`,expectedOutput:`35`,output:`35`,score:30}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``},{id:`115J-04`,title:`火星探測車`,description:`火星探測車「玉山號」是一台專門執行火星上各種探測任務（如氣候觀測、岩石採樣等）的車輛，每個任務都有不同的「電力需求」與「科學價值」。
探測車出發執行任務前，都會先充滿電力至 100 單位。任務無法部分執行，且每個任務最多只能執行一次。請在電力可負擔的範圍內（總消耗電力 ≤ 100），幫玉山號挑選出能獲得最高總科學價值的任務組合。
請寫一個程式，計算探測車可獲得的最高總科學價值。
【輸入說明】
• 系統的第一個輸入為一個整數 N（1 ≤ N ≤ 20），代表共有 N 個探測任務可供選擇。
• 系統的第二個輸入包含 2N 個整數。每兩個整數為一組，依序代表第 1 個到第 N 個任務的「電力需求」與「科學價值」。
o 電力需求範圍：0 ≤ 電力 ≤ 200
o 科學價值範圍：0 ≤ 價值 ≤ 1,000
• 所有數字之間皆以單一空白隔開。
【輸出說明】
• 請輸出一個整數，代表探測車在 100 單位電力限制下，可獲得的最高總科學價值。`,inputDescription:`• 系統的第一個輸入為一個整數 N（1 ≤ N ≤ 20），代表共有 N 個探測任務可供選擇。

• 系統的第二個輸入包含 2N 個整數。每兩個整數為一組，依序代表第 1 個到第 N 個任務的「電力需求」與「科學價值」。

\xA0\xA0o 電力需求範圍：0 ≤ 電力 ≤ 200

\xA0\xA0o 科學價值範圍：0 ≤ 價值 ≤ 1,000

• 所有數字之間皆以單一空白隔開。`,outputDescription:`• 請輸出一個整數，代表探測車在 100 單位電力限制下，可獲得的最高總科學價值。`,examples:[{input:`3
20 50 40 60 30 70`,output:`180`,explanation:`100 單位的電力可以執行完所有任務（20+40+30 ≤ 100）。
最高總科學價值為 50+60+70 = 180。`},{input:`2
96 220 51 113`,output:`220`,explanation:`100 單位的電力無法兩個任務都執行。
只執行一個時，任務一可獲得較高的科學價值（220 > 113），因此最高總科學價值為 220。`},{input:`4
80 100 50 60 20 30 10 10`,output:`130`,explanation:`若執行任務一與任務三，所需電力 80+20 ≤ 100 單位，其總科學價值為 100+30 = 130。
此為最佳任務執行組合。`}],testCases:[{input:`3
20 50 40 60 30 70`,expectedOutput:`180`,output:`180`,score:10},{input:`2
96 220 51 113`,expectedOutput:`220`,output:`220`,score:10},{input:`4
80 100 50 60 20 30 10 10`,expectedOutput:`130`,output:`130`,score:10},{input:`3
60 70 50 50 50 50`,expectedOutput:`100`,output:`100`,score:10},{input:`4
0 100 120 500 50 60 50 60`,expectedOutput:`220`,output:`220`,score:10},{input:`5
20 30 20 30 20 30 20 30 20 30`,expectedOutput:`150`,output:`150`,score:10},{input:`6
10 15 15 20 25 35 30 40 40 50 50 60`,expectedOutput:`130`,output:`130`,score:10},{input:`4
25 40 25 40 25 40 25 40`,expectedOutput:`160`,output:`160`,score:10},{input:`1
100 999`,expectedOutput:`999`,output:`999`,score:10},{input:`8
15 20 15 20 15 20 15 20 15 20 15 20 15 20 15 20`,expectedOutput:`120`,output:`120`,score:10}],difficulty:`L5`,difficultyLabel:`L5｜競賽`,starterXml:``}]};export{e as default};