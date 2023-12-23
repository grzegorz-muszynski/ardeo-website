import { useSelector } from "react-redux";
import Card from "./Card/Card";
import imageAlfaMotors from '../../assets/projects/alfa-motors.webp';
import imageOdnowa from '../../assets/projects/odnowa.webp';
import imageMedicalVita from '../../assets/projects/medical-vita.webp';
import imageAMGlobal from '../../assets/projects/amglobal.webp';

export default function Projects () {
    const flag = useSelector((state: any) => state.flag);

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
                    loading="lazy"
                />
                <Card 
                    imgSrc={imageOdnowa}
                    title="Odnowa"
                    alt="Strony internetowe dla biznesu"
                    href="https://odnowa-kubik.eu/"
                    animationDelay="2"
                    loading="lazy"
                />
                <Card 
                    imgSrc={imageMedicalVita}
                    title="Medical-Vita"
                    alt="Strony internetowe"
                    href="https://medicalvita.pl/"
                    animationDelay="3"
                    loading="lazy"
                />
                <Card 
                    imgSrc={imageAMGlobal}
                    title="AM Global"
                    alt="Comercial websites"
                    href="https://amglobal.pl/"
                    animationDelay="4"
                    loading="lazy"
                />
            </div>
        </section>
    )
}