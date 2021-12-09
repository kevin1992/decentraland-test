import {Toast} from "../../components/Toast/Toast.types";

export const TOAST_QUEUE = "[Queue] toast";
export const TOAST_ADD = "[Add] toast";
export const TOAST_DISMISS = "[Dismiss] toast";

export const queueToast = (payload: Toast) => ({
  type: TOAST_QUEUE,
  payload
});

export const addToast = (payload: Toast) => ({
  type: TOAST_ADD,
  payload
});

export const dismissToast = (payload: Toast) => ({type: TOAST_DISMISS, payload});

export type QueueToastAction = ReturnType<typeof queueToast>
export type AddToastAction = ReturnType<typeof addToast>
export type DismissToastAction = ReturnType<typeof dismissToast>
