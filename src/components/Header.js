import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../flagSlice';
import menuScrolling from '../scripts/menuScrolling';
import logo from '../assets/logo/colourful.png';

export default function About() {
    const flag = useSelector(state => state.flag);
    const dispatch = useDispatch();

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
        
            <ul className="Header__menu">
                {/* Home section */}
                <li
                    onClick={menuScrolling} 
                    data-height5={0}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={720} 
                >{flag.language === "polish" ? "Start" : "Home"}</li>

                {/* About section */}
                <li
                    onClick={menuScrolling} 
                    data-height5={790}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={720} 
                >{flag.language === "polish" ? "O nas" : "About"}</li>
                
                {/* Portfolio section */}
                <li
                    onClick={menuScrolling} 
                    data-height5={1795}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={720} 
                >{flag.language === "polish" ? "Portfolio" : "Projects"}</li>
                
                {/* Contact section */}
                <li
                    onClick={menuScrolling} 
                    data-height5={2480}
                    data-height4={440} 
                    data-height3={720} 
                    data-height2={720} 
                    data-height1={720} 
                    data-height={720}                
                >{flag.language === "polish" ? "Kontakt" : "Contact"}</li>
            </ul>

            <span className="Header__flags">
                <img 
                    src={require("../assets/flags/flagPL.gif")} alt="Strony internetowe Polska" 
                    onClick={() => dispatch(chooseLanguage('polish'))}
                />    
                <img 
                    src={require("../assets/flags/flagUK.gif")} alt="Websites Europe" 
                    onClick={() => dispatch(chooseLanguage('english'))}
                />    
            </span>
        </section>
    )
}