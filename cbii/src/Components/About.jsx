import React from 'react';
import { motion } from 'framer-motion';
import cbii1 from '../Images/cbii1.webp';
import clg2 from '../Images/clg2.webp';
import msme from '../Images/Logo/msme.webp';
import startuputtrakhand from '../Images/Logo/startuputtrakhand.png'
import ihubdivyasampark from '../Images/Logo/ihubdivyasampark.png'
import awadh from '../Images/Logo/awadh.svg'

const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: 'easeOut' },
};

const About = () => {
    return (
        <div className="w-full overflow-x-hidden overflow-y-hidden font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 py-12">

                {/* CBII Section */}
                <motion.div {...fadeInUp} viewport={{ once: true }} className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About <span className="text-[#841B31]">CBII</span>
                    </h1>
                    <p className="text-xl text-gray-600">
                        Center of Business Incubation and Innovations
                    </p>
                    <div className="mt-8 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mb-16">
                    <motion.div {...fadeInUp} viewport={{ once: true }} className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                Shivalik College, Dehradun proudly launched the Center of Business Incubation and Innovations (CBII) in 2022, a pioneering initiative to nurture aspiring entrepreneurs. It is recognized and registered with MSME, Government of India.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                The CBII is running with a vision to cultivate an environment conducive to young entrepreneurs, emphasizing innovation, sustainability, and social relevance. It is designed to support the creation, incubation, and successful operation of innovative businesses that prioritize societal and environmental impact.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Based on its work and progress, the Uttarakhand Startup Council, Directorate of Industries, Government of Uttarakhand has recognized the successful journey of CBII in 2023 and sanctioned financial support to expand its wings further.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} viewport={{ once: true }} className="lg:w-1/2 flex flex-col gap-16">
                        <div className="relative" style={{ height: '57.5%', minHeight: '320px' }}>
                            <img
                                src={cbii1}
                                alt="CBII at Shivalik College"
                                className="h-full w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md">
                                <p className="font-bold text-[#841B31] text-sm md:text-base">Government Recognized</p>
                                <p className="text-xs text-gray-600">Uttarakhand Startup Council</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                                <p className="text-3xl font-bold text-[#841B31]">2022</p>
                                <p className="text-gray-600">Established</p>
                            </div>
                            <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                                <p className="text-3xl font-bold text-[#841B31]">MSME</p>
                                <p className="text-gray-600">Registered</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* iHUB Section */}
                <motion.div {...fadeInUp} viewport={{ once: true }} className="text-center mb-8">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        About <span className="text-[#841B31]">iHUB Shivalik</span>
                    </h1>
                    <p className="text-xl text-gray-600">Research Innovation and Entrepreneurial Hub</p>
                    <div className="mt-8 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
                </motion.div>

                <div className="flex flex-col lg:flex-row-reverse gap-8 lg:gap-12">
                    <motion.div {...fadeInUp} viewport={{ once: true }} className="lg:w-1/2 flex flex-col">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex-grow">
                            <p className="text-lg text-gray-700 leading-relaxed mb-2">
                                Shivalik College has tied up with iHUB DivyaSampark IIT Roorkee in year 2022, and launched iHUB Shivalik, a Spoke of iHUB DivyaSampark, IIT Roorkee.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed mb-2">
                                The college is working in mission mode to provide business development assistance, by ensuring the availability of infrastructure, mentorship, and training support and above all, the entrepreneurial culture among the students in the campus.
                            </p>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                This strategic partnership brings the expertise and resources of one of India's premier institutions to foster innovation and entrepreneurship at Shivalik College.
                            </p>
                        </div>
                    </motion.div>

                    <motion.div {...fadeInUp} viewport={{ once: true }} className="lg:w-1/2 relative">
                        <div className="relative h-full" style={{ height: '57.5%', minHeight: '380px' }}>
                            <img
                                src={clg2}
                                alt="iHub Shivalik at Shivalik College"
                                className="absolute h-full w-full rounded-xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md hidden lg:block">
                                <p className="font-bold text-[#841B31]">IIT Roorkee Partner</p>
                                <p className="text-sm text-gray-600">iHUB DivyaSampark</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Recognitions */}
                <motion.div {...fadeInUp} viewport={{ once: true }} className="mt-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Recognitions & <span className="text-[#841B31]">Collaborations</span>
                        </h2>
                        <div className="mt-4 h-1 w-24 bg-[#841B31] mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
                                    <img src={msme} alt="MSME Logo" className="h-24 object-contain" />
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-[#841B31] mb-3">Registered with MSME </h3>
                                    <p className="text-gray-700">
                                        CBII is officially recognized and registered with MSME, Government of India, validating our commitment to fostering entrepreneurship and supporting innovative business ideas with national recognition.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
                                    <img src={startuputtrakhand} alt="startuputtrakhand" className="h-24 object-contain" />
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-[#841B31] mb-3">StartUp Uttrakhand</h3>
                                    <p className="text-gray-700">
                                        The Uttarakhand Startup Council, Directorate of Industries, Government of Uttarakhand, has recognized CBII in 2023, and sanctioned a financial support of INR 1 Crore to further expand its perspective.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
                                    <img src={ihubdivyasampark} alt="ihubdivyasampark" className="h-24 object-contain" />
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-[#841B31] mb-3">iHub DivyaSampark IIT Roorkee</h3>
                                    <p className="text-gray-700">
                                      iHub DivyaSampark has signed a MoU with Shivalik College of Engineering to launch iHUB Shivalik, backed by a ₹1.15 Cr grant for advanced research and innovation. This initiative fosters cutting-edge projects through expert mentorship and state-of-the-art facilities.
                                    </p>

                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                            <div className="flex flex-col md:flex-row h-full">
                                <div className="md:w-1/3 bg-gray-50 flex items-center justify-center p-6">
                                    <img src={awadh} alt="IIT Roorkee Logo" className="h-24 object-contain" />
                                </div>
                                <div className="md:w-2/3 p-6 flex flex-col justify-center">
                                    <h3 className="text-xl font-bold text-[#841B31] mb-3">iHUB AWaDH IIT Ropar</h3>
                                    <p className="text-gray-700">
                                        Our collaboration with IIT Roorkee through iHUB DivyaSampark brings premier technical expertise and research capabilities to our entrepreneurial ecosystem, elevating the quality of innovation at Shivalik College.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">10+</p>
                            <p className="text-gray-600">Startups Supported</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">15+</p>
                            <p className="text-gray-600">Mentors</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">5+</p>
                            <p className="text-gray-600">Industry Partners</p>
                        </div>
                        <div className="bg-red-50 p-4 rounded-lg text-center hover:bg-red-100 transition-colors">
                            <p className="text-3xl font-bold text-[#841B31]">100%</p>
                            <p className="text-gray-600">Focus on Innovation</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
