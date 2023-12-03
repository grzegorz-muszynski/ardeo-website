import React, { ReactElement } from 'react';
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import menuScrolling from "../scripts/menuScrolling.tsx";
import SplitTextJS from 'split-text-js';

export default function Home (): ReactElement {
    const flag: any = useSelector(state => state.flag);
    const titles: string[] = gsap.utils.toArray('.forGSAP');
    const tl: any = gsap.timeline({ repeat: -1 });
    const [start, setStart] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setStart(true);
        }, 2500);
    }, []);
    
    // Don't know why useEffect below doesn't start at first run so it needs a trigger above
    useEffect(() => {
        titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);

            tl.from(splitTitle.chars, {
                opacity: 0,
                y: 80,
                rotateX: -90,
                stagger: .02
            }, "<").to(splitTitle.chars, {
                opacity: 0,
                y: -80,
                rotateX: 90,
                stagger: .02 
            }, "<1")
        });
    }, [start, flag.language])

    return (
        <section id="Home">
            <div className="__container">
                {/* Animated introduction */}
                <div className="__info">
                    <h1 className="__title">{flag.language === "polish" ? "Co możemy dla Ciebie zrobić?" : "How can We help you?"}</h1>
                    <div className="__show">
                        <span className="__beginning">{flag.language === "polish" ? "Jesteśmy" : "We are"}</span>
                        <span className="__wrapper">
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "web developerami" 
                                : 
                                "web developers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "designerami" 
                                : 
                                "designers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "mobile developerami" 
                                : 
                                "Mobile developers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "programistami frontendowymi" 
                                : 
                                "Front-end Engineers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "web developerami" 
                                : 
                                "web developers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "designerami" 
                                : 
                                "designers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "mobile developerami" 
                                : 
                                "Mobile developers"}
                            </p>
                            <p className="forGSAP">
                                {flag.language === "polish" ?
                                "programistami frontendowymi" 
                                : 
                                "Front-end Engineers"}
                            </p>
                        </span>
                    </div>
                    <div className="__buttons">
                        <a 
                            onClick={menuScrolling}
                            data-height={'Contact'}
                            >{flag.language === "polish" ? "Napisz do nas" : "Hire us"}</a>
                        <a
                            onClick={menuScrolling}
                            data-height={'Projects'}
                         >{flag.language === "polish" ? "Sprawdź nasze portfolio" : "View our portfolio"}</a>
                    </div>
                </div>
                <img className="__photo" src={require("../assets/home/me.png")} alt="Programiści Kraków" />
            </div>
        </section>
    )
} 