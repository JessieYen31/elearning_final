import "./styles/RoundSelector.css";

// 定義12個回合的主題
export const ROUND_THEMES = {
  1: "向店員詢問價錢",
  2: "旅行中的對話",
  3: "餐廳點餐",
  4: "問路",
  5: "購物對話",
  6: "酒店入住",
  7: "機場對話",
  8: "電話預約",
  9: "看病就醫",
  10: "日常聊天",
  11: "職場溝通",
  12: "社交聚會"
};

export default function RoundSelector({ value, onChange }) {
  return (
    <div className="round-selector">
      <label className="round-label">選擇回合：</label>
      <select value={value} onChange={(e) => onChange(Number(e.target.value))}>
        {Object.entries(ROUND_THEMES).map(([round, theme]) => (
          <option key={round} value={round}>
            第{round}回合：{theme}
          </option>
        ))}
      </select>
    </div>
  );
}

