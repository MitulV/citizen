import React, { useState } from "react";
import { Head, Link, router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faClock,
    faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function SimulationResult({
    auth,
    result,
    totalTimeTaken,
    testId,
    questionResults,
}) {
    const handleRestart = () => {
        router.post(
            `/simulation/test/${testId}`,
            {},
            { preserveState: false, replace: true }
        );
    };

    const pathColor = result.totalCorrect < 12 ? "#FF0000" : "#3E9330";
    const message =
        result.percentage < 75
            ? "Not enough to pass :-("
            : "Great. You Passed!";

    let messageInfo =
        result.percentage < 75
            ? "Great job! Take it to the next level by completing all study guides, practice tests, and flashcards to ace your citizenship test!"
            : "No worries! A little more practice and you'll nail it. Complete all study guides, practice tests, and flashcards to guarantee a first-time pass!";

    return (
        <AuthenticatedLayout user={auth.user} isChapterPanelVisible={false}>
            <Head title="Premium" />
            <div className="flex">
                {/* Sidebar Component */}
                {/* Sidebar Content */}

                <main className="flex-1 p-4  bg-slate-50">
                    <section className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-6 sm:px-4 md:px-8 lg:px-16 xl:px-24">
                        <div className="order-1 lg:order-2 lg:col-span-12 flex flex-col space-y-8 md:space-y-10 rounded-2xl bg-white p-6 md:p-10">
                            {/* First Section on Right */}
                            <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6">
                                <div className="w-36 h-36 sm:w-40 sm:h-40">
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
                                    <h1 className="text-2xl sm:text-3xl font-bold text-lime-700">
                                        {message}
                                    </h1>
                                    <p className="text-zinc-600 mt-2">
                                        {messageInfo}
                                    </p>
                                    <div className="flex flex-row space-x-6 mt-4">
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                            <span className="text-zinc-500 text-sm sm:text-base">
                                                {result.totalCorrect} Correct
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                            <span className="text-zinc-500 text-sm sm:text-base">
                                                {result.totalWrong} Wrong
                                            </span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <FontAwesomeIcon
                                                icon={faClock}
                                                className="text-zinc-500"
                                            />
                                            <span className="text-zinc-500 text-sm sm:text-base">
                                                {totalTimeTaken.minutes} minutes{" "}
                                                {totalTimeTaken.seconds} seconds
                                            </span>
                                        </div>
                                    </div>

                                    <Link
                                        className="bg-primary text-white px-6 py-2 rounded-full mt-6 w-full sm:w-auto"
                                        as="button"
                                        href={route("simulation.test", 1)}
                                        method="post"
                                    >
                                        <FontAwesomeIcon
                                            icon={faRotateRight}
                                            className="mr-2"
                                        />
                                        Restart Simulation Test
                                    </Link>
                                </div>
                            </div>

                            {/* Answer Results Section */}
                            <section className="mt-10">
                                <h1 className="text-xl sm:text-2xl font-bold mb-6">
                                    Answer Results
                                </h1>
                                {questionResults.map(
                                    (question, currentQuestionIndex) => (
                                        <div
                                            key={question.question_id}
                                            className="flex flex-col space-y-6 border rounded-xl bg-white p-4 md:p-8 mb-4"
                                        >
                                            <div className="flex justify-between items-center ">
                                                <p className="text-zinc-400 text-sm">
                                                    Question{" "}
                                                    {question.index + 1} /{" "}
                                                    {questionResults.length}
                                                </p>
                                            </div>
                                            <div>
                                                <h1 className="text-xl lg:text-2xl font-semibold">
                                                    {question.question_text}
                                                </h1>
                                            </div>
                                            <div>
                                                <div className="mt-4 space-y-2">
                                                    {question.answer_text.map(
                                                        (answer) => {
                                                            const isSelected =
                                                                answer.id ===
                                                                question.selectedAnswerId;
                                                            const isPass =
                                                                isSelected &&
                                                                question.result ===
                                                                    "pass";
                                                            const isFail =
                                                                isSelected &&
                                                                question.result ===
                                                                    "fail";
                                                            const isDisabled =
                                                                question.isOptionSelected;

                                                            return (
                                                                <label
                                                                    key={
                                                                        answer.id
                                                                    }
                                                                    className={`flex items-center space-x-4 text-base px-2 py-3 rounded-xl cursor-pointer ${
                                                                        answer.id ===
                                                                            question.selectedAnswerId &&
                                                                        question.result ===
                                                                            "pass"
                                                                            ? "border border-lime-700"
                                                                            : answer.id ===
                                                                                  question.selectedAnswerId &&
                                                                              question.result !==
                                                                                  "pass"
                                                                            ? "border border-red-500"
                                                                            : answer.id ===
                                                                              question.correctAnswerId
                                                                            ? "border border-lime-700"
                                                                            : "border-gray-700"
                                                                    }`}
                                                                    onClick={() => {
                                                                        if (
                                                                            !isDisabled
                                                                        ) {
                                                                            handleAnswerSelection(
                                                                                question.question_id,
                                                                                answer.id,
                                                                                question.test_id,
                                                                                question.index
                                                                            );
                                                                        }
                                                                    }}
                                                                >
                                                                    <div className="relative">
                                                                        <input
                                                                            type="radio"
                                                                            name={`answer_${currentQuestionIndex}`}
                                                                            className="hidden peer"
                                                                            defaultChecked={
                                                                                isSelected
                                                                            }
                                                                            disabled={
                                                                                isDisabled
                                                                            }
                                                                        />
                                                                        <div
                                                                            className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center peer-checked:bg-${
                                                                                answer.id ===
                                                                                    question.selectedAnswerId &&
                                                                                question.result ===
                                                                                    "pass"
                                                                                    ? "green"
                                                                                    : answer.id ===
                                                                                          question.selectedAnswerId &&
                                                                                      question.result !==
                                                                                          "pass"
                                                                                    ? "red"
                                                                                    : answer.id ===
                                                                                      question.correctAnswerId
                                                                                    ? "green"
                                                                                    : "gray"
                                                                            }-500`}
                                                                        >
                                                                            {isPass ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCheck
                                                                                    }
                                                                                    className="text-green-500"
                                                                                />
                                                                            ) : isFail ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faTimes
                                                                                    }
                                                                                    className="text-red-500"
                                                                                />
                                                                            ) : answer.id ===
                                                                              question.correctAnswerId ? (
                                                                                <FontAwesomeIcon
                                                                                    icon={
                                                                                        faCheck
                                                                                    }
                                                                                    className="text-green-500"
                                                                                />
                                                                            ) : null}
                                                                        </div>
                                                                    </div>
                                                                    <span>
                                                                        {
                                                                            answer.text
                                                                        }
                                                                    </span>
                                                                </label>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            {question.explanation && (
                                                <div className="mt-6">
                                                    <h1 className="text-lg font-semibold mb-4">
                                                        Explanation
                                                    </h1>
                                                    <p className="text-gray-600 text-base bg-slate-50 p-2 rounded-lg ">
                                                        {question.explanation}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    )
                                )}
                            </section>
                        </div>
                    </section>
                </main>
            </div>
        </AuthenticatedLayout>
    );
}
