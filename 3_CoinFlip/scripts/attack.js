const truffleConfig = require("../truffle-config");
const Web3 = require("web3");

const { provider, network_id: networkId } = truffleConfig.networks.rinkeby;

const attackerData = require("../build/contracts/Attacker.json");
const contractAddress = attackerData.networks[networkId].address;
const contractAbi = attackerData.abi;

const web3 = new Web3();
const rinkebyProvider = provider();
web3.setProvider(rinkebyProvider);
const attacker = new web3.eth.Contract(contractAbi, contractAddress);
const from = "__ACCOUNT_ADDRESS__";

const guess = async () => {
  try {
    const newBlock = await attacker.methods.hasBlockChanged().call({ from });
    if (newBlock) {
      const result = await attacker.methods.guess().send({ from });
      console.log(result);
    } else {
      console.log("Block hasn't changed already, try again...");
    }
  } catch (err) {
    console.error(err);
  }
};

guess()
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
  })
  .finally(() => {
    rinkebyProvider.engine.stop();
  });
