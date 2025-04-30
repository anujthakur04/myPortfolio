import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import anuj from "../../assets/anujT.jpg";
import { ScrollContainer, ScrollPage, Animator, batch, MoveIn, MoveOut, Fade, FadeIn, StickyIn, ZoomIn } from "react-scroll-motion";
import workIcon from "./work.svg";
import schoolIcon from "./school.svg";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const timelineElements = [
    {
        key: 1,
        icon: "work",
        date: "January 2023",
        title: "Started New Job",
        location: "New York",
        description: "Working on amazing projects!",
        buttonText: "Learn More",
    },
    {
        key: 2,
        icon: "school",
        date: "June 2021",
        title: "Graduated College",
        location: "Boston",
        description: "Completed a degree in Computer Science.",
        buttonText: "View Details",
    },
];

function Hero() {
    const imageAnimation = batch(Fade(), MoveIn(1000, 0), MoveOut(0, 0)); // Image moves right
    const textAnimation = batch(Fade(), MoveIn(-1000, 0), MoveOut(0, 0)); // Text moves left
    const zoomInScroll = batch(StickyIn(), FadeIn(), ZoomIn());

    // Carousel state and logic
    const [carouselIndex, setCarouselIndex] = useState(0);
    const carouselSlides = [
        { title: "Hello, Stalker!" },
        { title: "Welcome to My Portfolio!" },
        { title: "Let's Explore Together!" },
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCarouselIndex((prevIndex) => (prevIndex + 1) % carouselSlides.length);
        }, 3000); // Auto-switch every 3 seconds

        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [carouselSlides.length]);

    return (
        <ScrollContainer>
            {/* First Page with Carousel */}
            <ScrollPage page={0}>
                <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
                    {/* Carousel with Animation */}
                    <div className="text-center">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={carouselSlides[carouselIndex].title}
                                className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight"
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -30 }}
                                transition={{
                                    duration: 0.8,
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

            {/* Third Page */}
            <ScrollPage page={2}>
                <Animator animation={zoomInScroll}>
                    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
                        <div className="text-center">
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
                                Education
                            </h1>
                        </div>
                    </div>
                </Animator>
            </ScrollPage>

            {/* Timeline Section */}
            <ScrollPage page={3}>
                <div className="bg-gray-800 py-10">
                    <h1 className="text-3xl font-bold text-white text-center mb-8">Timeline</h1>
                    <VerticalTimeline>
                        {timelineElements.map((element) => {
                            const isWorkIcon = element.icon === "work";
                            return (
                                <VerticalTimelineElement
                                    key={element.key}
                                    date={element.date}
                                    dateClassName="date"
                                    iconStyle={{
                                        background: isWorkIcon ? "#06D6A0" : "#f9c74f",
                                    }}
                                    icon={<img src={isWorkIcon ? workIcon : schoolIcon} alt="icon" style={{ width: "100%", height: "100%" }} />}
                                >
                                    <h3 className="vertical-timeline-element-title">{element.title}</h3>
                                    <h5 className="vertical-timeline-element-subtitle">{element.location}</h5>
                                    <p id="description">{element.description}</p>
                                    {element.buttonText && (
                                        <a
                                            className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                                            href="/"
                                        >
                                            {element.buttonText}
                                        </a>
                                    )}
                                </VerticalTimelineElement>
                            );
                        })}
                    </VerticalTimeline>
                </div>
            </ScrollPage>
        </ScrollContainer>
    );
}

export default Hero;
