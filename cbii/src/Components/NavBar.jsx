import React, { useState, useEffect, useRef } from 'react';
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
                { title: "Chairman’s Note", href: "/about/managements" },
                { title: "Our Team", href: "/about/team" },
                { title: "Expert Mentors", href: "/about/expertmentor" }
            ]
        },
        {
            label: "Programs",
            href: "/programs",
            subItems: [
                { title: "Incubation Program", href: "/programs/incubation" },
                { title: "Innovation Challenges", href: "/programs/challenges" },
            ]
        },
        {
            label: "Startups",
            href: "/startups",
            subItems: [
                { title: "Startups", href: "/startups/current" },
                { title: "Projects", href: "/project/current" },
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
                    <div className="flex items-center space-x-2 flex-shrink-0">
                        <img className="h-14 object-contain" src={cbiiLogo} alt="CBII Logo" />
                        <div className='flex items-center space-x-2'>
                            <img className="h-10 object-contain" src={shivaliklogo} alt="Shivalik Logo" />
                            <img className="h-6 object-contain" src={nacc} alt="NACC Grade" />
                        </div>
                    </div>


                    <div className="hidden md:flex items-center space-x-2 lg:space-x-6">
                        {menuItems.map((item) => (
                            item.subItems.length > 0 ? (
                                <ClickDropdown key={item.label} label={item.label}>
                                    {item.subItems.map((subItem) => (
                                        <DropdownItem key={subItem.title} href={subItem.href} title={subItem.title} />
                                    ))}
                                </ClickDropdown>
                            ) : (
                                <Link key={item.label} to={item.href} className="relative  text-[rgb(118,8,37)] hover:text-[rgb(118,8,37)] px-3 py-2 text-base font-medium transition-colors duration-300 group">
                                    {item.label}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[rgb(118,8,37)] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            )
                        ))}
                        <Link
                            to="#"
                            onClick={(e) => e.preventDefault()}
                            className="pointer-events-none">
                            <button className="inline-block px-4 py-2 lg:px-6 lg:py-3 bg-[rgb(118,8,37)] text-white font-semibold rounded-lg hover:bg-[rgb(118,8,37)] transition duration-300 cursor-pointer opacity-50">
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
                                {item.subItems.length > 0 ? (
                                    <>
                                        <button
                                            className="w-full flex justify-between items-center px-6 py-4 text-base font-medium text-gray-700 hover:text-[rgb(118,8,37)] transition-colors duration-300 text-left"
                                            onClick={() => toggleMobileDropdown(item.label)}
                                        >
                                            <span>{item.label}</span>
                                            {openMobileDropdown === item.label ? <ChevronUp className="h-5 w-5 text-[rgb(118,8,37)] fill-[rgb(118,8,37)]" /> : <ChevronDown className="h-5 w-5 text-[rgb(118,8,37)] fill-[rgb(118,8,37)]" />}
                                        </button>
                                        {openMobileDropdown === item.label && (
                                            <div className="pl-8 pr-4 space-y-2 pb-3">
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
                                    </>
                                ) : (
                                    <Link
                                        to={item.href}
                                        className="block w-full px-6 py-4 text-base font-medium text-gray-700 hover:text-[rgb(118,8,37)] transition-colors duration-300"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                )}
                            </div>
                        ))}
                        <div className="px-6 pt-4">
                            <Link to="/apply" className="block w-full py-3 text-base font-medium text-white bg-[rgb(118,8,37)] hover:bg-[rgb(118,8,37)] transition-colors duration-300 text-center rounded-lg">
                                Register Now
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

const ClickDropdown = ({ label, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative" ref={dropdownRef}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-[rgb(118,8,37)] py-2 text-base font-medium flex items-center transition-colors duration-300 cursor-pointer hover:text-red-900"
            >
                {label}
                {isOpen ?
                    <ChevronUp className="ml-1 h-4 w-4 text-[rgb(118,8,37)] fill-[rgb(118,8,37)]" /> :
                    <ChevronDown className="ml-1 h-4 w-4 text-[rgb(118,8,37)] fill-[rgb(118,8,37)]" />
                }
            </button>
            <div
                className={` bg-black text-white absolute z-10 w-56 mt-2 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-300 origin-top ${isOpen ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none'}`}
            >
                <div className="py-1">{React.Children.map(children, child => React.cloneElement(child, { closeDropdown: () => setIsOpen(false) }))}</div>
            </div>
        </div>
    );
};

const DropdownItem = ({ href, title, closeDropdown }) => (
    <Link
        to={href}
        onClick={closeDropdown}
        className="block px-4 py-2 text-sm text-white   hover:text-[rgb(118,8,37)] hover:bg-gray-800 transition-colors duration-300"
    >
        {title}
    </Link>
);


export default NavBar;

