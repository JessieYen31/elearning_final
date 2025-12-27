import { useState } from "react";

export default function QuizCard({ question }) {
  const [selected, setSelected] = useState(null);

  return (
    <div className="quiz-card">
      <p className="hint">提示：{question.hint}</p>

      <h3 className="sentence">
        {selected === null
          ? question.sentence
          : question.fullSentence}
      </h3>

      {question.options.map((opt, index) => {
        let className = "option-btn";

        if (selected !== null) {
          if (index === question.correctIndex) {
            className += " correct";
          } else if (index === selected) {
            className += " wrong";
          }
        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => setSelected(index)}
            disabled={selected !== null}
          >
            {opt}
          </button>
        );
      })}

      {selected !== null && (
        <div className="explanation">
          <strong>解析：</strong>{question.explanation}
        </div>
      )}
    </div>
  );
}
