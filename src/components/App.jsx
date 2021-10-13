import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Home';
import CourseMain from './course-details/Main';


export class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/course">
                        <CourseMain />
                    </Route>
                </Switch>
            </Router>
        )
    }
}

export default App
