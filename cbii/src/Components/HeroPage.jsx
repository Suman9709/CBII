import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import iimg6 from '../Images/aimg6.webp';
import iimg3 from '../Images/aimg3.webp';
import iimg1 from '../Images/aimg1.webp';
import iimg4 from '../Images/aimg4.webp';
import iimg5 from '../Images/aimg5.webp';
import { Link } from 'react-router-dom';

const HeroPage = () => {
    const images = [iimg6, iimg3, iimg1, iimg4, iimg5];
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
        <div className="relative w-full 
                        h-[40vh]   /* default mobile */
                        sm:h-[50vh] 
                        md:h-[60vh] 
                        lg:h-[70vh] 
                        xl:h-[90vh] /*laptop view*/
                        2xl:h-[95vh]
                        ">

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
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                ))}
            </div>

            <div className="absolute inset-0 z-20"></div>

            {/* Dots */}
            <motion.div
                className="absolute bottom-6 left-0 right-0 flex justify-center space-x-2 z-30"
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
                        📢 Upcoming Ideathon at iHUB Shivalik | <Link to={"/events/upcoming/ideathon"}>Register Now</Link>! 🚀 &nbsp;&nbsp;&nbsp;
                        📢 Hackathon 2025 – <Link to={"/event/upcoming/shivatech"}>Apply Today!</Link> &nbsp;&nbsp;&nbsp;
                        📢 Shivatech 2025 | <Link to={"/event/upcoming/shivatech"}>Apply Today!</Link> &nbsp;&nbsp;&nbsp;
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default HeroPage;
