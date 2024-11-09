import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {
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
                        <TheTimeLine chapter={chapterId} />
                    </>
                ) : (
                    <>
                        {!topic.content && (
                            <div className="ml-10">
                                <Link
                                    as="button"
                                    className="bg-primary text-white px-6 py-2 rounded-full shadow-xl transform hover:-translate-y-1 transition duration-500 ease-out"
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
                            <div className="container mx-auto relative flex flex-col items-center justify-center ">
                                <div className="container-fluid py-8 md:py-6 md:px-8 lg:px-20 ">
                                    <div>
                                        <p className="text-primary">
                                            <FontAwesomeIcon
                                                icon={faChevronLeft}
                                            />{" "}
                                            <span className="text-lg">
                                                View all chapters
                                            </span>
                                        </p>
                                        <h1 className="text-3xl font-bold mb-4 text-gray-600">
                                            Lesson {topic.id}
                                        </h1>
                                    </div>

                                    <EditorShow value={topic.content} />
                                </div>

                                {/* Navigation Bar */}
                                <div className="container mx-auto py-4 px-4 md:px-8 lg:px-20 w-full flex justify-between items-center">
                                    <Link
                                        as="button"
                                        method="get"
                                        href={
                                            previousTopicId
                                                ? `/guide/${chapterId}/${previousTopicId}`
                                                : "#"
                                        }
                                        className={`border-primary border-2 text-black px-4 py-2 rounded-full ${
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
                                        className="bg-green-500 text-white px-4 py-2 rounded-full"
                                    >
                                        <FontAwesomeIcon icon={faCheck} />{" "}
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
                                        className={`border-primary border-2 text-black px-6 py-2 rounded-full flex items-center ${
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
