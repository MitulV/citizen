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
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Result({
    auth,
    result,
    totalTimeTaken,
    testId,
    chapterId,
    chapters,
}) {
    const handleRestart = () => {
        router.post(
            `/practice-tests/${chapterId}${testId ? `/${testId}` : ""}`,
            {},
            { preserveState: false, replace: true }
        );
    };

    const pathColor = result.totalCorrect < 15 ? "#FF0000" : "#3E9330";
    const message =
        result.percentage < 75
            ? "Not enough to pass :-("
            : "Great. You Passed!";
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
            >
                <Head title="Premium" />
                <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 md:p-10 bg-slate-50">
                    {/* Right Side (spans 12 columns on small screens, 8 columns on large screens) */}
                    <div className="order-1 lg:order-2 lg:col-span-12 flex flex-col space-y-10 md:space-y-8 rounded-2xl bg-white  md:p-10 h-64">
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
                                    There are more practice questions left to
                                    go, unlock 600+ practice questions today.
                                </p>
                                <div className="flex items-center space-x-4 p-2 ml-10">
                                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                    <span className="text-zinc-500">
                                        {result.totalCorrect} Correct
                                    </span>
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <span className="text-zinc-500">
                                        {result.totalWrong} Wrong
                                    </span>
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="text-zinc-500"
                                    />
                                    <span className="text-zinc-500">
                                        {totalTimeTaken.minutes} minutes{" "}
                                        {totalTimeTaken.seconds} seconds
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
                            {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="border p-6 rounded-2xl bg-white">
                                    <h1 className="text-xl font-bold">
                                        Restart this test
                                    </h1>
                                    <p>
                                        Want to revisit the same questions you
                                        just did? Take this test once again.
                                    </p>
                                    <h2
                                        onClick={handleRestart}
                                        className="text-primary underline underline-offset-1"
                                    >
                                        Restart
                                    </h2>
                                </div>

                                <div className="border p-6 rounded-2xl bg-white">
                                    <h1 className="text-xl font-bold">
                                        Continue to the next test
                                    </h1>
                                    <p className="mt-2">
                                        Keep practicing with a new set of
                                        questions for the Canadian Citizenship
                                        Test.
                                    </p>
                                    <h2 className="text-primary underline underline-offset-1">
                                        Restart
                                    </h2>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </section>
            </AuthenticatedLayout>
        </>
    );
}
