import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignupView from './auth/SignupView';
import LoginView from './auth/LoginView';
import Home from './Home';
import MainQuizPage from './quiz-page/Main';
import MainSubjectPage from './subject-page/Main';
import MainVideoPage from './video-page/Main';
import Header from './shared/Header';
import Footer from './shared/Footer';

const App = () => {

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/login">
                    <LoginView />
                </Route>
                <Route exact path="/signup">
                    <SignupView />
                </Route>
                <Route exact path="/subject-page/">
                    <MainSubjectPage />
                </Route>
                <Route exact path="/video">
                    <MainVideoPage />
                </Route>
                <Route exact path="/quiz">
                    <MainQuizPage />
                </Route>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
