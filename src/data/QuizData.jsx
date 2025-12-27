// 按照10個回合主題組織題目
const quizData = {
  // 第1回合：向店員詢問價錢
  1: [
    { id: 1, hint: "多少錢", sentence: "How ____ is this shirt?", fullSentence: "How much is this shirt?", options: ["much", "many", "more", "most"], correctIndex: 0, explanation: "How much 用來詢問不可數名詞或價格。" },
    { id: 2, hint: "價格", sentence: "What's the ____ of this bag?", fullSentence: "What's the price of this bag?", options: ["price", "cost", "value", "worth"], correctIndex: 0, explanation: "price 表示價格，詢問商品價格時常用。" },
    { id: 3, hint: "折扣", sentence: "Is there a ____ on this item?", fullSentence: "Is there a discount on this item?", options: ["discount", "decrease", "reduce", "lower"], correctIndex: 0, explanation: "discount 表示折扣，購物時常用。" },
    { id: 4, hint: "便宜的", sentence: "Do you have something ____?", fullSentence: "Do you have something cheaper?", options: ["cheaper", "cheap", "cheapest", "cheaply"], correctIndex: 0, explanation: "cheaper 是比較級，表示更便宜的。" },
    { id: 5, hint: "支付", sentence: "Can I ____ by credit card?", fullSentence: "Can I pay by credit card?", options: ["pay", "buy", "spend", "cost"], correctIndex: 0, explanation: "pay 表示支付，pay by credit card 是固定搭配。" },
    { id: 6, hint: "詢問", sentence: "Could you ____ me the price?", fullSentence: "Could you tell me the price?", options: ["tell", "say", "speak", "talk"], correctIndex: 0, explanation: "tell me 表示告訴我，詢問價格時常用。" },
    { id: 7, hint: "尋找", sentence: "I'm ____ for a gift.", fullSentence: "I'm looking for a gift.", options: ["looking for", "looking at", "looking after", "looking up"], correctIndex: 0, explanation: "look for 表示尋找，購物時常用。" },
    { id: 8, hint: "試穿", sentence: "Can I ____ this on?", fullSentence: "Can I try this on?", options: ["try on", "put on", "take on", "get on"], correctIndex: 0, explanation: "try on 表示試穿，購物時常用。" },
    { id: 9, hint: "檢查", sentence: "Let me ____ the receipt.", fullSentence: "Let me check the receipt.", options: ["check", "look", "see", "watch"], correctIndex: 0, explanation: "check 表示檢查，查看收據時常用。" },
    { id: 10, hint: "購買", sentence: "I'd like to ____ this.", fullSentence: "I'd like to buy this.", options: ["buy", "sell", "take", "get"], correctIndex: 0, explanation: "buy 表示購買，購物時的基本用語。" },
    { id: 11, hint: "在商店", sentence: "I'm ____ the store.", fullSentence: "I'm in the store.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the store 表示在商店裡。" },
    { id: 12, hint: "在櫃台", sentence: "Please pay ____ the counter.", fullSentence: "Please pay at the counter.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the counter 表示在櫃台。" },
    { id: 13, hint: "在架上", sentence: "The items are ____ the shelf.", fullSentence: "The items are on the shelf.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the shelf 表示在架子上。" },
    { id: 14, hint: "到商店", sentence: "I'm going ____ the shop.", fullSentence: "I'm going to the shop.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 15, hint: "在價格標籤上", sentence: "The price is ____ the tag.", fullSentence: "The price is on the tag.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the tag 表示在標籤上。" }
  ],

  // 第2回合：旅行中的對話
  2: [
    { id: 16, hint: "護照", sentence: "Don't forget your ____.", fullSentence: "Don't forget your passport.", options: ["passport", "ticket", "bag", "phone"], correctIndex: 0, explanation: "passport 是護照，旅行必備證件。" },
    { id: 17, hint: "行李", sentence: "Where is my ____?", fullSentence: "Where is my luggage?", options: ["luggage", "package", "box", "bag"], correctIndex: 0, explanation: "luggage 表示行李，旅行時常用。" },
    { id: 18, hint: "地圖", sentence: "Do you have a ____?", fullSentence: "Do you have a map?", options: ["map", "card", "book", "paper"], correctIndex: 0, explanation: "map 是地圖，旅行時用來找路。" },
    { id: 19, hint: "導遊", sentence: "Our ____ will show us around.", fullSentence: "Our guide will show us around.", options: ["guide", "driver", "friend", "teacher"], correctIndex: 0, explanation: "guide 表示導遊，旅行時帶領遊客。" },
    { id: 20, hint: "紀念品", sentence: "I want to buy some ____.", fullSentence: "I want to buy some souvenirs.", options: ["souvenirs", "gifts", "food", "clothes"], correctIndex: 0, explanation: "souvenirs 表示紀念品，旅行時常買。" },
    { id: 21, hint: "出發", sentence: "When do we ____?", fullSentence: "When do we set off?", options: ["set off", "get off", "take off", "put off"], correctIndex: 0, explanation: "set off 表示出發，開始旅行。" },
    { id: 22, hint: "到達", sentence: "We will ____ at 3 PM.", fullSentence: "We will arrive at 3 PM.", options: ["arrive", "reach", "get", "come"], correctIndex: 0, explanation: "arrive 表示到達，旅行時常用。" },
    { id: 23, hint: "入住", sentence: "Let's ____ at the hotel.", fullSentence: "Let's check in at the hotel.", options: ["check in", "check out", "check up", "check on"], correctIndex: 0, explanation: "check in 表示入住酒店。" },
    { id: 24, hint: "拍照", sentence: "Can you ____ a photo?", fullSentence: "Can you take a photo?", options: ["take", "make", "do", "get"], correctIndex: 0, explanation: "take a photo 表示拍照。" },
    { id: 25, hint: "迷路", sentence: "I think we're ____.", fullSentence: "I think we're lost.", options: ["lost", "late", "tired", "hungry"], correctIndex: 0, explanation: "lost 表示迷路，旅行時可能發生。" },
    { id: 26, hint: "在機場", sentence: "I'm waiting ____ the airport.", fullSentence: "I'm waiting at the airport.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the airport 表示在機場。" },
    { id: 27, hint: "在飛機上", sentence: "We're ____ the plane.", fullSentence: "We're on the plane.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the plane 表示在飛機上。" },
    { id: 28, hint: "到目的地", sentence: "We're going ____ Paris.", fullSentence: "We're going to Paris.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 29, hint: "在旅館", sentence: "I'm staying ____ a hotel.", fullSentence: "I'm staying at a hotel.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "stay at 表示住在某個地方。" },
    { id: 30, hint: "在海邊", sentence: "We're ____ the beach.", fullSentence: "We're at the beach.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the beach 表示在海邊。" }
  ],

  // 第3回合：餐廳點餐
  3: [
    { id: 31, hint: "菜單", sentence: "Can I see the ____?", fullSentence: "Can I see the menu?", options: ["menu", "list", "book", "card"], correctIndex: 0, explanation: "menu 是菜單，餐廳點餐時需要。" },
    { id: 32, hint: "服務生", sentence: "Excuse me, ____!", fullSentence: "Excuse me, waiter!", options: ["waiter", "cook", "chef", "manager"], correctIndex: 0, explanation: "waiter 表示服務生，餐廳裡招呼服務員。" },
    { id: 33, hint: "推薦", sentence: "What do you ____?", fullSentence: "What do you recommend?", options: ["recommend", "suggest", "prefer", "like"], correctIndex: 0, explanation: "recommend 表示推薦，詢問推薦菜色。" },
    { id: 34, hint: "素食", sentence: "Do you have ____ options?", fullSentence: "Do you have vegetarian options?", options: ["vegetarian", "vegetable", "vegan", "healthy"], correctIndex: 0, explanation: "vegetarian 表示素食的。" },
    { id: 35, hint: "帳單", sentence: "Can I have the ____?", fullSentence: "Can I have the bill?", options: ["bill", "check", "receipt", "paper"], correctIndex: 0, explanation: "bill 表示帳單，結帳時要帳單。" },
    { id: 36, hint: "點餐", sentence: "I'd like to ____ now.", fullSentence: "I'd like to order now.", options: ["order", "buy", "get", "take"], correctIndex: 0, explanation: "order 表示點餐，餐廳用語。" },
    { id: 37, hint: "外帶", sentence: "Can I ____ this to go?", fullSentence: "Can I get this to go?", options: ["get", "take", "bring", "carry"], correctIndex: 0, explanation: "get to go 表示外帶。" },
    { id: 38, hint: "分享", sentence: "Let's ____ this dish.", fullSentence: "Let's share this dish.", options: ["share", "eat", "try", "taste"], correctIndex: 0, explanation: "share 表示分享，分享一道菜。" },
    { id: 39, hint: "打包", sentence: "Can I ____ the leftovers?", fullSentence: "Can I take the leftovers?", options: ["take", "get", "bring", "carry"], correctIndex: 0, explanation: "take the leftovers 表示打包剩菜。" },
    { id: 40, hint: "預訂", sentence: "I'd like to ____ a table.", fullSentence: "I'd like to reserve a table.", options: ["reserve", "book", "save", "keep"], correctIndex: 0, explanation: "reserve 表示預訂，預訂餐桌。" },
    { id: 41, hint: "在餐廳", sentence: "We're sitting ____ the restaurant.", fullSentence: "We're sitting in the restaurant.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the restaurant 表示在餐廳裡。" },
    { id: 42, hint: "在桌邊", sentence: "Please sit ____ the table.", fullSentence: "Please sit at the table.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the table 表示在桌邊。" },
    { id: 43, hint: "在椅子上", sentence: "The chair is ____ the table.", fullSentence: "The chair is by the table.", options: ["by", "on", "at", "to"], correctIndex: 0, explanation: "by the table 表示在桌子旁邊。" },
    { id: 44, hint: "到餐廳", sentence: "Let's go ____ the restaurant.", fullSentence: "Let's go to the restaurant.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 45, hint: "在櫃台", sentence: "Pay ____ the counter.", fullSentence: "Pay at the counter.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the counter 表示在櫃台。" }
  ],

  // 第4回合：問路
  4: [
    { id: 46, hint: "方向", sentence: "Which ____ should I go?", fullSentence: "Which direction should I go?", options: ["direction", "way", "road", "street"], correctIndex: 0, explanation: "direction 表示方向，問路時常用。" },
    { id: 47, hint: "轉彎", sentence: "Turn ____ at the corner.", fullSentence: "Turn left at the corner.", options: ["left", "right", "around", "back"], correctIndex: 0, explanation: "turn left 表示左轉。" },
    { id: 48, hint: "距離", sentence: "How ____ is it?", fullSentence: "How far is it?", options: ["far", "long", "much", "many"], correctIndex: 0, explanation: "How far 用來詢問距離。" },
    { id: 49, hint: "地標", sentence: "Look for the big ____.", fullSentence: "Look for the big building.", options: ["building", "house", "place", "spot"], correctIndex: 0, explanation: "building 表示建築物，問路時的地標。" },
    { id: 50, hint: "路口", sentence: "It's ____ the intersection.", fullSentence: "It's at the intersection.", options: ["at", "in", "on", "to"], correctIndex: 0, explanation: "intersection 表示路口。" },
    { id: 51, hint: "直走", sentence: "Go ____ for two blocks.", fullSentence: "Go straight for two blocks.", options: ["straight", "ahead", "forward", "on"], correctIndex: 0, explanation: "go straight 表示直走。" },
    { id: 52, hint: "經過", sentence: "You'll ____ the park.", fullSentence: "You'll pass the park.", options: ["pass", "go", "walk", "cross"], correctIndex: 0, explanation: "pass 表示經過。" },
    { id: 53, hint: "穿過", sentence: "____ the street.", fullSentence: "Cross the street.", options: ["Cross", "Go", "Walk", "Pass"], correctIndex: 0, explanation: "cross 表示穿過。" },
    { id: 54, hint: "迷路", sentence: "I'm ____.", fullSentence: "I'm lost.", options: ["lost", "late", "tired", "confused"], correctIndex: 0, explanation: "lost 表示迷路。" },
    { id: 55, hint: "到達", sentence: "You'll ____ there soon.", fullSentence: "You'll get there soon.", options: ["get", "arrive", "reach", "come"], correctIndex: 0, explanation: "get there 表示到達那裡。" },
    { id: 56, hint: "在轉角", sentence: "Turn ____ the corner.", fullSentence: "Turn at the corner.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the corner 表示在轉角處。" },
    { id: 57, hint: "在街上", sentence: "Walk ____ the street.", fullSentence: "Walk along the street.", options: ["along", "on", "at", "to"], correctIndex: 0, explanation: "along the street 表示沿著街道。" },
    { id: 58, hint: "在對面", sentence: "It's ____ the bank.", fullSentence: "It's across from the bank.", options: ["across from", "next to", "beside", "near"], correctIndex: 0, explanation: "across from 表示在對面。" },
    { id: 59, hint: "在旁邊", sentence: "It's ____ the post office.", fullSentence: "It's next to the post office.", options: ["next to", "across", "behind", "in front"], correctIndex: 0, explanation: "next to 表示在旁邊。" },
    { id: 60, hint: "到那裡", sentence: "How do I get ____ there?", fullSentence: "How do I get to there?", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "get to 表示到達。" }
  ],

  // 第5回合：購物對話
  5: [
    { id: 61, hint: "尺寸", sentence: "What ____ do you need?", fullSentence: "What size do you need?", options: ["size", "color", "style", "type"], correctIndex: 0, explanation: "size 表示尺寸，購物時詢問尺寸。" },
    { id: 62, hint: "顏色", sentence: "Do you have this ____ red?", fullSentence: "Do you have this in red?", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in red 表示紅色的。" },
    { id: 63, hint: "退換", sentence: "Can I ____ this?", fullSentence: "Can I return this?", options: ["return", "give", "take", "bring"], correctIndex: 0, explanation: "return 表示退換，購物時常用。" },
    { id: 64, hint: "收據", sentence: "Do you have the ____?", fullSentence: "Do you have the receipt?", options: ["receipt", "bill", "check", "paper"], correctIndex: 0, explanation: "receipt 表示收據，退換貨時需要。" },
    { id: 65, hint: "換貨", sentence: "I'd like to ____ this.", fullSentence: "I'd like to exchange this.", options: ["exchange", "change", "switch", "replace"], correctIndex: 0, explanation: "exchange 表示換貨。" },
    { id: 66, hint: "試穿", sentence: "Can I ____ this?", fullSentence: "Can I try this on?", options: ["try on", "put on", "wear", "dress"], correctIndex: 0, explanation: "try on 表示試穿。" },
    { id: 67, hint: "適合", sentence: "Does this ____ me?", fullSentence: "Does this fit me?", options: ["fit", "suit", "match", "look"], correctIndex: 0, explanation: "fit 表示適合，指尺寸合適。" },
    { id: 68, hint: "比較", sentence: "Let me ____ the prices.", fullSentence: "Let me compare the prices.", options: ["compare", "check", "see", "look"], correctIndex: 0, explanation: "compare 表示比較。" },
    { id: 69, hint: "決定", sentence: "I'll ____ it.", fullSentence: "I'll take it.", options: ["take", "buy", "get", "have"], correctIndex: 0, explanation: "take it 表示決定買下。" },
    { id: 70, hint: "考慮", sentence: "I need to ____ about it.", fullSentence: "I need to think about it.", options: ["think", "consider", "decide", "choose"], correctIndex: 0, explanation: "think about 表示考慮。" },
    { id: 71, hint: "在購物中心", sentence: "I'm ____ the mall.", fullSentence: "I'm at the mall.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the mall 表示在購物中心。" },
    { id: 72, hint: "在試衣間", sentence: "The fitting room is ____ the store.", fullSentence: "The fitting room is in the store.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the store 表示在商店裡。" },
    { id: 73, hint: "在架上", sentence: "The clothes are ____ the rack.", fullSentence: "The clothes are on the rack.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the rack 表示在衣架上。" },
    { id: 74, hint: "到商店", sentence: "Let's go ____ the store.", fullSentence: "Let's go to the store.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 75, hint: "在收銀台", sentence: "Pay ____ the cashier.", fullSentence: "Pay at the cashier.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the cashier 表示在收銀台。" }
  ],

  // 第6回合：酒店入住
  6: [
    { id: 76, hint: "預訂", sentence: "I have a ____.", fullSentence: "I have a reservation.", options: ["reservation", "booking", "appointment", "meeting"], correctIndex: 0, explanation: "reservation 表示預訂，酒店入住時常用。" },
    { id: 77, hint: "房間", sentence: "I'd like a ____ room.", fullSentence: "I'd like a single room.", options: ["single", "double", "twin", "suite"], correctIndex: 0, explanation: "single room 表示單人房。" },
    { id: 78, hint: "鑰匙", sentence: "Here's your room ____.", fullSentence: "Here's your room key.", options: ["key", "card", "number", "code"], correctIndex: 0, explanation: "key 表示鑰匙，酒店房間鑰匙。" },
    { id: 79, hint: "電梯", sentence: "Where is the ____?", fullSentence: "Where is the elevator?", options: ["elevator", "stairs", "exit", "entrance"], correctIndex: 0, explanation: "elevator 表示電梯。" },
    { id: 80, hint: "退房", sentence: "What time is ____?", fullSentence: "What time is checkout?", options: ["checkout", "check-in", "breakfast", "dinner"], correctIndex: 0, explanation: "checkout 表示退房時間。" },
    { id: 81, hint: "入住", sentence: "I'd like to ____.", fullSentence: "I'd like to check in.", options: ["check in", "check out", "check up", "check on"], correctIndex: 0, explanation: "check in 表示入住。" },
    { id: 82, hint: "退房", sentence: "I need to ____.", fullSentence: "I need to check out.", options: ["check out", "check in", "leave", "go"], correctIndex: 0, explanation: "check out 表示退房。" },
    { id: 83, hint: "延長", sentence: "Can I ____ my stay?", fullSentence: "Can I extend my stay?", options: ["extend", "expand", "increase", "lengthen"], correctIndex: 0, explanation: "extend 表示延長。" },
    { id: 84, hint: "取消", sentence: "I'd like to ____ my reservation.", fullSentence: "I'd like to cancel my reservation.", options: ["cancel", "delete", "remove", "stop"], correctIndex: 0, explanation: "cancel 表示取消。" },
    { id: 85, hint: "確認", sentence: "Let me ____ your booking.", fullSentence: "Let me confirm your booking.", options: ["confirm", "check", "verify", "validate"], correctIndex: 0, explanation: "confirm 表示確認。" },
    { id: 86, hint: "在酒店", sentence: "I'm staying ____ the hotel.", fullSentence: "I'm staying at the hotel.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "stay at 表示住在某個地方。" },
    { id: 87, hint: "在房間", sentence: "The room is ____ the third floor.", fullSentence: "The room is on the third floor.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the floor 表示在某一層樓。" },
    { id: 88, hint: "在櫃台", sentence: "Check in ____ the front desk.", fullSentence: "Check in at the front desk.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the front desk 表示在櫃台。" },
    { id: 89, hint: "到酒店", sentence: "We're going ____ the hotel.", fullSentence: "We're going to the hotel.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 90, hint: "在電梯裡", sentence: "I'm ____ the elevator.", fullSentence: "I'm in the elevator.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the elevator 表示在電梯裡。" }
  ],

  // 第7回合：機場對話
  7: [
    { id: 91, hint: "登機證", sentence: "Here's your boarding ____.", fullSentence: "Here's your boarding pass.", options: ["pass", "card", "ticket", "paper"], correctIndex: 0, explanation: "boarding pass 表示登機證。" },
    { id: 92, hint: "行李", sentence: "Where is my ____?", fullSentence: "Where is my baggage?", options: ["baggage", "luggage", "suitcase", "bag"], correctIndex: 0, explanation: "baggage 表示行李，機場常用。" },
    { id: 93, hint: "登機門", sentence: "Which ____ is it?", fullSentence: "Which gate is it?", options: ["gate", "door", "entrance", "exit"], correctIndex: 0, explanation: "gate 表示登機門。" },
    { id: 94, hint: "延誤", sentence: "The flight is ____.", fullSentence: "The flight is delayed.", options: ["delayed", "cancelled", "late", "early"], correctIndex: 0, explanation: "delayed 表示延誤。" },
    { id: 95, hint: "安全檢查", sentence: "Please go through ____.", fullSentence: "Please go through security.", options: ["security", "safety", "check", "inspection"], correctIndex: 0, explanation: "security 表示安全檢查。" },
    { id: 96, hint: "登機", sentence: "It's time to ____.", fullSentence: "It's time to board.", options: ["board", "get on", "enter", "go"], correctIndex: 0, explanation: "board 表示登機。" },
    { id: 97, hint: "起飛", sentence: "When does the plane ____?", fullSentence: "When does the plane take off?", options: ["take off", "get off", "set off", "go off"], correctIndex: 0, explanation: "take off 表示起飛。" },
    { id: 98, hint: "降落", sentence: "The plane will ____ soon.", fullSentence: "The plane will land soon.", options: ["land", "arrive", "reach", "come"], correctIndex: 0, explanation: "land 表示降落。" },
    { id: 99, hint: "領取", sentence: "Where do I ____ my luggage?", fullSentence: "Where do I collect my luggage?", options: ["collect", "get", "take", "pick"], correctIndex: 0, explanation: "collect 表示領取。" },
    { id: 100, hint: "報到", sentence: "I need to ____ in.", fullSentence: "I need to check in.", options: ["check", "sign", "register", "enter"], correctIndex: 0, explanation: "check in 表示報到。" },
    { id: 101, hint: "在機場", sentence: "I'm ____ the airport.", fullSentence: "I'm at the airport.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the airport 表示在機場。" },
    { id: 102, hint: "在飛機上", sentence: "We're ____ the plane.", fullSentence: "We're on the plane.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the plane 表示在飛機上。" },
    { id: 103, hint: "到機場", sentence: "Let's go ____ the airport.", fullSentence: "Let's go to the airport.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 104, hint: "在登機門", sentence: "Wait ____ gate 5.", fullSentence: "Wait at gate 5.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at gate 表示在登機門。" },
    { id: 105, hint: "在候機室", sentence: "I'm ____ the waiting room.", fullSentence: "I'm in the waiting room.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the waiting room 表示在候機室。" }
  ],

  // 第8回合：電話預約
  8: [
    { id: 106, hint: "預約", sentence: "I'd like to make an ____.", fullSentence: "I'd like to make an appointment.", options: ["appointment", "reservation", "booking", "meeting"], correctIndex: 0, explanation: "appointment 表示預約，電話預約時常用。" },
    { id: 107, hint: "時間", sentence: "What ____ is available?", fullSentence: "What time is available?", options: ["time", "day", "date", "hour"], correctIndex: 0, explanation: "time 表示時間，詢問可用時間。" },
    { id: 108, hint: "取消", sentence: "I need to ____ my appointment.", fullSentence: "I need to cancel my appointment.", options: ["cancel", "delete", "remove", "stop"], correctIndex: 0, explanation: "cancel 表示取消。" },
    { id: 109, hint: "更改", sentence: "Can I ____ the time?", fullSentence: "Can I change the time?", options: ["change", "switch", "modify", "alter"], correctIndex: 0, explanation: "change 表示更改。" },
    { id: 110, hint: "確認", sentence: "Let me ____ your appointment.", fullSentence: "Let me confirm your appointment.", options: ["confirm", "check", "verify", "validate"], correctIndex: 0, explanation: "confirm 表示確認。" },
    { id: 111, hint: "回電", sentence: "Can you ____ me back?", fullSentence: "Can you call me back?", options: ["call", "phone", "ring", "dial"], correctIndex: 0, explanation: "call back 表示回電。" },
    { id: 112, hint: "留言", sentence: "Can I leave a ____?", fullSentence: "Can I leave a message?", options: ["message", "note", "word", "text"], correctIndex: 0, explanation: "leave a message 表示留言。" },
    { id: 113, hint: "轉接", sentence: "Let me ____ you.", fullSentence: "Let me transfer you.", options: ["transfer", "connect", "put", "send"], correctIndex: 0, explanation: "transfer 表示轉接。" },
    { id: 114, hint: "等待", sentence: "Please ____ on.", fullSentence: "Please hold on.", options: ["hold", "wait", "stay", "keep"], correctIndex: 0, explanation: "hold on 表示等待，電話用語。" },
    { id: 115, hint: "掛斷", sentence: "I'll ____ up now.", fullSentence: "I'll hang up now.", options: ["hang", "put", "end", "finish"], correctIndex: 0, explanation: "hang up 表示掛斷電話。" },
    { id: 116, hint: "在電話上", sentence: "I'm ____ the phone.", fullSentence: "I'm on the phone.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the phone 表示在電話上。" },
    { id: 117, hint: "在辦公室", sentence: "Call me ____ the office.", fullSentence: "Call me at the office.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the office 表示在辦公室。" },
    { id: 118, hint: "在線", sentence: "I'm ____ line.", fullSentence: "I'm on line.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on line 表示在線。" },
    { id: 119, hint: "到那裡", sentence: "I'll be ____ at 3 PM.", fullSentence: "I'll be there at 3 PM.", options: ["there", "here", "where", "everywhere"], correctIndex: 0, explanation: "there 表示那裡。" },
    { id: 120, hint: "在約定時間", sentence: "See you ____ 3 PM.", fullSentence: "See you at 3 PM.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at 3 PM 表示在3點。" }
  ],

  // 第9回合：看病就醫
  9: [
    { id: 121, hint: "醫生", sentence: "I need to see a ____.", fullSentence: "I need to see a doctor.", options: ["doctor", "nurse", "dentist", "pharmacist"], correctIndex: 0, explanation: "doctor 表示醫生，看病時常用。" },
    { id: 122, hint: "症狀", sentence: "What are your ____?", fullSentence: "What are your symptoms?", options: ["symptoms", "problems", "issues", "matters"], correctIndex: 0, explanation: "symptoms 表示症狀。" },
    { id: 123, hint: "處方", sentence: "Here's your ____.", fullSentence: "Here's your prescription.", options: ["prescription", "medicine", "drug", "pill"], correctIndex: 0, explanation: "prescription 表示處方。" },
    { id: 124, hint: "藥", sentence: "Take this ____ twice a day.", fullSentence: "Take this medicine twice a day.", options: ["medicine", "drug", "pill", "tablet"], correctIndex: 0, explanation: "medicine 表示藥。" },
    { id: 125, hint: "預約", sentence: "Do you have an ____?", fullSentence: "Do you have an appointment?", options: ["appointment", "reservation", "booking", "meeting"], correctIndex: 0, explanation: "appointment 表示預約，看醫生時常用。" },
    { id: 126, hint: "掛號", sentence: "I need to ____ in.", fullSentence: "I need to check in.", options: ["check", "sign", "register", "enter"], correctIndex: 0, explanation: "check in 表示掛號。" },
    { id: 127, hint: "診斷", sentence: "The doctor will ____ you.", fullSentence: "The doctor will examine you.", options: ["examine", "check", "see", "look"], correctIndex: 0, explanation: "examine 表示診斷、檢查。" },
    { id: 128, hint: "開藥", sentence: "I'll ____ you some medicine.", fullSentence: "I'll prescribe you some medicine.", options: ["prescribe", "give", "take", "buy"], correctIndex: 0, explanation: "prescribe 表示開藥。" },
    { id: 129, hint: "休息", sentence: "You need to ____.", fullSentence: "You need to rest.", options: ["rest", "sleep", "relax", "lie"], correctIndex: 0, explanation: "rest 表示休息。" },
    { id: 130, hint: "康復", sentence: "You'll ____ soon.", fullSentence: "You'll recover soon.", options: ["recover", "get better", "heal", "improve"], correctIndex: 0, explanation: "recover 表示康復。" },
    { id: 131, hint: "在醫院", sentence: "I'm ____ the hospital.", fullSentence: "I'm at the hospital.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the hospital 表示在醫院。" },
    { id: 132, hint: "在診所", sentence: "The clinic is ____ the second floor.", fullSentence: "The clinic is on the second floor.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the floor 表示在某一層樓。" },
    { id: 133, hint: "到醫院", sentence: "Let's go ____ the hospital.", fullSentence: "Let's go to the hospital.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 134, hint: "在候診室", sentence: "Wait ____ the waiting room.", fullSentence: "Wait in the waiting room.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the waiting room 表示在候診室。" },
    { id: 135, hint: "在藥局", sentence: "Get the medicine ____ the pharmacy.", fullSentence: "Get the medicine at the pharmacy.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the pharmacy 表示在藥局。" }
  ],

  // 第10回合：日常聊天
  10: [
    { id: 136, hint: "天氣", sentence: "How's the ____ today?", fullSentence: "How's the weather today?", options: ["weather", "day", "sky", "air"], correctIndex: 0, explanation: "weather 表示天氣，日常聊天常用。" },
    { id: 137, hint: "週末", sentence: "What did you do ____ weekend?", fullSentence: "What did you do last weekend?", options: ["last", "this", "next", "every"], correctIndex: 0, explanation: "last weekend 表示上週末。" },
    { id: 138, hint: "興趣", sentence: "What are your ____?", fullSentence: "What are your hobbies?", options: ["hobbies", "interests", "likes", "favorites"], correctIndex: 0, explanation: "hobbies 表示興趣愛好。" },
    { id: 139, hint: "工作", sentence: "How's your ____?", fullSentence: "How's your work?", options: ["work", "job", "career", "business"], correctIndex: 0, explanation: "work 表示工作，日常聊天常用。" },
    { id: 140, hint: "計劃", sentence: "What are your ____?", fullSentence: "What are your plans?", options: ["plans", "ideas", "thoughts", "minds"], correctIndex: 0, explanation: "plans 表示計劃。" },
    { id: 141, hint: "聊天", sentence: "Let's ____.", fullSentence: "Let's chat.", options: ["chat", "talk", "speak", "say"], correctIndex: 0, explanation: "chat 表示聊天。" },
    { id: 142, hint: "見面", sentence: "Let's ____ up.", fullSentence: "Let's meet up.", options: ["meet", "see", "get", "come"], correctIndex: 0, explanation: "meet up 表示見面。" },
    { id: 143, hint: "邀請", sentence: "Would you like to ____?", fullSentence: "Would you like to join?", options: ["join", "come", "go", "attend"], correctIndex: 0, explanation: "join 表示加入、參與。" },
    { id: 144, hint: "同意", sentence: "I ____ with you.", fullSentence: "I agree with you.", options: ["agree", "accept", "approve", "like"], correctIndex: 0, explanation: "agree 表示同意。" },
    { id: 145, hint: "建議", sentence: "Can you ____ me?", fullSentence: "Can you suggest to me?", options: ["suggest", "recommend", "advise", "tell"], correctIndex: 0, explanation: "suggest 表示建議。" },
    { id: 146, hint: "在咖啡廳", sentence: "Let's meet ____ the café.", fullSentence: "Let's meet at the café.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the café 表示在咖啡廳。" },
    { id: 147, hint: "在公園", sentence: "We're ____ the park.", fullSentence: "We're at the park.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the park 表示在公園。" },
    { id: 148, hint: "在週末", sentence: "I'll see you ____ the weekend.", fullSentence: "I'll see you on the weekend.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on the weekend 表示在週末。" },
    { id: 149, hint: "到那裡", sentence: "I'll go ____ there.", fullSentence: "I'll go to there.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 150, hint: "在早上", sentence: "Let's meet ____ the morning.", fullSentence: "Let's meet in the morning.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the morning 表示在早上。" }
  ],

  // 第11回合：職場溝通
  11: [
    { id: 151, hint: "會議", sentence: "We have a ____ at 2 PM.", fullSentence: "We have a meeting at 2 PM.", options: ["meeting", "conference", "appointment", "session"], correctIndex: 0, explanation: "meeting 表示會議，職場常用。" },
    { id: 152, hint: "報告", sentence: "Please send me the ____.", fullSentence: "Please send me the report.", options: ["report", "document", "file", "paper"], correctIndex: 0, explanation: "report 表示報告，職場常用。" },
    { id: 153, hint: "截止日期", sentence: "What's the ____?", fullSentence: "What's the deadline?", options: ["deadline", "date", "time", "end"], correctIndex: 0, explanation: "deadline 表示截止日期。" },
    { id: 154, hint: "同事", sentence: "My ____ helped me.", fullSentence: "My colleague helped me.", options: ["colleague", "friend", "boss", "client"], correctIndex: 0, explanation: "colleague 表示同事。" },
    { id: 155, hint: "專案", sentence: "This ____ is important.", fullSentence: "This project is important.", options: ["project", "task", "work", "job"], correctIndex: 0, explanation: "project 表示專案。" },
    { id: 156, hint: "完成", sentence: "I need to ____ this task.", fullSentence: "I need to finish this task.", options: ["finish", "complete", "end", "close"], correctIndex: 0, explanation: "finish 表示完成。" },
    { id: 157, hint: "討論", sentence: "Let's ____ this issue.", fullSentence: "Let's discuss this issue.", options: ["discuss", "talk", "speak", "say"], correctIndex: 0, explanation: "discuss 表示討論。" },
    { id: 158, hint: "提交", sentence: "Please ____ your work.", fullSentence: "Please submit your work.", options: ["submit", "send", "give", "hand"], correctIndex: 0, explanation: "submit 表示提交。" },
    { id: 159, hint: "回覆", sentence: "I'll ____ to your email.", fullSentence: "I'll reply to your email.", options: ["reply", "answer", "respond", "return"], correctIndex: 0, explanation: "reply 表示回覆。" },
    { id: 160, hint: "合作", sentence: "Let's ____ on this.", fullSentence: "Let's work on this.", options: ["work", "cooperate", "collaborate", "help"], correctIndex: 0, explanation: "work on 表示合作進行。" },
    { id: 161, hint: "在辦公室", sentence: "I'm ____ the office.", fullSentence: "I'm at the office.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the office 表示在辦公室。" },
    { id: 162, hint: "在會議室", sentence: "The meeting is ____ the conference room.", fullSentence: "The meeting is in the conference room.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in the conference room 表示在會議室。" },
    { id: 163, hint: "在會議中", sentence: "I'm ____ a meeting.", fullSentence: "I'm in a meeting.", options: ["in", "on", "at", "to"], correctIndex: 0, explanation: "in a meeting 表示在會議中。" },
    { id: 164, hint: "到辦公室", sentence: "I'm going ____ the office.", fullSentence: "I'm going to the office.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 165, hint: "在截止日期", sentence: "Submit it ____ Friday.", fullSentence: "Submit it by Friday.", options: ["by", "on", "at", "to"], correctIndex: 0, explanation: "by Friday 表示在週五之前。" }
  ],

  // 第12回合：社交聚會
  12: [
    { id: 166, hint: "派對", sentence: "Are you going to the ____?", fullSentence: "Are you going to the party?", options: ["party", "meeting", "event", "gathering"], correctIndex: 0, explanation: "party 表示派對，社交聚會常用。" },
    { id: 167, hint: "邀請", sentence: "Thanks for the ____.", fullSentence: "Thanks for the invitation.", options: ["invitation", "invite", "call", "message"], correctIndex: 0, explanation: "invitation 表示邀請。" },
    { id: 168, hint: "慶祝", sentence: "Let's ____ your birthday!", fullSentence: "Let's celebrate your birthday!", options: ["celebrate", "congratulate", "enjoy", "have"], correctIndex: 0, explanation: "celebrate 表示慶祝。" },
    { id: 169, hint: "禮物", sentence: "Here's a ____ for you.", fullSentence: "Here's a gift for you.", options: ["gift", "present", "surprise", "thing"], correctIndex: 0, explanation: "gift 表示禮物。" },
    { id: 170, hint: "蛋糕", sentence: "Let's cut the ____.", fullSentence: "Let's cut the cake.", options: ["cake", "pie", "bread", "food"], correctIndex: 0, explanation: "cake 表示蛋糕，聚會常用。" },
    { id: 171, hint: "介紹", sentence: "Let me ____ you.", fullSentence: "Let me introduce you.", options: ["introduce", "present", "show", "tell"], correctIndex: 0, explanation: "introduce 表示介紹。" },
    { id: 172, hint: "認識", sentence: "Nice to ____ you.", fullSentence: "Nice to meet you.", options: ["meet", "see", "know", "talk"], correctIndex: 0, explanation: "meet 表示認識、見面。" },
    { id: 173, hint: "乾杯", sentence: "Let's ____!", fullSentence: "Let's cheers!", options: ["cheers", "drink", "toast", "celebrate"], correctIndex: 0, explanation: "cheers 表示乾杯。" },
    { id: 174, hint: "享受", sentence: "____ yourself!", fullSentence: "Enjoy yourself!", options: ["Enjoy", "Have", "Make", "Take"], correctIndex: 0, explanation: "enjoy yourself 表示享受、玩得開心。" },
    { id: 175, hint: "感謝", sentence: "____ for coming!", fullSentence: "Thanks for coming!", options: ["Thanks", "Thank", "Thanking", "Thanked"], correctIndex: 0, explanation: "Thanks for coming 表示感謝來參加。" },
    { id: 176, hint: "在派對", sentence: "We're ____ the party.", fullSentence: "We're at the party.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the party 表示在派對上。" },
    { id: 177, hint: "在餐廳", sentence: "The dinner is ____ the restaurant.", fullSentence: "The dinner is at the restaurant.", options: ["in", "on", "at", "to"], correctIndex: 2, explanation: "at the restaurant 表示在餐廳。" },
    { id: 178, hint: "在週末", sentence: "The party is ____ Saturday.", fullSentence: "The party is on Saturday.", options: ["in", "on", "at", "to"], correctIndex: 1, explanation: "on Saturday 表示在週六。" },
    { id: 179, hint: "到那裡", sentence: "I'll go ____ the party.", fullSentence: "I'll go to the party.", options: ["in", "on", "at", "to"], correctIndex: 3, explanation: "go to 表示去某個地方。" },
    { id: 180, hint: "在晚上", sentence: "See you ____ night!", fullSentence: "See you tonight!", options: ["tonight", "today", "tomorrow", "yesterday"], correctIndex: 0, explanation: "tonight 表示今晚。" }
  ]
};

export default quizData;
