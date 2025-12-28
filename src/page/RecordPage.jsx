import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUND_THEMES } from "../components/RoundSelector.jsx";
import "./RecordPage.css";

export default function RecordPage() {
  const navigate = useNavigate();
  const [records, setRecords] = useState({});

  useEffect(() => {
    // 從 localStorage 讀取學習紀錄
    const savedRecords = localStorage.getItem("learningRecords");
    if (savedRecords) {
      setRecords(JSON.parse(savedRecords));
    }
  }, []);

  // 獲取所有回合
  const allRounds = Object.keys(ROUND_THEMES).map(Number).sort((a, b) => a - b);

  // 格式化日期
  const formatDate = (timestamp) => {
    if (!timestamp) return "";
    const date = new Date(timestamp);
    return date.toLocaleDateString("zh-TW", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <main className="record-page">
      <div className="record-container">
        <div className="record-header">
          <h1 className="record-title">📚 學習紀錄</h1>
        </div>

        <div className="records-list">
          {allRounds.map((round) => {
            const record = records[round];
            const isCompleted = !!record;
            
            return (
              <div
                key={round}
                className={`record-item ${isCompleted ? "completed" : "not-completed"}`}
              >
                <div className="record-round-info">
                  <div className="record-round-number">第 {round} 回合</div>
                  <div className="record-round-theme">{ROUND_THEMES[round]}</div>
                </div>
                
                {isCompleted ? (
                  <div className="record-details">
                    <div className="record-score">
                      <span className="score-label">上次分數：</span>
                      <span className="score-value">{record.score}/60</span>
                    </div>
                    <div className="record-date">
                      {formatDate(record.timestamp)}
                    </div>
                    <div className="record-status completed-badge">✓ 已完成</div>
                  </div>
                ) : (
                  <div className="record-details">
                    <div className="record-status not-completed-badge">尚未完成</div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="record-buttons">
          <button
            className="btn-back"
            onClick={() => navigate("/")}
          >
            ← 回首頁
          </button>
        </div>
      </div>
    </main>
  );
}

