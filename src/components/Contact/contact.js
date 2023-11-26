import React, {useRef } from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon - Copy.png';
import TwitterIcon from '../../assets/twitter.png';
import YouTubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b089q54', 'template_ug0ueq3', form.current, 'v_QXxpqbIyrIQeRksFDgA')
      .then((result) => {
          console.log(result.text);
          alert('Email Sent!');
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
    };
  return (
    <section id='contactPage'>
        <div id="clients">
            <h1 className="contactPageTitle">My Clients</h1>
            <p className="clientDesc">bla bla bla bla bla bla bla bla bla bla bla bla</p>
            <div className='clientImgs'>
                <img src={Walmart} alt="Walmart" className="clientImg" />
                <img src={Adobe}alt="Adobe" className="clientImg" />
                <img src={Microsoft} alt="Microsoft" className="clientImg" />
                <img src={Facebook} alt="Facebook" className="clientImg" />
            </div>
        </div>
        <div id="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">bla bla bla bla bla bla bla bla bla bla</span>
            <form className='contactForm' ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                <textarea className="msg" name="message" rows="5" placeholder='Your Message'></textarea>
                <button className="submitBtn" type='submit' value='send'>Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="Facebook" className="link" />
                    <img src={TwitterIcon} alt="Youtube" className="link" />
                    <img src={YouTubeIcon} alt="Twitter" className="link" />
                    <img src={InstagramIcon} alt="Instagram" className="link" />
                </div>
            </form>
        </div>
    </section>
  )
}

export default Contact