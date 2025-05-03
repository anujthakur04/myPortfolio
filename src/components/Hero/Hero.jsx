import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anuj from "../../assets/anujT.jpg";
import { ScrollContainer, ScrollPage, Animator, batch, MoveIn, MoveOut, Fade, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";
import "react-vertical-timeline-component/style.min.css";



function Hero() {
    const imageAnimation = batch(Fade(), MoveIn(1000, 0), MoveOut(0, 0)); // Image moves right
    const textAnimation = batch(Fade(), MoveIn(-1000, 0), MoveOut(0, 0)); // Text moves left
    const zoomInScroll = batch(StickyIn(), FadeIn(), ZoomIn());

    // Carousel state and logic
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselSlides = [
        { title: "Hello" },
        { title: "नमस्ते" },
        { title: "ನಮಸ್ಕಾರ" },
        { title: "Scroll Up to Know Me! " },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 3000); // Auto-switch every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [carouselSlides.length]);

    return (
        <div >
            <ScrollContainer>
                {/* First Page with Carousel */}
                <ScrollPage page={0}>
                    <div className="w-full h-screen bg-gray-800 flex items-center justify-center">
                        {/* Carousel with Animation */}
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
                    <div className="w-full h-screen bg-gray-900 flex items-center justify-between px-12">
                        {/* Text (moves left) */}
                        <Animator animation={textAnimation}>
                            <div className="w-auto text-left m-20">
                                <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-white leading-relaxed">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer
                                    took a galley of type and scrambled it to make a type specimen book. It has survived not
                                    only five centuries, but also the leap into electronic typesetting.
                                </h1>
                            </div>
                        </Animator>

                        {/* Image (moves right) */}
                        <Animator animation={imageAnimation}>
                            <div
                                className="flex items-center justify-center m-20"
                                style={{ width: "400px", height: "400px" }}
                            >
                                <img
                                    src={anuj}
                                    alt="Photo"
                                    className="w-full h-full object-cover rounded-xl shadow-lg"
                                />
                            </div>
                        </Animator>
                    </div>
                </ScrollPage>
            </ScrollContainer>
        </div>
    );
}

export default Hero;
