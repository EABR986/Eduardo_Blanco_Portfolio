import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id="experience">
      <h5>
        What Skills I Have
      </h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>HTML 5</h4>
                <small className='text-light'>Experienced</small>
              </div>
             
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>CSS 3</h4>
              <small className='text-light'>Intermediate</small>
              </div>
              
            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Javascript</h4>
              <small className='text-light'>Intermediate</small> 
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Intermediate</small>
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Tailwind</h4>
              <small className='text-light'>Intermediate</small>                
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>              
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Java</h4>
              <small className='text-light'>Basic</small>                
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Angular</h4>
              <small className='text-light'>Basic</small>                
                </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' /> 
             <div>
              <h4>Git</h4>
              <small className='text-light'>Intermediate</small>                
              </div>
              

            </article>
          </div>
          
          </div>
          <div className="experience__backend">
            <h3>Backend Development</h3>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Node JS</h4>
              <small className='text-light'>Intermediate</small>                
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Mongo DB</h4>
              <small className='text-light'>Basic</small>                
              </div>

            </article>
            <article className='experience__details'>
            <BsPatchCheckFill className='experience__detail-icon' />
              <div>
              <h4>Supabase</h4>
              <small className='text-light'>Basic</small>               
               </div>
              
            </article>
            
          </div>       
        
        </div>      



    </section>
  )
}

export default Experience