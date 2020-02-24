import React, { useContext } from "react";

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function TwitterTitle() {
    const [lang] = useContext(LangContext);

    return (
        <p style={{ fontSize: "50px", textAlign: "center" }}>
            {lang === trans.lang[0] && (trans.TwitterTitle[0])}
            {lang === trans.lang[1] && (trans.TwitterTitle[1])}
        </p>
    );
}