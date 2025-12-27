const quizData = {
  vocabulary: [
    {
      id: 1,
      difficulty: "easy",
      hint: "蘋果",
      sentence: "I eat an ____ every day.",
      fullSentence: "I eat an apple every day.",
      options: ["banana", "apple", "orange", "grape"],
      correctIndex: 1,
      explanation: "apple 是『蘋果』，而且 an 用在母音開頭的單字前。"
    },
    {
      id: 2,
      difficulty: "easy",
      hint: "學生",
      sentence: "She is a ____.",
      fullSentence: "She is a student.",
      options: ["teacher", "student", "doctor", "nurse"],
      correctIndex: 1,
      explanation: "student 表示學生，與 she 的身分相符。"
    },
    {
      id: 3,
      difficulty: "medium",
      hint: "昂貴的",
      sentence: "This bag is very ____.",
      fullSentence: "This bag is very expensive.",
      options: ["cheap", "small", "expensive", "heavy"],
      correctIndex: 2,
      explanation: "expensive 表示昂貴，very 常修飾形容詞。"
    },
    {
      id: 4,
      difficulty: "hard",
      hint: "決定",
      sentence: "He finally made a ____.",
      fullSentence: "He finally made a decision.",
      options: ["decide", "decision", "deciding", "decides"],
      correctIndex: 1,
      explanation: "make a decision 是固定用法，需使用名詞 decision。"
    }
  ],

  phrase: [
    {
      id: 5,
      difficulty: "easy",
      hint: "起床",
      sentence: "I ____ at six every morning.",
      fullSentence: "I get up at six every morning.",
      options: ["get up", "wake up", "stand up", "sit down"],
      correctIndex: 0,
      explanation: "get up 表示『起床』，wake up 只表示醒來。"
    },
    {
      id: 6,
      difficulty: "medium",
      hint: "照顧",
      sentence: "She ____ her little brother.",
      fullSentence: "She takes care of her little brother.",
      options: ["looks at", "takes care of", "takes off", "looks for"],
      correctIndex: 1,
      explanation: "take care of 表示照顧，其它片語意思不同。"
    },
    {
      id: 7,
      difficulty: "hard",
      hint: "放棄",
      sentence: "Don't ____ your dreams.",
      fullSentence: "Don't give up your dreams.",
      options: ["give out", "give away", "give up", "give off"],
      correctIndex: 2,
      explanation: "give up 表示放棄，其它 give + 副詞意思不同。"
    }
  ],

  preposition: [
    {
      id: 8,
      difficulty: "easy",
      hint: "在桌子上",
      sentence: "The book is ____ the table.",
      fullSentence: "The book is on the table.",
      options: ["in", "on", "at", "to"],
      correctIndex: 1,
      explanation: "on 用於物體在『表面』上。"
    },
    {
      id: 9,
      difficulty: "medium",
      hint: "在房間裡",
      sentence: "He is ____ the room.",
      fullSentence: "He is in the room.",
      options: ["on", "at", "in", "to"],
      correctIndex: 2,
      explanation: "in 用於表示在封閉空間內。"
    },
    {
      id: 10,
      difficulty: "hard",
      hint: "在某個時間點",
      sentence: "The meeting starts ____ 9 a.m.",
      fullSentence: "The meeting starts at 9 a.m.",
      options: ["in", "on", "at", "to"],
      correctIndex: 2,
      explanation: "at 用於『確切時間點』。"
    }
  ]
};

export default quizData;
