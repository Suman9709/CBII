import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StartUpsPage = () => {
  const StartUps = [
    {
      id: "10",
      title: "GIZMODO LLP",
      pi1: "SUNIL SHARMA",
      pi2: "SHIVRAJ",
      description: "Industrial & home automation, robotics, wireless communication devices, and smart electronics manufacturing.",
    },
    {
      id: "9",
      title: "ALTECHWITZ LLP",
      pi1: "KULDEEP RAWAT",
      pi2: "SHUBHAM SINGH KARKI",
      description: "Power generation, electricity distribution, and consultancy in energy solutions.",
    },
    {
      id: "8",
      title: "NANOLEAFELECT LLP",
      pi1: "SABA SABIR",
      pi2: "ANISH BRATA SAMANTA",
      description: "Electronics manufacturing including PLCs, sensors, lab instruments, and wireless communication devices.",
    },
    {
      id: "7",
      title: "DENOLOGIX SOFTECH LLP",
      pi1: "AYUSHMAN SRIVASTAV",
      pi2: "AVINASH GULERIA",
      description: "Software development and advanced analytics services.",
    },
    {
      id: "6",
      title: "ADO-TECH LLP",
      pi1: "ROHIT KUMAR SHAKYA",
      pi2: "JAIDEEP SINGH RANA",
      description: "Mechanical components manufacturing, machinery trading, and industrial consultancy.",
    },
    {
      id: "5",
      title: "BITZFLYTECH LLP",
      pi1: "KANCHESH KUMAR",
      pi2: "MALVIKA CHANDOLA",
      description: "Home automation, security systems, smart appliances, and energy-efficient electronics.",
    },
    {
      id: "4",
      title: "CANSTART TECH LLP",
      pi1: "ASHUTOSH BHATT",
      pi2: "AYUSH KUMAR CHANCHAL",
      description: "Industrial & home automation, robotics, and smart device manufacturing.",
    },
    {
      id: "3",
      title: "FLIPP OM TECH LLP",
      pi1: "ASHISH KUMAR GUPTA",
      pi2: "AJAY VERMA",
      description: "Industrial electronics, power systems, robotics, and IoT-based climate control solutions.",
    },
    {
      id: "2",
      title: "MAPLE ROBOTICS LLP",
      pi1: "NIKHIL KANOJIA",
      pi2: "SHIVASHEESH KAUSHIK",
      description: "Avionics, space equipment, drone tech, autonomous vehicle systems, and railway automation.",
    },
    {
      id: "1",
      title: "TULIPSOFTTECH LLP",
      pi1: "ASHISH KUMAR GUPTA",
      pi2: "MANISH SINGH",
      description: "IT outsourcing, call center services, software development, and business process management.",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-10 mt-18">
      <motion.h3
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="text-3xl font-bold mb-8 text-center text-gray-800"
      >
        Our StartUps
        <div className="mt-2 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
      </motion.h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {StartUps.map((startUp) => (
          <motion.div
            key={startUp.id}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
          >
            <div className="h-44 bg-gradient-to-r from-gray-200 to-gray-100 flex items-center justify-center">
              <span className="text-gray-400 text-lg">No Image</span>
            </div>
            <div className="p-5">
              <h4 className="text-xl font-semibold text-gray-800 mb-2">{startUp.title}</h4>
              <p className="text-gray-600 text-sm mb-4">{startUp.description || "No description available."}</p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {startUp.pi1}
                </span>
                <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                  {startUp.pi2}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default StartUpsPage;
