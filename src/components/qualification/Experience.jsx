import React, { useState } from 'react';
import './experience.css';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { BsBriefcase as WorkIcon} from 'react-icons/bs';
import { FaUserGraduate as SchoolIcon} from 'react-icons/fa';


const Experience = ({ qualificationRef }) => {

  const work = [
    {
      id: 1,
      Date: '2023 - Present',
      Title: 'Full Stack Web Developer',
      Company: 'Wind’s Gate Philippine Software Development Inc.',
      Icon: WorkIcon
    },
    {
      id: 2,
      Date: '2022 - 2023',
      Title: 'Freelance Software Developer',
      Company: 'UpWork, Onlinejobs',
      Icon: WorkIcon
    },
    {
      id: 3,
      Date: '2020 - 2021',
      Title: 'ESL (English as a Second Language)Teacher',
      Company: '51 TALK',
      Icon: WorkIcon
    },
    {
      id: 4,
      Date: '2017 - 2020',
      Title: `Electronic equipment assembling`,
      Company: 'Hitachi-Johnson — Japan',
      Icon: WorkIcon
    },
  ];
  const school = [
    {
      id: 1,
      Date: '2021 - 2022',
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
  const [expCls, setExpCls] = useState('experience click');
  const [eduCls, setEduCls] = useState('education');



  return (
    <section id='experience' className='experience-body' ref={qualificationRef}>
      <h5
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-once="true"
      >My Personal Journey</h5>
      <h2
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
        data-aos-once="true"
      >Qualification</h2>

      <article
        data-aos="fade-right"
        data-aos-delay="300"
        data-aos-duration="500"
        data-aos-once="true"
      >
        <div className='qualification-container'>
          <div className='qualifcation-category'>
            <button id='title-exp' className={expCls} onClick={()=> { setTimeline(work); setExpCls('experience click'); setEduCls('education'); }}>Experience</button>
            <button id='title-edu' className={eduCls} onClick={()=> { setTimeline(school); setExpCls('experience'); setEduCls('education click'); }}>Education</button>
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