import React, { useContext } from 'react';

import trans from "constants/lang";
import { LangContext } from "components/LangContext/LangContext";

import firebase from "components/Firebase.js";
const auth = firebase.auth();

export function SignIn() {

    const [lang] = useContext(LangContext);

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }


    if(lang === trans.lang[0]) {
        return !auth.currentUser && <input type="button" onClick={signInWithGoogle} value={trans.GuestBookLogIn[0]} className="guestBookRightSendButton" />
    } else if(lang === trans.lang[1]) {
        return !auth.currentUser && <input type="button" onClick={signInWithGoogle} value={trans.GuestBookLogIn[1]} className="guestBookRightSendButton" />
    } else {
        return (<></>);
    }
}

export function SignOut() {

    const [lang] = useContext(LangContext);

    if(lang === trans.lang[0]) {
        return auth.currentUser && <span onClick={() => auth.signOut()} className="guestBookLink">{trans.GuestBookLogOut[0]}</span>
    } else if(lang === trans.lang[1]) {
        return auth.currentUser && <span onClick={() => auth.signOut()} className="guestBookLink">{trans.GuestBookLogOut[1]}</span>
    } else {
        return (<></>);
    }
}