import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import InputPage from './InputPage';
import OutputPage from './outputPage';
import Error from './Error'


function Routes() {
    return (
        <Router>
            <Switch>
            <Route exact path='/' component={InputPage}/>
            <Route path='/output' component={OutputPage}/>
            <Route component={Error}/>
            </Switch>
        </Router>
    )
}

export default Routes
