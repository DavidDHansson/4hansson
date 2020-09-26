import React, { useState } from 'react';

import "./GuestBook.css";
import Sketch from "react-p5";
import Flo from "./GuestBookTextCon.js";

import Title from "./GuestBookTitle.js";
import FloatText from "./GuestBookP5.js";

function GuestBook() {

    function addMessageForCanvas(message) {
        queue = message;
    }

    let texts = [];
    let queue = null;

    const setup = (p5, canvasParentRef) => {
        p5.createCanvas(700, 500).parent(canvasParentRef);

        texts.push(new Flo(p5, "Fed side", "- David Hansson", "25/09/2020", true));
        texts.push(new Flo(p5, "Yay", "- Random gut", "22/09/2020", false));
        texts.push(new Flo(p5, "Skud ud til græs", "- Igen her", "21/09/2020", false));
        texts.push(new Flo(p5, "Altid godt", "- Random igen", "24/09/2020", false));

    }

    const draw = (p5) => {
        p5.background(32, 38, 46);

        for (let i = 0; i < texts.length; i++) {
            texts[i].update();
        }

        if (queue != null) {
            texts.push(new Flo(p5, "TEST", "- TEST", "25/09/2020", true));
            queue = null;
        }

    }

    return (
        <div className="mainGuestBookWrapper">
            <div className="guestBookwrapper">
                <div className="guestBookChild" style={{ height: "500px", width: "700px", backgroundColor: "white" }}>
                    <Sketch setup={setup} draw={draw} />
                </div>
                <div>
                    <Title />
                    <button onClick={() => addMessageForCanvas("Test")}></button>
                </div>
            </div>
        </div>
    );
}

export default GuestBook;