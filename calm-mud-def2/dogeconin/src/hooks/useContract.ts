import { useWriteContract, useAccount, useReadContract } from 'wagmi';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contract';
import { hardhat } from 'wagmi/chains';

const TOKEN_ADDRESS = '0xe7f1725E7734CE288F8367e1Bb143E90bb3F0512';
const TOKEN_DECIMALS = 18;

export const useContract = () => {
  const { address } = useAccount();
  
  const { 
    writeContractAsync: baseWriteContractAsync,
    data: txData,
    isPending,
    isSuccess,
    error 
  } = useWriteContract();

  // 读取用户余额
  const { data: balance } = useReadContract({
    address: TOKEN_ADDRESS,
    abi: [
      {
        "inputs": [{"name": "account", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: 'balanceOf',
    args: [address as `0x${string}`],
  });

  // 读取合约余额
  const { data: contractBalance } = useReadContract({
    address: TOKEN_ADDRESS,
    abi: [
      {
        "inputs": [{"name": "account", "type": "address"}],
        "name": "balanceOf",
        "outputs": [{"name": "", "type": "uint256"}],
        "stateMutability": "view",
        "type": "function"
      }
    ],
    functionName: 'balanceOf',
    args: [CONTRACT_ADDRESS],
  });

  const writeContractAsync = async ({
    functionName,
    args,
    account,
  }: {
    functionName: string;
    args: any[];
    account: `0x${string}`;
  }) => {
    if (!address) {
      throw new Error('钱包未连接');
    }

    return baseWriteContractAsync({
      abi: CONTRACT_ABI,
      address: CONTRACT_ADDRESS as `0x${string}`,
      functionName,
      args,
      account,
      chainId: hardhat.id
    });
  };

  const handleRegister = async () => {
    try {
      if (!address) {
        throw new Error('钱包未连接');
      }

      const tx = await writeContractAsync({
        functionName: 'registerUser',
        args: ['0x0000000000000000000000000000000000000000'],
        account: address as `0x${string}`,
      });
      
      console.log('注册交易已发送:', tx);
      return tx;
    } catch (err) {
      console.error('注册失败:', err);
      throw err;
    }
  };

  const formatBalance = (rawBalance: bigint | undefined) => {
    if (!rawBalance) return '0';
    return (Number(rawBalance) / Math.pow(10, TOKEN_DECIMALS)).toString();
  };

  return {
    // 合约交互
    writeContractAsync,
    
    // 注册相关
    register: handleRegister,
    registerData: txData,
    isRegistering: isPending,
    registerSuccess: isSuccess,
    registerError: error,
    
    // 余额相关
    balance,
    formattedBalance: formatBalance(balance),
    contractBalance,
    formattedContractBalance: formatBalance(contractBalance)
  };
};