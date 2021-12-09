import {AnyAction} from 'redux'
import {TokenState} from './types'
import {
    GET_TOKEN_BALANCE_FAILURE,
    GET_TOKEN_BALANCE_REQUEST,
    GET_TOKEN_BALANCE_SUCCESS,
    GetTokenBalanceFailureAction,
    GetTokenBalanceSuccessAction,
    TRANSFER_TOKEN_FAILURE,
    TRANSFER_TOKEN_REQUEST,
    TRANSFER_TOKEN_SUCCESS, TransferTokenFailureAction
} from "./actions";

const INITIAL_STATE: TokenState = {
    balance: null,
    symbol: null,
    loading_balance: false,
    error_balance: null,
    loading_transfer: false,
    error_transfer: null
}

export function tokenReducer(
    state: TokenState = INITIAL_STATE,
    action: AnyAction
): TokenState {
    switch (action.type) {
        case GET_TOKEN_BALANCE_REQUEST: {
            return {
                ...state,
                loading_balance: true,
                error_balance: null,
            }
        }
        case GET_TOKEN_BALANCE_SUCCESS: {
            const { balance, symbol } = action.payload as GetTokenBalanceSuccessAction['payload']
            return {
                ...state,
                loading_balance: false,
                balance,
                symbol,
                error_balance: null,
            }
        }
        case GET_TOKEN_BALANCE_FAILURE: {
            const { error } = action.payload as GetTokenBalanceFailureAction['payload']
            return {
                ...state,
                loading_balance: false,
                error_balance:error
            }
        }


        case TRANSFER_TOKEN_REQUEST: {
            return {
                ...state,
                loading_transfer: true,
                error_transfer: null,
            }
        }
        case TRANSFER_TOKEN_SUCCESS: {
            return {
                ...state,
                loading_transfer: false,
                error_transfer: null,
            }
        }
        case TRANSFER_TOKEN_FAILURE: {
            const { error } = action.payload as TransferTokenFailureAction['payload']
            return {
                ...state,
                loading_transfer: false,
                error_transfer: error
            }
        }

        default:
            return state
    }
}
