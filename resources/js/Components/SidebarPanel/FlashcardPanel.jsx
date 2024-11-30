import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
// import { Accordion } from "flowbite-react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
export default function FlashcardPanel({
    chapters,
    collapsed,
    accorditionIndex,
}) {
    const [open, setOpen] = useState(Number(accorditionIndex));
    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    useEffect(() => {
        if (typeof accorditionIndex === "number") {
            setOpen(accorditionIndex);
        }
    }, [accorditionIndex]);

    const handleOpen = (index) => {
        setOpen(open === index ? null : index); // Toggle logic
    };
    return (
        <>
            <Sidebar
                collapsedWidth="0"
                width="285px"
                collapsed={collapsed}
                backgroundColor="rgb(255,255,255)"
            >
                <Menu
                    menuItemStyles={{
                        button: {
                            [`&.active`]: {
                                backgroundColor: "#13395e",
                                color: "#b6c8d9",
                            },
                        },
                    }}
                >
                    {chapters.map((chapter, index) => (
                        <Accordion
                            key={chapter.id}
                            open={open === index} // Control open state
                            className="mb-2 px-4 bg-white"
                        >
                            <AccordionHeader
                                onClick={() => handleOpen(index)} // Open the clicked accordion
                                className={`border-b-0 gray-100 transition-colors ${
                                    open === index
                                        ? "text-blue-500 hover:!text-blue-700"
                                        : ""
                                }`}
                            >
                                <div className="flex items-center">
                                    <div className="mr-3">
                                        {/* Add the icon here */}
                                        <svg
                                            className={`transition-transform duration-500 ${
                                                open !== index
                                                    ? "-rotate-180"
                                                    : "rotate-0"
                                            }`}
                                            width="15"
                                            height="10"
                                            viewBox="0 0 10 7"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M9 5.5L5 1.5L0.999999 5.5"
                                                stroke="#626262"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                    <span className="font-sans text-lg font-normal leading-[28.8px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]">
                                        Chapter {index + 1}
                                    </span>
                                </div>
                            </AccordionHeader>
                            <AccordionBody className="pt-0 text-base font-normal">
                                <div className="text-gray-800 text-start">
                                    <Link
                                        replace
                                        href={`/flashcards/${chapter.id}${
                                            chapter.first_flashcard_id
                                                ? `/${chapter.first_flashcard_id}`
                                                : ""
                                        }?accorditionIndex=${index}`}
                                        key={chapter.first_flashcard_id}
                                    >
                                        <div
                                            className="p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                            key={chapter.first_flashcard_id}
                                        >
                                            <button className="text-base text-gray-800 text-start">
                                                {`Flashcard`}
                                            </button>
                                            {chapter.allFlashcardsCompleted && (
                                                <FontAwesomeIcon
                                                    icon={
                                                        chapter.allFlashcardsCompleted
                                                            ? faCheck
                                                            : ""
                                                    }
                                                    className={
                                                        chapter.allFlashcardsCompleted
                                                            ? "text-green-600"
                                                            : ""
                                                    }
                                                />
                                            )}
                                        </div>
                                    </Link>
                                </div>
                            </AccordionBody>
                            <hr></hr>
                        </Accordion>
                    ))}
                </Menu>
            </Sidebar>
        </>
    );
}
