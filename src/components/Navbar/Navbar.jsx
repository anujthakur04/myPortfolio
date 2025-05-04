import React, { useEffect, useState } from 'react';
import resumeD from '../../assets/icons8-resume-50.png'
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [active, setActive] = useState(false);
    const [isContactPage, setIsContactPage] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [scrollTarget, setScrollTarget] = useState(null);
    const offset = 260;

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 80);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsContactPage(location.pathname !== '/');
    }, [location]);


    useEffect(() => {
        if (location.pathname === '/' && scrollTarget) {
            const element = document.getElementById(scrollTarget);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
            setScrollTarget(null);
        }
    }, [location.pathname, scrollTarget]);

    const handleNavigateHome = (sectionId) => {
        if (location.pathname === '/') {

            const element = document.getElementById(sectionId);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        } else {
            setScrollTarget(sectionId);
            navigate('/');
        }
    };

    const handleNavigateContact = () => {
        navigate('/contact');
        toggleMenu();
    };

    const handleNavigateProject = () => {
        navigate('/projects');
        toggleMenu();
    };

    const navbarBgColor = isContactPage || active ? 'bg-tealish' : 'bg-transparent';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // const handleMenuClick = (sectionId) => {
    //     if (window.innerWidth < 900) {
    //         handleNavigateHome(sectionId);
    //     } else {
    //         handleNavigateHome(sectionId);
    //     }
    //     toggleMenu(); // Close the menu after navigation
    // };

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = './public/Resume_Anuj_Thakur_DEV.pdf';
        link.download = "Resume-AnujThakur.pdf";
        link.click();
    };

    const handleViewOnline = () => {
        window.open("https://drive.google.com/file/d/1r3XEmeC-8qtYIQvfTAPJtgKeidoYZOFk/view", "_blank");
    };


    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-filter 
                    backdrop-blur-md 
                    bg-opacity-80 ${navbarBgColor}`}
        >
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="relative group">
                    <div className='cursor-pointer p-3 bg-gray-100 rounded-full hover:bg-gray-500 text-white'
                    >
                        <img
                            src={resumeD}
                            alt="Resume Icon"
                            className="w-7 h-7"
                            onClick={() => handleNavigateHome()}
                        />
                    </div>
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 hidden group-hover:flex flex-col bg-white border rounded-lg shadow-lg ml-[80px] mt-1 p-2 w-48 transition delay-200">
                        <button
                            onClick={handleViewOnline}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                            View on Google Drive
                        </button>
                        <button
                            onClick={handleDownload}
                            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded"
                        >
                            Download Resume
                        </button>
                    </div>
                </div>

                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>
                <ul
                    className={`lg:flex lg:flex-row lg:space-x-8 items-center ${isMenuOpen ? "flex" : "hidden"
                        }
                                lg:block absolute lg:static left-0 top-16 lg:top-0 w-full lg:w-auto bg-tealish lg:bg-transparent py-4 lg:py-0 transition-all duration-300 flex-col lg:flex-row space-y-4 lg:space-y-0`}
                >
                    <a
                        href="https://www.linkedin.com/in/anuj-thakur-a58b2a21b/"
                        className="flex items-center font-light cursor-pointer text-white hover:text-gray-200 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                            alt="LinkedIn Logo"
                            className="w-5 h-5 mr-2"
                        />
                        LinkedIn
                    </a>

                    <a
                        href="https://github.com/anujthakur04?tab=repositories"
                        className="flex items-center font-light cursor-pointer text-white hover:text-gray-200 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                            alt="GitHub Logo"
                            className="w-5 h-5 mr-2"
                        />
                        GitHub
                    </a>

                    <a
                        href="https://leetcode.com/u/anujthakur462000/"
                        className="flex items-center font-light cursor-pointer text-white hover:text-gray-200 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                            alt="LeetCode Logo"
                            className="w-5 h-6 mr-2"
                        />
                        Leetcode
                    </a>

                    <li
                        className="relative group font-light cursor-pointer text-white hover:text-gray-200 transition"
                        onClick={handleNavigateProject}
                    >
                        Projects
                    </li>

                    <li>
                        <button
                            className="text-gray-900 bg-white hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-sm px-6 py-2 transition"
                            onClick={handleNavigateContact}
                        >
                            Contact me
                        </button>
                    </li>
                </ul>
            </div>
        </nav>

    );
}

export default Navbar;
