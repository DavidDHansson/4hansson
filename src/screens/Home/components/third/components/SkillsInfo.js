import React, { useContext } from "react";

import "./../third.css";

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function SkillsInfo(props) {
    const [lang] = useContext(LangContext);

    const displayNoneForMobile = () => window.width >= 480 ? { display: "none" } : { color: "black" };
    const displayTitleForMobile = () => window.width <= 480 ? {position:"absolute", right: "50%", top: "0", transform: "translate(50%, 0)"} : {};

    return (
        <div style={{ textAlign: "justify" }}>
            <div style={{ fontSize: 32, fontWeight: 400, whiteSpace: "nowrap" }}>
                {lang === trans.lang[0] && (
                    <div>
                        <p style={displayTitleForMobile()}>{trans.skillsInfo[0]}</p>
                        <p>{props.rating !== "" ? `${props.rating} / 10` : ""}</p>
                    </div>
                )}
                {lang === trans.lang[1] && (
                    <div>
                        <p style={displayTitleForMobile()} >{trans.skillsInfo[1]}</p>
                        <p>{props.rating !== "" ? `${props.rating} / 10` : ""}</p>
                    </div>
                )}
            </div>
            <div style={displayNoneForMobile()}>
                <p style={{ fontSize: 16, fontWeight: 300 }}>
                    {lang === trans.lang[0] && (trans.skillsBes[0][props.aktiv])}
                    {lang === trans.lang[1] && (trans.skillsBes[1][props.aktiv])}
                </p>
            </div>
        </div>
    );
}