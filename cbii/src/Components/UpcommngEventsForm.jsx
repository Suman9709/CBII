import React, { useState } from 'react';

const UpcomingEventsForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '', email: '', contact: '', gender: '', city: '', state: '',
        applyForIdeathon: '', participantAs: '', teamName: '', theme: '',
        problemStatement: '', legalIdentity: '', stage: '', teamSize: '',
        revenue: '', funding: '', ip: '', ipType: '', ipDetails: '',
        interested: '', participantType: ''
    });

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNext = e => {
        e.preventDefault();
        setStep(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {
            name, email, contact, gender, city, state, applyForIdeathon,
            participantAs, teamName, theme, problemStatement, legalIdentity,
            stage, teamSize, revenue, funding, ip, ipType, ipDetails,
            interested, participantType
        } = formData;
        if (!formData) {
            alert("All fields are required")
            return;
        }
        try {
            const response = await fetch("http://localhost:5000/add-to-sheet", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: [
                        name, email, contact, gender, city, state, applyForIdeathon,
                        participantAs, teamName, theme, problemStatement, legalIdentity,
                        stage, teamSize, revenue, funding, ip, ipType, ipDetails,
                        interested, participantType
                    ],
                }),
            });

            console.log(response);

        } catch (error) {
            console.error("Error:", error);
        }
    };


    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Startup Pitching Registration Form</h2>
            <form onSubmit={step === 2 ? handleSubmit : handleNext} className="space-y-4">
                {step === 1 && (
                    <>
                        <div>
                            <label className="block font-semibold">Name <span className="text-red-500">*</span></label>
                            <input name="name" required onChange={handleChange} className="input" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold">Email <span className="text-red-500">*</span></label>
                                <input type="email" name="email" required onChange={handleChange} className="input" />
                            </div>
                            <div>
                                <label className="block font-semibold">Contact <span className="text-red-500">*</span></label>
                                <input name="contact" required onChange={handleChange} className="input" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold">Gender <span className="text-red-500">*</span></label>
                                <select name="gender" required onChange={handleChange} className="input">
                                    <option value="">Select</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-semibold">City <span className="text-red-500">*</span></label>
                                <input name="city" required onChange={handleChange} className="input" />
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold">State & Union Territory <span className="text-red-500">*</span></label>
                            <select name="state" required onChange={handleChange} className="input">
                                <option value="">Select</option>
                                {[
                                    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
                                    "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
                                    "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
                                    "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                                    "Uttar Pradesh", "Uttarakhand", "West Bengal", "Andaman and Nicobar Islands",
                                    "Chandigarh", "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
                                    "Ladakh", "Lakshadweep", "Puducherry"
                                ].map(state => <option key={state}>{state}</option>)}
                            </select>
                        </div>

                        <div>
                            <label className="block font-semibold">Apply for Ideathon <span className="text-red-500">*</span></label>
                            <select name="applyForIdeathon" required onChange={handleChange} className="input">
                                {Array.from({ length: 9 }, (_, i) => (
                                    <option key={i} value={`L${i + 1}`}>{`L${i + 1}`}</option>
                                ))}
                            </select>
                        </div>

                        <div>
                            <label className="block font-semibold">Your Participation as <span className="text-red-500">*</span></label>
                            <select name="participantAs" required onChange={handleChange} className="input">
                                <option value="">Select</option>
                                <option>Attendee</option>
                                <option>Exhibition</option>
                                <option>Pitch and Presentation (For Startups)</option>
                                <option>Pitch and Presentation (For Non-Startups)</option>
                                <option>Sponsors / Partners</option>
                            </select>
                        </div>

                        <button type="submit" className="btn-primary">Next</button>
                    </>
                )}

                {step === 2 && (
                    <>
                        <div>
                            <label className="block font-semibold">Team Name <span className="text-red-500">*</span></label>
                            <input name="teamName" required onChange={handleChange} className="input" />
                        </div>
                        {/* Participant Type */}
                        <div>
                            <label className="block font-semibold">
                                Participant Type <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="participantType"
                                required
                                value={formData.participantType}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select Participant Type</option>
                                <option value="Startup">Startup</option>
                                <option value="Institute">Institute</option>
                                <option value="School">School</option>
                            </select>
                        </div>

                        {/* Theme */}
                        <div>
                            <label className="block font-semibold">
                                Theme <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="theme"
                                required
                                value={formData.theme}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select Theme</option>

                                {formData.participantType === 'Startup' && (
                                    <>
                                        <option>Emerging Tech in Clean Energy</option>
                                        <option>AI/ML for Sustainable Development</option>
                                        <option>Smart Logistics & Mobility</option>
                                        <option>Fintech for Social Impact</option>
                                    </>
                                )}

                                {formData.participantType === 'Institute' && (
                                    <>
                                        <option>Research-Based Innovation</option>
                                        <option>Smart Campus Solutions</option>
                                        <option>Industry-Academia Collaboration</option>
                                        <option>IoT for Institutional Efficiency</option>
                                    </>
                                )}

                                {formData.participantType === 'School' && (
                                    <>
                                        <option>Science for Daily Life</option>
                                        <option>Eco-friendly Student Projects</option>
                                        <option>Creative Use of Technology</option>
                                        <option>Awareness for Health & Safety</option>
                                    </>
                                )}
                            </select>
                        </div>

                        {/* Problem Statement */}
                        <div>
                            <label className="block font-semibold">
                                Problem Statement <span className="text-red-500">*</span>
                            </label>
                            <select
                                name="problemStatement"
                                required
                                value={formData.problemStatement}
                                onChange={handleChange}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md"
                            >
                                <option value="">Select Problem Statement</option>

                                {/* STARTUP */}
                                {formData.theme === "Emerging Tech in Clean Energy" && (
                                    <>
                                        <option>AI for optimizing solar battery storage</option>
                                        <option>Decentralized grids for rural electrification</option>
                                        <option>EV charging network management</option>
                                        <option>Carbon footprint reduction tool</option>
                                    </>
                                )}
                                {formData.theme === "Smart Logistics & Mobility" && (
                                    <>
                                        <option>IoT for cold chain logistics</option>
                                        <option>Traffic prediction and route planning</option>
                                        <option>Smart inventory management</option>
                                        <option>Real-time fleet tracking system</option>
                                    </>
                                )}
                                {formData.theme === "AI/ML for Sustainable Development" && (
                                    <>
                                        <option>AI-based energy usage prediction</option>
                                        <option>Climate change risk modeling</option>
                                        <option>Predictive maintenance for green buildings</option>
                                        <option>ML model to monitor pollution levels</option>
                                    </>
                                )}
                                {formData.theme === "Fintech for Social Impact" && (
                                    <>
                                        <option>Microloan verification using blockchain</option>
                                        <option>Digital wallet for rural economy</option>
                                        <option>Donation impact tracking system</option>
                                        <option>Subsidy disbursement via smart contracts</option>
                                    </>
                                )}

                                {/* INSTITUTE */}
                                {formData.theme === "Smart Campus Solutions" && (
                                    <>
                                        <option>Energy monitoring dashboard for campuses</option>
                                        <option>Automated attendance via RFID</option>
                                        <option>Smart library book tracking</option>
                                        <option>Digital noticeboard with live feed</option>
                                    </>
                                )}
                                {formData.theme === "Research-Based Innovation" && (
                                    <>
                                        <option>Convert research to commercial prototypes</option>
                                        <option>AI to analyze scientific publications</option>
                                        <option>Collab platform for interdisciplinary research</option>
                                        <option>Research analytics for admin insights</option>
                                    </>
                                )}

                                {/* SCHOOL */}
                                {formData.theme === "Science for Daily Life" && (
                                    <>
                                        <option>Make a solar oven using household items</option>
                                        <option>Using magnets to generate electricity</option>
                                        <option>Recycling plastic into usable items</option>
                                        <option>Home water filtration demonstration</option>
                                    </>
                                )}
                                {formData.theme === "Eco-friendly Student Projects" && (
                                    <>
                                        <option>Design posters to promote hand hygiene</option>
                                        <option>Traffic rule awareness through skits</option>
                                        <option>Emergency exit planning for schools</option>
                                        <option>First aid app idea for students</option>
                                    </>
                                )}
                                {formData.theme === "Creative Use of Technology" && (
                                    <>

                                        <option>P1</option>
                                        <option>P2</option>
                                        <option>P3</option>
                                        <option>P4</option>
                                    </>
                                )}

                                {formData.theme === " Awareness for Health & Safety" && (
                                    <>
                                        <option>X1</option>
                                        <option>X2</option>
                                        <option>X3</option>
                                        <option>X4</option>
                                    </>
                                )}
                            </select>
                        </div>


                        <div>
                            <label className="block font-semibold">Legal Identity <span className="text-red-500">*</span></label>
                            <select name="legalIdentity" required onChange={handleChange} className="input">
                                <option>Select</option>
                                <option>Sole Proprietorship</option>
                                <option>LLP</option>
                                <option>OPC</option>
                                <option>Pvt Ltd</option>
                                <option>Foreign Collaboration</option>
                                <option>Not Registered</option>
                            </select>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block font-semibold">Startup Stage <span className="text-red-500">*</span></label>
                                <select name="stage" required onChange={handleChange} className="input">
                                    <option>Select</option>
                                    <option>Ideation</option>
                                    <option>PoC</option>
                                    <option>MVP</option>
                                    <option>Commercialized</option>
                                    <option>Other</option>
                                </select>
                            </div>
                            <div>
                                <label className="block font-semibold">Team Size <span className="text-red-500">*</span></label>
                                <select name="teamSize" required onChange={handleChange} className="input">
                                    <option>Select</option>
                                    <option>below 2 Members</option>
                                    <option>2 - 5 Members</option>
                                    <option>5 - 10 Members</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block font-semibold">Revenue Traction <span className="text-red-500">*</span></label>
                            <select name="revenue" required onChange={handleChange} className="input">
                                <option>Select</option>
                                <option>Not Generated Yet</option>
                                <option>2 - 5 Lakhs</option>
                                <option>5 - 10 Lakhs</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-semibold">Funding Stage <span className="text-red-500">*</span></label>
                            <select name="funding" required onChange={handleChange} className="input">
                                <option>Select</option>
                                <option>Bootstrapped</option>
                                <option>10 - 25 Lakhs</option>
                                <option>25 - 50 Lakhs</option>
                                <option>Not Yet</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-semibold">IP Associated? <span className="text-red-500">*</span></label>
                            <select name="ip" required onChange={handleChange} className="input">
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        {formData.ip === "Yes" && (
                            <>
                                <label className="block font-semibold">Type of IP <span className="text-red-500">*</span></label>
                                <select name="ipType" required onChange={handleChange} className="input">
                                    <option>Select</option>
                                    <option>Patent - Granted</option>
                                    <option>Patent - Published</option>
                                    <option>Patent - Applied</option>
                                    <option>Trademark</option>
                                    <option>Copyright</option>
                                    <option>Design Rights</option>
                                </select>

                                <label className="block font-semibold">Details about IPs <span className="text-red-500">*</span></label>
                                <input name="ipDetails" required onChange={handleChange} className="input" />
                            </>
                        )}

                        <div>
                            <label className="block font-semibold">Interested in Incubation? <span className="text-red-500">*</span></label>
                            <select name="interested" required onChange={handleChange} className="input">
                                <option>Select</option>
                                <option>Yes</option>
                                <option>No</option>
                            </select>
                        </div>

                        <button type="submit" className="btn-primary">Submit</button>
                    </>
                )}
            </form>
        </div>
    );
};

export default UpcomingEventsForm;
