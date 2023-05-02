import React from "react";
import "./about.css";
import Me from "../../assets/me-about.png";
import CV from "../../assets/CV.pdf";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = ({ aboutRef }) => {
  return (
    <section id="about" ref={aboutRef}>
      <h5 data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        Get to Know
      </h5>
      <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="500">
        About Me
      </h2>

      <div className="container about__container">
        <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="500">
          <div className="about__me">
            <div className="about__me-image">
              <img src={Me} alt="about pic" />
            </div>
          </div>
        </div>

        <div
          className="about__content"
          data-aos="fade-up"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>Less than a year</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>1 + Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>4 + Completed</small>
            </article>
          </div>
          <p>
            Transitioning to a career in web development was a significant
            decision for me. While I initially pursued other paths after
            college, I ultimately realized that my true passion lay in web
            development. As a self-taught web developer, I have honed my
            abilities through online courses and challenging myself to
            continually learn and evolve in this fast-paced industry. I have
            dedicated myself to consistent practice and the development of
            real-world projects, which has allowed me to enhance my skills and
            gain valuable experience in web development.
          </p>
          <a href={CV} download className="btn btn-primary">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
