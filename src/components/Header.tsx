import { ReactElement, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../flagSlice.js';
import menuScrolling from '../scripts/menuScrolling';
import flagPol from '../assets/header/flags/flagPL.gif';
import flagEng from '../assets/header/flags/flagUK.gif';
import logo from '../assets/logo/colourful.png';

export default function About(): ReactElement {
    const flag = useSelector((state: any) => state.flag);
    const dispatch = useDispatch();
    const [showNavbar, setShowNavbar] = useState(false);

    const handleClosing = (): void => {
        setShowNavbar(false);
    }

    const toggleNavbar = (): void => {
        setShowNavbar(!showNavbar);
    }

    const scrollAndClose = (e: any): void => {
        menuScrolling(e);
        handleClosing();
    }

    return (
        <section id='Header'>
            <img className="Header__logo" src={logo} alt="Tworzenie stron internetowych" />
        
            <ul 
                className={showNavbar ? 
                "Header__menu Header__menu-shown" : 
                "Header__menu Header__menu-hidden"}
            >
                {/* Home section */}
                <li
                    onClick={scrollAndClose} 
                    data-height={'Home'}
                >{flag.language === "polish" ? "Start" : "Home"}</li>

                {/* About section */}
                <li
                    onClick={scrollAndClose} 
                    data-height={'About'}
                >{flag.language === "polish" ? "O nas" : "About"}</li>
                
                {/* Portfolio section */}
                <li
                    onClick={scrollAndClose} 
                    data-height={'Projects'}
                >{flag.language === "polish" ? "Portfolio" : "Projects"}</li>
                
                {/* Contact section */}
                <li
                    onClick={scrollAndClose} 
                    data-height={'Contact'}               
                >{flag.language === "polish" ? "Kontakt" : "Contact"}</li>
            </ul>

            <span className="Header__icons">
                <div 
                    className={showNavbar ? 
                        "Header__icons__menu Header__icons__menu-active" : 
                        "Header__icons__menu"
                    }
                    onClick={toggleNavbar}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                <img 
                    src={flag.language === "english" ? flagPol : flagEng}
                    alt="Strony internetowe Polska" 
                    className="Header__icons__flag"
                    onClick={() => dispatch(chooseLanguage(flag.language === 'english' ? 'polish' : 'english'))}
                />    
            </span>
        </section>
    )
}