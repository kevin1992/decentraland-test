import {getContract} from "./getContract";
import {TOKEN_ADDRESS} from "../modules/wallet/sagas";
import {ethers} from "ethers";
import TokenABI from '../abi/Token.json'

export const getTokenContract = (signer: ethers.Signer) => {
    return getContract(TokenABI, TOKEN_ADDRESS, signer)
}