import { RootState } from '../types'

export const getState = (state: RootState) => state.token
export const getBalance = (state: RootState) => getState(state).balance
export const getSymbol = (state: RootState) => getState(state).symbol
export const getLoadingTransfer = (state: RootState) => getState(state).loading_transfer
export const getLoadingBalance = (state: RootState) => getState(state).loading_balance
export const getErrorTransfer = (state: RootState) => getState(state).error_transfer
export const getErrorBalance = (state: RootState) => getState(state).error_balance
