import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faArrowRight,
    faCircleCheck,
    faFile,
    faCheck,
    faChevronRight,
    faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import EditorShow from "@/Components/EditorShow";
import TheTimeLine from "@/Components/TheTimeLine";
import { useState } from "react";

export default function TopicDetail({
    auth,
    topic,
    chapters,
    chapterId,
    previousTopicId,
    nextTopicId,
    accorditionIndex,
    collapsedFromBackend,
}) {
    const [collapsed, setCollapsed] = useState(collapsedFromBackend === "true");
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
                accorditionIndex={accorditionIndex}
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
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
                <div className="container mx-auto px-2 flex flex-col min-h-screen">
                    {/* Content Area */}
                    <div
                        className="flex-1 bg-gray-100 p-4 no-scrollbar"
                        style={{
                            overflowY: "auto", // Enable scrolling but hide the scrollbar
                        }}
                    >
                        <div className="mb-4">
                            <p className="text-primary flex items-center">
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
                        <div>
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
                                                className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full shadow-lg transform hover:-translate-y-1 transition duration-500 ease-out"
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
                    <div
                        className="sticky bottom-0 px-2 py-4 bg-white border-t"
                        style={{
                            zIndex: 10, // Ensure it stays above other elements
                        }}
                    >
                        <div className="flex justify-between items-center space-x-4">
                            {/* Previous Button */}
                            <Link
                                replace
                                preserveState
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    previousTopicId
                                        ? `/guide/${chapterId}/${previousTopicId}?accorditionIndex=${
                                              chapterId - 1
                                          }&action=prev`
                                        : "#"
                                }
                                className={`border-primary border-2 text-black px-2 py-3 rounded-full ${
                                    !previousTopicId
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={!previousTopicId}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="mr-2"
                                />
                                Prev
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
                                className="bg-green-500 text-white px-2 py-3 rounded-full"
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
                                className={`border-primary border-2 text-black px-2 py-3 rounded-full ${
                                    !nextTopicId || nextTopicId >= 22
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={!nextTopicId || nextTopicId >= 22}
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
