import React from "react";

import "./Main.css";
import Bid from "./../../components/Bid/Bid";

// Screeen components
import First  from "./components/first/first";
import Second from "./components/second/second";

export default class Main extends React.Component {

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <First />
                <Second />
                <Bid style={{ backgroundColor: "rgb(245, 246, 248)", height: 500 }} />
                <Bid style={{ backgroundColor: "rgb(22, 30, 39)", height: 300 }} />
            </div>
        );
    }
}