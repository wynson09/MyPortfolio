import React from "react";
import "./portfolio.css";
import PortfolioImg from "../../assets/portfolio-img/portfolio-1.png";
import Facegram from "../../assets/portfolio-img/facegram.png";
import CV from "../../assets/portfolio-img/CV.png";
import Refocus from "../../assets/portfolio-img/refocus.png";
import design from "../../assets/portfolio-img/button.png";
import CardTrick from "../../assets/cardMagic.png";
import Project01 from "../../assets/portfolio-img/project01.png";

const Portfolio = ({ portfolioRef }) => {
  const projects = [
    {
      id: 1,
      img: Project01,
      Title: "Digital Agency",
      Description: `Personal project using WordPress. I built this digital agency website from scratch as my personal project. I just used free hosting from x10hosting.com for this project.`,
      Tech: `Tech used: Wordpress, Elementor, Essential Addons, MetForm`,
      Git: "https://github.com/wynson09?tab=repositories",
      Live: "https://wnproject01.store/",
      Delay: "300",
    },
    {
      id: 2,
      img: CardTrick,
      Title: "Card Trick",
      Description: `This is a 21-card magic trick.  I decided to implement a card trick like I used to play when I was a kid`,
      Tech: `Tech used: React, Tailwind, Framer motion, SwiperJS, React-typewriter and other React components`,
      Git: "https://github.com/wynson09/Card-Magic.git",
      Live: "https://cardmagic.pages.dev/",
      Delay: "400",
    },
    {
      id: 3,
      img: PortfolioImg,
      Title: "Portfolio",
      Description: `My personal portfolio website It's a simple portfolio with contact options such as email, messenger, or direct message.`,
      Tech: `Tech used: React, CSS, React Icons, SwiperJS, React-typewriter and other React components`,
      Git: "https://github.com/wynson09/MyPortfolio.git",
      Live: "https://wynson30.pages.dev/",
      Delay: "600",
    },
    {
      id: 4,
      img: Facegram,
      Title: "Facegram",
      Description: `Facegram is the same concept as Pinterest. Image sharing and social media service designed to enable the saving and discovery of information on the internet using images and, on a smaller scale, animated GIFs in the form of pinboards.`,
      Tech: `Tech used: React, Tailwind, React Icons, Sanity, OAuth, Unplash `,
      Git: "https://github.com/wynson09/facegram_v2.git",
      Live: "https://face-gram.netlify.app/",
      Delay: "100",
    },
    {
      id: 5,
      img: Refocus,
      Title: "Refocus News Website",
      Description: `This is an Individual Project in Refocus Web Development Course. The goal of this project is to create a news website. Functionality features are : Mark news as “read", Mark news as “favorite", Delete news from news feed results.`,
      Tech: `Tech used: HTML, Sass, JavaScript`,
      Git: "https://github.com/wynson09/News-Website.git",
      Live: "https://wynson09.github.io/News-Website/",
      Delay: "300",
    },
    {
      id: 6,
      img: CV,
      Title: "Online Resume",
      Description: `This is an Individual Project in Refocus Web Development Course. The goal of this project is to  create this online resume as a website, so you will be able to share it with anyone and make it responsive.`,
      Tech: `Tech used: HTML, CSS`,
      Git: "https://github.com/wynson09/Nacalaban-CV.git",
      Live: "https://wynson.pages.dev/",
      Delay: "500",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-body" ref={portfolioRef}>
      <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
        My Recent Work
      </h5>
      <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
        Portfolio
      </h2>
      <article className="portfolio__container">
        {projects.map(
          ({ id, img, Title, Description, Tech, Git, Live, Delay }) => {
            return (
              <div
                key={id}
                data-aos="fade-up"
                data-aos-delay={Delay}
                data-aos-duration="500"
                data-aos-once="true"
              >
                <div className="portfolio__item">
                  <div className="btn-design">
                    <img src={design} alt="" />
                  </div>
                  <div className="portfolio__item-img">
                    <img src={img} alt="item-img" />
                  </div>
                  <h3>{Title}</h3>
                  <p>{Description}</p>
                  <div>
                    <h4 className="port-h4">{Tech}</h4>
                  </div>
                  <div className="btn-portfolio">
                    <a
                      href={Git}
                      className="btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={Live}
                      className="btn btn-primary"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </article>
    </section>
  );
};

export default Portfolio;
