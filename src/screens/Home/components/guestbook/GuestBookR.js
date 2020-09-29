import React from 'react';

import { SignIn, SignOut } from "./GuestBookUserFlow.js";
import Title from "./GuestBookTitle.js";
import GuestBookInput from "./GuestBookInput.js";

function Right(props) {

    const user = props.user;

    return (
        <div style={{ width: "50%" }}>
            <div className="guestBookRightWrapper">
                <Title name={user ? user.displayName : undefined} />
                {user && <GuestBookInput />}
                {user ? <SignOut /> : <SignIn />}
            </div>
        </div>
    );
}

export default Right;