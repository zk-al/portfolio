import "./HamburgerMenu.scss"

function HamburgerMenu() {
  return (
    <div className="hamburger">
      <div className="hamburger__icon">
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
      <nav className="hamburger__nav">
        <ul className="hamburger__list">
          <li className="hamburger__item">
            <a className="anchor-link" href="#about">
              About
            </a>
          </li>
          <li className="hamburger__item">
            <a className="anchor-link" href="#work">
              Work
            </a>
          </li>
          <li className="hamburger__item">
            <a className="anchor-link" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HamburgerMenu;
