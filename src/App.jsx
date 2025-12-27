import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { ROUND_THEMES } from "./components/RoundSelector.jsx";
import QuizPage from "./page/QuizPage.jsx";
import ResultPage from "./page/ResultPage.jsx";
import "./App.css";

function ModeSelector({ onStart, round, setRound }) {
  const navigate = useNavigate();

  const go = (selectedRound) => {
    if (typeof onStart === "function") onStart(selectedRound);
    navigate("/quiz", { state: { round: selectedRound } });
  };

  return (
    <main className="main-area">
      <div className="home-header">
        <h1 className="main-title">🎓 英文學習挑戰</h1>
      </div>

      <div className="rounds-grid">
        {Object.entries(ROUND_THEMES).map(([roundNum, theme], index) => (
          <div
            key={roundNum}
            className={`round-card ${Number(roundNum) === round ? "selected" : ""}`}
            onClick={() => setRound(Number(roundNum))}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="round-number">第 {roundNum} 回合</div>
            <div className="round-theme-text">{theme}</div>
            <button
              className="round-start-btn"
              onClick={(e) => {
                e.stopPropagation();
                go(Number(roundNum));
              }}
            >
              開始挑戰 →
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}

export default function App() {
  const [round, setRound] = useState(1);
  const handleStart = (round) => {
    console.log("Quiz start:", "round:", round);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
        <ModeSelector
          onStart={handleStart}
          round={round}
          setRound={setRound}
        />
        }
      />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}