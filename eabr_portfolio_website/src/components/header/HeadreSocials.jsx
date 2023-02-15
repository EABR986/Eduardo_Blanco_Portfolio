import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaWhatsapp} from 'react-icons/fa'

const HeadreSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/eduardo-blanco-rivas-/" target="_blank" rel="noreferrer"><BsLinkedin />  </a>
        <a href="https://github.com/EABR986" target="_blank" rel="noreferrer"><FaGithub /></a>
        <a href="https://wa.me/34602488895?text=mensaje" target="_blanked"><FaWhatsapp /></a>
        

    </div>
  )
}

export default HeadreSocials