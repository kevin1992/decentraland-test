import {AnyAction} from 'redux'
import {ToastState} from './types'
import {
    AddToastAction, DismissToastAction,
    TOAST_ADD, TOAST_DISMISS

} from "./actions";

const INITIAL_STATE: ToastState = {
    toasts: []
}

export function toastReducer(
    state: ToastState = INITIAL_STATE,
    action: AnyAction
): ToastState {
    switch (action.type) {
        case TOAST_ADD: {
            const toast = action.payload as AddToastAction['payload']
            return {
                ...state,
                toasts: [...state.toasts, toast]
            }
        }

        case TOAST_DISMISS: {
            const toast = action.payload as DismissToastAction['payload']
            return {
                ...state,
                toasts: state.toasts.filter(t => t !== toast)
            }
        }

        default:
            return state
    }
}
