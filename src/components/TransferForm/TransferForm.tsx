import React from 'react'
import {Props} from './TransferForm.types'
import './TransferForm.css'
import {Button, Field, Form, Loader} from "decentraland-ui";

const TransferForm: React.FC<Props> = ({onSubmit, onChange, setAddress, address, amount, setAmount, errors, loading}) => {

    const {address: addressErrors, amount: amountErrors} = errors
    const formInvalid = addressErrors.error || amountErrors.error

    return (
        <>
            <Form onSubmit={onSubmit}>
                <Field name="amount" label="Amount" value={amount || ''} onChange={(e) => onChange(e, setAmount)}
                       placeholder="1,000" type="number" error={amountErrors.error} message={amountErrors.messages[0]}/>
                <Field name="address" label="Address" value={address} error={addressErrors.error} message={addressErrors.messages[0]}
                       onChange={(e) => onChange(e, setAddress)} type="address"/>
                <Button type="submit" loading={loading} disabled={formInvalid || loading} primary style={{minWidth: 400}}>Transfer</Button>
            </Form>
        </>
    )
}

export default TransferForm
