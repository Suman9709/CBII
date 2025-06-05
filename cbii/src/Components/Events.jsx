import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import scienceChampionShip from '../Images/Aimg3.png';
import hackathon from '../Images/Aimg2.png';
import shivatech from '../Images/Aimg1.png';
import aboutHero from '../Images/aimg13.webp';

const Events = () => {
  const carouselImages = [hackathon, shivatech, aboutHero];
  const [currentIndex, setCurrentIndex] = useState(0);

  const activities = [
    {
      title: 'Science Championship 3.0',
      desc: 'On November 16, 2024, Shivalik College of Engineering, in collaboration with USERC, organized Science Championship 3.0. The highlight of the program was the innovation and brilliance of young minds. The event had diverse participation from different reputed schools, both private and public. The projects and models based on themes of science, society, and environment proved that the next generation is so close to scientific excellence. The event hosted more than 80 schools, 180 teams, and over 800 students. With an innovative theme, the event focused on themes of Science, Society, and Environment. The event was designed to instill a deep passion for technology and broadening scientific knowledge.',
      image: scienceChampionShip,
    },
    {
      title: 'Hackathon-2024',
      desc: 'The Incubation Center of Shivalik College, CBII and iHUB Shivalik organised Hackathon 2024 with a vision to generate high-value, actionable business ideas and product concepts. The event was organised to foster a spirit of entrepreneurship among young minds. More than 300 students from 63+ teams participated in this collaborative technical event, proposing solutions to industrial and social problem statements. The event had participation from various institutes, including colleges and universities, from regions students of Uttarakhand, UP, and the NCR region. During the event, the participating teams built actionable business ideas and product concepts by working relentlessly for 30 hours.',
      image: hackathon,
    },
    {
      title: 'Shivatech-2024: Nov 15',
      desc: 'The Institution Innovation Council of Shivalik College – (CBII), iHUB Shivalik – organised an impactful event on 15 November 2024. In Shiva-Tech 2024, 12 different events were organised with the aim of providing researchers and students present innovative solutions to industrial and societal problems integrating technology. Different events included Project Demonstration, Working Model in Pharmacy & Health, Highway to Hell, LAN Gaming – Free Fire & VGMI, Code Hunt, Building Bridge, Tower Making, Best Out of Waste, Wrestling Machine, Business Model Presentation, Lego Assembly & Race, Logo Making, and Digital Logic Design. The event had participation from 250+ students from different institutes.',
      image: shivatech,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="w-full mt-16">
      {/* Carousel Section */}
      <div className="relative w-full h-[90vh] overflow-hidden">
        {carouselImages.map((img, idx) => (
          <motion.div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          >
            <img src={img} alt="" className="w-full h-full object-cover object-center" />
            <div className="absolute inset-0 bg-black opacity-50" />
          </motion.div>
        ))}

        {/* Text Overlay */}
        <motion.div
          className="absolute inset-0 z-20 flex flex-col justify-center items-center px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="bg-red-100/30 backdrop-blur-md rounded-xl p-6 md:p-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white text-center">Startup Events</h1>
            <p className="text-xl md:text-2xl font-medium text-gray-100 text-center">
              Empowering Innovation Through Resources, Mentorship, and Strategic Networking
            </p>
          </div>
        </motion.div>
      </div>

      {/* Activities Section */}
      <div className="bg-white py-20 px-4 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start-Up <span className="text-[#841B31]">Activities</span></h2>
          <p className="text-lg text-gray-700">Innovation and Entrepreneurship at Shivalik College</p>
          <div className="h-1 w-24 bg-[#841B31] mx-auto mt-4 rounded-full" />
        </motion.div>

        {activities.map((activity, index) => (
          <motion.div
            key={index}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-10 mb-16`}
          >
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl">
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-64 md:h-80 object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4 text-[#841B31]">{activity.title}</h3>
              <p className="text-gray-700 text-lg leading-relaxed">{activity.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Events;
