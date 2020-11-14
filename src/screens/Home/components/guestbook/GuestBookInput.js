import React, { useState } from 'react';

import firebase from "components/Firebase.js";
import "firebase/firestore";
import "firebase/auth";

import BadWordsFilter from "bad-words";

import { Cell } from "./GuestBookGrid.js";
import ColorSlider from "./GuestBookColorSlider.js";

const auth = firebase.auth();
const firestore = firebase.firestore();

function GuestBookInput() {

    const [formValue, setFormValue] = useState("");
    const [item, setItem] = useState({ text: "", displayName: auth.currentUser.displayName, photoURL: auth.currentUser.photoURL });
    const [style, setStyle] = useState({ width: "22ch" });
    const [activeColor, setActiveColor] = useState("#56667A");
    const messagesRef = firestore.collection("beskeder");
    const filter = new BadWordsFilter({placeholder: "*"});    

    async function sendMessage(e) {
        e.preventDefault();

        const { uid, photoURL, displayName, phoneNumber, email } = auth.currentUser;

        const message = filter.clean(formValue);

        await messagesRef.add({
            text: message,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            color: activeColor,
            displayName, email, uid, photoURL, phoneNumber
        });

        setFormValue("");
        setItem({
            text: "",
            displayName: displayName,
            photoURL: photoURL
        });
    }

    function typeEvent(value) {

        const newStyle = { width: "22ch", backgroundColor: activeColor };
        if (value.length > 70) newStyle.height = "30ch";
        if (value.length > 150) newStyle.height = "33ch";
        setStyle(newStyle);

        setFormValue(value.length > 200 ? value.substring(0, 200) : value);

        const { photoURL, displayName } = auth.currentUser;
        const message = filter.clean(value)

        setItem({
            text: message.length > 200 ? message.substring(0, 200) : message,
            displayName: displayName,
            photoURL: photoURL
        });
    }

    function changeActiveColor(color) {
        setActiveColor(color);
        setStyle({...style, backgroundColor: color});
    }

    return (
        <form onSubmit={sendMessage} className="guestBookRightInputWrapper">

            <div className="guestBookRightInputFieldWrapper">
                <input value={formValue} onInput={e => typeEvent(e.target.value)} placeholder="Nice Page!" className="guestBookRightInput" />
                <input type="submit" disabled={!formValue} value="SEND" className="guestBookRightSendButton" />
            </div>
            
            <ColorSlider change={changeActiveColor}/>

            <div style={{height: "300px"}}>
                <Cell item={item} style={style} />
            </div>
        </form>
    );
}

export default GuestBookInput;