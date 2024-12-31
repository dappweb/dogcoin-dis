const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("集成测试", function () {
  let usdt, doge, swap, reward;
  let owner, user1;

  beforeEach(async function () {
    [owner, user1] = await ethers.getSigners();

    const ERC20Mock = await ethers.getContractFactory("ERC20Mock");
    usdt = await ERC20Mock.deploy("USDT", "USDT", 18);
    doge = await ERC20Mock.deploy("DOGE", "DOGE", 18);

    const SwapMock = await ethers.getContractFactory("SwapMock");
    swap = await SwapMock.deploy(usdt.address, doge.address);

    const RewardDistribution = await ethers.getContractFactory("RewardDistribution");
    reward = await RewardDistribution.deploy(usdt.address, doge.address, swap.address);
  });

  it("应该正确部署所有合约", async function () {
    expect(await usdt.symbol()).to.equal("USDT");
    expect(await doge.symbol()).to.equal("DOGE");
    expect(await swap.usdtAddress()).to.equal(usdt.address);
    expect(await reward.usdt()).to.equal(usdt.address);
  });
}); 