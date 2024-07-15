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
import ReactCardFlip from "react-card-flip";
import { useState } from "react";

export default function FlashcardDetail({
    auth,
    flashcard,
    chapters,
    chapterId,
}) {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);
    };
    return (
        <>
            <AuthenticatedLayout
                user={auth.user}
                isChapterPanelVisible={true}
                chapters={chapters}
            >
                <Head title="Flashcard Detail" />
                <section className="mx-4 md:mx-8 lg:mx-16 xl:mx-20 bg-slate-50 py-12 md:py-12 px-4 md:px-8 lg:px-16 xl:px-20">
                    <div className="flex flex-col items-center">
                        <h1 className="text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 text-zinc-600">
                            The official languages of Canada are English and
                            French.
                        </h1>
                        <h2 className="text-lg py-36 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-center">
                            What are the official languages of Canada?
                        </h2>

                        <button
                            onClick={handleClick}
                            className="mt-4 px-10 mx-8 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-700"
                        >
                            Next
                        </button>
                    </div>
                </section>

                <div className=" min-h-screen flex flex-col items-center justify-center ">
                    <div className="container-fluid bg-slate-100 mx-96 py-8 md:py-12 md:px-8 lg:px-20 h-96 w-96">
                        <div>
                            <p className="text-blue-400">All Flashcards</p>
                            <h1 className="text-3xl font-bold mb-4 text-gray-600 ">
                                {`Flashcard ${flashcard.id}`}
                            </h1>
                            <ReactCardFlip
                                isFlipped={isFlipped}
                                flipDirection="horizontal"
                            >
                                <div>
                                    {/* Front of the card */}
                                    This is the front of the card.
                                    <button onClick={handleClick}>
                                        Click to flip
                                    </button>
                                </div>

                                <div>
                                    {/* Back of the card */}
                                    This is the back of the card.
                                    <button onClick={handleClick}>
                                        Click to flip
                                    </button>
                                </div>
                            </ReactCardFlip>
                        </div>
                    </div>

                    {/* Navigation Bar */}
                    <div className="container-fluid py-4 px-4 md:px-8 lg:px-20 w-full flex justify-between items-center">
                        <Link
                            as="button"
                            method="post"
                            href={`/flashcards/${chapterId}/${flashcard.id}/complete`}
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
                            href={`/guide/${chapterId}/flashcard/${flashcard.id}/complete`}
                            className="bg-green-500 text-white px-4 py-2 rounded-full"
                        >
                            <FontAwesomeIcon icon={faCheck} /> Complete
                        </Link>

                        <Link
                            as="button"
                            method="post"
                            href={`/guide/${chapterId}/${flashcard.id}/complete`}
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
            </AuthenticatedLayout>
        </>
    );
}
