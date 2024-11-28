import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
import Footer from "@/Components/Footer";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePage } from "@inertiajs/react";
import {
    faBookOpen,
    faCube,
    faFileLines,
    faImage,
    faGem,
    faCheck,
    faTimes,
} from "@fortawesome/free-solid-svg-icons";
// import { Accordion } from "flowbite-react";
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
                height="auto"
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
                                                stroke-width="2"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
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
