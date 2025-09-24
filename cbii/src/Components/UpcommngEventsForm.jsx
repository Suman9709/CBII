// import React, { useState } from 'react';
// import problemData from './ProblemStatement.json';
// import ideaBulb from '../Images/ideaBulb.jpg'

// const UpcomingEventsForm = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         contact: '',
//         gender: '',
//         city: '',
//         state: '',
//         applyForIdeathon: '',
//         participantAs: '',
//         teamName: '',
//         theme: '',
//         problemStatement: '',
//         legalIdentity: '',
//         stage: '',
//         teamSize: '',
//         revenue: '',
//         funding: '',
//         ip: '',
//         ipType: '',
//         ipDetails: '',
//         interested: '',
//         participantType: '',
//     });

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({
//             ...prev,
//             [name]: value,
//         }));
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Simple validation example: check if name and email are filled
//         if (!formData.name || !formData.email) {
//             alert('Please fill all required fields.');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:5000/add-to-sheet', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     data: [
//                         formData.name,
//                         formData.email,
//                         formData.contact,
//                         formData.gender,
//                         formData.city,
//                         formData.state,
//                         formData.applyForIdeathon,
//                         formData.participantAs,
//                         formData.teamName,
//                         formData.theme,
//                         formData.problemStatement,
//                         formData.legalIdentity,
//                         formData.stage,
//                         formData.teamSize,
//                         formData.revenue,
//                         formData.funding,
//                         formData.ip,
//                         formData.ipType,
//                         formData.ipDetails,
//                         formData.interested,
//                         formData.participantType,
//                         formData.IdeaPPt,
//                     ],
//                 }),
//             });

//             if (response.ok) {
//                 alert('Form submitted successfully!');
//                 setFormData({
//                     name: '',
//                     email: '',
//                     contact: '',
//                     gender: '',
//                     city: '',
//                     state: '',
//                     applyForIdeathon: '',
//                     participantAs: '',
//                     teamName: '',
//                     theme: '',
//                     problemStatement: '',
//                     legalIdentity: '',
//                     stage: '',
//                     teamSize: '',
//                     revenue: '',
//                     funding: '',
//                     ip: '',
//                     ipType: '',
//                     ipDetails: '',
//                     interested: '',
//                     participantType: '',
//                     IdeaPPt: '',
//                 });
//             } else {
//                 alert('Failed to submit the form. Please try again.');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             alert('Something went wrong. Please try again later.');
//         }
//     };
//     return (
//         <div className="relative min-h-screen bg-gray-100 overflow-hidden py-12 px-4">
//             {/* Background Watermark Image */}
//             <img
//                 src={ideaBulb}
//                 alt="Watermark"
//                 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-10 w-96 h-96 object-contain pointer-events-none"
//                 style={{ zIndex: 0 }}
//             />

//             {/* Form Container */}
//             <div className="relative z-10 max-w-4xl mx-auto p-6  shadow-lg rounded-lg mt-16">
//                 <h2 className="text-2xl font-bold mb-6 text-center">Ideathon 2025 Registration Form</h2>
//                 <form className="space-y-4" onSubmit={handleSubmit}>
//                     {/* Name */}
//                     <div>
//                         <label className="block font-semibold">Name <span className="text-red-500">*</span></label>
//                         <input name="name" value={formData.name} required onChange={handleChange} className="input" />
//                     </div>

//                     {/* Email and Contact */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block font-semibold">Email <span className="text-red-500">*</span></label>
//                             <input type="email" name="email" value={formData.email} required onChange={handleChange} className="input" />
//                         </div>
//                         <div>
//                             <label className="block font-semibold">Contact <span className="text-red-500">*</span></label>
//                             <input name="contact" value={formData.contact} required onChange={handleChange} className="input" />
//                         </div>
//                     </div>

//                     {/* Gender and City */}
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                         <div>
//                             <label className="block font-semibold">Gender <span className="text-red-500">*</span></label>
//                             <select name="gender" value={formData.gender} required onChange={handleChange} className="input">
//                                 <option value="">Select</option>
//                                 <option>Male</option>
//                                 <option>Female</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label className="block font-semibold">City <span className="text-red-500">*</span></label>
//                             <input name="city" value={formData.city} required onChange={handleChange} className="input" />
//                         </div>
//                     </div>

//                     {/* State */}
//                     <div>
//                         <label className="block font-semibold">State & Union Territory <span className="text-red-500">*</span></label>
//                         <select name="state" value={formData.state} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             {[
//                                 'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh', 'Goa', 'Gujarat',
//                                 'Haryana', 'Himachal Pradesh', 'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
//                                 'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab', 'Rajasthan', 'Sikkim',
//                                 'Tamil Nadu', 'Telangana', 'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal',
//                                 'Andaman and Nicobar Islands', 'Chandigarh', 'Dadra and Nagar Haveli and Daman and Diu',
//                                 'Delhi', 'Jammu and Kashmir', 'Ladakh', 'Lakshadweep', 'Puducherry',
//                             ].map((state) => (
//                                 <option key={state} value={state}>{state}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Participant Type */}
//                     <div>
//                         <label className="block font-semibold">Participant Type <span className="text-red-500">*</span></label>
//                         <select name="participantType" value={formData.participantType} required onChange={handleChange} className="input">
//                             <option value="">Select Participant Type</option>
//                             <option value="Startup">Startup</option>
//                             <option value="Institute">Institute</option>
//                             <option value="School">School</option>
//                         </select>
//                     </div>

//                     {/* Apply for Ideathon */}
//                     <div>
//                         <label className="block font-semibold">Apply for Ideathon Venue<span className="text-red-500">*</span></label>
//                         <select name="applyForIdeathon" value={formData.applyForIdeathon} required onChange={handleChange} className="input">
//                             <option value="">Select Venue</option>
//                             {(formData.participantType === 'Startup' || formData.participantType === 'Institute') && (
//                                 <>
//                                     <option value="VenueA">Shivalik College of Engineering Dehradun</option>
//                                     <option value="VenueB">COER University Roorkee</option>
//                                     <option value="VenueC">Amrapali University Haldwani</option>
//                                     <option value="VenueD">GB Pant, Pauri</option>
//                                     <option value="VenueE">BTKIT Dwarahot (Almora)</option>
//                                     <option value="VenueF">THDC Tehri</option>
//                                 </>
//                             )}
//                             {formData.participantType === 'School' && (
//                                 <>
//                                     <option value="VenueA">Birla Open Mind, Dehradun</option>
//                                     <option value="VenueB">The Sapience School, Vikashnagar</option>
//                                     <option value="VenueC">Vidya Mandir Chamba</option>
//                                     <option value="VenueD">Rishi Ram Sikshan, Uttarkashi</option>
//                                     <option value="VenueE">K.V. Gauchar</option>
//                                     <option value="VenueF">Prem Vidhya Mandir, Chamoli</option>
//                                     <option value="VenueG">Army Public School, Almora</option>
//                                     <option value="VenueH">Countrywide School, Bageshwar</option>
//                                     <option value="VenueI">V.C.S.G. College, Pauri</option>
//                                 </>
//                             )}
//                         </select>
//                     </div>

//                     {/* Participant As */}
//                     <div>
//                         <label className="block font-semibold">Participant As <span className="text-red-500">*</span></label>
//                         <select name="participantAs" value={formData.participantAs} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option value="Individual">Individual</option>
//                             <option value="Team">Team</option>
//                         </select>
//                     </div>

//                     {/* Team Name */}
//                     {formData.participantAs === 'Team' && (
//                         <div>
//                             <label className="block font-semibold">Team Name <span className="text-red-500">*</span></label>
//                             <input name="teamName" value={formData.teamName} required onChange={handleChange} className="input" />
//                         </div>
//                     )}

//                     {/* Theme */}
//                     <div>
//                         <label className="block font-semibold">Theme <span className="text-red-500">*</span></label>
//                         <select name="theme" value={formData.theme} onChange={handleChange} required className="input">
//                             <option value="">Select Theme</option>
//                             {problemData.categories.map((cat, i) => (
//                                 <option key={i} value={cat.themes}>{cat.themes}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Problem Statement */}
//                     <div>
//                         <label className="block font-semibold">Problem Statement <span className="text-red-500">*</span></label>
//                         <select
//                             name="problemStatement"
//                             value={formData.problemStatement}
//                             onChange={handleChange}
//                             required
//                             disabled={!formData.theme}
//                             className="input"
//                         >
//                             <option value="">Select Problem Statement</option>
//                             {problemData.categories.find((cat) => cat.themes === formData.theme)?.problems.map((p, i) => (
//                                 <option key={i} value={p}>{p}</option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Legal Identity */}
//                     <div>
//                         <label className="block font-semibold">Legal Identity <span className="text-red-500">*</span></label>
//                         <select name="legalIdentity" value={formData.legalIdentity} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option value="Startup Registered">Startup Registered</option>
//                             <option value="Startup Not Registered">Startup Not Registered</option>
//                             <option value="Registered Company">Registered Company</option>
//                             <option value="Registered Society">Registered Society</option>
//                             <option value="Registered Trust">Registered Trust</option>
//                             <option value="Individual">Individual</option>
//                             <option value="Other">Other</option>
//                         </select>
//                     </div>

//                     {/* Stage */}
//                     <div>
//                         <label className="block font-semibold">Stage <span className="text-red-500">*</span></label>
//                         <select name="stage" value={formData.stage} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option value="Idea Stage">Idea Stage</option>
//                             <option value="Prototype Stage">Prototype Stage</option>
//                             <option value="MVP Stage">MVP Stage</option>
//                             <option value="Commercial Stage">Commercial Stage</option>
//                         </select>
//                     </div>

//                     {/* Team Size */}
//                     <div>
//                         <label className="block font-semibold">Team Size <span className="text-red-500">*</span></label>
//                         <input type="number" name="teamSize" value={formData.teamSize} required onChange={handleChange} className="input" min={1} />
//                     </div>

//                     {/* Revenue */}
//                     <div>
//                         <label className="block font-semibold">Revenue <span className="text-red-500">*</span></label>
//                         <select name="revenue" value={formData.revenue} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option>Less than 1 lakh</option>
//                             <option>1 lakh - 10 lakh</option>
//                             <option>10 lakh - 50 lakh</option>
//                             <option>More than 50 lakh</option>
//                         </select>
//                     </div>

//                     {/* Funding */}
//                     <div>
//                         <label className="block font-semibold">Funding <span className="text-red-500">*</span></label>
//                         <select name="funding" value={formData.funding} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option>Bootstrapped</option>
//                             <option>Seed Funded</option>
//                             <option>Series A</option>
//                             <option>Series B and Above</option>
//                             <option>No Funding</option>
//                         </select>
//                     </div>

//                     {/* IP */}
//                     <div>
//                         <label className="block font-semibold">Intellectual Property <span className="text-red-500">*</span></label>
//                         <select name="ip" value={formData.ip} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option>Yes</option>
//                             <option>No</option>
//                         </select>
//                     </div>

//                     {formData.ip === 'Yes' && (
//                         <>
//                             <div>
//                                 <label className="block font-semibold">IP Type <span className="text-red-500">*</span></label>
//                                 <input name="ipType" value={formData.ipType} required onChange={handleChange} className="input" />
//                             </div>
//                             <div>
//                                 <label className="block font-semibold">IP Details <span className="text-red-500">*</span></label>
//                                 <textarea name="ipDetails" value={formData.ipDetails} required onChange={handleChange} className="input" />
//                             </div>
//                         </>
//                     )}

//                     {/* Startup Support */}
//                     <div>
//                         <label className="block font-semibold">Interested in Startup Uttarakhand Support <span className="text-red-500">*</span></label>
//                         <select name="interested" value={formData.interested} required onChange={handleChange} className="input">
//                             <option value="">Select</option>
//                             <option>Yes</option>
//                             <option>No</option>
//                         </select>
//                     </div>

//                     {/* Idea PPT */}
//                     <div>
//                         <label className="block font-semibold">Idea PPT</label>
//                         <input type="text" name="IdeaPPt" placeholder="Paste your drive link here" value={formData.IdeaPPt} onChange={handleChange} className="input" />
//                     </div>

//                     {/* Submit */}
//                     <div className="text-center mt-6">
//                         <button type="submit" className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition">Submit</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default UpcomingEventsForm;
