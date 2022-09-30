import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import Logo from '../../assets/images/logo-modified.png'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <Link className="logo" to="/">
      <img src={Logo} alt="logo" />
    </Link>
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4de" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className="about-link"
        to="/about"
      >
        <FontAwesomeIcon icon={faUser} color="#4d4d4de" />
      </NavLink>
      <NavLink
        exact="true"
        activeclassname="active"
        className=" contact-link"
        to="/contact"
      >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4de" />
      </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/michael-harris-235a1361/"
        >
          <FontAwesomeIcon icon={faLinkedin} color="#4d4d4de" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Snufalufakis/"
        >
          <FontAwesomeIcon icon={faGithub} color="#4d4d4de" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Snufalufakis2/"
        >
          <FontAwesomeIcon icon={faTwitter} color="#4d4d4de" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
