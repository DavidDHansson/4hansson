import React, { useContext } from "react";

import trans from "./../../../../../constants/lang";
import { LangContext } from "./../../../../../components/LangContext/LangContext";

import "./../fourth.css";

export default function Right() {
    const [lang] = useContext(LangContext);

    return (
            <div className="fourthRigthText">
                <div style={{ fontSize: "50px" }}>
                    <p>
                        {lang === trans.lang[0] && (trans.fourthTitle[0])}
                        {lang === trans.lang[1] && (trans.fourthTitle[1])}
                    </p>
                </div>
                <div style={{ fontSize: 20, textAlign: "justify" }}>
                    <p>
                        {lang === trans.lang[0] && (trans.fourtBes[0])}
                        {lang === trans.lang[1] && (trans.fourtBes[1])}
                    </p>
                </div>
            </div>
    );
}