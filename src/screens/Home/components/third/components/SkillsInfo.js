import React, { useContext } from "react";

import "./../third.css";

import trans from "./../../../../../constants/lang";
import { LangContext } from "../../../../../components/LangContext/LangContext";

export default function SkillsInfo(props) {
    const [lang] = useContext(LangContext);

    return (
        <div style={{ textAlign: "justify" }}>
            <div style={{ fontSize: 32, fontWeight: 400 }}>
                {lang === trans.lang[0] && (
                    <div>
                        <p>{trans.skillsInfo[0]}</p>
                        <p>{props.rating !== "" ? `${props.rating} / 10` : "" }</p>
                    </div>
                )}
                {lang === trans.lang[1] && (
                    <div>
                        <p>{trans.skillsInfo[1]}</p>
                        <p>{props.rating !== "" ? `${props.rating} / 10` : "" }</p>
                    </div>
                )}
            </div>
            <p style={{ fontSize: 16, fontWeight: 300 }}>
                {lang === trans.lang[0] && (trans.skillsBes[0][props.aktiv])}
                {lang === trans.lang[1] && (trans.skillsBes[1][props.aktiv])}
            </p>
        </div>
    );
}