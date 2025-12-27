import { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import DifficultySelector from "./components/DifficultySelector.jsx";
import QuizPage from "./page/QuizPage.jsx"; // 若路徑不同請改成 ./page/QuizPage.jsx
import "./App.css";

function ModeSelector({ onStart, difficulty, setDifficulty }) {
  const navigate = useNavigate();

  const go = (mode) => {
    if (typeof onStart === "function") onStart(mode);
    navigate("/quiz", { state: { mode, difficulty } });
  };

  return (
    <main className="main-area">
      <h1>簡易英文測試</h1>
      <div className="mode-container">
        <h2>📚 請選擇學習模式</h2>

        <DifficultySelector value={difficulty} onChange={setDifficulty} />

        <button onClick={() => go("all")}>1️⃣ 全部</button>
        <button onClick={() => go("vocabulary")}>2️⃣ 單字</button>
        <button onClick={() => go("phrase")}>3️⃣ 片語</button>
        <button onClick={() => go("preposition")}>4️⃣ 介系詞</button>
      </div>
    </main>
  );
}

export default function App() {
  const [difficulty, setDifficulty] = useState("easy");
  const handleStart = (mode) => {
    console.log("Quiz start:", mode, "difficulty:", difficulty);
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <ModeSelector
            onStart={handleStart}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
          />
        }
      />
      <Route path="/quiz" element={<QuizPage />} />
      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
}