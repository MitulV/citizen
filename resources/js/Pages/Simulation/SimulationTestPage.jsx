import React, { useState, useEffect } from "react";
import { Head, router } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faTimes,
    faClock,
    faRedo,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import Countdown from "react-countdown";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function SimulationTestPage({
    testId,
    question,
    nextQuestion,
    result,
    index,
    selectedQuestionId,
    selectedAnswerId,
    correctAnswerId,
    explanation,
    auth,
    collapsedFromBackend,
}) {
    const [collapsed, setCollapsed] = useState(collapsedFromBackend === "true");
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    const renderer = ({ minutes, seconds, completed }) => {
        if (completed) {
            const totalTimeTaken =
                30 * 60 * 1000 - (minutes * 60 * 1000 + seconds * 1000); // Calculate total time taken in milliseconds
            const totalTimeTakenInMinutes = Math.floor(
                totalTimeTaken / (60 * 1000)
            ); // Convert total time taken to minutes
            const totalTimeTakenInSeconds = Math.floor(
                (totalTimeTaken % (60 * 1000)) / 1000
            ); // Convert total time taken to seconds

            router.post(
                route("simulation.testResult"),
                {
                    questionResults,
                    totalTimeTaken: {
                        minutes: totalTimeTakenInMinutes,
                        seconds: totalTimeTakenInSeconds,
                    },
                },
                { preserveState: false, replace: true }
            );
            return <span>Time's up!</span>;
        } else {
            return (
                <span>
                    {minutes}:{seconds}
                </span>
            );
        }
    };

    const [initialTime, setInitialTime] = useState(Date.now());

    const [questionResults, setQuestionResults] = useState(
        Array.from({ length: 20 }, (_, index) => ({
            index,
            test_id: null,
            question_id: null,
            question_text: "",
            explanation: "",
            result: "none", //['none', 'pass', 'fail'][Math.floor(Math.random() * 3)], // Randomly assigning 'none', 'pass', or 'fail' for demonstration
            answer_text: [],
            selectedAnswerId: null,
            correctAnswerId: null,
            isOptionSelected: false,
        }))
    );

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    let currentQuestion = questionResults[currentQuestionIndex];

    useEffect(() => {
        if (question) {
            setQuestionResults((prevResults) => {
                const newResults = [...prevResults];
                newResults[0] = {
                    ...newResults[0],
                    test_id: question.test_id,
                    question_id: question.id,
                    question_text: question.text,
                    explanation: question.explanation || "",
                    correctAnswerId,
                    answer_text: question.answers.map((answer) => ({
                        id: answer.id,
                        text: answer.text,
                    })),
                };
                return newResults;
            });
        }
    }, [question]);

    const handleAnswerSelection = (questionId, answerId, testId, index) => {
        currentQuestion.isOptionSelected = true;
        router.post(
            `${testId}`,
            { questionId, answerId, testId, index },
            { preserveState: true, replace: true, preserveScroll: true }
        );
    };

    const handleNextQuestion = (nextQuestion) => {
        if (currentQuestionIndex >= 19) {
            return;
        }

        if (currentQuestion.selectedAnswerId == null) {
            return;
        }

        if (questionResults[currentQuestionIndex + 1].result == "none") {
            setQuestionResults((prevResults) => {
                const newResults = [...prevResults];
                newResults[currentQuestionIndex + 1] = {
                    ...newResults[currentQuestionIndex + 1],
                    test_id: nextQuestion.test_id,
                    question_id: nextQuestion.id,
                    question_text: nextQuestion.text,
                    explanation: nextQuestion.explanation || "",
                    answer_text: nextQuestion.answers.map((answer) => ({
                        id: answer.id,
                        text: answer.text,
                    })),
                };
                return newResults;
            });
        }
        currentQuestion = questionResults[currentQuestionIndex + 1];
        setCurrentQuestionIndex(currentQuestionIndex + 1);
    };

    const handlePreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            currentQuestion = questionResults[currentQuestionIndex - 1];
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    useEffect(() => {
        if (result !== undefined && index !== undefined) {
            setQuestionResults((prevResults) => {
                const newResults = [...prevResults];
                newResults[index].result = result;
                newResults[index].selectedAnswerId = selectedAnswerId;
                newResults[index].correctAnswerId = correctAnswerId;
                newResults[index].explanation = explanation;
                return newResults;
            });
        }
    }, [result, index]);

    const handleReset = () => {
        router.post(
            `simulation/test/${testId}`,
            {},
            { preserveState: false, replace: true }
        );
    };

    const handleSubmit = () => {
        const now = Date.now();
        const totalTimeTaken = now - initialTime;
        const totalTimeTakenInMinutes = Math.floor(
            totalTimeTaken / (60 * 1000)
        );
        const totalTimeTakenInSeconds = Math.floor(
            (totalTimeTaken % (60 * 1000)) / 1000
        );

        router.post(
            route("simulation.testResult"),
            {
                questionResults,
                timeTaken: {
                    minutes: totalTimeTakenInMinutes,
                    seconds: totalTimeTakenInSeconds,
                },
                testId,
            },
            { preserveState: false, replace: true }
        );
    };

    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
            >
                <Head title="Premium" />
                <section className="container mx-auto min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-8 p-5   px-2 md:px-16 lg:px-8 xl:px-36">
                    {/* Left Side (spans 8 columns on large screens) */}
                    <div className="order-1 lg:order-1 lg:col-span-8 flex flex-col space-y-4 border rounded-xl bg-white p-5">
                        <div className="flex justify-between items-center">
                            <p className="text-lg sm:text-sm text-gray-400">
                                Question {currentQuestionIndex + 1} / 20
                            </p>
                            <h2 className="text-lg sm:text-sm text-gray-400">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="mr-2"
                                />
                                <Countdown
                                    date={initialTime + 30 * 60 * 1000}
                                    renderer={renderer}
                                />
                            </h2>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">
                                {currentQuestion.question_text}
                            </h1>
                        </div>
                        <div>
                            <div className="mt-2 space-y-2">
                                {currentQuestion.answer_text.map(
                                    (answer, answerIndex) => {
                                        const isSelected =
                                            answer.id ===
                                            currentQuestion.selectedAnswerId;
                                        const isPass =
                                            isSelected &&
                                            currentQuestion.result === "pass";
                                        const isFail =
                                            isSelected &&
                                            currentQuestion.result === "fail";
                                        const isDisabled =
                                            questionResults[
                                                currentQuestionIndex
                                            ].isOptionSelected;

                                        return (
                                            <label
                                                key={answer.id}
                                                className={`flex items-center space-x-2 text-sm px-6 py-2 rounded-lg flex-1 hover:bg-gray-200 ${
                                                    isPass
                                                        ? "border border-gray-700"
                                                        : isFail
                                                        ? "border border-gray-500"
                                                        : "border border-gray-100"
                                                }`}
                                                onClick={() => {
                                                    if (!isDisabled) {
                                                        handleAnswerSelection(
                                                            currentQuestion.question_id,
                                                            answer.id,
                                                            currentQuestion.test_id,
                                                            currentQuestion.index
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
                                                        disabled={isDisabled}
                                                    />
                                                    <div
                                                        className={`w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center p-2 bg-${
                                                            isPass
                                                                ? "gray"
                                                                : isFail
                                                                ? "gray"
                                                                : ""
                                                        }-500`}
                                                    >
                                                        {isPass ? (
                                                            <FontAwesomeIcon
                                                                icon={faCheck}
                                                                className="text-white text-xs"
                                                            />
                                                        ) : isFail ? (
                                                            <FontAwesomeIcon
                                                                icon={faTimes}
                                                                className="text-white text-xs"
                                                            />
                                                        ) : null}
                                                    </div>
                                                </div>
                                                <span className="text-base">
                                                    {answer.text}
                                                </span>
                                            </label>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
                            <button
                                onClick={() =>
                                    handlePreviousQuestion(nextQuestion)
                                }
                                className="bg-primary text-white px-8 py-2 rounded-full flex-1"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => {
                                    if (currentQuestionIndex >= 19) {
                                        handleSubmit();
                                    } else {
                                        handleNextQuestion(nextQuestion);
                                    }
                                }}
                                className="bg-primary text-white px-8 py-2 rounded-full flex-1"
                            >
                                {currentQuestionIndex >= 19 ? "Submit" : "Next"}
                            </button>
                        </div>
                        {false && currentQuestion.explanation && (
                            <div>
                                <h1 className="text-lg sm:text-lg font-bold mb-4">
                                    Explanation
                                </h1>
                                <p className="text-gray-600 text-sm bg-slate-50 p-2 rounded-lg">
                                    {currentQuestion.explanation}
                                </p>
                            </div>
                        )}
                    </div>

                    {/* Right Side (spans 4 columns on large screens) */}
                    <div className="order-2 md:h-80 lg:order-2 lg:col-span-4 flex flex-col space-y-4 border rounded-xl bg-white p-10">
                        <p className="hidden sm:flex text-xl text-gray-800 mb-4">
                            Your Progress
                        </p>

                        {/* Circles for Small Screens */}
                        <div className="flex space-x-1 mb-4 sm:hidden">
                            {questionResults.map((result) => (
                                <div
                                    key={result.index}
                                    className={`w-8 h-2 text-white rounded-full ${
                                        result.result === "pass"
                                            ? "bg-gray-500"
                                            : result.result === "fail"
                                            ? "bg-gray-500"
                                            : "bg-gray-200"
                                    }`}
                                />
                            ))}
                        </div>

                        {/* Circles for Larger Screens */}
                        <div className="hidden sm:grid grid-cols-5 gap-2 mb-4">
                            {questionResults.map((result) => (
                                <div
                                    key={result.index}
                                    className={`w-10 h-10 flex text-white items-center justify-center rounded-full ${
                                        result.result === "pass"
                                            ? "bg-gray-500"
                                            : result.result === "fail"
                                            ? "bg-gray-500"
                                            : "bg-gray-200"
                                    }`}
                                >
                                    {result.index + 1}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Buttons outside the main right div */}
                </section>
            </AuthenticatedLayout>
        </>
    );
}
