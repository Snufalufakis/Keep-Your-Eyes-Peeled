import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './componets/Layout'
import Home from './componets/Home'
import Contact from './componets/Contact/index'
import About from './componets/About/index'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
