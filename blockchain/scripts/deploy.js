const { ethers } = require("hardhat");
const fs = require("fs");
const path = require("path");

async function main() {
  const Pacienti = await ethers.getContractFactory("Pacienti");
  const pacienti = await Pacienti.deploy();
  await pacienti.waitForDeployment();
  console.log("Contractul a fost deployat la:", await pacienti.getAddress());
  
  const envPath = path.join(__dirname, "../../.env");
  fs.writeFileSync(envPath, `CONTRACT_ADDRESS=${await pacienti.getAddress()}\n`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
