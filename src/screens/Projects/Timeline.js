import React, { useContext } from 'react';

import { VerticalTimeline } from 'react-vertical-timeline-component';
import Item from "./TimelineItem";

import log from "components/Log/Log";
import Reveal from 'react-reveal/Zoom';

import trans from "constants/lang.json";
import { LangContext } from "components/LangContext/LangContext.js";

function TimeLine() {
    const [lang] = useContext(LangContext);

    return (
        <Reveal onReveal={() => log({ site: "Projects", section: "2" })}>
            <div className="projectsTimelineWrapper">
                <VerticalTimeline>

                    {
                        lang === trans.lang[0]
                            ? trans.timeline[0].map(item => <Item data={item} />)
                            : trans.timeline[1].map(item => <Item data={item} />)
                    }

                </VerticalTimeline>
            </div>
        </Reveal>
    );
}

export default TimeLine;
