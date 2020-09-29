import React from 'react';

import firebase from "components/Firebase.js";
const auth = firebase.auth();

export function SignIn() {

    function signInWithGoogle() {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }

    return !auth.currentUser && <button onClick={signInWithGoogle}>LOG IND!</button>
}

export function SignOut() {
    return auth.currentUser && <span onClick={() => auth.signOut()} className="guestBookLink">LOG UD!</span>
}