import { combineReducers } from 'redux'
import { walletReducer as wallet } from './wallet/reducer'
import { tokenReducer as token } from './token/reducer'
import { toastReducer as toast } from './toast/reducer'

export const reducer = combineReducers({
  wallet,
  token,
  toast
})
