import "./About.scss";
import profile from "../../assets/images/profile-img.png";
import {ReactComponent as AboutBlob} from "../../assets/svg/about-blob.svg"

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text">
          <h2>Hey! I'm Zack 👋</h2>
          <p>
            My goal with Development and Design is to make to world a better
            place. Sometimes, that's complex problem-solving and sometimes it's
            bringing a little more fun into the world.
          </p>
        </div>

        <div className="about__img-wrap">
          <img className="about__profile-img" src={profile} alt="" />
          <AboutBlob className="about__blob"/>
        </div>
      </div>
    </section>
  );
}

export default About;
