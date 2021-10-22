import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "../components/App";
import LoginView from "../components/auth/LoginView";
import SignupView from "../components/auth/SignupView";
import AuthState from "../context/auth/AuthState";
import GradeState from "../context/grade/GradeState";

const Layout = () => {
  return (
    <GradeState>
      <AuthState>
        <Router>
          <Switch>
            <Route exact path="/login" component={LoginView} />
            <Route exact path="/signup" component={SignupView} />
            <Route exact path="/" component={App} />
          </Switch>
        </Router>
      </AuthState>
    </GradeState>
  );
};

export default Layout;
