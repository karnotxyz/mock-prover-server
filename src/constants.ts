import ContractAbi from "./artifacts/Starknet.json";
import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT || 5000;
export const CONTRACT_ABI = ContractAbi;
export const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS || "";
export const RPC_URL = process.env.RPC_URL || "";
export const PRIVATE_KEY = process.env.P_KEY || "";
