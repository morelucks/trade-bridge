import { ethers } from 'hardhat';

async function main() {
  const tradeBridge = await ethers.deployContract('TradeBridge');

  await tradeBridge.waitForDeployment();

  console.log('TradeBridge Contract Deployed at ' + tradeBridge.target);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});