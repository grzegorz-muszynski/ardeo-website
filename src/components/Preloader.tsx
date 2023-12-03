import { ReactElement } from 'react';
import LogoIcon from '../assets/preloader/favicon-white.js';
import LogoArdeo from '../assets/preloader/ardeo.js';

export default function Preloader(): ReactElement {

  return (
    <section id="Preloader">
      <div className="__box">
        <span className="__icon" >
            <LogoIcon/>
        </span>
        <span className="__logo" >
            <LogoArdeo/>
        </span>
        <span className="__container">
            <span className="__subtitle">Web </span>
            <span className="__subtitle">applications</span>
        </span>
      </div>
    </section>
  );
}
