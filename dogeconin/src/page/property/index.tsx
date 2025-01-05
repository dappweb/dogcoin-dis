import { useNavigate } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./index.css";

export default function Property() {
  const navigate = useNavigate();

  const formatAddress = (addr: string | undefined) => {
    if (!addr) return '未登录';
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <div className="property-main-container">
      <div className="property-flex-row">
        <div className="property-group">
          <div className="property-dogecoin" />
          <span className="property-dogecoin-1">Dogecoin</span>
        </div>
        <div className="property-group-2">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
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
                  <div style={{ position: 'relative',  top: '-6px'}}>
                    {(() => {
                      if (!connected) {
                        return (
                          <span 
                            className="property-tyq8-fmo3z"
                            onClick={openConnectModal}
                          >
                            未登录
                          </span>
                        );
                      }
                      return (
                        <span 
                          className="property-tyq8-fmo3z"
                          onClick={openAccountModal}
                          style={{ cursor: 'pointer' }}
                        >
                          {formatAddress(account.address)}
                        </span>
                      );
                    })()}
                    <div className="property-rectangle" />
                  </div>
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div 
          className="property-group-3" 
          onClick={() => navigate("/item")}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="property-group-4">
        <div className="property-subtract" />
        <span className="property-my-account">My Account</span>
        <span 
          className="property-revenue-details"
          onClick={() => navigate("/details")}
          style={{ cursor: 'pointer' }}
        >
          Revenue Details
        </span>
      </div>
      <div className="property-rectangle-5">
        <div className="property-flex-column-f">
          <div className="property-group-6">
            <div className="property-group-7" />
            <span className="property-usdt">USDT</span>
          </div>
          <div className="property-dogecoin-8" />
          <span className="property-doge">DOGE</span>
        </div>
        <div className="property-flex-column-e">
          <span className="property-number-2">2.340.000</span>
          <span className="property-number-13">13.340.000</span>
        </div>
      </div>
      <div className="property-group-9">
        <div 
          className="property-action-button"
          onClick={() => navigate("/withdraw")}
          style={{ cursor: 'pointer' }}
        >
          <div className="property-rectangle-backup" />
          <span className="property-withdraw">Withdraw</span>
        </div>
        <div 
          className="property-action-button"
          onClick={() => navigate("/convert")}
          style={{ cursor: 'pointer' }}
        >
          <div className="property-rectangle-backup-a" />
          <span className="property-exchange">Exchange</span>
        </div>
      </div>
      <div className="property-group-backup">
        <span className="property-revenue-data">Revenue Data</span>
        <div className="property-rectangle-backup-b" />
      </div>
      <div className="property-group-c">
        <div className="property-rectangle-d" />
        <div className="property-rectangle-backup-e" />
        <div className="property-group-f" />
        <div className="property-group-10" />
        <span className="property-number-54-million">54.000.000</span>
        <span className="property-number-2-million">2.340.000</span>
        <span className="property-sharing-rewards">Sharing rewards</span>
        <span className="property-static-income">Static income</span>
      </div>
      <div className="property-flex-row-b">
        <div className="property-rectangle-11">
          <div className="property-group-12" />
          <span className="property-dot">2.340.000</span>
          <span className="property-team-rewards">Team rewards</span>
        </div>
        <div className="property-rectangle-backup-13">
          <div className="property-union" />
          <span className="property-dot-14">54.000.000</span>
          <span className="property-community-rewards">Community rewards</span>
        </div>
      </div>
    </div>
  );
}
