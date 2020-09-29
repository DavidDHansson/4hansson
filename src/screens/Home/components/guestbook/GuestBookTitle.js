import React, { useContext } from "react";

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function GuestBookTitle(props) {
    const [lang] = useContext(LangContext);

    return (
        <div>
            <p style={{ fontSize: "50px", textAlign: "center", color: "white", height: "20px" }}>
                {lang === trans.lang[0] && (trans.GuestBookTitle[0])}
                {lang === trans.lang[1] && (trans.GuestBookTitle[1])}
            </p>
            <p style={{ fontSize: "16px", textAlign: "center", color: "white" }}>
                {lang === trans.lang[0] && (trans.GuestBookWelcome[0])}
                {lang === trans.lang[1] && (trans.GuestBookWelcome[1])}

                {props.name && (
                    <div>
                        <span>"</span>
                        <span style={{ fontStyle: "italic", color: "rgb(200, 200, 200)" }}>{props.name}</span>
                        <span>"</span>
                    </div>
                )}

            </p>
        </div>
    );
}