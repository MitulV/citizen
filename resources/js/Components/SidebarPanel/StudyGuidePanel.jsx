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
                <Menu>
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
                                    {chapter.topics.map((topic) => (
                                        <Link
                                            replace
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
                        </Accordion>
                    ))}
                </Menu>
            </Sidebar>
        </>
    );
}
