import React from 'react'
import {
    Button,
} from 'decentraland-ui'
import {Props} from './ConnectButton.types'
import './ConnectButton.css'

const ConnectButton: React.FC<Props> = ({isConnecting, onConnect, error}) => {
    return (
        <>
            <Button primary onClick={onConnect} loading={isConnecting}>
                Connect
            </Button>
            {error ? <p className="error">{error}</p> : null}
        </>
    )
}

export default ConnectButton
