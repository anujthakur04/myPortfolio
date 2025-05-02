import React from 'react';
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';

function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-black-300 mt-6 py-8">
            <div className=" text-center font-bold container mx-auto px-8 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                <div className="flex-1">
                    <h2 className="text-3xl font-semibold text-white mb-4">
                        " Anyone can do my job, <br /> but no one can be me".
                    </h2>
                </div>
            </div>

            {/* Copyright and Social Links */}
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
