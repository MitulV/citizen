import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link } from "@inertiajs/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faRotate } from "@fortawesome/free-solid-svg-icons";
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
                        <h5 className="text-xl sm:text-xl md:text-3xl lg:text-4xl xl:text-xl mb-4 text-zinc-600">
                            Flashcards are an excellent way to challenge
                            yourself. Guess the answer, then click to{" "}
                            <FontAwesomeIcon icon={faRotate} /> reveal the
                            correct answers.
                        </h5>

                        <ReactCardFlip
                            isFlipped={isFlipped}
                            flipDirection="horizontal"
                        >
                            <div>
                                {/* Front of the card */}
                                <h2 className="text-lg py-36 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-center">
                                    {flashcard.question}
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        icon={faRotate}
                                    />
                                </h2>
                            </div>

                            <div>
                                {/* Back of the card */}
                                <h2 className="text-lg py-36 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-center">
                                    {flashcard.answer}
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        icon={faRotate}
                                    />
                                </h2>
                            </div>
                        </ReactCardFlip>
                    </div>
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
                </section>
            </AuthenticatedLayout>
        </>
    );
}
