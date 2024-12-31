module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdt = await get("ERC20Mock");
  const doge = await get("ERC20Mock");
  const swap = await get("SwapMock");

  const reward = await deploy("RewardDistribution", {
    from: deployer,
    args: [usdt.address, doge.address, swap.address],
    log: true,
  });

  return { reward };
};

module.exports.tags = ["Reward"];
module.exports.dependencies = ["Tokens", "Swap"]; 