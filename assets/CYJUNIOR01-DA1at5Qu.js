var e={code:`CYJUNIOR01`,title:`114-嘉義市國中`,type:`programming`,mode:`learning`,description:``,source:{project:`YDWS-CodingBank`,generatedAt:`2026-08-01T13:28:18+08:00`,sourceCsv:`data\\problem_bank_master_complete.csv`,version:`PB05-4B`},tasks:[{id:`cyjunior-006`,title:`校園密室逃脫-書架的密碼(6-1)`,problemTitle:`校園密室逃脫-書架的密碼(6-1)`,courseCode:`CYJUNIOR01`,courseName:`114-嘉義市國中`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!1,description:`傳說在校園圖書館的深處，隱藏著一間百年前首任校長留下的「智慧密室」。今年校慶，學生會利用最新的 AR 技術重現了這個傳說，設計了四道關卡。只有解開所有謎題的小隊，才能獲得象徵最高榮譽的「智慧之鑰」。你的小隊現在正站在密室的入口。

第一道關卡是一扇巨大的電子鐵門。門鎖的螢幕上並沒有數字鍵盤，只有一串閃爍的、由 0 與 1 組成的符號序列。門邊的銘牌刻著一行字：「只有通曉機器語言的人，才能將二元的虛幻轉化為十進的真實。」這顯然是一個二進位轉十進位的謎題。請將螢幕上的二進位字串解碼為十進位數字，輸入系統以開啟大門。`,inputDescription:`第一行：一個字串 S（只包含 0 與 1）。`,outputDescription:`第一行：一個整數，代表轉換後的十進位數值。`,statement:{description:`傳說在校園圖書館的深處，隱藏著一間百年前首任校長留下的「智慧密室」。今年校慶，學生會利用最新的 AR 技術重現了這個傳說，設計了四道關卡。只有解開所有謎題的小隊，才能獲得象徵最高榮譽的「智慧之鑰」。你的小隊現在正站在密室的入口。

第一道關卡是一扇巨大的電子鐵門。門鎖的螢幕上並沒有數字鍵盤，只有一串閃爍的、由 0 與 1 組成的符號序列。門邊的銘牌刻著一行字：「只有通曉機器語言的人，才能將二元的虛幻轉化為十進的真實。」這顯然是一個二進位轉十進位的謎題。請將螢幕上的二進位字串解碼為十進位數字，輸入系統以開啟大門。`,input:`第一行：一個字串 S（只包含 0 與 1）。`,output:`第一行：一個整數，代表轉換後的十進位數值。`},examples:[{input:`101`,output:`5`,explanation:`1x4 + 0x2 + 1x1 = 5`},{input:`1111`,output:`15`,explanation:`8 + 4 + 2 + 1 = 15`}],testCases:[{input:`10`,expectedOutput:`2`,output:`2`,score:10,hidden:!1},{input:`110`,expectedOutput:`6`,output:`6`,score:15,hidden:!1},{input:`1000`,expectedOutput:`8`,output:`8`,score:20,hidden:!1},{input:`11011`,expectedOutput:`27`,output:`27`,score:25,hidden:!1},{input:`1111101000`,expectedOutput:`1000`,output:`1000`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`字串處理`],subConcepts:[`字元統計與格式判斷`],algorithm:[],dataStructure:[`字串`],syntax:[`字串`,`索引`,`len`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyjunior-005`,title:`變速傳球的特訓`,problemTitle:`變速傳球的特訓`,courseCode:`CYJUNIOR01`,courseName:`114-嘉義市國中`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!1,description:`康輔社為了訓練社員的反應速度，社長發明了一種忽快忽慢的「變速傳球」遊戲。N 位社員圍成一圈，編號依序為 1 到 N。遊戲從 1 號社員開始持球。遊戲總共進行 K 回合，每一回合的傳球距離取決於「目前持球者的編號」：如果目前持球者的編號是奇數：他必須向順時針方向傳 1 個人（傳給下一位）。如果目前持球者的編號是偶數：他必須向順時針方向傳 2 個人（跳過一位傳給下下位）。請注意，如果傳球後的位置超過了 N，就會回到 1 號繼續數（例如：在 5 人小組中，5 號傳 1 人會變成 1 號）。請你計算在經過 K回合的傳球後，最後球會落在幾號社員的手上？`,inputDescription:`第一行：一個整數 N，代表社員人數。

第二行：一個整數 K，代表總共進行的回合數。`,outputDescription:`第一行：一個整數，一個整數，代表最後拿到球的社員編號。`,statement:{description:`康輔社為了訓練社員的反應速度，社長發明了一種忽快忽慢的「變速傳球」遊戲。N 位社員圍成一圈，編號依序為 1 到 N。遊戲從 1 號社員開始持球。遊戲總共進行 K 回合，每一回合的傳球距離取決於「目前持球者的編號」：如果目前持球者的編號是奇數：他必須向順時針方向傳 1 個人（傳給下一位）。如果目前持球者的編號是偶數：他必須向順時針方向傳 2 個人（跳過一位傳給下下位）。請注意，如果傳球後的位置超過了 N，就會回到 1 號繼續數（例如：在 5 人小組中，5 號傳 1 人會變成 1 號）。請你計算在經過 K回合的傳球後，最後球會落在幾號社員的手上？`,input:`第一行：一個整數 N，代表社員人數。

第二行：一個整數 K，代表總共進行的回合數。`,output:`第一行：一個整數，一個整數，代表最後拿到球的社員編號。`},examples:[{input:`5
3`,output:`1`,explanation:`初始：在 1 號。
第1回：1號是奇數，傳1人-> 到 2 號。
第2回：2號是偶數，傳2人-> 到 4 號。
第3回：4號是偶數，傳2人-> 到 6 號(超過5回到1)。
結果：最後在 1 號。`},{input:`6
2`,output:`4`,explanation:`初始：在 1 號。
第1回：1號是奇數，傳1人-> 到 2 號。
第2回：2號是偶數，傳2人 -> 到 4 號。結果：最後在 4 號。`}],testCases:[{input:`3
1`,expectedOutput:`2`,output:`2`,score:10,hidden:!1},{input:`5
5`,expectedOutput:`4`,output:`4`,score:15,hidden:!1},{input:`10
4`,expectedOutput:`8`,output:`8`,score:20,hidden:!1},{input:`8
10`,expectedOutput:`4`,output:`4`,score:25,hidden:!1},{input:`100
50`,expectedOutput:`100`,output:`100`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`模擬與狀態更新`],subConcepts:[`事件判斷`],algorithm:[`模擬`],dataStructure:[],syntax:[`if`,`迴圈`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}},{id:`cyjunior-007`,title:`校園密室逃脫-費氏階梯(6-2)`,problemTitle:`校園密室逃脫-費氏階梯(6-2)`,courseCode:`CYJUNIOR01`,courseName:`114-嘉義市國中`,role:`challenge`,blocklyFit:`中`,requiresGreenFlag:!1,description:`電子鐵門開啟後，映入眼簾的是一座懸浮的螺旋階梯，通往二樓的平台。階梯旁懸掛著一張發光的警示牌：「欲登智慧之巔，步法須合天道。或是步履穩健走一階，或是大步流星跨兩階，切勿貪快。」

小明看著眼前這 N 階的樓梯，不禁開始思考：如果依照規則，每次只能選擇走 1 階或走 2 階，那麼要安全走到第 N 階平台，總共有多少種不同的步伐組合？這正是經典的費氏數列問題，若可能的走法數為F(N)種，我們可觀察到

F(1)=1 ,1階樓梯有 1種走法

F(2)=2 ,2階樓梯有 2種走法

F(3)=F(2)+F(1)=1+2=3 ,3階樓梯有 3種走法

F(4)=F(3)+F(2)=3+2=5 ,4階樓梯有 5種走法

…

請你幫小明計算出所有可能的走法總數。`,inputDescription:`第一行：一個整數 N，代表樓梯的總階數。`,outputDescription:`第一行： 一個整數，代表走法的總數。`,statement:{description:`電子鐵門開啟後，映入眼簾的是一座懸浮的螺旋階梯，通往二樓的平台。階梯旁懸掛著一張發光的警示牌：「欲登智慧之巔，步法須合天道。或是步履穩健走一階，或是大步流星跨兩階，切勿貪快。」

小明看著眼前這 N 階的樓梯，不禁開始思考：如果依照規則，每次只能選擇走 1 階或走 2 階，那麼要安全走到第 N 階平台，總共有多少種不同的步伐組合？這正是經典的費氏數列問題，若可能的走法數為F(N)種，我們可觀察到

F(1)=1 ,1階樓梯有 1種走法

F(2)=2 ,2階樓梯有 2種走法

F(3)=F(2)+F(1)=1+2=3 ,3階樓梯有 3種走法

F(4)=F(3)+F(2)=3+2=5 ,4階樓梯有 5種走法

…

請你幫小明計算出所有可能的走法總數。`,input:`第一行：一個整數 N，代表樓梯的總階數。`,output:`第一行： 一個整數，代表走法的總數。`},examples:[{input:`3`,output:`3`,explanation:`走法：(1,1,1), (1,2), (2,1) 共 3 種。`},{input:`4`,output:`5`,explanation:`走法：(1,1,1,1), (1,1,2), (1,2,1), (2,1,1), (2,2) 共 5 種。`}],testCases:[{input:`1`,expectedOutput:`1`,output:`1`,score:10,hidden:!1},{input:`5`,expectedOutput:`8`,output:`8`,score:15,hidden:!1},{input:`10`,expectedOutput:`89`,output:`89`,score:20,hidden:!1},{input:`15`,expectedOutput:`987`,output:`987`,score:25,hidden:!1},{input:`20`,expectedOutput:`10946`,output:`10946`,score:30,hidden:!1}],starterXml:``,review:{needsManualReview:!1,risk:``,flags:[],note:``,exportDecision:`輸出`},tags:{mainConcepts:[`數學運算與數論`],subConcepts:[`整數性質`],algorithm:[`枚舉`,`輾轉相除`],dataStructure:[],syntax:[`取餘數`,`迴圈`],math:[],context:[]},restrictions:{requiredBlocks:[],disabledBlocks:[]}}]};export{e as default};