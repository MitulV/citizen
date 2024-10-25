import React, { useState } from "react";
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
import GuestLayout from "@/Layouts/GuestLayout";

export default function TestStart({ result, totalTimeTaken }) {
    const [isBannerVisible, setIsBannerVisible] = useState(true);
    const handleRestart = () => {
        router.post(
            `/test/${chapterId}`,
            {},
            { preserveState: false, replace: true }
        );
    };

    const pathColor = result.percentage < 75 ? "#FF0000" : "#3E9330";
    const message =
        result.percentage < 75
            ? "Not enough to pass :-("
            : "Great. You Passed!";
    return (
        <>
            {isBannerVisible && (
                <ResultBanner setIsBannerVisible={setIsBannerVisible} />
            )}
            {!isBannerVisible && (
                <GuestLayout>
                    <Head title="Premium" />
                    <section className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 md:p-8 bg-slate-50 sm:px-6 md:px-12 xl:px-32">
                        {/* Left Side (spans 12 columns on small screens, 4 columns on large screens) */}
                        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col space-y-4 rounded-xl bg-white p-4 sm:p-6 md:p-8">
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
                                    className="w-full max-w-[300px] rounded-tl-[24px]"
                                />
                                <button className="bg-primary text-white px-4 py-2 rounded-full mt-6 w-3/4 sm:w-full">
                                    Pass with Premium Guaranteed
                                </button>
                                <h2 className="text-base mt-4">
                                    100% Money Back Guarantee
                                </h2>
                            </div>
                        </div>

                        {/* Right Side (spans 12 columns on small screens, 8 columns on large screens) */}
                        <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col space-y-6 rounded-2xl bg-white p-4 sm:p-6 md:p-8 h-auto">
                            {/* First Section on Right */}
                            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
                                <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40">
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
                                <div className="flex flex-col">
                                    <h1 className="text-2xl sm:text-3xl font-bold text-lime-700 mt-2">
                                        {message}
                                    </h1>
                                    <p className="text-gray-600 mt-2">
                                        Unlock 600+ practice questions today.
                                    </p>
                                    <div className="flex items-center space-x-4 mt-4">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span className="text-gray-500">
                                            {result.totalCorrect} Correct
                                        </span>
                                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                        <span className="text-gray-500">
                                            {result.totalWrong} Wrong
                                        </span>
                                        <FontAwesomeIcon
                                            icon={faClock}
                                            className="text-gray-500"
                                        />
                                        <span className="text-gray-500">
                                            {totalTimeTaken.minutes} min{" "}
                                            {totalTimeTaken.seconds} sec
                                        </span>
                                    </div>
                                    <button className="bg-primary text-white px-6 py-2 rounded-full mt-6 w-full sm:w-auto">
                                        Next up, Practice Test 2
                                    </button>
                                </div>
                            </div>

                            {/* Second Section on Right */}
                            <div className="flex flex-col space-y-4 mt-10">
                                <h1 className="text-xl sm:text-2xl font-bold">
                                    What’s next?
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {/* Cards */}
                                    {[
                                        "Restart this test",
                                        "Continue to the next test",
                                        "Review your answers",
                                        "Unlock all 600+ Questions",
                                    ].map((title, index) => (
                                        <div
                                            key={index}
                                            className={`border p-6 rounded-2xl ${
                                                index === 3
                                                    ? "bg-indigo-600 text-white"
                                                    : "bg-white"
                                            } `}
                                        >
                                            <h1 className="text-lg font-bold">
                                                {title}
                                            </h1>
                                            <p className="mt-2">
                                                Customize as needed for each
                                                step here.
                                            </p>
                                            <button className="text-primary underline underline-offset-1 mt-4">
                                                Click here
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                </GuestLayout>
            )}
        </>
    );
}
