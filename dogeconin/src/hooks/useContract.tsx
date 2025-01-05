import { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { usePublicClient, useWalletClient } from 'wagmi';
import { CONTRACT_ABI, CONTRACT_ADDRESS } from '../config/contract';

export const useContract = () => {
  const [contract, setContract] = useState<ethers.Contract | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const publicClient = usePublicClient();
  const { data: walletClient, isLoading: isWalletLoading } = useWalletClient();

  // 初始化合约
  useEffect(() => {
    const initContract = async () => {
      try {
        if (!publicClient) {
          throw new Error('No public client available');
        }

        // 转换 provider
        const provider = new ethers.providers.Web3Provider(publicClient.transport as any);

        // 如果有钱包连接，使用 signer
        const contractInstance = new ethers.Contract(
          CONTRACT_ADDRESS,
          CONTRACT_ABI,
          walletClient ? provider.getSigner() : provider
        );

        setContract(contractInstance);
        setError(null);
      } catch (err) {
        console.error('Contract initialization error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    initContract();
  }, [publicClient, walletClient]);

  // 通用的合约调用方法
  const callContract = async (
    methodName: string,
    args: any[] = []
  ) => {
    if (!contract) {
      throw new Error('Contract is not initialized');
    }

    if (isWalletLoading) {
      throw new Error('Wallet is still initializing');
    }

    const method = contract[methodName];
    if (!method) {
      throw new Error(`Method ${methodName} not found on contract`);
    }

    // 如果是写入方法，确保已连接钱包
    if (method.estimateGas && !walletClient) {
      throw new Error('Please connect wallet first');
    }

    const result = await method(...args);

    // 如果是写入方法，等待交易确认
    if (result.wait) {
      await result.wait();
    }

    return result;
  };

  // 合约方法封装
  const contractMethods = {
    referrers: async (userAddress: string) => {
      return callContract('referrers', [userAddress]);
    },

    registerUser: async (referrerAddress: string) => {
      return callContract('registerUser', [referrerAddress]);
    }
  };

  return {
    contract,
    isLoading: isLoading || isWalletLoading,
    error,
    ...contractMethods
  };
};

// 导出类型
export type UseContractReturn = ReturnType<typeof useContract>; 