import "./index.css";
import { useNavigate } from "react-router-dom";

export default function Share() {
  const navigate = useNavigate();

  return (
    <div className="share-main-container">
      <div className="share-flex-row-a">
        <div 
          className="share-group" 
          onClick={() => navigate("/property")}
          style={{ cursor: 'pointer' }}
        />
        <span className="share-revenue-details">Revenue Details</span>
      </div>
      <div className="share-group-1">
        <button 
          className="share-rectangle-backup"
          onClick={() => navigate("/details")}
          style={{ cursor: 'pointer' }}
        />
        <button 
          className="share-rectangle-backup-2"
          onClick={() => navigate("/share")}
          style={{ cursor: 'pointer' }}
        />
        <div 
          className="share-rectangle-backup-3"
          onClick={() => navigate("/team")}
          style={{ cursor: 'pointer' }}
        />
        <span className="share-static-income">Static income</span>
        <span className="share-team-rewards">Team rewards</span>
        <span className="share-sharing-rewards">Sharing rewards</span>
      </div>
      <div className="share-flex-row-fc">
        <span className="share-time">時間</span>
        <span className="share-quantity">數量</span>
      </div>
      <div className="share-group-4">
        <div className="share-rectangle" />
        <span className="share-time-text">12/24/2024 14:55</span>
        <span className="share-quantity-text">50000</span>
      </div>
      <div className="share-group-5">
        <div className="share-backup-rectangle" />
        <span className="share-backup-time-text">12/24/2024 14:55</span>
        <span className="share-backup-quantity">50000</span>
      </div>
      <div className="share-grouped-div">
        <div className="share-backup-rectangle-6" />
        <span className="share-backup-info">12/24/2024 14:55</span>
        <span className="share-backup-amount">50000</span>
      </div>
      <div className="share-grouped-div-7">
        <div className="share-backup-rectangle-8" />
        <span className="share-backup-info-9">12/24/2024 14:55</span>
        <span className="share-backup-amount-a">50000</span>
      </div>
      <div className="share-grouped-div-b">
        <div className="share-backup-rectangle-c" />
        <span className="share-backup-info-d">12/24/2024 14:55</span>
        <span className="share-text-10">50000</span>
      </div>
      <div className="share-group-7">
        <div className="share-box-4" />
        <span className="share-text-11">12/24/2024 14:55</span>
        <span className="share-text-12">50000</span>
      </div>
      <div className="share-box-5">
        <div className="share-group-8" />
        <span className="share-text-13">12/24/2024 14:55</span>
        <span className="share-text-14">50000</span>
      </div>
      <div className="share-section-5">
        <div className="share-wrapper-2" />
        <span className="share-text-15">12/24/2024 14:55</span>
        <span className="share-text-16">50000</span>
      </div>
      <div className="share-wrapper-3">
        <div className="share-box-6" />
        <span className="share-text-17">12/24/2024 14:55</span>
        <span className="share-text-18">50000</span>
      </div>
      <div className="share-wrapper-4">
        <div className="share-box-7" />
        <span className="share-text-19">12/24/2024 14:55</span>
        <span className="share-text-1a">50000</span>
      </div>
    </div>
  );
}
