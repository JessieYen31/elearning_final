import { useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./QuizPage.css";
import quizData from "../data/QuizData.jsx";

export default function QuizPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const mode = state?.mode ?? "all";
  const difficulty = state?.difficulty ?? "easy";

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);

  // ✅ 根據模式 + 難度取得題目清單
  const questions = useMemo(() => {
    let list = [];

    if (mode === "all") {
      list = [
        ...quizData.vocabulary,
        ...quizData.phrase,
        ...quizData.preposition
      ];
    } else {
      list = quizData[mode] ?? [];
    }

    if (difficulty !== "all") {
      list = list.filter(q => q.difficulty === difficulty);
    }

    return list;
  }, [mode, difficulty]);

  // 🚨 防呆（避免沒有題目）
  if (questions.length === 0) {
    return (
      <main className="quiz-container">
        <h2>⚠️ 沒有符合的題目</h2>
        <button onClick={() => navigate("/")}>回首頁</button>
      </main>
    );
  }

  const question = questions[currentIndex];

  return (
    <main>
      <div className="quiz-container">
        <h2 className="quiz-title">📘 英文填空練習</h2>

        <p className="meta">
          模式：{mode} ／ 難度：{difficulty}  
          （{currentIndex + 1} / {questions.length}）
        </p>

        <button className="back-btn" onClick={() => navigate("/")}>
          ← 回首頁
        </button>

        {state?.difficulty != "hard" ? <p className="hint">中文提示：{question.hint}</p>:''}

        <div className="sentence">
          {selected === null
            ? question.sentence
            : question.fullSentence}
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
                onClick={() => setSelected(index)}
                disabled={selected !== null}
              >
                {option}
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

            <div style={{ marginTop: 12 }}>
              <button
                onClick={() => {
                  setSelected(null);
                  setCurrentIndex(
                    (prev) => (prev + 1) % questions.length
                  );
                }}
              >
                下一題 ▶
              </button>

              <button
                onClick={() => navigate("/")}
                style={{ marginLeft: 8 }}
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
