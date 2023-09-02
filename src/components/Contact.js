import { useSelector } from "react-redux";

export default function Contact () {
    const flag = useSelector(state => state.flag);

    return (
        <section id="Contact">
            <div>
                <h1>{flag.language === "polish" ? "Kontakt" : "Contact"}</h1>
                <p className="__desc">
                    {flag.language === "polish" ? 
                        "Napisz do nas maila, zadzwoń lub wypełnij poniższy formularz - na pewno znajdziemy rozwiązanie dla Ciebie." 
                        : 
                        "Write us an e-mail, call us or fill out the form below - we will surely find a solution for you."
                    }
                </p>
                <div className="__info">                
                    <span className="__phone-number">
                        <img src={require("../assets/contact/smartphone-red.png")} alt="Aplikacje mobilne Polska" />
                        <p>+48 607 909 990</p>
                    </span>
                    <span className="__email">
                        <img src={require("../assets/contact/email-red.png")} alt="Aplikacje mobilne Polska" />
                        <p>ardeo.biuro@gmail.com</p>
                    </span>
                </div>
                <form action="https://formsubmit.co/ardeo.biuro@gmail.com" method="POST">
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
                        type="text" 
                        name="Treść"
                        rows="8"
                        placeholder={flag.language === "polish" ? 
                            "Chciałbym spytać o..." 
                            : 
                            "I would like to..."} 
                        required 
                    />
                    <input type="hidden" name="_subject" value="Zamówienie - strona internetowa" />
                    <input type="hidden" name="_next" value="thanks" />

                    {/* <button> replaced with <input> due to Safari browser */}
                    <input 
                        type="submit"
                        placeholder={flag.language === "polish" ? "Wyślij" : "Submit"}
                    />
                </form>
            </div>
        </section>
    )
}