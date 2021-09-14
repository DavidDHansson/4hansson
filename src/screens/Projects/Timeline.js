import React, { useContext } from 'react';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import Item from "./TimelineItem";

import log from "components/Log/Log";
import Fade from 'react-reveal/Fade';

import trans from "constants/lang.json";
import { LangContext } from "components/LangContext/LangContext.js";

function TimeLine() {
    const [lang] = useContext(LangContext);

    return (
        <Fade onReveal={() => log({ site: "Projects", section: "2" })}>
            <div className="projectsTimelineWrapper">
                <VerticalTimeline>

                    {
                        lang === trans.lang[0]
                            ? trans.timeline[0].map((item, index) => <Item data={item} key={index} />)
                            : trans.timeline[1].map((item, index) => <Item data={item} key={index} />)
                    }

                </VerticalTimeline>
            </div>
        </Fade>
    );
}

export default TimeLine;
