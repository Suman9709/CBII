import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import animalTramerDevice from '../Images/Project/animalTramerDevice.jpg';
import hybrid_arial_aquatic_drone from '../Images/Project/hybrid_arial_aquatic_drone.jpg';
import hydroPhonicSystem from '../Images/Project/hydroPhonicSystem.jpg';
import robot from '../Images/Project/robot.jpg';
import smartDustbin from '../Images/Project/smartDustbin.jpg';
import smartparking from '../Images/Project/smartparking.jpg';
import womenSafetyDevice from '../Images/Project/womenSafetyDevice.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' }
  }
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "CyberUltron-Defending Cyber Attacks",
      pi: "Mr. Vatrul Goyal",
      budget: "₹15.00 Lakhs",
      description: " Innovators have a set of techniques used to protect the system, accessibility, applications, confidentiality, data, and network from cyber threats.",
      image: "https://source.unsplash.com/random/800x500/?glasses,blind",
      agency: " MSME, New Delhi"
    },
    {
      id: 2,
      title: "CyberZoo: Developing a Cyber-Physical Animal Tamer System",
      pi: "Mr. Kumar Rethik",
      budget: "₹9.60 Lakhs",
      description: "Innovative system combining cyber-physical technologies for animal behavior management.",
      image: animalTramerDevice,
      agency: "iHUB DivyaSampark IIT Roorkee"
    },
    {
      id: 3,
      title: "ParkEase: Building an Intelligent Smart Parking System",
      pi: "Mr. Sartaj Khan",
      budget: "₹10.00 Lakhs",
      description: "AI-powered parking solution that optimizes urban parking space utilization.",
      image: smartparking,
      agency: "iHUB DivyaSampark IIT Roorkee"
    },
    {
      id: 4,
      title: "Hybrid Arial-Aquatic Drone: Design and Development",
      pi: "Dr. Abhishek Jha",
      budget: "₹9.85 Lakhs",
      description: "Next-generation drone capable of seamless transition between air and water environments.",
      image: hybrid_arial_aquatic_drone,
      agency: "iHUB DivyaSampark IIT Roorkee"
    },
    {
      id: 5,
      title: "IoT Based Waste Management System",
      pi: "Dr. Hemant Nautiyal",
      budget: "₹9.50 Lakhs",
      description: "Smart waste collection system using IoT sensors for efficient city sanitation.",
      image: smartDustbin,
      agency: "iHUB DivyaSampark IIT Roorkee"
    },
    {
      id: 6,
      title: "EyesOnyx: AI Smart Glasses for Blind & Visually Impaired",
      pi: "Dr. Sono Bhardwaj",
      budget: "₹9.90 Lakhs",
      description: "Assistive technology glasses with real-time object recognition and navigation.",
      image: "https://source.unsplash.com/random/800x500/?glasses,blind",
      agency: "iHUB DivyaSampark IIT Roorkee"
    },
    {
      id: 7,
      title: "Braceguard: Smart Wearable Safety Device for Women",
      pi: "Akanksha Bhist Ayush Bahuguna",
      budget: "₹0.50 Lakhs",
      description: "We will develop a compact and smart wearable device (bracelet) that provides real-time emergency assistance.",
      image: womenSafetyDevice,
      agency: "iHUB Shivalik"
    },
    {
      id: 8,
      title: "QUADRUPED ROBOT (‘CHANDRA’)",
      pi: "Ayush Kumar Chanchal",
      budget: "₹0.50 Lakhs",
      description: "The quadruped robot is designed to autonomously traverse uneven terrain, identify obstacles, and assist in search and rescue missions.",
      image: robot,
      agency: "iHUB Shivalik"
    },
    {
      id: 9,
      title: "AI-Based Smart Hydroponic System",
      pi: "Krish Kumar Sinha, Akanksha Raj, Mrinal Shekhar",
      budget: "₹0.50 Lakhs",
      description: "Design a smart hydroponic system integrating IoT and AI to optimize plant growth by monitoring and controlling environmental factors.",
      image: hydroPhonicSystem,
      agency: "iHUB Shivalik"
    }
  ];

  const [headerRef, headerInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const [statsRef, statsInView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section className="my-16 py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          ref={headerRef}
          initial="hidden"
          animate={headerInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Innovative Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Exploring cutting-edge technologies to solve real-world problems through interdisciplinary research.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
        >
          <motion.h1
            variants={fadeInUp}
            className="text-2xl font-semibold mb-8 text-center text-gray-800 mt-16"
          >
            Our Innovative Projects
            <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-52 w-full overflow-hidden flex items-center justify-center">
                  <img
                    src={project.image}
                    alt={project.title}
                    className=" h-full object-contain  rounded-2xl"
                  />
                </div>



                <div className="p-4">
                  <h4 className="text-xl font-bold mb-3 text-gray-800 line-clamp-1">{project.title}</h4>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className='w-full flex flex-col items-center'>
                    <div className="flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                        {project.pi}
                      </span>
                      <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                        Funding {project.budget}
                      </span>
                    </div>
                    <div className='w-72 bg-[rgb(118,8,37)] rounded-xl text-center mt-2 text-white p-2'>
                      {project.agency}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-20 bg-[rgb(118,8,37)] rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">{projects.length}+</p>
              <p className="text-gray-200">Ongoing Projects</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">₹49.85L</p>
              <p className="text-gray-200">Total Funding</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">8+</p>
              <p className="text-gray-200">Researchers</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">3+</p>
              <p className="text-gray-200">Patents Filed</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
