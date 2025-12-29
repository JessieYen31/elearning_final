import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUND_THEMES } from "../components/RoundSelector.jsx";
import { MATERIALS } from "../data/MaterialsData.jsx";
import "./MaterialsPage.css";

// 語音播放功能
const speakText = (text) => {
  if ('speechSynthesis' in window) {
    // 停止當前播放
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9; // 語速
    utterance.pitch = 1; // 音調
    utterance.volume = 1; // 音量
    
    window.speechSynthesis.speak(utterance);
    
    return () => {
      window.speechSynthesis.cancel();
    };
  } else {
    alert('您的瀏覽器不支援語音播放功能');
  }
};

export default function MaterialsPage() {
  const navigate = useNavigate();
  const [selectedRound, setSelectedRound] = useState(1);

  const allRounds = Object.keys(ROUND_THEMES).map(Number).sort((a, b) => a - b);
  const currentMaterial = MATERIALS[selectedRound];

  return (
    <main className="materials-page">
      <div className="materials-container">
        <div className="materials-header">
          <h1 className="materials-title">📖 學習教材</h1>
        </div>

        <div className="materials-content">
          {/* 左側：回合選擇 */}
          <div className="rounds-sidebar">
            <h2 className="sidebar-title">選擇回合</h2>
            <div className="rounds-list">
              {allRounds.map((round) => (
                <button
                  key={round}
                  className={`round-item ${selectedRound === round ? "active" : ""}`}
                  onClick={() => setSelectedRound(round)}
                >
                  <div className="round-item-number">第 {round} 回合</div>
                  <div className="round-item-theme">{ROUND_THEMES[round]}</div>
                </button>
              ))}
            </div>
          </div>

          {/* 右側：教材內容 */}
          <div className="material-content-area">
            {currentMaterial ? (
              <>
                <div className="material-header">
                  <h2 className="material-title">{currentMaterial.title}</h2>
                  <span className="material-type">{currentMaterial.type}</span>
                </div>
                
                {Array.isArray(currentMaterial.content) ? (
                  <div className="chat-container">
                    {currentMaterial.content.map((item, index) => {
                      // 判斷是左側還是右側：根據說話者類型
                      // 右側（用戶視角）：顧客、旅客、遊客、病人、朋友A、同事A、客人
                      // 左側（服務提供者）：店員、服務生、前台、地勤、空服員、餐廳、護士、醫生、當地人、機場人員、同伴、朋友B、同事B、主人
                      const rightSpeakers = ["顧客", "旅客", "遊客", "病人", "朋友A", "同事A", "客人"];
                      const isRight = rightSpeakers.some(speaker => item.speaker.includes(speaker));
                      
                      // 角色名稱英文映射
                      const speakerMap = {
                        "顧客": "Customer",
                        "店員": "Clerk",
                        "旅客": "Traveler",
                        "機場人員": "Airport Staff",
                        "同伴": "Companion",
                        "服務生": "Waiter",
                        "遊客": "Tourist",
                        "當地人": "Local",
                        "客人": "Guest",
                        "前台": "Receptionist",
                        "地勤": "Ground Staff",
                        "空服員": "Flight Attendant",
                        "餐廳": "Restaurant",
                        "病人": "Patient",
                        "護士": "Nurse",
                        "醫生": "Doctor",
                        "朋友A": "Friend A",
                        "朋友B": "Friend B",
                        "同事A": "Colleague A",
                        "同事B": "Colleague B",
                        "主人": "Host"
                      };
                      
                      const speakerEn = speakerMap[item.speaker] || item.speaker;
                      
                      return (
                        <div key={index} className={`chat-message ${isRight ? "right" : "left"}`}>
                          <div className={`message-speaker-outside ${isRight ? "speaker-right" : "speaker-left"}`}>{speakerEn}</div>
                          <div className="message-bubble">
                            <button
                              className="speak-button"
                              onClick={() => speakText(item.message)}
                              title="點擊播放語音"
                            >
                              🔊
                            </button>
                            <div className="message-text">{item.message}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="material-text">
                    {currentMaterial.content.split('\n').map((line, index) => {
                      if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                        const text = line.trim().replace(/\*\*/g, '');
                        return <h3 key={index} className="material-subtitle">{text}</h3>;
                      }
                      if (line.trim() === '') {
                        return <br key={index} />;
                      }
                      return <p key={index} className="material-paragraph">{line}</p>;
                    })}
                  </div>
                )}

                <div className="material-tips">
                  <div className="tips-label">💡 學習重點：</div>
                  <div className="tips-content">{currentMaterial.tips}</div>
                </div>
              </>
            ) : (
              <div className="no-material">暫無教材內容</div>
            )}
          </div>
        </div>

        <div className="materials-buttons">
          <button className="btn-back" onClick={() => navigate("/")}>
            ← 回首頁
          </button>
        </div>
      </div>
    </main>
  );
}

