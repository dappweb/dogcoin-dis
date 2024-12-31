import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./index.css";

export default function Item() {
  const navigate = useNavigate();
  const { address } = useAccount();

  const formatAddress = (addr: string | undefined) => {
    if (!addr) return 'Not Connected';
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  return (
    <div className="item-main-container">
      <div className="item-flex-row-b">
        <div className="item-group">
          <div className="item-dogecoin" />
          <span className="item-dogecoin-1">Dogecoin</span>
        </div>
        <div className="item-group-2">
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
                          className="item-tyq8-fmo3z"
                          onClick={openConnectModal}
                          style={{ cursor: 'pointer' }}
                        >
                          Not Connected
                        </span>
                      );
                    }
                    return (
                      <span 
                        className="item-tyq8-fmo3z"
                        onClick={openAccountModal}
                        style={{ cursor: 'pointer' }}
                      >
                        {formatAddress(account.address)}
                      </span>
                    );
                  })()}
                  <div className="item-rectangle" />
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div 
          className="item-group-3" 
          onClick={() => navigate("/")}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="item-group-4" onClick={() => navigate("/")} style={{ cursor: 'pointer' }}>
        <span className="item-home">首頁</span>
        <div className="item-background" />
      </div>
      <div className="item-group-5" onClick={() => navigate("/details")} style={{ cursor: 'pointer' }}>
        <div className="item-title">
          <span className="item-purchase-history">購買記錄</span>
          <span className="item-empty"> </span>
          <span className="item-sparkle">✨</span>
        </div>
        <div className="item-background-6" />
      </div>
      <div className="item-group-backup" onClick={() => navigate("/community")} style={{ cursor: 'pointer' }}>
        <div className="item-title-7">
          <span className="item-my-community">我的社区</span>
          <span className="item-raising-hand">💁‍♂️</span>
        </div>
        <div className="item-background-backup" />
      </div>
      <div className="item-group-8" onClick={() => navigate("/property")} style={{ cursor: 'pointer' }}>
        <div className="item-background-backup-9" />
        <div className="item-title-a">
          <span className="item-my-assets">我的资产</span>
          <span className="item-lightning">⚡️</span>
        </div>
        <div className="item-group-b" />
      </div>
      <div className="item-group-c">
        <span className="item-white-paper">白皮書</span>
        <div className="item-background-backup-d" />
      </div>
      <div className="item-group-e" onClick={() => navigate("/language")} style={{ cursor: 'pointer' }}>
        <span className="item-title-backup">選擇語言</span>
        <div className="item-background-backup-f" />
      </div>
      <div className="item-ellipse" />
    </div>
  );
}
