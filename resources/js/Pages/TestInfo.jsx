import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import GuestLayout from "@/Layouts/GuestLayout";

export default function TestInfo({ chapterId, auth }) {
    return (
        <>
            <GuestLayout user={auth.user}>
                <Head>
                    <title>
                        FREE Canadian Citizenship Test Practice 2024 -
                        CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Start with FREE Canadian Citizenship Test Practice for 2024 and succeed without any cost!"
                    />
                </Head>

                <section className="container mx-auto py-4  bg-slate-50  md:px-16 lg:px-8 xl:px-44">
                    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-white shadow-sm p-8 ">
                        {/* Left Part: h1 Tag, p Tag, 2 Columns with Sentences, and Buttons */}
                        <div className="flex flex-col space-y-6 ">
                            <h1 className="text-2xl sm:text-3xl font-bold">
                                Free Canadian Citizenship Test Practice
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="flex flex-col space-y-4">
                                    <div className="flex items-start">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-gray-500  text-base mr-3"
                                        />
                                        <p className="text-gray-600 text-base">
                                            Perfect for first-timers
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-gray-500  text-base mr-3"
                                        />
                                        <p className="text-gray-600  text-base">
                                            Based on the official booklet
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-gray-500  mr-3"
                                        />
                                        <p className="text-gray-600  text-base">
                                            Triple-checked for accuracy
                                        </p>
                                    </div>
                                </div>
                                <div className="hidden md:block flex-col space-y-4 ">
                                    <div className="flex items-start">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-gray-500  text-base mr-3"
                                        />
                                        <p className="text-gray-600  text-base">
                                            15 questions
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-gray-500  text-base mr-3"
                                        />
                                        <p className="text-gray-600  text-base">
                                            75% passing score
                                        </p>
                                    </div>
                                    <div className="flex items-start">
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="text-gray-500  text-base mr-3"
                                        />
                                        <p className="text-gray-600  text-base">
                                            30 minutes long
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600  text-base bg-slate-50">
                                We maintain high standards to ensure that our
                                practice tests are both accurate and reliable,
                                following strict quality assurance guidelines.{" "}
                            </p>
                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                <Link
                                    href={route("testPage", {})}
                                    method="post"
                                    as="button"
                                    className="bg-primary text-white px-8 py-2 rounded-full flex-1"
                                >
                                    Start Now
                                </Link>

                                <Link
                                    href={route("premiumPage", {})}
                                    as="button"
                                    className="bg-white text-balck border border-primary px-6 py-2 rounded-full flex-1"
                                >
                                    Unlock All Chapters
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
                <section className="container mx-auto bg-slate-50 md:px-16 lg:px-8 xl:px-44 pb-4">
                    <div className="container mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-sm ">
                        {/* Left Side */}
                        <div className="w-full md:w-1/2 p-8">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-8">
                                About this test
                            </h2>
                            {/* <p className="text-lg sm:text-sm text-gray-500 mb-2">
                                <FontAwesomeIcon
                                    icon={faClock}
                                    className="mr-2"
                                />
                                30 minutes to complete
                            </p> */}
                            <p className="text-base  mb-4 text-gray-600">
                                This free Canadian citizenship practice test
                                helps you check your knowledge about Canada. It
                                has 15 multiple-choice questions that you should
                                complete in 30 minutes. After finishing, you’ll
                                find out if you passed or failed, along with
                                feedback to show where you can improve. The
                                questions come from the official Discover Canada
                                Handbook, similar to the real citizenship test,
                                which has 20 questions that must be answered
                                correctly in 45 minutes. Good luck with your
                                practice and the actual test!
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
                                        15
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-4">
                                    <p className="text-sm text-gray-600 sm:text-lg  mb-2">
                                        Allowed to pass
                                    </p>
                                    <p className="text-lg sm:text-lg font-bold mb-2">
                                        3 mistakes
                                    </p>
                                </div>
                                {/* Second row */}
                                <div className="bg-slate-50 p-4">
                                    <p className="text-sm text-gray-600 sm:text-lg  mb-2">
                                        Passing Score
                                    </p>
                                    <p className="text-lg sm:text-lg font-bold mb-2">
                                        75%{" "}
                                    </p>
                                </div>
                                <div className="bg-slate-50 p-4">
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
            </GuestLayout>
        </>
    );
}
