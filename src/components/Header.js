import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../flagSlice';
import menuScrolling from '../scripts/menuScrolling';
import flagPol from '../assets/header/flags/flagPL.gif';
import flagEng from '../assets/header/flags/flagUK.gif';
// import menuBtn from '../assets/header/menu-btn.webp';
import logo from '../assets/logo/colourful.png';

export default function About() {
    const flag = useSelector(state => state.flag);
    const dispatch = useDispatch();
    const [showNavbar, setShowNavbar] = useState(false);

    const handleClosing = () => {
        setShowNavbar(false);
    }

    const toggleNavbar = () => {
        setShowNavbar(!showNavbar);
    }

    const scrollAndClose = (e) => {
        menuScrolling(e);
        handleClosing();
    }

    return (
        <section id='Header'>
            <img className="Header__logo" src={logo} alt="Tworzenie stron internetowych" />

            {/* data-height according to thresholds set in the variables.scss file:
                $threshold1: 576px;
                $threshold2: 768px;
                $threshold3: 992px;
                $threshold4: 1200px;
                $threshold5: 1400px;
             */}
        
            <ul 
                className={showNavbar ? 
                "Header__menu" : 
                "Header__menu Header__menu-hidden"}
                // onClick={handleClosing}
            >
                {/* Home section */}
                <li
                    onClick={scrollAndClose} 
                    data-height5={0}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={720}
                >{flag.language === "polish" ? "Start" : "Home"}</li>

                {/* About section */}
                <li
                    onClick={scrollAndClose} 
                    data-height5={790}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={1000} 
                >{flag.language === "polish" ? "O nas" : "About"}</li>
                
                {/* Portfolio section */}
                <li
                    onClick={scrollAndClose} 
                    data-height5={1795}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={1500} 
                >{flag.language === "polish" ? "Portfolio" : "Projects"}</li>
                
                {/* Contact section */}
                <li
                    onClick={scrollAndClose} 
                    data-height5={2480}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={200} 
                    data-height1={2000} 
                    data-height={2000}                
                >{flag.language === "polish" ? "Kontakt" : "Contact"}</li>
            </ul>

            <span className="Header__icons">
                {/* <img 
                    src={menuBtn} 
                    alt="Websites Kraków" 
                    className="Header__icons-menu"
                    onClick={toggleNavbar}
                /> */}
                <div className="Header__icons-menu">
                    
                </div>



                <img 
                    src={flag.language === "english" ? flagPol : flagEng}
                    // {require("../assets/header/flags/flagPL.gif")} 
                    alt="Strony internetowe Polska" 
                    className="Header__icons-flag"
                    onClick={() => dispatch(chooseLanguage(flag.language === 'english' ? 'polish' : 'english'))}
                />    
            </span>
        </section>
    )
}