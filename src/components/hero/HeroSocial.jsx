import React from 'react'
import { BsLinkedin, BsGithub, BsFacebook } from 'react-icons/bs';


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="/https://www.linkedin.com/in/wynson-carl-nacalaban-63949a1b9/" target='_blank'><BsLinkedin /></a>
        <a href="/https://www.facebook.com/wynson30" target='_blank'><BsFacebook /></a>
        <a href="/https://github.com/wynson09" target='_blank'><BsGithub /></a>
    </div>
  )
}

export default HeaderSocial