import React from 'react'
import './header.css'
import CTA from './Cta'
import ME from '../../assets/me.jpeg'
import HeadreSocials from './HeadreSocials'

const Header = () => {
  return (
   <header>
      <div className="container header__container">
        <h5>Hello I´m,</h5>
        <h1>Eduardo</h1>
        <h5 className="text-light">I´m a Full Stack Developer</h5>
        <CTA />
        <HeadreSocials />

        <div className="me">
          <img src ={ME} alt="me" className='meImage' />
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>


      </div>
   </header>  )
}

export default Header