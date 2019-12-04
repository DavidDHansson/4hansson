import React, { useContext, useEffect } from "react";

import GifPlayer from "react-gif-player";
import Zoom from 'react-reveal/Zoom';

import "./second.css";
import mig from "./assets/mig.gif";
import migstill from "./assets/migstill.jpg";

import StartTitel from "./components/titel";
import trans from "./../../../../constants/lang";
import { LangContext } from "../../../../components/LangContext/LangContext";

export default function Second() {
    const [lang] = useContext(LangContext);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scroll = window.scrollY >= 10 && window.scrollY <= 1500;

            if (scroll) {
                const scale = mapRange(window.scrollY, 0, 1500, 1, 1.2);
                const el = document.getElementById("gifStartTitle");

                el != null && (el.style.transform = `scale(${scale})`);
            }
        });

        return () => {
            document.removeEventListener("scroll", () => {}, true);
        };
    }, []);


    function mapRange(value, a, b, c, d) {
        value = (value - a) / (b - a);
        return c + value * (d - c);
    }

    return (
        <div>
        <div style={{ backgroundColor: "rgb(230, 232, 236)", padding: "50px" }}></div>
        <div className="secondPar">
            <Zoom>
                <div className="secondWrapper">
                    <div className="secondText">
                        <StartTitel />
                        <p style={{ fontSize: 20, textAlign: "justify" }}>
                            {lang === trans.lang[0] && (trans.startTitelBes[0])}
                            {lang === trans.lang[1] && (trans.startTitelBes[1])}
                        </p>
                    </div>
                    <div id="gifStartTitle">
                        <GifPlayer
                            gif={mig}
                            still={migstill}
                            autoplay={true}
                        />
                    </div>
                </div>
            </Zoom>
        </div>
        <div style={{ backgroundColor: "rgb(230, 232, 236)", padding: "50px" }}></div>
        </div>
    );
}
