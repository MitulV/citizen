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
    previousFlashcardId,
    nextFlashcardId,
    accorditionIndex,
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
                accorditionIndex={accorditionIndex}
            >
                <Head title="Flashcard Detail" />
                <div className="container mx-auto px-4 flex flex-col min-h-screen">
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
                                <h2 className="text-lg py-4 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-end">
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        icon={faRotate}
                                    />
                                </h2>
                                {/* Front of the card */}
                                <h2 className="text-lg py-20 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-center">
                                    {flashcard.question}
                                </h2>
                            </div>

                            <div>
                                {/* Back of the card */}
                                <h2 className="text-lg py-4 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-end">
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        icon={faRotate}
                                    />
                                </h2>
                                <h2 className="text-lg mt-20 sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-4 text-zinc-600 text-center">
                                    {flashcard.answer}
                                </h2>
                                <div className="text-3xl mt-20 font-semibold mb-4 text-zinc-600 text-left">
                                    <h2 className="py-2">Explanation</h2>
                                    <p className="text-lg text-zinc-500 ">
                                        {flashcard.explanation}
                                    </p>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>
                    {/* Sticky Navigation Bar */}
                    <div
                        className="fixed bottom-0 px-4 py-4 bg-white border-t"
                        style={{
                            zIndex: 10, // Ensure it stays above other elements
                            width: "60%", // Full width to ensure it spans across the screen
                            height: "80px", // Set a fixed height for the navbar
                        }}
                    >
                        <div className="flex justify-between items-center space-x-4">
                            <Link
                                replace
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    previousFlashcardId
                                        ? `/flashcards/${chapterId}/${previousFlashcardId}?action=prev&index=${
                                              chapterId - 1
                                          }&action=prev`
                                        : "#"
                                }
                                className={`border-primary border-2 text-black px-6 py-3 rounded-full ${
                                    !previousFlashcardId
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={!previousFlashcardId}
                                onClick={() => setIsFlipped(false)}
                            >
                                <FontAwesomeIcon
                                    icon={faChevronLeft}
                                    className="mr-2"
                                />
                                Previous
                            </Link>

                            <Link
                                replace
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    nextFlashcardId
                                        ? `/flashcards/${chapterId}/${
                                              flashcard.id
                                          }?complete=true&accorditionIndex=${
                                              chapterId - 1
                                          }`
                                        : "#"
                                }
                                className="bg-green-500 text-white px-6 py-3 rounded-full"
                                onClick={() => setIsFlipped(false)}
                            >
                                <FontAwesomeIcon icon={faCheck} /> Complete
                            </Link>

                            <Link
                                replace
                                preserveState
                                preserveScroll
                                as="button"
                                method="get"
                                href={
                                    nextFlashcardId
                                        ? `/flashcards/${chapterId}/${
                                              flashcard.id
                                          }?complete=true&accorditionIndex=${
                                              chapterId - 1
                                          }`
                                        : "#"
                                }
                                className={`border-primary border-2 text-black px-6 py-3 rounded-full flex items-center ${
                                    !nextFlashcardId
                                        ? "opacity-50 cursor-not-allowed"
                                        : ""
                                }`}
                                disabled={!nextFlashcardId}
                                onClick={() => setIsFlipped(false)}
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
