import React from "react";

import "./second.css";
import StartTitel from "./components/titel";
import GifPlayer from "react-gif-player";

import mig from "./assets/mig.gif";
import migstill from "./assets/migstill.jpg";

export default class Second extends React.Component {
    state = {
        gifPlay: true
    }

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
                <GifPlayer 
                    gif={mig}
                    still={migstill}
                    autoplay={this.state.gifPlay}
                />
            </div>
        );
    }
}