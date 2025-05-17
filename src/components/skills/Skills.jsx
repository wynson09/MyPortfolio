import React from "react";
import "./skills.css";
import react from "../../assets/img-icon/react.png";
import html from "../../assets/img-icon/html.png";
import css from "../../assets/img-icon/css.png";
import javascript from "../../assets/img-icon/js.png";
import tailwind from "../../assets/img-icon/tailwind.png";
import sass from "../../assets/img-icon/Sass.png";
import jquery from "../../assets/img-icon/jquery.png";
import php from "../../assets/img-icon/php.png";
import mysql from "../../assets/img-icon/MySQL.png";
import sanity from "../../assets/img-icon/Sanity.png";
import github from "../../assets/img-icon/github.png";
import node from "../../assets/img-icon/node.png";
import figma from "../../assets/img-icon/figma.png";
import postman from "../../assets/img-icon/postman.png";
import photoshop from "../../assets/img-icon/ps.png";
import aws from "../../assets/img-icon/aws.png";
import cursor from "../../assets/img-icon/cursor.png";
import wordpress from "../../assets/img-icon/wp.png";
import elementor from "../../assets/img-icon/elementor.png";
import nextjs from "../../assets/img-icon/nextjs.png"
import asana from "../../assets/img-icon/asana.png"
import bitbucket from "../../assets/img-icon/bitbucket.png"
import bootstrap from "../../assets/img-icon/bootstrap.png"
import dbeaver from "../../assets/img-icon/dbeaver.png"
import docker from "../../assets/img-icon/docker.png"
import firebase from "../../assets/img-icon/firebase.png"
import graphql from "../../assets/img-icon/graphql.png"
import kotlin from "../../assets/img-icon/kotlin.png"
import laravel from "../../assets/img-icon/laravel.png"
import mui from "../../assets/img-icon/mui.png"
import redux from "../../assets/img-icon/redux.png"
import shadcn from "../../assets/img-icon/shadcn.png"
import slack from "../../assets/img-icon/slack.png"
import typescript from "../../assets/img-icon/typescript.png"
import mongodb from "../../assets/img-icon/mongodb.png"
import express from "../../assets/img-icon/express.png"
import { HiCode } from "react-icons/hi";
import { FaCodeBranch } from "react-icons/fa";
import { GiSkills } from "react-icons/gi";

const Skills = ({ skillsRef }) => {
  const frontEnd = [
    {
      id: 1,
      skillName: "ReactJS",
      src: react,
      level: "Advanced",
    },
    {
      id: 2,
      skillName: "NextJS",
      src: nextjs,
      level: "Advanced",
    },
    {
      id: 3,
      skillName: "TypeScript",
      src: typescript,
      level: "Advanced",
    },
    {
      id: 4,
      skillName: "JavaScript",
      src: javascript,
      level: "Advanced",
    },
    {
      id: 5,
      skillName: "Redux",
      src: redux,
      level: "Advanced",
    },
    {
      id: 6,
      skillName: "Tailwind",
      src: tailwind,
      level: "Intermediate",
    },
    {
      id: 7,
      skillName: "MUI",
      src: mui,
      level: "Intermediate",
    },
    {
      id: 8,
      skillName: "Bootstrap",
      src: bootstrap,
      level: "Intermediate",
    },
    {
      id: 9,
      skillName: "Shadcn",
      src: shadcn,
      level: "Intermediate",
    },
    {
      id: 10,
      skillName: "Sass",
      src: sass,
      level: "Advanced",
    },
    {
      id: 11,
      skillName: "jQuery",
      src: jquery,
      level: "Advanced",
    },
    {
      id: 12,
      skillName: "HTML",
      src: html,
      level: "Advanced",
    },
    {
      id: 13,
      skillName: "CSS",
      src: css,
      level: "Advanced",
    },
    {
      id: 14,
      skillName: "WordPress",
      src: wordpress,
      level: "Intermediate",
    },
  ];
  const backEnd = [
    {
      id: 1,
      skillName: "NodeJS",
      src: node,
      level: "Advanced",
    },
    {
      id: 2,
      skillName: "Express",
      src: express,
      level: "Advanced",
    },
    {
      id: 3,
      skillName: "Firebase",
      src: firebase,
      level: "Advanced",
    },
    {
      id: 4,
      skillName: "MongoDB",
      src: mongodb,
      level: "Advanced",
    },
    {
      id: 5,
      skillName: "MySQL",
      src: mysql,
      level: "Advanced",
    },
    {
      id: 6,
      skillName: "GraphQL",
      src: graphql,
      level: "Intermediate",
    },
    {
      id: 7,
      skillName: "Laravel",
      src: laravel,
      level: "Intermediate",
    },
    {
      id: 8,
      skillName: "Kotlin",
      src: kotlin,
      level: "Intermediate",
    },
    {
      id: 9,
      skillName: "php",
      src: php,
      level: "Intermediate",
    },
    {
      id: 10,
      skillName: "Sanity",
      src: sanity,
      level: "Basic",
    },
  ];
  const others = [
    {
      id: 1,
      skillName: "GitHub",
      src: github,
      level: "Advanced",
    },
    {
      id: 2,
      skillName: "Bitbucket",
      src: bitbucket,
      level: "Advanced",
    },
    {
      id: 3,
      skillName: "DBeaver",
      src: dbeaver,
      level: "Advanced",
    },
    {
      id: 4,
      skillName: "Slack",
      src: slack,
      level: "Advanced",
    },
    {
      id: 5,
      skillName: "Asana",
      src: asana,
      level: "Advanced",
    },
    {
      id: 6,
      skillName: "Postman",
      src: postman,
      level: "Intermediate",
    },
    {
      id: 7,
      skillName: "Elementor",
      src: elementor,
      level: "Intermediate",
    },
    {
      id: 8,
      skillName: "Docker",
      src: docker,
      level: "Basic",
    },
    {
      id: 9,
      skillName: "Figma",
      src: figma,
      level: "Basic",
    },
    {
      id: 10,
      skillName: "Photoshop",
      src: photoshop,
      level: "Basic",
    },
    {
      id: 11,
      skillName: "AWS",
      src: aws,
      level: "Basic",
    },
    {
      id: 12,
      skillName: "Cursor",
      src: cursor,
      level: "Intermediate",
    },
  ];

  return (
    <section id="skills" className="skill-box">
      <h5 data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
        What skills I have
      </h5>
      <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="500" data-aos-once="true">
        My Technical Skills
      </h2>
      <article className="skills-container" ref={skillsRef}>
        <div data-aos="fade-right" data-aos-delay="700" data-aos-duration="500" data-aos-once="true">
          <div className="front-end">
            <div className="category">
              <HiCode className="category-icon" />
              <h2>Front-End</h2>
            </div>
            <ul className="prof-skills">
              {frontEnd.map((index) => {
                return (
                  <li className="skill" key={index.id}>
                    <img src={index.src} alt="icon" />
                    <h5>{index.skillName}</h5>
                    <small>{index.level}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="600" data-aos-duration="500" data-aos-once="true">
          <div className="back-end">
            <div className="category">
              <FaCodeBranch className="category-icon" />
              <h2>Back-End</h2>
            </div>
            <ul className="prof-skills">
              {backEnd.map((index) => {
                return (
                  <li className="skill" key={index.id}>
                    <img src={index.src} alt="icon" />
                    <h5>{index.skillName}</h5>
                    <small>{index.level}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div data-aos="fade-right" data-aos-delay="500" data-aos-duration="500" data-aos-once="true">
          <div className="others">
            <div className="category">
              <GiSkills className="category-icon" />
              <h2>Others</h2>
            </div>
            <ul className="prof-skills">
              {others.map((index) => {
                return (
                  <li className="skill" key={index.id}>
                    <img src={index.src} alt="icon" />
                    <h5>{index.skillName}</h5>
                    <small>{index.level}</small>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Skills;
