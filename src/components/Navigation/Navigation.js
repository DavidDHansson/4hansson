import React, { useContext, useEffect } from "react";

import "./navigation.css";
import { Link } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import { LangContext } from "./../LangContext/LangContext";
import trans from "./../../constants/lang";

export default function Navigation() {
    const [lang] = useContext(LangContext);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const top = window.scrollY > 400;
            const nav = document.getElementById("nav");
            top ? nav.classList.add("scroll") : nav.classList.remove("scroll");
        });

        return () => {
            window.removeEventListener("scroll");
        }
    }, []);

    function toTop() {
        window.__forceSmoothScrollPolyfill__ = true;
        smoothscroll.polyfill();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div className="navParent" id="nav">
            <Link className="navPChild" onClick={() => toTop()} to="/" exact>   <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][0])} {lang === trans.lang[1] && (trans.nav[1][0])} </div> </Link>
            <Link className="navPChild" onClick={() => toTop()} to="/projects"> <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][1])} {lang === trans.lang[1] && (trans.nav[1][1])} </div> </Link>
            <Link className="navPChild" onClick={() => toTop()} to="/contact">  <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][2])} {lang === trans.lang[1] && (trans.nav[1][2])} </div> </Link>
        </div>
    );
}