import { Link, Head } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faChevronDown,
    faBars,
    faQuestion,
    faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import HomeChapterCard from "@/Components/HomeChapterCard";
import Header from "@/Components/Header";

export default function Welcome({ auth, chapters }) {
    return (
        <>
            <Head title="Welcome" />
            <div>
                <Header />

                <section className="bg-gray-100 py-8 sm:py-16 flex flex-col items-center">
                    <div className="container mx-auto px-4">
                        <h1 className="text-3xl sm:text-5xl font-black leading-tight tracking-wide text-center custom-heading px-4 sm:px-20">
                            Achieve Success in 2024 Canadian Citizenship Test on
                            Your
                            <span className="text-secondary">
                                First Attempt
                            </span>
                        </h1>
                    </div>
                    <div className="container mx-auto px-4 mt-4 sm:mt-8">
                        <p className="text-base sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500">
                            Get access to 700+ test questions, chapter-based
                            quizzes, realistic
                            <br className="hidden sm:block" />
                            test simulations, study quizzes, flashcards and
                            more.
                        </p>
                    </div>
                    <div className="container mx-auto px-4 mt-4 sm:mt-8 flex justify-center">
                        <button className="bg-primary text-white px-6 py-2 rounded-full">
                            Take free practice tests
                        </button>
                    </div>
                    <div className="container mx-auto px-4 mt-4 sm:mt-8">
                        <p className="text-base sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500">
                            or pass the first time, guaranteed with
                            <span className="text-primary ml-1 underline underline-offset-1">
                            <Link href={route('premiumPage')}>Premium</Link>
                            </span>
                        </p>
                    </div>
                </section>

                <section className="container-fluid mx-auto p-4 bg-gray-100">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
                        <div className="relative w-52 h-96 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500 rounded-t-full"></div>
                            <img
                                src="/images/person 2.png"
                                alt="Image 1"
                                className="relative z-10 object-cover w-full h-full rounded-b-full"
                            />
                        </div>

                        <div>
                            <img src="/images/ctp premium.png" alt="Image 2" />
                        </div>

                        <div className="relative w-52 h-96 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500 rounded-t-full"></div>
                            <img
                                src="/images/person 1.png"
                                alt="Image 3"
                                className="relative z-10 object-cover w-full h-full rounded-b-full"
                            />
                        </div>

                        <div className="relative w-52 h-96 overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1/2 bg-yellow-500 rounded-t-full"></div>
                            <img
                                src="/images/person 3.png"
                                alt="Image 4"
                                className="relative z-10 object-cover w-full h-full rounded-b-full"
                            />
                        </div>
                    </div>
                </section>

                <section className="bg-gray-100 py-5">
                    <div className="container mx-auto px-4">
                        <p className=" text-sm font-normal leading-8 text-center text-blue-500">
                            CHAPTER-WISE PRACTICE TESTS
                        </p>
                        <h1 className=" text-4xl font-bold leading-10 tracking-wide text-center">
                            Start your 2024 Canadian citizenship test
                            <br />
                            practice with us
                        </h1>
                    </div>
                </section>
                <section className="container mx-auto px-10 mb-0 flex flex-col md:flex-row">
                    <div className="md:w-1/2 flex items-center justify-center md:justify-start">
                        <h1 className="font-bold text-lg tracking-wide">
                            Step-1
                        </h1>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center md:justify-end">
                        <p className="text-sm font-normal text-gray-500">
                            See how much you don’t know
                        </p>
                    </div>
                </section>

                <section className="bg-gray-100 py-2">
                    <Link href={route('testInfoPage',{chapter_id: 1})}>
                        <div className="container mx-auto px-4 flex flex-col md:flex-row">
                            <div className="md:w-1/8 pl-2">
                                <img
                                    src="/images/chap 1.png"
                                    alt="Photos"
                                    className="w-full"
                                />
                            </div>

                            <div className="md:w-1/2 px-4 py-2 bg-white rounded-r-xl">
                                <h1 className=" text-2xl font-bold leading-10 tracking-wide text-left">
                                    Free Simulation Test
                                </h1>
                                <p className="text-sm font-normal leading-8 tracking-tight text-gray-500">
                                    Take part in our free diagnostic Canadian
                                    citizenship test practice to assess your current
                                    knowledge and skills. It will help you tailor
                                    your study plan for maximum effectiveness.
                                </p>

                                <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap">
                                    <div className="md:w-1/2 w-full mb-4 md:mb-0 py-4">
                                        <div>
                                            <h1 className="font-bold text-2xl tracking-wide mb-1">
                                                20
                                            </h1>
                                            <p className="text-lg font-normal text-gray-500">
                                                Questions
                                            </p>
                                        </div>
                                    </div>

                                    <div className="md:w-1/2 w-full py-4">
                                        <div>
                                            <h1 className="font-bold text-2xl tracking-wide mb-1">
                                                5 Mistakes
                                            </h1>
                                            <p className="text-lg font-normal text-gray-500">
                                                Allowed to pass
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>
                <section className="container mx-auto px-10 mb-0 flex flex-col md:flex-row py-4">
                    <div className="md:w-1/2 flex items-center justify-center md:justify-start">
                        <h1 className="font-bold text-lg tracking-wide">
                            Step-2
                        </h1>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center md:justify-end">
                        <p className="text-sm font-normal text-gray-500">
                            Complete all chapter test
                        </p>
                    </div>
                </section>
                <section className="container mx-auto px-4 grid gap-10 md:grid-cols-3">
                    {chapters.map((chapter, index) => (
                        <HomeChapterCard
                            key={index} // Ensure each component has a unique key
                            image={chapter.image}
                            name={chapter.name}
                            title={chapter.title}
                            description={chapter.description}
                            questions={chapter.questions}
                            mistakes={chapter.mistakes}
                        />
                    ))}
                </section>

                <div className="container mx-auto px-10 mb-0 flex flex-col md:flex-row">
                    <div className="md:w-1/2 flex items-center justify-center md:justify-start">
                        <h1 className="font-bold text-lg tracking-wide">
                            Step-3
                        </h1>
                    </div>

                    <div className="md:w-1/2 flex items-center justify-center md:justify-end">
                        <p className="text-sm font-normal text-gray-500">
                            Prepare with exam simulator
                        </p>
                    </div>
                </div>

                <section className="bg-gray-100 py-2">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row">
                        <div className="md:w-1/8 pl-2">
                            <img
                                src="/images/chap 13.png"
                                alt="Photos"
                                className="w-full"
                            />
                        </div>

                        <div className="md:w-1/2 px-4 py-2 bg-white rounded-r-xl">
                            <h1 className=" text-2xl font-bold leading-10 tracking-wide text-left">
                                Exam Simulator
                            </h1>
                            <p className="text-sm font-normal leading-8 tracking-tight text-gray-500">
                                We offer realistic simulations of the Canadian
                                Citizenship test. Providing a real-life testing
                                experience will help you build confidence and
                                find out your weaknesses.
                            </p>

                            <div className="container mx-auto px-4 flex flex-col md:flex-row flex-wrap">
                                <div className="md:w-1/2 w-full mb-4 md:mb-0 py-4">
                                    <div>
                                        <h1 className="font-bold text-2xl tracking-wide mb-1">
                                            20
                                        </h1>
                                        <p className="text-lg font-normal text-gray-500">
                                            Questions
                                        </p>
                                    </div>
                                </div>

                                <div className="md:w-1/2 w-full py-4">
                                    <div>
                                        <h1 className="font-bold text-2xl tracking-wide mb-1">
                                            5 Mistakes
                                        </h1>
                                        <p className="text-lg font-normal text-gray-500">
                                            Allowed to pass
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-indigo-600 text-white p-8 md:p-20">
                    <div className="container mx-auto text-center">
                        <h2 className="text-sm font-base">
                            SPEED THROUGH TEST PREP
                        </h2>
                        <h1 className="text-3xl font-bold mb-4 mt-4">
                            Offering the simplest way to prepare
                        </h1>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 p-4 md:p-10">
                            <div className="text-center p-4 text-white rounded-md">
                                <FontAwesomeIcon
                                    icon={faQuestion}
                                    className="mb-4"
                                />
                                <h1 className="text-lg font-bold mb-2">
                                    700+ Practice Questions
                                </h1>
                                <p>
                                    Access over 700 Canadian citizenship test
                                    practice questions similar to those on the
                                    real exam for effective preparation.
                                </p>
                            </div>
                            <div className="text-center p-4 text-white rounded-md">
                                {/* <i className="icon fa-solid fa-pen-to-square mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2">
                                    Realistic Test Simulations
                                </h1>
                                <p>
                                    Take Citizenship practice tests that mimic
                                    the actual exam format. This will help you
                                    prepare in advance for the main exam.
                                </p>
                            </div>
                            <div className="text-center p-4 text-white rounded-md">
                                {/* <i className="icon fa-solid fa-chart-line mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2">
                                    Weakness Evaluations
                                </h1>
                                <p>
                                    Benefit from advanced evaluations to
                                    identify areas for improvement. This will
                                    help you target where you need to improve.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="text-black p-8 md:p-20">
                    <div className="container mx-auto">
                        <h1 className="text-3xl font-bold text-center mb-8">
                            Questions designed to feel just like the real test
                        </h1>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            <div className="flex justify-center">
                                <img
                                    src="/images/up.png"
                                    alt="Image Description"
                                    className="w-52 h-96 md:w-3/4 lg:w-2/3 rounded-lg"
                                />
                            </div>

                            <div>
                                <div className="mb-8">
                                    <h1 className="text-xl font-bold mb-2">
                                        Current and accurate
                                    </h1>
                                    <p className="text-gray-500 text-base">
                                        Our practice tests are based on the
                                        latest version of the Discover Canada
                                        booklet, ensuring they're up-to-date.
                                        Whenever the official study guide is
                                        updated, we promptly revise our
                                        questions too. You'll never encounter
                                        outdated test information.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-xl font-bold mb-2">
                                        Topic-based quizzes
                                    </h1>
                                    <p className="text-gray-500 text-base">
                                        Test yourself with quizzes designed for
                                        each chapter based on the Discover
                                        Canada booklet. Dive into
                                        chapter-specific and topic-specific
                                        quizzes for thorough practice.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-xl font-bold mb-2">
                                        Prepare on the go
                                    </h1>
                                    <p className="text-gray-500 text-base">
                                        Our platform is easy to access from any
                                        device, so you can study and attend the
                                        Canadian citizenship practice test exams
                                        from anywhere, anytime.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-custom-blue text-white p-8 md:p-20">
                    <div className="container mx-auto">
                        <div>
                            <p className="text-center text-base mb-2">
                                PREPARE THROUGHLY
                            </p>

                            <h2 className="text-3xl font-bold mb-10 text-center">
                                Pass the Canadian citizenship test with ease
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div>
                                <div className="mb-8">
                                    <h1 className="text-lg font-bold mb-2">
                                        Simplify your preparation
                                    </h1>
                                    <p className="text-base">
                                        We help ensure effective preparation
                                        with a structured study plan. You will
                                        receive detailed, easy-to-access, and
                                        organized chapter-wise quizzes.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-lg font-bold mb-2">
                                        Learn from your mistakes
                                    </h1>
                                    <p className="text-base">
                                        Taking unlimited test simulations and
                                        topic-based quizzes helps you find your
                                        weak spots. This lets you concentrate on
                                        important study areas without wasting
                                        time.
                                    </p>
                                </div>
                                <div className="mb-8">
                                    <h1 className="text-lg font-bold mb-2">
                                        Review your toughest questions
                                    </h1>
                                    <p className="text-base">
                                        Go over citizenship test practice
                                        questions that were tough or often
                                        answered wrong. This focused review
                                        helps strengthen your understanding and
                                        confidence in those areas.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-col justify-between">
                                <div className="mb-8 px-10">
                                    <img
                                        src="/images/ctp premium.png"
                                        alt="Image Description"
                                        className="w-80 h-96 rounded-lg"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="py-16">
                    <div className="container mx-auto px-10">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            <div className="text-center p-8 bg-custom-blue rounded-xl shadow-md">
                                <FontAwesomeIcon
                                    icon={faQuestion}
                                    className="text-3xl text-white mb-4"
                                />
                                <h1 className="text-lg font-bold mb-2 text-white">
                                    700+ Questions
                                </h1>
                                <p className="text-base text-white">
                                    Access more than 700+ Canadian citizenship
                                    test practice questions, similar to those on
                                    the real exam, for effective preparation.
                                </p>
                            </div>

                            <div className="text-center p-8 bg-custom-blue shadow-md rounded-xl">
                                {/* <i className="fas fa-pen-to-square text-3xl text-white mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2 text-white">
                                    Real-Life Test Simulations
                                </h1>
                                <p className="text-base text-white">
                                    Take citizenship practice tests that mimic
                                    the actual exam format. This helps you
                                    prepare in advance for the main exam.
                                </p>
                            </div>

                            <div className="text-center p-8 bg-custom-blue shadow-md rounded-xl">
                                {/* <i className="fas fa-chart-line text-3xl text-white mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2 text-white">
                                    Weakness Evaluations
                                </h1>
                                <p className="text-base text-white">
                                    Benefit from advanced evaluations that
                                    pinpoint your weaknesses, helping you target
                                    areas for improvement.
                                </p>
                            </div>

                            <div className="text-center p-8 bg-custom-blue shadow-md rounded-xl">
                                {/* <i className="fas fa-cogs text-3xl text-white mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2 text-white">
                                    Chapter Quizzes
                                </h1>
                                <p className="text-base text-white">
                                    Study using chapter-based questions from the
                                    Discover Canada study guide and delve deeply
                                    into each topic.
                                </p>
                            </div>

                            <div className="text-center p-8 bg-custom-blue shadow-md rounded-xl">
                                {/* <i className="fas fa-user text-3xl text-white mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2 text-white">
                                    Important Dates
                                </h1>
                                <p className="text-base text-white">
                                    Understand key events and historical context
                                    using a timeline of Canada's history, making
                                    it easier to remember.
                                </p>
                            </div>

                            <div className="text-center p-8 bg-custom-blue rounded-xl shadow-md">
                                {/* <i className="fas fa-lock text-3xl text-white mb-4"></i> */}
                                <h1 className="text-lg font-bold mb-2 text-white">
                                    Flashcards
                                </h1>
                                <p className="text-base text-white">
                                    Memorize details from the study material
                                    using interactive flashcards, as you can
                                    learn more efficiently by incorporating them
                                    into your study routine.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="container mx-auto px-4 mt-4 sm:mt-8 flex justify-center">
                    <button className="bg-yellow-700 border-2 border-orange-500 text-white px-6 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                        Take free practice tests
                    </button>
                </div>
                <div className="container mx-auto sm:mt-8">
                    <p className=" text-base sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500">
                        or pass the first time, guaranteed with
                        <span className="text-yellow-700 underline underline-offset-1">
                        <Link href={route('premiumPage')}>Premium</Link>
                        </span>
                    </p>
                </div>
                <section className="bg-custom-blue py-12 text-white">
                    <div className="container mx-auto px-4">
                        <h2 className="text-sm font-normle text-center">
                            HIGHLY RECOMMENDED
                        </h2>
                        <h1 className="text-3xl font-bold mb-4 text-center py-4">
                            What our users are saying about us
                        </h1>
                        <div className="container mx-auto px-4 py-8">
                            <div className="flex flex-wrap -mx-4">
                                <div className="w-full md:w-1/3 px-4">
                                    <div className="p-8 bg-white rounded-xl shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl font-bold mb-2">
                                                “Passed on my first attempt”
                                            </h1>
                                            <p className="text-sm mb-2 text-gray-500">
                                                I was so nervous about the
                                                Canadian Citizenship Test, but
                                                this platform made all the
                                                difference. The test exams
                                                helped me a lot to understand
                                                the question patterns. I passed
                                                on my first attempt. If you are
                                                preparing for the exam, you join
                                                the platform.
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

                                <div className="w-full md:w-1/3 px-4">
                                    <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl font-bold mb-2">
                                                “Exactly What I Needed”
                                            </h1>
                                            <p className="text-sm mb-2 text-gray-500">
                                                If you want to prepare for the
                                                Canadian Citizenship test, this
                                                is the place to prepare. The
                                                chapter-wise practice tests were
                                                exactly what I needed to
                                                understand each section
                                                thoroughly.
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

                                <div className="w-full md:w-1/3 px-4">
                                    <div className="p-8 bg-white rounded-lg shadow-md flex flex-col justify-between h-full text-black">
                                        <div>
                                            <h1 className="text-xl font-bold mb-2">
                                                “Best Resource For The Test”
                                            </h1>
                                            <p className="text-sm mb-2 text-gray-500">
                                                I failed the test in my first
                                                attempt. I was looking for an
                                                online platform to help me out.
                                                CitizenTestPrep premium is
                                                without a doubt the best
                                                resource for the Canadian
                                                Citizenship Test
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
                    </div>
                </section>

                <section className="hidden md:block">
                    <div className="container mx-auto px-44">
                        <h1 className="text-4xl font-bold my-10 text-center">
                            What is the Canadian Citizenship Test?
                        </h1>
                        <p className="text-sm text-gray-600">
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
                    <div className="container mx-auto px-44">
                        <h1 className="text-4xl font-bold my-4 text-center">
                            What to remember before attending a Canadian
                            citizenship test?
                        </h1>
                        <h2 className="text-lg font-bold my-4">
                            Eligibility for Canadian Citizenship
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
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
                        <h2 className="text-lg font-bold my-4">
                            Test day procedures
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
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
                        <h2 className="text-lg font-bold my-4">Test Format</h2>
                        <p className="text-sm text-gray-600 mt-2">
                            The Canadian Citizenship Test itself consists of 20
                            multiple-choice questions. These questions cover a
                            range of topics, including Canadian rights and
                            responsibilities, history, geography, politics,
                            economy, and cultural values. The test is a written
                            examination, and no aids or study materials are
                            permitted during the test itself.  You’ll have 45
                            minutes to complete the test.
                        </p>
                        <h2 className="text-lg font-bold my-4">
                            Scoring and Results
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
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
                        <h2 className="text-lg font-bold my-4">
                            How many attempts to pass the Canadian citizenship
                            test?
                        </h2>
                        <p className="text-sm text-gray-600 mt-2">
                            You have up to 3 attempts to pass the test. For
                            example, you can take the test a maximum of two more
                            times if you fail the first time.
                        </p>
                    </div>
                </section>

                <section className="hidden md:block py-12">
                    <div className="container mx-auto px-44">
                        <h1 className="text-4xl font-bold mb-4 text-center">
                            Tips to pass Canadian citizenship test in one
                            <br />
                            attempt
                        </h1>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Know Canada's history, rights, responsibilities,
                                geography, economy, and political system
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Practice with sample test questions from various
                                sources
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Take online practice tests to identify and
                                improve weak areas
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Learn important Canadian symbols, figures, and
                                cultural elements
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Understand the responsibilities and rights of
                                Canadian citizens
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Know about Canada's legal system, laws, and
                                democratic principles
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Study Canada's diverse population, immigration
                                history, and multiculturalism
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Familiarize yourself with the Canadian Charter
                                of Rights and Freedoms
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Understand the roles of different levels of
                                government (federal, provincial, municipal)
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                You need to stay updated on current events and
                                issues in Canada
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                You need to stay updated on current events and
                                issues in Canada
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Develop effective test-taking strategies and
                                time management
                            </p>
                        </div>
                        <div className="flex items-center mb-2">
                            <FontAwesomeIcon
                                icon={faCircleCheck}
                                className="text-primary text-lg mr-2"
                            />
                            <p className="text-sm">
                                Maintain a positive mindset and confidence
                                during preparation
                            </p>
                        </div>
                    </div>
                </section>
                <section className="bg-gray-100 py-8 md:py-16 px-4 md:px-20">
                    <div className="container mx-auto flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-lg p-4 md:p-8">
                        <div className="w-full md:w-1/2 bg-white text-black p-4 md:p-8">
                            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold">
                                Make sure you have everything you need to pass
                                your test.
                            </h1>
                        </div>

                        <div className="w-full md:w-1/2 p-4 md:p-8 flex flex-col justify-center items-center">
                            <div className="w-full flex justify-center mt-4 sm:mt-8">
                                <button className=" bg-primary border-2 border-orange-500 text-white px-6 py-2 rounded-full hover:bg-gray-400 transition duration-300">
                                    Take free practice tests
                                </button>
                            </div>
                            <p className="text-base sm:text-lg font-normal leading-6 sm:leading-8 tracking-tight text-center text-gray-500 mt-4">
                                or pass the first time, guaranteed with
                                <span className="underline underline-offset-1 text-primary">
                                    <Link href={route('premiumPage')}>Premium</Link>
                                </span>
                            </p>
                        </div>
                    </div>
                </section>

                <footer className="py-8 bg-white text-black">
                    <div className="container mx-auto px-2">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <div className="text-center md:text-left mx-4">
                                    <div className="flex items-center">
                                        <span className=" text-xl font-black leading-6">
                                            <span className="text-blue-500">
                                                Citizen
                                            </span>
                                            TestPrep
                                        </span>
                                    </div>
                                    <p className="text-xs text-gray-600 mt-2">
                                        We're the top online destination for
                                        preparing for the Canadian Citizenship
                                        Test. We want you to feel confident and
                                        ready on test day. Use our study
                                        materials and resources to pass with a
                                        100% success guarantee.
                                    </p>
                                    <ul>
                                        <li>
                                            {/* <i className="fas fa-envelope mr-2"></i> */}
                                            info@example.com
                                            {/* <i className="fas fa-phone"></i>+1 */}
                                            234 567 890
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="ml-36">
                                <h3 className="text-sm font-semibold mb-2">
                                    About
                                </h3>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Who We Are
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Terms of Service
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Privacy Policy
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Accuracy Commitment
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold mb-2">
                                    Platform
                                </h3>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Contact Us
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Customer Reviews{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            News & Blog{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-sm font-semibold mb-2">
                                    Resources
                                </h3>
                                <ul>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Study Guide
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Practice Tests
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            Diagnostic Test{" "}
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-gray-600 text-xs"
                                        >
                                            FAQs{" "}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="py-2 text-white bg-secondary">
                        <div className="container mx-auto px-4 flex items-center justify-between">
                            <p className="text-sm">
                                © 2024 CitizenTestPrep All rights reserved.
                            </p>
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                >
                                    {/* <i className="fab fa-instagram"></i> */}
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                >
                                    {/* <i className="fab fa-facebook"></i> */}
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                >
                                    {/* <i className="fab fa-twitter"></i> */}
                                </a>
                                <a
                                    href="#"
                                    className="text-white hover:text-gray-300"
                                >
                                    {/* <i className="fab fa-youtube"></i> */}
                                </a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
