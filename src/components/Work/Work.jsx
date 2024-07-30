import "./Work.scss";
import ProjectList from "../ProjectList/ProjectList"

function Work() {
  return (
    <section className="work" id="work">
      <div className="work__container">
        <h2 className="work__title">My Work</h2>
        <div className="work__project-container">
          <ProjectList />
        </div>
        
      </div>
    </section>
  );
}

export default Work;


{/* <div className="work__project-container">
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
              <a className="btn" href="#" target="_blank">
                View Demo
              </a>
            </div>

            <ListainableBlobDesktop className="project__blob"/>
            <ListainableBlobMobile className="project__blob-mobile"/>
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
              <a className="btn" href="https://shop.woodynelson.ca/" target="_blank">
                See Live Site
              </a>
            </div>

            <WnddBlobDesktop className="project__blob project__blob--wndd"/>
            <WnddBlobMobile className="project__blob-mobile project__blob-mobile--wndd"/>
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
                alt="Screenshot of Woody Nelson's brand website"
              />
              <a className="btn" href="https://www.woodynelson.ca/" target="_blank">
                See Live Site
              </a>
            </div>

            <WnBlobDesktop className="project__blob project__blob--wn"/>
            <WnBlobMobile className="project__blob-mobile project__blob-mobile--wn"/>
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
                alt="Screenshot of High Fidelity Solventless brand website"
              />
              <a className="btn" href="https://www.highfidelitysolventless.com/" target="_blank">
                See Live Site
              </a>
            </div>

            <HifiBlobDesktop className="project__blob project__blob--hifi"/>
            <HifiBlobMobile className="project__blob-mobile project__blob-mobile--hifi"/>
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

            <div className="project__img-container project__img-container--reels">
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
              <a className="btn" href="https://www.instagram.com/reel/CbJNEWlPEAW/" target="_blank">
                See Reels
              </a>
            </div>
            <LofiReelsBlobDesktop className="project__blob project__blob--lofi"/>
            <LofiReelsBlobMobile className="project__blob-mobile project__blob-mobile--lofi"/>
          </div>
        </div> */}