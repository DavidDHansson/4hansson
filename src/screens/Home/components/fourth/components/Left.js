import React from "react";

import codedot from "./../assets/codedot.png";
import Dot from "./Dot";

export default function Left() {
    return (
        <div>
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