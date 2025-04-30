import React, { useState } from 'react';

function Contact() {

    const [result, setResult] = useState('');

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult('Sending....');
        const formData = new FormData(event.target);

        formData.append('access_key', '7aae4819-74bc-4337-9536-caf22d4bc11a');

        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            setResult('Form Submitted Successfully');
            event.target.reset();
        } else {
            console.log('Error', data);
            setResult(data.message);
        }
    };

    return (
        <>
            <div className="mx-auto mt-32 max-w-5xl flex flex-col lg:flex-row items-center justify-between px-6 lg:px-0">
                <div className="mb-12 lg:mb-0 lg:pr-8">
                    <h1 className="font-bold text-[52px] mb-6 text-white leading-tight">
                        Hello there,<br /> Thanks for viewing <br /> my portfolio.
                    </h1>
                    <p className="font-light text-2xl mb-6 text-white">
                        Email me at <a href="mailto:hello@formulaq.io" className="text-white-700 hover:underline">anujthakur462000@gmail.com</a>
                    </p>
                </div>
                <div className="w-full lg:w-1/2 bg-white p-8 shadow-lg rounded-lg">
                    <form onSubmit={onSubmit}>
                        <label className="block mb-2 font-medium text-gray-700">Full name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your name"
                            required
                            className="block w-full p-4 outline-none mb-6 mt-1 rounded-md border border-gray-300 focus:border-blue-500 transition"
                        />
                        <label className="block mb-2 font-medium text-gray-700">Phone number</label>
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Enter your mobile number"
                            required
                            className="block w-full  p-4 outline-none mb-6 mt-1 rounded-md border border-gray-300 focus:border-blue-500 transition"
                        />
                        <label className="block mb-2 font-medium text-gray-700">Write your message here</label>
                        <textarea
                            name="message"
                            rows="7"
                            placeholder="Write your message here"
                            className="block w-full p-4 outline-none mb-6 mt-1 rounded-md border border-gray-300 resize-none focus:border-blue-500 transition"
                        ></textarea>
                        <button
                            type="submit"
                            className="flex items-center justify-center bg-tealish text-white font-medium py-3 px-6 rounded-md hover:bg-[#1b2a7d] transition duration-300"
                        >
                            Send message
                        </button>
                    </form>
                    <span className="block mt-6 text-green-600">{result}</span>
                </div>
            </div >
        </>
    );
}

export default Contact;
