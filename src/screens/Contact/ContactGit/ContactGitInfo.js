import React, { useEffect, useState, useContext } from "react";

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function ContactGitInfo() {
    const [state, setState] = useState(false);
    const [data, setData] = useState();
    const [lang] = useContext(LangContext);
    const link = "https://github.com/DavidDHansson/4hansson/commits/master"

    useEffect(() => {
        fetch("https://api.github.com/repos/daviddhansson/4hansson/commits/master")
            .then(res => res.json())
            .then(json => { setData(json); setState(true) })
            .catch(() => setState(false));
    }, []);

    function displayLatest(msg, name, info, url) {
        return (
            <div className="contactGitProfileCommitWrapper">
                <p style={{ fontSize: 30 }}>
                    {lang === trans.lang[0] && (trans.contantGitTitle[0])}
                    {lang === trans.lang[1] && (trans.contantGitTitle[1])}
                </p>
                <div className="contactGitProfileCommitBox">
                    <div className="contactGitProfileCommitBoxLeft">
                        <span
                            style={{ fontWeight: 600, color: "rgb(55, 58, 65)", paddingBottom: "5px", fontSize: "18px" }}
                        >{msg}</span>
                        <span style={{ fontWeight: 600 }}>{name}
                            <span style={{ fontWeight: "normal", color: "rgb(90, 96, 105)" }}> {formatData(info)}</span>
                        </span>
                    </div>
                    <div className="contactGitProfileCommitBoxRight" onClick={() => window.open(url)}>C</div>
                </div>
            </div>
        );
    }

    function formatData(date) {
        return date.split("T")[0]
    }

    if (data != null && state) {
        return (
            <div style={{ width: "50%" }}>
                {displayLatest(data.commit.message, data.commit.author.name, data.commit.author.date, link)}
            </div>
        )
    } else {
        return (
            <div style={{ width: "50%" }}>
                {displayLatest("API Error", "Error", "Too many Github API Request", link)}
            </div>
        );
    }
}