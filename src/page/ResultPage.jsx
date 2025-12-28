import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUND_THEMES } from "../components/RoundSelector.jsx";
import "./ResultPage.css";

export default function ResultPage() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const { score, totalQuestions, correctCount, round, answerDetails } = state || {};

  // 保存學習紀錄到 localStorage
  useEffect(() => {
    if (round && score !== undefined) {
      const savedRecords = localStorage.getItem("learningRecords");
      const records = savedRecords ? JSON.parse(savedRecords) : {};
      
      records[round] = {
        score,
        correctCount,
        totalQuestions,
        timestamp: Date.now(),
        answerDetails: answerDetails || [] // 保存答題詳情
      };
      
      localStorage.setItem("learningRecords", JSON.stringify(records));
    }
  }, [round, score, correctCount, totalQuestions, answerDetails]);

  // 計算正確率
  const accuracy = totalQuestions > 0 
    ? Math.round((correctCount / totalQuestions) * 100) 
    : 0;

  // 計算星星數量（根據正確率）
  const getStars = () => {
    if (accuracy >= 90) return 5;
    if (accuracy >= 80) return 4;
    if (accuracy >= 70) return 3;
    if (accuracy >= 60) return 2;
    if (accuracy >= 50) return 1;
    return 0;
  };

  const stars = getStars();

  // 獲取評級文字
  const getRating = () => {
    if (stars === 5) return "完美！";
    if (stars === 4) return "優秀！";
    if (stars === 3) return "良好！";
    if (stars === 2) return "還可以";
    if (stars === 1) return "繼續努力";
    return "再試一次";
  };

  // 獲取鼓勵訊息
  const getMessage = () => {
    if (stars === 5) return "你真是太棒了！全部答對！";
    if (stars >= 4) return "表現非常出色！";
    if (stars >= 3) return "做得不錯，繼續加油！";
    if (stars >= 2) return "還有進步空間，再試試看！";
    return "沒關係，多練習就會進步！";
  };

  return (
    <main className="result-page">
      <div className="result-container">
        <div className="result-header">
          <h1 className="result-title">🎉 測驗完成！</h1>
          <div className="rating-text">{getRating()}</div>
        </div>

        {/* 星星顯示 */}
        <div className="stars-container">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${star <= stars ? "filled" : "empty"}`}
            >
              ⭐
            </span>
          ))}
        </div>

        {/* 統計資訊 */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-icon">📊</div>
            <div className="stat-value">{correctCount}</div>
            <div className="stat-label">答對題數</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">📝</div>
            <div className="stat-value">{totalQuestions}</div>
            <div className="stat-label">總題數</div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">🎯</div>
            <div className="stat-value">{accuracy}%</div>
            <div className="stat-label">正確率</div>
          </div>

          <div 
            className="stat-card stat-card-clickable"
            onClick={() => answerDetails && answerDetails.length > 0 && navigate("/detail", { state: { answerDetails, round, score } })}
            style={{ cursor: answerDetails && answerDetails.length > 0 ? 'pointer' : 'default' }}
          >
            <div className="stat-icon">⭐</div>
            <div className="stat-value">
              {score}<span className="score-max">/60</span>
            </div>
            <div className="stat-label">
              總分{answerDetails && answerDetails.length > 0 && <span className="click-hint">（點擊查看詳情）</span>}
            </div>
          </div>
        </div>

        {/* 鼓勵訊息 */}
        <div className="message-box">
          <p>{getMessage()}</p>
        </div>

        {/* 回合資訊 */}
        <div className="mode-info">
          <span>第 {round || 1} 回合</span>
          <span>{ROUND_THEMES[round] || "未知主題"}</span>
        </div>

        {/* 按鈕 */}
        <div className="result-buttons">
          <button
            className="btn-secondary"
            onClick={() => navigate("/")}
          >
            ← 回首頁
          </button>
          <button
            className="btn-secondary"
            onClick={() => navigate("/record")}
          >
            📚 學習紀錄
          </button>
        </div>
      </div>
    </main>
  );
}

