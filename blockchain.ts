import { ethers, JsonRpcProvider } from 'ethers';
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS as string;
const PRIVATE_KEY="0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80";

import PacientiABI from './blockchain/artifacts/contracts/Pacienti.sol/Pacienti.json';

const provider = new JsonRpcProvider("http://192.168.0.103:8545");
const wallet = new ethers.Wallet(PRIVATE_KEY, provider);

export interface Pacient {
  nume: string;
  prenume: string;
  email: string;
  varsta: number;
  doctor: string;
  cnp: string;
  telefon: string;
}

const getContract = async () => {
  if (!CONTRACT_ADDRESS) {
    throw new Error("CONTRACT_ADDRESS nu este setat în .env");
  }
  return new ethers.Contract(CONTRACT_ADDRESS, PacientiABI.abi, wallet);
};

export const salveazaHashInBlockchain = async (hash: string): Promise<void> => {
  try {
    const contract = await getContract();
    const tx = await contract.salveazaHash(hash);
    await tx.wait();
    console.log("Hash salvat în blockchain:", hash);
  } catch (err: any) {
    console.error("Eroare la salvarea hash-ului:", err.message);
  }
};

export const verificaHashPacient = async (hash: string): Promise<boolean> => {
  try {
    const contract = await getContract();
    const rezultat = await contract.verificaHash(hash);
    console.log("Rezultat verificare hash:", rezultat);
    return rezultat;
  } catch (err: any) {
    console.error("Eroare la verificarea hash-ului:", err.message);
    return false;
  }
};
