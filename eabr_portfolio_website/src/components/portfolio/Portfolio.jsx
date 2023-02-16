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
      title: "Poke Dex",
      desc: "This is a vite act project that uses the pokeapi to fetch the data of the pokemon. The project manipulate the dom so it can display the data of the pokemon.",
      demo: 'https://poke-dex-lovat.vercel.app/',
      github: 'https://github.com/EABR986/poke-dex'
  },
  {
      id: 2,
      category: 'Frontend',
      image: IMG2,
      title: "tic-tac-toe",
    desc: "This is a React Vite Project that uses React hooks like useState and useEffect. The game is a two player game where the first player to get three in a row wins. The game also keeps track of the score and displays the winner of the game. The game also has a reset button that resets the game and the score.",
    demo: 'https://tic-tac-toe-eabr.vercel.app/',
        github: 'https://github.com/EABR986/tic-tac-toe'
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
      title: "Flip-colors",
      desc: " This is a Javascript vainilla project that uses the DOM to change the background color of the page. The project also uses the Math.random() method to generate random colors. The project also has a button that changes the background color of the page.",
      demo: 'https://flip-color-vite.vercel.app/',
        github: 'https://github.com/EABR986/Flip-color-vite'
  },
  {
    id: 5,
    category: 'Frontend',
    image: IMG5,
    title: "React authentification",
    desc: "This is a React Vite Project that uses Authorization and Authentication. The project uses Local host to store the user data. The project also uses React Router to navigate between the pages. The project also uses React hooks like useState and useEffect.",
    demo: 'https://react-auth-peach.vercel.app/',
        github: 'https://github.com/EABR986/react-auth'
  },
  {
    id: 6,
    category: 'Frontend',
    image: IMG6,
    title: "Drawing app",
    desc: "This is a simple drawing app using the canvas elememt in HTML. The project uses Canvas Api. It have many diferent Mouse events and properties for looking the mouse position. ",
    demo: 'https://drawing-app-kappa.vercel.app//',
        github: 'https://github.com/EABR986/drawing-app'
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
            <h4>{desc}</h4>
            <div className="portfolio__item-cta">
            <a href={github} className='btn' target='_blank' rel='noreferrer' >View Code</a>
            <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
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
