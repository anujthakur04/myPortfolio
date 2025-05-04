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
        { title: "नमस्ते" },
        { title: "ನಮಸ್ಕಾರ" },
        { title: "Scroll Up to Know Me! " },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 2000);

        return () => clearInterval(interval);
    }, [carouselSlides.length]);

    const text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting. took a galley of type and scrambled it to make a type specimen book. It has survived not
                    only five centuries, but also the leap into electronic typesetting`;

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
            }, 25);
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
                                    className="text-8xl sm:text-8xl md:text-8xl font-bold text-white leading-tight"
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
                                    <h4 className="text-[26px] font-normal text-justify text-white leading-relaxed" >
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
