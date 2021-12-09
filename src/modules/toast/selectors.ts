import { RootState } from '../types'

export const getState = (state: RootState) => state.toast
export const getToasts = (state: RootState) => getState(state).toasts
