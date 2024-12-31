// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
interface IRouter {
    function swapExactTokensForTokens(
        uint256 amountIn,
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external returns (uint256[] memory amounts);

    function getAmountsOut(uint256 amountIn, address[] calldata path) external view returns (uint256[] memory amounts);
}

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract RewardDistribution  {
    address public owner;
    address public usdt;
    address public doge;
    IRouter public pancakeRouter;

    uint256 public communityLevel1RewardPercent = 5; // 5% reward for community level 1
    uint256 public communityLevel2RewardPercent = 10; // 10% reward for community level 2
    uint256 public communityLevel3RewardPercent = 15; // 15% reward for community level 3

    mapping(address => address) public referrers;
    mapping(address => uint256) public userBalance;
    mapping(address => uint256) public userLevel;

    event UserRegistered(address indexed user, address indexed referrer);
    event PackagePurchased(address indexed user, uint256 amount);
    event ReferralReward(address indexed referrer, address indexed referee, uint256 amount, bool direct);
    event TeamRewardPaid(address indexed user, uint256 amount);
    event CommunityLevelUpdated(uint256 level, uint256 requiredUSDT, uint256 rewardPercent);
    event Release(address indexed user, uint256 usdtAmount, uint256 dogeAmount);
    event SwapExecuted(uint256 usdtAmount, uint256 dogeAmount);
    event PancakeRouterUpdated(address newRouter);
    event Withdrawn(address indexed token, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not authorized");
        _;
    }

    modifier onlyExistingUser() {
        require(userBalance[msg.sender] > 0, "User does not exist");
        _;
    }

    modifier nonReentrant() {
        uint256 localCounter = _counter;
        _counter++;
        require(localCounter == 0, "Reentrancy detected");
        _;
        _counter--;
    }

    uint256 private _counter;

    constructor(address _usdt, address _doge, address _pancakeRouter) {
        owner = msg.sender;
        usdt = _usdt;
        doge = _doge;
        pancakeRouter = IRouter(_pancakeRouter);
    }

    // 用户注册
    function registerUser(address _referrer) external nonReentrant {
        require(referrers[msg.sender] == address(0), "User already registered");
        referrers[msg.sender] = _referrer;
        emit UserRegistered(msg.sender, _referrer);
    }

    // 用户购买套餐
    function purchasePackage(address _referrer) external nonReentrant {
        uint256 amount = 1000 * 10**6; // 1000 USDT in 6 decimal places (for example)
        uint256 dogeAmount = _swapUSDTToDOGE(amount);

        userBalance[msg.sender] += dogeAmount;
        emit PackagePurchased(msg.sender, amount);

        _distributeReferralRewards(_referrer, amount);
        _distributeTeamRewards(msg.sender, amount);
    }

    // 释放 DOGE 奖励
    function releaseDOGE() external nonReentrant onlyExistingUser {
        uint256 usdtAmount = userBalance[msg.sender];
        uint256 dogeAmount = _swapUSDTToDOGE(usdtAmount);
        userBalance[msg.sender] = 0;
        emit Release(msg.sender, usdtAmount, dogeAmount);
    }

    // 更新 PancakeSwap 路由器地址
    function setPancakeRouter(address _pancakeRouter) external onlyOwner {
        pancakeRouter = IRouter(_pancakeRouter);
        emit PancakeRouterUpdated(_pancakeRouter);
    }

    // 分配推荐奖励
    function _distributeReferralRewards(address _referrer, uint256 amount) private {
        if (_referrer != address(0)) {
            uint256 rewardAmount = (amount * 5) / 100; // Direct reward 5%
            userBalance[_referrer] += rewardAmount;
            emit ReferralReward(_referrer, msg.sender, rewardAmount, true);

            address indirectReferrer = referrers[_referrer];
            if (indirectReferrer != address(0)) {
                uint256 indirectRewardAmount = (amount * 3) / 100; // Indirect reward 3%
                userBalance[indirectReferrer] += indirectRewardAmount;
                emit ReferralReward(indirectReferrer, msg.sender, indirectRewardAmount, false);
            }
        }
    }

    // 分配团队奖励
    function _distributeTeamRewards(address userAddress, uint256 amount) private {
        uint256 teamReward = (amount * 10) / 100; // Team reward 10%
        userBalance[userAddress] += teamReward;
        emit TeamRewardPaid(userAddress, teamReward);
    }

    // 根据 USDT 兑换 DOGE
   function _swapUSDTToDOGE(uint256 usdtAmount) public returns (uint256) {
    address[] memory path = new address[](2); // 声明并初始化 path 数组
    path[0] = usdt;
    path[1] = doge;

    uint256 amountOutMin = 1; // 假设 1 DOGE
    uint256[] memory amounts = pancakeRouter.swapExactTokensForTokens(
        usdtAmount,
        amountOutMin,
        path,
        address(this),
        block.timestamp
    );

    emit SwapExecuted(usdtAmount, amounts[1]);
    return amounts[1];
}

    // 提取代币
    function withdrawToken(address _token, uint256 _amount) external onlyOwner {
        require(IERC20(_token).transfer(owner, _amount), "Transfer failed");
        emit Withdrawn(_token, _amount);
    }

    // 更新社区奖励等级
    function setCommunityLevel(uint256 level, uint256 requiredUSDT, uint256 rewardPercent) external onlyOwner {
        if (level == 1) {
            communityLevel1RewardPercent = rewardPercent;
        } else if (level == 2) {
            communityLevel2RewardPercent = rewardPercent;
        } else if (level == 3) {
            communityLevel3RewardPercent = rewardPercent;
        }
        emit CommunityLevelUpdated(level, requiredUSDT, rewardPercent);
    }
}

