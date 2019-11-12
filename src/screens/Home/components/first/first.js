import React from "react";

import Particles from "./Particles";
import "./first.css";
import Fire from "./fire";

import Pulse from 'react-reveal/Pulse';

export default class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navnHover: false,
            timer: "",
            fire: 10,
        }
    }

    componentDidMount() {
        const el = document.getElementsByClassName("navn");

        for (let i = 0; i < el.length; i++) {

            el[i].addEventListener("mouseenter", () => {
                this.setState({
                    navnHover: true,
                    timer: setTimeout(() => { this.navnEvent(i); }, 800)
                });
            });

            el[i].addEventListener("mouseleave", () => {
                this.setState({
                    navnHover: false,
                });
                clearTimeout(this.state.timer);
            });
        }
    }

    componentWillUnmount() {
        const el = document.getElementsByClassName("navn");

        for (let i = 0; i < el.length; i++) {
            el[i].removeEventListener("mouseenter", () => { }, true);
            el[i].removeEventListener("mouseleave", () => { }, true);
        }
    }

    navnEvent = (el) => {
        this.setState({
            fire: el
        });

        setTimeout(() => { this.setState({ fire: 10 }) }, 800);
    }

    render() {
        return (
            <div>
                <div className="par" id="navnPar">

                <Pulse>
                    <div className="text el1">
                        <span class="navn">D</span>
                        avid<span> </span>
                        <span class="navn">H</span>
                        ansson
                    </div>
                </Pulse>

                    <Fire go={this.state.fire} />

                    <div className="el2">
                        <Particles />
                    </div>
                </div>
                <div style={{ paddingTop: 600 }}></div>
            </div>
        );
    }
}