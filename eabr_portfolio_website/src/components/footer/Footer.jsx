import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      
      <ul className='permalinks'>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
      <a href="https://www.linkedin.com/in/eduardo-blanco-rivas-/" target="_blank" rel="noreferrer"><BsLinkedin />  </a>
       
        <a href="https://github.com/EABR986" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://www.instagram.com/eduardoblanco87/" target="_blanked"><FiInstagram /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2023, EABR. All rights reserved.</small>
      </div>


    </footer>
  )
}

export default Footer