import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import hackathonPoster from "../Images/hackathon2024.jpg";
import { Link } from "react-router-dom";

// Enhanced animations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const scaleUp = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { 
      duration: 1.0, 
      ease: [0.16, 1, 0.3, 1] 
    } 
  },
};

const UpcomingEvents = () => {
  const ideathonEvent = {
    id: 1,
    title: "Ideathon 2025",
    subtitle: "Solving Societal Challenges",
    organizer: "Center of Business Incubation and Innovation (CBII)",
    date: "Coming Soon",
    location: "Shivalik College of Engineering, Dehradun",
    description:
      "A platform for innovators and entrepreneurs to pitch ideas addressing societal challenges aligned with UN SDGs. Winners receive cash prizes, incubation support, and mentorship.",
    image: hackathonPoster,
    themes: [
      "Sustainable Energy & Environment",
      "Smart Cities & Infrastructure",
      "Healthcare & Wellbeing",
      "Food Security & Agriculture",
      "Governance & Disaster Response",
    ],
    categories: [
      {
        name: "Institute / Startups",
        eligibility: [
          "Open for students, alumini and faculty member of Shivalik College of Engineering/College of Pharmacy working" ,
        ],
        incubationBenefits: [
          "Cash Prize: 1st - ₹50,000, 2nd - ₹25,000, 3rd - ₹20,000 + incubation support",
          "Access to funding opportunities (up to ₹5 Lacs of seed money) & investor networks",
        ],
      },
      {
        name: "School Students",
        eligibility: ["Open for school students from grade 9 to 12"],
        incubationBenefits: [
          "Cash Prize: 1st - ₹15,000, 2nd - ₹10,000, 3rd - ₹5,000 + incubation support",
          "Access to funding opportunities (up to ₹5 Lacs of seed money) & investor networks",
        ],
      },
    ],
    contact: [
      {
        name: "Mr. Yashendra Sharma",
        email: "yashender.sharma@shivalikcollege.edu.in",
      },
      {
        name: "Dr. Abhishek Jha",
        email: "abhishek.jha@sce.org.in",
      },
    ],
    link: "https://shivalikcollege.edu.in/ihub-cbii/",
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50 pt-20">
      {/* Hero Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[80vh] w-full overflow-hidden"
      >
        <Carousel
          showArrows={true}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={6000}
          showStatus={false}
          stopOnHover={true}
          className="h-full"
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute left-4 z-10 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className="absolute right-4 z-10 p-2 rounded-full bg-white/30 backdrop-blur-sm hover:bg-white/50 transition-all duration-300"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            )
          }
        >
          <div className="h-[80vh] w-full relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            <img
              src={ideathonEvent.image}
              alt={ideathonEvent.title}
              className="w-full h-full object-contain"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4"
              >
                {ideathonEvent.title}
              </motion.h1>
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-xl md:text-2xl text-white/90 font-semibold drop-shadow-md max-w-2xl"
              >
                {ideathonEvent.subtitle}
              </motion.p>
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="mt-8"
              >
                <Link
                  to="/upcomingEventForm"
                  className="inline-block px-8 py-3 bg-white text-indigo-600 rounded-full font-bold hover:bg-indigo-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Register Now
                </Link>
              </motion.div>
            </div>
          </div>
        </Carousel>
      </motion.div>

      {/* Event Details */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center text-gray-900 mb-4"
          >
            Event Details
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12"
          >
            Join us for an exciting opportunity to showcase your innovative ideas
          </motion.p>

          {/* Main Card */}
          <motion.div 
            variants={scaleUp}
            className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden"
          >
            <div className="md:flex">
              <div className="md:w-1/2 h-96 md:h-auto overflow-hidden relative">
                <img
                  src={ideathonEvent.image}
                  alt={ideathonEvent.title}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-3xl font-bold text-white">{ideathonEvent.title}</h3>
                  <p className="text-blue-200 mt-1">{ideathonEvent.subtitle}</p>
                  <div className="mt-4 flex items-center space-x-4">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-white text-sm">{ideathonEvent.date}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span className="text-white text-sm">{ideathonEvent.location}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:w-1/2 p-8">
                <motion.p 
                  variants={fadeInUp}
                  className="text-gray-700 mb-6 leading-relaxed"
                >
                  {ideathonEvent.description}
                </motion.p>

                {/* Themes */}
                <motion.div 
                  variants={fadeInUp}
                  className="mb-6"
                >
                  <h4 className="font-semibold text-gray-800 mb-3 text-lg">Themes:</h4>
                  <div className="flex flex-wrap gap-3">
                    {ideathonEvent.themes.map((theme, i) => (
                      <motion.span
                        key={i}
                        whileHover={{ y: -2 }}
                        className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-medium shadow-sm"
                      >
                        {theme}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>

                {/* Organizer */}
                <motion.div 
                  variants={fadeInUp}
                  className="mb-6"
                >
                  <h4 className="font-semibold text-gray-800 mb-1">Organizer:</h4>
                  <p className="text-gray-600">{ideathonEvent.organizer}</p>
                </motion.div>

                <Link
                  to="/upcomingEventsDetails"
                  className="mt-4 inline-block w-full text-center bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors shadow-md hover:shadow-lg"
                >
                  Know More
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Categories Section */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Participation Categories</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {ideathonEvent.categories.map((category, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6">
                    <h4 className="text-xl font-bold text-white">{category.name}</h4>
                  </div>
                  <div className="p-6">
                    <div className="mb-6">
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-indigo-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Eligibility
                      </h5>
                      <ul className="space-y-2">
                        {category.eligibility.map((item, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <span className="inline-block w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 mr-2"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-800 mb-3 flex items-center">
                        <svg className="w-5 h-5 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                        Benefits
                      </h5>
                      <ul className="space-y-2">
                        {category.incubationBenefits.map((benefit, i) => (
                          <li key={i} className="flex items-start text-gray-600">
                            <span className="inline-block w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2"></span>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 max-w-5xl mx-auto"
          >
            <h3 className="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ideathonEvent.contact.map((person, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">{person.name}</h4>
                  <a
                    href={`mailto:${person.email}`}
                    className="text-indigo-600 hover:text-indigo-800 flex items-center"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {person.email}
                  </a>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Final CTA */}
          <motion.div 
            variants={fadeInUp}
            className="mt-16 text-center"
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Ready to Participate?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Don't miss this opportunity to showcase your innovative ideas and win exciting prizes!
            </p>
            <Link
              to="/upcomingEventsDetails"
              className="inline-block px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full font-bold hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
            >
              Learn More
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default UpcomingEvents;