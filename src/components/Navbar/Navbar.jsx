import React, { useEffect, useState } from 'react';
// import logo from '../../assets/logo-final.svg';
import { useNavigate, useLocation } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

function Navbar() {
    const [active, setActive] = useState(false);
    const [isContactPage, setIsContactPage] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [scrollTarget, setScrollTarget] = useState(null); // State to store the target section to scroll to
    const offset = 260; // Set the offset height (in pixels) to stop before the section

    useEffect(() => {
        const handleScroll = () => {
            setActive(window.scrollY > 80); // Adds a class when scrolled
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setIsContactPage(location.pathname !== '/');
    }, [location]);

    // Scroll to the target section when on the home page with offset
    useEffect(() => {
        if (location.pathname === '/' && scrollTarget) {
            const element = document.getElementById(scrollTarget);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
            setScrollTarget(null); // Reset the scroll target after scrolling
        }
    }, [location.pathname, scrollTarget]);

    const handleNavigateHome = (sectionId) => {
        if (location.pathname === '/') {
            // If already on home page, scroll directly with offset
            const element = document.getElementById(sectionId);
            if (element) {
                const elementPosition = element.getBoundingClientRect().top + window.scrollY - offset;
                window.scrollTo({ top: elementPosition, behavior: 'smooth' });
            }
        } else {
            // Set the section to scroll after navigation
            setScrollTarget(sectionId);
            navigate('/');
        }
    };

    const handleNavigateContact = () => {
        navigate('/contact');
        toggleMenu(); // Close the menu after navigation
    };

    const handleNavigateBlog = () => {
        navigate('/projects');
        toggleMenu(); // Close the menu after navigation
    };

    const navbarBgColor = isContactPage || active ? 'bg-tealish' : 'bg-transparent';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (sectionId) => {
        if (window.innerWidth < 900) {
            handleNavigateHome(sectionId);
        } else {
            handleNavigateHome(sectionId);
        }
        toggleMenu(); // Close the menu after navigation
    };

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-filter 
                backdrop-blur-md 
                bg-opacity-90 ${navbarBgColor}`}>
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <h1 className="text-3xl font-light cursor-pointer flex items-center text-white" onClick={() => handleNavigateHome('')}>
                    {/* <img src={logo} alt="Logo" className="h-9 mr-2" /> */}
                    MyResume
                </h1>

                {/* Mobile Menu Icon */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        {isMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
                    </button>
                </div>

                {/* Nav Menu */}
                <ul className={`lg:flex lg:flex-row lg:space-x-8 items-center ${isMenuOpen ? 'flex' : 'hidden'}
                            lg:block absolute lg:static left-0 top-16 lg:top-0 w-full lg:w-auto bg-tealish lg:bg-transparent py-4 lg:py-0 transition-all duration-300 flex-col lg:flex-row space-y-4 lg:space-y-0`}>
                    <li
                        className="font-light cursor-pointer text-white hover:text-gray-200 transition"
                        onClick={() => handleMenuClick('services-mob')}
                    >
                        LinkedIn
                    </li>

                    <li
                        className="font-light cursor-pointer text-white hover:text-gray-200 transition"
                        onClick={() => handleMenuClick('github')}
                    >
                        GitHub
                    </li>

                    <li
                        className="font-light cursor-pointer text-white hover:text-gray-200 transition"
                        onClick={() => handleMenuClick('projects')}
                    >
                        Leetcode
                    </li>

                    <li className="relative group font-light cursor-pointer text-white hover:text-gray-200 transition"
                        onClick={handleNavigateBlog}
                    >
                        <span>Projects</span>
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
