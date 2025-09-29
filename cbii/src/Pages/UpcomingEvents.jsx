import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsCard from "../Components/EventsCard";

import hackathonPic from '../Images/EventPoster/hackathon2025.webp'
import shivatech2025 from '../Images/EventPoster/shivatech2025.webp'
import sih2025 from '../Images/EventPoster/sih2025.jpg'
import UpcommingEventcard from "../Components/UpcommingEventCard";
import msmehackathon50 from '../Images/EventPoster/ideathon5.jpeg'
import ideathon from '../Images/EventPoster/ideathon5.png'

const UpcomingEvents = () => {

  const images = [ideathon, sih2025, hackathonPic];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length])
  return (

    <div className="w-full flex flex-col justify-center items-center p-2 ">

      <div className="relative w-full h-62 sm:h-80 md:h-[500px] overflow-hidden rounded-xl mb-4">
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-48 object-conatin flex-shrink-0 sm:h-80 md:h-[450px]"
              />
            ))
          }
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {
            images.map((_, index) => (
              <div key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}></div>
            ))
          }
        </div>

      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-4">
        <Link to="/events/upcoming/ideathon">
          <UpcommingEventcard
            img={ideathon}
            eventName="Ideathon 2025"
            description="The Center of Business Incubation and Innovation (CBII) at Shivalik College of Engineering, Dehradun, is committed to fostering entrepreneurship and innovation."
            buttonName="Know More"
          />
        </Link>


        <a
          href="https://forms.gle/fkd49F4ps8feSsWY7"
          target="_blank"
        >
          <UpcommingEventcard
            img={sih2025}
            eventName="SIH Hackathon 2025"
            description="CBII, Shivalik College of Engineering, will be conducting an Internal Hackathon on 29th September 2025 as the first phase of the Smart India Hackathon (SIH) 2025."
            buttonName="Register Now"
          />
        </a>

        <Link to="/event/upcoming/shivatech">
          <UpcommingEventcard
            img={shivatech2025}
            eventName="Shivatech 2025"
            description="Technology is not just about machines—it is about reimagining the future. Shivatech 2025 is a National Level Inter-College Technical Fest, designed to ignite creativity, innovation, and problem-solving among young minds. "
            buttonName="Know More"
          />
        </Link>


        <Link to="/event/upcoming/sciencechampioship">
          <UpcommingEventcard
            img={hackathonPic}
            eventName="Science Championship 4.0 "
            description="Science Championship 4.0 is a State-Level Inter-School Scientific Innovation Competition curated by CBII, Shivalik College of Engineering to identify, nurture, and inspire the scientific leaders of tomorrow."
            buttonName="Register Now"
          />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
