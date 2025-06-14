import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import iimg6 from '../Images/aimg6.webp';
import iimg3 from '../Images/aimg3.webp';
import iimg1 from '../Images/aimg1.webp';
import { Link } from 'react-router-dom';

const HeroPage = () => {
    const images = [iimg6, iimg3, iimg1, iimg1, iimg1, iimg1, iimg1, iimg1];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: 'easeOut' }
        }
    };

    return (
        <div className="relative w-full h-[60vh] md:h-[90vh] overflow-hidden mt-18">

            {/* Carousel/Slider */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <motion.div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: index === currentIndex ? 1 : 0 }}
                        transition={{ duration: 1 }}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </motion.div>
                ))}
            </div>
            <div className="absolute inset-0 z-20"></div>

            {/* Hero Text Content */}
            <motion.div
                className="absolute inset-0 z-30 flex items-center justify-center px-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <div className="w-full max-w-4xl mx-auto p-4 bg-red-100/40 rounded-xl mt-28 font-sans">
                    <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-4 text-white text-center"

                    >
                        iHUB Shivalik / CBII
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl lg:text-3xl mb-6 text-gray-100 font-semibold leading-relaxed text-center"

                    >
                        Empowering Innovation Through Resources, Mentorship, and Strategic Networking
                    </p>
                </div>
            </motion.div>

            {/* Navigation Dots */}
            <motion.div
                className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2 z-30"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-gray-300'}`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </motion.div>

            {/* Marquee Banner */}
            <motion.div
                className="absolute bottom-0 left-0 w-full z-40"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.0, ease: 'easeOut' }}
                viewport={{ once: true }}
            >
                <div className="bg-[rgb(118,8,37)] text-white py-2 overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap text-center text-sm sm:text-base font-semibold">
                        📢 Upcoming Ideathon at iHUB Shivalik | <Link to={"/upcomingEventForm"}>Register Now</Link>! 🚀 &nbsp;&nbsp;&nbsp;
                        📢 Internship Opportunities Available – Apply Today! &nbsp;&nbsp;&nbsp;
                        📢 Explore Latest Projects and Startups at iHUB...
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroPage;
