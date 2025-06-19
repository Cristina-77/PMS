import { ethers, JsonRpcProvider } from 'ethers';
import PacientiABI from './abi/Pacienti.json';

const contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3"; // Înlocuiește cu adresa reală
const provider = new JsonRpcProvider("http://10.0.2.2:8545");

export const salveazaHashInBlockchain = async (hash: string): Promise<void> => {
  try {
    const contract = await getContract();
    const tx = await contract.salveazaHash(hash);
    await tx.wait();
    console.log("Hash salvat în blockchain!");
  } catch (err) {
    console.error("Eroare la salvarea hash-ului:", err);
  }
};

export const verificaHashPacient = async (hash: string): Promise<boolean> => {
  try {
    const contract = await getContract();
    return await contract.verificaHash(hash);
  } catch (err) {
    console.error("Eroare la verificarea hash-ului:", err);
    return false;
  }
};


export interface Pacient {
  nume: string;
  prenume: string;
  email: string;
  varsta: number;
  doctor: string;
  cnp: string;
  telefon: string;
}

// Returnează instanța contractului
const getContract = async () => {
  const signer = await provider.getSigner();
  return new ethers.Contract(contractAddress, PacientiABI.abi, signer);
};


