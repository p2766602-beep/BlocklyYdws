var e={code:`A2-01-SortingPractice`,title:`A03 排序法實作`,description:`進階課程 V2 排序思維與數學規則橋接｜A03 排序法實作（競賽模式，不提供範例答案；題目取自M1~M3系列重組，標【延伸】者為延伸或概念重複的牛刀小試練習題）`,type:`programming`,mode:`contest`,tier:`v2`,knowledgePoint:`A03`,unit:`V2 排序思維與數學規則橋接`,tasks:[{id:`seclect-005`,title:`完整選擇排序`,description:`小安已經學會如何在清單中找出最小值，並進行兩數交換。
現在老師請他完成完整的選擇排序任務。
桌上有一排固定 5 個整數，請你使用「選擇排序法」，
將這些數字由小到大排序。
選擇排序說明：
1. 從尚未排序的部分中找出最小值。
2. 將最小值與目前排序位置的數字交換。
3. 重複上述步驟，直到整個清單排序完成。
注意事項：
1. 不可使用排序相關的積木或指令。
2. 若有相同數字，排序後相對位置不限`,inputDescription:`第1行：輸入數字N，N固定為5

第2行：輸入5 個整數，代表清單中的數字（以空格隔開）。`,outputDescription:`輸出 5 個整數，代表排序完成後的結果（以空格隔開）。`,requiresGreenFlag:!0,examples:[{input:`5
8 3 5 1 6`,output:`1 3 5 6 8`,explanation:`依序找出最小值並交換，
完成由小到大的排序。`},{input:`5
2 4 6 8 10`,output:`2 4 6 8 10`,explanation:`原本已經排序完成，
結果不變。`}],testCases:[{input:`5
8 3 5 1 6`,expectedOutput:`1 3 5 6 8`,output:`1 3 5 6 8`,score:10},{input:`5
2 4 6 8 10`,expectedOutput:`2 4 6 8 10`,output:`2 4 6 8 10`,score:10},{input:`5
5 4 3 2 1`,expectedOutput:`1 2 3 4 5`,output:`1 2 3 4 5`,score:10},{input:`5
7 2 2 9 5`,expectedOutput:`2 2 5 7 9`,output:`2 2 5 7 9`,score:10},{input:`5
9 1 8 1 7`,expectedOutput:`1 1 7 8 9`,output:`1 1 7 8 9`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``,hints:[`第k回合從第k個位置開始找最小值的位置，找到後跟第k個位置交換；重複這個回合直到最後一個位置。`],extension:!1,sourceCourse:`M1-07-SortBasics`,sourceDifficulty:`L3`},{id:`SORT01-007`,title:`排序後第K小`,description:`給定 N 個整數與 K，請將數字由小到大排序後，輸出第 K 小的數字。位置從 1 開始計算。`,inputDescription:`第一個整數為 N，接著輸入 N 個整數，最後輸入一個整數 K。保證 1 <= K <= N。`,outputDescription:`輸出一個整數，代表第 K 小的數字。`,requiresGreenFlag:!0,examples:[{input:`6
8 3 9 1 5 7
2`,output:`3`,explanation:`排序後為 1 3 5 7 8 9，第 2 小是 3。`}],testCases:[{input:`6
8 3 9 1 5 7
2`,expectedOutput:`3`,output:`3`,score:10},{input:`5
5 4 3 2 1
5`,expectedOutput:`5`,output:`5`,score:10},{input:`5
5 4 3 2 1
1`,expectedOutput:`1`,output:`1`,score:10},{input:`4
10 10 8 9
3`,expectedOutput:`10`,output:`10`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``,hints:[`先把整個清單排好（選擇排序或泡泡排序都可以），排序後直接取出第K個位置的數字。`],extension:!1,sourceCourse:`M1-07-SortBasics`,sourceDifficulty:`L3`},{id:`seclect-012`,title:`多清單整合實戰-學生資料分析`,description:`在校務系統中，學生的資料常常分散存放在多個清單中。
小華目前有三個清單，分別記錄：
學生姓名清單
國文成績清單
數學成績清單
相同位置代表同一位學生。
老師希望小華能設計一個程式，將這些資料整合分析，
完成以下任務：
計算每位學生的「總分」
依照總分由高到低排序所有學生
輸出排序後的學生姓名與總分
所有清單在排序過程中必須保持位置連動。
注意事項：
1. 總分 = 國文成績 + 數學成績。
2. 若總分相同，依原本出現的先後順序排列。
3. 不可使用內建排序功能。
4. 總分不會有同分情形`,inputDescription:`第1行：5 個學生姓名（以空格隔開）。

第2行：5 個整數，代表國文成績（以空格隔開）。

第3行：5 個整數，代表數學成績（以空格隔開）。`,outputDescription:`輸出 5 行，每一行依序輸出：

姓名 總分（以空格隔開）。`,requiresGreenFlag:!0,examples:[{input:`Amy Bob Carl Dora Eric
80 90 70 85 60
70 85 80 75 65`,output:`Bob 175
Dora 160
Amy 150
Carl 150
Eric 125`,explanation:`先計算總分，
再依總分排序。`}],testCases:[{input:`Amy Bob Carl Dora Eric
80 90 70 85 60
70 85 75 75 65`,expectedOutput:`Bob 175 Dora 160 Amy 150 Carl 145 Eric 125`,output:`Bob 175 Dora 160 Amy 150 Carl 145 Eric 125`,score:10},{input:`Tom May John Lily Ken
90 80 85 70 60
88 90 80 75 65`,expectedOutput:`Tom 178 May 170 John 165 Lily 145 Ken 125`,output:`Tom 178 May 170 John 165 Lily 145 Ken 125`,score:10},{input:`A B C D E
80 60 60 50 65
90 80 70 30 45`,expectedOutput:`A 170 B 140 C 130 E 110 D 80`,output:`A 170 B 140 C 130 E 110 D 80`,score:10},{input:`Ann Ben Cat Dee Eve
95 90 85 70 60
0 10 20 45 25`,expectedOutput:`Dee 115 Cat 105 Ben 100 Ann 95 Eve 85`,output:`Dee 115 Cat 105 Ben 100 Ann 95 Eve 85`,score:10},{input:`One Two Three Four Five
30 50 70 90 10
20 40 60 80 100`,expectedOutput:`Four 170 Three 130 Five 110 Two 90 One 50`,output:`Four 170 Three 130 Five 110 Two 90 One 50`,score:10}],difficulty:`L3`,difficultyLabel:`L3｜挑戰`,starterXml:``,hints:[`先決定要依哪個清單的分數排序，排序時其他每個清單（姓名、各科成績）都要跟著一起交換位置，這樣才不會配錯人。`],extension:!1,sourceCourse:`M1-08-SortApplied`,sourceDifficulty:`L3`}]};export{e as default};