import React, { useState, useEffect } from "react";

export const LangContext = React.createContext({
    lang: "",
    changeLang: () => { }
});

export const LangProvider = props => {
    const [lang, setLang] = useState("dk");

    useEffect(() => {
        if (localStorage.getItem("lang") === null) {
            const saved = localStorage.getItem("lang");
            if (saved === "dk" || saved === "en") {
                setLang(saved);
                console.log("updated")
            }
        } else {
            localStorage.setItem("lang", "dk");
            console.log("set")
        }
    }, []);

    return (
        <LangContext.Provider value={[lang, setLang]}>
            {props.children}
        </LangContext.Provider>
    );
}
