import React from "react";

import "./Main.css";

import First  from "./components/first/first";
import Second from "./components/second/second";
import Third from "./components/third/third";
import Fourth from "./components/fourth/fourth";
import Footer from "../../components/Footer/Footer";

export default class Home extends React.Component {
    render() {
        return (
            <div style={{ display: "flex", flexDirection: "column" }}>
                <First />
                <Second />
                <Fourth />
                <Third />
                <Footer />
            </div>
        );
    }
}