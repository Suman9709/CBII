import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const IncubationProgramDetails = () => {
    const location = useLocation();
    const program = location.state?.program;

    if (!program) {
        return (
            <div className="max-w-6xl mx-auto py-16 px-4 text-center">
                <h2 className="text-2xl font-bold text-gray-800">Program not found</h2>
                <Link 
                    to="/incubationprograms" 
                    className="mt-4 inline-block text-[rgb(118,8,37)] hover:underline"
                >
                    Back to all programs
                </Link>
            </div>
        );
    }

    return (
        <section className="py-16 px-4 bg-gray-50 min-h-screen">
            <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Program Header */}
                <div className="bg-[rgb(118,8,37)] p-8 text-white">
                    <h1 className="text-3xl font-bold">{program.title}</h1>
                    <p className="text-blue-100 mt-2 text-lg">{program.duration} Program</p>
                </div>

                {/* Program Body */}
                <div className="p-8">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Overview</h2>
                        <p className="text-gray-700 text-lg">{program.detailedDescription}</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Highlights</h2>
                            <ul className="space-y-3">
                                {program.highlights.map((highlight, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-6 h-6 text-[rgb(118,8,37)] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 text-lg">{highlight}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
                            <ul className="space-y-3">
                                {program.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start">
                                        <svg className="w-6 h-6 text-[rgb(118,8,37)] mt-0.5 mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700 text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-8">
                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[rgb(118,8,37)]">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Program Outcomes</h2>
                            <p className="text-gray-700 text-lg">{program.outcome}</p>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-[rgb(118,8,37)]">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Eligibility Criteria</h2>
                            <p className="text-gray-700 text-lg">{program.eligibility}</p>
                        </div>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Program Timeline</h2>
                        <ol className="relative border-l border-[rgb(118,8,37)]">
                            {program.timeline.map((item, index) => (
                                <li key={index} className="mb-6 ml-4">
                                    <div className="absolute w-3 h-3 bg-[rgb(118,8,37)] rounded-full mt-1.5 -left-1.5 border border-white"></div>
                                    <p className="text-lg font-normal text-gray-700">{item}</p>
                                </li>
                            ))}
                        </ol>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Application Deadline</h2>
                            <p className="text-gray-700 text-lg">{program.applicationDeadline}</p>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-gray-800 mb-3">Program Start Date</h2>
                            <p className="text-gray-700 text-lg">{program.programStart}</p>
                        </div>
                    </div>
                </div>

                {/* Program Footer */}
                <div className="px-8 pb-8">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Link 
                            to="/programs/incubation" 
                            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium rounded-lg text-center transition-colors duration-300"
                        >
                            Back to Programs
                        </Link>
                        <Link 
                            to="/incubationprogramregistration" 
                            state={{ program: program }}
                            className="px-6 py-3 bg-[rgb(118,8,37)] hover:bg-[rgb(100,6,31)] text-white font-medium rounded-lg text-center transition-colors duration-300"
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default IncubationProgramDetails;