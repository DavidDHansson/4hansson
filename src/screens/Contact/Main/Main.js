import React from "react";

import Zoom from 'react-reveal/Zoom';

import "./../Contact.css";

import Type from "./Type/Type";

import work from "./assets/work.png";
import location from "./assets/location.png";
import mail from "./assets/mail.png";
import phone from "./assets/phone.png";

export default function Main() {
    return (
        <div className="contactMainWrapper" style={{ paddingTop: "250px", paddingBottom: "200px" }}>
            <Zoom>
                <p className="contactMainTitle">Kontakt Mig</p>
                <div style={{ paddingTop: "200px" }}></div>

                <div className="contactMainTypesWrapper">
                    <Type src={[location, "Location by Assyifa Art from the Noun Project"]}
                        width={16} title="Location" bes={["bes", ["Denmark", "Solrød Strand / København"]]} />

                    <Type src={[mail, "Email by Barracuda from the Noun Project"]}
                        width={20} title="Email" bes={["email", ["Hansson.d.david@gmail.com"]]} />

                    <Type src={[phone, "Phone by Ruslan Mirsalikhov from the Noun Project"]}
                        width={18} title="Phone" bes={["phone", ["+45 60 62 16 38"]]} />

                    <Type src={[work, "Work by Jaclyne Ooi from the Noun Project"]}
                        width={20} title="LinkedIn" bes={["link", ["David Hansson", "https://www.google.com/"]]} />
                </div>
            </Zoom>
        </div>
    );
}