import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import Loader from 'react-loaders'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faNodeJs,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import oldPortfolio from '../../assets/images/protofolio.png'
import generator from '../../assets/images/generator.png'
import quiz from '../../assets/images/quiz.png'
import wds from '../../assets/images/wds.png'
import weather from '../../assets/images/weaher.png'
import pokewar from '../../assets/images/pokewar.png'

const About = () => {
  const [letterClass] = useState('text-animate')
  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'M', 'e']}
              idx={15}
            />
          </h1>
          <p>
            {' '}
            My name is Michael Harris I'm 34 and I’m from the San Francisco Bay
            Area. I have been coding for 6 months
          </p>
          <p>
            Currently, I am studying at UC Berkeley Extension to gain more
            experience in the world of developing and designing websites.
          </p>
          <p>
            I love learning new things, writing code that works, solving
            problems with creative solutions and taking vacations. If you are
            interested in talking more about my resume please email me directly
          </p>
        </div>
        <section className="section">
          <div className="reveal-card">
            <img src={oldPortfolio} alt=""></img>
            <div className="reveal-card__content">
              <h3 className="reveal-card__title">oldPortfolio</h3>
              <span className="reveal-card__subtitle">...</span>
              <p className="reveal-card__description">
                <a href="https://snufalufakis.github.io/Homework-2/">
                  <button type="button" className="btn">
                    View
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="reveal-card">
            <img src={generator} alt=""></img>
            <div className="reveal-card__content">
              <h3 className="reveal-card__title">password generator</h3>
              <span className="reveal-card__subtitle">...</span>
              <p className="reveal-card__description">
                <a href="https://snufalufakis.github.io/Homework-2/">
                  <button type="button" className="btn">
                    View
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="reveal-card">
            <img src={wds} alt=""></img>
            <div className="reveal-card__content">
              <h3 className="reveal-card__title">WorkDay Scheduler</h3>
              <span className="reveal-card__subtitle">...</span>
              <p className="reveal-card__description">
                <a href="https://snufalufakis.github.io/Homework-2/">
                  <button type="button" className="btn">
                    View
                  </button>
                </a>
              </p>
            </div>
          </div>
        </section>
        <section className="section2">
          <div className="reveal-card">
            <img src={weather} alt=""></img>
            <div className="reveal-card__content">
              <h3 className="reveal-card__title">Weather Api</h3>
              <span className="reveal-card__subtitle">...</span>
              <p className="reveal-card__description">
                <a href="https://snufalufakis.github.io/Homework-2/">
                  <button type="button" className="btn">
                    View
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="reveal-card">
            <img src={pokewar} alt=""></img>
            <div className="reveal-card__content">
              <h3 className="reveal-card__title">PokeWar</h3>
              <span className="reveal-card__subtitle">...</span>
              <p className="reveal-card__description">
                <a href="https://snufalufakis.github.io/Homework-2/">
                  <button type="button" className="btn">
                    View
                  </button>
                </a>
              </p>
            </div>
          </div>
          <div className="reveal-card">
            <img src={quiz} alt=""></img>
            <div className="reveal-card__content">
              <h3 className="reveal-card__title">Quiz</h3>
              <span className="reveal-card__subtitle">...</span>
              <p className="reveal-card__description">
                <a href="https://snufalufakis.github.io/Homework-2/">
                  <button type="button" className="btn">
                    View
                  </button>
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faNodeJs} color="#215732" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
