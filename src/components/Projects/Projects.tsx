import { useEffect } from "react";
import { useSelector } from "react-redux";
import Card from "./Card/Card.tsx";
import imageAlfaMotors from '../../assets/projects/alfa-motors.JPG';
import imageOdnowa from '../../assets/projects/odnowa.JPG';
import imageMedicalVita from '../../assets/projects/medical-vita.JPG';
import imageAMGlobal from '../../assets/projects/amglobal.JPG';

export default function Projects () {
    const flag = useSelector(state => state.flag);

    return (
        <section id="Projects">
            <h1>
                {flag.language === "polish" ?
                    "Zaufali nam" 
                    : 
                    "Our clients"}
            </h1>
            <div className="__cards">
                <Card 
                    imgSrc={imageAlfaMotors}
                    title="Alfa Motors"
                    alt="Aplikacje webowe"
                    href="https://alfamotors.pl/"
                    animationDelay="1"
                />
                <Card 
                    imgSrc={imageOdnowa}
                    title="Odnowa"
                    alt="Strony internetowe dla biznesu"
                    href="https://odnowa-kubik.eu/"
                    animationDelay="2"
                />
                <Card 
                    imgSrc={imageMedicalVita}
                    title="Medical-Vita"
                    alt="Strony internetowe"
                    href="https://medicalvita.pl/"
                    animationDelay="3"
                />
                <Card 
                    imgSrc={imageAMGlobal}
                    title="AM Global"
                    alt="Comercial websites"
                    href="https://amglobal.pl/"
                    animationDelay="4"
                />
            </div>
        </section>
    )
}