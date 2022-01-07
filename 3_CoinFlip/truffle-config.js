// const HDWalletProvider = require('@truffle/hdwallet-provider');
// const { mnemonic, endpoint } = require('./environment.json').rinkeby;

module.exports = {
  networks: {
    ganache: {
      host: 'localhost',
      port: 7545,
      network_id: 5777,
      gas: 3000000,
      from: '0x87388E891C6915367F13a60b7663D50a4f815a64',
    },
  //   rinkeby: {
  //     provider() {
  //       return new HDWalletProvider(mnemonic, endpoint);
  //     },
  //     network_id: 4,
  //     gas: 4500000,
  //     gasPrice: 10000000000,
  //   },
  },
  compilers: {
    solc: {
      version: '^0.8.10',
    },
  },
};
