import React from 'react';
import { motion } from 'framer-motion';
import aboutHero from '../Images/aimg13.webp';
import Leadership from './Leadership';
import director from '../Images/director.jpg'
import ceo from '../Images/ak.jpg'
import surmadhurpant from '../Images/surmadhurpant.webp'
import yashendra from "../Images/yashendra.png"
import abhishekjha from "../Images/abhishek.jpg"
import manishgaur from '../Images/manishgaurcpy.jpg'
import ankitsir from '../Images/ankitsir.jpg'
import ashishguptasir from '../Images/ashishguptasir.jpg'
import khsitijjain from '../Images/kshitijjain.jpg'
import team from '../Images/team.jpg'
import amrita from '../Images/amrita.png'
const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: 'easeOut' }
    }
};

const Team = () => {
    const teamMembers = [
        {
            id: 1,
            name: 'Prof. (Dr.) Prahlad Singh',
            gender: 'Male',
            designation: 'Chairman',
            photo: director
        },
        {
            id: 2,
            name: 'Mr. Ajay Kumar Verma',
            gender: 'Male',
            designation: 'Associate Dean-CBII & CEO, iHub Shivalik',
            photo: ceo
        },
        {
            id: 3,
            name: 'Dr. Surmadhur Pant',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: surmadhurpant
        },
        {
            id: 4,
            name: 'Dr. Abhishek Jha',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: abhishekjha
        },
        {
            id: 5,
            name: 'Mr. Ashish Gupta',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: ashishguptasir
        },

        {
            id: 8,
            name: 'Mr. Yashendra Sharma',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: yashendra
        },
        {
            id: 10,
            name: 'Mr. Ankit Kumar',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: ankitsir
        },
        {
            id: 11,
            name: 'Dr. Shusheel Kumar',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: '/images/team/shusheel-kumar.jpg'
        },

        {
            id: 12,
            name: 'Dr. Amrita Singh',
            gender: 'Female',
            designation: 'Mentor and Professional Member',
            photo: amrita
        },
        {
            id: 13,
            name: 'Mr. Kshitij Jain',
            gender: 'Male',
            designation: 'Mentor and Professional Member',
            photo: khsitijjain
        },
        {
            id: 25,
            name: 'Mrs. Renu Soni',
            gender: 'Female',
            designation: 'Deputy Manager',
            photo: '/images/team/renu-soni.jpg'
        },
        {
            id: 26,
            name: 'Mr. Manish Gaur',
            gender: 'Male',
            designation: 'Office Assistant',
            photo: manishgaur
        }
    ];

    return (
        <section className=" bg-gray-50">
            {/* Hero Section */}
            <motion.div
                className="relative 
                h-[25vh]   /* default mobile */
                        sm:h-[50vh] 
                        md:h-[60vh] 
                        lg:h-[70vh] 
                        xl:h-[80vh] 
                        2xl:h-[90vh]"  // parent has relative height
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeInUp}
            >
                <img
                    src={team}
                    alt="About iHUB Shivalik"
                    className="w-full h-full object-cover object-center"
                />
            </motion.div>


            {/* Leadership Section */}
            <Leadership />

            {/* Team Section */}
            <div className="max-w-7xl mx-auto mt-8">
                <motion.div
                    className="text-center mb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Team</h2>
                    <p className="text-xl text-gray-600">
                        Meet the dedicated team behind iHUB Shivalik, a Spoke of iHUB Divya Sampark, IIT Roorkee
                    </p>
                    <div className="mt-6 h-1 w-24 bg-[rgb(118,8,37)] mx-auto rounded-full"></div>
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={member.id}
                            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    transition: {
                                        delay: index * 0.05,
                                        duration: 0.5
                                    }
                                }
                            }}
                        >
                            <div className="relative pt-[100%] bg-gray-200">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="absolute top-0 left-0 w-full h-full object-cover object-top"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = '/images/team/placeholder.jpg';
                                    }}
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-blue-600 font-medium mb-2">{member.designation}</p>
                                <div className="flex items-center text-gray-500">
                                    {/* <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm">{member.gender}</span> */}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Team Structure Section */}
                <motion.div
                    className="mt-16 bg-white rounded-xl shadow-md p-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                >
                    <h3 className="text-2xl font-bold text-gray-800 mb-6">Team Structure</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        {/* Leadership */}
                        <div className="bg-blue-50 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-[rgb(118,8,37)] mb-3">Leadership</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-[rgb(118,8,37)] rounded-full mr-2"></span>
                                    <span>Chairman</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-[rgb(118,8,37)] rounded-full mr-2"></span>
                                    <span>Associate Dean & CEO</span>
                                </li>
                            </ul>
                        </div>

                        {/* Mentors */}
                        <div className="bg-green-50 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-green-800 mb-3">Mentors</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                                    <span>9 Professional Members</span>
                                </li>
                            </ul>
                        </div>

                        {/* Support Staff */}
                        <div className="bg-purple-50 p-6 rounded-lg">
                            <h4 className="text-lg font-semibold text-purple-800 mb-3">Support Staff</h4>
                            <ul className="space-y-2">
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                    <span>Deputy Manager</span>
                                </li>
                                <li className="flex items-center">
                                    <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
                                    <span>Office Assistant</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Team;
