import React, { useContext } from "react";

import trans from "./../../../../../constants/lang";
import { LangContext } from "./../../../../../components/LangContext/LangContext";

export default function Rigth() {
    const [lang] = useContext(LangContext);

    return (
            <div style={{ width: "50%", padding: "10%" }}>
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