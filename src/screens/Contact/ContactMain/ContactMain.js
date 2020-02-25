import React, { useContext } from "react";
import Zoom from 'react-reveal/Zoom';
import "./../Contact.css";

import trans from "constants/lang.json";
import { LangContext } from "components/LangContext/LangContext.js";

import Type from "./Type/Type";
import ContactMainTitle from "./ContactMainTitle";
import log from "components/Log/Log";

import work from "./assets/work.png";
import location from "./assets/location.png";
import mail from "./assets/mail.png";
import phone from "./assets/phone.png";

export default function ContactMain() {
    const [lang] = useContext(LangContext);

    return (
        <Zoom onReveal={() => log({ site: "Contact", section: "1", time: "0" })}>
            <div className="contactMainWrapper" style={{ paddingTop: "250px", paddingBottom: "200px" }}>

                <ContactMainTitle />

                <div style={{ paddingTop: "200px" }}></div>

                <div className="contactMainTypesWrapper">
                    <Type
                        src={[location, "Location by Assyifa Art from the Noun Project"]}
                        width={16}
                        title={lang === trans.lang[0] ? trans.contactMainTypes[0][0] : trans.contactMainTypes[1][0]}
                        bes={["bes", ["Denmark", "Solrød Strand / København"]]}
                    />

                    <Type src={[mail, "Email by Barracuda from the Noun Project"]}
                        width={20} title="Email" bes={["email", ["Hansson.d.david@gmail.com"]]} />

                    <Type
                        src={[phone, "Phone by Ruslan Mirsalikhov from the Noun Project"]}
                        width={18}
                        title={lang === trans.lang[0] ? trans.contactMainTypes[0][2] : trans.contactMainTypes[1][2]}
                        bes={["phone", ["+45 60 62 16 38"]]}
                    />

                    <Type src={[work, "Work by Jaclyne Ooi from the Noun Project"]}
                        width={20} title="LinkedIn" bes={["link", ["David Hansson", "https://www.linkedin.com/in/david-hansson-037717198/"]]} />
                </div>
            </div>
        </Zoom>
    );
}