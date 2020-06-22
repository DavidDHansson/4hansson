import React, { useState, useEffect } from 'react';

function HideOnSmall(props) {
    const [isHidden, setIsHidden] = useState(true);
    const px = props.px;

    useEffect(() => {
        window.addEventListener("resize", () => {
            setIsHidden(window.innerWidth >= px);
        });

        return () => {
            window.removeEventListener("resize", () => { });
        };
    });

    if (isHidden) {
        return <div> {props.children} </div>;
    } else {
        return <div></div>;
    }

}

export default HideOnSmall;