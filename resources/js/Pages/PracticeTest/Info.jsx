import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

export default function Info({
    auth,
    chapterId,
    chapters,
    test,
    currentChapter,
    latestScore,
    accorditionIndex,
}) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            isChapterPanelVisible={true}
            chapters={chapters}
            accorditionIndex={accorditionIndex}
        >
            <Head title="Premium" />

            {/* Main Content Section */}
            <section className="py-8 ">
                <div className="container mx-auto px-4 xl:px-40">
                    {/* Grid Layout for Main Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 rounded-2xl overflow-hidden bg-white shadow-sm p-8">
                        {/* Left Part */}
                        <div className="flex flex-col space-y-6">
                            <h1 className="text-2xl sm:text-3xl font-bold">
                                {test.name}
                            </h1>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="flex flex-col space-y-4">
                                    {[
                                        "Perfect for first-timers",
                                        "Based on the official booklet",
                                        "Triple-checked for accuracy",
                                        "The test is 45 minutes long",
                                    ].map((text, index) => (
                                        <div
                                            className={`flex items-start ${
                                                index === 3 ? "md:hidden" : ""
                                            }`}
                                            key={text}
                                        >
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <div className="hidden md:flex flex-col space-y-4">
                                    {[
                                        "15 questions",
                                        "75% passing score",
                                        "30 minutes long",
                                    ].map((text) => (
                                        <div
                                            className="flex items-start"
                                            key={text}
                                        >
                                            <FontAwesomeIcon
                                                icon={faCheck}
                                                className="text-gray-500 text-sm mr-3"
                                            />
                                            <p className="text-gray-600 text-base">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-gray-600 text-base">
                                We maintain high standards to ensure that our
                                practice tests are both accurate and reliable,
                                following strict quality assurance guidelines.
                            </p>

                            <div className="flex flex-col space-y-4 md:space-y-0 md:flex-row md:space-x-4">
                                <Link
                                    href={`/practice-tests/start/${chapterId}${
                                        test.id ? `/${test.id}` : ""
                                    }`}
                                    method="post"
                                    as="button"
                                    className="bg-primary text-white px-8 py-2 rounded-full flex-1"
                                >
                                    Start Now
                                </Link>
                            </div>
                        </div>

                        {/* Right Part */}
                        <div className="hidden md:flex justify-center items-center">
                            <img
                                src="/images/person canada flag.png"
                                alt="Canada Flag"
                                className="w-72 h-80 rounded-tl-[24px]"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Details Section */}
            <section className="py-8 ">
                <div className="container mx-auto px-4 xl:px-40">
                    <div className="flex flex-col md:flex-row rounded-2xl overflow-hidden bg-white shadow-sm">
                        {/* Left Side */}
                        <div className="w-full md:w-1/2 p-8">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                                About this test
                            </h1>
                            <p className="text-gray-600 text-base mb-4">
                                These practice tests are designed to help you
                                master all the chapters of the Discover Canada
                                booklet, covering everything in the official
                                guide. While the real test may differ, you'll be
                                well-prepared to answer all practice test
                                questions after completing the study guide.
                            </p>
                            <p className="text-gray-600 text-base">
                                If you don't pass the first time, you can review
                                the explanations and try again. This will boost
                                your confidence and ensure you're ready to pass
                                the Canadian Citizenship test.
                            </p>
                        </div>

                        {/* Right Side */}
                        <div className="w-full md:w-1/2 p-8">
                            <h1 className="text-2xl sm:text-3xl font-bold mb-6">
                                What to expect on the actual test
                            </h1>
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    {
                                        label: "Questions",
                                        value: currentChapter.questions,
                                    },
                                    {
                                        label: "Allowed to pass",
                                        value: `${currentChapter.mistakes} mistakes`,
                                    },
                                    { label: "Passing Score", value: "85%" },
                                    { label: "Your Score", value: latestScore },
                                ].map(({ label, value }) => (
                                    <div
                                        className="bg-slate-50 p-4 rounded-lg"
                                        key={label}
                                    >
                                        <h1 className="text-sm text-gray-600">
                                            {label}
                                        </h1>
                                        <h2 className="text-lg font-bold">
                                            {value}
                                        </h2>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </AuthenticatedLayout>
    );
}
