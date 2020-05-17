import React, { useContext } from 'react';

import timeline from "./assets/timeline.svg";

import trans from "constants/lang.json";
import { LangContext } from "components/LangContext/LangContext.js";

function Title() {
    const [lang] = useContext(LangContext);

    function getTitle() {
        return lang === trans.lang[0] ? "no" : "yes";
    }

    return (
        <div className="projectsTitleWrapper">
            <p className="title">
                {lang === trans.lang[0] && (trans.timeLineTitle[0])}
                {lang === trans.lang[1] && (trans.timeLineTitle[1])}
            </p>
            <img src={timeline} height="300" />
        </div>
    );
}

export default Title;