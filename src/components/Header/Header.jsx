import "./Header.scss"
import logo from "../../assets/svg/logo.svg";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Zack Lamarche logo" />
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a className="anchor-link" href="#about">
              About
            </a>
          </li>
          <li className="nav__item">
            <a className="anchor-link" href="#work">
              Work
            </a>
          </li>
          <li className="nav__item">
            <a className="anchor-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
