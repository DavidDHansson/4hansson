import React from "react";

import useWindowSize from "react-use-window-size";
import { Fireworks } from 'fireworks/lib/react'

export default function Firework(props) {
    const { width, height } = useWindowSize();

    const fx = {
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

    if(props.go === 0 ) {
        return ( <Fireworks {...fx} {... {colors: ['#282c34', '#92dce5', '#c9f0ff', "#f5f6f8", "#e6e8ec"]}} /> );
    }

    if(props.go === 1 || props.go === 2) {
        return ( <Fireworks {...fx} {... {colors: ['#e6e8ec', '#282c34', '#92dce5', "#c9f0ff", "#f5f6f8"]}}/> );
    }

    

    return (<div></div>);
}