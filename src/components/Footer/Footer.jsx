import React from 'react';
import { FaLocationArrow, FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-white mt-2 py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                <div className="flex-1">
                    <h3 className="text-3xl font-bold text-white mb-4">CONTACT INFO</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <FaPhoneAlt className="text-yellow-500 mr-2" />
                            <span className='text-gray-400'>+91 8130610133</span>
                        </li>
                        <li className="flex items-center">
                            <FaEnvelope className="text-yellow-500 mr-2" />
                            <span className='text-gray-400'>ANUJTHAKUR462000@GMAIL.COM</span>
                        </li>
                        <li className="flex items-center">
                            <FaLocationArrow className="text-yellow-500 mr-2" />
                            <span className='text-gray-400'>DELHI, INDIA</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container mx-auto px-4 mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-4">
                <div className="text-sm text-gray-500 mb-4 md:mb-0">
                    &copy; Anuj Thakur
                </div>
                <div className="flex space-x-4 text-gray-400">
                    <a href="https://www.linkedin.com/in/anuj-thakur-a58b2a21b/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-xl hover:text-white transition" />
                    </a>
                    <a href="https://github.com/anujthakur04?tab=repositories " target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-xl hover:text-white transition" />
                    </a>
                    <a href="https://leetcode.com/u/anujthakur462000/" target="_blank" rel="noopener noreferrer">
                        <FaCode className="text-xl hover:text-white transition" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
