import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

export default function About() {
  const flag = useSelector(state => state.flag);
  const link = '../assets/about/computers.jpg';
  const handleScroll = () => setOffsetY(window.pageYOffset);
  // Parallax effect
  const [offsetY, setOffsetY] = useState(0);
  // GSAP
  const titles = gsap.utils.toArray('.__text-animated');
  const tl = gsap.timeline({ repeat: 0 });

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
              stagger: .02,
              scrollTrigger: {
                trigger: '.__text-animated',
                start: "top: 80%",
                markers: true
              }
          }, "<").to(splitTitle.chars, {
              opacity: 1,
              // y: -80,
              // rotateX: 90,
              stagger: .02 
          }, "<1")
      });
  }, [flag.language]);

  return (
    // Don't know why - background size must be declared inline, if in CSS - browser changes cover for auto
    <section id="About">
        <div 
          className="__box"
          style={{ transform: `translateY(${ offsetY * 0.7 }px)`}}
        >
          <div className="__text">
              <p className="__text-animated">{flag.language === "polish" ?
                "Opracowujemy i dostarczamy produkty, które są wysoce funkcjonalne. Ponadto możesz stale rozbudowywać swój portal wedle potrzeb bez względu na to czy jest to strona internetowa, SaaS czy aplikacja mobilna." 
                : 
                "We develop and deliver     products that are highly functional. In addition, you can constantly expand your portal according to your needs, regardless of whether it is a website, SaaS or a mobile application."}
              </p>
          </div>     
        </div>

        <div className="__computers" style={{
          backgroundSize: "cover", 
          // transform: `translateY(${ offsetY * -0.5 }px)`
        }}></div>

        <div className="__people" style={{
          backgroundSize: "cover", 
          // transform: `translateY(${ offsetY * -0.5 }px)`
        }}></div>
    </section>
  );
}
