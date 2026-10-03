var e={code:`A1-02-StringAdvanced`,title:`A02 字串進階處理`,description:`進階課程 V1 清單與字串進階橋接｜A02 字串進階處理（競賽模式，不提供範例答案；題目取自M1~M3系列重組，標【延伸】者為延伸或概念重複的牛刀小試練習題）`,type:`programming`,mode:`contest`,tier:`v1`,knowledgePoint:`A02`,unit:`V1 清單與字串進階橋接`,tasks:[{id:`W4-01`,title:`數位顯示器`,description:`七段顯示器是一種常見的數字顯示裝置，由 7 條 LED 燈條組成，可用來顯示數字 0~9。
每個數字所需點亮的 LED 燈條數量如下：
0→6條、1→2條、2→5條、3→5條、4→4條、5→5條、6→6條、7→3條、8→7條、9→6條。
現在給定 N 條可用的 LED 燈條，請你使用這些燈條組成一個「數字（可為雙位數）」，並且必須符合以下規則：
1. 數字（0~9）最多只能各使用一次（兩位數時十位與個位不能相同）。
2. 組成的數字不可有前導零（除非答案本身就是 0）。
3. 組成的數字最多只能有 2 位（0~99）。
請設計一個程式，找出在符合上述條件下「剛好用完所有 N 條 LED 燈條」時，可以組成的最大值。
若無法用 1 位數或 2 位數剛好用完所有 N 條 LED 燈條，請輸出 -1。`,inputDescription:`一行輸入一個整數 N（2 ≤ N ≤ 30），代表可用的 LED 燈條數。`,outputDescription:`一行輸出可組成的最大值（最大值 < 100），若不存在則輸出 -1。`,requiresGreenFlag:!0,examples:[{input:`3`,output:`7`,explanation:`3 條燈條可以組成數字 7（需要 3 條）。`},{input:`7`,output:`74`,explanation:`7(3條)+4(4條)=7。可組成 74 或 47，最大為 74。`}],testCases:[{input:`3`,expectedOutput:`7`,output:`7`,score:10},{input:`7`,expectedOutput:`74`,output:`74`,score:15},{input:`6`,expectedOutput:`41`,output:`41`,score:20},{input:`8`,expectedOutput:`91`,output:`91`,score:25},{input:`14`,expectedOutput:`-1`,output:`-1`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``,hints:[`先建立0~9每個數字對應的7段LED燈條狀態（查表），再根據輸入的數字查出對應燈型依序輸出。`],extension:!1,sourceCourse:`M1-06-StringFormat`,sourceDifficulty:`L3`},{id:`cycjunior-002`,title:`5進位解碼`,description:`程式設計社的入社考題是一串神秘代碼。代碼由 A, B, C, D, E 五個字母組成，這其實是一個「5進位」數字系統：
A=0, B=1, C=2, D=3, E=4，
例如密碼 BC 代表 5進位的 12，換算成 10 進位就是 1 × 5 + 2 = 7。請編寫程式將密碼解碼為 10 進位數字。
1. 輸入密碼長度 L 與密碼內容（由A-E組成）。
2. 權重計算：最右邊位數是 5的0次方(任何數的0次方為1)，左邊一位是 5的1次方，以此類推。
3. 將每個字母轉換為對應數值後，計算總和`,inputDescription:`第一行：整數 L。

第二行：L 個字元（以空格分隔，如 B C）。`,outputDescription:`一個整數（10 進位數值）。`,requiresGreenFlag:!0,examples:[{input:`2
B C`,output:`7`,explanation:`B=1, C=2。
1 × 5 + 2 = 7。`},{input:`3
B A E`,output:`29`,explanation:`B=1, A=0, E=4。
1 × 25 + 0 × 5 + 4 × 1 = 29。`}],testCases:[{input:`1
A`,expectedOutput:`0`,output:`0`,score:10},{input:`2
E E`,expectedOutput:`24`,output:`24`,score:15},{input:`3
B A A`,expectedOutput:`25`,output:`25`,score:20},{input:`4
B A A A`,expectedOutput:`125`,output:`125`,score:25},{input:`5
C D E A B`,expectedOutput:`1726`,output:`1726`,score:30}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``,hints:[`把A~E對應到0~4，字串從左到右是從高位到低位，每一位的值要乘上5的對應次方（從右邊數起，次方依位置遞增）再加總。`],extension:!1,sourceCourse:`M1-06-StringFormat`,sourceDifficulty:`L3`},{id:`A-12-1`,title:`動態密碼轉換`,description:`小明設計了一種英文字元密碼環編碼規則：

密碼環為『abcdefghijklmnopqrstuvwxyz0123456789』

第一行輸入數字N(N介於0~36)，N為編碼位移值

編碼時，待編碼字串每個字元都按照密碼環『往前』移動N個位置

如果轉換後密碼超過密碼環最後一個字元9，則從回前面a繼續接回密碼環

請寫一個程式，輸入一個英文單字，程式輸出依照編碼規則轉換後的密碼字串。

這樣的練習訓練你字元處理與條件轉換。`,inputDescription:``,outputDescription:``,requiresGreenFlag:!0,examples:[{input:`2
banana`,output:`98l8l8`,explanation:`第一行輸入2，表示編碼時要往後前2個位置
第二行輸入banana表示待編碼字串為banana
程式運算，將字串往後移2個位置加密
程式輸出98l8l8`},{input:`10
student`,output:`ijk34dj`,explanation:`第一行輸入10，表示編碼時要往後前10個位置
第二行輸入student表示待編碼字串為student
程式運算，將字串往後移10個位置加密
程式輸出ijk34dj`}],testCases:[{input:`12
goodmoning`,expectedOutput:`4cc1acb6b4`,output:`4cc1acb6b4`,score:10},{input:`29
chaiyicity`,expectedOutput:`johp5pjp05`,output:`johp5pjp05`,score:10},{input:`9
announcement`,expectedOutput:`1eefle35d5ek`,output:`1eefle35d5ek`,score:10},{input:`0
experimen`,expectedOutput:`experimen`,output:`experimen`,score:10}],difficulty:`L4`,difficultyLabel:`L4｜精熟`,starterXml:``,hints:[`密碼環比固定位移版多了數字0~9，環長度變成36個字元；位移量也是輸入決定的，要先找出字元在環中的位置，位移後用取餘數避免超出環長度。`],extension:!1,sourceCourse:`M1-06-StringFormat`,sourceDifficulty:`L4`}]};export{e as default};