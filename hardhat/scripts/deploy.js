const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("部署账户:", deployer.address);

  // 部署 USDT
  const ERC20Mock = await ethers.getContractFactory("ERC20Mock");
  const usdt = await ERC20Mock.deploy("USDT", "USDT", 18);
  await usdt.deployed();
  console.log("USDT 已部署到:", usdt.address);

  // 部署 DOGE
  const doge = await ERC20Mock.deploy("DOGE", "DOGE", 18);
  await doge.deployed();
  console.log("DOGE 已部署到:", doge.address);

  // 部署 SwapMock
  const SwapMock = await ethers.getContractFactory("SwapMock");
  const swap = await SwapMock.deploy(usdt.address, doge.address);
  await swap.deployed();
  console.log("Swap 已部署到:", swap.address);

  // 部署 RewardDistribution
  const RewardDistribution = await ethers.getContractFactory("RewardDistribution");
  const reward = await RewardDistribution.deploy(usdt.address, doge.address, swap.address);
  await reward.deployed();
  console.log("RewardDistribution 已部署到:", reward.address);

  // 打印所有合约地址以便后续使用
  console.log("\n合约地址汇总:");
  console.log("USDT:", usdt.address);
  console.log("DOGE:", doge.address);
  console.log("Swap:", swap.address);
  console.log("RewardDistribution:", reward.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  }); 