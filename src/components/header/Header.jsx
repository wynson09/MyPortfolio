import React , { useState } from 'react';
import './header.css';
import DarkMode from './DarkMode';
import logo from '../../assets/logo.png';
import logo2 from '../../assets/logo-2.png';

const Header = () => {

  const [myLogo, setMyLogo] = useState(false);

  const themeStatus = (status) =>{
      if(status === false) setMyLogo(false)
      else setMyLogo(true) 
  }

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