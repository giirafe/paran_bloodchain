const plowSmartContract = artifacts.require("./plowSmartContract.sol");
module.exports = function (deployer) {
  deployer.deploy(plowSmartContract, { gas: 10000000000 });
};
