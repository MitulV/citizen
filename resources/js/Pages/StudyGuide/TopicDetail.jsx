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

export default function TopicDetail({ auth, topic, chapters }) {
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
            >
                <Head title="Study Guide" />
                <div className="relative min-h-screen flex flex-col items-center justify-center ">
                    <div className="container-fluid bg-slate-100 py-8 md:py-12 md:px-8 lg:px-20 ">
                        <div>
                            <p className="text-blue-400">All lessons</p>
                            <h1 className="text-3xl font-bold mb-4 text-gray-600">
                                Lesson 1
                            </h1>
                        </div>
                        <div className="mb-8">
                            <img
                                src="https://www.citizentest.ca/wp-content/uploads/2024/01/citizentest_chapter_image_Oath_of_citizenship-1.jpg"
                                className="w-full"
                            />
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold mb-4 text-gray-800">
                                Understanding the Oath
                            </h1>
                            <p className="text-gray-600">
                                embodying the collective identity of all
                                Canadians, rather than to artifacts like a
                                constitution, a symbol like a flag, or a
                                geopolitical entity like a nation. Within our
                            </p>
                        </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="container-fluid py-4 px-4 md:px-8 lg:px-20 w-full flex justify-between items-center">
                        <button className="border-primary border-2  text-black px-4 py-2 rounded-full">
                            <FontAwesomeIcon
                                icon={faChevronLeft}
                                className="mr-2"
                            />
                            Previous
                        </button>
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full">
                            <FontAwesomeIcon icon={faCheck} /> Complete
                        </button>
                        <button className="border-primary border-2  text-black px-6 py-2 rounded-full flex items-center">
                            Next
                            <FontAwesomeIcon
                                icon={faChevronRight}
                                className="ml-2"
                            />
                        </button>
                    </div>
                </div>
            </AuthenticatedLayout>
        </>
    );
}
