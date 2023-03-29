import React, { useState } from 'react';
import './experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsBriefcase as WorkIcon} from 'react-icons/bs';
import { FaUserGraduate as SchoolIcon} from 'react-icons/fa';


const Experience = () => {

  const work = [
    {
      id: 1,
      Date: 'Current',
      Title: 'Doing Freelance',
      Company: 'UpWork, Onlinejobs',
      Icon: WorkIcon
    },
    {
      id: 2,
      Date: '2020 - 2022',
      Title: 'ESL (English as a Second Language)Teacher',
      Company: '51 TALK',
      Icon: WorkIcon
    },
    {
      id: 3,
      Date: '2017 - 2020',
      Title: `Electronic equipment assembling`,
      Company: 'Hitachi-Johnson — Japan',
      Icon: WorkIcon
    },
  ];
  const school = [
    {
      id: 1,
      Date: '2022 - Present',
      Title: 'Web Development',
      Company: 'Refocus Digital Academy',
      Icon: SchoolIcon
    },
    {
      id: 2,
      Date: '2016 - 2017',
      Title: 'Japanese Language',
      Company: 'PHIL-NIPPON TECHNICAL COLLEGE',
      Icon: SchoolIcon
    },
    {
      id: 3,
      Date: '2010 - 2015',
      Title: `B.S in Computer Engineering`,
      Company: 'University of Cebu-Lapu-Lapu & Mandaue',
      Icon: SchoolIcon
    },
  ];

  const [timeline, setTimeline] = useState(work);
  const exp = document.getElementById('title-exp');
  const edu = document.getElementById('title-edu');


  return (
    <section id='experience' className='experience-body'>
      <h5
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >My Personal Journey</h5>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >Qualification</h2>

      <article
        data-aos="fade-right"
        data-aos-delay="500"
        data-aos-duration="500"
      >
        <div className='qualification-container'>
          <div className='qualifcation-category'>
            <button id='title-exp' className='experience click' onClick={()=> {
              console.log(exp);
              /* exp.classList.add('click');
              edu.classList.remove('click'); */
              setTimeline(work);
            }}>Experience</button>
            <button id='title-edu' className='education' onClick={()=> {
              console.log(edu);
              /* exp.classList.remove('click');
              edu.classList.add('click'); */
              setTimeline(school);
            }}>Education</button>
          </div>
          <VerticalTimeline lineColor={'#4db5ff'} animate={false}>
            {timeline?.map(({id, Date, Title, Company, Icon}) => {
              return (
                <VerticalTimelineElement
                  key={id}
                  className="vertical-timeline-element--work"
                  contentStyle={{ background: 'transparent', color: '#4db5ff', boxShadow: 'none'}}
                  contentArrowStyle={{ borderRight: '7px solid  transparent' }}
                  date={Date}
                  iconStyle={{ background: '#4db5ff', color: '#fff' }}
                  icon={<Icon />}
                >
                  <h3 className="vertical-timeline-element-title">{Title}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{Company}</h4>
                </VerticalTimelineElement>
              )
            })}  
          </VerticalTimeline>
        </div>        
      </article>

      
    </section>
  )
}

export default Experience