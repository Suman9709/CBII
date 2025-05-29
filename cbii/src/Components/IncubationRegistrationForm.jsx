import React, { useState } from 'react';

const IncubationRegistrationForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    institution: '',
    graduationYear: '',
    programInterest: '',
    teamMembers: '',
    ideaDescription: '',
    previousExperience: '',
    expectations: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: null
      }));
    }
  };

  const handleSubmit = (e) => {
    // e.preventDefault();
    // if (validate()) {
    //   setIsSubmitting(true);
    //   // Simulate API call
    //   setTimeout(() => {
    //     console.log('Form submitted:', formData);
    //     setIsSubmitting(false);
    //     setSubmitSuccess(true);
    //     // Reset form after successful submission
    //     setFormData({
    //       fullName: '',
    //       email: '',
    //       phone: '',
    //       institution: '',
    //       graduationYear: '',
    //       programInterest: '',
    //       teamMembers: '',
    //       ideaDescription: '',
    //       previousExperience: '',
    //       expectations: ''
    //     });
    //   }, 1500);
    // }
  };

  const programs = [
    'Pre-Incubation Bootcamp',
    'Summer Startup Sprint',
    'Women Entrepreneurship Program',
    'Deep Tech Accelerator',
    'Social Impact Incubator',
    'Corporate Innovation Program'
  ];

  if (submitSuccess) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Application Submitted!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for applying to our incubation program. Our team will review your application and contact you shortly.
        </p>
        <button
          onClick={() => setSubmitSuccess(false)}
          className="px-6 py-2 bg-[rgb(118,8,37)] hover:bg-[rgb(100,6,31)] text-white rounded-lg transition-colors"
        >
          Submit Another Application
        </button>
      </div>
    );
  }

  return (
    <section className="py-16 px-4 bg-gray-50 mt-12">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Form Header */}
          <div className="bg-[rgb(118,8,37)] p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-2">Incubation Program Application</h2>
            <p className="text-blue-100">Join our ecosystem of innovators and turn your idea into reality</p>
          </div>

          {/* Form Body */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Personal Information</h3>
                
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.fullName ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent`}
                    placeholder="+91 9876543210"
                  />
                  {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="institution" className="block text-sm font-medium text-gray-700 mb-1">
                    Current Institution
                  </label>
                  <input
                    type="text"
                    id="institution"
                    name="institution"
                    value={formData.institution}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent"
                    placeholder="College/University name"
                  />
                </div>

                <div>
                  <label htmlFor="graduationYear" className="block text-sm font-medium text-gray-700 mb-1">
                    Year of Graduation
                  </label>
                  <select
                    id="graduationYear"
                    name="graduationYear"
                    value={formData.graduationYear}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent"
                  >
                    <option value="">Select year</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="Alumni">Alumni</option>
                  </select>
                </div>
              </div>

              {/* Program Information */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-gray-800 border-b pb-2">Program Details</h3>
                
                <div>
                  <label htmlFor="programInterest" className="block text-sm font-medium text-gray-700 mb-1">
                    Program of Interest <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="programInterest"
                    name="programInterest"
                    value={formData.programInterest}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 rounded-lg border ${errors.programInterest ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent`}
                  >
                    <option value="">Select a program</option>
                    {programs.map((program, index) => (
                      <option key={index} value={program}>{program}</option>
                    ))}
                  </select>
                  {errors.programInterest && <p className="mt-1 text-sm text-red-600">{errors.programInterest}</p>}
                </div>

                <div>
                  <label htmlFor="teamMembers" className="block text-sm font-medium text-gray-700 mb-1">
                    Team Members (if any)
                  </label>
                  <input
                    type="text"
                    id="teamMembers"
                    name="teamMembers"
                    value={formData.teamMembers}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent"
                    placeholder="Names and roles of team members"
                  />
                </div>

                <div>
                  <label htmlFor="ideaDescription" className="block text-sm font-medium text-gray-700 mb-1">
                    Idea/Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="ideaDescription"
                    name="ideaDescription"
                    value={formData.ideaDescription}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full px-4 py-2 rounded-lg border ${errors.ideaDescription ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent`}
                    placeholder="Describe your idea, problem it solves, and target market"
                  ></textarea>
                  {errors.ideaDescription && <p className="mt-1 text-sm text-red-600">{errors.ideaDescription}</p>}
                </div>

                <div>
                  <label htmlFor="previousExperience" className="block text-sm font-medium text-gray-700 mb-1">
                    Previous Entrepreneurial Experience (if any)
                  </label>
                  <textarea
                    id="previousExperience"
                    name="previousExperience"
                    value={formData.previousExperience}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent"
                    placeholder="Any previous startups, projects, or relevant experience"
                  ></textarea>
                </div>

                <div>
                  <label htmlFor="expectations" className="block text-sm font-medium text-gray-700 mb-1">
                    What do you hope to gain from this program?
                  </label>
                  <textarea
                    id="expectations"
                    name="expectations"
                    value={formData.expectations}
                    onChange={handleChange}
                    rows="3"
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[rgb(118,8,37)] focus:border-transparent"
                    placeholder="Your expectations and goals"
                  ></textarea>
                </div>
              </div>
            </div>

            {/* Form Footer */}
            <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between items-center">
              <div className="mb-4 sm:mb-0">
                <p className="text-sm text-gray-500">
                  <span className="text-red-500">*</span> indicates required fields
                </p>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-[rgb(118,8,37)] hover:bg-[rgb(100,6,31)] text-white font-semibold rounded-lg shadow-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Submitting...
                  </>
                ) : 'Submit Application'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default IncubationRegistrationForm;