import React, { useState } from 'react';

import firebase from "components/Firebase.js";
import "firebase/firestore";
import "firebase/auth";

const auth = firebase.auth();
const firestore = firebase.firestore();

function GuestBookInput() {

    const [formValue, setFormValue] = useState("");
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

    return (
        <form onSubmit={sendMessage}>
            <input value={formValue} onChange={e => setFormValue(e.target.value)} placeholder="Skriv en besked!" />
            <button type="submit" disabled={!formValue}>Send!</button>
        </form>
    );
}

export default GuestBookInput;