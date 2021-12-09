import {getAddress} from "ethers/lib/utils";

const isValidAddress = (address: string) => {
    try {
        getAddress(address);
    } catch (e) {
        return false;
    }
    return true;
}

export default isValidAddress