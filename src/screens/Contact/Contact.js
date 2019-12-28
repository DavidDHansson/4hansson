import React from "react";

import "./Contact.css";
import Footer from "../../components/Footer/Footer";

import Main from "./Main/Main";

export default class Kontakt extends React.Component {
    render() {
        return (
            <div className="contactFirstWrapper">
                <Main />
                <div style={{ padding: "200px" }}></div>
                <Footer />
            </div>
        );
    }
}