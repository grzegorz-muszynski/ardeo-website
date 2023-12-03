import { ReactElement, useEffect, useRef, useState } from "react";

export default function Card (props: any): ReactElement {
    const [isVisible, setIsVisible] = useState(false);
    const ref: React.MutableRefObject<null> = useRef(null);

    useEffect(() => {
        const observer: IntersectionObserver = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return; // The line makes animations are displayed only once
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.1 }
        );
        observer.observe(ref.current);

        return () => observer.disconnect();
    }, []);

    return (
        <div 
            className={"Card"}
            ref={ref}
        >
            <div 
                className={isVisible ? 
                    "__liner __liner-animated" 
                    : 
                    "__liner"
                }
            >
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