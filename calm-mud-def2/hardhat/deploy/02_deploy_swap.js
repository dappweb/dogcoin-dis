module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy, get } = deployments;
  const { deployer } = await getNamedAccounts();

  const usdt = await get("ERC20Mock");
  const doge = await get("ERC20Mock");

  const swap = await deploy("SwapMock", {
    from: deployer,
    args: [usdt.address, doge.address],
    log: true,
  });

  return { swap };
};

module.exports.tags = ["Swap"];
module.exports.dependencies = ["Tokens"]; 