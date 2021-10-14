import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import MainQuizPage from './quiz-page/Main';
import MainSubjectPage from './subject-page/Main';
import MainVideoPage from './video-page/Main';

const App = () => {

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
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
        </Router>
    )
}

export default App
