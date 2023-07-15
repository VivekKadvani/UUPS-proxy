const hre = require('hardhat');
const { ethers, upgrades } = hre;
const SLICES = 8;
async function main() {
  try {
    const Pizza = await ethers.getContractFactory('Pizza');

    console.log('Deploying Pizza...');

    const pizza = await upgrades.deployProxy(Pizza, [SLICES], {
      initializer: 'initialize',
    });
    await pizza.waitForDeployment();

    console.log('Pizza deployed to:', await pizza.getAddress());
  } catch (e) {
    console.log(e);
  }
}

main();
