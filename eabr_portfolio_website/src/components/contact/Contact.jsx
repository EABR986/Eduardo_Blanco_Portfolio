import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
const form = useRef();
const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_it3yi4e', 'template_zze4vth', form.current, 'PJgSBCV9FqYJl7rR0')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset()
};

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2> Contact Me</h2>

      <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon' />
          <h4>Email</h4>
          <a href="mailto:eduardoblanco1987@gmail.com">Send Email</a>
        </article>
        <article className="contact__option">
          <BsLinkedin className='contact__option-icon' />
          <h4>LinkedIn</h4>
          <a href="https://www.linkedin.com/in/eduardo-blanco-rivas-/" target="_blanked">Contact me</a>
        </article>
        <article className="contact__option">
          <FaWhatsapp className='contact__option-icon' />
          <h4>Whatsapp</h4>
          <a href="https://wa.me/34602488895?text=mensaje" target="_blanked">Chat With Me </a>
        </article>


      </div>
      <form ref={form} onSubmit={sendEmail} >
        <input type="text" name='name' placeholder="Your Full Name" required/>
        <input type="email" name='email' placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message here" required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>

      </form>
    </div>
    </section>
  )
}

export default Contact