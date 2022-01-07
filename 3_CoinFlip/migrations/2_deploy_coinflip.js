const CoinFlip = artifacts.require("CoinFlip");
const SafeMath = artifacts.require(
  "@openzeppelin/contracts/utils/math/SafeMath.sol"
);

const deploy = async (deployer) => {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, CoinFlip);
  await deployer.deploy(CoinFlip);
  const { address } = await CoinFlip.deployed();
  console.log(address);
};

module.exports = deploy;
