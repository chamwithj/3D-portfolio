import React from 'react'
import NavBar from './sections/NavBar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import Experiences from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <div class = "container mx-auto max-w-7xl">
      <NavBar/>
      <Hero />
      <About />
      < Projects />
      < Experiences />
      < Contact />
      < Footer />
    </div>
  )
}

export default App