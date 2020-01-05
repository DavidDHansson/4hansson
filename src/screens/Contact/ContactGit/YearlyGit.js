import React from "react";

import "./ContactGit.css";

export default function YearlyGit(props) {

    const mapRange = (value, a, b, c, d) => {
        value = (value - a) / (b - a);
        return c + value * (d - c);
    }

    return (
        <div className="ContactGitYearlyWrapper">
            {props.data.map(a => 
                <div 
                    style={
                        a.count > 0
                            ? {border: `0.1px solid rgb(0, ${mapRange(a.count, 0, 5, 100, 255)}, 0)`}
                            : {border: `0.1px solid white`}
                    }>
                </div>)}
        </div>
    );
}