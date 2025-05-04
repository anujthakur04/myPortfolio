import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anuj from "../../assets/anujT.jpg";
import { ScrollContainer, ScrollPage, Animator } from "react-scroll-motion";
import "react-vertical-timeline-component/style.min.css";



function Hero() {

    const [carouselIndex, setCarouselIndex] = useState(0);
    const [displayedText, setDisplayedText] = useState('');
    const [textIndex, setTextIndex] = useState(0);
    const [shouldStart, setShouldStart] = useState(false);

    const carouselSlides = [
        { title: "Hello" },
        { title: "How are you?" },
        { title: "Scroll Up to Know Me! " },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [carouselSlides.length]);

    const text = `I’m Anuj Thakur, a passionate Computer Science professional with a strong background in Python, JavaScript, and C++, and experience working with frameworks like React.js and Django.

I’ve worked on data structures, algorithms, OOP, and database management (SQL, MongoDB), and I enjoy solving challenges and building scalable, user-friendly solutions. I also have hands-on experience with AWS services like EC2 and S3.

I’m excited to apply my skills to real-world problems and create impactful solutions. Let’s connect and chat more about how we can work together!`;

    const characters = text.split("");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 80) {
                setShouldStart(true);
            }
        };
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    useEffect(() => {
        if (shouldStart && textIndex < characters.length) {
            const timer = setTimeout(() => {
                setDisplayedText((prevText) => prevText + characters[textIndex]);
                setTextIndex(textIndex + 1);
            }, 20);
            return () => clearTimeout(timer);
        }
    }, [shouldStart, textIndex, characters]);

    return (
        <div >
            <ScrollContainer>
                <ScrollPage page={0}>
                    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
                        <div className="text-center">
                            <AnimatePresence mode="wait">
                                <motion.h1
                                    key={carouselSlides[carouselIndex].title}
                                    className="text-8xl sm:text-8xl md:text-8xl font-bold text-gray-300 leading-tight"
                                    initial={{ opacity: 0, y: 70 }}
                                    animate={{ opacity: 0.8, y: 1 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeInOut",
                                    }}
                                >
                                    {carouselSlides[carouselIndex].title}
                                </motion.h1>
                            </AnimatePresence>
                        </div>
                    </div>
                </ScrollPage>

                {/* Second Page */}
                <ScrollPage page={1}>
                    <div className="w-full h-full bg-gray-900 pl-[9%] overflow-hidden mb-4">
                        <h1 className="text-6xl font-bold text-white text-center mb-14 pt-4 mt-2 mr-[250px]">

                        </h1>
                        <div className="w-[90%] h-[80%] bg-gray-700 flex items-center justify-between px-12">

                            <Animator>
                                <div className="w-full h-full text-left mr-20">
                                    <h4 className="text-[26px] font-normal text-justify text-gray-300 leading-relaxed" >
                                        {displayedText}
                                    </h4>
                                </div>
                            </Animator>

                            <Animator>
                                <div

                                    className="flex items-center justify-center ml-20"
                                    style={{ width: "400px", height: "400px" }}
                                >
                                    <div style={{ width: '1px', backgroundColor: '#1f1f1f', height: '70%', marginRight: '35px' }}></div>
                                    <img
                                        src={anuj}
                                        alt="Photo"
                                        className="w-full h-full object-cover rounded-xl shadow-lg"
                                    />
                                </div>
                            </Animator>
                        </div>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </div >
    );
}

export default Hero;
