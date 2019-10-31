import React from "react";
import "./Navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const top = window.scrollY > 100;
            const nav = document.getElementById("nav");
            top ? nav.classList.add("scrolled") : nav.classList.remove("scrolled");
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll");
    }


    render() {
        return (
            <div id="nav" className="nav">
                <div className="nav-text">
                    <Link to="/" exact> <h1>Hjem</h1> </Link>
                    <Link to="/projekt"> <h1>Projekter</h1> </Link>
                    <Link to="/kontakt"> <h1>Kontakt</h1> </Link>
                </div>
            </div>
        );
    }
}