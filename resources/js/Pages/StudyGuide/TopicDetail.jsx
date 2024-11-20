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
}) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
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
                {topic.name === "The Timeline" ? (
                    <>
                        <TheTimeLine chapter={chapterId} topic={topic} />
                    </>
                ) : (
                    <>
                        {!topic.content && (
                            <div className="ml-4 sm:ml-6 md:ml-10 mt-4">
                                <Link
                                    as="button"
                                    className="bg-primary text-white px-4 sm:px-6 py-2 rounded-full shadow-lg transform hover:-translate-y-1 transition duration-500 ease-out"
                                    href={route("createTopic.create", {
                                        topicId: topic.id,
                                        chapterId,
                                    })}
                                >
                                    Add Content
                                </Link>
                            </div>
                        )}
                        {topic.content && (
                            <div className="container mx-auto flex flex-col items-center justify-center">
                                <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-6 md:py-8">
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
                                    <EditorShow value={topic.content} />
                                </div>

                                {/* Navigation Bar */}
                                <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20 py-4 flex justify-between items-center space-x-4">
                                    <Link
                                        as="button"
                                        method="get"
                                        href={
                                            previousTopicId
                                                ? `/guide/${chapterId}/${previousTopicId}`
                                                : "#"
                                        }
                                        className={`border-primary border-2 text-black px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto ${
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
                                        Previous
                                    </Link>
                                    <Link
                                        as="button"
                                        method="get"
                                        href={`/guide/${chapterId}/${topic.id}?complete=true`}
                                        className="bg-green-500 text-white px-4 py-2 rounded-full w-full sm:w-auto flex items-center justify-center"
                                    >
                                        <FontAwesomeIcon
                                            icon={faCheck}
                                            className="mr-2"
                                        />
                                        Complete
                                    </Link>

                                    <Link
                                        as="button"
                                        method="get"
                                        href={
                                            nextTopicId
                                                ? `/guide/${chapterId}/${topic.id}?complete=true`
                                                : "#"
                                        }
                                        className={`border-primary border-2 text-black px-4 py-2 rounded-full flex items-center justify-center w-full sm:w-auto ${
                                            !nextTopicId
                                                ? "opacity-50 cursor-not-allowed"
                                                : ""
                                        }`}
                                        disabled={!nextTopicId}
                                    >
                                        Next
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className="ml-2"
                                        />
                                    </Link>
                                </div>
                            </div>
                        )}
                    </>
                )}
            </AuthenticatedLayout>
        </>
    );
}
