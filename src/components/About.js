import { useEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import SplitTextJS from 'split-text-js';

export default function About() {
  const flag = useSelector(state => state.flag);
  const link = '../assets/about/computers.jpg';

  // GSAP
  const titles = gsap.utils.toArray('.__text-animated');
  const tl = gsap.timeline({ repeat: 0 });
  
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
    <section 
      id="About">
      <span className="__box">
        <div className="__text">
            <p className="__text-animated">{flag.language === "polish" ?
              "Opracowujemy i dostarczamy produkty, które są wysoce funkcjonalne. Ponadto możesz stale rozbudowywać swój portal wedle potrzeb bez względu na to czy jest to strona internetowa, SaaS czy aplikacja mobilna." 
              : 
              "We develop and deliver     products that are highly functional. In addition, you can constantly expand your portal according to your needs, regardless of whether it is a website, SaaS or a mobile application."}
            </p>
        </div>     
      </span>
    </section>
  );
}
