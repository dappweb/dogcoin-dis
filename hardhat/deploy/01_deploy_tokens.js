module.exports = async function ({ getNamedAccounts, deployments }) {
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  // 部署第一个 ERC20Mock 作为 USDT
  const usdt = await deploy("ERC20Mock", {
    from: deployer,
    contract: "ERC20Mock",  // 明确指定合约名称
    args: ["USDT", "USDT", 18],
    log: true,
  });

  // 部署第二个 ERC20Mock 作为 DOGE
  const doge = await deploy("ERC20Mock", {
    from: deployer,
    contract: "ERC20Mock",  // 明确指定合约名称
    args: ["DOGE", "DOGE", 18],
    log: true,
  });

  return { usdt, doge };
};

module.exports.tags = ["Tokens"]; 