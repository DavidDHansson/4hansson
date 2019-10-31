import React from "react";

import "./Main.css";
import Bid from "./components/Bid";
import Particles from "./components/Particles";

export default function Main() {

    return (
        <div style={{display: "flex", flexDirection: "column"}}>
            <div className="par">
                <div className="el1"> <p className="text"> David D. Hansson </p> </div>
                <div className="el2">
                    <Particles />
                </div>
            </div>
            <div style={{padding: 250}}></div>
            <Bid style={{backgroundColor: "blue", height: 400}} />
            <Bid style={{backgroundColor: "green", height: 500}} />
        </div>
    );
}