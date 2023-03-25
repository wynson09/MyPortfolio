import React from 'react';
import './header.css';
import DarkMode from './DarkMode';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-2.png';

const Header = ({themeStatus, myLogo}) => {

  return (
    <div className='headerNav'>
        <div className='headerNav-container'>
            <a href='/#' className='hero-img'>
                {myLogo? (
                <img src={logo} alt="logo"/>
                ) : (
                <img src={logo2} alt="logo"/>
                )}
            </a>
            <DarkMode themeStatus={themeStatus}/>
        </div>
    </div>
  )
}

export default Header