import React from 'react';
import './skills.css';
import react from '../../assets/img-icon/react.png';
import html from '../../assets/img-icon/html.png';
import css from '../../assets/img-icon/css.png';
import javascript from '../../assets/img-icon/js.png';
import tailwind from '../../assets/img-icon/tailwind.png';
import sass from '../../assets/img-icon/Sass.png';
import jquery from '../../assets/img-icon/jquery.png';
import php from '../../assets/img-icon/php.png';
import mysql from '../../assets/img-icon/MySQL.png';
import sanity from '../../assets/img-icon/Sanity.png';
import github from '../../assets/img-icon/github.png';
import node from '../../assets/img-icon/node.png';
import figma from '../../assets/img-icon/figma.png';
import postman from '../../assets/img-icon/postman.png';
import photoshop from '../../assets/img-icon/ps.png';
import { HiCode } from 'react-icons/hi';
import { FaCodeBranch } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';



const Skills = () => {
  const frontEnd = [
    {
      id: 1,
      skillName: 'React',
      src: react,
      level: 'Intermediate'
    },
    {
      id: 2,
      skillName: 'HTML',
      src: html,
      level: 'Intermediate'
    },
    {
      id: 3,
      skillName: 'CSS',
      src: css,
      level: 'Intermediate'
    },
    {
      id: 4,
      skillName: 'JavaScript',
      src: javascript,
      level: 'Intermediate'
    },
    {
      id: 5,
      skillName: 'Tailwind',
      src: tailwind,
      level: 'Intermediate'
    },
    {
      id: 6,
      skillName: 'Sass',
      src: sass,
      level: 'Intermediate'
    },
    {
      id: 7,
      skillName: 'jQuery',
      src: jquery,
      level: 'Basic'
    },
  ];
  const backEnd = [
    {
      id: 1,
      skillName: 'Sanity',
      src: sanity,
      level: 'Basic'
    },
    {
      id: 2,
      skillName: 'NodeJS',
      src: node,
      level: 'Basic'
    },
    {
      id: 3,
      skillName: 'php',
      src: php,
      level: 'Basic'
    },
    {
      id: 4,
      skillName: 'MySQL',
      src: mysql,
      level: 'Basic'
    },
  ];
  const others = [
    {
      id: 1,
      skillName: 'GitHub',
      src: github,
      level: 'Intermediate'
    },
    {
      id: 2,
      skillName: 'Figma',
      src: figma,
      level: 'Basic'
    },
    {
      id: 3,
      skillName: 'Postman',
      src: postman,
      level: 'Basic'
    },
    {
      id: 4,
      skillName: 'Photoshop',
      src: photoshop,
      level: 'Basic'
    },
  ];

  
  return (
    <section id='skills' className='skill-box'>
      <h5
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        What skills I have
      </h5>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >
        My Technical Skills
      </h2>
      <article className='skills-container'>
        <div className='front-end'
          data-aos="fade-right"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <div className='category'>
            <HiCode className='category-icon'/>
            <h2>Front-End</h2>
          </div>
          <ul className='prof-skills'>
            {frontEnd.map((index) => {
              return (
              <li className="skill" key={index.id}>
                <img src={index.src} alt="icon" />
                <h5>{index.skillName}</h5>
                <small>{index.level}</small>
              </li>
              )
            })}
          </ul>
        </div>
        <div className='back-end'
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <div className='category'>
            <FaCodeBranch className='category-icon'/>
            <h2>Back-End</h2>
          </div>
          <ul className='prof-skills'>
          {backEnd.map((index) => {
              return (
              <li className="skill" key={index.id}>
                <img src={index.src} alt="icon" />
                <h5>{index.skillName}</h5>
                <small>{index.level}</small>
              </li>
              )
            })}
          </ul>
        </div>
        <div className='others'
          data-aos="fade-right"
          data-aos-delay="900"
          data-aos-duration="500"
        >
          <div className='category'>
            <GiSkills className='category-icon'/>
            <h2>Others</h2>
          </div>
          <ul className='prof-skills'>
          {others.map((index) => {
              return (
              <li className="skill" key={index.id}>
                <img src={index.src} alt="icon" />
                <h5>{index.skillName}</h5>
                <small>{index.level}</small>
              </li>
              )
            })}
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Skills