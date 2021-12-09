import React, {useCallback} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../modules/types";
import {isConnected} from "../../modules/wallet/selectors";
import Transfer from "./Transfer";
import {getErrorTransfer} from "../../modules/token/selectors";

const TransferContainer = () => {
    const _isConnected = useSelector((state: RootState) => isConnected(state))
    const error = useSelector((state: RootState) => getErrorTransfer(state))

    return (
        <Transfer error={error} isConnected={_isConnected}/>
    )
}

export default TransferContainer