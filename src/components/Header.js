import { useDispatch, useSelector } from 'react-redux';
import { chooseLanguage } from '../flagSlice';
import logo from '../assets/logo/colourful.png';
// import logo from '../assets/logo/white.png';


export default function About() {
    const flag = useSelector(state => state.flag);
    const dispatch = useDispatch();

    return (
        <section id='Header'>
            <img class="Header__logo" src={logo} alt="Tworzenie stron internetowych" />
            
            <ul class="Header__menu">
                <li href="#Home">{flag.language === "polish" ? "Start" : "Home"}</li>
                <li href="#About">{flag.language === "polish" ? "O nas" : "About"}</li>
                <li href="#Projects">{flag.language === "polish" ? "Portfolio" : "Projects"}</li>
                <li href="#Contact">{flag.language === "polish" ? "Kontakt" : "Contact"}</li>
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