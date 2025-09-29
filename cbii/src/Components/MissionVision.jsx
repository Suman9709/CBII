import React from 'react';
import aboutHero from '../Images/aimg13.webp';
import about from '../Images/about.png'
import about1 from '../Images/about1.jpg'
import about2 from '../Images/about2.jpg'
import missonImg from '../Images/missions.png'

const MissionVision = () => {
  return (
    <div className="min-h-screen">
      {/* Full-screen hero image */}
      <div className="relative h-screen max-h-[70vh] w-full overflow-hidden">
        <img
          src={missonImg}
          alt="About iHUB Shivalik"
          className="w-full h-full object-fill "
        />
        {/* <div className="absolute inset-0  flex items-center justify-center">
          <div className="text-center px-4">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About iHUB Shivalik</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Fostering innovation and entrepreneurship through cutting-edge incubation programs
            </p>
          </div>
        </div> */}
      </div>

      {/* Mission & Vision Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Vision Section */}
        <div className="mb-20">
          <div className="flex items-center mb-8">
            <div className="w-16 h-1 bg-blue-600 mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-white p-8 rounded-xl shadow-lg">
            <p className="text-xl text-gray-700 leading-relaxed">
              To create an ambience to help young entrepreneurs with potential to initiate and grow
              in business that involves innovation, sustainable and socially relevant technologies.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div>
          <div className="flex items-center mb-8">
            <div className="w-16 h-1 bg-[rgb(118,8,37)] mr-4"></div>
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
          </div>
          <div className="bg-gradient-to-r from-orange-50 to-white p-8 rounded-xl shadow-lg">
            <ul className="space-y-6">
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-[rgb(118,8,37)] text-white rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg text-gray-700">
                  Provide Business Development Assistance, Networking and relationship support
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-[rgb(118,8,37)] text-white rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg text-gray-700">
                  Create appropriate Infrastructure for startups
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-[rgb(118,8,37)] text-white rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg text-gray-700">
                  Mentoring, counseling and training in the domains of research, product development
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 bg-[rgb(118,8,37)] text-white rounded-full p-2 mr-4">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-lg text-gray-700">
                  Inculcate sound entrepreneurial and management practices
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Values Section (optional) */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Innovation</h3>
            <p className="text-gray-600">
              We foster creative thinking and novel solutions to address real-world challenges.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-[rgb(118,8,37)]">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Sustainability</h3>
            <p className="text-gray-600">
              Our programs emphasize environmentally and socially responsible business practices.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Collaboration</h3>
            <p className="text-gray-600">
              We believe in the power of partnerships between academia, industry and entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MissionVision;