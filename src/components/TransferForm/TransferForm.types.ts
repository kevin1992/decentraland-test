import {ChangeEvent, FormEvent} from "react";

export type Props = {
    onSubmit: (e: FormEvent<HTMLFormElement>) => void
    onChange: (e: ChangeEvent<HTMLInputElement>, updateHook: (value: any) => void) => void
    address: string
    amount: number
    setAddress: (value: string) => void
    setAmount: (value: number) => void
    errors: TransferFormErrors
    loading: boolean
}

export type TransferFormData = {
    address: string
    amount: number
}

export type TransferFormErrors = {
    address: TransferFormError
    amount: TransferFormError
}

export type TransferFormError = {
    messages: string[]
    error: boolean
}