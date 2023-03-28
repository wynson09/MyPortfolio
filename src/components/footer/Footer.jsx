import React from 'react';
import './footer.css';
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer-logo'>
        <div className='footer-img'>
          <img src={logo} alt="logo"/>
        </div>
        <h3><span>W</span>ynson <span>N</span>acalaban</h3>
      </a>
      
      <ul className='permalinks'>
        <li><a href="/#" className='nav_style'>Home</a></li>
        <li><a href="#about" className='nav_style'>About</a></li>
        <li><a href="#skills" className='nav_style'>Skills</a></li>
        <li><a href="#portfolio" className='nav_style'>Portfolio</a></li>
        <li><a href="#experience" className='nav_style'>Qualification</a></li>
        <li><a href="#contact" className='nav_style'>Contact</a></li>
      </ul>

      <div className='header__socials footer-socials'>
        <a href="https://www.linkedin.com/in/wynson-carl-nacalaban-63949a1b9/" target='_blank'><BsLinkedin /></a>
        <a href="https://www.facebook.com/wynson30" target='_blank'><BsFacebook /></a>
        <a href="https://github.com/wynson09" target='_blank'><BsGithub /></a>
      </div>

    <div className='footer__copyright'>
      <small>&copy; Designed & Built by Wynson Nacalaban</small>
    </div>
    </footer>
  )
}

export default Footer