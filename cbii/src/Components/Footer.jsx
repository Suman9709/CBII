import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6 px-6 md:px-20">
            <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
                {/* Logo & Description */}
                <div>
                    <h3 className="text-2xl font-bold text-[rgb(118,8,37)]">CBII</h3>
                    <p className="text-sm mt-4 leading-relaxed">
                        Center of Business Incubation and Innovations (CBII) at Shivalik College, Dehradun
                        is a recognized initiative fostering entrepreneurship, innovation, and sustainability.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#home" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#about" className="hover:text-blue-400">About</a></li>
                        <li><a href="#events" className="hover:text-blue-400">Events</a></li>
                        <li><a href="#team" className="hover:text-blue-400">Our Team</a></li>
                        <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Contact</h4>
                    <ul className="text-sm space-y-2">
                        <li>📍 Shivalik College, Dehradun</li>
                        <li>📞 +91-12345-67890</li>
                        <li>✉️ cbii@shivalikcollege.edu.in</li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-blue-400 text-xl"><FaFacebookF /></a>
                        <a href="#" className="hover:text-blue-400 text-xl"><FaInstagram /></a>
                        <a href="#" className="hover:text-blue-400 text-xl"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-blue-400 text-xl"><FaTwitter /></a>
                    </div>
                </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-700"></div>

            {/* Copyright */}
            <p className="text-center text-sm text-gray-400">
                © {new Date().getFullYear()} CBII | Shivalik College, Dehradun. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
