import React from 'react';
import {Route, Routes} from 'react-router-dom'

export default  () => {
    return (
        <Routes>
            <Route exact path="/">
                Initial
            </Route>
            <Route exact path="/info">
                Infos
            </Route>
        </Routes>
    )
}