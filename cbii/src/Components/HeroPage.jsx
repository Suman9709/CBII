import React, { useState, useEffect } from 'react';
import iimg6 from '../Images/iimg6.webp';
import iimg3 from '../Images/iimg3.webp';//added some changes in image name
import iimg1 from '../Images/iimg1.webp';

const HeroPage = () => {
    const images = [iimg6, iimg3, iimg1, iimg1, iimg1, iimg1, iimg1, iimg1];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="relative w-screen max-w-[100vw] h-screen max-h-[90vh] overflow-hidden mt-16">
            {/* Carousel/Slider */}
            <div className="relative w-full h-full">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <img
                            src={image}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full object-cover object-center"
                        />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 z-20"></div>

            <div className="absolute inset-0 z-30 flex items-center justify-center px-4">
                <div className="w-full max-w-4xl mx-auto p-6 bg-red-100/40 rounded-xl ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white text-center">
                        iHUB Shivalik / CBII
                    </h1>
                    <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-100 font-semibold leading-relaxed">
                        Empowering Innovation Through Resources, Mentorship, and Strategic Networking
                    </p>
                </div>
            </div>

            {/* Navigation Dots */}
            <div className="absolute bottom-12 left-0 right-0 flex justify-center space-x-2 z-30">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-white w-6' : 'bg-gray-300'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full z-40">
                <div className="bg-red-600 text-white py-2 overflow-hidden">
                    <div className="animate-marquee whitespace-nowrap text-center text-sm sm:text-base font-semibold">
                        📢 Upcoming Hackathon at iHUB Shivalik | Register Now! 🚀 &nbsp;&nbsp;&nbsp; 📢 Internship Opportunities Available – Apply Today! &nbsp;&nbsp;&nbsp; 📢 Explore Latest Projects and Startups at iHUB...
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroPage;