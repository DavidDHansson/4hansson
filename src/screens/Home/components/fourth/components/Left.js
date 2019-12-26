import React from "react";

import codedot from "./../assets/codedot.png";
import Dot from "./Dot";

export default function Left() {
    return (
        <div style={{ widt: "50%" }}>
            <img src={codedot} alt="Code Dot" style={{ width: "90%" }} />
            <br />
            <div style={{ position: "absolute", left: "50%" }}>
                <div style={{ fontSize: "50px", position: "relative", left: "-50%"}}>
                    <Dot />
                </div>
            </div>
        </div>
    );
}