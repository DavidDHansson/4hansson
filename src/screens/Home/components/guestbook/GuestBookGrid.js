import React from 'react';

function GuestBookGrid(props) {
    return (
        <div className="guestBookGrid">
            {props.messages && props.messages.map((item, index) => <Cell item={item} key={index} />)}
        </div>
    );
}

function Cell(props) {

    const { text, displayName, photoURL } = props.item;

    return (
        <div className={`guestBookGridChild ${text.length >= 22 && "guestBookGridTicc"}`}>

            <div className="guestBookGridTitle">{text}</div>

            <div className="guestBookGridBottom">
                <div className="guestBookGridBottomText">
                    <div>{displayName}</div>
                    <div>00/00/2020</div>
                </div>
                <img src={photoURL} alt="Profile" className="guestBookGridBottomImg" />
            </div>

        </div>
    );
}

export default GuestBookGrid;