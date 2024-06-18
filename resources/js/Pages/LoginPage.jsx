import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faFile,
    faCheck,
    faCircleQuestion,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/Components/Sidebar";
import LoginHeader from "@/Components/LoginHeader";

export default function LoginPage() {
    const [sideMenuIsExpand, setSideMenuIsExpand] = useState(true);

    return (
        <>
        <LoginHeader/>
        <div className="relative min-h-screen md:flex">
            <Sidebar setExpand={setSideMenuIsExpand} />

            <section
                className={`bg-slate-100 py-12 ${
                    sideMenuIsExpand ? "md:ml-72" : "md:ml-20"
                }`}
            >
                <div className="container mx-auto">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
                            Study Guide
                        </h1>

                        <p className="text-sm md:text-sm text-gray-400 mb-4">
                            Get ready for your Canadian Citizenship Test with
                            guided lessons paired with chapter practice tests.
                            By systematically covering each chapter with
                            engaging lessons and quizzes, you'll be fully
                            prepared and equipped with all the essential
                            knowledge from Discover Canada.
                        </p>
                    </div>

                    {/* Grid Layout for Study Guide */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 11 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 border-2 border-gray-300"
                            >
                                <img
                                    src="images/chap 2.png"
                                    alt={`Chapter ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <button className="absolute top-2 right-2 bg-primary text-white py-2 px-4 rounded-full text-sm z-20">
                                    Continue
                                </button>
                                <div className="absolute top-2 right-2 z-20">
                                    <FontAwesomeIcon
                                        icon={faCircleCheck}
                                        className="text-green-600 text-2xl"
                                    />
                                </div>
                                <div className="px-5 py-8">
                                    <h1 className="text-lg font-bold">
                                        Chapter {index + 1}
                                    </h1>
                                    <h2 className="text-gray-600 text-lg font-semibold">
                                        The Oath & Introduction
                                    </h2>
                                    <p className="text-gray-500 text-base mt-2">
                                        Just starting to prepare for the exam
                                        and not sure where to begin? Quickly
                                        identify gaps in your knowledge of
                                        Canada. This test contains the questions
                                        that are most often missed by our users.
                                    </p>
                                    <div className="flex justify-between items-start mt-4">
                                        <FontAwesomeIcon icon={faFile} />
                                        <p className="text-left text-gray-800 text-base flex-1 mx-4">
                                            The Oath of Citizenship
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-green-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <section className=" container mx-auto mt-16">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Simulation Tests
                        </h1>
                        <p className="text-gray-600 mt-4">
                            Our Simulation Tests employ an exclusive algorithm
                            to offer you the most accurate simulation of the
                            Canadian Citizenship test. Once you've finished the
                            chapter lessons and quizzes, sharpen your readiness
                            by acing the simulation exams below to ensure you're
                            fully primed for the real exam.
                        </p>
                    </div>

                    {/* Grid Layout for Simulation Tests */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 border-2 border-gray-300"
                            >
                                <img
                                    src="images/chapp1.png"
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <div className="px-5 py-8">
                                    <h1 className="text-lg font-bold text-left">
                                        Exam Simulator {index + 1}
                                    </h1>
                                    <p className="text-gray-500 text-base mt-2">
                                        Our exam simulator draws questions from
                                        every chapter with our proprietary
                                        algorithm to provide you with the most
                                        accurate simulation of the test.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
                <section className="container mx-auto mt-16">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
                            Study Guide
                        </h1>
                        <p className="text-sm md:text-sm text-gray-400 mb-4">
                            Get ready for your Canadian Citizenship Test with
                            guided lessons paired with chapter practice tests.
                            By systematically covering each chapter with
                            engaging lessons and quizzes, you'll be fully
                            prepared and equipped with all the essential
                            knowledge from Discover Canada.
                        </p>
                    </div>

                    {/* Grid Layout for Study Guide */}
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 11 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 border-2 border-gray-300 "
                            >
                                <img
                                    src="images/chap 2.png"
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />

                                <div className="px-5 py-8">
                                    <h1 className="text-lg font-bold">
                                        Chapter {index + 1}
                                    </h1>
                                    <h2 className="text-gray-600 text-lg font-semibold">
                                        The Oath & Introduction
                                    </h2>
                                    <p className="text-gray-500 text-base mt-2">
                                        Just starting to prepare for the exam
                                        and not sure where to begin? Quickly
                                        identify gaps in your knowledge of
                                        Canada. This test contains the questions
                                        that are most often missed by our users.
                                    </p>
                                    <div className="flex justify-between items-start mt-4">
                                        <FontAwesomeIcon
                                            icon={faCircleQuestion}
                                        />{" "}
                                        <p className="text-left text-gray-800 text-base flex-1 mx-4">
                                            Practise Test 1
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-green-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </section>
                </section>

                <div className="container mx-auto mt-16">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl md:text-3xl font-bold mb-4 text-gray-900">
                            Study Guide
                        </h1>
                        <p className="text-sm md:text-sm text-gray-400 mb-4">
                            Get ready for your Canadian Citizenship Test with
                            guided lessons paired with chapter practice tests.
                            By systematically covering each chapter with
                            engaging lessons and quizzes, you'll be fully
                            prepared and equipped with all the essential
                            knowledge from Discover Canada.
                        </p>
                    </div>

                    {/* Grid Layout for Study Guide */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 11 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 border-2 border-gray-300"
                            >
                                <img
                                    src="images/chap 2.png"
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />

                                <div className="px-5 py-8">
                                    <h1 className="text-lg font-bold">
                                        Chapter {index + 1}
                                    </h1>
                                    <h2 className="text-gray-600 text-lg font-semibold">
                                        The Oath & Introduction
                                    </h2>
                                    <p className="text-gray-500 text-base mt-2">
                                        Just starting to prepare for the exam
                                        and not sure where to begin? Quickly
                                        identify gaps in your knowledge of
                                        Canada. This test contains the questions
                                        that are most often missed by our users.
                                    </p>
                                    <div className="flex justify-between items-start mt-4">
                                        <FontAwesomeIcon icon={faFile} />
                                        <p className="text-left text-gray-800 text-base flex-1 mx-4">
                                            The Oath of Citizenship
                                        </p>
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-green-600"
                                        />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <section className="container mx-auto mt-16">
                    <div className="text-left mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">
                            Tools & Resources
                        </h1>
                        <p className="text-gray-600 mt-4">
                            See the big picture by scrolling through our
                            extensive timeline of Canada’s history, Important
                            People, Interactive Maps and much more. Our
                            preparation tools have helped thousands pass their
                            Canadian Citizenship Test.
                        </p>
                    </div>

                    {/* Grid Layout for Tools & Resources */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <div
                                key={index}
                                className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg hover:shadow-gray-300 border-2 border-gray-300"
                            >
                                <img
                                    src="images/goldpng.png"
                                    alt={`Image ${index + 1}`}
                                    className="w-full h-48 object-cover rounded-t-2xl"
                                />
                                <div className="px-5 py-8">
                                    <h1 className="text-lg font-bold text-left">
                                        Exam Simulator {index + 1}
                                    </h1>
                                    <p className="text-gray-500 text-base mt-2">
                                        See how likely are you to pass the
                                        actual test based on your current study
                                        plan and completed goals.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </section>
        </div>
        </>
        
    );
}
