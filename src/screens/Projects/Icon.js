import React from 'react';

import "./Projects.css";

function Icon(props) {
    const { src, bigger, alt } = props;

    return (
        <div className="projectsTimelineImgWrapper" style={bigger && ({height: "80%", width: "80%", paddingTop: "10%"})}>
            <div>
                <img src={src} className="projectsTimelineImg" alt={alt}/>
            </div>
        </div>
    );
}

export default Icon;