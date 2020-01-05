import React, { useContext, useEffect } from "react";

import "./navigation.css";
import { Link } from "react-router-dom";
import smoothscroll from 'smoothscroll-polyfill';
import useWindowSize from "react-use-window-size";

import home from "./icons/home.png";
import projects from "./icons/projects.png";
import contact from "./icons/contact.png";

import { LangContext } from "./../LangContext/LangContext";
import trans from "constants/lang";

export default function Navigation() {
    const [lang] = useContext(LangContext);
    const { width } = useWindowSize();

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const top = window.scrollY > 400;
            const nav = document.getElementById("nav");
            top ? nav.classList.add("scroll") : nav.classList.remove("scroll");
        });

        return () => {
            window.removeEventListener("scroll", () => { });
        }
    }, []);

    function toTop() {
        window.__forceSmoothScrollPolyfill__ = true;
        smoothscroll.polyfill();
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }

    return (
        <div>
            {width >= 480
                ? <div className="navParent navWrapper" id="nav">
                    <Link className="navPChild" onClick={() => toTop()} to="/" exact={true}>   <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][0])} {lang === trans.lang[1] && (trans.nav[1][0])} </div> </Link>
                    <Link className="navPChild" onClick={() => toTop()} to="/projects"> <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][1])} {lang === trans.lang[1] && (trans.nav[1][1])} </div> </Link>
                    <Link className="navPChild" onClick={() => toTop()} to="/contact">  <div className="navDivChild"> {lang === trans.lang[0] && (trans.nav[0][2])} {lang === trans.lang[1] && (trans.nav[1][2])} </div> </Link>
                </div>
                : <div className="navParent navMobileWrapper" id="nav">
                    <Link className="navPChild" onClick={() => toTop()} to="/" exact={true}> <div><img src={home} className="navMobileIcon" alt="Main folder by shashank singh from the Noun Project"/> </div></Link>
                    <Link className="navPChild" onClick={() => toTop()} to="/projects"> <div><img src={projects} className="navMobileIcon" alt="Project by Fuse Studio from the Noun Project"/> </div></Link>
                    <Link className="navPChild" onClick={() => toTop()} to="/contact"> <div><img src={contact} className="navMobileIcon" alt="Profile by Landan Lloyd from the Noun Project"/> </div></Link>
                </div>
            }
        </div>
    );
}