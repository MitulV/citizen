import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Sidebar, Menu } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
export default function StudyGuidePanel({
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
        if (typeof accorditionIndex === "number" && open !== accorditionIndex) {
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
                <Menu>
                    {chapters.map((chapter, index) => (
                        <Accordion
                            key={chapter.id}
                            animate={
                                open === index ? CUSTOM_ANIMATION : undefined
                            }
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
                                    {chapter.topics.map((topic) => (
                                        <Link
                                            replace
                                            preserveState
                                            preserveScroll
                                            href={`/guide/${chapter.id}${
                                                topic.id ? `/${topic.id}` : ""
                                            }?accorditionIndex=${index}`}
                                            key={topic.id}
                                        >
                                            <div className="p-4 bg-slate-50 mt-1 flex justify-between items-start">
                                                <button className="text-base text-gray-800 text-start">
                                                    {topic.name}
                                                </button>
                                                {(topic.status ===
                                                    "completed" ||
                                                    topic.status ===
                                                        "failed") && (
                                                    <FontAwesomeIcon
                                                        icon={
                                                            topic.status ===
                                                            "failed"
                                                                ? faTimes
                                                                : faCheck
                                                        }
                                                        className={
                                                            topic.status ===
                                                            "completed"
                                                                ? "text-green-600"
                                                                : topic.status ===
                                                                  "failed"
                                                                ? "text-red-600"
                                                                : "text-gray-400"
                                                        }
                                                    />
                                                )}
                                            </div>
                                        </Link>
                                    ))}
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
