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
import { Accordion } from "flowbite-react";

export default function Premium({ auth }) {
    return (
        <>
            <GuestLayout user={auth.user}>
                <Head title="Premium" />
                <section className=" grid grid-cols-1 lg:grid-cols-12 gap-2 p-4 sm:p-6 md:px-10 lg:px-8  xl:px-20 bg-slate-50">
                    {/* Left Section with Heading and Details */}
                    <div className="lg:col-span-6 flex flex-col space-y-6 p-6 md:p-10 xl:p-6">
                        <h1 className="text-xl sm:text-3xl lg:text-4xl xl:text-3xl font-extrabold leading-tight">
                            Pass your Canadian Citizenship test on the <br />{" "}
                            first try.
                            <span className="text-indigo-600">
                                {" "}
                                Guaranteed.
                            </span>
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl leading-relaxed">
                            Your all-in-one toolkit for success: Prepare
                            thoroughly with 700+ test questions, topic-based
                            quizzes, realistic test simulations, study quizzes,
                            and more.
                        </p>
                        <div className="flex flex-col md:flex-row items-center md:items-start mt-4 space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-primary text-white px-6 py-3 rounded-full text-sm md:text-base lg:text-lg xl:text-xl">
                                Get all exam-like questions
                            </button>
                            <div>
                                <img
                                    src="/images/pass guarantee.png"
                                    alt="Pass Guarantee"
                                    className="h-10 w-auto ml-0 md:ml-4"
                                />
                            </div>
                        </div>
                        <p className="text-gray-600 mt-4 text-sm md:text-base lg:text-lg xl:text-xl">
                            Join the 18,300+ new citizens who passed their tests
                            with our help.
                        </p>
                        <ul className="space-y-2 text-gray-600 text-sm md:text-base lg:text-lg xl:text-xl">
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-gray-600"
                                />
                                700+ exam-like questions
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-gray-600"
                                />
                                Advanced test simulations
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-gray-600"
                                />
                                Pass Guarantee or it's on us
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-gray-600"
                                />
                                Tailored study plan
                            </li>
                        </ul>
                    </div>

                    {/* Right Section with Image */}
                    <div className="lg:col-span-6 flex justify-center items-center xl:ml-0">
                        <img
                            src="/images/ea59b0c12c13b0daf792e11ef62864a7.png"
                            alt="Test Preparation"
                            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto rounded-xl"
                        />
                    </div>

                    {/* Testimonials Section */}
                    <div className="lg:col-span-12 flex flex-col items-center sm:justify-between ">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl xl:text-4xl font-bold mt-4 text-center lg:text-left">
                            Why busy learners love CitizenTestPrep Premium
                        </h1>

                        <div className="text-gray-600 mt-4 text-center lg:text-left flex flex-col lg:flex-row items-center lg:items-start">
                            Our customers rate us Excellent
                            <div className="flex items-center mx-2">
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-yellow-300 mx-1"
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-yellow-300 mx-1"
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-yellow-300 mx-1"
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-yellow-300 mx-1"
                                />
                                <FontAwesomeIcon
                                    icon={faStar}
                                    className="text-yellow-300 mx-1"
                                />
                            </div>
                            <span className="text-sm md:text-base lg:text-lg xl:text-xl">
                                Rated 5 out of 5 based on over 200+ reviews.
                            </span>
                        </div>

                        {/* Responsive Testimonials */}
                        <div className="container mx-auto px-2 py-4">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                    <div className="p-8 bg-white rounded-2xl shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl font-bold mb-2">
                                                “Passed on my first attempt”
                                            </h1>
                                            <p className="text-sm mb-2 text-gray-500">
                                                I failed my Canadian citizenship
                                                test initially. Then I found
                                                CitizenTestPrep. The platform
                                                helped me pass the exam with
                                                confidence.
                                            </p>
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <img
                                                src="/images/review 3.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div>
                                                <h2 className="text-base font-bold text-gray-600">
                                                    Jillian McAllister
                                                </h2>
                                                <p className="text-sm text-gray-600">
                                                    British Columbia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                    <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl font-bold mb-2">
                                                “Exactly What I Needed”
                                            </h1>
                                            <p className="text-sm mb-2 text-gray-500">
                                                If you want to prepare for the
                                                Canadian Citizenship test, this
                                                platform has everything you
                                                need, especially the
                                                chapter-wise practice tests.
                                            </p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <img
                                                src="/images/review 2.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div>
                                                <h2 className="text-base font-bold text-gray-600">
                                                    Marcus Tremblay
                                                </h2>
                                                <p className="text-sm text-gray-600">
                                                    Nova Scotia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4">
                                    <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl font-bold mb-2">
                                                “Best Resource For The Test”
                                            </h1>
                                            <p className="text-sm mb-2 text-gray-500">
                                                After failing the test on my
                                                first attempt, I used
                                                CitizenTestPrep Premium, and it
                                                was the best resource to pass
                                                the Canadian Citizenship Test.
                                            </p>
                                        </div>
                                        <div className="flex items-center mb-2">
                                            <img
                                                src="/images/review 1.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div>
                                                <h2 className="text-base font-bold text-gray-600">
                                                    Hitoshi Matsumoto
                                                </h2>
                                                <p className="text-sm text-gray-600">
                                                    Saskatchewan
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="lg:col-span-12 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 xl:px-96">
                    <h1 className="text-3xl sm:text-4xl lg:text-3xl xl:text-4xl font-bold mb-4 text-center">
                        Lively and innovative method of test preparation!
                    </h1>
                    <p className="text-gray-600 font-inter text-center text-base lg:text-lg max-h-20 md:max-h-24 lg:max-h-32 overflow-hidden">
                        We offer valuable and useful resources to help people
                        prepare for the Canadian citizenship test. Our
                        comprehensive platform provides an organized way to
                        prepare thoroughly. You will gain a better understanding
                        of Canadian values and principles. Familiarize yourself
                        with the question format and content of the real exam.
                    </p>
                    <img
                        src="/images/mobile chapt.png"
                        alt="Your Photo"
                        className="w-full  rounded-lg shadow-md "
                    />
                    <p className="text-gray-600 font-inter text-center text-base lg:text-lg">
                        Get an effective pathway to success. Whether it's your
                        first time or not, you will be benefited. Our
                        user-friendly interface makes it easy to study at your
                        own pace. Join thousands of satisfied users who have
                        aced their citizenship tests with our proven study
                        resources.
                    </p>
                </section>
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 sm:p-6 md:p-10 bg-slate-50 mt-10 xl:px-32">
                    {/* Left Section: Text Content */}
                    <div className="lg:col-span-6 flex flex-col space-y-6 p-6 md:p-10">
                        <p className="text-indigo-600 text-sm md:text-base lg:text-lg">
                            How it works
                        </p>
                        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl font-bold leading-snug">
                            It has never been so easy to pass the Canadian
                            Citizenship test
                        </h1>
                        <p className="text-gray-600 text-sm md:text-base lg:text-lg xl:text-lg">
                            Take the Canadian citizenship test with clarity and
                            stress-free preparation, achieving your dream of
                            becoming Canadian with ease.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {/* Step 1 */}
                            <div className="p-1">
                                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-semibold">
                                    STEP 1
                                </h1>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold">
                                    Engaging quizzes
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-lg">
                                    Boost your confidence with quick, 5-minute
                                    quizzes that feel like mini-victories.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="p-1">
                                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-semibold">
                                    STEP 2
                                </h1>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold">
                                    Personalized learning
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-lg">
                                    Focus on what matters. Ditch mind-numbing
                                    lectures, learn faster and retain more.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="p-1">
                                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-semibold">
                                    STEP 3
                                </h1>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold">
                                    Real-time exam simulator
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-lg">
                                    Our advanced algorithm gauges your passing
                                    chances in real-time.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="p-1">
                                <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-semibold">
                                    STEP 4
                                </h1>
                                <h2 className="text-base sm:text-lg md:text-xl lg:text-xl font-semibold">
                                    Ace your exam 🎉
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base md:text-lg lg:text-lg">
                                    Feel confident and prepared on exam day,
                                    ready to pass with flying colors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Image */}
                    <div className="lg:col-span-6 flex justify-center items-center p-6 md:p-10 bg-slate-50">
                        <div className="p-2 lg:p-4 bg-slate-100 rounded-xl">
                            <img
                                src="/images/result2.jpg"
                                alt="Sample"
                                className="rounded-xl w-60 h-72 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 xl:w-[30rem] xl:h-[35rem]"
                            />
                        </div>
                    </div>
                </section>

                <section className="relative flex flex-col items-center py-10 px-4 md:px-10 bg-white">
                    {/* Image */}
                    <img
                        src="/images/pass guarantee.png"
                        alt="Pass Guarantee Logo"
                        className="w-24 h-24 sm:w-28 sm:h-28 md:w-40 md:h-40 lg:w-64 lg:h-40 xl:w-56 xl:h-40"
                    />

                    {/* Main Heading */}
                    <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-black font-bold mt-2 text-center leading-tight">
                        Pass the citizenship test or get your money back
                    </h1>

                    {/* Subheading */}
                    <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-indigo-700 font-bold mt-2 text-center leading-tight">
                        Get your money back
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-600 mt-4 text-center text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl max-w-2xl leading-relaxed">
                        We guarantee your success with our comprehensive study
                        resources. If you diligently use our materials and do
                        not pass the Canadian citizenship test, we will provide
                        a full refund. Join thousands of satisfied users who
                        have successfully prepared with CitizenshipTestPrep
                        Premium.
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

                <section className="container-fluid mx-auto px-2 py-8 bg-slate-50 xl:px-32">
                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center mt-8">
                        Our users find our questions <br /> very similar to the
                        actual test.
                    </h1>

                    {/* User Reviews */}
                    <div className="flex flex-wrap -mx-4">
                        {Array(6)
                            .fill()
                            .map((_, i) => (
                                <div
                                    key={i}
                                    className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"
                                >
                                    <div className="p-6 md:p-8 bg-white rounded-2xl flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl sm:text-2xl font-bold mb-2">
                                                “Passed on My First Try!”{" "}
                                                {i + 1}
                                            </h1>
                                            <p className="text-sm sm:text-base text-gray-500">
                                                I struggled to retain
                                                information from the Discover
                                                Canada book until a friend
                                                recommended CitizenshipTestPrep
                                                Premium. Their practice tests
                                                and timeline recaps made a huge
                                                difference, and I passed on my
                                                first try! {i + 1}.
                                            </p>
                                        </div>
                                        <div className="border-t-2 border-gray-100 mt-2"></div>
                                        <div className="flex items-center mt-4">
                                            <img
                                                src="/images/1pass.png"
                                                alt="Profile Picture"
                                                className="w-12 h-12 rounded-full mr-4"
                                            />
                                            <div>
                                                <h2 className="text-base font-bold text-gray-600">
                                                    Charlotte Morrison {i + 1}
                                                </h2>
                                                <p className="text-sm text-gray-600">
                                                    British Columbia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Read All Reviews Button */}
                    <div className="flex justify-center">
                        <button className="text-black px-4 py-2 border-primary border-2 rounded-full md:block text-center">
                            Read all reviews
                        </button>
                    </div>
                </section>

                <section className="container-fluid mx-auto px-4 md:px-10 py-10 bg-indigo-600 xl:px-32 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 h-20 w-10 bg-orange-400 rounded-r-full z-20 overflow-hidden hidden sm:block"></div>
                    <div className="absolute top-0 right-0 h-20 w-10 bg-amber-400 rounded-l-full z-10 overflow-hidden hidden sm:block"></div>

                    {/* Subheading */}
                    <p className="text-xs sm:text-sm md:text-base text-white mb-6 text-center mt-10">
                        A FASTER, SMARTER WAY TO STUDY
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white hidden lg:block">
                        Everything you need to pass your <br /> Canadian
                        Citizenship Test
                    </h1>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-center text-white lg:hidden">
                        Pass The Citizenship Test
                    </h1>

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
                        <div className="flex flex-col justify-center space-y-4 text-base sm:text-lg">
                            <h1 className="text-white mb-4 text-justify md:text-left">
                                Gain a deeper understanding of the test
                                material. Practice with real-life test
                                questions, including multiple-choice,
                                true-false, and more.
                            </h1>
                            <ul className="space-y-2 text-white">
                                {[
                                    "Customized chapter-wise practice tests",
                                    "Access 700+ test questions",
                                    "Unlimited exam simulation",
                                    "Advanced AI delivers a performance review",
                                    "Flashcards for each chapter",
                                    "Profiles notable figures",
                                    "Providence-specific government queries",
                                ].map((text, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="mr-2 text-white"
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <button className="bg-primary text-white px-4 py-2 w-80  rounded-full mt-6">
                                Unlock all exam-like questions
                            </button>
                        </div>
                    </div>
                </section>

                <section className="container-fluid mx-auto px-4 md:px-10 lg:px-20 py-10 bg-slate-50">
                    <p className="text-center text-indigo-600 mt-8">
                        In-depth learning
                    </p>

                    <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold mb-2 text-center mt-2 md:mt-6 lg:mt-2">
                        Learn faster with our effective
                        <br />
                        study guide
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Column */}
                        <div className="space-y-6 text-center md:text-left">
                            <div>
                                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                                    User-Friendly Interface
                                </h2>
                                <p className="text-gray-500 text-sm sm:text-base">
                                    Our platform features a user-friendly
                                    interface, making studying intuitive and
                                    accessible for everyone. Easily navigate
                                    study materials, quizzes, and resources on
                                    any device.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                                    Structured Study Material
                                </h1>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    The study guide is divided into clearly
                                    defined chapters, each focusing on specific
                                    topics relevant to the Canadian citizenship
                                    test. This structure facilitates targeted
                                    learning and comprehension.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-lg sm:text-xl md:text-2xl font-bold mb-4">
                                    Study Anytime, Anywhere
                                </h1>
                                <p className="text-gray-600 text-sm sm:text-base">
                                    Access our study guide anytime, anywhere.
                                    Study during breaks, commutes, or at home
                                    with our accessible resources.
                                </p>
                            </div>
                        </div>

                        {/* Right Column */}
                        <div className="flex justify-center items-center">
                            <img
                                src="/images/image.png"
                                alt="Image"
                                className="w-full h-auto lg:h-96 lg:w-80 rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                <section className="container-fluid  mx-auto px-4 md:px-10 lg:px-20 py-4 bg-indigo-600">
                    <p className="text-center text-xs text-white mt-8">
                        ONE CHAPTER AT A TIME
                    </p>

                    <h1 className="text-4xl font-bold mb-2 text-center text-white mt-2 md:mt-6 lg:mt-2">
                        700+ Practice Questions and Answers to <br />
                        prepare
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Column */}

                        <div className="flex justify-center">
                            <img
                                src="/images/practisquestion.png"
                                alt="Image"
                                className="w-96 lg:h-72 rounded-xl md:h-auto"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 lg:text-left text-white mb-10">
                            <div>
                                <h1 className="text-lg font-monobold  mb-4">
                                    Detailed and Exam-Like Questions
                                </h1>
                                <p className="text-white   text-xs">
                                    Benefit from dynamic and weighted questions
                                    that cover a range of topics.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-lg font-monobold  mb-4">
                                    Test Simulations
                                </h1>
                                <p className="text-white text-sm">
                                    Participate in test simulations that mimic
                                    the real Canadian citizenship test to
                                    understand the exam format.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-lg font-monobold mb-4">
                                    Flashcards
                                </h1>
                                <p className="text-white    text-sm">
                                    Use flashcards to reinforce key concepts and
                                    information while studying.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-4 md:px-10 lg:px-20 py-8 bg-slate-50 hidden sm:block">
                    <p className="text-sm text-indigo-600 mb-4 mt-8 text-center">
                        IMPORTANT TOOLS
                    </p>

                    <h1 className="text-4xl font-bold mb-6 text-center">
                        Additional tools and resources
                    </h1>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1">
                        {/* Column 1 */}
                        <div className="rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">
                                    Important Dates
                                </h2>
                                <p className="text-gray-600">
                                    See the big picture by scrolling through our
                                    extensive
                                </p>
                            </div>
                            <img
                                src="/images/citizen.png"
                                alt="Image 1"
                                className="mt-4 w-full h-auto max-h-96 rounded-lg"
                            />
                        </div>

                        {/* Column 2 */}
                        <div className="rounded-lg  p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">
                                    Important People
                                </h2>
                                <p className="text-gray-500 text-sm">
                                    View a detailed list of all the important
                                    people in Canada’s vibrant history and
                                    cultural identity.
                                </p>
                            </div>
                            <img
                                src="/images/citizen2.png"
                                alt="Image 2"
                                className="mt-4 w-full h-auto max-h-96 rounded-lg"
                            />
                        </div>

                        {/* Column 3 */}
                        <div className="rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-xl font-bold mb-4">
                                    Interactive Regional Map
                                </h2>
                                <p className="text-gray-600 text-sm">
                                    Learn about the different regions,
                                    provinces/territories and more in Canada,
                                    with a visual Interactive map.
                                </p>
                            </div>
                            <img
                                src="/images/citizen3.png"
                                alt="Image 3"
                                className="mt-4 w-full h-auto max-h-96 rounded-lg"
                            />
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-4 md:px-10 lg:px-20 py-8">
                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center mt-10">
                        Get started today and ace the test
                    </h1>

                    {/* Subheading */}
                    <p className="text-xs sm:text-sm md:text-base text-zinc-600 mb-8 text-center">
                        Begin your Canadian citizenship journey with confidence.
                        Sign up now <br /> for instant access to our premium
                        study resources.
                    </p>

                    {/* Image */}
                    <div className="flex justify-center">
                        <img
                            src="/images/pass guarantee.png"
                            alt="Logo"
                            className="h-24 sm:h-32 w-52 sm:w-72"
                        />
                    </div>

                    {/* Recommended Button */}
                    <button className="bg-indigo-600 text-white text-xs sm:text-sm md:text-base py-2 px-4 w-full sm:w-48 rounded-lg mx-auto block mt-4">
                        Recommended
                    </button>

                    {/* Plans Section */}
                    <div className="flex flex-col md:flex-row mt-6 lg:mx-10">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mx-auto sm:mx-10 ">
                            {/* Plan 1 */}
                            <form
                                action={route("checkout.register")}
                                method="get"
                            >
                                <input
                                    type="hidden"
                                    name="packageId"
                                    value={1}
                                    autoComplete="off"
                                />
                                <div className="bg-white border-2 border-blue-50 rounded-3xl p-4 sm:p-6 shadow-xl">
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                        3-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                        When every day counts, get maximum
                                        knowledge in 30-days.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-2xl">
                                            $19.99
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Just $0.6/day
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-primary text-white py-2 w-full rounded-full mt-4"
                                    >
                                        Get instant access
                                    </button>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-xs sm:text-sm mt-2">
                                        {[
                                            "Customized chapter-wise practice tests",
                                            "Access 700+ test questions",
                                            "Unlimited exam simulation",
                                            "Advanced AI delivers a performance review",
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
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-4">
                                        Pass Guarantee (100% money back)
                                    </p>
                                </div>
                            </form>

                            {/* Plan 2 (Highlighted) */}
                            <form
                                action={route("checkout.register")}
                                method="get"
                            >
                                <input
                                    type="hidden"
                                    name="packageId"
                                    value={2}
                                    autoComplete="off"
                                />
                                <div className="bg-white border-4 border-indigo-600 rounded-3xl p-4 sm:p-6 shadow-2xl">
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                        3-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                        When every day counts, get maximum
                                        knowledge in 30-days.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-2xl">
                                            $19.99
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Just $0.6/day
                                        </p>
                                    </div>
                                    <button className="bg-primary text-white py-2 w-full rounded-full mt-4">
                                        Get instant access
                                    </button>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-xs sm:text-sm mt-2">
                                        {[
                                            "Customized chapter-wise practice tests",
                                            "Access 700+ test questions",
                                            "Unlimited exam simulation",
                                            "Advanced AI delivers a performance review",
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
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-4">
                                        Pass Guarantee (100% money back)
                                    </p>
                                </div>
                            </form>

                            {/* Plan 3 */}
                            <form
                                action={route("checkout.register")}
                                method="get"
                            >
                                <input
                                    type="hidden"
                                    name="packageId"
                                    value={3}
                                    autoComplete="off"
                                />
                                <div className="bg-white border-2 border-blue-50 rounded-3xl p-4 sm:p-6 shadow-xl">
                                    <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                        3-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-xs sm:text-sm mb-4">
                                        When every day counts, get maximum
                                        knowledge in 30-days.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-2xl">
                                            $19.99
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-sm">
                                            Just $0.6/day
                                        </p>
                                    </div>
                                    <button className="bg-primary text-white py-2 w-full rounded-full mt-4">
                                        Get instant access
                                    </button>
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-xs sm:text-sm mt-2">
                                        {[
                                            "Customized chapter-wise practice tests",
                                            "Access 700+ test questions",
                                            "Unlimited exam simulation",
                                            "Advanced AI delivers a performance review",
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
                                    <p className="text-xs sm:text-sm text-zinc-600 mt-4">
                                        Pass Guarantee (100% money back)
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 md:px-10 lg:px-2 py-8 bg-slate-100">
                    {/* FAQ Heading */}
                    <p className="text-sm sm:text-base text-indigo-600 mb-4 mt-8 text-center">
                        Common FAQs
                    </p>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-center">
                        Your questions, answered
                    </h1>

                    {/* FAQ Accordion */}
                    <div className="mx-auto px-4 md:px-10 lg:px-64 py-8">
                        <Accordion className="bg-white border-none">
                            {/* FAQ Item 1 */}
                            <Accordion.Panel>
                                <Accordion.Title className="mb-2">
                                    Which plan is best for me?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-sm sm:text-base">
                                        Studying on your own can be tough
                                        because there's so much information to
                                        retain. Our "Learn-Quiz-Learn" framework
                                        is a proven approach that has helped
                                        thousands of learners across Canada pass
                                        their tests, bringing them one step
                                        closer to Canadian citizenship.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            {/* FAQ Item 2 */}
                            <Accordion.Panel className="mt-8 border-none">
                                <Accordion.Title className="mb-2">
                                    I have only a few days left for the exam,
                                    will this help me?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-sm sm:text-base">
                                        Studying on your own can be tough
                                        because there's so much information to
                                        retain. Our "Learn-Quiz-Learn" framework
                                        is a proven approach that has helped
                                        thousands of learners across Canada pass
                                        their tests, bringing them one step
                                        closer to Canadian citizenship.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            {/* FAQ Item 3 */}
                            <Accordion.Panel className="mt-8 border-none">
                                <Accordion.Title className="mb-2">
                                    I have already attended the test and have
                                    knowledge about the question pattern, should
                                    I join here?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-sm sm:text-base">
                                        Studying on your own can be tough
                                        because there's so much information to
                                        retain. Our "Learn-Quiz-Learn" framework
                                        is a proven approach that has helped
                                        thousands of learners across Canada pass
                                        their tests, bringing them one step
                                        closer to Canadian citizenship.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>

                            {/* FAQ Item 4 */}
                            <Accordion.Panel className="mt-8 border-none">
                                <Accordion.Title className="mb-2">
                                    How can I be sure that premium will help me
                                    pass?
                                </Accordion.Title>
                                <Accordion.Content>
                                    <p className="mb-2 text-sm sm:text-base">
                                        Studying on your own can be tough
                                        because there's so much information to
                                        retain. Our "Learn-Quiz-Learn" framework
                                        is a proven approach that has helped
                                        thousands of learners across Canada pass
                                        their tests, bringing them one step
                                        closer to Canadian citizenship.
                                    </p>
                                </Accordion.Content>
                            </Accordion.Panel>
                        </Accordion>
                    </div>

                    {/* Contact Section */}
                    <div className="container mx-auto mt-8">
                        <div className="max-w-4xl mx-auto p-4 flex flex-col md:flex-row items-start md:items-center">
                            <p className="text-gray-900 mb-4 md:mb-0 md:mr-4 text-center md:text-left text-sm sm:text-base">
                                Have more questions or want to chat about plan
                                selection?
                            </p>
                            <div className="flex flex-col md:flex-row gap-4 justify-center">
                                {/* Email Option */}
                                <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                    <FontAwesomeIcon
                                        icon={faMessage}
                                        className="text-indigo-600"
                                    />
                                    <span className="text-indigo-600 text-sm">
                                        Send us an email
                                    </span>
                                </div>
                                {/* Envelope Option */}
                                <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-indigo-600"
                                    />
                                    <span className="text-indigo-600 text-sm">
                                        Email
                                    </span>
                                </div>
                                {/* Phone Option */}
                                <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="text-indigo-600"
                                    />
                                    <span className="text-indigo-600 text-sm">
                                        Call 1-305-570-4774
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    );
}
