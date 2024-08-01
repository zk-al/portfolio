import "./HamburgerMenu.scss"
import { useState } from "react";

function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen(!open)
  }

  return (
    <div className="hamburger">
      <div className="hamburger__icon" onClick={toggleMenu}>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
        <div className="hamburger__line"></div>
      </div>
      <nav className={`hamburger__nav ${open ? 'open' : ''}`}>
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
