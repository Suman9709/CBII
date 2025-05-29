import React from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";

// Example poster image import (replace with your actual image paths)
import hackathonPoster from "../Images/hackathon2024.jpg";

const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const UpcomingEvents = () => {
    const upcomingEvents = [
        {
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
            prizes: [
                { rank: "1st", amount: "₹25,000", support: "+ Incubation Support" },
                { rank: "2nd", amount: "₹15,000", support: "+ Incubation Support" },
                { rank: "3rd", amount: "₹10,000", support: "+ Incubation Support" },
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
        },
        {
            id: 2,
            title: "Hackathon 2024",
            subtitle: "30-Hour CPC-Based Challenge",
            organizer: "iHUB Shivalik (IIT Roorkee Spoke)",
            date: "13th-15th November 2024",
            location: "Shivalik College of Engineering, Dehradun",
            description:
                "A 30-hour hackathon focusing on industrial and societal problem-solving using Cyber-Physical Systems (CPS). Open to 300+ participants across engineering colleges.",
            image: hackathonPoster,
            themes: [
                "Drone Technology",
                "Robotics",
                "Business Model Development",
                "Coding Competitions",
                "Cyber-Physical Systems",
            ],
            prizes: [
                { rank: "Grand Prize", amount: "₹1,25,000", support: "" },
                { rank: "Networking", amount: "", support: "With Industry Leaders" },
                { rank: "Incubation", amount: "", support: "Opportunities" },
            ],
            contact: [
                { name: "Ajay Kumar Verma", email: "ajay.verma@sce.org.in" },
                { name: "Phone", email: "8938940960" },
            ],
            link: "#",
        },
    ];

    // Prepare carousel slides for posters (only image + title)
    const posters = upcomingEvents.map((event) => ({
        id: event.id,
        image: event.image,
        title: event.title,
        subtitle: event.subtitle,
        link: event.link,
    }));

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 mt-20">
            {/* Poster Carousel */}
            <div className="relative h-[70vh] w-full overflow-hidden">
                <Carousel
                    showArrows
                    showThumbs={false}
                    infiniteLoop
                    autoPlay
                    interval={6000}
                    showStatus={false}
                    stopOnHover
                    className="h-full"
                >
                    {posters.map(({ id, image, title, subtitle, link }) => (
                        <div key={id} className="h-[70vh] w-full relative group">
                            <img
                                src={image}
                                alt={title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
                                <div className="max-w-4xl">
                                    <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-lg">
                                        {title}
                                    </h1>
                                    <p className="mt-4 text-xl md:text-2xl text-white/90 font-semibold drop-shadow">
                                        {subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Events Section */}
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
                    Upcoming Events
                </h2>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                    className="grid gap-12 md:grid-cols-2"
                >
                    {upcomingEvents.map((event) => (
                        <motion.div
                            key={event.id}
                            variants={fadeInUp}
                            className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                        >
                            <div className="h-64 overflow-hidden relative">
                                <img
                                    src={event.image}
                                    alt={event.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white">
                                            {event.title}
                                        </h3>
                                        <p className="text-blue-200">{event.subtitle}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between mb-4">
                                    <div>
                                        <p className="text-sm text-gray-500">Date</p>
                                        {event.date === "Coming Soon" ? (
                                            <span
                                                className="inline-block px-3 py-1 text-sm font-semibold text-white bg-red-500 rounded-full animate-pulse select-none shadow-md"
                                                title="Details will be announced soon"
                                            >
                                                Coming Soon
                                            </span>
                                        ) : (
                                            <p className="font-medium">{event.date}</p>
                                        )}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Location</p>
                                        <p className="font-medium">{event.location}</p>
                                    </div>
                                </div>


                                <p className="text-gray-700 mb-4 flex-grow">{event.description}</p>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800">Themes:</h4>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {event.themes.map((theme, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                                            >
                                                {theme}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800">Prizes:</h4>
                                    <div className="grid grid-cols-3 gap-2 mt-2">
                                        {event.prizes.map((prize, index) => (
                                            <div
                                                key={index}
                                                className="bg-blue-50 p-2 rounded text-center"
                                            >
                                                <p className="text-xs font-medium text-blue-600">
                                                    {prize.rank}
                                                </p>
                                                {prize.amount && (
                                                    <p className="font-bold">{prize.amount}</p>
                                                )}
                                                {prize.support && (
                                                    <p className="text-xs">{prize.support}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <h4 className="font-semibold text-gray-800">Contact:</h4>
                                    <ul className="mt-2 space-y-2">
                                        {event.contact.map((person, index) => (
                                            <li key={index} className="flex items-start">
                                                <svg
                                                    className="w-4 h-4 mt-1 mr-2 text-blue-500 flex-shrink-0"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                    />
                                                </svg>
                                                <div>
                                                    <p className="font-medium">{person.name}</p>
                                                    <p className="text-sm text-gray-600">{person.email}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="mt-auto">
                                    <Link
                                        to={event.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="block w-full py-3 text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition"
                                    >
                                        Register Now
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
