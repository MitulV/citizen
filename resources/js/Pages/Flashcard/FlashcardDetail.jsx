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
    collapsedFromBackend,
}) {
    const [collapsed, setCollapsed] = useState(collapsedFromBackend === "true");
    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

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
                collapsed={collapsed}
                toggleSidebar={toggleSidebar}
            >
                <Head title="Flashcard Detail" />
                <div
                    className="container mx-auto px-4 flex flex-col min-h-screen xl:px-40"
                    style={{ overflow: "hidden" }}
                >
                    <div className="flex flex-col items-center">
                        <h5 className="text-base sm:text-lg md:text-lg lg:text-lg xl:text-lg text-zinc-600 mt-5 lg:mt-20 mb-20">
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
                                <h2 className="text-lg  md:text-xl lg:text-xl xl:text-xl font-semibold  text-zinc-600 text-end">
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        icon={faRotate}
                                    />
                                </h2>
                                {/* Front of the card */}
                                <h2 className="text-lg   md:text-xl lg:text-xl xl:text-xl font-semibold  text-zinc-600 ">
                                    {flashcard.question}
                                </h2>
                            </div>

                            <div>
                                {/* Back of the card */}
                                <h2 className="text-lg  md:text-xl lg:text-xl xl:text-xl font-semibold  text-zinc-600 text-end">
                                    <FontAwesomeIcon
                                        onClick={handleClick}
                                        icon={faRotate}
                                    />
                                </h2>
                                <h2 className="text-xl   md:text-xl lg:text-xl xl:text-xl font-semibold  text-zinc-600 text-center">
                                    {flashcard.answer}
                                </h2>
                                <div className="text-xl  font-semibold mb-4 text-zinc-600 text-left xl:px-40 ">
                                    <h2 className="py-2">Explanation</h2>
                                    <p className="text-base text-zinc-500 ">
                                        {flashcard.explanation}
                                    </p>
                                </div>
                            </div>
                        </ReactCardFlip>
                    </div>
                </div>
                <div
                    className="container mx-auto sticky bottom-0 px-2 py-4 bg-white border-t "
                    style={{ zIndex: 10 }}
                >
                    <div className="flex flex-row md:flex-row justify-between items-center space-y-0 md:space-y-0 w-full ">
                        {/* Previous Button */}
                        <Link
                            replace
                            preserveState
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
                            className={`border-primary border-2 text-black px-2 py-3 rounded-full w-auto md:px-4 ${
                                !previousFlashcardId
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            disabled={!previousFlashcardId}
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
                            onClick={isFlipped ? handleClick : undefined}
                            href={
                                nextFlashcardId
                                    ? `/flashcards/${chapterId}/${
                                          flashcard.id
                                      }?complete=true&accorditionIndex=${
                                          chapterId - 1
                                      }`
                                    : "#"
                            }
                            className="bg-green-500 text-white px-2 py-3 rounded-full  w-auto md:px-4"
                        >
                            <FontAwesomeIcon icon={faCheck} className="mr-2" />
                            Complete
                        </Link>

                        {/* Next Button */}
                        <Link
                            replace
                            preserveState
                            preserveScroll
                            as="button"
                            method="get"
                            onClick={isFlipped ? handleClick : undefined}
                            href={
                                nextFlashcardId
                                    ? `/flashcards/${chapterId}/${
                                          flashcard.id
                                      }?complete=true&accorditionIndex=${
                                          chapterId - 1
                                      }`
                                    : "#"
                            }
                            className={`border-primary border-2 text-black px-2 py-3 rounded-full flex items-center w-auto md:px-4 ${
                                !nextFlashcardId || flashcard.id >= 368
                                    ? "opacity-50 cursor-not-allowed"
                                    : ""
                            }`}
                            disabled={
                                !nextFlashcardId || nextFlashcardId >= 368
                            }
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
