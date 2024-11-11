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
    questionResults,
}) {
    const handleRestart = () => {
        router.post(
            `/practice-tests/${chapterId}${testId ? `/${testId}` : ""}`,
            {},
            { preserveState: false, replace: true }
        );
    };

    const pathColor = result.totalCorrect < 12 ? "#FF0000" : "#3E9330";
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
                <section className="container mx-auto   grid grid-cols-1 lg:grid-cols-12 gap-8 p-5  px-4 md:px-16 lg:px-8 xl:px-44  ">
                    {/* Right Side */}
                    <div className="order-1 lg:order-2 lg:col-span-12 flex flex-col space-y-10 md:space-y-8 rounded-2xl  md:p-10">
                        {/* First Section on Right */}
                        <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
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
                            <div className="flex flex-col">
                                <h1 className="text-3xl font-bold text-lime-700 p-2 sm:ml-10">
                                    {message}
                                </h1>
                                <p className="text-zinc-600 p-2 sm:ml-10">
                                    There are more practice questions left to
                                    go, unlock 600+ practice questions today.
                                </p>
                                <div className="flex items-center space-x-4 p-2 sm:ml-10">
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
                                <button className="bg-primary text-white px-6 py-2 rounded-full mt-4 w-full sm:w-auto sm:ml-10">
                                    Next up, Practice Test 2
                                </button>
                            </div>
                        </div>

                        {/* Second Section (Answer Results) */}
                        <section>
                            <h1 className="text-xl sm:text-2xl font-bold mt-12">
                                Answer Results
                            </h1>
                            {questionResults.map(
                                (question, currentQuestionIndex) => (
                                    <div
                                        key={question.question_id}
                                        className="order-2 lg:order-1 lg:col-span-8 flex flex-col space-y-4 border rounded-xl bg-white p-4 mt-2 mb-1"
                                    >
                                        <div className="flex justify-between items-center">
                                            <p className="text-zinc-400 text-sm">
                                                Question {question.index + 1} /{" "}
                                                {questionResults.length}
                                            </p>
                                        </div>
                                        <div>
                                            <h1 className="text-2xl font-bold">
                                                {question.question_text}
                                            </h1>
                                        </div>
                                        <div>
                                            <div className="mt-2 space-y-2">
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
                                                                key={answer.id}
                                                                className={`flex items-center space-x-2 text-sm px-6 py-2 rounded-xl flex-1 hover:bg-gray-200 ${
                                                                    isPass
                                                                        ? "border border-lime-700"
                                                                        : isFail
                                                                        ? "border border-red-500"
                                                                        : "border border-gray-100"
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
                                                                            isPass
                                                                                ? "green"
                                                                                : isFail
                                                                                ? "red"
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
                                            <div>
                                                <h1 className="text-lg sm:text-lg font-bold mb-4">
                                                    Explanation
                                                </h1>
                                                <p className="text-gray-600 text-sm bg-slate-50 p-2 rounded-lg">
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
            </AuthenticatedLayout>
        </>
    );
}
