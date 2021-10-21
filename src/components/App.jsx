import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppLayout from '../layout/AppLayout';
import LoginView from './auth/LoginView';
import SignupView from './auth/SignupView';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/" component={AppLayout} />
                <Route exact path="/login" component={LoginView} />
                <Route exact path="/signup" component={SignupView} />
            </Switch>
        </Router>
    )
}

export default App
