import React from "react";

import Timeline from "./Timeline.js";
import Title from "./Title.js";
import Footer from "components/Footer/Footer";
import "./Projects.css";

export default function Projekt() {
    return (
        <div className="projectsMainWrapper">
            <Title />
            <Timeline />
            <Footer />
        </div>
    );
}