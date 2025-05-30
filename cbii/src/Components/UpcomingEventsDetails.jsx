import React from "react";
import { Link } from "react-router-dom";

const UpcomingEventsDetails = () => {
    return (
        <div className="bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen py-16 px-6 lg:px-24 mt-8">
            <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-2xl p-10">
                <h1 className="text-4xl font-bold text-[#841B31] mb-6 text-center">Ideathon 2025: Solving Societal Challenges</h1>

                <p className="text-gray-700 mb-6">
                    The <strong>Center of Business Incubation and Innovation (CBII)</strong> at Shivalik College of Engineering, Dehradun,
                    is organizing Ideathon 2025 to foster innovation and entrepreneurship. The event encourages innovators and entrepreneurs
                    to pitch ideas for solving societal problems aligned with the <strong>UN SDGs</strong>.
                </p>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Category Details</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>
                        <strong>Category 1 (Institute/Startups):</strong> Open for college students and early-stage or working startups.
                    </li>
                    <li>
                        <strong>Category 2 (Schools):</strong> Open for school students from Grade 9 to 12.
                    </li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Program Objectives</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Identify and nurture innovative ideas with market potential.</li>
                    <li>Provide structured incubation with mentorship and funding guidance.</li>
                    <li>Bridge the gap between academia and industry needs.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Themes Aligned with UN SDGs</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Sustainable Energy & Environment (SDG 7, 11, 13, 15)</li>
                    <li>Smart Cities & Infrastructure (SDG 9, 11)</li>
                    <li>Healthcare & Wellbeing (SDG 3)</li>
                    <li>Food Security & Agriculture (SDG 2)</li>
                    <li>Governance, Security & Disaster Response (SDG 16)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Program Phases</h2>
                <div className="text-gray-700 space-y-2">
                    <p><strong>Phase 1:</strong> Idea Pitching and First Round of Evaluation</p>
                    <p><strong>Phase 2:</strong> 2-Day Bootcamp with Workshops on Design Thinking, Tech (IoT, AI, CPS), and Final Evaluation</p>
                    <p><strong>Phase 3:</strong> Incubation & Product Development at CBII</p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Eligibility</h2>
                <div className="text-gray-700 space-y-2">
                    <p><strong>Institutes & Startups:</strong> Open to students, alumni, faculty from Shivalik and other colleges, as well as early-stage startups.</p>
                    <p><strong>Schools:</strong> Students from Grade 9–12 are eligible to participate.</p>
                </div>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Pitching Guidelines</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Define the problem and its significance.</li>
                    <li>Present your unique solution and its feasibility.</li>
                    <li>Market size, business model, and team strength must be explained.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Evaluation Criteria</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Innovation (30%)</li>
                    <li>Market Viability (20%)</li>
                    <li>Technical Feasibility (20%)</li>
                    <li>Team Strength (20%)</li>
                    <li>Business Model (10%)</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Incubation Benefits</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    {/* Category 1 Card */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="bg-[#841B31] p-4">
                            <h3 className="text-xl font-semibold text-white">Institutes / Startups</h3>
                        </div>
                        <div className="p-5">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        1
                                    </span>
                                    <span className="text-gray-700">1st Prize: <span className="font-medium">₹25,000</span></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        2
                                    </span>
                                    <span className="text-gray-700">2nd Prize: <span className="font-medium">₹15,000</span></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        3
                                    </span>
                                    <span className="text-gray-700">3rd Prize: <span className="font-medium">₹10,000</span> + Incubation Support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700">Access to funding opportunities (up to ₹5 Lacs of seed money) & investor networks</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Category 2 Card */}
                    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300">
                        <div className="bg-[#841B31] p-4">
                            <h3 className="text-xl font-semibold text-white">Schools</h3>
                        </div>
                        <div className="p-5">
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        1
                                    </span>
                                    <span className="text-gray-700">1st Prize: <span className="font-medium">₹15,000</span></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        2
                                    </span>
                                    <span className="text-gray-700">2nd Prize: <span className="font-medium">₹10,000</span></span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        3
                                    </span>
                                    <span className="text-gray-700">3rd Prize: <span className="font-medium">₹5,000</span> + Incubation Support</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 w-5 h-5 bg-[#841B31]/10 text-[#841B31] rounded-full flex items-center justify-center mr-3 mt-0.5">
                                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </span>
                                    <span className="text-gray-700">Access to funding opportunities (up to ₹5 Lacs of seed money) & investor networks</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">How to Apply</h2>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Register via the online form.</li>
                    <li>Pitch your idea at your city's venue.</li>
                    <li>Shortlisted teams proceed to final evaluation at CBII.</li>
                    <li>Winners get onboarded for full incubation.</li>
                </ul>

                <h2 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Contact Information</h2>
                <ul className="text-gray-700 space-y-2">
                    <li><strong>Mr. Yashendra Sharma</strong> – 9317227139, yashender.sharma@shivalikcollege.edu.in</li>
                    <li><strong>Dr. Abhishek Jha</strong> – 8236823641, abhishek.jha@sce.org.in</li>
                    <li><strong>Mr. Ashish Kumar Gupta</strong> – 9557502208, ashish.gupta@sce.org.in</li>
                </ul>

                <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        to="/upcomingEventForm"
                        className="inline-block bg-[#841B31] hover:bg-[#a12a45] text-white font-semibold px-6 py-3 rounded-lg transition"
                    >
                        Register Now
                    </Link>
                    <a
                        href="/StartupPitching.docx"
                        download
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
                    >
                        Download DOCX
                    </a>

                </div>
            </div>
        </div>
    );
};

export default UpcomingEventsDetails;
