//https://eth-goerli.g.alchemy.com/v2/Oe8LVTp-nF8cPFMVC6JrAywJI2_rAWzc

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli:{
      url: 'https://eth-goerli.g.alchemy.com/v2/Oe8LVTp-nF8cPFMVC6JrAywJI2_rAWzc',
      accounts: ['d51062e841a6c10cd639b225f2feea5f197045cea3892a5c854839db356f21f8'],
    },
  },
};