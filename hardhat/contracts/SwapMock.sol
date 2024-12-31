// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

interface IERC20 {
    function transfer(address recipient, uint256 amount) external returns (bool);
    function transferFrom(address sender, address recipient, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract SwapMock {
    address public usdtAddress;
    address public dogeAddress;
    uint256 public rate = 3;

    constructor(address _usdt, address _doge) {
        usdtAddress = _usdt;
        dogeAddress = _doge;
    }

    function swapExactTokensForTokens(uint256 amountIn) external returns (uint256 amountOut) {
        IERC20 usdt = IERC20(usdtAddress);
        IERC20 doge = IERC20(dogeAddress);

        require(usdt.transferFrom(msg.sender, address(this), amountIn), "USDT transfer failed");
        
        amountOut = amountIn * rate;
        require(doge.transfer(msg.sender, amountOut), "DOGE transfer failed");

        return amountOut;
    }
} 