import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Details() {
  const navigate = useNavigate();

  return (
    <div className="details-main-container">
      <div className="details-flex-row-bcd">
        {/* <div className="details-group" /> */}
        <div 
          className="details-group" 
          onClick={() => navigate("/property")}
          style={{ cursor: 'pointer' }}
        />
        <span className="details-revenue-details">Revenue Details</span>
      </div>
      <div className="details-group-1">
        <button 
          className="details-rectangle-backup"
          onClick={() => navigate("/details")}
          style={{ cursor: 'pointer' }}
        />
        <button 
          className="details-rectangle-backup-2"
          onClick={() => navigate("/share")}
          style={{ cursor: 'pointer' }}
        />
        <div 
          className="details-rectangle-backup-3"
          onClick={() => navigate("/team")}
          style={{ cursor: 'pointer' }}
        />
        <div 
          className="details-rectangle-backup-4"
          onClick={() => navigate("/community")}
          style={{ cursor: 'pointer' }}
        />
        <span className="details-static-income">Static income</span>
        <span className="details-team-rewards">Team rewards</span>
        <span className="details-sharing-rewards">Sharing rewards</span>
        <span className="details-community-rewards">Community rewards</span>
      </div>
      <div className="details-flex-row-cd">
        <span className="details-time">時間</span>
        <span className="details-quantity">數量</span>
      </div>
      <div className="details-group-4">
        <div className="details-rectangle" />
        <span className="details-time-info">12/24/2024 14:55</span>
        <span className="details-quantity-info">50000</span>
      </div>
      <div className="details-group-5">
        <div className="details-rectangle-backup-6" />
        <span className="details-backup-time-info">12/24/2024 14:55</span>
        <span className="details-backup-quantity">50000</span>
      </div>
      <div className="details-grouped-div">
        <div className="details-backup-rectangle" />
        <span className="details-backup-info">12/24/2024 14:55</span>
        <span className="details-backup-amount">50000</span>
      </div>
      <div className="details-grouped-div-7">
        <div className="details-backup-rectangle-8" />
        <span className="details-backup-info-9">12/24/2024 14:55</span>
        <span className="details-backup-amount-a">50000</span>
      </div>
      <div className="details-grouped-div-b">
        <div className="details-backup-rectangle-c" />
        <span className="details-backup-info-d">12/24/2024 14:55</span>
        <span className="details-backup">50000</span>
      </div>
      <div className="details-group-e">
        <div className="details-rectangle-backup-f" />
        <span className="details-backup-date">12/24/2024 14:55</span>
        <span className="details-backup-10">50000</span>
      </div>
      <div className="details-group-11">
        <div className="details-rectangle-backup-12" />
        <span className="details-backup-date-13">12/24/2024 14:55</span>
        <span className="details-backup-14">50000</span>
      </div>
      <div className="details-group-15">
        <div className="details-rectangle-backup-16" />
        <span className="details-text-15">12/24/2024 14:55</span>
        <span className="details-text-16">50000</span>
      </div>
      <div className="details-box-5">
        <div className="details-box-6" />
        <span className="details-text-17">12/24/2024 14:55</span>
        <span className="details-text-18">50000</span>
      </div>
      <div className="details-group-3">
        <div className="details-box-7" />
        <span className="details-text-19">12/24/2024 14:55</span>
        <span className="details-backup-17">50000</span>
      </div>
    </div>
  );
}
