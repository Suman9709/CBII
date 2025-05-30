import React from 'react'
import HeroPage from './HeroPage'
import About from './About'
import Testimonial from './Testimonial'
import ScrolltoTop from './ScrolltoTop'

const MainPage = () => {
  return (
    <div>
       <ScrolltoTop />
        <HeroPage/>
        <About />
        <Testimonial/>
    </div>
  )
}

export default MainPage