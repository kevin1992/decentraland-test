import {BigNumber, ethers} from 'ethers'
import {call, put, takeEvery} from 'redux-saga/effects'
import {
  GET_TOKEN_BALANCE_REQUEST,
  getTokenBalanceFailure,
  getTokenBalanceRequest,
  GetTokenBalanceRequestAction,
  getTokenBalanceSuccess,
  TRANSFER_TOKEN_REQUEST,
  transferTokenFailure,
  TransferTokenRequestAction,
  transferTokenSuccess
} from './actions'
import provider from "../../utils/provider";
import {getTokenContract} from "../../utils/getTokenContract";
import {queueToast} from "../toast/actions";
import {ToastType} from "decentraland-ui";


export function* tokenSaga() {
  yield takeEvery(GET_TOKEN_BALANCE_REQUEST, handleTokenBalanceRequest)
  yield takeEvery(TRANSFER_TOKEN_REQUEST, handleTransferTokenRequest)
}

function* handleTokenBalanceRequest(action: GetTokenBalanceRequestAction) {
  try {
    const signer = provider.getSigner()
    const contract = getTokenContract(signer)
    const {address} = action.payload
    const balance: BigNumber = yield call(() => contract.balanceOf(address))
    const symbol: string = yield call(() => contract.symbol())

    yield put(getTokenBalanceSuccess(balance, symbol))
  } catch (error: any) {
    yield put(getTokenBalanceFailure(error.message))
  }
}


function* handleTransferTokenRequest(action: TransferTokenRequestAction) {
  try {
    const signer = provider.getSigner()
    const contract = getTokenContract(signer)
    const {address, amount} = action.payload
    const tx: ethers.providers.TransactionResponse = yield call(() => contract.transfer(address, BigNumber.from(amount)))
    const receipt: ethers.providers.TransactionReceipt = yield call(() => tx.wait())

    if (receipt.status) {
      yield put(transferTokenSuccess())
      yield put(getTokenBalanceRequest(address))
      yield put(queueToast({
        title: 'Success',
        type: ToastType.INFO,
        message: 'Your transaction was completed successfully'
      }))
      if (action.payload.onSuccess) {
        yield call(action.payload.onSuccess)
      }
    } else {
      throw Error("Error with the transaction")
    }
  } catch (error: any) {
    yield put(transferTokenFailure(error.message))
  }
}
