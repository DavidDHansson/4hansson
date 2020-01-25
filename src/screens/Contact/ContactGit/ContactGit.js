import React from "react";

import ContactGitProfile from "./ContactGitProfile";
import ContactGitInfo from "./ContactGitInfo";

import "./ContactGit.css";

export default function ContactGit() {
    return (
        <div className="contactGitWrapper">
            <ContactGitProfile />
            <ContactGitInfo />
        </div>
    );
}
