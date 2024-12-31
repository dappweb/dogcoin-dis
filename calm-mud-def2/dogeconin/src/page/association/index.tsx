import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Association() {
  const navigate = useNavigate();

  return (
    <div className="association-main-container">
      <div className="association-header">
        <div 
          className="association-group" 
          onClick={() => navigate("/property")}
          style={{ cursor: 'pointer' }}
        />
        <span className="association-revenue-details">Revenue Details</span>
      </div>

      <div className="association-tabs">
        <button 
          className="association-tab-button"
          onClick={() => navigate("/share")}
        >
          <span className="association-tab-text">Share rewards</span>
        </button>
        <button 
          className="association-tab-button"
          onClick={() => navigate("/team")}
        >
          <span className="association-tab-text">Team rewards</span>
        </button>
        <button 
          className="association-tab-button active"
          onClick={() => navigate("/association")}
        >
          <span className="association-tab-text">Community rewards</span>
        </button>
      </div>

      <div className="association-table-header">
        <span className="association-time">時間</span>
        <span className="association-quantity">數量</span>
      </div>

      {[...Array(10)].map((_, index) => (
        <div key={index} className="association-list-item">
          <span className="association-date-time">12/24/2024 14:55</span>
          <span className="association-amount">50000</span>
        </div>
      ))}
    </div>
  );
}
