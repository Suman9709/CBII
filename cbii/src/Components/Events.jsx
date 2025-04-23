import React from 'react';
import scienceChampionShip from '../Images/Aimg3.png';
import hackathon from '../Images/Aimg2.png';
import shivatech from '../Images/Aimg1.png';
import aboutHero from '../Images/aimg13.webp';

const Events = () => {
    const activities = [
        {
            title: "Science Championship 3.0",
            desc: "On November 16, 2024, Shivalik College of Engineering, in collaboration with USERC, organized Science Championship 3.0. The highlight of the program was the innovation and brilliance of young minds. The event had diverse participation from different reputed schools, both private and public. The projects and models based on themes of science, society, and environment proved that the next generation is so close to scientific excellence. The event hosted more than 80 schools, 180 teams, and over 800 students. With an innovative theme, the event focused on themes of Science, Society, and Environment. The event was designed to instill a deep passion for technology and broadening scientific knowledge.",
            image: scienceChampionShip
        },
        {
            title: "Hackathon- 2024",
            desc: "The Incubation Center of Shivalik College, CBII and iHUB Shivalik organised Hackathon 2024 with a vision to generate high-value, actionable business ideas and product concepts. The event was organised to foster a spirit of entrepreneurship among young minds. More than 300 students from 63+ teams participated in this collaborative technical event, proposing solutions to industrial and social problem statements. The event had participation from various institutes, including colleges and universities, from regions students of Uttarakhand, UP, and the NCR region. During the event, the participating teams built actionable business ideas and product concepts by working relentlessly for 30 hours.",
            image: hackathon
        },
        {
            title: "Shivatech-2024: 15 November 2024",
            desc: "The Institution Innovation Council of Shivalik College – (CBII), iHUB Shivalik – organised an impactful event on 15 November 2024. In Shiva-Tech 2024, 12 different events were organised with the aim of providing researchers and students present innovative solutions to industrial and societal problems integrating technology. Different events included Project Demonstration, Working Model in Pharmacy & Health, Highway to Hell, LAN Gaming – Free Fire & VGMI, Code Hunt, Building Bridge, Tower Making, Best Out of Waste, Wrestling Machine, Business Model Presentation, Lego Assembly & Race, Logo Making, and Digital Logic Design. The event had participation from 250+ students from different institutes.",
            image: shivatech
        }
    ];

    return (
      <div className="min-h-screen">
            {/* Full-screen hero image */}
            <div className="relative h-screen max-h-[80vh] w-full overflow-hidden">
              <img
                src={aboutHero}
                alt="About iHUB Shivalik"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0  flex items-center justify-center">
                <div className="text-center px-4">
                  <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About iHUB Shivalik</h1>
                  <p className="text-xl text-white max-w-3xl mx-auto">
                    Fostering innovation and entrepreneurship through cutting-edge incubation programs
                  </p>
                </div>
              </div>
            </div>

            {/* Header Section */}
            <div className="text-center mb-16 mt-16">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 transform hover:scale-105 transition-transform duration-300 inline-block">
                    Start-Up <span className="text-[#841B31]">Activities</span>
                </h1>
                <p className="text-xl text-gray-600 mb-6">
                    Innovation and Entrepreneurship at Shivalik College
                </p>
                <div className="h-1 w-24 bg-[#841B31] mx-auto rounded-full transform origin-left hover:scale-x-125 transition-transform duration-500"></div>
            </div>

            {/* Activities List */}
            <div className="space-y-24 px-12 pb-10">
                {activities.map((activity, index) => (
                    <div
                        key={index}
                        className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center group`}
                    >
                        {/* Text Content */}
                        <div className="md:w-2/3 transition-all duration-500 transform hover:-translate-y-2">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 relative before:absolute before:-bottom-2 before:left-0 before:w-16 before:h-1 before:bg-[#841B31] before:transition-all before:duration-500 group-hover:before:w-24">
                                {activity.title}
                            </h2>
                            <p className="text-gray-600 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                                {activity.desc}
                            </p>
                        </div>

                        {/* Image */}
                        <div className="md:w-1/3 relative overflow-hidden rounded-xl shadow-xl transition-all duration-500 group-hover:shadow-2xl">
                            <div className="relative overflow-hidden h-64 w-full">
                                <img
                                    src={activity.image}
                                    alt={activity.title}
                                    className="w-full h-full object-cover transform transition-all duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                                    <span className="text-white font-medium text-lg">View More →</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Events;