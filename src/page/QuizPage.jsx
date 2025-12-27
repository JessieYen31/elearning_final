import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./QuizPage.css";
import quizData from "../data/QuizData.jsx";
import ScoreAnimation from "../components/ScoreAnimation.jsx";
import { ROUND_THEMES } from "../components/RoundSelector.jsx";

export default function QuizPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const round = state?.round ?? 1;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [correctCount, setCorrectCount] = useState(0);
  const [consecutiveCorrect, setConsecutiveCorrect] = useState(0);
  const [showScoreAnimation, setShowScoreAnimation] = useState(false);
  const [animationPoints, setAnimationPoints] = useState(0);

  // ✅ 根據回合取得題目清單
  const questions = useMemo(() => {
    const roundQuestions = quizData[round] ?? [];
    
    // 打亂題目順序
    const shuffled = [...roundQuestions];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
  }, [round]);

  // 🚨 防呆（避免沒有題目）
  if (questions.length === 0) {
    return (
      <main className="quiz-container">
        <h2>⚠️ 沒有符合的題目</h2>
        <button onClick={() => navigate("/")}>回首頁</button>
      </main>
    );
  }

  // 檢查是否完成所有題目
  const isCompleted = currentIndex >= questions.length;

  // 處理答題結果
  const handleAnswer = (answerIndex) => {
    if (selected !== null) return; // 已經答過題了

    const isCorrect = answerIndex === questions[currentIndex].correctIndex;
    
    if (isCorrect) {
      const newConsecutive = consecutiveCorrect + 1;
      setConsecutiveCorrect(newConsecutive);
      setCorrectCount(prev => prev + 1);
      
      // 每答對一題+3分
      setScore(prev => prev + 3);
      
      // 如果連續答對5題，額外+5分並顯示特殊動畫
      if (newConsecutive === 5) {
        setScore(prev => prev + 5);
        setAnimationPoints(5);
        setConsecutiveCorrect(0); // 重置連續計數
      } else {
        // 一般答對顯示+3分動畫
        setAnimationPoints(3);
      }
      
      // 顯示加分動畫
      setShowScoreAnimation(true);
    } else {
      // 答錯重置連續答對計數
      setConsecutiveCorrect(0);
    }

    setSelected(answerIndex);
  };

  // 處理下一題
  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      // 完成所有題目，跳轉到結果頁面
      navigate("/result", {
        state: {
          score,
          totalQuestions: questions.length,
          correctCount,
          round
        }
      });
    } else {
      setCurrentIndex(prev => prev + 1);
      setSelected(null);
    }
  };

  const question = questions[currentIndex];

  return (
    <main>
      <div className="quiz-page-header">
        <div className="header-content">
          <div className="progress-info">
            題目 {currentIndex + 1} / {questions.length}
          </div>
          <h1 className="quiz-title">
            第 {round} 回合：{ROUND_THEMES[round]}
          </h1>
          <div className="score-display-inline">
            <span className="score-label-inline">分數</span>
            <span className="score-value-inline">{score}</span>
          </div>
        </div>
      </div>

      <div className="quiz-container">

        <p className="hint">中文提示：{question.hint}</p>

        <div className="sentence-wrapper">
          <div className="sentence">
            {selected === null
              ? question.sentence
              : question.fullSentence}
            {/* 加分動畫 */}
            <ScoreAnimation
              points={animationPoints}
              show={showScoreAnimation}
              onComplete={() => setShowScoreAnimation(false)}
            />
          </div>
        </div>

        <div className="options">
          {question.options.map((option, index) => {
            let btnClass = "option-btn";

            if (selected !== null) {
              if (index === question.correctIndex) {
                btnClass += " correct";
              } else if (index === selected) {
                btnClass += " wrong";
              }
            }

            return (
              <button
                key={index}
                className={btnClass}
                onClick={() => handleAnswer(index)}
                disabled={selected !== null}
              >
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {selected !== null && (
          <div className="result">
            {selected === question.correctIndex
              ? "✅ 答對了！"
              : "❌ 答錯了"}

            <div className="explanation">
              <strong>解析：</strong>{question.explanation}
            </div>

            <div className="result-actions">
              <button
                onClick={handleNext}
                className="next-btn"
              >
                {currentIndex + 1 >= questions.length ? "查看結果 🎉" : "下一題 ▶"}
              </button>

              <button
                onClick={() => navigate("/")}
                className="back-home-btn"
              >
                回首頁
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
