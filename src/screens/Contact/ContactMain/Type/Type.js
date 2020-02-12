import React, { useState, useContext } from "react";

import "../../Contact.css";

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

export default function Type(props) {
    const [space] = useState(String.fromCharCode(32));
    const [lang] = useContext(LangContext);
    const [phoneText] = useState([
        [trans.contactMainPhone[0][0], trans.contactMainPhone[0][1], trans.contactMainPhone[0][2], trans.contactMainPhone[0][3]],
        [trans.contactMainPhone[1][0], trans.contactMainPhone[1][1], trans.contactMainPhone[1][2], trans.contactMainPhone[1][3]]
    ]);

    return (
        <div className="contactMainTypes">
            <div>
                <img src={props.src[0]} style={{ width: `${props.width}%` }} alt={props.src[1]}/>
            </div>
            <h1 className="contantMainTypesTitle" style={{
                fontSize: "30px",
                fontWeight: "500px",
            }}>{props.title}</h1>

            <div className="contactMainTypeBes" style={{lineHeight: "1.4"}}>
                {/* Beskrivelse */}
                {props.bes[0] === "bes" && (
                    <div>
                        {props.bes[1][0]} <br />
                        {props.bes[1][1]}
                    </div>
                )}

                {/* Email */}
                {props.bes[0] === "email" && (
                    <a target="_blank" rel="noopener noreferrer" href={`mailto:${props.bes[1][0]}`}>{props.bes[1][0]}</a>
                )}

                {/* Telefon */}
                {props.bes[0] === "phone" && (
                    lang === trans.lang[0] 
                    ? <div>
                        {props.bes[1][0]} <br />                        
                        <a className="link" href={`tel:${props.bes[1][0]}`}>{phoneText[0][0]}</a>{space}{phoneText[0][1]}{space}
                        <a className="link" href={`sms:${props.bes[1][0]}`}>{phoneText[0][2]}</a>{space}{phoneText[0][3]}
                    </div>

                    : <div>
                        {props.bes[1][0]} <br />                        
                        <a className="link" href={`tel:${props.bes[1][0]}`}>{phoneText[1][0]}</a>{space}{phoneText[1][1]}{space}
                        <a className="link" href={`sms:${props.bes[1][0]}`}>{phoneText[1][2]}</a>{space}{phoneText[1][3]}
                    </div>
                )}

                {/* Link */}
                {props.bes[0] === "link" && (
                    <a target="_blank" rel="noopener noreferrer" href={props.bes[1][1]}>{props.bes[1][0]}</a>
                )}
            </div>
        </div>
    );
}