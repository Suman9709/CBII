import React from 'react';
import { motion } from 'framer-motion';
// import canstart from '../Images/startup/canstart.jpg'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StartUpsPage = () => {
  const StartUps = [
    {
      title: "CYBERULTRON CONSULTING PRIVATE LIMITED",
      pi1: "SUMAN GOEL",
      pi2: "MUKESH GOYAL",
      description: "Innovators have a set of techniques used to protect the system, accessibility, applications, confidentiality, data, and network from cyber threats.",
    },
    {
      title: "AGRIJOY PVT LTD ",
      pi1: "CHANDRAMANI KUMAR",
      pi2: "",
      description: "AGRIJOY PVT LTD is dedicated to transforming agriculture with innovative and sustainable solutions.We empower farmers with modern practices, quality resources, and advanced technology.",
    },
    {
      title: "F3 BIOTECHNOLOGY PVT LTD",
      pi1: "RAJNI KUMARI",
      pi2: "AMRENDRA KUMAR",
      description: "F3 BIOTECHNOLOGY PVT LTD pioneers in food processing and biotechnology innovations. We deliver high-quality, sustainable solutions to enhance health, nutrition, and safety.",
    },
    {
      title: "GIZMODO LLP",
      pi1: "SUNIL SHARMA",
      pi2: "SHIVRAJ",
      description: "We focus on innovative projects that drive progress in technology and applied sciences. Our commitment is to deliver impactful solutions through knowledge, expertise, and collaboration.",
    },
    {
      title: "ALTECHWITZ LLP",
      pi1: "KULDEEP RAWAT",
      pi2: "SHUBHAM SINGH KARKI",
      description: "Power generation, electricity distribution, and consultancy in energy solutions.",
    },
    {
      title: "NANOLEAFELECT LLP",
      pi1: "SABA SABIR",
      pi2: "ANISH BRATA SAMANTA",
      description: "Electronics manufacturing including PLCs, sensors, lab instruments, and wireless communication devices.",
    },
    {
      title: "DENOLOGIX SOFTECH LLP",
      pi1: "AYUSHMAN SRIVASTAV",
      pi2: "AVINASH GULERIA",
      description: "Software development and advanced analytics services.",
    },
    {
      title: "ADO-TECH LLP",
      pi1: "ROHIT KUMAR SHAKYA",
      pi2: "JAIDEEP SINGH RANA",
      description: "Mechanical components manufacturing, machinery trading, and industrial consultancy.",
    },
    {

      title: "BITZFLYTECH LLP",
      pi1: "KANCHESH KUMAR",
      pi2: "MALVIKA CHANDOLA",
      description: "Home automation, security systems, smart appliances, and energy-efficient electronics.",
    },
    {

      title: "CANSTART TECH LLP",
      pi1: "ASHUTOSH BHATT",
      pi2: "AYUSH KUMAR CHANCHAL",
      description: "Industrial & home automation, robotics, and smart device manufacturing.",
    },
    {
      title: "FLIPP OM TECH LLP",
      pi1: "ASHISH KUMAR GUPTA",
      pi2: "AJAY VERMA",
      description: "Industrial electronics, power systems, robotics, and IoT-based climate control solutions.",
    },
    {
      title: "MAPLE ROBOTICS LLP",
      pi1: "NIKHIL KANOJIA",
      pi2: "SHIVASHEESH KAUSHIK",
      description: "Avionics, space equipment, drone tech, autonomous vehicle systems, and railway automation.",
    },
    {
      title: "TULIPSOFTTECH LLP",
      pi1: "ASHISH KUMAR GUPTA",
      pi2: "MANISH SINGH",
      description: "IT outsourcing, call center services, software development, and business process management.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 ">
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Our StartUps
        <div className="mt-2 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {StartUps.map((startUp, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            {/* <div className=" bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center">
              <img src={startUp.img} alt="" className='object-contain h-1/3' />
            </div> */}
            <div className="p-3">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{startUp.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{startUp.description || "No description available."}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {startUp.pi1}
                </span>
                {
                  startUp.pi2 && (
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {startUp.pi2}
                    </span>
                  )
                }
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartUpsPage;
