import {ethers} from "ethers";
import {WindowWithEthereum} from "../modules/wallet/types";

// The regular `window` object with `ethereum` injected by MetaMask
const windowWithEthereum = window as unknown as WindowWithEthereum

const provider = new ethers.providers.Web3Provider(
    windowWithEthereum.ethereum
)

export default provider