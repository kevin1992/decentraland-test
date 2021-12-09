import {ToastType} from "decentraland-ui";

export type Props = {
    toasts: Toast[]
}


export type Toast = {
    message: string
    type: ToastType
    title: string
}
