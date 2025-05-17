import React from "react";
import "./about.css";
import Me from "../../assets/me-about.png";
import CV from "../../assets/Wynson-Carl-Nacalaban-CV.pdf";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = ({ aboutRef }) => {
  return (
    <section id="about" ref={aboutRef}>
      <h5 data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true">
        Get to Know
      </h5>
      <h2 data-aos="fade-up" data-aos-delay="300" data-aos-duration="500" data-aos-once="true">
        About Me
      </h2>

      <div className="container about__container">
        <div data-aos="fade-up" data-aos-delay="700" data-aos-duration="500" data-aos-once="true">
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
          data-aos-once="true"
        >
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about_icon" />
              <h5>Experience</h5>
              <small>More than 3 years</small>
            </article>
            <article className="about__card">
              <FiUsers className="about_icon" />
              <h5>Clients</h5>
              <small>3 + Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about_icon" />
              <h5>Projects</h5>
              <small>7 + Completed</small>
            </article>
          </div>
          <p>
            A passionate Software Developer and Full-Stack Web Developer with over 3 years of 
            experience creating innovative web applications and digital solutions. As a career 
            shifter, I’ve built my expertise through hands-on projects and a passion for problem-solving.
          </p>
          <p className="about__me-text">
            Currently, I lead a team of developers, focusing on delivering impactful solutions that streamline 
            workflows and enhance user experiences. In my freelance work, I’ve helped clients digitize 
            processes and achieve their goals with tailored, efficient systems.
          </p>
          <p className="about__me-text">
            Outside of work, I’m dedicated to continuous learning and enjoy exploring new ideas to grow as a developer.
          </p>
          <a href={CV} download className="btn btn-primary about__me-text">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
