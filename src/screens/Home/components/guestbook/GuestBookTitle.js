import React, { useContext } from "react";

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function GuestBookTitle(props) {
    const [lang] = useContext(LangContext);

    return (
        <p style={{ fontSize: "50px", textAlign: "center", color: "white" }}>
            {lang === trans.lang[0] && (trans.GuestBookTitle[0])}
            {lang === trans.lang[1] && (trans.GuestBookTitle[1])}
        </p>
    );
}