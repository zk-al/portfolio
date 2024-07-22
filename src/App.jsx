import "./App.scss";
import logo from "./assets/svg/logo.svg";
import profile from "./assets/images/profile-img.png";
import linkedin from "./assets/svg/linkedin.svg";
import insta from "./assets/svg/insta.svg";
import listainable from "./assets/images/listainable.png";
import wndd from "./assets/images/wn-dd.png";
import wn from "./assets/images/wn.png";
import hifi from "./assets/images/hifi.png";

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

      <section className="work">
        <h2>My Work</h2>

        <div className="project">
          <div className="project__text-wrap">
            <h3>Listainable</h3>
            <h4>Summary</h4>
            <p>
              A grocery list app to enable consumers to shop more sustainably.
              Listainable uses a REST API, Express, Node.js, MySQL and Knex.js
              for CRUD operations and  refining data from the OpenFoodFacts API.
              Users are able to search for items and add them a their list; they
              are also given an average eco-score based on their lists content.
            </p>
            <h4>Role</h4>
            <p>Web Developer</p>
            <h4>Tools</h4>
            <p>
              React, Sass, Express, MySQL, Node.js, Knex.js, Express, Fuse.js,
              Axios, Git
            </p>
          </div>

          <div className="project__img-wrap">
            <img
              className="project__img"
              src={listainable}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              View Demo
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__text-wrap">
            <h3>Woody Nelson Direct Delivery</h3>
            <h4>Summary</h4>
            <p>
              As part of building our brand and expanding our sales channels we
              were tasked with creating a direct delivery website for
              wholesalers to buy our products from across Canada. I was tasked
              with leading this project. I worked with our Senior Designer and
              Graphic Designer to layout the website and from there I led the
              building and customization on Shopify.
            </p>
            <h4>Role</h4>
            <p>Web Designer and Front-End Developer</p>
            <h4>Tools</h4>
            <p>Shopify, Figma, Illustrator, Photoshop</p>
          </div>

          <div className="project__img-wrap">
            <img
              className="project__img"
              src={wndd}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__text-wrap">
            <h3>Woody Nelson Website</h3>
            <h4>Summary</h4>
            <p>
              Woody Nelson is a Liscencd Producer of Cannabis based in Nelson
              BC. As part of my time as Junior Marketer I was tasked to build a
              website for our brand launch. I worked in collaboration with the
              Seniour design and Illustrator to create the layouts in Figma and
              built the website in Webflow myself.
            </p>
            <h4>Role</h4>
            <p>Webflow Developer</p>
            <h4>Tools</h4>
            <p>Figma, Webflow, Illustrator, Photoshop, Adobe After Effects</p>
          </div>

          <div className="project__img-wrap">
            <img
              className="project__img"
              src={wn}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__text-wrap">
            <h3>High Fidelity Website</h3>
            <h4>Summary</h4>
            <p>
              High Fidelity Solventless is a licensed producer of solventless
              cannabis extracts. As they refined their product they needed a
              website for their brand launch. I worked with our Senior Designer
              and graphic designer on layout, and built the website on Webflow
              myself.
            </p>
            <h4>Role</h4>
            <p>Webflow Developer</p>
            <h4>Tools</h4>
            <p>Figma, Webflow, Illustrator, Photoshop, Adobe After Effects</p>
          </div>

          <div className="project__img-wrap">
            <img
              className="project__img"
              src={hifi}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>
        </div>

        <div className="project">
          <div className="project__text-wrap">
            <h3>LoFi Instagram Reels</h3>
            <h4>Summary</h4>
            <p>
              While working for Woody Nelson I was Social Media manager for them
              and their subsidiaries, LoFi being one of them. I was tasked with
              creating Reels that encapsulated the brand, and connected with
              both the LoFi music and art audience and the CBD consumers.
            </p>
            <h4>Role</h4>
            <p>Social Media Manager, Animator</p>
            <h4>Tools</h4>
            <p>After Effects, Illustrator, Loomly, Buffer</p>
          </div>

          <div className="project__img-wrap">
            <img
              className="project__img"
              src={hifi}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>
        </div>
      </section>

      <footer>
        <h2>Wana chat?</h2>
        <div>
          <p>Email me at lamarche.zack@gmail.com</p>
          <svg
            width="300"
            height="157"
            viewBox="0 0 300 157"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.29605 67.3459C-15.9598 20.7038 52.1503 0.000488281 129.592 0.000488281C207.035 0.000488281 177.292 31.7481 252.764 45.7203C361.76 65.886 262.452 157 153.492 157C44.5323 157 22.5519 113.988 3.29605 67.3459Z"
              fill="#EDDA73"
            />
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
