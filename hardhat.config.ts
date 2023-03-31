import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-contract-sizer";

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.19",
    settings: {
      optimizer: {
          enabled: true,
          runs: 200,
      },
    }
  },
  contractSizer: {
    runOnCompile: true,
    outputFile: "out/contract-sizes.json",
  },
  paths: {
    sources: "./src",
  }
};

export default config;
