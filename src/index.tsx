import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import {App} from './components/App'
import {store} from './modules/store'

import 'decentraland-ui/lib/styles.css'
import {
    BrowserRouter as Router, Route, Routes,
} from "react-router-dom";
import {Home} from "./pages/Home";
import {Transfer} from "./pages/Transfer";

require('dotenv').config()

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Routes>
                <Route path="/" element={<App/>}>
                    <Route index element={<Home/>}/>
                    <Route path={'transfer'} element={<Transfer/>}/>
                </Route>
            </Routes>
        </Router>
    </Provider>,
    document.getElementById('root')
)
