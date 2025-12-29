// 每個回合的教材內容（文章或對話）
export const MATERIALS = {
  1: {
    title: "向店員詢問價錢",
    type: "對話",
    content: [
      { speaker: "顧客", message: "Excuse me, how much is this shirt?" },
      { speaker: "店員", message: "It's $29.99." },
      { speaker: "顧客", message: "That's a bit expensive. Do you have something cheaper?" },
      { speaker: "店員", message: "Yes, we have a sale section over there. Everything is 20% off." },
      { speaker: "顧客", message: "Great! Can I try this on?" },
      { speaker: "店員", message: "Of course! The fitting room is on your right." },
      { speaker: "顧客", message: "Thank you. Could you tell me the price of this bag as well?" },
      { speaker: "店員", message: "That bag is $45. Is there a discount on this item?" },
      { speaker: "顧客", message: "Yes, it's on sale. You can get it for $36." },
      { speaker: "顧客", message: "Perfect! Can I pay by credit card?" },
      { speaker: "店員", message: "Yes, please pay at the counter." }
    ],
    tips: "購物時常用的表達：詢問價格用 'How much...'，試穿用 'try on'，付款用 'pay by credit card'。"
  },
  2: {
    title: "旅行中的對話",
    type: "對話",
    content: [
      { speaker: "旅客", message: "Excuse me, where is my luggage?" },
      { speaker: "機場人員", message: "It should be at baggage claim area 3." },
      { speaker: "旅客", message: "Thank you. Don't forget your passport!" },
      { speaker: "同伴", message: "I have it. Do you have a map?" },
      { speaker: "旅客", message: "Yes, I downloaded one on my phone. Our guide will show us around." },
      { speaker: "同伴", message: "When do we set off?" },
      { speaker: "旅客", message: "We will arrive at the hotel at 3 PM. Let's check in first." },
      { speaker: "同伴", message: "Good idea. I want to buy some souvenirs later." },
      { speaker: "旅客", message: "Me too! Can you take a photo of us?" },
      { speaker: "同伴", message: "Sure! I think we're lost. Let's ask for directions." }
    ],
    tips: "旅行常用詞彙：luggage（行李）、passport（護照）、check in（入住）、souvenirs（紀念品）。"
  },
  3: {
    title: "餐廳點餐",
    type: "對話",
    content: [
      { speaker: "服務生", message: "Good evening! Can I see the menu?" },
      { speaker: "顧客", message: "Yes, here you are. What do you recommend?" },
      { speaker: "服務生", message: "Our chef's special is excellent. Do you have vegetarian options?" },
      { speaker: "顧客", message: "Yes, we have several vegetarian dishes." },
      { speaker: "顧客", message: "I'd like to order now. Can I get this to go?" },
      { speaker: "服務生", message: "Of course. Would you like to share this dish?" },
      { speaker: "顧客", message: "That sounds good. Let's share it." },
      { speaker: "服務生", message: "Perfect. Can I have the bill, please?" },
      { speaker: "服務生", message: "Here's your receipt. Thank you!" }
    ],
    tips: "餐廳用語：menu（菜單）、order（點餐）、bill（帳單）、to go（外帶）、share（分享）。"
  },
  4: {
    title: "問路",
    type: "對話",
    content: [
      { speaker: "遊客", message: "Excuse me, I'm lost. Can you help me?" },
      { speaker: "當地人", message: "Of course! Where are you going?" },
      { speaker: "遊客", message: "I'm looking for the train station. How do I get there?" },
      { speaker: "當地人", message: "Go straight ahead for two blocks, then turn left." },
      { speaker: "遊客", message: "Is it far from here?" },
      { speaker: "當地人", message: "No, it's about a 10-minute walk. You'll see it on your right." },
      { speaker: "遊客", message: "Thank you so much! Is there a bus stop nearby?" },
      { speaker: "當地人", message: "Yes, there's one at the corner. You can take bus number 5." },
      { speaker: "遊客", message: "Perfect! Which direction should I go?" },
      { speaker: "當地人", message: "Go north on this street. You can't miss it." }
    ],
    tips: "問路常用表達：'I'm lost'（我迷路了）、'How do I get there?'（怎麼去那裡）、'turn left/right'（左轉/右轉）。"
  },
  5: {
    title: "購物對話",
    type: "對話",
    content: [
      { speaker: "顧客", message: "I'm looking for a gift for my friend." },
      { speaker: "店員", message: "What kind of gift are you looking for?" },
      { speaker: "顧客", message: "Something nice but not too expensive. What's the price of this watch?" },
      { speaker: "店員", message: "It's $89. We have a discount today - 15% off." },
      { speaker: "顧客", message: "That's great! Can I see it?" },
      { speaker: "店員", message: "Of course. The items are on the shelf over there." },
      { speaker: "顧客", message: "I'd like to buy this. Can I pay by credit card?" },
      { speaker: "店員", message: "Yes, please pay at the counter. Would you like a gift box?" },
      { speaker: "顧客", message: "Yes, please. Thank you!" }
    ],
    tips: "購物時要學會詢問價格、折扣，以及表達購買意願。記住 'look for'（尋找）、'discount'（折扣）等詞彙。"
  },
  6: {
    title: "酒店入住",
    type: "對話",
    content: [
      { speaker: "客人", message: "Hello, I have a reservation." },
      { speaker: "前台", message: "What's your name, please?" },
      { speaker: "客人", message: "John Smith. I'm staying at your hotel for three nights." },
      { speaker: "前台", message: "Let me check... Yes, I found your reservation. Can I see your passport?" },
      { speaker: "客人", message: "Here you are. Can I check in now?" },
      { speaker: "前台", message: "Of course. Your room is on the 5th floor. Here's your key card." },
      { speaker: "客人", message: "Thank you. What time is breakfast?" },
      { speaker: "前台", message: "Breakfast is served from 7 AM to 10 AM. Is there anything else I can help you with?" },
      { speaker: "客人", message: "Yes, where is the gym?" },
      { speaker: "前台", message: "It's on the 3rd floor. You can check out anytime before 11 AM." }
    ],
    tips: "酒店用語：reservation（預訂）、check in（入住）、check out（退房）、key card（房卡）。"
  },
  7: {
    title: "機場對話",
    type: "對話",
    content: [
      { speaker: "旅客", message: "I'm waiting at the airport. Where is the check-in counter?" },
      { speaker: "地勤", message: "It's on your right, near gate 12." },
      { speaker: "旅客", message: "Thank you. I'm going to Paris. What gate do I need?" },
      { speaker: "地勤", message: "Gate 8. Your flight boards in 30 minutes." },
      { speaker: "旅客", message: "We're on the plane now. Can I have a window seat?" },
      { speaker: "空服員", message: "I'm sorry, all window seats are taken. Would an aisle seat be okay?" },
      { speaker: "旅客", message: "That's fine. Where is my luggage?" },
      { speaker: "空服員", message: "It's in the overhead compartment. Please fasten your seatbelt." },
      { speaker: "旅客", message: "Thank you. When do we arrive?" },
      { speaker: "空服員", message: "We'll arrive in Paris at 3 PM local time." }
    ],
    tips: "機場常用詞彙：check-in counter（登機櫃台）、gate（登機門）、luggage（行李）、seatbelt（安全帶）。"
  },
  8: {
    title: "電話預約",
    type: "對話",
    content: [
      { speaker: "顧客", message: "Hello, I'd like to make a reservation." },
      { speaker: "餐廳", message: "Of course! For how many people?" },
      { speaker: "顧客", message: "For two, please. This Friday at 7 PM." },
      { speaker: "餐廳", message: "Let me check... Yes, we have a table available. What's your name?" },
      { speaker: "顧客", message: "It's Sarah Johnson. Can I change the time to 8 PM?" },
      { speaker: "餐廳", message: "Sure, no problem. I'll change it to 8 PM." },
      { speaker: "顧客", message: "Thank you! Do you have vegetarian options?" },
      { speaker: "餐廳", message: "Yes, we do. We'll see you on Friday at 8 PM." },
      { speaker: "顧客", message: "Perfect! See you then." }
    ],
    tips: "電話預約常用表達：'make a reservation'（預約）、'for how many people'（幾個人）、'change the time'（改時間）。"
  },
  9: {
    title: "看病就醫",
    type: "對話",
    content: [
      { speaker: "病人", message: "Hello, I have an appointment with Dr. Brown." },
      { speaker: "護士", message: "What's your name and date of birth?" },
      { speaker: "病人", message: "My name is Tom Wilson, born on March 15, 1990." },
      { speaker: "護士", message: "Please have a seat. The doctor will see you shortly." },
      { speaker: "醫生", message: "What seems to be the problem?" },
      { speaker: "病人", message: "I have a headache and feel tired." },
      { speaker: "醫生", message: "How long have you had these symptoms?" },
      { speaker: "病人", message: "For about three days. I also have a sore throat." },
      { speaker: "醫生", message: "Let me check your temperature. You have a fever. I'll prescribe some medicine." },
      { speaker: "病人", message: "Thank you, doctor. How often should I take it?" },
      { speaker: "醫生", message: "Three times a day after meals. Get plenty of rest." }
    ],
    tips: "就醫常用詞彙：appointment（預約）、symptoms（症狀）、prescribe（開處方）、medicine（藥物）。"
  },
  10: {
    title: "日常聊天",
    type: "對話",
    content: [
      { speaker: "朋友A", message: "Hi! How are you doing?" },
      { speaker: "朋友B", message: "I'm doing great, thanks! How about you?" },
      { speaker: "朋友A", message: "Pretty good. What did you do last weekend?" },
      { speaker: "朋友B", message: "I went to the movies with some friends. It was fun!" },
      { speaker: "朋友A", message: "That sounds nice! What movie did you see?" },
      { speaker: "朋友B", message: "We saw the new action movie. It was really exciting." },
      { speaker: "朋友A", message: "I want to see that too. Maybe we can go together next time?" },
      { speaker: "朋友B", message: "Sure! That would be great. What are you doing this weekend?" },
      { speaker: "朋友A", message: "I'm planning to visit the museum. Would you like to join me?" },
      { speaker: "朋友B", message: "I'd love to! Let's meet at 10 AM on Saturday." }
    ],
    tips: "日常聊天常用表達：詢問近況用 'How are you?'，分享活動用 'What did you do?'，邀請用 'Would you like to...?'"
  },
  11: {
    title: "職場溝通",
    type: "對話",
    content: [
      { speaker: "同事A", message: "Good morning! Do you have a minute?" },
      { speaker: "同事B", message: "Sure, what's up?" },
      { speaker: "同事A", message: "I need your help with the project. Can we schedule a meeting?" },
      { speaker: "同事B", message: "Of course. When would be a good time for you?" },
      { speaker: "同事A", message: "How about this afternoon at 2 PM?" },
      { speaker: "同事B", message: "That works for me. Where should we meet?" },
      { speaker: "同事A", message: "In the conference room. I'll send you the agenda." },
      { speaker: "同事B", message: "Perfect. I'll prepare the materials we need." },
      { speaker: "同事A", message: "Thanks! Let me know if you have any questions." },
      { speaker: "同事B", message: "Will do. See you at 2 PM!" }
    ],
    tips: "職場溝通重點：禮貌詢問時間、確認會議地點、準備材料。常用 'schedule a meeting'（安排會議）、'agenda'（議程）。"
  },
  12: {
    title: "社交聚會",
    type: "對話",
    content: [
      { speaker: "主人", message: "Welcome! Come in, please." },
      { speaker: "客人", message: "Thank you for inviting me! This is a nice place." },
      { speaker: "主人", message: "I'm glad you could make it. Would you like something to drink?" },
      { speaker: "客人", message: "Yes, please. I'll have a glass of water." },
      { speaker: "主人", message: "Sure. Help yourself to some snacks over there." },
      { speaker: "客人", message: "Thanks! Who else is coming tonight?" },
      { speaker: "主人", message: "A few friends from work. They should be here soon." },
      { speaker: "客人", message: "Great! I'm looking forward to meeting them." },
      { speaker: "主人", message: "Me too! Let's have a great time tonight." },
      { speaker: "客人", message: "Absolutely! This is going to be fun." }
    ],
    tips: "社交聚會常用表達：'Thank you for inviting me'（謝謝邀請）、'Help yourself'（請自便）、'looking forward to'（期待）。"
  }
};
