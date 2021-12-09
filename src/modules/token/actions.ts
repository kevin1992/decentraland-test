// Connect Wallet
import {BigNumber} from "ethers";

export const GET_TOKEN_BALANCE_REQUEST = '[Request] Get Token Balance'
export const GET_TOKEN_BALANCE_SUCCESS = '[Success] Get Token Balance'
export const GET_TOKEN_BALANCE_FAILURE = '[Failure] Get Token Balance'

export const TRANSFER_TOKEN_REQUEST = '[Request] Transfer Token'
export const TRANSFER_TOKEN_SUCCESS = '[Success] Transfer Token'
export const TRANSFER_TOKEN_FAILURE = '[Failure] Transfer Token'

export function getTokenBalanceRequest(address: string) {
  return {
    type: GET_TOKEN_BALANCE_REQUEST,
    payload: {
      address
    },
  }
}

export function getTokenBalanceSuccess(balance: BigNumber, symbol: string) {
  return {
    type: GET_TOKEN_BALANCE_SUCCESS,
    payload: {
      balance,
      symbol
    },
  }
}

export function getTokenBalanceFailure(error: string) {
  return {
    type: GET_TOKEN_BALANCE_FAILURE,
    payload: {
      error,
    },
  }
}


export function transferTokenRequest(address: string, amount: number, onSuccess?: () => void) {
  return {
    type: TRANSFER_TOKEN_REQUEST,
    payload: {
      address,
      amount,
      onSuccess
    },
  }
}

export function transferTokenSuccess() {
  return {
    type: TRANSFER_TOKEN_SUCCESS,
    payload: {},
  }
}

export function transferTokenFailure(error: string) {
  return {
    type: TRANSFER_TOKEN_FAILURE,
    payload: {
      error,
    },
  }
}

export type GetTokenBalanceRequestAction = ReturnType<typeof getTokenBalanceRequest>
export type GetTokenBalanceSuccessAction = ReturnType<typeof getTokenBalanceSuccess>
export type GetTokenBalanceFailureAction = ReturnType<typeof getTokenBalanceFailure>

export type TransferTokenRequestAction = ReturnType<typeof transferTokenRequest>
export type TransferTokenSuccessAction = ReturnType<typeof transferTokenSuccess>
export type TransferTokenFailureAction = ReturnType<typeof transferTokenFailure>
