import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCircleCheck,
    faFile,
    faCheck,
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from "@/Components/Sidebar";

export default function Dashboard({
    auth,
    chaptersWithTopics,
    chaptersWithTests,
}) {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard" />

            <div className="relative ">
                <Sidebar/>

                <section className="bg-slate-100">
                    <div className="container mx-auto">
                        <div className="text-left">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 py-5 ">
                                Study Guide
                            </h1>
                            <p className="text-base md:text-lg text-gray-400 mb-4">
                                Get ready for your Canadian Citizenship Test with guided lessons paired with chapter practice tests. By systematically covering each chapter with engaging lessons and quizzes, you'll be fully prepared and equipped with all the essential knowledge from Discover Canada.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14">
                            {chaptersWithTopics.map((chapter) => (
                                <div
                                    key={chapter.id}
                                    className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg border-2 border-gray-300 max-w-sm"
                                >
                                    <img
                                        src={chapter.image}
                                        alt={`Chapter ${chapter.id}`}
                                        className="max-w-sm h-48 object-cover rounded-t-2xl"
                                    />
                                    <button className="absolute top-2 right-2 bg-primary text-white py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm z-20">
                                        Continue
                                    </button>
                                    <div className="absolute top-2 right-2 z-20">
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="text-green-600 text-lg md:text-2xl"
                                        />
                                    </div>
                                    <div className="px-4 py-6 md:px-5 md:py-8">
                                        <h1 className="text-base md:text-lg font-bold">
                                            {chapter.name}
                                        </h1>
                                        <h2 className="text-gray-600 text-sm md:text-base font-semibold">
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
                                                <FontAwesomeIcon icon={faFile} />
                                                <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4">
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

                    <section className="container mx-auto mt-12 md:mt-16">
                        <div className="text-left mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                Simulation Tests
                            </h1>
                            <p className="text-base md:text-lg text-gray-400">
                                Our Simulation Tests employ an exclusive algorithm to offer you the most accurate simulation of the Canadian Citizenship test. Once you've finished the chapter lessons and quizzes, sharpen your readiness by acing the simulation exams below to ensure you're fully primed for the real exam.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 3 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg border-2 border-gray-300"
                                >
                                    <img
                                        src="images/chapp1.png"
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-48 object-cover rounded-t-2xl"
                                    />
                                    <div className="px-4 py-6 md:px-5 md:py-8">
                                        <h1 className="text-base md:text-lg font-bold text-left">
                                            Exam Simulator {index + 1}
                                        </h1>
                                        <p className="text-gray-500 text-sm mt-2">
                                            Our exam simulator draws questions from every chapter with our proprietary algorithm to provide you with the most accurate simulation of the test.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="container mx-auto mt-12 md:mt-16">
                        <div className="text-left mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                Study Guide
                            </h1>
                            <p className="text-base md:text-lg text-gray-400">
                                Get ready for your Canadian Citizenship Test with guided lessons paired with chapter practice tests. By systematically covering each chapter with engaging lessons and quizzes, you'll be fully prepared and equipped with all the essential knowledge from Discover Canada.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {chaptersWithTests.map((chapter) => (
                                <div
                                    key={chapter.id}
                                    className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg border-2 border-gray-300"
                                >
                                    <img
                                        src={chapter.image}
                                        alt={`Chapter ${chapter.id}`}
                                        className="w-full h-48 object-cover rounded-t-2xl"
                                    />
                                    <button className="absolute top-2 right-2 bg-primary text-white py-1 px-3 md:py-2 md:px-4 rounded-full text-xs md:text-sm z-20">
                                        Continue
                                    </button>
                                    <div className="absolute top-2 right-2 z-20">
                                        <FontAwesomeIcon
                                            icon={faCircleCheck}
                                            className="text-green-600 text-lg md:text-2xl"
                                        />
                                    </div>
                                    <div className="px-4 py-6 md:px-5 md:py-8">
                                        <h1 className="text-base md:text-lg font-bold">
                                            {chapter.name}
                                        </h1>
                                        <h2 className="text-gray-600 text-sm md:text-base font-semibold">
                                            {chapter.title}
                                        </h2>
                                        <p className="text-gray-500 text-sm mt-2">
                                            {chapter.description}
                                        </p>
                                        {chapter.tests.map((test) => (
                                            <div
                                                className="flex justify-between items-start mt-4"
                                                key={test.id}
                                            >
                                                <FontAwesomeIcon icon={faFile} />
                                                <p className="text-left text-gray-800 text-sm flex-1 mx-2 md:mx-4">
                                                    {test.name}
                                                </p>
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className={
                                                        test.is_completed_by_user
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
                    </section>

                    <section className="container mx-auto mt-12 md:mt-16">
                        <div className="text-left mb-8">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
                                Tools & Resources
                            </h1>
                            <p className="text-base md:text-lg text-gray-400">
                                See the big picture by scrolling through our extensive timeline of Canada’s history, Important People, Interactive Maps and much more. Our preparation tools have helped thousands pass their Canadian Citizenship Test.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Array.from({ length: 7 }).map((_, index) => (
                                <div
                                    key={index}
                                    className="relative bg-white rounded-2xl shadow-md transform hover:-translate-y-1 transition duration-500 ease-out hover:shadow-lg border-2 border-gray-300"
                                >
                                    <img
                                        src="images/goldpng.png"
                                        alt={`Image ${index + 1}`}
                                        className="w-full h-48 object-cover rounded-t-2xl"
                                    />
                                    <div className="px-4 py-6 md:px-5 md:py-8">
                                        <h1 className="text-base md:text-lg font-bold text-left">
                                            Exam Simulator {index + 1}
                                        </h1>
                                        <p className="text-gray-500 text-sm mt-2">
                                            See how likely are you to pass the actual test based on your current study plan and completed goals.
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                </section>
            </div>
        </AuthenticatedLayout>
    );
}
