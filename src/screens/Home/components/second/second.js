import React, { useContext, useEffect } from "react";

import Zoom from 'react-reveal/Zoom';

import "./second.css";
import mig from "./assets/mig.gif";
import log from "components/Log/Log";

import StartTitel from "./components/titel";
import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function Second() {
    const [lang] = useContext(LangContext);

    useEffect(() => {
        document.addEventListener("scroll", () => {
            const scroll = window.scrollY >= 10 && window.scrollY <= 1500;
            const el = document.getElementById("gifStartTitle");

            if (scroll) {
                const scale = mapRange(window.scrollY, 0, 1500, 0.8, 1);
                
                el != null && (el.style.transform = `scale(${scale})`);
            }
        });

        return () => {
            document.removeEventListener("scroll", () => { }, true);
        };
    }, []);


    function mapRange(value, a, b, c, d) {
        value = (value - a) / (b - a);
        return c + value * (d - c);
    }

    return (
        <div>
            <div className="secondPar">
                <Zoom onReveal={() => log({ site: "Home", section: "2", time: "0" })}>
                    <div className="secondWrapper">
                        <div className="secondText">
                            <StartTitel />
                            <p style={{ fontSize: 20, textAlign: "justify" }}>
                                {lang === trans.lang[0] && (trans.startTitelBes[0])}
                                {lang === trans.lang[1] && (trans.startTitelBes[1])}
                            </p>
                        </div>
                        <div id="gifStartTitle">
                            <img src={mig} alt="Gif of David" width={window.innerWidth > 600 ? 600 : window.innerWidth - 100} />
                        </div>
                    </div>
                </Zoom>
            </div>
        </div>
    );
}
