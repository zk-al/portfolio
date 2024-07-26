import "./Work.scss";
import listainable from "../../assets/images/listainable.png";
import wndd from "../../assets/images/wn-dd.png";
import wn from "../../assets/images/wn.png";
import hifi from "../../assets/images/hifi.png";
import cassette from "../../assets/gifs/lofi_cassette_comp.gif";
import rp from "../../assets/gifs/lofi_record-player_comp.gif";
import tv from "../../assets/gifs/lofi_tv_comp.gif";
import { useEffect, useState } from "react";

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <h2 className="work__title">My Work</h2>

        <div className="project">
          <div className="project__text-container">
            <h3>Listainable</h3>
            <h4>Summary</h4>
            <p>
              A grocery list app to enable consumers to shop more sustainably.
              Listainable uses a REST API, Express, Node.js, MySQL and Knex.js
              for CRUD operations and refining data from the OpenFoodFacts API.
              Users are able to search for items and add them a their list; they
              are also given an average eco-score based on their lists content.
            </p>
            <div className="project__details">
              <div>
                <h4>Role</h4>
                <p>Web Developer</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>
                  React, Sass, Express, MySQL, Node.js, Knex.js, Express,
                  Fuse.js, Axios, Git
                </p>
              </div>
            </div>
          </div>

          <div className="project__img-container">
            <img
              className="project__img"
              src={listainable}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              View Demo
            </a>
          </div>

          <svg
            className="project__blob-bg"
            viewBox="0 0 1280 600"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1188.16 202.615C1056.35 172.115 948.094 -51.8846 672.08 11.1154C603.078 38.1154 672.08 102.115 593.573 160.615C515.065 219.115 391.108 64.1155 210.956 48.6155C30.803 33.1155 -54.315 434.115 37.0009 534.615C128.317 635.115 408.462 559.615 529.115 517.615C649.768 475.615 867.934 601.115 1097.26 599.115C1326.58 597.115 1319.97 233.115 1188.16 202.615Z"
              fill="#FAF6DB"
            />
          </svg>

          <svg
            className="project__blob-bg--mobile"
            viewBox="0 0 300 884"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M198.547 820.573C213.819 729.542 325.98 654.778 294.434 464.156C280.915 416.501 248.869 464.156 219.577 409.936C190.285 355.717 267.896 270.109 275.657 145.691C283.418 21.2735 82.6304 -37.5112 32.3082 25.5538C-18.014 88.6188 19.7902 282.094 40.8204 365.42C61.8506 448.746 -0.989597 599.417 0.0118362 757.793C1.01327 916.169 183.275 911.603 198.547 820.573Z"
              fill="#FAF6DB"
            />
          </svg>
        </div>

        <div className="project project--reverse">
          <div className="project__text-container">
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
            <div className="project__details">
              <div>
                <h4>Role</h4>
                <p>Web Designer and Front-End Developer</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>Shopify, Figma, Illustrator, Photoshop</p>
              </div>
            </div>
          </div>

          <div className="project__img-container">
            <img
              className="project__img"
              src={wndd}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>

          <svg
            className="project__blob-bg"
            viewBox="0 0 1280 616"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M673.678 144.196C508.023 174.196 528.904 -68.208 252.811 19.2921C-23.2809 106.792 -38.1283 442.196 43.0752 546.696C124.279 651.196 328.447 533.196 506.167 598.196C696.268 667.724 751.169 504.696 906.152 546.696C1061.13 588.696 1226.79 563.696 1270.87 400.696C1314.95 237.696 1192.92 53.1959 1043.5 34.1959C894.088 15.1959 839.333 114.196 673.678 144.196Z"
              fill="#FAF6DB"
            />
          </svg>

          <svg
            className="project__blob-bg--mobile"
            viewBox="0 0 296 926"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M254.161 377.61C296.549 284.04 288.452 114.831 247.017 51.2359C205.581 -12.3588 90.8001 -27.7656 39.1248 69.166C-12.5506 166.098 -3.4466 453.094 17.4544 500.035C46.2688 564.75 58.89 623.301 17.4544 808.199C-23.9811 993.097 254.161 937.068 288.452 799.795C322.744 662.522 211.773 471.18 254.161 377.61Z"
              fill="#FAF6DB"
            />
          </svg>
        </div>

        <div className="project">
          <div className="project__text-container">
            <h3>Woody Nelson Website</h3>
            <h4>Summary</h4>
            <p>
              Woody Nelson is a Liscencd Producer of Cannabis based in Nelson
              BC. As part of my time as Junior Marketer I was tasked to build a
              website for our brand launch. I worked in collaboration with the
              Seniour design and Illustrator to create the layouts in Figma and
              built the website in Webflow myself.
            </p>
            <div className="project__details">
              <div>
                <h4>Role</h4>
                <p>Webflow Developer</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>
                  Figma, Webflow, Illustrator, Photoshop, Adobe After Effects
                </p>
              </div>
            </div>
          </div>

          <div className="project__img-container">
            <img
              className="project__img"
              src={wn}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>

          <svg
            className="project__blob-bg"
            viewBox="0 0 1280 619"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M521.966 86.7196C392.625 -2.28041 158.729 14.7195 70.8228 101.719C-17.0834 188.719 -38.38 429.719 95.6075 538.219C229.595 646.719 626.306 627.604 691.194 583.719C780.648 523.219 861.582 496.719 1117.16 583.719C1372.75 670.719 1295.3 86.7196 1105.55 14.7195C915.797 -57.2806 651.307 175.72 521.966 86.7196Z"
              fill="#FAF6DB"
            />
          </svg>

          <svg
            className="project__blob-bg--mobile"
            viewBox="0 0 296 926"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M254.161 377.61C296.549 284.04 288.452 114.831 247.017 51.2359C205.581 -12.3588 90.8001 -27.7656 39.1248 69.166C-12.5506 166.098 -3.4466 453.094 17.4544 500.035C46.2688 564.75 58.89 623.301 17.4544 808.199C-23.9811 993.097 254.161 937.068 288.452 799.795C322.744 662.522 211.773 471.18 254.161 377.61Z"
              fill="#FAF6DB"
            />
          </svg>
        </div>

        <div className="project project--reverse">
          <div className="project__text-container">
            <h3>High Fidelity Website</h3>
            <h4>Summary</h4>
            <p>
              High Fidelity Solventless is a licensed producer of solventless
              cannabis extracts. As they refined their product they needed a
              website for their brand launch. I worked with our Senior Designer
              and graphic designer on layout, and built the website on Webflow
              myself.
            </p>
            <div className="project__details">
              <div>
                <h4>Role</h4>
                <p>Webflow Developer</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>
                  Figma, Webflow, Illustrator, Photoshop, Adobe After Effects
                </p>
              </div>
            </div>
          </div>

          <div className="project__img-container">
            <img
              className="project__img"
              src={hifi}
              alt="Screenshot of Listainable app"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>

          <svg
            className="project__blob-bg"
            viewBox="0 0 1280 559"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M626.07 54.6965C487.091 -9.80349 276.996 -24.8035 68.7607 54.6965C-139.475 134.196 201.871 255.595 95.2548 335.696C-51.1601 445.698 65.0422 525.697 264.446 525.697C463.851 525.697 501.036 391.953 638.62 445.698C726.934 480.196 776.204 570.696 973.75 557.696C1171.29 544.696 1349.16 297.743 1253.22 138C1087.75 -137.5 765.049 119.196 626.07 54.6965Z"
              fill="#FAF6DB"
            />
          </svg>

          <svg
            className="project__blob-bg--mobile"
            viewBox="0 0 664 854"
            fill="none"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.3839 436.294C-12.3121 529.019 -30.1485 669.192 64.3838 808.124C158.916 947.057 303.269 719.314 398.516 790.448C529.318 888.134 624.444 810.605 624.444 677.565C624.444 544.525 465.41 519.716 529.318 427.922C570.339 368.999 677.951 336.127 662.493 204.327C647.035 72.5274 353.387 -46.1449 163.439 17.869C-164.154 128.27 141.08 343.569 64.3839 436.294Z"
              fill="#FAF6DB"
            />
          </svg>
        </div>

        <div className="project">
          <div className="project__text-container">
            <h3>LoFi Instagram Reels</h3>
            <h4>Summary</h4>
            <p>
              While working for Woody Nelson I was Social Media manager for them
              and their subsidiaries, LoFi being one of them. I was tasked with
              creating Reels that encapsulated the brand, and connected with
              both the LoFi music and art audience and the CBD consumers.
            </p>
            <div className="project__details">
              <div>
                <h4>Role</h4>
                <p>Social Media Manager, Animator</p>
              </div>
              <div>
                <h4>Tools</h4>
                <p>After Effects, Illustrator, Loomly, Buffer</p>
              </div>
            </div>
          </div>

          <div className="project__img-container">
            <img
              className="project__img"
              src={cassette}
              alt="GIF of an animated cassette with a colorful outline moving to music"
            />
            <img
              className="project__img"
              src={rp}
              alt="GIF of a record spinning on a record player"
            />
            <img
              className="project__img"
              src={tv}
              alt="GIF if a TV with colorful waves and the LoFi logo"
            />
            <a className="btn" href="#">
              See Live Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
