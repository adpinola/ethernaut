const CoinFlip = artifacts.require("CoinFlip");
const SafeMath = artifacts.require(
  "@openzeppelin/contracts/utils/math/SafeMath.sol"
);
const Attacker = artifacts.require("Attacker");

const deploy = async (deployer) => {
  deployer.link(SafeMath, Attacker);
  const { address } = await CoinFlip.deployed();
  await deployer.deploy(Attacker, address);
};

module.exports = deploy;
