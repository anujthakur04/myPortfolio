import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    console.log("Modal children:", children); // Debug log to verify data

    // Process the children string
    const formattedChildren = typeof children === "string"
        ? children.split(".").map((s) => s.trim()).filter(Boolean)
        : [];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 relative">
                <button
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-800"
                    onClick={onClose}
                >
                    ×
                </button>
                {formattedChildren.length > 0 ? (
                    <ul className="list-disc list-inside space-y-2 text-gray-800">
                        {formattedChildren.map((sentence, index) => (
                            <li key={index}>{sentence}.</li> // Render each sentence as a bullet point
                        ))}
                    </ul>
                ) : (
                    <p>No content available.</p>
                )}
            </div>
        </div>
    );
};

export default Modal;
