import { useLocation, useNavigate } from "react-router-dom";
import { ROUND_THEMES } from "../components/RoundSelector.jsx";
import "./DetailPage.css";

export default function DetailPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { answerDetails, round, score, correctCount, totalQuestions } = state || {};

  if (!answerDetails || answerDetails.length === 0) {
    return (
      <main className="detail-page">
        <div className="detail-container">
          <div className="detail-header">
            <h1 className="detail-title">📋 答題詳情</h1>
            <p>沒有答題記錄</p>
            <button className="btn-back" onClick={() => navigate("/result", { state: { answerDetails, round, score, correctCount, totalQuestions } })}>
              ← 返回結果
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="detail-page">
      <div className="detail-container">
        <div className="detail-header">
          <h1 className="detail-title">📋 答題詳情</h1>
          <div className="detail-info">
            <span>第 {round || 1} 回合：{ROUND_THEMES[round] || "未知主題"}</span>
            <span>總分：{score}/60</span>
          </div>
        </div>

        <div className="questions-list">
          {answerDetails.map((detail, index) => (
            <div
              key={index}
              className={`question-detail ${detail.isCorrect ? "correct" : "wrong"}`}
            >
              <div className="question-header">
                <div className="question-number">題目 {index + 1}</div>
                <div className={`question-status ${detail.isCorrect ? "status-correct" : "status-wrong"}`}>
                  {detail.isCorrect ? "✅ 答對" : "❌ 答錯"}
                </div>
              </div>

              <div className="question-hint">中文提示：{detail.hint}</div>

              <div className="question-sentence">
                <div className="sentence-label">題目：</div>
                <div className="sentence-text">{detail.fullSentence}</div>
              </div>

              <div className="question-options">
                <div className="options-label">選項：</div>
                <div className="options-list">
                  {detail.options.map((option, optIndex) => {
                    let optionClass = "option-item";
                    if (optIndex === detail.correctAnswer) {
                      optionClass += " correct-option";
                    }
                    if (optIndex === detail.userAnswer && !detail.isCorrect) {
                      optionClass += " wrong-option";
                    }
                    return (
                      <div key={optIndex} className={optionClass}>
                        {option}
                        {optIndex === detail.correctAnswer && <span className="option-label">✓ 正確答案</span>}
                        {optIndex === detail.userAnswer && !detail.isCorrect && <span className="option-label">✗ 你的答案</span>}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="question-explanation">
                <div className="explanation-label">解析：</div>
                <div className="explanation-text">{detail.explanation}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="detail-buttons">
          <button className="btn-back" onClick={() => navigate("/result", { state: { answerDetails, round, score, correctCount, totalQuestions } })}>
            ← 返回結果
          </button>
        </div>
      </div>
    </main>
  );
}

