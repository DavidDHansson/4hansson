import React from "react";

import "./Contact.css";
import Footer from "components/Footer/Footer";

import ContactMain from "./ContactMain/ContactMain";
import ContactGit from "./ContactGit/ContactGit";

export default class Contact extends React.Component {
    render() {
        return (
            <div className="contactFirstWrapper">
                <ContactMain />
                <ContactGit />
                <Footer />
            </div>
        );
    }
}