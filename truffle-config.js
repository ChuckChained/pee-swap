require('babel-register');
require('babel-polyfill');
require('dotenv').config();
const HDWalletProvider = require('truffle-hdwallet-provider-privkey');
const privateKeys = process.env.PRIVATE_KEYS || ""

module.exports = {


  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" //match any id
    },
    kovan: {
      provider: function() {
        return new HDWalletProvider(
          privateKeys.split(','),
          `https://kovan.infura.io/v3/${process.env.INFURA_API_KEY}`
          )
      },
      gas: 5000000,
      gasPrice: 25000000000,
      network_id: 42
    }
  },
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',

  compilers: {
    solc: {
      // version: "0.5.1",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      // settings: {          // See the solidity docs for advice about optimization and evmVersion
      optimizer: {
        enabled: true,
        runs: 200
      //  },
      //  evmVersion: "byzantium"
      }
    }
  }
};
