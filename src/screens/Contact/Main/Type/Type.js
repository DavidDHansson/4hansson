import React, { useState } from "react";

import "../../Contact.css";

export default function Type(props) {
    const [space] = useState(String.fromCharCode(32));

    return (
        <div className="contactMainTypes">
            <div className="contactMainPic">
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
                    <a href={`mailto:${props.bes[1][0]}`}>{props.bes[1][0]}</a>
                )}

                {/* Telefon */}
                {props.bes[0] === "phone" && (
                    <div>
                        {props.bes[1][0]} <br />
                        <a className="link" href={`tel:${props.bes[1][0]}`}>Ring</a>{space}eller{space}
                        <a className="link" href={`sms:${props.bes[1][0]}`}>skriv</a>{space}til mig
                    </div>
                )}

                {/* Link */}
                {props.bes[0] === "link" && (
                    <a href={props.bes[1][1]}>{props.bes[1][0]}</a>
                )}
            </div>
        </div>
    );
}