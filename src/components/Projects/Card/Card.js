import { useEffect } from "react";

export default function Card (props) {
    // const shovelCards = ()=> {
    // console.group(cards);
    // if (window.scrollY > 1200) {
    //     cards.forEach(card=> {
    //         card.classList.add('animated');
    //     })
    // } else {
    //     card.classList.remove('animated');
    // }
    // }

    // useEffect(() => {
    //         window.addEventListener('scroll', shovelCards);

    //     return ()=> window.removeEventListener('scroll', shovelCards);
    // })

    return (
        <div 
            className={window.scrollY > 1200 ? "Card animated" : "Card"}
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
    )
}