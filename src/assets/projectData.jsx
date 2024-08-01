import listainable from "./images/listainable.png";
import wndd from "./images/wn-dd.png";
import wn from "./images/wn.png";
import hifi from "./images/hifi.png";
import cassette from "./gifs/lofi_cassette_comp.gif";
import rp from "./gifs/lofi_record-player_comp.gif";
import tv from "./gifs/lofi_tv_comp.gif";

import { ReactComponent as ListainableBlobDesktop } from "./svg/listainable-blob-desktop.svg";
import { ReactComponent as ListainableBlobMobile } from "./svg/listainable-blob-mobile.svg";
import { ReactComponent as WnddBlobDesktop } from "./svg/wndd-blob-desktop.svg";
import { ReactComponent as WnddBlobMobile } from "./svg/wndd-blob-mobile.svg";
import { ReactComponent as WnBlobDesktop } from "./svg/wn-blob-desktop.svg";
import { ReactComponent as WnBlobMobile } from "./svg/wn-blob-mobile.svg";
import { ReactComponent as HifiBlobDesktop } from "./svg/hifi-blob-desktop.svg";
import { ReactComponent as HifiBlobMobile } from "./svg/hifi-blob-mobile.svg";
import { ReactComponent as LofiReelsBlobDesktop } from "./svg/lofi-reels-blob-desktop.svg";
import { ReactComponent as LofiReelsBlobMobile } from "./svg/lofi-reels-blob-mobile.svg";

const projects = [
  {
    title: 'Listainable',
    summary: 'A grocery list app that enables consumers to shop more sustainably. Listainable uses a REST API, Express, Node.js, MySQL and Knex.js for CRUD operations and refining data from the OpenFoodFacts API. Users are able to search for items and add them to their list. They are also given an average eco-score based on their list content.',
    role: 'Web Developer',
    tools: 'React, Sass, Express, MySQL, Node.js, Knex.js, Express, Fuse.js, Axios, Git',
    image: listainable,
    imageAlt: 'Screenshot of Listainable app',
    link: 'https://app.supademo.com/demo/clzah1r6x4wdyz9kd7fxswk2d',
    btn: "View Demo",
    blobs: {
      desktop: ListainableBlobDesktop,
      mobile: ListainableBlobMobile,
    },
  },
  {
    title: 'Woody Nelson Direct Delivery',
    summary: 'As part of building our brand and expanding our sales channels we were tasked with creating a direct delivery website for wholesalers to buy our products from across Canada. I was tasked with leading this project, working alongside our Senior Designer and Graphic Designer to layout the website. From there, I led the building and customization on Shopify.',
    role: 'Web Designer and Front-End Developer',
    tools: 'Shopify, Figma, Illustrator, Photoshop',
    image: wndd,
    imageAlt: "Screenshot of Woody Nelson's Direct Delivery website",
    link: 'https://shop.woodynelson.ca/',
    btn: "View Site",
    blobs: {
      desktop: WnddBlobDesktop,
      mobile: WnddBlobMobile,
    },
    blobClasses: {
        desktop: "project__blob--wndd",
        mobile: "project__blob-mobile--wndd"
    },
    isReversed: true,
  },
  {
    title: 'Woody Nelson Website',
    summary: 'Woody Nelson is a Licensed Producer of Cannabis based in Nelson BC. As part of my time as Digital Marketing Specialist I was tasked to build a website for our brand launch. I worked in collaboration with the Senior designer and Graphic Designer to create the layouts in Figma, and built the website in Webflow myself.',
    role: 'Webflow Developer',
    tools: 'Figma, Webflow, Illustrator, Photoshop, Adobe After Effects',
    image: wn,
    imageAlt: "Screenshot of Woody Nelson's brand website",
    link: 'https://www.woodynelson.ca/',
    btn: "View Site",
    blobs: {
      desktop: WnBlobDesktop,
      mobile: WnBlobMobile,
    },
    blobClasses: {
        desktop: "project__blob--wn",
        mobile: "project__blob-mobile--wn"
    }
  },
  {
    title: 'High Fidelity Website',
    summary: 'High Fidelity Solventless is a Licensed Producer of solventless cannabis extracts. As they refined their product they needed a website for their brand launch. I worked with our Senior Designer and Graphic Designer on layouts in Figma, and built the website on Webflow myself.',
    role: 'Webflow Developer',
    tools: 'Figma, Webflow, Illustrator, Photoshop, Adobe After Effects',
    image: hifi,
    imageAlt: "Screenshot of High Fidelity Solventless brand website",
    link: 'https://www.highfidelitysolventless.com/',
    btn: "View Site",
    blobs: {
      desktop: HifiBlobDesktop,
      mobile: HifiBlobMobile,
    },
    blobClasses: {
        desktop: "project__blob--hifi",
        mobile: "project__blob-mobile--hifi"
    },
    isReversed: true,
  },
  {
    title: 'LoFi Instagram Reels',
    summary: 'While working for Woody Nelson I was managed Social Media for them and their subsidiaries, LoFi being one of them. I was tasked with creating Reels that encapsulated the brand and connected with both the LoFi music and art audience, as well as the CBD consumers.',
    role: 'Social Media Manager, Animator',
    tools: 'After Effects, Illustrator, Loomly, Buffer',
    image: cassette,
    imageAlt: 'GIF of an animated cassette with a colorful outline moving to music',
    additionalImages: [
      { src: rp, alt: 'GIF of a record spinning on a record player' },
      { src: tv, alt: 'GIF if a TV with colorful waves and the LoFi logo' },
    ],
    link: 'https://www.instagram.com/reel/CbJNEWlPEAW/',
    btn: "View More",
    blobs: {
      desktop: LofiReelsBlobDesktop,
      mobile: LofiReelsBlobMobile,
    },
    blobClasses: {
        desktop: "project__blob--reels",
        mobile: "project__blob-mobile--reels"
    },
    reelsClasses: {
        0: "project__img--cassette",
        1: "project__img--rp",
        2: "project__img--tv",
        3: "project__img-container--reels"
    },
    isReels: true,
  },
];

export default projects;