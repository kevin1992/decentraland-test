import React from 'react'
import {
    Footer,
    Navbar,
} from 'decentraland-ui'
import {Props} from './App.types'
import './App.css'
import {Outlet} from "react-router-dom";
import ToastContainer from "../Toast/Toast.container";

const App: React.FC<Props> = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <ToastContainer/>
            <Footer/>
        </>
    )
}

export default App
