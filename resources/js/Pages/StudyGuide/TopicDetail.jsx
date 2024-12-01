import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCircleCheck,
    faFile,
    faCheck,
    faTimes,
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import EditorShow from "@/Components/EditorShow";
import TheTimeLine from "@/Components/TheTimeLine";

export default function TopicDetail({
    auth,
    topic,
    chapters,
    chapterId,
    previousTopicId,
    nextTopicId,
    accorditionIndex,
}) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
                accorditionIndex={accorditionIndex}
            >
                <Head>
                    <title>
                        Study Guide - Canadian Citizenship Test -
                        CitizenTestPrep
                    </title>
                    <meta
                        name="description"
                        content="Access our Study Guide for the Canadian Citizenship Test to enhance your preparation and confidence!"
                    />
                </Head>
                <div className="container mx-auto px-4  flex flex-col min-h-screen">
                    {/* Content Area */}
                    <div className="container mx-auto px-4 ">
                        <div className="mb-4">
                            <p className="text-primary flex items-center ">
                                <Link href={route("dashboard")}>
                                    <FontAwesomeIcon
                                        icon={faChevronLeft}
                                        className="mr-2"
                                    />
                                    <span className="text-base sm:text-lg">
                                        View all chapters
                                    </span>
                                </Link>
                            </p>
                            <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-700">
                                Chapter {chapterId}
                            </h1>
                        </div>

                        {/* Scrollable Box */}
                        <div
                            className="bg-gray-100   p-4"
                            style={{
                                height: "800px", // Fixed height for the box
                                overflowY: "auto", // Enable vertical scrolling
                            }}
                        >
                            {topic.name === "The Timeline" ? (
                                <TheTimeLine
                                    chapter={chapterId}
                                    topic={topic}
                                />
                            ) : (
                                <>
                                    {!topic.content && (
                                        <div className="text-center">
                                            <Link
                                                as="button"
                                                className="bg-primary text-white px-4 sm:px-6  py-2 rounded-full shadow-lg transform hover:-translate-y-1 transition duration-500 ease-out"
                                                href={route(
                                                    "createTopic.create",
                                                    {
                                                        topicId: topic.id,
                                                        chapterId,
                                                    }
                                                )}
                                            >
                                                Add Content
                                            </Link>
                                        </div>
                                    )}
                                    {topic.content && (
                                        <EditorShow value={topic.content} />
                                    )}
                                </>
                            )}
                        </div>
                    </div>

                    {/* Sticky Navigation Bar */}
                    {/* Sticky Navigation Bar */}
                    <div
                        className="mx-8 border-t sticky bottom-0 px-4 py-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 bg-white"
                        style={{
                            zIndex: 10, // Ensure it stays above other elements
                        }}
                    >
                        <div className="flex flex-row justify-between items-center space-x-4">
                            {/* Previous Button */}
                            <Link
                                replace
                                preserveState
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    previousTopicId
                                        ? `/guide/${chapterId}/${
                                              topic.id
                                          }?accorditionIndex=${
                                              chapterId - 1
                                          }&action=prev`
                                        : "#"
                                }
                                className={`border-primary border-2 text-black px-6 py-3 rounded-full flex items-center justify-center w-full sm:w-auto ${
                                    !previousTopicId || topic.id == 1
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={!previousTopicId || topic.id == 1}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="mr-2"
                                />
                                Previous
                            </Link>

                            {/* Complete Button */}
                            <Link
                                replace
                                preserveState
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    nextTopicId && topic.id <= 22
                                        ? `/guide/${chapterId}/${
                                              topic.id
                                          }?complete=true&accorditionIndex=${
                                              chapterId - 1
                                          }`
                                        : "#"
                                }
                                className="bg-green-500 text-white px-6 py-3 rounded-full flex items-center justify-center w-full sm:w-auto"
                            >
                                <FontAwesomeIcon
                                    icon={faCheck}
                                    className="mr-2"
                                />
                                Complete
                            </Link>

                            {/* Next Button */}
                            <Link
                                replace
                                preserveState
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    nextTopicId && topic.id <= 22
                                        ? `/guide/${chapterId}/${
                                              topic.id
                                          }?complete=true&accorditionIndex=${
                                              chapterId - 1
                                          }`
                                        : "#"
                                }
                                className={`border-primary border-2 text-black px-6 py-3 rounded-full flex items-center justify-center w-full sm:w-auto ${
                                    nextTopicId >= 22
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={nextTopicId >= 22}
                            >
                                Next
                                <FontAwesomeIcon
                                    icon={faChevronRight}
                                    className="ml-2"
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
