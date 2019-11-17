import React, { useContext } from "react";

import trans from "./../../../../../constants/lang";
import { LangContext } from "../../../../../components/LangContext/LangContext";

export default function SkillsInfo() {
    const [lang] = useContext(LangContext);

    return (
        <p style={{ fontSize: 32 }}>
            {lang === trans.lang[0] && (trans.skillsInfo[0])}
            {lang === trans.lang[1] && (trans.skillsInfo[1])}
        </p>
    );
}