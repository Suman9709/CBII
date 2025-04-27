import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    startupName: '',
    registeredAddress: '',
    contactPerson: {
      name: '',
      designation: '',
      email: '',
      mobile: '',
      address: ''
    },
    legalStatus: '',
    registrationNumber: '',
    registrationDate: '',
    founders: [{
      name: '',
      education: '',
      workExperience: '',
      permanentAddress: '',
      contact: '',
      panCard: '',
      aadharCard: ''
    }]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContactPersonChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      contactPerson: {
        ...prev.contactPerson,
        [name]: value
      }
    }));
  };

  const handleFounderChange = (index, e) => {
    const { name, value } = e.target;
    const updatedFounders = [...formData.founders];
    updatedFounders[index][name] = value;
    setFormData(prev => ({
      ...prev,
      founders: updatedFounders
    }));
  };

  const addFounder = () => {
    setFormData(prev => ({
      ...prev,
      founders: [
        ...prev.founders,
        {
          name: '',
          education: '',
          workExperience: '',
          permanentAddress: '',
          contact: '',
          panCard: '',
          aadharCard: ''
        }
      ]
    }));
  };

  const removeFounder = (index) => {
    const updatedFounders = formData.founders.filter((_, i) => i !== index);
    setFormData(prev => ({
      ...prev,
      founders: updatedFounders
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className=" mt-16 min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900">Startup Registration Form</h1>
          <p className="mt-2 text-sm text-gray-600">Please fill in all the required details</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white shadow rounded-lg p-6 sm:p-8">
          {/* Company Details Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 pb-2 border-b border-gray-200">Company Details</h2>
            
            <div className="mb-5">
              <label htmlFor="startupName" className="block text-sm font-medium text-gray-700 mb-1">
                Name of Startup <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="startupName"
                name="startupName"
                value={formData.startupName}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="registeredAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Registered Address of Office <span className="text-red-500">*</span>
              </label>
              <textarea
                id="registeredAddress"
                name="registeredAddress"
                value={formData.registeredAddress}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Primary Contact Person Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 pb-2 border-b border-gray-200">Primary Contact Person</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contactPersonName" className="block text-sm font-medium text-gray-700 mb-1">
                  Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPersonName"
                  name="name"
                  value={formData.contactPerson.name}
                  onChange={handleContactPersonChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactPersonDesignation" className="block text-sm font-medium text-gray-700 mb-1">
                  Designation <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="contactPersonDesignation"
                  name="designation"
                  value={formData.contactPerson.designation}
                  onChange={handleContactPersonChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="contactPersonEmail" className="block text-sm font-medium text-gray-700 mb-1">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="contactPersonEmail"
                  name="email"
                  value={formData.contactPerson.email}
                  onChange={handleContactPersonChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="contactPersonMobile" className="block text-sm font-medium text-gray-700 mb-1">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  id="contactPersonMobile"
                  name="mobile"
                  value={formData.contactPerson.mobile}
                  onChange={handleContactPersonChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                />
              </div>
            </div>
            
            <div className="mb-4">
              <label htmlFor="contactPersonAddress" className="block text-sm font-medium text-gray-700 mb-1">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contactPersonAddress"
                name="address"
                value={formData.contactPerson.address}
                onChange={handleContactPersonChange}
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Legal Status Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 pb-2 border-b border-gray-200">Legal Status</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <label htmlFor="legalStatus" className="block text-sm font-medium text-gray-700 mb-1">
                  Legal Status of firm <span className="text-red-500">*</span>
                </label>
                <select
                  id="legalStatus"
                  name="legalStatus"
                  value={formData.legalStatus}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select Legal Status</option>
                  <option value="Private Limited">Private Limited</option>
                  <option value="LLP">Limited Liability Partnership (LLP)</option>
                  <option value="Partnership">Partnership</option>
                  <option value="Sole Proprietorship">Sole Proprietorship</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              {formData.legalStatus && (
                <>
                  <div>
                    <label htmlFor="registrationNumber" className="block text-sm font-medium text-gray-700 mb-1">
                      Registration Number
                    </label>
                    <input
                      type="text"
                      id="registrationNumber"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div>
                    <label htmlFor="registrationDate" className="block text-sm font-medium text-gray-700 mb-1">
                      Registration Date
                    </label>
                    <input
                      type="date"
                      id="registrationDate"
                      name="registrationDate"
                      value={formData.registrationDate}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Founders Details Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 pb-2 border-b border-gray-200">Founders Details</h2>
            
            {formData.founders.map((founder, index) => (
              <div key={index} className="mb-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-medium text-gray-800">Founder {index + 1}</h3>
                  {index > 0 && (
                    <button 
                      type="button" 
                      className="text-sm text-red-600 hover:text-red-800 font-medium"
                      onClick={() => removeFounder(index)}
                    >
                      Remove Founder
                    </button>
                  )}
                </div>
                
                <div className="mb-4">
                  <label htmlFor={`founderName-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`founderName-${index}`}
                    name="name"
                    value={founder.name}
                    onChange={(e) => handleFounderChange(index, e)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor={`founderEducation-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Educational Qualification <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`founderEducation-${index}`}
                    name="education"
                    value={founder.education}
                    onChange={(e) => handleFounderChange(index, e)}
                    placeholder="Degree, Year, University"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor={`founderWorkExperience-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Work Experience <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id={`founderWorkExperience-${index}`}
                    name="workExperience"
                    value={founder.workExperience}
                    onChange={(e) => handleFounderChange(index, e)}
                    placeholder="Company, No. of Years, Functional Area"
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor={`founderPermanentAddress-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Permanent Address <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id={`founderPermanentAddress-${index}`}
                    name="permanentAddress"
                    value={founder.permanentAddress}
                    onChange={(e) => handleFounderChange(index, e)}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor={`founderContact-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Details <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id={`founderContact-${index}`}
                    name="contact"
                    value={founder.contact}
                    onChange={(e) => handleFounderChange(index, e)}
                    placeholder="Phone, Mobile, Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor={`founderPanCard-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      PAN Card <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`founderPanCard-${index}`}
                      name="panCard"
                      value={founder.panCard}
                      onChange={(e) => handleFounderChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor={`founderAadharCard-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      AADHAR Card No. <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`founderAadharCard-${index}`}
                      name="aadharCard"
                      value={founder.aadharCard}
                      onChange={(e) => handleFounderChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
                </div>
              </div>
            ))}
            
            <button 
              type="button" 
              className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={addFounder}
            >
              + Add Another Founder
            </button>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;