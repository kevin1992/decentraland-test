import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../modules/types";
import {isConnected} from "../../modules/wallet/selectors";
import Home from "./Home";

const HomeContainer = () => {

    const _isConnected = useSelector((state: RootState) => isConnected(state))

    return (
        <Home isConnected={_isConnected}/>
    )
}

export default HomeContainer