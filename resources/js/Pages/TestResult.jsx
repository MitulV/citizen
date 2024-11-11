import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
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

export default function TestResult({ result, totalTimeTaken }) {
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
                    <section className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 sm:p-6 md:p-8 lg:p-10 xl:px-32">
                        {/* Left Side */}
                        <div className="order-2 lg:order-1 lg:col-span-4 flex flex-col space-y-6 bg-white rounded-xl p-6 sm:p-8 md:p-10">
                            <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                                How to Pass on Your First Try
                            </h1>
                            <ul className="space-y-2 text-gray-600 mt-4">
                                {[
                                    "Access to 850+ Practice Questions",
                                    "Comprehensive Chapter-Wise Study Plan",
                                    "450+ Interactive Flashcards",
                                    "Unlimited Test Simulations for Mastery",
                                ].map((text, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="mr-2 text-gray-600"
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <div className="flex flex-col items-center mt-6">
                                <img
                                    src="/images/Group 1753.png"
                                    alt="Placeholder"
                                    className="w-full max-w-[300px] rounded-tl-[24px]"
                                />
                                <Link
                                    href={route("premiumPage", {})}
                                    as="button"
                                    className="bg-primary text-white px-6 py-3 rounded-full mt-6 w-3/4 sm:w-full"
                                >
                                    Pass with Premium
                                </Link>

                                <p className="text-sm mt-4">
                                    100% Money Back Guarantee
                                </p>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="order-1 lg:order-2 lg:col-span-8 flex flex-col space-y-6 bg-white rounded-2xl p-6 sm:p-8 md:p-10 h-auto">
                            {/* Progress and Stats */}
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

                                    <Link
                                        href={route("premiumPage", {})}
                                        as="button"
                                        className="bg-primary text-white px-6 py-2 rounded-full mt-6 w-full sm:w-auto"
                                    >
                                        Next up, Practice Test 2
                                    </Link>
                                </div>
                            </div>

                            {/* What’s Next Section */}
                            <div className="flex flex-col space-y-4 mt-10">
                                <h1 className="text-xl sm:text-2xl font-bold">
                                    What’s next?
                                </h1>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    {[
                                        "Restart this test",
                                        "Pass the first time guarantee",
                                    ].map((title, index) => (
                                        <div
                                            key={index}
                                            className={`border p-6 rounded-2xl ${
                                                index === 1
                                                    ? "bg-indigo-600 text-white"
                                                    : "bg-white"
                                            } `}
                                        >
                                            <h1 className="text-lg font-bold">
                                                {title}
                                            </h1>
                                            {index == 0 ? (
                                                <p className="mt-2">
                                                    Want to revisit the same
                                                    questions you just did? Take
                                                    this test once again.
                                                </p>
                                            ) : (
                                                <p className="mt-2">
                                                    Be fully prepared and ace
                                                    your Canadian citizenship
                                                    test on the first attempt
                                                </p>
                                            )}
                                            {index == 0 ? (
                                                <Link
                                                    as="button"
                                                    className="text-primary underline underline-offset-1 mt-4"
                                                    href={route(
                                                        "testInfoPage",
                                                        {}
                                                    )}
                                                >
                                                    Restart
                                                </Link>
                                            ) : (
                                                <Link
                                                    href={route(
                                                        "premiumPage",
                                                        {}
                                                    )}
                                                    as="button"
                                                    className="bg-primary text-white px-8 sm:px-10 md:px-12 lg:px-16 py-2 rounded-full mt-4 text-center w-full sm:w-auto"
                                                >
                                                    Unlock all 600+ Questions
                                                </Link>
                                            )}
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
