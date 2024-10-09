import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faFile,
    faCheck,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";

export default function Index({ auth, chapters }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head>
                    <title>
                        Flashcards - Canadian Citizenship Test - CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Use Flashcards for the Canadian Citizenship Test for quick and effective study of key concepts!"
                    />
                </Head>
                <div className="relative min-h-screen md:flex bg-slate-100">
                    <section className="py-8 px-4 sm:mx-2 md:py-12 md:px-8 lg:py-16 lg:px-10 lg:mx-20 xl:mx-8 xl:px-4">
                        <div className="text-left mb-8">
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
                                Flashcards
                            </h1>
                            <p className="text-sm md:text-base lg:text-base text-gray-600">
                                Take a step beyond the comfort of
                                multiple-choice questions and venture into new
                                learning territories with Flashcards. Flashcards
                                promote active recall, a powerful learning
                                technique that strengthens your memory.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                            className="w-full h-48 object-cover rounded-t-2xl"
                                        />
                                        <div className="absolute top-2 right-2 z-20">
                                            {chapter.allFlashcardsCompleted ? (
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    className="text-green-600 text-lg md:text-2xl lg:text-lg"
                                                />
                                            ) : (
                                                <button className="bg-primary text-white py-1 px-3 md:py-2 md:px-4 lg:py-1 lg:px-3 rounded-full text-xs md:text-sm lg:text-xs">
                                                    Continue
                                                </button>
                                            )}
                                        </div>
                                        <div className="px-4 py-6 md:px-5 md:py-8 lg:px-4 lg:py-6">
                                            <h1 className="text-base md:text-lg lg:text-base font-bold">
                                                {chapter.name}
                                            </h1>
                                            <h2 className="text-gray-600 text-sm md:text-base lg:text-sm font-semibold mt-2">
                                                {chapter.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm mt-2">
                                                {chapter.description}
                                            </p>
                                            <Link
                                                replace
                                                href={`/flashcards/${
                                                    chapter.id
                                                }${
                                                    chapter.first_flashcard_id
                                                        ? `/${chapter.first_flashcard_id}`
                                                        : ""
                                                }`}
                                                key={chapter.first_flashcard_id}
                                            >
                                                <div className="flex justify-between items-start border-b border-gray-200 pt-3 pb-2">
                                                    <FontAwesomeIcon
                                                        icon={faFile}
                                                    />
                                                    <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4 lg:mx-2">
                                                        {`Flashcard`}
                                                    </p>
                                                    {chapter.allFlashcardsCompleted && (
                                                        <FontAwesomeIcon
                                                            icon={
                                                                chapter.allFlashcardsCompleted
                                                                    ? faCheck
                                                                    : ""
                                                            }
                                                            className={
                                                                chapter.allFlashcardsCompleted
                                                                    ? "text-green-600"
                                                                    : ""
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </Link>
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
                                            className="w-full h-48 object-cover rounded-t-2xl"
                                        />
                                        <div className="absolute top-2 right-2 z-20">
                                            {chapter.allFlashcardsCompleted ? (
                                                <FontAwesomeIcon
                                                    icon={faCircleCheck}
                                                    className="text-green-600 text-lg md:text-2xl lg:text-lg"
                                                />
                                            ) : (
                                                <button className="bg-primary text-white py-1 px-3 md:py-2 md:px-4 lg:py-1 lg:px-3 rounded-full text-xs md:text-sm lg:text-xs">
                                                    Continue
                                                </button>
                                            )}
                                        </div>
                                        <div className="px-4 py-6 md:px-5 md:py-8 lg:px-4 lg:py-6">
                                            <h1 className="text-base md:text-lg lg:text-base font-bold">
                                                {chapter.name}
                                            </h1>
                                            <h2 className="text-gray-600 text-sm md:text-base lg:text-sm font-semibold mt-2">
                                                {chapter.title}
                                            </h2>
                                            <p className="text-gray-500 text-sm mt-2">
                                                {chapter.description}
                                            </p>
                                            <Link
                                                replace
                                                href={`/flashcards/${
                                                    chapter.id
                                                }${
                                                    chapter.first_flashcard_id
                                                        ? `/${chapter.first_flashcard_id}`
                                                        : ""
                                                }`}
                                                key={chapter.first_flashcard_id}
                                            >
                                                <div className="flex justify-between items-start border-b border-gray-200 pt-3 pb-2">
                                                    <FontAwesomeIcon
                                                        icon={faFile}
                                                    />
                                                    <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4 lg:mx-2">
                                                        {`Flashcard`}
                                                    </p>
                                                    {chapter.allFlashcardsCompleted && (
                                                        <FontAwesomeIcon
                                                            icon={
                                                                chapter.allFlashcardsCompleted
                                                                    ? faCheck
                                                                    : ""
                                                            }
                                                            className={
                                                                chapter.allFlashcardsCompleted
                                                                    ? "text-green-600"
                                                                    : ""
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            </Link>
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
