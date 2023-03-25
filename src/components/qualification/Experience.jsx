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
  const controller = (value) => {  
    if(value) {
      setTimeline(work);
      exp.classList.add('click');
      edu.classList.remove('click');
    }
    else {
      setTimeline(school);
      edu.classList.add('click');
      exp.classList.remove('click');
    }
  }


  return (
    <section id='experience' className='experience-body'>
      <h5>My Personal Journey</h5>
      <h2>Qualification</h2>

      <article className='qualification-container'>
        <div className='qualifcation-category'>
          <button id='title-exp' className='experience click' onClick={()=> controller(true)}>Experience</button>
          <button id='title-edu' className='education'onClick={()=> controller(false)}>Education</button>
        </div>
        <VerticalTimeline lineColor={'#4db5ff'}>
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
      </article>
      
    </section>
  )
}

export default Experience