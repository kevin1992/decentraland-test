import {useSelector} from 'react-redux'
import {connectWalletRequest} from '../../modules/wallet/actions'
import {
  getAddress, getError,
  isConnecting,
} from '../../modules/wallet/selectors'
import {RootState} from '../../modules/types'
import ConnectButton from './ConnectButton'
import React, {useCallback} from "react";
import {useAppDispatch} from "../../hooks/useAppDispatch";

const ConnectButtonContainer: React.FC = () => {

  const dispatch = useAppDispatch()

  const _isConnecting = useSelector((state: RootState) => isConnecting(state))
  const error = useSelector((state: RootState) => getError(state))

  const onConnect = useCallback(() => {
    dispatch(connectWalletRequest())
  }, [dispatch])

  return <ConnectButton onConnect={onConnect} error={error} isConnecting={_isConnecting}/>
}


export default ConnectButtonContainer;
