import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";

import SplitTextJS from 'split-text-js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function About() {
  const flag = useSelector(state => state.flag);
  const link = '../assets/about/computers.jpg';

  // GSAP
  const titles = gsap.utils.toArray('.__text-animated');
  const tl = gsap.timeline({ repeat: 0 });
  const [counter, setCounter] = useState(0); // Counts to start typing only once
  const [isHidden, setIsHidden] = useState(true); // Hides text box at a beginning
  
  // Parallax effect
  const [offsetY, setOffsetY] = useState(0); // The variable

  const handleScroll = () => {
    // The variable below decides when the animated text stops moving up or down
    if (window.pageYOffset > 1400 || window.innerHeight + window.scrollY < 1240) return;

    // console.log(window.innerHeight + window.pageYOffset)
    setOffsetY(window.innerHeight + window.scrollY);
    // console.log(window.innerHeight + window.scrollY);

    // The line below decides when the animated text shows up
    if (window.innerHeight + window.scrollY > 1300 && counter === 0) {
      setIsHidden(false);
      setCounter(1);
    }
  }

  // Mounting event listener for scrolling
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [])
  
  useEffect(() => {
      titles.forEach(title => {
          const splitTitle = new SplitTextJS(title);

          tl.from(splitTitle.chars, {
              opacity: 0,
              // y: 80,
              // rotateX: -90,
              stagger: .02
          }, "<").to(splitTitle.chars, {
              opacity: 1,
              // y: -80,
              // rotateX: 90,
              stagger: .02 
          }, "<1")
      });      
  }, [flag.language, counter]);

  return (
    // Don't know why - background size must be declared inline, if in CSS - browser changes cover for auto
    <section id="About">
        <div 
          className="__box"
          style={{ transform: `translateY(${ (offsetY - 1200) * 0.6 }px)`}}
          // style={{ transform: `translateY(${offsetY}px)`}}
        >
          <div className="__text" style={isHidden ? {display: "none"} : {display: "block"}}>
              <p className="__text-animated">{flag.language === "polish" ?
                "Opracowujemy i dostarczamy produkty, które są wysoce funkcjonalne. Ponadto możesz stale rozbudowywać swój portal wedle potrzeb bez względu na to czy jest to strona internetowa, SaaS czy aplikacja mobilna." 
                : 
                "We develop and deliver     products that are highly functional. In addition, you can constantly expand your portal according to your needs, regardless of whether it is a website, SaaS or a mobile application."}
              </p>
          </div>     
        </div>

        {/* <div className="__wallpaper2" style={{
          backgroundSize: "cover", 
        }}></div> */}

        <div className="__wallpaper1" style={{
          backgroundSize: "cover", 
        }}></div>
    </section>
  );
}
