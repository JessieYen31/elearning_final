export default function CategorySelector({ current, onChange }) {
  return (
    <div className="category-bar">
      <button onClick={() => onChange("vocabulary")}
        className={current === "vocabulary" ? "active" : ""}>
        單字
      </button>

      <button onClick={() => onChange("phrase")}
        className={current === "phrase" ? "active" : ""}>
        片語
      </button>

      <button onClick={() => onChange("preposition")}
        className={current === "preposition" ? "active" : ""}>
        介系詞
      </button>
    </div>
  );
}
