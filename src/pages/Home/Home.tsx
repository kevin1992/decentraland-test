import {Center, Page} from "decentraland-ui";
import {ConnectButton} from "../../components/ConnectButton";
import {WalletCard} from "../../components/WalletCard";
import React from "react";
import {Props} from "./Home.types";

const Home: React.FC<Props> = ({isConnected}) => {
    return (
        <Page className="App">
            <Center>
                {!isConnected ? (
                    <ConnectButton/>
                ) : (
                    <WalletCard/>
                )}
            </Center>
        </Page>
    )
}

export default Home