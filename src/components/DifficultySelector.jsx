import "./styles/DifficultySelector.css";
export default function DifficultySelector({ value, onChange }) {
  return (
    <div className="difficulty-selector">
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="all">全部難易度</option>
        <option value="easy">簡單</option>
        <option value="medium">中等</option>
        <option value="hard">困難</option>
      </select>
    </div>
  );
}
