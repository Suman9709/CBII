import React, { useState } from 'react';
import problemData from './ProblemStatement.json';

const UpcomingEventsForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        contact: '',
        gender: '',
        city: '',
        state: '',
        applyForIdeathon: '',
        participantAs: '',
        teamName: '',
        theme: '',
        problemStatement: '',
        legalIdentity: '',
        stage: '',
        teamSize: '',
        revenue: '',
        funding: '',
        ip: '',
        ipType: '',
        ipDetails: '',
        interested: '',
        participantType: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Simple validation example: check if name and email are filled
        if (!formData.name || !formData.email) {
            alert('Please fill all required fields.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/add-to-sheet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: [
                        formData.name,
                        formData.email,
                        formData.contact,
                        formData.gender,
                        formData.city,
                        formData.state,
                        formData.applyForIdeathon,
                        formData.participantAs,
                        formData.teamName,
                        formData.theme,
                        formData.problemStatement,
                        formData.legalIdentity,
                        formData.stage,
                        formData.teamSize,
                        formData.revenue,
                        formData.funding,
                        formData.ip,
                        formData.ipType,
                        formData.ipDetails,
                        formData.interested,
                        formData.participantType,
                        formData.IdeaPPt,
                    ],
                }),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({
                    name: '',
                    email: '',
                    contact: '',
                    gender: '',
                    city: '',
                    state: '',
                    applyForIdeathon: '',
                    participantAs: '',
                    teamName: '',
                    theme: '',
                    problemStatement: '',
                    legalIdentity: '',
                    stage: '',
                    teamSize: '',
                    revenue: '',
                    funding: '',
                    ip: '',
                    ipType: '',
                    ipDetails: '',
                    interested: '',
                    participantType: '',
                    IdeaPPt: '',
                });
            } else {
                alert('Failed to submit the form. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-24 mb-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Ideathon 2025 Registration Form</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {/* Name */}
                <div>
                    <label className="block font-semibold">
                        Name <span className="text-red-500">*</span>
                    </label>
                    <input
                        name="name"
                        value={formData.name}
                        required
                        onChange={handleChange}
                        className="input"
                    />
                </div>

                {/* Email and Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                    <div>
                        <label className="block font-semibold">
                            Contact <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="contact"
                            value={formData.contact}
                            required
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                </div>

                {/* Gender and City */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block font-semibold">
                            Gender <span className="text-red-500">*</span>
                        </label>
                        <select
                            name="gender"
                            value={formData.gender}
                            required
                            onChange={handleChange}
                            className="input"
                        >
                            <option value="">Select</option>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                    </div>
                    <div>
                        <label className="block font-semibold">
                            City <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="city"
                            value={formData.city}
                            required
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                </div>

                {/* State */}
                <div>
                    <label className="block font-semibold">
                        State & Union Territory <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="state"
                        value={formData.state}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        {[
                            'Andhra Pradesh',
                            'Arunachal Pradesh',
                            'Assam',
                            'Bihar',
                            'Chhattisgarh',
                            'Goa',
                            'Gujarat',
                            'Haryana',
                            'Himachal Pradesh',
                            'Jharkhand',
                            'Karnataka',
                            'Kerala',
                            'Madhya Pradesh',
                            'Maharashtra',
                            'Manipur',
                            'Meghalaya',
                            'Mizoram',
                            'Nagaland',
                            'Odisha',
                            'Punjab',
                            'Rajasthan',
                            'Sikkim',
                            'Tamil Nadu',
                            'Telangana',
                            'Tripura',
                            'Uttar Pradesh',
                            'Uttarakhand',
                            'West Bengal',
                            'Andaman and Nicobar Islands',
                            'Chandigarh',
                            'Dadra and Nagar Haveli and Daman and Diu',
                            'Delhi',
                            'Jammu and Kashmir',
                            'Ladakh',
                            'Lakshadweep',
                            'Puducherry',
                        ].map((state) => (
                            <option key={state} value={state}>
                                {state}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Participant Type */}
                <div>
                    <label className="block font-semibold">
                        Participant Type <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="participantType"
                        value={formData.participantType}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select Participant Type</option>
                        <option value="Startup">Startup</option>
                        <option value="Institute">Institute</option>
                        <option value="School">School</option>
                    </select>
                </div>

                {/* Apply for Ideathon (conditional) */}
                <div>
                    <label className="block font-semibold">
                        Apply for Ideathon Venue<span className="text-red-500">*</span>
                    </label>
                    <select
                        name="applyForIdeathon"
                        value={formData.applyForIdeathon}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select Venue</option>

                        {(formData.participantType === 'Startup' || formData.participantType === 'Institute') && (
                            <>
                                <option value="VenueA">Shivalik College of Engineering Dehradun</option>
                                <option value="VenueB">COER University Roorkee</option>
                                <option value="VenueC">Amrapali University Haldwani</option>
                                <option value="VenueD">GB Pant, Pauri</option>
                                <option value="VenueE">BTKIT Dwarahot (Almora)</option>
                                <option value="VenueF">THDC Tehri</option>
                            </>
                        )}

                        {formData.participantType === 'School' && (
                            <>
                                <option value="VenueA">Dehradun Birla Open Mind International School, Dehradun</option>
                                <option value="VenueB">The Sapience School, Vikashnagar (Dehradun)</option>
                                <option value="VenueC">Vidya Mandir Chamba, Tehri</option>
                                <option value="VenueD">Uttarkashi Rishi Ram Sikshan Sansthan, Uttarkashi</option>
                                <option value="VenueE">K.V. Gauchar (Rudra Prayag)</option>
                                <option value="VenueF">Chamoli Subhodh Prem Vidhya Mandir, Gopeshwar (Chamoli)</option>
                                <option value="VenueG">Army Public School, Almora</option>
                                <option value="VenueH">Countrywide School, Bageshwar</option>
                                <option value="VenueI">Veer Chandra Singh Garhwali Govt. College, Pauri</option>
                            </>
                        )}
                    </select>
                </div>

                {/* Participant As */}
                <div>
                    <label className="block font-semibold">
                        Participant As <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="participantAs"
                        value={formData.participantAs}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Individual">Individual</option>
                        <option value="Team">Team</option>
                    </select>
                </div>

                {/* Team Name (conditional) */}
                {formData.participantAs === 'Team' && (
                    <div>
                        <label className="block font-semibold">
                            Team Name <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="teamName"
                            value={formData.teamName}
                            required
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                )}

                {/* Theme */}
                <div>
                    <label className="block font-semibold mb-1">
                        Theme <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="theme"
                        value={formData.theme}
                        onChange={handleChange}
                        required
                        className="input w-full border px-3 py-2 rounded"
                    >
                        <option value="">Select Theme</option>
                        {problemData.categories.map((category, i) => (
                            <option key={i} value={category.themes}>
                                {category.themes}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Problem Statement Select */}
                <div>
                    <label className="block font-semibold mb-1">
                        Problem Statement <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="problemStatement"
                        value={formData.problemStatement}
                        onChange={handleChange}
                        required
                        disabled={!formData.theme}
                        className="input w-full border px-3 py-2 rounded"
                    >
                        <option value="">Select Problem Statement</option>
                        {problemData.categories
                            .find((category) => category.themes === formData.theme)
                            ?.problems.map((problem, i) => (
                                <option key={i} value={problem}>
                                    {problem}
                                </option>
                            ))}
                    </select>


                </div>


                {/* Legal Identity */}
                <div>
                    <label className="block font-semibold">
                        Legal Identity <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="legalIdentity"
                        value={formData.legalIdentity}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Startup Registered">Startup Registered</option>
                        <option value="Startup Not Registered">Startup Not Registered</option>
                        <option value="Registered Company">Registered Company</option>
                        <option value="Registered Society">Registered Society</option>
                        <option value="Registered Trust">Registered Trust</option>
                        <option value="Individual">Individual</option>
                        <option value="Other">Other</option>
                    </select>
                </div>

                {/* Stage */}
                <div>
                    <label className="block font-semibold">
                        Stage <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="stage"
                        value={formData.stage}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Idea Stage">Idea Stage</option>
                        <option value="Prototype Stage">Prototype Stage</option>
                        <option value="MVP Stage">MVP Stage</option>
                        <option value="Commercial Stage">Commercial Stage</option>
                    </select>
                </div>

                {/* Team Size */}
                <div>
                    <label className="block font-semibold">
                        Team Size <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="number"
                        name="teamSize"
                        value={formData.teamSize}
                        required
                        onChange={handleChange}
                        min="1"
                        className="input"
                    />
                </div>

                {/* Revenue */}
                <div>
                    <label className="block font-semibold">
                        Revenue <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="revenue"
                        value={formData.revenue}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Less than 1 lakh">Less than 1 lakh</option>
                        <option value="1 lakh - 10 lakh">1 lakh - 10 lakh</option>
                        <option value="10 lakh - 50 lakh">10 lakh - 50 lakh</option>
                        <option value="More than 50 lakh">More than 50 lakh</option>
                    </select>
                </div>

                {/* Funding */}
                <div>
                    <label className="block font-semibold">
                        Funding <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="funding"
                        value={formData.funding}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Bootstrapped">Bootstrapped</option>
                        <option value="Seed Funded">Seed Funded</option>
                        <option value="Series A">Series A</option>
                        <option value="Series B and Above">Series B and Above</option>
                        <option value="No Funding">No Funding</option>
                    </select>
                </div>

                {/* Intellectual Property */}
                <div>
                    <label className="block font-semibold">
                        Intellectual Property <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="ip"
                        value={formData.ip}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>

                {/* IP Type (conditional) */}
                {formData.ip === 'Yes' && (
                    <div>
                        <label className="block font-semibold">
                            IP Type <span className="text-red-500">*</span>
                        </label>
                        <input
                            name="ipType"
                            value={formData.ipType}
                            required
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                )}

                {/* IP Details (conditional) */}
                {formData.ip === 'Yes' && (
                    <div>
                        <label className="block font-semibold">
                            IP Details <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            name="ipDetails"
                            value={formData.ipDetails}
                            required
                            onChange={handleChange}
                            className="input"
                        />
                    </div>
                )}

                {/* Interested in Support */}
                <div>
                    <label className="block font-semibold">
                        Interested in support from Startup Uttarakhand <span className="text-red-500">*</span>
                    </label>
                    <select
                        name="interested"
                        value={formData.interested}
                        required
                        onChange={handleChange}
                        className="input"
                    >
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="uploadFile" className="block font-semibold">Idea PPt.</label>
                    <input type="text" name="uploadFile" id="uploadFile" placeholder='Paste your drive link here of ppt'
                        value={formData.IdeaPPt}
                        onChange={handleChange}
                        className="input" />

                </div>

                {/* Submit Button */}
                <div className="text-center mt-6">
                    <button
                        type="submit"
                        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition cursor-pointer"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpcomingEventsForm;
