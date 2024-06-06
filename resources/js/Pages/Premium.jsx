import React from "react";
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";

export default function TestStart() {
    return (
        <>
            <Head title="Premium" />
            <Header />
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 md:p-10 bg-slate-50">
                {/* Left Column */}
                <div className="lg:col-span-6 flex flex-col space-y-4 p-6 md:p-10">
                    <h1 className="text-xl sm:text-3xl lg:text-6xl font-bold">
                        Pass your Canadian Citizenship test in <br /> first try.
                        <span className="text-indigo-600"> Guaranteed.</span>
                    </h1>
                    <p className="text-gray-600">
                        Your all-in-one toolkit for success: Prepare thoroughly
                        with 700+ test questions, topic-based quizzes, realistic
                        test simulations, study quizzes, and more.
                    </p>
                    <div className="flex flex-col md:flex-row items-center md:items-start mt-4">
                    <button className="bg-primary text-white px-4 py-2 rounded-full mb-4 md:mr-4 md:mb-0 md:px-6 md:py-3">
    Get all exam-like questions
</button>

                        <div>
                            <img
                                src="/images/pass guarantee.png"
                                alt="Logo"
                                className="h-10 w-auto ml-0 md:ml-4"
                                style={{ width: "80px", height: "auto" }}
                            />
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Join the 18,300+ new citizens who've passed their tests
                        with our help.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            700+ similar to real exam questions
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Advanced simulation test
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Pass Guarantee: pass, or it's on us.
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Tailored study plan
                        </li>
                    </ul>
                </div>

                <div className="lg:col-span-6 flex justify-center items-center rounded-xl p-6 md:p-10">
    <img
        src="/images/ea59b0c12c13b0daf792e11ef62864a7.png"
        alt="Placeholder"
        className="w-full md:max-w-md h-auto"
    />
</div>


                {/* Additional Content Below Columns */}
                <div className="lg:col-span-12 flex flex-col items-center sm:justify-between">
                    <h1 className="text-4xl font-bold mt-4 text-center lg:text-left ">
                        Why busy learners love CitizenTestPrep Premium
                    </h1>

                    <p className="text-gray-600 mt-4 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start">
    Our customers rate us ExcellentRated{" "}
    <div className="flex items-center">
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
        <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
    </div>
    <span className="lg:ml-2">5 out of 5 based on over 200+ reviews.</span>
</p>


                    <div className="container mx-auto px-2 py-4">
    <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="p-8 bg-white rounded-2xl shadow-md flex flex-col justify-between h-full text-black">
                <div>
                    <h1 className="text-xl font-bold mb-2">
                        “Passed on my first attempt”
                    </h1>
                    <p className="text-sm mb-2 text-gray-500">
                        I failed my Canadian citizenship test initially. I was shocked
                        because I had read the book and lived in Canada for 8 years. It was
                        very embarrassing. Then I found CitizenTestPrep. The platform helped
                        me a lot to pass the exam.
                    </p>
                </div>
                <div className="flex items-center mt-4">
                    <img
                        src="/images/review 3.png"
                        alt="Profile Picture"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-base font-bold text-gray-600">
                            Jillian McAllister
                        </h2>
                        <p className="text-sm text-gray-600">
                            British Columbia
                        </p>
                    </div>
                    <div className="flex ml-auto space-x-1">
                        {/* Font Awesome stars */}
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between h-full text-black">
                <div>
                    <h1 className="text-xl font-bold mb-2">
                        “Exactly What I Needed”
                    </h1>
                    <p className="text-sm mb-2 text-gray-500">
                        If you want to prepare for the Canadian Citizenship test, this is
                        the place to prepare. The chapter-wise practice tests were
                        exactly what I needed to understand each section thoroughly.
                    </p>
                </div>
                <div className="flex items-center mb-2">
                    <img
                        src="/images/review 2.png"
                        alt="Profile Picture"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-base font-bold text-gray-600">
                            Marcus Tremblay
                        </h2>
                        <p className="text-sm text-gray-600">
                            Nova Scotia
                        </p>
                    </div>
                    <div className="flex ml-auto space-x-1">
                        {/* Font Awesome stars */}
                    </div>
                </div>
            </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
            <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between h-full text-black">
                <div>
                    <h1 className="text-xl font-bold mb-2">
                        “Best Resource For The Test”
                    </h1>
                    <p className="text-sm mb-2 text-gray-500">
                        I failed the test in my first attempt. I was looking for an online
                        platform to help me out. CitizenTestPrep premium is without a
                        doubt the best resource for the Canadian Citizenship Test
                    </p>
                </div>
                <div className="flex items-center mb-2">
                    <img
                        src="/images/review 1.png"
                        alt="Profile Picture"
                        className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                        <h2 className="text-base font-bold text-gray-600">
                            Hitoshi Matsumoto
                        </h2>
                        <p className="text-sm text-gray-600">
                            Saskatchewan
                        </p>
                    </div>
                    <div className="flex ml-auto space-x-1">
                        {/* Font Awesome stars */}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

                </div>
            </section>
            <section className="lg:col-span-12 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 xl:px-64">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
                    Lively and innovative method of test preparation!
                </h1>
                <p className="text-gray-600 font-inter text-center text-base lg:text-lg max-h-20 md:max-h-24 lg:max-h-32 overflow-hidden">
                    We offer valuable and useful resources to help people
                    prepare for the Canadian citizenship test. Our comprehensive
                    platform provides an organized way to prepare thoroughly.
                    You will gain a better understanding of Canadian values and
                    principles. Familiarize yourself with the question format
                    and content of the real exam.
                </p>
                <img
                    src="/images/mobile chapt.png"
                    alt="Your Photo"
                    className="w-full max-w-md rounded-lg shadow-md mb-4"
                />
                <p className="text-gray-600 font-inter text-center text-base lg:text-lg">
                    Get an effective pathway to success. Whether it's your first
                    time or not, you will be benefited. Our user-friendly
                    interface makes it easy to study at your own pace. Join
                    thousands of satisfied users who have aced their citizenship
                    tests with our proven study resources.
                </p>
            </section>
        </>
    );
}
