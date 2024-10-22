import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faPenToSquare,
    faQuestion,
    faCircleCheck,
    faArrowTrendUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

import GuestLayout from "@/Layouts/GuestLayout";
import HomeChapterCard from "@/Components/HomeChapterCard";

export default function HomePage({ auth, chapters }) {
    const [showAll, setShowAll] = useState(false);

    // State to track screen size for mobile behavior
    const [isMobile, setIsMobile] = useState(false);

    // Function to toggle the view
    const toggleShowAll = () => {
        setShowAll((prev) => !prev);
    };

    // Detect screen size for mobile-only behavior
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Mobile is <640px (sm breakpoint)
        };

        // Set initial screen size and add resize event listener
        handleResize();
        window.addEventListener("resize", handleResize);

        // Clean up event listener on unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <>
            <GuestLayout user={auth.user}>
                <Head>
                    <title>
                        CitizenTestPrep - Canadian Citizenship Practise Test
                        Online
                    </title>
                    <meta
                        name="description"
                        content="Prepare for the Canadian Citizenship Test with our comprehensive resources! Access 800+ practice questions, flashcards, study guides, and more."
                    />
                </Head>
                <div className="container mx-auto px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <div className=" py-8 sm:py-16 flex flex-col items-center">
                        <div className="container mx-auto px-4">
                            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-wide text-center  px-2 sm:px-8 lg:px-20 xl:px-32">
                                Achieve Success in 2024 Canadian Citizenship
                                Test on Your
                                <span className="text-secondary ml-2">
                                    First Attempt
                                </span>
                            </h1>
                        </div>
                        <div className="container mx-auto  mt-4 sm:mt-8 px-6 md:px-28 lg:px-32   xl:px-44">
                            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500 ">
                                Get access to 700+ test questions, study guides,
                                chapter-based quizzes, realistic test
                                simulations, flashcards and more.
                            </p>
                        </div>
                        <div className="container mx-auto px-4 mt-4 sm:mt-8 flex justify-center">
                            <Link
                                as="button"
                                className="bg-primary text-white text-lg md:text-xl xl:text-2xl font-bold px-8 md:px-12 xl:px-20 py-3 md:py-4 xl:py-5 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                                href={route("testInfoPage", {
                                    chapter_id: 12,
                                    auth,
                                })}
                            >
                                Take free practice tests
                            </Link>
                        </div>
                        <div className="container mx-auto px-2 mt-4 sm:mt-8">
                            <p className="text-lg sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500">
                                or pass the first time, guaranteed with
                                <span className="text-primary ml-1 underline underline-offset-4">
                                    <Link href={route("premiumPage")}>
                                        Premium
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <section className="container mx-auto  hidden md:block ">
                    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4 mx-16 ">
                        {/* Card 1 */}
                        <div className="relative w-full   ">
                            <div className="absolute  lg:left-0 xl:left-32 w-full h-60  sm:w-48 sm:h-40  md:w-36 md:h-60  lg:w-44 lg:h-52 xl:w-48 xl:h-64 bg-amber-300 rounded-t-full shadow-sm"></div>
                            <img
                                src="/images/person 2.png"
                                alt="Image 1"
                                className="relative    lg:left-0 xl:left-32 object-cover w-full sm:w-48 sm:h-full   md:w-36 md:h-72  lg:w-44 lg:h-96 xl:w-48 rounded-b-full"
                            />
                            <div className="absolute w-28 xl:left-20 top-56 left-[-50%] lg:left-[-25%] z-60 p-2 rounded-xl shadow-lg bg-purple-300 transform -translate-y-1/2">
                                <p className="text-xl xl:text-2xl font-extrabold text-center text-black">
                                    2024
                                </p>
                                <p className="text-xs sm:text-sm text-center font-bold">
                                    Updated
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-full justify-center transform hover:-translate-y-1 transition duration-500 ease-out">
                            <img
                                src="/images/ctp premium.png"
                                alt="Image 2"
                                className="w-full md:h-full  shadow-sm  xl:ml-14 "
                            />
                            <div className="absolute w-28 md:top-60 lg:top-80 xl:top-96  right-[-50%] lg:right-[-25%]  p-2 rounded-xl shadow-lg bg-amber-400">
                                <p className="text-xl sm:text-2xl lg:text-3xl font-bold text-left text-black">
                                    2391
                                </p>
                                <p className="text-xs sm:text-sm font-semibold">
                                    Test completed today
                                </p>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="relative w-full justify-center transform hover:-translate-y-1 transition duration-500 ease-out ">
                            <div className="absolute  lg:left-3 xl:left-24 w-full h-60  sm:w-48 sm:h-40  md:w-36 md:h-60  lg:w-44 lg:h-52 xl:w-48 xl:h-64 bg-cyan-500 rounded-t-full shadow-sm"></div>
                            <img
                                src="/images/person 1.png"
                                alt="Image 3"
                                className="relative    lg:left-3 xl:left-24 object-cover w-full sm:w-48 sm:h-full   md:w-36 md:h-72  lg:w-44 lg:h-96 xl:w-48 rounded-b-full"
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="relative w-full justify-center transform hover:-translate-y-1 transition duration-500 ease-out ">
                            <div className="absolute  lg:left-5 xl:ml-0 w-full h-60  sm:w-48 sm:h-40  md:w-36 md:h-60  lg:w-44 lg:h-52 xl:w-48 xl:h-48 bg-orange-300 rounded-t-full shadow-sm"></div>
                            <img
                                src="/images/person 3.png"
                                alt="Image 4"
                                className="relative    lg:left-4 xl:ml-0 object-cover w-full sm:w-48 sm:h-full   md:w-36 md:h-72  lg:w-44 lg:h-96 xl:w-48 rounded-b-full"
                            />
                            <div className="absolute bottom-20 md:bottom-40 left-0 md:left-40 z-40 p-2 rounded-xl shadow-lg bg-green-300">
                                <p className="text-xl sm:text-2xl font-bold text-center text-black">
                                    95.2%
                                </p>
                                <p className="text-xs sm:text-sm font-semibold text-center">
                                    Industry-leading <br /> pass rate
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid px-8 block md:hidden   ">
                    <div className="flex flex-wrap -mx-9">
                        {/* Mobile Card 1 */}
                        <div className="w-1/3 px-2">
                            <div className="relative flex justify-center">
                                <div className="absolute top-0 w-24 h-32 bg-amber-300 rounded-t-full"></div>
                                <img
                                    src="/images/person 2.png"
                                    alt="Image 1"
                                    className="relative object-cover w-24 h-48 rounded-b-full"
                                />
                            </div>
                        </div>

                        {/* Mobile Card 2 */}
                        <div className="w-1/3 px-2">
                            <div className="relative w-full h-64 flex justify-center">
                                <div className="absolute top-0 w-24 h-32 bg-indigo-300 rounded-t-full"></div>
                                <img
                                    src="/images/person 1.png"
                                    alt="Image 2"
                                    className="relative object-cover w-24 h-48 rounded-b-full"
                                />
                            </div>
                        </div>

                        {/* Mobile Card 3 */}
                        <div className="w-1/3 px-2">
                            <div className="relative w-full h-64 flex justify-center">
                                <div className="absolute top-0 w-24 h-32 bg-orange-300 rounded-t-full"></div>
                                <img
                                    src="/images/person 3.png"
                                    alt="Image 3"
                                    className="relative object-cover w-24 h-48 rounded-b-full"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-50 lg:py-20 sm:py-0 ">
                    <div className="container mx-auto px-6 md:px-16 lg:px-8   xl:px-44 ">
                        <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600 xl:mt-20 md:mt-10 mb-3">
                            CHAPTER-WISE PRACTICE TESTS
                        </p>

                        <h2 className=" text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl px-10 font-bold text-center ">
                            Start your 2024 Canadian citizenship test practice
                            with us!
                        </h2>
                    </div>
                </section>

                <section className="container mx-auto  flex flex-col md:flex-row bg-slate-50 px-6 md:px-16 lg:px-8  pt-10 xl:px-44">
                    <div className="md:w-1/2 flex items-center justify-start">
                        <p className="font-bold text-xl sm:text-xl md:text-2xl">
                            Step 1
                        </p>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-start md:justify-end lg:justify-end ">
                        <p className="text-xs md:text-base font-normal text-gray-500  mb-4">
                            See how much you don’t know
                        </p>
                    </div>
                </section>

                <section className="bg-slate-50 px-4 sm:px-6 md:px-8 lg:px-12  ">
                    {chapters
                        .filter((chapter) => chapter.step === 1)
                        .map((chapter, index) => (
                            <Link
                                key={index}
                                href={route("testInfoPage", {
                                    chapter_id: chapter.id,
                                    auth,
                                })}
                            >
                                <div className="container mx-auto flex flex-col md:flex-row  xl:px-44">
                                    {/* Image Section */}
                                    <div className="w-full md:w-2/3 lg:w-8/12">
                                        <img
                                            src="/images/chap 1.png"
                                            alt="Photos"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Text Section */}
                                    <div className="w-full md:w-1/3 lg:w-4/12 px-4 py-4 bg-white">
                                        <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-wide text-left mb-2">
                                            {chapter.name}
                                        </h3>
                                        <p className="text-sm sm:text-base font-normal leading-6 tracking-tight text-gray-500 mb-4">
                                            {chapter.description}
                                        </p>

                                        <div className="flex flex-row md:flex-row items-center md:items-start justify-between md:flex-wrap">
                                            <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                                <p className="font-bold text-lg sm:text-xl tracking-wide mb-1">
                                                    {chapter.questions}
                                                </p>
                                                <p className="text-base sm:text-lg font-normal text-gray-500">
                                                    Questions
                                                </p>
                                            </div>
                                            <div className="w-full md:w-1/2">
                                                <p className="font-bold text-lg sm:text-xl tracking-wide mb-1">
                                                    {chapter.mistakes} Mistakes
                                                </p>
                                                <p className="text-base sm:text-lg font-normal text-gray-500">
                                                    Allowed to pass
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </section>

                <section className="container mx-auto  flex flex-col md:flex-row bg-slate-50 px-6 md:px-16 lg:px-8   pt-10 xl:px-44">
                    <div className="md:w-1/2 flex items-center justify-start">
                        <p className="font-bold text-xl sm:text-xl md:text-2xl">
                            Step 2
                        </p>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-start md:justify-end lg:justify-end ">
                        <p className="text-xs md:text-base font-normal text-gray-500  mb-4">
                            Complete all chapter test
                        </p>
                    </div>
                </section>
                <div className="container mx-auto flex justify-center items-center px-6 md:px-16 lg:px-8 xl:px-44 ">
                    <section className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 bg-slate-50">
                        {/* Filter and map chapters, and conditionally show only the first 3 on mobile */}
                        {chapters
                            .filter(
                                (chapter) =>
                                    chapter.step === 2 &&
                                    chapter.id !== 10 &&
                                    chapter.id !== 11
                            )
                            .slice(
                                0,
                                isMobile && !showAll ? 3 : chapters.length
                            ) // Show first 3 on mobile if not "showAll"
                            .map((chapter) => (
                                <Link
                                    href={`/practice-tests/${chapter.id}`}
                                    key={chapter.id}
                                >
                                    <HomeChapterCard
                                        image={chapter.image}
                                        name={chapter.name}
                                        title={chapter.title}
                                        description={chapter.description}
                                        questions={chapter.questions}
                                        mistakes={chapter.mistakes}
                                        auth
                                    />
                                </Link>
                            ))}
                    </section>
                </div>

                {(isMobile && showAll) || !isMobile ? (
                    <div className="container mx-auto flex justify-center items-center py-8 px-6 md:px-16 lg:px-8 xl:px-44">
                        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 bg-slate-50">
                            {chapters
                                .filter(
                                    (chapter) =>
                                        chapter.step === 2 &&
                                        (chapter.id === 10 || chapter.id === 11)
                                )
                                .map((chapter, index) => (
                                    <HomeChapterCard
                                        key={index}
                                        image={chapter.image}
                                        name={chapter.name}
                                        title={chapter.title}
                                        description={chapter.description}
                                        questions={chapter.questions}
                                        mistakes={chapter.mistakes}
                                    />
                                ))}
                        </section>
                    </div>
                ) : null}

                {/* Button to toggle between showing all and showing first 3, only visible on mobile */}
                {isMobile && (
                    <div className="my-10 justify-center bg-slate-50 px-6 md:px-16 lg:px-8  xl:px-44 ">
                        <button
                            className="border w-full text-lg md:text-xl xl:text-xl font-bold border-primary bg-white text-gray-800 px-4 py-2 rounded-full block text-center mx-auto"
                            onClick={toggleShowAll}
                        >
                            {showAll ? "Show Less" : "View all"}
                        </button>
                    </div>
                )}

                <section className="container mx-auto flex flex-col md:flex-row bg-slate-50 px-6 md:px-16 lg:px-8 xl:px-44 ">
                    <div className="md:w-1/2 flex items-center justify-start ">
                        <p className="font-bold text-xl sm:text-xl md:text-2xl">
                            Step 3
                        </p>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-start md:justify-end lg:justify-end ">
                        <p className="text-xs md:text-base font-normal text-gray-500 mb-4 ">
                            Prepare with exam simulator
                        </p>
                    </div>
                </section>
                <section className="container mx-auto bg-slate-50 px-6 md:px-16 lg:px-8 xl:px-44">
                    {chapters
                        .filter((chapter) => chapter.step === 3)
                        .map((chapter, index) => (
                            <div
                                key={index}
                                className="container mx-auto grid grid-cols-12  border border-gray-300 rounded-2xl bg-white"
                            >
                                {/* Image in 8 columns */}
                                <div className="col-span-12 lg:col-span-8">
                                    <img
                                        src="/images/chap 13.png"
                                        alt="Photos"
                                        className="w-full h-full rounded-t-xl"
                                    />
                                </div>

                                {/* Text in 4 columns */}
                                <div className="col-span-12 lg:col-span-4">
                                    <div className="p-4 md:p-6">
                                        <h3 className="text-xl sm:text-2xl lg:text-xl font-bold leading-tight tracking-wide mb-2">
                                            {chapter.name}
                                        </h3>
                                        <p className="text-sm sm:text-base md:text-lg font-normal leading-6 lg:leading-8 tracking-tight text-gray-500 mb-4">
                                            {chapter.description}
                                        </p>

                                        <div className="flex flex-row md:flex-row items-center md:items-start justify-between md:flex-wrap">
                                            <div className="w-full md:w-1/2 mb-4 md:mb-0 pr-0 md:pr-4">
                                                <div>
                                                    <p className="text-lg sm:text-xl lg:text-xl font-bold tracking-wide mb-1 mt-2 ">
                                                        {chapter.questions}
                                                    </p>
                                                    <p className="text-sm sm:text-lg font-normal text-gray-500">
                                                        Questions
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="w-full md:w-1/2 pr-0 md:pr-4">
                                                <div>
                                                    <p className="text-lg sm:text-xl lg:text-xl font-bold tracking-wide mb-1 ">
                                                        {chapter.mistakes}{" "}
                                                        Mistakes
                                                    </p>
                                                    <p className="text-sm sm:text-lg font-normal text-gray-500">
                                                        Allowed to pass
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                </section>

                <section className="container mx-auto text-center relative  px-6 md:px-16 lg:px-8  xl:px-44">
                    <div className="bg-indigo-600 text-white p-8 md:p-20 mt-20 relative overflow-hidden rounded-2xl">
                        <div>
                            {/* Content for medium and larger screens */}
                            <div className="hidden md:block">
                                <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-white">
                                    SPEED THROUGH TEST PREP
                                </p>
                                <h2 className="text-3xl font-bold mb-4 mt-4">
                                    Offering the simplest way to prepare
                                </h2>
                            </div>

                            {/* Content for small screens */}
                            <div className="block md:hidden text-center">
                                <h3 className="text-xs  mb-2">LEARN FAST</h3>
                                <p className="text-3xl font-bold  text-white">
                                    A simple way to preparation
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 p-4 md:p-10">
                            <div className="text-center p-4 text-white rounded-md">
                                <FontAwesomeIcon
                                    icon={faQuestion}
                                    className="mb-4 text-4xl"
                                />
                                <h3 className="text-lg font-bold mb-2">
                                    850+ Practice Questions
                                </h3>
                                <p>
                                    Access over 700 Canadian citizenship test
                                    practice questions similar to those on the
                                    real exam for effective preparation.
                                </p>
                            </div>
                            <div className="text-center p-4 text-white rounded-md">
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    className="mb-4 text-4xl"
                                />
                                <h3 className="text-lg font-bold mb-2">
                                    Realistic Test Simulations
                                </h3>
                                <p>
                                    Take Citizenship practice tests that mimic
                                    the actual exam format. This will help you
                                    prepare in advance for the main exam.
                                </p>
                            </div>
                            <div className="text-center p-4 text-white rounded-md">
                                <FontAwesomeIcon
                                    icon={faArrowTrendUp}
                                    className="mb-4 text-4xl"
                                />
                                <h3 className="text-lg font-bold mb-2">
                                    Weakness Evaluations
                                </h3>
                                <p>
                                    Benefit from advanced evaluations to
                                    identify areas for improvement. This will
                                    help you target where you need to improve.
                                </p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-4 left-0 h-20 w-10 bg-orange-400 rounded-r-full z-20 overflow-hidden"></div>
                        <div className="absolute top-8 right-0 h-20 w-10 bg-orange-400 rounded-l-full z-10 overflow-hidden"></div>
                        <div className="absolute top-32 left-48 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-amber-400 rounded-full z-10 overflow-hidden hidden sm:block"></div>
                    </div>
                </section>
                <section className="container mx-auto text-black p-16 md:p-20 bg-slate-50 px-6 md:px-16 lg:px-8  xl:px-36  ">
                    <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600 xl:mt-10 md:mt-10 mb-3">
                        LEARN FAST
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Questions designed to feel just like the real test
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <img
                                src="/images/up.png"
                                alt="Image Description"
                                className="w-72 h-96 md:w-3/4 lg:w-80 rounded-lg"
                            />
                        </div>

                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Current and accurate
                                </h3>
                                <p className="text-gray-500 text-base">
                                    Our practice tests are based on the latest
                                    version of the Discover Canada booklet,
                                    ensuring they're up-to-date. Whenever the
                                    official study guide is updated, we promptly
                                    revise our questions too. You'll never
                                    encounter outdated test information.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Chapter-based quizzes
                                </h3>
                                <p className="text-gray-500 text-base">
                                    Test yourself with quizzes designed for each
                                    chapter based on the official Discover
                                    Canada book. Dive into chapter-specific and
                                    topic-specific quizzes for thorough
                                    practice.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Just like the real Canadian citizenship test
                                </h3>
                                <p className="text-gray-500 text-base">
                                    Our practice tests mirror the real Canadian
                                    citizenship test. We use questions straight
                                    from the official handbook, so what you
                                    practice is what you'll likely see on the
                                    actual test.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto relative  px-0 md:px-0 lg:px-0 xl:px-44">
                    <div className="bg-indigo-600 text-white p-8 md:p-20 relative overflow-hidden rounded-2xl">
                        <div className="text-center">
                            <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-white mb-2">
                                YOUR ULTIMATE ALL-IN-ONE RESOURCE
                            </p>

                            <h2 className="text-3xl md:text-4xl font-bold mb-10">
                                Pass the Canadian citizenship test with ease
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div>
                                <div className="mb-8">
                                    <h3 className="text-lg md:text-xl font-bold mb-2">
                                        Simplify your preparation
                                    </h3>
                                    <p className="text-base">
                                        We help ensure effective preparation
                                        with a structured study plan. You will
                                        receive detailed, easy-to-access, and
                                        organized chapter-wise quizzes.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-lg md:text-xl font-bold mb-2">
                                        Learn from your mistakes
                                    </h3>
                                    <p className="text-base">
                                        Taking unlimited test simulations and
                                        topic-based quizzes helps you find your
                                        weak spots. This lets you concentrate on
                                        important study areas without wasting
                                        time.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h3 className="text-lg md:text-xl font-bold mb-2">
                                        Review your toughest questions
                                    </h3>
                                    <p className="text-base">
                                        Go over citizenship test practice
                                        questions that were tough or often
                                        answered wrong. This focused review
                                        helps strengthen your understanding and
                                        confidence in those areas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between items-center md:items-end sm:px-2 md:px-16 lg:px-32">
                                <div className="mb-8 w-full">
                                    <img
                                        src="/images/ctp premium.png"
                                        alt="Image Description"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-0 left-0 h-20 w-10 bg-amber-400 rounded-r-full z-20 overflow-hidden"></div>
                        <div className="absolute top-0 right-0 h-20 w-10 bg-orange-400 rounded-l-full z-10 overflow-hidden"></div>
                    </div>
                </section>
                <section className="container mx-auto  py-16 bg-slate-50 px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Offering a perfect learning environment
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
                        <div className="text-center p-8 bg-indigo-600 rounded-xl shadow-md">
                            <FontAwesomeIcon
                                icon={faQuestion}
                                className="text-3xl text-white mb-4"
                            />
                            <h3 className="text-lg font-bold mb-2 text-white">
                                850+ Questions
                            </h3>
                            <p className="text-base text-white text-center">
                                Access more than 700+ Canadian citizenship test
                                practice questions, similar to those on the real
                                exam, for effective preparation.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <FontAwesomeIcon
                                icon={faPenToSquare}
                                className="text-3xl text-white mb-4"
                            />{" "}
                            <h3 className="text-lg font-bold mb-2 text-white">
                                Real-Life Test Simulations
                            </h3>
                            <p className="text-base text-white text-center">
                                Take citizenship practice tests that mimic the
                                actual exam format. This helps you prepare in
                                advance for the main exam.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <FontAwesomeIcon
                                icon={faArrowTrendUp}
                                className="text-3xl text-white mb-4"
                            />{" "}
                            <h3 className="text-lg font-bold mb-2 text-white">
                                Weakness Evaluations
                            </h3>
                            <p className="text-base text-white text-center">
                                Benefit from advanced evaluations that pinpoint
                                your weaknesses, helping you target areas for
                                improvement.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <FontAwesomeIcon
                                icon={faQuestion}
                                className="text-3xl text-white mb-4"
                            />{" "}
                            <h3 className="text-lg font-bold mb-2 text-white">
                                Chapter Quizzes
                            </h3>
                            <p className="text-base text-white text-center">
                                Study using chapter-based questions from the
                                Discover Canada study guide and delve deeply
                                into each topic.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <FontAwesomeIcon
                                icon={faQuestion}
                                className="text-3xl text-white mb-4"
                            />{" "}
                            <h3 className="text-lg font-bold mb-2 text-white">
                                Important Dates
                            </h3>
                            <p className="text-base text-white text-center">
                                Understand key events and historical context
                                using a timeline of Canada's history, making it
                                easier to remember.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 rounded-xl shadow-md">
                            <FontAwesomeIcon
                                icon={faQuestion}
                                className="text-3xl text-white mb-4"
                            />{" "}
                            <h3 className="text-lg font-bold mb-2 text-white">
                                Flashcards
                            </h3>
                            <p className="text-base text-white text-center">
                                Memorize details from the study material using
                                interactive flashcards, as you can learn more
                                efficiently by incorporating them into your
                                study routine.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container mx-auto  mt-4 sm:mt-8 flex justify-center bg-slate-50  px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <Link
                        as="button"
                        className="bg-primary text-white text-lg md:text-xl xl:text-xl font-bold px-8 md:px-12 xl:px-16 py-3 md:py-4 xl:py-5 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                        href={route("testInfoPage", {
                            chapter_id: 12,
                            auth,
                        })}
                    >
                        Take free practice tests
                    </Link>
                </div>
                <div className="container mx-auto bg-slate-50  mt-5 lg:mt-5">
                    <p className=" text-lg sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500">
                        or pass the first time, guaranteed with
                        <span className="text-primary ml-1 underline underline-offset-4">
                            <Link href={route("premiumPage")}>Premium</Link>
                        </span>
                    </p>
                </div>
                <section className="container mx-auto  mt-20  px-0 md:px-0 lg:px-0 xl:px-44 ">
                    <div className="bg-indigo-600 py-12 text-white mt-4 rounded-2xl ">
                        <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-white mb-2">
                            HIGHLY RECOMMENDED
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
                            What our users are saying about us
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-1 mx-4 sm:mx-10 lg:mx-1 xl:mx-8">
                            <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                    <div>
                                        <p className="text-xl font-bold mb-2 text-left">
                                            “Passed on my first attempt”
                                        </p>
                                        <p className="text-sm mb-2 text-gray-500 text-left ">
                                            I was so nervous about the Canadian
                                            Citizenship Test, but this platform
                                            made all the difference. The test
                                            exams helped me a lot to understand
                                            the question patterns. I passed on
                                            my first attempt. If you are
                                            preparing for the exam, you should
                                            join the platform.
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
                                        <div className="hidden sm:flex text-sm mt-4  ml-auto ">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                    <div>
                                        <p className="text-xl font-bold mb-2 text-left">
                                            “Exactly What I Needed”
                                        </p>
                                        <p className="text-sm mb-14 text-gray-500 text-left">
                                            If you want to prepare for the
                                            Canadian Citizenship test, this is
                                            the place to prepare. The
                                            chapter-wise practice tests were
                                            exactly what I needed to understand
                                            each section thoroughly.
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
                                        <div className="hidden sm:flex text-sm mt-4  ml-auto ">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-left">
                                            “Best Resource For The Test”
                                        </h3>
                                        <p className="text-sm mb-10 text-gray-500 text-left">
                                            I failed the test in my first
                                            attempt. I was looking for an online
                                            platform to help me out.
                                            CitizenTestPrep premium is without a
                                            doubt the best resource for the
                                            Canadian Citizenship Test.
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
                                        <div className="hidden sm:flex text-sm mt-4  ml-auto ">
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                            <FontAwesomeIcon
                                                icon={faStar}
                                                className="text-greenStar"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto  hidden md:block bg-slate-50 mt-16  px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <div className="  px-6 md:px-16 lg:px-8  xl:px-36">
                        <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600">
                            STUDY GUIDE
                        </p>
                        <h2 className="text-4xl font-bold mt-1 mb-10 text-center">
                            What is the Canadian Citizenship Test?
                        </h2>
                        <p className="text-lg text-gray-600">
                            The Canadian Citizenship Test evaluates applicants'
                            knowledge of Canada. Applicants must pass the test
                            to obtain Canadian citizenship. The test contains
                            questions about Canadian rights, responsibilities,
                            history, geography, economy, government, laws, and
                            values. Questions come from the official Canadian
                            citizenship study guide. The test has multiple
                            choice questions. Applicants must correctly answer
                            many questions to pass. Passing the test shows
                            applicants understand Canadian ways of life.
                        </p>
                    </div>
                    <div className="container mx-auto px-44 mt-16">
                        <h2 className="text-4xl font-bold my-4 text-center">
                            What to remember before attending a Canadian
                            citizenship test?
                        </h2>
                        <h3 className="text-2xl font-bold mt-6 mb-2">
                            Eligibility for Canadian Citizenship
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            To be eligible for Canadian citizenship, there are
                            several key requirements that must be met. You must
                            have been a permanent resident of Canada for at
                            least three out of the last five years preceding
                            your application. Additionally, you must have filed
                            income taxes in Canada. If you’re between 18 and 54,
                            you must demonstrate adequate English or French
                            skills. You cannot have been convicted of any
                            serious crimes.
                        </p>
                        <h3 className="text-2xl font-bold mt-6 mb-2">
                            Test day procedures
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            On the day of your scheduled Canadian Citizenship
                            Test, there are several important procedures to
                            follow. First and foremost, you must bring valid
                            proof of your permanent residency in Canada, as well
                            as a piece of government-issued identification. It
                            is recommended to arrive at least 30 minutes before
                            your scheduled test time to allow for check-in and
                            any necessary formalities. Once the test begins, all
                            electronic devices, including phones and tablets,
                            must be turned off and put away. You will have a
                            total of 30 minutes to complete the 20-question
                            test.
                        </p>
                        <h3 className="text-2xl font-bold mt-6 mb-2">
                            Test Format
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            The Canadian Citizenship Test itself consists of 20
                            multiple-choice questions. These questions cover a
                            range of topics, including Canadian rights and
                            responsibilities, history, geography, politics,
                            economy, and cultural values. The test is a written
                            examination, and no aids or study materials are
                            permitted during the test itself.  You’ll have 45
                            minutes to complete the test.
                        </p>
                        <h3 className="text-2xl font-bold mt-6 mb-2">
                            Scoring and Results
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            To pass the Canadian Citizenship Test, you must
                            correctly answer at least 15 out of the 20
                            questions. This represents a passing score of 75%.
                            Immediately after completing the test, you will
                            receive your results, indicating whether you have
                            passed or failed. If you pass, you can proceed with
                            the next steps in the citizenship application
                            process. If you fail, you will have the opportunity
                            to re-take the test after re-applying and meeting
                            the eligibility requirements again.
                        </p>
                        <h3 className="text-2xl font-bold mt-6 mb-2">
                            How many attempts to pass the Canadian citizenship
                            test?
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            You have up to 3 attempts to pass the test. For
                            example, you can take the test a maximum of two more
                            times if you fail the first time.
                        </p>
                    </div>
                </section>
                <section className=" container mx-auto hidden md:block py-16 bg-slate-50  px-6 md:px-16 lg:px-8  xl:px-44">
                    <div className="  px-6 md:px-16 lg:px-8  xl:px-36">
                        <h2 className="text-4xl font-bold mb-6 text-center">
                            Tips to pass Canadian citizenship test in one
                            <br />
                            attempt
                        </h2>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Know Canada's history, rights, responsibilities,
                                geography, economy, and political system
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Practice with sample test questions from various
                                sources
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Take online practice tests to identify and
                                improve weak areas
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Learn important Canadian symbols, figures, and
                                cultural elements
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Understand the responsibilities and rights of
                                Canadian citizens
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Know about Canada's legal system, laws, and
                                democratic principles
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Study Canada's diverse population, immigration
                                history, and multiculturalism
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Familiarize yourself with the Canadian Charter
                                of Rights and Freedoms
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Understand the roles of different levels of
                                government (federal, provincial, municipal)
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                You need to stay updated on current events and
                                issues in Canada
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                You need to stay updated on current events and
                                issues in Canada
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Develop effective test-taking strategies and
                                time management
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Maintain a positive mindset and confidence
                                during preparation
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto  bg-slate-50 py-8 md:py-16   px-6 md:px-16 lg:px-8 xl:px-44">
                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white p-4 md:p-8 border border-gray-200">
                        <div className="w-full md:w-1/2 bg-white text-black p-4 md:p-8">
                            <div className="flex flex-col items-center">
                                <p className="text-3xl font-bold text-center md:hidden">
                                    Get all the essential tools to ensure you
                                    pass your test.
                                </p>
                                <p className="hidden md:block text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold text-center">
                                    Make sure you have everything you need to
                                    pass your test.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2  md:p-8 flex flex-col justify-center items-center">
                            <div className="w-full flex justify-center mt-4 sm:mt-8 lg:mt-2">
                                <Link
                                    as="button"
                                    className="bg-primary text-white text-lg md:text-xl xl:text-xl font-bold px-8 md:px-12 xl:px-16 py-3 md:py-4 xl:py-5 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                                    href={route("testInfoPage", {
                                        chapter_id: 12,
                                        auth,
                                    })}
                                >
                                    Take free practice tests
                                </Link>
                            </div>
                            <p className="text-lg sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500 mt-3">
                                or pass the first time, guaranteed with
                                <span className="underline ml-1 underline-offset-4 text-primary">
                                    <Link href={route("premiumPage")}>
                                        Premium
                                    </Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </section>
            </GuestLayout>
        </>
    );
}
