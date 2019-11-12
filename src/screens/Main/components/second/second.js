import React from "react";

import "./second.css";
import StartTitel from "./components/titel";

export default class Second extends React.Component {


    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        return (
            <div style={{
                height: 800,
                width: "100%",
                backgroundColor: "rgb(230, 232, 236)",
                float: "left",
                textAlign: "center",
            }}>
                <div style={{ padding: 100 }} ></div>
                <StartTitel />
            </div>
        );
    }
}