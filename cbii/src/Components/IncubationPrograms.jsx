import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const IncubationPrograms = () => {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const programs = [
        {
            id: 1,
            title: "Pre-Incubation Bootcamp",
            duration: "4 Weeks",
            description: "Launchpad for student entrepreneurs to validate ideas and build prototypes",
            highlights: [
                "Idea validation workshops",
                "Business model development",
                "Mentorship from industry experts",
                "Pitch training sessions"
            ],
            outcome: "Top teams get incubation support",
            detailedDescription: "This intensive 4-week program is designed to help early-stage entrepreneurs validate their business ideas and develop prototypes. Through a combination of workshops, mentorship, and hands-on activities, participants will learn the fundamentals of entrepreneurship and get their ideas investor-ready.",
            eligibility: "Open to all students and recent graduates (within 2 years of graduation)",
            benefits: [
                "Access to prototyping lab",
                "Networking opportunities with investors",
                "Certificate of completion",
                "Chance to win seed funding"
            ],
            timeline: [
                "Week 1: Ideation & Validation",
                "Week 2: Business Model Development",
                "Week 3: Prototyping Basics",
                "Week 4: Pitch Preparation & Demo Day"
            ],
            applicationDeadline: "Rolling admissions",
            programStart: "First Monday of every month"
        },
        {
            id: 2,
            title: "Summer Startup Sprint",
            duration: "8 Weeks",
            description: "Intensive summer program for building minimum viable products",
            highlights: [
                "Product development bootcamp",
                "Customer discovery training",
                "UX/UI design workshops",
                "Legal and IP guidance"
            ],
            outcome: "Demo Day with investors",
            detailedDescription: "Our flagship summer program helps startups build and launch their MVP in just 8 weeks. With daily workshops, weekly mentor check-ins, and access to our maker space, teams make rapid progress and leave with a market-ready product.",
            eligibility: "Early-stage startups with at least one technical co-founder",
            benefits: [
                "$5,000 in AWS credits",
                "Legal support package",
                "Co-working space access",
                "Featured in investor newsletter"
            ],
            timeline: [
                "Weeks 1-2: Customer Discovery",
                "Weeks 3-5: Product Development",
                "Weeks 6-7: Testing & Iteration",
                "Week 8: Investor Prep & Demo Day"
            ],
            applicationDeadline: "May 15th, 2023",
            programStart: "June 5th, 2023"
        },
        {
            id: 3,
            title: "Women Entrepreneurship Program",
            duration: "12 Weeks",
            description: "Special initiative to empower women founders",
            highlights: [
                "Female founder mentorship",
                "Funding access workshops",
                "Work-life balance sessions",
                "Networking with women leaders"
            ],
            outcome: "Dedicated funding opportunities",
            detailedDescription: "This program addresses the unique challenges faced by women entrepreneurs. Through specialized workshops, a supportive community, and connections to women investors, we help female founders build sustainable businesses.",
            eligibility: "Women-led startups (at least 50% female ownership)",
            benefits: [
                "Access to women-focused angel networks",
                "Childcare stipend available",
                "Leadership development training",
                "Featured in annual showcase"
            ],
            timeline: [
                "Month 1: Foundations & Network Building",
                "Month 2: Growth Strategies",
                "Month 3: Funding & Scaling",
                "Graduation & Investor Mixer"
            ],
            applicationDeadline: "Applications accepted quarterly",
            programStart: "Next cohort starts September 1st"
        },
        {
            id: 4,
            title: "Deep Tech Accelerator",
            duration: "16 Weeks",
            description: "For startups working on AI, IoT, Blockchain and other deep technologies",
            highlights: [
                "Technical mentorship",
                "Lab access",
                "Prototyping grants",
                "Industry connect"
            ],
            outcome: "Technology commercialization support",
            detailedDescription: "Focused on hard-tech innovations, this program provides specialized support for startups working on advanced technologies. With access to research labs, technical mentors, and industry partners, we help bridge the gap between research and market.",
            eligibility: "Startups with working prototype and IP protection",
            benefits: [
                "Up to $50,000 in prototyping grants",
                "Patent filing support",
                "Industry pilot opportunities",
                "Technical advisory board access"
            ],
            timeline: [
                "Phase 1: Technical Validation (4 weeks)",
                "Phase 2: Product-Market Fit (6 weeks)",
                "Phase 3: Commercialization (6 weeks)",
                "Demo Day & Investor Meetings"
            ],
            applicationDeadline: "October 1st, 2023",
            programStart: "November 1st, 2023"
        },
        {
            id: 5,
            title: "Social Impact Incubator",
            duration: "6 Months",
            description: "For ventures addressing social and environmental challenges",
            highlights: [
                "Impact measurement training",
                "CSR partnership access",
                "Government scheme guidance",
                "Sustainability workshops"
            ],
            outcome: "Grant funding opportunities",
            detailedDescription: "This extended program supports mission-driven entrepreneurs building businesses that create positive social or environmental impact. We focus on sustainable business models, impact measurement, and connecting ventures with aligned funders.",
            eligibility: "Registered social enterprises or nonprofits with revenue model",
            benefits: [
                "Access to impact investor network",
                "Grant writing support",
                "B Corp certification guidance",
                "Annual impact report production"
            ],
            timeline: [
                "Month 1-2: Theory of Change Development",
                "Month 3-4: Impact Measurement Framework",
                "Month 5: Funding Strategy",
                "Month 6: Scaling for Impact"
            ],
            applicationDeadline: "July 15th, 2023",
            programStart: "September 1st, 2023"
        },
        {
            id: 6,
            title: "Corporate Innovation Program",
            duration: "Custom",
            description: "Bridge between startups and corporate innovation needs",
            highlights: [
                "Problem statements from corporates",
                "Pilot project opportunities",
                "Business development support",
                "Investment readiness"
            ],
            outcome: "Commercial partnerships",
            detailedDescription: "This unique program connects startups with corporate partners looking for innovative solutions. Startups work on real business challenges with the potential for pilot projects, commercial contracts, or even acquisition.",
            eligibility: "Growth-stage startups with proven technology",
            benefits: [
                "Direct access to corporate decision-makers",
                "Potential pilot funding",
                "Business development support",
                "Due diligence preparation"
            ],
            timeline: [
                "Discovery Phase (2-4 weeks)",
                "Solution Matching (4 weeks)",
                "Pilot Planning (4 weeks)",
                "Implementation (duration varies)"
            ],
            applicationDeadline: "Ongoing",
            programStart: "Cohorts begin monthly"
        }
    ];

    return (
        <section
            ref={sectionRef}
            className="py-16 px-4 bg-gray-50 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto mt-16">
                {/* Section Header */}
                <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Incubation Programs</h2>
                    <div className="w-24 h-1 bg-[rgb(118,8,37)] mx-auto"></div>
                    <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
                        Comprehensive programs designed to nurture startups at every stage of their journey
                    </p>
                </div>

                {/* Programs Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {programs.map((program, index) => (
                        <div
                            key={program.id}
                            className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-700 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                            style={{ transitionDelay: `${100 + (index * 100)}ms` }}
                        >
                            {/* Program Header */}
                            <div className="bg-[rgb(118,8,37)] p-6 text-white">
                                <h3 className="text-xl font-bold">{program.title}</h3>
                                <p className="text-blue-100 mt-1">{program.duration}</p>
                            </div>

                            {/* Program Body */}
                            <div className="p-6">
                                <p className="text-gray-700 mb-4">{program.description}</p>

                                <h4 className="font-semibold text-gray-800 mb-2">Program Highlights:</h4>
                                <ul className="space-y-2 mb-4">
                                    {program.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start">
                                            <svg className="w-5 h-5 text-[rgb(118,8,37)] mt-0.5 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span className="text-gray-600">{highlight}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-[rgb(118,8,37)]">
                                    <h4 className="font-semibold text-gray-800 mb-1">Key Outcome:</h4>
                                    <p className="text-gray-700">{program.outcome}</p>
                                </div>
                            </div>

                            {/* Program Footer */}
                            <div className="px-6 pb-4">
                                <Link 
                                    to="/incubationprogramdetails" 
                                    state={{ program: program }}
                                    className="block w-full"
                                >
                                    <button className="w-full py-2 bg-[rgb(118,8,37)] hover:bg-[rgb(100,6,31)] text-white font-medium rounded-lg transition-colors duration-300 cursor-pointer">
                                        Learn More
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to launch your startup?</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto mb-6">
                        Our team of mentors and industry experts will guide you through every step of your entrepreneurial journey.
                    </p>
                    <Link to="/incubationprogramregistration">
                        <button className="px-8 py-3 bg-[rgb(118,8,37)] hover:bg-[rgb(100,6,31)] text-white font-semibold rounded-lg shadow-md transition-all duration-300 cursor-pointer">
                            Apply Now
                        </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default IncubationPrograms;