import React from "react";

import Particles from "./../Particles";
import "./first.css";
import Fire from "./fire";

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
                    timer: setTimeout(() => { this.navnEvent(i); }, 1600)
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
            el[i].removeEventListener("mouseenter", () => {}, true);
            el[i].removeEventListener("mouseleave", () => {}, true);
        }
    }

    navnEvent = (el) => {
        this.setState({
            fire: el
        });

        setTimeout(() => { this.setState({ fire: 10 })}, 2000);
    }

    render() {
        return (
            <div className="par" id="navnPar">
                <p className="text el1">
                    <span class="navn">D</span>
                    avid<span> </span>
                        <span class="navn">H</span>
                    ansson
                    </p>

                <Fire go={this.state.fire}/>

                <div className="el2">
                    <Particles />
                </div>
            </div>
        );
    }
}