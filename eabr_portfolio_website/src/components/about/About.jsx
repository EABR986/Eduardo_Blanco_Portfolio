import React from 'react'
import  './about.css'
import ME from '../../assets/mePic.jpg'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>

      <div className="about__container container">
        <div className="about__me">
          <div className="about__me-img">
            <img src={ME} 
            className='meImg'
          alt="about me" />
          </div>
          </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Experience</h5>
              <small>2+ years</small>
              </article>
              <article className='about__card'>
              <VscFolderLibrary className='about__icon' />
              <h5>Projects</h5>
              <small>10+ Projects</small>
              </article>
          </div>
          <p>
          I am a Full-Stack-junior developer who has more affinity with the front end using the React framework mainly and with the ability to manipulate, to a lesser extent, Angular.

It makes good use of JavaScript methods and logic such as manipulating the HTML Dom, as well as making use of libraries such as Tailwind and Bootstarp to create unique applications using CSS. Also, I have the ability to work with control systems mainly Git.

Although I have finished my training in the last year, I feel empowered to be able to apply what I have learned in any company and also to be able to learn from everything that is always needed in this world of development and that is always changing.

          </p>
          <a href="#contact" className="btn btn-primary" >Let`s Talk</a>
          
      </div>
    </div>
    </section>
  )
}

export default About