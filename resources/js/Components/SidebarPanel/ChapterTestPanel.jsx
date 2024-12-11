import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

export default function ChapterTestPanel({
    chapters,
    collapsed,
    accorditionIndex,
}) {
    const [open, setOpen] = useState(Number(accorditionIndex));
    const [isMobile, setIsMobile] = useState(false);

    const CUSTOM_ANIMATION = {
        mount: { scale: 1 },
        unmount: { scale: 0.9 },
    };

    useEffect(() => {
        if (typeof accorditionIndex === "number") {
            setOpen(accorditionIndex);
        }

        const handleResize = () => {
            setIsMobile(window.innerWidth < 768); // Set mobile state for screens < 768px
        };
        handleResize(); // Check initial screen size
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [accorditionIndex]);

    const handleOpen = (index) => {
        setOpen(open === index ? null : index); // Toggle logic
    };

    return (
        <>
            <Sidebar
                collapsedWidth="0"
                width={isMobile ? "100%" : "285px"} // Full width for mobile
                height="auto"
                collapsed={collapsed}
                backgroundColor="rgb(255,255,255)"
                className="transition-all duration-300"
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
                            animate={CUSTOM_ANIMATION}
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
                                    {chapter.tests.map((test) => (
                                        <Link
                                            replace
                                            preserveState
                                            preserveScroll
                                            href={`/practice-tests/${
                                                chapter.id
                                            }${
                                                test.id ? `/${test.id}` : ""
                                            }?accorditionIndex=${index}`}
                                            key={test.id}
                                        >
                                            <div
                                                className="p-4 bg-slate-50 mt-1 flex justify-between items-start"
                                                key={test.id}
                                            >
                                                <button className="text-base text-gray-800 text-start">
                                                    {test.name}
                                                </button>
                                                {(test.status === "completed" ||
                                                    test.status ===
                                                        "failed") && (
                                                    <FontAwesomeIcon
                                                        icon={
                                                            test.status ===
                                                            "failed"
                                                                ? faTimes
                                                                : faCheck
                                                        }
                                                        className={
                                                            test.status ===
                                                            "completed"
                                                                ? "text-green-600"
                                                                : test.status ===
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
