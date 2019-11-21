import React, { useContext, useState } from "react";

import "./../third.css";

import trans from "./../../../../../constants/lang";
import { LangContext } from "../../../../../components/LangContext/LangContext";

export default function SkillsInfo(props) {
    const [lang] = useContext(LangContext);

    return (
        <div>
            <div style={{ fontSize: 32 }}>
                {lang === trans.lang[0] && (
                    <div>
                        <p style={{ fontSize: 32 }}>{trans.skillsInfo[0]}</p>
                        <p>{props.rating != "" ? `${props.rating}% / 100%` : "" }</p>
                    </div>
                )}
                {lang === trans.lang[1] && (
                    <div>
                        <p style={{ fontSize: 32 }}>{trans.skillsInfo[1]}</p>
                        <p>{props.rating != "" ? `${props.rating}% / 100%` : "" }</p>
                    </div>
                )}
            </div>
            <p>
                {lang === trans.lang[0] && (trans.skillsBes[0][props.aktiv])}
                {lang === trans.lang[1] && (trans.skillsBes[1][props.aktiv])}
            </p>
        </div>
    );
}