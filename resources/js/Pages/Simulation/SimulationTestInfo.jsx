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
                    <title>Free Canadian Citizenship Test Practice</title>
                    <meta
                        name="description"
                        content="Experience Simulation Tests for the Canadian Citizenship Test to mimic the actual testing environment!"
                    />
                </Head>
                <div className="bg-slate-100 min-h-screen">
                    {" "}
                    {/* Apply bg-slate-100 and ensure it covers the entire page height */}
                    <section className="conianer mx-auto py-4 md:py-8 px-4 md:px-40 bg-slate-50 ">
                        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 rounded-2xl overflow-hidden bg-white shadow-sm p-8">
                            {/* Left Part: h1 Tag, p Tag, 2 Columns with Sentences, and Buttons */}
                            <div className="flex flex-col space-y-6">
                                <h1 className="text-2xl sm:text-3xl font-bold">
                                    Free Canadian Citizenship Test Practice
                                </h1>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                Perfect for first-timers
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                Based on the official booklet
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                Triple-checked for accuracy
                                            </p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block flex-col space-y-4">
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                20 questions
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                75% passing score
                                            </p>
                                        </div>
                                        <div className="flex items-start">
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                30 minutes long
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-base bg-slate-50">
                                    Our simulation test is designed to provide a
                                    realistic experience. Please note that it is
                                    not an official test and should only be used
                                    for informational purposes. The actual exam
                                    may differ, and we cannot guarantee that any
                                    specific questions from this simulation will
                                    appear on the real test.
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
                    <section className="conianer mx-auto py-4 md:py-8 px-4 md:px-40 bg-slate-50 ">
                        <div className="container mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-sm p-8">
                            {/* Left Side */}
                            <div className="w-full md:w-1/2 p-8">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                                    About this test
                                </h2>

                                <p className="text-base  mb-4 text-gray-600">
                                    This test is made to be similar to the
                                    official Canadian Citizenship Test, though
                                    the layout is different from the one on the
                                    Immigration, Refugees, and Citizenship
                                    Canada (IRCC) website. The goal is to give
                                    users a good idea of what the real test will
                                    be like. To make it more realistic, features
                                    like live answers and explanations are
                                    turned off, so users can take the test on
                                    their own, just like they would in the
                                    actual exam. This helps users feel more
                                    confident and ready for the official test.
                                </p>
                            </div>

                            {/* Right Side */}
                            <div className="w-full md:w-1/2 p-8">
                                <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                                    What to expect on the test
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* First row */}
                                    <div className="bg-slate-50 p-4 ">
                                        <p className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Questions
                                        </p>
                                        <p className="text-lg sm:text-lg font-bold mb-2">
                                            20
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-4 ">
                                        <p className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Allowed to pass
                                        </p>
                                        <p className="text-lg sm:text-lg font-bold mb-2">
                                            5 mistakes
                                        </p>
                                    </div>
                                    {/* Second row */}
                                    <div className="bg-slate-50 p-4 ">
                                        <p className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Passing Score
                                        </p>
                                        <p className="text-lg sm:text-lg font-bold mb-2">
                                            75%{" "}
                                        </p>
                                    </div>
                                    <div className="bg-slate-50 p-4 ">
                                        <p className="text-sm text-gray-600 sm:text-lg  mb-2">
                                            Time:
                                        </p>
                                        <p className="text-lg sm:text-lg font-bold mb-2">
                                            30 minutes to complete
                                        </p>
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
