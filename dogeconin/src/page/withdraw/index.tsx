import { useState } from "react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { useContract } from "../../hooks/useContract";
import { useAccount } from 'wagmi';
import { useWriteContract } from 'wagmi';

// USDT 代币的 ABI
const TOKEN_ABI = [
  {
    "inputs": [
      {"name": "spender", "type": "address"},
      {"name": "amount", "type": "uint256"}
    ],
    "name": "approve",
    "outputs": [{"name": "", "type": "bool"}],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

const TOKEN_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';

export default function Withdraw() {
  const navigate = useNavigate();
  const { address } = useAccount();
  const [amount, setAmount] = useState('');
  const { writeContractAsync, balance, formattedBalance } = useContract();
  const { writeContractAsync: tokenWriteContractAsync } = useWriteContract();
  const [isWithdrawing, setIsWithdrawing] = useState(false);

  const handleWithdraw = async () => {
    if (!amount || isWithdrawing) return;
    
    try {
      setIsWithdrawing(true);
      
      // 检查余额
      if (balance && BigInt(amount) > balance) {
        throw new Error('余额不足');
      }

      const amountBigInt = BigInt(amount);

      // 先授权代币
      const approveResult = await tokenWriteContractAsync({
        abi: TOKEN_ABI,
        address: TOKEN_ADDRESS,
        functionName: 'approve',
        args: [TOKEN_ADDRESS, amountBigInt],
        account: address as `0x${string}`,
      });

      console.log('授权交易已发送:', approveResult);
      await new Promise(resolve => setTimeout(resolve, 2000));

      // 执行提现
      const tx = await writeContractAsync({
        functionName: 'withdrawToken',
        args: [TOKEN_ADDRESS, amountBigInt],
        account: address as `0x${string}`,
      });
      
      console.log('提现交易已发送:', tx);
    } catch (err) {
      console.error('提现失败:', err);
      if (err instanceof Error) {
        console.error('错误详情:', {
          message: err.message,
          name: err.name,
          stack: err.stack
        });
      }
    } finally {
      setIsWithdrawing(false);
    }
  };

  return (
    <div className="withdraw-main-container">
      <div className="withdraw-flex-row-fb">
        <div 
          className="withdraw-group" 
          onClick={() => navigate("/property")}
          style={{ cursor: 'pointer' }}
        />
        <span className="withdraw-text">提现</span>
      </div>
      <span className="withdraw-currency">提現幣種</span>
      <div className="withdraw-rectangle-backup">
        <div className="withdraw-group-1">
          <div className="withdraw-dogecoin" />
          <span className="withdraw-doge">DOGE</span>
        </div>
      </div>
      <span className="withdrawal-amount">提現數量</span>
      <div className="withdraw-rectangle-backup-2">
        <input
          type="number"
          className="withdraw-amount-input"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0"
        />
        <span className="withdraw-gpm-t">DOGE</span>
      </div>
      <div className="withdraw-flex-row">
        <span className="withdraw-withdrawable-amount">可提現數量</span>
        <button className="withdraw-button">
          {formattedBalance} DOGE
        </button>
      </div>
      <div className="withdraw-flex-row-c">
        <span className="withdraw-span">手續費</span>
        <button className="withdraw-button-3-percent">5%</button>
      </div>
      <button 
        className="withdraw-button-group"
        onClick={handleWithdraw}
        disabled={!amount || isWithdrawing}
      >
        <span className="withdraw-text-9">
          {isWithdrawing ? '提现中...' : '立即提现'}
        </span>
        <div className="withdraw-wrapper-2" />
      </button>
    </div>
  );
}
