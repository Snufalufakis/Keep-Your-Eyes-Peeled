import { Link } from 'react-router-dom'
import './index.scss'
import { useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'
import { Loader } from 'react-loaders'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const nameArray = ['L', 'e', 't', "'s"]
  const jobArray = ['d', 'e', 'v', 'e', 'l', 'o', 'p', '!']

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h2 color="#fbfbf8">Michael Harris</h2>
          <h1>
            <span className={`${letterClass} _12`}>Hi,</span>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2 color="#fbfbf8">Full Stack Developer</h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
