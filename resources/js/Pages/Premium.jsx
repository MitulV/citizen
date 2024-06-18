import React from "react";
import { Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck,
    faStar,
    faEnvelope,
    faPhone,
    faMessage,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import GuestLayout from '@/Layouts/GuestLayout';

export default function Premium() {
    return (
        <>
            <GuestLayout>
                <Head title="Premium" />
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 md:p-10 bg-slate-50">
                {/* Left Column */}
                <div className="lg:col-span-6 flex flex-col space-y-4 p-6 md:p-10">
                    <h1 className="text-xl sm:text-3xl lg:text-6xl font-bold">
                        Pass your Canadian Citizenship test in <br /> first try.
                        <span className="text-indigo-600"> Guaranteed.</span>
                    </h1>
                    <p className="text-gray-600">
                        Your all-in-one toolkit for success: Prepare thoroughly
                        with 700+ test questions, topic-based quizzes, realistic
                        test simulations, study quizzes, and more.
                    </p>
                    <div className="flex flex-col md:flex-row items-center md:items-start mt-4">
                        <button className="bg-primary text-white px-4 py-2 rounded-full mb-4 md:mr-4 md:mb-0 md:px-6 md:py-3">
                            Get all exam-like questions
                        </button>

                        <div>
                            <img
                                src="/images/pass guarantee.png"
                                alt="Logo"
                                className="h-10 w-auto ml-0 md:ml-4"
                                style={{ width: "80px", height: "auto" }}
                            />
                        </div>
                    </div>
                    <p className="text-gray-600 mt-4">
                        Join the 18,300+ new citizens who've passed their tests
                        with our help.
                    </p>
                    <ul className="space-y-2 text-gray-600">
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            700+ similar to real exam questions
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Advanced simulation test
                        </li>
                        <li className="flex items-center">
                            <FontAwesomeIcon
                                icon={faCheck}
                                className="mr-2 text-gray-600"
                            />
                            Pass Guarantee: pass, or it's on us.
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

                <div className="lg:col-span-6 flex justify-center items-center rounded-xl p-6 md:p-10">
                    <img
                        src="/images/ea59b0c12c13b0daf792e11ef62864a7.png"
                        alt="Placeholder"
                        className="w-full md:max-w-md h-auto"
                    />
                </div>

                {/* Additional Content Below Columns */}
                <div className="lg:col-span-12 flex flex-col items-center sm:justify-between">
                    <h1 className="text-4xl font-bold mt-4 text-center lg:text-left ">
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
                        <span>
                            Rated 5 out of 5 based on over 200+ reviews.
                        </span>
                    </div>

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
                                            test initially. I was shocked
                                            because I had read the book and
                                            lived in Canada for 8 years. It was
                                            very embarrassing. Then I found
                                            CitizenTestPrep. The platform helped
                                            me a lot to pass the exam.
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
                                        <div className="flex ml-auto space-x-1">
                                            {/* Font Awesome stars */}
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
                                            Canadian Citizenship test, this is
                                            the place to prepare. The
                                            chapter-wise practice tests were
                                            exactly what I needed to understand
                                            each section thoroughly.
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
                                        <div className="flex ml-auto space-x-1">
                                            {/* Font Awesome stars */}
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
                                            I failed the test in my first
                                            attempt. I was looking for an online
                                            platform to help me out.
                                            CitizenTestPrep premium is without a
                                            doubt the best resource for the
                                            Canadian Citizenship Test
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
                                        <div className="flex ml-auto space-x-1">
                                            {/* Font Awesome stars */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:col-span-12 flex flex-col items-center justify-center px-6 md:px-16 lg:px-32 xl:px-64">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center">
                    Lively and innovative method of test preparation!
                </h1>
                <p className="text-gray-600 font-inter text-center text-base lg:text-lg max-h-20 md:max-h-24 lg:max-h-32 overflow-hidden">
                    We offer valuable and useful resources to help people
                    prepare for the Canadian citizenship test. Our comprehensive
                    platform provides an organized way to prepare thoroughly.
                    You will gain a better understanding of Canadian values and
                    principles. Familiarize yourself with the question format
                    and content of the real exam.
                </p>
                <img
                    src="/images/mobile chapt.png"
                    alt="Your Photo"
                    className="w-full max-w-md rounded-lg shadow-md mb-4"
                />
                <p className="text-gray-600 font-inter text-center text-base lg:text-lg">
                    Get an effective pathway to success. Whether it's your first
                    time or not, you will be benefited. Our user-friendly
                    interface makes it easy to study at your own pace. Join
                    thousands of satisfied users who have aced their citizenship
                    tests with our proven study resources.
                </p>
            </section>
            <section className="min-h-screen grid grid-cols-1 lg:grid-cols-12 gap-10 p-4 md:p-10 bg-slate-50 mt-10">
                {/* Left Column */}
                <div className="lg:col-span-6 flex flex-col space-y-4 p-6 md:p-10">
                    <p className="text-indigo-600 text-sm">How it works</p>

                    <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                        It has never been so easy to pass the Canadian
                        Citizenship test
                    </h1>
                    <p className="text-gray-600">
                        Start driving sooner with our clear and stress-free
                        approach..
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 w-full">
                        <div className="p-1">
                            <h1 className="text-base text-indigo-600 font-semibold">
                                STEP 1
                            </h1>
                            <h1 className="text-base font-semibold">
                                Engaging quizzes
                            </h1>
                            <p className="text-gray-500 text-sm">
                                Boost your confidence with quick, 5-minute
                                quizzes that feel like mini-victories.
                            </p>
                        </div>
                        <div className="p-1">
                            <h1 className="text-base text-indigo-600 font-semibold">
                                STEP 2
                            </h1>
                            <h1 className="text-base font-semibold">
                                Personalized learning
                            </h1>
                            <p className="text-gray-500 text-sm">
                                Focus on what matters. Ditch mind-numbing
                                lectures, learn faster and retain more.
                            </p>
                        </div>
                        <div className="p-1">
                            <h1 className="text-base text-indigo-600 font-semibold">
                                STEP 3
                            </h1>
                            <h1 className="text-base font-semibold">
                                Real-time exam simulator
                            </h1>
                            <p className="text-gray-500 text-sm">
                                Our advanced algorithm gauges your passing
                                chances in real-time.
                            </p>
                        </div>
                        <div className="p-1">
                            <h1 className="text-base text-indigo-600 font-semibold">
                                STEP 4
                            </h1>
                            <h1 className="text-base font-semibold">
                                Ace your exam 🎉
                            </h1>
                            <p className="text-gray-500 text-sm">
                                Feel confident and prepared on exam day, ready
                                to pass with flying colors.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Column */}
                <div className="lg:col-span-6 flex justify-center items-center p-6 md:p-10 bg-slate-50">
                    <div className="p-2 lg:p-4 bg-slate-100 rounded-xl">
                        <img
                            src="/images/result2.jpg"
                            alt="Sample"
                            className="rounded-xl w-60 h-72 lg:w-96 lg:h-96 md:w-72 md:h-72 sm:w-60 sm:h-60"
                        />
                    </div>
                </div>
            </section>
            <section className="relative flex flex-col items-center py-10 px-4 md:px-10 bg-white">
                <img
                    src="/images/pass guarantee.png"
                    alt="Logo"
                    className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-max lg:h-52"
                />
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-black font-bold mt-2 text-center">
                    Pass the citizenship test or get your money back
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-indigo-700 font-bold mt-2 text-center">
                    Get your money back
                </h2>
                <p className="text-gray-600 mt-4 text-center text-xs sm:text-lg md:text-xl lg:text-2xl max-w-2xl">
                    We guarantee your success with our comprehensive study
                    resources. If you diligently use our materials and do not
                    pass the Canadian citizenship test, we will provide a full
                    refund. Join thousands of satisfied users who have
                    successfully prepared with CitizenshipTestPrep Premium.
                </p>
            </section>
            <section className="container-fluid mx-auto px-2 py-8  bg-slate-50">
                <h1 className="text-4xl font-bold mb-8 text-center mt-8">
                    Our users find our questions <br /> very similar to the
                    actual test.
                </h1>
                <div className="flex flex-wrap -mx-4">
                    {Array(6)
                        .fill()
                        .map((_, i) => (
                            <div
                                key={i}
                                className="w-full md:w-1/2 lg:w-1/3 px-4 mb-4"
                            >
                                <div className="p-8 bg-white rounded-2xl flex flex-col justify-between h-full text-black">
                                    <div>
                                        <h1 className="text-xl font-bold mb-2">
                                            “Passed on My First Try!”{i + 1}
                                        </h1>
                                        <p className="text-sm mb-2 text-gray-500">
                                            I struggled to retain information
                                            from the Discover Canada book until
                                            a friend recommended
                                            CitizenshipTestPrep Premium. Their
                                            practice tests and timeline recaps
                                            made a huge difference, and I passed
                                            on my first try! {i + 1}.
                                        </p>
                                    </div>
                                    <div className="border-t-2 border-gray-100 w-[368px] mt-2"></div>

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
                                        <div className="flex ml-auto space-x-1">
                                            {/* Font Awesome stars */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
                <div className="flex justify-center">
                    <button className="text-black px-4 py-2 border-primary border-2 rounded-full hidden md:block text-center">
                        Read all reviews
                    </button>
                </div>
            </section>
            <section className="container-fluid mx-auto px-2 py-4 bg-indigo-600">
                <p className="text-xs text-white mb-6 text-center mt-10">
                    A FASTER, SMARTER WAY TO STUDY
                </p>

                <h1 className="text-4xl font-bold mb-4 text-center text-white hidden md:hidden lg:block">
                    Everything you need to pass your
                    <br />
                    Canadian Citizenship Test
                </h1>

                <h1 className="text-4xl font-bold mb-4 text-center text-white lg:hidden sm:block">
                    Pass The Citizenship Test
                </h1>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Left Column with Image (Hidden on Smaller Screens) */}
                    <div className="hidden lg:flex justify-center items-center">
                        <img
                            src="/images/sample-image.png"
                            alt="Sample"
                            className="w-[809.53px] h-[488px] gap-0 rounded-b-lg opacity-0"
                        />
                    </div>

                    {/* Right Column with Text and Button */}
                    <div className="flex flex-col justify-center space-y-4 text-sm">
                        <h1 className="text-sm mb-4 text-white mr-12 sm:text-justify md:text-left">
                            Gain a deeper understanding of the test material.
                            Practice with real-life test questions, including
                            multiple-choice, true-false, and more.
                        </h1>
                        <ul className="space-y-2 text-white font-thin">
                            {[
                                "Customized chapter-wise practice tests",
                                "Access 700+ test questions",
                                "Unlimited exam simulation ",
                                "Advanced AI delivers a performance review ",
                                "Flashcards for each chapter ",
                                "Profiles notable figures ",
                                "Providence-specific government queries ",
                            ].map((text, index) => (
                                <li key={index} className="flex items-center">
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className="mr-2 text-white"
                                    />
                                    {text}
                                </li>
                            ))}
                        </ul>
                        <button className="bg-primary text-white px-4 py-2  w-60 rounded-full mt-6  ">
                            Unlock all exam-like questions
                        </button>
                    </div>
                </div>
            </section>
            <section className="container-fluid mx-auto px-4 md:px-10 lg:px-20 py-4 bg-slate-50">
                <p className="text-center text-indigo-600 mt-8">
                    In-depth learning
                </p>

                <h1 className="text-4xl font-bold mb-2 text-center mt-2 md:mt-6 lg:mt-2">
                    Learn faster with our effective
                    <br />
                    study guide
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
                    {/* Left Column */}
                    <div className="space-y-6 lg:text-left">
                        <div>
                            <h2 className="text-xl font-bold mb-4">
                                User-Friendly Interface
                            </h2>
                            <p className="text-gray-500 text-sm">
                                Our platform features a user-friendly interface,
                                making studying intuitive and accessible for
                                everyone. Easily navigate study materials,
                                quizzes, and resources on any device.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold mb-4">
                                Structured Study Material
                            </h1>
                            <p className="text-gray-600 text-sm">
                                The study guide is divided into clearly defined
                                chapters, each focusing on specific topics
                                relevant to the Canadian citizenship test. This
                                structure facilitates targeted learning and
                                comprehension.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold mb-4">
                                Study Anytime, Anywhere
                            </h1>
                            <p className="text-gray-600 text-sm">
                                Access our study guide anytime, anywhere. Study
                                during breaks, commutes, or at home with our
                                accessible resources.
                            </p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex justify-center">
                        <img
                            src="/images/image.png"
                            alt="Image"
                            className="w-full lg:h-96 rounded-xl md:h-auto"
                        />
                    </div>
                </div>
            </section>
            <section className="container-fluid mx-auto px-4 md:px-10 lg:px-20 py-4 bg-indigo-500">
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
                                Benefit from dynamic and weighted questions that
                                cover a range of topics.
                            </p>
                        </div>
                        <div>
                            <h1 className="text-lg font-monobold  mb-4">
                                Test Simulations
                            </h1>
                            <p className="text-white text-sm">
                                Participate in test simulations that mimic the
                                real Canadian citizenship test to understand the
                                exam format.
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
            <section className="container-fluid mx-auto px-4 md:px-10 lg:px-20 py-8 bg-slate-50 hidden sm:block">
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
                                View a detailed list of all the important people
                                in Canada’s vibrant history and cultural
                                identity.
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
                                provinces/territories and more in Canada, with a
                                visual Interactive map.
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
            <section className="container-fluid mx-auto px-4 md:px-10 lg:px-20 py-8">
                <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center mt-10">
                    Get started today and ace the test
                </h1>

                <p className="text-xs sm:text-sm text-zinc-600 mb-8 text-center">
                    Begin your Canadian citizenship journey with confidence.
                    Sign up now
                    <br /> for instant access to our premium study resources.
                </p>
                <div className="flex justify-center">
                    <img
                        src="/images/pass guarantee.png"
                        alt="Logo"
                        className="h-24 sm:h-32 w-52 sm:w-72 ml-0 md:ml-4"
                    />{" "}
                </div>
                <button className="bg-indigo-600 text-white text-xs py-2 px-2 w-24 rounded-lg mx-auto block mt-4">
                    Recommended
                </button>
                <div className="flex flex-col md:flex-row mt-2 lg:mx-40">
                    {/* Three columns */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 mx-4  sm:mx-10">
                        {/* Column 1 */}
                        <div className="bg-white border-2 border-blue-50 rounded-3xl p-4 sm:p-6 mx-2 shadow-xl">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                3-Month Exam Prep
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                When every day counts, get maximum knowledge in
                                30-days.
                            </p>
                            <div className="flex justify-between mt-2">
                                <p className=" font-bold text-xl sm:text-2xl">
                                    $19.99
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Just $0.6/day
                                </p>
                            </div>
                            <button className="bg-primary text-white py-2 w-full sm:w-60 rounded-full mt-2">
                                Get instant access
                            </button>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Features
                            </p>
                            <ul className="space-y-2 text-zinc-600 text-xs ">
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
                                            className="mr-2 "
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Features
                            </p>
                            <ul className="space-y-2 text-zinc-600 text-xs ">
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
                                            className="mr-2 "
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Pass Guarantee (100% money back)
                            </p>
                        </div>

                        {/* Column 2 */}
                        <div className="bg-white border-4 border-indigo-600 rounded-3xl p-4 sm:p-6 mx-2 shadow-2xl">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                3-Month Exam Prep
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                When every day counts, get maximum knowledge in
                                30-days.
                            </p>
                            <div className="flex justify-between mt-2">
                                <p className=" font-bold text-xl sm:text-2xl">
                                    $19.99
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Just $0.6/day
                                </p>
                            </div>
                            <button className="bg-primary text-white py-2 w-full sm:w-60 rounded-full mt-2">
                                Button
                            </button>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Features
                            </p>
                            <ul className="space-y-2 text-zinc-600 text-xs ">
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
                                            className="mr-2 "
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Features
                            </p>
                            <ul className="space-y-2 text-zinc-600 text-xs ">
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
                                            className="mr-2 "
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Pass Guarantee (100% money back)
                            </p>
                        </div>

                        {/* Column 3 */}
                        <div className="bg-white border-2 border-blue-50 rounded-3xl p-4 sm:p-6 mx-2 shadow-xl">
                            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
                                3-Month Exam Prep
                            </h2>
                            <p className="text-gray-600 text-xs sm:text-sm">
                                When every day counts, get maximum knowledge in
                                30-days.
                            </p>
                            <div className="flex justify-between mt-2">
                                <p className=" font-bold text-xl sm:text-2xl">
                                    $19.99
                                </p>
                                <p className="text-gray-600 text-xs sm:text-sm">
                                    Just $0.6/day
                                </p>
                            </div>
                            <button className="bg-primary text-white py-2 w-full sm:w-72 rounded-full mt-2">
                                Button
                            </button>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Features
                            </p>
                            <ul className="space-y-2 text-zinc-600 text-xs ">
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
                                            className="mr-2 "
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Features
                            </p>
                            <ul className="space-y-2 text-zinc-600 text-xs ">
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
                                            className="mr-2 "
                                        />
                                        {text}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs sm:text-sm mb-2 mt-2 text-zinc-600 text-left">
                                Pass Guarantee (100% money back)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="container-fluid mx-auto px-4 md:px-10 lg:px-20 py-8 bg-slate-100">
                <p className="text-sm text-indigo-600 mb-4 mt-8 text-center">
                    Common FAQs
                </p>
                <h1 className="text-4xl font-bold mb-6 text-center">
                    Your questions, answered
                </h1>
                <div className="container mx-auto">
                    <div className="max-w-[600px] mx-auto">
                        {[...Array(4)].map((_, index) => (
                            <form key={index} className="text-black mb-4">
                                <select
                                    id={`countries-${index}`}
                                    className="w-full border p-4 border-gray-100 text-black text-sm rounded-3xl font-bold"
                                >
                                    <option>Which plan is best for me?</option>
                                    <option>United States</option>
                                    <option>Canada</option>
                                    <option>France</option>
                                    <option>Germany</option>
                                </select>
                            </form>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto mt-8">
                    <div className="max-w-[1000px] mx-auto p-4 flex flex-col md:flex-row items-start md:items-center">
                        <p className="text-gray-900 mb-4 md:mb-0 md:mr-4 text-center md:text-left">
                            Have more questions or want to chat about plan
                            selection?
                        </p>
                        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-center">
                            <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                <FontAwesomeIcon
                                    icon={faMessage}
                                    className="text-primary"
                                />
                                <span className="text-primary">
                                    Send us an email
                                </span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                <FontAwesomeIcon
                                    icon={faEnvelope}
                                    className="text-primary"
                                />
                                <span className="text-primary">Email</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white p-2 rounded-lg border border-gray-300">
                                <FontAwesomeIcon
                                    icon={faPhone}
                                    className="text-primary"
                                />
                                <span className="text-primary">
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
