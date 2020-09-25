import React from 'react';

import "./GuestBook.css";

import Title from "./GuestBookTitle.js";
import FloatText from "./GuestBookP5.js";

function GuestBook() {
    return (
        <div className="mainGuestBookWrapper">
            <div className="guestBookwrapper">
                <FloatText />
                <Title />
            </div>
        </div>
    );
}

export default GuestBook;