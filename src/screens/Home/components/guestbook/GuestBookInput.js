import React, { useState } from 'react';

import firebase from "components/Firebase.js";
import "firebase/firestore";
import "firebase/auth";

import { Cell } from "./GuestBookGrid.js";

const auth = firebase.auth();
const firestore = firebase.firestore();

function GuestBookInput() {

    // CAP ER 200
    // MIN ER under 70

    const [formValue, setFormValue] = useState("");
    const [item, setItem] = useState({});
    const [style, setStyle] = useState({ width: "22ch", height: "15ch" });
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
        if(value.length < 70) newStyle.height = "15ch";
        if(value.length > 70) newStyle.height = "30ch";
        setStyle(newStyle);

        setFormValue(value.length > 200 ? value.substring(0, 200) : value);

        const { photoURL, displayName } = auth.currentUser;

        setItem({
            text: value,
            displayName: displayName,
            photoURL: photoURL
        });
    }

    return (
        <form onSubmit={sendMessage} className="guestBookRightInputWrapper">
            <input value={formValue} onChange={e => typeEvent(e.target.value)} placeholder="Skriv en besked!" />
            <input type="submit" disabled={!formValue} value="Send!"/>
            <Cell item={item} style={style}/> 
        </form>
    );
}

export default GuestBookInput;