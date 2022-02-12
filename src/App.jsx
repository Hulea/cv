import React from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from "react-router-dom";
import Home from './Home';


const App = () => {

    const defaultRoute = window.location.pathname === "/" ? <Redirect to = "/cv"/> : undefined

    return(
        <div>
            <Router>
                <Switch>
                    <Route path='/cv' exact component={Home}/>
                </Switch>
                {defaultRoute}
            </Router>
        </div>
    );
}

export default App;
