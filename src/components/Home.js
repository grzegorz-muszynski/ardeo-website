import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';

// gsap.registerPlugin(SplitText);

export default function Home () {
    const flag = useSelector(state => state.flag);
    const titles = gsap.utils.toArray('.forGSAP');
    // const titles = ["web developers", "designers", "Front-end Engineers"];
    // const titles = gsap.utils.toArray(["web developers", "designers", "Front-end Engineers"]);
    const tl = gsap.timeline({ repeat: -1 });
    const [start, setStart] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        setStart(true);
      }, 2500);
    }, []);
    
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
                                "programistami frontendowymi" 
                                : 
                                "Front-end Engineers"}
                            </p>
                        </span>
                    </div>
                    <div className="__buttons">
                        <a href="#Header" >{flag.language === "polish" ? "Napisz do nas" : "Hire us"}</a>
                        <a href="#Portfolio" >{flag.language === "polish" ? "Sprawdź nasze portfolio" : "View our portfolio"}</a>
                    </div>
                </div>
                <img className="__photo" src={require("../assets/home/me.png")} alt="Programiści Kraków" />
            </div>
        </section>
    )
} 