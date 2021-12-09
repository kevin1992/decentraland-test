import React from 'react'
import {Props} from './Toast.types'
import './Toast.css'
import {  Toasts, Toast as UIToast } from 'decentraland-ui'

const Toast: React.FC<Props> = ({toasts}) => {
    return (
        <>
            <Toasts>
                {
                    toasts.map(({title, message}, i) => <UIToast key={i} title={title} body={message}/>)
                }
            </Toasts>
        </>
    )
}

export default Toast
