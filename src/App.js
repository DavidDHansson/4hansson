import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

//screens
import Home from "./screens/Home/Home";
import Projects from "./screens/Projects/Projects";
import Contact from "./screens/Contact/Contact";
import NotFound from "./screens/NotFound/NotFound";

// Nav bar
import Navigation from "./components/Navigation/Navigation";

// Context
import { LangProvider } from './components/LangContext/LangContext';

// From Https to Https
import HttpsRedirect from 'react-https-redirect';


class App extends React.Component {
    render() {
        return (
            <HttpsRedirect>
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
            </HttpsRedirect>
        );
    }
}

export default App;