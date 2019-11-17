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
            size: 100
        }
    }

    componentDidMount() {
        const el = document.getElementsByClassName("navNavn");

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
        const el = document.getElementsByClassName("NavNavn");

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

                <Pulse>
                    <div className="navText navEl1">
                        <span class="navNavn">D</span>
                        avid<span> </span>
                        <span class="navNavn">H</span>
                        ansson
                    </div>
                </Pulse>

                    <Fire go={this.state.fire} />

                    <div className="navEl2">
                        <Particles size={this.state.size}/>
                    </div>
                <div style={{ paddingTop: window.innerHeight - this.state.size }}></div>
            </div>
        );
    }
}