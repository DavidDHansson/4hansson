import React from "react";

import "./Main.css";
import Bid from "./../../components/Bid/Bid";
import First from "./components/first/first";

export default class Main extends React.Component {

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <First />
                <div style={{ paddingTop: 600 }}></div>
                <Bid style={{ backgroundColor: "rgb(230, 232, 236)", height: 800 }} />
                <Bid style={{ backgroundColor: "rgb(245, 246, 248)", height: 500 }} />
                <Bid style={{ backgroundColor: "rgb(22, 30, 39)", height: 300 }} />
            </div>
        );
    }
}