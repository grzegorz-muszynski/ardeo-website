import { ReactElement, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import laptopImg from '../assets/contact/laptop.webp';
import smartphone from '../assets/contact/smartphone-red.png';
import email from '../assets/contact/email-red.png';

export default function Contact(): ReactElement {
    const flag: any = useSelector((state: any) => state.flag);
    const [imageTop, setImageTop] = useState(2180);
    const [showThanks, setShowThanks] = useState(false);

    const parallaxOnScroll = (): void => {
        if (window.scrollY < 2180 || 2480 < window.scrollY) return;

        setImageTop(window.scrollY);
    }

    const displayThanks = (): void => {
        setShowThanks(false);
    }

    // Mounting event listener for scrolling
    useEffect(() => {
        window.addEventListener('scroll', parallaxOnScroll);
        window.addEventListener('beforeunload', parallaxOnScroll);

        return () => {
            window.removeEventListener('scroll', parallaxOnScroll);
            window.removeEventListener('beforeunload', parallaxOnScroll);
        }
    }, [])

    return (
        <section id="Contact">
            <div className="__container">
                <div className="__infobox">
                    <h1 className="__title">{flag.language === "polish" ? "Kontakt" : "Contact Us"}</h1>
                    <p className="__desc">
                        {flag.language === "polish" ? 
                            "Napisz do nas maila, zadzwoń lub wypełnij formularz - na pewno znajdziemy rozwiązanie dla Ciebie." 
                            : 
                            "Write us an e-mail, call us or fill out the form - we will surely find a solution for you."
                        }
                    </p>
                    <div className="__info">                
                        <span className="__phone-number">
                            <img src={smartphone} alt="Aplikacje mobilne Polska" />
                            <p>+48 607 909 990</p>
                        </span>
                        <span className="__email">
                            <img src={email} alt="Aplikacje mobilne Polska" />
                            <p>ardeo.biuro@gmail.com</p>
                        </span>
                    </div>

                    {/* Contact form */}
                    <form 
                        action="https://formsubmit.co/ardeo.biuro@gmail.com" 
                        method="POST"
                        onSubmit={displayThanks}
                        style={showThanks ? {display: "none"} :{display: "block"}}
                    >
                        <div className="__inputs">
                            <input 
                                type="name" 
                                name="Imię i nazwisko" 
                                placeholder={flag.language === "polish" ? "Imię i nazwisko" : "Full name"} 
                                required 
                            />
                            <input 
                                type="email" 
                                name="Adres e-mail" 
                                placeholder={flag.language === "polish" ? "Adres e-mail" : "E-mail address"}
                                required 
                            />
                        </div>
                        <textarea 
                            name="Treść"
                            rows={8}
                            placeholder={flag.language === "polish" ? 
                                "Chciałbym spytać o..." 
                                : 
                                "I would like to..."} 
                            required 
                        />
                        <input type="hidden" name="_subject" value="Zamówienie - strona internetowa" />
                        <input type="hidden" name="_next" value="https://ardeo-studio.pl" />

                        {/* <button> replaced with <input> due to Safari browser */}
                        <input 
                            className="__btn"
                            type="submit"
                            value={flag.language === "polish" ? "Wyślij" : "Submit"}
                        />
                    </form>

                    {/* Thanks for the client displayed instead of form */}
                    <div 
                        className="__thanks"
                        style={showThanks ? {display: "block"} :{display: "none"}}
                    >
                        <p>
                            &#9989;
                            {flag.language === "polish" ?
                                "Dziękujemy za wypełnienie formularza. Odpowiemy najpóźniej w kolejnym dniu roboczym."
                                : 
                                "Thank you for submitting the form. We will respond no later than the next business day."
                            }
                        </p>
                    </div>
                </div>
            </div>

            {/* Background with image */}
            <div className="__background">
                <img 
                    className="__img" 
                    src={laptopImg} 
                    alt="Usługi informatyczne"
                    style={window.innerWidth >= 1200 ? 
                        {top: `${ (140 - (imageTop - 2180) * .8) }px`}
                        :
                        {top: '0px'}
                     }
                />
            </div>
        </section>
    )
}