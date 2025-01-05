import "./index.css";
import { useNavigate } from "react-router-dom";
import { useAccount } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Community() {
  const navigate = useNavigate();
  const { address } = useAccount();

  const formatAddress = (addr: string | undefined) => {
    if (!addr) return '未登录';
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  // 修改列表数据结构，确保类名正确对应
  const pushList = [
    { address: address, time: "12/24/2024 14:55", rowClass: "db", addrClass: "", timeClass: "" },
    { address: address, time: "12/23/2024 14:55", rowClass: "ddfb", addrClass: "-9", timeClass: "-a" },
    { address: address, time: "12/22/2024 14:55", rowClass: "aa", addrClass: "-b", timeClass: "-c" },
    { address: address, time: "12/21/2024 14:55", rowClass: "ba", addrClass: "-d", timeClass: "-e" },
    { address: address, time: "12/20/2024 14:55", rowClass: "d", addrClass: "-f", timeClass: "-10" },
    { address: address, time: "12/24/2024 14:55", rowClass: "fd", addrClass: "-backup", timeClass: "" },
    { address: address, time: "12/23/2024 14:55", rowClass: "aa-11", addrClass: "", timeClass: "-12" },
    { address: address, time: "12/22/2024 14:55", rowClass: "dd", addrClass: "-13", timeClass: "-14" },
    { address: address, time: "12/24/2024 14:55", rowClass: "fa", addrClass: "-15", timeClass: "-16" }
  ];

  const handleCopyLink = () => {
    const link = "https://play.google.comsga…msto"; // 要复制的链接
    navigator.clipboard.writeText(link)
      .then(() => {
        // 可以添加复制成功的提示
        alert("链接已复制");
      })
      .catch((err) => {
        console.error('复制失败:', err);
        // 复制失败的备用方案
        const textArea = document.createElement("textarea");
        textArea.value = link;
        document.body.appendChild(textArea);
        textArea.select();
        try {
          document.execCommand('copy');
          alert("链接已复制");
        } catch (err) {
          console.error('复制失败:', err);
        }
        document.body.removeChild(textArea);
      });
  };

  return (
    <div className="community-container">
      <div className="community-flex-row">
        <div className="community-group">
          <div className="community-dogecoin" />
          <span className="community-dogecoin-text">Dogecoin</span>
        </div>
        <div className="community-group-2">
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
                  <div style={{ position: 'relative' }}>
                    {(() => {
                      if (!connected) {
                        return (
                          <span 
                            className="community-user-id"
                            onClick={openConnectModal}
                            style={{ cursor: 'pointer' }}
                          >
                            未登录
                          </span>
                        );
                      }
                      return (
                        <span 
                          className="community-user-id"
                          onClick={openAccountModal}
                          style={{ cursor: 'pointer' }}
                        >
                          {formatAddress(account.address)}
                        </span>
                      );
                    })()}
                    <div className="community-rectangle" />
                  </div>
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div 
          className="community-group-3" 
          onClick={() => navigate("/item")}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="community-pic-3">
        <div className="community-group-4">
          <span className="community-invite-friends">
            Invite friends to join Dogecoin
          </span>
          <span className="community-start-inviting">Start inviting</span>
        </div>
        <div className="community-bitmap" />
        <div className="community-rectangle-backup">
          <div className="community-group-5">
            <span className="community-invite-link">Invite Link</span>
            <span className="community-link">https://play.google.comsga…msto</span>
          </div>
        </div>
        <button 
          className="community-group-6"
          onClick={handleCopyLink}
          style={{ cursor: 'pointer' }}
        >
          <span className="community-copy-link">Copy link</span>
          <div className="community-rectangle-backup-7" />
        </button>
      </div>
      <div className="community-group-backup">
        <span className="community-my-direct-push">My direct push</span>
        <div className="community-rectangle-backup-8" />
      </div>
      <div className="community-flex-row">
        <span className="community-address">Address</span>
        <span className="community-time">Time</span>
      </div>
      
      {/* 使用更新后的数据结构渲染列表 */}
      {pushList.map((item, index) => (
        <div 
          key={index} 
          className={`community-flex-row-${item.rowClass}`}
        >
          <span 
            className={`community-tyq-fmoz${item.addrClass}`}
          >
            {formatAddress(item.address)}
          </span>
          <span 
            className={`community-${index < 5 ? 'date-time' : 'backup-date'}${item.timeClass}`}
          >
            {item.time}
          </span>
        </div>
      ))}
    </div>
  );
}
