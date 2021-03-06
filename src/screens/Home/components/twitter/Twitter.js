import React from "react";

import Zoom from 'react-reveal/Zoom';
import Tweet from "fake-tweet";
import "fake-tweet/build/index.css";
import config from "./twitterConfig.json";

import "./Twitter.css";
import Title from "./TwitterTitle";
import log from "components/Log/Log";


export default function Twitter() {
    return (
        <div className="mainTwitterWrapper">
            <Zoom onReveal={() => log({ site: "Home", section: "5"})}>
                <Title />
                <div className="mainTwitterFlex">

                    <div className="mainTwitterFlexItem">
                        <Tweet config={config.pia} />
                        <div className="mainTwitterItemDiv"></div>
                    </div>

                    <div className="mainTwitterFlexItem">
                        <div className="mainTwitterItemDiv"></div>
                        <Tweet config={config.lars} />
                    </div>

                    <div className="mainTwitterFlexItem">
                        <Tweet config={config.obama} />
                        <div className="mainTwitterItemDiv"></div>
                    </div>

                </div>
            </Zoom>
        </div>
    );
}