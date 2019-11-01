import React from "react";

import useWindowSize from "react-use-window-size";
import { Fireworks } from 'fireworks/lib/react'

export default function Fire(props) {
    const { width, height } = useWindowSize();

    let fx = {
        x: width,
        y: height,
        count: 3,
        calc: (props, i) => ({
            ...props,
            x: (i + 1) * (window.innerWidth / 3) - (i + 1) * 100,
            y: 200 + Math.random() * 100 - 50 + (i === 2 ? -80 : 0)
        }),
        parentNode: document.getElementById("navnPar")
    };

    if(props.go == 0 ) {
        return ( <Fireworks {...fx} {... {colors: ['#cc3333', '#4CAF50', '#81C784']}} /> );
    }

    if(props.go == 1) {
        return ( <Fireworks {...fx} {... {colors: ['#cc3333', '#4CAF50', '#81C784']}}/> );
    }

    return (<div></div>);
}