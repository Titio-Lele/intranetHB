import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Principal from './Principal/Principal'
import Incidentes from './Incidentes/Incidentes'

export default function Routes() {
    return (
        <Router>
            <Route exact path = '/' component={Principal} />
            <Route path="/incidentes" component={Incidentes} />
        </Router>
    )
}