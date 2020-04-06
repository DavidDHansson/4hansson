import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//screens
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import NotFound from "./screens/NotFound/NotFound";

import Navigation from "./components/Navigation/Navigation";
import { LangProvider } from './components/LangContext/LangContext';


//https://reactjs.org/docs/context.html#dynamic-context


class App extends React.Component {
    render() {
        return (
            <LangProvider>
                <Router>
                    <Navigation changeLang={this.changeLang} />
                    <Switch>
                        <Route path="/" exact={true} component={Home} />
                        <Route path="/home" component={Home} />
                        <Route path="/projects" component={Projects} />
                        <Route path="/contact" component={Contact} />
                        <Route component={NotFound} />
                    </Switch>
                </Router>
            </LangProvider>
        );
    }
}

export default App;