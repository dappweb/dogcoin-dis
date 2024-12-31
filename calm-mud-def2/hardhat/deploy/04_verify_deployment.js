module.exports = async function ({ getNamedAccounts, deployments }) {
  const { get } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdt = await get("ERC20Mock");
  const doge = await get("ERC20Mock");
  const swap = await get("SwapMock");
  const reward = await get("RewardDistribution");

  console.log("\n部署信息汇总:");
  console.log("=================");
  console.log("USDT:", usdt.address);
  console.log("DOGE:", doge.address);
  console.log("Swap:", swap.address);
  console.log("RewardDistribution:", reward.address);
  console.log("部署账户:", deployer);
};

module.exports.tags = ["Verify"];
module.exports.dependencies = ["Tokens", "Swap", "Reward"]; 