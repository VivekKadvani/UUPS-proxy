const hre = require('hardhat');
const { ethers, upgrades } = hre;

const PROXY = '0x263d1bB63Af33ba11600825f47Eb72519cBCd957';

async function main() {
  const PizzaV2 = await ethers.getContractFactory('PizzaV2');
  console.log('Upgrading Pizza...');
  await upgrades.upgradeProxy(PROXY, PizzaV2);
  console.log('Pizza upgraded successfully');
}

main();
