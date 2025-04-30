import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-gray-300 mt-6 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                <div className="flex-1">
                    {/* <h2 className="text-4xl font-semibold text-white mb-4">
                        We specialize in creative projects
                    </h2> */}
                </div>

                <div className="flex-1 ml-4">
                    <h3 className="text-lg font-bold text-white mb-2">CONTACT INFO</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaPhoneAlt className="text-yellow-500 mr-2" />
                            <span>+91 8130610133</span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-yellow-500 mr-2" />
                            <span>anujthakur462000@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright and Social Links */}
            <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
                {/* <div className="text-sm text-gray-500 mb-4 md:mb-0">
                    &copy; {new Date().getFullYear()} FormulaQ Solutions Private Limited
                </div> */}

                <div className="flex space-x-4 text-gray-400">
                    <a href="https://www.linkedin.com/in/anuj-thakur-a58b2a21b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl hover:text-white transition" />
                    </a>
                    <a href=" " target="_blank" rel="noopener noreferrer">
                        <FaTwitter className="text-xl hover:text-white transition" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
