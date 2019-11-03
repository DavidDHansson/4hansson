import React from "react";

import "./second.css";

// https://www.react-reveal.com/examples/common/
// https://www.react-reveal.com/docs/props 
// Onreveal Analytics
import Zoom from 'react-reveal/Zoom';

export default function StartTitel() {
    return (
        <Zoom distance={400}>
            <p className="startTitel" > JS, React, Swift, PHP </p>
        </Zoom>
    );
}