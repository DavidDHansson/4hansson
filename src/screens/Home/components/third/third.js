import React, { useState } from "react";
import Zoom from 'react-reveal/Zoom';

import "./third.css";

import SkillsInfo from "./components/SkillsInfo";
import log from "components/Log/Log";
import HideOnSmall from "components/HideOnSmall";


export default function Third() {

    const [display, setDisplay] = useState(false);
    const [active, setActive] = useState(null);
    const lang = [
        { titel: "React (Native) & JavaScript", keyFrame: "thirdjsAni", width: 100, rating: 10 },
        { titel: "Swift", keyFrame: "thirdSwiftAni", width: 90, rating: 9 },
        { titel: "PHP & MySQL", keyFrame: "thirdphpAni", width: 70, rating: 7 },
        { titel: "CSS", keyFrame: "thirdcssAni", width: 65, rating: 6 }
    ]
    const tid = 2

    return (
        <div className="thirdTop">
            <Zoom onReveal={() => {
                setDisplay(true);
                log({ site: "Home", section: "4", time: "0" });
            }}>
                <div className="thirdParent">
                    <div className="thirdSkillInfo">
                        <HideOnSmall px={600}>
                            <SkillsInfo aktiv={active} rating={active != null ? lang[active].rating : ""} />
                        </HideOnSmall>
                    </div>
                    <div className="thirdGraph">
                        {display && (lang.sort((a, b) => b.width - a.width).map((e, index) =>
                            <div
                                className="thirdMiniPar"
                                onMouseEnter={() => setActive(index)}
                                onMouseLeave={() => setActive(null)}
                            >
                                <p style={{ color: `rgba(0, 0, 0, ${e.width / 100})` }} >{e.titel}</p>
                                <div
                                    className="thirdGraphChild"
                                    style={{
                                        animation: `${e.keyFrame} ${tid}s`,
                                        width: `${e.width}%`
                                    }}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </Zoom>
        </div>
    );

}