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
                        </Accordion>
                    ))}
                </Menu>
            </Sidebar>
        </>
    );
}
