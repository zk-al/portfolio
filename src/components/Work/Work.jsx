import "./Work.scss";
import listainable from "../../assets/images/listainable.png";
import wndd from "../../assets/images/wn-dd.png";
import wn from "../../assets/images/wn.png";
import hifi from "../../assets/images/hifi.png";
import cassette from "../../assets/gifs/lofi_cassette_comp.gif";
import rp from "../../assets/gifs/lofi_record-player_comp.gif";
import tv from "../../assets/gifs/lofi_tv_comp.gif";
import {ReactComponent as ListainableBlobDesktop} from "../../assets/svg/listainable-blob-desktop.svg"
import {ReactComponent as ListainableBlobMobile} from "../../assets/svg/listainable-blob-mobile.svg"
import {ReactComponent as WnddBlobDesktop} from "../../assets/svg/wndd-blob-desktop.svg"
import {ReactComponent as WnddBlobMobile} from "../../assets/svg/wndd-blob-mobile.svg"
import {ReactComponent as WnBlobDesktop} from "../../assets/svg/wn-blob-desktop.svg"
import {ReactComponent as WnBlobMobile} from "../../assets/svg/wn-blob-mobile.svg"
import {ReactComponent as HifiBlobDesktop} from "../../assets/svg/hifi-blob-desktop.svg"
import {ReactComponent as HifiBlobMobile} from "../../assets/svg/hifi-blob-mobile.svg"

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <h2 className="work__title">My Work</h2>

        <div className="work__project-container">
          <div className="project">
            <div className="project__text-container">
              <h3>Listainable</h3>
              <h4>Summary</h4>
              <p>
                A grocery list app to enable consumers to shop more sustainably.
                Listainable uses a REST API, Express, Node.js, MySQL and Knex.js
                for CRUD operations and refining data from the OpenFoodFacts
                API. Users are able to search for items and add them a their
                list; they are also given an average eco-score based on their
                lists content.
              </p>
              <div className="project__details">
                <div className="project__details-container">
                  <h4>Role</h4>
                  <p>Web Developer</p>
                </div>
                <div className="project__details-container">
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

            <ListainableBlobDesktop className="project__blob-bg"/>
            <ListainableBlobMobile className="project__blob-bg--mobile"/>
            
          </div>

          <div className="project project--reverse">
            <div className="project__text-container">
              <h3>Woody Nelson Direct Delivery</h3>
              <h4>Summary</h4>
              <p>
                As part of building our brand and expanding our sales channels
                we were tasked with creating a direct delivery website for
                wholesalers to buy our products from across Canada. I was tasked
                with leading this project. I worked with our Senior Designer and
                Graphic Designer to layout the website and from there I led the
                building and customization on Shopify.
              </p>
              <div className="project__details">
                <div className="project__details-container">
                  <h4>Role</h4>
                  <p>Web Designer and Front-End Developer</p>
                </div>
                <div className="project__details-container">
                  <h4>Tools</h4>
                  <p>Shopify, Figma, Illustrator, Photoshop</p>
                </div>
              </div>
            </div>

            <div className="project__img-container">
              <img
                className="project__img"
                src={wndd}
                alt="Screenshot of Woody Nelson's Direct Delivery website"
              />
              <a className="btn" href="#">
                See Live Site
              </a>
            </div>

            <WnddBlobDesktop className="project__blob-bg"/>
            <WnddBlobMobile className="project__blob-bg--mobile"/>
          </div>

          <div className="project">
            <div className="project__text-container">
              <h3>Woody Nelson Website</h3>
              <h4>Summary</h4>
              <p>
                Woody Nelson is a Liscencd Producer of Cannabis based in Nelson
                BC. As part of my time as Junior Marketer I was tasked to build
                a website for our brand launch. I worked in collaboration with
                the Seniour design and Illustrator to create the layouts in
                Figma and built the website in Webflow myself.
              </p>
              <div className="project__details">
                <div className="project__details-container">
                  <h4>Role</h4>
                  <p>Webflow Developer</p>
                </div>
                <div className="project__details-container">
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

            <WnBlobDesktop className="project__blob-bg"/>
            <WnBlobMobile className="project__blob-bg--mobile"/>
          </div>

          <div className="project project--reverse">
            <div className="project__text-container">
              <h3>High Fidelity Website</h3>
              <h4>Summary</h4>
              <p>
                High Fidelity Solventless is a licensed producer of solventless
                cannabis extracts. As they refined their product they needed a
                website for their brand launch. I worked with our Senior
                Designer and graphic designer on layout, and built the website
                on Webflow myself.
              </p>
              <div className="project__details">
                <div className="project__details-container">
                  <h4>Role</h4>
                  <p>Webflow Developer</p>
                </div>
                <div className="project__details-container">
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

            <HifiBlobDesktop className="project__blob-bg"/>
            <HifiBlobMobile className="project__blob-bg--mobile"/>
          </div>

          <div className="project project--reels">
            <div className="project__text-container">
              <h3>LoFi Instagram Reels</h3>
              <h4>Summary</h4>
              <p>
                While working for Woody Nelson I was Social Media manager for
                them and their subsidiaries, LoFi being one of them. I was
                tasked with creating Reels that encapsulated the brand, and
                connected with both the LoFi music and art audience and the CBD
                consumers.
              </p>
              <div className="project__details">
                <div className="project__details-container">
                  <h4>Role</h4>
                  <p>Social Media Manager, Animator</p>
                </div>
                <div className="project__details-container">
                  <h4>Tools</h4>
                  <p>After Effects, Illustrator, Loomly, Buffer</p>
                </div>
              </div>
            </div>

            <div className="project__img-container">
              <img
                className="project__img project__img--cassette"
                src={cassette}
                alt="GIF of an animated cassette with a colorful outline moving to music"
              />

              <img
                className="project__img project__img--rp"
                src={rp}
                alt="GIF of a record spinning on a record player"
              />
              <img
                className="project__img project__img--tv"
                src={tv}
                alt="GIF if a TV with colorful waves and the LoFi logo"
              />
              <a className="btn" href="#">
                See Live Site
              </a>
            </div>

            <svg
              className="project__blob-bg"
              viewBox="0 0 1280 637"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M548.285 134.5C451.1 155.819 278.469 22.2234 136.266 87C-5.93628 151.777 -61.583 421.5 91.3923 519C244.368 616.5 397.335 446.542 523.484 481.154C634.082 511.5 659.956 621.149 845.227 636.072C1030.5 650.995 1201.71 482.22 1256.71 396.234C1311.71 310.248 1281.94 35.9438 1028.85 5.03129C775.752 -25.8812 645.469 113.181 548.285 134.5Z"
                fill="#FAF6DB"
              />
            </svg>

            <svg
              className="project__blob-bg--mobile"
              viewBox="0 0 664 952"
              fill="none"
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M139.733 544.214C161.975 616.495 22.5926 744.89 90.1752 850.653C157.758 956.416 439.165 997.803 540.888 884.028C642.612 770.253 465.291 656.483 501.403 562.66C533.063 480.403 647.462 461.159 663.032 323.363C678.602 185.568 502.516 58.2303 412.804 17.3222C323.093 -23.5858 36.9073 -1.4411 4.65575 186.797C-27.5958 375.036 117.49 471.933 139.733 544.214Z"
                fill="#FAF6DB"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Work;
