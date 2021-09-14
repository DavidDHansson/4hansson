import React, { useState, useLayoutEffect } from "react";

import Particles from "./Particles";
import Fade from 'react-reveal/Fade';
import Fire from "./Firework";

import David from "./david.jpg";
import log from "components/Log/Log";
import "./first.css";

export default class First extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            navnHover: false,
            timer: "",
            timerInactive: "",
            fire: 10
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
        const el = document.getElementsByClassName("navNavn");

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
                <Fire go={this.state.fire} />
                <div className="mainFirstParticles">
                    <Particles />
                </div>
                <Content />
            </div>
        );
    }
}


function Content() {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useLayoutEffect(() => {
        window.addEventListener("resize", handler);

        return () => window.removeEventListener("resize", handler);
    }, []);

    function handler() {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (
        <div>
            <Fade onReveal={() => log({ site: "Home", section: "1"})}>

                <div style={{ width: width - 100 }} className="mainFirstNamePhotoWrapper">

                    <div className="navText mainFirstName">
                        <span className="navNavn">D</span>
                        avid<span> </span>
                        {width <= 480 && (<div><br /> <br /></div>)}
                        <span className="navNavn">D</span>
                        omingo<span> </span>
                        <div style={{padding: "30px"}}></div>
                        <span className="navNavn">H</span>
                        ansson
                    </div>

                    <div className="mainFirstPhotoWrapper navNavn">
                        <img src={David} className="mainFirstPhoto" alt="David Domingo Hansson"/>
                    </div>

                </div>

            </Fade>

            <div style={{ paddingTop: (height * 0.9) }}></div>
        </div>
    );
}

