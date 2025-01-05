import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import Web3 from "web3";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "../config/contract"; // 替换为你的合约地址配置路径

export const useWallet = () => {
  const { address, isConnected } = useAccount();
  const [savedAddress, setSavedAddress] = useState<string | null>(null);


  useEffect(() => {
    console.log("Wallet connection status:", isConnected);
    console.log("Connected address:", address);
  
    if (isConnected && address) {
      localStorage.setItem("userAddress", address);
      setSavedAddress(address);
  
      // 调试日志
      console.log("Calling registerUser...");
      registerUser(address);
    }
  }, [address, isConnected]);
  

  const registerUser = async (userAddress: string) => {
    try {
      if (!window.ethereum) {
        console.error("MetaMask not found");
        return;
      }

      const web3 = new Web3(window.ethereum);

      // 初始化合约实例
      const contract = new web3.eth.Contract(CONTRACT_ABI as any, CONTRACT_ADDRESS);

      // 默认推荐人地址为 0x00
      const referrer = "0x0000000000000000000000000000000000000000";

      console.log("Registering user with address:", userAddress);

      // 调用 registerUser 方法
      const tx = await contract.methods.registerUser(referrer).send({
        from: userAddress,
      });

      console.log("User registered successfully:", tx);
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const disconnect = () => {
    localStorage.removeItem("userAddress");
    setSavedAddress(null);
  };

  return {
    address: savedAddress,
    isConnected: !!savedAddress,
    disconnect,
  };
};
