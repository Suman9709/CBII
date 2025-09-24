import React from 'react'
import HeroPage from './HeroPage'
import About from './About'
import Testimonial from './Testimonial'
import ScrolltoTop from './ScrolltoTop'
import { Link } from 'react-router-dom'
import PopUpDialog from './PopUpDialog'

const MainPage = () => {
  return (
    <div>
      <ScrolltoTop />
      <PopUpDialog />
      <HeroPage />
      <About />
      <Testimonial />

      <div className="bg-[#841B31] text-white py-6 px-3 sm:px-4 md:px-8 text-center rounded-t-xl shadow-2xl relative overflow-hidden">
        <div className="absolute -top-4 -left-4 text-5xl sm:text-6xl opacity-10 rotate-12">💡</div>
        <div className="absolute -bottom-4 -right-4 text-5xl sm:text-6xl opacity-10 -rotate-12">🚀</div>

        <h1 className="text-base sm:text-lg md:text-2xl font-bold mb-3 flex justify-center items-center gap-2">
          💡 “Have an idea? <span className="text-yellow-300">Let’s build it together.”</span>
        </h1>

        <p className="text-sm sm:text-base md:text-lg mb-5">
          🚀 Join our incubation program and turn your vision into reality!
        </p>

        <div className="flex justify-center gap-3 flex-wrap">
          <Link
            to={"/incubationprogramregistration"}
            className="bg-white text-[#841B31] px-5 py-2 rounded-full text-sm sm:text-base font-semibold shadow hover:bg-gray-100 transition duration-300"
          >
            Apply Now
          </Link>
        </div>
      </div>




    </div>
  )
}

export default MainPage