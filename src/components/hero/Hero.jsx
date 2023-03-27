import React, { useEffect, useState } from 'react';
import './hero.css';
import CTA from './CTA';
import ME from '../../assets/me.png';
import ME2 from '../../assets/me-2.png';
import HeaderSocial from './HeroSocial';
import { Typewriter } from 'react-simple-typewriter';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectFlip, Pagination, Navigation } from "swiper";


const Header = () => {
  const [firstCursor, setFirstCursor] = useState('l');
  const [secondCursor, setSecondCursor] = useState('l');
  const [firstText, setFirstText] = useState(false);
  const [secondText, setSecondText] = useState(false);


  const nextText = (firstText) => {
    if(firstText){
      setTimeout(()=> {
        setSecondCursor('');
        setSecondText(true);
      }
      ,3000)
    }
    setTimeout(()=> {
      setFirstCursor('');
      setFirstText(true);
    }
    ,1500)
  }


  useEffect(() => {
    nextText(firstText);
  }, [firstCursor, firstText])
  
  return (
    <header className="container">
      <div className="header__container">
        <div className='typeWriter-container'>
          <h5>
            <Typewriter
                words={[`Hello I'm`]}
                cursor
                cursorStyle={firstCursor}
                typeSpeed={70}
                delaySpeed={1000} 
              />
          </h5>
          {firstText? (
            <h1>
              <Typewriter
                words={[`Wynson Carl Nacalaban`]}
                cursor
                cursorStyle={secondCursor}
                typeSpeed={70}
                delaySpeed={1000}
              />
            </h1>
          ) : (
            <></>
          )}
          {secondText? (
            <h5 className='text-light'>a 
              <span className='span-text'>
                  <Typewriter
                    words={[`Junior Front-End Developer`]}
                    cursor
                    cursorStyle='l'
                    typeSpeed={70}
                    delaySpeed={1000}
                  />
              </span>
            </h5>
          ) : (
            <></>
          )}
          <CTA />
          <HeaderSocial />
        </div>
            
        <div className='img-container' 
        data-aos="slide-left"
        data-aos-delay="100"
        data-aos-duration="800">
            <Swiper
              effect={"flip"}
              grabCursor={true}
              pagination={true}
              navigation={false}
              modules={[EffectFlip, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
              <div className='me-container'>
                <div className='me'>
                  <img src={ME} alt="myPic" />
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='me-container'>
                <div className='me'>
                  <img src={ME2} alt="myPic" />
                </div>
              </div>
              </SwiperSlide>
            </Swiper>
        </div>
      </div>
    </header>
  )
}

export default Header