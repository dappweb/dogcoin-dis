import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./index.css";

export default function Mine() {
  const navigate = useNavigate();
  const { address } = useAccount();

  const formatAddress = (addr: string | undefined) => {
    if (!addr) return '未登录';
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <div className="mine-main-container">
      <div className="mine-flex-row">
        <div className="mine-group">
          <div className="mine-dogecoin" />
          <span className="mine-dogecoin-1">Dogecoin</span>
        </div>
        <div className="mine-group-2">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openChainModal,
              openConnectModal,
              mounted
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              return (
                <div
                  {...(!ready && {
                    'aria-hidden': true,
                    style: {
                      opacity: 0,
                      pointerEvents: 'none',
                      userSelect: 'none'
                    },
                  })}
                >
                  {(() => {
                    if (!connected) {
                      return (
                        <span 
                          className="mine-tyq8-fmo3z"
                          onClick={openConnectModal}
                          style={{ cursor: 'pointer' }}
                        >
                          未登录
                        </span>
                      );
                    }
                    return (
                      <span 
                        className="mine-tyq8-fmo3z"
                        onClick={openAccountModal}
                        style={{ cursor: 'pointer' }}
                      >
                        {formatAddress(account.address)}
                      </span>
                    );
                  })()}
                  <div className="mine-rectangle" />
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div 
          className="mine-group-3" 
          onClick={() => navigate("/item")}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="mine-group-4">
        <span className="mine-my-deposit">My Deposit</span>
        <div className="mine-group-5" />
        <span 
          className="mine-revenue-record"
          onClick={() => navigate("/details")}
          style={{ cursor: 'pointer' }}
        >
          Revenue Record
        </span>
      </div>
      <div className="mine-group-6">
        <button 
          className="mine-rectangle-7"
          onClick={() => navigate("/property")}
        >
          <span className="mine-receive-profits">Receive Profits</span>
        </button>
        <div className="mine-rectangle-8" />
        <div className="mine-group-9" />
        <span className="mine-usdt">150 USDT</span>
        <button className="mine-group-backup">
          <span className="mine-income">Income</span>
          <div className="mine-rectangle-a" />
        </button>
        <span className="mine-number-500">500</span>
        <span className="mine-locked-amount">Locked amount</span>
        <span className="mine-released-amount">Released amount</span>
        <span className="mine-empty">500</span>
        <span className="mine-time">Time</span>
        <span className="mine-time-info">12/24/2024 14:55</span>
      </div>
      <div className="mine-group-b">
        <div className="mine-rectangle-backup" />
        <div className="mine-group-backup-c" />
        <button 
          className="mine-button-group"
          onClick={() => navigate("/join")}
        >
          <span className="mine-reinvestment">Reinvestment</span>
          <div className="mine-group-backup-d" />
        </button>
        <span className="mine-usdt-backup">150 USDT</span>
        <button className="mine-button-group-e">
          <span className="mine-completed">Completed</span>
          <div className="mine-rectangle-f" />
        </button>
        <span className="mine-backup">500</span>
        <span className="mine-cumulative-income">Cumulative income</span>
        <span className="mine-backup-time">12/24/2024 14:55</span>
        <span className="mine-deposit-time">Deposit time</span>
        <span className="mine-backup-time-10">12/24/2024 14:55</span>
        <span className="mine-time-11">Time</span>
      </div>
      <div className="mine-group-backup-12">
        <div className="mine-rectangle-backup-13" />
        <div className="mine-group-backup-14" />
        <span className="mine-usdt-backup-15">150 USDT</span>
        <button className="mine-group-16">
          <span className="mine-completed-17">Completed</span>
          <div className="mine-rectangle-18" />
        </button>
        <span className="mine-backup-19">500</span>
        <span className="mine-cumulative-income-1a">Cumulative income</span>
        <span className="mine-backup-time-1b">12/24/2024 14:55</span>
        <span className="mine-deposit-time-1c">Deposit time</span>
        <span className="mine-backup-time-1d">12/24/2024 14:55</span>
        <span className="mine-time-backup">Time</span>
      </div>
    </div>
  );
}
