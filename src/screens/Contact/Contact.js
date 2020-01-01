import React from "react";

import "./Contact.css";
import Footer from "../../components/Footer/Footer";

import Main from "./Main/Main";
import ContactGit from "./ContactGit/ContactGit";

export default class Kontakt extends React.Component {
    render() {
        return (
            <div className="contactFirstWrapper">
                <Main />
                <ContactGit />
                <Footer />
            </div>
        );
    }
}