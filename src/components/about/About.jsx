import React from 'react'
import './about.css';
import Me from '../../assets/me-about.png';
import CV from '../../assets/CV.pdf';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';



const About = () => {
  return (
    <section id='about'>
      <h5
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="500"
      >
        Get to Know
      </h5>
      <h2
      data-aos="fade-up"
      data-aos-delay="300"
      data-aos-duration="500"
      >
        About Me
      </h2>

      <div className='container about__container'>
        <div className='about__me'
          data-aos="fade-right"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <div className='about__me-image'>
            <img src={Me} alt="about pic" />
          </div>
        </div>
        <div className='about__content'
          data-aos="fade-left"
          data-aos-delay="700"
          data-aos-duration="500"
        >
          <div className='about__cards'>
            <article className='about__card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>Less than a year</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>1 + Worldwide</small>
            </article>
            <article className='about__card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Projects</h5>
              <small>2 + Completed</small>
            </article>
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed dolorem tenetur repellat quis quas repudiandae, eligendi, quaerat, enim itaque molestias deleniti facere expedita esse alias id officia maiores provident vero!</p>
          <a href={CV} download className='btn btn-primary'>Download CV</a>
        </div>
      </div>
    </section>
  )
}

export default About