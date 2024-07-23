import profile from "./assets/images/profile-img.png";

function About() {
  return (
    <section className="about">
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
          className="about__blob--mobile"
          viewBox="0 0 262 340"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M181.17 293.513C193.273 357.78 93.8194 351.254 24.3525 298.601C-45.1145 245.948 64.9679 237.497 37.735 183.666C10.502 129.835 79.4206 161.216 89.97 48.9802C100.519 -63.2554 235.684 34.5265 261.757 185.035C267.509 246.845 169.067 229.245 181.17 293.513Z"
            fill="#FAF6DB"
          />
        </svg>
      </div>
    </section>
  );
}

export default About;
