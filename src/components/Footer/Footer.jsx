import "./Footer.scss";
import { ReactComponent as LinkedIn } from "../../assets/svg/linkedin.svg";
import {ReactComponent as Github} from "../../assets/svg/github.svg"

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__container">
        <h2>Wanna chat?</h2>
        <div className="footer__contact">
          <a href="mailto:lamarche.zack@gmail.com" className="footer__subhead footer__subhead--contact" target="_blank">
            e-mail me at lamarche.zack@gmail.com
          </a>
          <svg
            className="footer__blob"
            viewBox="0 0 300 157"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.29605 67.3459C-15.9598 20.7038 52.1503 0.000488281 129.592 0.000488281C207.035 0.000488281 177.292 31.7481 252.764 45.7203C361.76 65.886 262.452 157 153.492 157C44.5323 157 22.5519 113.988 3.29605 67.3459Z"
              fill="#EDDA73"
            />
          </svg>
        </div>

        <div className="footer__socials">
          <p className="footer__subhead">Or find me on socials</p>

          <div className="footer__icons-container">
            <a href="https://www.linkedin.com/in/zack-lamarche/" target="_blank" rel="noopener noreferrer">
              <LinkedIn className="footer__icons" />
            </a>
            <a href="https://github.com/zk-al" target="_blank" rel="noopener noreferrer">
              <Github className="footer__icons" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
