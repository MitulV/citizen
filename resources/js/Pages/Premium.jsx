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
                <Head>
                    <title>
                        Pass Your Canadian Citizenship Test, Guaranteed -
                        CitizenTestPrep Canada
                    </title>
                    <meta
                        name="description"
                        content="Pass your Canadian Citizenship test the first time or get your money back, guaranteed by using CitizenTestPrep Premium!"
                    />
                </Head>
                <section className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-2 py-4 p-4 lg:px-8 xl:px-16 bg-slate-50">
                    {/* Left Section with Heading and Details */}
                    <div className="lg:col-span-7 flex flex-col space-y-6 p-2">
                        <h1 className="text-4xl sm:text-4xl md:text-3xl lg:text-4xl  xl:text-5xl  px-2 font-extrabold text-center lg:text-left">
                            Pass your Canadian Citizenship test on first try.
                            <span className="text-indigo-600">Guaranteed.</span>
                        </h1>
                        <p className="text-gray-700 text-base sm:text-lg  md:text-base lg:text-lg leading-relaxed text-center">
                            The complete all-in-one toolkit for success: Prepare
                            thoroughly with 700+ exam-like questions, study
                            guides, realistic test simulations, and enjoy the
                            peace of mind with our unwavering Pass Guarantee.
                            Perfect for first-timers, seniors, or newcomers to
                            Canada. Entirely online, from just $39.
                        </p>
                        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                            <button className="bg-primary text-white px-8 py-4 rounded-full text-base lg:text-lg  transition-all">
                                Get all exam-like questions
                            </button>
                            <img
                                src="/images/pass guarantee.png"
                                alt="Pass Guarantee"
                                className="h-12 w-auto mt-8"
                            />
                        </div>
                        <p className="text-gray-700 text-base sm:text-lg lg:text-xl mt-4 text-center px-6">
                            Join the 18,300+ new citizens who passed their tests
                            with our help.
                        </p>
                        <ul className="space-y-2 text-gray-700 text-base sm:text-lg lg:text-xl px-6">
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-indigo-600"
                                />
                                700+ exam-like questions
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-indigo-600"
                                />
                                Advanced test simulations
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-indigo-600"
                                />
                                Pass Guarantee or it's on us
                            </li>
                            <li className="flex items-center">
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2 text-indigo-600"
                                />
                                Tailored study plan
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
                        <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center px-6 ">
                            Why busy learners love CitizenTestPrep Premium
                        </h3>
                        <div className="text-gray-700 text-lg flex flex-col lg:flex-row items-center lg:space-x-4">
                            <p className="text-center  text-lg lg:text-lg lg:text-left mb-4">
                                Our customers rate us{" "}
                                <span className="font-extrabold">
                                    Excellent
                                </span>
                            </p>
                            <div className="flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FontAwesomeIcon
                                        key={i}
                                        icon={faStar}
                                        className="text-yellow-400 mx-1"
                                    />
                                ))}
                            </div>
                            <p className="text-center lg:text-left text-lg lg:text-lg mt-4">
                                Rated 5 out of 5 based on over 200+ reviews.
                            </p>
                        </div>

                        {/* Responsive Testimonials */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {/* Testimonial 1 */}
                            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold mb-2">
                                        “Passed on my first attempt”
                                    </h2>
                                    <p className="text-gray-500 text-lg">
                                        I failed my Canadian citizenship test
                                        initially. Then I found CitizenTestPrep.
                                        The platform helped me pass the exam
                                        with confidence.
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src="/images/review 3.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <hr className="border-1 border-gray-200  mb-3" />

                                        <h3 className="text-gray-700 font-bold">
                                            Jillian McAllister
                                        </h3>
                                        <p className="text-gray-500">
                                            British Columbia
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 2 */}
                            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">
                                        “Exactly What I Needed”
                                    </h2>
                                    <p className="text-gray-500 text-base">
                                        If you want to prepare for the Canadian
                                        Citizenship test, this platform has
                                        everything you need, especially the
                                        chapter-wise practice tests.
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src="/images/review 2.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-4"
                                    />
                                    <div>
                                        <hr className="border-1 w-full border-gray-200  mb-3" />
                                        <h3 className="text-gray-700 font-bold">
                                            Marcus Tremblay
                                        </h3>
                                        <p className="text-gray-500">
                                            Nova Scotia
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Testimonial 3 */}
                            <div className="p-6 bg-white rounded-lg shadow-lg flex flex-col justify-between">
                                <div>
                                    <h2 className="text-xl font-bold mb-2">
                                        “Best Resource For The Test”
                                    </h2>
                                    <p className="text-gray-500 text-base">
                                        After failing the test on my first
                                        attempt, I used CitizenTestPrep Premium,
                                        and it was the best resource to pass the
                                        Canadian Citizenship Test.
                                    </p>
                                </div>
                                <div className="flex items-center mt-4">
                                    <img
                                        src="/images/review 1.png"
                                        alt="Profile Picture"
                                        className="w-12 h-12 rounded-full mr-4"
                                    />

                                    <div>
                                        <hr className="border-1 border-gray-200  mb-3" />

                                        <h3 className="text-gray-700 font-bold">
                                            Hitoshi Matsumoto
                                        </h3>
                                        <p className="text-gray-500">
                                            Saskatchewan
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className=" container mx-auto lg:col-span-12 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 xl:px-28">
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
                <section className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 sm:p-2 bg-slate-100 mt-10">
                    {/* Left Section: Text Content */}
                    <div className="lg:col-span-6 flex flex-col space-y-6 p-6 ">
                        <p className="text-indigo-600 text-sm md:text-base lg:text-lg">
                            How it works
                        </p>
                        <h1 className="text-3xl lg:text-3xl xl:text-3xl font-extrabold text-center md:text-left px-md:px-0 lg:px-0">
                            It has never been so easy to pass the Canadian
                            Citizenship test
                        </h1>
                        <p className="text-gray-600 text-lg md:text-lg lg:text-lg xl:text-lg text-center md:text-left">
                            Take the Canadian citizenship test with clarity and
                            stress-free preparation, achieving your dream of
                            becoming Canadian with ease.
                        </p>

                        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            {/* Step 1 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    STEP 1
                                </p>
                                <p className="text-lg md:text-xl lg:text-xl font-bold">
                                    Engaging quizzes
                                </p>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Boost your confidence with quick, 5-minute
                                    quizzes that feel like mini-victories.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    STEP 2
                                </p>
                                <p className="text-lg md:text-xl lg:text-xl font-bold">
                                    Personalized learning
                                </p>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Focus on what matters. Ditch mind-numbing
                                    lectures, learn faster and retain more.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    STEP 3
                                </p>
                                <p className="text-lg md:text-xl lg:text-xl font-bold">
                                    Real-time exam simulator
                                </p>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Our advanced algorithm gauges your passing
                                    chances in real-time.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="p-1">
                                <p className="text-xl sm:text-lg md:text-xl lg:text-2xl text-indigo-600 font-bold">
                                    STEP 4
                                </p>
                                <p className="text-lg md:text-xl lg:text-xl font-bold">
                                    Ace your exam 🎉
                                </p>
                                <p className="text-gray-500 text-base sm:text-base md:text-lg lg:text-lg mt-2">
                                    Feel confident and prepared on exam day,
                                    ready to pass with flying colors.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Section: Image */}
                    <div className="lg:col-span-6 flex justify-center items-center">
                        <div className="p-2 lg:p-4 bg-slate-100 rounded-xl">
                            <img
                                src="/images/result2.jpg"
                                alt="Sample"
                                className="w-96 h-96 rounded-xl "
                            />
                        </div>
                    </div>
                </section>

                <section className="container mx-auto relative flex flex-col items-center py-20 px-4 md:px-10 bg-white ">
                    {/* Image */}
                    <img
                        src="/images/pass guarantee.png"
                        alt="Pass Guarantee Logo"
                        className="w-60 h-28 md:w-96 md:h-40 lg:w-96 lg:h-40 xl:max-w-6xl xl:h-40"
                    />

                    {/* Main Heading */}
                    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-3xl xl:text-4xl text-black font-extrabold  text-center leading-tight mt-10 ">
                        Pass the citizenship test or get your money back
                    </h3>

                    {/* Subheading */}
                    <p className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-indigo-700 font-extrabold mt-2 text-center">
                        Get your money back
                    </p>

                    {/* Paragraph */}
                    <p className="text-gray-600 text-center text-lg md:text-lg lg:text-lg xl:text-xl max-w-2xl px-2 mt-2 md:mt-10">
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

                <section className="container mx-auto px-2 py-8 bg-slate-50 xl:px-32">
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
                                    <div className="p-6 md:p-8 bg-white rounded-2xl shadow-sm flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl sm:text-2xl font-bold mb-2">
                                                “Passed on My First Try!”{" "}
                                                {i + 1}
                                            </h1>
                                            <p className="text-lg text-gray-500">
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
                                                <h2 className="text-lg font-bold text-gray-600">
                                                    Charlotte Morrison {i + 1}
                                                </h2>
                                                <p className="text-lg text-gray-600">
                                                    British Columbia
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>

                    {/* Read All Reviews Button */}
                    <div className="flex justify-center py-4">
                        <button className="text-black px-8 py-2 border-primary border-2 rounded-full md:block text-center mb-20">
                            Read all reviews
                        </button>
                    </div>
                </section>

                <section className="container mx-auto px-4 md:px-10 py-10 bg-indigo-600 xl:px-32 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute bottom-0 left-0 h-20 w-10 bg-orange-400 rounded-r-full z-20 overflow-hidden hidden sm:block"></div>
                    <div className="absolute top-0 right-0 h-20 w-10 bg-amber-400 rounded-l-full z-10 overflow-hidden hidden sm:block"></div>

                    {/* Subheading */}
                    <p className="text-xs sm:text-sm md:text-base text-white mb-6 text-center mt-10">
                        A FASTER, SMARTER WAY TO STUDY
                    </p>

                    {/* Main Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 text-center text-white hidden lg:block md:px-40">
                        Everything you need to pass your Canadian Citizenship
                        Test
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
                        <div className="flex flex-col justify-center space-y-4 text-xl  font-thin">
                            <h1 className="text-white mb-4 text-justify md:text-left ">
                                Gain a deeper understanding of the test
                                material. Practice with real-life test
                                questions, including multiple-choice,
                                true-false, and more.
                            </h1>
                            <ul className="space-y-2 text-white ">
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
                            <button className="bg-primary text-white px-4 py-3 w-80   rounded-full shadow-xl font-normal">
                                Unlock all exam-like questions
                            </button>
                        </div>
                    </div>
                </section>

                <section className="container  mx-auto px-4 md:px-10 lg:px-20 py-10 bg-slate-50">
                    <p className="text-center text-indigo-600 mt-8 text-base ">
                        IN-DEPTH LEARNING
                    </p>

                    <h1 className="text-2xl md:text-2xl lg:text-5xl font-extrabold mb-2 text-center mt-2 md:mt-6 lg:mt-2 px-5 md:px-10 lg:px-64">
                        Learn faster with our effective study guide
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Column */}
                        <div className="space-y-6 text-left md:text-left">
                            <div>
                                <h2 className="text-xl md:text-2xl font-bold mb-4">
                                    User-Friendly Interface
                                </h2>
                                <p className="text-gray-500 text-lg mb-10">
                                    Our platform features a user-friendly
                                    interface, making studying intuitive and
                                    accessible for everyone. Easily navigate
                                    study materials, quizzes, and resources on
                                    any device.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold mb-4">
                                    Structured Study Material
                                </h1>
                                <p className="text-gray-500 text-lg mb-10">
                                    The study guide is divided into clearly
                                    defined chapters, each focusing on specific
                                    topics relevant to the Canadian citizenship
                                    test. This structure facilitates targeted
                                    learning and comprehension.
                                </p>
                            </div>
                            <div>
                                <h1 className="text-xl md:text-2xl font-bold mb-4">
                                    Study Anytime, Anywhere
                                </h1>
                                <p className="text-gray-500 text-lg">
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
                                className="w-[627px] h-[500px] rounded-xl"
                            />
                        </div>
                    </div>
                </section>

                <section className="container mx-auto px-4 md:px-10 lg:px-20 py-4 bg-indigo-600 mt-10">
                    <p className="text-center text-xs text-white mt-8">
                        ONE CHAPTER AT A TIME
                    </p>

                    <h1 className="text-2xl md:text-5xl font-bold mb-2 text-center text-white mt-2 md:mt-6 lg:mt-2 px-2 md:px-10 sm:px-60">
                        700+ Practice Questions and Answers to prepare
                    </h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                        {/* Left Column */}

                        <div className="flex justify-center">
                            <img
                                src="/images/practisquestion.png"
                                alt="Image"
                                className="w-[627px] h-[500px] rounded-2xl"
                            />
                        </div>

                        {/* Right Column */}
                        <div className="space-y-6 lg:text-left text-white mb-10 px-2 md:px-10">
                            <div>
                                <p className="text-2xl font-bold  mb-4">
                                    Detailed and Exam-Like Questions
                                </p>
                                <p className="text-white text-lg  md:text-xl md:mb-10 ">
                                    Benefit from dynamic and weighted questions
                                    that cover a range of topics.
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold  mb-4">
                                    Test Simulations
                                </p>
                                <p className="text-white text-xl mb-10">
                                    Participate in test simulations that mimic
                                    the real Canadian citizenship test to
                                    understand the exam format.
                                </p>
                            </div>
                            <div>
                                <p className="text-2xl font-bold  mb-4">
                                    Flashcards
                                </p>
                                <p className="text-white    text-xl mb-5 md:mb-32">
                                    Use flashcards to reinforce key concepts and
                                    information while studying.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto px-4  py-8 bg-slate-50 hidden sm:block">
                    <p className="text-sm text-indigo-600 mb-4 mt-10 text-center">
                        IMPORTANT TOOLS
                    </p>

                    <h3 className="text-5xl font-extrabold mb-6 text-center">
                        Additional tools and resources
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
                        {/* Column 1 */}
                        <div className="rounded-lg p-6 flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">
                                    Important Dates
                                </h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    See the big picture by scrolling through our
                                    extensive
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
                                <h2 className="text-2xl font-bold mb-4">
                                    Important People
                                </h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    View a detailed list of all the important
                                    people in Canada’s vibrant history and
                                    cultural identity.
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
                                <h2 className="text-2xl font-bold mb-4">
                                    Interactive Regional Map
                                </h2>
                                <p className="text-gray-600 text-lg mb-8">
                                    Learn about the different regions,
                                    provinces/territories and more in Canada,
                                    with a visual Interactive map.
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
                <section className="container mx-auto px-4 md:px-10 lg:px-20 mt-20">
                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-6 text-center mt-10">
                        Get started today and ace the test
                    </h1>

                    {/* Subheading */}
                    <p className="text-lg text-zinc-500 mb-8 text-center">
                        Begin your Canadian citizenship journey with confidence.
                        Sign up now <br /> for instant access to our premium
                        study resources.
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
                    <button className="bg-indigo-600 text-white text-xs sm:text-sm md:text-base py-2 px-4 w-full sm:w-48 rounded-lg mx-auto block mt-4">
                        Recommended
                    </button>

                    {/* Plans Section */}
                    <div className="flex flex-col md:flex-row mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto">
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
                                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 mt-2 sm:mt-2">
                                        3-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-base sm:text-lg mb-4">
                                        When every day counts, get maximum
                                        knowledge in three months.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-3xl">
                                            $19.99
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-lg">
                                            Just $0.6/day
                                        </p>
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-primary text-white py-2 sm:py-3 w-full rounded-full mt-4 text-base sm:text-lg"
                                    >
                                        Get instant access
                                    </button>
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "Access to over 700+ test questions",
                                            "Practice tests for each chapter",
                                            "Unlimited exam simulators",
                                            "Personalized study guides",
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
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        More Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "500+ Flashcards for every chapter",
                                            "Complete list of significant dates",
                                            "Directory of important people",
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
                                <div className="bg-white border-2 border-indigo-600 rounded-3xl p-6 sm:p-8 shadow-xl flex-1 flex flex-col">
                                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 mt-2">
                                        6-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-base sm:text-lg mb-4">
                                        When diving deep matters. A complete
                                        package to ace the exam.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-3xl">
                                            $29.99
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-lg">
                                            Just $1/day
                                        </p>
                                    </div>
                                    <button className="bg-primary text-white py-2 sm:py-3 w-full rounded-full mt-4 text-base sm:text-lg">
                                        Get instant access
                                    </button>
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "Access to over 700+ test questions",
                                            "Practice tests for each chapter",
                                            "Unlimited exam simulators",
                                            "Personalized study guides",
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
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        More Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "500+ Flashcards for every chapter",
                                            "Complete list of significant dates",
                                            "Directory of important people",
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
                                    <h2 className="text-2xl sm:text-3xl font-extrabold mb-2 mt-2">
                                        12-Month Exam Prep
                                    </h2>
                                    <p className="text-gray-600 text-base sm:text-lg mb-4">
                                        When persistence pays off, get a
                                        comprehensive year-long package.
                                    </p>
                                    <div className="flex justify-between">
                                        <p className="font-bold text-xl sm:text-3xl">
                                            $49.99
                                        </p>
                                        <p className="text-gray-600 text-xs sm:text-lg">
                                            Just $0.14/day
                                        </p>
                                    </div>
                                    <button className="bg-primary text-white py-2 sm:py-3 w-full rounded-full mt-4 text-base sm:text-lg">
                                        Get instant access
                                    </button>
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "Access to over 700+ test questions",
                                            "Practice tests for each chapter",
                                            "Unlimited exam simulators",
                                            "Personalized study guides",
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
                                    <p className="text-lg sm:text-xl text-zinc-600 mt-4">
                                        More Features
                                    </p>
                                    <ul className="space-y-2 text-zinc-600 text-sm sm:text-lg mt-2">
                                        {[
                                            "500+ Flashcards for every chapter",
                                            "Complete list of significant dates",
                                            "Directory of important people",
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
                                        className="text-primary"
                                    />
                                    <span className="text-indigo-600 text-sm">
                                        Chat With Us
                                    </span>
                                </div>
                                {/* Envelope Option */}
                                <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        className="text-primary"
                                    />
                                    <span className="text-indigo-600 text-sm">
                                        Email
                                    </span>
                                </div>
                                {/* Phone Option */}
                                <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                    <FontAwesomeIcon
                                        icon={faPhone}
                                        className="text-primary"
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
