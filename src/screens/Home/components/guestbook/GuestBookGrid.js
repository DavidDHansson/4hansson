import React from 'react';

function GuestBookGrid(props) {
    return (
        <div className="guestBookGrid">
            {props.messages && props.messages.map((item, index) => <Cell item={item} key={index} />)}
        </div>
    );
}

export function Cell(props) {

    const { text, displayName, photoURL } = props.item;

    const colors = ["#56667A", "#1D2F47", "#31517A", "#8BA5C7", "#28263B", "#2D3145", "#2D3E45", "#263A3B"];

    return (
        <div className={`guestBookGridChild ${text && text.length > 70  && "guestBookGridTicc"}`} style={props.style}>

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