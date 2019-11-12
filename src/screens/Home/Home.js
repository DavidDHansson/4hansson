import React from "react";

import "./Main.css";
import Bid from "../../components/Bid/Bid";

// Screeen components
import First  from "./components/first/first";
import Second from "./components/second/second";
import Footer from "../../components/Footer/Footer";

export default class Home extends React.Component {

    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <First />
                <Second />
                <Bid style={{ backgroundColor: "rgb(245, 246, 248)", height: 500 }} />
                <Footer />
            </div>
        );
    }
}