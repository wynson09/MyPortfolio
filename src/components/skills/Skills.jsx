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
import { HiCode } from 'react-icons/hi';
import { FaCodeBranch } from 'react-icons/fa';
import { GiSkills } from 'react-icons/gi';



const Skills = () => {
  return (
    <section id='skills' className='skill-box'>
      <h5>What skills I have</h5>
      <h2>My Technical Skills</h2>
      <article className='skills-container'>
        <div className='front-end'>
          <div className='category'>
            <HiCode className='category-icon'/>
            <h2>Front-End</h2>
          </div>
          <ul className='prof-skills'>
            <li className="skill">
              <img src={react} alt="icon" />
              <h5>React</h5>
              <small>Intermediate</small>
            </li>
            <li className="skill">
              <img src={html} alt="icon" />
              <h5>HTML</h5>
              <small>Intermediate</small>
            </li>
            <li className="skill">
              <img src={css} alt="icon" />
              <h5>CSS</h5>
              <small>Intermediate</small>
            </li>
            <li className="skill">
              <img src={javascript} alt="icon" />
              <h5>JavaScipt</h5>
              <small>Intermediate</small>
            </li>
            <li className="skill">
              <img src={tailwind} alt="icon" />
              <h5>Tailwind</h5>
              <small>Intermediate</small>
            </li>
            <li className="skill">
              <img src={sass} alt="icon" />
              <h5>Sass</h5>
              <small>Intermediate</small>
            </li>
            <li className="skill">
              <img src={jquery} alt="icon" />
              <h5>jquery</h5>
              <small>Basic</small>
            </li>
          </ul>
        </div>
        <div className='back-end'>
          <div className='category'>
            <FaCodeBranch className='category-icon'/>
            <h2>Back-End</h2>
          </div>
          <ul className='prof-skills'>
            <li className="skill">
              <img src={sanity} alt="icon" />
              <h5>Sanity</h5>
              <small>Basic</small>
            </li>
            <li className="skill">
              <img src={sanity} alt="icon" />
              <h5>Node.js</h5>
              <small>Basic</small>
            </li>
            <li className="skill">
              <img src={php} alt="icon" />
              <h5>php</h5>
              <small>Basic</small>
            </li>
            <li className="skill">
              <img src={mysql} alt="icon" />
              <h5>MySQL</h5>
              <small>Basic</small>
            </li>
          </ul>
        </div>
        <div className='others'>
          <div className='category'>
            <GiSkills className='category-icon'/>
            <h2>Others</h2>
          </div>
          <ul className='prof-skills'>
            <li className="skill">
              <img src={github} alt="icon" />
              <h5>GitHub</h5>
              <small>Intermediate</small>
            </li>
          </ul>
        </div>
      </article>
    </section>
  )
}

export default Skills