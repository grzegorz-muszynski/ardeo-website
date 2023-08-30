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
            <div className="__show">
                <span className="__beginning">{flag.language === "polish" ? "Jesteśmy" : "We are"}</span>
                <div className="__wrapper">
                    <p>{flag.language === "polish" ? "web developerami" : "web developers"}</p>
                    <p>{flag.language === "polish" ? "designerami" : "designers"}</p>
                    <p>{flag.language === "polish" ? "programistami frontendowymi" : "Front-end Engineers"}</p>
                    {/* <p>web developers</p>
                    <p>designers</p>
                    <p>Front-end Engineers</p> */}
                </div>
            </div>
            <div className="__text">
                <div className="__text-animated">{flag.language === "polish" ? "To zdanie ma dokładnie 32 znaki" : "We have 32 signs here,absolutely"}</div>
            </div>
        </section>
    )
} 