import React, { useContext } from "react";

import "./../second.css";

// https://www.react-reveal.com/examples/common/
// https://www.react-reveal.com/docs/props 
// Onreveal Analytics
import LangChange from "components/langChange/LangChange";
import { LangContext } from "components/LangContext/LangContext";

import trans from "constants/lang";

export default function StartTitel() {
    const [ lang ] = useContext(LangContext);

    return (
        <div>
            <p className="startTitel">
                {lang === trans.lang[0] && (trans.startTitel[0])}
                {lang === trans.lang[1] && (trans.startTitel[1])}
            </p>
            <p>
                {lang === trans.lang[0] && (trans.langInfo[0])}
                {lang === trans.lang[1] && (trans.langInfo[1])}
            </p>
            <LangChange />
        </div>
    );
}