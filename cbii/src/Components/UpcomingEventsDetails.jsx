import React from "react";

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
                    <p><strong>Institutes:</strong> Open to students, alumni, faculty from Shivalik and other colleges.</p>
                    <p><strong>Schools:</strong> Grade 9–12 students can participate.</p>
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
                <p className="text-gray-700 mb-2">Selected teams receive:</p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Cash Prizes (Up to ₹25,000 for institutes & ₹15,000 for schools)</li>
                    <li>Mentorship & Networking Opportunities</li>
                    <li>Access to Seed Funding (Up to ₹5 Lacs)</li>
                    <li>Co-working Space & Infrastructure</li>
                </ul>

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

                <div className="text-center mt-10 flex gap-4">
                    <button className="inline-block bg-[#841B31] hover:bg-[#a12a45] text-white font-semibold px-6 py-3 rounded-lg transition">
                        Register Now
                    </button>
                    <a
                        href="cbii\public\File\Startup Pitching.docx"
                        download
                        className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition">
                        Download PDF
                    </a>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEventsDetails;
