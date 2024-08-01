import "./Hero.scss";
import {ReactComponent as HeroBlobLeft} from "../../assets/svg/hero-blob-left.svg"
import {ReactComponent as HeroLine} from "../../assets/svg/hero-line.svg"
import {ReactComponent as HeroBlobRight} from "../../assets/svg/hero-blob-right.svg"

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <HeroBlobLeft className="hero__blob-left"/>
        <HeroLine className="hero__line" />
        <HeroBlobRight className="hero__blob-right"/>
      </div>

      <div className="hero__text">
        <h1>Designer to Developer</h1>
        <h2>Out here tryin' to make the world a better place</h2>
      </div>
    </section>
  );
}

export default Hero;
