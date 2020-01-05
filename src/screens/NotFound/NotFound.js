import React from "react";

import Tow from "./assets/tow.js";

import "constants/style.css";

export default function NotFound() {
    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            paddingTop: "200px",
            textAlign: "center",
            color: "white"
        }}>
            <p className="title">Woops 404 Not Found</p>

            <div style={{
                paddingTop: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <Tow />
            </div>

        </div>
    );
}