import React, { useContext } from "react";
import "./../Contact.css";
import "constants/style.css"

import trans from "constants/lang.json";
import { LangContext } from "components/LangContext/LangContext.js";

export default function ContactMainTitle() {
    const [lang] = useContext(LangContext);
    return (
        <p className="title">
            {lang === trans.lang[0] && (trans.contactMainTitle[0])}
            {lang === trans.lang[1] && (trans.contactMainTitle[1])}
        </p>
    );
}