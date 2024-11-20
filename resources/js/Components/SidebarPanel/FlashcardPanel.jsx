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
                                Chapter {index + 1}
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
                        </Accordion>
                    ))}
                </Menu>
            </Sidebar>
        </>
    );
}
