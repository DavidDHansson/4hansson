import React from 'react';

import { VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import work from "./assets/work.svg";
import school from "./assets/school.svg";
import Icon from "./Icon";


function Item(props) {

    const workAlt = "Work by Mello from the Noun Project";
    const schoolAlt = "College by Saman Bemel-Benrud";
    const { iconS1, iconS2, iconS3 } = { iconS1: { background: "#00A9A5" }, iconS3: { background: "#23b5eb" }, iconS2: { background: "#A15486" } };

    const { date, subTitle, text, title, type, links } = props.data;

    function getIconStyle() {
        if(type === "work") { return iconS1; }
        if(type === "school") { return iconS2; }
        if(type === "") { return iconS3; }
    }

    function getAlt() {
        if(type === "work") { return workAlt; }
        if(type === "school") { return schoolAlt; }
    }
    
    function getSrc() {
        if(type === "work") { return work; }
        if(type === "school") { return school; }
    }

    return (
        <VerticalTimelineElement
            className="vertical-timeline-element--work projectsTimelineItem"
            date={date}
            iconStyle={getIconStyle()}
            icon={ type !== "" && (<Icon src={getSrc()} alt={getAlt()} />)}
        >
            <h3 className="vertical-timeline-element-title">{title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{subTitle}</h4>
            <p>{text}</p>
            {displayLinks(links, type)}
        </VerticalTimelineElement>
    );
}

function displayLinks(links, type) {

    function getClass() {
        if(type === "work") { return "projectsTimelineButtonWork"; }
        if(type === "school") { return "projectsTimelineButtonSchool"; }
        if(type === "") { return "projectsTimelineButtonNon"; }
    }

    return (
        <div className="projectsTimelineButtonWrapper">
            {links.map(link => <div onClick={() => window.open(link.URL)} className={`${getClass()} projectsTimelineButton`}>{link.title}</div>)}
        </div>
    );
}

export default Item;

//00A9A5, 23b5eb, A15486

// Pil og boks farve
// contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
// contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}