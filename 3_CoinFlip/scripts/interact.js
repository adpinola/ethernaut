const truffleConfig = require("../truffle-config");
const Web3 = require("web3");

const {
  port,
  host,
  from,
  network_id: networkId,
} = truffleConfig.networks.ganache;

const contractData = require("../build/contracts/CoinFlip.json");
const contractAddress = contractData.networks[networkId].address;
const contractAbi = contractData.abi;

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider(`http://${host}:${port}`));
const contractInstance = new web3.eth.Contract(contractAbi, contractAddress);

const operationName = process.argv[2];
const payload = process.argv[3];

const flip = async (_guess) => {
  try {
    var guess = _guess === "true";
    const result = await contractInstance.methods.flip(guess).send({ from });
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};

const operations = {
  flip,
};

operations[operationName](payload)
  .then(() => {
    console.log("Done");
  })
  .catch((err) => {
    console.error(err);
  });
