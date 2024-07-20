import React, { useEffect, useState } from "react";
import { Link } from "@inertiajs/react";
import LoginHeader from "@/Components/LoginHeader";
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

import StudyGuidePanel from "@/Components/SidebarPanel/StudyGuidePanel";
import ChapterTestPanel from "@/Components/SidebarPanel/ChapterTestPanel";
import FlashcardPanel from "@/Components/SidebarPanel/FlashcardPanel";
import CheatSheetPanel from "@/Components/SidebarPanel/CheatSheetPanel";

export default function Authenticated({
    user,
    children,
    isChapterPanelVisible = false,
    chapterId,
    topicId,
    chapters,
}) {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed(!collapsed);
    };

    useEffect(() => {
        // Select all li elements with the class css-1t8x7v1 and remove that class
        const elements = document.querySelectorAll("li.css-1t8x7v1");
        elements.forEach((element) => {
            element.classList.remove("css-1t8x7v1");
        });
    }, []); // Empty dependency array means this runs once after the initial render

    const { url } = usePage();

    return (
        <div>
            <LoginHeader user={user} />
            <div className="relative flex h-full">
                <Sidebar
                    collapsedWidth="0"
                    width="176px"
                    collapsed={collapsed}
                    backgroundColor="rgb(254,117,62)"
                >
                    <Menu>
                        <MenuItem className="w-full m-2 mt-10" component="span">
                            <Link href={route("dashboard")}>
                                <button
                                    className={`rounded-full w-40 px-4 py-2 ${
                                        url.startsWith("/guide")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faBookOpen}
                                        className="mr-2"
                                    />
                                    Study Guide
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("simulation.test")}>
                                <button
                                    className={`rounded-full w-40 px-4 py-2 ${
                                        url.startsWith("/simulation")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faCube}
                                        className="mr-2"
                                    />
                                    Simulations
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("practice.test")}>
                                <button
                                    className={`rounded-full w-40 px-4 py-2 ${
                                        url.startsWith("/practice")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faFileLines}
                                        className="mr-2"
                                    />
                                    Chapter Tests
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("flashcard")}>
                                <button
                                    className={`rounded-full w-40 px-4 py-2 ${
                                        url.startsWith("/flashcard")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faImage}
                                        className="mr-2"
                                    />
                                    Flashcards
                                </button>
                            </Link>
                        </MenuItem>
                        <MenuItem className="w-full m-2" component="span">
                            <Link href={route("cheatSheets")}>
                                <button
                                    className={`rounded-full w-40 px-4 py-2 ${
                                        url.startsWith("/cheat-sheets")
                                            ? "bg-white text-primary"
                                            : "text-white hover:bg-white hover:text-primary"
                                    }`}
                                >
                                    <FontAwesomeIcon
                                        icon={faGem}
                                        className="mr-2"
                                    />
                                    Cheat Sheets
                                </button>
                            </Link>
                        </MenuItem>
                    </Menu>
                </Sidebar>
                {isChapterPanelVisible && url.startsWith("/guide") && (
                    <StudyGuidePanel
                        chapters={chapters}
                        collapsed={collapsed}
                    />
                )}

                {isChapterPanelVisible && url.startsWith("/practice-tests") && (
                    <ChapterTestPanel
                        chapters={chapters}
                        collapsed={collapsed}
                    />
                )}

                {isChapterPanelVisible && url.startsWith("/flashcards") && (
                    <FlashcardPanel chapters={chapters} collapsed={collapsed} />
                )}

                {isChapterPanelVisible && url.startsWith("/cheat-sheets") && (
                    <CheatSheetPanel collapsed={collapsed} />
                )}

                <button
                    onClick={toggleSidebar}
                    className={`absolute z-10 top-5 
                     ${
                         collapsed
                             ? "left-0 ml-0"
                             : isChapterPanelVisible
                             ? "left-64  ml-64"
                             : "left-44 ml-0"
                     } 
                      transform rotate-180 p-1 w-8 h-8 bg-white rounded-l-full transition-all duration-300 border border-gray-200 shadow-sm hover:shadow-lg`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="feather feather-chevron-left"
                    >
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <main>{children}</main>
            </div>
        </div>
    );
}
