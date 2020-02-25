import React from "react";

import ContactGitProfile from "./ContactGitProfile";
import ContactGitInfo from "./ContactGitInfo";

// import Reveal from "react-reveal";
// import log from "components/Log/Log";

import "./ContactGit.css";

export default function ContactGit() {
    return (
        <div className="contactGitWrapper">
            <ContactGitProfile />
            <ContactGitInfo />
        </div>
    );
}
