import React from "react";
import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPenToSquare,
    faQuestion,
    faCircleCheck,
    faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";

import GuestLayout from "@/Layouts/GuestLayout";
import HomeChapterCard from "@/Components/HomeChapterCard";

export default function About({}) {
    return (
        <>
            <GuestLayout>
                <Head>
                    <title>About Us - CitizenTestPrep</title>
                    <meta
                        name="description"
                        content="CitizenTestPrep provides essential resources and expert guidance to help you succeed in your Canadian citizenship test."
                    />
                </Head>

                <div className="container mx-auto p-4 md:p-10">
                    {/* Section 1 */}
                    <div className="text-center mb-10">
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-10">
                            About CitizenTestPrep
                        </h1>
                        <p className="text-sm md:text-base text-left text-gray-400 md:px-20 lg:px-40">
                            Welcome to CitizenTestPrep, your premier resource
                            for Canadian Citizenship Test preparation. We are
                            dedicated to providing comprehensive, up-to-date,
                            and user-friendly study materials to help you pass
                            the Canadian Citizenship Test with confidence. Our
                            platform offers a variety of practice tests, study
                            guides, and other resources designed to ensure you
                            have all the knowledge and skills needed to achieve
                            success.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="text-left mb-10 md:px-20 lg:px-40">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                            Our Mission and Goals
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            At CitizenTestPrep, our mission is to empower
                            aspiring Canadian citizens by providing them with
                            the highest quality test preparation tools. Our goal
                            is to make the path to citizenship smoother and more
                            accessible for everyone. We are committed to helping
                            you understand the key aspects of Canadian history,
                            values, institutions, and symbols, ensuring you are
                            well-prepared for the test and your future as a
                            Canadian citizen.
                        </p>
                    </div>

                    <div className="text-left mb-10 md:px-20 lg:px-40">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                            Our Tests
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            Our tests are meticulously crafted to mirror the
                            structure and content of the actual Canadian
                            Citizenship Test. We offer a wide range of practice
                            tests that cover all sections, including Canadian
                            history, government, geography, rights and
                            responsibilities, and more. Each test is designed to
                            challenge you and enhance your understanding of the
                            material, helping you identify areas where you need
                            further study. With our tests, you can practice at
                            your own pace and track your progress over time.
                        </p>
                    </div>

                    <div className="text-left mb-10 md:px-20 lg:px-40">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                            Our Quality Control and Updates
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            Quality and accuracy are at the heart of what we do.
                            Our team of experts continually reviews and updates
                            our materials to reflect the most current
                            information and any changes to the Canadian
                            Citizenship Test. We rely on trusted sources and
                            official guidelines to ensure that our content is
                            both reliable and relevant. Regular updates mean you
                            can always trust that you are studying the most
                            up-to-date information available.
                        </p>
                    </div>

                    <div className="text-left mb-10 md:px-20 lg:px-40">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                            Our Team
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            The CitizenTestPrep team is composed of experienced
                            individuals who are passionate about helping people
                            achieve their goal of becoming Canadian citizens.
                            Our team members bring a wealth of knowledge and a
                            dedication to education, ensuring that our study
                            materials are both accurate and effective. We work
                            collaboratively to create resources that are clear,
                            engaging, and aligned with the official test
                            requirements.
                        </p>
                    </div>

                    {/* Section with H2, P tags and 3-column images */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-20 lg:px-40">
                        <div className="relative">
                            <img
                                src="/images/2test.jpeg"
                                alt="Placeholder 1"
                                className="w-full h-auto rounded-2xl"
                            />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                                <p className="font-bold">Mark Simon</p>
                                <p>CEO</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/1test.jpeg"
                                alt="Placeholder 2"
                                className="w-full h-auto rounded-2xl"
                            />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                                <p className="font-bold">John Hampton</p>
                                <p>Sales</p>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/images/3test.jpeg"
                                alt="Placeholder 3"
                                className="w-full h-auto rounded-2xl"
                            />
                            <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-2">
                                <p className="font-bold">Jennifer L</p>
                                <p>Marketing</p>
                            </div>
                        </div>
                    </div>

                    <div className="text-left mb-10 md:px-20 lg:px-40 mt-8">
                        <h2 className="text-lg md:text-xl font-bold mb-4">
                            Our Results
                        </h2>
                        <p className="text-sm md:text-base text-gray-400 mb-4">
                            We are proud of the success stories from our users
                            who have achieved their dream of Canadian
                            citizenship. Our users consistently report high
                            satisfaction rates and successful test outcomes. By
                            providing comprehensive and accessible test
                            preparation materials, we have helped thousands of
                            individuals pass the Canadian Citizenship Test. We
                            believe in the potential of every learner and are
                            committed to supporting your journey to success.
                        </p>
                    </div>

                    {/* Call to Action Section */}
                    <section className="bg-slate-50 py-8 md:py-16 px-4 md:px-8">
                        <div className="container mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-lg p-4 md:p-8">
                            <div className="w-full md:w-1/2 bg-white text-black p-4 md:p-8">
                                <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold">
                                    Get all the essential tools to ensure you
                                    pass your test.
                                </h2>
                            </div>

                            <div className="w-full md:w-1/2 md:p-8 flex flex-col justify-center items-center">
                                <div className="w-full flex justify-center mt-4 sm:mt-6 lg:mt-8 ">
                                    <button className="bg-primary shadow-lg text-white w-full sm:w-auto px-4 sm:px-6 py-2 sm:py-3 rounded-full transform hover:-translate-y-1 transition duration-500 ease-out">
                                        Unlock all questions
                                    </button>
                                </div>
                                <p className="text-xs sm:text-sm leading-5 sm:leading-6 tracking-tight text-center text-gray-500 mt-2 sm:mt-4">
                                    or pass the first time guaranteed
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </GuestLayout>
        </>
    );
}
