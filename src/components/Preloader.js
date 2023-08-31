import {ReactComponent as logoArdeo} from '../assets/preloader/favicon-white.svg';

export default function Preloader () {

    return (
        <section id="Preloader">
            <div className="__logo">
                {/* <img src={require("../assets/preloader/favicon-white.svg")} alt="Usługi informatyczne" /> */}
                <logoArdeo />
            </div>
        </section>
    )
}