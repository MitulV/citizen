import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faFile,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function Index({ auth, chapters }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head title="Study Guide" />

                <div className="relative min-h-screen md:flex">
                    <section className="bg-slate-100 py-8 px-4 md:py-12 md:px-8 lg:px-8">
                        <div className="container mx-auto">
                            <div className="text-left mb-8">
                                <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900 py-5">
                                    Study Guide
                                </h1>
                                <p className="text-base md:text-base lg:text-base text-gray-600 mb-4">
                                    Get ready for your Canadian Citizenship Test
                                    with guided lessons paired with chapter
                                    practice tests. By systematically covering
                                    each chapter with engaging lessons and
                                    quizzes, you'll be fully prepared and
                                    equipped with all the essential knowledge
                                    from Discover Canada.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {chapters
                                    .filter(
                                        (chapter) =>
                                            chapter.id !== 10 &&
                                            chapter.id !== 11
                                    )
                                    .map((chapter) => (
                                        <div
                                            key={chapter.id}
                                            className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg"
                                        >
                                            <img
                                                src={chapter.image}
                                                alt={`Chapter ${chapter.id}`}
                                                className="hidden sm:block w-full h-48 object-cover rounded-t-2xl"
                                            />
                                            <button className="absolute top-2 right-2 bg-primary text-white py-1 px-3 md:py-2 md:px-4 lg:py-1 lg:px-3 rounded-full text-xs md:text-sm lg:text-xs z-20">
                                                Continue
                                            </button>
                                            <div className="absolute top-2 right-2 z-20">
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    className="text-green-600 text-lg md:text-2xl lg:text-lg"
                                                />
                                            </div>
                                            <div className="px-4 py-6 md:px-5 md:py-8 lg:px-4 lg:py-6">
                                                <h1 className="text-base md:text-lg lg:text-base font-bold">
                                                    {chapter.name}
                                                </h1>
                                                <h2 className="text-gray-600 text-sm md:text-base lg:text-sm font-semibold">
                                                    {chapter.title}
                                                </h2>
                                                <p className="text-gray-500 text-sm mt-2">
                                                    {chapter.description}
                                                </p>
                                                {chapter.topics.map((topic) => (
                                                    <div
                                                        className="flex justify-between items-start mt-4"
                                                        key={topic.id}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faFile}
                                                        />
                                                        <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4 lg:mx-2">
                                                            {topic.name}
                                                        </p>
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className={
                                                                topic.is_completed_by_user
                                                                    ? "text-green-600"
                                                                    : "text-gray-400"
                                                            }
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-8">
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
                                                className="hidden sm:block w-full h-48 object-cover rounded-t-2xl"
                                            />
                                            <button className="absolute top-2 right-2 bg-primary text-white py-1 px-3 md:py-2 md:px-4 lg:py-1 lg:px-3 rounded-full text-xs md:text-sm lg:text-xs z-20">
                                                Continue
                                            </button>
                                            <div className="absolute top-2 right-2 z-20">
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    className="text-green-600 text-lg md:text-2xl lg:text-lg"
                                                />
                                            </div>
                                            <div className="px-4 py-6 md:px-5 md:py-8 lg:px-4 lg:py-6">
                                                <h1 className="text-base md:text-lg lg:text-base font-bold">
                                                    {chapter.name}
                                                </h1>
                                                <h2 className="text-gray-600 text-sm md:text-base lg:text-sm font-semibold">
                                                    {chapter.title}
                                                </h2>
                                                <p className="text-gray-500 text-sm mt-2">
                                                    {chapter.description}
                                                </p>
                                                {chapter.topics.map((topic) => (
                                                    <div
                                                        className="flex justify-between items-start mt-4"
                                                        key={topic.id}
                                                    >
                                                        <FontAwesomeIcon
                                                            icon={faFile}
                                                        />
                                                        <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4 lg:mx-2">
                                                            {topic.name}
                                                        </p>
                                                        <FontAwesomeIcon
                                                            icon={faCheck}
                                                            className={
                                                                topic.is_completed_by_user
                                                                    ? "text-green-600"
                                                                    : "text-gray-400"
                                                            }
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </section>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
