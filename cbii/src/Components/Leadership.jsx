import React from "react";
import akverma from '../Images/ak.jpg';

const Leadership = () => {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Leadership</h2>
          <div className="w-24 h-1 bg-[rgb(118,8,37)] mx-auto"></div>
        </div>

        {/* Profile Card */}
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            {/* Image Column */}
            <div className="md:w-1/3 bg-[rgb(118,8,37)] p-8 flex flex-col items-center justify-center">
              <div className="relative mb-6">
                <div className="absolute -inset-2 border-4 border-white opacity-20 rounded-full"></div>
                <img 
                  src={akverma} 
                  alt="Mr. Ajay Kumar Verma"
                  className="relative rounded-full w-64 h-64 object-cover border-4 border-white"
                />
              </div>
              <h3 className="text-2xl font-bold text-white text-center">Mr. Ajay Kumar Verma</h3>
              <p className="text-blue-200 text-center mt-2">Associate Dean | Innovation Leader</p>
            </div>

            {/* Content Column */}
            <div className="md:w-2/3 p-10">
              {/* Biography Section */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Mr. Ajay Kumar Verma is a trailblazer in fostering innovation, entrepreneurship, and industry-academia collaboration. As the CEO at the Center of Business Incubation and Innovations (CBII), he plays a pivotal role in shaping the future of technology-driven enterprises at Shivalik Campus.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  As the founding CEO of iHUB Shivalik, a spoke of iHUB Divya Sampark, IIT Roorkee, Mr. Verma has been instrumental in building an entrepreneurial ecosystem that bridges academia with cutting-edge technological advancements. His leadership extends to spearheading the Institution's Innovation Council (IIC) as its President, an initiative recognized by the Ministry of Education, Government of India. Through team efforts, he has successfully organized numerous government-sponsored programs aimed at nurturing student and faculty entrepreneurship.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A passionate advocate of hands-on learning, Mr. Verma serves as a permanent Mentor of Change for the Atal Tinkering Lab, under the Atal Innovation Mission, Government of India. His commitment to fostering creativity and problem-solving has empowered countless young minds to develop innovative solutions for real-world challenges.
                </p>
              </div>

              {/* Key Leadership Positions */}
              <div className="mb-10">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                  Professional Highlights
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    "19+ years in academia, research and Innovation",
                    "Specializes in Bearing Fault Diagnosis, Mechanics of Machines",
                    "17+ publications in esteemed journals and conferences",
                    "14+ patents published in engineering innovations",
                    "Principal Investigator for government-funded research projects",
                    "Reviewer for top-tier journals and conferences",
                    "Organized numerous FDPs, SDPs, and STTPs",
                    "Mentor of Change, Atal Innovation Mission"
                  ].map((role, index) => (
                    <div key={index} className="flex items-start">
                      <div className="flex-shrink-0 mt-1">
                        <svg className="w-5 h-5 text-[rgb(118,8,37)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <p className="ml-3 text-gray-700">{role}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[rgb(118,8,37)">
                <p className="italic text-gray-800 mb-2">
                  "Mr. Verma's unwavering commitment to innovation, research excellence, and entrepreneurial leadership makes him a driving force in shaping the future of education and industry collaboration."
                </p>
                <p className="text-[rgb(118,8,37)] font-medium">— Shivalik College of Engineering</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;