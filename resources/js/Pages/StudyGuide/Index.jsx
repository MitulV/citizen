import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, usePage } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faFile,
    faCheck,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { Alert } from "flowbite-react";

export default function Index({ auth, chapters }) {
    const { flash } = usePage().props;
    const [message, setMessage] = useState(flash.message);

    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head>
                    <title>
                        Study Guide - Canadian Citizenship Test -
                        CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Access our Study Guide for the Canadian Citizenship Test to enhance your preparation and confidence!"
                    />
                </Head>

                <div className="container mx-auto relative min-h-screen md:flex bg-slate-100">
                    <section className="py-8 px-4 sm:mx-2 md:py-12 md:px-8 lg:py-16 lg:px-10 lg:mx-2 xl:mx-8 xl:px-2">
                        <div className="text-left mb-8">
                            {message && (
                                <Alert color="success">{message}</Alert>
                            )}
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold mb-4 text-gray-900 py-5">
                                Study Guide
                            </h1>
                            <p className="text-base sm:text-lg md:text-xl lg:text-lg text-gray-600 mb-4">
                                Get ready for your Canadian Citizenship Test
                                with guided lessons paired with chapter practice
                                tests. By systematically covering each chapter
                                with engaging lessons and quizzes, you'll be
                                fully prepared and equipped with all the
                                essential knowledge from Discover Canada.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                            {chapters
                                .filter(
                                    (chapter) =>
                                        chapter.id !== 10 && chapter.id !== 11
                                )
                                .map((chapter) => (
                                    <div
                                        key={chapter.id}
                                        className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg"
                                    >
                                        <img
                                            src={chapter.image}
                                            alt={`Chapter ${chapter.id}`}
                                            className="w-full h-48 lg:h-64 object-cover rounded-t-2xl"
                                        />
                                        <div className="absolute top-2 right-2 z-20">
                                            {chapter.allTopicsCompleted ? (
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    className="text-green-600 text-lg md:text-2xl lg:text-3xl"
                                                />
                                            ) : (
                                                <button className="bg-primary text-white py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-5 rounded-full text-xs md:text-sm lg:text-sm">
                                                    Continue
                                                </button>
                                            )}
                                        </div>
                                        <div className="px-4 py-6 sm:px-4 sm:py-6 md:px-5 md:py-8 lg:px-6 lg:py-8">
                                            <h1 className="text-base sm:text-lg md:text-xl lg:text-lg font-bold">
                                                {chapter.name}
                                            </h1>
                                            <h2 className="text-gray-600 text-sm sm:text-sm md:text-base lg:text-base font-semibold mt-2">
                                                {chapter.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-sm mt-2">
                                                {chapter.description}
                                            </p>
                                            {chapter.topics.map((topic) => (
                                                <Link
                                                    replace
                                                    href={`/guide/${
                                                        chapter.id
                                                    }${
                                                        topic.id
                                                            ? `/${topic.id}`
                                                            : ""
                                                    }`}
                                                    key={topic.id}
                                                >
                                                    <div className="flex justify-between items-start border-b border-gray-200 pt-3 pb-2">
                                                        <FontAwesomeIcon
                                                            icon={faFile}
                                                        />
                                                        <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4 lg:mx-2">
                                                            {topic.name}
                                                        </p>
                                                        {(topic.status ===
                                                            "completed" ||
                                                            topic.status ===
                                                                "failed") && (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    topic.status ===
                                                                    "failed"
                                                                        ? faTimes
                                                                        : faCheck
                                                                }
                                                                className={
                                                                    topic.status ===
                                                                    "completed"
                                                                        ? "text-green-600"
                                                                        : topic.status ===
                                                                          "failed"
                                                                        ? "text-red-600"
                                                                        : "text-gray-400"
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 mt-8">
                            {chapters
                                .filter(
                                    (chapter) =>
                                        chapter.id == 10 || chapter.id == 11
                                )
                                .map((chapter) => (
                                    <div
                                        key={chapter.id}
                                        className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg"
                                    >
                                        <img
                                            src={chapter.image}
                                            alt={`Chapter ${chapter.id}`}
                                            className="w-full h-48 lg:h-64 object-cover rounded-t-2xl"
                                        />
                                        <div className="absolute top-2 right-2 z-20">
                                            {chapter.allTopicsCompleted ? (
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    className="text-green-600 text-lg md:text-2xl lg:text-3xl"
                                                />
                                            ) : (
                                                <button className="bg-primary text-white py-1 px-3 md:py-2 md:px-4 lg:py-2 lg:px-5 rounded-full text-xs md:text-sm lg:text-sm">
                                                    Continue
                                                </button>
                                            )}
                                        </div>

                                        <div className="px-4 py-6 sm:px-4 sm:py-6 md:px-5 md:py-8 lg:px-6 lg:py-8">
                                            <h1 className="text-base sm:text-lg md:text-xl lg:text-lg font-bold">
                                                {chapter.name}
                                            </h1>

                                            <h2 className="text-gray-600 text-sm sm:text-sm md:text-base lg:text-base font-semibold">
                                                {chapter.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm sm:text-sm md:text-base lg:text-sm mt-2">
                                                {chapter.description}
                                            </p>

                                            {chapter.topics.map((topic) => (
                                                <Link
                                                    replace
                                                    href={`/guide/${
                                                        chapter.id
                                                    }${
                                                        topic.id
                                                            ? `/${topic.id}`
                                                            : ""
                                                    }`}
                                                    key={topic.id}
                                                >
                                                    <div className="flex justify-between items-start border-b border-gray-200 pt-3 pb-2">
                                                        <FontAwesomeIcon
                                                            icon={faFile}
                                                        />
                                                        <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4 lg:mx-2">
                                                            {topic.name}
                                                        </p>
                                                        {(topic.status ===
                                                            "completed" ||
                                                            topic.status ===
                                                                "failed") && (
                                                            <FontAwesomeIcon
                                                                icon={
                                                                    topic.status ===
                                                                    "failed"
                                                                        ? faTimes
                                                                        : faCheck
                                                                }
                                                                className={
                                                                    topic.status ===
                                                                    "completed"
                                                                        ? "text-green-600"
                                                                        : topic.status ===
                                                                          "failed"
                                                                        ? "text-red-600"
                                                                        : "text-gray-400"
                                                                }
                                                            />
                                                        )}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </section>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
