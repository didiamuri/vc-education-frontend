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
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={LoginView}/>
                <Route exact path="/signup" component={SignupView}/>
                <Route exact path="/subject-page/:courseId" component={MainSubjectPage}/>
                <Route exact path="/video" component={MainVideoPage}/>
                <Route exact path="/quiz" component={MainQuizPage}/>
            </Switch>
            <Footer />
        </Router>
    )
}

export default App
