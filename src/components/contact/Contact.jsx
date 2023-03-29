import React, { useRef, useState } from 'react';
import './contact.css';
import { TfiEmail } from 'react-icons/tfi';
import { BsMessenger, BsSendCheck, BsSend } from 'react-icons/bs';
import emailjs from '@emailjs/browser';


const Contact = ({ contactRef }) => {
  const [sndMsg, setSndMsg] = useState(false);
  const [msgIcon, setMsgIcon] = useState(<BsSend />);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setSndMsg(true);
    setMsgIcon(<BsSendCheck />);

    emailjs.sendForm('service_mt3wgn7', 'template_uhjz6b2', form.current, 'geUCz0mPZ6PqTDW23')
      .then(() => {
        e.target.reset();
        setTimeout(()=> {
          setMsgIcon(<BsSend />);
          setSndMsg(false);
        }, 2000)       
      })
    
  };
  return (
    <section id='contact' className='contact-body' ref={contactRef}>
      <h5
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >Get In Touch</h5>
      <h2
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
      >Contact Me</h2>

      <div className='container contact__container'>
        <div
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="500"
        >
          <div className='contact__options'>
            <article className='contact__option'>
              <TfiEmail className='contact__option-icon'/>
              <h4>Email</h4>
              <h5>wynsonnacalaban30@gmail.com</h5>
              <a href="mailto:wynsonnacalaban30@gmail.com" target='_blank'>Send a message</a>
            </article>
            <article className='contact__option'>
              <BsMessenger className='contact__option-icon'/>
              <h4>Messenger</h4>
              <h5>Wynson Carl Nacalaban</h5>
              <a href="https://m.me/wynson30" target='_blank'>Send a message</a>
            </article>
          </div>          
        </div>

      {/* END OF CONTACT OPTIONS */}
          <form ref={form} onSubmit={sendEmail}
            data-aos="fade-up"
            data-aos-delay="700"
            data-aos-duration="500"
          >
            <input type="name" name="name" placeholder='Your Full Name' required />
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
            <button type='submit' className='btn btn-primary msg-btn'><span className='msgIcon'>{msgIcon}</span>{sndMsg ? `Message Sent`  : 'Send Message'}</button>
          </form>
      </div>
    </section>
  )
}

export default Contact