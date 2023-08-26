// pages/faq.js
"use client"

import { useState } from 'react';

const faqData = [
    {
        question: 'What is Space-Con?',
        answer: 'Space-Con is a global marketplace for buying and selling space equipment and technology.',
    },
    {
        question: 'How can I post my requirements?',
        answer: 'To post your requirements, click on the "Post Requirements" button and fill out the form.',
    },
    // Add more FAQ items here...
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="bg-gray-900 w-3/4 mt-24 min-h-screen text-white py-16">
            <div className="w-3xl mx-auto px-4">
                <h1 className="text-3xl font-semibold mb-8">Frequently Asked Questions</h1>
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div key={index}>
                            <button
                                className="w-full text-left bg-gray-800 hover:bg-gray-700 p-4 rounded-lg focus:outline-none"
                                onClick={() => toggleAccordion(index)}
                            >
                                <span className="font-semibold">{item.question}</span>
                                <svg
                                    className={`w-5 h-5 ml-auto transform ${activeIndex === index ? 'rotate-0' : '-rotate-90'} transition-transform`}
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            {activeIndex === index && (
                                <div className="bg-gray-800 p-4 mt-2 rounded-lg">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
