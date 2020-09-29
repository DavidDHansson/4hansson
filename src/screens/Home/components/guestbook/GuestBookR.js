import React from 'react';

import { SignIn, SignOut } from "./GuestBookUserFlow.js";
import Title from "./GuestBookTitle.js";
import GuestBookInput from "./GuestBookInput.js";

function Right(props) {

    const user = props.user;

    return (
        <div className="guestBookRightWrapper">
            <Title name={user ? user.displayName : undefined }/>
            {user && <GuestBookInput />}
            {user ? <SignOut /> : <SignIn />}
        </div>
    );
}

export default Right;