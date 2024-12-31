import Web3 from 'web3';
import { CONTRACT_ADDRESS, CONTRACT_ABI } from '../config/contract';

export const getContract = (web3: Web3) => {
  return new web3.eth.Contract(CONTRACT_ABI as any, CONTRACT_ADDRESS);
};

export const registerUser = async (web3: Web3, account: string, referrer: string = '0x0000000000000000000000000000000000000000') => {
  try {
    const contract = getContract(web3);
    const result = await contract.methods.registerUser(referrer).send({
      from: account
    });
    return result;
  } catch (error) {
    console.error('注册用户失败:', error);
    throw error;
  }
}; 