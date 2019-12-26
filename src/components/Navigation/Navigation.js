import React, { useContext, useEffect } from "react";

import "./navigation.css";
import { Link } from "react-router-dom";

import { LangContext } from "./../LangContext/LangContext";
import trans from "./../../constants/lang";

export default function Navigation() {

    const [lang] = useContext(LangContext);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const top = window.scrollY > 600;
            const nav = document.getElementById("nav");
            top ? nav.classList.add("scroll") : nav.classList.remove("scroll");
        });

        return () => {
            window.removeEventListener("scroll");    
        }
    }, []);

    return (
        <div className="navParent" id="nav">
            <Link className="navPChild" activeStyle={{textDecoration: "underline"}} to="/" exact>   <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][0])} {lang === trans.lang[1] && (trans.nav[1][0])} </div> </Link>
            <Link className="navPChild" activeStyle={{textDecoration: "underline"}} to="/projects"> <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][1])} {lang === trans.lang[1] && (trans.nav[1][1])} </div> </Link>
            <Link className="navPChild" activeStyle={{textDecoration: "underline"}} to="/contact">  <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][2])} {lang === trans.lang[1] && (trans.nav[1][2])} </div> </Link>
        </div>
    );
}