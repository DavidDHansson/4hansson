import React from "react";

import Fade from 'react-reveal/Fade';

import "./fourth.css";
import Right from "./components/Right";
import Left from "./components/Left";
import log from "components/Log/Log";

export default function Fourth() {
    return (
        <div className="fourthPar">
            <Fade onReveal={() => log({ site: "Home", section: "3"})}>
                <div className="fourthWrapper">
                    <Left />
                    <Right />
                </div>
            </Fade>
        </div>
    );
}