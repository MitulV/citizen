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

export default function TopicDetail({ auth, topic, chapters, chapterId }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
            >
                <Head title="Study Guide" />
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
                    <div className="relative min-h-screen flex flex-col items-center justify-center ">
                        <div className="container-fluid bg-slate-100 py-8 md:py-12 md:px-8 lg:px-20 ">
                            <div>
                                <p className="text-blue-400">All lessons</p>
                                <h1 className="text-3xl font-bold mb-4 text-gray-600">
                                    Lesson 1
                                </h1>
                            </div>
                            <div
                                className="m-20"
                                dangerouslySetInnerHTML={{
                                    __html: topic.content,
                                }}
                            />
                        </div>

                        {/* Navigation Bar */}
                        <div className="container-fluid py-4 px-4 md:px-8 lg:px-20 w-full flex justify-between items-center">
                            <Link
                                as="button"
                                method="post"
                                href={`/guide/${chapterId}/${topic.id}/complete`}
                                className="border-primary border-2  text-black px-4 py-2 rounded-full"
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="mr-2"
                                />
                                Previous
                            </Link>
                            <Link
                                as="button"
                                method="post"
                                href={`/guide/${chapterId}/topic/${topic.id}/complete`}
                                className="bg-green-500 text-white px-4 py-2 rounded-full"
                            >
                                <FontAwesomeIcon icon={faCheck} /> Complete
                            </Link>

                            <Link
                                as="button"
                                method="post"
                                href={`/guide/${chapterId}/${topic.id}/complete`}
                                className="border-primary border-2  text-black px-6 py-2 rounded-full flex items-center"
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
            </AuthenticatedLayout>
        </>
    );
}
