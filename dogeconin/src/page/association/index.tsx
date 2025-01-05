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

      <div className="association-tabs-container">
        <div className="association-tabs-scroll">
          <div 
            className="association-tab-item"
            onClick={() => navigate("/details")}
          >
            <div className="association-rectangle-backup" />
            <span className="association-static-income">Static income</span>
          </div>
          
          <div 
            className="association-tab-item"
            onClick={() => navigate("/share")}
          >
            <div className="association-rectangle-backup-1" />
            <span className="association-sharing-rewards">Sharing rewards</span>
          </div>
          
          <div 
            className="association-tab-item"
            onClick={() => navigate("/team")}
          >
            <div className="association-rectangle-backup-2" />
            <span className="association-team-rewards">Team rewards</span>
          </div>
          
          <div 
            className="association-tab-item"
            onClick={() => navigate("/association")}
          >
            <div className="association-rectangle-backup-3 active" />
            <span className="association-community-rewards">Community rewards</span>
          </div>
        </div>
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
