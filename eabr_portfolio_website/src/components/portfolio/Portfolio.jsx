import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/project1.jpg'
import IMG2 from '../../assets/project2.jpg'
import IMG3 from '../../assets/project3.jpg'
import IMG4 from '../../assets/project4.jpg'
import IMG5 from '../../assets/project5.jpg'
import IMG6 from '../../assets/project6.jpg'

const data = [
  {
      id: 1,
      category: 'Frontend',
      image: IMG1,
      title: "Avengers App",
      desc: "esto es una descripcion",
      demo: 'http://egatortutorials.com',
      github: 'https://github.com/EABR986'
  },
  {
      id: 2,
      category: 'Frontend',
      image: IMG2,
      title: "Avengers App",
      desc: "esto es una descripcion",
      demo: 'http://egatortutorials.com',
        github: 'https://github.com/EABR986'
  },
  {
    id: 3,
    category: 'Frontend',
    image: IMG3,
    title: "Avengers App",
    desc: "esto es una descripcion",
    demo: 'http://egatortutorials.com',
        github: 'https://github.com/EABR986'
  },
  {
      id: 4,
      category: 'Frontend',
      image: IMG4,
      title: "Avengers App",
      desc: "esto es una descripcion",
      demo: 'http://egatortutorials.com',
        github: 'https://github.com/EABR986'
  },
  {
    id: 5,
    category: 'Frontend',
    image: IMG5,
    title: "Avengers App",
    desc: "esto es una descripcion",
    demo: 'http://egatortutorials.com',
        github: 'https://github.com/EABR986'
  },
  {
    id: 6,
    category: 'Frontend',
    image: IMG6,
    title: "tic-tac-toe",
    desc: "esto es una descripcion",
    demo: 'http://egatortutorials.com',
        github: 'https://github.com/EABR986'
  }
]


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h2>My Recent Work</h2>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      {
        data.map(({id, category, image, title, desc, demo, github}) => {
          return(
            <artice key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </artice>
          )
      })
      }
        

      </div>



    </section>
  )
}

export default Portfolio