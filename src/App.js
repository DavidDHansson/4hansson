import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//screens
import Main from "./screens/Main/Main";
import Projekt from "./screens/Projekt/Projekt";
import Kontakt from "./screens/Kontakt/Kontakt";

import Navigation from "./components/Navigation/Navigation";
import { LangProvider } from './components/LangContext/LangContext';

//https://reactjs.org/docs/context.html#dynamic-context

class App extends React.Component {
    render() {
        return (
            <LangProvider>
                <Router>
                    <Navigation changeLang={this.changeLang}/>
                    <Switch>
                        <Route path="/" exact component={Main} />
                        <Route path="/projekt" component={Projekt} />
                        <Route path="/kontakt" component={Kontakt} />
                    </Switch>
                </Router>
            </LangProvider>
        );
    }
}

export default App;
