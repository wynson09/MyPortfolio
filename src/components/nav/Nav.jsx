import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiCodeBlock } from 'react-icons/bi';
import { BsFileEarmarkCode, BsChatSquareText } from 'react-icons/bs';
import { MdOutlineSchool } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Nav = ({ onView }) => {
  const [activeNav, setActiveNav] = useState('#');

  useEffect(() => {
    setActiveNav(onView);
  }, [onView])
  
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiCodeBlock /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFileEarmarkCode /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><MdOutlineSchool /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BsChatSquareText /></a>
    </nav>
  )
}

export default Nav