import { ethers } from "hardhat";

async function main() {
  const WETH9Factory = await ethers.getContractFactory("WETH9");
  const weth9 = await WETH9Factory.deploy();

  await weth9.deployed();
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
