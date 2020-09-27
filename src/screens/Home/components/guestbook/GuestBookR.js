import React from 'react';

import { SignIn, SignOut } from "./GuestBookUserFlow.js";
import Title from "./GuestBookTitle.js";
import GuestBookInput from "./GuestBookInput.js";

function Right(props) {

    const user = props.user;

    return (
        <div style={{width: "50%" }}>

            <Title />

            <div style={{ padding: "10px" }}></div>

            USERSTATE: {user ? "Logged ind" : "Ikke logged ind"}

            <div style={{ padding: "10px" }}></div>

            {user ? <SignOut /> : <SignIn />}

            <div style={{ padding: "10px" }}></div>

            <GuestBookInput />

        </div>
    );
}

export default Right;