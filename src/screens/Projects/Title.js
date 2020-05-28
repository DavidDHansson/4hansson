import React, { useContext } from 'react';

import timeline from "./assets/timeline.svg";

import trans from "constants/lang.json";
import { LangContext } from "components/LangContext/LangContext.js";

import log from "components/Log/Log";
import Pulse from 'react-reveal/Pulse';

function Title() {
    const [lang] = useContext(LangContext);

    return (
        <div className="projectsTitleWrapper">
            <Pulse onReveal={() => log({ site: "Projects", section: "1" })}>
                <p className="title">
                    {lang === trans.lang[0] && (trans.timeLineTitle[0])}
                    {lang === trans.lang[1] && (trans.timeLineTitle[1])}
                </p>
                <img src={timeline} height="300" alt="Exams by unDraw"/>
            </Pulse>
        </div>
    );
}

export default Title;