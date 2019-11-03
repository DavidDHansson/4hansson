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
                <Link className="navPChild" to="/" exact>  <div className="navDivChild"> Hjem      </div> </Link>
                <Link className="navPChild" to="/projekt"> <div className="navDivChild"> Projekter </div> </Link>
                <Link className="navPChild" to="/kontakt"> <div className="navDivChild"> Kontakt   </div> </Link>
            </div>
        );
    }
}