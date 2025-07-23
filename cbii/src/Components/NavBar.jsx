import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import shivaliklogo from '../Images/Logo/shivalik-logo.png';
import nacc from '../Images/Logo/nacc-grade.png';
import cbiiLogo from '../Images/Logo/cbii_Logo.png';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const toggleMobileDropdown = (label) => {
        setOpenMobileDropdown(openMobileDropdown === label ? null : label);
    };

    const menuItems = [
        {
            label: "Home",
            href: "/",
            subItems: []
        },
        {
            label: "About",
            href: "/mission",
            subItems: [
                { title: "Mission & Vision", href: "/about/mission&vision" },
                { title: "Our Team", href: "/about/team" },
                { title: "Advisory Board", href: "/about/advisory" }
            ]
        },
        {
            label: "Programs",
            href: "/programs",
            subItems: [
                { title: "Incubation Program", href: "/programs/incubation" },
                { title: "Innovation Challenges", href: "/programs/challenges" },
                { title: "Mentorship", href: "/programs/mentorship" }
            ]
        },
        {
            label: "Startups",
            href: "/startups",
            subItems: [
                { title: "Startups", href: "/startups/current" },
                { title: "Projects", href: "/project/current" },
                { title: "Alumni", href: "/startups/alumni" },
                { title: "Success Stories", href: "/startups/success-stories" }
            ]
        },
        {
            label: "Events",
            href: "/events",
            subItems: [
                { title: "Upcoming Events", href: "/events/upcoming" },
                { title: "Past Events / Gallery", href: "/events/gallery" },
                { title: "Webinars & Workshops", href: "/events/webinars" }
            ]
        },
        {
            label: "Contact",
            href: "/#footer",
            subItems: []
        }
    ];

    return (
        <nav className="bg-white shadow-sm w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    <div className="flex items-center space-x-2">
                        <img className="h-14 object-contain" src={cbiiLogo} alt="CBII Logo" />
                        <div className='flex'>
                            <img className="h-10 object-contain" src={shivaliklogo} alt="Shivalik Logo" />
                            <img className="h-6 object-contain" src={nacc} alt="NACC Grade" />
                        </div>
                    </div>

                    <div className="hidden md:flex items-center space-x-8 cursor-pointer text-md">
                        {menuItems.map((item) => (
                            item.subItems.length > 0 ? (
                                <HoverDropdown key={item.label} label={item.label}>
                                    {item.subItems.map((subItem) => (
                                        <DropdownItem key={subItem.title} href={subItem.href} title={subItem.title} />
                                    ))}
                                </HoverDropdown>
                            ) : (
                                <Link key={item.label} to={item.href} className="relative text-gray-700 hover:text-[rgb(118,8,37)] px-3 py-2 text-xl font-medium transition-colors duration-300 group">
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(118,8,37)] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                        <Link to="/apply">
                            <button className="inline-block px-6 py-3 bg-[rgb(118,8,37)] text-white font-semibold rounded-lg hover:bg-[rgb(118,8,37)] transition duration-300 cursor-pointer opacity-50 ">
                                Register Now
                            </button>
                        </Link>
                    </div>

                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-[rgb(118,8,37)] focus:outline-none transition-colors duration-300 p-2 rounded-md"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-xl animate-slideDown">
                    <div className="pt-2 pb-4 space-y-1">
                        {menuItems.map((item) => (
                            <div key={item.label} className="border-t border-gray-100">
                                <button
                                    className="w-full flex justify-between items-center px-6 py-4 text-base font-medium text-gray-700 hover:text-[rgb(118,8,37)] transition-colors duration-300"
                                    onClick={() => toggleMobileDropdown(item.label)}
                                >
                                    {item.label}
                                    {item.subItems.length > 0 && (openMobileDropdown === item.label ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />)}
                                </button>
                                {item.subItems.length > 0 && openMobileDropdown === item.label && (
                                    <div className="pl-6 space-y-2 pb-2">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.title}
                                                to={subItem.href}
                                                className="block px-4 py-2 text-base text-gray-600 hover:text-[rgb(118,8,37)] hover:bg-orange-50 rounded transition-colors duration-300"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link to="/apply" className="block px-6 py-3 text-base font-medium text-white bg-[rgb(118,8,37)] hover:bg-[rgb(118,8,37)] transition-colors duration-300 text-center ">
                            Register Now
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

const HoverDropdown = ({ label, children }) => (
    <div className="relative group">
        <button className="text-gray-700 hover:text-[rgb(118,8,37)] py-2 text-md font-medium flex items-center transition-colors duration-300 cursor-pointer">
            {label}
            <span className="ml-1 text-[rgb(118,8,37)] transform transition-transform group-hover:rotate-180">▼</span>
        </button>
        <div className="absolute z-10 w-56 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 origin-top">
            <div className="py-1">{children}</div>
        </div>
    </div>
);

const DropdownItem = ({ href, title }) => (
    <Link
        to={href}
        className="block px-4 py-2 text-sm text-white hover:text-[rgb(118,8,37)] hover:bg-orange-50 transition-colors duration-300"
    >
        {title}
    </Link>
);

export default NavBar;
