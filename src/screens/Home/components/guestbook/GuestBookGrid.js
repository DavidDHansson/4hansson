import React from 'react';

function GuestBookGrid(props) {


    return (
        <div className="guestBookGrid">
            {props.messages && props.messages.reverse().map((item, index) => <Cell item={item} key={index} />)}
        </div>
    );
}

export function Cell(props) {

    const { text, displayName, photoURL, color } = props.item;

    return (
        <div className={`guestBookGridChild ${text && text.length > 70 && "guestBookGridTicc"}`} style={{ ...{ backgroundColor: color }, ...props.style }}>

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