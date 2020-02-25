import React from "react";

import Zoom from 'react-reveal/Zoom';

import "./fourth.css";
import Right from "./components/Right";
import Left from "./components/Left";
import log from "components/Log/Log";

export default function Fourth() {
    return (
        <div className="fourthPar">
            <Zoom onReveal={() => log({ site: "Home", section: "3", time: "0" })}>
                <div className="fourthWrapper">
                    <Left />
                    <Right />
                </div>
            </Zoom>
        </div>
    );
}