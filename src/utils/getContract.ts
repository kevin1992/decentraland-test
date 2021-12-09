import {ethers} from "ethers";

export const getContract = (abi: any, address: string, signer: ethers.Signer) => {
    return new ethers.Contract(address, abi, signer)
}

