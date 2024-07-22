import "./App.scss";
import logo from "./assets/svg/logo.svg";

function App() {
  return (
    <div>

      /* -------------------------------------------------------------------------- */
      /*                                   HEADER                                   */
      /* -------------------------------------------------------------------------- */


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

      /* -------------------------------------------------------------------------- */
      /*                                    HERO                                    */
      /* -------------------------------------------------------------------------- */

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
    </div>
  );
}

export default App;
