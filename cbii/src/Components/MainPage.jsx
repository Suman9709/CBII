import React from 'react'
import HeroPage from './HeroPage'
import About from './About'
import Testimonial from './Testimonial'
import ScrolltoTop from './ScrolltoTop'
import { Link } from 'react-router-dom'

const MainPage = () => {
  return (
    <div>
      <ScrolltoTop />
      <HeroPage />
      <About />
      <Testimonial />

      <div className="bg-[#841B31] text-white py-6 px-4 md:px-8 text-center rounded-t-xl shadow-2xl mt-12 relative overflow-hidden">
        <div className="absolute -top-6 -left-6 text-7xl opacity-10 rotate-12">💡</div>
        <div className="absolute -bottom-6 -right-6 text-7xl opacity-10 -rotate-12">🚀</div>

        <h1 className="text-xl md:text-2xl font-bold mb-4 flex justify-center items-center gap-3">
          💡 “Have an idea? <span className="text-yellow-300">Let’s build it together.”</span>
        </h1>

        <p className="text-lg md:text-xl mb-6">
          🚀 Join our incubation program and turn your vision into reality!
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <Link
            to={"/incubationprogramregistration"}
            className="bg-white text-[#841B31] px-6 py-3 rounded-full font-semibold shadow hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </Link>

        </div>
      </div>



    </div>
  )
}

export default MainPage