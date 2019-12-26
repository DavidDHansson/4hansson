import React from "react";

import Zoom from 'react-reveal/Zoom';

import "./fourth.css";
import Right from "./components/Right";
import Left from "./components/Left";

export default function Fourth() {
    return (
        <div className="fourthPar">
            <Zoom>
                <div className="fourthWrapper">
                    <Left />
                    <Right />
                </div>
            </Zoom>
        </div>
    );
}