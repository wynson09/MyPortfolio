import React from 'react';
import './contact.css';
import { TfiEmail } from 'react-icons/tfi';
import { BsMessenger } from 'react-icons/bs';

const Contact = () => {
  return (
    <section id='contact' className='contact-body'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <TfiEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>wynsonnacalaban30@gmail.com</h5>
            <a href="mailto:wynsonnacalaban30@gmail.com" target='_blank'>Send a messenge</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Wynson Carl Nacalaban</h5>
            <a href="https://m.me/wynson30" target='_blank'>Send a messenge</a>
          </article>
        </div>
      {/* END OF CONTACT OPTIONS */}
          <form action="">
            <input type="name" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="messege" rows="7" placeholder='Your Messege' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Messege</button>
          </form>
        </div>
    </section>
  )
}

export default Contact