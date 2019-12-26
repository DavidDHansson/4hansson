import React, { useContext } from "react";

import "./Footer.css";

import Scroll from "./../Scroll/Scroll";
import LangChange from "./../langChange/LangChange";
import trans from "./../../constants/lang";
import { LangContext } from "./../LangContext/LangContext";

export default function Footer() {
    const [lang] = useContext(LangContext);
    const d = new Date();

    return (
        <div className="footerParent">
            <div className="footerChild">
                <div> <p> {lang === trans.lang[0] && (trans.langInfo[0])} {lang === trans.lang[1] && (trans.langInfo[1])} </p> </div>
                <LangChange />
                <Scroll />
            </div>
            <div className="footerChild">
                <p>Copyright © {d.getFullYear()} 4hansson.dk - All rights reserved</p>
                <p>David Hansson - <a href="mailto:Hansson.d.david@gmail.com" style={{ color: "white" }} >Hansson.d.david@gmail.com</a></p>
            </div>
        </div>
    );
}