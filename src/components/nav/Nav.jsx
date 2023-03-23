import React from 'react';
import './nav.css';
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai';
import { BiCodeBlock, BiBook, BiMessageSquareDetail } from 'react-icons/bi';
import { BsFileEarmarkCode } from 'react-icons/bs';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="/#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiCodeBlock /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsFileEarmarkCode /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav