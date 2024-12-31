import { useNavigate } from "react-router-dom";
import "./index.css";
    
export default function Team() {
  const navigate = useNavigate();

  return (
    <div className="team-main-container">
      <div className="team-flex-row-c">
        <div 
          className="team-group" 
          onClick={() => navigate("/property")}
          style={{ cursor: 'pointer' }}
        />
        <span className="team-revenue-details">Revenue Details</span>
      </div>
      <div className="team-group-1">
        <button 
          className="team-rectangle-backup-1"
          onClick={() => navigate("/share")}
          // style={{ cursor: 'pointer' }}
        />
        <button 
          className="team-rectangle-backup-2"
          onClick={() => navigate("/team")}
          // style={{ cursor: 'pointer' }}
        />
        <button 
          className="team-rectangle-backup-3"
          onClick={() => navigate("/association")}
          // style={{ cursor: 'pointer' }}
        />
        <span className="team-sharing-rewards">Share rewards</span>
        <span className="team-team-rewards">Team rewards</span>
        <span className="team-association-rewards">Community rewards</span>
      </div>
      <div className="team-flex-row-dab">
        <span className="team-time">時間</span>
        <span className="team-quantity">數量</span>
      </div>
      <div className="team-group-5">
        <div className="team-rectangle" />
        <span className="team-date-time">12/24/2024 14:55</span>
        <span className="team-amount">50000</span>
      </div>
      <div className="team-group-6">
        <div className="team-backup-rectangle" />
        <span className="team-backup-date-time">12/24/2024 14:55</span>
        <span className="team-backup-amount">50000</span>
      </div>
      <div className="team-box-3">
        <div className="team-box-4" />
        <span className="team-text-c">12/24/2024 14:55</span>
        <span className="team-text-d">50000</span>
      </div>
      <div className="team-wrapper-5">
        <div className="team-wrapper-6" />
        <span className="team-text-e">12/24/2024 14:55</span>
        <span className="team-text-f">50000</span>
      </div>
      <div className="team-box-5">
        <div className="team-section-2" />
        <span className="team-text-10">12/24/2024 14:55</span>
        <span className="team-text-11">50000</span>
      </div>
      <div className="team-grouped-div">
        <div className="team-backup-rectangle-7" />
        <span className="team-backup-date">12/24/2024 14:55</span>
        <span className="team-backup-amount-8">50000</span>
      </div>
      <div className="team-grouped-div-9">
        <div className="team-backup-rectangle-a" />
        <span className="team-backup-date-b">12/24/2024 14:55</span>
        <span className="team-backup-amount-c">50000</span>
      </div>
      <div className="team-grouped-div-d">
        <div className="team-backup-rectangle-e" />
        <span className="team-backup-date-f">12/24/2024 14:55</span>
        <span className="team-backup-amount-10">50000</span>
      </div>
      <div className="team-backup-group">
        <div className="team-rectangle-backup-11" />
        <span className="team-backup-date-12">12/24/2024 14:55</span>
        <span className="team-backup-amount-13">50000</span>
      </div>
      <div className="team-backup-group-14">
        <div className="team-rectangle-backup-15" />
        <span className="team-backup-date-16">12/24/2024 14:55</span>
        <span className="team-backup-amount-17">50000</span>
      </div>
    </div>
  );
}
