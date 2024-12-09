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
                        content="Prepare for the Canadian Citizenship Test with our comprehensive resources! Access 850+ practice questions, 450+ flashcards, study guides, dates, map and more."
                    />
                </Head>
                <div className="container mx-auto px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <div className=" py-8 sm:py-16 flex flex-col items-center">
                        <div className="container mx-auto px-4">
                            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold leading-tight tracking-wide text-center  px-2 sm:px-8 lg:px-20 xl:px-32">
                                Achieve Success in Canadian Citizenship Test on
                                Your{" "}
                                <span className="text-secondary ml-1">
                                    First Attempt
                                </span>
                            </h1>
                        </div>
                        <div className="container mx-auto  mt-4 sm:mt-8 px-6 md:px-28 lg:px-32   xl:px-44">
                            <p className="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500 ">
                                Prepare for the Canadian Citizenship Test with
                                our comprehensive resources! Access 850+
                                practice questions, 450+ flashcards, study
                                guides, dates, map and more.
                            </p>
                        </div>
                        <div className="container mx-auto px-4 mt-4 sm:mt-8 flex justify-center">
                            <Link
                                as="button"
                                className="bg-primary text-white text-lg md:text-xl xl:text-2xl font-bold px-8 md:px-12 xl:px-20 py-3 md:py-4 xl:py-5 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                                href={route("testInfoPage", {})}
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
                                src="/images/person 2.webp"
                                alt="Image 1"
                                className="relative lg:left-0 xl:left-32 object-cover w-full sm:w-48 sm:h-full   md:w-36 md:h-72  lg:w-44 lg:h-96 xl:w-48 rounded-b-full"
                            />
                            <div className="absolute w-28 xl:left-20 top-56 left-[-50%] lg:left-[-25%] z-60 p-2 rounded-xl shadow-lg bg-purple-300 transform -translate-y-1/2">
                                <p className="text-xl xl:text-2xl font-extrabold text-center text-black">
                                    2025
                                </p>
                                <p className="text-xs sm:text-sm text-center font-bold">
                                    Updated
                                </p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="relative w-full justify-center transform hover:-translate-y-1 transition duration-500 ease-out">
                            <img
                                src="/images/study guide homepage.webp"
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
                                src="/images/person 1.webp"
                                alt="Image 3"
                                className="relative lg:left-3 xl:left-24 object-cover w-full sm:w-48 sm:h-full   md:w-36 md:h-72  lg:w-44 lg:h-96 xl:w-48 rounded-b-full"
                            />
                        </div>

                        {/* Card 4 */}
                        <div className="relative w-full justify-center transform hover:-translate-y-1 transition duration-500 ease-out ">
                            <div className="absolute  lg:left-4 xl:ml-0 w-full h-60  sm:w-48 sm:h-40  md:w-36 md:h-60  lg:w-44 lg:h-52 xl:w-48 xl:h-48 bg-orange-300 rounded-t-full shadow-sm"></div>
                            <img
                                src="/images/person 3.webp"
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
                                    src="/images/person 2.webp"
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
                                    src="/images/person 1.webp"
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
                                    src="/images/person 3.webp"
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
                            Start Practicing for Your Canadian Citizenship Test
                            Today!
                        </h2>
                    </div>
                </section>

                <section className="container mx-auto  flex flex-col md:flex-row bg-slate-50 px-6 md:px-16 lg:px-8 pt-10 xl:px-44">
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

                <section className="container mx-auto bg-slate-50 px-6 md:px-16 lg:px-8 xl:px-44 ">
                    {chapters
                        .filter((chapter) => chapter.step === 1)
                        .map((chapter, index) => (
                            <Link
                                key={index}
                                href={route("testInfoPage", {
                                    chapter_id: chapter.id,
                                })}
                            >
                                <div
                                    key={index}
                                    className="container mx-auto grid grid-cols-12 border border-gray-200 rounded-2xl bg-white shadow-sm transform transition duration-600 ease-out hover:shadow-lg hover:shadow-gray-300"
                                >
                                    {/* Image in 8 columns */}
                                    <div className="col-span-12  lg:col-span-7">
                                        <img
                                            src="/images/chap 1.webp"
                                            alt="Photos"
                                            className="w-full h-full rounded-t-xl"
                                        />
                                    </div>

                                    {/* Text in 4 columns */}
                                    <div className="col-span-12  lg:col-span-5">
                                        <div className="p-4">
                                            <h3 className="text-xl sm:text-2xl lg:text-xl font-bold leading-tight tracking-wide mb-2">
                                                {chapter.name}
                                            </h3>
                                            <p className="text-sm sm:text-base md:text-lg font-normal leading-6 lg:leading-8 tracking-tight text-gray-500 mb-4">
                                                {chapter.description}
                                            </p>

                                            <div className="flex flex-row md:flex-row items-center md:items-start justify-between md:flex-wrap px-5 pb-5">
                                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                                    <div className="flex flex-row items-center">
                                                        <div>
                                                            <p className="font-bold text-lg tracking-wide mb-1 mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                                                                {
                                                                    chapter.questions
                                                                }
                                                            </p>
                                                            <p className="text-base font-normal text-gray-500">
                                                                Questions
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-full md:w-1/2">
                                                    <div className="flex flex-row items-center">
                                                        <div>
                                                            <p className="font-bold text-lg tracking-wide mb-1">
                                                                {
                                                                    chapter.mistakes
                                                                }{" "}
                                                                Mistakes
                                                            </p>
                                                            <p className="text-base font-normal text-gray-500">
                                                                Allowed to pass
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </section>

                <section className="container mx-auto  flex flex-col md:flex-row bg-slate-50 px-6 md:px-16 lg:px-8   pt-10 xl:px-44 ">
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
                    <section className="grid gap-7 grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 bg-slate-50">
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
                        <section className="grid gap-8 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 bg-slate-50">
                            {chapters
                                .filter(
                                    (chapter) =>
                                        chapter.step === 2 &&
                                        (chapter.id === 10 || chapter.id === 11)
                                )
                                .map((chapter, index) => (
                                    <Link
                                        href={`/practice-tests/${chapter.id}`}
                                        key={chapter.id}
                                    >
                                        <HomeChapterCard
                                            key={index}
                                            image={chapter.image}
                                            name={chapter.name}
                                            title={chapter.title}
                                            description={chapter.description}
                                            questions={chapter.questions}
                                            mistakes={chapter.mistakes}
                                        />
                                    </Link>
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
                            <Link
                                key={index}
                                href={route("simulation.test", 1)}
                                method="post"
                                as="button"
                            >
                                <div
                                    key={index}
                                    className="container mx-auto grid grid-cols-12  border border-gray-200 rounded-2xl bg-white shadow-sm transform transition duration-600 ease-out hover:shadow-lg hover:shadow-gray-300"
                                >
                                    {/* Image in 8 columns */}
                                    <div className="col-span-12 lg:col-span-7">
                                        <img
                                            src="/images/chap 13.webp"
                                            alt="Photos"
                                            className="w-full h-full rounded-t-xl"
                                        />
                                    </div>

                                    {/* Text in 4 columns */}
                                    <div className="col-span-12 lg:col-span-5 text-left">
                                        <div className="p-4">
                                            <h3 className="text-xl sm:text-2xl lg:text-xl font-bold leading-tight tracking-wide mb-2">
                                                {chapter.name}
                                            </h3>
                                            <p className="text-sm sm:text-base md:text-lg font-normal leading-6 lg:leading-8 tracking-tight text-gray-500 mb-4">
                                                {chapter.description}
                                            </p>

                                            <div className="flex flex-row md:flex-row items-center md:items-start justify-between md:flex-wrap px-5 pb-5">
                                                <div className="w-full md:w-1/2 mb-4 md:mb-0">
                                                    <div className="flex flex-row items-center">
                                                        <div>
                                                            <p className="font-bold text-lg tracking-wide mb-1 mt-4 md:mt-0 lg:mt-0 xl:mt-0">
                                                                {
                                                                    chapter.questions
                                                                }
                                                            </p>
                                                            <p className="text-base font-normal text-gray-500">
                                                                Questions
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="w-full md:w-1/2">
                                                    <div className="flex flex-row items-center">
                                                        <div>
                                                            <p className="font-bold text-lg tracking-wide mb-1">
                                                                {
                                                                    chapter.mistakes
                                                                }{" "}
                                                                Mistakes
                                                            </p>
                                                            <p className="text-base font-normal text-gray-500">
                                                                Allowed to pass
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                </section>

                <section className="container mx-auto text-center relative px-4  md:px-8 lg:px-12 xl:px-20">
                    <div className="bg-indigo-600 text-white p-6 sm:p-8 md:p-10 lg:p-12 xl:p-16 mt-20 relative overflow-hidden rounded-2xl">
                        <div>
                            {/* Content for medium and larger screens */}

                            <p className="font-inter text-sm sm:text-base font-bold tracking-widest text-center text-white">
                                SPEED THROUGH TEST PREP
                            </p>
                            <h2 className="text-2xl  md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 mt-4 md:mt-12">
                                Offering The Simplest Way To Prepare
                            </h2>

                            {/* Content for small screens */}
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1  lg:grid-cols-3  xl:grid-cols-3 gap-6 sm:gap-8 md:gap-4 lg:gap-8 p-2 md:p-4 lg:p-5">
                            <div className="text-center p-2">
                                <div className="flex flex-col items-center">
                                    <svg
                                        width="60"
                                        height="60"
                                        viewBox="0 0 80 81"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M36.8959 41.6666C39.4626 37.0333 44.3959 34.2999 47.2626 30.1999C50.2959 25.8999 48.5959 17.8666 39.9959 17.8666C34.3626 17.8666 31.5959 22.1333 30.4292 25.6666L21.7959 22.0333C24.1626 14.9333 30.5959 8.83325 39.9626 8.83325C47.7959 8.83325 53.1626 12.3999 55.8959 16.8666C58.2292 20.6999 59.5959 27.8666 55.9959 33.1999C51.9959 39.0999 48.1626 40.8999 46.0959 44.6999C45.2626 46.2333 44.9292 47.2332 44.9292 52.1666H35.2959C35.2626 49.5666 34.8626 45.3333 36.8959 41.6666ZM46.6626 65.4999C46.6626 69.1666 43.6626 72.1666 39.9959 72.1666C36.3292 72.1666 33.3292 69.1666 33.3292 65.4999C33.3292 61.8333 36.3292 58.8333 39.9959 58.8333C43.6626 58.8333 46.6626 61.8333 46.6626 65.4999Z"
                                            fill="#FEFDFE"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold my-4">
                                    850+ Practice Questions
                                </h3>
                                <p className="text-base mt-4">
                                    Access over 850+ practice questions that are
                                    similar to the real exam questions, helping
                                    you prepare effectively.
                                </p>
                            </div>
                            <div className="text-center p-2">
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        width="60"
                                        height="60"
                                        viewBox="0 0 80 81"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M9.77917 28.8333H46.4458V35.5H9.77917V28.8333ZM9.77917 22.1667H46.4458V15.5H9.77917V22.1667ZM9.77917 48.8333H33.1125V42.1667H9.77917V48.8333ZM59.8125 38.4L62.1792 36.0333C63.4792 34.7333 65.5792 34.7333 66.8792 36.0333L69.2458 38.4C70.5458 39.7 70.5458 41.8 69.2458 43.1L66.8792 45.4667L59.8125 38.4ZM57.4458 40.7667L39.7792 58.4333V65.5H46.8458L64.5125 47.8333L57.4458 40.7667Z"
                                            fill="#FEFDFE"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold my-4">
                                    Simulation Tests
                                </h3>
                                <p className="text-base mt-4">
                                    Take simulation tests that follow the same
                                    format as the actual exam. This will help
                                    you feel ready for the big day.
                                </p>
                            </div>
                            <div className="text-center p-2">
                                <div className="flex flex-col items-center justify-center">
                                    <svg
                                        width="60"
                                        height="60"
                                        viewBox="0 0 80 81"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M46.8667 36.1334L40 33.0001L46.8667 29.8668L50 23.0001L53.1333 29.8668L60 33.0001L53.1333 36.1334L50 43.0001L46.8667 36.1334ZM13.3333 49.6667L16.4667 42.8001L23.3333 39.6667L16.4667 36.5334L13.3333 29.6667L10.2 36.5334L3.33334 39.6667L10.2 42.8001L13.3333 49.6667ZM28.3333 33.0001L31.9667 24.9667L40 21.3334L31.9667 17.7001L28.3333 9.66675L24.7 17.7001L16.6667 21.3334L24.7 24.9667L28.3333 33.0001ZM15 71.3334L35 51.3001L48.3333 64.6334L76.6667 32.7668L71.9667 28.0667L48.3333 54.6334L35 41.3001L10 66.3334L15 71.3334Z"
                                            fill="#FEFDFE"
                                        />
                                    </svg>
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold my-4">
                                    Identify Your Weaknesses
                                </h3>
                                <p className="text-base mt-4">
                                    Get an explanation on incorrect answers that
                                    points out your mistakes, allowing you to
                                    focus on the areas where you need the most
                                    improvement.
                                </p>
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-4 left-0 h-16 w-10 bg-orange-400 rounded-r-full z-20 overflow-hidden"></div>
                        <div className="absolute top-8 right-0 h-16 w-10 bg-orange-400 rounded-l-full z-10 overflow-hidden"></div>
                        <div className="absolute top-16  lg:top-20 xl:top-20 left-48 transform -translate-x-1/2 -translate-y-1/2 h-16 w-16 bg-amber-400 rounded-full z-10 hidden sm:block"></div>
                    </div>
                </section>

                <section className="container mx-auto text-black p-16 md:p-20 bg-slate-50 px-6 md:px-16 lg:px-8  xl:px-36  ">
                    <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600 xl:mt-10 md:mt-10 mb-3">
                        LEARN FAST
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Questions Designed To Feel Just Like The Real Test
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div className="flex justify-center">
                            <img
                                src="/images/2025 discover canada.webp"
                                alt="Image Description"
                                className="w-full max-w-lg h-auto sm:max-w-xl md:max-w-xl lg:max-w-xl rounded-lg"
                            />
                        </div>

                        <div>
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Current and accurate
                                </h3>
                                <p className="text-gray-500 text-base">
                                    Our practice tests are based on the latest
                                    version of the Discover Canada booklet, so
                                    you can be sure the information is current.
                                    Whenever the official guide is updated, we
                                    quickly change our questions, so you’ll
                                    always have the latest test info.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Chapter-Based Tests
                                </h3>
                                <p className="text-gray-500 text-base">
                                    Test your knowledge with practice tests that
                                    focus on each chapter of the Discover Canada
                                    booklet. Our practice tests cover specific
                                    chapters, giving you a thorough way to
                                    practice.
                                </p>
                            </div>
                            <div className="mb-8">
                                <h3 className="text-xl md:text-2xl font-bold mb-2">
                                    Learn Anytime, Anywhere
                                </h3>
                                <p className="text-gray-500 text-base">
                                    You can access our platform from any device,
                                    so you can study for the Canadian
                                    citizenship practice tests wherever and
                                    whenever you want. Study on the go and make
                                    the most of your time!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto text-center relative px-6 md:px-8 lg:px-8 xl:px-20">
                    <div className="bg-indigo-600 text-white p-6 md:p-16 lg:p-24 mt-10 md:mt-16 lg:mt-20 xl:mt-24 relative overflow-hidden rounded-2xl">
                        {/* Heading */}
                        <div className="text-center mb-6 md:mb-8 lg:mb-10">
                            <h2 className="text-base md:text-base lg:text-base tracking-wide ">
                                YOUR ULTIMATE ALL-IN-ONE RESOURCE
                            </h2>
                            <p className="text-3xl md:text-4xl lg:text-5xl my-5 font-bold  mb-20 px-2">
                                Pass The Canadian Citizenship Test With Ease
                            </p>
                        </div>

                        {/* Content in two columns */}
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2  gap-6  lg:gap-10 ">
                            {/* Left Column (Text content) */}
                            <div className="text-left space-y-4 md:space-y-6 lg:space-y-8">
                                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold">
                                    Simplify Your Preparation
                                </h3>
                                <p className="text-base md:text-base lg:text-lg">
                                    We make your study process easier with a
                                    chapter-by-chapter curriculum. You’ll
                                    receive detailed, easy-to-use study
                                    materials organized by chapter.
                                </p>

                                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold">
                                    Learn from Your Mistakes
                                </h3>
                                <p className="text-base md:text-base lg:text-lg">
                                    By taking unlimited practice tests and
                                    answering chapter-based questions, you can
                                    find your weak spots. This way, you can
                                    focus on important study areas without
                                    wasting time.
                                </p>

                                <h3 className="text-xl md:text-xl lg:text-2xl font-semibold">
                                    Review Your Toughest Questions
                                </h3>
                                <p className="text-base md:text-base lg:text-lg">
                                    After each practice test, review the
                                    questions that were most challenging for
                                    you. This focused review helps strengthen
                                    your understanding and build confidence in
                                    those areas.
                                </p>
                            </div>

                            {/* Right Column (Image) */}
                            <div className="flex justify-center items-center">
                                <img
                                    src="/images/passing test (1).webp"
                                    alt="Citizenship Test Preparation"
                                    className="w-full max-w-[500px] h-auto max-h-[500px] rounded-lg"
                                />
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute bottom-5  left-0 h-16 w-10 bg-amber-400 rounded-r-full z-20 overflow-hidden hidden sm:block"></div>
                        <div className="absolute top-20 md:top-8 lg:top-8 xl:top-8 right-0 h-16 w-10 bg-orange-400 rounded-l-full z-10 overflow-hidden "></div>
                    </div>
                </section>

                <section className="container mx-auto  py-16 bg-slate-50 px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600 xl:mt-10 md:mt-10 mb-3">
                        PREPARE TO EXCEL
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
                        Offering A Perfect Learning Environment
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="text-center p-8 bg-indigo-600 rounded-xl shadow-md">
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    width="30"
                                    height="60"
                                    viewBox="0 0 38 64"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M15.8959 33.1666C18.4626 28.5333 23.3959 25.8 26.2626 21.7C29.2959 17.4 27.5959 9.36665 18.9959 9.36665C13.3626 9.36665 10.5959 13.6333 9.42923 17.1666L0.795898 13.5333C3.16256 6.43331 9.5959 0.333313 18.9626 0.333313C26.7959 0.333313 32.1626 3.89998 34.8959 8.36665C37.2292 12.2 38.5959 19.3666 34.9959 24.7C30.9959 30.6 27.1626 32.4 25.0959 36.2C24.2626 37.7333 23.9292 38.7333 23.9292 43.6666H14.2959C14.2626 41.0666 13.8626 36.8333 15.8959 33.1666ZM25.6626 57C25.6626 60.6666 22.6626 63.6666 18.9959 63.6666C15.3292 63.6666 12.3292 60.6666 12.3292 57C12.3292 53.3333 15.3292 50.3333 18.9959 50.3333C22.6626 50.3333 25.6626 53.3333 25.6626 57Z"
                                        fill="#FEFDFE"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold my-4 text-white ">
                                850+ Questions
                            </h3>
                            <p className="text-base text-white text-center">
                                Access more than 850+ Canadian citizenship test
                                practice questions, similar to those on the real
                                exam, for effective preparation.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    width="70"
                                    height="60"
                                    viewBox="0 0 80 80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.77917 28.3333H46.4458V35H9.77917V28.3333ZM9.77917 21.6667H46.4458V15H9.77917V21.6667ZM9.77917 48.3333H33.1125V41.6667H9.77917V48.3333ZM59.8125 37.9L62.1792 35.5333C63.4792 34.2333 65.5792 34.2333 66.8792 35.5333L69.2458 37.9C70.5458 39.2 70.5458 41.3 69.2458 42.6L66.8792 44.9667L59.8125 37.9ZM57.4458 40.2667L39.7792 57.9333V65H46.8458L64.5125 47.3333L57.4458 40.2667Z"
                                        fill="#FEFDFE"
                                    />
                                </svg>
                            </div>

                            <h3 className="text-lg font-bold my-4 text-white">
                                Chapter-Based
                            </h3>
                            <p className="text-base text-white text-center">
                                Learn important concepts with chapter-based
                                practice tests based on the Discover Canada
                                guide. These practice tests help you check your
                                understanding and memory of specific chapters.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    width="75"
                                    height="60"
                                    viewBox="0 0 80 81"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M46.8667 36.1334L40 33L46.8667 29.8667L50 23L53.1333 29.8667L60 33L53.1333 36.1334L50 43L46.8667 36.1334ZM13.3333 49.6667L16.4667 42.8L23.3333 39.6667L16.4667 36.5334L13.3333 29.6667L10.2 36.5334L3.33334 39.6667L10.2 42.8L13.3333 49.6667ZM28.3333 33L31.9667 24.9667L40 21.3334L31.9667 17.7L28.3333 9.66669L24.7 17.7L16.6667 21.3334L24.7 24.9667L28.3333 33ZM15 71.3334L35 51.3L48.3333 64.6334L76.6667 32.7667L71.9667 28.0667L48.3333 54.6334L35 41.3L10 66.3334L15 71.3334Z"
                                        fill="#FEFDFE"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold my-4 text-white">
                                Test Simulation
                            </h3>
                            <p className="text-base text-white text-center">
                                Use our special test simulations to practice for
                                the Canadian Citizenship test. Practicing in a
                                test-like setting will help you feel more
                                confident and ready for the real exam.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    width="75"
                                    height="55"
                                    viewBox="0 0 80 80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M23.3333 53.3333H46.6667V60H23.3333V53.3333ZM23.3333 40H56.6667V46.6667H23.3333V40ZM23.3333 26.6667H56.6667V33.3333H23.3333V26.6667ZM63.3333 13.3333H49.4C48 9.46666 44.3333 6.66666 40 6.66666C35.6667 6.66666 32 9.46666 30.6 13.3333H16.6667C16.2 13.3333 15.7667 13.3667 15.3333 13.4667C14.0333 13.7333 12.8667 14.4 11.9667 15.3C11.3667 15.9 10.8667 16.6333 10.5333 17.4333C10.2 18.2 10 19.0667 10 20V66.6667C10 67.5667 10.2 68.4667 10.5333 69.2667C10.8667 70.0667 11.3667 70.7667 11.9667 71.4C12.8667 72.3 14.0333 72.9667 15.3333 73.2333C15.7667 73.3 16.2 73.3333 16.6667 73.3333H63.3333C67 73.3333 70 70.3333 70 66.6667V20C70 16.3333 67 13.3333 63.3333 13.3333ZM40 12.5C41.3667 12.5 42.5 13.6333 42.5 15C42.5 16.3667 41.3667 17.5 40 17.5C38.6333 17.5 37.5 16.3667 37.5 15C37.5 13.6333 38.6333 12.5 40 12.5ZM63.3333 66.6667H16.6667V20H63.3333V66.6667Z"
                                        fill="#FEFDFE"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold my-4 text-white">
                                Important People
                            </h3>
                            <p className="text-base text-white text-center">
                                Get to know key figures in Canadian history with
                                our descriptions, making it easier to understand
                                their impact and context.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    width="70"
                                    height="55"
                                    viewBox="0 0 80 80"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M63.3333 13.3333H60V6.66666H53.3333V13.3333H26.6667V6.66666H20V13.3333H16.6667C12.9667 13.3333 10.0333 16.3333 10.0333 20L10 66.6667C10 70.3333 12.9667 73.3333 16.6667 73.3333H63.3333C67 73.3333 70 70.3333 70 66.6667V20C70 16.3333 67 13.3333 63.3333 13.3333ZM63.3333 66.6667H16.6667V33.3333H63.3333V66.6667ZM63.3333 26.6667H16.6667V20H63.3333V26.6667ZM30 46.6667H23.3333V40H30V46.6667ZM43.3333 46.6667H36.6667V40H43.3333V46.6667ZM56.6667 46.6667H50V40H56.6667V46.6667ZM30 60H23.3333V53.3333H30V60ZM43.3333 60H36.6667V53.3333H43.3333V60ZM56.6667 60H50V53.3333H56.6667V60Z"
                                        fill="#FEFDFE"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold my-4 text-white">
                                Important Dates
                            </h3>
                            <p className="text-base text-white text-center">
                                Learn about significant events in Canadian
                                history with our timeline overview. Our visual
                                timelines help you remember important milestones
                                more effectively.
                            </p>
                        </div>

                        <div className="text-center p-8 bg-indigo-600 shadow-md rounded-xl">
                            <div className="flex flex-col items-center justify-center">
                                <svg
                                    width="70"
                                    height="60"
                                    viewBox="0 0 80 81"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M9.30751 65.1667L13.7742 67.0333V36.9333L5.67418 56.4667C4.30751 59.8667 5.94085 63.7667 9.30751 65.1667ZM74.3075 52.8333L57.7742 12.9333C56.7408 10.4333 54.3075 8.90001 51.7408 8.83334C50.8742 8.83334 49.9742 8.96668 49.1075 9.33334L24.5408 19.5C22.0408 20.5333 20.5075 22.9333 20.4408 25.5C20.4075 26.4 20.5742 27.3 20.9408 28.1667L37.4742 68.0667C38.5075 70.6 40.9742 72.1333 43.5742 72.1667C44.4408 72.1667 45.3075 72 46.1408 71.6667L70.6742 61.5C74.0742 60.1 75.7075 56.2 74.3075 52.8333ZM43.6408 65.5L27.1075 25.6333L51.6075 15.5H51.6408L68.1408 55.3333L43.6408 65.5Z"
                                        fill="#FEFDFE"
                                    />
                                    <path
                                        d="M37.5408 33C39.3818 33 40.8742 31.5076 40.8742 29.6667C40.8742 27.8257 39.3818 26.3333 37.5408 26.3333C35.6999 26.3333 34.2075 27.8257 34.2075 29.6667C34.2075 31.5076 35.6999 33 37.5408 33Z"
                                        fill="#FEFDFE"
                                    />
                                    <path
                                        d="M20.4742 65.5C20.4742 69.1667 23.4742 72.1667 27.1408 72.1667H31.9742L20.4742 44.3667V65.5Z"
                                        fill="#FEFDFE"
                                    />
                                </svg>
                            </div>
                            <h3 className="text-lg font-bold my-4 text-white">
                                450+ Flashcards
                            </h3>
                            <p className="text-base text-white text-center">
                                Use interactive 450+ flashcards to memorize
                                details from the study materials. Flashcards can
                                make your studying more efficient and enjoyable.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container mx-auto  mt-4 sm:mt-8 flex justify-center bg-slate-50  px-6 md:px-16 lg:px-8  xl:px-44 ">
                    <Link
                        as="button"
                        className="bg-primary text-white text-lg md:text-xl xl:text-xl font-bold px-8 md:px-12 xl:px-16 py-3 md:py-4 xl:py-5 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                        href={route("testInfoPage", {})}
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
                <section className="container mx-auto  mt-20  px-0 md:px-0 lg:px-20">
                    <div className="bg-indigo-600 py-12 text-white mt-4 rounded-2xl ">
                        <p className="font-inter text-sm font-bold leading-[14.52px] tracking-[1px] text-center text-white mb-2">
                            HIGHLY RECOMMENDED
                        </p>
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center px-4 mt-8">
                            What Our Users Are Saying About Us
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 gap-1 mx-4 sm:mx-10 lg:mx-1 xl:mx-8">
                            <div className="w-full px-2 mb-8 transform hover:-translate-y-1 transition duration-500 ease-out">
                                <div className="p-4 md:p-8 lg:p-8 xl:p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                    <div>
                                        <p className="text-xl font-bold mb-2 text-left">
                                            “Passed On My First Attempt”
                                        </p>
                                        <p className="text-sm mb-2 text-gray-500 text-left ">
                                            I was really nervous about the
                                            Canadian Citizenship Test, but this
                                            platform made a big difference. The
                                            practice exams helped me understand
                                            the question patterns, and I passed
                                            on my first try! If you're preparing
                                            for the exam, you should definitely
                                            join this platform.
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
                                            the right place. The chapter-wise
                                            practice tests were exactly what I
                                            needed to fully understand each
                                            section.
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
                                            I failed the test on my first
                                            attempt and was looking for an
                                            online platform to help me.
                                            CitizenTestPrep is, without a doubt,
                                            the best resource for the Canadian
                                            Citizenship Test!
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
                <section className="container mx-auto bg-slate-50 mt-16 px-6 md:px-8 lg:px-8  xl:px-36 ">
                    <div className="">
                        <p className="font-inter text-[15px] font-bold leading-[14.52px] tracking-[1px] text-center text-indigo-600">
                            STUDY GUIDE
                        </p>
                        <h2 className="text-2xl md:text-4xl font-bold mt-4 mb-10 text-center">
                            What is the Canadian Citizenship Test?
                        </h2>
                        <p className="text-lg text-gray-600">
                            The Canadian Citizenship Test checks how well
                            applicants know Canada. To become a Canadian
                            citizen, applicants must pass this test. The test
                            includes questions about Canadian rights,
                            responsibilities, history, geography, economy,
                            government, laws, and values. The questions come
                            from the official guide called "Discover Canada."
                            The test has 20 multiple-choice questions, and
                            applicants need to get at least 15 right within 45
                            minutes. Passing the test shows that applicants
                            understand Canadian life and values.
                        </p>
                    </div>
                    <div className="container mx-auto mt-16">
                        <h2 className=" text-2xl md:text-4xl font-bold mt-10 mb-5 text-center">
                            What to Remember Before Attending a Canadian
                            Citizenship Test?
                        </h2>
                        <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">
                            Eligibility for Canadian Citizenship
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            To be eligible for Canadian citizenship, you must
                            meet several key requirements. You need to have been
                            a permanent resident of Canada for at least three
                            out of the last five years before applying. You also
                            must have filed income taxes in Canada. If you are
                            between 18 and 54 years old, you must show that you
                            have good English or French skills. Additionally,
                            you cannot have been convicted of any serious
                            crimes.
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">
                            Test Question & Format
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            The Canadian citizenship test consists of 20
                            questions focused on the rights and responsibilities
                            of Canadian citizens, as well as the country's
                            history, geography, economy, government, laws, and
                            symbols. The questions are presented in
                            multiple-choice or true/false formats and are
                            available in both English and French. Test takers
                            have 45 minutes to complete the exam and must answer
                            at least 15 out of 20 questions correctly to pass.
                            Most applicants will be invited to take the test
                            online, but accommodations can be made for those who
                            require accessibility support; options include
                            taking the test via Microsoft Teams or in person, or
                            receiving it in a different format.
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">
                            Wait For Test Invitation
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            You should wait for your test invitation, which IRCC
                            typically sends within one week after you receive
                            your Acknowledgement of Receipt (AOR) letter or
                            email. The AOR confirms that your application is
                            complete. If you haven’t received your AOR yet,
                            check to see if it will arrive soon. The time it
                            takes to get your invitation can vary based on your
                            situation, especially if your application is more
                            complex. If you have an emergency and need to take
                            the test sooner, please check if you qualify for
                            urgent processing. This option is available for
                            specific urgent situations. If you need to
                            reschedule your test, contact the email address
                            provided in your test invitation. In your email,
                            include a detailed explanation for the rescheduling,
                            your application number, and your unique client
                            identifier (UCI). You will receive your invitation
                            by email if you provided an email address in your
                            application.
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">
                            Test Day Procedures
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            To take the test, you must first receive your
                            invitation, which outlines the specific format
                            you'll follow. If you're taking the online test,
                            ensure you read the tutorial, prepare the required
                            identification, and confirm your device and browser
                            compatibility. You have 30 calendar days from the
                            invitation date to complete the test, with up to
                            three chances to pass; if you fail all three
                            attempts, a hearing with a citizenship official will
                            be scheduled. If you need accommodations, you may be
                            invited to take the test on Microsoft Teams or in
                            person, and the same three-attempt rule applies.
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">
                            Scoring and Results
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            To pass the citizenship test, you must correctly
                            answer at least 15 out of 20 questions, achieving a
                            minimum score of 75%. If you pass, you may be
                            invited to an interview with a citizenship official,
                            depending on your case, and will definitely receive
                            an invitation to the citizenship ceremony. If you do
                            not pass the test, you have up to three attempts to
                            succeed, whether you take the test online, via
                            Microsoft Teams, or in person. Failing three times
                            will lead to a hearing with a citizenship official,
                            where you will be asked questions similar to those
                            on the test. If you pass this hearing, your
                            application will continue to be processed; however,
                            if you fail, your application will be refused, and
                            you will need to reapply and pay the fees again if
                            you still wish to pursue citizenship. For those who
                            applied as a family or group, all applications are
                            processed together. If one applicant needs to retest
                            or attend a hearing, the others may still be invited
                            to the citizenship ceremony. If you prefer that
                            everyone attends the same ceremony, you can request
                            to pause processing of the applications until you
                            successfully pass the test or hearing.
                        </p>
                        <h3 className="text-xl md:text-2xl font-bold mt-6 mb-2">
                            How Many Attempts to Pass the Canadian Citizenship
                            Test?
                        </h3>
                        <p className="text-lg text-gray-600 mt-2">
                            You can take the test up to 3 times. For example, if
                            you fail the first time, you can take the test two
                            more times.
                        </p>
                    </div>
                </section>
                <section className="container mx-auto md:block py-16 bg-slate-50  px-4 md:px-8 lg:px-8  xl:px-36">
                    <div className="px-4 md:px-16 lg:px-8  xl:px-36">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-start">
                            Tips to Pass Canadian Citizenship Test in One
                            Attempt
                        </h2>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Study the official Discover Canada guide
                                carefully.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Learn about Canada’s history, rights,
                                responsibilities, geography, economy, and
                                political system.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Practice with sample test questions from
                                different sources.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Take online practice tests to find and improve
                                your weak areas.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Learn about important Canadian symbols, figures,
                                and cultural aspects.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Understand the rights and responsibilities of
                                Canadian citizens.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Know about Canada’s legal system, laws, and
                                democratic values.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Study Canada’s diverse population, immigration
                                history, and multiculturalism.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Get familiar with the Canadian Charter of Rights
                                and Freedoms.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Understand the roles of different levels of
                                government (federal, provincial, municipal).
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Learn about Canada’s role in international
                                affairs and peacekeeping efforts.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Stay updated on current events and issues in
                                Canada.
                            </p>
                        </div>

                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Develop good test-taking strategies and manage
                                your time well.
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-2xl mr-4"
                            />
                            <p className="text-lg">
                                Keep a positive mindset and build your
                                confidence during your preparation.
                            </p>
                        </div>
                    </div>
                </section>
                <section className="container mx-auto  bg-slate-50 py-8 md:py-16   px-6 md:px-8 lg:px-8 xl:px-44">
                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white p-4  border border-gray-200">
                        <div className="w-full md:w-1/2 bg-white text-black p-4 ">
                            <div className="flex flex-col items-center">
                                <p className="text-xl sm:text-2xl md:text-3xl xl:text-4xl font-extrabold text-center md:p-8">
                                    Make sure you have everything you need to
                                    pass your test.
                                </p>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2  md:p-8 flex flex-col justify-center items-center">
                            <div className="w-full flex justify-center mt-4 sm:mt-8 lg:mt-2">
                                <Link
                                    as="button"
                                    className="bg-primary text-white text-lg md:text-xl xl:text-xl font-bold px-8 md:px-7 xl:px-16 py-3 md:py-2 xl:py-5 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
                                    href={route("testInfoPage", {})}
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
