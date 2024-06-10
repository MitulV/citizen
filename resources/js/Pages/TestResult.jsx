import React, { useState } from "react";
import Header from "@/Components/Header";
import { Head, router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faClock,
    faRedo,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import ResultBanner from "@/Components/ResultBanner";

export default function TestStart({result,totalTimeTaken}) {

    const [isBannerVisible,setIsBannerVisible] = useState(true);
    const handleRestart = () => {
        router.post(`/test/${chapterId}`, {}, { preserveState: false, replace: true, })
    };

    const pathColor = result.percentage < 75 ? "#FF0000" : "#3E9330";
    const message = result.percentage < 75 ? 'Not enough to pass :-(' : 'Great. You Passed!';
    return (
        <>
            <Head title="Premium" />
            
            {
                isBannerVisible && 
            <ResultBanner setIsBannerVisible={setIsBannerVisible}/>
            }
            {
                !isBannerVisible && 
                <>
                <Header />
                <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 md:p-10 bg-slate-50">
                {/* Left Side (spans 12 columns on small screens, 4 columns on large screens) */}
                <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col space-y-4 rounded-xl bg-white p-6 md:p-10">
                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        How to Pass the First Time
                    </h1>
                    <ul className="space-y-2 text-gray-600 mt-4">
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Access to Over 600+ Test Questions
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Practice tests for each chapter
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Unlimited exam simulation runs
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Tailored study plan
                        </li>
                    </ul>
                    <div className="flex flex-col items-center mt-4">
                        <img
                            src="/images/Group 1753.png"
                            alt="Placeholder"
                            className="w-60 h-80 rounded-tl-[24px] rounded-tr-none rounded-br-none rounded-bl-none"
                        />
                        <button className="bg-primary text-white px-6 py-2 rounded-full mt-8">
                            Pass with Premium Guaranteed
                        </button>
                        <h2 className="text-base mt-4">100% Money Back Guarantee</h2>
                    </div>
                </div>

                {/* Right Side (spans 12 columns on small screens, 8 columns on large screens) */}
                <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col space-y-10 md:space-y-8 rounded-2xl bg-white  md:p-10 h-64">
                    {/* First Section on Right */}
                    <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ">
                        {/* Progress circle */}
                        <div className="w-40 h-40">
                            <CircularProgressbar
                                value={result.percentage}
                                text={`${result.percentage}%`}
                                strokeWidth={8}
                                styles={buildStyles({
                                    textColor: "black",
                                    pathColor: pathColor,
                                })}
                            />
                        </div>
                        <div className="flex flex-col ">
                            <h1 className="text-3xl font-bold text-lime-700 p-2 ml-10">
                                {message}
                            </h1>
                            <p className="text-zinc-600 p-2 ml-10">
                                There are more practice questions left to go,
                                unlock 600+ practice questions today.
                            </p>
                            <div className="flex items-center space-x-4 p-2 ml-10">
                                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                <span className="text-zinc-500">{result.totalCorrect} Correct</span>
                                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                <span className="text-zinc-500">{result.totalWrong} Wrong</span>
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="text-zinc-500"
                                />
                                <span className="text-zinc-500">
                                    {totalTimeTaken.minutes} minutes {totalTimeTaken.seconds} seconds
                                </span>
                            </div>
                            <button className="bg-primary text-white px-6 py-2 rounded-full mt-4 w-full sm:w-auto ml-10">
                                Next up, Practice Test 2
                            </button>
                        </div>
                    </div>

                    {/* Second Section on Right */}
                    
                    <div className="flex flex-col space-y-4 ">
                        <h1 className="text-xl sm:text-2xl font-bold mt-12">
                            What’s next?
                        </h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Card 1 */}
                            <div className="border p-6 rounded-2xl bg-white">
                                <h1 className="text-xl font-bold">Restart this test</h1>
                                <p>Want to revisit the same questions you just did? Take this test once again.</p>
                                <h2 onClick={handleRestart} className="text-primary underline underline-offset-1">Restart</h2>
                            </div>
                            {/* Card 2 */}
                            <div className="border p-6 rounded-2xl bg-white">
                                <h1 className="text-xl font-bold">Continue to the next test</h1>
                                <p className="mt-2">Keep practicing with a new set of questions for the Canadian Citizenship Test.
                                </p>
                                <h2 className="text-primary underline underline-offset-1">Restart</h2>
                            </div>
                            {/* Card 3 */}
                            <div className="border p-6 rounded-2xl bg-white">
                                <h1 className="text-xl font-bold">Review your answers</h1>
                                <p className="mt-2">See which answers you chose and what the correct answers are.
                                </p>
                                <h2 className="text-primary underline underline-offset-1">Restart</h2>
                            </div>
                            {/* Card 4 */}
                            <div className="border p-6 rounded-2xl bg-indigo-600 text-white">
                                <h1 className="text-xl font-bold">Restart this test</h1>
                                <p className="mt-2">Want to revisit the same questions you just did? Take this test once again.</p>
                                <button className="bg-primary text-white px-24 py-2 rounded-full mt-4 w-full sm:w-auto ">
                                Unlock all 600+ Questions
                            </button>
                            </div>
                        </div>
                    </div>
                </div>
                </section>
                </>
            }
            
            
        </>
    );
}
