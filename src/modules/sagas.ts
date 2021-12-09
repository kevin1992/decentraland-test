import { all } from '@redux-saga/core/effects'
import { walletSaga } from './wallet/sagas'
import {tokenSaga} from "./token/sagas";
import {toastSaga} from "./toast/sagas";

export function* sagas() {
  yield all([walletSaga(), tokenSaga(), toastSaga()])
}
