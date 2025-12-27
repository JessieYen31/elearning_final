import { useEffect, useState } from "react";
import "./styles/ScoreAnimation.css";

export default function ScoreAnimation({ points, show, onComplete }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setIsVisible(true);
      const timer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [show, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="score-animation">
      <div className="score-popup">
        <div className="score-icon">✨</div>
        <div className="score-text">+{points} 分</div>
        {points >= 5 && (
          <div className="bonus-text">連續答對獎勵！</div>
        )}
      </div>
    </div>
  );
}

