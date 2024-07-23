import linkedin from "./assets/svg/linkedin.svg";
import insta from "./assets/svg/insta.svg";

function Footer() {
  return (
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
  );
}

export default Footer;
