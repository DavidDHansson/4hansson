import React, { useContext } from "react";

import "./langChange.css";

import { LangContext } from "../LangContext/LangContext";

export default function LangChange() {
    const setLang = useContext(LangContext)[1];

    return (
        <div className="flagParent">
            <div className="flagChild" onClick={() => setLang("en") }><span role="img" aria-label="EN"> 🇬🇧 </span></div>
            <div className="flagChild" onClick={() => setLang("dk") }><span role="img" aria-label="DK"> 🇩🇰 </span></div>
        </div>
    );
}