import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, ChevronUp } from 'lucide-react';
import shivaliklogo from '../Images/shivalik-logo.png';
import nacc from '../Images/nacc-grade.png';

const NavBar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openMobileDropdown, setOpenMobileDropdown] = useState(null);

    const components = [
        {
            title: "Alert Dialog",
            href: "/docs/primitives/alert-dialog",
            description: "Modal dialog for important alerts",
        },
        {
            title: "Hover Card",
            href: "/docs/primitives/hover-card",
            description: "Preview content behind links",
        },
        {
            title: "Progress",
            href: "/docs/primitives/progress",
            description: "Task completion indicator",
        },
    ];

    const toggleMobileDropdown = (label) => {
        setOpenMobileDropdown(openMobileDropdown === label ? null : label);
    };

    return (
        <nav className="bg-white shadow-sm w-full fixed top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <div className="flex items-center space-x-2">
                        <img className="h-14 object-contain" src={shivaliklogo} alt="Shivalik Logo" />
                        <img className="h-12 object-contain" src={nacc} alt="NACC Grade" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8 cursor-pointer ">

                    <Link
                            to="/docs"
                            className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-xl font-medium transition-colors duration-300 group"
                        >
                            Home
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>

                        {/* <HoverDropdown label="Home"   >

                            <DropdownItem href="/docs" title="Introduction" />
                            <DropdownItem href="/docs/about" title="About Us" />
                            <DropdownItem href="/docs/team" title="Team" />
                            <DropdownItem href="/docs/awards" title="Awards" />
                            <DropdownItem href="/docs/awards" title="Partnership" />

                        </HoverDropdown> */}
                        <HoverDropdown label="About"  >
                            <DropdownItem href="/docs" title="Mission & Vision" />
                            <DropdownItem href="/docs/about" title="Our Team" />
                            <DropdownItem href="/docs/awards" title="Advisory Board" />
                            <DropdownItem href="/docs/awards" title="Partnership" />  
                        </HoverDropdown>

                        <HoverDropdown label="Programs">
                            <DropdownItem href="/docs" title="Incubation Program" />
                            <DropdownItem href="/docs/about" title="Innovation Challenges" />
                            <DropdownItem href="/docs/awards" title="Mentorship" />
                            <DropdownItem href="/docs/awards" title="Startup School" />
                        </HoverDropdown>

                        <HoverDropdown label="Startups">
                            <DropdownItem href="/docs" title="Current Startups" />
                            <DropdownItem href="/docs/about" title="Alumni" />
                            <DropdownItem href="/docs/awards" title="Success Stories" />
                        </HoverDropdown>

                        <HoverDropdown label="Resource">
                            <DropdownItem href="/docs" title="Funding Opportunities" />
                            <DropdownItem href="/docs/about" title="Learning Materials" />
                            <DropdownItem href="/docs/team" title="Tools & Templates" />
                            <DropdownItem href="/docs/awards" title="FAQs" />

                        </HoverDropdown>

                        <HoverDropdown label="Events" >
                            <DropdownItem href="/docs" title="Upcoming Events" />
                            <DropdownItem href="/docs/about" title="Past Events / Gallery" />
                            <DropdownItem href="/docs/team" title="Webinars & Workshops" />

                        </HoverDropdown>

                        <Link
                            to="/docs"
                            className="relative text-gray-700 hover:text-orange-500 px-3 py-2 text-xl font-medium transition-colors duration-300 group"
                        >
                            Contact
                            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                        </Link>
                        <Link
                            to="/docs"

                        >
                            <button className="relative bg-orange-500 hover:bg-orange-700 p-1 rounded-lg text-white text-md font-medium transition-colors duration-300 group cursor-pointer"> Apply Now
                               
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="text-gray-700 hover:text-orange-500 focus:outline-none transition-colors duration-300 p-2 rounded-md"
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-xl animate-slideDown">
                    <div className="pt-2 pb-4 space-y-1">
                        <MobileDropdown
                            label="Getting Started"
                            isOpen={openMobileDropdown === 'Getting Started'}
                            onToggle={() => toggleMobileDropdown('Getting Started')}
                        >
                            <MobileDropdownItem href="/docs" title="Introduction" />
                            <MobileDropdownItem href="/docs/installation" title="Installation" />
                            <MobileDropdownItem href="/docs/typography" title="Typography" />
                        </MobileDropdown>

                        <MobileDropdown
                            label="Components"
                            isOpen={openMobileDropdown === 'Components'}
                            onToggle={() => toggleMobileDropdown('Components')}
                        >
                            {components.map((item) => (
                                <MobileDropdownItem
                                    key={item.title}
                                    href={item.href}
                                    title={item.title}
                                />
                            ))}
                        </MobileDropdown>

                        <Link
                            to="/docs"
                            className="block px-6 py-3 text-base font-medium text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300 border-t border-gray-100"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

// HoverDropdown - opens on hover for desktop
const HoverDropdown = ({ label, children }) => {
    return (
        <div className="relative group">
            <button className="text-gray-700 hover:text-orange-500  py-2 text-md font-medium flex items-center transition-colors duration-300 cursor-pointer">
                {label}
                <span className="ml-1 text-red-500 transform transition-transform group-hover:rotate-180">▼</span>
            </button>

            <div className="absolute z-10 mt-2 w-56 rounded-md shadow-lg bg-black ring-1  ring-black ring-opacity-5 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 origin-top">
                <div className="py-1">{children}</div>
            </div>
        </div>
    );
};

const DropdownItem = ({ href, title, description }) => (
    <Link
        to={href}
        className="block px-4 py-2 text-sm text-white hover:text-orange-500 hover:bg-orange-50 transition-colors duration-300"
    >
        <div className="font-medium">{title}</div>
        {description && <div className="text-xs text-gray-500 mt-1">{description}</div>}
    </Link>
);

// Mobile Dropdown Component
const MobileDropdown = ({ label, children, isOpen, onToggle }) => {
    return (
        <div className="border-b border-gray-100">
            <button
                onClick={onToggle}
                className="w-full flex justify-between items-center px-6 py-4 text-base font-medium text-gray-700 hover:text-orange-500 transition-colors duration-300"
            >
                {label}
                {isOpen ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'}`}>
                <div className="pb-2 pl-6 space-y-2">
                    {children}
                </div>
            </div>
        </div>
    );
};

const MobileDropdownItem = ({ href, title }) => (
    <Link
        to={href}
        className="block px-4 py-2 text-lx text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors duration-300"
    >
        {title}
    </Link>
);


export default NavBar;