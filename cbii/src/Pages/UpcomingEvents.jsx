import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EventsCard from "../Components/EventsCard";

import hackathonImg from "../Images/HACKATHON.png"

const UpcomingEvents = () => {

  const images = [hackathonImg, hackathonImg, hackathonImg];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length])
  return (

    <div className="w-full flex flex-col justify-center items-center p-4 ">

      <div className="relative w-full h-64 sm:h-80 md:h-[600px] overflow-hidden rounded-xl mb-10">
        <div className="flex transition-transform duration-700" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {
            images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Slide ${index + 1}`}
                className="w-full h-auto object-fill flex-shrink-0"
              />
            ))
          }
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {
            images.map((_, index) => (
              <div key={index}
                className={`w-3 h-3 rounded-full cursor-pointer ${index === currentIndex ? 'bg-white' : 'bg-gray-400'}`}
                onClick={() => setCurrentIndex(index)}></div>
            ))
          }
        </div>

      </div>

      <div className="flex w-full flex-wrap gap-10 justify-center items-center">
        <Link to="/events/upcoming/ideathon">
          <EventsCard
            img=""
            eventName="Ideathon 2025"
            description="The Center of Business Incubation and Innovation (CBII) at Shivalik College of Engineering, Dehradun, is committed to fostering entrepreneurship and innovation."
            buttonName="Know More"
          />
        </Link>
        <Link to="/events/upcoming/hackathon">
          <EventsCard
            img={hackathonImg}
            eventName="Hackathon 2025"
            description="A 24-hour event where participants brainstorm and pitch innovative ideas to solve real"
            buttonName="Know More"
          />
        </Link>
      </div>
    </div>
  );
};

export default UpcomingEvents;
