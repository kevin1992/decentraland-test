import React, {useEffect} from "react";
import App from './App'
import provider from "../../utils/provider";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {connectWalletRequest} from "../../modules/wallet/actions";

const AppContainer: React.FC = () => {

  const dispatch = useAppDispatch()

  useEffect(() => {
    // @ts-ignore
    provider.provider.on('accountsChanged', () => {
      dispatch(connectWalletRequest())
    })

    return () => {
      // @ts-ignore
      provider.provider.off('accountsChanged')
    }

  }, [])

  return <App/>
}


export default AppContainer;


