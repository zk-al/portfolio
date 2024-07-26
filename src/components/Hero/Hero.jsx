import "./Hero.scss";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <svg
          className="hero__blob1"
          width="446"
          height="338"
          viewBox="0 0 446 338"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M252.052 329.623C163.595 374.536 -9.95035e-06 227.637 -6.78083e-06 155.127C-3.61132e-06 82.6172 150.17 127.496 175.428 56.8306C211.883 -45.2232 446 -14.245 446 185.73C446 258.24 357.224 276.205 252.052 329.623Z"
            fill="#EDDA73"
          />
        </svg>

        <svg
          className="hero__line"
          viewBox="0 0 2108 1503"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1208.82 276L533 1228H1833"
            stroke="#7CAEB9"
            stroke-linecap="round"
          />
        </svg>

        <svg
          className="hero__blob2"
          width="538"
          height="230"
          viewBox="0 0 538 230"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M304.045 224.3C197.341 254.862 -6.77095e-06 154.901 -4.61418e-06 105.56C-2.4574e-06 56.2188 181.147 86.7579 211.615 38.6717C255.59 -30.7732 538 -9.69332 538 126.384C538 175.725 430.912 187.95 304.045 224.3Z"
            fill="#EDDA73"
          />
        </svg>
      </div>

      <div className="hero__text">
        <h1>Designer to Developer</h1>
        <h2>Out here tryin' to make the world a better place</h2>
      </div>
    </section>
  );
}

export default Hero;
