import React, { useState } from 'react';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    // Company Details
    startupName: '',
    registeredAddress: '',
    
    // Primary Contact Person
    contactPerson: {
      name: '',
      designation: '',
      email: '',
      mobile: '',
      address: ''
    },
    
    // Legal Status
    legalStatus: '',
    registrationNumber: '',
    registrationDate: '',
    
    // Product and Users Details
    coreOffering: '',
    endCustomers: '',
    problemsSolved: '',
    revenueModel: '',
    licensingRequired: '',
    licenseObtained: '',
    licenseDetails: '',
    
    // Documents
    projectDocument: null,
    businessPlan: null,
    
    // CBI Policy
    cbiiPolicy: false,
    
    // Founders
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
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleFileChange = (field) => (e) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.files[0]
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
    // Add form submission logic here
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

          {/* Product and Users Details Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 pb-2 border-b border-gray-200">Product and Users Details</h2>
            
            <div className="mb-5">
              <label htmlFor="coreOffering" className="block text-sm font-medium text-gray-700 mb-1">
                Core Offering (max 50 words) <span className="text-red-500">*</span>
              </label>
              <textarea
                id="coreOffering"
                name="coreOffering"
                value={formData.coreOffering}
                onChange={handleChange}
                rows={3}
                maxLength={300}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
              <p className="text-xs text-gray-500 mt-1">
                {formData.coreOffering.length}/300 characters
              </p>
            </div>
            
            <div className="mb-5">
              <label htmlFor="endCustomers" className="block text-sm font-medium text-gray-700 mb-1">
                End Customers <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="endCustomers"
                name="endCustomers"
                value={formData.endCustomers}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="problemsSolved" className="block text-sm font-medium text-gray-700 mb-1">
                Problems Being Solved <span className="text-red-500">*</span>
              </label>
              <textarea
                id="problemsSolved"
                name="problemsSolved"
                value={formData.problemsSolved}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="List each problem on a new line"
                required
              />
            </div>
            
            <div className="mb-5">
              <label htmlFor="revenueModel" className="block text-sm font-medium text-gray-700 mb-1">
                Revenue Model <span className="text-red-500">*</span>
              </label>
              <textarea
                id="revenueModel"
                name="revenueModel"
                value={formData.revenueModel}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label htmlFor="licensingRequired" className="block text-sm font-medium text-gray-700 mb-1">
                  Licensing Required? <span className="text-red-500">*</span>
                </label>
                <select
                  id="licensingRequired"
                  name="licensingRequired"
                  value={formData.licensingRequired}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  required
                >
                  <option value="">Select</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              
              {formData.licensingRequired === 'Yes' && (
                <>
                  <div>
                    <label htmlFor="licenseObtained" className="block text-sm font-medium text-gray-700 mb-1">
                      License Obtained? <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="licenseObtained"
                      name="licenseObtained"
                      value={formData.licenseObtained}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select</option>
                      <option value="Yes">Yes</option>
                      <option value="No">No (in process)</option>
                    </select>
                  </div>
                  {formData.licenseObtained === 'Yes' && (
                    <div className="col-span-2">
                      <label htmlFor="licenseDetails" className="block text-sm font-medium text-gray-700 mb-1">
                        License Details <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="licenseDetails"
                        name="licenseDetails"
                        value={formData.licenseDetails}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                        required
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Document Uploads Section */}
          <div className="mb-10">
            <h2 className="text-xl font-semibold text-blue-600 mb-6 pb-2 border-b border-gray-200">Document Uploads</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="projectDocument" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Document (PDF/DOCX) <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="projectDocument" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload file</span>
                        <input id="projectDocument" name="projectDocument" type="file" className="sr-only" onChange={handleFileChange('projectDocument')} accept=".pdf,.doc,.docx" required />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 10MB</p>
                  </div>
                </div>
                {formData.projectDocument && (
                  <p className="mt-2 text-sm text-gray-600">Selected: {formData.projectDocument.name}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="businessPlan" className="block text-sm font-medium text-gray-700 mb-2">
                  Business Plan (PDF/DOCX) <span className="text-red-500">*</span>
                </label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                      <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <div className="flex text-sm text-gray-600">
                      <label htmlFor="businessPlan" className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                        <span>Upload file</span>
                        <input id="businessPlan" name="businessPlan" type="file" className="sr-only" onChange={handleFileChange('businessPlan')} accept=".pdf,.doc,.docx" required />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PDF, DOC, or DOCX up to 100MB</p>
                  </div>
                </div>
                {formData.businessPlan && (
                  <p className="mt-2 text-sm text-gray-600">Selected: {formData.businessPlan.name}</p>
                )}
              </div>
            </div>
          </div>

          {/* CBI Policy Section */}
          <div className="mb-10 p-4 bg-blue-50 rounded-lg">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">Confidential Business Information Policy</h2>
            <div className="prose prose-sm text-gray-600 mb-4">
              <p>All information submitted will be treated as confidential business information (CBI) and protected accordingly:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>Used only for evaluation purposes</li>
                <li>Access limited to authorized personnel</li>
                <li>Stored securely with encryption</li>
                <li>Not shared with third parties without consent</li>
              </ul>
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="cbiiPolicy"
                  name="cbiiPolicy"
                  type="checkbox"
                  checked={formData.cbiiPolicy}
                  onChange={handleChange}
                  className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="cbiiPolicy" className="font-medium text-gray-700">
                  I agree to the CBI Policy <span className="text-red-500">*</span>
                </label>
              </div>
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
                      Remove
                    </button>
                  )}
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
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
                  <div>
                    <label htmlFor={`founderEducation-${index}`} className="block text-sm font-medium text-gray-700 mb-1">
                      Education <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id={`founderEducation-${index}`}
                      name="education"
                      value={founder.education}
                      onChange={(e) => handleFounderChange(index, e)}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      required
                    />
                  </div>
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
              disabled={!formData.cbiiPolicy}
              className={`px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                formData.cbiiPolicy ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'
              }`}
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