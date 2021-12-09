import React, {useCallback} from "react";
import {useSelector} from 'react-redux'
import {RootState} from '../../modules/types'
import WalletCard from './WalletCard'
import {getAddress} from "../../modules/wallet/selectors";
import {getBalance, getSymbol, getLoadingBalance, getErrorBalance} from "../../modules/token/selectors";
import {useNavigate} from "react-router-dom";

const WalletCardContainer: React.FC = () => {
    const address = useSelector((state: RootState) => getAddress(state))
    const balance = useSelector((state: RootState) => getBalance(state))
    const symbol = useSelector((state: RootState) => getSymbol(state))
    const error = useSelector((state: RootState) => getErrorBalance(state))
    const loading = useSelector((state: RootState) => getLoadingBalance(state))

    const navigate = useNavigate();

    const onTransfer = useCallback(() => {
        navigate('/transfer')
    }, [navigate])

    return <WalletCard onTransfer={onTransfer} address={address} symbol={symbol} balance={balance} error={error} loading={loading}/>
}


export default WalletCardContainer