import React, { useState } from "react";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faClock,
    faRedo,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Countdown from 'react-countdown';

export default function TestStart() {

    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            // Once timer Completed 
            // Redirect to Result Page  
        } else {
            // Render a countdown
            return <span>{minutes}:{seconds}</span>;
        }
    };

    const [questionResults, setQuestionResults] = useState(Array.from({ length: 15 }, (_, index) => ({
        index,
        test_id: 1, // Example test ID, replace with actual logic
        question_id: 1,
        question_text: `Question text`,
        explanation: `Explanation for question`,
        result: 'pass', //['none', 'pass', 'fail'][Math.floor(Math.random() * 3)], // Randomly assigning 'none', 'pass', or 'fail' for demonstration
        answer_text: [
            { id: 1, text: `Answer 1 for question` },
            { id: 2, text: `Answer 2 for question` },
            { id: 3, text: `Answer 3 for question` },
            { id: 4, text: `Answer 4 for question` },
        ],
        selectedAnswerId: null,
    })));

    const handleAnswerSelection = (questionIndex, answerId) => {
        setQuestionResults((prevQuestionResults) => {
            const updatedQuestionResults = [...prevQuestionResults];
            updatedQuestionResults[questionIndex].selectedAnswerId = answerId;
            return updatedQuestionResults;
        });
    };

    const currentQuestionIndex = 0;
    const currentQuestion = questionResults[currentQuestionIndex];





    return (
        <>
            <Head title="Premium" />
            <Header />
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 p-10 bg-slate-50">
                {/* Left Side (spans 8 columns on large screens) */}
                <div className="order-2 lg:order-1 lg:col-span-8 flex flex-col space-y-4 border rounded-xl bg-white p-10">
                    <div className="flex justify-between items-center">
                        <p className="text-zinc-400 text-sm">Question 1 / 15</p>
                        <h2 className="text-lg sm:text-sm text-gray-400 mb-2">
                            <FontAwesomeIcon icon={faClock} className="mr-2" />
                            <Countdown date={Date.now() + 30 * 60 * 1000} renderer={renderer} />
                        </h2>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">{currentQuestion.question_text}</h1>
                    </div>
                    <div>
                        <div className="mt-2 space-y-2">
                            {currentQuestion.answer_text.map((answer) => (
                                <label
                                    key={answer.id}
                                    className={`flex items-center space-x-2 text-sm px-6 py-2 rounded-xl flex-1 hover:bg-gray-200 ${answer.id === currentQuestion.selectedAnswerId && currentQuestion.result === 'pass' ? 'border border-lime-700' :
                                            answer.id === currentQuestion.selectedAnswerId && currentQuestion.result === 'fail' ? 'border border-red-500' :
                                                'border border-gray-100'
                                        }`}
                                    onClick={() => handleAnswerSelection(currentQuestionIndex, answer.id)}
                                >
                                    <div className="relative">
                                        <input type="radio" name={`answer_${currentQuestionIndex}`} className="hidden peer" />
                                        <div className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-${answer.id === currentQuestion.selectedAnswerId && currentQuestion.result === 'pass' ? 'green' :
                                                answer.id === currentQuestion.selectedAnswerId && currentQuestion.result === 'fail' ? 'red' :
                                                    'gray'
                                            }-500`}>
                                            {(currentQuestion.result === 'none' || currentQuestion.result === 'pass') ? (
                                                <FontAwesomeIcon icon={faCheck} className="text-white peer-checked:inline" />
                                            ) : (
                                                <FontAwesomeIcon icon={faTimes} className="text-white peer-checked:inline" />
                                            )}
                                        </div>
                                    </div>
                                    <span>{answer.text}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                        <button className="bg-primary text-white px-8 py-2 rounded-full flex-1">
                            Previous
                        </button>
                        <button className="bg-primary text-white px-8 py-2 rounded-full flex-1">
                            Next
                        </button>
                    </div>
                    <h1 className="text-lg sm:text-lg font-bold mb-4">
                        Explanation
                    </h1>
                    <p className="text-gray-600 text-sm bg-slate-50 p-2 rounded-lg">
                        Ensuring the accuracy and quality of our practice tests is paramount. Learn more about our rigorous standards in our{" "}
                        <span className="text-primary underline underline-offset-1">Quality Assurance Guidelines.</span>
                    </p>
                </div>

                {/* Right Side (spans 4 columns on large screens) */}
                <div className="order-1 md:h-64 lg:order-2 lg:col-span-4 flex flex-col space-y-4 border rounded-xl bg-white p-10">
                    <h1 className="hidden sm:flex text-xl text-gray-800 mb-4">Featured Highlights</h1>
                    {/* Circles for Small Screens */}
                    <div className="flex space-x-1 mb-4 sm:hidden">
                        {questionResults.map((result) => (
                            <div
                                key={result.index}
                                className={`w-8 h-2 rounded-full ${result.result === 'pass' ? 'bg-green-500' :
                                    result.result === 'fail' ? 'bg-red-500' :
                                        'bg-gray-200'
                                    }`}
                            />
                        ))}
                    </div>
                    {/* Circles for Larger Screens */}
                    <div className="hidden sm:grid grid-cols-5 gap-2 mb-4">
                        {questionResults.map((result) => (
                            <div
                                key={result.index}
                                className={`w-10 h-10 flex items-center justify-center rounded-full ${result.result === 'pass' ? 'bg-green-500' :
                                    result.result === 'fail' ? 'bg-red-500' :
                                        'bg-gray-200'
                                    }`}
                            >
                                {result.index + 1}
                            </div>
                        ))}
                    </div>
                    {/* Buttons outside the main right div, only visible on large screens */}
                    <div className="hidden lg:flex order-3 lg:col-span-4 flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4 lg:justify-end lg:py-4">
                        <button className="bg-white text-black  border border-primary px-6 py-2 rounded-full flex-1 flex items-center justify-center">
                            <FontAwesomeIcon icon={faChevronLeft} className="mr-4 text-sm" />
                            All Tests
                        </button>
                        <button className="bg-white text-black border border-primary px-6 py-2 rounded-full flex-1 flex items-center justify-center">
                            <FontAwesomeIcon icon={faRedo} className="mr-4 text-sm" />
                            Restart
                        </button>
                    </div>
                </div>

                {/* Buttons outside the main right div */}

            </section>
        </>
    );
}
