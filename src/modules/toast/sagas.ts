import { delay, put, takeEvery } from 'redux-saga/effects'
import {
  addToast, dismissToast,
  QueueToastAction,
  TOAST_QUEUE
} from './actions'


export function* toastSaga() {
  yield takeEvery(TOAST_QUEUE, handleQueueToast)
}

function* handleQueueToast(action: QueueToastAction) {
  try {
    const toast = action.payload;

    yield put(addToast(toast));
    yield delay(4000);
    yield put(dismissToast(toast));

  } catch (error: any) {
    console.error(error)
  }
}