import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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
      title: "CyberZoo: Developing a Cyber-Physical Animal Tamer System",
      pi: "Mr. Kumar Rethik",
      budget: "₹9.60 Lakhs",
      description: "Innovative system combining cyber-physical technologies for animal behavior management.",
      image: "https://source.unsplash.com/random/800x500/?robot,animal"
    },
    {
      id: 2,
      title: "ParkEase: Building an Intelligent Smart Parking System",
      pi: "Mr. Sartaj Khan",
      budget: "₹10.00 Lakhs",
      description: "AI-powered parking solution that optimizes urban parking space utilization.",
      image: "https://source.unsplash.com/random/800x500/?parking,smartcity"
    },
    {
      id: 3,
      title: "Hybrid Arial-Aquatic Drone: Design and Development",
      pi: "Dr. Abhishek Jha",
      budget: "₹9.85 Lakhs",
      description: "Next-generation drone capable of seamless transition between air and water environments.",
      image: "https://source.unsplash.com/random/800x500/?drone,underwater"
    },
    {
      id: 4,
      title: "IoT Based Waste Management System",
      pi: "Dr. Hemant Nautiyal",
      budget: "₹9.50 Lakhs",
      description: "Smart waste collection system using IoT sensors for efficient city sanitation.",
      image: "https://source.unsplash.com/random/800x500/?iot,wastebin"
    },
    {
      id: 5,
      title: "EyesOnyx: AI Smart Glasses for Blind & Visually Impaired",
      pi: "Dr. Sono Bhardwaj",
      budget: "₹9.90 Lakhs",
      description: "Assistive technology glasses with real-time object recognition and navigation.",
      image: "https://source.unsplash.com/random/800x500/?glasses,blind"
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
        {/* Section Header */}
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

        {/* Projects Grid */}
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
          <motion.h3 
            variants={fadeInUp}
            className="text-2xl font-semibold mb-8 text-center text-gray-800"
          >
            All Projects
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="h-56 bg-cover bg-center" style={{ backgroundImage: `url(${project.image})` }}></div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-3 text-gray-800">{project.title}</h4>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                      {project.pi}
                    </span>
                    <span className="bg-green-100 text-green-800 text-sm px-3 py-1 rounded-full">
                      {project.budget}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          ref={statsRef}
          initial="hidden"
          animate={statsInView ? "visible" : "hidden"}
          variants={fadeInUp}
          className="mt-20 bg-blue-700 rounded-xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <motion.div variants={fadeInUp}>
              <p className="text-4xl font-bold mb-2">5+</p>
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