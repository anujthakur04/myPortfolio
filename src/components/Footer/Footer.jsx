import React from 'react';
import { FaLinkedin, FaGithub, FaCode } from 'react-icons/fa';
import { MdLocationOn } from 'react-icons/md';
import footUp from '../../assets/quoteUp.png'

function Footer() {
    return (
        <footer className="bg-[#1c1c1c] text-black-300 mt-2 py-8">
            {/* <div className="text-center font-bold container mx-auto px-8 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0">
                <div className="relative bg-gray-800 text-center px-8 py-12 rounded-lg shadow-md max-w-md mx-auto">
                    <span className="absolute top-4 left-8 text-5xl font-serif text-white">
                        &ldquo;
                    </span>
                    <p className="text-2xl font-bold text-white inline-block">
                        Anyone can do my job, but no one can be me.
                    </p>
                    <span className="absolute bottom-4 right-8 text-5xl font-serif text-white">
                        &rdquo;
                    </span>
                </div>


            </div> */}


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
