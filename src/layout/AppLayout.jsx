import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from '../components/Home';
import MainQuizPage from '../components/quiz-page/Main';
import Footer from '../components/shared/Footer';
import Header from '../components/shared/Header';
import MainSubjectPage from '../components/subject-page/Main';
import MainVideoPage from '../components/video-page/Main';

const AppLayout = () => {

    return (
        <Router>
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/app/subject-page/" component={MainSubjectPage} />
                <Route exact path="/app/video" component={MainVideoPage} />
                <Route exact path="/app/quiz" component={MainQuizPage} />
            </Switch>
            <Footer />
        </Router>
    )
}

export default AppLayout
