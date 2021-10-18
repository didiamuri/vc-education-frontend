import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from '../components/App';
import LoginView from '../components/auth/LoginView';
import SignupView from '../components/auth/SignupView';

export class Layout extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/login">
                        <LoginView />
                    </Route>
                    <Route exact path="/signup">
                        <SignupView />
                    </Route>
                    <Route exact path="/">
                        <App />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default Layout
