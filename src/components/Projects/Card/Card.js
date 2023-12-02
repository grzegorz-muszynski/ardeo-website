import { useEffect, useRef, useState } from "react";

export default function Card (props) {
    const [isAnimated, setIsAnimated] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                console.log(entry.isIntersecting);
                setIsVisible(entry.isIntersecting);
            },
            { rootMargin: "0px" } // options
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (isVisible) {
            ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.add("animated");
            });
        } else {
            ref.current.querySelectorAll("div").forEach((el) => {
            el.classList.remove("animated");
            });
        }
    }, [isVisible]);

    return (
        <div 
            className={isVisible ? "Card animated" : "Card"}
            ref={ref}
        >
            <div>
                <a className="__frame" href={props.href}>
                    <div className="__container">
                        <img 
                            src={props.imgSrc}
                            alt={props.alt} 
                        />
                    </div>
                </a>
                <h2>{props.title}</h2>
            </div>
        </div>
    )
}