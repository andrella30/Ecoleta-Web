import React from 'react'
// import { Route, BrowserRouter } from 'react-router-dom'
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from './pages/Home'
import CreatePoint from './pages/CreatePoint'

const Routess = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />} />
                <Route path="/create-point" element={<CreatePoint />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routess