import logo from "../../assets/svg/logo.svg";

function Header() {
  return (
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
  );
}

export default Header;
