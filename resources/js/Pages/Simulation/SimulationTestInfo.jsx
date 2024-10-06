import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function SimulationTestInfo({ auth }) {
    return (
        <>
            <AuthenticatedLayout user={auth.user}>
                <Head>
                    <title>
                        Simulation Tests - Canadian Citizenship Test -
                        CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Experience Simulation Tests for the Canadian Citizenship Test to mimic the actual testing environment!"
                    />
                </Head>
                <div className="bg-slate-100 min-h-screen">
                    {" "}
                    {/* Apply bg-slate-100 and ensure it covers the entire page height */}
                    <section className="py-4 md:py-8 px-4 sm:mx-10 md:mx-20 lg:mx-40 xl:mx-8 bg-slate-100">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-white shadow-sm p-8 ">
                            {/* Left Part: h1 Tag, p Tag, 2 Columns with Sentences, and Buttons */}
                            <div className="flex flex-col space-y-6">
                                <h1 className="text-2xl sm:text-3xl font-bold">
                                    Exam Simulator
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                Chapter Weakness Analysis
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                Topic Weakness Analysis
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                Instant Answer feedback
                                            </p>
                                        </div>
                                        <div className="md:hidden flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                The test is 45 minutes Long
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block flex-col space-y-4">
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                20 questions
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                The test is 45 minutes long
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-sm">
                                                75% passing score
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm bg-slate-50">
                                    Ensuring the accuracy and quality of our
                                    practice tests is paramount. Learn more
                                    about our rigorous standards in our{" "}
                                    <span className="text-primary underline underline-offset-1">
                                        Quality Assurance Guidelines.
                                    </span>
                                </p>
                                <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                    <Link
                                        href={route("simulation.test", 1)}
                                        method="post"
                                        as="button"
                                        className="bg-primary text-white px-8 py-2 rounded-full flex-1"
                                    >
                                        Start Now
                                    </Link>
                                </div>
                            </div>
                            {/* Right Part: Image */}
                            <div className="hidden md:flex justify-center items-center">
                                <img
                                    src="/images/person canada flag.png"
                                    alt="Placeholder"
                                    className="w-72 h-80 gap-0 rounded-tl-[24px] rounded-tr-none rounded-br-none rounded-bl-none"
                                />
                            </div>
                        </div>
                    </section>
                    <section className="py-4 md:py-8 px-4 md:px-20 bg-slate-100 ">
                        <div className="container mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-sm p-8">
                            {/* Left Side */}
                            <div className="w-full md:w-1/2 p-8">
                                <h1 className="text-2xl sm:text-2xl font-bold mb-4">
                                    About this test
                                </h1>
                                <h2 className="text-lg sm:text-sm text-gray-500 mb-2">
                                    <FontAwesomeIcon
                                        icon={faClock}
                                        className="mr-2"
                                    />
                                    30 minutes to complete
                                </h2>
                                <p className="text-base sm:text-sm mb-4 text-gray-600">
                                    Our exam simulator draws questions from
                                    every chapter of Discover Canada with our
                                    proprietary algorithm to provide you with
                                    the most accurate simulation of the
                                    Citizenship Test. This test also includes
                                    our AI-powered Weakness Analysis which
                                    allows you to quickly identify gaps in your
                                    knowledge of the chapter by viewing a
                                    detailed evaluation of detected weaknesses
                                    at the end of each attempt.
                                </p>
                            </div>

                            {/* Right Side */}
                            <div className="w-full md:w-1/2 p-8">
                                <h1 className="text-2xl sm:text-3xl font-bold mb-8">
                                    What to expect on the actual test
                                </h1>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* First row */}
                                    <div className="bg-slate-50">
                                        <h1 className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Questions
                                        </h1>
                                        <h2 className="text-lg sm:text-lg font-bold mb-2">
                                            20
                                        </h2>
                                    </div>
                                    <div className="bg-slate-50">
                                        <h1 className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Allowed to pass
                                        </h1>
                                        <h2 className="text-lg sm:text-lg font-bold mb-2">
                                            5 mistakes
                                        </h2>
                                    </div>
                                    {/* Second row */}
                                    <div className="bg-slate-50">
                                        <h1 className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Passing Score
                                        </h1>
                                        <h2 className="text-lg sm:text-lg font-bold mb-2">
                                            75%{" "}
                                        </h2>
                                    </div>
                                    <div className="bg-slate-50">
                                        <h1 className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Your Score:
                                        </h1>
                                        <h2 className="text-lg sm:text-lg font-bold mb-2">
                                            13%
                                        </h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
