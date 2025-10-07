import React, { useEffect, useRef, useState } from 'react';
import procedure from '../Images/procedure.png'
import { Link } from 'react-router-dom';

const Incubation = () => {
    const sectionRefs = useRef([]);
    const pathRef = useRef(null);
    const arrowRef = useRef(null);
    const [activeSection, setActiveSection] = useState(0);
    const [scrollDirection, setScrollDirection] = useState('down'); // 'down' or 'up'
    const lastScrollY = useRef(0);

    const sections = [
        {
            title: "Submission",
            content: "Submit your startup or business idea through the online application form."
        },
        {
            title: "Screening",
            content: "Our team conducts a preliminary online review to check eligibility and completeness of your submission."
        },
        {
            title: "Evaluation",
            content: "A detailed online evaluation of your business proposal is carried out to assess innovation, feasibility, and potential impact."
        },
        {
            title: "Pitching & Selection",
            content: "Present your idea offline before the expert panel. The most promising startups are selected and recommended for the incubation program."
        },
        {
            title: "NETWORKING",
            content: "Engage in person with mentors and the incubation team to discuss requirements, available support, and finalize your incubation agreement."
        },
        {
            title: "Induction",
            content: "Official onboarding into the incubation program begins — marking the start of your growth journey with us."
        }
    ];

    useEffect(() => {
        const sectionObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        entry.target.classList.remove('opacity-0', 'translate-y-10');

                        const index = sectionRefs.current.findIndex(ref => ref === entry.target);
                        if (index !== -1) {
                            setActiveSection(index);
                        }
                    }
                });
            },
            {
                threshold: 0.4,
                rootMargin: '0px 0px -20% 0px'
            }
        );

        sectionRefs.current.forEach((ref) => {
            if (ref) sectionObserver.observe(ref);
        });

        const updateArrowPosition = () => {
            if (pathRef.current && arrowRef.current) {
                const path = pathRef.current;
                const arrow = arrowRef.current;
                const pathRect = path.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                const scrollY = window.scrollY;

                // Determine scroll direction
                if (scrollY > lastScrollY.current) {
                    setScrollDirection('down');
                } else if (scrollY < lastScrollY.current) {
                    setScrollDirection('up');
                }
                lastScrollY.current = scrollY;

                const timelineSection = path.closest('.timeline-section');
                const timelineRect = timelineSection.getBoundingClientRect();
                const timelineStart = scrollY + timelineRect.top;

                const scrollProgress = Math.max(0, Math.min(1,
                    (scrollY - timelineStart + windowHeight * 0.3) / (timelineRect.height - windowHeight * 0.4)
                ));

                const arrowPosition = scrollProgress * (pathRect.height - 60);
                arrow.style.transform = `translateY(${arrowPosition}px)`;
            }
        };

        window.addEventListener('scroll', updateArrowPosition);
        window.addEventListener('resize', updateArrowPosition);
        updateArrowPosition();

        return () => {
            sectionRefs.current.forEach((ref) => {
                if (ref) sectionObserver.unobserve(ref);
            });
            window.removeEventListener('scroll', updateArrowPosition);
            window.removeEventListener('resize', updateArrowPosition);
        };
    }, []);

    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };

    // Custom SVG Arrow Component with rotation based on scroll direction
    const ArrowIcon = () => (
        <svg
            width="70px"
            height="85px"
            viewBox="0 0 68.8 83.478"
            className={`transition-transform duration-300 ease-in-out ${scrollDirection === 'up' ? 'rotate-180' : 'rotate-0'
                }`}
        >
            <g transform="translate(-4857.68 -5168.087)">
                <g transform="translate(4857.68 5174.444)">
                    <path
                        d="M0,77.119,34.4,0,68.8,77.119Z"
                        transform="translate(68.8 77.12) rotate(180)"
                        fill="#ef4444"
                    />
                </g>
                <g transform="translate(4926.48 5251.564) rotate(180)">
                    <g>
                        <path
                            d="M0,77.119,34.4,0,68.8,77.119Z"
                            fill="#ef4444"
                        />
                        <path
                            d="M0,77.119,8.292,0l8.292,77.119L8.292,83.477Z"
                            transform="translate(26.107)"
                            fill="#ef4444"
                        />
                        <path
                            d="M0,0,8.292,77.119,0,83.477Z"
                            transform="translate(34.4)"
                            fill="#7b2424"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );

    return (
        <div className="bg-white w-full">
            {/* Hero Section */}
            <section
                className="
      w-full h-[25vh]      /* default mobile */
      sm:h-[50vh] 
      md:h-[60vh] 
      lg:h-[70vh] 
      xl:h-[90vh] 
      2xl:h-[90vh] 
      flex justify-center items-center
    "
            >
                {/* Image Section */}
                <div className="w-full h-full">
                    <img
                        src={procedure}
                        alt="Procedure"
                        className="w-full h-full object-cover"
                    />
                </div>
            </section>


            {/* Process Sections with Centered Timeline */}
            <div className="timeline-section py-20 px-4 md:px-8 relative">
                {/* Centered Vertical Path Line - Wider */}
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-24 ">
                    <div
                        ref={pathRef}
                        className="w-12 bg-gray-300 h-[98%] rounded-t-2xl pt-4 relative min-h-[1000px] mx-auto shadow-lg overflow-hidden z-0"
                    >

                        {/* Dashed Center Line */}
                        <div
                            className="absolute left-1/2 transform -translate-x-1/2 top-0 w-1 h-full"
                            style={{
                                background: "repeating-linear-gradient(to bottom, white 0px, white 8px, transparent 8px, transparent 16px)"
                            }}
                        ></div>

                        {/* Section Dots */}
                        {sections.map((_, index) => (
                            <div
                                key={index}
                                className={`absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full border-2 border-white shadow-lg transition-all duration-300 ${index === activeSection
                                    ? 'scale-125 bg-blue-600 ring-2 ring-blue-300'
                                    : 'bg-gray-400'
                                    }`}
                                style={{
                                    top: `${(index / (sections.length - 1)) * 84}%`
                                }}
                            />
                        ))}

                    </div>

                    {/* Custom SVG Arrow - Positioned on top of the path container */}
                    <div
                        ref={arrowRef}
                        className="absolute left-1/2 transform -translate-x-1/2 -top-10 transition-all duration-200 ease-out z-50"
                    >
                        <ArrowIcon />
                    </div>

                </div>

                {/* Sections Content - Alternating Sides */}
                <div className="max-w-6xl mx-auto relative">
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            ref={addToRefs}
                            className={`relative mb-24 transition-all duration-500 ease-out opacity-0 translate-y-10 ${index % 2 === 0
                                ? 'pr-0 md:pr-1/2 pl-0'
                                : 'pl-0 md:pl-1/2 pr-0'
                                }`}
                        >
                            {/* Simple Content Card */}
                            <div className={`
          p-6 rounded-lg shadow-md border-l-2 max-w-md
          ${index % 2 === 0
                                    ? 'bg-white border-blue-500 text-left ml-auto mr-8'
                                    : 'bg-white border-purple-500 text-left ml-8'
                                }
        `}>
                                {/* Step Number */}
                                <div className={`
            inline-flex items-center justify-center w-8 h-8 rounded-full text-white font-semibold text-sm mb-4
            ${index % 2 === 0
                                        ? 'bg-blue-500'
                                        : 'bg-purple-500'
                                    }
          `}>
                                    {index + 1}
                                </div>

                                <h3 className={`
            text-2xl font-semibold mb-4
            ${index % 2 === 0 ? 'text-blue-600' : 'text-purple-600'}
          `}>
                                    {section.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {section.content}
                                </p>
                            </div>

                            {/* Connecting Line to Center */}
                            <div className={`
          absolute top-6 w-1/4 h-0.5 hidden md:block
          ${index % 2 === 0
                                    ? 'right-0 bg-blue-500'
                                    : 'left-0 bg-purple-500'
                                }
        `}></div>

                            {/* Circle on Timeline Connection Point */}
                            <div className={`
          absolute top-6 transform -translate-y-1/2 w-4 h-4 rounded-full border-2 border-white shadow-md hidden md:block
          ${index % 2 === 0 ? 'right-1/4' : 'left-1/4'}
          ${index === activeSection
                                    ? 'bg-blue-500'
                                    : 'bg-gray-400'
                                }
        `}></div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Applications Section */}
            <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-blue-600 to-purple-700 text-white text-center relative z-10">

                <div className="max-w-4xl mx-auto">
                    <Link>
                        <div className="bg-white/20 py-4 px-8 rounded-lg inline-block mb-6">
                            <button className="text-2xl font-bold cursor-pointer">Applications Open for 2025 Cohort</button>
                        </div>
                    </Link>
                    <p className="text-lg max-w-3xl mx-auto leading-relaxed">
                        Shivalik College, Dehradun, under Rijan Educational Society, proudly launched the Center of Business Incubation and Innovation (CBII) in 2022, registered with MSME, Government of India.
                        CBII nurtures aspiring entrepreneurs by fostering innovation, sustainability, and social impact. Its efforts in supporting innovative startups earned recognition from the Uttarakhand Startup Council in 2023, along with financial support to expand its initiatives.
                    </p>

                </div>
            </section>
        </div>
    );
};

export default Incubation;