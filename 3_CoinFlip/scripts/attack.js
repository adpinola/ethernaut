const truffleConfig = require("../truffle-config");
const Web3 = require("web3");

const {
  port,
  host,
  from,
  network_id: networkId,
} = truffleConfig.networks.ganache;

const attackerData = require("../build/contracts/Attacker.json");
const contractAddress = attackerData.networks[networkId].address;
const contractAbi = attackerData.abi;

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(`http://${host}:${port}`));
const attacker = new web3.eth.Contract(contractAbi, contractAddress);

const guess = async () => {
  try {
    const result = await attacker.methods.guess().send({ from });
    console.log(result);
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
  });
