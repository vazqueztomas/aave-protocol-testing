const PoolV3Artifact = require("../node_modules/@aave/core-v3/artifacts/contracts/protocol/pool/Pool.sol/Pool.json");
const pruebaDataProvider = require("/Users/tomasvazquez/Develops/react-ratherlabs/api/node_modules/@aave/core-v3/artifacts/contracts/interfaces/IPoolAddressesProvider.sol/IPoolAddressesProvider.json");

const Web3 = require("web3");
const web3 = new Web3("https://cloudflare-eth.com");

const myAddress = "0x4c69e4c05c2ca845c11f5068d67f3fbac01309d7";
const DAIToken = "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3";
const pools = new web3.eth.Contract(
  PoolV3Artifact.abi,
  "0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2"
);
const getReserves = async () => {
  await pools.methods.getReservesList().call(function (error, res) {
    if (error) return;
    console.log(res);
  });
};

const aaveDataProviderContract = new web3.eth.Contract(
  pruebaDataProvider.abi,
  "0x69FA688f1Dc47d4B5d8029D5a35FB7a548310654"
);
console.log(aaveDataProviderContract.methods);
// getReserves();
// console.log(pools);
const getReserveDataToken = async () => {
  await pools.methods.getReserveData(myAddress).call(function (error, result) {
    if (error) return;
    console.log(result);
  });
};

// getReserveDataToken();
const getUserBalance = async (req, res) => {
  pools.methods.getUserAccountData(myAddress).call(function (error, result) {
    if (error) {
      console.log("An error occurred", error);
      return;
    }
    let totalCollateral = result.totalCollateralBase;
    let availableBorrowsBase = result.availableBorrowsBase;
    res.json({ totalCollateral, availableBorrowsBase });
  });
};

module.exports = { getUserBalance };
