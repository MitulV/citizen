import React from "react";
import { Head, Link, usePage } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faStar,
    faEnvelope,
    faPhone,
    faMessage,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import GuestLayout from "@/Layouts/GuestLayout";
// import { Accordion } from "flowbite-react";

import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import { Link as ScrollLink } from "react-scroll";

export default function Premium({ auth }) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };
    return (
        <>
            <GuestLayout user={auth.user}>
                <Head>
                    <title>
                        Pass Your Canadian Citizenship Test, Guaranteed -
                        CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Pass your Canadian Citizenship test the first time or get your money back, guaranteed by using CitizenTestPrep Premium!"
                    />
                </Head>
                <section className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-2 py-4  lg:px-8 xl:px-16 bg-slate-50">
                    {/* Left Section with Heading and Details */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 p-2">
                        <h1 className="text-3xl md:text-3xl lg:text-4xl  xl:text-5xl  px-2 font-extrabold text-center lg:text-left">
                            Pass Your Canadian Citizenship Test On The First
                            Try.{" "}
                            <span className="text-indigo-600">Guaranteed!</span>
                        </h1>
                        <p className="text-gray-700 text-lg md:text-xl lg:text-xl leading-relaxed p-2 px-3 text-left">
                            Your complete toolkit for success: Get fully
                            prepared with over 850+ practice questions,
                            chapter-wise study guide, test simulations, 450+
                            flashcards, cheat sheets, and more. Everything you
                            need to pass the test is all in one place!
                        </p>
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 pl-2">
                            <ScrollLink
                                to="pricing"
                                smooth={true}
                                duration={1000}
                                offset={-50}
                                className="bg-primary font-bold text-white px-10 py-4 rounded-full text-base lg:text-lg shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out cursor-pointer"
                            >
                                Get all exam-like questions
                            </ScrollLink>

                            <img
                                src="/images/pass guarantee.png"
                                alt="Pass Guarantee"
                                className="h-14 w-auto mt-8 "
                            />
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg lg:text-2xl  px-3 text-start">
                            Join over 18,300+ new citizens who have passed with
                            our help.
                        </p>
                        <ul className="space-y-2 text-gray-800 text-base sm:text-lg lg:text-xl px-3">
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 text-indigo-600"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                >
                                    <path
                                        d="M5.79508 10.8749L1.62508 6.70492L0.205078 8.11492L5.79508 13.7049L17.7951 1.70492L16.3851 0.294922L5.79508 10.8749Z"
                                        fill="#5459E9"
                                    />
                                </svg>
                                850+ exam-style questions
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 text-indigo-600"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.79508 10.8749L1.62508 6.70492L0.205078 8.11492L5.79508 13.7049L17.7951 1.70492L16.3851 0.294922L5.79508 10.8749Z"
                                        fill="#5459E9"
                                    />
                                </svg>
                                450+ flashcards
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 text-indigo-600"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.79508 10.8749L1.62508 6.70492L0.205078 8.11492L5.79508 13.7049L17.7951 1.70492L16.3851 0.294922L5.79508 10.8749Z"
                                        fill="#5459E9"
                                    />
                                </svg>
                                Advanced test simulations
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="mr-2 text-indigo-600"
                                    width="18"
                                    height="14"
                                    viewBox="0 0 18 14"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5.79508 10.8749L1.62508 6.70492L0.205078 8.11492L5.79508 13.7049L17.7951 1.70492L16.3851 0.294922L5.79508 10.8749Z"
                                        fill="#5459E9"
                                    />
                                </svg>
                                Pass Guarantee – it's on us!
                            </li>
                        </ul>
                    </div>

                    {/* Right Section with Image */}
                    <div className="lg:col-span-5 flex justify-center items-center p-2">
                        <img
                            src="/images/ea59b0c12c13b0daf792e11ef62864a7.png"
                            alt="Test Preparation"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-lg "
                        />
                    </div>

                    {/* Testimonials Section */}
                    <div className="lg:col-span-12 flex flex-col items-center space-y-8 p-4 px-6 mt-8">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-3 ">
                            Why Learners Love The Citizentestprep Premium
                        </h2>
                        <div className="text-gray-800 text-lg flex flex-col lg:flex-row items-center lg:space-x-2">
                            <p className="text-center text-lg lg:text-lg lg:text-left mb-4">
                                Our customers think we're{" "}
                                <span className="font-extrabold">
                                    outstanding!
                                </span>
                            </p>

                            <svg
                                className="flex items-center mb-4"
                                width="121"
                                height="24"
                                viewBox="0 0 121 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12.5 17.77L18.68 21.5L17.04 14.47L22.5 9.74L15.31 9.13L12.5 2.5L9.69 9.13L2.5 9.74L7.96 14.47L6.32 21.5L12.5 17.77Z"
                                    fill="#FFB900"
                                />
                                <path
                                    d="M36.5 17.77L42.68 21.5L41.04 14.47L46.5 9.74L39.31 9.13L36.5 2.5L33.69 9.13L26.5 9.74L31.96 14.47L30.32 21.5L36.5 17.77Z"
                                    fill="#FFB900"
                                />
                                <path
                                    d="M60.5 17.77L66.68 21.5L65.04 14.47L70.5 9.74L63.31 9.13L60.5 2.5L57.69 9.13L50.5 9.74L55.96 14.47L54.32 21.5L60.5 17.77Z"
                                    fill="#FFB900"
                                />
                                <path
                                    d="M84.5 17.77L90.68 21.5L89.04 14.47L94.5 9.74L87.31 9.13L84.5 2.5L81.69 9.13L74.5 9.74L79.96 14.47L78.32 21.5L84.5 17.77Z"
                                    fill="#FFB900"
                                />
                                <path
                                    d="M108.5 17.77L114.68 21.5L113.04 14.47L118.5 9.74L111.31 9.13L108.5 2.5L105.69 9.13L98.5 9.74L103.96 14.47L102.32 21.5L108.5 17.77Z"
                                    fill="#FFB900"
                                />
                            </svg>

                            <p className="text-center lg:text-left text-lg lg:text-lg mb-4">
                                With over 200+ reviews, we've earned a perfect 5
                                out of 5 rating.
                            </p>
                        </div>

                        {/* Responsive Testimonials */}

                        <section className="container mx-auto  mt-20  px-0 md:px-0 lg:px-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-1   xl:mx-8">
                                <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                    <div className="p-8 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 text-left">
                                                “Passed On My First Try“
                                            </h3>
                                            <p className="text-lg mb-2 text-gray-500 text-left ">
                                                This platform really helped me
                                                pass the Canadian Citizenship
                                                Test on my first try. The
                                                practice exams made all the
                                                difference. Highly recommend it!
                                                Jillian McAllister, British
                                                Columbia
                                            </p>
                                        </div>
                                        <div>
                                            {" "}
                                            <hr className="border-1 border-gray-200 my-2" />
                                        </div>

                                        <div className="flex items-left mt-2">
                                            <img
                                                src="/images/review 3.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-2"
                                            />
                                            <div>
                                                <p className="text-ellipsis text-sm font-bold text-gray-600">
                                                    Jillian McAllister
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    British Columbia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                    <div className="p-8 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 text-left">
                                                “Exactly What I Needed”
                                            </h3>
                                            <p className="text-lg mb-14 text-gray-500 text-left">
                                                If you want to prepare for the
                                                Canadian Citizenship test, this
                                                platform has everything you
                                                need, especially the
                                                chapter-wise practice tests.
                                                Marcus Tremblay, Nova Scotia
                                            </p>
                                        </div>
                                        <hr className="border-1 border-gray-200  mb-3" />

                                        <div className="flex items-left mb-2 mt-2">
                                            <img
                                                src="/images/review 2.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-2"
                                            />
                                            <div className="flex flex-col text-center sm:text-left">
                                                <p className="text-ellipsis text-sm font-bold text-gray-600">
                                                    Marcus Tremblay
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Nova Scotia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                    <div className="p-8 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-2 text-left">
                                                “Best Resource For The Test”
                                            </h3>
                                            <p className="text-lg mb-10 text-gray-500 text-left">
                                                After failing the test on my
                                                first attempt, I used
                                                CitizenTestPrep Premium, and it
                                                was the best resource to pass
                                                the Canadian Citizenship Test.
                                                Hitoshi Matsumoto, Saskatchewan
                                            </p>
                                        </div>
                                        <hr className="border-1 border-gray-200 my-2" />

                                        <div className="flex items-left mb-2">
                                            <img
                                                src="/images/review 1.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-2"
                                            />
                                            <div>
                                                <p className="text-ellipsis text-sm font-bold text-gray-600">
                                                    Hitoshi Matsumoto
                                                </p>
                                                <p className="text-sm text-gray-600">
                                                    Saskatchewan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className=" container mx-auto   lg:col-span-12 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 xl:px-28 py-10">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
                        A Fun And Easy Way To Prepare For Your Test!
                    </h2>
                    <p className="text-gray-600 font-inter text-start text-lg lg:text-lg">
                        We have everything you need to prepare for the Canadian
                        citizenship test. Our platform helps you learn about
                        Canadian values and principles while showing you real
                        test questions. Whether it's your first time or not, our
                        easy-to-use, mobile-friendly design lets you study at
                        your own pace. Join thousands of students who have
                        successfully passed their tests using our trusted study
                        tools!
                    </p>
                    <img
                        src="/images/mobile chapt.png"
                        alt="Your Photo"
                        className="w-full"
                    />
                    <p className="text-gray-600 font-inter text-center text-base lg:text-lg mt-10">
                        Get an effective pathway to success. Whether it's your
                        first time or not, you will be benefited. Our
                        user-friendly interface makes it easy to study at your
                        own pace. Join thousands of satisfied users who have
                        aced their citizenship tests with our proven study
                        resources.
                    </p>
                </section>
                <section className="container mx-auto relative flex flex-col items-center px-4 md:px-10 bg-white sm:block md:hidden lg:hidden xl:hidden">
                    {/* Image */}
                    <img
                        src="/images/pass guarantee.png"
                        alt="Pass Guarantee Logo"
                        className="w-60 h-28 md:w-96 md:h-40 lg:w-96 lg:h-40 xl:max-w-6xl xl:h-40"
                    />

                    {/* Main Heading */}
                    <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-black text-center leading-relaxed mt-10 lg:mx-32">
                        At CitizenTestPrep Premium, we’re confident you’ll
                        succeed with our high-quality study materials. If you
                        use our resources and don’t pass the Canadian
                        citizenship test, we’ll give you your money back. Our
                        guarantee shows how much we believe in our program. Get
                        ready for your test with CitizenTestPrep Premium and
                        join many others who have passed! For full details,
                        please see our refund policy{" "}
                        <a
                            className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                            target="_blank"
                            href="https://www.citizentestprep.ca/refund"
                        >
                            here
                        </a>
                        .
                    </p>

                    {/* Bottom Left Half Circle */}
                    <div
                        className="
        absolute bottom-0 left-0 
        sm:h-40 sm:w-20 
        md:h-60 md:w-30 
        lg:h-80 lg:w-40 
        xl:h-96 xl:w-48 
        bg-red-300 rounded-r-full z-20 overflow-hidden"
                    ></div>

                    {/* Top Right Half Circle */}
                    <div
                        className="
        absolute top-0 right-0 
        sm:h-40 sm:w-20 
        md:h-60 md:w-30 
        lg:h-80 lg:w-40 
        xl:h-96 xl:w-48 
        bg-amber-200 rounded-l-full z-10 overflow-hidden"
                    ></div>
                </section>

                <section className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 sm:p-2 bg-slate-50 mt-10">
                    {/* Left Section: Text Content */}
                    <div className="lg:col-span-6 flex flex-col space-y-6 p-5 ">
                        <p className="font-inter text-lg font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600">
                            How it works
                        </p>

                        <h2 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-extrabold text-center px-md:px-0 lg:px-0">
                            Passing the Canadian Citizenship Test Has Never Been
                            Easier
                        </h2>
                        <p className="text-gray-600 text-lg md:text-lg lg:text-lg xl:text-lg text-center md:text-left">
                            Take the Canadian citizenship test with clarity and
                            stress-free preparation, achieving your dream of
                            becoming Canadian with ease.
                        </p>

                        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {/* Step 1 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    Step 1
                                </p>
                                <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                                    Enjoyable Study Guide and Practice Tests
                                </h3>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Build your confidence with quick 20-question
                                    practice tests that feel just like the real
                                    exam.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    Step 2
                                </p>
                                <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                                    Personalized Learning
                                </h3>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Focus on what’s important. Skip the boring
                                    lectures and learn faster while remembering
                                    more.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    Step 3
                                </p>
                                <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                                    Real-Time Exam Simulator
                                </h3>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Our advanced exam simulator helps you
                                    practice in a setting that closely matches
                                    the actual test format.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    Step 4
                                </p>
                                <h3 className="text-lg md:text-xl lg:text-xl font-bold">
                                    Ace Your Exam! 🎉
                                </h3>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Feel ready and confident on exam day, and
                                    pass with flying colors!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Image */}
                    <div className="lg:col-span-6 flex justify-center items-center">
                        <div className="p-2 lg:p-4  rounded-xl">
                            <img
                                src="/images/result2.jpg"
                                alt="Sample"
                                className="rounded-xl"
                            />
                        </div>
                    </div>
                </section>
                <section
                    id="passguarantee"
                    className="hidden container mx-auto relative sm:flex flex-col items-center py-40 px-4 md:px-10 mt-10 "
                >
                    {/* Image */}
                    <img
                        src="/images/pass guarantee.png"
                        alt="Pass Guarantee Logo"
                        className="h-60"
                    />
                    {/*  <p className="text-xl sm:text-lg md:text-xl lg:text-5xl font-extrabold  text-center mt-8">
                        Pass the citizenship test or
                        <span className=" text-indigo-600 ">
                            <br />
                            get your money back
                        </span>{" "}
                    </p> */}

                    {/* Main Heading */}
                    <p className="text-lg sm:text-lg md:text-lg lg:text-lg xl:text-lg text-black text-center leading-relaxed mt-10 md:mx-10 lg:mx-44">
                        At CitizenTestPrep Premium, we’re confident you’ll
                        succeed with our high-quality study materials. If you
                        use our resources and don’t pass the Canadian
                        citizenship test, we’ll give you your money back. Our
                        guarantee shows how much we believe in our program. Get
                        ready for your test with CitizenTestPrep Premium and
                        join many others who have passed! For full details,
                        please see our refund policy{" "}
                        <a
                            className="text-blue-600 hover:text-blue-800 underline focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2"
                            target="_blank"
                            href="https://www.citizentestprep.ca/refund"
                        >
                            here
                        </a>
                        .
                    </p>

                    {/* Bottom Left Half Circle */}
                    <div
                        className="
        absolute bottom-0 left-0 
        sm:h-40 sm:w-20 
        md:h-60 md:w-30 
        lg:h-80 lg:w-40 
        xl:h-96 xl:w-48 
        bg-red-300 rounded-r-full z-20 overflow-hidden"
                    ></div>

                    {/* Top Right Half Circle */}
                    <div
                        className="
        absolute top-0 right-0 
        sm:h-40 sm:w-20 
        md:h-60 md:w-30 
        lg:h-80 lg:w-40 
        xl:h-96 xl:w-48 
        bg-amber-200 rounded-l-full z-10 overflow-hidden"
                    ></div>
                </section>

                <section className="container mx-auto px-2 py-8 bg-slate-50 xl:px-32">
                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl  font-bold mb-8 text-center mt-8">
                        Realistic Questions That Prepare You For The Actual
                        Test!
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-1 mx-4 sm:mx-10 lg:mx-1 xl:mx-8">
                        <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                            <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-left">
                                        “Identified My Weak Spots”
                                    </h3>
                                    <p className="text-sm mb-2 text-gray-500 text-left ">
                                        Their chapter-by-chapter practice tests
                                        helped me see my weak spots so I could
                                        work on them. The timeline recaps were
                                        super helpful too. I passed the test on
                                        my second try!
                                    </p>
                                </div>
                                <div> </div>

                                <div className="flex items-left mt-2">
                                    <img
                                        src="/images/1pass.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="text-ellipsis text-sm font-bold text-gray-600">
                                            Charlotte Morrison
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            British Columbia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                            <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-left">
                                        “Comprehensive Practice Questions”
                                    </h3>
                                    <p className="text-sm mb-14 text-gray-500 text-left">
                                        The practice questions covered
                                        everything on the test, and the
                                        explanations helped me understand the
                                        concepts better. The simulation tests
                                        felt just like the real exam, which was
                                        really helpful.
                                    </p>
                                </div>

                                <div className="flex items-left mb-2 mt-2">
                                    <img
                                        src="/images/p-2.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-2"
                                    />
                                    <div className="flex flex-col text-center sm:text-left">
                                        <p className="text-ellipsis text-sm font-bold text-gray-600">
                                            Jacob Thompson
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Manitoba
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                            <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-left">
                                        “Easy to Remember”
                                    </h3>
                                    <p className="text-sm mb-10 text-gray-500 text-left">
                                        I struggled with names and dates, but
                                        CitizenTestPrep made it interesting and
                                        easy to remember. I highly recommend
                                        CitizenTestPrep to anyone getting ready
                                        for this important exam.
                                    </p>
                                </div>

                                <div className="flex items-left mb-2">
                                    <img
                                        src="/images/p-3.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="text-ellipsis text-sm font-bold text-gray-600">
                                            Olivia Bullock
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Alberta
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-1 mx-4 sm:mx-10 lg:mx-1 xl:mx-8">
                        <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                            <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-left">
                                        “Great Resource”
                                    </h3>
                                    <p className="text-sm mb-2 text-gray-500 text-left ">
                                        CitizenTestPrep made my preparation
                                        smooth. The simulation test helped me
                                        find my weaknesses. I’m so grateful for
                                        this amazing resource that helped me
                                        embrace my new identity as a Canadian
                                        citizen.
                                    </p>
                                </div>
                                <div> </div>

                                <div className="flex items-left mt-2">
                                    <img
                                        src="/images/p4.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="text-ellipsis text-sm font-bold text-gray-600">
                                            Liam Mcdonald
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Nova Scotia
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                            <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-left">
                                        “Clear & Detailed Explanations“
                                    </h3>
                                    <p className="text-sm mb-14 text-gray-500 text-left">
                                        Their clear approach and detailed
                                        explanations made even the toughest
                                        chapters easier to understand. I’m so
                                        glad I didn’t just have to memorize the
                                        Discover Canada book.
                                    </p>
                                </div>

                                <div className="flex items-left mb-2 mt-2">
                                    <img
                                        src="/images/p-5.jpg"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-2"
                                    />
                                    <div className="flex flex-col text-center sm:text-left">
                                        <p className="text-ellipsis text-sm font-bold text-gray-600">
                                            Emily Chen
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Ontario
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                            <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                <div>
                                    <h3 className="text-xl font-bold mb-2 text-left">
                                        “Highly Recommend”
                                    </h3>
                                    <p className="text-sm mb-10 text-gray-500 text-left">
                                        CitizenTestPrep Premium was a lifesaver
                                        for me! It’s the best place to prepare
                                        for the test. I wholeheartedly recommend
                                        it to anyone looking to pass the
                                        Canadian citizenship test.
                                    </p>
                                </div>

                                <div className="flex items-left mb-2">
                                    <img
                                        src="/images/p6.jpg"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-2"
                                    />
                                    <div>
                                        <p className="text-ellipsis text-sm font-bold text-gray-600">
                                            Jevonte Haughton
                                        </p>
                                        <p className="text-sm text-gray-600">
                                            Quebec
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Read All Reviews Button */}
                    <div className="flex justify-center py-4">
                        <button className="text-black px-8 py-2 border-primary border-2 rounded-full md:block text-center mb-20">
                            Read all reviews
                        </button>
                    </div>
                </section>

                <section
                    id="Features"
                    className="container mx-auto px-10 md:px-10 py-12 bg-indigo-600 xl:px-32 relative overflow-hidden rounded-xl"
                >
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 h-20 w-10 bg-orange-400 rounded-r-full z-20 overflow-hidden hidden sm:block"></div>
                    <div className="absolute top-0 right-0 h-20 w-10 bg-amber-400 rounded-l-full z-10 overflow-hidden hidden sm:block"></div>

                    {/* Subheading */}
                    <p className="text-lg text-white  text-center mb-5">
                        A FASTER, SMARTER WAY TO STUDY
                    </p>

                    {/* Main Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center text-white hidden lg:block md:px-40">
                        Everything You Need To Pass Your Canadian Citizenship
                        Test
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                        {/* Left Column Image */}
                        <div className="hidden lg:flex justify-center items-center">
                            <img
                                src="/images/sample-image.png"
                                alt="Sample"
                                className="w-full lg:w-[809px] lg:h-[488px] rounded-lg"
                            />
                        </div>

                        {/* Right Column Content */}
                        <div className="flex flex-col justify-center space-y-4 text-xl  font-thin">
                            <p className="text-white mb-4 text-center md:text-left text-xl">
                                Get a better understanding of the test
                                materials. Practice with real questions,
                                including multiple-choice and true/false.
                            </p>
                            <ul className="space-y-2 text-white text-xl">
                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        52 Practice Tests&nbsp;
                                    </span>
                                    with easy-to-understand answer explanations
                                </li>

                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        850+ Practice Questions&nbsp;
                                    </span>{" "}
                                    for thorough preparation
                                </li>
                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        Simulation Tests&nbsp;
                                    </span>{" "}
                                    that feel like the real exam
                                </li>
                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        The Official Study Guide&nbsp;
                                    </span>{" "}
                                    in a fun and engaging format
                                </li>
                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        450+ Flash Cards&nbsp;
                                    </span>{" "}
                                    covering all the important chapters
                                </li>
                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        Cheat Sheets&nbsp;
                                    </span>{" "}
                                    with key figures, dates, maps, and a
                                    glossary
                                </li>
                                <li className="flex items-center sm:flex-nowrap gap-2 whitespace-nowrap">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    <span className="font-bold">
                                        Priority Customer Support&nbsp;
                                    </span>{" "}
                                    to help you whenever you need it
                                </li>
                            </ul>

                            <ScrollLink
                                to="pricing"
                                smooth={true}
                                duration={1000}
                                offset={-50}
                                className="bg-primary cursor-pointer font-bold text-white px-2 sm:px-8 md:px-10 py-3 sm:py-4 w-full sm:w-80 md:w-96 rounded-full text-sm sm:text-base md:text-lg shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                            >
                                Unlock all exam-like questions
                            </ScrollLink>
                        </div>
                    </div>
                </section>

                <section className="container  mx-auto px-6 md:px-10 lg:px-20 py-10 bg-slate-50">
                    <p className="text-center text-indigo-600 mt-8 text-lg ">
                        IN-DEPTH LEARNING
                    </p>

                    <h2 className="text-2xl md:text-2xl lg:text-5xl font-extrabold mb-2 text-center mt-2 md:mt-6 lg:mt-2 px-5 md:px-10 lg:px-64">
                        Learn Faster with Our Effective Study Guide
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Column */}
                        <div className="space-y-6 text-left md:text-left">
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4">
                                    User-Friendly Interface
                                </h3>
                                <p className="text-gray-500 text-lg mb-10">
                                    Our platform is easy to use. It makes
                                    studying simple and accessible for everyone.
                                    You can easily navigate through study
                                    materials, practice questions, and resources
                                    on any device.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4">
                                    Organized Study Material
                                </h3>
                                <p className="text-gray-500 text-lg mb-10">
                                    The study guide is divided into clear
                                    chapters, each focusing on specific chapters
                                    for the Canadian citizenship test. This
                                    organization helps you learn and understand
                                    better.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-xl md:text-2xl font-bold mb-4">
                                    Study Anytime, Anywhere
                                </h3>
                                <p className="text-gray-500 text-lg">
                                    Access our study guide whenever and wherever
                                    you want. Whether you like to study during
                                    breaks, on your commute, or at home, our
                                    resources are always available for you.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/image.png"
                                alt="Image"
                                className="w-[627px] h-[500px] rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 md:px-10 lg:px-20 py-20 bg-indigo-600 mt-10  rounded-xl">
                    <p className="text-center text-lg text-white mt-8">
                        ONE CHAPTER AT A TIME
                    </p>

                    <h2 className="text-2xl md:text-5xl font-bold mb-2 text-center text-white mt-2 md:mt-6 lg:mt-2 px-2 md:px-10 sm:px-60">
                        850+ Practice Questions and Answers
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Column */}

                        <div className="hidden sm:flex justify-center">
                            <img
                                src="/images/practisquestion.png"
                                alt="Image"
                                className="w-[627px] h-[500px] rounded-2xl"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 lg:text-left text-white mb-10 px-2 md:px-10">
                            <div>
                                <h3 className="text-2xl font-bold  mb-4">
                                    Dynamic Exam-Like Questions
                                </h3>
                                <p className="text-white text-lg  md:text-xl md:mb-10 ">
                                    Enjoy a variety of engaging questions that
                                    cover all chapters, helping you prepare
                                    thoroughly.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold  mb-4">
                                    Test Simulations
                                </h3>
                                <p className="text-white text-xl mb-10">
                                    Experience test simulations that closely
                                    mimic the real Canadian citizenship test, so
                                    you can get familiar with the exam format.
                                </p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold  mb-4">
                                    450+ Flashcards
                                </h3>
                                <p className="text-white    text-xl mb-10 md:mb-32">
                                    Use 450+ flashcards to reinforce important
                                    concepts and information while you study.
                                </p>
                            </div>
                            <div className="block sm:block md:hidden lg:hidden xl:hidden mb-10">
                                <img
                                    src="/images/practisquestion.png"
                                    alt="Image"
                                    className="w-[627px] h-[500px] rounded-2xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-4  py-8 bg-slate-50 hidden sm:block">
                    <p className="text-lg text-indigo-600 mb-4 mt-10 text-center">
                        CHEAT SHEETS
                    </p>

                    <h2 className="text-5xl font-extrabold mb-6 text-center">
                        Additional Tools And Resources
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                        {/* Column 1 */}
                        <div className="rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Canadian Map
                                </h3>
                                <p className="text-gray-600 text-lg mb-8">
                                    Explore Canada’s regions, provinces, and
                                    territories with our map, making it easy to
                                    learn about the country’s geography.
                                </p>
                            </div>
                            <img
                                src="/images/citizen.png"
                                alt="Image 1"
                                className="mt-4 w-[384px] h-[536px]  rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Column 2 */}
                        <div className="rounded-lg   p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Important Dates
                                </h3>
                                <p className="text-gray-600 text-lg mb-8">
                                    Discover all the key dates that could be
                                    asked about on the Canadian citizenship
                                    test.
                                </p>
                            </div>
                            <img
                                src="/images/citizen2.png"
                                alt="Image 2"
                                className="mt-4 w-[384px] h-[536px]  rounded-lg shadow-2xl"
                            />
                        </div>

                        {/* Column 3 */}
                        <div className="rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h3 className="text-2xl font-bold mb-4">
                                    Important People
                                </h3>
                                <p className="text-gray-600 text-lg mb-8">
                                    Check out a detailed list of significant
                                    figures in Canada’s rich history and
                                    cultural identity.
                                </p>
                            </div>
                            <img
                                src="/images/citizen3.png"
                                alt="Image 3"
                                className="mt-4 w-[384px] h-[536px]  rounded-lg shadow-2xl"
                            />
                        </div>
                    </div>
                </section>
                <section className="container mx-auto  mt-20" id="pricing">
                    {/* Heading */}
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 text-center mt-10">
                        Get Started Today and Let Us Help You Succeed!
                    </h2>

                    {/* Subheading */}
                    <p className="text-lg text-zinc-500 mb-8 text-center">
                        Start your Canadian citizenship journey with confidence.
                        Sign up now to get instant access to our top-quality
                        study resources!
                    </p>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/pass guarantee.png"
                            alt="Logo"
                            className="w-[299px] h-[121px]"
                        />
                    </div>

                    {/* Recommended Button */}

                    {/* Plans Section */}
                    <div className="container mx-auto flex flex-col md:flex-row mt-6  px-6 md:px-28 lg:px-0">
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
                            {/* Plan 1 */}
                            <form
                                action={route("checkout.register")}
                                method="get"
                                className="flex flex-col h-full"
                            >
                                <input
                                    type="hidden"
                                    name="packageId"
                                    value={1}
                                    autoComplete="off"
                                />
                                <div className="bg-white border-2 border-blue-50 rounded-3xl p-6 sm:p-8 md:p-8 lg:p-8 xl:p-8 shadow-xl flex-1 flex flex-col">
                                    <p className="text-xl sm:text-3xl font-extrabold mb-2 mt-2 sm:mt-2">
                                        3-Month Exam Prep
                                    </p>
                                    <p className="text-gray-600 text-base sm:text-lg mb-4">
                                        When every day counts, gain maximum
                                        knowledge in three months.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl">
                                            $19.99
                                        </p>
                                        <p className="text-gray-600 text-base">
                                            <span className="text-red-600">
                                                Today 50% off
                                            </span>

                                            <span className="line-through ml-2">
                                                $40.00
                                            </span>
                                        </p>
                                    </div>

                                    <button
                                        type="submit"
                                        className="bg-primary text-white py-2  w-full rounded-full mt-4 text-base sm:text-lg shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                                    >
                                        Get instant access
                                    </button>
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "Access to over 850+ test questions",
                                            "Practice tests for each chapter",
                                            "Unlimited exam simulators",
                                            "Chapter-wise study guides",
                                            "450+ Flashcards for every chapter",
                                            "Complete list of significant dates",
                                            "Directory of important people",
                                            "Regional Canadian Map",
                                            "Comprehensive Q&A",
                                        ].map((text, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="mr-2"
                                                />
                                                {text}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="flex items-center bg-slate-100 text-sm sm:text-lg text-zinc-600 mt-4 rounded-3xl">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.87752 5.33241C3.5 5.87028 3.5 7.46907 3.5 10.6667V12.2414C3.5 17.8794 7.73896 20.6155 10.3986 21.7773C11.12 22.0924 11.4807 22.25 12.5 22.25C13.5193 22.25 13.88 22.0924 14.6014 21.7773C17.261 20.6155 21.5 17.8794 21.5 12.2414V10.6667C21.5 7.46907 21.5 5.87028 21.1225 5.33241C20.745 4.79454 19.2417 4.27996 16.2351 3.25079L15.6623 3.05472C14.095 2.51824 13.3114 2.25 12.5 2.25C11.6886 2.25 10.905 2.51824 9.33772 3.05472L8.76491 3.25079C5.75832 4.27996 4.25503 4.79454 3.87752 5.33241ZM15.5595 10.7495C15.8353 10.4405 15.8085 9.96642 15.4995 9.69055C15.1905 9.41467 14.7164 9.44151 14.4405 9.75049L11.4286 13.1239L10.5595 12.1505C10.2836 11.8415 9.80947 11.8147 9.50049 12.0905C9.19151 12.3664 9.16467 12.8405 9.44055 13.1495L10.8691 14.7495C11.0114 14.9089 11.2149 15 11.4286 15C11.6422 15 11.8457 14.9089 11.988 14.7495L15.5595 10.7495Z"
                                                fill="#5459E8"
                                            />
                                        </svg>
                                        Pass Guarantee (100% money back)
                                    </p>
                                </div>
                            </form>

                            {/* Plan 2 (Highlighted) */}
                            <form
                                action={route("checkout.register")}
                                method="get"
                                className="flex flex-col h-full"
                            >
                                <input
                                    type="hidden"
                                    name="packageId"
                                    value={2}
                                    autoComplete="off"
                                />
                                <div className="relative bg-white border-4 border-indigo-600 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col">
                                    {/* Recommended Tag */}
                                    <div className="absolute -top-4 left-28 transform -translate-x-1/2 bg-indigo-600 text-white text-xs sm:text-sm md:text-base py-1 px-4 rounded-full w-max">
                                        Recommended
                                    </div>

                                    <h2 className="text-xl sm:text-3xl font-extrabold mb-2 mt-2">
                                        6-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-base sm:text-lg mb-4">
                                        When diving deep matters. A complete
                                        package to ace the exam.
                                    </p>

                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-xl">
                                            $29.99
                                        </p>
                                        <p className="text-gray-600 text-base ">
                                            <span className="text-red-600">
                                                Today 50% off
                                            </span>

                                            <span className="line-through ml-2">
                                                $60.00
                                            </span>
                                        </p>
                                    </div>

                                    <button className="bg-primary text-white py-2 sm:py-3 w-full rounded-full mt-4 text-base sm:text-lg shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out">
                                        Get instant access
                                    </button>

                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "Access to over 850+ test questions",
                                            "Practice tests for each chapter",
                                            "Unlimited exam simulators",
                                            "Chapter-wise study guides",
                                            "450+ Flashcards for every chapter",
                                            "Complete list of significant dates",
                                            "Directory of important people",
                                            "Regional Canadian Map",
                                            "Comprehensive Q&A",
                                        ].map((text, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="mr-2"
                                                />
                                                {text}
                                            </li>
                                        ))}
                                    </ul>

                                    <p className="flex items-center bg-slate-100 text-sm sm:text-lg text-zinc-600 mt-4 rounded-3xl">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.87752 5.33241C3.5 5.87028 3.5 7.46907 3.5 10.6667V12.2414C3.5 17.8794 7.73896 20.6155 10.3986 21.7773C11.12 22.0924 11.4807 22.25 12.5 22.25C13.5193 22.25 13.88 22.0924 14.6014 21.7773C17.261 20.6155 21.5 17.8794 21.5 12.2414V10.6667C21.5 7.46907 21.5 5.87028 21.1225 5.33241C20.745 4.79454 19.2417 4.27996 16.2351 3.25079L15.6623 3.05472C14.095 2.51824 13.3114 2.25 12.5 2.25C11.6886 2.25 10.905 2.51824 9.33772 3.05472L8.76491 3.25079C5.75832 4.27996 4.25503 4.79454 3.87752 5.33241ZM15.5595 10.7495C15.8353 10.4405 15.8085 9.96642 15.4995 9.69055C15.1905 9.41467 14.7164 9.44151 14.4405 9.75049L11.4286 13.1239L10.5595 12.1505C10.2836 11.8415 9.80947 11.8147 9.50049 12.0905C9.19151 12.3664 9.16467 12.8405 9.44055 13.1495L10.8691 14.7495C11.0114 14.9089 11.2149 15 11.4286 15C11.6422 15 11.8457 14.9089 11.988 14.7495L15.5595 10.7495Z"
                                                fill="#5459E8"
                                            />
                                        </svg>
                                        Pass Guarantee (100% money back)
                                    </p>
                                </div>
                            </form>

                            {/* Plan 3 */}
                            <form
                                action={route("checkout.register")}
                                method="get"
                                className="flex flex-col h-full"
                            >
                                <input
                                    type="hidden"
                                    name="packageId"
                                    value={3}
                                    autoComplete="off"
                                />
                                <div className="bg-white border-2 border-blue-50 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col">
                                    <h2 className="text-xl sm:text-3xl font-extrabold mb-2 mt-2">
                                        12-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-base sm:text-lg mb-4">
                                        When persistence pays off, get a
                                        comprehensive year-long package.
                                    </p>
                                    <div className="flex justify-between ">
                                        <p className="font-bold text-xl sm:text-xl">
                                            $49.99
                                        </p>
                                        <p className="text-gray-600 text-base">
                                            <span className="text-red-600">
                                                Today 50% off
                                            </span>

                                            <span className="line-through ml-2">
                                                $100.00
                                            </span>
                                        </p>
                                    </div>
                                    <button className="bg-primary text-white py-2 sm:py-3 w-full rounded-full mt-4 text-base sm:text-lg shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out">
                                        Get instant access
                                    </button>
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "Access to over 850+ test questions",
                                            "Practice tests for each chapter",
                                            "Unlimited exam simulators",
                                            "Chapter-wise study guides",
                                            "450+ Flashcards for every chapter",
                                            "Complete list of significant dates",
                                            "Directory of important people",
                                            "Regional Canadian Map",
                                            "Comprehensive Q&A",
                                        ].map((text, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center"
                                            >
                                                <FontAwesomeIcon
                                                    icon={faCheck}
                                                    className="mr-2"
                                                />
                                                {text}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="flex items-center bg-slate-100 text-sm sm:text-lg text-zinc-600 mt-4 rounded-3xl">
                                        <svg
                                            width="25"
                                            height="25"
                                            viewBox="0 0 25 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M3.87752 5.33241C3.5 5.87028 3.5 7.46907 3.5 10.6667V12.2414C3.5 17.8794 7.73896 20.6155 10.3986 21.7773C11.12 22.0924 11.4807 22.25 12.5 22.25C13.5193 22.25 13.88 22.0924 14.6014 21.7773C17.261 20.6155 21.5 17.8794 21.5 12.2414V10.6667C21.5 7.46907 21.5 5.87028 21.1225 5.33241C20.745 4.79454 19.2417 4.27996 16.2351 3.25079L15.6623 3.05472C14.095 2.51824 13.3114 2.25 12.5 2.25C11.6886 2.25 10.905 2.51824 9.33772 3.05472L8.76491 3.25079C5.75832 4.27996 4.25503 4.79454 3.87752 5.33241ZM15.5595 10.7495C15.8353 10.4405 15.8085 9.96642 15.4995 9.69055C15.1905 9.41467 14.7164 9.44151 14.4405 9.75049L11.4286 13.1239L10.5595 12.1505C10.2836 11.8415 9.80947 11.8147 9.50049 12.0905C9.19151 12.3664 9.16467 12.8405 9.44055 13.1495L10.8691 14.7495C11.0114 14.9089 11.2149 15 11.4286 15C11.6422 15 11.8457 14.9089 11.988 14.7495L15.5595 10.7495Z"
                                                fill="#5459E8"
                                            />
                                        </svg>
                                        Pass Guarantee (100% money back)
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 md:px-10 lg:px-2 py-8 ">
                    {/* FAQ Heading */}
                    <p className="text-lg text-indigo-600 mb-4 mt-8 text-center">
                        COMMON FAQS
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                        Your Questions, Answered
                    </h2>

                    {/* FAQ Accordion */}
                    <div className="mx-auto px-4 md:px-10 lg:px-64 py-8">
                        <Accordion
                            icon={
                                <svg
                                    className={`transition-transform duration-500 ${
                                        open === 1 ? "-rotate-180" : "rotate-0"
                                    }`}
                                    width="16"
                                    height="11"
                                    viewBox="0 0 16 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.88 0.810059L8 6.91673L14.12 0.810059L16 2.69006L8 10.6901L0 2.69006L1.88 0.810059Z"
                                        fill="#141414"
                                    />
                                </svg>
                            }
                            animate={CUSTOM_ANIMATION}
                            open={open === 1}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-white"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(1)}
                                className={`border-b-0 transition-colors ${
                                    open === 1
                                        ? "text-blue-500 hover:!text-blue-700"
                                        : ""
                                }`}
                            >
                                How quickly will I see results?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                                With our Premium package, you'll start noticing
                                improvements right away. Our 20-minute quizzes
                                and interactive flashcards help you learn fast
                                and get instant feedback, so you can grasp key
                                concepts quickly. Many users see better test
                                scores within just a few days of focused
                                practice.
                            </AccordionBody>
                        </Accordion>

                        <Accordion
                            icon={
                                <svg
                                    className={`transition-transform duration-500 ${
                                        open === 2 ? "-rotate-180" : "rotate-0"
                                    }`}
                                    width="16"
                                    height="11"
                                    viewBox="0 0 16 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.88 0.810059L8 6.91673L14.12 0.810059L16 2.69006L8 10.6901L0 2.69006L1.88 0.810059Z"
                                        fill="#141414"
                                    />
                                </svg>
                            }
                            animate={CUSTOM_ANIMATION}
                            open={open === 2}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-white"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(2)}
                                className={`border-b-0 transition-colors ${
                                    open === 2
                                        ? "text-blue-500 hover:!text-blue-700"
                                        : ""
                                }`}
                            >
                                Is CitizenTestPrep.ca Premium a recurring
                                subscription?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                                No, CitizenTestPrep.ca Premium is a one-time
                                payment. There are no automatic renewals.
                            </AccordionBody>
                        </Accordion>

                        <Accordion
                            icon={
                                <svg
                                    className={`transition-transform duration-500 ${
                                        open === 3 ? "-rotate-180" : "rotate-0"
                                    }`}
                                    width="16"
                                    height="11"
                                    viewBox="0 0 16 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.88 0.810059L8 6.91673L14.12 0.810059L16 2.69006L8 10.6901L0 2.69006L1.88 0.810059Z"
                                        fill="#141414"
                                    />
                                </svg>
                            }
                            animate={CUSTOM_ANIMATION}
                            open={open === 3}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-white"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(3)}
                                className={`border-b-0 transition-colors ${
                                    open === 3
                                        ? "text-blue-500 hover:!text-blue-700"
                                        : ""
                                }`}
                            >
                                I’ve failed my test. How can I be sure this will
                                help me?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                                If you've failed before, it means you need a new
                                strategy. Our study material in the premium
                                package helps you remember key information and
                                feel confident.
                            </AccordionBody>
                        </Accordion>

                        <Accordion
                            icon={
                                <svg
                                    className={`transition-transform duration-500 ${
                                        open === 4 ? "-rotate-180" : "rotate-0"
                                    }`}
                                    width="16"
                                    height="11"
                                    viewBox="0 0 16 11"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M1.88 0.810059L8 6.91673L14.12 0.810059L16 2.69006L8 10.6901L0 2.69006L1.88 0.810059Z"
                                        fill="#141414"
                                    />
                                </svg>
                            }
                            animate={CUSTOM_ANIMATION}
                            open={open === 4}
                            className="mb-2 rounded-lg border border-blue-gray-100 px-4 bg-white"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(4)}
                                className={`border-b-0 transition-colors ${
                                    open === 4
                                        ? "text-blue-500 hover:!text-blue-700"
                                        : ""
                                }`}
                            >
                                Is the study material available in other
                                languages?
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                                Right now, our study materials and cheat sheets
                                are only available in English.
                            </AccordionBody>
                        </Accordion>
                    </div>
                    {/* Contact Section */}
                    <div className="container mx-auto mt-8">
                        <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-center md:items-center">
                            <p className="text-gray-900 mb-4 md:mb-0 md:mr-4 text-center md:text-left text-sm sm:text-base">
                                Have more questions or want to contact us?
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                {/* Envelope Option */}
                                <div className="flex text-center gap-4 bg-white py-2  px-4 rounded-lg border border-gray-300  ">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-primary"
                                    />
                                    <Link
                                        href="/contact-us"
                                        className="text-indigo-600 text-sm text-center"
                                    >
                                        {" "}
                                        Contact Via Email
                                    </Link>
                                </div>
                                {/* Phone Option */}
                                <a href="tel:672-558-4037" className="block">
                                    <div className="flex text-center gap-4 bg-white py-2  px-4 rounded-lg border border-gray-300">
                                        <FontAwesomeIcon
                                            icon={faPhone}
                                            className="text-primary"
                                        />
                                        <span className="text-indigo-600 text-sm text-center ">
                                            Call Us
                                        </span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    );
}
