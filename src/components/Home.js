import { useEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
// import SplitText from "SplitText";
// import SplitTextJS from "gsap/SplitText";
import SplitTextJS from 'split-text-js';

// gsap.registerPlugin(SplitText);

export default function Home () {
    const flag = useSelector(state => state.flag);
    const titles = gsap.utils.toArray('p');
    // const titles = ["web developers", "designers", "Front-end Engineers"];
    // const titles = gsap.utils.toArray(["web developers", "designers", "Front-end Engineers"]);
    const tl = gsap.timeline({ repeat: -1 });
    
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
    }, [flag.language])

    return (
        <section id="Home">
            {/* Animated introduction */}
            <div className="__info">
                <div className="__show">
                    <span className="__beginning">{flag.language === "polish" ? "Jesteśmy" : "We are"}</span>
                    <span className="__wrapper">
                        <p>{flag.language === "polish" ? "web developerami" : "web developers"}</p>
                        <p>{flag.language === "polish" ? "designerami" : "designers"}</p>
                        <p>{flag.language === "polish" ? "programistami frontendowymi" : "Front-end Engineers"}</p>
                    </span>
                </div>
                <div className="__buttons">
                    <a href="#Header" >{flag.language === "polish" ? "Napisz do nas" : "Hire us"}</a>
                    <a href="#Portfolio" >{flag.language === "polish" ? "Sprawdź nasze portfolio" : "View our portfolio"}</a>
                </div>
            </div>
            <img className="__photo" src={require("../assets/home/me.png")} alt="Programiści Kraków" />

        </section>
    )
} 