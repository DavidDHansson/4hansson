import React from "react";
import Reveal from "react-reveal/Reveal";

import "./third.css";

import SkillsInfo from "./components/SkillsInfo";


export default class Third extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lang: [
                { titel: "JavaScript", keyFrame: "thirdjsAni", width: 100 },
                { titel: "React", keyFrame: "thirdReactAni", width: 90 },
                { titel: "React Native", keyFrame: "thirdReactNativeAni", width: 95 },
                { titel: "CSS", keyFrame: "thirdcssAni", width: 65 },
                { titel: "PHP/MySQL", keyFrame: "thirdphpAni", width: 70 }
            ],
            display: false,
            tid: 2,
            aktiv: null
        }
    }

    render() {
        return (
            <div className="thirdTop">
                <Reveal onReveal={() => this.setState({ display: true })}>
                    <div className="thirdParent">
                        <div>
                            <SkillsInfo aktiv={this.state.aktiv} rating={this.state.aktiv != null ? this.state.lang[this.state.aktiv].width : ""}/>
                        </div>
                        <div className="thirdGraph">
                            {this.state.display && (this.state.lang.sort((a, b) => b.width - a.width).map((e, index) =>
                                <div
                                    className="thirdMiniPar"
                                    onMouseEnter={() => this.setState({ aktiv: index })}
                                    onMouseLeave={() => this.setState({ aktiv: null })}
                                >
                                    <p style={{ color: `rgba(0, 0, 0, ${e.width / 100})` }} >{e.titel}</p>
                                    <div
                                        className="thirdGraphChild"
                                        style={{
                                            animation: `${e.keyFrame} ${this.state.tid}s`,
                                            width: `${e.width}%`
                                        }}></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        );
    }
}