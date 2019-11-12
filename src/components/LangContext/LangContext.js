import React, {useState} from "react";

export const LangContext = React.createContext({
    lang: "",
    changeLang: () => {}
});

export const LangProvider = props => {
    const [lang, setLang] = useState("dk");

    return (
        <LangContext.Provider value={[lang, setLang]}>
            {props.children}
        </LangContext.Provider>
    );
}
