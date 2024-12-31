module.exports = async function ({ deployments, getNamedAccounts }) {
  const { get } = deployments;
  const accounts = await getNamedAccounts();

  const usdt = await get("ERC20Mock");
  const doge = await get("ERC20Mock");
  const swap = await get("SwapMock");
  const reward = await get("RewardDistribution");

  console.log("\n部署完成，合约地址及其部署者:");
  console.log("=================");
  console.log("USDT:");
  console.log("  地址:", usdt.address);
  console.log("  部署者:", usdt.receipt.from);
  console.log("DOGE:");
  console.log("  地址:", doge.address);
  console.log("  部署者:", doge.receipt.from);
  console.log("Swap:");
  console.log("  地址:", swap.address);
  console.log("  部署者:", swap.receipt.from);
  console.log("RewardDistribution:");
  console.log("  地址:", reward.address);
  console.log("  部署者:", reward.receipt.from);
};

module.exports.tags = ["PostDeploy"];
module.exports.dependencies = ["Tokens", "Swap", "Reward"];