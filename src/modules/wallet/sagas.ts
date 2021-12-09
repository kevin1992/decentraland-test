import { call, put, takeEvery } from 'redux-saga/effects'
import {
  connectWalletFailure,
  connectWalletSuccess,
  CONNECT_WALLET_REQUEST,
} from './actions'
import provider from "../../utils/provider";
import {getTokenBalanceRequest} from "../token/actions";



/* This is the Dummy Token address, it identifies the token contract once deployed */
export const TOKEN_ADDRESS = process.env.REACT_APP_TOKEN_ADDRESS!
if (!TOKEN_ADDRESS) {
  console.error(`Missing env variable REACT_APP_TOKEN_ADDRESS`)
}


export function* walletSaga() {
  yield takeEvery(CONNECT_WALLET_REQUEST, handleConnectWalletRequest)
}

function* handleConnectWalletRequest() {
  try {
    yield call(() => provider.send('eth_requestAccounts', []))
    const signer = provider.getSigner()
    const address: string = yield call(() => signer.getAddress())
    yield put(connectWalletSuccess(address))
    yield put(getTokenBalanceRequest(address))
  } catch (error: any) {
    yield put(connectWalletFailure(error.message))
  }
}
