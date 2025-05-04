import React from 'react';
import { motion } from "framer-motion";
import sprsh from '../../assets/sprsh.png';
import port from '../../assets/port.png';
import Snappy from '../../assets/snappy.png';

const projects = [
    {
        name: "Sprsh",
        photo: sprsh,
        description: "This is a brief description of Project One.",
        link: "https://www.sprsh.com/",
    },
    {
        name: "Snappy",
        photo: Snappy,
        description: "This is a brief description of Project Two.",
        link: "https://github.com/anujthakur04/Snappy",
    },
    {
        name: "My Portfolio",
        photo: port,
        description: "This is a brief description of Project Three.",
        link: "https://github.com/anujthakur04/myPortfolio/tree/myPort-1",
    }
];

const Projects = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                {projects.map((project, index) => (
                    <motion.div
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="shadow-lg rounded-2xl bg-white p-4"
                    >
                        <h2 className="text-2xl font-bold mb-2">{project.name}</h2>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <img src={project.photo} alt="Photo" style={{ width: "400px", height: "200px" }} />
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
