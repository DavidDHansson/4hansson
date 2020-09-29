import React, { useState } from 'react';

import firebase from "components/Firebase.js";
import "firebase/firestore";
import "firebase/auth";

import { Cell } from "./GuestBookGrid.js";

const auth = firebase.auth();
const firestore = firebase.firestore();

function GuestBookInput() {

    const [formValue, setFormValue] = useState("");
    const [item, setItem] = useState({ text: "", displayName: auth.currentUser.displayName, photoURL: auth.currentUser.photoURL });
    const [style, setStyle] = useState({ width: "22ch" });
    const messagesRef = firestore.collection("beskeder");

    async function sendMessage(e) {
        e.preventDefault();

        const { uid, photoURL, displayName, phoneNumber, email } = auth.currentUser;

        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            displayName, email, uid, photoURL, phoneNumber
        });

        setFormValue("");
    }

    function typeEvent(value) {

        const newStyle = { width: "22ch" };
        if (value.length > 70) newStyle.height = "30ch";
        if (value.length > 150) newStyle.height = "33ch";
        setStyle(newStyle);

        setFormValue(value.length > 200 ? value.substring(0, 200) : value);

        const { photoURL, displayName } = auth.currentUser;

        setItem({
            text: value.length > 200 ? value.substring(0, 200) : value,
            displayName: displayName,
            photoURL: photoURL
        });
    }

    const colors = ["#56667A", "#1D2F47", "#31517A", "#8BA5C7", "#28263B", "#2D3145", "#2D3E45", "#263A3B"];

    return (
        <form onSubmit={sendMessage} className="guestBookRightInputWrapper">

            <div className="guestBookRightInputFieldWrapper">
                <input value={formValue} onInput={e => typeEvent(e.target.value)} placeholder="Nice Page!" className="guestBookRightInput" />
                <input type="submit" disabled={!formValue} value="SEND" className="guestBookRightSendButton" />
            </div>
            
            <Cell item={item} style={style} />
        </form>
    );
}

export default GuestBookInput;