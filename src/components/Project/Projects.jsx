import React from 'react';
import { motion } from "framer-motion";
import sprsh from '../../assets/sprsh.png';
import port from '../../assets/port.png';
import Snappy from '../../assets/snappy.png';
import Footer from '../Footer/Footer'

const projects = [
    {
        name: "Sprsh",
        photo: sprsh,
        description: `Developed "sprsh," a modern MERN-stack blogging platform with a responsive React frontend, secure Node.js backend, and features like rich text editing, real-time comments, and social sharing.`,
        link: "https://www.sprsh.com/",
    },
    {
        name: "Snappy",
        photo: Snappy,
        description: "Built a responsive full-stack application using React.js, Node.js, WebSocket, and MongoDB, featuring real-time communication, secure JWT authentication, and efficient data handling.",
        link: "https://github.com/anujthakur04/Snappy",
    },
    {
        name: "My Portfolio",
        photo: port,
        description: "Built my very own portfolio in react using vite framework, framer motion, react scroll motion, modal and tailwind css for rich design. It has various functionalities and features. ",
        link: "https://github.com/anujthakur04/myPortfolio/tree/myPort-1",
    }
];

const Projects = () => {
    return (
        <div className="flex pt-24 sm:pt-10 items-center justify-center min-h-screen bg-gray-800 px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 1 }}
                        className="shadow-lg rounded-2xl bg-white p-4 flex flex-col items-center"
                    >
                        <h2 className="text-2xl sm:text-3xl font-bold mb-4">{project.name}</h2>
                        <div className="w-full space-y-4">
                            <p className="text-gray-600 text-sm sm:text-base mb-4">{project.description}</p>
                            <img src={project.photo} alt="Photo" className="w-full sm:w-[400px] max-w-full h-auto rounded-md" />
                        </div>

                        <button
                            className="bg-violet-500 text-white rounded-lg px-4 py-2 mt-2 w-full hover:bg-violet-800"
                            onClick={() => window.open(project.link, "_blank")}
                        >
                            View Project
                        </button>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
