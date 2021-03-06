import React, { useContext, useEffect } from "react";

import "./Navigation.css";
import { Link } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';

import { LangContext } from "./../LangContext/LangContext";
import trans from "constants/lang";

export default function Navigation() {
    const [lang] = useContext(LangContext);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const top = window.scrollY > 400;
            const nav = document.getElementById("nav");
            if(nav) {
                top ? nav.classList.add("scroll") : nav.classList.remove("scroll");
            }
        });

        window.addEventListener("resize", () => {
            const nav = document.getElementById("nav");
            nav.style.width = window.innerWidth;
        });

        return () => {
            window.removeEventListener("scroll", () => { });
            window.removeEventListener("resize", () => { });
        }
    }, []);

    function toTop() {
        window.__forceSmoothScrollPolyfill__ = true;
        smoothscroll.polyfill();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div>
            <div className="navParent navWrapper" id="nav">

                <Link className="navPChild" onClick={() => toTop()} to="/" exact={true}>
                    <div className="navDivChild">
                        {lang === trans.lang[0] && (trans.nav[0][0])}
                        {lang === trans.lang[1] && (trans.nav[1][0])}
                    </div>
                </Link>

                <Link className="navPChild" onClick={() => toTop()} to="/projects">
                    <div className="navDivChild">
                        {lang === trans.lang[0] && (trans.nav[0][1])}
                        {lang === trans.lang[1] && (trans.nav[1][1])}
                    </div>
                </Link>

                <Link className="navPChild" onClick={() => toTop()} to="/contact">
                    <div className="navDivChild">
                    {lang === trans.lang[0] && (trans.nav[0][2])}
                    {lang === trans.lang[1] && (trans.nav[1][2])}
                    </div>
                </Link>

            </div>
        </div>
    );
}