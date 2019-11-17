import React, { useContext } from "react";
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

    return (
        <div className="secondPar">
            <Zoom duration={2000} delay={500}>
                <div className="secondWrapper">
                    <div className="secondText">
                        <StartTitel />
                        <p style={{ fontSize: 20, textAlign: "justify" }}>
                            {lang === trans.lang[0] && (trans.startTitelBes[0])}
                            {lang === trans.lang[1] && (trans.startTitelBes[1])}
                        </p>
                    </div>
                    <div>
                        <GifPlayer
                            gif={mig}
                            still={migstill}
                            autoplay={true}
                        />
                    </div>
                </div>
            </Zoom>
        </div>
    );
}
