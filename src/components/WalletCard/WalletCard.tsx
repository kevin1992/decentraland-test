import React from 'react'
import {
    Button,
    Card,
    Header,
} from 'decentraland-ui'
import {Props} from './WalletCard.types'
import './WalletCard.css'

const WalletCard: React.FC<Props> = ({address, balance, symbol, error, loading, onTransfer}) => {
    return (
        <>
            <Card>
                <Header>Wallet</Header>
                <p>
                    <strong>Address:</strong>&nbsp;
                    {address.slice(0, 6) + '...' + address.slice(-4)}
                </p>
                <p>
                    <strong>Balance:</strong>
                    {!balance || loading ? `...` : `${balance.toNumber()} ${symbol}`}
                    {}
                </p>
                <Button onClick={onTransfer} basic>TRANSFER</Button>
                {error ? <p className="error">{error}</p> : null}
            </Card>
        </>
    )
}

export default WalletCard
