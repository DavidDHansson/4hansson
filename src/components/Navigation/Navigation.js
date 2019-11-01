import React from "react";

import "./navigation.css";
import { Link } from "react-router-dom";

export default class Navigation extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll", () => {
            const top = window.scrollY > 600;
            const nav = document.getElementById("nav");
            top ? nav.classList.add("scroll") : nav.classList.remove("scroll");
        });
    }

    componentWillUnmount() {
        window.removeEventListener("scroll");
    }

    render() {
        return (
            <div className="navParent" id="nav">
                <Link to="/" exact> <div className="navDivChild"> <p className="navPChild">Hjem</p> </div> </Link>
                <Link to="/projekt"> <div className="navDivChild"> <p className="navPChild">Projekter</p> </div> </Link>
                <Link to="/kontakt"> <div className="navDivChild"> <p className="navPChild">Kontakt</p> </div> </Link>
            </div>
        );
    }
}