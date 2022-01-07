const SafeMath = artifacts.require(
  "@openzeppelin/contracts/utils/math/SafeMath.sol"
);
const Attacker = artifacts.require("Attacker");
const { contractAddress } = require("../environment.json");

const deploy = async (deployer) => {
  deployer.deploy(SafeMath);
  deployer.link(SafeMath, Attacker);
  await deployer.deploy(Attacker, contractAddress);
};

module.exports = deploy;
