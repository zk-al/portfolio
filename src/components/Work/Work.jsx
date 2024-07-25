import "./Work.scss";
import listainable from "../../assets/images/listainable.png";
import wndd from "../../assets/images/wn-dd.png";
import wn from "../../assets/images/wn.png";
import hifi from "../../assets/images/hifi.png";
import cassette from "../../assets/gifs/lofi_cassette_comp.gif";
import rp from "../../assets/gifs/lofi_record-player_comp.gif";
import tv from "../../assets/gifs/lofi_tv_comp.gif";

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
            className="project__listainable-bg"
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
        </div>

        <div className="project">
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
        </div>

        <div className="project">
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
