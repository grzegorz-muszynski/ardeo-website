import { useSelector } from "react-redux";

export default function About() {
  const flag = useSelector(state => state.flag);

  return (
    <section id="About">
      <span className="__box">
        <div className="__text">
            <div className="__text-animated">{flag.language === "polish" ? "To zdanie ma dokładnie 32 znaki" : "We have 32 signs here,absolutely"}</div>
        </div>      
      </span>
    </section>
  );
}
