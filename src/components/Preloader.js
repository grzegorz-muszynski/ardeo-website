import { useEffect } from 'react';
import LogoIcon from '../assets/preloader/favicon-white.js';
import LogoArdeo from '../assets/preloader/ardeo.js';

export default function Preloader() {

  return (
    <section id="Preloader">
      <div className="__box">
        <span class="__icon" >
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
