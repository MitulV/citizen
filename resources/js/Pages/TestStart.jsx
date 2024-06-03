import React from 'react';
import Header from "@/Components/Header";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes, faClock, faRedo } from "@fortawesome/free-solid-svg-icons";

export default function TestStart() {
    return (
        <>
            <Head title="Premium" />
            <Header />
            <section className="min-h-screen flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 p-10 bg-slate-50">
                {/* Left Side */}
                <div className="md:h-80 md:w-2/5 p-4 flex flex-col space-y-4 border rounded-xl bg-white md:order-2">
                    <h1 className="hidden sm:flex text-xl text-gray-800 mb-4">Featured Highlights</h1>
                    {/* Circles for Small Screens */}
                    <div className="flex space-x-1 mb-4 sm:hidden">
                        {[...Array(15)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-8 h-2 rounded-full ${
                                    index === 0
                                        ? 'bg-green-500'
                                        : index === 1
                                        ? 'bg-red-500'
                                        : 'bg-gray-200'
                                }`}
                            />
                        ))}
                    </div>
                    {/* Circles for Larger Screens */}
                    <div className="hidden sm:grid grid-cols-5 gap-2 mb-4 ">
                        {[...Array(15)].map((_, index) => (
                            <div
                                key={index}
                                className={`w-10 h-10 flex items-center justify-center rounded-full ${
                                    index === 0
                                        ? 'bg-green-500'
                                        : index === 1
                                        ? 'bg-red-500'
                                        : 'bg-gray-200'
                                }`}
                            >
                                {index + 1}
                            </div>
                        ))}
                    </div>
                    <div className="hidden sm:flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                        <button className="bg-white text-black border border-primary px-6 py-2 rounded-md flex-1 flex items-center justify-center">
                            <FontAwesomeIcon icon={faRedo} className="mr-2" />
                            All Tests
                        </button>
                        <button className="bg-white text-black border border-primary px-6 py-2 rounded-md flex-1 flex items-center justify-center">
                            <FontAwesomeIcon icon={faRedo} className="mr-2" />
                            Restart
                        </button>
                    </div>
                </div>

                {/* Right Side */}
                <div className="w-full md:w-3/5 p-4 flex flex-col space-y-4 border rounded-xl bg-white md:order-1">
                    <div className="flex justify-between items-center">
                        <p className="text-zinc-400 text-sm">Question 4 / 15</p>
                        <h2 className="text-lg sm:text-sm text-gray-400 mb-2">
                            <FontAwesomeIcon icon={faClock} className="mr-2" />29:49
                        </h2>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold">What are the regions of Canada?</h1>
                    </div>
                    <div>
                        <div className="mt-2 space-y-2">
                            {/* Answer Option 1 */}
                            <label className="flex items-center space-x-2 text-sm border border-red-500 px-6 py-2 rounded-xl flex-1">
                                <div className="relative">
                                    <input type="radio" name="answer" className="hidden peer" />
                                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-red-500">
                                        <FontAwesomeIcon icon={faTimes} className="text-white peer-checked:inline" />
                                    </div>
                                </div>
                                <span>Atlantic provinces, Central Canada, Prairie Provinces, West Coast and Northern Territories</span>
                            </label>
                            {/* Answer Option 2 */}
                            <label className="flex items-center space-x-2 text-sm border border-gray-100 px-6 py-2 rounded-xl flex-1">
                                <div className="relative">
                                    <input type="radio" name="answer" className="hidden peer" />
                                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                                    </div>
                                </div>
                                <span>South Provinces, Northern Canada</span>
                            </label>
                            {/* Answer Option 3 */}
                            <label className="flex items-center space-x-2 text-sm border border-lime-700 px-6 py-2 rounded-xl flex-1">
                                <div className="relative">
                                    <input type="radio" name="answer" className="hidden peer" />
                                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-green-500">
                                        <FontAwesomeIcon icon={faCheck} className="text-white peer-checked:inline" />
                                    </div>
                                </div>
                                <span>Ontario, Quebec, Prairie provinces and Central Canada</span>
                            </label>
                            {/* Answer Option 4 */}
                            <label className="flex items-center space-x-2 text-sm border border-gray-100 px-6 py-2 rounded-xl flex-1">
                                <div className="relative">
                                    <input type="radio" name="answer" className="hidden peer" />
                                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center">
                                    </div>
                                </div>
                                <span>Atlantic and Central Canada</span>
                            </label>
                        </div>
                    </div>
                    <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                        <button className="bg-primary text-white px-8 py-2 rounded-full flex-1">
                            Previous
                        </button>
                        <button className="bg-white text-black border border-primary px-8 py-2 rounded-full flex-1">
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
            </section>
        </>
    );
}
