import "./About.scss";
import profile from "../../assets/images/profile-img.png";

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__text">
          <h2>Hey! I'm Zack 👋</h2>
          <p>
            My goal with Development and Design is to make to world a better
            place. Sometimes that is complex problem solving and sometimes its
            bringing a little more fun into the world.
          </p>
        </div>

        <div className="about__img-wrap">
          <img className="about__profile-img" src={profile} alt="" />
          <svg
            className="about__blob"
            viewBox="0 0 1338 654"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M201.368 494.601C-47.6314 562.601 -57.1314 295.101 125.777 81.3998C308.686 -132.302 380.978 155.032 583.487 52.7203C785.997 -49.591 686.73 150.777 1132.8 116.088C1578.87 81.3997 1241.37 494.601 657.43 647.824C415.869 697.601 450.368 426.601 201.368 494.601Z"
              fill="#FAF6DB"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default About;
