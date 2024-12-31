import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { http } from 'wagmi';
import { hardhat } from 'wagmi/chains';
import { createConfig } from 'wagmi';

const hardhatChain = {
  ...hardhat,
  rpcUrls: {
    default: { http: ['http://127.0.0.1:8545'] },
    public: { http: ['http://127.0.0.1:8545'] }
  }
} as const;

export const config = createConfig({
  chains: [hardhatChain],
  transports: {
    [hardhatChain.id]: http()
  }
});

export const wagmiConfig = getDefaultConfig({
  appName: 'DogeCoin App',
  projectId: 'YOUR_PROJECT_ID',
  chains: [hardhatChain],
  transports: {
    [hardhatChain.id]: http()
  }
}); 