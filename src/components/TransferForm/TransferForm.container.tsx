import React, {ChangeEvent, useCallback, useState} from "react";
import TransferForm from './TransferForm'
import {TransferFormErrors} from "./TransferForm.types";
import isValidAddress from "../../utils/isValidAddress";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {transferTokenRequest} from "../../modules/token/actions";
import {useSelector} from "react-redux";
import {RootState} from "../../modules/types";
import {
    getBalance,
    getLoadingTransfer
} from "../../modules/token/selectors";
import {BigNumber} from "ethers";

const INITIAL_FORM_STATE = {
    address: {
        error: false,
        messages: []
    },
    amount: {
        error: false,
        messages: []
    }
}

const TransferFormContainer: React.FC = () => {
    const dispatch = useAppDispatch()

    const [address, setAddress] = useState<string>("")
    const [amount, setAmount] = useState<number>(0)
    const [errors, setErrors] = useState<TransferFormErrors>(INITIAL_FORM_STATE)

    const balance = useSelector((state: RootState) => getBalance(state))
    const loading = useSelector((state: RootState) => getLoadingTransfer(state))

    const onValidate = useCallback((value: any, name: string) => {
        const errorsMessages: string[] = []

        if (!value) {
            errorsMessages.push('This value is required')
        }

        switch (name) {
            case "address":
                if (!isValidAddress(value)) {
                    errorsMessages.push('This address is invalid')
                }
                break;
            case "amount":
                if(value && BigNumber.from(value).gt(balance!)){
                    errorsMessages.push(`You cannot send more than ${balance?.toNumber()}`)
                }
        }

        setErrors((errors) => ({
            ...errors,
            [name]: {
                messages: errorsMessages,
                error: errorsMessages.length > 0
            }
        }))

        return errorsMessages.length === 0

    }, [setErrors, balance])

    const onChange = useCallback((e, updateHook) => {
        onValidate(e.target.value, e.target.name)
        updateHook(e.target.value)
    }, [address, amount, onValidate])

    const onValidateForm = useCallback(() => {
        const addressValid = onValidate(address, "address");
        const amountValid = onValidate(amount, "amount")
        return addressValid && amountValid
    }, [address, amount, onValidate])

    const onSubmit = useCallback((e) => {
        e.preventDefault()
        const valid = onValidateForm()
        if (!valid) {
            return;
        }

        dispatch(transferTokenRequest(address, amount, () => {
            setAddress('')
            setAmount(0)
        }))

    }, [address, amount,setAmount,setAddress, onValidateForm])

    return <TransferForm loading={loading} errors={errors} onChange={onChange} address={address} amount={amount} setAddress={setAddress}
                         setAmount={setAmount} onSubmit={onSubmit}/>
}


export default TransferFormContainer