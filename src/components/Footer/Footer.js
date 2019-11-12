import React, { useContext } from "react";

import "./Footer.css";

import LangChange from "./../langChange/LangChange";
import trans from "./../../constants/lang";
import { LangContext } from "./../LangContext/LangContext";

export default function Footer() {
    const [lang] = useContext(LangContext);
    const d = new Date();

    return (
        <div className="parent">
            <div className="child">
                <p>
                    {lang === trans.lang[0] && (trans.langInfo[0])}
                    {lang === trans.lang[1] && (trans.langInfo[1])}
                </p>
                <LangChange />
            </div>
            <div className="child">
                <p>Copyright © {d.getFullYear()} 4hansson.dk - All rights reserved</p>
                <p>David Hansson - Hansson.d.david@gmail.com</p>
            </div>
        </div>
    );
}