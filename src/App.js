import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//screens
import Main from "./screens/Main/Main";
import Projekt from "./screens/Projekt/Projekt";
import Kontakt from "./screens/Kontakt/Kontakt";

import Navigation from "./components/Navigation/Navigation";

function App() {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/projekt" component={Projekt}/>
                <Route path="/kontakt" component={Kontakt}/>
            </Switch>
        </Router>
    );
}

export default App;
