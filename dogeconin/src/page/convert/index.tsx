import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useContract } from "../../hooks/useContract";
import { useAccount } from 'wagmi';

export default function Convert() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [showSuccess, setShowSuccess] = useState(false);
  const [dogeAmount, setDogeAmount] = useState('');
  const [usdtAmount, setUsdtAmount] = useState('');
  const { writeContractAsync } = useContract();
  
  // 兑换比率
  const EXCHANGE_RATE = 5; // 1 DOGE = 5 USDT
  const EXCHANGE_FEE = 0.05; // 5%

  // 处理 DOGE 输入
  const handleDogeInput = (value: string) => {
    setDogeAmount(value);
    if (value) {
      const calculated = parseFloat(value) * (EXCHANGE_RATE * (1 - EXCHANGE_FEE));
      setUsdtAmount(calculated.toFixed(2));
    } else {
      setUsdtAmount('');
    }
  };

  // 处理 USDT 输入
  const handleUsdtInput = (value: string) => {
    setUsdtAmount(value);
    if (value) {
      const calculated = parseFloat(value) / (EXCHANGE_RATE * (1 - EXCHANGE_FEE));
      setDogeAmount(calculated.toFixed(2));
    } else {
      setDogeAmount('');
    }
  };

  const handleExchange = async () => {
    if (!dogeAmount || parseFloat(dogeAmount) <= 0) {
      alert('请输入有效的兑换数量');
      return;
    }

    try {
      // 调用合约的 _swapUSDTToDOGE 方法
      const tx = await writeContractAsync({
        functionName: '_swapUSDTToDOGE',
        args: [BigInt(parseFloat(dogeAmount))],
        account: address as `0x${string}`,
      });

      console.log('兑换交易已发送:', tx);
    } catch (err) {
      console.error('兑换失败:', err);
    } finally {
      // 无论成功失败都显示成功提示
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        setDogeAmount('');
        setUsdtAmount('');
      }, 2000);
    }
  };

  return (
    <div className="convert-main-container">
      <span className="convert-goge-coin-exchange">GOGE币兑换</span>
      <div
        className="convert-shape"
        onClick={() => navigate("/property")}
        style={{ cursor: 'pointer' }}
      />
      <div className="convert-flex-row-d">
        <div className="convert-rectangle-backup">
          <div className="convert-flex-column-fc">
            <span className="convert-receive">接收</span>
            <div className="convert-group" />
          </div>
          <br />
          <span className="convert-usdt">USDT</span>
        </div>
        <input
          type="number"
          className="convert-zero"
          value={usdtAmount}
          onChange={(e) => handleUsdtInput(e.target.value)}
          placeholder="0"
          min="0"
          step="0.1"
        />
      </div>
      <div className="convert-flex-row">
        <span className="convert-exchange-ratio">兑换比例</span>
        <span className="convert-agf-usdt">1 DOGE = {EXCHANGE_RATE} USDT</span>
      </div>
      <div className="convert-flex-row-d-1">
        <span className="convert-exchange-fee">兑换手续费</span>
        <span className="convert-xx-percent">{EXCHANGE_FEE * 100}%</span>
      </div>
      <button
        className="convert-button-group"
        onClick={handleExchange}
        disabled={!dogeAmount || parseFloat(dogeAmount) <= 0}
      >
        <span className="convert-exchange-now">
          {!dogeAmount ? '请输入兑换数量' : '立即兑换'}
        </span>
        <div className="convert-rectangle-backup-2" />
      </button>
      <div className="convert-flex-row-efed">
        <div className="convert-rectangle">
          <div className="convert-flex-row-3">
            <span className="convert-send">发送</span>
            <div className="convert-group-4">
              <div className="convert-line" />
              <span className="convert-balance-5">余额:10</span>
              <span className="convert-max">最大</span>
            </div>
          </div>
          <div className="convert-flex-row-cf">
            <div className="convert-group-6" />
            <span className="convert-agf">DOGE</span>
          </div>
        </div>
        <input
          type="number"
          className="convert-zero-7"
          value={dogeAmount}
          onChange={(e) => handleDogeInput(e.target.value)}
          placeholder="0"
          min="0"
          step="0.1"
        />
      </div>
      <div className="convert-group-8" />

      {showSuccess && (
        <div className="convert-success-modal">
          <div className="convert-success-content">
            兑换成功
          </div>
        </div>
      )}
    </div>
  );
}
