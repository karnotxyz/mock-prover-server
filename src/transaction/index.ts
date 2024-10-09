import { Contract, JsonRpcProvider, Wallet } from "ethers";
import {
  CONTRACT_ABI,
  CONTRACT_ADDRESS,
  PRIVATE_KEY,
  RPC_URL,
} from "../constants";

const provider = new JsonRpcProvider(RPC_URL);
const wallet = new Wallet(PRIVATE_KEY, provider);
const contract = new Contract(CONTRACT_ADDRESS, CONTRACT_ABI.abi, wallet);

export const updateState = async (
  block_number: string,
  block_hash: string,
  global_root: string
) => {
  const txn = await contract.updateStateOverrideImpl(
    block_number,
    block_hash,
    global_root
  );
  const receipt = await txn.wait();
  console.log(
    "Contract state initialized ✅. Transaction hash:",
    receipt?.hash
  );

  return receipt?.hash;
};
