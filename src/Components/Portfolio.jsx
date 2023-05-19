/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/DTB.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Microsoft Learn Student Ambassadors | Perfil",
    description:
      "you can visit my MLSA profile, and get to know me a little bit better.",
    url: "https://studentambassadors.microsoft.com/es-ES/studentambassadors/profile/8f22a830-ba3d-4f4e-b4cd-4d1cd9c704f1",
  },
  {
    title: "Github | DTBCODEMX",
    description:
      "you will find a brief description of what I know how to do ",
    url: "https://github.com/DTBCODEMX",
  },
  {
    title: "My Resume Site",
    description:
      "One of my second pages which will lead you to know a little more, and find some gadgets.",
    url: "https://linktr.ee/dtbcode",
  },
  {
    title: "Discord Community | Coming soon",
    description:
      "Coming soon a discord community where you can learn and meet more members interested in technology and tools.",
    url: "",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h4 style={{ textAlign: "center" }}>Portfolio</h4>
      <div style={{ 
            display: "flex",
            flexDirection: "row",
            paddingTop: "3rem",
            backgroundColor: "#350076" }}>

        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "purple" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
