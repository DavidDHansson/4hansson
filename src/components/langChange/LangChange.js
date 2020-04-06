import React, { useContext } from "react";

import "./langChange.css";

import { LangContext } from "../LangContext/LangContext";
import dk from "./dk.svg";
import gb from "./gb.svg";

export default function LangChange() {
    const setLang = useContext(LangContext)[1];

    return (
        <div className="flagParent">
            <div className="flagChild" onClick={() => setLang("en") }><img src={gb} className="flagChildImage" alt="United Kingdom"/></div>
            <div className="flagChild" onClick={() => setLang("dk") }><img src={dk} className="flagChildImage" alt="Denmark"/></div>
        </div>
    );
}