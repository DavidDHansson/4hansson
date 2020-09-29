import React from 'react';

import "./GuestBook.css";
import Right from "./GuestBookR.js";
import GuestBookGrid from "./GuestBookGrid.js";

import firebase from "components/Firebase.js";
import "firebase/firestore";
import "firebase/auth";

import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useAuthState } from "react-firebase-hooks/auth";

const auth = firebase.auth();
const firestore = firebase.firestore();

function GuestBook() {

    const messagesRef = firestore.collection("beskeder");
    const query = messagesRef.orderBy("createdAt").limit(25);
    const [messages] = useCollectionData(query, { idField: "id" })

    const [user] = useAuthState(auth);

    return (
        <div className="guestBookwrapper">
            <GuestBookGrid messages={messages}/>
            <Right user={user}/>
        </div>
    );
}

export default GuestBook;