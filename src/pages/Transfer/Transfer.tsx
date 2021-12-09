import {Container, Hero, Message, Page} from "decentraland-ui";

import React from "react";
import {Props} from "./Transfer.types";
import {TransferForm} from "../../components/TransferForm";
import './Transfer.css'
import {ConnectButton} from "../../components/ConnectButton";

const Transfer: React.FC<Props> = ({isConnected, error}) => {
    return (
        <Page className="App">
            <Hero centered>
                <Hero.Header>Transfer</Hero.Header>
            </Hero>
            <Container>
                <div className={"transfer_form_container"}>
                    {error ? <p className="error">{error}</p> : null}
                    {!isConnected ? (
                        <ConnectButton/>
                    ) : (

                        <TransferForm/>
                    )}

                </div>
            </Container>
        </Page>
    )
}

export default Transfer