import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../components/App";
import LoginView from "../components/auth/LoginView";
import SignupView from "../components/auth/SignupView";
import AuthState from "../context/auth/AuthState";

export class Layout extends Component {
  render() {
    return (
      <AuthState>
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
      </AuthState>
    );
  }
}

export default Layout;
