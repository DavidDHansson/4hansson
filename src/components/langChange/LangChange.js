import React, { useContext } from "react";

import "./langChange.css";

import { LangContext } from "../LangContext/LangContext";

export default function LangChange() {
    // eslint-disable-next-line
    const [ lang, setLang ] = useContext(LangContext);

    return (
        <div className="flagParent">
            <div className="flagChild" onClick={() => setLang("en") }><span role="img" aria-label="UK Flag"> 🇬🇧 </span></div>
            <div className="flagChild" onClick={() => setLang("dk") }><span role="img" aria-label="Denmark Flag"> 🇩🇰 </span></div>
        </div>
    );
}