import { React, useState } from 'react'
import workIcon from "../../assets/work.png";
import schoolIcon from "../../assets/school.png";
import { Animator } from 'react-scroll-motion';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Modal from '../Modal/modal.jsx'
import data from '../../assets/data.json'

function Timeline() {

    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState("");

    const handleViewMore = (description) => {
        setModalContent(description);
        setModalOpen(true);
    };
    return (
        <div className="w-full h-auto bg-gray-800 mx-auto overflow-hidden">
            <h1 className="text-4xl font-bold text-gray-300 text-center mb-12 pt-4 mt-2">
                My Journey
            </h1>
            <Animator>
                <VerticalTimeline className="mb-[20px]">
                    {data.map((element) => {
                        const isWorkIcon = element.icon === "work";
                        return (
                            <VerticalTimelineElement
                                key={element.key}
                                date={element.date}
                                dateClassName="date text-white"
                                iconStyle={{
                                    background: isWorkIcon ? "#000000" : "#ffffff",
                                }}
                                icon={
                                    <img
                                        src={isWorkIcon ? workIcon : schoolIcon}
                                        alt="icon"
                                        style={{ width: "100%", height: "100%" }}
                                    />
                                }
                            >
                                <h2 className="font-bold vertical-timeline-element-title">
                                    {element.company}
                                </h2>
                                <h4 className="font-medium vertical-timeline-element-subtitle">{element.title}</h4>
                                <h5 className="vertical-timeline-element-subtitle">
                                    {element.location}
                                </h5>
                                <h6 className='font-semibold mt-4'>{element.description}</h6>
                                <a
                                    className={`text-violet-500 ${isWorkIcon ? "workButton" : "schoolButton"
                                        }`}
                                    onClick={() => handleViewMore(element.descriptionFull)}
                                >
                                    View More
                                </a>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </Animator>
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                <p>{modalContent}</p>
            </Modal>
        </div>
    )
}

export default Timeline

