import "./App.scss";
import logo from "./assets/svg/logo.svg";
import profile from "./assets/images/profile-img.png"
import linkedin from "./assets/svg/linkedin.svg"
import insta from "./assets/svg/insta.svg"

function App() {
  return (
    <div>


      <header className="header">
        <img className="header__logo" src={logo} alt="" />
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <a className="nav__link" href="#">
                About
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Work
              </a>
            </li>
            <li className="nav__item">
              <a className="nav__link" href="#">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__bg">
          <svg>Blob 1</svg>
          <svg>Line</svg>
          <svg>Blob 2</svg>
        </div>

        <div className="hero__text">
          <h1>Designer to Developer</h1>
          <h2>Out here tryin' to have a good time</h2>
        </div>
      </section>

      <section className="about">
        <div className="about__text">
          <h2>Hey! I'm Zack 👋</h2>
          <p>My goal with Development and Design is to make to world a better place. Sometimes that is complex problem solving and sometimes its bringing a little more fun into the world.</p>
        </div>
        
        <div className="about__img-wrap">
          <img className="about__profile-img" src={profile} alt="" />
          <svg className="about__blob--mobile" viewBox="0 0 262 340" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M181.17 293.513C193.273 357.78 93.8194 351.254 24.3525 298.601C-45.1145 245.948 64.9679 237.497 37.735 183.666C10.502 129.835 79.4206 161.216 89.97 48.9802C100.519 -63.2554 235.684 34.5265 261.757 185.035C267.509 246.845 169.067 229.245 181.17 293.513Z" fill="#FAF6DB"/>
          </svg>
        </div>
      </section>

      <section className="work">

      </section>

      <footer>
        <h2>Wana chat?</h2>
        <div>
          <p>Email me at lamarche.zack@gmail.com</p>
          <svg width="300" height="157" viewBox="0 0 300 157" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.29605 67.3459C-15.9598 20.7038 52.1503 0.000488281 129.592 0.000488281C207.035 0.000488281 177.292 31.7481 252.764 45.7203C361.76 65.886 262.452 157 153.492 157C44.5323 157 22.5519 113.988 3.29605 67.3459Z" fill="#EDDA73"/>
          </svg>
        </div>

        <p>Or find me on socials</p>

        <div>
          <img src={linkedin} alt="LinkedIn icon" />
          <img src={insta} alt="Instagram Icon" />
        </div>

      </footer>
    </div>
  );
}

export default App;
