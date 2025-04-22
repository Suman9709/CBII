import React from 'react'
import NavBar from './Components/NavBar'
import HeroPage from './Components/HeroPage'
import About from './Components/About'
import Testimonial from './Components/Testimonial'
import Leadership from './Components/Leadership'
import Footer from './Components/Footer'

const App = () => {
  return (
    <div>
      <NavBar/>
      <HeroPage/>
      <About/>
      <Testimonial/>
      <Leadership/>
      <Footer/>
    </div>
  )
}

export default App